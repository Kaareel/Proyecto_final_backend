require("dotenv").config({ path: "./.env" });

const express = require(`express`)
const cors = require('cors');
const { signup } = require('./controllers/user')
const {viewProducto, nuevoProducto, eliminarProducto} = require('./controllers/product')

const app = express()
app.use(cors())
app.use(express.json())

app.post("/signup", signup)
app.get("/producto", viewProducto)
app.post("/producto", nuevoProducto)
app.delete("/producto/:id", eliminarProducto)


app.listen(4000, console.log(`Server ON`))
