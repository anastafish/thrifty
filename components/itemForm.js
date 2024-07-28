"use client"

import { useState } from "react"
import newItem from "@/app/lib/newItem"
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import { Select, SelectItem } from "@nextui-org/react";
import {useRouter} from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uploadFile from "@/app/lib/uploadFile";

export default function ItemForm({session}) {

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"]
  const conditions = ["New with tags", "New without tags", "Like new", "Gently used", "noticable wear"]
  const router = useRouter()
  const notify = () => toast.error("Fill all the fields");

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
      }

      const [file, setFile] = useState(null)

      const handleFileChange = (e) => {
        setFile(e.target.files[0])
      }
  
      
      return (
        <form className="flex flex-col items-center justify-center gap-5">
          <ToastContainer />
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
          <Select
           name="condition"
          label="Condition"
          variant="bordered"
          placeholder="Select the Condition"
          selectedKeys={[item.condition]}
          className="max-w-xs"
          onChange={handleChange}
      >
        {conditions.map((condition) => (
          <SelectItem key={condition}>
            {condition}
          </SelectItem>
        ))}
      </Select>
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
          <Input onChange={handleFileChange} type="file" accept="image/*"/>
      <Button
        type="submit"
        color="success"
        onClick={(e) => {
          e.preventDefault()
          if(!item.title || !item.brand || !item.size || !item.color || !item.condition || !item.price || !item.description || !file) {
            notify()
            return
          }
          newItem(item, session.user.email).then(
            (data) => {
              console.log(data)
              uploadFile(file, data[0].id)
            }          
          )
          router.push('/shop')
        }}
      >
        List Now
      </Button>
    </form>
      )
}