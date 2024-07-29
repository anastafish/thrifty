import SingleItem from "@/components/singleItem"
import {auth} from '@/auth'

export default async function Item({params}) {
    const session = await auth()
    return (
        <div>
            <SingleItem id={params.id} session={session}/>
        </div>
    )
}