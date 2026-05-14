const exp = require('express')
const cors = require('cors')
const router = require('./ROUTING/ROUTINGS')

const port = process.env.port || 3000

const server = exp();

server.use('/',router);
server.use(exp.json())
server.use(cors())


 server.json([
        {
            id: 1,
            name: "Harry",
            email: "harry@example.com",
            role: "Backend Developer",
            department: "IT",
            salary: 65000
        }
    ])


server.listen(port,()=>{
    console.log('Server Stated Now')
})