import React, { useState } from "react";
import { 
  Compass, 
  Map, 
  ChevronRight, 
  Award, 
  Flame, 
  Sparkles, 
  Code, 
  Globe, 
  Cpu, 
  TrendingUp, 
  BadgeCheck, 
  CheckCircle2, 
  Lock,
  Smartphone,
  Workflow,
  ArrowUpRight
} from "lucide-react";

interface LevelStage {
  id: string;
  name: string;
  subtitle: string;
  colorName: string;
  borderClass: string;
  bgClass: string;
  badgeBg: string;
  textAccent: string;
  icon: string;
  topics: string[];
  estimatedTime: string;
  difficulty: "Fácil" | "Médio" | "Avançado" | "Expert" | "Extremo";
}

const PROGRESSION_STAGES: LevelStage[] = [
  {
    id: "iniciante",
    name: "🟢 NÍVEL INICIANTE",
    subtitle: "Primeiros Passos",
    colorName: "from-emerald-500 to-green-600",
    borderClass: "border-emerald-200 hover:border-emerald-400",
    bgClass: "bg-emerald-50/20",
    badgeBg: "bg-emerald-50 border-emerald-100 text-emerald-700",
    textAccent: "text-emerald-700",
    icon: "🌱",
    topics: [
      "O que é ganhar dinheiro online e como funciona",
      "Mentalidade certa (evitar golpes, expectativas reais)",
      "Ferramentas básicas: e-mail profissional, WhatsApp Business, Canva",
      "Como criar perfis profissionais nas redes sociais"
    ],
    estimatedTime: "Semana 1",
    difficulty: "Fácil"
  },
  {
    id: "basico",
    name: "🔵 NÍVEL BÁSICO",
    subtitle: "Primeiras Rendas",
    colorName: "from-blue-500 to-indigo-600",
    borderClass: "border-blue-200 hover:border-blue-400",
    bgClass: "bg-blue-50/20",
    badgeBg: "bg-blue-50 border-blue-100 text-blue-700",
    textAccent: "text-blue-700",
    icon: "🛠️",
    topics: [
      "Freelancer: o que é, como se cadastrar no Workana e 99freelas",
      "Como criar um portfólio do zero sem experiência",
      "Serviços fáceis de oferecer: digitação, legendas, pesquisa, social media",
      "Como precificar seu trabalho"
    ],
    estimatedTime: "Semanas 2 a 4",
    difficulty: "Médio"
  },
  {
    id: "intermediario",
    name: "🟡 NÍVEL INTERMEDIÁRIO",
    subtitle: "Crescendo Online",
    colorName: "from-amber-500 to-yellow-600",
    borderClass: "border-amber-200 hover:border-amber-400",
    bgClass: "bg-amber-50/20",
    badgeBg: "bg-amber-50 border-amber-100 text-amber-700",
    textAccent: "text-amber-700",
    icon: "⚡",
    topics: [
      "Marketing de Afiliados: Hotmart, Monetizze, Eduzz",
      "Como divulgar produtos sem aparecer",
      "Criação de conteúdo: Instagram, TikTok e YouTube",
      "Como criar um blog ou site simples",
      "E-mail marketing básico"
    ],
    estimatedTime: "Mês 2 a 3",
    difficulty: "Médio"
  },
  {
    id: "avancado",
    name: "🟠 NÍVEL AVANÇADO",
    subtitle: "Escalando a Renda",
    colorName: "from-orange-500 to-amber-600",
    borderClass: "border-orange-200 hover:border-orange-400",
    bgClass: "bg-orange-50/20",
    badgeBg: "bg-orange-50 border-orange-100 text-orange-700",
    textAccent: "text-orange-755",
    icon: "📈",
    topics: [
      "Criar e vender seu próprio infoproduto (e-book, curso)",
      "Tráfego pago: o que é e como começar com pouco",
      "Funil de vendas simples",
      "Como ganhar em dólares (Fiverr, Upwork, Gringo)"
    ],
    estimatedTime: "Mês 4 a 6",
    difficulty: "Avançado"
  },
  {
    id: "expert",
    name: "🔴 NÍVEL EXPERT",
    subtitle: "Renda Passiva",
    colorName: "from-rose-500 to-red-650",
    borderClass: "border-rose-200 hover:border-rose-450",
    bgClass: "bg-rose-50/25",
    badgeBg: "bg-rose-50 border-rose-100 text-rose-700",
    textAccent: "text-rose-700",
    icon: "🏆",
    topics: [
      "Monetização com redes de anúncios",
      "Construir uma audiência fiel",
      "Automatizar renda com produtos digitais",
      "Como escalar para R$5.000, R$10.000 por mês"
    ],
    estimatedTime: "Semestre +",
    difficulty: "Expert"
  }
];

export default function MarketingProgressionPath() {
  const [selectedStageId, setSelectedStageId] = useState<string>("iniciante");
  const [markedTopics, setMarkedTopics] = useState<string[]>([]);

  const toggleTopicMark = (topic: string) => {
    setMarkedTopics(prev => {
      const exists = prev.includes(topic);
      const next = exists ? prev.filter(t => t !== topic) : [...prev, topic];
      
      // Attempt brief retro arcade synth tick feedback
      try {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioCtx) {
          const ctx = new AudioCtx();
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.connect(gain);
          gain.connect(ctx.destination);
          
          osc.type = "sine";
          osc.frequency.setValueAtTime(exists ? 300 : 700, ctx.currentTime);
          
          gain.gain.setValueAtTime(0.04, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
          
          osc.start();
          osc.stop(ctx.currentTime + 0.1);
        }
      } catch {}
      
      return next;
    });
  };

  const selectedStage = PROGRESSION_STAGES.find(s => s.id === selectedStageId) || PROGRESSION_STAGES[0];

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-6">
      
      {/* 1. SECTION TITLE BANNER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-5">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1 bg-[#1a237e]/10 border border-[#1a237e]/25 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-[#1a237e]">
            <Compass className="h-3.5 w-3.5" />
            <span>Mapa de Carreira</span>
          </div>
          <h3 className="text-base sm:text-lg font-black text-[#1a237e] font-sans leading-tight">
            Trilha de Progresso: Do Zero à Renda Recorrente
          </h3>
          <p className="text-xs text-slate-500 font-sans max-w-2xl">
            Visualize as fases cronológicas do mercado digital. Comece engatinhando nos passos fáceis, preste seus primeiros serviços e escale para produtos em dólar.
          </p>
        </div>

        {/* Global Progress Badge tracker */}
        <div className="flex gap-1.5 items-center bg-slate-50 border px-3 py-1.5 rounded-full text-[10.5px] font-black text-slate-650 font-sans">
          <Award className="h-4 w-4 text-amber-500" />
          <span>Ativação Sistemática</span>
        </div>
      </div>

      {/* 2. PROGRESS TIER NAVIGATION PILLS GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {PROGRESSION_STAGES.map((stage) => {
          const isSelected = stage.id === selectedStageId;
          return (
            <button
              key={stage.id}
              onClick={() => setSelectedStageId(stage.id)}
              className={`cursor-pointer p-4 rounded-2xl border text-left transition-all ${
                isSelected
                  ? "border-[#1a237e] bg-indigo-50/50 shadow-3xs"
                  : "border-slate-150 hover:bg-slate-50/50"
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-xl bg-white w-7.5 h-7.5 rounded-xl border flex items-center justify-center shrink-0 shadow-3xs">
                  {stage.icon}
                </span>
                <span className={`text-[8.5px] font-mono font-bold px-1.5 py-0.5 rounded border ${stage.badgeBg}`}>
                  {stage.difficulty}
                </span>
              </div>
              <strong className="text-[10.5px] text-slate-800 leading-tight block tracking-tight font-sans font-black mt-2">
                {stage.subtitle}
              </strong>
              <span className="text-[9.5px] text-slate-400 font-sans block mt-0.5">{stage.estimatedTime}</span>
            </button>
          );
        })}
      </div>

      {/* 3. CORE ACTIVE TIER COMPILATION DETAIL DISPLAY PANEL */}
      <div className={`border rounded-[20px] p-5.5 space-y-4 ${selectedStage.bgClass} transition-all duration-300`}>
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div className="space-y-1">
            <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${selectedStage.textAccent}`}>
              PLANILHA OPERACIONAL DA JORNADA
            </span>
            <h4 className="text-sm font-black text-slate-850 font-sans flex items-center gap-1.5">
              <span>{selectedStage.name}</span>
              <span>—</span>
              <span className="text-slate-500">"{selectedStage.subtitle}"</span>
            </h4>
          </div>

          <div className="flex gap-2 text-[10px] font-sans font-semibold text-slate-500">
            <span className="border bg-white px-2 py-1 rounded-lg">Estimativa: {selectedStage.estimatedTime}</span>
            <span className="border bg-white px-2 py-1 rounded-lg">Dificuldade: {selectedStage.difficulty}</span>
          </div>
        </div>

        {/* LIST OF TOPICS WITH INTERACTIVE CHECKMARKS */}
        <div className="bg-white border border-slate-200.5 rounded-2xl p-4.5 space-y-3 font-sans">
          <span className="text-[9.5px] font-mono font-black text-slate-400 uppercase tracking-widest block">
            📋 CONTEÚDOS E METAS DE APRENDIZADO DESTE NÍVEL:
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {selectedStage.topics.map((topic, tIdx) => {
              const isMarked = markedTopics.includes(topic);
              return (
                <div 
                  key={tIdx}
                  onClick={() => toggleTopicMark(topic)}
                  className={`cursor-pointer p-3.5 border rounded-xl transition-all flex items-start gap-3 ${
                    isMarked 
                      ? "bg-indigo-50/20 border-[#1a237e]/30" 
                      : "bg-slate-50/40 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  <span className={`w-5.5 h-5.5 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                    isMarked 
                      ? "bg-[#1a237e] text-white border-indigo-700" 
                      : "bg-white border-slate-250 text-slate-300"
                  }`}>
                    {isMarked ? <BadgeCheck className="h-3.5 w-3.5" /> : <span className="text-[10px] font-bold font-mono">+</span>}
                  </span>

                  <span className={`text-[11.5px] font-sans leading-tight ${
                    isMarked ? "text-slate-400 line-through" : "text-slate-700 font-medium"
                  }`}>
                    {topic}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic progression footer checklist */}
        <div className="bg-white/60 border border-slate-150 rounded-xl p-3.5 flex items-center justify-between text-[11px] text-slate-500 font-sans">
          <div className="flex items-center gap-1.5">
            <span className="text-base">🚀</span>
            <span>Estude na ordem cronológica sugerida acima para evitar pular etapas essenciais do marketing.</span>
          </div>

          <span className="font-mono text-[9.5px] bg-slate-100 px-2 py-0.5 rounded border text-slate-600">
            {markedTopics.filter(t => selectedStage.topics.includes(t)).length} de {selectedStage.topics.length} Concluído
          </span>
        </div>

      </div>

      {/* PIPELINE ROADMAP GRAPHIC ACCENT */}
      <div className="bg-slate-950 text-white rounded-2xl p-5 space-y-4 relative overflow-hidden font-sans">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex items-center gap-2 pb-2 border-b border-white/5 justify-between">
          <span className="text-[9.5px] font-mono text-emerald-400 block uppercase tracking-wider font-bold">Fluxograma Estratégico de Maturidade Financeira</span>
          <span className="text-[9px] font-mono text-slate-500">Fluxo Decrescente de Esforço</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 text-center text-xs">
          {[
            { phase: "Fase 1", title: "Iniciante", desc: "Estrutura Básica", emo: "🌱", flow: "->" },
            { phase: "Fase 2", title: "Básico", desc: "Primeiras Rendas", emo: "🛠️", flow: "->" },
            { phase: "Fase 3", title: "Intermediário", desc: "Crescer Audiência", emo: "⚡", flow: "->" },
            { phase: "Fase 4", title: "Avançado", desc: "Escalar Vendas", emo: "📈", flow: "->" },
            { phase: "Fase 5", title: "Expert", desc: "Ganhos Recorrentes", emo: "🏆", flow: "" }
          ].map((item, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-3 relative space-y-1 flex flex-col justify-between items-center min-h-[90px]">
              <div>
                <span className="text-[8.5px] font-mono text-[#FF6B35] block uppercase font-bold">{item.phase}</span>
                <strong className="text-[11.5px] block text-white mt-1">{item.title}</strong>
              </div>
              <span className="text-lg my-1">{item.emo}</span>
              <p className="text-[10px] text-slate-400 leading-none">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
