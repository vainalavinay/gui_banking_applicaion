import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import users from './data/users.js';


const app = express();
app.use(bodyParser.json());

app.use(cors())
app.use(cors({
    origin: 'http://localhost:3000'
  }));

app.get('/api/users', (req, res) => {
    res.json(users);
})

app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.accNo === parseInt(req.params.id));
    res.json(user);
})

app.post("/api/submit-form", (req, res) => {
    console.log(req.body);
    res.send("Form submitted successfully!");
  });
  
  const port = 4000;
  
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });