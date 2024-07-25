import supabase from "./connectDB"

const getItems = async() => { 
    try {
      let { data, error } = await supabase
    .from('items').select('id,title,brand,size,color,condition,price,description,seller_id,image_url')
    return data
    }
    catch (error){
      console.log(error)
    }
      
  }


export default getItems;  