import ItemForm from '@/components/itemForm'
import {auth} from '@/auth'
import {redirect} from 'next/navigation'
import getUser from '../lib/getUser'

export default async function Sell() {

    const session = await auth()
    const user = await getUser(session.user.email)

    if (!session) {
        redirect('/')
    }

    if (!user.phone) {
        console.log(user)
        redirect('/profile')
    }


    return (
        <div>
            <ItemForm session={session}/>
        </div>
    )
}