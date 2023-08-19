const { getDestination } = require("../services/destinationService.js")

const search = async (req, res) => {
  const searchEntry = req.query.searchEntry
  console.log(searchEntry)
  const destinations = await getDestination(searchEntry)
  if (destinations) {
    console.log("Query successful")
    console.log(destinations)
    return res.send({ destinations: destinations })
  }
}

module.exports = { search }
