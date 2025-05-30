const mongoose = require('mongoose')


const todoSchema = new mongoose.Schema({
    name:String,
    message:String
})


module.exports = mongoose.model('Todo',todoSchema)