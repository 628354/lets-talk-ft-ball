const definitionmodel = require("../model/definition")
const mongoose = require("mongoose")
const ObjectId = mongoose.Types.ObjectId
const responseHelper = require('../Helpers/Response');

exports.addDefinitions = async (req, res) => {
    try {
        const { type, content } = req.body;
        const protocol = req.protocol;
        const host = req.hostname;
        const url = `${protocol}://${host}`;

        const addDefinitions = await definitionmodel.create({
            image: req.file ? `${url}/uploads/${req.file.filename}` : '',
            en: {
                definition: {
                    type: type,
                    content: content
                }
            },
            ar: {
                definition: {
                    type: type,
                    content: content
                }
            }
        });

        const result = await addDefinitions.save();
        res.status(200).send({
            status: true,
            message: 'Successfully added definition',
            body: result
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({
            status: false,
            message: 'Internal Server Error',
            error: error.message
        });
    }
};



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
            en: {
                $push: {
                    definition: {
                        type: type,
                        content: content

                    }
                },
                ar: {
                    $push: {
                        definition: {
                            type: type,
                            content: content

                        }
                    }
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
            en: {
                $set: {
                    "definition.$.type": type,
                    "definition.$.content": content
                }
            },
            ar: {
                $set: {
                    "definition.$.type": type,
                    "definition.$.content": content
                }
            }

        }, { new: true })
        await updatedata.save()
        res.send({ status: true, message: "Update definition data successfully", definitiondetails: updatedata })

    } catch (error) {
        console.log(error)
        res.send({ status: false, message: "Something went wrong !!" })
    }
}

exports.definitionDelete = async (req, res) => {
    try {
        const definitions = await definitionmodel.findByIdAndDelete({ _id: req.params.id })
        if (definitions) {
            res.status(200).send({
                mesasge: 'Definitions Delete Successfully',
                success: true,
                body: definitions
            })
        } else {
            res.status(300).send({
                message: 'definitions Id not found',
                success: false
            })
        }
    } catch (error) {
        res.send({ status: false, message: "Something went wrong !!" })
    }
}

exports.getAllDefinition = async (Request, Response) => {
    const { lung } = Request.params;
    const getAll = await definitionmodel.find({}, { [lung]: 1 })
    responseHelper[200].data = getAll;
    Response.send(responseHelper[200]);
},
    exports.getDefinitionById = async (Request, Response) => {
        const { lung } = Request.params;
        const definitions = await definitionmodel.findById({ _id: Request.params.id }, { [lung]: 1 });
        responseHelper[200].data = definitions;
        Response.send(responseHelper[200]);
    }

