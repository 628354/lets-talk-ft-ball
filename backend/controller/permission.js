const permission = require('../model/permission')
const user = require('../model/user')
const user = require('../models/user'); // Assuming you have a user model

module.exports = {
  create: async (req, res) => {
    try {
      const findUser = await user.findOne({ _id: req.user.id });
      if (!findUser) {
        throw new Error('User not found');
      }

      let newUser = new user({
        role: req.body.role,
      });

      if (req.body.role === 2) {
        newUser.permissions = ['edit_aboutus', 'edit_leagues', 'edit_cafe', 'edit_definition'];
      } else if (req.body.role === 3) {
        newUser.permissions = ['read_aboutus', 'read_leagues', 'read_cafe'];
      }
      await newUser.save();
      res.status(200).send({
        message: 'User created successfully',
        success: true,
        user: newUser,
      });
    } catch (error) {
      res.status(500).send({
        message: 'Internal Server Error',
        success: false,
        error: error.message,
      });
    }
  },
};
