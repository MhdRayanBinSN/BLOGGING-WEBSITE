const express = require('express');
const router = express.Router();

router.get('/login',(req,res)=>{
    res.sendFile('login.html',{root:'public'})
})
router.get('/register',(req,res)=>{
    res.sendFile('register.html',{root:'public'})
})
router.get('/',(req,res)=>{
    res.sendFile('blogs.html',{root:'public'})
})

module.exports = router