const {
  getAvailableBookings,
  insertOrderAndTicket
} = require("../services/bookingService")
const { getLocatioId } = require("../services/locationService")

const booking = async (req, res) => {
  console.log("Booking function")
  const depature = req.body.depature
  const destination = req.body.destination
  const starting_date = req.body.starting_date
  const starting_id = await getLocatioId(depature)
  const end_id = await getLocatioId(destination)
  console.log(req.body)

  const details = await getAvailableBookings(starting_id, end_id, starting_date)
  if (details) {
    console.log("details found")
    console.log(details)
    return res.send({ approved: true })
  }
}

const placeOrder = async (req, res) => {
  console.log("placeOrder function")
  const {booking_id, universal_id, order_time, order_type, ship_type, ticket_count} = req.body
  const result = await insertOrderAndTicket(booking_id, universal_id, order_time, order_type, ship_type, ticket_count)

    if (result) {
    console.log("confirmed")
    console.log(result)
    return res.send({ approved: true })
  }

}


module.exports = { booking,placeOrder }
