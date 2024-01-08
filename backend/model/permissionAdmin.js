const mongoose = require('mongoose')
const permissionAdminSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    routerId: { type: mongoose.Schema.Types.ObjectId, ref: 'routes', required: true },
    permissionId: { type: mongoose.Schema.Types.ObjectId, ref: 'permission', required: true },
    visible: { type: String, require: true },
    invisible: { type: String, require: true },
    routePermissions: {
        add: { type: Boolean, default: false },
        update: { type: Boolean, default: false },
        delete: { type: Boolean, default: false },
        get: { type: Boolean, default: false }
    }
}, { timestamps: true })
const permissionAdmin = mongoose.model('permissionAdmin', permissionAdminSchema)
module.exports = permissionAdmin;