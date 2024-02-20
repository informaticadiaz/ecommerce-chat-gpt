import "./App.css";
import productos from "./productos/Productos";
import Category from "./components/Category";
import Product from "./components/Product";
import Cart from "./components/Cart";

import { useState } from "react";
import { useCarrito } from "./utilities/CarritoProvider"; // Asegúrate de importar el hook useCarrito

function App() {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const { sumarUnidadesProductos } = useCarrito(); // Obtén la función sumarUnidadesProductos del contexto del carrito

  return (
    <>
      <nav className="sticky bg-slate-500 p-10">
        <div className="flex justify-between">
          <span>Logo</span>
          <div>
            {/* Renderiza el resultado de la función sumarUnidadesProductos */}
            <button
              className=""
              onClick={() => setMostrarCarrito(!mostrarCarrito)}
            >
              {/* muestra camtodad de productos */}
              {sumarUnidadesProductos()}
              {mostrarCarrito ? "Mostrar Productos" : "Mostrar Carrito"}
            </button>
          </div>
        </div>
      </nav>
      <h1 className="text-font-bold p-6 text-3xl">Ecommerce App</h1>
      <Category />
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
