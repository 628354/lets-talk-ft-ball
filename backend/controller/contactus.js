
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
        const { bannerImage, contactusImage, en, ar } = req.body
        const contactuss = await contactus.create({
            bannerImage: bannerImage,
            contactusImage: contactusImage,
            en: {
                contact_textarea: en.contact_textarea || '',
            },
            ar: {
                contact_textarea: ar.contact_textarea || ""
            }
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
        const { en, ar, bannerImage, contactusImage } = req.body
        const update = await contactus.findByIdAndUpdate({ _id: req.params.id }, {
            bannerImage: bannerImage,
            contactusImage: contactusImage,
            en: {
                contact_textarea: en.contact_textarea || '',
            },
            ar: {
                contact_textarea: ar.contact_textarea || '',
            }
        })
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

exports.getContactUs = async (req, res) => {
    try {
        const { lung } = req.params
        const getContact = await contactus.find({}, { [lung]: 1, bannerImage: 1, contactusImage: 1 })
        res.status(200).send({
            body: getContact,
            message: "Get ContactUs Successfully",
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

exports.deleteContact = async (req, res) => {
    try {
        const deleteContact = await contactus.findByIdAndDelete({ _id: req.params.id })
        if (deleteContact) {
            res.status(200).send({
                body: deleteContact,
                message: 'Delete ContactUs Successfully',
                success: true
            })
        } else {
            res.status(500).send({
                message: 'Enternal Server Error',
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