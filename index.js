

const express = require('express');
const mongoose = require('mongoose');
const {login, register}= require("./controller/admin.controller");
const app = express()

app.use(express.json())

const connect = ()=>{
    return mongoose.connect("mongodb+srv://user:pass@cluster0.4xk9u.mongodb.net/fullbos?retryWrites=true&w=majority")
};




app.use('/login',login);
app.use('/signup', register);







app.listen(5000, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 2345");
});

