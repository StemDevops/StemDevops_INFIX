const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

const createUser = async (username, password, userType, universal_id) => {
  

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
