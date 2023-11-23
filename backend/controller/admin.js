const adminmodel = require("../model/admin")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const findadmin = await adminmodel.findOne({ email: email })
        if (findadmin) {
            res.send({ status: true, message: "admin allready exist" })
            return
        }
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        const addadmin = await adminmodel.create({
            name : name ,
            email: email,
            password: hash,
        })
        res.send({ status: true, message: "Admin Add Successfully", admindetails: addadmin })
    } catch (error) {
        console.log(error)
        res.send({ status: false, message: "Something went wrong!!" })
    }
}

//user login ..........................................

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        const findadmin = await adminmodel.findOne({ email: email })
        if (!findadmin) {
            res.send({ status: false, message: "admin not found!!" })
            return
        }
        const match = await bcrypt.compare(password, findadmin.password)
        if (match) {
            const token =  jwt.sign({ _id: findadmin._id, email: findadmin.email }, process.env.Secret_key, { expiresIn: "2d" })
            findadmin.password = "";
            res.set({ token: token })
            res.send({
                status: true,
                message: "admin login Successfully",
                userdetails: findadmin,
                token: token
            })
        } else {
            res.send({ status: false, message: "Password dont match!!" })
        }
 
    } catch (error) {
        console.log(error)
        res.send({ status: false, message: "Something went wrong !!" })
    }
}