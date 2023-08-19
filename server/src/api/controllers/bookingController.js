const { getAvailableBookings, createNewBooking,AddBooking } = require('../services/bookingService')
const { getLocatioId } = require('../services/locationService')


const booking = async (req, res) => {
  
  console.log("Booking function")
  const depature = req.body.depature
  const destination = req.body.destination
  const starting_date = req.body.starting_date
  const starting_id = await getLocatioId(depature)
  const end_id = await getLocatioId(destination)
  
  const details = await getAvailableBookings(starting_id,end_id,starting_date)
  if(details){
    console.log("details found")
    return res.send({ approved: true })
  }
}

const addbooking= async(req, res)=>{
  console.log("Add Booking function")
  const ship_name = req.body.ship_name
  const depature = req.body.depature
  const destination = req.body.destination
  const starting_time = req.body.starting_time
  const available_seat_count = req.body.available_seat_count
  const starting_date = req.body.starting_date

  const bookingEntry = await AddBooking(ship_name,depature,destination,starting_time,available_seat_count,starting_date)
  if(bookingEntry){
    console.log("details added")
    return res.send({ approved: true })
  }
}

module.exports = { booking, addbooking }

