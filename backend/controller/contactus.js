
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
        const savedContact = await contactus.create(req.body)
        sendContactusEmail(data)
        res.send({ status: true, message: "Successfully send details to admin", details: savedContact })
    } catch (error) {
        res.send({ status: false, message: "Something went wrong !!" })
    }
}

