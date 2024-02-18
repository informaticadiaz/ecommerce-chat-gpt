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
          {carrito.length === 0 && (
            <p className="text-font-bold mb-4 text-xl">
              No hay productos en el carrito
            </p>
          )}

          {/* card cart */}
          <div className="grid gap-4 md:grid-cols-1 xl:grid-cols-3">
            {/* productos en carrito */}
            <div className="space-y-4 xl:col-span-2">
              {carrito.map((producto) => (
                <div
                  className="mx-auto rounded-md bg-slate-300 p-3 font-semibold text-slate-700"
                  key={producto.id}
                >
                  {/* Agregar Imagenes a los productos 
          <img src={producto.imagen} alt={producto.nombre} />*/}
                  <p>imagen</p>
                  <div className="flex justify-between p-4">
                    <p>{producto.nombre}</p>
                    <p>${producto.precio}</p>
                  </div>
                  <div className="flex items-center justify-between p-4 ">
                    <button
                      onClick={() => restarCantidadProducto(producto.id, 1)}
                    >
                      -
                    </button>
                    <p>{producto.cantidad}</p>
                    <button
                      onClick={() => sumarCantidadProducto(producto.id, 1)}
                    >
                      +
                    </button>
                    <p>${calcularPrecioTotalProducto(producto.id)}</p>
                    <button onClick={() => eliminarProducto(producto.id)}>
                      x
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full rounded-md bg-slate-300 p-3 font-semibold text-slate-700">
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
