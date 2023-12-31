const { PrismaClient } = require("@prisma/client")
const bcrypt = require("bcrypt")

const prisma = new PrismaClient()

const getUserData = async (universal_id) => {
  const user = await prisma.credentials.findFirst({
    where: {
      universal_id: universal_id,
    },
    select: { password_hash: true, username: true },
  })

  return user ? { hash: user.password_hash, username: user.username } : null
}

const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash)
}
const createUser = async (username, password, userType, universal_id) => {
  const saltRounds = 10
  const salt = await bcrypt.genSalt(saltRounds)
  const hash = await bcrypt.hash(password, salt)

  const user = await prisma.credentials.create({
    data: {
      universal_id: universal_id,
      username: username,
      password_hash: hash,
      user_type: userType,
      points: 0,
    },
  })

  return user
}
module.exports = { getUserData, comparePassword, createUser }
