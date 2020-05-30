const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// set environment
require('dotenv').config();
// set db to global promise
mongoose.Promise = global.Promise;

// instance of express
const app = express();
const port = process.env.port||3000;

// for middleware usage
app.use(cors());
app.use(express.json());

// set var to access var in .env
const uri = process.env.db;

//connect ot db
mongoose.connect(uri,{useNewUrlParser:true});
//check whether db connection successful or not 
mongoose.connection.once('open',()=> console.log("connect to db successfully...."))
.on("error",(err)=> console.log('Error: '+ err));

app.use('/simple-so',require('./routes/newUsers'))

app.listen(port,() => console.log(`listen to port ${port}`))


