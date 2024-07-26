"use client"

import { useState } from "react"
import newItem from "@/app/lib/newItem"
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import { Select, SelectItem } from "@nextui-org/react";

export default function ItemForm({session}) {

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"]

    const [item, setItem] = useState({
        title:"",
        brand:"",
        size:"",
        color:"",
        condition:"",
        price:"",
        description:"",
        seller_id:session.user.id,
        image_url:"",      
      })
      const handleChange = (e) => {
        setItem({
          ...item,
          [e.target.name]: e.target.value,
        })
        console.log(item)
        console.log(session)
      }
      
      return (
        <form className="flex flex-col items-center justify-center gap-5">
          <Input 
            type="text"
            name="title"
            placeholder="Title"
            value={item.title}
            onChange={handleChange}
          />
          <Input 
            type="text"
            name="brand"
            placeholder="Brand"
            value={item.brand}
            onChange={handleChange}
          />
           <Select
           name="size"
          label="Size"
          variant="bordered"
          placeholder="Select the Size"
          selectedKeys={[item.size]}
          className="max-w-xs"
          onChange={handleChange}
      >
        {sizes.map((size) => (
          <SelectItem key={size}>
            {size}
          </SelectItem>
        ))}
      </Select>
          <Input 
            type="text"
            name="color"
            placeholder="Color"
            value={item.color}
            onChange={handleChange}
          />
          <Input 
            type="text"
            name="condition"
            placeholder="Condition"
            value={item.condition}
            onChange={handleChange}
          />
          <Input
          type="number"
          name="price"
          value={item.price}
          onChange={handleChange}
          placeholder="0.00"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
        />
          <Input 
            type="text"
            name="description"
            placeholder="Description"
            value={item.description}
            onChange={handleChange}
          />
      <Button
        type="submit"
        color="success"
        onClick={(e) => {
          e.preventDefault()
          newItem(item)  
        }}
      >
        List Now
      </Button>
    </form>
      )
}