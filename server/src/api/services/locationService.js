const { PrismaClient } = require("@prisma/client")
const bcrypt = require("bcrypt")

const prisma = new PrismaClient()

const getLocatioId = async (depature) => {

  const location = await prisma.local_destination.findFirst({
    where: {
      name: depature,
    },
    select: { local_dest_id: true },
  })

  return location ? location.local_dest_id : null
}
module.exports = { getLocatioId}