const Student = require('../Module/Modules')
const exp = require('express')
const router = exp()

router.use(exp.json())

router.get('/',async(request,response)=>{
    try{
        const emp = await Student.findAll();
        response.status(200).json(emp);
    }catch(error){
        console.log(error)
        response.status(500).json({message: "not All Select Api Work"})
    }
});

router.post("/SendOTP", async (req, res) => {
  try {
   const { phone, state } = req.body;

    await Student.SendOTP(phone,state);

    res.status(200).json({
      message: "OTP Sent Successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "OTP Send Failed",
    });
  }
});

router.post('/selectById',async(request,response)=>{
    try{
        const {id} = request.body
        const emp = await Student.FindById(id);
        response.status(200).json(emp);
    }catch(error){
        console.log(error)
        response.status(500).json({message: "SelectById Not found"})
    }
});

router.post('/InsertData',async(request,response)=>{
    try{
        const {name,email,role,department,salary} = request.body
        const emp = await Student.InsertApi(name,email,role,department,salary);
        response.status(200).json({message: "Insert Sucessfully"})
    }catch(error){
        console.log(error)
        response.status(500).json({message: "NOT INSERT DATA"})
    }
});
router.put('/UpdateApi',async(request , response)=>{
    try{
        const {id,name,email,role,department,salary} = request.body;
        const emps = await Student.UpdateApi(id,name,email,role,department,salary);
        response.status(200).json({message: "UpdateApi Sucessfully"})
    }catch(error){
        console.log(error)
        response.status(500).json({message: "update not found"})
    }
})

router.delete('/DeleteApi',async(request , response)=>{
    try{
        const {id} = request.body;
        const emps = await Student.DeleeApi(id);
        response.status(200).json({message: " DeleeApi Sucessfully"})
    }catch(error){
        console.log(error)
        response.status(500).json({message: "DeleeApi not found"})
    }
})


module.exports = router
