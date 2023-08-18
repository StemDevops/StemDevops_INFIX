const { PrismaClient } = require("@prisma/client")
const bcrypt = require("bcrypt")

const prisma = new PrismaClient()




const createOrder = async (universal_id, order_time, order_type, mode, ticket_count) => {
  

  const order = await prisma.order.create({
    data: {
      universal_id: universal_id,
      order_time: order_time,
      order_type: order_type,
      mode: mode,
      ticket_count: ticket_count,
    },
    
  })

  return user
}
module.exports = { createOrder}
