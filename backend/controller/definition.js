const definition = require('../model/definition')
const responseHelper = require('../Helpers/Response');

// exports.addDefinitions = async (req, res) => {
//     try {
//         const { type, content } = req.body;
//         const protocol = req.protocol;
//         const host = req.hostname;
//         const url = `${protocol}://${host}`;

//         const addDefinitions = await definitionmodel.create({
//             image: req.file ? `${url}/uploads/${req.file.filename}` : '',
//             en: {
//                 definition: {
//                     type: type,
//                     content: content
//                 }
//             }, 
//             ar: {
//                 definition: {
//                     type: type,
//                     content: content
//                 }
//             }
//         });

//         const result = await addDefinitions.save();
//         res.status(200).send({
//             status: true,
//             message: 'Successfully added definition',
//             body: result
//         });
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send({
//             status: false,
//             message: 'Internal Server Error',
//             error: error.message
//         });
//     }
// };
module.exports = {
    addDefinitions: async (req, res) => {
        try {
            const protocol = req.protocol;
            const host = req.hostname;
            const url = `${protocol}://${host}`;

            const { image, en, ar } = req.body;

            const addDefinitions = new definition({
                image: image ? `${url}/uploads/${image}` : '',
                en: {
                    definition: en.definition || '',
                    type: en.type || '',
                    content: en.content || ''
                },
                ar: {
                    definition: ar.definition || '',
                    type: ar.type || '',
                    content: ar.content || ''
                }
            });

            const result = await addDefinitions.save();
            res.status(200).send({
                body: result,
                message: 'Definition Added Successfully',
                success: true
            });

        } catch (error) {
            res.status(500).send({
                message: "Internal Server Error",
                success: false,
                error: error.message
            });
        }
    },
    getAllDefinition: async (req, res) => {
        try {
            const { lung } = req.params
            const getall = await definition.find({}, { [lung]: 1 })
            res.status(200).send({
                body: getall,
                message: 'Get All Definitions successfully',
                success: true
            })
        } catch (error) {
            res.status(500).send({
                mesasge: "Enternal Server Error",
                success: false,
                error: error.mesasge
            })
        }
    },
    getDefinitionById: async (req, res) => {
        try {
            const { lung } = req.params
            const definitions = await definition.findById({ _id: req.params.id }, { [lung]: 1 })
            if (definitions) {
                res.status(200).send({
                    body: definitions,
                    mesasge: 'Definitions Get By Id Successfully',
                    success: true
                })
            } else {
                res.status(300).send({
                    mesasge: 'Definitions Id Not Found',
                    success: false
                })
            }

        } catch (error) {
            res.status(500).send({
                mesasge: "Enternal Server Error",
                success: false,
                error: error.mesasge
            })
        }
    },

    updatedefinition: async (req, res) => {
        try {
            const { definition, type, content } = req.body
            const { lung } = req.params
            const protocol = req.protocol;
            const host = req.hostname;
            const url = `${protocol}://${host}`;
            const update = await definition.findByIdAndUpdate({ _id: req.params.id }, { [lung]: 1 }, {
                image: req.file ? `${url}/uploads/${req.file.filename}` : '',
                en: {
                    definition: definition,
                    type: type,
                    content: content
                },
                ar: {
                    definition: definition,
                    type: type,
                    content: content
                }

            })
            if (update) {
                res.status(200).send({
                    body: update,
                    message: 'Definition Updated Successfully',
                    success: true
                })
            } else {
                res.status(300).send({
                    mesasge: 'Definitions Id Not Found',
                    success: false
                })
            }
        } catch (error) {
            res.status(500).send({
                mesasge: "Enternal Server Error",
                success: false,
                error: error.mesasge
            })
        }
    },
    deleteDefinition: async (req, res) => {
        try {
            const deletedefinition = await definition.findByIdAndDelete({ _id: req.params.id })
            if (deletedefinition) {
                res.status(200).send({
                    body: update,
                    message: 'Definition Deleted Successfully',
                    success: true
                })
            } else {
                res.status(300).send({
                    mesasge: 'Definitions Id Not Found',
                    success: false
                })
            }

        } catch (error) {
            res.status(500).send({
                mesasge: "Enternal Server Error",
                success: false,
                error: error.mesasge
            })
        }
    }

}



// exports.adddefinitiontype = async (req, res) => {
//     try {
//         const { type, content } = req.body
//         const finddata = await definitionmodel.find({
//             'definition': {
//                 $elemMatch: { 'type': type }
//             }
//         })
//         console.log(finddata);
//         if (finddata.length > 0) {
//             res.send({ status: false, message: "Type allready exist" })
//             return
//         }
//         const adddefinitionInexisting = await definitionmodel.findByIdAndUpdate(req.params.id, {
//             en: {
//                 $push: {
//                     definition: {
//                         type: type,
//                         content: content

//                     }
//                 },
//                 ar: {
//                     $push: {
//                         definition: {
//                             type: type,
//                             content: content

//                         }
//                     }
//                 }
//             }

//         }, { new: true })

//         await adddefinitionInexisting.save()
//         res.send({
//             status: true,
//             message: "Successfully adddefinitionInexisting data",
//             definitiondetails: adddefinitionInexisting
//         })

//     } catch (error) {
//         console.log(error)
//         res.send({ status: false, message: "Something went wrong !!" })
//     }
// }

//update existing definition content and types .................................

// exports.updatedata = async (req, res) => {
//     try {
//         const { type, content } = req.body
//         const { objectId, arrayElementId } = req.params;
//         const updatedata = await definitionmodel.findOneAndUpdate({ _id: objectId, 'definition._id': arrayElementId }, {
//             en: {
//                 $set: {
//                     "definition.$.type": type,
//                     "definition.$.content": content
//                 }
//             },
//             ar: {
//                 $set: {
//                     "definition.$.type": type,
//                     "definition.$.content": content
//                 }
//             }

//         }, { new: true })
//         await updatedata.save()
//         res.send({ status: true, message: "Update definition data successfully", definitiondetails: updatedata })

//     } catch (error) {
//         console.log(error)
//         res.send({ status: false, message: "Something went wrong !!" })
//     }
// }



// exports.getAllDefinition = async (Request, Response) => {
//     const { lung } = Request.params;
//     const getAll = await definitionmodel.find({}, { [lung]: 1 })
//     responseHelper[200].data = getAll;
//     Response.send(responseHelper[200]);
// },
// exports.getDefinitionById = async (Request, Response) => {
//     const { lung } = Request.params;
//     const definitions = await definitionmodel.findById({ _id: Request.params.id }, { [lung]: 1 });
//     responseHelper[200].data = definitions;
//     Response.send(responseHelper[200]);
// }

