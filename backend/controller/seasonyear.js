const { syncIndexes } = require("mongoose")
const seasonyearmodel = require("../model/seasonyear")

exports.addleagueyear = async (req, res) => {
    try {
        const { name, startDate, endDate } = req.body

        const find = await seasonyearmodel.findOne({ name: name })

        if (find) {
            res.send({ status: false, message: "season allready added" })
            return
        }

        const addleagueyear = await seasonyearmodel.create({

            name: name,
            startDate: startDate,
            endDate: endDate,
            active: true
        })

        res.send({ status: true, message: "Successfully add seasonyear", seasonyears: addleagueyear })

    } catch (error) {
        res.send({ status: false, message: "Something went wrong!!" })
    }
}

exports.getyears = async (req, res) => {
    try {
        const getyears = await seasonyearmodel.find().select({ name: 1, active: 1 }).sort({ name: 1 })


        res.send({ status: true, message: "Successfully get seasonyears", seasonyears: getyears })

    } catch (error) {
        res.send({ status: false, message: "Something went wrong !!" })
    }
}

exports.updateyears = async (req, res) => {
    try {

        const { name, startDate, endDate } = req.body

        const updateyears = await seasonyearmodel.findByIdAndUpdate({
            name: name,
            startDate: startDate,
            endDate: endDate,
            active: req.body.active
        }, { new: true })

        await updateyears.save()

        res.send({ status: true, message: "Successfully update details", seasonyear: updateyears })

    } catch (error) {
        res.send({ status: false, message: "Something went wrong !!" })
    }
}
