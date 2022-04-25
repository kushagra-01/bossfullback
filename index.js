

const express = require('express');
const mongoose = require('mongoose');
const {login, register}= require("./controller/admin.controller");
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.json())

const connect = ()=>{
    return mongoose.connect("mongodb+srv://user:pass@cluster0.4xk9u.mongodb.net/fullbos?retryWrites=true&w=majority")
};




app.use('/login',login);
app.use('/signup', register);

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'));






app.listen(PORT, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 2345");
});

