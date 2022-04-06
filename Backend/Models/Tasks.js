const mongoose= require('mongoose')
const Schema=  mongoose.Schema

const TaskSchema = new Schema({
    id:{
        type:Number
    },
    title:{
        type:String
    },
    description:{
        type:String,
        required:true
    },
    deadline:{
        type:String,
        
    }
}

)

const Tasks = mongoose.model('Task',TaskSchema)
module.exports = Tasks
