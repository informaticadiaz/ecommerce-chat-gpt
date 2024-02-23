/* global app */

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
  