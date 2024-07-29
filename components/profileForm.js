"use client"

import updatePhone from "@/app/lib/updatePhone";
import { useState, useEffect } from "react";
import { Input, Button } from "@nextui-org/react";
import Image from 'next/image';
import getUser from "@/app/lib/getUser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfileForm = ({session}) => {

    const notify = () => toast.success("Phone Number Updated!");
    const [phone, setPhone] = useState('');

    const handleChange = (e) => {
        if (e.target.value.length > 9) return
        setPhone(e.target.value);
    }

    useEffect(()=> {
        getUser(session.user.email).then(data => {
            if (!data.phone) {
                toast.error('Update phone number before listing a new item!')
            }
            setPhone(data.phone.substring(3))
        })
    },[])

    return (
        <div className='flex flex-col items-center justify-center gap-5'>
            <ToastContainer />
            <Image className="rounded-medium" src={session.user.image} alt="profile image" width={150} height={150} />
            <Input label="User Name" isDisabled value={session.user.name}/>
            <Input label="Email" isDisabled value={session.user.email}/>
            <Input 
                label="Phone Number"
                placeholder='5********' 
                type="number"
                maxLength="9" 
                onChange={handleChange} 
                value={phone}
                inputMode="numeric" 
                pattern="[0-9]*"
                />
            <Button 
                onClick={() => {
                    if (!phone || phone.length !== 9 || phone[0] !== '5') {
                        toast.error('Invalid phone number!')
                        return
                    }
                    updatePhone(session.user.email, '966'+phone)
                    notify()    
                    }}>
                    Update
                    </Button>
        </div>
    )
}

export default ProfileForm;