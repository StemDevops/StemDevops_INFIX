const { PrismaClient } = require("@prisma/client")
const bcrypt = require("bcrypt")

const prisma = new PrismaClient()

const getDestination = async (searchEntry) => {
  const entries = await prisma.local_destination.findMany({
    where: {
      name: {
        startsWith: searchEntry,
      },
    },
    select: { name: true },
  })

  return entries ? entries : null
}

module.exports = { getDestination }
