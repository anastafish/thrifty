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
        <form className="flex flex-col items-center justify-center gap-5 m-3 p-3">
          <ToastContainer />
          <Input 
            type="text"
            name="title"
            label="Title"
            placeholder="Vintage Rock Band Tour T-Shirt"
            value={item.title}
            onChange={handleChange}
          />
          <div className="flex flex-col sm:flex-row gap-5 w-full">
          <Input 
            type="text"
            name="brand"
            label="Brand"
            placeholder="H&M"
            value={item.brand}
            onChange={handleChange}
          />
          <Input 
            type="text"
            name="color"
            label="Color"
            placeholder="Black"
            value={item.color}
            onChange={handleChange}
          />
          </div>        
          <div className="flex flex-col sm:flex-row gap-5 w-full">

           <Select
           name="size"
          label="Size"
          fullWidth
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
          <Select
          fullWidth
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
            </div>
            <div className="flex flex-col sm:flex-row gap-5 w-full">
          <Input
          type="number"
          name="price"
          value={item.price}
          onChange={handleChange}
          placeholder="0.00"
          max={999}
          maxLength={3}
          min={1}
          inputMode="numeric"
          label="Price"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
        />
            <Input 
              onChange={handleFileChange} 
              type="file" 
              accept="image/*" 
              label="Upload your item picture"
              />
            </div>
          <Input 
            type="text"
            name="description"
            placeholder="Authentic 1985 world tour t-shirt. No holes or stains."
            value={item.description}
            onChange={handleChange}
            label="Description"
          />
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
              uploadFile(file, data[0].id)
            }          
          )
          router.push('/shop')
        }}
      >
        Sell Now
      </Button>
    </form>
      )
}