const { createCard} = require("../services/cardService.js")

// const login = async (req, res) => {
//   const username = req.body.username
//   const password = req.body.password

//   const hash = await getUserHash(username)
//   if (!hash) {
//     return res.send({ approved: false })
//   }



//   const match = await comparePassword(password, hash)
//   console.log("Match: ", match)
//   if (match) {
//     console.log("Login successful")
//     return res.send({ approved: true })
//   } else {
//     console.log("Login failed")
//     return res.send({ approved: false })
//   }
// }

const cardSave = async (req, res) => {
  
  console.log("card save function")
  const card_number = req.body.card_number
  const user_id = req.body.user_id
  const expiry_month = req.body.expiry_month
  const expiry_year= req.body.expiry_year
  const cvn = req.body.cvn
  
  const newCard = await createCard(card_number,user_id,expiry_month,expiry_year,cvn)
  if(newCard){
    console.log("Card saved succesfully")
    return res.send({ approved: true })
  }
}

module.exports = { cardSave }
