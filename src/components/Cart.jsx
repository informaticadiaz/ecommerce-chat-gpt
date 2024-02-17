import { useCarrito } from "../utilities/CarritoProvider";
import PropTypes from "prop-types";

export default function Cart({ mostrarCarrito, setMostrarCarrito }) {
  const {
    carrito,
    calcularTotal,
    eliminarProducto,
    restarCantidadProducto,
    sumarCantidadProducto,
    calcularPrecioTotalProducto,
  } = useCarrito();

  return (
    <>
      <div className="absolute left-0 right-0 top-0 h-screen space-y-6 bg-slate-500 p-10">
        <button className="" onClick={() => setMostrarCarrito(!mostrarCarrito)}>
          {mostrarCarrito ? "Ocultar Carrito" : "Mostrar Carrito"}
        </button>
        <h1 className="text-font-bold text-3xl">Carrito</h1>

        <div className="rounded-md bg-slate-400 p-8">
          <p className="text-font-bold mb-4 text-xl">
            {carrito.length === 0 && <p>No hay productos en el carrito</p>}
          </p>
          {/* card cart */}
          <div className="grid grid-cols-3 gap-4">
            {/* productos en carrito */}
            <div className="col-span-2 space-y-4">
              {carrito.map((producto) => (
                <div
                  className="mx-auto flex items-center justify-between rounded-md bg-slate-300 p-3 font-semibold text-slate-700"
                  key={producto.id}
                >
                  {/* Agregar Imagenes a los productos 
          <img src={producto.imagen} alt={producto.nombre} />*/}
                  <p>imagen</p>
                  <h3>{producto.nombre}</h3>
                  <p>${producto.precio}</p>
                  <button
                    onClick={() => restarCantidadProducto(producto.id, 1)}
                  >
                    -
                  </button>
                  <p>{producto.cantidad}</p>
                  <button onClick={() => sumarCantidadProducto(producto.id, 1)}>
                    +
                  </button>
                  <p>${calcularPrecioTotalProducto(producto.id)}</p>
                  <button onClick={() => eliminarProducto(producto.id)}>
                    x
                  </button>
                </div>
              ))}
            </div>
            <div className="col-span-1 mx-auto w-full space-y-8 rounded-md bg-slate-300 p-3 font-semibold text-slate-700">
              <h3>Orden</h3>
              <h3>Total</h3>
              <p>${calcularTotal()}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Cart.propTypes = {
  mostrarCarrito: PropTypes.bool.isRequired,
  setMostrarCarrito: PropTypes.func.isRequired,
};
