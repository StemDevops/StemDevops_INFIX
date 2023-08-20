const express = require("express")
const cardController = require("../controllers/cardController.js")

const { cardSave } = cardController
const router = express.Router()

router.get("/")
router.post("/save", cardSave)


module.exports = router
