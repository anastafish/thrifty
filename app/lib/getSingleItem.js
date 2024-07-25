import supabase from "./connectDB"

const getSingleItem = async(id) => { 
    try {
      let { data, error } = await supabase
    .from('items').select('id,title,brand,size,color,condition,price,description,seller_id,image_url').match({id:id})
    return data
    }
    catch (error){
      console.log(error)    
    }
      
  }


export default getSingleItem;  