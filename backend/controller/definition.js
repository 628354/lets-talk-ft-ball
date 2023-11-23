const definitionmodel = require("../model/definition")
const mongoose = require("mongoose")
const ObjectId = mongoose.Types.ObjectId

exports.adddefinitions = async (req, res) => {
    try {
        const { type, content } = req.body
        const protocol = req.protocol
        const host = req.host
        const url = `${protocol}//${host}`
        const adddefinitions = await definitionmodel.create({
            image: req.file ? url + "/uploads/" + req.file.filename : "",
            definition: {
                type: type,
                content: content
            }
        })
        res.send({ status: true, mesasge: "Successfully add definition", details: adddefinitions })
    } catch (error) {
        res.send({ status: false, message: "Something went wrong !!" })
    }
}


exports.adddefinitiontype = async (req, res) => {
    try {
        const { type, content } = req.body
        const finddata = await definitionmodel.find({
            'definition': {
                $elemMatch: { 'type': type }
            }
        })
        console.log(finddata);
        if (finddata.length > 0) {
            res.send({ status: false, message: "Type allready exist" })
            return
        }
        const adddefinitionInexisting = await definitionmodel.findByIdAndUpdate(req.params.id, {
            $push: {
                definition: {
                    type: type,
                    content: content

                }
            }
        }, { new: true })

        await adddefinitionInexisting.save()
        res.send({
            status: true,
            message: "Successfully adddefinitionInexisting data",
            definitiondetails: adddefinitionInexisting
        })

    } catch (error) {
        console.log(error)
        res.send({ status: false, message: "Something went wrong !!" })
    }
}

//update existing definition content and types .................................

exports.updatedata = async (req, res) => {
    try {
        const { type, content } = req.body
        const { objectId, arrayElementId } = req.params;
        const updatedata = await definitionmodel.findOneAndUpdate({ _id: objectId, 'definition._id': arrayElementId }, {
            $set: {
                "definition.$.type": type,
                "definition.$.content": content
            }
        }, { new: true })
        await updatedata.save()
        res.send({ status: true, message: "Update definition data successfully", definitiondetails: updatedata })

    } catch (error) {
        console.log(error)
        res.send({ status: false, message: "Something went wrong !!" })
    }
}

exports.definitionDelete = async (req,res)=>{
    try {
        const definitions = await definitionmodel.findByIdAndDelete({_id:req.params.id})
        if(definitions) {
            res.status(200).send({
                mesasge:'Definitions Delete Successfully',
                success:true,
                body:definitions
            })
        } else {
            res.status(300).send({
                message:'definitions Id not found',
                success:false
            })
        }
    } catch (error) {
        res.send({status : false , message : "Something went wrong !!"})
    }
}

exports.getAllDefinition = async(req, res) => {
    try {
        const getAll = await definitionmodel.find()
        res.status(200).send({
            body:getAll,
            message:"Get All Definition Successfully",
            success:true
        })
    } catch (error) {
       console.log(error.mesasge) 
    }
}