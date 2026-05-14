const { NavigatorLockAcquireTimeoutError } = require('@supabase/supabase-js/dist/index.cjs');
const supabase = require('../DATABASE/SUPABASE')

class Example{
    static async find(){
        const {data , error} = await supabase.from('employee').select('*');
        if(error){
            throw error;
        }else{
            return data
        }
    }

    static async findById(id){
        const {data , error} = await supabase.from('employee').select('*').eq('id',id);
        if(error){
            throw error
        }else{
            return data
        }
    }

    static async Delete(id){
        const {data , error} = (await supabase.from('employee').delete().eq('id',id));
        if(error){
            throw error
        }else{
            return data
        }
    }
}
module.exports = Example