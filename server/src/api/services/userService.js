
const { PrismaClient } = require("@prisma/client")
const bcrypt = require("bcrypt")
const userContext = require("./UserContext")
const prisma = new PrismaClient()

const getUserHash = async (username) => {

  const user = await prisma.credentials.findFirst({
    where: {
      username: username,
    },
    select: { password_hash: true },
  })

  return user ? user.password_hash : null
}

const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash)
}
const createUser = async (username, password, userType) => {
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
module.exports = { getUserHash, comparePassword , createUser}
