import supabase from "./connectDB"

const newItem = async(item) => {  
    try {
      const { data, error } = await supabase
      .from('items')
      .insert([
        {type:item.type, name:item.name, price:item.price},
      ])
      .select()
      console.log(data)
    }  
    catch (error){
      console.log(error)
    }
  }

export default newItem;  