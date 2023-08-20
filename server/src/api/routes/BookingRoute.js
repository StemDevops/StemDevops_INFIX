const express = require("express")
const bookingController = require("../controllers/bookingController.js")


const { booking, placeOrder } = bookingController
const router = express.Router()

// router.get("/")
router.post("/booking", booking)
router.post("/placeOrder", placeOrder)

//router.post("/register", register)

module.exports = router
