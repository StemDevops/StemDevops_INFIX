const express = require("express")
const { json } = require("express")
const pkg = require("body-parser")
const session = require("express-session")
const cors = require("cors")
const cookieParser = require("cookie-parser")

const UserRoute = require("./routes/UserRoutes.js")
const OrderRoute = require("./routes/OrderRoutes.js")

const BookRoute = require("./routes/BookingRoute.js")

const DestinationRoute = require("./routes/DestinationRoutes.js")
const CardRoute = require("./routes/CardRoutes.js")


const app = express()
const { urlencoded } = pkg
const PORT = process.env.PORT || 3002

app.listen(PORT, () => console.log(`Server live at http://localhost:${PORT}`))

app.use(cors())
app.use(urlencoded({ extended: false }))
app.use(session({ secret: "secret", resave: true, saveUninitialized: true }))
app.use(express.static("public"))
app.set("view engine", "ejs")
app.use(json())
app.use(cookieParser())

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0

app.use("/user", UserRoute)
app.use("/order", OrderRoute)

app.use("/book", BookRoute)

app.use("/card", CardRoute)
app.use("/destination", DestinationRoute)
