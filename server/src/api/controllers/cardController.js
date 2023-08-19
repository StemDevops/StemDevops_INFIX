const { createCard } = require("../services/cardService.js")

const cardSave = async (req, res) => {
  console.log(req.body)

  console.log("card save function")
  const card_number = req.body.card_number
  const user_id = req.body.user_id
  const expiry_month = req.body.expiry_month
  const expiry_year = req.body.expiry_year
  const cvn = req.body.cvn

  const newCard = await createCard(
    card_number,
    user_id,
    expiry_month,
    expiry_year,
    cvn
  )
  if (newCard) {
    console.log("Card saved succesfully")
    return res.send({ approved: true })
  }
}

module.exports = { cardSave }
