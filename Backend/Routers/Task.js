const express = require('express')
const TaskRouter= express.Router() //This is a Router
const mongoose= require('mongoose')


const Task = require('../Models/Tasks') //This is the Schema /Table

TaskRouter.use(express.json())


TaskRouter.get('/',(req,res)=>{
    Task.find()
    .then((tasks)=>{
        res.send(tasks)
    })
    .catch((err)=>{
        console.log(err)
    })

})

TaskRouter.post('/',(req,res)=>{
    const newtask  = new Task({
        'id' :req.body.id,
        'title' :req.body.title,
        'description' :req.body.description,
        'deadline':req.body.deadline
    })
    newtask.save()
    .then((Saved)=>{
        res.send('Saved Successfully')
    })
    .catch((err)=>{
        console.log(err);
    })

})


TaskRouter.delete('/',(req,res)=>{
    console.log(req.body)
    Task.findOneAndDelete({"id":req.body.id})
    .then((deleted)=>{
     res.send('Deleted Successfully')
    })
    .catch((err)=>{
        console.log(err);
    })

})

TaskRouter.put('/',(req,res)=>{
    
    Task.findOneAndUpdate({"id":req.body.id},{"title":req.body.title}, {"description":req.body.description , "deadline":req.body.deadline}) 

    .then((updated)=>{
        res.send('Updated Successfully')
    })
    .catch((err)=>{
        console.log(err);
    })

})



module.exports=TaskRouter