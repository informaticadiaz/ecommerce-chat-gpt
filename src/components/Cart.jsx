import { useCarrito } from "../utilities/Carrito";

export default function Cart() {
  const { carrito } = useCarrito();

  return (
    <>
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
    </>
  );
}
