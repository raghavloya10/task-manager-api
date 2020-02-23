const express = require('express')
require('./db/mongoose')
//ensure mongoose.js runs and database is connected
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT 

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// The API is not the database or even the server, it is the code that governs the access point(s) for the server.
// APIs just allow applications to communicate with one another.
