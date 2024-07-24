import { signIn, signOut, auth } from "@/auth"
 
export default async function SignIn() {
    const session = await auth()

    if (session) return (
        <div>
            <h1>Welcome {session.user.name}</h1>
            <form
            action={async () => {
                "use server"
                await signOut()
            }}
            >
      <button type="submit">Sign Out</button>
    </form>
        </div>
    )

  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
  )
} 