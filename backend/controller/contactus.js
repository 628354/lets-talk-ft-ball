
const { sendContactusEmail } = require("../mails/contactus")
const contactus = require('../model/contactus')

exports.sendContactus = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body
        const data = {
            name: name,
            email: email,
            subject: subject,
            message: message
        }
        const savedContact = await contactus.create({
            name: name,
            email: email,
            subject: subject,
            message: message

        })
        sendContactusEmail(data)
        res.send({ status: true, message: "Successfully send details to admin", details: savedContact })
    } catch (error) {
        res.send({ status: false, message: "Something went wrong !!" })
    }
}

exports.createContactUs = async (req, res) => {
    try {
        const contactuss = await contactus.create({
            contact_textarea: req.body.contact_textarea
        })
        const result = await contactuss.save()
        res.status(200).send({
            body: result,
            message: 'Create ContactUs Successfully',
            success: true
        })
    } catch (error) {
        res.status(500).send({
            message: 'Enternal Server Error',
            success: false,
            error: error.message
        })
    }
}

exports.updateContactUs = async (req, res) => {
    try {
        const { contact_textarea } = req.body
        const update = await contactus.findByIdAndUpdate({ _id: req.params.id }, { contact_textarea })
        if (update) {
            res.status(200).send({
                body: update,
                message: 'update Contactus textarea Successfully',
                success: true
            })
        } else {
            res.status(300).send({
                message: 'ContactUs Id Not Found',
                success: false
            })
        }
    } catch (error) {
        res.status(500).send({
            message: 'Enternal Server Error',
            success: false,
            error: error.message
        })
    }
}