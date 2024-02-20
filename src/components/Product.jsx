// Importa el hook useCarrito para interactuar con el carrito
import { useState } from "react";
import { useCarrito } from "../utilities/CarritoProvider";
import PropTypes from "prop-types";

function Product({ nombre, precio, id, cantidad, img }) {
  // Obtiene la función agregarProducto del contexto del carrito
  const { agregarProducto } = useCarrito();
  const [showModal, setShowModal] = useState(false);

  // Define la variable producto fuera de la función

  // Maneja el clic en el botón "Agregar al Carrito"
  const handleClick = () => {
    // Llama a la función agregarProducto del contexto del carrito
    agregarProducto({ nombre, precio, id, cantidad, img });
    setShowModal(true); // Mostrar modal solo para esta tarjeta
    setTimeout(() => setShowModal(false), 1500); // Ocultar modal después de 5 segundos
  };

  return (
    <div className="m-4 flex-col space-y-3 rounded-md bg-slate-600 p-4">
      <h3>{nombre}</h3>
      <img className="mx-auto " src={img} alt={nombre} />
      <p>Precio: ${precio}</p>
      {/* Modal */}
      {showModal && (
        <div className="">
          <p>Producto agregado</p>
        </div>
      )}
      <button onClick={handleClick}>Agregar al Carrito</button>
    </div>
  );
}

Product.propTypes = {
  nombre: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  cantidad: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};

export default Product;
