const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

const getAvailableBookings = async (starting_id, end_id, starting_date) => {
  const shipPrices = await prisma.$queryRaw(starting_id,end_id,starting_date)`
    SELECT *
    FROM booking_view
    WHERE starting_id = $1 AND end_id = $2 AND starting_date = $3;
  `

  const shipDetail = await prisma.$queryRaw(
    query,
    starting_id,
    end_id,
    starting_date
  )

  return shipDetail
}

module.exports = { getAvailableBookings }
