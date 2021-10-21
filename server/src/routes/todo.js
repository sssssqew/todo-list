const express = require('express')
const TodoRouter = express.Router()
const Todo = require('../models/Todo')

TodoRouter.get('/', async (req, res) => {
    const todos = await Todo.find()
    console.log(todos)
    res.json({status: 200, todos})
})

TodoRouter.get('/:id', (req, res) => {
    Todo.findById(req.params.id, (err, todo) =>{
        if(err) throw err;
        res.json({status: 200, todo})
    })
})

TodoRouter.post('/', (req, res) => {
    Todo.findOne({ name: req.body.name, done: false},  (err, todo) =>{
        if(err) throw err;
        if(!todo){
            const newTodo = new Todo(req.body)
             newTodo.save().then( () => {
                res.json({ status: 201, msg: "new todo created in db !", newTodo})
            })
        }else{
            const msg = 'this todo already exists in db !'
            res.json({ status: 204, msg})
        }
    })
})

TodoRouter.put('/:id', (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, todo) =>{
        if(err) throw err;
        res.json({status: 204, msg: `todo ${req.params.id} updated in db !`, todo})
    })
})

TodoRouter.delete('/:id', (req, res) => {
    Todo.findByIdAndDelete(req.params.id, (err, todo) => {
        if(err) throw err;
        res.json({status:204, msg: `todo ${req.params.id} removed in db !`})
    })
})

module.exports = TodoRouter;



