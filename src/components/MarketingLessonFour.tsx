import React, { useState, useEffect } from "react";
import { 
  Play, 
  CheckCircle, 
  FolderPlus, 
  Wrench, 
  Mail, 
  MessageSquare, 
  Layout, 
  HardDrive, 
  Video, 
  FileText, 
  Heart, 
  Sparkles, 
  HelpCircle,
  Smartphone,
  BadgeCheck,
  CheckCircle2
} from "lucide-react";

interface FreeTool {
  id: string;
  num: number;
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  purpose: string;
  setupRule: string;
  missionText: string;
}

const FREE_TOOLS_LIST: FreeTool[] = [
  {
    id: "gmail",
    num: 1,
    name: "Gmail Profissional",
    category: "Comunicação e Acesso",
    icon: Mail,
    color: "text-red-600 bg-red-50 border-red-200",
    purpose: "Primeira impressão e seriedade ao enviar propostas de serviço para marcas ou clientes locais.",
    setupRule: "Crie no formato profissional: seunome.sobrenome@gmail.com. Evite apelidos infantis ou informais.",
    missionText: "Criar um novo Gmail exclusivo para seus trabalhos seguindo o padrão recomendado de nomenclatura."
  },
  {
    id: "whatsapp",
    num: 2,
    name: "WhatsApp Business",
    category: "SAC e Atendimento",
    icon: MessageSquare,
    color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    purpose: "Passar a imagem de um negócio sério e organizado. Permite catálogo de serviços, mensagens de boas-vindas e catálogo de preços.",
    setupRule: "Preencha com foto profissional, descrição resumida dos seus serviços e do que você faz, além de horário de atendimento.",
    missionText: "Baixar o aplicativo do WhatsApp Business no celular e configurar seu perfil profissional completo."
  },
  {
    id: "canva",
    num: 3,
    name: "Canva",
    category: "Criação Gráfica",
    icon: Layout,
    color: "text-blue-600 bg-blue-50 border-blue-200",
    purpose: "Desenhar posts de mídias sociais, carrosséis de aula, capas para YouTube e seu próprio portfólio visual grátis.",
    setupRule: "Milhares de modelos prontos disponíveis. Não precisa de experiência avançada. Só editar informações nas caixas de texto.",
    missionText: "Acessar o site canva.com ou baixar o app e explorar os templates gratuitos por pelo menos 10 minutos."
  },
  {
    id: "drive",
    num: 4,
    name: "Google Drive",
    category: "Armazenamento Nuvem",
    icon: HardDrive,
    color: "text-amber-600 bg-amber-50 border-amber-200",
    purpose: "Armazenar arquivos, contratos e comprovantes com 15 GB gratuitos de segurança para acessar de qualquer aparelho.",
    setupRule: "Crie pastas separadas: 'Clientes', 'Portfólio', 'Cursos' e 'Financeiro' para manter disciplina estrutural.",
    missionText: "Acessar drive.google.com com seu novo e-mail e criar as 4 pastas fundamentais corporativas."
  },
  {
    id: "capcut",
    num: 5,
    name: "CapCut",
    category: "Edição de Vídeo",
    icon: Video,
    color: "text-violet-600 bg-violet-50 border-violet-200",
    purpose: "Editar Reels, Shorts de YouTube e TikToks virais para prestar serviços rápidos ou divulgar seu próprio portfólio.",
    setupRule: "Aplicativo móvel e para desktop gratuito. Considerado o editor mais didático de vídeos rápidos de atenção hoje.",
    missionText: "Instalar o CapCut no celular e rodar um breve tutorial básico no YouTube para digerir cortes e legendas."
  },
  {
    id: "notion",
    num: 6,
    name: "Notion ou Google Keep",
    category: "Gestão e Produtividade",
    icon: FileText,
    color: "text-slate-700 bg-slate-50 border-slate-200",
    purpose: "Analisar tarefas semanais, metas dos próximos 90 dias, registrar insights de apostilas e controlar propostas enviadas.",
    setupRule: "Use o Google Keep se prezar por notas breves estilo post-it. Use o Notion se desejar construir um painel poderoso de estudos.",
    missionText: "Escolher um dos dois gerenciadores digitais e abrir uma conta gratuita de organização pessoal."
  }
];

export default function MarketingLessonFour() {
  const [selectedToolId, setSelectedToolId] = useState<string>("gmail");
  const [checkedTools, setCheckedTools] = useState<string[]>([]);
  const [interactiveLike, setInteractiveLike] = useState<boolean>(false);

  useEffect(() => {
    try {
      const savedCheckedList = localStorage.getItem("lesson_four_checked_tools");
      if (savedCheckedList) {
        setCheckedTools(JSON.parse(savedCheckedList));
      }
    } catch {}
  }, []);

  const triggerChime = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";
      
      osc.frequency.setValueAtTime(659.25, ctx.currentTime); // E5
      osc.frequency.exponentialRampToValueAtTime(987.77, ctx.currentTime + 0.08); // B5
      
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.14);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.16);
    } catch {}
  };

  const handleToggleToolCheck = (id: string) => {
    setCheckedTools(prev => {
      const exists = prev.includes(id);
      const next = exists ? prev.filter(t => t !== id) : [...prev, id];
      triggerChime();
      try {
        localStorage.setItem("lesson_four_checked_tools", JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const handleLikeToggle = () => {
    const nextState = !interactiveLike;
    setInteractiveLike(nextState);
    if (nextState) {
      triggerChime();
    }
  };

  const activeToolInfo = FREE_TOOLS_LIST.find(t => t.id === selectedToolId) || FREE_TOOLS_LIST[0];

  return (
    <div id="marketing-lesson-four" className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-7 relative overflow-hidden transition-all duration-300">
      
      {/* 1. HEADER HERO BANNER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-5">
        <div className="space-y-1.5 max-w-xl">
          <div className="inline-flex items-center gap-1.5 bg-[#1a237e]/10 border border-[#1a237e]/25 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-[#1a237e] animate-pulse">
            <Wrench className="h-3.5 w-3.5" />
            <span>Infraestrutura Prática Ativa</span>
          </div>
          <h2 className="text-base sm:text-lg font-black text-[#1a237e] font-sans tracking-tight leading-snug">
            Lição 4: Ferramentas Gratuitas Que Você Precisa Ter
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed font-sans">
            Mãos à massa! Configure este pacote tecnológico de utilitários 100% gratuitos para consolidar uma imagem totalmente séria e profissional no mercado desde o primeiro dia.
          </p>
        </div>

        {/* Status Stamp badge */}
        <div className="flex items-center gap-1.5 bg-slate-50 border p-2.5 rounded-xl text-[10.5px] font-semibold text-slate-600 font-sans shadow-3xs shrink-0">
          <CheckCircle className="h-4 w-4 text-emerald-500" />
          <span>Foco Técnico Definitivo</span>
        </div>
      </div>

      {/* 2. CHATSTYLE INTRO BRIEF */}
      <div className="bg-gradient-to-br from-[#1a237e]/5 to-indigo-900/5 border border-slate-150 p-5 rounded-2xl space-y-3.5">
        <p className="text-xs text-slate-700 leading-relaxed font-sans font-semibold">
          "Fala, pessoal! Bem-vindo à Lição 4 do nosso site."
        </p>

        <p className="text-xs text-slate-600 leading-relaxed font-sans">
          Nas últimas aulas, você aprendeu o que é ganhar de verdade na internet, como desviar de fraudulências e a mentalidade exata de resiliência. Agora, chegou a hora de colocar a mão na massa prática!
        </p>

        <p className="text-xs text-slate-500 font-sans leading-relaxed italic">
          Hoje eu vou te mostrar todas as ferramentas que você precisa ter configuradas e prontas antes de buscar o primeiro Pix de cliente ou postagens. Elas são simples de compreender, 100% gratuitas e qualquer pessoa consegue navegar de imediato. Pega seu celular ou computador e vem conosco!
        </p>
      </div>

      {/* 3. POR QUE AS FERRAMENTAS MANDAM (EXPLANATION ROW) */}
      <div className="bg-slate-50 border rounded-2xl p-4.5 space-y-3.5 font-sans">
        <h4 className="text-xs font-black text-slate-800 flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-amber-500 animate-spin" style={{ animationDuration: "3s" }} />
          <span>A Diferença Crítica do Posicionamento</span>
        </h4>
        
        <p className="text-xs text-slate-650 leading-relaxed">
          Tentar atuar no Marketing Digital misturando seu perfil pessoal repleto de conversas de infância, e-mail do tipo <code className="bg-slate-100 px-1 py-0.5 rounded text-red-650 font-bold">'gatinho_lindo2005@gmail'</code> e arquivos desorganizados passa imediato amadorismo. 
        </p>

        <p className="text-xs text-slate-650 leading-relaxed">
          <strong>Organização não custa dinheiro.</strong> Significa zelo estético. Com os 6 canais mostrados abaixo, você passará a postura de uma agência sólida sem desembolsar nenhum centavo.
        </p>
      </div>

      {/* 4. THE 6 TOOLS - INTERACTIVE TABS LIST */}
      <div className="space-y-4">
        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
          🛠️ CLIQUE NAS ABAS PARA ESTUDAR OS DETALHES DE CADA UTILITÁRIO:
        </span>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
          {FREE_TOOLS_LIST.map((tool) => {
            const isSelected = tool.id === selectedToolId;
            const IconComponent = tool.icon;
            const isChecked = checkedTools.includes(tool.id);
            return (
              <button
                key={tool.id}
                onClick={() => {
                  setSelectedToolId(tool.id);
                  triggerChime();
                }}
                className={`cursor-pointer p-3 rounded-xl border text-left transition-all flex flex-col justify-between h-[100px] relative overflow-hidden ${
                  isSelected
                    ? "border-[#1a237e] bg-indigo-50/40 shadow-3xs"
                    : "border-slate-150 hover:bg-slate-50/50"
                }`}
              >
                <div className="flex justify-between items-start w-full">
                  <span className={`p-1 rounded-md border ${tool.color}`}>
                    <IconComponent className="h-4 w-4" />
                  </span>
                  
                  {/* Tick check indicator */}
                  <span className={`w-4 h-4 rounded-full border flex items-center justify-center text-[8px] font-bold ${
                    isChecked ? "bg-emerald-500 border-emerald-600 text-white" : "border-slate-205 bg-white text-transparent"
                  }`}>
                    ✓
                  </span>
                </div>

                <div className="mt-1">
                  <span className="text-[8.5px] font-mono text-slate-400 block font-bold uppercase">Nº 0{tool.num}</span>
                  <strong className="text-[11px] text-slate-800 leading-none font-sans block font-black truncate">{tool.name}</strong>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected standard detailed tool information view */}
        <div className="bg-slate-50 border border-slate-205 rounded-2xl p-5 space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
            <div className="space-y-0.5">
              <span className="text-[9.5px] font-mono text-indigo-700 block uppercase font-bold tracking-wider">
                FUNÇÃO DA FERRAMENTA • {activeToolInfo.category}
              </span>
              <h4 className="text-sm font-black text-slate-805 font-sans flex items-center gap-1.5ClassName">
                <span>0{activeToolInfo.num}. {activeToolInfo.name}</span>
              </h4>
            </div>

            {/* Configured checkbox state inside */}
            <button
              onClick={() => handleToggleToolCheck(activeToolInfo.id)}
              className={`cursor-pointer px-3 py-1.5 text-[10.5px] font-sans font-bold rounded-lg border transition-all flex items-center gap-1.5 ${
                checkedTools.includes(activeToolInfo.id)
                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                  : "bg-white text-slate-600 border-slate-250 hover:bg-slate-100"
              }`}
            >
              <BadgeCheck className="h-4 w-4" />
              <span>{checkedTools.includes(activeToolInfo.id) ? "Instalado & Configurado ✓" : "Marcar como Configurado"}</span>
            </button>
          </div>

          <p className="text-xs text-slate-650 font-sans leading-relaxed">
            <strong>O que faz por você:</strong> {activeToolInfo.purpose}
          </p>

          <div className="p-4 bg-white border rounded-xl font-sans grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="text-[8.5px] font-mono text-slate-400 block uppercase tracking-wider font-bold">REGRADAS PARA CONFIGURAÇÃO SEGURA</span>
              <p className="text-[11.5px] text-slate-600 mt-1 leading-normal italic">
                {activeToolInfo.setupRule}
              </p>
            </div>

            <div className="border-t md:border-t-0 md:border-l border-slate-150 pt-3 md:pt-0 md:pl-4">
              <span className="text-[8.5px] font-mono text-emerald-600 block uppercase tracking-wider font-bold">MISSÃO RÁPIDA DE COCHEO</span>
              <p className="text-[11.5px] text-slate-800 mt-1 leading-normal font-medium flex items-start gap-1.5">
                <span className="text-emerald-500 shrink-0">⚡</span>
                <span>{activeToolInfo.missionText}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. ROADMAP CHECKLIST FOR TOTAL INFRASTRUCTURE SETUP */}
      <div id="setup-checklist-checklist" className="bg-slate-950 text-white rounded-3xl p-5.5 space-y-4.5 relative overflow-hidden font-sans">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B35]/5 rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-white/5 pb-3">
          <div>
            <span className="text-[9.5px] font-mono text-emerald-400 block uppercase tracking-wider font-black">PROGRESSO INTEGRAL DE INFRAESTRUTURA</span>
            <h5 className="text-xs font-black">Planilha de Instalação e Ativação do Módulo 1</h5>
          </div>

          <span className="text-[10px] font-mono bg-white/5 px-2.5 py-1 rounded-lg">
            {checkedTools.length} de 6 Configurados ({Math.round((checkedTools.length / 6) * 100)}%)
          </span>
        </div>

        {/* Progress horizontal indicator */}
        <div className="space-y-1">
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-400 transition-all duration-300"
              style={{ width: `${(checkedTools.length / 6) * 100}%` }}
            />
          </div>
        </div>

        {/* Checklist of all missions to do to complete Lesson 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1.5">
          {FREE_TOOLS_LIST.map((tool) => {
            const isChecked = checkedTools.includes(tool.id);
            return (
              <div 
                key={tool.id}
                onClick={() => handleToggleToolCheck(tool.id)}
                className={`cursor-pointer p-3.5 rounded-xl border transition-all flex items-start gap-4 ${
                  isChecked 
                    ? "bg-white/[0.04] border-emerald-500/30" 
                    : "bg-white/[0.01] hover:bg-white/5 border-white/5"
                }`}
              >
                <span className={`w-5.5 h-5.5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                  isChecked ? "bg-emerald-400 border-emerald-500 text-slate-950 font-black" : "border-slate-700 text-transparent"
                }`}>
                  ✓
                </span>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <strong className={`text-xs block ${isChecked ? "text-slate-400 line-through" : "text-white"}`}>
                      {tool.name}
                    </strong>
                    <span className="text-[8px] font-mono text-slate-500 uppercase px-1.5 bg-white/5 rounded">0{tool.num}</span>
                  </div>
                  <p className="text-[10.5px] text-slate-450 leading-relaxed mt-0.5">
                    {tool.missionText}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {checkedTools.length === 6 && (
          <div className="bg-emerald-500/10 border border-emerald-500/35 p-3.5 rounded-2xl flex items-center gap-3 text-xs text-emerald-400 animate-pulse">
            <span className="text-xl">🏆</span>
            <div>
              <strong>Infraestrutura Completa Ativada!</strong> Todas as 6 ferramentas cruciais de design, armazenamento e chat foram verificadas e encontram-se prontas para apoiar seu portfólio.
            </div>
          </div>
        )}
      </div>

      {/* 6. LIKE COMPONENTE EXTRA FOR CONCLUDING */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-slate-105 bg-white">
        <p className="text-[10.5px] text-slate-505 font-sans leading-relaxed text-center sm:text-left">
          Na próxima aula fecharemos o **Módulo 1** abordando o planejamento essencial de presença profissional online e qual rede focar primeiro.
        </p>

        <div className="flex items-center gap-2">
          <button
            onClick={handleLikeToggle}
            className={`cursor-pointer px-3.5 py-2 rounded-xl text-xs font-bold font-sans transition-all flex items-center gap-1.5 border ${
              interactiveLike
                ? "bg-rose-50 border-rose-250 text-rose-600 animate-pulse"
                : "border-slate-205 text-slate-500 hover:text-slate-850"
            }`}
          >
            <Heart className={`h-4 w-4 ${interactiveLike ? "fill-rose-500 text-rose-505" : ""}`} />
            <span>{interactiveLike ? "Deixou seu Like!" : "Dar Like na Lição 4"}</span>
          </button>
        </div>
      </div>

    </div>
  );
}
