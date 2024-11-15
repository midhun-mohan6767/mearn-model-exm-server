require('dotenv').config()
const Express =require('express')
const cors = require('cors')

const DBserver= Express()

DBserver.use(cors())
DBserver.use(Express.json())
 PORT = 3000 || process.env.PORT

 DBserver.get('/',(req,res)=>{
    res.status(200).send(`<h1 style=color:red>DB server is start at the port :${PORT} waiting for the client request</h1>`)
 })

DBserver.listen(PORT,()=>{
    console.log(`dbserver is start at the port: ${PORT}`);
    
})