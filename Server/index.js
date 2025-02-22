const express = require('express')
const mongoose = require('mongoose')

const TodoModel=require('./Models/Todo')

const cors=require('cors')
const app=express()

app.use(cors())
app.use(cors({ origin: "*" }));
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/test')

app.get('/get',(req, res) => {
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/add', function (req, res) {
    const task=req.body.task
    TodoModel.create({task:task})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.put('/update/:id',(req, res) => {
            const {id} = req.params;
            TodoModel.findByIdAndUpdate({_id:id},{done:true})
            .then(result => res.json(result))
            .catch(err => res.json(err))

})

app.listen(3001,()=> {
    console.log('listening on port 3001');
})
