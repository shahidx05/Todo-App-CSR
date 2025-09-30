const Todo = require('../models/todo')

exports.Todos = async (req, res) => {
    const todos = await Todo.find()
    res.json(todos)
}

exports.createTodo = async (req, res) => {
    const { title } = req.body

    const newTodo = await Todo.create({ title })

    res.json(newTodo)
}

exports.deleteTodo = async (req, res) => {
    const { id } = req.params

    await Todo.findByIdAndDelete(id)

    res.send("deleted Successfully")
}

exports.editTodo = async (req, res) => {
    const { id } = req.params
    const { title } = req.body

    const newTodo = await Todo.findByIdAndUpdate(
        id,
        { title },
        { new: true }
    )

    res.json(newTodo)
}

exports.markTodo = async (req, res) =>{
    const {id} = req.params
    const { check } = req.body;
    const todo = await Todo.findByIdAndUpdate(id, { check }, { new: true });
    res.json(todo);
}

exports.deleteAllCompleted = async (req, res)=>{
    await Todo.deleteMany({check: true})
    res.send("deleted successfully")
}

exports.filterTodos = async (req, res)=>{
    const {type} = req.params
    let todos
    if(type==="completed") todos = await Todo.find({check:true})
    else if(type==="pending") todos = await Todo.find({check:false})
    else todos = await Todo.find()

    res.json(todos)
}