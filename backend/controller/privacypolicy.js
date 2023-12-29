const policymodel = require("../model/privacyPolicy")


exports.addpolicy = async (req, res) => {
    try {
        const { en, ar } = req.body
        const protocol = req.protocol
        const host = req.host
        const url = `${protocol}//${host}`
        const addpolicy = await policymodel.create({
            image: req.file ? url + "/uploads/" + req.file.filename : "",
            en: {
                privacy_policy: en.privacy_policy || ""
            },
            ar: {
                privacy_policy: ar.privacy_policy || ""

            }
        })

        res.send({ status: true, message: "Successfully add policy", policydetails: addpolicy })
    } catch (error) {
        console.log(error.message)
    }
}

exports.getPolicy = async (req, res) => {
    try {
        const { lung } = req.params
        const getpolicy = await policymodel.find({}, { [lung]: 1 })
        res.status(200).send({
            body: getpolicy,
            message: 'Get Privacy Policy Successfully',
            success: true
        })
    } catch (error) {
        res.status(500).send({
            message: 'Internal Server Error',
            success: false,
            error: error.message
        });
    }
}


exports.updatepolicy = async (req, res) => {
    try {

        const { en, ar } = req.body
        const protocol = req.protocol
        const host = req.host
        const url = `${protocol}//${host}`
        const updatepolicy = await policymodel.findByIdAndUpdate({ _id: req.params.id }, { [lung]: 1 }, {
            image: req.file ? url + "/uploads/" + req.file.filename : "",
            en: {
                privacy_policy: en.privacy_policy || ""
            },
            ar: {
                privacy_policy: ar.privacy_policy || ""
            }
        }, { new: true })

        await updatepolicy.save()
        res.send({
            status: true,
            message: "Successfully update policy details",
            policydetails: updatepolicy
        })

    } catch (error) {
        console.log(error.message)
    }
}

exports.deletePrivacy = async (req, res) => {
    try {
        const privacy_policy = await policymodel.findByIdAndDelete({ _id: req.params.id })
        if (privacy_policy) {
            res.send(200).send({
                body: privacy_policy,
                message: 'Privacy Policy Deleted Successfully',
                success: true
            })
        } else {
            res.send(300).send({
                message: 'Privacy Policy Id Not Found',
                success: false
            })
        }
    } catch (error) {
        console.log(error.message)
    }
}