const db = require("../db");

const obtenerProducto = async ({ limits = "ALL", page = 1 }) => {
  const offset = (page - 1) * limits;
  const formattedQuery = `SELECT * FROM productos LIMIT ${limits} OFFSET ${offset}`


  const {
    rows
  } = await db.query(formattedQuery);

  return rows;
};
const addProducto = async (titulo, descripcion, img, autor, price) => {
  const consulta =
    "INSERT INTO productos values (DEFAULT, $1, $2, $3, $4,$5) RETURNING id, titulo, descripcion, img, price";

  const values = [titulo, img, descripcion, price, autor];
  const {
    rows: [producto],
  } = await db.query(consulta, values);

  return producto;
};

const deleteProducto = async (id) => {
  const consulta =
    "DELETE FROM productos WHERE id = $1 RETURNING id, titulo, descripcion, img, price";

  const values = [id];
  const {
    rows: [product],
  } = await db.query(consulta, values);

  return product;
};

module.exports = { obtenerProducto, addProducto, deleteProducto };