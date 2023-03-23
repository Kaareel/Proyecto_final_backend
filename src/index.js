require("dotenv").config({ path: "./.env" });

const express = require(`express`)
const { signup, userLogin } = require('./controllers/user')

const app = express()

app.use(express.json())

app.post("/signup", signup)

app.post("/login", userLogin)

app.listen(4000, console.log(`Server ON`))

module.exports = app