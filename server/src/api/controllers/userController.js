const {
  createUser,
  comparePassword,
  getUserData,
} = require("../services/userService.js")

const login = async (req, res) => {
  const universal_id = req.body.universal_id
  const password = req.body.password

  const userData = await getUserData(universal_id)
  if (!userData) {
    return res.send({ approved: false })
  }

  const {hash, username} = userData

  const match = await comparePassword(password, hash)
  console.log("Match: ", match)
  if (match) {
    console.log("Login successful")
    return res.send({ approved: true, username: username })
  } else {
    console.log("Login failed")
    return res.send({ approved: false })
  }
}

const register = async (req, res) => {
  console.log("Registration function")
  const universal_id = req.body.universal_id
  const username = req.body.username
  const password = req.body.password
  const userType = req.body.userType

  const newUser = await createUser(username, password, userType, universal_id)
  if (newUser) {
    console.log("Registration successful")
    return res.send({ approved: true })
  }
}

module.exports = { login, register }
