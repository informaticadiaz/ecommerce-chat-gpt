import "./App.css";
import Product from "./components/Product";
import productos from "./productos/Productos";

function App() {
  return (
    <>
      <h1>Ecommerce App</h1>
      {productos.map((producto) => (
        <Product
          nombre={producto.nombre}
          precio={producto.precio}
          id={producto.id}
        />
      ))}
    </>
  );
}

export default App;
