/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  TrendingUp, 
  Clock, 
  Target, 
  MessageSquare, 
  Share2, 
  Bookmark, 
  Heart,
  Sparkles, 
  Lightbulb, 
  CheckCircle,
  HelpCircle,
  Zap,
  Award,
  FileText,
  Copy,
  Check,
  Tag,
  AlertTriangle,
  Flame,
  HelpCircle as QuestionIcon,
  Smile,
  ShieldAlert,
  Sliders,
  Hash,
  Search,
  Video,
  Camera,
  Mic,
  Smartphone,
  Eye,
  Scissors,
  Volume2
} from "lucide-react";

export default function TikTokAlgorithmGuide() {
  const [activeTab, setActiveTab] = useState<"algoritmo" | "legendas" | "hashtags" | "gravacao">("algoritmo");

  // State for copied templates
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // Interactive checklist state for pre-publishing checklist
  const [checklistItems, setChecklistItems] = useState([
    { id: 1, text: "Gancho impactante nos primeiros 3 segundos (pergunta, promessa ou cena rápida)", checked: false },
    { id: 2, text: "Áudio ou música que esteja em alta no painel de tendências", checked: false },
    { id: 3, text: "Legendas em alto contraste escritas de forma legível na tela", checked: false },
    { id: 4, text: "Descrição curta (até 150 caracteres) contendo 3 a 4 palavras-chave do nicho", checked: false },
    { id: 5, text: "Uso de 3 a 5 hashtags estratégicas (misturando nicho e temas amplos)", checked: false },
    { id: 6, text: "Chamada para Ação clara ao final (curtir, comentar, salvar ou seguir)", checked: false },
    { id: 7, text: "Vídeo exportado em alta definição (1080p, 60fps ou 30fps limpo)", checked: false }
  ]);

  // Distribution test calculator state
  const [calcCompletion, setCalcCompletion] = useState(35); // 35%
  const [calcEngagement, setCalcEngagement] = useState(12); // 12%

  const toggleChecklistItem = (id: number) => {
    setChecklistItems(
      checklistItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const getCompletedCount = () => {
    return checklistItems.filter(item => item.checked).length;
  };

  // Simple simulator for TikTok algorithm score
  const getSimulatedStatus = () => {
    const score = (calcCompletion * 1.5) + (calcEngagement * 2.0);
    if (score < 45) {
      return {
        tier: "Amostragem Inicial (Flopado)",
        text: "Distribuição limitada ao círculo inicial de teste. Foque em criar ganchos mais fortes nos primeiros 3 segundos para reter as pessoas.",
        color: "text-rose-500 bg-rose-50 border-rose-200",
        badge: "Fase 1",
        range: "200 - 500 visualizações"
      };
    } else if (score < 75) {
      return {
        tier: "Alcance Moderado (Semeado)",
        text: "Bom engajamento! O TikTok está liberando seu vídeo para mais públicos que gostam de conteúdos parecidos. Mantenha a consistência.",
        color: "text-amber-600 bg-amber-50 border-amber-200",
        badge: "Fase 2",
        range: "1.000 - 5.000 visualizações"
      };
    } else {
      return {
        tier: "Distribuição Viral ativa (Explosão!)",
        text: "Fantástico! O algoritmo detectou excelente retenção e engajamento ativo. Seu vídeo está sendo impulsionado ativamente para a página Para Você (FYP) em massa.",
        color: "text-emerald-600 bg-emerald-50 border-emerald-200",
        badge: "Fase Viral",
        range: "10.000 a Milhões de visualizações"
      };
    }
  };

  const simResult = getSimulatedStatus();

  return (
    <div id="tiktok-algorithm-page" className="bg-[#f8fafc] text-slate-800 min-h-screen pb-16">
      
      {/* HEADER HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand-navy to-indigo-950 text-white py-14 md:py-18 border-b border-indigo-900 shadow-lg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00c853]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 shadow-sm">
            <TrendingUp className="h-4 w-4 text-brand-green" />
            <span className="text-xs font-mono font-bold tracking-wider text-brand-green uppercase">
              Guia Completo de Domínio do Algoritmo 2026
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight uppercase font-sans">
            Mapeamento de Algoritmo & <span className="text-brand-green">Legendas Virais</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-sans leading-relaxed">
            Entenda detalhadamente como o mecanismo de inteligência artificial decide quem vê seu vídeo e aprenda a escrever legendas magnéticas para explodir suas visualizações.
          </p>

          {/* TAB NAVIGATION BUTTONS */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <button
              onClick={() => setActiveTab("algoritmo")}
              className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === "algoritmo"
                  ? "bg-brand-green text-brand-navy shadow-lg shadow-emerald-500/20 scale-105"
                  : "bg-white/10 hover:bg-white/20 text-white border border-white/15"
              }`}
            >
              <Zap className="h-4 w-4" />
              <span>1. Como Funciona o Algoritmo</span>
            </button>
            <button
              onClick={() => setActiveTab("legendas")}
              className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === "legendas"
                  ? "bg-brand-green text-brand-navy shadow-lg shadow-emerald-500/20 scale-105"
                  : "bg-white/10 hover:bg-white/20 text-white border border-white/15"
              }`}
            >
              <FileText className="h-4 w-4" />
              <span>2. Como Criar Legendas Virais</span>
            </button>
            <button
              onClick={() => setActiveTab("hashtags")}
              className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === "hashtags"
                  ? "bg-brand-green text-brand-navy shadow-lg shadow-emerald-500/20 scale-105"
                  : "bg-white/10 hover:bg-white/20 text-white border border-white/15"
              }`}
            >
              <Hash className="h-4 w-4" />
              <span>3. Guia de Hashtags</span>
            </button>
            <button
              onClick={() => setActiveTab("gravacao")}
              className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === "gravacao"
                  ? "bg-brand-green text-brand-navy shadow-lg shadow-emerald-500/20 scale-105"
                  : "bg-white/10 hover:bg-white/20 text-white border border-white/15"
              }`}
            >
              <Video className="h-4 w-4" />
              <span>4. Como Gravar Vídeos</span>
            </button>
          </div>
        </div>
      </section>

      {/* CORE WRAPPER */}
      <div className="max-w-4xl mx-auto px-4 mt-10">

        {/* TAB 1: COMO FUNCIONA O ALGORITMO */}
        {activeTab === "algoritmo" && (
          <div className="grid grid-cols-1 gap-10">
            
            {/* INTRODUCTION BLOCK */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-lg font-bold text-[#1a237e] uppercase mb-4 border-b pb-2 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-brand-green" /> Introdução Prática
              </h2>
              <div className="text-slate-650 text-sm sm:text-base leading-relaxed space-y-4 font-sans">
                <p>
                  Se você já se perguntou por que alguns vídeos no TikTok têm milhões de visualizações enquanto outros mal chegam a 100 — a resposta está no <strong>algoritmo</strong>.
                </p>
                <p>
                  O algoritmo do TikTok é o sistema inteligente que decide quais vídeos aparecem para quais pessoas. Entender como ele funciona é a diferença entre crescer rápido ou ficar meses postando sem resultado algum nas mídias digitais.
                </p>
                <p className="bg-slate-50 border-l-4 border-brand-green p-4 rounded-r-xl italic text-slate-700 font-medium">
                  "Neste artigo você vai aprender tudo sobre o algoritmo do TikTok de forma simples, objetiva e prática — mesmo que você nunca tenha gravado ou postado um vídeo na sua vida."
                </p>
              </div>
            </div>

            {/* WHAT IS THE ALGORITHM */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-lg font-bold text-[#1a237e] uppercase mb-4 border-b pb-2 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-[#1a237e]" /> O que é o algoritmo do TikTok?
              </h2>
              <div className="text-slate-650 text-sm sm:text-base leading-relaxed space-y-4 font-sans">
                <p>
                  Diferente de outras redes sociais onde seu alcance depende muito de quantos seguidores você tem, no TikTok qualquer pessoa pode ter um vídeo viral no primeiro dia — mesmo com zero seguidores.
                </p>
                <p>
                  Isso acontece porque o TikTok distribui o conteúdo baseado na <strong>qualidade e no engajamento do vídeo</strong> — não no tamanho do perfil.
                </p>
                <p>
                  A inteligência artificial do TikTok analisa as características técnicas do seu vídeo e as preferências de comportamento de cada usuário individual para fazer uma combinação de recomendação ultra-precisa na aba <strong>"Para Você" (FYP)</strong>.
                </p>
              </div>
            </div>

            {/* STEP-BY-STEP VIDEO PATHWAY (WAVES) */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-[#1a237e] uppercase border-b pb-2 flex items-center gap-2">
                <Zap className="h-5 w-5 text-amber-500" /> Como o algoritmo funciona na prática (Ondas)
              </h2>
              
              <div className="text-slate-650 text-sm sm:text-base leading-relaxed space-y-4 font-sans">
                <p>
                  O TikTok funciona em ondas de distribuição. Veja como acontece passo a passo:
                </p>
              </div>

              {/* PIPELINE VISUAL FLOW CHART */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
                
                {/* Wave 1 */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-indigo-500 transition-colors">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 bg-slate-200/50 px-2 py-0.5 rounded">
                      Onda 1
                    </span>
                    <h4 className="font-bold text-[#1a237e] text-sm mt-2 mb-1.5 font-sans leading-snug">
                      Grupo Pequeno
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans">
                      Quando você publica, entrega para 200 a 500 usuários com interesse no tema.
                    </p>
                  </div>
                  <div className="text-xs font-semibold text-slate-400 mt-3 pt-2 border-t border-slate-200 flex items-center justify-between">
                    <span>Amostra</span>
                    <span className="text-[#1a237e] font-mono font-bold">200-500</span>
                  </div>
                </div>

                {/* Wave 2 */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-indigo-500 transition-colors">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-500 bg-blue-100 px-2 py-0.5 rounded">
                      Onda 2
                    </span>
                    <h4 className="font-bold text-[#1a237e] text-sm mt-2 mb-1.5 font-sans leading-snug">
                      Análise de Engajamento
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans">
                      O algoritmo mede retenção, curtidas, comentários e compartilhamentos.
                    </p>
                  </div>
                  <div className="text-xs font-semibold text-slate-400 mt-3 pt-2 border-t border-slate-200 flex items-center justify-between">
                    <span>Métricas</span>
                    <span className="text-blue-600 font-mono font-bold">Retenção</span>
                  </div>
                </div>

                {/* Wave 3 */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-indigo-500 transition-colors">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-600 bg-amber-100 px-2 py-0.5 rounded">
                      Onda 3
                    </span>
                    <h4 className="font-bold text-[#1a237e] text-sm mt-2 mb-1.5 font-sans leading-snug">
                      Expansão ou Parada
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans">
                      Se o engajamento foi bom, entrega para milhares. Se foi fraco, para.
                    </p>
                  </div>
                  <div className="text-xs font-semibold text-slate-400 mt-3 pt-2 border-t border-slate-200 flex items-center justify-between">
                    <span>Resultado</span>
                    <span className="text-amber-600 font-mono font-bold">Milhares</span>
                  </div>
                </div>

                {/* Wave 4 */}
                <div className="bg-emerald-50/50 border border-emerald-200 rounded-xl p-4 flex flex-col justify-between hover:border-emerald-400 transition-colors">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded">
                      Onda 4
                    </span>
                    <h4 className="font-bold text-emerald-950 text-sm mt-2 mb-1.5 font-sans leading-snug">
                      Viralização
                    </h4>
                    <p className="text-xs text-emerald-800/80 leading-relaxed font-sans">
                      Continuando com alta performance, chega a centenas de milhares ou milhões.
                    </p>
                  </div>
                  <div className="text-xs font-semibold text-emerald-500 mt-3 pt-2 border-t border-emerald-200 flex items-center justify-between">
                    <span>Alcance</span>
                    <span className="text-emerald-600 font-mono font-bold">1M+</span>
                  </div>
                </div>

              </div>
            </div>

            {/* THE 5 FACTORS ANALYZED & MYTHS */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-[#1a237e] uppercase border-b pb-2 flex items-center gap-2">
                <Clock className="h-5 w-5 text-brand-green" /> Os 5 Fatores que o Algoritmo Analisa
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 space-y-1.5">
                  <h4 className="font-bold text-slate-800 text-sm font-sans flex items-center gap-2">
                    <span className="bg-emerald-100 text-emerald-700 w-5 h-5 rounded-full inline-flex items-center justify-center text-xs">1</span>
                    Taxa de Conclusão (O mais importante)
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    Quantas pessoas assistiram até o final? Se param no meio, o algoritmo para. Se assistem até o final e repetem, o alcance explode.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 space-y-1.5">
                  <h4 className="font-bold text-slate-800 text-sm font-sans flex items-center gap-2">
                    <span className="bg-emerald-100 text-emerald-700 w-5 h-5 rounded-full inline-flex items-center justify-center text-xs">2</span>
                    Curtidas e Comentários
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    Quanto mais pessoas interagem, mais relevante o conteúdo se torna. Peça sempre para as pessoas comentarem.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 space-y-1.5">
                  <h4 className="font-bold text-slate-800 text-sm font-sans flex items-center gap-2">
                    <span className="bg-emerald-100 text-emerald-700 w-5 h-5 rounded-full inline-flex items-center justify-center text-xs">3</span>
                    Compartilhamentos (Sinal Fortíssimo)
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    Quando alguém compartilha seu vídeo, significa que achou tão bom que quis mostrar para alguém. Multiplica o alcance!
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 space-y-1.5">
                  <h4 className="font-bold text-slate-800 text-sm font-sans flex items-center gap-2">
                    <span className="bg-emerald-100 text-emerald-700 w-5 h-5 rounded-full inline-flex items-center justify-center text-xs">4</span>
                    Salvamentos
                  </h4>
                  <p className="text-xs text-slate-650 leading-relaxed font-sans">
                    Salvar significa que o conteúdo tem valor suficiente para guardar e ver depois. Vídeos muito salvos crescem muito.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 space-y-1.5">
                <h4 className="font-bold text-slate-800 text-sm font-sans flex items-center gap-2">
                  <span className="bg-emerald-100 text-emerald-700 w-5 h-5 rounded-full inline-flex items-center justify-center text-xs">5</span>
                  Informações do Vídeo (SEO)
                </h4>
                <p className="text-xs text-slate-650 leading-relaxed font-sans">
                  O TikTok lê a legenda, as hashtags, o áudio usado e até o texto na tela para entender do que se trata e para quem entregar.
                </p>
              </div>

              {/* WHAT THE ALGORITHM DOES NOT ANALYZE */}
              <div className="bg-rose-50/60 border border-rose-200 rounded-xl p-5 space-y-3">
                <h3 className="text-xs md:text-sm font-bold text-rose-800 uppercase flex items-center gap-2 font-sans">
                  <ShieldAlert className="h-4 w-4 text-rose-600" /> O que o Algoritmo NÃO Analisa (Mitos)
                </h3>
                <ul className="text-xs text-slate-700 space-y-2 font-sans">
                  <li>• <strong>Quantidade de seguidores:</strong> Um perfil com 0 seguidores pode viralizar tanto quanto um de 1 milhão.</li>
                  <li>• <strong>Horário exato de publicação:</strong> O TikTok entrega quando as pessoas estão ativas, não só quando você postou.</li>
                  <li>• <strong>Frequência passada:</strong> Cada vídeo é analisado de forma 100% independente!</li>
                </ul>
              </div>
            </div>

            {/* INTERACTIVE ALGORITHM SIMULATOR */}
            <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white border border-slate-800 rounded-2xl p-6 md:p-8 shadow-md space-y-6">
              <div className="space-y-2">
                <span className="text-brand-green font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase block">
                  Ferramenta de Simulação Interativa
                </span>
                <h3 className="text-lg md:text-xl font-bold font-sans uppercase">
                  Simulador de Pontuação Algorítmica
                </h3>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  Ajuste as taxas estimadas do seu vídeo para prever a resposta do robô do TikTok:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300">Taxa de Conclusão (Retenção Final)</span>
                      <span className="text-brand-green font-bold">{calcCompletion}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="5" 
                      max="100" 
                      value={calcCompletion}
                      onChange={(e) => setCalcCompletion(Number(e.target.value))}
                      className="w-full accent-brand-green bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300">Taxa de Engajamento Ativo</span>
                      <span className="text-brand-green font-bold">{calcEngagement}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="50" 
                      value={calcEngagement}
                      onChange={(e) => setCalcEngagement(Number(e.target.value))}
                      className="w-full accent-brand-green bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>

                <div className="bg-black/40 border border-slate-800 rounded-xl p-5 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-[10px] font-mono uppercase tracking-widest">
                        Status Projetado
                      </span>
                      <span className="bg-[#00c853]/15 text-[#00c853] border border-emerald-500/30 text-[9px] font-mono px-2 py-0.5 rounded-full font-bold">
                        {simResult.badge}
                      </span>
                    </div>
                    <h4 className="text-sm md:text-base font-bold text-slate-100 font-sans">
                      {simResult.tier}
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                      {simResult.text}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex justify-between items-center">
                    <span className="text-slate-400 text-[10px] font-mono uppercase">Alcance:</span>
                    <span className="text-brand-green font-mono font-black text-xs md:text-sm">
                      {simResult.range}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CHECKLIST */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b pb-3">
                <h2 className="text-lg font-bold text-[#1a237e] uppercase flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-brand-green" /> Checklist Pré-Postagem
                </h2>
                <span className="bg-brand-navy text-white text-[10px] font-mono px-2.5 py-1 rounded-full font-bold">
                  {getCompletedCount()} de {checklistItems.length} Prontos
                </span>
              </div>

              <div className="space-y-3 pt-2">
                {checklistItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => toggleChecklistItem(item.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-start gap-3 ${
                      item.checked
                        ? "bg-[#00c853]/5 border-brand-green/30 text-slate-700"
                        : "bg-slate-50 hover:bg-slate-100/70 border-slate-200 text-slate-600"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      item.checked
                        ? "bg-[#00c853] border-[#00c853] text-white"
                        : "border-slate-300"
                    }`}>
                      {item.checked && <CheckCircle className="h-4 w-4 stroke-[3]" />}
                    </div>
                    <span className={`text-xs md:text-sm font-medium font-sans ${item.checked ? "line-through text-slate-400" : ""}`}>
                      {item.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: COMO CRIAR LEGENDAS QUE VIRALIZAM */}
        {activeTab === "legendas" && (
          <div className="grid grid-cols-1 gap-10">
            
            {/* ARTICLE HEADER & INTRODUCTION */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-4">
              <div className="inline-block bg-indigo-50 text-[#1a237e] border border-indigo-100 font-mono text-[10px] px-3 py-1 rounded-full font-bold uppercase">
                Guia Definitivo de Copywriting
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#1a237e] uppercase tracking-tight font-sans leading-snug">
                Como Criar Legendas que Viralizam no TikTok em 2025
              </h2>
              <p className="text-xs text-slate-500 font-sans italic border-b pb-4">
                <strong>Meta descrição:</strong> Aprenda a criar legendas poderosas para seus vídeos no TikTok e aumente muito suas chances de viralizar mesmo começando do zero.
              </p>

              <div className="text-slate-650 text-sm sm:text-base leading-relaxed space-y-4 font-sans pt-2">
                <p>
                  Muita gente passa horas gravando e editando um vídeo incrível mas na hora de escrever a legenda coloca qualquer coisa — ou pior, não coloca nada.
                </p>
                <p className="font-bold text-rose-600 bg-rose-50 p-3.5 rounded-xl border border-rose-100">
                  ⚠️ Esse é um dos maiores erros de quem está começando no TikTok!
                </p>
                <p>
                  A legenda do seu vídeo não é só um texto decorativo. Ela é uma ferramenta poderosa que ajuda o algoritmo a entender seu conteúdo, atrai as pessoas certas para assistir e aumenta muito o engajamento do seu vídeo.
                </p>
              </div>
            </div>

            {/* WHAT IS A CAPTION & 3 MAIN PURPOSES */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-[#1a237e] uppercase border-b pb-2 flex items-center gap-2">
                <FileText className="h-5 w-5 text-brand-green" /> O que é a legenda no TikTok e para que serve?
              </h3>

              <p className="text-slate-650 text-sm sm:text-base font-sans leading-relaxed">
                A legenda no TikTok é o texto que aparece abaixo do seu vídeo quando as pessoas estão assistindo. Ela fica visível na tela junto com as hashtags e o nome do áudio.
                No TikTok a legenda pode ter até <strong>2.200 caracteres</strong> — mas na prática legendas curtas e diretas funcionam muito melhor.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 text-[#1a237e] flex items-center justify-center font-bold text-xs">
                    1
                  </div>
                  <h4 className="font-bold text-sm text-slate-800 font-sans">Informar o Algoritmo</h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    O TikTok lê o texto da sua legenda para entender sobre o que é seu vídeo e para quem entregá-lo.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs">
                    2
                  </div>
                  <h4 className="font-bold text-sm text-slate-800 font-sans">Atrair Cliques (FYP)</h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Quando seu vídeo surge na FYP, a legenda curiosa faz a pessoa parar imediatamente de deslizar.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                    3
                  </div>
                  <h4 className="font-bold text-sm text-slate-800 font-sans">Gerar Engajamento</h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Terminar com uma pergunta incentiva comentários, o sinal mais forte para o algoritmo impulsionar o post.
                  </p>
                </div>
              </div>
            </div>

            {/* COMPARISON: GOOD VS BAD CAPTION */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-[#1a237e] uppercase border-b pb-2 flex items-center gap-2">
                <Sliders className="h-5 w-5 text-brand-green" /> A diferença entre Legenda Boa e Legenda Ruim
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Bad Caption */}
                <div className="bg-rose-50/50 border border-rose-200 rounded-xl p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="bg-rose-100 text-rose-700 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full uppercase">
                      ❌ Legenda Ruim (Flop)
                    </span>
                  </div>
                  <p className="bg-white p-3 rounded-lg border border-rose-200 font-mono text-xs text-slate-700 italic">
                    "Dicas de TikTok #tiktok #viral"
                  </p>
                  <p className="text-xs text-rose-800/90 font-sans leading-relaxed">
                    <strong>Por que falha:</strong> Não diz nada relevante, não gera curiosidade, não possuiSEO de palavra-chave e não incentiva ação do leitor.
                  </p>
                </div>

                {/* Good Caption */}
                <div className="bg-emerald-50/50 border border-emerald-200 rounded-xl p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="bg-emerald-100 text-emerald-700 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full uppercase">
                      ✅ Legenda Boa (Viral)
                    </span>
                  </div>
                  <p className="bg-white p-3 rounded-lg border border-emerald-200 font-mono text-xs text-slate-800">
                    "O erro que faz 90% das pessoas não crescerem no TikTok — e como evitar 👇 Você comete algum desses? Comenta aqui!"
                  </p>
                  <p className="text-xs text-emerald-800/90 font-sans leading-relaxed">
                    <strong>Por que funciona:</strong> Gera curiosidade imediata, faz a pessoa querer assistir até o final e pede comentários ativos.
                  </p>
                </div>

              </div>
            </div>

            {/* THE 5 TYPES OF VIRAL CAPTIONS */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-[#1a237e] uppercase border-b pb-2 flex items-center gap-2">
                <Flame className="h-5 w-5 text-amber-500" /> Os 5 Tipos de Legenda que Mais Viralizam
              </h3>

              <div className="space-y-4">
                
                {/* Type 1 */}
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-[#1a237e] text-sm font-sans flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-amber-500" /> 1. Legenda da Curiosidade
                    </h4>
                    <span className="text-[10px] font-mono text-slate-400">Tipo 01</span>
                  </div>
                  <p className="text-xs text-slate-600 font-sans">
                    Desperta a curiosidade sem revelar a resposta. A pessoa precisa assistir ao vídeo até o final.
                  </p>
                  <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-1.5 text-xs font-mono text-slate-700">
                    <p>• "O que ninguém te conta sobre ganhar dinheiro online 👇"</p>
                    <p>• "Descobri isso e mudou completamente minha vida online 🤯"</p>
                    <p>• "Esse truque do TikTok que poucos conhecem 👀"</p>
                  </div>
                </div>

                {/* Type 2 */}
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-[#1a237e] text-sm font-sans flex items-center gap-2">
                      <Smile className="h-4 w-4 text-emerald-600" /> 2. Legenda da Identificação
                    </h4>
                    <span className="text-[10px] font-mono text-slate-400">Tipo 02</span>
                  </div>
                  <p className="text-xs text-slate-600 font-sans">
                    Faz a pessoa pensar "isso é exatamente o que acontece comigo". Gera múltiplos compartilhamentos!
                  </p>
                  <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-1.5 text-xs font-mono text-slate-700">
                    <p>• "Se você tá tentando crescer no TikTok mas não consegue — isso é pra você 🙏"</p>
                    <p>• "Pra quem acha que não tem talento pra criar conteúdo 💚"</p>
                    <p>• "Quando você trabalha todo mês e no final não sobra nada 😔"</p>
                  </div>
                </div>

                {/* Type 3 */}
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-[#1a237e] text-sm font-sans flex items-center gap-2">
                      <Target className="h-4 w-4 text-blue-600" /> 3. Legenda da Promessa
                    </h4>
                    <span className="text-[10px] font-mono text-slate-400">Tipo 03</span>
                  </div>
                  <p className="text-xs text-slate-600 font-sans">
                    Promete um resultado prático específico. Altamente eficaz para vídeos educativos de autoridade.
                  </p>
                  <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-1.5 text-xs font-mono text-slate-700">
                    <p>• "Como crescer 1.000 seguidores no TikTok em 30 dias sem gastar nada 📈"</p>
                    <p>• "O método que usei para conseguir meu primeiro cliente online em 7 dias ✅"</p>
                    <p>• "Como ganhar R$500 esse mês usando só o celular 💰"</p>
                  </div>
                </div>

                {/* Type 4 */}
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-[#1a237e] text-sm font-sans flex items-center gap-2">
                      <QuestionIcon className="h-4 w-4 text-indigo-600" /> 4. Legenda da Pergunta
                    </h4>
                    <span className="text-[10px] font-mono text-slate-400">Tipo 04</span>
                  </div>
                  <p className="text-xs text-slate-600 font-sans">
                    Pergunta direta solicitando resposta imediata. Lembre-se: comentários são ouro para a inteligência artificial!
                  </p>
                  <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-1.5 text-xs font-mono text-slate-700">
                    <p>• "Você prefere trabalhar de casa ou no escritório? Comenta aqui 👇"</p>
                    <p>• "Qual dessas formas de ganhar dinheiro online você já tentou? 🤔"</p>
                    <p>• "Quantas horas por day você usa o TikTok? Me conta nos comentários 👇"</p>
                  </div>
                </div>

                {/* Type 5 */}
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-[#1a237e] text-sm font-sans flex items-center gap-2">
                      <Flame className="h-4 w-4 text-rose-600" /> 5. Legenda da Controvérsia
                    </h4>
                    <span className="text-[10px] font-mono text-slate-400">Tipo 05</span>
                  </div>
                  <p className="text-xs text-slate-600 font-sans">
                    Opinião contrária ao senso comum. Desperta debates e respostas apaixonadas.
                  </p>
                  <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-1.5 text-xs font-mono text-slate-700">
                    <p>• "Trabalhar das 9 às 18 todo dia não vai te tornar rico — e ninguém fala isso 🔥"</p>
                    <p>• "Seguidores não significam dinheiro — e isso precisa ser dito 💯"</p>
                    <p>• "Faculdade não garante emprego em 2025 — a verdade que ninguém quer ouvir 👀"</p>
                  </div>
                </div>

              </div>
            </div>

            {/* THE PERFECT CAPTION FORMULA */}
            <div className="bg-gradient-to-br from-[#1a237e] to-indigo-950 text-white border border-indigo-900 rounded-2xl p-6 md:p-8 shadow-md space-y-6">
              <div>
                <span className="text-brand-green font-mono text-[10px] font-bold uppercase tracking-widest block">
                  Estrutura Infalível
                </span>
                <h3 className="text-xl font-bold font-sans uppercase text-white mt-1">
                  A Fórmula da Legenda Perfeita
                </h3>
                <p className="text-xs text-slate-300 font-sans mt-1">
                  Combine estes 3 elementos em todas as suas publicações para manter um padrão de alta conversão:
                </p>
              </div>

              <div className="bg-white/10 border border-white/15 rounded-xl p-4 text-center font-mono text-sm md:text-base font-bold text-brand-green">
                GANCHO + CONTEXTO + CHAMADA PARA AÇÃO (CTA)
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
                <div className="bg-black/30 p-3.5 rounded-lg border border-white/10 space-y-1">
                  <span className="text-brand-green font-bold block">1. Gancho</span>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    Primeira frase que prende a atenção e gera curiosidade instantânea.
                  </p>
                </div>
                <div className="bg-black/30 p-3.5 rounded-lg border border-white/10 space-y-1">
                  <span className="text-brand-green font-bold block">2. Contexto</span>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    1 a 2 frases adicionando valor extra que complementa a fala do vídeo.
                  </p>
                </div>
                <div className="bg-black/30 p-3.5 rounded-lg border border-white/10 space-y-1">
                  <span className="text-brand-green font-bold block">3. Chamada para Ação</span>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    Pedindo ação explícita: "Comenta aqui", "Salva o post", "Compartilhe".
                  </p>
                </div>
              </div>

              {/* Ready-to-copy complete example card */}
              <div className="bg-black/50 border border-brand-green/40 p-4 rounded-xl space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-brand-green font-sans uppercase">
                    Exemplo Completo Aplicado
                  </span>
                  <button
                    onClick={() => handleCopy(
                      "O algoritmo do TikTok favorece quem faz isso 👇 Não é o que você pensa — a maioria erra logo no primeiro vídeo. Qual foi seu maior erro no TikTok? Comenta aqui que vou responder todos 💚 #dicasdetiktok #crescernotiktok #rendaonline",
                      "ex-formula"
                    )}
                    className="bg-brand-green text-brand-navy px-3 py-1 rounded-md font-bold text-[10px] font-mono flex items-center gap-1 hover:brightness-110 cursor-pointer"
                  >
                    {copiedId === "ex-formula" ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copiedId === "ex-formula" ? "Copiado!" : "Copiar Modelo"}</span>
                  </button>
                </div>
                <p className="text-xs font-mono text-slate-200 leading-relaxed">
                  "O algoritmo do TikTok favorece quem faz isso 👇 Não é o que você pensa — a maioria erra logo no primeiro vídeo. Qual foi seu maior erro no TikTok? Comenta aqui que vou responder todos 💚 #dicasdetiktok #crescernotiktok #rendaonline"
                </p>
              </div>
            </div>

            {/* COMMON ERRORS & CHARACTER LIMIT GUIDE */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-[#1a237e] uppercase border-b pb-2 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" /> Os 5 Erros Fatais & Tamanho Ideal
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* 5 Common Errors */}
                <div className="space-y-2">
                  <h4 className="font-bold text-xs uppercase font-mono text-rose-700">Evite estes 5 Erros:</h4>
                  <ul className="text-xs text-slate-600 space-y-2 font-sans">
                    <li className="p-2 bg-slate-50 rounded border border-slate-200">
                      <strong>1. Deixar a legenda vazia:</strong> O robô fica cego sobre o tema do vídeo.
                    </li>
                    <li className="p-2 bg-slate-50 rounded border border-slate-200">
                      <strong>2. Escrever texto longo demais:</strong> Legendas gigantes são ignoradas. Ideal 2 a 3 linhas.
                    </li>
                    <li className="p-2 bg-slate-50 rounded border border-slate-200">
                      <strong>3. Não colocar chamada para ação:</strong> Sem pedir, as pessoas assistem e fecham.
                    </li>
                    <li className="p-2 bg-slate-50 rounded border border-slate-200">
                      <strong>4. Hashtags no meio do texto:</strong> Quebra o fluxo e parece mensagem de spam.
                    </li>
                    <li className="p-2 bg-slate-50 rounded border border-slate-200">
                      <strong>5. Repetir a mesma legenda:</strong> O algoritmo penaliza cópias idênticas.
                    </li>
                  </ul>
                </div>

                {/* Character guide */}
                <div className="space-y-2">
                  <h4 className="font-bold text-xs uppercase font-mono text-[#1a237e]">Quantos caracteres usar?</h4>
                  <div className="space-y-2 text-xs font-sans">
                    <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                      <span className="font-bold text-slate-800">50 a 100 caracteres:</span>
                      <p className="text-slate-550 text-[11px]">Ideais para humor, memes e entretenimento rápido.</p>
                    </div>
                    <div className="p-2.5 bg-emerald-50/50 rounded border border-emerald-200">
                      <span className="font-bold text-emerald-900">100 a 200 caracteres (Recomendado):</span>
                      <p className="text-emerald-800 text-[11px]">Perfeito para conteúdos educativos, dicas e tutoriais.</p>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                      <span className="font-bold text-slate-800">200 a 500 caracteres:</span>
                      <p className="text-slate-550 text-[11px]">Para postagens mais profundas onde o contexto extra importa.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* BONUS SCRIPT FOR RECORDING */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-[#1a237e] uppercase border-b pb-2 flex items-center gap-2">
                <Tag className="h-5 w-5 text-brand-green" /> Roteiro de Vídeo Pronto sobre Legendas
              </h3>
              <p className="text-xs text-slate-500 font-sans">
                Grave um vídeo para sua conta usando este roteiro de gancho + desenvolvimento já pronto sobre este assunto:
              </p>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3 text-xs font-sans text-slate-700">
                <p><strong>🟢 GANCHO (0 a 3s):</strong> "A legenda do seu TikTok pode dobrar ou zerar suas visualizações — e a maioria das pessoas ignora isso completamente."</p>
                <p><strong>🟢 CONTEÚDO (3 a 25s):</strong> "A legenda serve pra três coisas: informar o algoritmo sobre seu vídeo, atrair a pessoa certa pra assistir e gerar comentários que aumentam seu alcance. Existem 5 tipos de legenda que mais viralizam: a de curiosidade, de identificação, de promessa, de pergunta e de controvérsia. E a fórmula é simples: Gancho + Contexto + Chamada pra ação no final!"</p>
                <p><strong>🟢 ENCERRAMENTO:</strong> "Salva esse vídeo pra não esquecer! E comenta aqui qual tipo de legenda você vai usar no seu próximo vídeo — vou responder todos!"</p>
              </div>
            </div>

          </div>
        )}

        {/* TAB 3: GUIA COMPLETO DE HASHTAGS */}
        {activeTab === "hashtags" && (
          <div className="grid grid-cols-1 gap-10">
            
            {/* ARTICLE HEADER & INTRO */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-4">
              <div className="inline-block bg-emerald-50 text-emerald-800 border border-emerald-200 font-mono text-[10px] px-3 py-1 rounded-full font-bold uppercase">
                Manual de SEO e Categorização
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#1a237e] uppercase tracking-tight font-sans leading-snug">
                O que são Hashtags no TikTok e Como Usar Corretamente em 2025
              </h2>
              <p className="text-xs text-slate-500 font-sans italic border-b pb-4">
                <strong>Meta descrição:</strong> Entenda o que são hashtags no TikTok, como funcionam e quais usar para aumentar suas visualizações e crescer mais rápido do zero.
              </p>

              <div className="text-slate-650 text-sm sm:text-base leading-relaxed space-y-4 font-sans pt-2">
                <p>
                  Se você está começando no TikTok provavelmente já viu aquelas palavras com o símbolo <strong>#</strong> na frente das legendas dos vídeos.
                </p>
                <p>
                  Essas são as <strong>hashtags</strong>. E muita gente usa errado — coloca dezenas de hashtags aleatórias achando que isso vai aumentar o alcance e na prática não vê resultado nenhum.
                </p>
                <p className="bg-slate-50 border-l-4 border-brand-green p-4 rounded-r-xl italic text-slate-700 font-medium">
                  "Neste artigo você vai aprender o que são hashtags, como elas realmente funcionam no TikTok e a estratégia certa pra usar hashtags que aumentam suas visualizações de verdade."
                </p>
              </div>
            </div>

            {/* WHAT IS A HASHTAG */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-[#1a237e] uppercase border-b pb-2 flex items-center gap-2">
                <Hash className="h-5 w-5 text-brand-green" /> O que é uma hashtag?
              </h3>
              <div className="text-slate-650 text-sm sm:text-base leading-relaxed space-y-4 font-sans">
                <p>
                  Hashtag é uma palavra ou frase precedida pelo símbolo <strong>#</strong> sem espaços. Por exemplo: <span className="bg-slate-100 text-[#1a237e] font-mono px-2 py-0.5 rounded text-xs font-bold">#tiktoktips</span>, <span className="bg-slate-100 text-[#1a237e] font-mono px-2 py-0.5 rounded text-xs font-bold">#ganhardinheiroonline</span>, <span className="bg-slate-100 text-[#1a237e] font-mono px-2 py-0.5 rounded text-xs font-bold">#rendaonline</span>.
                </p>
                <p>
                  Quando você clica em uma hashtag o TikTok mostra todos os vídeos que usaram aquela mesma hashtag. É como uma categoria ou etiqueta que organiza o conteúdo da plataforma.
                </p>
                <p>
                  As hashtags existem em quase todas as redes sociais — Instagram, Twitter, YouTube — mas no TikTok elas funcionam de uma forma específica que você precisa entender.
                </p>
              </div>
            </div>

            {/* HOW HASHTAGS WORK IN TIKTOK (2 PILLARS) */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-[#1a237e] uppercase border-b pb-2 flex items-center gap-2">
                <Zap className="h-5 w-5 text-amber-500" /> Como as hashtags funcionam no TikTok
              </h3>
              <p className="text-slate-650 text-sm font-sans leading-relaxed">
                No TikTok as hashtags servem principalmente para duas coisas fundamentais:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 text-[#1a237e] flex items-center justify-center font-bold text-xs">
                    1
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm font-sans">Categorizar para o Algoritmo</h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Quando você usa hashtags relevantes ao seu tema, o algoritmo entende melhor sobre o que é seu vídeo e para quem deve entregá-lo. Se fala sobre dinheiro online e usa <span className="font-mono text-indigo-700">#rendaonline</span>, ele entrega para pessoas interessadas nesse nicho.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                    2
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm font-sans">Busca Direta dos Usuários (SEO)</h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Usuários do TikTok pesquisam hashtags para encontrar conteúdo específico de aprendizado ou produtos. Se alguém pesquisar <span className="font-mono text-emerald-700">#freela</span> e você usou essa hashtag, seu vídeo pode surgir no topo desses resultados.
                  </p>
                </div>
              </div>
            </div>

            {/* HASHTAG SIZES: BIG, MEDIUM, SMALL */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-[#1a237e] uppercase border-b pb-2 flex items-center gap-2">
                <Sliders className="h-5 w-5 text-brand-green" /> Hashtag grande, média ou pequena — qual usar?
              </h3>
              <p className="text-slate-650 text-sm font-sans leading-relaxed">
                Esse é o ponto onde a maioria das pessoas erra. Veja a diferença técnica de cada nível de volume:
              </p>

              <div className="space-y-4">
                
                {/* Big */}
                <div className="bg-rose-50/50 border border-rose-200 rounded-xl p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-rose-900 text-sm font-sans">Hashtags Grandes (Acima de 1 Bilhão de Visualizações)</h4>
                    <span className="bg-rose-100 text-rose-700 font-mono text-[10px] px-2 py-0.5 rounded font-bold">Evitar / Cuidado</span>
                  </div>
                  <p className="text-xs font-mono text-rose-700 bg-white p-2 rounded border border-rose-200">
                    Exemplos: #fyp, #viral, #foryou, #tiktok
                  </p>
                  <p className="text-xs text-rose-800/90 font-sans leading-relaxed">
                    Essas hashtags têm tanto conteúdo por segundo que seu vídeo vai se perder instantaneamente. A chance de ser encontrado por elas é quase zero. Muita gente usa <span className="font-mono font-bold">#fyp</span> achando que vai aparecer no Para Você de todo mundo — isso é mito! O algoritmo não funciona assim.
                  </p>
                </div>

                {/* Medium */}
                <div className="bg-emerald-50/60 border border-emerald-300 rounded-xl p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-emerald-950 text-sm font-sans">Hashtags Médias (Entre 10 Milhões e 1 Bilhão)</h4>
                    <span className="bg-emerald-200 text-emerald-900 font-mono text-[10px] px-2 py-0.5 rounded font-bold">⭐ As Mais Estratégicas</span>
                  </div>
                  <p className="text-xs font-mono text-emerald-800 bg-white p-2 rounded border border-emerald-200">
                    Exemplos: #rendaonline, #ganhardinheironainternet, #freelancer
                  </p>
                  <p className="text-xs text-emerald-900/90 font-sans leading-relaxed">
                    Têm volume suficiente para mostrar que o tema é popular e ativo, mas não são tão concorridas a ponto do seu vídeo sumir. São as que mais ajudam o algoritmo a entender seu nicho específico.
                  </p>
                </div>

                {/* Small */}
                <div className="bg-indigo-50/60 border border-indigo-200 rounded-xl p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-[#1a237e] text-sm font-sans">Hashtags Pequenas (Abaixo de 10 Milhões)</h4>
                    <span className="bg-indigo-100 text-[#1a237e] font-mono text-[10px] px-2 py-0.5 rounded font-bold">Alta Relevância</span>
                  </div>
                  <p className="text-xs font-mono text-indigo-900 bg-white p-2 rounded border border-indigo-200">
                    Exemplos: #rendaonlineacademy, #freelancerbrasil2025
                  </p>
                  <p className="text-xs text-indigo-900/90 font-sans leading-relaxed">
                    Menores e ultra-específicas. Como têm menos competição, seu vídeo tem altíssima chance de figurar nos primeiros lugares quando um usuário interessado pesquisar.
                  </p>
                </div>

              </div>

              {/* IDEAL MIX FORMULA */}
              <div className="bg-gradient-to-r from-brand-navy to-indigo-950 text-white p-5 rounded-2xl border border-indigo-900 space-y-3">
                <span className="text-brand-green font-mono text-[10px] uppercase font-bold tracking-widest block">
                  💡 A Fórmula do Mix Perfeito de Hashtags
                </span>
                <p className="text-xs sm:text-sm font-sans leading-relaxed text-slate-200">
                  Combine exatamente <strong>5 hashtags por vídeo</strong> com esta proporção de alta conversão:
                </p>
                <div className="bg-black/40 p-3 rounded-xl border border-indigo-800 font-mono text-xs text-brand-green space-y-1">
                  <p>• <strong>2 Hashtags Médias</strong> do seu nicho (ex: #rendaonline #freelancer)</p>
                  <p>• <strong>2 Hashtags Pequenas</strong> específicas (ex: #freelancerbrasil #aprenderonline)</p>
                  <p>• <strong>1 Hashtag de Comunidade / Marca</strong> (ex: #rendaonlineacademy)</p>
                </div>
              </div>
            </div>

            {/* HOW MANY HASHTAGS TO USE */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-[#1a237e] uppercase border-b pb-2 flex items-center gap-2">
                <Target className="h-5 w-5 text-brand-green" /> Quantas hashtags usar no TikTok?
              </h3>
              <div className="text-slate-650 text-sm sm:text-base leading-relaxed space-y-4 font-sans">
                <p>
                  A resposta comprovada por testes práticos é: <strong>menos é mais</strong>.
                </p>
                <p>
                  Vídeos com <strong>3 a 5 hashtags bem escolhidas</strong> performam consideravelmente melhor do que vídeos com 20 ou 30 hashtags poluídas.
                </p>
                <p className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-xs text-amber-900 font-medium">
                  <strong>Por que acontece?</strong> Quando você coloca muitas hashtags desconexas, o algoritmo fica confuso sobre o tema central do vídeo e não sabe para qual público direcionar a Amostragem da Onda 1.
                </p>
              </div>
            </div>

            {/* 4 METHODS TO FIND BEST HASHTAGS */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-[#1a237e] uppercase border-b pb-2 flex items-center gap-2">
                <Search className="h-5 w-5 text-brand-green" /> Como encontrar as melhores hashtags para o seu nicho
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
                  <h4 className="font-bold text-sm text-[#1a237e] font-sans flex items-center gap-2">
                    <span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded text-xs">Método 1</span>
                    Barra de Pesquisa do TikTok
                  </h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Digite o termo do seu vídeo na busca. O TikTok listará hashtags relacionadas com os números de visualizações. Selecione as que estão na faixa de 10M a 500M.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
                  <h4 className="font-bold text-sm text-[#1a237e] font-sans flex items-center gap-2">
                    <span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded text-xs">Método 2</span>
                    Perfis de Concorrentes
                  </h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Inspecione criadores do seu nicho que tiveram vídeos virais recentes. Note quais hashtags específicas se repetem nas postagens bem-sucedidas.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
                  <h4 className="font-bold text-sm text-[#1a237e] font-sans flex items-center gap-2">
                    <span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded text-xs">Método 3</span>
                    Aba Descobrir (Trends)
                  </h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Acesse a aba de descobertas e observe trends em alta. Se houver uma hashtag viral compatível com seu nicho, inclua-a no vídeo.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
                  <h4 className="font-bold text-sm text-[#1a237e] font-sans flex items-center gap-2">
                    <span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded text-xs">Método 4</span>
                    Criar Hashtag Própria
                  </h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Crie uma marca exclusiva como <span className="font-mono font-bold text-indigo-700">#rendaonlineacademy</span>. Com o tempo, seus alunos e seguidores usam a tag e formam uma comunidade.
                  </p>
                </div>

              </div>
            </div>

            {/* READY HASHTAG PRESETS FOR RENDA ONLINE (COPYABLE) */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-[#1a237e] uppercase border-b pb-2 flex items-center gap-2">
                <Copy className="h-5 w-5 text-brand-green" /> Conjuntos Prontos para Copiar (Nicho Renda Online)
              </h3>
              <p className="text-xs text-slate-500 font-sans">
                Clique nos botões para copiar os blocos prontos de hashtags direto para a área de transferência:
              </p>

              <div className="space-y-4">
                
                {/* Preset 1 */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1a237e] font-sans">Hashtags Médias (Estratégicas):</span>
                    <button
                      onClick={() => handleCopy("#rendaonline #ganhardinheironainternet #trabalharpelanet #freelancer #marketingdigital", "preset-medium")}
                      className="px-3 py-1 bg-brand-navy hover:bg-indigo-900 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      {copiedId === "preset-medium" ? <Check className="h-3.5 w-3.5 text-brand-green" /> : <Copy className="h-3.5 w-3.5" />}
                      <span>{copiedId === "preset-medium" ? "Copiado!" : "Copiar"}</span>
                    </button>
                  </div>
                  <p className="font-mono text-xs text-indigo-900 bg-white p-2.5 rounded border border-slate-200">
                    #rendaonline #ganhardinheironainternet #trabalharpelanet #freelancer #marketingdigital
                  </p>
                </div>

                {/* Preset 2 */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1a237e] font-sans">Hashtags Pequenas (Nicho Direto):</span>
                    <button
                      onClick={() => handleCopy("#freelancerbrasil #afiliadohotmart #cursosonline #aprenderonline #rendapassiva2025", "preset-small")}
                      className="px-3 py-1 bg-brand-navy hover:bg-indigo-900 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      {copiedId === "preset-small" ? <Check className="h-3.5 w-3.5 text-brand-green" /> : <Copy className="h-3.5 w-3.5" />}
                      <span>{copiedId === "preset-small" ? "Copiado!" : "Copiar"}</span>
                    </button>
                  </div>
                  <p className="font-mono text-xs text-indigo-900 bg-white p-2.5 rounded border border-slate-200">
                    #freelancerbrasil #afiliadohotmart #cursosonline #aprenderonline #rendapassiva2025
                  </p>
                </div>

                {/* Preset 3 */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1a237e] font-sans">Hashtags de Comunidade & Marca:</span>
                    <button
                      onClick={() => handleCopy("#rendaonlineacademy #aprendaonline", "preset-community")}
                      className="px-3 py-1 bg-brand-navy hover:bg-indigo-900 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      {copiedId === "preset-community" ? <Check className="h-3.5 w-3.5 text-brand-green" /> : <Copy className="h-3.5 w-3.5" />}
                      <span>{copiedId === "preset-community" ? "Copiado!" : "Copiar"}</span>
                    </button>
                  </div>
                  <p className="font-mono text-xs text-indigo-900 bg-white p-2.5 rounded border border-slate-200">
                    #rendaonlineacademy #aprendaonline
                  </p>
                </div>

              </div>
            </div>

            {/* WHERE TO PLACE HASHTAGS (END OF CAPTION) */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-[#1a237e] uppercase border-b pb-2 flex items-center gap-2">
                <FileText className="h-5 w-5 text-brand-green" /> Onde colocar as hashtags na legenda
              </h3>

              <p className="text-slate-650 text-sm font-sans leading-relaxed">
                As hashtags devem vir <strong>SEMPRE NO FINAL DA LEGENDA</strong>. Colocar hashtags no meio das frases dificulta a leitura do usuário e passa uma imagem de spam visual.
              </p>

              <div className="bg-emerald-50 border border-emerald-300 p-5 rounded-xl space-y-2">
                <span className="text-emerald-800 text-[10px] font-mono font-bold uppercase tracking-widest block">
                  ✅ Exemplo Perfeito de Legenda + Hashtags:
                </span>
                <p className="bg-white p-3 rounded-lg border border-emerald-200 font-sans text-xs text-slate-800 leading-relaxed">
                  "O segredo que ninguém conta sobre crescer no TikTok do zero 👇 Qual foi seu maior erro ao começar? Comenta aqui!<br/><br/>
                  <span className="font-mono text-indigo-700 font-semibold">#rendaonline #tiktoktips #freelancer #trabalharpelanet</span>"
                </p>
              </div>
            </div>

            {/* MYTHS ABOUT HASHTAGS */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-[#1a237e] uppercase border-b pb-2 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" /> Os 4 Maiores Mitos sobre Hashtags
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div className="bg-rose-50/50 border border-rose-200 p-4 rounded-xl space-y-1.5">
                  <h4 className="font-bold text-rose-900 text-xs uppercase font-sans flex items-center gap-1.5">
                    ❌ Mito 1: #fyp garante FYP
                  </h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    <strong>Falso.</strong> O FYP é liberado apenas se a retenção inicial do grupo teste for alta. Usar #fyp não altera o julgamento do algoritmo.
                  </p>
                </div>

                <div className="bg-rose-50/50 border border-rose-200 p-4 rounded-xl space-y-1.5">
                  <h4 className="font-bold text-rose-900 text-xs uppercase font-sans flex items-center gap-1.5">
                    ❌ Mito 2: Quanto mais hashtags melhor
                  </h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    <strong>Falso.</strong> Muitas tags deixam o algoritmo incerto sobre a temática central. Limite-se a 3-5 tags direcionadas.
                  </p>
                </div>

                <div className="bg-rose-50/50 border border-rose-200 p-4 rounded-xl space-y-1.5">
                  <h4 className="font-bold text-rose-900 text-xs uppercase font-sans flex items-center gap-1.5">
                    ❌ Mito 3: É o fator mais importante
                  </h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    <strong>Falso.</strong> A taxa de retenção e tempo assistido continuam sendo soberanos na pontuação viral.
                  </p>
                </div>

                <div className="bg-rose-50/50 border border-rose-200 p-4 rounded-xl space-y-1.5">
                  <h4 className="font-bold text-rose-900 text-xs uppercase font-sans flex items-center gap-1.5">
                    ❌ Mito 4: Repetir sempre as mesmas
                  </h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    <strong>Falso.</strong> Variar hashtags entre vídeos ajuda a testar e alcançar subgrupos diferentes de audiência.
                  </p>
                </div>

              </div>
            </div>

            {/* CONCLUSION & CTA */}
            <div className="bg-gradient-to-r from-brand-navy to-indigo-950 text-white rounded-2xl p-6 md:p-8 shadow-lg text-center space-y-4">
              <h3 className="text-lg md:text-xl font-bold uppercase font-sans tracking-tight">
                Pronto para Dominar o TikTok?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto font-sans leading-relaxed">
                Hashtags não são mágica, mas sim ferramentas de categorização. Combine retenção nos 3 primeiros segundos com 3 a 5 hashtags estratégicas e acelere seu crescimento online.
              </p>
              <div className="pt-2">
                <span className="inline-block bg-brand-green text-brand-navy font-bold font-sans text-xs px-6 py-3 rounded-xl uppercase tracking-wider shadow-md">
                  Acesse nosso curso gratuito completo no Renda Online Academy!
                </span>
              </div>
            </div>

          </div>
        )}

        {/* TAB 4: COMO GRAVAR VÍDEOS QUE PRENDEM ATENÇÃO */}
        {activeTab === "gravacao" && (
          <div className="grid grid-cols-1 gap-10">
            
            {/* ARTICLE HEADER & INTRO */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-4">
              <div className="inline-block bg-emerald-50 text-emerald-800 border border-emerald-200 font-mono text-[10px] px-3 py-1 rounded-full font-bold uppercase">
                Guia Completo de Gravação & Retenção
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#1a237e] uppercase tracking-tight font-sans leading-snug">
                Como Gravar Vídeos que Prendem Atenção no TikTok em 2025 — Guia Completo para Iniciantes
              </h2>
              <p className="text-xs text-slate-500 font-sans italic border-b pb-4">
                <strong>Meta descrição:</strong> Aprenda as técnicas para gravar vídeos no TikTok que as pessoas assistem até o final, aumentam suas visualizações e fazem seu perfil crescer do zero.
              </p>

              <div className="text-slate-650 text-sm sm:text-base leading-relaxed space-y-4 font-sans pt-2">
                <p>
                  Você já parou pra pensar por que alguns vídeos no TikTok prendem sua atenção do começo ao fim enquanto outros você desliza em menos de 2 segundos?
                </p>
                <p>
                  <strong>Não é sorte. Não é talento nato. É técnica.</strong>
                </p>
                <p>
                  Existe um conjunto de estratégias que os melhores criadores de conteúdo usam pra fazer as pessoas assistirem seus vídeos até o final — e essas estratégias podem ser aprendidas por qualquer pessoa.
                </p>
                <p className="bg-slate-50 border-l-4 border-brand-green p-4 rounded-r-xl italic text-slate-700 font-medium text-sm">
                  "Neste artigo você vai aprender exatamente como gravar vídeos que prendem atenção no TikTok — mesmo que você nunca tenha gravado um vídeo na vida e mesmo que ache que não tem jeito pra isso."
                </p>
              </div>
            </div>

            {/* WHY RETENTION MATTERS MOST */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-[#1a237e] uppercase border-b pb-2 flex items-center gap-2">
                <Target className="h-5 w-5 text-brand-green" /> Por que prender atenção é tão importante
              </h3>
              <div className="text-slate-650 text-sm sm:text-base leading-relaxed space-y-4 font-sans">
                <p>
                  Antes de falar das técnicas preciso te explicar por que isso importa tanto.
                </p>
                <p>
                  O fator mais importante do algoritmo do TikTok é a <strong>taxa de conclusão</strong> — quantas pessoas assistem seu vídeo até o final.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
                  <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl space-y-1">
                    <span className="text-emerald-800 font-bold text-xs font-mono uppercase block">✅ Se assistem até o fim:</span>
                    <p className="text-xs text-slate-700">O algoritmo entende que o conteúdo é excelente e impulsiona para milhares de novos usuários.</p>
                  </div>
                  <div className="bg-rose-50 border border-rose-200 p-4 rounded-xl space-y-1">
                    <span className="text-rose-800 font-bold text-xs font-mono uppercase block">❌ Se saem nos primeiros segundos:</span>
                    <p className="text-xs text-slate-700">O algoritmo trava a distribuição e o vídeo morre na amostragem inicial.</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 bg-slate-100 p-3 rounded-lg font-medium">
                  💡 Isso significa que prender a atenção não é só uma questão estética. É a diferença direta entre ter 200 visualizações ou 200 mil.
                </p>
              </div>
            </div>

            {/* THE 3 CRITICAL MOMENTS OF A TIKTOK VIDEO */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-[#1a237e] uppercase border-b pb-2 flex items-center gap-2">
                <Clock className="h-5 w-5 text-amber-500" /> Os 3 momentos críticos de um vídeo no TikTok
              </h3>
              <p className="text-slate-650 text-sm font-sans leading-relaxed">
                Todo vídeo no TikTok possui 3 janelas temporais decisivas onde você ganha ou perde o espectador:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-xs font-mono">
                    2s
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm font-sans">1. Primeiros 2 Segundos</h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    A pessoa decide se assiste ou desliza. Se você não capturar o olhar ou curiosidade imediatamente, a pessoa sumiu para sempre.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs font-mono">
                    15s
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm font-sans">2. Primeiros 15 Segundos</h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Momento de sustentação do valor. Você deve manter ritmo ágil e entregar a promessa inicial para evitar evasão do espectador.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs font-mono">
                    Fim
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm font-sans">3. O Final do Vídeo</h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Onde a mágica se converte em ação (comentar, seguir, salvar) ou em um loop perfeito que faz a pessoa reassistir.
                  </p>
                </div>

              </div>
            </div>

            {/* 6 TYPES OF HOOKS FOR THE FIRST 2 SECONDS */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-[#1a237e] uppercase border-b pb-2 flex items-center gap-2">
                <Zap className="h-5 w-5 text-brand-green" /> Como criar um gancho irresistível nos primeiros 2 segundos
              </h3>
              <p className="text-slate-650 text-sm font-sans leading-relaxed">
                O gancho é o gatilho visual ou falado inicial. Veja os 6 modelos de ganchos de alta conversão comprovados no TikTok:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Hook 1 */}
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1a237e] font-sans">Gancho 1 — A Revelação</span>
                    <button
                      onClick={() => handleCopy("Você está usando o TikTok do jeito errado — e isso explica por que não cresce.", "hook-1")}
                      className="text-xs bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 px-2 py-1 rounded font-bold transition-all flex items-center gap-1 cursor-pointer"
                    >
                      {copiedId === "hook-1" ? <Check className="h-3 w-3 text-brand-green" /> : <Copy className="h-3 w-3" />}
                      <span>{copiedId === "hook-1" ? "Copiado!" : "Copiar Exemplo"}</span>
                    </button>
                  </div>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Comece revelando um fato contra-intuitivo que quebra o senso comum.
                  </p>
                  <p className="font-mono text-[11px] text-indigo-900 bg-white p-2 rounded border border-slate-200">
                    "Você está usando o TikTok do jeito errado — e isso explica por que não cresce."
                  </p>
                </div>

                {/* Hook 2 */}
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1a237e] font-sans">Gancho 2 — A Pergunta Direta</span>
                    <button
                      onClick={() => handleCopy("Você sabe quanto tempo leva pra ganhar o primeiro R$500 online?", "hook-2")}
                      className="text-xs bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 px-2 py-1 rounded font-bold transition-all flex items-center gap-1 cursor-pointer"
                    >
                      {copiedId === "hook-2" ? <Check className="h-3 w-3 text-brand-green" /> : <Copy className="h-3 w-3" />}
                      <span>{copiedId === "hook-2" ? "Copiado!" : "Copiar Exemplo"}</span>
                    </button>
                  </div>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Faça uma pergunta que desperta curiosidade instantânea no nicho.
                  </p>
                  <p className="font-mono text-[11px] text-indigo-900 bg-white p-2 rounded border border-slate-200">
                    "Você sabe quanto tempo leva pra ganhar o primeiro R$500 online?"
                  </p>
                </div>

                {/* Hook 3 */}
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1a237e] font-sans">Gancho 3 — O Número</span>
                    <button
                      onClick={() => handleCopy("3 erros que destroem qualquer perfil no TikTok.", "hook-3")}
                      className="text-xs bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 px-2 py-1 rounded font-bold transition-all flex items-center gap-1 cursor-pointer"
                    >
                      {copiedId === "hook-3" ? <Check className="h-3 w-3 text-brand-green" /> : <Copy className="h-3 w-3" />}
                      <span>{copiedId === "hook-3" ? "Copiado!" : "Copiar Exemplo"}</span>
                    </button>
                  </div>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Números ativam foco no cérebro porque prometem uma estrutura clara.
                  </p>
                  <p className="font-mono text-[11px] text-indigo-900 bg-white p-2 rounded border border-slate-200">
                    "3 erros que destroem qualquer perfil no TikTok."
                  </p>
                </div>

                {/* Hook 4 */}
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1a237e] font-sans">Gancho 4 — Ameaça ou Urgência</span>
                    <button
                      onClick={() => handleCopy("Se você faz isso no TikTok para agora.", "hook-4")}
                      className="text-xs bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 px-2 py-1 rounded font-bold transition-all flex items-center gap-1 cursor-pointer"
                    >
                      {copiedId === "hook-4" ? <Check className="h-3 w-3 text-brand-green" /> : <Copy className="h-3 w-3" />}
                      <span>{copiedId === "hook-4" ? "Copiado!" : "Copiar Exemplo"}</span>
                    </button>
                  </div>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Avisa o espectador de um risco imediato de perda se não assistir.
                  </p>
                  <p className="font-mono text-[11px] text-indigo-900 bg-white p-2 rounded border border-slate-200">
                    "Se você faz isso no TikTok para agora."
                  </p>
                </div>

                {/* Hook 5 */}
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1a237e] font-sans">Gancho 5 — Promessa de Resultado</span>
                    <button
                      onClick={() => handleCopy("Como cresci de zero para 10 mil seguidores em 60 dias.", "hook-5")}
                      className="text-xs bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 px-2 py-1 rounded font-bold transition-all flex items-center gap-1 cursor-pointer"
                    >
                      {copiedId === "hook-5" ? <Check className="h-3 w-3 text-brand-green" /> : <Copy className="h-3 w-3" />}
                      <span>{copiedId === "hook-5" ? "Copiado!" : "Copiar Exemplo"}</span>
                    </button>
                  </div>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Mostra um resultado desejável e mensurável logo no início.
                  </p>
                  <p className="font-mono text-[11px] text-indigo-900 bg-white p-2 rounded border border-slate-200">
                    "Como cresci de zero para 10 mil seguidores em 60 dias."
                  </p>
                </div>

                {/* Hook 6 */}
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
                  <span className="text-xs font-bold text-[#1a237e] font-sans block">Gancho 6 — O Visual Impactante</span>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Inicie o vídeo com uma ação incomum, objeto inesperado ou movimento acelerado que faça o cérebro pausar a rolagem.
                  </p>
                  <p className="font-mono text-[11px] text-emerald-800 bg-white p-2 rounded border border-slate-200">
                    Ex: Apontar pra tela com expressão surpresa ou mostrar a tela do computador com um valor chamativo.
                  </p>
                </div>

              </div>
            </div>

            {/* 6 TECHNIQUES TO MAINTAIN ATTENTION */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-[#1a237e] uppercase border-b pb-2 flex items-center gap-2">
                <Flame className="h-5 w-5 text-brand-green" /> 6 Técnicas para manter a atenção até o final
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
                  <h4 className="font-bold text-sm text-[#1a237e] font-sans flex items-center gap-2">
                    <Scissors className="h-4 w-4 text-emerald-600" /> 1. Cortes Rápidos (2 a 3s)
                  </h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Elimine qualquer silêncio ou respiração morta. Faça cortes a cada 2-3 segundos para 'renovar' o estalo de atenção do cérebro.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
                  <h4 className="font-bold text-sm text-[#1a237e] font-sans flex items-center gap-2">
                    <FileText className="h-4 w-4 text-indigo-600" /> 2. Texto e Legenda na Tela
                  </h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Muitas pessoas assistem sem som. O texto na tela captura esse público e cria um segundo estímulo de leitura visual.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
                  <h4 className="font-bold text-sm text-[#1a237e] font-sans flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-amber-600" /> 3. Técnica de Loop Perfeito
                  </h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Conecte a última frase do vídeo com a primeira. A pessoa assiste novamente sem perceber que reiniciou, duplicando a retenção.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
                  <h4 className="font-bold text-sm text-[#1a237e] font-sans flex items-center gap-2">
                    <Eye className="h-4 w-4 text-emerald-600" /> 4. Curiosidade Progressiva
                  </h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Avise antecipadamente: <i>"A dica 3 é a mais importante de todas"</i>. Isso força a pessoa a permanecer até o final para ver a promessa.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
                  <h4 className="font-bold text-sm text-[#1a237e] font-sans flex items-center gap-2">
                    <Volume2 className="h-4 w-4 text-indigo-600" /> 5. Música de Fundo (Volume Baixo)
                  </h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Áudio em alta com volume em 5% a 10% cria uma atmosfera energética subliminar sem abafar sua voz principal.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
                  <h4 className="font-bold text-sm text-[#1a237e] font-sans flex items-center gap-2">
                    <Video className="h-4 w-4 text-amber-600" /> 6. Variedade Visual & Enquadramento
                  </h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Alterne o zoom, mostre a tela do celular, aponte para stickers e use transições do próprio aplicativo.
                  </p>
                </div>

              </div>
            </div>

            {/* ENVIRONMENT & APPEARANCE */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-[#1a237e] uppercase border-b pb-2 flex items-center gap-2">
                <Camera className="h-5 w-5 text-brand-green" /> A importância do cenário e da aparência
              </h3>
              <p className="text-slate-650 text-sm font-sans leading-relaxed">
                Você não precisa de um estúdio profissional de mil reais. O segredo está no básico bem executado:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1.5">
                  <h4 className="font-bold text-slate-800 text-xs font-sans uppercase text-emerald-700">☀️ Iluminação Adequada</h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Grave de frente para uma janela com iluminação natural durante o dia (nunca de costas para a luz).
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1.5">
                  <h4 className="font-bold text-slate-800 text-xs font-sans uppercase text-indigo-700">🧹 Fundo Limpo e Organizado</h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Uma parede lisa ou estante arrumada. Ambientes bagunçados geram ruído visual e passam amadorismo.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1.5">
                  <h4 className="font-bold text-slate-800 text-xs font-sans uppercase text-amber-700">🎙️ Áudio Limpo e Sem Eco</h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    O áudio ruim expulsa o espectador na hora. Grave em local silencioso com fones de ouvido comuns.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1.5">
                  <h4 className="font-bold text-slate-800 text-xs font-sans uppercase text-emerald-700">👕 Vestuário Alinhado ao Nicho</h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Evite pijamas ou roupas desalinhadas se você deseja ser respeitado como autoridade de mercado.
                  </p>
                </div>

              </div>
            </div>

            {/* SPEAKING ON CAMERA WITH NATURALNESS */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-[#1a237e] uppercase border-b pb-2 flex items-center gap-2">
                <Mic className="h-5 w-5 text-brand-green" /> Como falar na câmera com naturalidade
              </h3>

              <div className="space-y-3 font-sans text-xs sm:text-sm text-slate-650 leading-relaxed">
                <div className="flex gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-indigo-800 font-mono text-xs">1.</span>
                  <div>
                    <strong>Pratique o roteiro antes:</strong> Fale as ideias principais em voz alta 2 ou 3 vezes sem tentar decorar palavra por palavra.
                  </div>
                </div>

                <div className="flex gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-indigo-800 font-mono text-xs">2.</span>
                  <div>
                    <strong>Olhe pra câmera, não pra tela:</strong> Cole um adesivo colorido ao lado da lente da câmera do celular para direcionar seu olhar e criar conexão olho no olho com o espectador.
                  </div>
                </div>

                <div className="flex gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-indigo-800 font-mono text-xs">3.</span>
                  <div>
                    <strong>Projete 30% a mais de energia:</strong> A lente da câmera 'suga' a energia natural. Fale com um pouco mais de entusiasmo do que numa conversa de café.
                  </div>
                </div>

                <div className="flex gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-indigo-800 font-mono text-xs">4.</span>
                  <div>
                    <strong>Aceite erros leves:</strong> Pausas e pequenos gaguejos são removidos facilmente na edição com um simples corte de fala.
                  </div>
                </div>

                <div className="flex gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-indigo-800 font-mono text-xs">5.</span>
                  <div>
                    <strong>Grave múltiplos takes:</strong> Grave 3 a 5 vezes até ficar fluido. A repetição gera maestria em poucas semanas.
                  </div>
                </div>
              </div>
            </div>

            {/* MINIMUM EQUIPMENT NEEDED */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-[#1a237e] uppercase border-b pb-2 flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-brand-green" /> Equipamento mínimo necessário
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center space-y-2">
                  <Smartphone className="h-6 w-6 text-indigo-700 mx-auto" />
                  <h4 className="font-bold text-xs text-slate-800 font-sans">Smartphone</h4>
                  <p className="text-[11px] text-slate-600 font-sans">Seu próprio celular já é 100% suficiente para iniciar.</p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center space-y-2">
                  <Camera className="h-6 w-6 text-emerald-700 mx-auto" />
                  <h4 className="font-bold text-xs text-slate-800 font-sans">Suporte/Tripé</h4>
                  <p className="text-[11px] text-slate-600 font-sans">R$20 a R$50. Mantém o enquadramento firme e as mãos livres.</p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center space-y-2">
                  <Mic className="h-6 w-6 text-amber-700 mx-auto" />
                  <h4 className="font-bold text-xs text-slate-800 font-sans">Fone com Mic</h4>
                  <p className="text-[11px] text-slate-600 font-sans">Os fones originais do celular garantem voz nítida e sem eco.</p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center space-y-2">
                  <Sparkles className="h-6 w-6 text-indigo-700 mx-auto" />
                  <h4 className="font-bold text-xs text-slate-800 font-sans">Ring Light (Opcional)</h4>
                  <p className="text-[11px] text-slate-600 font-sans">R$80 a R$200. Ilumina gravações noturnas com alta qualidade.</p>
                </div>

              </div>
            </div>

            {/* CONCLUSION & CTA */}
            <div className="bg-gradient-to-r from-brand-navy to-indigo-950 text-white rounded-2xl p-6 md:p-8 shadow-lg text-center space-y-4">
              <h3 className="text-lg md:text-xl font-bold uppercase font-sans tracking-tight">
                Domine a Gravação de Vídeos Magnéticos
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto font-sans leading-relaxed">
                Gravar vídeos no TikTok é uma habilidade treinável. Foque nos 2 primeiros segundos, aplique cortes rápidos e pratique a cada gravação!
              </p>
              <div className="pt-2">
                <span className="inline-block bg-brand-green text-brand-navy font-bold font-sans text-xs px-6 py-3 rounded-xl uppercase tracking-wider shadow-md">
                  Acesse nosso curso gratuito completo no Renda Online Academy!
                </span>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

