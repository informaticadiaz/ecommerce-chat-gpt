import { useCarrito } from "../utilities/Carrito";
import PropTypes from 'prop-types';


function BotonAgregarAlCarrito({ producto }) {
  const { agregarProducto } = useCarrito();

  function handleClick() {
    agregarProducto(producto);
  }

  return <button onClick={handleClick}>Agregar al Carrito</button>;
}

export default BotonAgregarAlCarrito;

BotonAgregarAlCarrito.propTypes = {
  producto: PropTypes.object.isRequired,
};

