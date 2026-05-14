interface AvisoProps {
  id: number;
  titulo: string;
}

export function AvisoItem({ id, titulo }: AvisoProps) {
  // Lógica: se o ID for par, borda azul. Se for ímpar (else), borda laranja.
  const corBorda = id % 2 === 0 ? "border-blue-500" : "border-orange-500";

  return (
    <div
      className={`bg-slate-900 p-4 rounded-xl border-l-4 shadow-lg hover:bg-slate-800 transition-colors ${corBorda}`}
    >
      <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">
        ID: #00{id}
      </span>
      <p className="text-sm text-slate-200 mt-1 font-medium">{titulo}</p>
    </div>
  );
}
