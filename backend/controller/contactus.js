
const { sendContactusEmail } = require("../mails/contactus")


exports.sendContactus = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body
        const data = {
            name: name,
            email: email,
            subject: subject,
            message: message
        }
        sendContactusEmail(data)
        res.send({ status: true, message: "Successfully send details to admin", details: data })
    } catch (error) {
        res.send({ status: false, message: "Something went wrong !!" })
    }
}

