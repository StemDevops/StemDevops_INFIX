const express = require("express")
const bookingController = require("../controllers/bookingController.js")

const { booking } = bookingController
const router = express.Router()

// router.get("/")
router.get("/booking", booking)
//router.post("/register", register)

module.exports = router
