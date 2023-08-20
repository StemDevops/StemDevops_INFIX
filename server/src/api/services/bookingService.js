const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

const getAvailableBookings = async (starting_id, end_id, starting_date) => {
  const rawQuery = prisma.$queryRaw`SELECT * FROM booking_view WHERE starting_id = ${starting_id}::uuid AND end_id = ${end_id}::uuid AND starting_date = ${starting_date};`

  const result = await rawQuery
  return result
}

module.exports = { getAvailableBookings }
