// Importa el hook useCarrito para interactuar con el carrito
import { useCarrito } from "../utilities/CarritoProvider";
import PropTypes from "prop-types";

function Product({ nombre, precio, id, cantidad }) {
  // Obtiene la función agregarProducto del contexto del carrito
  const { agregarProducto } = useCarrito();

  // Define la variable producto fuera de la función

  // Maneja el clic en el botón "Agregar al Carrito"
  const handleClick = () => {
    // Llama a la función agregarProducto del contexto del carrito
    agregarProducto({ nombre, precio, id, cantidad });
  };

  return (
    <div className="m-2 flex-col space-y-3 rounded-md bg-slate-600 p-4">
      <h3>{nombre}</h3>
      <p>Precio: ${precio}</p>
      <button onClick={handleClick}>Agregar al Carrito</button>
    </div>
  );
}

Product.propTypes = {
  nombre: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  cantidad: PropTypes.number.isRequired,
};

export default Product;
