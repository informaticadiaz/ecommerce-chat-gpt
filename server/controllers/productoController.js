const Producto = require('./models/Producto');

// Obtener todos los productos
async function obtenerProductos() {
  return await Producto.find();
}

// Obtener un producto por su ID
async function obtenerProductoPorId(id) {
  return await Producto.findById(id);
}

// Crear un nuevo producto
async function crearProducto(datosProducto) {
  return await Producto.create(datosProducto);
}

// Actualizar un producto existente
async function actualizarProducto(id, datosActualizados) {
  return await Producto.findByIdAndUpdate(id, datosActualizados, { new: true });
}

// Eliminar un producto existente
async function eliminarProducto(id) {
  return await Producto.findByIdAndDelete(id);
}

module.exports = {
  obtenerProductos,
  obtenerProductoPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
};
