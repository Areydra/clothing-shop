const express  = require('express')
const branchs  = require('./branchs')
const types    = require('./types')
const products = require('./products')
const router   = express.Router()



router.use('/branchs', branchs) //menggunakan endpoint/router tambahan dari router branchs
router.use('/types', types)
router.use('/products', products)

module.exports = router