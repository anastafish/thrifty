import supabase from "./connectDB"

async function uploadFile(file, id) {
    const { data, error } = await supabase.storage.from('items').upload(`images/${id}.jpg`, file, 
        { cacheControl: '3600', upsert: false }
    )
    if (error) {
      // Handle error
      console.log(error)
    } else {
      // Handle success
    }
  }

export default uploadFile;  