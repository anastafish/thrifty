import supabase from './connectDB';
import { redirect } from 'next/navigation';

export default async function deleteItem(id) {
    try {
        const { data, error } = await supabase
            .from('items')
            .delete()
            .eq('id', id)

        await supabase.storage.from('items').remove([`images/${id}.jpg`])

    }
    catch (error) {
        console.log(error)
    }
}