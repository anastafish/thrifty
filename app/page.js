import { auth, signIn } from "@/auth";
import Hero from "@/components/Hero";
import getUser from "./lib/getUser";


export default async function Home() {
  const session = await auth()

  return (
    <div>
      <Hero session={session}/>
    </div>
     );
}
