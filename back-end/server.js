import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose, { Schema } from "mongoose";

import users from './data/users.js';
import user from "./model/userSchema.js";

const app = express();
app.use(bodyParser.json());

app.use(cors())
app.use(cors({
    origin: 'http://localhost:3000'
  }));
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://vinay:vinay@cluster0.wiu9zoy.mongodb.net/?retryWrites=true&w=majority").then(()=>{console.log("Connected to MonogDB");}).catch((err)=>{console.log(err);})


app.get('/api/users', (req, res) => {
    res.json(users);
})


app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.accNo === parseInt(req.params.id));
    res.json(user);
})

app.post("/api/submit-form", (req, res) => {
    const {name, pin, accountNumber} = req.body
    user.insertMany({name:name, pin:pin, accountnumber:accountNumber}).then(()=>{
        console.log("User data inserted successfully");
    }).catch((err)=>{console.log(err);})
  });
  

  app.get('/users', async(req, res) => {
    try {
      const users = await user.find();
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status
    }});

  const port = 4000;
  
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });