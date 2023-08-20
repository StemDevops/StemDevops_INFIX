const { PrismaClient } = require("@prisma/client")
//const bcrypt = require("bcrypt")

const prisma = new PrismaClient()

const createCard = async (
  card_number,
  user_id,
  expiry_month,
  expiry_year,
  cvn
) => {
  const card = await prisma.stored_cards.create({
    data: {
      card_number: card_number,
      user_id: user_id,
      expiry_month: expiry_month,
      expiry_year: expiry_year,
      cvn: cvn,
    },
  })

  return card
}

module.exports = { createCard }
