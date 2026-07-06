import React, { useState, useEffect } from "react";
import { 
  Play, 
  CheckCircle, 
  User, 
  Sparkles, 
  Camera, 
  Edit3, 
  Target, 
  AlertCircle, 
  Heart, 
  Share2, 
  Instagram, 
  Tv, 
  Video, 
  Activity, 
  Award,
  BookOpen,
  Smartphone,
  ChevronRight,
  UserCheck,
  CheckCircle2,
  ExternalLink
} from "lucide-react";

interface BioPreset {
  niche: string;
  role: string;
  bioText: string;
  cta: string;
}

const BIO_PRESETS: BioPreset[] = [
  {
    niche: "Freelancer de Design",
    role: "Crio posts e artes para Instagram de pequenos negócios. Peça seu orçamento no direct.",
    bioText: "🎨 Designer Social Media\n🚀 Valorize a estética da sua marca\n💬 Direct aberto para orçamentos e dúvidas",
    cta: "Direct do Instagram / WhatsApp"
  },
  {
    niche: "Freelancer de Redação (Textos)",
    role: "Escrevo artigos e legendas para marcas que querem vender mais. DM aberta.",
    bioText: "✍️ Redator & Copywriter\n📈 Palavras que geram conexão e vendas\n📥 Envie uma mensagem para alinhar ideias",
    cta: "E-mail Profissional / DM"
  },
  {
    niche: "Criador de Conteúdo do Zero",
    role: "Te ensino a ganhar dinheiro online do zero. Conteúdo gratuito todo dia.",
    bioText: "🧑‍💻 Aprendizado Digital\n🚀 Te ensino de forma simples do absoluto zero\n📚 Guia e conteúdos nos stories diários",
    cta: "Linktree de Conteúdo Grátis"
  },
  {
    niche: "Edição de Vídeos Rápidos",
    role: "Edito Reels e Shorts que prendem a atenção do espectador. Orçamentos por mensagem.",
    bioText: "🎥 Editor de Reels/Shorts\n⚡ Vídeos dinâmicos com alta retenção de público\n📩 Solicite seu portfólio no WhatsApp",
    cta: "Catálogo do WhatsApp Business"
  }
];

export default function MarketingLessonFive() {
  const [activePresetIndex, setActivePresetIndex] = useState<number>(0);
  const [selectedNetwork, setSelectedNetwork] = useState<"instagram" | "tiktok" | "youtube">("instagram");
  const [previewName, setPreviewName] = useState<string>("Seu Nome");
  const [interactiveLike, setInteractiveLike] = useState<boolean>(false);

  // Profile Checklist State
  const [profileSteps, setProfileSteps] = useState({
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false
  });

  // Save/Load checked steps
  useEffect(() => {
    try {
      const savedSteps = localStorage.getItem("lesson_five_profile_steps");
      if (savedSteps) {
        setProfileSteps(JSON.parse(savedSteps));
      }
    } catch {}
  }, []);

  const triggerAudioSfx = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";
      
      // Upward double pitch
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.08); // G5
      
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.18);
    } catch {}
  };

  const handleStepToggle = (stepKey: keyof typeof profileSteps) => {
    const nextSteps = {
      ...profileSteps,
      [stepKey]: !profileSteps[stepKey]
    };
    setProfileSteps(nextSteps);
    triggerAudioSfx();
    try {
      localStorage.setItem("lesson_five_profile_steps", JSON.stringify(nextSteps));
    } catch {}
  };

  const handleLikeToggle = () => {
    const nextState = !interactiveLike;
    setInteractiveLike(nextState);
    if (nextState) {
      triggerAudioSfx();
    }
  };

  const activePreset = BIO_PRESETS[activePresetIndex] || BIO_PRESETS[0];

  return (
    <div id="marketing-lesson-five" className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-7 relative overflow-hidden transition-all duration-300">
      
      {/* 1. HEADER HERO BANNER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-5">
        <div className="space-y-1.5 max-w-xl font-sans">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 animate-pulse">
            <UserCheck className="h-3.5 w-3.5 text-emerald-600" />
            <span>Fechamento do Módulo 1 🎓</span>
          </div>
          <h2 className="text-base sm:text-lg font-black text-[#1a237e] tracking-tight leading-snug">
            Lição 5: Como Criar sua Presença Profissional Online
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            Uma coisa é estar de passagem pela internet. Outra coisa totalmente diferente é ser levado a sério e gerar propostas ativas de clientes. Aprenda a desenhar seu novo cartão de visitas digital.
          </p>
        </div>

        {/* Status Stamp badge */}
        <div className="flex items-center gap-1.5 bg-slate-50 border p-2.5 rounded-xl text-[10.5px] font-semibold text-slate-600 font-sans shadow-3xs shrink-0">
          <CheckCircle className="h-4 w-4 text-emerald-500" />
          <span>Módulo 1 Concluído! 🏆</span>
        </div>
      </div>

      {/* 2. CHATSTYLE INTRO BRIEF */}
      <div className="bg-gradient-to-br from-indigo-50/50 to-emerald-50/20 border border-slate-150 p-5 rounded-2xl space-y-3.5">
        <p className="text-xs text-slate-700 leading-relaxed font-sans font-semibold">
          "Fala, pessoal! Bem-vindo à Lição 5 — a última lição do Módulo 1!"
        </p>

        <p className="text-xs text-slate-650 leading-relaxed font-sans">
          Nas aulas anteriores você aprendeu o que é de fato ganhar dinheiro online, as melhores formas de evitar armadilhas, o mindset exato de repetições diárias e todo o pacote tecnológico essencial de ferramentas grátis.
        </p>

        <p className="text-xs text-slate-500 font-sans leading-relaxed italic">
          Hoje nós fechamos este primeiro ciclo de aprendizado com chave de ouro: você aprenderá a <strong>moldar uma marca virtual que projeta autoridade e credibilidade de alto valor</strong> desde as primeiras horas. Pronto para avançar? Segue conosco!
        </p>
      </div>

      {/* 3. POR QUE PRESENÇA IMPORTA (ANALOGIA DAS DUAS PORTAS) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
        
        {/* Profile A - Amateur */}
        <div className="border border-red-200 bg-red-500/[0.02] p-4.5 rounded-2xl space-y-3 relative">
          <div className="flex items-center justify-between pb-2 border-b border-red-100">
            <span className="text-[10px] font-mono bg-red-50 text-red-600 font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-red-200">
              ❌ Perfil Amador (Não Atrai)
            </span>
            <span className="text-xs">Foto de Festa 🍺</span>
          </div>
          
          <div className="space-y-1.5 bg-white border rounded-xl p-3">
            <strong className="text-slate-800 font-bold block">Bio no Feed:</strong>
            <p className="text-slate-500 italic">"Apaixonada pela vida, mãe, esposa e guerreira, vivendo intensamente um dia de cada vez..."</p>
          </div>
          
          <p className="text-slate-550 leading-normal">
            <strong>Resultado Real de Mercado:</strong> Mesmo que essa pessoa possua um excelente talento no Canva, a falta de dados funcionais e de canal de contato impede que os clientes a procurem.
          </p>
        </div>

        {/* Profile B - Professional */}
        <div className="border border-emerald-250 bg-emerald-500/[0.02] p-4.5 rounded-2xl space-y-3 relative">
          <div className="flex items-center justify-between pb-2 border-b border-emerald-200">
            <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-emerald-200">
              🟢 Perfil Profissional (Contratado)
            </span>
            <span className="text-xs">Foto com boa luz ☀️</span>
          </div>

          <div className="space-y-1.5 bg-white border rounded-xl p-3">
            <strong className="text-slate-800 font-bold block">Bio no Feed:</strong>
            <p className="text-slate-600 italic">"Crio carrosséis e posts modernos para mídias sociais no Instagram de clínicas de saúde. Peça orçamentos nas DMs."</p>
          </div>

          <p className="text-slate-550 leading-normal">
            <strong>Resultado Real de Mercado:</strong> Transmite profissionalismo ao instante. O contratante entende em segundos de que forma você resolve a dor dele e onde estão as artes prévias dele.
          </p>
        </div>

      </div>

      {/* 4. BLOCO 2 — FOTO DE PERFIL PROFISSIONAL RULES */}
      <div className="p-5.5 bg-slate-50 border rounded-2xl space-y-4 font-sans">
        <h4 className="text-xs font-black text-slate-805 flex items-center gap-1.5 pb-2 border-b">
          <Camera className="h-4 w-4 text-indigo-700 animate-pulse" />
          <span>A Teoria da Foto de Alta Conversão</span>
        </h4>

        <p className="text-xs text-slate-650 leading-relaxed">
          Você não necessita de retratistas caros ou equipamentos de elite. Com a câmera do seu celular atual e seguindo 3 regras físicas simples você atinge o padrão corporativo:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4.5 pt-1">
          {[
            { icon: "☀️", title: "1. Iluminação Natural", p: "Posicione seu rosto perto de uma janela ou fonte de luz do dia. Evita sombras duras nos olhos e melhora 200% a nitidez da foto." },
            { icon: "🧱", title: "2. Fundo Neutro Despoluído", p: "Escolha uma parede lisa (branca, cinza) ou use o modo retrato de desfoque. Evite bagunças do ambiente que distraiam a visão." },
            { icon: "😊", title: "3. Expressão de Confiança", p: "Encare a lente diretamente. Um sorriso leve, amigável e simpático atrai clientes e elimina a imagem de robô frio de rede." }
          ].map((r, rIdx) => (
            <div key={rIdx} className="bg-white border rounded-xl p-3.5 space-y-1.5">
              <span className="text-xl">{r.icon}</span>
              <strong className="text-xs text-slate-800 block font-bold leading-tight">{r.title}</strong>
              <p className="text-[11.px] text-slate-500 leading-normal">{r.p}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. BLOCO 3 — INTERACTIVE BIO GENERATOR SANDBOX */}
      <div className="space-y-4">
        <div>
          <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase tracking-widest">
            📝 SIMULADOR E GERADOR DE BIO INTELIGENTE DE ALTA CONVERSÃO:
          </span>
          <p className="text-xs text-slate-505 font-sans mt-0.5">
            Clique nas opções de nichos abaixo e veja como a fórmula se reconfigura para sua página:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          
          {/* Presets List selectors */}
          <div className="lg:col-span-4 space-y-2">
            {BIO_PRESETS.map((preset, pIdx) => {
              const isSelected = pIdx === activePresetIndex;
              return (
                <button
                  key={pIdx}
                  onClick={() => {
                    setActivePresetIndex(pIdx);
                    triggerAudioSfx();
                  }}
                  className={`cursor-pointer w-full text-left p-3 border rounded-xl transition-all leading-tight font-sans ${
                    isSelected 
                      ? "border-[#1a237e] bg-indigo-50/40 shadow-3xs text-[#1a237e] font-bold" 
                      : "bg-white hover:bg-slate-50 border-slate-150 text-slate-650"
                  }`}
                >
                  <div className="text-[11.5px]">{preset.niche}</div>
                  <span className="text-[9px] text-slate-400 font-mono block mt-0.5 uppercase tracking-wide">Fórmula de Enquadramento</span>
                </button>
              );
            })}
          </div>

          {/* Interactive display render card resembling Instagram header preview */}
          <div className="lg:col-span-8 bg-slate-950 text-white rounded-2xl p-5.5 space-y-4 relative overflow-hidden font-sans">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex justify-between items-center pb-2.5 border-b border-white/5 flex-wrap gap-2">
              <div>
                <span className="text-[8px] font-mono text-emerald-400 block uppercase tracking-wider font-bold">PREVIEW DENTRO DA REDE SOCIAL</span>
                <span className="text-xs font-black">Molde de Distribuição e Visualização</span>
              </div>

              {/* Quick input field to test customized name */}
              <input
                type="text"
                value={previewName}
                onChange={(e) => {
                  setPreviewName(e.target.value);
                }}
                className="bg-white/5 border border-white/10 px-2 py-1 rounded text-[10.5px] font-sans text-white focus:outline-hidden text-center placeholder-slate-400 max-w-[120px]"
                placeholder="Seu Nome Profissional"
              />
            </div>

            {/* Profile Avatar & Metadata headers */}
            <div className="flex items-center gap-4">
              <span className="text-3xl bg-white/10 p-2 rounded-full border border-white/10 w-14 h-14 flex items-center justify-center shrink-0">
                👤
              </span>
              <div className="min-w-0">
                <strong className="text-sm block truncate text-[#FF6B35] font-black">{previewName}</strong>
                <span className="text-[10px] text-slate-400 block font-mono">Fórmula: O que você faz • Para quem • CTA</span>
              </div>
            </div>

            {/* Simulated Bio Output Area */}
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl space-y-2">
              <span className="text-[9px] font-mono text-slate-500 block uppercase tracking-widest font-black">BIO GERANTE DE PROPOSTAS EXTRAS:</span>
              <p className="text-xs text-slate-100 whitespace-pre-line leading-relaxed font-sans italic">
                {activePreset.bioText}
              </p>
            </div>

            {/* Link in bio display */}
            <div className="bg-emerald-500/15 border border-emerald-500/20 px-3.5 py-2.5 rounded-lg text-[10.5px] text-emerald-300 flex items-center justify-between font-mono">
              <span className="flex items-center gap-1.5">
                <ExternalLink className="h-3 w-3 shrink-0 text-emerald-400" />
                <span>Link da Bio: (Seu Whats ou Portfólio no Drive)</span>
              </span>
              <span className="text-xs">🔗</span>
            </div>
          </div>

        </div>
      </div>

      {/* 6. BLOCO 4 — QUAL REDE SOCIAL FOCAR (TABS VIEW) */}
      <div className="space-y-4">
        <div>
          <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase tracking-widest">
            📱 ANÁLISE DE CANAIS DE DISTRIBUIÇÃO ORGÂNICA INITIAL:
          </span>
          <p className="text-xs text-slate-500 font-sans mt-0.5">
            Não tente cobrir todas as redes ao mesmo tempo de início. Domine um canal por 90 dias antes de expandir. Qual escolher?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4.5 font-sans">
          
          {/* Instagram Option */}
          <div className="border border-slate-200 rounded-2xl p-4.5 space-y-3.5 bg-slate-50/30 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1 bg-pink-50 border border-pink-100 text-pink-700 font-mono font-bold uppercase text-[9.5px] px-2.5 py-0.5 rounded">
                <Instagram className="h-3 w-3" />
                <span>Instagram (Recomendado)</span>
              </span>
              <p className="text-[11.5px] text-slate-550 leading-relaxed">
                Excelente se você quer atender clientes locais tradicionais (empresas locais, médicos, estética), prefere posts em formato de imagem estática ou carrosséis informativos, e quer nutrir direct diários.
              </p>
            </div>
            <div className="bg-white p-2.5 border rounded-lg text-[10.5px] text-slate-500 leading-normal">
              📌 <strong>Fórmula de Tração:</strong> 3 postagens úteis por semana + respostas sinceras aos comentários e stores funcionais.
            </div>
          </div>

          {/* TikTok Option */}
          <div className="border border-slate-200 rounded-2xl p-4.5 space-y-3.5 bg-slate-50/30 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1 bg-cyan-50 border border-cyan-100 text-cyan-700 font-mono font-bold uppercase text-[9.5px] px-2.5 py-0.5 rounded">
                <Video className="h-3.5 w-3.5" />
                <span>TikTok (Crescimento)</span>
              </span>
              <p className="text-[11.5px] text-slate-550 leading-relaxed">
                Perfeito para buscar viralização massiva sem precisar acumular base inicial de seguidores de parentesco. Favorece edições ágeis no CapCut, humor estratégico de escritório e ganchos em 3 segundos.
              </p>
            </div>
            <div className="bg-white p-2.5 border rounded-lg text-[10.5px] text-slate-500 leading-normal">
              📌 <strong>Fórmula de Tração:</strong> Vídeos verticais de retention alta legíveis e utilização de referências musicais em alta.
            </div>
          </div>

          {/* YouTube Option */}
          <div className="border border-slate-200 rounded-2xl p-4.5 space-y-3.5 bg-slate-50/30 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1 bg-red-50 border border-red-100 text-red-700 font-mono font-bold uppercase text-[9.5px] px-2.5 py-0.5 rounded">
                <Tv className="h-3.5 w-3.5" />
                <span>YouTube (Autoridade)</span>
              </span>
              <p className="text-[11.5px] text-slate-550 leading-relaxed">
                Ideal se você visa desenvolver tutoriais densos de longa retenção no mercado e quer rentabilizar com anúncios automáticos a médio e longo prazo.
              </p>
            </div>
            <div className="bg-white p-2.5 border rounded-lg text-[10.5px] text-slate-500 leading-normal">
              📌 <strong>Fórmula de Tração:</strong> Capas apelativas (Thumbnails), títulos em formato de gancho de curiosidade, e constância cronológica.
            </div>
          </div>

        </div>
      </div>

      {/* 7. CHECKLIST INTEGRAL FOR COMPLETING MODULE 1 */}
      <div id="module-one-final-checklist" className="bg-slate-950 text-white rounded-3xl p-5.5 space-y-4 relative overflow-hidden font-sans">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-white/5 pb-3">
          <div>
            <span className="text-[9.5px] font-mono text-emerald-400 block uppercase tracking-wider font-extrabold">CHECKLIST COMPLEMENTAR EXCLUSIVA</span>
            <h5 className="text-xs font-black">5 Passos para Montar sua Presença do Absoluto Zero</h5>
          </div>

          <span className="text-[11px] font-mono bg-white/5 px-2.5 py-1 rounded font-bold">
            {Object.values(profileSteps).filter(Boolean).length} de 5 OK 
          </span>
        </div>

        {/* Checked state progress indicator */}
        <div className="space-y-1">
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-400 transition-all duration-300"
              style={{ width: `${(Object.values(profileSteps).filter(Boolean).length / 5) * 100}%` }}
            />
          </div>
        </div>

        {/* Checklist rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1.5 font-sans text-xs">
          {[
            { key: "step1", text: "Passo 1: Alterar painel para Conta Comercial/Profissional.", desc: "Garante visualização aberta das suas mídias e painel de visitas." },
            { key: "step2", text: "Passo 2: Anexar sua Foto Profissional bem iluminada.", desc: "Garante que o visitante sinta acolhimento humano e proximidade real." },
            { key: "step3", text: "Passo 3: Salvar sua nova Bio estruturada e de foco claro.", desc: "Comunica sua utilidade central e para quem você cria de imediato." },
            { key: "step4", text: "Passo 4: Sobe 3 primeiras postagens ricas no feed inicial.", desc: "Evita o estigma do perfil fantasma ou desativado de mentira." },
            { key: "step5", text: "Passo 5: Adicionar Link de atendimento (Whats ou Drive).", desc: "A ponte lógica para faturar seu primeiro pagamento do cliente." }
          ].map((item) => {
            const isChecked = profileSteps[item.key as keyof typeof profileSteps];
            return (
              <div 
                key={item.key}
                onClick={() => handleStepToggle(item.key as any)}
                className={`cursor-pointer p-3.5 border rounded-xl transition-all flex items-start gap-4 ${
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
                  <strong className={`text-xs block ${isChecked ? "text-slate-400 line-through" : "text-white"}`}>
                    {item.text}
                  </strong>
                  <p className="text-[10.5px] text-slate-400 mt-0.5 leading-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {Object.values(profileSteps).every(Boolean) && (
          <div className="bg-emerald-555/10 border border-emerald-500/35 p-3.5 rounded-2xl flex items-center gap-3 text-xs text-emerald-400 animate-pulse mt-1">
            <span className="text-xl">🎓</span>
            <div>
              <strong>MÓDULO LARGADA INICIAL CONCLUÍDO!</strong> Você pavimentou toda a infraestrutura necessária de segurança, foco analítico de rede e marcas. Siga com confiança para o Módulo 2 do Freelancing!
            </div>
          </div>
        )}
      </div>

      {/* 8. FOOTER WITH LIKE BUTTON AND CONCLUDING ACTION */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-slate-105 bg-white">
        <p className="text-[10.5px] text-slate-505 font-sans leading-relaxed text-center sm:text-left">
          <strong>Parabéns de verdade!</strong> Você concluiu o Módulo 1. No Módulo 2 abordaremos como conseguir clientes reais prestando serviços online.
        </p>

        <div className="flex items-center gap-2">
          <button
            onClick={handleLikeToggle}
            className={`cursor-pointer px-3.5 py-2 rounded-xl text-xs font-bold font-sans transition-all flex items-center gap-1.5 border ${
              interactiveLike
                ? "bg-rose-50 border-rose-225 text-rose-600 animate-pulse"
                : "border-slate-205 text-slate-500 hover:text-slate-850"
            }`}
          >
            <Heart className={`h-4 w-4 ${interactiveLike ? "fill-rose-500 text-rose-505" : ""}`} />
            <span>{interactiveLike ? "Deixou LIKE total! ✓" : "Dar Like no Fim do Módulo 1"}</span>
          </button>
        </div>
      </div>

    </div>
  );
}
