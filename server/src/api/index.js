const express = require("express")
const { json } = require("express")
const pkg = require("body-parser")
const session = require("express-session")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const UserRoute = require("./routes/UserRoutes.js")

const { PrismaClient } = require("@prisma/client")

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

// app.get("/", (req, res) => {
//   const prisma = new PrismaClient()

//   const getUserHash = async (username) => {
//     const user = await prisma.credentials.findFirst({
//       where: {
//         username: username
//       },
//       select: { password_hash: true },
//     })

//     return user ? user.password_hash : null
//   }
//   getUserHash("samith").then((data) => console.log(data))
// })


app.use("/user", UserRoute)