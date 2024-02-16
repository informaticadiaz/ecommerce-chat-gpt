import { useCarrito } from "../utilities/Carrito";
import PropTypes from "prop-types";

export default function Cart({ mostrarCarrito, setMostrarCarrito }) {
  const { carrito } = useCarrito();

  return (
    <>
      <div className="absolute left-0 right-0 top-0 h-screen space-y-6 bg-slate-500 p-10">
        <button className="" onClick={() => setMostrarCarrito(!mostrarCarrito)}>
          {mostrarCarrito ? "Ocultar Carrito" : "Mostrar Carrito"}
        </button>
        <h1 className="text-font-bold text-3xl">Carrito</h1>
        <div className="flex flex-wrap gap-6 rounded-md bg-slate-400 p-6">
          {carrito.map((producto) => (
            <div
              className="mx-auto w-3/12 min-w-[200px] space-y-3 rounded-md bg-slate-200 p-3 font-semibold text-slate-700"
              key={producto.id}
            >
              {/* Agregar Imagenes a los productos 
          <img src={producto.imagen} alt={producto.nombre} />*/}
              <h3>{producto.nombre}</h3>
              <p>Precio: ${producto.precio}</p>
              <p>Cantidad: {producto.cantidad}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

Cart.propTypes = {
  mostrarCarrito: PropTypes.bool.isRequired,
  setMostrarCarrito: PropTypes.func.isRequired,
};
