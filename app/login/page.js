import { auth } from "@/auth"
import {redirect} from 'next/navigation'
import Items from '@/components/items';


export default async function SignIn() {
    const session = await auth()

    if (session) return redirect("/")

  return (
    <div className='flex items-center justify-center'>       
      <Items />
    </div>
  )
} 