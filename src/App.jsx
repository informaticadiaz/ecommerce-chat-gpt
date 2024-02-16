import "./App.css";
import Product from "./components/Product";
import productos from "./productos/Productos";
import Cart from "./components/Cart";
import { useState } from "react";



function App() {

  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  return (
    <>
      <nav className="fixed top-0 right-0 left-0 p-10 bg-slate-500">
        <div className="flex justify-between">

          <span>Logo</span>
          <div>
            <button className="" onClick={() => setMostrarCarrito(!mostrarCarrito)}>Mostrar Carrito</button>
            {mostrarCarrito && <Cart mostrarCarrito={mostrarCarrito} setMostrarCarrito={setMostrarCarrito} />}
          </div>
        </div>
      </nav>
      <h1 className="text-3xl text-font-bold underline">Ecommerce App</h1>
      <div className="grid grid-cols-3 gap-4">
        {productos.map((producto) => (
          <Product
            key={producto.id}
            nombre={producto.nombre}
            precio={producto.precio}
            id={producto.id}
            cantidad={producto.cantidad}
          />
        ))}
      </div>

    </>
  );
}

export default App;
