const cafemodel = require("../model/cafe")

exports.addcafedata = async (req, res) => {

    try {
        const { details, title, content, league_name } = req.body
        const finddata = await cafemodel.findOne({ league_name: league_name })
        if (finddata) {
            res.send({ status: true, message: "league data allready present" })
            return
        }
        const protocol = req.protocol
        const host = req.hostname
        const url = `${protocol}//${host}`
        const date = new Date()

        const adddcafe = await cafemodel.create({
            details: details,
            // logo: req.files || req.files.logo ? url + "/uploads/" + req.files.logo[0].filename : "",
            league_name: league_name,
            cafecontent: {
                title: title,
                cafe_image: req.files || req.files.cafe_image ? url + "/uploads/" + req.files.cafe_image[0].filename : "",
                date: date,
                content: content
            }
        })
        res.send({ status: true, message: "cafe details added successfully!!", cafedetails: adddcafe })

    } catch (error) {
        console.log(error.message)
    }
}

//add data in  cafe leagues .....................................................

exports.addcafeleaguesdata = async (req, res) => {
    try {
        const { title, content } = req.body
        const { cafe_id } = req.params

        const protocol = req.protocol
        const host = req.host
        const url = `${protocol}//${host}`
        const date = new Date()
        const finddata = await cafemodel.findById(cafe_id)
        if (!finddata) {
            res.send({ status: false, message: "cafe data not found" })
            return
        }

        const finddataa = await cafemodel.find({
            'cafecontent': {
                $elemMatch: { 'title': title }
            }
        })

        if (finddataa.length > 0) {
            res.send({ status: false, message: "title allready exist" })
            return
        }

        const findAndAddData = await cafemodel.findByIdAndUpdate({ _id: cafe_id }, {
            $push: {
                cafecontent: {
                    title: title,
                    cafe_image: req.file ? url + "/uploads/" + req.file.filename : "",
                    date: date,
                    content: content
                }
            }
        }, { new: true })
        await findAndAddData.save()
        res.send({ status: true, message: "Successfully add cafe content", cafedetails: findAndAddData })
    } catch (error) {
        console.log(error.message)
    }
}

exports.updatecafecontent = async (req, res) => {
    try {

        const { title, content } = req.body
        const { cafe_id, content_id } = req.params
        const finddata = await cafemodel.findById(cafe_id)
        if (!finddata) {
            res.send({ status: false, message: "cafe data not found" })
            return
        }

        const updatedata = await cafemodel.findOneAndUpdate({ _id: cafe_id, "cafecontent._id": content_id }, {
            $set: {
                "cafecontent.title": title,
                "cafecontent.content": content
            }
        }, { new: true })

        await updatedata.save()

        res.send({ status: true, message: "Successfully update data", cafedetails: updatedata })


    } catch (error) {
        console.log(error.message)
    }
}

exports.cafe_details = async (req, res) => {
    try {
        const cafe = await cafemodel.findOne({ _id: req.params.id })
        if (cafe) {
            res.status(200).send({
                body: cafe,
                message: 'cafe Get By Id successfully',
                success: true
            })
        } else {
            res.status(300).send({
                message: 'cafe Id Not Found',
                success: false
            })
        }
    } catch (error) {
        console.log(error.message)
    }
}

exports.getAllCafe = async (req, res) => {
    try {
        const cafe = await cafemodel.find()
        res.status(200).send({
            body: cafe,
            message: 'All Cafe Get Successfully',
            success: true
        })
    } catch (error) {
        console.log(error.message)
    }
}

exports.deleteCafe = async (req, res) => {
    try {
        const deleteCaf = await cafemodel.findByIdAndDelete({ _id: req.params.id })
        if (deleteCaf) {
            res.send(200).send({
                body: deleteCaf,
                message: 'Cafe Deleted Successfully',
                success: true
            })
        } else {
            res.send(300).send({
                message: 'Cafe Id Not Found',
                success: false
            })
        }
    } catch (error) {
        console.log(error.message)
    }
}