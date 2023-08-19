const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

const getAvailableBookings = async (starting_id, end_id, starting_date) => {
const shipDetail = await prisma.booking_view.findMany({
    where: {
      starting_id: starting_id,
      end_id: end_id,
      starting_date: starting_date
    },
    select: { price: true, name: true, ship_type:true},
  })

  return shipDetail

}

module.exports = {  getAvailableBookings }
