import supabase from "./connectDB"

const getItems = async() => { 
    try {
      let { data, error } = await supabase
    .from('items').select('id, name, price')
    console.log(data)
    }
    catch (error){
      console.log(error)
    }
      
  }


export default getItems;  