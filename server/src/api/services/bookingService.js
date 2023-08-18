const { PrismaClient } = require("@prisma/client")
const bcrypt = require("bcrypt")

const prisma = new PrismaClient()


//to create new spaceship booking entry

const createNewBooking = async (ship_type, starting_id,end_id,price) => {
  

  const newBooking = await prisma.booking_spaceship.create({
    data: {
        ship_type: ship_type,
        starting_id: starting_id,
        end_id: end_id,
        price: price
    },
    
  })

  return newBooking
}
//to enter new booking to the available booking table
const AddBooking = async (booking_id, ship_id,starting_id,end_id,starting_time) => {
  

    const availableBooking = await prisma.available_Booking.create({
      data: {
            booking_id: booking_id,
            ship_id: ship_id,
            starting_id: starting_id,
            end_id: end_id,
            starting_time: starting_time
          
      },
      
    })
  
    return availableBooking
  }

module.exports = { createNewBooking, AddBooking}
