const { PrismaClient } = require("@prisma/client")
const bcrypt = require("bcrypt")

const prisma = new PrismaClient()




const createTicket = async (booking_id, seat_num, order_id) => {
  

  const ticket = await prisma.ticket.create({
    data: {
        booking_id: booking_id,
        seat_num: seat_num,
        order_id: order_id
    },
    
  })

  return user
}
module.exports = { createTicket}
