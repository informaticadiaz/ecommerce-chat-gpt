import { useCarrito } from "../utilities/Carrito"; // Importa el hook useCarrito para interactuar con el carrito

function Product({ nombre, precio, id }) {
  const { agregarProducto } = useCarrito(); // Obtiene la función agregarProducto del contexto del carrito

  // Maneja el clic en el botón "Agregar al Carrito"
  const handleClick = () => {
    // Crea un objeto representando el producto
    const producto = {
      nombre: nombre,
      precio: precio,
      id: id,
    };
    // Agrega el producto al carrito llamando a la función agregarProducto del contexto del carrito
    agregarProducto(producto);
  };

  return (
    <div className="producto">
      <h3>{nombre}</h3>
      <p>Precio: ${precio}</p>
      <button onClick={handleClick}>Agregar al Carrito</button>
    </div>
  );
}

export default Product;
