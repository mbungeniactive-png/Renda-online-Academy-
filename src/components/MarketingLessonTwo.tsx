import React, { useState, useEffect } from "react";
import { 
  ShieldAlert, 
  HelpCircle, 
  TrendingUp, 
  CheckCircle, 
  Search, 
  Info, 
  XOctagon, 
  Heart, 
  Share2, 
  Sparkles, 
  Play, 
  UserX,
  AlertTriangle,
  Lock,
  ThumbsUp,
  Files,
  Cpu
} from "lucide-react";

interface ScamSignal {
  id: string;
  title: string;
  sub: string;
  desc: string;
}

const SCAM_SIGNALS: ScamSignal[] = [
  {
    id: "easy_money",
    title: "1. Promete ganhos altos sem esforço",
    sub: "Utopia Financeira",
    desc: "Qualquer coisa que diz 'ganhe muito dinheiro de forma totalmente automática ou sem fazer nada' é golpe estruturado. Ponto final. Dinheiro honesto e duradouro exige dedicação e trabalho."
  },
  {
    id: "pay_to_work",
    title: "2. Pede dinheiro para você começar a ganhar",
    sub: "Pedágio de Entrada",
    desc: "Se você precisa pagar uma 'taxa de ativação', comprar um kit misterioso ou fazer depósito prévio para ter acesso a um 'painel de tarefas lucrativas' — fuja. Trabalho profissional não cobra do colaborador."
  },
  {
    id: "vague_explanation",
    title: "3. Não explica claramente de onde vem a receita",
    sub: "Confusão Linguística",
    desc: "Você pergunta em que consiste o trabalho real e recebe respostas confusas, áudios enormes sem sentido, ou termos excessivamente complicados. Sistemas legítimos explicam a operação de forma transparente."
  },
  {
    id: "invite_pyramid",
    title: "4. Pressiona para você indicar novos membros",
    sub: "Rede de Indicação",
    desc: "Se o foco principal do modelo de negócios não é vender um produto ou prestar um serviço visível de mercado, mas sim recrutar novos amigos para ganhar comissões em níveis altos, trata-se de uma Pirâmide."
  },
  {
    id: "no_cnpj",
    title: "5. Ausência de CNPJ ativo ou canais regulados",
    sub: "Anonimato Online",
    desc: "Empresas consolidadas possuem CNPJ ativo, termos de privacidade válidos no rodapé do site, suporte visível via e-mail corporativo ou chat. Se a empresa oculta esses dados, não feche contrato de jeito nenhum."
  }
];

export default function MarketingLessonTwo() {
  const [activeTab, setActiveTab] = useState<"signals" | "research" | "comparison">("signals");
  const [selectedSignals, setSelectedSignals] = useState<string[]>([]);
  const [interactiveLike, setInteractiveLike] = useState<boolean>(false);
  
  // Mission Interactive Notepad State
  const [missionOppName, setMissionOppName] = useState<string>("");
  const [missionOppVerdict, setMissionOppVerdict] = useState<string>("real");
  const [missionOppNotes, setMissionOppNotes] = useState<string>("");
  const [isMissionSaved, setIsMissionSaved] = useState<boolean>(false);

  useEffect(() => {
    try {
      const savedOppName = localStorage.getItem("lesson_two_opp_name");
      const savedVerdict = localStorage.getItem("lesson_two_opp_verdict");
      const savedNotes = localStorage.getItem("lesson_two_opp_notes");
      if (savedOppName && savedNotes) {
        setMissionOppName(savedOppName);
        setMissionOppVerdict(savedVerdict || "real");
        setMissionOppNotes(savedNotes);
        setIsMissionSaved(true);
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
      // Arpeggio up effect
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.08); // E5
      osc.frequency.exponentialRampToValueAtTime(1046.5, ctx.currentTime + 0.16); // C6
      
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.22);
    } catch {}
  };

  const toggleSignal = (id: string) => {
    setSelectedSignals(prev => {
      const isExist = prev.includes(id);
      const next = isExist ? prev.filter(item => item !== id) : [...prev, id];
      triggerSuccessAudioSfx();
      return next;
    });
  };

  const handleSaveMission = (e: React.FormEvent) => {
    e.preventDefault();
    if (!missionOppName.trim() || !missionOppNotes.trim()) {
      alert("Por favor, preencha todos os campos da sua pesquisa!");
      return;
    }
    try {
      localStorage.setItem("lesson_two_opp_name", missionOppName);
      localStorage.setItem("lesson_two_opp_verdict", missionOppVerdict);
      localStorage.setItem("lesson_two_opp_notes", missionOppNotes);
      setIsMissionSaved(true);
      triggerSuccessAudioSfx();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditMission = () => {
    setIsMissionSaved(false);
  };

  const handleLikeToggle = () => {
    const nextState = !interactiveLike;
    setInteractiveLike(nextState);
    if (nextState) {
      triggerSuccessAudioSfx();
    }
  };

  // Math for dynamic risk score based on selected signal variables
  const riskPercent = selectedSignals.length * 20;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-7 relative overflow-hidden transition-all duration-300">
      
      {/* 1. HEADER HERO BANNER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-5">
        <div className="space-y-1.5 max-w-xl">
          <div className="inline-flex items-center gap-1.5 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-rose-600">
            <ShieldAlert className="h-3.5 w-3.5 text-rose-600 animate-pulse" />
            <span>Prevenção & Defesa Digital</span>
          </div>
          <h2 className="text-base sm:text-lg font-black text-[#1a237e] font-sans tracking-tight leading-snug">
            Lição 2: Como Evitar Golpes e Armadilhas Virtuais
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed font-sans">
            A internet está cheia de promessas mágicas para tirar seu dinheiro, seu tempo e sua paz. Aprenda a rastrear os sinais de fraude antes de testar qualquer método.
          </p>
        </div>

        {/* Global Security Stamp badge */}
        <div className="flex items-center gap-1.5 bg-slate-50 border p-2.5 rounded-xl text-[10.5px] font-semibold text-slate-600 font-sans shadow-3xs shrink-0">
          <CheckCircle className="h-4 w-4 text-emerald-500" />
          <span>Blindagem 100% Anti-Fraude</span>
        </div>
      </div>

      {/* 2. CHATSTYLE INTRO BRIEF */}
      <div className="bg-gradient-to-br from-indigo-50/50 to-rose-50/30 border border-slate-150 p-5 rounded-2xl space-y-3.5">
        <p className="text-xs text-slate-700 leading-relaxed font-sans font-medium">
          "Fala, pessoal! Bem-vindo à Lição 2 do nosso site de treinamento profissional."
        </p>
        
        <p className="text-xs text-slate-600 leading-relaxed font-sans">
          Na aula anterior você aprendeu o que é ganhar dinheiro online de verdade e quais são as 4 formas principais que funcionam. Hoje eu vou te ensinar algo que pode te salvar de perder dinheiro, tempo e energia — <strong>como identificar golpes e armadilhas antes de cair neles.</strong>
        </p>
        
        <p className="text-xs text-slate-500 italic leading-relaxed font-sans">
          Infelizmente a internet está cheia de pessoas agindo de má-fé que vivem de enganar quem está começando sua jornada. E quanto mais você souber sobre as táticas psicológicas deles, mais protegido e seguro você estará. Bora lá?
        </p>
      </div>

      {/* 3. GATILHOS EXPLICADOS ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { icon: "⏳", name: "A Urgência Artificial", color: "border-red-150 bg-red-500/5", desc: "Expressões como 'Só hoje', 'Últimas vagas do dia', 'Oferta que expira em 10 minutos'. Eles impõem pressa artificial para você agir sob impulso, sem tempo de racionalizar." },
          { icon: "📸", name: "A Prova Social Manipulada", color: "border-amber-150 bg-amber-500/5", desc: "Prints de depósitos milionários manipulados pelo Photoshop, depoimentos cortados de canais de terceiros, vídeos editados alugando carros de luxo e mansões artificiais apenas para impressionar o olhar ingênuo." },
          { icon: "💰", name: "A Promessa de Facilitismo Extremo", color: "border-indigo-150 bg-indigo-500/5", desc: "Frases de gatilho do tipo 'Ganhe R$ 500 por dia sem esforço' ou 'Trabalhe 2 horas semanais e ganhe R$ 15.000'. Eles estudam e mapeiam exatamente o que você gostaria de ouvir na escassez." }
        ].map((gate, gIdx) => (
          <div key={gIdx} className={`p-4 border rounded-xl space-y-2 font-sans ${gate.color} relative overflow-hidden`}>
            <div className="flex items-center gap-2">
              <span className="text-xl bg-white w-7.5 h-7.5 rounded-lg flex items-center justify-center border shadow-3xs shrink-0">{gate.icon}</span>
              <strong className="text-xs text-slate-800 leading-tight font-sans font-black">{gate.name}</strong>
            </div>
            <p className="text-[11px] text-slate-550 leading-relaxed">
              {gate.desc}
            </p>
          </div>
        ))}
      </div>

      {/* 4. OS 5 SINAIS - INTERACTIVE CALCULATOR PANEL */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
              💻 CALCULADORA DE RISCO E 5 SINAIS CLÁSSICOS:
            </span>
            <div className="text-xs text-slate-500 font-sans">
              Selecione quais sinais você detectou na oportunidade que viu recentemente na rede:
            </div>
          </div>

          <div className="flex gap-1 bg-slate-100 p-1 border rounded-lg shrink-0">
            <button
              onClick={() => setActiveTab("signals")}
              className={`cursor-pointer px-2.5 py-1 rounded-md text-[10px] font-bold font-sans transition-all ${
                activeTab === "signals" ? "bg-white text-[#1a237e] shadow-3xs" : "text-slate-500"
              }`}
            >
              Calculadora
            </button>
            <button
              onClick={() => setActiveTab("research")}
              className={`cursor-pointer px-2.5 py-1 rounded-md text-[10px] font-bold font-sans transition-all ${
                activeTab === "research" ? "bg-white text-[#1a237e] shadow-3xs" : "text-slate-500"
              }`}
            >
              Como Pesquisar
            </button>
            <button
              onClick={() => setActiveTab("comparison")}
              className={`cursor-pointer px-2.5 py-1 rounded-md text-[10px] font-bold font-sans transition-all ${
                activeTab === "comparison" ? "bg-white text-[#1a237e] shadow-3xs" : "text-slate-500"
              }`}
            >
              Versus Prático
            </button>
          </div>
        </div>

        {/* WORKSPACE AREA */}
        <div className="border border-slate-205 rounded-2xl bg-slate-50/20 p-5 space-y-5">
          
          {/* TAB 1: CALCULATOR */}
          {activeTab === "signals" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Left signal checkboxes list */}
              <div className="lg:col-span-7 space-y-2.5">
                {SCAM_SIGNALS.map((sig) => {
                  const isChecked = selectedSignals.includes(sig.id);
                  return (
                    <div 
                      key={sig.id}
                      onClick={() => toggleSignal(sig.id)}
                      className={`cursor-pointer p-3 border rounded-xl transition-all flex items-start gap-3.5 ${
                        isChecked 
                          ? "bg-red-500/[0.04] border-red-500/30" 
                          : "bg-white hover:bg-slate-50 border-slate-200"
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                        isChecked ? "bg-red-500 border-red-600 text-white" : "border-slate-300 bg-white"
                      }`}>
                        {isChecked && <span className="text-[10px] font-bold">✕</span>}
                      </div>
                      
                      <div className="min-w-0">
                        <strong className="text-xs text-slate-800 font-sans block font-black leading-tight">{sig.title}</strong>
                        <span className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-wider">{sig.sub}</span>
                        <p className="text-[11px] text-slate-500 font-sans mt-0.5 leading-normal">
                          {sig.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right risk meter results output */}
              <div className="lg:col-span-5 bg-slate-900 border border-slate-800 text-white rounded-xl p-5 space-y-4">
                <div className="pb-2.5 border-b border-white/5">
                  <span className="text-[9.5px] font-mono text-red-400 block uppercase font-bold">Resultados do Algoritmo Anti-Fraude</span>
                  <span className="text-xs font-black">Medidor Estatístico de Risco Real</span>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span>Taxa de Perigo:</span>
                    <span className={riskPercent > 50 ? "text-red-500 font-black" : "text-emerald-400 font-black"}>{riskPercent}%</span>
                  </div>
                  
                  {/* Custom animated simple bar style */}
                  <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-501 ${riskPercent > 50 ? "bg-red-500" : "bg-emerald-400"}`}
                      style={{ width: `${riskPercent}%` }}
                    />
                  </div>
                </div>

                {/* Score dynamic message details */}
                <div className="p-3 bg-white/5 border border-white/5 rounded-lg text-xs leading-relaxed font-sans">
                  {selectedSignals.length === 0 ? (
                    <p className="text-slate-400 text-center py-2">
                       Marque um ou mais sinais ao lado para rodar o veredito de segurança da sua oportunidade de ganhos.
                    </p>
                  ) : selectedSignals.length <= 2 ? (
                    <p className="text-indigo-300">
                      ⚠️ <strong>RISCO MODERADO:</strong> Tenha cautela. Mesmo que existam poucos indícios diretos de golpe, pesquise ativamente CNPJ e Reclame Aqui antes de enviar qualquer centavo de teste.
                    </p>
                  ) : (
                    <p className="text-red-400">
                      🚨 <strong>RISCO CRÍTICO EXTEMAMENTE ALTO:</strong> Fuja imediatamente! Os mecanismos combinam múltiplos gatilhos de captura psicológica. Esta tentativa de faturamento se enquadra em fraude estruturada.
                    </p>
                  )}
                </div>

                <div className="bg-white/5 border border-white/10 p-3 rounded-lg text-[10.5px] text-slate-400 leading-normal font-sans">
                  💡 <strong>Regra Inabalável:</strong> Todo ganho monetário duradouro e sólido provém da troca mútua de valor real (produtos, prestação de serviços reais ou criação direta de valor a terceiros).
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: HOW TO RESEARCH GUIDES */}
          {activeTab === "research" && (
            <div className="space-y-5">
              <div className="bg-white border rounded-2xl p-5 space-y-4">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                  🔍 PROCESSO DE INVESTIGAÇÃO DE 5 MINUTOS (DECORE ESTE ROTEIRO):
                </span>

                <div className="relative border-l border-slate-150 pl-5 ml-2.5 space-y-4">
                  {[
                    { title: "Rastreio Instantâneo no Google", desc: "Pesquise no buscador exatamente o nome do site, infoprodutor ou empresa de finanças seguido das palavras 'golpe', 'não caiam' ou 'reclamação'. Exemplo: 'Empresa X golpe'." },
                    { title: "Auditoria no Reclame Aqui", desc: "Rastreie o cadastro da marca no portal Reclame Aqui. Se houver milhares de queixas de saques travados ou promessas de suporte com respostas ausentes, feche a aba." },
                    { title: "Verificação Formal do CNPJ", desc: "Use geradores oficiais de consulta de CNPJ no site oficial da Receita Federal. Identifique se o CNPJ de fato existe, se a situação cadastral está como 'Ativa' e qual a atividade primária descrita." },
                    { title: "Filtro no YouTube Real", desc: "Assista a vídeos de depoimentos sinceros sobre a comunidade. Evite depoimentos que possuam link de afiliado logo abaixo deles na descrição — costumam ser pagos para promover e elogiar." }
                  ].map((step, sIdx) => (
                    <div key={sIdx} className="relative">
                      <span className="absolute -left-[29px] top-0.5 w-5 h-5 rounded-full border bg-white shadow-3xs flex items-center justify-center text-[10px] font-mono font-black text-slate-700">
                        {sIdx + 1}
                      </span>
                      <div className="space-y-0.5 font-sans">
                        <strong className="text-xs text-slate-800 block leading-tight">{step.title}</strong>
                        <p className="text-[11px] text-slate-500 leading-normal">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: REAL VERSUS SCAM COMPARISON */}
          {activeTab === "comparison" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* SCAM CARD */}
              <div className="bg-rose-500/5 border border-rose-500/20 rounded-2xl p-4.5 space-y-4 flex flex-col justify-between font-sans">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono bg-rose-500 text-white font-black uppercase px-2.5 py-0.5 rounded-full tracking-wider w-fit block">
                    🔴 EXEMPLES DE GOLPE
                  </span>
                  
                  <div className="bg-white border rounded-xl p-3.5 space-y-3">
                    <div className="text-xs font-black text-[#1a237e]">Exemplo 1:</div>
                    <p className="text-[11px] text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-lg border italic">
                      "Entre no nosso grupo VIP de avaliadores de looks hoje, pague uma assinatura de apenas R$ 97 para liberação do saldo acumulativo e aprenda a faturar R$ 5.000 por semana apenas copiando códigos."
                    </p>

                    <div className="text-xs font-black text-[#1a237e] pt-1">Exemplo 2:</div>
                    <p className="text-[11px] text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-lg border italic">
                      "Dobre sua reserva em 7 dias! Nosso robô inteligente faz trading de cripto automaticamente sob risco zero do investidor. Cadastre-se com depósito de largada."
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-red-100/40 border border-red-500/10 text-[10.5px] text-red-700 rounded-lg">
                  💡 <strong>O padrão de fraude:</strong> Promessas vagas de facilidades, exigência impeditiva de dinheiro, e omissão dolosa de qual produto ou esforço técnico opera a engrenagem.
                </div>
              </div>

              {/* REAL OPPORTUNITY CARD */}
              <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-4.5 space-y-4 flex flex-col justify-between font-sans">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono bg-emerald-500 text-white font-black uppercase px-2.5 py-0.5 rounded-full tracking-wider w-fit block">
                    🟢 EXEMPLES DE OPORTUNIDADE REAL
                  </span>

                  <div className="bg-white border rounded-xl p-3.5 space-y-3">
                    <div className="text-xs font-black text-[#1a237e]">Exemplo 1:</div>
                    <p className="text-[11px] text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-lg border italic">
                      "Aprenda técnicas de edição de carrossel no Canva profissional, configure seu perfil ativo nas redes, monte um PDF de portfólio prático e consiga seus primeiros clientes prestando serviços."
                    </p>

                    <div className="text-xs font-black text-[#1a237e] pt-1">Exemplo 2:</div>
                    <p className="text-[11px] text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-lg border italic">
                      "Estude técnicas de atração e comissionamento no Hotmart/Kiwify, aprenda a nutrir tráfego qualificado de visitantes no seu blog, recomende links úteis e ganhe comissões legítimas."
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-emerald-100/40 border border-emerald-500/10 text-[10.5px] text-emerald-800 rounded-lg">
                  💡 <strong>O padrão de sucesso:</strong> Detalhamento transparente do percurso, foco no aprimoramento técnico, e sem promessa bizarra de riquezas automáticas sem dedicação.
                </div>
              </div>

            </div>
          )}

        </div>
      </div>

      {/* 5. MISSION IN NOTEPAD STYLE */}
      <div className="bg-slate-50 border border-slate-250 rounded-2xl p-5 space-y-4">
        <h4 className="text-xs font-black text-slate-800 flex items-center gap-1.5 pb-2 border-b border-slate-205">
          <Info className="h-4 w-4 text-[#1a237e]" />
          <span>📝 Sua Missão Especial: Auditoria de Oportunidades Práticas</span>
        </h4>
        
        <p className="text-xs text-slate-650 leading-relaxed font-sans">
          Mapeie ou pesquise no celular qualquer oportunidade ou sistema de ganhos que você deparou recentemente no feed de redes — pode ser um link enviado no WhatsApp ou postagens patrocinadas. Aplique as regras de investigação e anote as descobertas.
        </p>

        {!isMissionSaved ? (
          <form onSubmit={handleSaveMission} className="space-y-4 font-sans">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[9.5px] font-mono font-bold text-slate-450 block uppercase">NOME/LINK DO SISTEMA AVALIADO:</label>
                <input
                  type="text"
                  value={missionOppName}
                  onChange={(e) => setMissionOppName(e.target.value)}
                  placeholder="Exemplo: Robô Avaliador de Marcas VIP"
                  className="w-full bg-white border border-slate-255 rounded-xl p-3 text-xs text-slate-800 focus:ring-1 focus:ring-indigo-500 font-sans outline-hidden"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[9.5px] font-mono font-bold text-slate-450 block uppercase">SEU DIAGNÓSTICO FINAL SINCERO:</label>
                <select
                  value={missionOppVerdict}
                  onChange={(e) => setMissionOppVerdict(e.target.value)}
                  className="w-full bg-white border border-slate-255 rounded-xl p-3 text-xs text-slate-800 focus:ring-1 focus:ring-indigo-500 font-sans outline-hidden"
                >
                  <option value="scam">🚨 Provável GOLPE / Pirâmide Escura</option>
                  <option value="real">🟢 OPORTUNIDADE REAL Legitima de Mercado</option>
                  <option value="doubt">⚠️ Em dúvida profunda / Aguardando dados</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[9.5px] font-mono font-bold text-slate-450 block uppercase">ANOTAÇÕES, RECLAMAÇÕES OU SINAIS ENCONTRADOS:</label>
              <textarea
                value={missionOppNotes}
                onChange={(e) => setMissionOppNotes(e.target.value)}
                placeholder="Exemplo: No Reclame Aqui eles têm mais de 320 reclamações sem resolução. Além disso, pedem depósitos via pix de R$ 37 para 'liberar o cadastro' inicial, que se enquadra na regra nº 2..."
                rows={3}
                className="w-full bg-white border border-slate-255 rounded-xl p-3 text-xs text-slate-800 focus:ring-1 focus:ring-indigo-500 font-sans outline-hidden"
              />
            </div>

            <button
              type="submit"
              className="cursor-pointer w-full bg-[#1a237e] hover:bg-indigo-900 text-white font-sans text-xs font-black py-3 rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 border border-slate-800"
            >
              <span>Salvar Laudo de Auditoria & Concluir Lição 🚀</span>
            </button>
          </form>
        ) : (
          <div className="bg-emerald-500/5 border border-emerald-500/25 rounded-xl p-4 space-y-3.5 font-sans">
            <div className="flex justify-between items-center bg-white border border-emerald-500/10 p-2.5 rounded-lg flex-wrap gap-2">
              <span className="text-xs font-black text-slate-800 flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                <span>Diagnóstico de Segurança Concluído Localmente!</span>
              </span>
              <button 
                onClick={handleEditMission}
                className="cursor-pointer text-[9.5px] font-bold text-slate-500 hover:text-slate-800 border bg-slate-50 px-2 py-1 rounded"
              >
                Editar Auditoria
              </button>
            </div>

            <div className="bg-white border rounded-xl p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1">
                <span className="text-[8.5px] font-mono text-slate-400 block uppercase">OPORTUNIDADE INVESTIGADA</span>
                <strong className="text-xs text-slate-800 block truncate">{missionOppName}</strong>
              </div>

              <div className="space-y-1">
                <span className="text-[8.5px] font-mono text-slate-400 block uppercase font-bold">VEREDITO DA EXAME</span>
                <span className={`text-[10px] font-bold font-mono px-2 py-0.5 rounded inline-block uppercase ${
                  missionOppVerdict === "scam" 
                    ? "bg-red-50 text-red-650 border border-red-200" 
                    : missionOppVerdict === "real"
                    ? "bg-emerald-50 text-emerald-850 border border-emerald-200"
                    : "bg-amber-50 text-amber-850 border border-amber-200"
                }`}>
                  {missionOppVerdict === "scam" && "🚨 GOLPE / PIRÂMIDE"}
                  {missionOppVerdict === "real" && "🟢 OPORTUNIDADE REAL"}
                  {missionOppVerdict === "doubt" && "⚠️ EM DÚVIDA / RISCO"}
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-[8.5px] font-mono text-slate-400 block uppercase font-bold text-slate-450">RELATÓRIO</span>
                <p className="text-[10.5px] text-slate-550 truncate italic">"{missionOppNotes}"</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 6. FOOTER ACTIONS ROW */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-slate-100 bg-white">
        <p className="text-[10.5px] text-slate-500 font-sans leading-relaxed text-center sm:text-left">
          Na próxima lição abordaremos o mindset de sucesso: **por que as pessoas desistem rápido** do Marketing Digital e como criar novos hábitos práticos diários.
        </p>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleLikeToggle}
            className={`cursor-pointer px-3.5 py-2 rounded-xl text-xs font-bold font-sans transition-all flex items-center gap-1.5 border ${
              interactiveLike
                ? "bg-rose-50 border-rose-220 text-rose-600 animate-pulse"
                : "border-slate-205 text-slate-500 hover:text-slate-850"
            }`}
          >
            <Heart className={`h-4 w-4 ${interactiveLike ? "fill-rose-505 text-rose-505" : ""}`} />
            <span>{interactiveLike ? "Deixou seu Like!" : "Dar Like na Aula 2"}</span>
          </button>
        </div>
      </div>

    </div>
  );
}
