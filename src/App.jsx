import "./App.css";
import Product from "./components/Product";
import productos from "./productos/Productos";
import Cart from "./components/Cart";

function App({
  agregarProducto,
  eliminarProducto,
  actualizarCantidadProducto,
}) {
  return (
    <>
      <h1>Ecommerce App</h1>
      <Cart />
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
