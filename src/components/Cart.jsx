import { useCarrito } from "../utilities/Carrito";
import PropTypes from 'prop-types';


export default function Cart({ mostrarCarrito, setMostrarCarrito }) {
  const { carrito } = useCarrito();

  return (
    <>
      <div className="absolute top-0 p-10 right-0 left-0 bg-slate-500 h-screen">
        <button className="" onClick={() => setMostrarCarrito(!mostrarCarrito)}>Mostrar Carrito</button>
        <div>Carrito</div>

        {carrito.map((producto) => (
          <div key={producto.id}>

            {/* Agregar Imagenes a los productos 
          <img src={producto.imagen} alt={producto.nombre} />*/}
            <h3>{producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
            <p>Cantidad: {producto.cantidad}</p>
          </div>
        ))}
      </div>
    </>
  );
}

Cart.propTypes = {
  mostrarCarrito: PropTypes.bool.isRequired,
  setMostrarCarrito: PropTypes.func.isRequired,
};
