const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user')

app.set("view engin", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.get('/read', async (req, res) => {
  let users = await userModel.find()
  res.render('read.ejs', {users})
})

app.post('/create', async (req, res) => {
  let {name, email, image} = req.body;
  let createUser = await userModel.create({
    name, email, image
  })
  res.redirect('/read')
  // console.log(req.body)
})

app.get('/edit/:userid', async (req, res) => {
  let user = await userModel.findOne({_id: req.params.userid});
  res.render('edit.ejs', {user})
})

app.post('/update/:id', async (req, res) => {
  let {name, email, image} = req.body;
  let updateUser = await userModel.findOneAndUpdate({_id: req.params.id}, {name, email, image}, {new: true});
  res.redirect('/read')
  // console.log(req.body)
})

app.get('/delete/:id', async (req, res) => {
  let userDelete = await userModel.findOneAndDelete({_id: req.params.id});
  res.redirect('/read')
})

app.listen(3000, function(){
    console.log("listen at localhost:3000")
})