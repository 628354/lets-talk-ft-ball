const usermodel = require("../model/user")
const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const ObjectId = mongoose.Types.ObjectId

const { sendResetPasswordEmail } = require("../mails/forget")

exports.register = async (req, res) => {
    try {
        const { name, email, password, type } = req.body

        const finduser = await usermodel.findOne({ email: email })

        if (finduser) {
            res.send({ status: true, message: "user allready exist" })
            return
        }
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const adduser = await usermodel.create({

            name: name,
            email: email,
            password: hash,
            type: type
        })


        res.send({ status: true, message: "Successfully add user", userdetails: adduser })


    } catch (error) {
        console.log(error)
        res.send({ status: false, message: "Something went wrong!!" })
    }
}

//user login ..........................................


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body

        const finduser = await usermodel.findOne({ email: email })

        if (!finduser) {
            res.send({ status: false, message: "User not found!!" })
            return
        }


        const match = await bcrypt.compare(password, finduser.password)

        if (match) {
            const token = await jwt.sign({ _id: finduser._id, email: finduser.email }, process.env.Secret_key, { expiresIn: "2d" })

            res.set({ token: token })


            res.send({
                status: true,
                message: "User login Successfully",
                userdetails: finduser,
                token: token
            })
        } else {
            res.send({ status: false, message: "Password dont match!!" })
        }
    } catch (error) {
        res.send({ status: false, message: "Something went wrong !!" })
    }
}
//send forgetpass-link............................................
exports.sendlink = async (req, res) => {
    try {
        const { email } = req.body
        const tokendata = req.user

        const user = await usermodel.findOne({ email: email })
        if (tokendata._id == user._id) {

            sendResetPasswordEmail(email, user._id)

            res.send({ status: true, message: "forget-password link send successfully", userdetails: user })

        }

    } catch (error) {
        res.send({ status: false, message: "Something went wrong !!" })
    }
}


//forget password...........................................................

exports.forgetpassword = async (req, res) => {
    try {
        const { newpassword } = req.body
        const tokendata = req.user

        if (tokendata._id == req.params.userId) {

            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(newpassword, salt)
            const updatepassword = await usermodel.findByIdAndUpdate(req.params.userId, {
                password: hash
            }, { new: true })
            await updatepassword.save()

            res.send({
                status: true,
                message: "Successfully update password",
                userdetails: updatepassword
            })
        }

    } catch (error) {
        res.send({ status: false, message: "something went wrong !!" })
    }
}