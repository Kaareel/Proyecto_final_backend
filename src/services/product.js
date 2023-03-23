const db = require("../db")

const obtenerProducto = async ({ limits = 10, page = 0 }) => {
    try {
        const offset = (page - 1) * limits
        const formattedQuery = format('SELECT * FROM productos LIMIT %s OFFSET %s', limits, offset);
        pool.query(formattedQuery);
        const { rows: productos } = await db.query(formattedQuery)
        return productos
    } catch { }
}
const addProducto = async (titulo, descripcion, img, autor, price) => {
    const consulta =  "INSERT INTO productos values (DEFAULT, $1, $2, $3, $4,$5)";
    const values = [titulo, descripcion, img, autor, price]
    const result = await db.query(consulta, values)
    console.log(result)
}

const deleteProducto = async (id) => {
    const consulta = "DELETE FROM productos WHERE id = $1"
    const values = [id]
    const result = await db.query(consulta, values)
    
}

module.exports = { obtenerProducto, addProducto, deleteProducto }
