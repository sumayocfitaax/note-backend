const express = require('express')
const cors = require('cors')
const dotenv =require('dotenv')
const noteRouter = require('./routers/routers')

const connectedDB = require('./config/mongoDB')

const app = express()
app.use(express.json())
app.use(cors())

//end points or path
app.use('/api', noteRouter)

//env
dotenv.config()
const port = process.env.PORT || 4000

//database
connectedDB()

app.listen(port, ()=>{
  console.log('server is listen on port ' + port)
})