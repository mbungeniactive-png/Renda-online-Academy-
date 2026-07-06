import React, { useState, useEffect } from "react";
import { 
  BrainCircuit, 
  Target, 
  Flame, 
  CheckCircle2, 
  Award, 
  Calendar, 
  TrendingUp, 
  AlertCircle, 
  Heart, 
  Share2, 
  Sparkles, 
  Play, 
  Smartphone, 
  BookOpen,
  Milestone,
  CheckCircle,
  Clock,
  Compass
} from "lucide-react";

interface MindsetPoint {
  id: string;
  title: string;
  concept: string;
  icon: string;
  bgClass: string;
  txtClass: string;
  desc: string;
}

const MINDSET_POINTS: MindsetPoint[] = [
  {
    id: "consistency",
    title: "1. Consistência over Talento",
    concept: "Aparecer Todo Dia",
    icon: "🎯",
    bgClass: "bg-emerald-500/5 border-emerald-500/20",
    txtClass: "text-emerald-700",
    desc: "Você não precisa ser genial. Você precisa ser regular. O freelancer médio que manda propostas de serviços todos os dias úteis ganha muito mais que o designer experiente que se candidata uma vez por semana."
  },
  {
    id: "error",
    title: "2. Erro é Aprendizado Puro",
    concept: "Resiliência Operacional",
    icon: "🛡️",
    bgClass: "bg-amber-500/5 border-amber-500/20",
    txtClass: "text-amber-700",
    desc: "Todo mundo que ganha dinheiro profissional errou muito de largada. Portfólios feios, propostas ignoradas ou postagens sem público. Isso não indica fracasso permanente, apenas ajuste de rota técnica."
  },
  {
    id: "delay",
    title: "3. Raízes primeiro, Frutos depois",
    concept: "Efeito Árvore",
    icon: "🌱",
    bgClass: "bg-indigo-500/5 border-indigo-500/20",
    txtClass: "text-indigo-700",
    desc: "A internet é igual a plantar uma videira ou árvore. Você rega semanas a fio em silêncio. Nada parece brotar, mas a fundação invisível de raízes está crescendo. Quando ela desponta, a escalabilidade é acelerada."
  },
  {
    id: "comparison",
    title: "4. Anti-Comparação Paralítica",
    concept: "Foco no Próprio Painel",
    icon: "🚫",
    bgClass: "bg-rose-500/5 border-rose-500/20",
    txtClass: "text-rose-700",
    desc: "Nunca compare seus primeiros 15 dias de testes simples com o faturamento anual de R$ 200.000 de um infoprodutor experiente. Ele levou anos para atingir esse ponto. Compare o seu eu de hoje com o de ontem."
  }
];

export default function MarketingLessonThree() {
  const [selectedMindset, setSelectedMindset] = useState<string>("consistency");
  const [selfScoreConsistency, setSelfScoreConsistency] = useState<number>(3);
  const [selfScoreError, setSelfScoreError] = useState<number>(3);
  const [selfScorePatience, setSelfScorePatience] = useState<number>(3);
  const [selfScoreComparison, setSelfScoreComparison] = useState<number>(3);
  
  const [interactiveLike, setInteractiveLike] = useState<boolean>(false);

  // Goal Inputs State
  const [goalMonth1, setGoalMonth1] = useState<string>("Aprender ferramentas, Canva, e-mail institucional e mandar propostas piloto");
  const [goalMonth23, setGoalMonth23] = useState<string>("Fazer os primeiros R$ 300 a R$ 500 prestando serviços ou indicação de afiliados");
  const [goalMonth46, setGoalMonth46] = useState<string>("Bater R$ 1.500 a R$ 2.000 recorrentes ampliando portfólio de edição de vídeo ou copy");
  const [isGoalsSaved, setIsGoalsSaved] = useState<boolean>(false);

  // Daily action input
  const [dailyHabitText, setDailyHabitText] = useState<string>("Estudar marketing e treinar no Canva por 30 minutos todos os dias");

  useEffect(() => {
    try {
      const savedM1 = localStorage.getItem("lesson_three_goal_m1");
      const savedM23 = localStorage.getItem("lesson_three_goal_m23");
      const savedM46 = localStorage.getItem("lesson_three_goal_m46");
      const savedHabit = localStorage.getItem("lesson_three_goal_habit");
      if (savedM1 && savedM23 && savedM46) {
        setGoalMonth1(savedM1);
        setGoalMonth23(savedM23);
        setGoalMonth46(savedM46);
        setIsGoalsSaved(true);
      }
      if (savedHabit) {
        setDailyHabitText(savedHabit);
      }
    } catch {}
  }, []);

  const triggerSuccessAudioSfx = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";
      
      // Triple nice chime pitch
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.08); // E5
      osc.frequency.setValueAtTime(880, ctx.currentTime + 0.16); // A5
      
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.24);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.26);
    } catch {}
  };

  const handleSaveGoals = (e: React.FormEvent) => {
    e.preventDefault();
    if (!goalMonth1.trim() || !goalMonth23.trim() || !goalMonth46.trim() || !dailyHabitText.trim()) {
      alert("Por favor, preencha todos os campos do seu planejador estratégico!");
      return;
    }
    try {
      localStorage.setItem("lesson_three_goal_m1", goalMonth1);
      localStorage.setItem("lesson_three_goal_m23", goalMonth23);
      localStorage.setItem("lesson_three_goal_m46", goalMonth46);
      localStorage.setItem("lesson_three_goal_habit", dailyHabitText);
      setIsGoalsSaved(true);
      triggerSuccessAudioSfx();
    } catch (err) {
      console.error(err);
    }
  };

  const handleResetGoals = () => {
    setIsGoalsSaved(false);
  };

  const handleLikeToggle = () => {
    const nextState = !interactiveLike;
    setInteractiveLike(nextState);
    if (nextState) {
      triggerSuccessAudioSfx();
    }
  };

  // Math calculated score for the mindset test
  const calculateMindsetScorePercent = () => {
    const total = selfScoreConsistency + selfScoreError + selfScorePatience + (6 - selfScoreComparison);
    // Max is 20 (5 * 4), scale to percent
    return Math.round((total / 20) * 100);
  };

  const currentMindsetDetail = MINDSET_POINTS.find(p => p.id === selectedMindset) || MINDSET_POINTS[0];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-7 relative overflow-hidden transition-all duration-300">
      
      {/* 1. COMPONENT HEADER HERO */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-5">
        <div className="space-y-1.5 max-w-xl">
          <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700 animate-pulse">
            <BrainCircuit className="h-3.5 w-3.5" />
            <span>Fator Psicológico de Sucesso</span>
          </div>
          <h2 className="text-base sm:text-lg font-black text-[#1a237e] font-sans tracking-tight leading-snug">
            Lição 3: Mentalidade de Quem Tem Sucesso no Digital
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed font-sans">
            A técnica corresponde a 20% da equação. Os outros 80% residem na expectativa realista, disciplina de hábito diário de 90 dias e blindagem emocional a críticas.
          </p>
        </div>

        {/* Badge of Focus */}
        <div className="flex items-center gap-1.5 bg-slate-50 border p-2.5 rounded-xl text-[10.5px] font-semibold text-slate-600 font-sans shadow-3xs shrink-0">
          <CheckCircle className="h-4 w-4 text-emerald-500" />
          <span>Foco Inteligente de Longo Prazo</span>
        </div>
      </div>

      {/* 2. ENTRADA CHATBUBBLE GREETING */}
      <div className="bg-gradient-to-br from-indigo-50/40 to-amber-50/20 border border-slate-150 p-5 rounded-2xl space-y-3.5">
        <p className="text-xs text-slate-700 leading-relaxed font-sans font-semibold">
          "Fala, pessoal! Bem-vindo à Lição 3 do nosso curso básico essencial."
        </p>

        <p className="text-xs text-slate-600 leading-relaxed font-sans">
          Nas últimas duas lições, você compreendeu o que é faturar online honestamente de forma prática e como se manter livre de armadilhas. Hoje, falaremos de algo que pouquíssimos produtores do mercado debatem — mas que determina com <strong>absoluta precisão se você irá desistir no meio do caminho ou prosperar de verdade: Mentalidade.</strong>
        </p>

        <p className="text-xs text-slate-500 font-sans leading-relaxed italic">
          Pode parecer discurso motivacional raso à primeira vista, mas clame paciência e fique comigo até o fim. O entendimento desse bloco vai restabelecer a forma como você enfrenta obstáculos técnicos e rotinas de publicação. Bora?
        </p>
      </div>

      {/* 3. A ESTATÍSTICA QUE MARCA (STATISTICS ACCENT BOX) */}
      <div className="bg-slate-900 border border-slate-800 text-white rounded-2xl p-5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/[0.03] rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border-b border-white/5 pb-3.5 mb-3.5">
          <div className="space-y-0.5">
            <span className="text-[9px] font-mono text-[#FF6B35] tracking-wider uppercase font-black">MUDANÇA DE COMPORTAMENTO</span>
            <h4 className="text-xs font-black">Por que a maioria desiste do Digital?</h4>
          </div>
          
          <span className="text-[10px] font-mono bg-white/5 px-2.5 py-1 rounded font-bold uppercase text-slate-350">
            Falta de Mentalidade Certa
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
          
          {/* Main big circle visual */}
          <div className="md:col-span-4 flex flex-col items-center justify-center bg-white/5 rounded-xl p-4 text-center border border-white/10">
            <span className="text-2xl font-black text-[#FF6B35]">2 em cada 10</span>
            <p className="text-[10px] text-slate-400 font-sans mt-1">
              Chegam ao 3º mês de prática. As outras 8 desistem muito cedo por frustração.
            </p>
          </div>

          <div className="md:col-span-8 space-y-2">
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              As pessoas não desistem por falta de ferramentas ou inteligência. Desistem porque <strong>geraram uma expectativa de dinheiro fácil automático em 15 dias</strong> e, ao errarem a primeira postagem, frustram-se e comparam sua linha de partida com os anos de estudo e maturação de terceiros.
            </p>
            <div className="text-[11px] text-amber-300 font-sans">
              💡 <strong>Raciocínio lógico:</strong> Ao estruturar uma barreira saudável contra imediatismo hoje, você instantaneamente se posiciona à frente de 80% do público aspirante.
            </div>
          </div>

        </div>
      </div>

      {/* 4. AS 4 MENTALIDADES DE SUCESSO (INTERACTIVE SELECTOR) */}
      <div className="space-y-4">
        <span className="text-[10px] font-mono font-bold text-slate-450 uppercase tracking-widest block">
          💻 ESTUDE AS 4 MENTALIDADES DE QUEM COLHE FRUTOS REAIS:
        </span>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-2.5">
          {MINDSET_POINTS.map((pt) => {
            const isSelected = pt.id === selectedMindset;
            return (
              <button
                key={pt.id}
                onClick={() => {
                  setSelectedMindset(pt.id);
                  triggerSuccessAudioSfx();
                }}
                className={`cursor-pointer p-4 rounded-xl border text-left transition-all ${
                  isSelected 
                    ? "border-[#1a237e] bg-indigo-50/40 shadow-3xs" 
                    : "border-slate-150 hover:bg-slate-50/60"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-xl bg-white w-7.5 h-7.5 rounded-lg border flex items-center justify-center shrink-0 shadow-3xs">{pt.icon}</span>
                  <span className="text-[8px] font-mono font-bold uppercase text-slate-450 bg-slate-50 border p-0.5 rounded">Foco</span>
                </div>
                <strong className="text-xs text-slate-800 block font-sans font-black tracking-tight mt-3.5 leading-tight">{pt.title}</strong>
              </button>
            );
          })}
        </div>

        {/* Selected mindset display */}
        <div className={`border p-5 rounded-2xl space-y-3.5 transition-all duration-300 ${currentMindsetDetail.bgClass}`}>
          <div className="flex items-center gap-2">
            <span className="text-xl">{currentMindsetDetail.icon}</span>
            <div>
              <h4 className="text-xs font-black text-slate-800 font-sans">{currentMindsetDetail.title}</h4>
              <span className={`text-[10px] font-bold font-mono uppercase tracking-wider ${currentMindsetDetail.txtClass}`}>
                CONCEITO CRÍTICO: {currentMindsetDetail.concept}
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-650 font-sans leading-relaxed">
            {currentMindsetDetail.desc}
          </p>
        </div>
      </div>

      {/* 5. METRIC CHECKER / INTERACTIVE ASSESSMENT */}
      <div className="p-5.5 bg-slate-50 border border-slate-200.5 rounded-2xl space-y-4">
        <div>
          <strong className="text-xs text-slate-850 font-black font-sans block">📊 Teste de Alinhamento de Mindset Pessoal</strong>
          <p className="text-[11px] text-slate-500 font-sans leading-snug">
            Selecione de 1 a 5 o quanto cada afirmação reflete sua realidade. Nosso medidor calculará seu índice estimado de consistência:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
          
          <div className="bg-white border rounded-lg p-3.5 space-y-2">
            <div className="flex justify-between items-center text-slate-700">
              <span>🎯 1. Tenho foco para replicar tarefas diárias mesmo sem motivação:</span>
              <span className="font-mono font-bold text-indigo-700 bg-indigo-50 px-1.5 rounded">{selfScoreConsistency}/5</span>
            </div>
            <input 
              type="range" min="1" max="5" 
              value={selfScoreConsistency} 
              onChange={(e) => {
                setSelfScoreConsistency(Number(e.target.value));
                triggerSuccessAudioSfx();
              }}
              className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-700" 
            />
          </div>

          <div className="bg-white border rounded-lg p-3.5 space-y-2">
            <div className="flex justify-between items-center text-slate-700">
              <span>🛡️ 2. Aceito erros, recusas de propostas ou postagens zeradas como parte:</span>
              <span className="font-mono font-bold text-indigo-700 bg-indigo-50 px-1.5 rounded">{selfScoreError}/5</span>
            </div>
            <input 
              type="range" min="1" max="5" 
              value={selfScoreError} 
              onChange={(e) => {
                setSelfScoreError(Number(e.target.value));
                triggerSuccessAudioSfx();
              }}
              className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-700" 
            />
          </div>

          <div className="bg-white border rounded-lg p-3.5 space-y-2">
            <div className="flex justify-between items-center text-slate-700">
              <span>🌱 3. Entendo que o dinheiro requer raízes de aprendizado de 30 a 60 dias:</span>
              <span className="font-mono font-bold text-indigo-700 bg-indigo-50 px-1.5 rounded">{selfScorePatience}/5</span>
            </div>
            <input 
              type="range" min="1" max="5" 
              value={selfScorePatience} 
              onChange={(e) => {
                setSelfScorePatience(Number(e.target.value));
                triggerSuccessAudioSfx();
              }}
              className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-700" 
            />
          </div>

          <div className="bg-white border rounded-lg p-3.5 space-y-2">
            <div className="flex justify-between items-center text-slate-700 text-[11.5px]">
              <span>🚫 4. Sinto frustração extrema ao ver o print de resultado ostentoso de terceiros:</span>
              <span className="font-mono font-bold text-[#FF6B35] bg-orange-50 px-1.5 rounded">{selfScoreComparison}/5</span>
            </div>
            <input 
              type="range" min="1" max="5" 
              value={selfScoreComparison} 
              onChange={(e) => {
                setSelfScoreComparison(Number(e.target.value));
                triggerSuccessAudioSfx();
              }}
              className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B35]" 
            />
          </div>

        </div>

        {/* Dynamic Result Gauge indicator */}
        <div className="bg-white border border-slate-200 rounded-xl p-3.5 flex flex-col sm:flex-row justify-between items-center gap-3 font-sans">
          <div className="space-y-0.5">
            <span className="text-[8.5px] font-mono text-slate-400 uppercase tracking-widest block font-bold">Diagnóstico Estimado do Teste</span>
            <strong className="text-xs text-slate-800 font-sans block">
              Seu Índice de Blindagem Emocional Real: 
              <span className="text-[#FF6B35] font-black ml-1.5">{calculateMindsetScorePercent()}%</span>
            </strong>
          </div>

          <div className="text-[11.5px] text-slate-600 leading-normal text-right max-w-sm">
            {calculateMindsetScorePercent() >= 75 ? (
              <span className="text-emerald-600">🟢 <strong>EXCELENTE CONFORTO:</strong> Você compreende perfeitamente o tempo das sementes de tráfego e serviços e possui baixa dependência psicológica de pressa. Siga firme!</span>
            ) : calculateMindsetScorePercent() >= 50 ? (
              <span className="text-[#FF6B35]">🟡 <strong>ATENÇÃO INTERMEDIÁRIA:</strong> Você ainda se desestabiliza um pouco ao ver o sucesso rápido de terceiros ou errar postagens. Use as analogias da aula para se blindar.</span>
            ) : (
              <span className="text-rose-600">🔴 <strong>RISCO DE DESISTÊNCIA IMEDIATA:</strong> Cuidado extremo. Seu foco está muito atrelado ao imediatismo financeiro. Force-se a enxergar as metas cronológicas reais ao planejar.</span>
            )}
          </div>
        </div>
      </div>

      {/* 6. BLOCO 3 PLANNER - INTERACTIVE TOOL FOR DEFINING 90-DAY GOALS */}
      <div className="bg-[#1a237e]/5 border border-indigo-950/15 p-5.5 rounded-3xl space-y-4">
        <div className="pb-3 border-b border-[#1a237e]/15">
          <span className="text-[9.5px] text-[#1a237e] font-mono font-bold block uppercase tracking-wider">MÁQUINA DE DIRETRIZES REAIS</span>
          <h4 className="text-xs font-black text-slate-800 font-sans">Montador de Metas Decrescentes dos Próximos 90 Dias</h4>
        </div>

        {!isGoalsSaved ? (
          <form onSubmit={handleSaveGoals} className="space-y-4 font-sans">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="space-y-1.5 p-3.5 bg-white border rounded-xl">
                <span className="text-[9px] font-mono text-[#FF6B35] uppercase font-black tracking-wider block">MÊS 1: Meta de Aprendizado</span>
                <textarea
                  value={goalMonth1}
                  onChange={(e) => setGoalMonth1(e.target.value)}
                  rows={2}
                  className="w-full text-xs font-sans text-slate-700 border-none resize-none focus:ring-0 outline-hidden focus:outline-hidden"
                  placeholder="Defina o aprendizado de canais ou configurações..."
                />
              </div>

              <div className="space-y-1.5 p-3.5 bg-white border rounded-xl">
                <span className="text-[9px] font-mono text-[#FF6B35] uppercase font-black tracking-wider block">MESES 2 & 3: Meta de R$ 300 - R$ 500</span>
                <textarea
                  value={goalMonth23}
                  onChange={(e) => setGoalMonth23(e.target.value)}
                  rows={2}
                  className="w-full text-xs font-sans text-slate-700 border-none resize-none focus:ring-0 outline-hidden focus:outline-hidden"
                  placeholder="Como irá gerar a primeira receita de baixa escala..."
                />
              </div>

              <div className="space-y-1.5 p-3.5 bg-white border rounded-xl">
                <span className="text-[9px] font-mono text-[#FF6B35] uppercase font-black tracking-wider block">MESES 4 A 6: Meta de R$ 1000 - R$ 2000</span>
                <textarea
                  value={goalMonth46}
                  onChange={(e) => setGoalMonth46(e.target.value)}
                  rows={2}
                  className="w-full text-xs font-sans text-slate-700 border-none resize-none focus:ring-0 outline-hidden focus:outline-hidden"
                  placeholder="Sua meta de consistência operacional..."
                />
              </div>

            </div>

            {/* Daily habit input */}
            <div className="space-y-2 p-3.5 bg-white border rounded-xl">
              <span className="text-[9px] font-mono text-indigo-700 font-bold block uppercase tracking-wider">
                O HÁBITO DIÁRIO ATIVO QUE SEPARA O SUCESSO COLETIVO:
              </span>
              <input
                type="text"
                value={dailyHabitText}
                onChange={(e) => setDailyHabitText(e.target.value)}
                className="w-full text-xs font-sans text-slate-800 font-medium focus:ring-1 focus:ring-indigo-500 rounded p-2 border"
                placeholder="Exemplo: Mandar propostas no Workana de segunda a sexta, por 40 minutos diários..."
              />
              <span className="text-[10px] text-slate-450 font-sans block italic">
                💡 <strong>Regra de consistência:</strong> Uma micro-ação real por dia, 7 dias na semana, por 90 dias ininterruptos resulta em reconfiguração da vida financeira.
              </span>
            </div>

            <button
              type="submit"
              className="cursor-pointer w-full bg-[#1a237e] hover:bg-indigo-900 text-white font-sans text-xs font-black py-3 rounded-xl shadow-xs transition-all flex items-center justify-center gap-1 border border-slate-800"
            >
              <span>Salvar Diretrizes e Marcar como Concluído 🚀</span>
            </button>
          </form>
        ) : (
          <div className="bg-emerald-550/[0.03] border border-emerald-500/20 rounded-2xl p-4.5 space-y-4.5 font-sans">
            
            <div className="flex justify-between items-center flex-wrap gap-2">
              <strong className="text-xs text-slate-800 font-sans flex items-center gap-1.5 font-black">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>Minhas Metas de 90 Dias Registradas! Colado no Quarto Virtual:</span>
              </strong>
              <button 
                onClick={handleResetGoals}
                className="cursor-pointer text-[9.5px] font-black text-[#1a237e] hover:text-indigo-900 border bg-white px-2.5 py-1 rounded-lg"
              >
                Editar Metas
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              
              <div className="bg-white border rounded-xl p-3.5 space-y-1 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 bg-amber-500 h-full" />
                <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest block font-bold">Etapa 1: Aprendizado / Mês 1</span>
                <p className="text-[11.5px] text-slate-700 italic">"{goalMonth1}"</p>
              </div>

              <div className="bg-white border rounded-xl p-3.5 space-y-1 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 bg-blue-500 h-full" />
                <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest block font-bold">Etapa 2: Consolidação / Meses 2-3</span>
                <p className="text-[11.5px] text-slate-700 italic">"{goalMonth23}"</p>
              </div>

              <div className="bg-white border rounded-xl p-3.5 space-y-1 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 bg-emerald-500 h-full" />
                <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest block font-bold">Etapa 3: Tração / Meses 4-6</span>
                <p className="text-[11.5px] text-slate-700 italic">"{goalMonth46}"</p>
              </div>

            </div>

            <div className="bg-[#1a237e]/5 border border-indigo-200 rounded-xl p-3.5">
              <span className="text-[8px] font-mono text-[#1a237e] block uppercase tracking-wider font-bold">MEU PACTO DE HÁBITO INABALÁVEL DE 90 DIAS:</span>
              <p className="text-xs font-black text-slate-800 mt-1 italic">"{dailyHabitText}"</p>
            </div>

          </div>
        )}
      </div>

      {/* 7. LIKE COMPONENTE EXTRA STRENGTH FOR CONCLUDING */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-slate-100 bg-white">
        <p className="text-[10.5px] text-slate-500 font-sans leading-relaxed text-center sm:text-left">
          Na próxima aula a gente vai colocar a **mão na massa** — conhecendo as ferramentas gratuitas indispensáveis como e-mail, whats e canais de tráfego.
        </p>

        <div className="flex items-center gap-2">
          <button
            onClick={handleLikeToggle}
            className={`cursor-pointer px-3.5 py-2 rounded-xl text-xs font-bold font-sans transition-all flex items-center gap-1.5 border ${
              interactiveLike
                ? "bg-rose-50 border-rose-250 text-rose-600 animate-pulse"
                : "border-slate-205 text-slate-505 hover:text-slate-850"
            }`}
          >
            <Heart className={`h-4 w-4 ${interactiveLike ? "fill-rose-500 text-rose-505" : ""}`} />
            <span>{interactiveLike ? "Deixou Like!" : "Dar Like na Lição 3"}</span>
          </button>
        </div>
      </div>

    </div>
  );
}
