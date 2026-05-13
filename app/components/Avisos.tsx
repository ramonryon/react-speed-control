"use client";

import { useEffect, useState } from "react";

export function Avisos() {
  const [post, setPost] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  // 1. Criamos um estado para saber se houve erro
  const [houveErro, setHouveErro] = useState(false);

  useEffect(() => {
    async function carregarDados() {
      try {
        setHouveErro(false); // Resetamos o erro antes de tentar

        // Simulando a "ligação" para o servidor
        const resposta = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );

        if (!resposta.ok) {
          throw new Error("Erro na rede"); // Força o código a pular para o CATCH
        }

        const dados = await resposta.json();
        setPost(dados);
      } catch (error) {
        // 2. Se algo deu errado acima, caímos aqui
        setHouveErro(true);
      } finally {
        // 3. Deu certo ou deu errado, paramos de mostrar "carregando"
        setLoading(false);
      }
    }

    carregarDados();
  }, []);

  // Visualização de cada estado:
  if (loading)
    return (
      <p className="text-gray-500 animate-pulse">
        Buscando alertas de tráfego...
      </p>
    );

  if (houveErro)
    return (
      <p className="text-red-500 font-bold italic">
        ⚠️ Falha ao conectar com a central.
      </p>
    );

  return (
    <div className="flex flex-col gap-4 max-w-md w-full">
      <h2 className="text-xl font-bold text-blue-400">Alertas do Sistema</h2>

      {/* Aqui a mágica acontece */}
      {post.slice(0, 5).map((item: any) => (
        <div
          key={item.id}
          className="bg-slate-900 p-4 rounded-xl border-l-4 border-blue-500 shadow-lg"
        >
          <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">
            ID: #00{item.id}
          </span>
          <p className="text-sm text-slate-200 mt-1">{item.title}</p>
        </div>
      ))}
    </div>
  );
}
