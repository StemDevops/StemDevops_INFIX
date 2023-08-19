const express = require("express")
const cardController = require("../controllers/cardController.js")

const { cardSave, getUserCards } = cardController
const router = express.Router()

router.get("/")
router.post("/save", cardSave)
router.post("/get", getUserCards)


module.exports = router
