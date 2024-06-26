const { Router } = require("express")
const { addRevision } = require('../../controllers/revisions/add')
const { getRevision } = require('../../controllers/revisions/get')
const { findAllRevision } = require('../../controllers/revisions/findAll')

const router = Router()

router.post('/revision', addRevision)
router.get('/revision/all', findAllRevision)
router.get('/revision/:id', getRevision)

module.exports = router