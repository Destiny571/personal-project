const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://pana57:Ikperha3@cluster0.glq40e3.mongodb.net/cntrips'

mongoose.connect(mongoURL , {useUnifiedTology : true , useNewUrl1parser:true})

var connection = mongoose.Connection

connection.on('error' , ()=>{
    console.log('mongo DB connection failed')
})

connection.on('connected' , ()=>{
    console.log('mongo DB connection successful')
})

module.exports = mongoose