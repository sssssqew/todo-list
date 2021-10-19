const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    name: { type: String, required: true, trim: true},
    done: { type: Boolean, default: false},
    description: { type: String, required: true, trim: true}
})

const Todo = mongoose.model('Todo', todoSchema)
module.exports = Todo;
// module.exports = todoSchema;