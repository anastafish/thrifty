import supabase from "./connectDB"

async function uploadFile(file, id) {
    console.log(id)
    const { data, error } = await supabase.storage.from('items').upload(`images/${id}.jpg`, file, 
        { cacheControl: '3600', upsert: false }
    )
    if (error) {
      // Handle error
      console.log(error)
    } else {
      // Handle success
      console.log(data)
    }
  }

export default uploadFile;  