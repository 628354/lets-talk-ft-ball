'use strict';

module.exports = function(app) {
  var userHandlers = require('../controllers/userController.js');

  app.route('/')
  .get(userHandlers.index);
  
  app.route('/auth/register')
    .post(userHandlers.register);

  app.route('/auth/sign_in')
    .post(userHandlers.sign_in);

  app.route('/auth/forgot_password')
    .get(userHandlers.render_forgot_password_template)
    .post(userHandlers.forgot_password);
    
  app.route('/auth/reset_password')
    .get(userHandlers.render_reset_password_template)
    .post(userHandlers.reset_password);
};
