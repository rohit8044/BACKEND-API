const express = require('express')
const Example = require('../MODUL/MODULS');
const { NavigatorLockAcquireTimeoutError } = require('@supabase/supabase-js/dist/index.cjs');


const router = express()

router.get('/all',async(request,reponse)=>{
    try{
        const data = await Example.find();
        reponse.status(200).json(data)
    }catch(error){
        reponse.status(500).json({message: 'Enternal Error'})
    }
})

router.get('/id/:id',async(request,reponse)=>{
    try{
        const data = await Example.findById(request.params.id);
        reponse.status(200).json(data)
    }catch(error){
        reponse.status(500).json({message: 'I ID wala Error'})
    }
})
router.delete('/delete/:id',async(request , reponse)=>{
    try{
        const data = await Example.Delete(request.params.id);
        reponse.status(200).json(data);
    }catch(error){
        reponse.status(500).json({message: 'Server Error id'})
    }
})

module.exports = router