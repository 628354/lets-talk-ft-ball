const bannerImage = require('../model/bannerImage')
const path = require('path')

module.exports = {
    createBanner: async (req, res) => {
        try {
            const protocol = req.protocol
            const host = req.hostname
            const url = `${protocol}//${host}`
            const { name, status } = req.body
            
            const banner = await bannerImage.create({
                image: req.file ? url + "/uploads/" + req.file.filename : " ",
                name:name,
                status:status
            })
            const result = await banner.save()
            res.status(200).send({
                body: result,
                message: 'Banner Create Successfully',
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
}