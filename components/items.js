"use client"

import getItems from "@/app/lib/getItems";
import { useEffect, useState } from "react";
import Item from "./item";
import {Spinner} from "@nextui-org/react";


export default function Items() {
    const [items, setItems] = useState([]); 

    useEffect(() => {
        getItems().then((data) => {
            setItems(data)
        })
    }, [])
    
    if (items.length === 0) return <Spinner size="lg" />

    return (
        <div className="flex p-5 gap-5 flex-wrap items-center justify-center">
            {items.slice().reverse().map((item) => {
                return (
                    <Item key={item.id} item={item}/>
                )
            })}
        </div>
    )
}