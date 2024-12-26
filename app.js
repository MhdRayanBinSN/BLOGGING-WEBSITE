const express =  require('express')
const db = require('./db')
const app = express();
const  guestRoutes = require('./routes/guestRoute')
const  authRoutes = require('./routes/authRoute')
require('dotenv').config();

app.use(express.static('public'))



app.use('/protected',authRoutes)
app.use('/',guestRoutes)

app.listen(3001,()=>{
    console.log("Server running on port 3001");
})