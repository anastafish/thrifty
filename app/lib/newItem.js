import supabase from "./connectDB"
import { v4 } from "uuid";

const newItem = async(item, email) => {  
    try {
      const user = await supabase
          .from('users')
          .select('id, phone')
          .eq('email', email)
          .single();

     const { data, error } = await supabase
    .from('items')
    .insert([
      { 
        id:v4(),    
        title:item.title,
        brand:item.brand,
        size:item.size,
        color:item.color,
        condition:item.condition,
        price:item.price,
        description:item.description,
        seller_id:user.data.id,
        seller_number:user.data.phone,
        image_url:item.image_url,
      },
    ])
    .select()
    return data
  }  
    catch (error){
      console.log(error)
    }
  }

export default newItem;  