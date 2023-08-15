const { getUserHash, comparePassword } = require("../services/userService.js")

const login = async (req, res) => {
  const username = req.body.username
  const password = req.body.password

  const hash = await getUserHash(username)
  if (!hash) {
    return res.send({ approved: false })
  }



  const match = await comparePassword(password, hash)
  console.log("Match: ", match)
  if (match) {
    console.log("Login successful")
    return res.send({ approved: true })
  } else {
    console.log("Login failed")
    return res.send({ approved: false })
  }
}

const register = async (req, res) => {
  console.log("Registration function")
}

module.exports = { login, register }
