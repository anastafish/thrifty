import supabase from "./lib/connectDB";


export default function Home() {

  const getUser = async() => {
    const { data: { user } } = await supabase.auth.getUser()
    console.log(user)
  } 

  getUser()

  return (
    <div>
    </div>
     );
}
