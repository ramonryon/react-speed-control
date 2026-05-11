export function Status({ velocidade }: { velocidade: number }) {
  // Se a condição for real, o componente já "morre" aqui e retorna o Perigo
  if (velocidade > 100) {
    return (
      <p className="text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-pulse">
        PERIGO!
      </p>
    );
  }
  if (velocidade === 0) {
    return <p className="text-blue-500 uppercase font-bold">VEÓCULO PARADO</p>;
  }
  // Se não entrou no IF acima, ele executa esta linha por padrão
  return <p className="text-green-500 font-bold">ESTÁVEL (OK)</p>;
}
