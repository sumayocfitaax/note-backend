const mongoose = require('mongoose')

const mongoDB = async ()=>{
  mongoose.connection.on('connected', ()=>{
    console.log('DB connected')
  })

  await mongoose.connect(`${process.env.MONGODB_URL}/notion`)
}

module.exports = mongoDB