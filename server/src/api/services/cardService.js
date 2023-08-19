const { PrismaClient } = require("@prisma/client")
//const bcrypt = require("bcrypt")

const prisma = new PrismaClient()

const createCard = async (
  card_number,
  universal_id,
  expiry_month,
  expiry_year,
  cvn
) => {
  const card = await prisma.stored_cards.create({
    data: {
      card_number: card_number,
      universal_id: universal_id,
      expiry_month: expiry_month,
      expiry_year: expiry_year,
      cvn: cvn,
    },
  })

  return card
}
const getCard = async (universal_id) => {
  const card = await prisma.stored_cards.findMany({
    where: {
      universal_id: universal_id,
    },
    
  })

  return card
}
module.exports = { createCard, getCard }
