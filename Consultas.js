const {Pool} = require("pg");
require("dotenv").config({path:"./.env"});


const credenciales = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    allowExitOnIdle: true,
  };
  
  const pool = new Pool(credenciales);

  const obtenerProducto = async ({ limits = 10, page = 0 }) => {
  try {
    const offset = (page - 1) * limits
    const formattedQuery = format('SELECT * FROM productos LIMIT %s OFFSET %s', limits, offset);
    pool.query(formattedQuery);
    const { rows: productos } = await pool.query(formattedQuery)
    console.log(productos)

    return productos
  } catch { }
}
module.exports = { obtenerProducto }
  