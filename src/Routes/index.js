const express = require('express')
const branchs = require('./branchs')
const types   = require('./types')
const router  = express.Router()



router.use('/branchs', branchs) //menggunakan endpoint/router tambahan dari router branchs
router.use('/types', types)

module.exports = router