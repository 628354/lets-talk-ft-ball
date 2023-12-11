const usermodel = require("../model/user");
const bcrypt = require("bcrypt");
const path = require("path");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { Validator } = require("node-input-validator");
const ObjectId = mongoose.Types.ObjectId;
const { sendResetPasswordEmail } = require("../mails/forget");
const Helpers = require('../Helpers/Helpers')
const Joi = require("joi");



exports.register = async (req, res) => {
  try {

    const findUser = await usermodel.findOne({ email: req.body.email });
    if (findUser) {
      return res.status(400).send("Email Already Exists");
    }

    const phoneExist = await usermodel.findOne({ phone: req.body.phone });
    if (phoneExist) {
      return res.status(400).send("Phone Number Already Exists");
    }
    const protocol = req.protocol
    const host = req.hostname
    const url = `${protocol}//${host}`
    const hashPassword = bcrypt.hashSync(req.body.password, 10);
    const addUser = await usermodel.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      role: req.body.role,
      password: hashPassword,
      image: req.file ? url + "/uploads/" + req.file.filename : " ",

    });

    const result = await addUser.save();
    return res.status(200).send({
      body: result,
      message: "Signup Successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Internal Server Error",
      success: false,
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const v = new Validator(req.body, {
      email: "string|required|email",
      password: "string|required",
    });
    const errorResponse = await Helpers.checkValidation(v);
    if (errorResponse) {
      return Helpers.failed(res, errorResponse);
    }

    const finduser = await usermodel.findOne({ email: req.body.email });
    if (!finduser) {
      res.send({ status: false, message: "User not found!!" });
      return;
    }
    const match = await bcrypt.compare(req.body.password, finduser.password);
    if (match) {
      const token = jwt.sign(
        { _id: finduser._id, email: finduser.email },
        process.env.Secret_key,
        { expiresIn: "365d" }
      );
      res.set({ token: token });
      res.send({
        status: true,
        message: " Login Successfully",
        body: finduser,
        token: token,
      });
    } else {
      res.send({ status: false, message: "Password dont match!!" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

exports.sendlink = async (req, res) => {
  try {
    const { email } = req.body;
    const tokendata = req.user;
    const user = await usermodel.findOne({ email: email });
    if (tokendata._id == user._id) {
      sendResetPasswordEmail(email, user._id);
      res.send({
        status: true,
        message: "forget-password link send successfully",
        userdetails: user,
      });
    }
  } catch (error) {
    res.send({ status: false, message: "Something went wrong !!" });
  }
};

//forget password...........................................................

exports.forgetpassword = async (req, res) => {
  try {
    const { newpassword } = req.body;
    const tokendata = req.user;
    if (tokendata._id == req.params.userId) {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(newpassword, salt);
      const updatepassword = await usermodel.findByIdAndUpdate(
        req.params.userId,
        {
          password: hash,
        },
        { new: true }
      );
      await updatepassword.save();

      res.send({
        status: true,
        message: "Successfully update password",
        userdetails: updatepassword,
      });
    }
  } catch (error) {
    res.send({ status: false, message: "something went wrong !!" });
  }
};
exports.getAllUser = async (req, res) => {
  try {
    const userData = await usermodel.find();
    res.status(200).send({
      body: userData,
      mesage: "Get All User Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error.message);
  }
};


exports.updateUser = async (req, res) => {
  try {
    const { id, firstName, lastName, phone, country, countryCode } = req.body;
    const updateUser = await usermodel.findByIdAndUpdate(
      { _id: req.params.id },
      { firstName, lastName, phone, country, countryCode },
      { new: true }
    );

    if (updateUser) {
      res.status(200).send({
        success: true,
        message: "User Updated Successfully",
        body: updateUser,
      });
    } else {
      res.status(404).send({
        success: false,
        message: "User Id Not Found",
      });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
}

exports.deleteUser = async (req, res) => {
  try {

    const v = new Validator(req.params, {
      id: "string|required"
    });
    const errorResponse = await Helpers.checkValidation(v);
    if (errorResponse) {
      return Helpers.failed(res, errorResponse);
    }
    const deleteUser = await usermodel.findByIdAndDelete({
      _id: req.params.id,
    });
    if (deleteUser) {
      res.status(200).send({
        body: deleteUser,
        message: "User Deleted Successfully",
        success: true,
      });
    } else {
      res.status(300).send({
        message: "User Id Not Found",
        success: false,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "User Updated Successfully",
      success: true,
      error: error.message,
    });
  }
};
