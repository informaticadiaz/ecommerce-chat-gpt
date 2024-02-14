import "./App.css";
import Product from "./components/Product";
import productos from "./productos/Productos";

function App({
  agregarProducto,
  eliminarProducto,
  actualizarCantidadProducto,
}) {
  return (
    <>
      <h1>Ecommerce App</h1>
      {productos.map((producto) => (
        <Product
          nombre={producto.nombre}
          precio={producto.precio}
          id={producto.id}
          cantidad={producto.cantidad}
        />
      ))}
    </>
  );
}

export default App;
