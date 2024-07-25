"use client"

import { useState } from "react"
import newItem from "@/app/lib/newItem"

export default function ItemForm() {
    const [item, setItem] = useState({
        name: "",
        type:"",
        price: "",        
      })
      const handleChange = (e) => {
        setItem({
          ...item,
          [e.target.name]: e.target.value,
        })
      }
      
      return (
        <form >
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={item.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="type"
        placeholder="Type"
        value={item.type}
        onChange={handleChange}
      />
      <input
        type="text"
        name="price"
        placeholder="Price"
        value={item.price}
        onChange={handleChange}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault()
          newItem(item)  
        }}
      >
        Add Item
      </button>
    </form>
      )
}