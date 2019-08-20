const modelBranchs = require('../Models/branchs')
const formResponse = require('../Helpers/formResponse')

module.exports = {
    getBranchs : (req, res) => {
        modelBranchs.getBranchs().then(result => { //then = isi dari resolve promise yg di model
            formResponse.formResponse(res, 200, result) //menggunakan method formResponse dari file formResponse.js
        }).catch(err => { //catch = isi dari reject promise yg di model
            console.log(err)
        })
    },

    getBranchsById : (req, res) => {
        modelBranchs.getBranchsById(req.params.id).then(result => {
            formResponse.formResponse(res, 200, result)
        }).catch(err => {
            console.log(err)
        })
    },

    postBranch: (req, res) => {
        modelBranchs.postBranch(req.body).then(result => {
            formResponse.formResponse(res, 200, result)
        }).catch(err => {
            console.log(err)
        })
    },

    patchBranch: (req, res) => {
        modelBranchs.patchBranch(req.body, req.params.id).then(result => {
            formResponse.formResponse(res, 200, result)
        }).catch(err => {
            console.log(err)
        })
    },

    deleteBranch: (req, res) => {
        modelBranchs.deleteBranch(req.params.id).then(result => {
            formResponse.formResponse(res, 200, result)
        }).catch(err => {
            console.log(err)
        })
    }
}