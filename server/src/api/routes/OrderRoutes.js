const express = require("express")
const orderController = require("../controllers/orderController.js")

const { one_way, round_trip, multi_trip } = orderController
const router = express.Router()

router.get("/")
router.post("/one-way", one_way)
router.post("/round-trip", round_trip)
router.post("/multi-planet", multi_trip)

module.exports = router
