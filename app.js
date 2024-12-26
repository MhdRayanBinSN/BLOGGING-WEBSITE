const express =  require('express')
const db = require('./db')
const app = express();

app.get('/us',(req,res)=>{
    db.query('SELECT * FROM users',(err,rows)=>{
        if(err){
            console.log('Error fetching data');
            res.status(500).send('Error retrieving users')            
        }else{
            res.json(rows)
        }
    })
})
app.get('/',(req,res)=>{
    res.send('<h1>Hello</h1>')
})
app.listen(3001,()=>{
    console.log("Server running on port 3001");
})