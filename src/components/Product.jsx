// Importa el hook useCarrito para interactuar con el carrito
import { useCarrito } from "../utilities/CarritoProvider";
import PropTypes from "prop-types";

function Product({ nombre, precio, id, cantidad }) {
  // Obtiene la función agregarProducto del contexto del carrito

  const { carrito, agregarProducto, actualizarCantidadProducto } = useCarrito();

  // Define la variable producto fuera de la función
  const producto = {
    nombre: "",
    precio: 0,
    id: 0,
    cantidad: 0,
  };

  // Maneja el clic en el botón "Agregar al Carrito"
  const handleClick = () => {
    // Busca el producto en el carrito
    const productoEnCarrito = carrito.find((producto) => producto.id === id);

    // Actualiza las propiedades del objeto producto
    // Si el producto no está en el carrito, agrégalo
    if (!productoEnCarrito) {
      agregarProducto({ ...producto, nombre, precio, id, cantidad });
    } else {
      // Actualiza la cantidad del producto
      actualizarCantidadProducto(id, productoEnCarrito.cantidad + 1);
    }
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
