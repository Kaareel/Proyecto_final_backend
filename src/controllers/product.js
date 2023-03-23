
const { obtenerProducto, addProducto, deleteProducto } = require('../services/product')

async function viewProducto(req, res) {

    try {
        const { limits, page } = req.query;
        const productos = await obtenerProducto({ limits, page });
        res.json(productos);

    } catch (error) {
        res.status(500).send(error.message);
    }
};
async function nuevoProducto(req, res) {
    try {
        const id = 1
        const { titulo, descripcion, img, price } = req.body
        await addProducto(titulo, descripcion, img, id, price)
        return res.status(201).json({titulo, img, descripcion, id, price})
        
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Producto no encontrado' })
    }
};
async function eliminarProducto(req, res) {
    try {
        const { id } = req.params
        await deleteProducto(id)
        res.send("Producto eliminado con éxito")
    }
    catch (error) {
        res.status(500).json({ message: 'Error al eliminar' })
    }
};

module.exports = {viewProducto, nuevoProducto, eliminarProducto}