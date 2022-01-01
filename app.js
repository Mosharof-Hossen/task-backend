const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const cors = require("cors");
const { signInUpRoute } = require("./routers/riderRouter");
const { allUser } = require("./controllers/userController");

// const { categoryRouters } = require("./routers/categoryRouters")
// const { productRouter } = require("./routers/ProductRouter")
// const { cartRouters } = require("./routers/cartRouter")
// const { profileRouter } = require("./routers/profileRouter")
// const { paymentRoute } = require("./routers/paymentRouter")
// const { purchasRouter } = require("./routers/OrderRouter")
const bodyParser = require('body-parser')

const app = express()

app.use(express.urlencoded({ extended: true }))
// app.use(bodyParser.json())



app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
// app.use(express.static("public"))

app.use("/api/user", signInUpRoute)
app.use("/api/users", allUser)

console.log(process.env.DB_PASSWORD);
let DB = process.env.MONGODB_SERVER.replace("<password>", process.env.DB_PASSWORD)
mongoose.connect(DB)
    .then(() => console.log("Connected to mongodb"))
    .catch(err => console.log(err))

let port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Example app listening at http://localhost: ${port}`)
})