const authorModel = require("../models/authorModels")

const createAuthor = async function (req, res) {
    let author = req.body
    let authorCreated = await authorModel.create(author)
    res.status(201).send({ status : true ,Data: authorCreated })
}





module.exports.createAuthor = createAuthor
