import supabase from './connectDB';

export default async function getUser(email) {
    try{
        const { data, error } = await supabase
            .from('users')
            .select('id, name, email, avatar_url,phone')
            .eq('email', email)
            .single();
            return data;
    }
    catch (error) {
        throw new Error(error.message);
    }
}