const modelProducts = require('../Models/products')
const formResponse  = require('../Helpers/formResponse')

module.exports = {
    getProducts: (req, res) => {
        modelProducts.getProducts().then(result => {
            formResponse.formResponse(res, 200, result)
        }).catch(err => {
            console.log(err)
        })
    },

    getProductsByName : (req, res) => {
        modelProducts.getProductsByName(req.params.name).then(result => {
            formResponse.formResponse(res, 200, result)
        }).catch(err => {
            console.log(err)
        })
    },

    postProduct : (req, res) => {
        modelProducts.postProduct(req.body).then(result => {
            formResponse.formResponse(res, 200, result)
        }).catch(err => {
            console.log(err)
        })
    },

    patchProduct : (req, res) => {
        modelProducts.patchProduct(req.body, req.params.id).then(result => {
            formResponse.formResponse(res, 200, result)
        }).catch(err => {
            console.log(err)
        })
    },

    deleteProduct : (req, res) => {
        modelProducts.deleteProduct(req.params.id).then(result => {
            formResponse.formResponse(res, 200, result)
        }).catch(err => {
            console.log(err)
        })
    },

    getProductsByBranch : (req, res) => {
        modelProducts.getProductsByBranch(req.params.name).then(result => {
            formResponse.formResponse(res, 200, result)
        }).catch(err => {
            console.log(err)
        })
    },

    getProductsByType : (req, res) => {
        modelProducts.getProductsByType(req.params.name).then(result => {
            formResponse.formResponse(res, 200, result)
        }).catch(err => {
            console.log(err)
        })
    },

    getProductsByQty : (req, res) => {
        modelProducts.getProductsByQty(req.params.qty).then(result => {
            formResponse.formResponse(res, 200, result)
        }).catch(err => {
            console.log(err)
        })
    },

    getProductsPage : (req, res) => {
        modelProducts.getProductsPage(req.params.page).then(result => {
            formResponse.formResponse(res, 200, result)
        }).catch(err => {
            console.log(err)
        })
    }
}