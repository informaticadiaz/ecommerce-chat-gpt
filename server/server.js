const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Conexión a MongoDB Atlas
mongoose.connect('mongodb+srv://informaticadiaz:wuZhdwDwWiMFYrt3@tiendaropa.prq2ouk.mongodb.net/?retryWrites=true&w=majority&appName=TiendaRopa')
  .then(() => console.log('Conexión a MongoDB Atlas establecida'))
  .catch(err => console.error('Error al conectar a MongoDB Atlas:', err));

// Rutas para consultar datos desde tu frontend
app.get('/basededatos', async (req, res) => {
  try {
    // Consultar todos los datos desde la base de datos
    // Aquí debes agregar el código para consultar los datos de tu base de datos
    res.json({ message: 'Aquí se devolverían todos los datos de la base de datos' });
  } catch (error) {
    console.error('Error al consultar datos de la base de datos:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});
