const express = require('express')
const branchs = require('./branchs')
const router = express.Router()



router.use('/branchs', branchs) //menggunakan endpoint/router tambahan dari router branchs

module.exports = router