import React, { useState, useEffect } from "react";
import { 
  DollarSign, 
  BookOpen, 
  Smartphone, 
  TrendingUp, 
  Clock, 
  Award, 
  HelpCircle, 
  Heart, 
  Share2, 
  ArrowRight, 
  Sparkles, 
  CheckCircle, 
  ShieldAlert, 
  FileText, 
  ListPlus,
  Play,
  RotateCcw
} from "lucide-react";

interface FormOption {
  id: number;
  title: string;
  badge: string;
  icon: string;
  desc: string;
  example: string;
  pros: string;
  con: string;
}

const FORM_OPTIONS: FormOption[] = [
  {
    id: 1,
    title: "Serviços (Freelancer)",
    badge: "Forma mais rápida",
    icon: "🛠️",
    desc: "Você usa uma habilidade útil para ajudar diretamente negócios ou marcas. Exemplos incluem design, edição de vídeos curtos, copy de textos, atendimento remoto ou gestão básica de redes sociais.",
    example: "Cobrar R$ 400 de um salão de beleza local para criar 12 posts no Canva.",
    pros: "Entrada de caixa quase imediata se souber prospectar de forma simples.",
    con: "Você troca tempo direto por dinheiro. Limite físico de clientes simultâneos."
  },
  {
    id: 2,
    title: "Afiliados",
    badge: "Excelente para iniciar",
    icon: "⚡",
    desc: "Você atua divulgando e recomendando links de produtos físicos ou digitais de outras pessoas e ganha uma porcentagem de comissão por cada venda concretizada.",
    example: "Se afiliar a um curso conceitual sobre finanças e divulgar no seu TikTok.",
    pros: "Não exige criar produtos físicos, suporte complexo ao cliente ou estoque.",
    con: "Depende de saber gerar e nutrir tráfego muito qualificado em lote."
  },
  {
    id: 3,
    title: "Criador de Conteúdo",
    badge: "Sólido a longo prazo",
    icon: "🎭",
    desc: "Você constrói audiência fiel de nicho ao criar posts, vídeos longos ou artigos úteis e monetiza essa atenção com anúncios automáticos, publiposts e parcerias.",
    example: "Página de culinária no Instagram monetizando com posts de marcas.",
    pros: "A autoridade maximizada permite vendas fáceis de qualquer solução futura.",
    con: "Exige meses de produção consistente sem nenhum retorno financeiro inicial."
  },
  {
    id: 4,
    title: "Produtos Digitais (Infoprodutos)",
    badge: "Altamente Escalável",
    icon: "📈",
    desc: "Você embala seu conhecimento de valor em um PDF estruturado (e-book), planilha inteligente, template de Notion ou curso em vídeo e comercializa em massa.",
    example: "Vender um pack estético de templates profissionais do Canva por R$ 47.",
    pros: "Margem de lucro beirando os 95% e vendas recorrentes sem custo de frete.",
    con: "Exige validação prévia de público e conhecimentos mais sólidos em tráfego."
  }
];

export default function MarketingLessonOne() {
  const [activeFormSelected, setActiveFormSelected] = useState<number>(1);
  const [selectedTimelineMonth, setSelectedTimelineMonth] = useState<number>(1);
  const [interactiveLike, setInteractiveLike] = useState<boolean>(false);
  
  // Mission Interactive Notepad State
  const [missionOption, setMissionOption] = useState<string>("");
  const [missionReason, setMissionReason] = useState<string>("");
  const [isMissionSaved, setIsMissionSaved] = useState<boolean>(false);

  useEffect(() => {
    try {
      const savedOption = localStorage.getItem("lesson_one_m_option");
      const savedReason = localStorage.getItem("lesson_one_m_reason");
      if (savedOption && savedReason) {
        setMissionOption(savedOption);
        setMissionReason(savedReason);
        setIsMissionSaved(true);
      }
    } catch {}
  }, []);

  const handleSaveMission = (e: React.FormEvent) => {
    e.preventDefault();
    if (!missionOption || !missionReason.trim()) {
      alert("Por favor, preencha todos os campos do seu bloco de notas!");
      return;
    }
    try {
      localStorage.setItem("lesson_one_m_option", missionOption);
      localStorage.setItem("lesson_one_m_reason", missionReason);
      setIsMissionSaved(true);
      triggerSuccessAudioSfx();
    } catch (err) {
      console.error(err);
    }
  };

  const handleUnlockMission = () => {
    setIsMissionSaved(false);
  };

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
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12); // A5
      
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.16);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.18);
    } catch {}
  };

  const handleInteractiveLikeToggle = () => {
    const nextState = !interactiveLike;
    setInteractiveLike(nextState);
    if (nextState) {
      triggerSuccessAudioSfx();
    }
  };

  const currentOptionInfo = FORM_OPTIONS.find(opt => opt.id === activeFormSelected) || FORM_OPTIONS[0];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-7 relative overflow-hidden transition-all duration-300">
      
      {/* 1. COMPONENT HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-5">
        <div className="space-y-1.5 max-w-xl">
          <div className="inline-flex items-center gap-1.5 bg-[#1a237e]/10 border border-[#1a237e]/25 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-[#1a237e]">
            <Play className="h-3.5 w-3.5 fill-[#1a237e] text-indigo-700 animate-pulse" />
            <span>Lição Básica Inicial</span>
          </div>
          <h2 className="text-base sm:text-lg font-black text-[#1a237e] font-sans tracking-tight leading-snug flex items-center gap-2">
            <span>Lição 1: O Que é Ganhar Dinheiro Online de Verdade?</span>
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed font-sans">
            Mude de vida usando a internet da forma correta. Entenda o racional e elimine ilusões irreais de faturamento fácil sem esforço.
          </p>
        </div>

        {/* Global check badge */}
        <div className="flex items-center gap-1.5 bg-slate-50 border p-2.5 rounded-xl text-[10.5px] font-semibold text-slate-600 font-sans shadow-3xs shrink-0">
          <CheckCircle className="h-4 w-4 text-emerald-500" />
          <span>Foco Prático & Honestidade</span>
        </div>
      </div>

      {/* 2. REAL INTRO BANNER CHATBUBBLE */}
      <div className="bg-gradient-to-br from-[#1a237e]/5 to-indigo-950/5 border border-indigo-950/10 p-5 rounded-2xl space-y-3">
        <p className="text-xs text-slate-700 leading-relaxed font-sans">
          "Se você está aqui, é porque quer mudar de vida usando a internet. E eu te digo: <strong>você tomou a decisão certa de estar aqui hoje.</strong>"
        </p>
        <p className="text-xs text-slate-650 leading-relaxed font-sans">
          Mas antes de qualquer coisa, eu preciso ser totalmente honesto com você — porque a maioria dos cursos superficiais do mercado não fala o que eu vou pontuar agora:
        </p>
        <div className="bg-white border rounded-xl p-3.5 text-xs text-slate-700 font-sans leading-relaxed flex items-center gap-3">
          <span className="text-xl">💡</span>
          <span>Nessa lição inaugural, você vai desmistificar o trabalho digital, entender as 4 metodologias que realmente geram caixa e saber com exatidão quanto tempo leva para obter resultados sólidos.</span>
        </div>
      </div>

      {/* 3. BLOCO 1 — O que é ganhar dinheiro online */}
      <div className="p-5 bg-gradient-to-r from-red-500/5 to-pink-500/5 border border-red-500/10 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-36 h-36 bg-red-500/[0.02] rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <span className="text-2xl bg-white p-2.5 rounded-xl border shrink-0 shadow-3xs">🛑</span>
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold text-red-500 uppercase tracking-widest block">ALERTA DE TRANSPARÊNCIA:</span>
            <strong className="text-xs text-slate-800 font-sans block">Ganhar dinheiro online é TRABALHO REAL — Simples assim.</strong>
            <p className="text-xs text-slate-500 leading-relaxed font-sans">
              Não existe apertar um botão e dinheiro cair magicamente na conta. Não existe sistema mágico robotizado. Não existe robô que trabalha para você enquanto você dorme sozinho — pelo menos não no começo dos estudos.
            </p>
          </div>
        </div>

        <div className="mt-4 p-3.5 bg-white border border-red-500/10 rounded-xl">
          <p className="text-xs text-slate-600 font-sans leading-relaxed">
            <strong>A boa notícia?</strong> O trabalho profissional pode ser conduzido perfeitamente usando apenas seu smartphone de casa, no seu horário disponível. E com persistência média, pode gerar uma renda consideravelmente superior que qualquer emprego tradicional rígido.
          </p>
        </div>
      </div>

      {/* 4. BLOCO 2 — As 4 formas principais de ganhar online (Interactive Tabs) */}
      <div className="space-y-4">
        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
          ⚡ CLIQUE PARA CONHECER AS 4 FORMAS DE ATUAÇÃO REAL:
        </span>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          {FORM_OPTIONS.map((opt) => {
            const isSelected = opt.id === activeFormSelected;
            return (
              <button
                key={opt.id}
                onClick={() => {
                  setActiveFormSelected(opt.id);
                  triggerSuccessAudioSfx();
                }}
                className={`cursor-pointer p-3.5 rounded-xl border text-left transition-all relative overflow-hidden ${
                  isSelected
                    ? "border-[#1a237e] bg-indigo-50/40 shadow-3xs"
                    : "border-slate-150 hover:bg-slate-50"
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xl">{opt.icon}</span>
                  <span className="text-[8px] font-bold font-sans bg-slate-100 border border-slate-200 text-slate-600 px-1 py-0.5 rounded uppercase font-mono">
                    {opt.badge}
                  </span>
                </div>
                <strong className="text-xs text-slate-800 leading-tight block tracking-tight font-sans mt-2">{opt.title}</strong>
              </button>
            );
          })}
        </div>

        {/* Selected tab detailed contents */}
        <div className="bg-slate-50 border border-slate-150 rounded-2xl p-5 space-y-4 transition-all duration-300">
          <div className="flex justify-between items-start flex-wrap gap-2">
            <h4 className="text-xs font-black text-slate-800 font-sans flex items-center gap-2">
              <span>{currentOptionInfo.icon}</span>
              <span>{currentOptionInfo.title}</span>
              <span className="text-[10px] text-indigo-700 bg-indigo-50 px-1.5 py-0.5 border border-indigo-100 font-mono rounded font-bold uppercase">
                {currentOptionInfo.badge}
              </span>
            </h4>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed font-sans">{currentOptionInfo.desc}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1 text-xs">
            <div className="bg-white border rounded-xl p-3 space-y-1">
              <span className="text-[8px] font-mono text-indigo-600 uppercase font-black block tracking-wider">EXEMPLO PRÁTICO:</span>
              <p className="text-slate-700 font-sans italic">"{currentOptionInfo.example}"</p>
            </div>
            
            <div className="bg-white border border-emerald-500/10 rounded-xl p-3 space-y-1">
              <span className="text-[8px] font-mono text-emerald-600 uppercase font-black block tracking-wider">PONTO POSITIVO PRO:</span>
              <p className="text-slate-700 font-sans">{currentOptionInfo.pros}</p>
            </div>

            <div className="bg-white border border-rose-500/10 rounded-xl p-3 space-y-1">
              <span className="text-[8px] font-mono text-rose-600 uppercase font-black block tracking-wider">DESAFIO CON:</span>
              <p className="text-slate-700 font-sans">{currentOptionInfo.con}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. BLOCO 3 — Expectativa real de tempo e resultado (Calculator Style) */}
      <div className="space-y-4">
        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
          📅 SIMULADOR DE ALINHAMENTO DE EXPECTATIVAS (O QUE NINGUÉM CONTA):
        </span>

        <div className="bg-slate-950 text-white rounded-2xl p-5 relative overflow-hidden space-y-4 shadow-inner">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-3 border-b border-white/5">
            <div>
              <span className="text-[9px] text-[#FF6B35] font-mono font-black uppercase tracking-wider block">Estágios Cronológicos Reais</span>
              <h5 className="text-xs font-black">Expectativa versus Esforço Aplicado</h5>
            </div>
            
            <div className="flex gap-1.5 p-1 bg-white/5 border border-white/10 rounded-xl">
              {[1, 3, 6].map((m) => (
                <button
                  key={m}
                  onClick={() => {
                    setSelectedTimelineMonth(m);
                    triggerSuccessAudioSfx();
                  }}
                  className={`cursor-pointer px-3 py-1 rounded-lg text-[10px] font-mono font-bold transition-all ${
                    selectedTimelineMonth === m
                      ? "bg-[#FF6B35] text-slate-950 shadow"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {m === 1 ? "1º Mês" : m === 3 ? "2º-3º Mês" : "A partir do 6º Mês"}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline description view */}
          <div className="space-y-3.5 transition-all">
            {selectedTimelineMonth === 1 && (
              <div className="space-y-3 font-sans">
                <div className="flex items-center gap-2 text-xs font-black text-[#FF6B35]">
                  <span>🌱 ESTÁGIO 1: MÊS DO CADASTRO E DA CONFIGURAÇÃO (Retorno Médio: R$ 0)</span>
                </div>
                <p className="text-xs text-slate-350 leading-relaxed font-normal">
                  No primeiro mês, a maioria absoluta das pessoas não fatura nada — e isso é perfeitamente normal. Este é o mês de <strong>aprender as ferramentas, configurar as contas do Google, desenhar artes no Canva, errar postagens e ajustar sua mentalidade.</strong>
                </p>
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-[10.5px] text-slate-400">
                  ⚠️ <strong>Alerta:</strong> O maior erro de quem desiste é achar que a falta de ganhos imediatos em 20 dias significa que o Marketing Digital flopou. Tenha inteligência emocional!
                </div>
              </div>
            )}

            {selectedTimelineMonth === 3 && (
              <div className="space-y-3 font-sans">
                <div className="flex items-center gap-2 text-xs font-black text-amber-400">
                  <span>🚀 ESTÁGIO 2: PRIMEIRAS SEMENTES GERANDO CAIXA (Retorno Médio: R$ 100 a R$ 500)</span>
                </div>
                <p className="text-xs text-slate-350 leading-relaxed font-normal">
                  Do segundo ao terceiro mês, quem manteve a <strong>consistência diária de 2 horas de estudo + tarefa</strong> começa a visualizar os primeiros pix de comissão do Hotmart ou pagamentos de freela básico de redes sociais.
                </p>
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-[10.5px] text-emerald-400">
                  🏆 <strong>Evidência:</strong> R$ 200 parece pouco, mas é a validação estatística cabal que você conseguiu converter a atenção de alguém na internet usando apenas o celular.
                </div>
              </div>
            )}

            {selectedTimelineMonth === 6 && (
              <div className="space-y-3 font-sans">
                <div className="flex items-center gap-2 text-xs font-black text-emerald-400">
                  <span>🔥 ESTÁGIO 3: GANHOS ESCALÁVEIS DE LIBERDADE (Retorno Médio: R$ 1.500 a R$ 5.000+)</span>
                </div>
                <p className="text-xs text-slate-350 leading-relaxed font-normal">
                  A partir do sexto mês, quem persistiu nos dias de tempestade começa a estruturar e <strong>automatizar campanhas, e acumular portfólio de cases bem-sucedidos.</strong> É neste momento que a renda atinge patamares consideráveis.
                </p>
                <div className="p-3 bg-white/5 border border-white/15 rounded-xl text-[10.5px] text-slate-400">
                  🚲 <strong>Analogia:</strong> Pense assim: você não aprendeu a andar de bicicleta de forma estável no primeiro dia. Ganhar dinheiro na internet exige exatamente o mesmo processo de consolidação de movimentos.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 6. ENCERRAMENTO E MISSÃO ATIVA BLOCK NOTEPAD */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
        <h4 className="text-xs font-black text-slate-800 flex items-center gap-1.5 pb-2 border-b border-slate-205">
          <Award className="h-4 w-4 text-[#1a237e]" />
          <span>📝 Sua Missão Ativa de Consolidação</span>
        </h4>
        
        <p className="text-xs text-slate-650 leading-relaxed font-sans">
          Abra o Bloco de Notas ou digite direto no nosso bloco de consolidação abaixo: qual das 4 formas principais de marketing online mais te gerou interesse agora e explique rapidamente o porquê.
        </p>

        {!isMissionSaved ? (
          <form onSubmit={handleSaveMission} className="space-y-3.5 font-sans">
            <div className="space-y-2">
              <label className="text-[10px] font-mono font-bold text-slate-450 block uppercase">SELECIONE A FORMA DE PREFERÊNCIA:</label>
              <select
                value={missionOption}
                onChange={(e) => setMissionOption(e.target.value)}
                className="w-full bg-white border border-slate-250 rounded-xl p-3 text-xs text-slate-800 font-medium focus:ring-1 focus:ring-indigo-500 font-sans outline-hidden"
              >
                <option value="">-- Clique para selecionar --</option>
                <option value="Serviços (Freelancer)">Serviços (Freelancer, design, social media)</option>
                <option value="Afiliados">Afiliados (recomendar infoprodutos de terceiros)</option>
                <option value="Conteúdo">Criador de Conteúdo (páginas de nicho, anúncios, relevância)</option>
                <option value="Produtos Digitais">Produtos Digitais (e-books, templates, materiais infinitos)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono font-bold text-slate-455 block uppercase">JUSTIFIQUE SUA DECISÃO (O PORQUÊ DE FORMA CLARA):</label>
              <textarea
                value={missionReason}
                onChange={(e) => setMissionReason(e.target.value)}
                placeholder="Exemplo: Gostei mais de serviços porque sei que design básico no Canva é mais rápido para buscar clientes e arrumar a casa primeiro..."
                rows={3}
                className="w-full bg-white border border-slate-250 rounded-xl p-3 text-xs text-slate-800 focus:ring-1 focus:ring-indigo-500 font-sans outline-hidden"
              />
            </div>

            <button
              type="submit"
              className="cursor-pointer w-full bg-[#1a237e] hover:bg-indigo-900 border border-slate-800 text-white font-sans text-xs font-black py-3 rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5"
            >
              <span>Salvar Missão e Marcar como Concluído 🚀</span>
            </button>
          </form>
        ) : (
          <div className="bg-emerald-500/5 border border-emerald-500/25 rounded-xl p-4 space-y-3 font-sans">
            <div className="flex justify-between items-center bg-white border border-emerald-500/10 p-2.5 rounded-lg flex-wrap gap-2">
              <div className="flex items-center gap-1.5">
                <span className="text-base">✓</span>
                <span className="text-xs font-black text-slate-800">Sua Missão está Salva Locamente e Registrada!</span>
              </div>
              <button 
                onClick={handleUnlockMission}
                className="cursor-pointer text-[9.5px] font-bold text-slate-500 hover:text-slate-800 border bg-slate-50 px-2 py-1 rounded"
              >
                Editar Missão
              </button>
            </div>
            
            <div className="space-y-1 bg-white border border-slate-150 p-3.5 rounded-lg">
              <div className="text-[9.5px] font-mono text-slate-400 uppercase">SUA DECISÃO DE FOCO PRINCIPAL:</div>
              <p className="text-xs font-black text-slate-800">{missionOption}</p>
              
              <div className="text-[9.5px] font-mono text-slate-400 uppercase pt-2.5">SEU PORQUÊ DE CONVERSÃO:</div>
              <p className="text-xs text-slate-600 italic leading-relaxed">"{missionReason}"</p>
            </div>
          </div>
        )}
      </div>

      {/* 7. LIKE COMPONENT CONVERSATION ACCENT ROW */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-4 border-t border-slate-100 bg-white">
        <p className="text-[10.5px] text-slate-500 font-sans leading-relaxed text-center sm:text-left">
          Na próxima aula, abordaremos **como identificar golpes online e se manter imune** a armadilhas nocivas do mercado.
        </p>

        <div className="flex items-center gap-2">
          <button
            onClick={handleInteractiveLikeToggle}
            className={`cursor-pointer px-3.5 py-2 rounded-xl text-xs font-bold font-sans transition-all flex items-center gap-1.5 border ${
              interactiveLike
                ? "bg-rose-50 border-rose-200 text-rose-600"
                : "border-slate-205 text-slate-500 hover:text-slate-850"
            }`}
          >
            <Heart className={`h-4 w-4 ${interactiveLike ? "fill-rose-500 text-rose-500" : ""}`} />
            <span>{interactiveLike ? "Deixou LIKE!" : "Deixar Like na Lição"}</span>
          </button>
        </div>
      </div>

    </div>
  );
}
