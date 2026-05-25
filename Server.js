const router = require('./Routing/Routings')
const expres = require('express')
const cors = require('cors')
const app = expres()

app.use('/',router)
app.use(expres.json())
app.use(cors())

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log("Server Started now")
})
