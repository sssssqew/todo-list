const mongoose = require('mongoose')
const todo = require('./Todo.js')

const userSchema = mongoose.Schema({
    name: { type: String, required: true, trim: true},
    age: { type: Number, required:true},
    email: { type: String, required: true, trim: true},
    todos: { type: [todo], required: true}
})

const User = mongoose.model('User', userSchema)
module.exports = User;