// MERN  = Mongo + Express + React + Node

const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

mongoose.connect('') //<-- will put my mongodb atlas in here 

app.listen(1337, ()=>{
    console.log('Server is listening on 1337')
})