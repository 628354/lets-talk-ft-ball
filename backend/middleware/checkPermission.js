const permission = require('../controller/permission')

const checkPermission = (requiredPermission) => (req, res, next) => {
    const user = req.user;
    if (user && user.permissions && user.permission.includes(requiredPermission)) {
      next(); 
    } else {
      res.status(403).json({ message: 'Permission denied', success: false });
    }
  };
  
  module.exports = checkPermission;