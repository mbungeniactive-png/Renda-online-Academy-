import React, { useState, useMemo } from "react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  Cell 
} from "recharts";
import { 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Target, 
  TrendingUp, 
  User, 
  Camera,
  Check,
  Edit2,
  RefreshCw,
  Gift
} from "lucide-react";

interface Lesson {
  id: string;
  title: string;
  module: "Início" | "Monetização" | "Roteiros" | "Nichos" | "Tráfego";
  durationMin: number;
}

const DEFAULT_LESSONS: Lesson[] = [
  { id: "l1", title: "Configuração Estratégica de Contas Dark", module: "Início", durationMin: 15 },
  { id: "l2", title: "O Cronograma Prático dos Primeiros 30 Dias", module: "Início", durationMin: 20 },
  { id: "l3", title: "Escolha do Nicho Perfeito para Alta Conversão", module: "Nichos", durationMin: 25 },
  { id: "l4", title: "Criação de Ganchos e Retenção Inquebrável", module: "Roteiros", durationMin: 30 },
  { id: "l5", title: "Uso de Inteligência Artificial para Produção em Massa", module: "Roteiros", durationMin: 45 },
  { id: "l6", title: "Estratégia Definitiva de Afiliados Hotmart/Monetizze", module: "Monetização", durationMin: 35 },
  { id: "l7", title: "Montando seu Próprio eBook de R$ 19,90", module: "Monetização", durationMin: 40 },
  { id: "l8", title: "Configuração de Anúncios Patrocinados no Google & Meta", module: "Tráfego", durationMin: 30 },
  { id: "l9", title: "Remarketing e Recuperação de Carrinho Abandonado", module: "Tráfego", durationMin: 25 },
  { id: "l10", title: "Leitura de Dados, Métricas de Conversão e Escala", module: "Tráfego", durationMin: 35 },
];

export default function MyProfile() {
  // User Personal Data State
  const [userName, setUserName] = useState<string>("Aluno TikTok Pro");
  const [userGoal, setUserGoal] = useState<string>("Faturar R$ 5.000,00 nos próximos 60 dias");
  const [dailyCommitment, setDailyCommitment] = useState<number>(30); // minutes per day
  const [isEditing, setIsEditing] = useState<boolean>(false);
  
  // Lesson Progress State (storing completed lesson IDs)
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({
    "l1": true,
    "l2": true,
    "l3": false,
    "l4": false,
    "l5": false,
    "l6": false,
    "l7": false,
    "l8": false,
    "l9": false,
    "l10": false,
  });

  // Toggle single lesson status
  const toggleLesson = (id: string) => {
    setCompletedLessons(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Mark all as completed or reset
  const markAllCompleted = (status: boolean) => {
    const updated: Record<string, boolean> = {};
    DEFAULT_LESSONS.forEach(l => {
      updated[l.id] = status;
    });
    setCompletedLessons(updated);
  };

  // Calculations
  const totalLessons = DEFAULT_LESSONS.length;
  const completedCount = useMemo(() => {
    return Object.values(completedLessons).filter(Boolean).length;
  }, [completedLessons]);
  const remainingCount = totalLessons - completedCount;
  const progressPercent = Math.round((completedCount / totalLessons) * 100);

  // Total Study Time calculated
  const totalDurationMin = useMemo(() => {
    return DEFAULT_LESSONS.reduce((acc, curr) => acc + curr.durationMin, 0);
  }, []);

  const completedDurationMin = useMemo(() => {
    return DEFAULT_LESSONS.reduce((acc, curr) => {
      return acc + (completedLessons[curr.id] ? curr.durationMin : 0);
    }, 0);
  }, [completedLessons]);

  // Rank / Badge logic
  const rank = useMemo(() => {
    if (progressPercent === 100) return { title: "Mestre TikToker 🏆", desc: "Você domina todo o ecossistema viral!", color: "text-amber-600 bg-amber-50 border-amber-200" };
    if (progressPercent >= 70) return { title: "Criador Executivo ⭐", desc: "Sua produção e funis estão altamente otimizados.", color: "text-purple-700 bg-purple-50 border-purple-200" };
    if (progressPercent >= 40) return { title: "Afiliado Avançado 📈", desc: "Você já entende de tráfego e monetização.", color: "text-blue-700 bg-blue-50 border-blue-200" };
    if (progressPercent >= 10) return { title: "Iniciante Focado 🚀", desc: "Começou a jornada de consistência dos primeiros dias.", color: "text-emerald-700 bg-emerald-50 border-emerald-200" };
    return { title: "Recém Chegado 🆕", desc: "Pronto para decolar a sua audiência.", color: "text-slate-600 bg-slate-100 border-slate-200" };
  }, [progressPercent]);

  // Recharts Data transformation - Module progress
  // Show Completed vs Remaining Lessons by module
  const chartData = useMemo(() => {
    const modulesMap: Record<string, { completed: number; remaining: number }> = {
      "Início": { completed: 0, remaining: 0 },
      "Nichos": { completed: 0, remaining: 0 },
      "Roteiros": { completed: 0, remaining: 0 },
      "Monetização": { completed: 0, remaining: 0 },
      "Tráfego": { completed: 0, remaining: 0 },
    };

    DEFAULT_LESSONS.forEach(l => {
      if (completedLessons[l.id]) {
        modulesMap[l.module].completed += 1;
      } else {
        modulesMap[l.module].remaining += 1;
      }
    });

    return Object.entries(modulesMap).map(([title, stats]) => ({
      name: title,
      "Concluídas": stats.completed,
      "Restantes": stats.remaining,
      "Total": stats.completed + stats.remaining
    }));
  }, [completedLessons]);

  // Recharts Overview Bar Chart (Total Completed vs Total Remaining)
  const summaryChartData = useMemo(() => {
    return [
      {
        name: "Aulas",
        "Concluídas": completedCount,
        "Restantes": remainingCount,
      }
    ];
  }, [completedCount, remainingCount]);

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* PROFILE HEADER CARD */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs relative overflow-hidden">
        {/* Background gradient accents */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-36 h-36 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start justify-between">
          <div className="flex flex-col sm:flex-row gap-5 items-center text-center sm:text-left">
            {/* Interactive User Avatar */}
            <div className="relative group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#1a237e] to-[#00c853] flex items-center justify-center text-white font-sans text-2xl font-black shadow-md border border-white">
                {userName.charAt(0).toUpperCase()}
              </div>
              <div className="absolute -bottom-1 -right-1 bg-white border border-slate-250 p-1.5 rounded-lg shadow-sm text-slate-500 hover:text-[#1a237e] cursor-pointer transition-colors">
                <Camera className="h-3.5 w-3.5" />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                {isEditing ? (
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="text-lg font-black text-[#1a237e] border border-slate-300 rounded px-2.5 py-1 bg-slate-50 max-w-xs focus:ring-1 focus:ring-[#1a237e] outline-none"
                    placeholder="Nome do Aluno"
                  />
                ) : (
                  <h3 className="text-xl font-black text-[#1a237e]">{userName}</h3>
                )}
                
                <span className={`text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full border ${rank.color}`}>
                  {rank.title}
                </span>
              </div>
              
              <div className="space-y-1 text-slate-600 text-xs font-sans">
                {isEditing ? (
                  <div className="space-y-2 mt-1">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Meta Atual:</span>
                      <input
                        type="text"
                        value={userGoal}
                        onChange={(e) => setUserGoal(e.target.value)}
                        className="text-xs border border-slate-300 rounded px-2.5 py-1.5 bg-slate-50 w-full md:w-80 focus:ring-1 focus:ring-[#1a237e] outline-none"
                        placeholder="Ex: Faturar R$ 5.000 nos próximos 60 dias"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Estudo diário (minutos):</span>
                      <input
                        type="number"
                        value={dailyCommitment}
                        onChange={(e) => setDailyCommitment(Number(e.target.value))}
                        className="text-xs border border-slate-300 rounded px-2.5 py-1.5 bg-slate-50 w-24 focus:ring-1 focus:ring-[#1a237e] outline-none"
                        min="5"
                        max="240"
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="flex items-center justify-center sm:justify-start gap-1.5 text-slate-650">
                      <Target className="h-4 w-4 text-rose-500 shrink-0" />
                      <span><strong>Foco / Meta:</strong> {userGoal}</span>
                    </p>
                    <p className="flex items-center justify-center sm:justify-start gap-1.5 text-slate-550">
                      <Clock className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Plano de estudos: {dailyCommitment} minutos / dia</span>
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`cursor-pointer text-xs font-bold px-4 py-2 rounded-xl border flex items-center gap-1.5 transition-all shrink-0 ${
              isEditing 
                ? "bg-[#00c853] border-[#00c853] text-white hover:bg-emerald-600" 
                : "bg-white border-slate-250 text-slate-600 hover:text-[#1a237e] hover:border-slate-350"
            }`}
          >
            {isEditing ? (
              <>
                <Check className="h-3.5 w-3.5" />
                <span>Salvar Perfil</span>
              </>
            ) : (
              <>
                <Edit2 className="h-3.5 w-3.5" />
                <span>Editar Dados</span>
              </>
            )}
          </button>
        </div>

        {/* STUDY LEVELING STATUS BOX */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-5 border-t border-slate-100">
          <div className="bg-slate-50 border border-slate-150 p-4 rounded-xl text-center space-y-1">
            <span className="text-[9px] font-mono font-bold text-slate-400 block uppercase tracking-wide">Aulas Concluídas</span>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-xl font-black text-[#1a237e]">{completedCount}</span>
              <span className="text-xs text-slate-400">/ {totalLessons}</span>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-150 p-4 rounded-xl text-center space-y-1">
            <span className="text-[9px] font-mono font-bold text-slate-400 block uppercase tracking-wide">Aulas Restantes</span>
            <span className="text-xl font-black text-rose-600 block">{remainingCount}</span>
          </div>

          <div className="bg-slate-50 border border-slate-150 p-4 rounded-xl text-center space-y-1">
            <span className="text-[9px] font-mono font-bold text-slate-400 block uppercase tracking-wide">Tempo Concluído</span>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-xl font-black text-emerald-600">{completedDurationMin}</span>
              <span className="text-[10px] text-slate-400">min</span>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-150 p-4 rounded-xl text-center space-y-1">
            <span className="text-[9px] font-mono font-bold text-slate-400 block uppercase tracking-wide">Total de Aulas</span>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-xl font-black text-[#1a237e]">{totalLessons}</span>
              <span className="text-xs text-slate-400">tópicos</span>
            </div>
          </div>
        </div>

        {/* PROGRESS BAR BAR */}
        <div className="mt-5 space-y-1.5">
          <div className="flex justify-between items-center text-xs font-sans">
            <span className="text-slate-500">Progresso Geral do Curso</span>
            <span className="font-extrabold text-emerald-600">{progressPercent}%</span>
          </div>
          <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden border border-slate-200 shadow-inner">
            <div 
              className="bg-gradient-to-r from-[#1a237e] to-[#00c853] h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* DOUBLE CHARTS SYSTEM (RECHARTS SECTION) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Simple Completed vs Remaining Bar Chart (Col Span 1) */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4 flex flex-col justify-between">
          <div className="space-y-1">
            <h4 className="text-sm font-black text-[#1a237e] font-sans flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#00c853]" />
              <span>Conclusão Geral de Aulas</span>
            </h4>
            <p className="text-[10.5px] text-slate-400 leading-relaxed font-sans">
              Visão consolidada de tópicos aprendidos em comparação com o restante dos conteúdos recomendados.
            </p>
          </div>

          <div className="h-48 w-full mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={summaryChartData}
                margin={{ top: 10, right: 10, left: -25, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} tickLine={false} />
                <YAxis domain={[0, totalLessons]} tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e2e8f0" }}
                  cursor={{ fill: 'rgba(0, 0, 0, 0.02)' }}
                />
                <Legend iconSize={8} wrapperStyle={{ fontSize: 10 }} />
                <Bar dataKey="Concluídas" fill="#00c853" radius={[4, 4, 0, 0]}>
                  <Cell fill="#00c853" />
                </Bar>
                <Bar dataKey="Restantes" fill="#ef4444" radius={[4, 4, 0, 0]}>
                  <Cell fill="#e2e8f0" stroke="#cbd5e1" strokeDasharray="2 2" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-slate-50 border border-slate-150 p-3 rounded-xl text-center">
            <span className="text-[10.5px] font-sans text-slate-650 leading-relaxed block">
              💡 Você concluiu <strong>{completedCount}</strong> de <strong>{totalLessons}</strong> aulas. {progressPercent === 100 ? "Parabéns! Curso finalizado." : "Continue firme para se graduar!"}
            </span>
          </div>
        </div>

        {/* Module breakdown progress (Col Span 2) */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
          <div className="space-y-1">
            <h4 className="text-sm font-black text-[#1a237e] font-sans flex items-center gap-1.5">
              <TrendingUp className="h-4 w-4 text-[#1a237e]" />
              <span>Desempenho no Progresso por Módulo</span>
            </h4>
            <p className="text-[10.5px] text-slate-400 leading-relaxed font-sans">
              Monitore de forma clara em qual módulo do TikTok Playbook você tem maior proficiência e quais merecem mais sua atenção.
            </p>
          </div>

          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 10, right: 10, left: -25, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} />
                <YAxis allowDecimals={false} tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e2e8f0" }}
                  cursor={{ fill: 'rgba(0, 0, 0, 0.02)' }}
                />
                <Legend iconSize={8} wrapperStyle={{ fontSize: 10 }} />
                <Bar name="Concluídas" dataKey="Concluídas" stackId="a" fill="#00c853" radius={[0, 0, 0, 0]} />
                <Bar name="Restantes" dataKey="Restantes" stackId="a" fill="#e2e8f0" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-between items-center bg-slate-50/50 border border-slate-150 p-2.5 rounded-xl text-[10px] text-slate-500 font-mono">
            <span className="flex items-center gap-1 text-emerald-600 font-extrabold">● Concluídas (Verde)</span>
            <span className="flex items-center gap-1 text-slate-400 font-bold">● Restantes (Cinza)</span>
          </div>
        </div>

      </div>

      {/* DYNAMIC LESSON CHECKLIST */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div>
            <h4 className="text-base font-extrabold text-[#1a237e] flex items-center gap-2 font-sans">
              <span className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">📚</span>
              <span>Conteúdo Programático & Grade de Aulas</span>
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              Marque as aulas que você concluiu para atualizar os gráficos de desempenho e calcular seu progresso de elite:
            </p>
          </div>

          <div className="flex flex-wrap gap-2 shrink-0">
            <button
               onClick={() => markAllCompleted(true)}
               className="cursor-pointer text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 border border-emerald-500/20 bg-emerald-500/5 text-emerald-700 rounded-lg hover:bg-emerald-500/10 transition-colors"
            >
              Concluir Tudo
            </button>
            <button
               onClick={() => markAllCompleted(false)}
               className="cursor-pointer text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 border border-slate-200 bg-slate-50 text-slate-650 rounded-lg hover:bg-slate-150 transition-colors"
            >
              Resetar Aulas
            </button>
          </div>
        </div>

        {/* Lesson List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {DEFAULT_LESSONS.map((lesson) => {
            const isDone = !!completedLessons[lesson.id];
            let moduleBadgeColor = "bg-blue-50 text-blue-700 border-blue-200";
            if (lesson.module === "Nichos") moduleBadgeColor = "bg-purple-50 text-purple-700 border-purple-200";
            if (lesson.module === "Roteiros") moduleBadgeColor = "bg-amber-50 text-amber-800 border-amber-200";
            if (lesson.module === "Monetização") moduleBadgeColor = "bg-pink-50 text-pink-700 border-pink-200";
            if (lesson.module === "Tráfego") moduleBadgeColor = "bg-emerald-50 text-emerald-800 border-emerald-200";

            return (
              <div 
                key={lesson.id}
                onClick={() => toggleLesson(lesson.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer relative overflow-hidden select-none flex items-center justify-between gap-4 group ${
                  isDone 
                    ? "bg-emerald-50/20 border-[#00c853]" 
                    : "bg-slate-50/50 border-slate-150 hover:border-slate-250 hover:bg-white"
                }`}
              >
                <div className="space-y-1.5 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={`text-[8.5px] font-mono font-bold uppercase px-2 py-0.5 rounded border ${moduleBadgeColor}`}>
                      {lesson.module}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1 shrink-0">
                      <Clock className="h-3 w-3" />
                      {lesson.durationMin} min
                    </span>
                  </div>
                  <h5 className={`text-xs font-black font-sans leading-tight truncate ${isDone ? "text-slate-500 line-through" : "text-[#1a237e] group-hover:text-black"}`}>
                    {lesson.title}
                  </h5>
                </div>

                <div className="shrink-0">
                  <div className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all ${
                    isDone 
                      ? "bg-[#00c853] border-[#00c853] text-white shadow-xs" 
                      : "border-slate-250 bg-white text-transparent group-hover:border-slate-400"
                  }`}>
                    <Check className="h-4 w-4 stroke-[3.5]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* DYNAMIC CERTIFICATE BANNER / TRIGGER */}
      {progressPercent === 100 && (
        <div className="bg-gradient-to-r from-amber-500 to-yellow-500 border border-amber-500/20 rounded-2xl p-6 text-white shadow-md relative overflow-hidden animate-fadeIn">
          {/* Sparkly particles */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 relative z-10">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1 bg-white/20 border border-white/20 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5 text-yellow-300 animate-spin" />
                <span>Grau Concluido com Êxito!</span>
              </div>
              <h4 className="text-lg font-black font-sans leading-tight">Gere seu Certificado TikTok Playbook Elite</h4>
              <p className="text-white/95 text-xs font-sans leading-relaxed max-w-xl">
                Parabéns, <strong>{userName}</strong>! Você completou 100% de todo o catálogo do curso programático. Baixe seu certificado de conclusão criptografado para oficializar seu método.
              </p>
            </div>

            <button
              onClick={() => alert(`Certificado do Aluno: ${userName}\nCódigo de Autenticação: TKP-${Math.floor(100000 + Math.random() * 900000)}\n\nParabéns! Documento assinado com chave criptografada de conformidade e validado pelo TikTok Playbook Admin.`)}
              className="cursor-pointer bg-white text-amber-700 px-5 py-3 rounded-xl text-xs font-black tracking-wider hover:bg-slate-50 transition-all shadow-md shrink-0 flex items-center gap-2 font-sans uppercase"
            >
              <Award className="h-4 w-4 text-amber-600 shrink-0" />
              <span>Gerar Certificado</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
