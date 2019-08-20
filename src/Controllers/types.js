const types = require('../Models/types')
const formResponse = require('../Helpers/formResponse')

module.exports = {
    getTypes : (req, res) => {
        types.getTypes().then(result => {
            formResponse.formResponse(res, 200, result)
        }).catch(err => {
            console.log(err)
        })
    },

    getTypeById : (req, res) => {
        types.getTypeById(req.params.id).then(result => {
            formResponse.formResponse(res, 200, result)
        }).catch(err => {
            console.log(err)
        })
    },

    postType: (req, res) => {
        types.postType(req.body).then(result => {
            formResponse.formResponse(res, 200, result)
        }).catch(err => {
            console.log(err)
        })
    },

    patchType: (req,res) => {
        types.patchType(req.body, req.params.id).then(result => {
            formResponse.formResponse(res, 200, result)
        }).catch(err => {
            console.log(err)
        })
    },

    deleteType: (req, res) => {
        types.deleteType(req.params.id).then(result => {
            formResponse.formResponse(res, 200, result)
        }).catch(err => {
            console.log(err)
        })
    }
}