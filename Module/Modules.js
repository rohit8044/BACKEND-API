const supabase = require('../Config/Supabase');
const { route } = require('../Routing/Routings');

class Student{

    static async SendOTP(phone) {
    const { data, error } =
        await supabase.auth.signInWithOtp({
            phone
        });

    if (error) {
        throw error;
    } else {
        return data;
    }
    }
    static async findAll(){
        const {data,error} = await supabase.from('employee').select('*');
        if(error){
            throw error
        }else{
            return data
        }
    }

    static async FindById(id){
        const {data,error} = await supabase.from('employee').select('*').eq('id',id).single();
        if(error){
            throw error
        }else{
            return data
        }
    }

    static async InsertApi(name,email,role,department,salary){
        const {data, error} = await supabase.from('employee').insert([{name,email,role,department,salary}]).select();
        if(error){
            throw error
        }else{
            return data
        }
    }

    static async UpdateApi(id,name,email,role,department,salary){
        const {data, error} = await supabase.from('employee').update([{name,email,role,department,salary}]).eq('id',id).select();
        if(error){
            throw error
        }else{
            return data
        }
    }

    static async DeleeApi(id){
       const {data, error} = await supabase.from('employee').delete().eq('id',id).select()
       if(error){
        throw error
       }else{
        return data
       }
    }



}
module.exports = Student
