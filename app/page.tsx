"use client";

import { useState } from "react";
import { useEffect } from "react";
import { Velocimetro } from "./components/Velocimetro";
import { Status } from "./components/Status";

// 1. Este é um COMPONENTE FILHO.
// Ele é como uma função que retorna HTML (JSX).
// Ele recebe "Props" (propriedades), que são como os argumentos de uma função.

export default function Page() {
  const [valor, setValor] = useState(0);

  // Este efeito roda UMA VEZ logo que o componente aparece na tela do usuário
  useEffect(() => {
    const salvo = localStorage.getItem("velocidade");
    if (salvo) {
      setValor(parseInt(salvo));
    }
  }, []); // Array vazio = Executa apenas no "mount" (montagem)

  useEffect(() => {
    localStorage.setItem("velocidade", valor.toString());
  }, [valor]); // Roda sempre que 'valor' mudar

  useEffect(() => {
    // Criamos um intervalo que roda a cada 1 segundo (500ms)
    const timer = setInterval(() => {
      // Se a velocidade for maior que 0, diminui 1 automaticamente
      setValor((prev) => (prev > 0 ? prev - 2 : 0));
    }, 500);

    // IMPORTANTE: Limpamos o intervalo se o componente sumir (boa prática de memória)
    return () => clearInterval(timer);
  }, []); // O array vazio [] significa: "Só rode isso uma vez, quando a página abrir"

  // Sempre que o 'valor' mudar, ele salva no navegador
  useEffect(() => {
    localStorage.setItem("velocidade", valor.toString());
  }, [valor]);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-20 flex flex-col items-center gap-12">
      <h1 className="text-2xl font-bold">Painel de Controle</h1>

      {/* 2. Usamos o componente aqui e PASSAMOS o dado 'valor' para dentro dele */}
      <Velocimetro kmh={valor} />

      <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl flex gap-6">
        <button
          onClick={() => setValor(Math.min(valor + 5, 220))}
          className="bg-black text-white px-6 py-2 rounded-full"
        >
          Acelerar
        </button>

        <button
          onClick={() => setValor(valor - 5)}
          className="border border-black px-6 py-2 rounded-full"
        >
          Reduzir
        </button>
        <button
          onClick={() => setValor(0)}
          className="bg-red-600 px-6 py-2 rounded-full"
        >
          STOP
        </button>
      </div>

      <Status velocidade={valor} />
    </main>
  );
}
