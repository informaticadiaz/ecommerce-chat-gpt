import "./App.css";
import Product from "./components/Product";
import productos from "./productos/Productos";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  return (
    <>
      <nav className="sticky bg-slate-500 p-10">
        <div className="flex justify-between">
          <span>Logo</span>
          <div>
            <button
              className=""
              onClick={() => setMostrarCarrito(!mostrarCarrito)}
            >
              {mostrarCarrito ? "Mostrar Productos" : "Mostrar Carrito"}
            </button>
          </div>
        </div>
      </nav>
      <h1 className="text-font-bold p-6 text-3xl">Ecommerce App</h1>
      {mostrarCarrito ? (
        <Cart
          mostrarCarrito={mostrarCarrito}
          setMostrarCarrito={setMostrarCarrito}
        />
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {productos.map((producto) => (
            <Product
              key={producto.id}
              img={producto.img}
              nombre={producto.nombre}
              precio={producto.precio}
              id={producto.id}
              cantidad={producto.cantidad}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default App;
