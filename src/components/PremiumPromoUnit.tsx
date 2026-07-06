/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ExternalLink, Zap } from "lucide-react";

export default function PremiumPromoUnit() {
  const handleClickAd = () => {
    alert("Simulação de clique: Redirecionando para ofertas selecionadas de hospedagem de alto desempenho para criadores de e-books.");
  };

  return (
    <div className="bg-white border border-slate-200 p-5 rounded-2xl flex flex-col items-center justify-center text-center shadow-xs relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full py-0.5 px-3 bg-slate-100 text-slate-400 font-mono text-[8px] tracking-wider uppercase font-bold text-left border-b">
        Tecnologia
      </div>
      
      <div className="p-3 bg-emerald-500/10 text-[#00c853] rounded-full mb-3 mt-4 animate-pulse">
        <Zap className="h-5 w-5 fill-current" />
      </div>

      <h4 className="text-xs font-black text-[#1a237e] font-sans leading-tight mb-1">
        Domine o Algoritmo do TikTok!
      </h4>

      <p className="text-slate-500 text-[10.5px] font-sans leading-relaxed mb-4">
        Pare de publicar seus vídeos às cegas. Obtenha a ferramenta inteligente de análise automatizada de hashtags e ganchos de alta retenção com desconto exclusivo.
      </p>

      <button 
        onClick={handleClickAd}
        className="w-full bg-[#1a237e] hover:bg-[#151c66] text-white text-[10px] font-bold py-2 px-4 rounded-xl cursor-pointer flex items-center justify-center gap-1 font-sans transition-all"
      >
        <span>Saber Mais Informações</span>
        <ExternalLink className="h-3 w-3" />
      </button>
    </div>
  );
}
