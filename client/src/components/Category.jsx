import { useCarrito } from "../utilities/CarritoProvider";

export default function Category() {
  const { filtrarProductosPorCategoria } = useCarrito();

  const handleClick = (categoria) => {
    filtrarProductosPorCategoria(categoria);
  };

  return (
    <div className="flex justify-around p-4 text-xl">
      {/* trabajar en el hover de los span poner borde transparente y un borde con color al hacer hover tambien agregar focus */}
      <span
        onClick={() => handleClick("")}
        className="rounded bg-slate-500 px-4 py-2 hover:bg-slate-700"
      >
        Todo
      </span>
      <span
        onClick={() => handleClick("camisas")}
        className="rounded bg-slate-500 px-4 py-2 hover:bg-slate-700"
      >
        Camisas
      </span>
      <span
        onClick={() => handleClick("chombas")}
        className="rounded bg-slate-500 px-4 py-2 hover:bg-slate-700"
      >
        Chombas
      </span>
      <span
        onClick={() => handleClick("pantalones")}
        className="rounded bg-slate-500 px-4 py-2 hover:bg-slate-700"
      >
        Pantalones
      </span>
      <span
        onClick={() => handleClick("zapatillas")}
        className="rounded bg-slate-500 px-4 py-2 hover:bg-slate-700"
      >
        Zapatillas
      </span>
    </div>
  );
}
