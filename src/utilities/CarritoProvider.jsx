import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import productosData from "../productos/Productos";

// Crear contexto para el carrito de compras
const CarritoContext = createContext();

// Hook personalizado para acceder al contexto del carrito de compras
export function useCarrito() {
  return useContext(CarritoContext);
}

// Componente proveedor del contexto del carrito de compras
export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState(productosData);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const filtrarProductosPorCategoria = (categoria) => {
    if (!categoria) {
      setProductos(productosData); // Si no hay categoría seleccionada, mostrar todos los productos
    } else {
      const productosFiltrados = productosData.filter(
        (producto) => producto.categoria === categoria,
      );
      setProductos(productosFiltrados);
    }
  };

  // Función para agregar un producto al carrito
  function agregarProducto(producto) {
    // busca el producto en el carrito
    const productoEnCarrito = carrito.find(
      (productoEnCarrito) => productoEnCarrito.id === producto.id,
    );
    if (productoEnCarrito) {
      // si el producto ya existe en el carrito, actualiza la cantidad
      actualizarCantidadProducto(
        productoEnCarrito.id,
        productoEnCarrito.cantidad + 1,
      );
    } else {
      // si el producto no existe en el carrito, lo agrega
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  }

  // Función para eliminar un producto del carrito
  function eliminarProducto(id) {
    setCarrito(carrito.filter((producto) => producto.id !== id));
  }

  // Función para actualizar la cantidad de un producto en el carrito
  function actualizarCantidadProducto(id, cantidad) {
    setCarrito(
      carrito.map((producto) => {
        if (producto.id === id) {
          return { ...producto, cantidad: cantidad };
        }
        return producto;
      }),
    );
  }

  // Función para restar una cantidad específica de un producto en el carrito
  function restarCantidadProducto(id, cantidad) {
    setCarrito(
      carrito.map((producto) => {
        if (producto.id === id) {
          return { ...producto, cantidad: producto.cantidad - cantidad };
        }
        return producto;
      }),
    );
  }

  // Función para sumar una cantidad específica de un producto en el carrito
  function sumarCantidadProducto(id, cantidad) {
    setCarrito(
      carrito.map((producto) => {
        if (producto.id === id) {
          return { ...producto, cantidad: producto.cantidad + cantidad };
        }
        return producto;
      }),
    );
  }

  // Función para calcular el total del precio de todos los productos en el carrito
  function calcularTotal() {
    return carrito.reduce(
      (total, producto) => total + producto.precio * producto.cantidad,
      0,
    );
  }

  // Función para calcular el precio total de un producto en el carrito
  function calcularPrecioTotalProducto(id) {
    const producto = carrito.find((producto) => producto.id === id);
    if (producto) {
      return producto.precio * producto.cantidad;
    }
    return 0;
  }

  // Función para sumar las unidades de todos los productos en el carrito
  function sumarUnidadesProductos() {
    return carrito.reduce(
      (totalUnidades, producto) => totalUnidades + producto.cantidad,
      0,
    );
  }

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        productos,
        categoriaSeleccionada,
        setCategoriaSeleccionada,
        filtrarProductosPorCategoria,
        setCarrito,
        setProductos,
        agregarProducto,
        eliminarProducto,
        actualizarCantidadProducto,
        restarCantidadProducto,
        sumarCantidadProducto,
        sumarUnidadesProductos,
        calcularTotal,
        calcularPrecioTotalProducto,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

// PropTypes
CarritoProvider.propTypes = {
  children: PropTypes.node,
};
