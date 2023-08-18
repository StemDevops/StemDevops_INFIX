const { PrismaClient } = require("@prisma/client")
const bcrypt = require("bcrypt")

const prisma = new PrismaClient()




const createOrder = async (username, password, userType) => {
  const saltRounds = 10
  const salt = await bcrypt.genSalt(saltRounds)
  const hash = await bcrypt.hash(password, salt)

  const user = await prisma.credentials.create({
    data: {
      username: username,
      password_hash: hash,
      user_type: userType,
    },
  })

  return user
}
module.exports = { createUser}
