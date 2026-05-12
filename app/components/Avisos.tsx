"use client";

import { useEffect, useState } from "react";

export function Avisos() {
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  // 1. Criamos um estado para saber se houve erro
  const [houveErro, setHouveErro] = useState(false);

  useEffect(() => {
    async function carregarDados() {
      try {
        setHouveErro(false); // Resetamos o erro antes de tentar

        // Simulando a "ligação" para o servidor
        const resposta = await fetch(
          "https://jsonplaceholder.typicode.com/posts/2",
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
    <div className="bg-slate-900 p-4 rounded-lg border border-blue-500/30 max-w-md">
      <h3 className="text-blue-400 font-bold mb-2 uppercase text-xs">
        Alerta de Tráfego
      </h3>
      <p className="text-sm text-slate-300">{post?.title}</p>
    </div>
  );
}
