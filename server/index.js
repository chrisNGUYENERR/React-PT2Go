// MERN  = Mongo + Express + React + Node

const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('./models/user.model')

app.use(cors())
app.use(express.json()) //changing everything from body to JSON. 

mongoose.connect('mongodb+srv://danny-admin:Nguyeners@cluster0.blclp5t.mongodb.net/?retryWrites=true&w=majority')

app.post('/api/register',async (req,res)=>{
    console.log(req.body)
    try {
        const user = await User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password
        }) 
    } catch (error) {
        res.json({status:'error', error:"Duplicate email"})
    }
    res.json({status:'ok'})
})

app.post('/api/login',async (req,res)=>{
    console.log(req.body)
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })
    if (user){
        return res.json({status:'ok', accountInfo:{user,isLoggedIn:true}})
    }else{
        return res.json({status:'error',user: false})
    }
    
})

app.listen(1337, ()=>{
    console.log('Server is listening on 1337')
})