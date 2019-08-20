const express = require('express')
const products = require('../Controllers/products')
const router = express.Router()

router.get('/', products.getProducts)
router.get('/:name', products.getProductsByName)
router.post('/', products.postProduct)
router.patch('/:id', products.patchProduct)
router.delete('/:id', products.deleteProduct)

//sort products by branch, type(categorie), quantitity(qty), page
router.get('/branch/:name', products.getProductsByBranch)
router.get('/type/:name', products.getProductsByType)
router.get('/qty/:qty', products.getProductsByQty)
router.get('/page/:page', products.getProductsPage)

module.exports = router