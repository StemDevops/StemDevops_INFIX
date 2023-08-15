const { PrismaClient } = require("@prisma/client")
const bcrypt = require("bcrypt")

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

module.exports = { getUserHash, comparePassword }
