const express = require('express')
const branchs = require('../Controllers/branchs')
const router = express.Router()

//disambungkan dari router yg ada di index, jika di index memakai router.use('/branchs') maka akan menjadi

router.get('/', branchs.getBranchs) // ('/branchs')
router.get('/:id', branchs.getBranchsById) // ('/branchs/:id')
router.post('/', branchs.postBranch) // ('/branchs')
router.patch('/:id', branchs.patchBranch) // ('/branch/:id/update')
router.delete('/:id', branchs.deleteBranch) //('/branch/:id/delete')

module.exports = router