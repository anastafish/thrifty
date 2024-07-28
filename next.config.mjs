/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns:[
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
          pathname:'**'

        },
        {
          protocol: 'https',
          hostname: 'kujxhgudslinapnnligd.supabase.co',
          pathname:'**'}
      ]
    },
};

export default nextConfig;
