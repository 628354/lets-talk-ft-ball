const seasonyearmodel = require("../model/seasonyear")

exports.addleagueyear = async (req, res) => {
    try {
        const { season_Title , status ,sort_Order } = req.body
        const find = await seasonyearmodel.findOne({ season_Title: season_Title })
        if (find) {
            res.send({ status: false, message: "season allready added" })
            return
        }

        const addleagueyear = await seasonyearmodel.create({
            season_Title: season_Title,
            sort_Order : sort_Order , 
            status: status
        })

        res.send({ status: true, message: "Successfully add seasonyear", seasonyears: addleagueyear })
    } catch (error) {
        console.log(error)
        res.send({ status: false, message: "Something went wrong!!" })
    }
}

exports.getyears = async (req, res) => {
    try {
        const getyears = await seasonyearmodel.find().sort({ season_Title: 1 })
        res.send({ status: true, message: "Successfully get seasonyears", seasonyears: getyears })
    } catch (error) {
        res.send({ status: false, message: "Something went wrong !!" })
    }
}

exports.getById = async (req,res)=>{
    try {
        const getById = await seasonyearmodel.findById(req.params.yearId)
        res.send({status : true , message : "Successfully get seasonyear data" , seasonyears : getById})
    } catch (error) {
        res.send({status : false , message : "Something went wrong !!"})
    }
}


exports.updateyears = async (req, res) => {
    try {
        const { season_Title ,status , sort_Order} = req.body
        console.log(req.body)
        const updateyears = await seasonyearmodel.findByIdAndUpdate(req.params.yearId , {
            season_Title: season_Title,
            sort_Order : sort_Order ,
            status: status
        }, { new: true })

        await updateyears.save()
        res.send({ status: true, message: "Successfully update details", seasonyear: updateyears })
    } catch (error) {
        res.send({ status: false, message: "Something went wrong !!" })
    }
}


exports.removeyear = async (req,res)=>{
    try {
        const removeyear = await seasonyearmodel.findByIdAndDelete(req.params.yearId)
        res.send({status : true , message : "Successfully seasonyear" , removeyear : removeyear })
    } catch (error) {
        res.send({status : false , message : "Something went wrong !!"})
    }
}