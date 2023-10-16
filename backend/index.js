const express = require("express");
const cors = require('cors');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const app = express();
require("./db/conn");
const Users = require("./models/users");

const port = process.env.PORT || 5000
app.use(cors());


async function verifyAuthToken(token) {
  const secret = process.env.JWT_SECRET;
  try {
    const decodedToken = await jwt.verify(token, secret);
    return decodedToken;
  } catch (error) {
    return null;
  }
}


// using async method
app.post('/register', async (req, res) => {
  // Get the user's name, email, and password from the request body.
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  // Hash the password.
  const hashedPassword = await hashPassword(password);
  // Create a new user object.
  const user = new Users({
    name,
    email,
    password: hashedPassword,
  });
  // Save the user to the database.
  try {
    await user.save();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  // Generate a JWT token for the user.
  const token = await Users.generateAuthToken();
  // Send a success response with the JWT token.
  res.json({ token });
});

// Hash the password.
async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

// Login User
app.post('/login', async (req, res) => {
  const email = "john@doe.com";
  const userPassword = "hello123";
  const hashedPassword = "$2b$10$saltsaltssalt";
  async function verifyPassword(userPassword, hashedPassword) {
    const isPasswordCorrect = await bcrypt.compare(userPassword, hashedPassword);
    return isPasswordCorrect;
  }
  // Find the user with the given email address.
  const user = await Users.findOne({ email });
  // If the user does not exist, send an error response.
  if (!user) {
    return res.status(404).json({ message: 'User does not exist.' });
  }
  // If the password is incorrect, send an error response.
  if (!await verifyPassword(userPassword, user.password)) {
    return res.status(401).json({ message: 'Incorrect password.' });
  }
  // Generate a JWT token for the user.
  const token = await Users.generateAuthToken();
  // Send a success response with the JWT token.
  res.json({ token });
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

// Forget Password
app.post('/forgot-password', async (req, res) => {
  const email = req.body.email;
  // Find the user with the given email address.
  const user = await Users.findOne({ email });
  // If the user does not exist, send an error response.
  if (!user) {
    return res.status(404).json({ message: 'User does not exist.' });
  }
  // Generate a password reset token for the user.
  const passwordResetToken = await user.generatePasswordResetToken();
  // Send an email to the user with the password reset token.
  async function sendEmail(to, subject, text) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.example.com',
      port: 587,
      auth: {
        user: 'user@example.com',
        pass: 'password',
      },
    });
  
    const mailOptions = {
      from: 'User <user@example.com>',
      to,
      subject,
      text,
    };
  
    await transporter.sendMail(mailOptions);
  } 
  try {
    await sendEmail(user.email, 'Password Reset', `
      Click the following link to reset your password:
      https://example.com/reset-password/${passwordResetToken}
    `);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  async function generateAuthToken(user) {
    const payload = {
      _id: user._id,
      name: user.name,
      email: user.email,
    };
    const secret = process.env.JWT_SECRET; 
    const token = await jwt.sign(payload, secret, {
      expiresIn: '1h',
    });
    return token;
  }
  // Send a success response.
  res.json({ message: 'Password reset email sent.' });
});

app.listen(port, () => {
  console.log("connection is set up");
});

