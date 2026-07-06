import React, { useState, useEffect } from "react";
import { 
  Calendar, 
  Check, 
  BookOpen, 
  Clock, 
  Award, 
  Smartphone, 
  Coffee, 
  Target, 
  ChevronRight, 
  CheckSquare, 
  AlertCircle, 
  ListTodo, 
  Flame, 
  Info,
  Sparkles,
  Trophy,
  RefreshCw,
  Award as IconAward,
  Layers,
  ChevronDown,
  ExternalLink,
  BookMarked
} from "lucide-react";

interface Day {
  day: string;
  study: string;
  task: string;
}

interface Week {
  month: number;
  week: number;
  theme: string;
  color: string;
  days: Day[];
}

const WEEKS_DATA: Week[] = [
  {
    month: 1,
    week: 1,
    theme: "Fundamentos + Configuração",
    color: "#FF6B35",
    days: [
      { day: "Segunda", study: "O que é Marketing Digital — visão geral", task: "Criar conta no Google, Canva e LinkedIn" },
      { day: "Terça", study: "Como funcionam as redes sociais", task: "Criar perfil profissional no Instagram" },
      { day: "Quarta", study: "O que é funil de vendas", task: "Desenhar no papel um funil simples" },
      { day: "Quinta", study: "Jornada do cliente", task: "Escolher um nicho de interesse" },
      { day: "Sexta", study: "Como grandes marcas fazem marketing", task: "Analisar 3 perfis grandes do seu nicho" },
      { day: "Sábado", study: "Revisão da semana", task: "Criar seu primeiro post no Instagram" },
    ],
  },
  {
    month: 1,
    week: 2,
    theme: "Redes Sociais na Prática",
    color: "#E91E8C",
    days: [
      { day: "Segunda", study: "Algoritmo do Instagram", task: "Postar 1 Reels e analisar o alcance" },
      { day: "Terça", study: "Como criar conteúdo que engaja", task: "Criar 5 posts no Canva" },
      { day: "Quarta", study: "TikTok — como funciona", task: "Criar conta e postar 1 vídeo curto" },
      { day: "Quinta", study: "Calendário editorial", task: "Montar calendário de 30 dias de posts" },
      { day: "Sexta", study: "Stories e engajamento", task: "Criar 3 Stories com enquete e caixinha" },
      { day: "Sábado", study: "Métricas de redes sociais", task: "Analisar o desempenho dos seus posts" },
    ],
  },
  {
    month: 1,
    week: 3,
    theme: "SEO e Blog",
    color: "#00C896",
    days: [
      { day: "Segunda", study: "O que é SEO e como o Google funciona", task: "Criar blog no WordPress.com" },
      { day: "Terça", study: "Pesquisa de palavras-chave", task: "Usar Ubersuggest para encontrar 10 palavras" },
      { day: "Quarta", study: "Como escrever artigo otimizado", task: "Escrever o primeiro artigo do blog" },
      { day: "Quinta", study: "SEO On-page na prática", task: "Otimizar título, meta descrição e subtítulos" },
      { day: "Sexta", study: "Google Search Console", task: "Conectar o blog e verificar indexação" },
      { day: "Sábado", study: "Revisão de SEO", task: "Publicar o segundo artigo otimizado" },
    ],
  },
  {
    month: 1,
    week: 4,
    theme: "E-mail Marketing",
    color: "#7C4DFF",
    days: [
      { day: "Segunda", study: "O que é e-mail marketing e por que usar", task: "Criar conta no Mailchimp" },
      { day: "Terça", study: "Como construir uma lista do zero", task: "Criar formulário de captura no blog" },
      { day: "Quarta", study: "Como escrever um e-mail que converte", task: "Escrever seu primeiro e-mail" },
      { day: "Quinta", study: "Sequência de boas-vindas", task: "Criar automação de 3 e-mails" },
      { day: "Sexta", study: "Métricas de e-mail (abertura, cliques)", task: "Enviar e-mail para seus primeiros contatos" },
      { day: "Sábado", study: "Revisão do mês 1", task: "Documentar tudo que aprendeu" },
    ],
  },
  {
    month: 2,
    week: 5,
    theme: "Google Ads",
    color: "#FF9800",
    days: [
      { day: "Segunda", study: "Como funciona o Google Ads", task: "Criar conta no Google Ads" },
      { day: "Terça", study: "Tipos de campanha (pesquisa, display, YouTube)", task: "Acessar o Google Skillshop" },
      { day: "Quarta", study: "Palavras-chave pagas e correspondências", task: "Criar lista de palavras para uma campanha" },
      { day: "Quinta", study: "Como criar um anúncio de texto", task: "Criar primeira campanha (sem ativar ainda)" },
      { day: "Sexta", study: "Métricas: CPC, CTR, Quality Score", task: "Fazer simulação no planejador do Google" },
      { day: "Sábado", study: "Certificação Google Ads", task: "Iniciar prova no Google Skillshop" },
    ],
  },
  {
    month: 2,
    week: 6,
    theme: "Meta Ads (Facebook e Instagram)",
    color: "#1877F2",
    days: [
      { day: "Segunda", study: "Como funciona o Meta Business Suite", task: "Criar conta no Meta Business" },
      { day: "Terça", study: "Tipos de campanha no Meta Ads", task: "Configurar Pixel do Meta no blog" },
      { day: "Quarta", study: "Segmentação de públicos", task: "Criar público personalizado" },
      { day: "Quinta", study: "Como criar criativo de anúncio", task: "Criar 3 artes para anúncio no Canva" },
      { day: "Sexta", study: "Remarketing e públicos semelhantes", task: "Criar campanha de teste com R$5" },
      { day: "Sábado", study: "Analisar resultados da campanha", task: "Ajustar campanha com base nos dados" },
    ],
  },
  {
    month: 2,
    week: 7,
    theme: "Afiliados",
    color: "#00BCD4",
    days: [
      { day: "Segunda", study: "Como funciona o mercado de afiliados", task: "Criar conta na Hotmart" },
      { day: "Terça", study: "Como escolher um bom produto", task: "Pesquisar produtos com boa comissão" },
      { day: "Quarta", study: "Estratégias de divulgação", task: "Escolher 1 produto para promover" },
      { day: "Quinta", study: "Como criar página de captura", task: "Criar página simples de divulgação" },
      { day: "Sexta", study: "Tráfego orgânico para afiliados", task: "Criar conteúdo sobre o produto escolhido" },
      { day: "Sábado", study: "Tráfego pago para afiliados", task: "Criar campanha simples de R$10" },
    ],
  },
  {
    month: 2,
    week: 8,
    theme: "Analytics e Dados",
    color: "#4CAF50",
    days: [
      { day: "Segunda", study: "O que é Google Analytics 4", task: "Instalar GA4 no blog" },
      { day: "Terça", study: "Métricas principais: sessões, bounce rate", task: "Analisar relatório do seu blog" },
      { day: "Quarta", study: "Como rastrear conversões", task: "Configurar meta de conversão no GA4" },
      { day: "Quinta", study: "Relatórios de aquisição de tráfego", task: "Identificar de onde vêm suas visitas" },
      { day: "Sexta", study: "Certificação Google Analytics", task: "Estudar para a prova no Skillshop" },
      { day: "Sábado", study: "Revisão do mês 2", task: "Criar relatório dos seus resultados" },
    ],
  },
  {
    month: 3,
    week: 9,
    theme: "Inbound Marketing",
    color: "#F44336",
    days: [
      { day: "Segunda", study: "Funil de Inbound completo", task: "Mapear funil do seu projeto" },
      { day: "Terça", study: "Como criar isca digital (e-book, checklist)", task: "Criar um e-book simples no Canva" },
      { day: "Quarta", study: "Landing pages que convertem", task: "Criar landing page para o e-book" },
      { day: "Quinta", study: "Nutrição de leads por e-mail", task: "Criar sequência de 5 e-mails" },
      { day: "Sexta", study: "Lead scoring e qualificação", task: "Configurar tags no Mailchimp" },
      { day: "Sábado", study: "Integrar tráfego pago com funil", task: "Criar anúncio para a landing page" },
    ],
  },
  {
    month: 3,
    week: 10,
    theme: "Portfólio + Monetização",
    color: "#9C27B0",
    days: [
      { day: "Segunda", study: "Revisar todas as áreas estudadas", task: "Listar seus melhores resultados" },
      { day: "Terça", study: "Como montar um portfólio profissional", task: "Documentar resultados de cada projeto" },
      { day: "Quarta", study: "Como precificar seus serviços", task: "Criar perfil no Workana e 99Freelas" },
      { day: "Quinta", study: "Como conseguir os primeiros clientes", task: "Montar apresentação do portfólio" },
      { day: "Sexta", study: "LinkedIn para profissionais de marketing", task: "Atualizar LinkedIn com certificações" },
      { day: "Sábado", study: "Estratégia de crescimento contínuo", task: "Candidatar para primeiras vagas ou clientes" },
    ],
  },
];

const RECOMMENDED_APPS = [
  { name: "Canva", p: "Criar posts e materiais profissionais", emoji: "🎨", badge: "Design Visual" },
  { name: "CapCut", p: "Editar vídeos para Reels, TikTok e ADS", emoji: "🎬", badge: "Edição de Vídeo" },
  { name: "Google Analytics", p: "Monitorar blog e conversões em tempo real", emoji: "💻", badge: "Dados & Metas" },
  { name: "Meta Business Suite", p: "Gerenciar páginas e anúncios pagos", emoji: "📢", badge: "Tráfego Pago" },
  { name: "Notion ou Google Keep", p: "Anotar insights, ideias e aprendizados", emoji: "📝", badge: "Organização" },
];

const MONTHLY_TARGETS = [
  { m: "Mês 1", target: "Ter blog ativo + perfil nas redes sociais + primeira lista de e-mails iniciada com capturas", color: "border-[#FF6B35]/20 bg-[#FF6B35]/5 text-[#FF6B35]" },
  { m: "Mês 2", target: "Primeira campanha de anúncios real rodando + cadastro estruturado de Afiliado na Hotmart", color: "border-[#1877F2]/20 bg-[#1877F2]/5 text-[#1877F2]" },
  { m: "Mês 3", target: "Portfólio montado com cases práticos + primeiras certificações de Google registradas buscando renda", color: "border-[#9C27B0]/20 bg-[#9C27B0]/5 text-[#9C27B0]" },
];

const MONTH_NAMES = { 1: "Mês 1", 2: "Mês 2", 3: "Mês 3" };
const MONTH_COLORS = { 1: "#FF6B35", 2: "#1877F2", 3: "#9C27B0" };

export default function StudyRoutine() {
  const [checked, setChecked] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem("mkt_checklist");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  
  const [activeWeek, setActiveWeek] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<"checklist" | "progress">("checklist");
  const [streakCount, setStreakCount] = useState<number>(0);

  useEffect(() => {
    try {
      localStorage.setItem("mkt_checklist", JSON.stringify(checked));
    } catch (e) {
      console.error(e);
    }
    calculateStreak();
  }, [checked]);

  // Fun sound synthesizer effect when completing studies or tasks
  const playSfx = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.12); // G5
      
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.16);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.18);
    } catch {
      // Ignored if browser bans autoplay/interaction
    }
  };

  const calculateStreak = () => {
    // Basic streak calculator: count how many consecutive days in the active week are fully finished
    const currentWeekData = WEEKS_DATA.find(w => w.week === activeWeek);
    if (!currentWeekData) return;
    
    let currentStreak = 0;
    for (let i = 0; i < currentWeekData.days.length; i++) {
      const studyKey = `${activeWeek}-${i}-study`;
      const taskKey = `${activeWeek}-${i}-task`;
      if (checked[studyKey] && checked[taskKey]) {
        currentStreak++;
      } else {
        break;
      }
    }
    setStreakCount(currentStreak);
  };

  const handleToggle = (key: string) => {
    const nextVal = !checked[key];
    setChecked(prev => ({ ...prev, [key]: nextVal }));
    if (nextVal) {
      playSfx();
    }
  };

  // Metrics calculators
  const totalTasks = WEEKS_DATA.reduce((acc, w) => acc + w.days.length * 2, 0);
  const doneTasks = Object.keys(checked).filter(key => checked[key] === true).length;
  const globalPercent = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;

  const currentWeekData = WEEKS_DATA.find(w => w.week === activeWeek) || WEEKS_DATA[0];

  const getWeekProgress = (w: Week) => {
    const total = w.days.length * 2;
    const done = w.days.reduce((acc, d, di) => {
      const s = checked[`${w.week}-${di}-study`] ? 1 : 0;
      const t = checked[`${w.week}-${di}-task`] ? 1 : 0;
      return acc + s + t;
    }, 0);
    return total > 0 ? Math.round((done / total) * 100) : 0;
  };

  const getCompletedDaysCount = (w: Week) => {
    return w.days.filter((d, di) => {
      return checked[`${w.week}-${di}-study`] && checked[`${w.week}-${di}-task`];
    }).length;
  };

  const handleResetAll = () => {
    if (window.confirm("Deseja realmente reiniciar todo o progresso do seu plano de marketing digital?")) {
      setChecked({});
    }
  };

  // Badges related to global student progress percentage
  const getRankName = (p: number) => {
    if (p === 0) return "Iniciante Curioso";
    if (p < 15) return "Primeiros Passos";
    if (p < 35) return "Produtor de Conteúdo";
    if (p < 60) return "Trafeguista Júnior";
    if (p < 85) return "Conversor Estratégico";
    if (p < 100) return "Profissional Multimídia";
    return "Lenda do Marketing Digital";
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-7 shadow-2xl relative overflow-hidden transition-all duration-300">
      
      {/* Visual background lights for elite modern SaaS look */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-indigo-505/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* 1. COMPONENT TITLE BANNER */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-slate-800">
        <div className="space-y-1.5 max-w-xl">
          <div className="inline-flex items-center gap-1.5 bg-[#FF6B35]/10 border border-[#FF6B35]/25 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-[#FF6B35]">
            <Flame className="h-3.5 w-3.5 animate-pulse" />
            <span>Rotina Semanal — Exclusiva Aluno Premium</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white font-sans tracking-tight leading-snug">
            Plano de Estudos Cronometrado — <span className="text-[#FF6B35]">Marketing Digital do Zero</span>
          </h2>
          <p className="text-slate-400 text-xs leading-relaxed font-sans">
            Construa autoridade, domine tráfego pago, funis e conquiste liberdade. Estude <strong>2 horas por dia</strong>, <strong>6 dias por semana</strong> (domingos de descanso absoluto).
          </p>
        </div>

        {/* Dynamic global tracker badge */}
        <div className="bg-slate-950/70 border border-slate-800 p-3.5 rounded-2xl flex items-center gap-3.5 min-w-[170px] shrink-0 shadow-inner">
          <div className="p-2.5 bg-gradient-to-br from-[#FF6B35]/20 to-[#E91E8C]/20 rounded-xl border border-orange-500/20 text-orange-400">
            <Trophy className="h-5 w-5" />
          </div>
          <div className="space-y-0.5 min-w-0">
            <span className="text-xs text-slate-400 font-sans block truncate" title={getRankName(globalPercent)}>
              Rank: <strong>{getRankName(globalPercent)}</strong>
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-black text-white font-sans tracking-tight">{globalPercent}%</span>
              <span className="text-[10px] text-slate-500 font-mono">Concluído</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. DYNAMIC PROGRESS COLUMN GRID AND STRIP */}
      <div className="relative z-10">
        <div className="w-full bg-slate-950 border border-slate-850 h-3 rounded-full overflow-hidden p-0.5">
          <div 
            className="h-full rounded-full bg-gradient-to-r from-[#FF6B35] via-[#E91E8C] to-[#00C896] transition-all duration-500 shadow-md"
            style={{ width: `${globalPercent}%` }}
          />
        </div>
        <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 mt-2 px-1">
          <span>Ignorar Procrastinação</span>
          <span>{doneTasks} de {totalTasks} Passos Teorias + Práticas Concluídos</span>
          <span>Escritório em Breve</span>
        </div>
      </div>

      {/* 3. SWITCH TAB DIRECTORIES */}
      <div className="relative z-10 flex gap-1 bg-slate-950 p-1 border border-slate-800 rounded-2xl max-w-sm">
        <button
          onClick={() => setActiveTab("checklist")}
          className={`cursor-pointer flex-1 py-2 rounded-xl text-xs font-bold font-sans transition-all flex items-center justify-center gap-1.5 ${
            activeTab === "checklist"
              ? "bg-[#FF6B35]/15 border border-[#FF6B35]/30 text-[#FF6B35]"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <CheckSquare className="h-3.5 w-3.5" />
          <span>📋 Checklist Diário</span>
        </button>
        <button
          onClick={() => setActiveTab("progress")}
          className={`cursor-pointer flex-1 py-2 rounded-xl text-xs font-bold font-sans transition-all flex items-center justify-center gap-1.5 ${
            activeTab === "progress"
              ? "bg-[#1877F2]/15 border border-[#1877F2]/30 text-[#1877F2]"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <Layers className="h-3.5 w-3.5" />
          <span>📊 Visão Geral & Progresso</span>
        </button>
      </div>

      {/* 4. ACTUAL INTERACTION SCREENS */}
      <div className="relative z-10">
        
        {activeTab === "checklist" && (
          <div className="space-y-6">
            
            {/* Week navigation bubble strip */}
            <div className="space-y-2.5">
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">
                SELECIONE A SEMANA DO CRONOGRAMA:
              </span>
              <div className="flex flex-wrap gap-1.5 p-2 bg-slate-950/60 border border-slate-850 rounded-2xl">
                {WEEKS_DATA.map((w) => {
                  const isActive = activeWeek === w.week;
                  const percent = getWeekProgress(w);
                  const isFinished = percent === 100;
                  return (
                    <button
                      key={w.week}
                      onClick={() => setActiveWeek(w.week)}
                      className={`cursor-pointer relative px-3 py-2 rounded-xl border flex items-center gap-2 transition-all font-sans text-xs font-bold ${
                        isActive
                          ? "bg-slate-900 text-white border-slate-700 shadow-md ring-1 ring-white/10"
                          : "bg-transparent border-transparent text-slate-500 hover:text-slate-350 hover:bg-slate-900/40"
                      }`}
                    >
                      <span 
                        className="w-2.5 h-2.5 rounded-full shrink-0" 
                        style={{ backgroundColor: w.color }}
                      />
                      <span>S{w.week}</span>
                      {isFinished ? (
                        <Check className="h-3 w-3 stroke-[3] text-[#00C896]" />
                      ) : (
                        percent > 0 && <span className="text-[9px] font-normal opacity-70">{percent}%</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Current week banner view */}
            <div 
              style={{
                background: `linear-gradient(135deg, ${currentWeekData.color}18, ${currentWeekData.color}05)`,
                borderColor: `${currentWeekData.color}33`,
              }}
              className="border rounded-2xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm"
            >
              <div className="space-y-1">
                <span className="text-[9.5px] font-mono font-bold uppercase tracking-widest text-[#FF6B35]" style={{ color: currentWeekData.color }}>
                  {MONTH_NAMES[currentWeekData.month as 1 | 2 | 3]} · SEMANA {currentWeekData.week} de 10
                </span>
                <h3 className="text-lg font-black text-white font-sans leading-tight">
                  {currentWeekData.theme}
                </h3>
                <div className="flex items-center gap-3 text-xs text-slate-400 font-sans pt-1">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 opacity-70" /> 
                    <span>2h por dia</span>
                  </span>
                  <span>•</span>
                  <span>{getCompletedDaysCount(currentWeekData)} de 6 dias concluídos</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="text-right">
                  <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase">Progresso Semanal</span>
                  <span className="text-xl font-bold text-white font-sans">{getWeekProgress(currentWeekData)}%</span>
                </div>
              </div>
            </div>

            {/* DUAL CHECKLIST ITEMS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5">
              {currentWeekData.days.map((item, index) => {
                const sKey = `${currentWeekData.week}-${index}-study`;
                const tKey = `${currentWeekData.week}-${index}-task`;
                const isStudyDone = !!checked[sKey];
                const isTaskDone = !!checked[tKey];
                const isDayFinished = isStudyDone && isTaskDone;

                return (
                  <div 
                    key={index}
                    className={`border rounded-2xl p-4.5 space-y-4 transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                      isDayFinished
                        ? "bg-[#00C896]/5 border-[#00C896]/20 shadow-inner"
                        : "bg-slate-950/40 border-slate-850 hover:border-slate-800 hover:bg-slate-950/80"
                    }`}
                  >
                    {/* Visual Day Header */}
                    <div className="flex justify-between items-center pb-2.5 border-b border-slate-900">
                      <span className="text-xs font-black font-sans uppercase tracking-wider text-slate-100">
                        {item.day}-feira
                      </span>
                      {isDayFinished ? (
                        <span className="text-xs bg-[#00C896]/20 border border-[#00C896]/30 text-[#00C896] font-mono px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                          Sucesso
                        </span>
                      ) : (
                        <span 
                          className="w-1.5 h-1.5 rounded-full animate-ping"
                          style={{ backgroundColor: currentWeekData.color }}
                        />
                      )}
                    </div>

                    {/* Dual interactive actions box */}
                    <div className="space-y-4">
                      
                      {/* Sub-item: Theory study */}
                      <div 
                        onClick={() => handleToggle(sKey)}
                        className="flex gap-3 items-start cursor-pointer select-none group"
                      >
                        <div className={`mt-0.5 w-5 h-5 rounded-lg border-2 flex items-center justify-center shrink-0 transition-all ${
                          isStudyDone
                            ? "bg-indigo-650 border-indigo-650 text-white"
                            : "border-slate-800 bg-slate-900 group-hover:border-slate-650 text-transparent"
                        }`}>
                          <Check className="h-3 w-3 stroke-[3]" />
                        </div>
                        <div className="space-y-0.5 min-w-0">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400 block">📚 ESTUDAR TEORIA:</span>
                          <p className={`text-xs font-medium font-sans leading-snug ${
                            isStudyDone ? "text-slate-500 line-through font-normal" : "text-slate-350"
                          }`}>
                            {item.study}
                          </p>
                        </div>
                      </div>

                      {/* Sub-item: Practical task */}
                      <div 
                        onClick={() => handleToggle(tKey)}
                        className="flex gap-3 items-start cursor-pointer select-none group"
                      >
                        <div className={`mt-0.5 w-5 h-5 rounded-lg border-2 flex items-center justify-center shrink-0 transition-all ${
                          isTaskDone
                            ? "bg-[#00C896] border-[#00C896] text-slate-950"
                            : "border-slate-800 bg-slate-900 group-hover:border-[#00C896]/50 text-transparent"
                        }`}>
                          <Check className="h-3 w-3 stroke-[3]" />
                        </div>
                        <div className="space-y-0.5 min-w-0">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00C896] block">⚡ PRÁTICA ATIVA:</span>
                          <p className={`text-xs font-semibold font-sans leading-snug ${
                            isTaskDone ? "text-slate-500 line-through font-normal" : "text-white"
                          }`}>
                            {item.task}
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}

              {/* Sunday Block Card (Rest & Consolidate) */}
              <div className="border border-amber-500/15 bg-amber-500/[0.02] rounded-2xl p-4.5 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex justify-between items-center pb-2 border-b border-amber-500/10">
                    <span className="text-xs font-black text-amber-500/80 font-sans uppercase">DOMINGO</span>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider border border-amber-400/20 text-amber-500 bg-amber-500/5 px-2 py-0.5 rounded">
                      DESCANSO
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                    <strong>Descanse o cérebro hoje.</strong> Deixe a musculatura mental relaxar para reter e processar toda a informação executada durante a semana. Domingo é zero trabalho.
                  </p>
                </div>
                <div className="text-[10px] text-amber-500/60 font-medium font-sans italic pt-4">
                  ☕ Sabote a ansiedade e recarregue.
                </div>
              </div>

            </div>

          </div>
        )}

        {/* 5. VISÃO GERAL & PROGRESSO SCREEN */}
        {activeTab === "progress" && (
          <div className="space-y-6">
            
            {/* Main grid statistics cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-950/85 border border-slate-850 p-4 rounded-2xl space-y-1">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block">CONCLUÍDO</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black text-[#00C896] font-sans">{doneTasks}</span>
                  <span className="text-xs text-slate-500 font-sans">/ {totalTasks} passos</span>
                </div>
                <p className="text-[10.5px] text-slate-400 font-sans">Sua bagagem consolidada cumulativa.</p>
              </div>

              <div className="bg-slate-950/85 border border-slate-850 p-4 rounded-2xl space-y-1">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block">MÓDULOS ACTIVOS</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black text-white font-sans">3</span>
                  <span className="text-xs text-slate-500 font-sans">Meses</span>
                </div>
                <p className="text-[10.5px] text-slate-400 font-sans">De fundimentos até freelas e clientes.</p>
              </div>

              <div className="bg-slate-950/85 border border-slate-850 p-4 rounded-2xl space-y-1">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block">COMENTÁRIO</span>
                <div className="text-white font-black text-xs font-sans block truncate pt-1">
                  {globalPercent >= 100 
                    ? "🚀 Pronto para o Mercado!" 
                    : globalPercent > 50 
                      ? "📈 Ritmo Avançado Maravilhoso!" 
                      : "🔥 Consistência de Aço"}
                </div>
                <p className="text-[10.5px] text-slate-400 font-sans">Análise automatizada de desempenho.</p>
              </div>
            </div>

            {/* Per-month progress breakdown list */}
            <div className="space-y-4">
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">
                RELATÓRIO DE PROGRESSO POR MÊS:
              </span>
              
              <div className="divide-y divide-slate-850 bg-slate-950/60 border border-slate-850 rounded-2xl p-4 space-y-4.5">
                {[1, 2, 3].map((monthNum) => {
                  const mWeeks = WEEKS_DATA.filter(w => w.month === monthNum);
                  const mTotal = mWeeks.reduce((acc, w) => acc + w.days.length * 2, 0);
                  const mDone = mWeeks.reduce((acc, w) => {
                    const done = w.days.reduce((a, d, di) => {
                      const s = checked[`${w.week}-${di}-study`] ? 1 : 0;
                      const t = checked[`${w.week}-${di}-task`] ? 1 : 0;
                      return a + s + t;
                    }, 0);
                    return acc + done;
                  }, 0);
                  const mP = mTotal > 0 ? Math.round((mDone / mTotal) * 100) : 0;
                  const monthColor = MONTH_COLORS[monthNum as 1 | 2 | 3];

                  return (
                    <div key={monthNum} className="space-y-3 pt-4 first:pt-0">
                      <div className="flex justify-between items-center flex-wrap gap-2">
                        <div className="flex items-center gap-2">
                          <span 
                            className="w-3 h-3 rounded bg-orange-400" 
                            style={{ backgroundColor: monthColor }}
                          />
                          <span className="text-sm font-black text-white font-sans">{MONTH_NAMES[monthNum as 1 | 2 | 3]}</span>
                        </div>
                        <span style={{ color: monthColor }} className="text-xs font-mono font-bold">
                          {mDone} de {mTotal} Etapas Concluídas · {mP}%
                        </span>
                      </div>

                      {/* Line loader bar */}
                      <div className="w-full bg-slate-900 border border-slate-800 h-2 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-300" 
                          style={{ width: `${mP}%`, backgroundColor: monthColor }}
                        />
                      </div>

                      {/* Small week pills row */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 pt-1">
                        {mWeeks.map((week) => {
                          const wp = getWeekProgress(week);
                          return (
                            <button
                              key={week.week}
                              onClick={() => {
                                setActiveWeek(week.week);
                                setActiveTab("checklist");
                              }}
                              className="text-left cursor-pointer transition-all p-2.5 bg-slate-900/40 hover:bg-slate-900 border border-slate-850/80 rounded-xl space-y-1 block"
                            >
                              <div className="flex justify-between items-center">
                                <span className="text-[10px] font-bold text-slate-400 font-sans block">Semana {week.week}</span>
                                {wp === 100 && <span className="text-[9px]">✅</span>}
                              </div>
                              <span className="text-[10.5px] text-white block truncate leading-tight font-sans">
                                {week.theme}
                              </span>
                              <div className="w-full bg-slate-950 h-1 rounded-full overflow-hidden mt-1">
                                <div 
                                  className="h-full rounded-full transition-all" 
                                  style={{ width: `${wp}%`, backgroundColor: week.color }}
                                />
                              </div>
                            </button>
                          );
                        })}
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>

            {/* DANGEROUS RESET SECTION */}
            <div className="pt-4 flex justify-end">
              <button
                onClick={handleResetAll}
                className="cursor-pointer border border-[#F44336]/20 hover:border-[#F44336]/40 hover:bg-rose-500/5 bg-transparent text-[#F44336] text-[10.5px] font-bold font-sans px-3.5 py-2.5 rounded-xl transition-all uppercase tracking-wide"
              >
                🗑️ Limpar e Reiniciar Progresso
              </button>
            </div>

          </div>
        )}

      </div>

      {/* 6. APPS & ESSENTIAL TOOLS BOX */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10 pt-4 border-t border-slate-800">
        
        {/* Recommended apps */}
        <div className="bg-slate-950/50 border border-slate-850 p-5 rounded-2xl space-y-3.5">
          <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">
            📱 APLICATIVOS OBRIGATÓRIOS PARA INSTALAR AGORA:
          </span>
          <div className="divide-y divide-slate-900 space-y-2.5">
            {RECOMMENDED_APPS.map((app, idx) => (
              <div key={idx} className={`${idx > 0 ? "pt-2.5" : ""} flex gap-3 items-start`}>
                <span className="text-lg bg-slate-900 border border-slate-800 p-2 rounded-xl shrink-0">
                  {app.emoji}
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-xs font-black text-white font-sans leading-none">{app.name}</span>
                    <span className="text-[8px] font-mono font-bold text-slate-400 bg-slate-900 px-1 py-0.5 rounded border border-slate-800 uppercase">
                      {app.badge}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-450 leading-relaxed font-sans mt-0.5">{app.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Suggestion & targets combined card */}
        <div className="space-y-4 flex flex-col justify-between">
          <div className="bg-slate-950/50 border border-slate-850 p-5 rounded-2xl space-y-3">
            <h5 className="text-xs font-black text-[#FF6B35] font-sans flex items-center gap-1.5 pb-2 border-b border-slate-900">
              <IconAward className="h-4 w-4" />
              <span>🏆 Metas de Faturamento e Estruturação</span>
            </h5>
            <div className="space-y-2.5">
              {MONTHLY_TARGETS.map((target, idx) => (
                <div key={idx} className={`p-2.5 rounded-xl border text-[10.5px] leading-relaxed flex gap-2 items-start ${target.color}`}>
                  <span className="font-extrabold font-sans shrink-0 uppercase tracking-wider text-[9px]">{target.m}:</span>
                  <span className="text-slate-300 font-sans">{target.target}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-950/30 border border-slate-850/50 p-4 rounded-xl flex items-center gap-3">
            <span className="text-2xl shrink-0">💡</span>
            <div className="min-w-0">
              <span className="text-[8.5px] font-mono font-bold text-slate-500 uppercase block tracking-wider font-sans">REGRA DE OURO DO TRABALHO DIGITAL</span>
              <p className="text-[10px] text-slate-400 font-sans leading-normal">
                Anote tudo no Notion ou num caderno. Organizar erros e processos garante que você implemente negócios e escale 3x mais rápido.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
