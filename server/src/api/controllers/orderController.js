const {  createOrder} = require("../services/orderService.js")

const oneway = async (req, res) => {
  const universal_id = req.body.universal_id
  const booking_id = req.body.booking_id
  const ticket_count = req.body.ticket_count

  const hash = await getUserHash(username)
  if (!hash) {
    return res.send({ approved: false })
  }



  const roundtrip = await comparePassword(password, hash)
  console.log("Match: ", match)
  if (match) {
    console.log("Login successful")
    return res.send({ approved: true })
  } else {
    console.log("Login failed")
    return res.send({ approved: false })
  }
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



