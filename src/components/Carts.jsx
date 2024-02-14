import { useCarrito } from "../utilities/Carrito";

function BotonAgregarAlCarrito({ producto }) {
  const { agregarProducto } = useCarrito();

  function handleClick() {
    agregarProducto(producto);
  }

  return <button onClick={handleClick}>Agregar al Carrito</button>;
}

export default BotonAgregarAlCarrito;
