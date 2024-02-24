import express from 'express';
import productosRoutes from './routes/productosRoutes.js';

const app = express();

app.use(productosRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
