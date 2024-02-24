# Carrito Provider

En este archivo se crea un contexto, para ello se importa de react createContext y useContext.

tambien se utiliza PropTypes para especificar los tipos de las props.

se importa un array de objetos para obtener los productos del comercio.

se exporta una funcion llamada useCarrito que tiene el contexto con todas las funciones y los datos necesarios para que el renderizado de productos, el carrito y el filtro funciones en la app.

Se debe leer documentacion para entender el contexto en react y por que se utiliza createContext.

Se utiliza useState para crear tres estados.

El estado carrito va a representar el carrito, osea todos los productos que se agregaron a la orden de compra.

El estado productos va a definir los productos, este estado junto con el siguiente y una funcion se utilizan para filtrar los productos, el estado se inicializa con todos los productos dentro de ProductosData, pero ira cambiando segun el estado de la categoriaSeleccionada.

El estado categoriaSeleccionada se utiliza para seleccionar la categoria a trabes de una funcion y gracias a ello filtrar los productos. Esto es util si queremos crear botones con el nombre de la categoria de los productos para poder mostrar solo los productos de esa categoria.

Se crean todas las funciones necesarias para la Aplicaciones

Se agregan al contexto todas las funciones.
