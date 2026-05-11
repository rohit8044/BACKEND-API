const express = require('express')
const app = require('./ROUTING/ROUTINGS')

const serv = express()

serv.use(express.json())
serv.use('/',app)

serv.listen(3000,()=>{
    console.log('server started now')
})