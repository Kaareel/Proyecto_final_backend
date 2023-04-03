const db = require('../db');

const traerProductos = async (autor, productoId) => {
  let consulta = `SELECT * FROM productos`;

  if (autor && productoId) {
    consulta += ` WHERE autor = ${autor} AND id = ${productoId}`;
  } else if (productoId) {
    consulta += ` WHERE id = ${productoId} `;
  } else if (autor) {
    consulta += ` WHERE autor = ${autor}`;
  }

  const { rows } = await db.query(consulta);

  return rows;
};

const addProducto = async (titulo, descripcion, img, autor, price) => {
  const consulta =
    'INSERT INTO productos values (DEFAULT, $1, $2, $3, $4,$5) RETURNING id, titulo, descripcion, img, price';

  const values = [titulo, img, descripcion, price, autor];
  const {
    rows: [producto],
  } = await db.query(consulta, values);

  return producto;
};

const deleteProducto = async (id) => {
  const consulta =
    'DELETE FROM productos WHERE id = $1 RETURNING id, titulo, descripcion, img, price';

  const values = [id];
  const {
    rows: [product],
  } = await db.query(consulta, values);

  return product;
};

module.exports = { traerProductos, addProducto, deleteProducto };
