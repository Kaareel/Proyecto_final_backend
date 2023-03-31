const {
    obtenerProducto,
    addProducto,
    deleteProducto,
  } = require("../services/product");
  
  async function getProducto(req, res) {
    try {
      const { limits, page } = req.query;
      const productos = await obtenerProducto({ limits, page });
  
      res.status(200).json(productos);
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: "Hubo un error al obtener los productos" });
    }
  }
  
  async function nuevoProducto(req, res) {
    try {
      const id = 1;
      const { titulo, descripcion, img, price } = req.body;
      const producto = await addProducto(titulo, descripcion, img, id, price);
      return res.status(201).json({ producto });
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: "Hubo un error al agregar un producto" });
    }
  }
  async function eliminarProducto(req, res) {
    try {
      const { id } = req.params;
      const producto = await deleteProducto(id);
      res.status(200).json({ producto });
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: "Hubo un error al eliminar un producto" });
    }
  }
  
  module.exports = { getProducto, nuevoProducto, eliminarProducto };