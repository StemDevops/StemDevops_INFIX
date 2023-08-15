const express = require("express")
const userController = require("../controllers/userController.js")

const { login, register } = userController
const router = express.Router()

router.get("/")
router.post("/login", login)
router.post("/register", register)

module.exports = router
