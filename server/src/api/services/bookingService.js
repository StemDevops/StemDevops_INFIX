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
const AddBooking = async ( ship_name,depature,destination,starting_time,available_seat_count,starting_date) => {
  
try{
  await prisma.$transaction(async (tx) => {
    const spaceship = await prisma.spaceship.findFirst({
      where: {
        name: ship_name,
      },
      select: {
        ship_id: true,
      },
    })
    if (!spaceship) {
      throw new Error("Spaceship not found")
    }
    const starting_id = await prisma.local_destination.findFirst({
      where: {
        name: depature,
      },
      select: {
        local_dest_id: true,
      },
    })
    if (!starting_id) {
      throw new Error("depature not found")
    }
    const end_id = await prisma.local_destination.findFirst({
      where: {
        name: destination,
      },
      select: {
        local_dest_id: true,
      },
    })
    if (!end_id) {
      throw new Error("destination not found")
    }
    const booking = await tx.available_Booking.create({
      data:{
        spaceship:{
          connect:{
            ship_id: spaceship.ship_id,
          }
        },
        starting_id:{
          connect:{
            local_dest_id: starting_id.local_dest_id,
          }
        },
        end_id:{
          connect:{
            local_dest_id: end_id.local_dest_id,
          }
        },
        starting_time: starting_time,
        available_seat_count: available_seat_count,
        starting_date: starting_date,

      }
    })
  
    return booking
  })
}
catch (err) {
  console.log(err)
}
}

const getAvailableBookings = async (starting_id,end_id,starting_date) => {
  try {
    await prisma.$transaction(async (tx) => {
      const availableBooking = await tx.available_Booking.findMany({
        where: {
          starting_id: starting_id,
          end_id: end_id,
          starting_date: starting_date
        },
        select: {
          starting_time: true,
          spaceship:{
            select:{
              ship_type: true,
              name: true, 
            }
          },
          
          available_seat_count: true,
          
        },
      })
      const shipTypes = availableBooking.map((booking) => booking.ship_type);
      const shipPrices = await prisma.$queryRaw
      `SELECT ship_type, price
        FROM booking_spaceship
        WHERE ship_type IN (${shipTypes})`;
      
        const bookingsWithPrices = availableBooking.map((booking) => { 
            const price = shipPrices.find((price) => price.ship_type === booking.ship_type)
            return {
              ...booking,
              price: price.price,
            }}
            )
      return bookingsWithPrices
      }) 
  }
  catch (err) {
    console.log(err)
  }
}


  
  
    
module.exports = { createNewBooking, AddBooking, getAvailableBookings}
