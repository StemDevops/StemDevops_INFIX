const express = require("express")
const bookingController = require("../controllers/bookingController.js")

const { booking, placeOrder,round_trip } = bookingController
const router = express.Router()

// router.get("/")
router.post("/booking", booking)
router.post("/placeOrder", placeOrder)
router.post("/round-trip", round_trip)
//router.post("/register", register)

module.exports = router
