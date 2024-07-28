import getUser from './getUser'
import {auth} from '@/auth'
import supabase from './connectDB';

const updatePhone = async(email, phone) => {
    try {
        const user = await getUser(email);
        const { data, error } = await supabase
            .from('users')
            .update({phone:phone})
            .eq('id', user.id)
            .single();
        return data;
    }
    catch (error){
        console.log(error)
    }
}

export default updatePhone;