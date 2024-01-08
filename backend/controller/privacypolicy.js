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

        res.status(200).send({
            body: addpolicy,
            message: ' Privacy Policy Created Successfully',
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
        const { lung } = req.params;
        const { en, ar } = req.body;
        const protocol = req.protocol;
        const host = req.hostname;
        const url = `${protocol}//${host}`;

        const updateFields = {
            image: req.file ? url + "/uploads/" + req.file.filename : "",
            [`${lung}.privacy_policy`]: en.privacy_policy || "",
            [`ar.privacy_policy`]: ar.privacy_policy || "",
        };

        const updatepolicy = await policymodel.findByIdAndUpdate(
            req.params.id,
            { $set: updateFields },
            { new: true }
        );

        res.send({
            body: updatepolicy,
            message: "Successfully update policy details",
            success: true
        });
    } catch (error) {
        res.status(500).send({
            message: 'Internal Server Error',
            success: false,
            error: error.message
        });
    }
};
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
        res.status(500).send({
            message: 'Internal Server Error',
            success: false,
            error: error.message
        });
    }
}