const exp = require('express')
const cors = require('cors')
const router = require('./ROUTING/ROUTINGS')

const port = process.env.port || 3000

const server = exp();

server.use('/Api',router);
server.use(exp.json())
server.use(cors())




server.listen(port,()=>{
    console.log('Server Stated Now')
})