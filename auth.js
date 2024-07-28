import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import supabase from "./app/lib/connectDB"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  redirect: {
    callback: '/profile',
    home: '/profile',
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "google") {
        try {
          // Check if user already exists in Supabase
          const { data: existingUser, error: fetchError } = await supabase
            .from('users')
            .select('id')
            .eq('email', user.email)
            .single()

          if (fetchError && fetchError.code !== 'PGRST116') {
            console.error('Error fetching user:', fetchError)
            return false // Prevent sign in
          }

          if (!existingUser) {
            // User doesn't exist, so create a new one
            const { data, error: insertError } = await supabase
              .from('users')
              .insert({
                email: user.email,
                name: user.name,
                avatar_url: user.image,
                id: account.providerAccountId,
              })

            if (insertError) {
              console.error('Error creating user:', insertError)
              return false // Prevent sign in
            }

            console.log('New user created:', user.email)
          } else {
            console.log('Existing user signed in:', user.email)
          }

          return true // Allow sign in
        } catch (error) {
          console.error('Unexpected error:', error)
          return false // Prevent sign in
        }
      }

      return true // Allow sign in for other providers
    },
    jwt({ token, user }) {
      if (user) { // User is available during sign-in
        token.id = user.id
      }
      return token
    },
    session({ session, token }) {
      session.user.id = token.id
      return session
    },
  },
})