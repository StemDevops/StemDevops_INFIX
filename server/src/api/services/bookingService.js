const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

const getAvailableBookings = async (starting_id, end_id, starting_date) => {
  const rawQuery = prisma.$queryRaw`SELECT name,ship_type,price,EXTRACT(HOUR FROM starting_time) || ':' || EXTRACT(MINUTE FROM starting_time) AS starting_time FROM booking_view WHERE starting_id = ${starting_id}::uuid AND end_id = ${end_id}::uuid AND starting_date = ${starting_date}::date;`

  const result = await rawQuery
  return result
}

async function insertOrderAndTicket(
  booking_id,
  universal_id,
  order_time,
  order_type,
  ship_type,
  ticket_count
) {
  try {
    const ticketDataArray = new Array(ticket_count).fill({
      booking_id: booking_id, // Use the appropriate booking ID
    })


    console.log(ticketDataArray)

    const createdOrder = await prisma.order.create({
      data: {
        universal_id: universal_id,
        order_time: new Date().toISOString(),
        order_type: order_type,
        mode: ship_type,
        ticket_count: ticket_count,
      },
    })

    const createdTickets = await prisma.ticket.createMany({
      data: ticketDataArray.map((ticketData) => ({
        ...ticketData,
        order_id: createdOrder.order_id,
        seat_num: 1,
      })),
    })

    console.log("Order and tickets created successfully.")
  } catch (error) {
    console.error("Transaction failed:", error)
  } finally {
    await prisma.$disconnect()
  }
}

module.exports = { getAvailableBookings, insertOrderAndTicket }
