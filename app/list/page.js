import ItemForm from '@/components/itemForm'
import {auth} from '@/auth'
import {redirect} from 'next/navigation'

export default async function List() {

    const session = await auth()
    if (!session) {
        redirect('/')
    }

    return (
        <div>
            <ItemForm session={session}/>
        </div>
    )
}