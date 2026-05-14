"use client"; // Lembre-se que usamos estados!

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input"; // Import do shadcn
import { AvisoItem } from "./AvisoItem";

export default function Avisos() {
  const [post, setPost] = useState<any[]>([]);
  const [busca, setBusca] = useState(""); // Novo estado para a busca

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  // Lógica de Filtragem: Criamos um novo array baseado no texto digitado
  const alertasFiltrados = post.filter((item) =>
    item.title.toLowerCase().includes(busca.toLowerCase()),
  );

  return (
    <div className="flex flex-col gap-6 w-full max-w-md">
      <div className="space-y-2">
        <h2 className="text-xl font-bold text-blue-400">Painel de Alertas</h2>
        {/* Input do shadcn com evento de mudança */}
        <Input
          placeholder="Filtrar alertas..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="bg-slate-900 border-slate-800 text-slate-200"
        />
      </div>

      <div className="flex flex-col gap-4">
        {/* Agora mapeamos os filtrados em vez do array original */}
        {alertasFiltrados.slice(0, 5).map((item: any) => (
          <AvisoItem key={item.id} id={item.id} titulo={item.title} />
        ))}

        {alertasFiltrados.length === 0 && (
          <p className="text-slate-500 text-sm text-center py-4">
            Nenhum alerta encontrado para "{busca}"
          </p>
        )}
      </div>
    </div>
  );
}
