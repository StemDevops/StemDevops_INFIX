const { getUserHash, comparePassword } = require("../services/orderService.js")

const one_way = async (req, res) => {
  const departure = req.body.departure
  const destination = req.body.destination
  const date = req.body.date

  const travel_modes = await getTravelMode(departure, destination, date)
  // const no_tickets = await getTicketCount(departure, destination, date)

  // const match = await comparePassword(password, hash)
  // console.log("Match: ", match)
  // if (match) {
  //   console.log("Login successful")
  //   return res.send({ approved: true })
  // } else {
  //   console.log("Login failed")
  //   return res.send({ approved: false })
  // }

  if (travel_modes.)
}

const round_trip = async (req, res) => {
  console.log("Registration function")
}

const multi_trip = async (req, res) => {
  console.log("Registration function")
}

module.exports = { one_way, round_trip, multi_trip }
