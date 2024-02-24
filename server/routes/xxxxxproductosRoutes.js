/* global app */

// routes/productosRoutes.js

const express = require('express');
const router = express.Router();
const Producto = require('../models/productoModel');

app.get('/api/productos', (req, res) => {
    // Aquí puedes agregar la lógica para obtener todos los productos
    // de tu base de datos y enviarlos como respuesta
    res.send('¡Hola desde la ruta de productos!');
  });
  
app.post('/api/productos', (req, res) => {
    // Aquí puedes agregar la lógica para crear un nuevo producto
    // utilizando los datos proporcionados en el cuerpo de la solicitud (req.body)
    res.send('¡Hola desde la ruta de productos!');
  });
  
app.put('/api/productos/:id', (req, res) => {
    // Aquí puedes agregar la lógica para actualizar un producto
    // identificado por el ID proporcionado en los parámetros de la URL (req.params.id)
    res.send('¡Hola desde la ruta de productos!');
  });
  
app.delete('/api/productos/:id', (req, res) => {
    // Aquí puedes agregar la lógica para eliminar un producto
    // identificado por el ID proporcionado en los parámetros de la URL (req.params.id)
    res.send('¡Hola desde la ruta de productos!');
});
  


// Obtener todos los productos
router.get('/api/productos', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Obtener un producto por su ID
router.get('/api/productos/:id', async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Crear un nuevo producto
router.post('/api/productos', async (req, res) => {
  try {
    const nuevoProducto = await Producto.create(req.body);
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Actualizar un producto existente
router.put('/api/productos/:id', async (req, res) => {
  try {
    const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Eliminar un producto existente
router.delete('/api/productos/:id', async (req, res) => {
  try {
    const producto = await Producto.findByIdAndDelete(req.params.id);
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

  