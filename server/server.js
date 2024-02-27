{/* const uri = "mongodb+srv://informaticadiaz:wuZhdwDwWiMFYrt3@tiendaropa.prq2ouk.mongodb.net/?retryWrites=true&w=majority&appName=TiendaRopa"; */} 
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://informaticadiaz:wuZhdwDwWiMFYrt3@tiendaropa.prq2ouk.mongodb.net/?retryWrites=true&w=majority&appName=TiendaRopa')
.then(() => console.log('Conexión a MongoDB Atlas establecida'))
.catch(err => console.error('Error al conectar a MongoDB Atlas:', err));
