const {
  getAvailableBookings,
  createNewBooking,
  AddBooking,
} = require("../services/bookingService")
const { getLocatioId } = require("../services/locationService")

const booking = async (req, res) => {
  console.log("Booking function")
  const depature = req.body.depature
  const destination = req.body.destination
  const starting_date = Date(req.body.starting_date)
  const starting_id = await getLocatioId(depature)
  const end_id = await getLocatioId(destination)
  console.log(req.body)

  const details = await getAvailableBookings(starting_id, end_id, starting_date)
  if (details) {
    console.log("details found")
    return res.send({ approved: true })
  }
}

module.exports = { booking }
