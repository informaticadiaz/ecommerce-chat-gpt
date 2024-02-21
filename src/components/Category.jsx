export default function Category() {
  return (
    <div className="flex justify-around p-4 text-xl">
      {/* trabajar en el hover de los span poner borde transparente y un borde con color al hacer hover tambien agregar focus */}
      <span className="rounded bg-slate-500 px-4 py-2 hover:bg-slate-700">
        Camisas
      </span>
      <span className="rounded bg-slate-500 px-4 py-2 hover:bg-slate-700">
        Chomba
      </span>
      <span className="rounded bg-slate-500 px-4 py-2 hover:bg-slate-700">
        Pantalones
      </span>
      <span className="rounded bg-slate-500 px-4 py-2 hover:bg-slate-700">
        Zapatillas
      </span>
    </div>
  );
}
