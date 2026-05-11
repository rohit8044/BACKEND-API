const supabase = require('../DATABASE/SUPABASE')

class STUDENT {
    static async find(){
        const {data,error} = await supabase.from('employee').select('*');
        if(error){
            throw error
        }else{
            return data
        }
    }
}
module.exports = STUDENT