const leaguemodel = require("../model/league")
const path = require("path");

exports.addleague = async (req, res) => {
    try {
        
        var image = req.files.image.name;
        var uploadDir = path.join(__dirname, "../uploads", image)
        if (req.files.image) {
            req.files.image.mv(uploadDir, (err) => {
                if (err) return res.status(500).send(err)
            })
        }
        const { leaguename, description, meta_Tag_Title, meta_Tag_Description, meta_Tag_Keywords, blog_Category,
            sort_Order, status } = req.body

        const find = await leaguemodel.findOne({ leaguename: leaguename })
        if (find) {
            res.send({ status: true, message: "league allready present" })
            return
        }

        const addleage = await leaguemodel.create({
            leaguename: leaguename,
            image:image,
            description: description,
            meta_Tag_Title: meta_Tag_Title,
            meta_Tag_Description: meta_Tag_Description,
            meta_Tag_Keywords: meta_Tag_Keywords,
            blog_Category: blog_Category,
            sort_Order: sort_Order,
            status: status
        })
        const result = await addleage.save()
        res.status(200).send({
            body:result,
            message:'League Add Successfully',
            success:true
        })
    } catch (error) {
        res.status(500).send({
            message:'Enternal Server Error',
            success:false,
            error:error.message
        })
    }
}


// get all leagues details............................................

exports.getleagues = async (req, res) => {
    try {
        const getleagues = await leaguemodel.find()
        res.send({ status: true, message: "Successfully get leaguedetails", leaguedetails: getleagues })
    } catch (error) {
        console.log(error.message)
    }
}

exports.getById = async (req,res)=>{
    try {
        const getById = await leaguemodel.findById({_id:req.params.id})
        if(getById) {
            res.send({status : true , message : "Successfully get league data" , leaguedetails : getById})
        } else {
            res.send({status:false, messages:'League Id not found'})
        }
    } catch (error) {
    }
}

exports.update = async (req, res) => {
    try {

        var image = req.files.image.name;
        var uploadDir = path.join(__dirname, "../uploads", image)
        if (req.files.image) {
            req.files.image.mv(uploadDir, (err) => {
                if (err) return res.status(500).send(err)
            })
        }
        const { leaguename, description, meta_Tag_Title, meta_Tag_Description, meta_Tag_Keywords, blog_Category,
            sort_Order, status } = req.body

        // const protocol = req.protocol
        // const host = req.host
        // const url = `${protocol}//${host}`
        const findleague = await leaguemodel.findById(req.params.leagueId)
        if (!findleague) {
            res.send({ status: true, message: "league data not found!!" })
            return
        }

        const update = await leaguemodel.findByIdAndUpdate(req.params.leagueId, {
            leaguename: leaguename,
            // image: req.file ? url + "/uploads/" + req.file.filename : findleague.image ,
            image:image,
            description: description,
            meta_Tag_Title: meta_Tag_Title,
            meta_Tag_Description: meta_Tag_Description,
            meta_Tag_Keywords: meta_Tag_Keywords,
            blog_Category: blog_Category,
            sort_Order: sort_Order,
            status: status
        }, { new: true })

        await update.save()
        res.send({ status: true, message: "Successfully Update Details", updatedetails: update })
    } catch (error) {
        console.log(error)
        res.send({ status: false, message: "Something went wrong !!" })
    }
}

//delete data .........................................

exports.delete = async (req, res) => {
    try {
        const remove = await leaguemodel.findByIdAndDelete(req.params.leagueId)
        res.send({ status: true, message: "Successfully remove leaguedata", removedetails: remove })
    } catch (error) {
        res.send({ status: false, message: "Something went wrong !!" })
    }
}