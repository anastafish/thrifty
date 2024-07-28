import ProfileForm from "@/components/profileForm";
import {auth} from '@/auth'
import { redirect } from "next/navigation";

const Profile = async() => {   
    const session = await auth()
    if (!session) {
        redirect('/')
    }

    return (
        <div className='flex flex-col items-center justify-center gap-5'>
            <ProfileForm session={session}/>
        </div>
    )
        
}

export default Profile;