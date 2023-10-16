const express = require("express");
const cors = require('cors');
const app = express();
require("./db/conn");
// const Users = require("./models/users");
const port = process.env.PORT || 5000
app.use(cors());
// app.use(express.json());

///using async method
app.post("/users", async (req, res) => {
  try {
    const user = new user(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/users", async (req, res) => {
  try {
    const userData = await Users.find();
    res.send(userData);
  } catch (error) {
    res.send(error);
  }
});

app.get("/user/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const userData = await Users.findById({ _id });

    if (!userData) {
      return res.status(404).send();
    } else {
      res.send(userData);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update the users by id 
app.patch("/users/:id", async (req,res)=>{
   try {
    const _id = req.params.id;
    const userUpdate = await Users.findOneAndUpdate(_id,req.body,{
        new:true
    });
    res.send(userUpdate);
   } catch (error) {
    res.status(400).send(error);
   }
})

// Delete users records by id 
app.delete("/users/:id", async(req,res)=>{
    try {
     const _id = req.params.id;
     const userDelete = await Users.findByIdAndDelete(_id);
     if(!req.params.id){
        return res.status(400).send();
     }
     res.send(userDelete);
    } catch (error) {
        res.status(500).send(error);
    }
})

app.listen(port, () => {
  console.log("connection is set up");
});

