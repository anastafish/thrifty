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
        setPhone(e.target.value);
    }

    useEffect(()=> {
        getUser(session.user.email).then(data => {
            setPhone(data.phone)
        })
    },[])

    return (
        <div className='flex flex-col items-center justify-center gap-5'>
            <ToastContainer />
            <Image src={session.user.image} alt="profile image" width={200} height={200} />
            <Input isDisabled value={session.user.name}/>
            <Input isDisabled value={session.user.email}/>
            <Input placeholder='05********' type="phone" onChange={handleChange} value={phone}/>
            <Button 
                onClick={() => {
                    if (!phone || phone === '') return
                    updatePhone(session.user.email, phone)
                    notify()    
                    }}>
                    Update
                    </Button>
        </div>
    )
}

export default ProfileForm;