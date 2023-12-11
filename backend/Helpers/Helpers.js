const aes256 = require('aes256');
const JWT = require('jsonwebtoken');
const { ENCRYPTION_KEY,PRIVATE_KEY } = process.env;

const encrypt = (value) => {
    return aes256.encrypt(ENCRYPTION_KEY, value);
}

const decrypt = (value) => {
    return aes256.decrypt(ENCRYPTION_KEY, value);
}

const getDateTime = (date) => {
    var datetime = date ? new Date(date) : new Date();
    datetime = datetime.getFullYear()
        + "-"
        + ('0' + (datetime.getMonth() + 1)).slice(-2)
        + "-"
        + ('0' + datetime.getDate()).slice(-2) + " "
        + ('0' + datetime.getHours()).slice(-2) + ":"
        + ('0' + datetime.getMinutes()).slice(-2) + ":"
        + ('0' + datetime.getSeconds()).slice(-2);
    return datetime;
}

const removeLastCharacter = (str) => {
    return str.trim().substring(0, (str.length - 2));
}

const generateJWT = (email, firstname, lastname) => {
    return JWT.sign({
        PRIVATE_KEY,
        email,
        firstname, 
        lastname
    }, ENCRYPTION_KEY, { expiresIn: '1h' });

}
const checkValidation = async v => {
    var errorsResponse;

    await v.check().then(function (matched) {
      if (!matched) {
        var valdErrors = v.errors;
        var respErrors = [];
        Object.keys(valdErrors).forEach(function (key) {
          if (valdErrors && valdErrors[key] && valdErrors[key].message) {
            respErrors.push(valdErrors[key].message);
          }
        });
        errorsResponse = respErrors.length > 0 ? respErrors[0] : '';
      }
    });
    return errorsResponse;
  }

  const success =  (res, message = '', body = {}) => {
    return res.status(200).json({
      success: true,
      code: 200,
      message: message,
      body: body,
    });
  }

  const error = (res, err, req) => {
    let code = typeof err === 'object' ? (err.code ? err.code : 403) : 403;
    let message = typeof err === 'object'
      ? err.message ? err.message : ''
      : err;

    if (req) {
      req.flash('flashMessage', {
        color: 'error',
        message,
      });

      const originalUrl = req.originalUrl.split('/')[1];
      return res.redirect(`/${originalUrl}`);
    }

    return res.status(code).json({
      success: false,
      message: message,
      code: code,
      body: {},
    });
  }

 const failed = (res, message = '') => {
    message = typeof message === 'object'
      ? message.message ? message.message : ''
      : message;
      
    return res.status(400).json({
      success: false,
      code: 400,
      message: message,
      body: {},
    });
  }
module.exports = {
    encrypt,
    decrypt,
    getDateTime,
    removeLastCharacter,
    generateJWT,
    checkValidation,
    success,
    error,
    failed
}