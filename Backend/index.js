//___________Middleware___________
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
//const Task = require('./Models/Task')

//___________Routers___________

const TaskRouter  =require('./Routers/Task')

var bodyparser= require('body-parser')
//___________App___________
const app = express()
app.use(cors())



//___________ENV___________
const mongoURI =process.env.MONGOURL ;
const PORT = 8000

//___________Connection to MongoDB___________
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`listening on port http://localhost:${PORT}/`)
        })
        console.log("MongoDB is now connected")

    })
    .catch(err => console.log(err));

app.use('/',TaskRouter)


