const mongoose = require('mongoose')
const routesSchema = new mongoose.Schema({
    permissionId: { type: mongoose.Schema.Types.ObjectId, ref: 'permission'},
    path: { type: String, default:"" },
    methods: { type: [String], default:""},
    permissionsRequired: { type: [String] },
}, {timestamps:true})
const routes = mongoose.model('routes', routesSchema)
module.exports = routes