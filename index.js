const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors())

app.listen(3000, console.log('Server ON'))

const { obtenerProducto } = require('./Consultas')

app.get('/productos', async (req, res) => {

    try {
      const { limits, page } = req.query;
      const productos = await obtenerProducto({ limits, page });
      res.json(productos);

    } catch (error) {
      res.status(500).send(error.message);
    }
  });