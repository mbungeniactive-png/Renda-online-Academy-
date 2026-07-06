import React, { useState } from "react";
import { 
  Share2, 
  Heart, 
  MessageCircle, 
  Bookmark, 
  UserPlus, 
  Cpu, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Flame, 
  Sparkles, 
  TrendingUp, 
  Lightbulb, 
  BookOpen, 
  Target, 
  Zap, 
  LineChart, 
  Award,
  Video,
  Smile,
  Megaphone,
  Network
} from "lucide-react";

interface SocialPlatform {
  name: string;
  focus: string;
  emoji: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  borderColor: string;
  badge: string;
  characteristic: string;
}

const PRINCIPALS_NETWORKS: SocialPlatform[] = [
  {
    name: "Instagram",
    focus: "Fotos, Vídeos Curtos (Reels) e Stories rápidos",
    emoji: "📸",
    icon: Instagram,
    color: "from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
    bgColor: "bg-pink-50/40 border-pink-100",
    borderColor: "border-pink-200",
    badge: "Audiência & Desejo",
    characteristic: "Excelente para criar identificação visual, vender produtos físicos e engajamento humano diário nos Stories."
  },
  {
    name: "TikTok",
    focus: "Vídeos curtos criativos, dinâmicos e virais",
    emoji: "⚡",
    icon: Video,
    color: "from-[#00f2fe] to-[#4facfe]",
    bgColor: "bg-cyan-50/40 border-cyan-100",
    borderColor: "border-cyan-200",
    badge: "Viralização Rápida",
    characteristic: "Alcance orgânico massivo para perfis iniciantes. Favorece a criatividade, humor e tendências musicais."
  },
  {
    name: "LinkedIn",
    focus: "Carreira, networking profissional e B2B",
    emoji: "💼",
    icon: Linkedin,
    color: "from-[#0a66c2] to-[#004182]",
    bgColor: "bg-blue-50/40 border-blue-100",
    borderColor: "border-blue-200",
    badge: "Parcerias & Renda",
    characteristic: "Ideal para publicar lições profissionais de Marketing, fechar contratos freelance e atrair recrutadores de agência."
  },
  {
    name: "YouTube",
    focus: "Vídeos longos de alta retenção e Shorts",
    emoji: "📺",
    icon: Youtube,
    color: "from-[#ff0000] to-[#b30000]",
    bgColor: "bg-red-50/40 border-red-100",
    borderColor: "border-red-200",
    badge: "Autoridade Máxima",
    characteristic: "O segundo maior indexador de buscas do planeta. Seus vídeos geram visualizações e receita por anos."
  },
  {
    name: "Facebook",
    focus: "Grupos segmentados, páginas locais e Ads",
    emoji: "👥",
    icon: Facebook,
    color: "from-[#1877f2] to-[#1154aa]",
    bgColor: "bg-indigo-50/40 border-indigo-100",
    borderColor: "border-indigo-200",
    badge: "Comunidades Forte",
    characteristic: "Excelente para interagir em comunidades maduras locais e base fundamental para rodar anúncios corporativos pagos."
  }
];

interface ContentType {
  label: string;
  icon: string;
  color: string;
  bgLight: string;
  desc: string;
  example: string;
  proTip: string;
}

const CONTENT_TYPES: ContentType[] = [
  {
    label: "Educativo",
    icon: "📚",
    color: "text-indigo-600 bg-indigo-50 border-indigo-150",
    bgLight: "bg-indigo-50/30",
    desc: "Ensina algo útil diretamente ao leitor de forma rápida.",
    example: "Um tutorial no Canva listando '5 Passos Simples para Criar um Post que Converte' ou dicas rápidas de SEO.",
    proTip: "Gera autoridade instantânea e faz novos visitantes seguirem você para aprender mais."
  },
  {
    label: "Entretenimento",
    icon: "🎭",
    color: "text-amber-600 bg-amber-50 border-amber-150",
    bgLight: "bg-amber-50/30",
    desc: "Descontraído, diverte, arranca gargalhadas ou gera identificação emocional.",
    example: "Memes de bastidores do home office ou vídeos curtos fingindo atender um cliente difícil de forma cômica.",
    proTip: "Gera compartilhamento massivo e reduz as barreiras corporativas frias da sua marca."
  },
  {
    label: "Informativo",
    icon: "📰",
    color: "text-emerald-600 bg-emerald-50 border-emerald-150",
    bgLight: "bg-emerald-50/30",
    desc: "Notícias de mercado, estatísticas oficiais, novidades ou atualizações cruciais.",
    example: "'O Instagram mudou de novo! Confira as 3 principais atualizações de algoritmo que alteram seu engajamento hoje'.",
    proTip: "Mantém seu público sintonizado com as tendências do mundo e posiciona você como referência antenada."
  },
  {
    label: "Promocional",
    icon: "📢",
    color: "text-rose-600 bg-rose-50 border-rose-150",
    bgLight: "bg-rose-50/30",
    desc: "Divulgação direta de seu portfólio, e-books, serviços pagos ou links de afiliado.",
    example: "'Restam apenas 3 vagas de consultoria estratégica de tráfego pago para este mês. Garanta seu link no perfil'.",
    proTip: "Use a regra 80/20: Entregue 80% de conteúdo de valor gratuito e faça ofertas promocionais em apenas 20% do tempo."
  }
];

export default function MarketingSocialNetworks() {
  const [activeTab, setActiveTab] = useState<"algorithms" | "networks" | "contents" | "growth">("algorithms");
  const [activePlatform, setActivePlatform] = useState<string>("Instagram");
  const [simulatedInteractions, setSimulatedInteractions] = useState({
    curtidas: 12,
    comentarios: 2,
    compartilhar: 1,
    salvamento: 0,
    alcance: 124
  });

  // Simple simulator multiplier to demonstrate algorithm trigger
  const handleInteraction = (type: "curtidas" | "comentarios" | "compartilhar" | "salvamento") => {
    let multiplier = 5; // standard like value
    if (type === "comentarios") multiplier = 12;
    if (type === "compartilhar") multiplier = 18;
    if (type === "salvamento") multiplier = 25;

    setSimulatedInteractions(prev => {
      const nextVal = prev[type] + 1;
      const nextAlcance = prev.alcance + multiplier + Math.floor(Math.random() * 8);
      return {
        ...prev,
        [type]: nextVal,
        alcance: nextAlcance
      };
    });

    try {
      // Small feedback sound on interaction triggers
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch {}
  };

  const handleResetSimulator = () => {
    setSimulatedInteractions({
      curtidas: 12,
      comentarios: 2,
      compartilhar: 1,
      salvamento: 0,
      alcance: 124
    });
  };

  const currentPlatformInfo = PRINCIPALS_NETWORKS.find(p => p.name === activePlatform) || PRINCIPALS_NETWORKS[0];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
      
      {/* 1. HEADER BANNER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1 bg-[#1a237e]/10 border border-[#1a237e]/25 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase text-[#1a237e]">
            <Network className="h-3 w-3 text-indigo-700" />
            <span>Módulo de Distribuição</span>
          </div>
          <h3 className="text-base sm:text-lg font-black text-[#1a237e] font-sans leading-tight">
            Desmistificando as Redes Sociais e Algoritmos
          </h3>
          <p className="text-xs text-slate-500 font-sans max-w-xl">
            As redes sociais são plataformas de atenção e conversa. Entender a engenharia de distribuição orgânica é o pilar inicial para escalar marcas e negócios.
          </p>
        </div>

        <div className="flex gap-1.5 items-center bg-slate-50 border px-3 py-1.5 rounded-xl text-[10.5px] font-semibold text-slate-600 font-sans shrink-0">
          <Sparkles className="h-4 w-4 text-amber-500 animate-pulse" />
          <span>Fórmulas de Alcance Ativo</span>
        </div>
      </div>

      {/* 2. TAB CONTROLLER CARDS */}
      <div className="flex flex-wrap gap-1 p-1 bg-slate-100 border border-slate-150 rounded-xl">
        {[
          { id: "algorithms", label: "⚙️ Como Funcionam & Algoritmo" },
          { id: "networks", label: "📱 Principais Plataformas" },
          { id: "contents", label: "🎭 Os 4 Tipos de Conteúdo" },
          { id: "growth", label: "📈 Como Crescer na Prática" }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`cursor-pointer px-3.5 py-2 rounded-lg text-[11px] font-bold font-sans transition-all flex-1 text-center min-w-[120px] ${
              activeTab === tab.id
                ? "bg-white text-[#1a237e] shadow-3xs border border-slate-205"
                : "text-slate-550 hover:text-slate-850 hover:bg-white/40"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 3. DYNAMIC WORKSPACE PANEL CONTENT */}
      <div className="transition-all duration-300">
        
        {/* TABS 1: HOW ALGORITHMS WORK */}
        {activeTab === "algorithms" && (
          <div className="space-y-6">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Left explanation column */}
              <div className="lg:col-span-7 space-y-4 font-sans">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                  ⚙️ SISTEMA DE ENTREGALIDADE MÍNIMA E INTERAÇÕES
                </span>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Quando você ativa uma publicação (foto, vídeo ou texto), a plataforma não distribui para todo mundo de uma vez. Ela escolhe um <strong>grupo inicial de teste</strong> para medir a temperatura e o interesse.
                </p>

                <div className="p-4 bg-slate-50 border border-slate-150 rounded-xl space-y-3">
                  <h4 className="text-xs font-black text-[#1a237e] flex items-center gap-1.5">
                    <Cpu className="h-4 w-4" />
                    <span>A Engenharia por trás do Algoritmo</span>
                  </h4>
                  <p className="text-[11px] text-slate-550 leading-relaxed">
                    O algoritmo é um computador estatístico cujo único objetivo é reter a atenção do usuário. Ele prioriza e mostra para mais pessoas os posts que obedecem a estes três critérios fundamentais: 
                  </p>

                  <ul className="list-disc pl-4.5 text-[11px] text-slate-500 space-y-2">
                    <li>
                      <strong>Alto Teor de Engajamento:</strong> Conteúdos que recebem cliques de salvamento, compartilhamento em mensagens e comentários profundos de ida e volta.
                    </li>
                    <li>
                      <strong>Tempo de Tela Absoluto (Retenção):</strong> Vídeos curtos que as pessoas assistem até o final (ou repetem) e carrosséis com blocos densos de leitura útil.
                    </li>
                    <li>
                      <strong>Interesse Personalizado:</strong> O algoritmo mapeia o histórico individual da pessoa e correlaciona recomendações de nichos idênticos.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Interactive Engagement Game Simulator Column */}
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-slate-950 border border-slate-900 rounded-2xl p-5 text-white font-sans space-y-4 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF6B35]/5 rounded-full blur-xl pointer-events-none" />
                  
                  <div className="flex justify-between items-center pb-2.5 border-b border-white/5">
                    <div>
                      <span className="text-[9px] font-mono text-slate-450 block uppercase">Simulador de Algoritmo</span>
                      <span className="text-xs font-black">Post de Teste Profissional</span>
                    </div>
                    
                    <button 
                      onClick={handleResetSimulator}
                      className="cursor-pointer text-[9.5px] font-bold text-[#FF6B35] bg-[#FF6B35]/15 border border-[#FF6B35]/30 px-2 py-0.5 rounded hover:bg-[#FF6B35]/25"
                    >
                      Resetar
                    </button>
                  </div>

                  {/* Post Card Layout Preview */}
                  <div className="bg-[#111] border border-slate-850 p-4 rounded-xl space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🧑‍💻</span>
                      <div>
                        <strong className="text-[11.5px] block text-white leading-none">Apostila de Marketing</strong>
                        <span className="text-[9px] text-slate-500 font-mono block">Acaba de publicar</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-350 leading-normal">
                      "Aqui estão 3 segredos simples do Canva que designers seniores com anos de mercado evitam contar aos iniciantes..."
                    </p>
                  </div>

                  {/* Interactive Button Clicks trigger */}
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => handleInteraction("curtidas")}
                      className="cursor-pointer p-2 bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 rounded-lg flex items-center justify-center gap-1.5 transition-all text-[10.5px]"
                    >
                      <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
                      <span>Curtir ({simulatedInteractions.curtidas})</span>
                    </button>
                    <button 
                      onClick={() => handleInteraction("comentarios")}
                      className="cursor-pointer p-2 bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 rounded-lg flex items-center justify-center gap-1.5 transition-all text-[10.5px]"
                    >
                      <MessageCircle className="h-3.5 w-3.5 text-blue-400 fill-blue-400/20" />
                      <span>Comentar ({simulatedInteractions.comentarios})</span>
                    </button>
                    <button 
                      onClick={() => handleInteraction("compartilhar")}
                      className="cursor-pointer p-2 bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 rounded-lg flex items-center justify-center gap-1.5 transition-all text-[10.5px]"
                    >
                      <Share2 className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Enviar ({simulatedInteractions.compartilhar})</span>
                    </button>
                    <button 
                      onClick={() => handleInteraction("salvamento")}
                      className="cursor-pointer p-2 bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 rounded-lg flex items-center justify-center gap-1.5 transition-all text-[10.5px]"
                    >
                      <Bookmark className="h-3.5 w-3.5 text-amber-400 fill-amber-400/20" />
                      <span>Salvar ({simulatedInteractions.salvamento})</span>
                    </button>
                  </div>

                  {/* Immediate Dynamic Alcance Meter */}
                  <div className="bg-gradient-to-r from-emerald-500/10 to-[#1877f2]/10 border border-emerald-500/20 p-3 rounded-xl flex items-center justify-between text-xs">
                    <div className="space-y-0.5">
                      <span className="text-[9.5px] font-mono text-emerald-400 block uppercase tracking-wide">ALCANCE ESTIMADO DE ALTA TRAÇÃO</span>
                      <strong>{simulatedInteractions.alcance} Pessoas Alcançadas</strong>
                    </div>
                    <span className="text-xl">🚀</span>
                  </div>

                </div>
              </div>

            </div>

          </div>
        )}

        {/* TABS 2: PRINCIPAL SOCIAL NETWORKS */}
        {activeTab === "networks" && (
          <div className="space-y-5">
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2.5">
              {PRINCIPALS_NETWORKS.map((platform) => {
                const isActive = platform.name === activePlatform;
                return (
                  <button
                    key={platform.name}
                    onClick={() => setActivePlatform(platform.name)}
                    className={`cursor-pointer p-3 rounded-xl border text-left transition-all relative overflow-hidden flex flex-col justify-between h-[85px] ${
                      isActive
                        ? "border-[#1a237e] bg-[#1a237e]/5 shadow-3xs"
                        : "border-slate-150 hover:bg-slate-50"
                    }`}
                  >
                    <span className="text-[10px] bg-slate-100 text-slate-850 px-1.5 py-0.5 font-bold font-sans rounded w-fit uppercase text-[8px] tracking-wide border ml-auto">
                      {platform.badge}
                    </span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-lg bg-white p-1 rounded-md border shadow-3xs flex items-center justify-center w-7.5 h-7.5 shrink-0">
                        {platform.emoji}
                      </span>
                      <div>
                        <strong className="text-xs block text-slate-800 leading-tight font-sans">{platform.name}</strong>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Platform focus detail panel */}
            <div className={`border rounded-2xl p-5 space-y-4 ${currentPlatformInfo.bgColor}`} style={{ boxShadow: "inset 0 0 25px 0 rgba(0,0,0,0.01)" }}>
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-0.5">
                  <span className="text-[9.5px] font-mono font-bold text-indigo-700 uppercase tracking-widest block">DESTAQUES OPERACIONAIS DA REDE</span>
                  <h4 className="text-base font-black text-slate-800 font-sans flex items-center gap-1.5">
                    <span>{currentPlatformInfo.name}</span>
                    <span>·</span>
                    <span className="text-xs text-slate-450 font-normal italic">Foco: {currentPlatformInfo.focus}</span>
                  </h4>
                </div>
              </div>

              <div className="bg-white border rounded-xl p-4.5">
                <p className="text-xs text-slate-650 leading-relaxed font-sans">
                  <strong>Característica Principal de Conversão:</strong> {currentPlatformInfo.characteristic}
                </p>
              </div>
            </div>

          </div>
        )}

        {/* TABS 3: THE 4 TYPES OF CONTENT */}
        {activeTab === "contents" && (
          <div className="space-y-5">
            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
              🎭 OS 4 PILARES ESTILÍSTICOS DE CONTEÚDO PROFISSIONAL
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CONTENT_TYPES.map((type, idx) => (
                <div key={idx} className="border border-slate-200.5 rounded-2xl p-4.5 space-y-3.5 bg-slate-50/50 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded font-mono font-bold uppercase text-[9px] border ${type.color}`}>
                      <span>{type.icon}</span>
                      <span>{type.label}</span>
                    </span>
                    <p className="text-[11px] text-slate-550 leading-relaxed font-sans">
                      {type.desc}
                    </p>
                  </div>

                  <div className="space-y-3.5 pt-3 border-t border-slate-150">
                    <div className="space-y-1">
                      <span className="text-[8px] font-mono font-bold text-slate-400 uppercase block tracking-wider">EXEMPLO PRÁTICO:</span>
                      <p className="text-[11px] text-slate-700 font-sans font-medium italic leading-relaxed">
                        "{type.example}"
                      </p>
                    </div>

                    <div className="p-2 bg-white border border-slate-150 rounded-lg text-[10px] text-slate-500 font-sans">
                      💡 <strong>Dica de Estratégia:</strong> {type.proTip}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-[#1a237e]/5 border border-[#1a237e]/15 p-4 rounded-xl text-xs text-slate-650 leading-relaxed font-sans text-center italic">
              <strong>Regra de Ouro da Produção Criativa (80/20):</strong> Nunca lote seu Instagram de posts promocionais querendo vender seu peixe o tempo todo. Atraia, ensine e de vez em quando fature.
            </div>

          </div>
        )}

        {/* TABS 4: HOW TO GROW IN SOCIAL NETWORKS */}
        {activeTab === "growth" && (
          <div className="space-y-6">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* How to grow checklists */}
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                  📈 MANUAL DETALHADO DE CRESCIMENTO ORGÂNICO CONSTANTE
                </span>

                <div className="space-y-3 font-sans">
                  {[
                    { headline: "Publique com Consistência Cirúrgica", desc: "A constância calibra o algoritmo. É melhor postar 3 vezes por semana em dias fixos do que lotar um dia e sumir por duas semanas inteiras." },
                    { headline: "Preze pela Limpeza Visual e Imunidade de Ruído", desc: "Use imagens e vídeos nítidos do Canva. Evite elementos borrados, falta de margens ou paletas confusas que afastem a leitura rápida do usuário." },
                    { headline: "Pratique o SAC Ativo (Relacionamento)", desc: "Responda a 100% dos comentários e mensagens privadas que chegarem. Esse engajamento força a plataforma a indexar seu perfil como uma comunidade viva." },
                    { headline: "Crie Conteúdos Utilitários com Iscas de Resolução", desc: "Resolva uma dor clara do leitor por post. Se ele gostar da facilidade ensinada no Canva, o clique no botão de seguir vira consequência lógica." },
                    { headline: "Estude Suas Métricas Internas Mensais", desc: "Verifique quais criativos geraram maior número de salvamentos e cliques. Replique a mesma fórmula e adapte ou corte o que flopou." }
                  ].map((tip, idx) => (
                    <div key={idx} className="flex gap-3 items-start p-3 bg-slate-50 border rounded-xl">
                      <span className="w-5.5 h-5.5 bg-indigo-50 border border-indigo-150 text-[#1a237e] text-xs font-bold rounded-lg shrink-0 flex items-center justify-center mt-0.5">
                        {idx + 1}
                      </span>
                      <div className="min-w-0">
                        <strong className="text-xs block text-slate-800 leading-tight">{tip.headline}</strong>
                        <p className="text-[11px] text-slate-500 mt-1 leading-normal">{tip.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real World Social Media Cycle Example */}
              <div className="space-y-4 flex flex-col justify-between">
                <div className="bg-slate-50 border border-slate-150 rounded-2xl p-5 space-y-4 font-sans">
                  <h4 className="text-xs font-black text-slate-800 flex items-center gap-1.5 pb-2 border-b border-slate-205">
                    <Award className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Ciclo de Sucesso: Prática de Página do Zero</span>
                  </h4>

                  <p className="text-[11.5px] text-slate-600 leading-relaxed">
                    Se você resolver iniciar hoje uma página focada inteiramente em documentar seus dias de estudos do Marketing Digital do Zero:
                  </p>

                  <div className="space-y-3 text-[11px] text-slate-550 leading-normal font-mono">
                    {[
                      { idx: "1", label: "Rotina Diária", p: "Publica uma dica compacta e anotação útil por dia ensinando o que aprendeu." },
                      { idx: "2", label: "Artes no Canva", p: "Usa o Canva para desenhar carrosséis limpos e modernos com texto legível." },
                      { idx: "3", label: "Multi-plataforma", p: "Sobe o material visual no feed do Instagram e na área de artigos do LinkedIn." },
                      { idx: "4", label: "Conversão & Resposta", p: "Troca mensagens com quem comentar, tirando dúvidas e firmando parcerias." },
                      { idx: "5", label: "Análise de Alcance", p: "Observa métricas e anota o post campeão de salvamento para duplicar a dose." }
                    ].map((step, sIdx) => (
                      <div key={sIdx} className="flex gap-2.5">
                        <span className="text-[#1a237e] font-black shrink-0">[{step.idx}]</span>
                        <div className="font-sans text-[11px]">
                          <strong>{step.label}:</strong> <span className="text-slate-500">{step.p}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-emerald-500/5 border border-emerald-500/20 p-4.5 rounded-xl">
                  <p className="text-[10.5px] text-slate-600 italic leading-relaxed font-sans text-center">
                    🚀 Com consistência média de 30 dias de aplicação deste ciclo, você constrói uma audiência e começa a atrair propostas reais de renda extra freelance!
                  </p>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>

      {/* 4. CONCEITOS IMPORTANTES PARA DECORAR GLOSSARY */}
      <div className="bg-slate-950 p-[1px] rounded-2xl relative overflow-hidden">
        <div className="bg-slate-950 text-white p-5 rounded-[15px] space-y-4">
          <div className="flex justify-between items-center pb-2.5 border-b border-white/5">
            <span className="text-[9.5px] font-mono font-bold text-emerald-400 uppercase tracking-widest block">
              📌 CONCEITOS CRUCIAIS PARA DECORAR (MÉTRICAS DO MARKETING)
            </span>
            <span className="text-xs">🔑 Decore Já!</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {[
              { val: "Alcance", color: "text-[#FF6B35]", bg: "bg-[#FF6B35]/10 border-orange-500/10", label: "Volume de Pessoas", p: "Total absoluto de pessoas únicas que visualizaram sua publicação em seus feeds em um determinado período." },
              { val: "Engajamento", color: "text-[#1877F2]", bg: "bg-[#1877F2]/10 border-blue-500/10", label: "Cliques & Interação", p: "Soma das curtidas, comentários ricos, envios por DM e salvamentos efetuados sobre sua mídia." },
              { val: "Seguidores", color: "text-[#00C896]", bg: "bg-[#00C896]/10 border-emerald-500/10", label: "Membros da Tribo", p: "Indivíduos ativos que clicaram para acompanhar seu trabalho e receber sua distribuição prioritária." },
              { val: "Conteúdo Viral", color: "text-[#9C27B0]", bg: "bg-[#9C27B0]/10 border-purple-500/10", label: "Efeito Bola de Neve", p: "Publicação compartilhada de forma tão massiva que explode organicamente bem além da sua base comum de seguidores." }
            ].map((concept, cIdx) => (
              <div key={cIdx} className={`p-3.5 border rounded-xl space-y-1.5 ${concept.bg}`}>
                <div className="flex justify-between items-center">
                  <span className={`text-[12.5px] font-black ${concept.color}`}>{concept.val}</span>
                  <span className="text-[8px] font-mono text-slate-500 uppercase tracking-wider">{concept.label}</span>
                </div>
                <p className="text-[10.5px] text-slate-400 leading-normal font-sans">
                  {concept.p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
