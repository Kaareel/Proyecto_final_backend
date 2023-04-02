const db = require("../db");

const obtenerProducto = async (id) => {
  const condiciones = id ? `WHERE autor = ${id}` : "";
  const consulta = `SELECT * FROM productos ${condiciones}`;
  const { rows } = await db.query(consulta);

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
