const express = require('express')
const router  = express.Router()
const types   = require('../Controllers/types')

router.get('/', types.getTypes)
router.get('/:id', types.getTypeById)
router.post('/', types.postType)
router.patch('/:id/update', types.patchType)
router.delete('/:id/delete', types.deleteType)

module.exports = router