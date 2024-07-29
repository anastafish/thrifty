"use client"

import getSingleItem from "@/app/lib/getSingleItem";
import { useEffect, useState } from "react";
import getUser from "@/app/lib/getUser";
import Image from "next/image";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import avatar from "../app/assets/avatar.png";
import deleteItem from "@/app/lib/deleteItem";
import { useRouter } from 'next/navigation'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Spinner} from "@nextui-org/react";


export default function SingleItem({id, session}) {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const router = useRouter()
    const [item, setItem] = useState([]);
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        getSingleItem(id).then((data) => {
            setItem(data[0])
        })
        getUser(session.user.email).then(data => {
            setCurrentUser(data)
        })
        
    }, [])
    if (!item  || item.length === 0) return (
        <div className="flex items-center justify-center">
            <Spinner size="lg" />
        </div>
    )
    return (
        <div id={item.id} className="flex flex-col items-center gap-2 justify-center p-5">
            <Image alt="itme_img" src={`https://kujxhgudslinapnnligd.supabase.co/storage/v1/object/public/items/images/${item.id}.jpg`} width={200} height={200} />
            <h1 className="text-2xl">{item.title}</h1>
            <p className="text-2xl">{item.size}</p>
            <h1 className="text-2xl">{item.color}</h1>
            <h2 className="text-2xl">{item.condition}</h2>
            <p className="text-2xl">{item.price}</p>
            <p className="text-2xl">{item.description}</p>
            <div>
                {currentUser && currentUser.phone !== item.seller_number ? <FloatingWhatsApp 
                    phoneNumber={item.seller_number} 
                    accountName="Seller" 
                    avatar={avatar.src} 
                    chatMessage="Hello there!"
                    /> :                    
                    <Button onPress={onOpen} color="danger">
                        Delete Listing
                    </Button>
                    }
                    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Delete Listing</ModalHeader>
              <ModalBody>
                <h1>Do you want to delete this item?</h1>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  No
                </Button>
                <Button onClick={() => {
                    deleteItem(item.id)
                    router.push('/shop')    
                    }} color="primary" onPress={onClose}>
                  Yes
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
            </div>
            </div>
    )
}
