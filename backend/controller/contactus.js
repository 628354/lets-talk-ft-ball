
const { sendContactusEmail } = require("../mails/contactus")
const contactus = require('../model/contactus')
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
            en: {
                name: name,
                email: email,
                subject: subject,
                message: message
            },
            ar: {
                name: name,
                email: email,
                subject: subject,
                message: message
            }
        })
        sendContactusEmail(data)
        res.send({ status: true, message: "Successfully send details to admin", details: savedContact })
    } catch (error) {
        res.send({ status: false, message: "Something went wrong !!" })
    }
}

