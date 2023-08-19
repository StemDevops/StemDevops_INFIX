const {
  createUser,
  comparePassword,
  getUserData,
} = require("../services/destinationService.js")

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

module.exports = { search }
