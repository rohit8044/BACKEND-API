const exp = require('express')
const cors = require('cors')
const router = require('./ROUTING/ROUTINGS')

const server = exp()

// CORS FIRST
server.use(cors())

// JSON middleware
server.use(exp.json())

// Routes
server.use('/Api', router)

// Port
const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(`Server Started on ${port}`)
})