const usermodel = require("../model/user");
const bcrypt = require("bcrypt");
const path = require("path");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const { sendResetPasswordEmail } = require("../mails/forget");
const Helpers = require('../Helpers/Helpers')
const { Validator } = require("node-input-validator");

exports.register = async (req, res) => {
  try {
    if (req.body.role == 'admin') {
      const v = new Validator(req.body, {
        role: 'string|required',
        firstName: 'string|required',
        lastName: 'string|required',
        email: 'string|required|email',
        phone: 'integer|required',
        password: 'string|required',
      });

      const errorResponse = await Helpers.checkValidation(v);
      if (errorResponse) {
        return Helpers.failed(res, errorResponse);
      }

      const findUser = await usermodel.findOne({ email: req.body.email });
      if (findUser) {
        return res.status(400).send('Email Already Exists');
      }

      const phoneExist = await usermodel.findOne({ phone: req.body.phone });
      if (phoneExist) {
        return res.status(400).send('Phone Number Already Exists');
      }

      const protocol = req.protocol;
      const host = req.hostname;
      const url = `${protocol}//${host}`;

      const hashPassword = bcrypt.hashSync(req.body.password, 10);
      const addUser = await usermodel.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        role: req.body.role,
        password: hashPassword,
        image: req.file ? url + '/uploads/' + req.file.filename : ' ',
      });

      const result = await addUser.save();
      return res.status(200).send({
        body: result,
        message: 'Signup Successfully',
        success: true,
      });
    } else {
      return res.status(403).send({
        message: 'Permission Denied',
        success: false,
      })
    }
  } catch (error) {
    return res.status(500).send({
      message: 'Internal Server Error',
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

exports.AddUser = async (req, res) => {
  try {

    const findUser = await usermodel.findOne({ email: req.body.email });
    if (findUser) {
      return res.status(400).send('Email Already Exists');
    }

    const phoneExist = await usermodel.findOne({ phone: req.body.phone });
    if (phoneExist) {
      return res.status(400).send('Phone Number Already Exists');
    }

    const protocol = req.protocol;
    const host = req.hostname;
    const url = `${protocol}//${host}`;

    const hashPassword = bcrypt.hashSync(req.body.password, 10);
    const addUser = await usermodel.create({
      role: req.body.role,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      date: req.body.date,
      email: req.body.email,
      phone: req.body.phone,
      password: hashPassword,
      userGroup: req.body.userGroup,
      image: req.file ? url + '/uploads/' + req.file.filename : ' ',
    });

    const result = await addUser.save();
    return res.status(200).send({
      body: result,
      message: 'User Add  Successfully',
      success: true,
    });

  } catch (error) {
    res.status(500).send({
      message: "Enternal Server Error",
      success: false,
      error: error.message,
    });
  }
}

exports.getAllUser = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const skip = (page - 1) * pageSize;
    const userData = await usermodel.find().skip(skip).limit(pageSize);
    const totalUsers = await usermodel.countDocuments();
    res.status(200).send({
      pageInfo: {
        currentPage: page,
        pageSize: pageSize,
        totalPages: Math.ceil(totalUsers / pageSize),
        totalRecords: totalUsers,
        body: userData,
        message: "Get All Users Successfully",
        success: true,
      },
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
};
exports.GetUserById = async (req, res) => {
  try {
    const userData = await usermodel.findById({ _id: req.params.id })
    if (userData) {
      res.status(200).send({
        body: userData,
        message: 'Get User By Id Successfully',
        success: true
      })
    } else {
      res.status(300).send({
        message: 'User Id Not Found',
        success: false
      })
    }
  } catch (error) {
    res.status(500).send({
      message: "Enternal Server Error",
      success: false,
      error: error.message,
    });
  }
}

exports.updateUser = async (req, res) => {
  try {
    const { firstName, lastName, phone, userName, date, userGroup, country, countryCode } = req.body;
    const updateUser = await usermodel.findByIdAndUpdate(
      { _id: req.params.id },
      { firstName, lastName, userName, date, userGroup, phone, country, countryCode }
    );
    if (updateUser) {
      res.status(200).send({
        body: updateUser,
        message: "User Updated Successfully",
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

exports.deleteUser = async (req, res) => {
  try {
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

exports.AddUser = async (req, res) => {
  try {
    const findUser = await usermodel.findOne({ email: req.body.email });
    if (findUser) {
      return res.status(400).send('Email Already Exists');
    }
    const phoneExist = await usermodel.findOne({ phone: req.body.phone });
    if (phoneExist) {
      return res.status(400).send('Phone Number Already Exists');
    }
    const protocol = req.protocol;
    const host = req.hostname;
    const url = `${protocol}//${host}`;
    const hashPassword = bcrypt.hashSync(req.body.password, 10);
    const addUser = await usermodel.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      date: req.body.date,
      email: req.body.email,
      phone: req.body.phone,
      password: hashPassword,
      userGroup: req.body.userGroup,
      image: req.file ? url + '/uploads/' + req.file.filename : ' ',
    });
    const result = await addUser.save();
    return res.status(200).send({
      body: result,
      message: 'User Add  Successfully',
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: "Enternal Server Error",
      success: false,
      error: error.message,
    });
  }
}
