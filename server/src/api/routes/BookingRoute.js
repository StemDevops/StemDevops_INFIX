const express = require("express")
const bookingController = require("../controllers/bookingController.js")

const { booking ,addbooking} = bookingController

const router = express.Router()

// router.get("/")
router.get("/booking", booking)
router.post("/addbooking", addbooking)
//router.post("/register", register)

module.exports = router
