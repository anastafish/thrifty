import { redirect } from 'next/navigation'
import { auth } from "@/auth";
import Items from '@/components/items';

export default async function Home() {

  const session = await auth()
  return (
    <div className='flex items-center justify-center'>    
        <Items/>   
    </div>
     );
}
