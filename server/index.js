const express = require('express')
const app = express()
const cors = require('cors');


// Middle Wares
app.use(express.json())
app.use(cors());


const db = require('./models')


//  Routers
const usersRouter = require('./routes/Users')


// Get => Return Users
app.use('/users', usersRouter)






db.sequelize.sync().then(()=>{
    
    app.listen(3000, ()=> {
        console.log('h1')
    })
})