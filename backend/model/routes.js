const mongoose = require('mongoose')
const routesSchema = new mongoose.Schema({
    permissionId: { type: mongoose.Schema.Types.ObjectId, ref: 'permission' },
    aboutusId:{type:mongoose.Schema.Types.ObjectId, ref:"aboutus"},
    leageBlukId:{type:mongoose.Schema.Types.ObjectId, ref:"leageBluk"},
    definitionId:{type:mongoose.Schema.Types.ObjectId, ref:'definition'},
    leagueId:{type:mongoose.Schema.Types.ObjectId, ref:'league'},
    policyId:{type:mongoose.Schema.Types.ObjectId, ref:'policy'},
    seasonId:{type:mongoose.Schema.Types.ObjectId, ref:'season'},
    teamCatlogId:{type:mongoose.Schema.Types.ObjectId, ref:'teamCatlog'},
    teamdataId:{type:mongoose.Schema.Types.ObjectId, ref:"teamdata"},
    path: { type: String, default: "" },
    methods: { type: [String], default: "" },
}, { timestamps: true })
const routes = mongoose.model('routes', routesSchema)
module.exports = routes