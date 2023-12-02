const mongoose = require('mongoose')
const routesSchema = new mongoose.Schema({
    permissionId: { type: mongoose.Schema.Types.ObjectId, ref: 'permission'},
    path: { type: String, required: true },
    methods: { type: [String], required: true },
    permissionsRequired: { type: [String] },
    createdOn: { type: Date, default: Date.now },
    updatedOne: { type: Date, default: Date.now }
})
const routes = mongoose.model('routes', routesSchema)
module.exports = routes