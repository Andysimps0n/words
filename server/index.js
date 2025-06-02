const express = require('express')
const app = express()


const db = require('./models')

app.get('/', (req, res)=> {
    res.send({message : "hi"})
})


db.sequelize.sync().then(()=>{
    
    app.listen(3000, ()=> {
        console.log('h1')
    })
})