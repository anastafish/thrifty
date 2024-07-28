"use client"

import getSingleItem from "@/app/lib/getSingleItem";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Spinner } from "@nextui-org/react";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import avatar from "../app/assets/avatar.png";

export default function SingleItem({id}) {
    const [item, setItem] = useState([]);
    useEffect(() => {
        getSingleItem(id).then((data) => {
            setItem(data[0])
        })
    }, [])
    if (item.length === 0) return (
        <div className="flex items-center justify-center">
            <Spinner size="lg" />
        </div>
    )
    return (
        <div id={item.id} className="flex flex-col items-center justify-center p-5">
            <Image alt="itme_img" src={`https://kujxhgudslinapnnligd.supabase.co/storage/v1/object/public/items/images/${item.id}.jpg`} width={200} height={200} />
            <h1 className="text-2xl">{item.title}</h1>
            <p className="text-2xl">{item.size}</p>
            <h1 className="text-2xl">{item.color}</h1>
            <h2 className="text-2xl">{item.condition}</h2>
            <p className="text-2xl">{item.price}</p>
            <p className="text-2xl">{item.description}</p>
            <div>
                <FloatingWhatsApp 
                    phoneNumber={item.seller_number} 
                    accountName="Seller" 
                    avatar={avatar.src} 
                    chatMessage="Hello there!"
                    />
            </div>
            </div>
    )
}
