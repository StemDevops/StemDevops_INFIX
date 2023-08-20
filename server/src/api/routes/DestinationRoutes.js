const express = require("express")
const destinationController = require("../controllers/destinationController.js")

const { search } = destinationController
const router = express.Router()

router.get("/")
router.get("/search", search)

module.exports = router
