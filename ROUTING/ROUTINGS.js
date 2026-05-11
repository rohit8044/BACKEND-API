const exp = require('express')
const STUDENT = require('../MODULES/EMPLOYES')

const app = exp()

app.use('/',async(request,response)=>{
    try{
        const emplo = await STUDENT.find();
        response.json(emplo)
    }catch(error){
        response.status(500).json({message:'internal server error'})
    }
})

module.exports = app