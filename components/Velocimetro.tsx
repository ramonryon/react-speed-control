export function Velocimetro({ kmh }: { kmh: number }) {
  return (
    <div className="p-6 border-2 border-dashed border-gray-300 rounded-xl text-center">
      <p className="text-gray-500 uppercase text-xs font-bold">Velocidade de Cruzeiro</p>
      <span className="text-5xl font-mono text-blue-600">{kmh}</span>
      <span className="text-xl text-blue-400 ml-2">km/h</span>
    </div>
  );
}