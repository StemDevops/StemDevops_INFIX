const {  createOrder} = require("../services/orderService.js")
const{getBookingDetails} = require("../services/bookingService.js")
const{createTicket} = require("../services/ticketService.js")

const oneway = async (req, res) => {
  const universal_id = req.body.universal_id
  const booking_id = req.body.booking_id
  const ticket_count = req.body.ticket_count

  const booking = await getBookingDetails(booking_id)
  
}


 

const multiplanet = async (req, res) => {
  
  console.log("Registration function")
  const universal_id = req.body.universal_id
  const username = req.body.username
  const password = req.body.password
  const userType = req.body.userType
  
  const newUser = await createUser(username, password,userType, universal_id)
  if(newUser){
    console.log("Registration successful")
    return res.send({ approved: true })
  }
}



