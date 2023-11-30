const policymodel = require("../model/privacyPolicy")


exports.addpolicy = async (req, res) => {
    try {
        const { privacy_policy } = req.body
        const protocol = req.protocol
        const host = req.host
        const url = `${protocol}//${host}`
        const addpolicy = await policymodel.create({
            image: req.file ? url + "/uploads/" + req.file.filename : "",
            privacy_policy: privacy_policy
        })

        res.send({ status: true, message: "Successfully add policy", policydetails: addpolicy })
    } catch (error) {
        console.log(error.message)
        }
}

exports.getPolicy = async (req, res) => {
    try {
        const getpolicy = await policymodel.find()
        res.send({ status: true, message: "Successfully get policy", policydetails: getpolicy })
    } catch (error) {
        console.log(error.message)
    }
}

exports.updatepolicy = async (req, res) => {
    try {

        const { privacy_policy } = req.body
        const protocol = req.protocol
        const host = req.host
        const url = `${protocol}//${host}`
        const findpolicy = await policymodel.findById(req.params.policyId)
        const updatepolicy = await policymodel.findByIdAndUpdate(req.params.policyId, {
            image: req.file ? url + "/uploads/" + req.file.filename : findpolicy.image,
            privacy_policy: privacy_policy
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

exports.deletePrivacy = async(req, res) => {
    try {
        const privacy_policy = await policymodel.findByIdAndDelete({_id:req.params.id})
        if(privacy_policy) {
            res.send(200).send({
                body:privacy_policy,
                message:'Privacy Policy Deleted Successfully',
                success:true
            })
        } else {
            res.send(300).send({
                message:'Privacy Policy Id Not Found',
                success:false
            })
        }
    } catch (error) {
        console.log(error.message)
    }
}