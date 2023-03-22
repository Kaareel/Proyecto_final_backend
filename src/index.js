require("dotenv").config({ path: "./.env" });

const express = require(`express`)
const { signup } = require('./controllers/user')

const app = express()

app.use(express.json())

app.post("/signup", signup)

app.listen(4000, console.log(`Server ON`))
