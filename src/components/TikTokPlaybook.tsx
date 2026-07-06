/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from "react";
import { 
  Calendar, 
  Sparkles, 
  Copy, 
  Check, 
  TrendingUp, 
  Video, 
  FileText, 
  BookOpen, 
  DollarSign, 
  ShoppingBag, 
  ThumbsUp,
  Target,
  ArrowRight,
  Info,
  Layers,
  Flame,
  Star,
  ExternalLink,
  Zap,
  CheckCircle2,
  Lock,
  Award,
  Search,
  BookOpenCheck,
  Smartphone,
  Users,
  Cpu,
  Tv,
  HelpCircle,
  Briefcase,
  Play,
  Lightbulb,
  PiggyBank,
  CheckCircle,
  CheckSquare,
  Globe,
  Sliders,
  Palette,
  User
} from "lucide-react";
import PremiumPromoUnit from "./PremiumPromoUnit";
import MyProfile from "./MyProfile";
import StudyRoutine from "./StudyRoutine";
import MarketingStarterKit from "./MarketingStarterKit";
import MarketingPracticalGuides from "./MarketingPracticalGuides";
import MarketingSocialNetworks from "./MarketingSocialNetworks";
import MarketingLessonOne from "./MarketingLessonOne";
import MarketingLessonTwo from "./MarketingLessonTwo";
import MarketingLessonThree from "./MarketingLessonThree";
import MarketingLessonFour from "./MarketingLessonFour";
import MarketingLessonFive from "./MarketingLessonFive";
import MarketingProgressionPath from "./MarketingProgressionPath";

// Define the shape of our master playbook sections
interface PlaybookSection {
  id: string;
  title: string;
  category: "inicio" | "monetizacao" | "roteiros" | "nichos" | "ebooks" | "motivacional" | "recorrencia" | "patrocinados" | "perfil";
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  content: React.ReactNode;
}

export default function TikTokPlaybook() {
  const [activeSectionId, setActiveSectionId] = useState<string>("plano-viral-30-dias");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Core copy component helper
  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2500);
  };

  // State for interactive features
  const [checklistState, setChecklistState] = useState<Record<string, boolean>>({
    hook: false,
    resolution: false,
    subtitles: false,
    audio: false,
    nosingular: false,
    hashtags: false,
    cta: false,
  });

  const toggleChecklist = (id: string) => {
    setChecklistState(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Infoproduto vs Micro SaaS Calculator State
  const [valVendaUnica, setValVendaUnica] = useState<number>(37.00);
  const [numVendasUnicas, setNumVendasUnicas] = useState<number>(120);
  const [valRecorrencia, setValRecorrencia] = useState<number>(19.90);
  const [numAssinantes, setNumAssinantes] = useState<number>(150);

  // Finanças Pessoais Planner Checkboxes
  const [financeMonths, setFinanceMonths] = useState<Record<string, boolean>>({
    dividas: false,
    reserva: false,
    aporte: false,
    planilha: false,
    cortar: false,
  });

  // AI Voice Over Generator Tool Simulator State
  const [syntheticScript, setSyntheticScript] = useState<string>(
    "A maioria das pessoas passa horas apenas consumindo entretenimento rápido de feed, mas poucos minutos aprendendo algo que pode de fato mudar sua vida."
  );
  const [syntheticVoice, setSyntheticVoice] = useState<string>("thiago-premium");
  const [generatedVoiceClip, setGeneratedVoiceClip] = useState<boolean>(false);
  const [isGeneratingVoice, setIsGeneratingVoice] = useState<boolean>(false);

  const triggerVoiceGeneration = () => {
    setIsGeneratingVoice(true);
    setTimeout(() => {
      setIsGeneratingVoice(false);
      setGeneratedVoiceClip(true);
    }, 1800);
  };

  // Progress checkboxes for 30 Days Plan
  const [progress, setProgress] = useState<Record<string, boolean>>({
    "d1-7": false,
    "d8-15": false,
    "d16-23": false,
    "d24-30": false,
  });

  const handleToggleProgress = (id: string) => {
    setProgress(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // State for interactive browsing of digital marketing areas
  const [activeMarketingArea, setActiveMarketingArea] = useState<number>(1);
  // State for interactive browsing of digital marketing risks
  const [activeRiskTab, setActiveRiskTab] = useState<string>("freelancers");

  // Categories metadata
  const categories = {
    perfil: { label: "Meu Painel do Aluno", color: "bg-indigo-150 text-indigo-900 border-indigo-250 animate-pulse" },
    inicio: { label: "Guia de Início Rápido", color: "bg-blue-100 text-blue-800 border-blue-200" },
    monetizacao: { label: "Monetização Global", color: "bg-emerald-100 text-emerald-800 border-emerald-200" },
    roteiros: { label: "Loops & Roteiros Virais", color: "bg-amber-100 text-amber-850 border-amber-200" },
    nichos: { label: "Nichos Milionários 2026", color: "bg-purple-100 text-purple-850 border-purple-200" },
    ebooks: { label: "Máquina de eBooks", color: "bg-rose-100 text-rose-850 border-rose-250" },
    motivacional: { label: "Motivacional de Elite", color: "bg-indigo-150 text-indigo-900 border-indigo-200" },
    recorrencia: { label: "Recorrência e Finanças", color: "bg-slate-100 text-slate-800 border-slate-200" },
    patrocinados: { label: "Sugestões Patrocinadas", color: "bg-[#00c853]/15 text-[#00c853] border-emerald-200" },
  };

  // Complete List of Chapters and Playbook Content mapped beautiful React Nodes
  const sectionsList: PlaybookSection[] = useMemo(() => [
    {
      id: "meu-perfil",
      title: "Meu Perfil",
      category: "perfil",
      icon: User,
      badge: "Novo",
      content: <MyProfile />
    },
    {
      id: "plano-viral-30-dias",
      title: "Plano Viral de 30 Dias",
      category: "inicio",
      icon: Calendar,
      badge: "Popular",
      content: (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-[#1a237e] flex items-center gap-2">
              <Flame className="h-5 w-5 text-[#00c853] animate-pulse" />
              <span>Plano Viral de 30 Dias: O Cronograma Rápido</span>
            </h3>
            <p className="text-slate-650 text-sm leading-relaxed font-sans">
              Se você quer começar do zero e construir uma presença forte na internet, focar em vídeos curtos (TikTok, Reels e YouTube Shorts) é uma das formas mais rápidas de alcançar pessoas sem precisar investir nenhum centavo em anúncios.
            </p>
            
            <div className="bg-[#00c853]/5 border border-[#00c853]/20 rounded-xl p-4 flex items-start gap-4">
              <Zap className="h-5 w-5 text-[#00c853] shrink-0 mt-0.5" />
              <div className="text-xs text-slate-700 leading-normal font-sans">
                <strong>Regra de Ouro:</strong> O algoritmo do TikTok é impulsionado por consistência estatística. Postar com frequência educa os robôs de distribuição sobre quem é o seu público de elite.
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
            <h4 className="text-base font-bold text-[#1a237e] border-b pb-2">Cronograma Prático de Execução</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  id: "d1-7",
                  num: "01",
                  dias: "Dias 1–7: Início & Aquecimento",
                  desc: "Criar conta no TikTok, Instagram e canal de YouTube Shorts. Publicar 3 vídeos por dia de forma consistente espaçados por no mínimo 3 horas.",
                  tip: "Dica: Comente em 10 vídeos do mesmo nicho para avisar o algoritmo sobre suas preferências."
                },
                {
                  id: "d8-15",
                  num: "02",
                  dias: "Dias 8–15: Testes & Ajustes",
                  desc: "Continuar com 3 vídeos diários, testando diferentes tipos de ganchos rápidos e analisando quais recebem maior Watch Time (retenção).",
                  tip: "Dica: Estude os vídeos que bateram mais de 10k visualizações e entenda onde as pessoas pararam."
                },
                {
                  id: "d16-23",
                  num: "03",
                  dias: "Dias 16–23: Multiplicação",
                  desc: "Repetir os formatos e as edições de áudio que deram resultado de visualizações. Dobrar os ganchos assertivos nos primeiros 3 segundos.",
                  tip: "Dica: Insira legendas dinâmicas coloridas no centro do vídeo para aumentar a retenção."
                },
                {
                  id: "d24-30",
                  num: "04",
                  dias: "Dias 24–30: Conversão Ativa",
                  desc: "Criar formatos de vídeo em série de episódios, fazer chamadas fortes e emocionais para seguir a página e plugar sua Bio de vendas.",
                  tip: "Dica: Ofereça um eBook de entrada por um preço acessível (R$ 19,90) para extrair os primeiros compradores."
                }
              ].map((step, idx) => {
                const isCheck = !!progress[step.id];
                return (
                  <div 
                    key={idx}
                    onClick={() => handleToggleProgress(step.id)}
                    className={`p-5 rounded-xl border transition-all cursor-pointer relative overflow-hidden select-none ${
                      isCheck 
                        ? "bg-emerald-50/50 border-[#00c853]" 
                        : "bg-slate-50 border-slate-250/70 hover:border-slate-350"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-xs font-extrabold text-[#1a237e] bg-slate-100 border px-2.5 py-0.5 rounded">
                        Etapa {step.num}
                      </span>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                        isCheck ? "bg-[#00c853] border-[#00c853] text-white" : "border-slate-300 bg-white"
                      }`}>
                        {isCheck && <Check className="h-3 w-3 stroke-[3]" />}
                      </div>
                    </div>
                    <h5 className="text-xs font-bold text-slate-800 font-sans mt-3">{step.dias}</h5>
                    <p className="text-[11px] text-slate-500 font-sans mt-1 leading-relaxed">
                      {step.desc}
                    </p>
                    <p className="text-[10px] text-emerald-700 font-bold font-sans mt-2.5 bg-emerald-500/10 p-1.5 rounded border border-emerald-500/10">
                      {step.tip}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h4 className="text-sm font-bold text-[#1a237e]">Dicas Práticas de Elite Diárias:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-3 bg-slate-50 border border-slate-150 rounded-xl">
                <span className="text-xs font-bold text-slate-705 block mb-1">🚀 Motivação Diária</span>
                <span className="text-[10px] text-slate-500 font-sans">Forneça doses constantes de superação e rotinas inabaláveis.</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-150 rounded-xl">
                <span className="text-xs font-bold text-slate-705 block mb-1">💪 Mentalidade Forte</span>
                <span className="text-[10px] text-slate-500 font-sans">Force o espectador a refletir sobre os erros cotidianos comuns que o impedem de lucrar.</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-150 rounded-xl">
                <span className="text-xs font-bold text-slate-705 block mb-1">📈 Evolução Constante</span>
                <span className="text-[10px] text-slate-500 font-sans">Siga em melhoria contínua de voz sintética, imagem cinematográfica e legenda.</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "metodo-simples-criacao",
      title: "Método Simples de Criação",
      category: "inicio",
      icon: Video,
      content: (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-[#1a237e]">Método Simples de Criação em 3 Passos</h3>
            <p className="text-slate-650 text-sm leading-relaxed font-sans">
              Criar conteúdo viral envolve 3 passos principais e lógicos: <strong>Definir objetivo</strong> do vídeo de maneira nítida, <strong>Entender o seu público</strong> alvo profundamente e <strong>Produzir valor imediato</strong> e memorável.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-slate-50/50 border border-slate-200 rounded-xl text-center">
                <div className="w-8 h-8 rounded-full bg-[#1a237e]/5 text-[#1a237e] font-mono font-bold flex items-center justify-center mx-auto mb-2 text-xs">Pilar 1</div>
                <span className="text-xs font-bold text-[#1a237e] block mb-1">Definir Objetivo</span>
                <span className="text-[10px] text-slate-500 font-sans leading-relaxed">Qual ação direta você espera que o visitante tome? Seguir, curtir ou clicar no link?</span>
              </div>
              <div className="p-4 bg-slate-50/50 border border-slate-200 rounded-xl text-center">
                <div className="w-8 h-8 rounded-full bg-[#00c853]/5 text-[#00c853] font-mono font-bold flex items-center justify-center mx-auto mb-2 text-xs">Pilar 2</div>
                <span className="text-xs font-bold text-[#1a237e] block mb-1">Entender o Público</span>
                <span className="text-[10px] text-slate-500 font-sans leading-relaxed">Quais são as dores, as frustrações recorrentes e as ambições profundas que eles guardam?</span>
              </div>
              <div className="p-4 bg-slate-50/50 border border-slate-200 rounded-xl text-center">
                <div className="w-8 h-8 rounded-full bg-amber-500/5 text-amber-600 font-mono font-bold flex items-center justify-center mx-auto mb-2 text-xs">Pilar 3</div>
                <span className="text-xs font-bold text-[#1a237e] block mb-1">Produzir valor útil</span>
                <span className="text-[10px] text-slate-500 font-sans leading-relaxed">Entregue resoluções rápidas e insights que transformam a percepção na hora.</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h4 className="text-base font-bold text-[#1a237e] border-b pb-2 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#00c853]" />
              <span>Sua Rota de 6 Demarcações Técnicas</span>
            </h4>
            <div className="space-y-3">
              {[
                { step: "1", title: "Escolha um Tema Rentável", desc: "Sobre o que as pessoas procuram desesperadamente na web? Assuntos que resolvem dores urgentes: Marketing, Academia, Finanças, Emagrecimento, Tecnologia ou Estilo de Vida." },
                { step: "2", title: "Defina o Formato do Feed", desc: "Adaptar vídeos em lotes verticais de 9:16 de 15 a 45 segundos. Também estude postagens carrossel estáticas de alta interação com listas curtas no Instagram." },
                { step: "3", title: "Use a Fórmula Infalível (CTA/Gancho/Valor)", desc: "Gancho: Prenda em 3s (dor profunda). Valor: Mostre a resposta em listas curtas. Chamada: 'Clique no botão abaixo para ter acesso completo'." },
                { step: "4", title: "Modelos Rápidos e Populares", desc: "Lista de Erros Críticos, Dicas Ocultas, Comparativos Práticos ou Historias Pessoais fotorrealistas de superação." },
                { step: "5", title: "Priorize Frequência ao Invés de Perfeição", desc: "O algoritmo premia volume no início para testar amostragem de público. Poste 3 peças de valor do que uma peça polida por mês." },
                { step: "6", title: "Equipe o seu Laboratório Prático", desc: "Canva (para baners rápidos), CapCut (edições velozes no celular), Notion (roteiros) e ChatGPT/Gemini (ideias e ganchos de persuasão)." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-3 bg-slate-50 rounded-xl border border-slate-150">
                  <span className="font-mono text-xs font-extrabold text-[#00c853] bg-[#00c853]/10 border border-[#00c853]/25 w-7 h-7 flex items-center justify-center rounded-lg shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h5 className="text-xs font-bold text-[#1a237e] font-sans">{item.title}</h5>
                    <p className="text-[11px] text-slate-500 font-sans leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: "vender-ebooks-sem-aparecer",
      title: "Como Vender eBooks (Sem Aparecer)",
      category: "ebooks",
      icon: BookOpen,
      badge: "Passo a Passo",
      content: (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-[#1a237e]">Vender eBooks Sem Aparecer</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-sans">
              Escrever e comercializar manuais digitais em formato digital é um dos negócios mais rentáveis e sustentáveis na internet devido à **margem de lucro líquido perto de 100%**. Você não precisa lidar com estoque físico e a entrega é 100% automatizada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-3">
              <span className="text-xs font-bold text-[#1a237e] bg-slate-100 border px-2 py-0.5 rounded">
                Passo 1: Criar o Conteúdo Otimizado
              </span>
              <p className="text-[11px] text-slate-550 font-sans leading-relaxed">
                Mapeie soluções claras para problemas reais de um nicho específico. Digite seu material de forma elegante no Google Docs ou Word e depois exporte para PDF através do Canva utilizando um excelente template visual.
              </p>
            </div>
            <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-3">
              <span className="text-xs font-bold text-[#1a237e] bg-indigo-50 border px-2 py-0.5 rounded">
                Passo 2: Escolher a Plataforma de Pagamento
              </span>
              <p className="text-[11px] text-slate-550 font-sans leading-relaxed">
                Cadastre seu material digital de forma rápida e segura em processadores nacionais e globais eficientes tais como: Hotmart, Kiwify, Eduzz, ou Monetizze. Eles lidam com envio do arquivo, imposto, proteção e checkout automatizado.
              </p>
            </div>
          </div>

          {/* Preset prices visual showcase */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
            <h4 className="text-xs font-bold text-[#1a237e] uppercase tracking-wider">Tornando a Precificação Estratégica:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 bg-slate-50 rounded-lg text-center border">
                <span className="text-xs font-black text-slate-700 block">Ebook Simples</span>
                <span className="text-xs text-[#00c853] font-bold font-mono">R$ 19,90 a R$ 47,00</span>
                <span className="text-[9px] text-slate-400 block mt-1">Geralmente manuais de até 20 páginas focados em uma única solução rápida.</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg text-center border">
                <span className="text-xs font-black text-slate-700 block">Manuais Completos</span>
                <span className="text-xs text-[#00c853] font-bold font-mono">R$ 47,00 a R$ 97,00</span>
                <span className="text-[9px] text-slate-400 block mt-1">Guias técnicos avançados contendo listas de prompts ou táticas.</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg text-center border">
                <span className="text-xs font-black text-slate-700 block">Kits Ebook + Bônus</span>
                <span className="text-xs text-[#00c853] font-bold font-mono">R$ 97,00 a R$ 197,00</span>
                <span className="text-[9px] text-slate-400 block mt-1">Inclui o PDF principal acompanhado de templates prontos ou planilhas.</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "modelo-ebook-pronto-adaptar",
      title: "Modelo de eBook Pronto para Adaptar",
      category: "ebooks",
      icon: BookOpenCheck,
      content: (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-[#1a237e]">Estrutura Pronta de eBook para Copiar</h3>
            <p className="text-slate-650 text-sm leading-relaxed font-sans">
              Economize tempo. Criamos uma estrutura de estrutura profissional em alta conversão focada no nicho que mais cresce: **"Como Monetizar com Inteligência Artificial Pelo Celular"**.
            </p>
          </div>

          <div className="bg-indigo-950 text-indigo-100 rounded-2xl p-6 sm:p-8 space-y-4 font-mono shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <span className="text-xs font-bold text-brand-green">TEMPLATE SUMÁRIO DE EBOOK</span>
              <button
                onClick={() => copyToClipboard(
                  `Ebook Sugerido: "30 Formas de Ganhar Dinheiro com Inteligência Artificial e Celular"\n\nSUMÁRIO EXECUTIVO:\n- Introdução: A Revolução Digital Oculta\n- Capítulo 1: O Seu Laboratório Prático de Inteligências Artificiais Gratuitas\n- Capítulo 2: Métodos de Geração Rápida de Conteúdos Sem Aparecer\n- Capítulo 3: Segredos de Tráfego Orgânico com Vídeos de Alta Conversão\n- Capítulo 4: Monetização de Afiliados Exclusivos Pelo Celular\n- Capítulo 5: O Guia Técnico do Prestador de Serviços Moderno (Escalando Vendas)",`, 
                  "ebook-outline-copied"
                )}
                className="bg-white/10 hover:bg-white/20 text-white text-[11px] px-3 py-1.5 rounded flex items-center gap-1.5 cursor-pointer"
              >
                {copiedText === "ebook-outline-copied" ? <Check className="h-4 w-4 text-[#00c853]" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedText === "ebook-outline-copied" ? "Copiado!" : "Copiar Sumário"}</span>
              </button>
            </div>

            <div className="space-y-3.5 text-xs text-indigo-200">
              <p className="text-sm font-bold text-white"><span className="text-[#00c853]">EBook Sugerido:</span> "30 Formas de Ganhar Dinheiro com Inteligência Artificial e Celular"</p>
              
              <div className="space-y-2 pt-2 border-t border-white/5">
                <span className="text-[10px] text-slate-400 block uppercase">Capítulos Mapeados:</span>
                <p><strong>• Introdução:</strong> A Nova Era Digital Pelo Smartphone</p>
                <p><strong>• Capítulo 1:</strong> O Seu Laboratório de Ferramentas IA Práticas Gratuitas</p>
                <p><strong>• Capítulo 2:</strong> Segredos dos Canais Dark e Edições Descomplicadas</p>
                <p><strong>• Capítulo 3:</strong> Segredo Técnico para Reter Público Até o Fim</p>
                <p><strong>• Capítulo 4:</strong> Como Vender sem Investimentos Iniciais (Tráfego de Bio)</p>
                <p><strong>• Capítulo 5:</strong> Venda de Serviços Rápidos em Plataformas Freelancers</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "guia-pratico-ganhar-dinheiro-tiktok",
      title: "Guia Prático: Roteiro Completo de Renda",
      category: "monetizacao",
      icon: DollarSign,
      content: (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-[#1a237e]">Como Ganhar Dinheiro Real com TikTok em 2026</h3>
            <p className="text-slate-650 text-sm leading-relaxed font-sans">
              O TikTok não é apenas um portal de dancinhas ou entretenimento passivo. Trata-se de uma **gigantesca rede de captação de clientes a custo zero**, onde você distribui roteiros virais e envia pessoas aquecidas direto para o seu caixa digital.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-xs font-black text-[#1a237e] block mb-1">💸 1. Programa Criativo Tiktok Beta</span>
                <span className="text-[11px] text-slate-500 font-sans leading-relaxed">
                  O TikTok paga por visualizações qualificadas em vídeos que ultrapassam 1 minuto de duração. Ganhos médios de US$ 0.15 a US$ 0.30 por cada 1.000 visualizações (RPM).
                </span>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-xs font-black text-[#1a237e] block mb-1">🎁 2. Infoprodutos e Manuais Digitais</span>
                <span className="text-[11px] text-slate-500 font-sans leading-relaxed">
                  Posicione links rápidos para eBooks simples na sua biografia do perfil. Com 10k visualizações, você consegue converter dezenas de vendas diretas orgânicas de R$ 19,90.
                </span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "como-criar-pagina-de-vendas",
      title: "Como Criar uma Página de Vendas",
      category: "ebooks",
      icon: Target,
      content: (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-[#1a237e]">Arquitetura da Página de Vendas de Alta Conversão</h3>
            <p className="text-slate-650 text-sm leading-relaxed font-sans">
              Para transformar seguidores curiosos de vídeos curtos em compradores fiéis, você necessita de uma estrutura robusta de persuasão rápida. Veja a hierarquia estruturada do sucesso:
            </p>

            <div className="space-y-3 pt-2">
              {[
                { r: "1", title: "A Headline Fatal (Título Principal)", desc: "Abra com uma grande promessa ou uma dor contundente. Exemplo: 'Descubra como criar sua primeira renda online usando apenas o seu celular nos próximos 30 dias de forma simples.'" },
                { r: "2", title: "O Vídeo Contundente ou Imagem do Ebook", desc: "Apresente um mock-up 3D atraente do eBook para tangibilizar o produto digital ao consumidor." },
                { r: "3", title: "As 3 Dores Principais Mapeadas", desc: "Mostre que você compreende a rotina do leitor. Diga que cansou das mentiras da internet e do trabalho tradicional sem perspectiva." },
                { r: "4", title: "Apresente o Método do eBook", desc: "Mostre de que forma o conteúdo vai resolver a dor passo a passo sem encheção de linguiça." },
                { r: "5", title: "Botão Chamativo da Compra (CTA)", desc: "Link direto ao checkout da Host/Kiwify. 'SIM! QUERO COMEÇAR AGORA' em cor de destaque (verde ou laranja)." },
                { r: "6", title: "Garantias e FAQ Emocional", desc: "Forneça 7 dias para devolução imediata para remover toda desconfiança natural do comprador novo." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-3 bg-slate-50/70 border border-slate-200 rounded-xl items-start">
                  <span className="w-6 h-6 rounded-full bg-[#1a237e] text-white flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                    {item.r}
                  </span>
                  <div>
                    <h5 className="text-xs font-black text-[#1a237e] font-sans">{item.title}</h5>
                    <p className="text-[11px] text-slate-500 font-sans leading-normal mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: "como-ganhar-dinheiro-mundo-inteiro",
      title: "Ganhos Globais (Dólares & Euros)",
      category: "monetizacao",
      icon: Globe,
      content: (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-[#1a237e]">TikTok Global: Lucros em Moeda Forte</h3>
            <p className="text-slate-650 text-sm leading-relaxed font-sans">
              Sabia que é possível receber em moedas fortes (como dólares e euros) morando no Brasil? O **Programa Criativo TikTok Beta** fora da América Latina remunera cerca de 5 vezes mais por conta da valorização cambial.
            </p>

            <div className="bg-emerald-500/10 border border-[#00c853]/30 rounded-xl p-4 space-y-2">
              <span className="text-xs font-bold text-[#00c853] font-mono block uppercase">Como Jogar esse Jogo do Zero:</span>
              <ul className="text-xs text-slate-700 space-y-2 list-emerald pl-1 font-sans">
                <li>• Adquira chips pré-pagos americanos (eSim como Holafly) ou utilize conexões proxies/VPN profissionais dedicadas ao criar o seu perfil inicial.</li>
                <li>• Configure a localização original da conta no território dos Estados Unidos ou de países europeus elegíveis de forma impecável.</li>
                <li>• Realize os saques integrando contas Wise ou Payoneer diretamente ao painel financeiro oficial.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "mito-viralizar-tiktok",
      title: "O Mito de 'Dizer ao TikTok'",
      category: "roteiros",
      icon: HelpCircle,
      content: (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-[#1a237e]">Chega de Placebo: Desmistificando Recursos de Viralização</h3>
            <p className="text-slate-650 text-sm leading-relaxed font-sans">
              Provavelmente você já viu gurus dizendo para você mandar e-mails ao suporte secreto do TikTok, usar hashtags místicas específicas ou mudar chaves ocultas em configurações ocultas na sua conta para 'forçar' a viralização imediata do vídeo.
            </p>
            <div className="bg-red-500/10 border border-red-500/30 text-red-8D0 p-4 rounded-xl text-xs space-y-2 font-sans">
              <strong className="block text-red-700 uppercase">ISSO É UM MITO COMPLETO!</strong>
              <p>O algoritmo do TikTok é uma máquina matemática e neutra altamente qualificada de inteligência computacional. Ele não liga para truques placebo. Ele só analisa duas coisas com ferro e fogo:</p>
              <ol className="list-decimal pl-5 space-y-1.5 pt-1 text-slate-700">
                <li><strong>Taxa de Retenção de Vídeo (Watch Time):</strong> Do total de pessoas que pararam no seu vídeo, quantas ficaram até o fim sem dar scroll imediato?</li>
                <li><strong>Retenção dos Primeiros 3 Segundos:</strong> O seu gancho foi poderoso o suficiente para frear o scroll desenfreado do polegar do usuário?</li>
              </ol>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "guia-freelancer-sites-planos",
      title: "Guia Freelancer Independente",
      category: "monetizacao",
      icon: Briefcase,
      content: (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-[#1a237e]">Melhores Portais de Freelancing Global</h3>
            <p className="text-slate-650 text-sm leading-relaxed font-sans">
              Excelente rota de transição rápida. Preste serviços rápidos de alta utilidade técnica em sites de contratação de talentos freelancers e tenha renda recorrente estável de forma online.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-xl border">
                <span className="text-xs font-black text-[#1a237e] block mb-1">💼 Portais Globais Elegíveis</span>
                <p className="text-[11px] text-slate-500 font-sans leading-normal">
                  Visite e registre seu perfil profissional nesses sites: <strong>Upwork.com</strong>, <strong>Fiverr.com</strong>, <strong>Guru.com</strong>, e a rede latinoamericana <strong>Workana.com</strong>.
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border">
                <span className="text-xs font-black text-[#1a237e] block mb-1">🌟 Microtarefas Rápidas Seguras</span>
                <p className="text-[11px] text-slate-500 font-sans leading-normal">
                  Venda pacotes fáceis de legendas rápidas de vídeos do CapCut ou tradução de roteiros com Inteligência Artificial para criadores internacionais.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "checklist-infalivel-antes-de-postar",
      title: "Checklist Antes de Postar Seu Vídeo",
      category: "roteiros",
      icon: BookOpen,
      content: (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-[#1a237e]">Checklist Infalível Antes de Publicar</h3>
            <p className="text-slate-650 text-xs font-sans">
              Evite desperdiçar suas visualizações preciosas. Marque todas as caixas de verificação fundamentais abaixo antes de acionar o botão oficial de postagem do vídeo.
            </p>

            <div className="space-y-2.5 pt-2">
              {[
                { id: "hook", label: "O gancho visual e falado nos primeiros 3 segundos entrega uma forte dor profunda do meu público?" },
                { id: "resolution", label: "O vídeo foi exportado em excelente qualidade resolução FULL HD (1080p, 60fps)?" },
                { id: "subtitles", label: "As legendas dinâmicas estão centralizadas, em alto contraste e longe das margens de sobreposição de ícones do TikTok?" },
                { id: "audio", label: "O áudio do locutor está nítido, limpo da captação e levemente mais alto que a trilha sonora de fundo?" },
                { id: "nosingular", label: "Garantido que usei áudios ou reflexões sonoras que estão atualmente em alta nas mídias?" },
                { id: "hashtags", label: "Deixei apenas 3 a 4 hashtags estritamente ligadas à temática de nicho para segmentação correta?" },
                { id: "cta", label: "O fechamento do vídeo propõe um comando rápido e claro para seguir ou ir ao link especial?" }
              ].map((item, idx) => {
                const checked = !!checklistState[item.id];
                return (
                  <div 
                    key={idx}
                    onClick={() => toggleChecklist(item.id)}
                    className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer select-none transition-all ${
                      checked ? "bg-emerald-50/50 border-[#00c853] text-slate-400 line-through" : "bg-slate-50 border-slate-150 hover:border-slate-300 text-slate-700"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 transition-colors ${
                      checked ? "bg-[#00c853] border-[#00c853] text-white" : "border-slate-300 bg-white"
                    }`}>
                      {checked && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                    </div>
                    <span className="text-xs font-sans font-medium">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )
    },
    {
      id: "nichos-bombando-2026",
      title: "Nichos que Vão Bombar em 2026",
      category: "nichos",
      icon: Cpu,
      badge: "Tendência",
      content: (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-[#1a237e]">Os Nichos Mais Lucrativos para 2026/2027</h3>
            <p className="text-slate-650 text-sm leading-relaxed font-sans">
              Nem todos os nichos pagam o mesmo ou têm a mesma facilidade de venda. Alguns assuntos retêm muito mais o público maduro que de fato possui cartão de crédito liberado para compras rápidas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 rounded-xl border space-y-2">
                <span className="text-xs font-bold text-slate-705 block">Nicho de Inteligência Artificial</span>
                <p className="text-[11px] text-slate-500 font-sans leading-relaxed">
                  Altíssima demanda e apelo visual assustador. Ensine as pessoas a criarem sites rápidos, dublagens fotorrealistas e lucrar sem expor o rosto.
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border space-y-2">
                <span className="text-xs font-bold text-slate-705 block">Nicho Saúde, Conexão & Longevidade</span>
                <p className="text-[11px] text-slate-500 font-sans leading-relaxed">
                  Treinos funcionais curtos em casa, receitas fitness sem esforço, desenvolvimento de rotinas de foco extremo.
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border space-y-2">
                <span className="text-xs font-bold text-slate-705 block">Nicho Finanças & Renda Online</span>
                <p className="text-[11px] text-slate-500 font-sans leading-relaxed">
                  Explicação de modelos de freelancers internacionais, caminhos para receber em moedas fortes e construção de renda passiva recorrente.
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border space-y-2">
                <span className="text-xs font-bold text-slate-705 block">Nicho Comportamental & Sigma</span>
                <p className="text-[11px] text-slate-500 font-sans leading-relaxed">
                  Desenvolvimento pessoal focado para jovens do público masculino, autoaperfeiçoamento silencioso com referências intelectuais.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "saude-fitness-nicho-dominar",
      title: "Dominando Saúde & Fitness",
      category: "nichos",
      icon: Award,
      content: (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-[#1a237e]">Estratégia Saúde & Fitness</h3>
            <p className="text-slate-650 text-sm leading-relaxed font-sans">
              O nicho de melhora corporal é atemporal. Use materiais de vídeos cinematográficos royalty-free (como Pexels ou Storyblocks) de preparações culinárias, treinos funcionais intensos de musculação ou rotinas saudáveis.
            </p>

            <div className="bg-[#1a237e]/5 border p-5 rounded-xl space-y-3">
              <span className="text-xs font-bold text-[#1a237e] uppercase font-mono block">Nomes Prontos de Páginas de Sucesso:</span>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-650 font-sans font-medium">
                <div>• Vida Ativa Pro</div>
                <div>• Forma Dinâmica</div>
                <div>• Foco e Tracionamento</div>
                <div>• Longevidade Corporal</div>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-slate-750 block">Roteiro Otimizado Pronto para Gravação/Voz IA:</span>
              <div className="bg-slate-50 p-4 border rounded-xl text-xs font-sans text-slate-700 italic relative">
                "Gancho: Se você tem mais de 25 anos e ainda desrespeita o seu sono, pare e assista isso agora. <br className="my-1" />
                Dica Real: Dormir menos de 7 horas decola seus níveis de cortisol, sabotando ganho de massa magra e acumulando gorduras inflamadas na cintura. <br className="my-1" />
                Ação: Siga nossa página de metas para receber guias funcionais diários de performance."
                <button
                  onClick={() => copyToClipboard('Se você tem mais de 25 anos...', 'fitness-script-copied')}
                  className="absolute bottom-2 right-2 text-[#1a237e] hover:text-[#00c853] text-[9px] font-bold font-sans flex items-center gap-0.5 bg-white border px-1.5 py-0.5 rounded cursor-pointer"
                >
                  {copiedText === 'fitness-script-copied' ? "Copiado!" : "Copiar"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "inteligencia-artificial-nicho-como",
      title: "Dominando Inteligência Artificial",
      category: "nichos",
      icon: Cpu,
      content: (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-[#1a237e]">Planejamento de Inteligência Artificial</h3>
            <p className="text-slate-650 text-sm leading-relaxed font-sans">
              Seja o canal de referência que ensina a usar inteligência artificial para automatizar tarefas diárias e de trabalho no celular ou desktop.
            </p>

            <div className="bg-emerald-500/5 border border-emerald-500/20 p-5 rounded-xl space-y-3">
              <span className="text-xs font-bold text-[#00c853] uppercase font-mono block">Calendário Prático Simplificado</span>
              <ul className="text-xs text-slate-705 space-y-2 list-emerald pl-1 font-sans">
                <li>• <strong>Dias 1-10:</strong> Tutoriais bem explicados de ferramentas de conversão de texto brutas em imagens incríveis grátis.</li>
                <li>• <strong>Dias 11-20:</strong> Como criar modelos de locutores virtuais fotorrealistas em vídeo sem expor seu rosto real.</li>
                <li>• <strong>Dias 21-30:</strong> Métodos de saque rápido prestando serviços simples a empresas de e-commerce.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "ganhar-dinheiro-online-nicho",
      title: "Dominando Ganhar Dinheiro Online",
      category: "nichos",
      icon: DollarSign,
      content: (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-[#1a237e]">Calendário 7 Dias Ganhar Dinheiro Online</h3>
            <p className="text-slate-650 text-xs sm:text-sm leading-relaxed font-sans">
              A melhor maneira de reter audiência nesse nicho é fugindo de promessas de cassinos, jogos duvidosos ou falcatruas e focar em **trabalho real internacional sustentável**.
            </p>

            <div className="space-y-3 pt-2">
              {[
                { dia: "Dia 1", title: "Entendendo o Mercado Freelancer Internacional", desc: "Mostre de forma clara como funciona o pagamento em dólares de tarefas cotidianas no Upwork." },
                { dia: "Dia 2", title: "Como Criar um Perfil Altamente Atrativo do Zero", desc: "Configure fotos legíveis, títulos assertivos e portfólios elegantes usando o assistente Canva." },
                { dia: "Dia 3", title: "Identificando Serviços Ocultos Mais Simples", desc: "Remoção de fundo de fotos de catálogo de moda ou legendagem de vídeos curtos CapCut." },
                { dia: "Dia 4", title: "Propostas Persuasivas que Fecham Clientes Rápidos", desc: "Template de texto de pitch inicial mostrando o valor técnico e garantindo prazos curtos." },
                { dia: "Dia 5", title: "Acelerando Entregas com Inteligência Artificial", desc: "Como usar ferramentas de inteligência para revisar a gramática de peças de texto traduzidas." },
                { dia: "Dia 6", title: "Planejando Saques Seguros em Moeda Forte", desc: "Fluxo integrado de recebimentos através de plataformas confiáveis como Wise ou Stripe." },
                { dia: "Dia 7", title: "Escalando para os Primeiros Mil Dólares na Web", desc: "Como consolidar clientes frequentes e reter projetos de longo prazo de assessoria social media." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-3 bg-slate-50 border rounded-xl">
                  <span className="font-mono text-[10px] font-bold text-[#1a237e] bg-slate-100 border px-2 py-0.5 rounded shrink-0">
                    {item.dia}
                  </span>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800 font-sans">{item.title}</h5>
                    <p className="text-[11px] text-slate-500 font-sans mt-0.5 leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: "roteiro-viral-afiliado-vendas",
      title: "Roteiro Viral: Venda como Afiliado",
      category: "roteiros",
      icon: ThumbsUp,
      content: (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-[#1a237e]">Roteiro Viral focado em Vendas Diretas</h3>
            <p className="text-slate-650 text-sm leading-relaxed font-sans">
              Copie este roteiro exato estruturado com gatilhos cognitivos de urgência e alta escassez para vender qualquer comissão em formato digital.
            </p>

            <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl font-mono text-xs space-y-4 relative shadow-sm">
              <span className="text-[9px] bg-[#00c853] text-white px-2 py-0.5 rounded font-extrabold uppercase">ROTEIRO COMERCIAL AFILIADOS</span>
              <p className="leading-relaxed">
                <strong>Gancho:</strong> "Se você está usando o seu celular de forma diária apenas para dar scroll passivo nesse feed, está jogando rios de dinheiro no lixo de forma burra." <br className="my-1" />
                <strong>Desenvolvimento:</strong> "Enquanto a maioria apenas assiste vídeos de piadas de mau gosto, criadores silenciosos usam aplicativos simples e gratuitos para arrumar contatos freelancers fora do país e ganhar em notas de dólar todos os dias." <br className="my-1" />
                <strong>Oferta Direta:</strong> "Nós mapeamos as 30 melhores tarefas sem expor seu rosto e reunimos tudo no guia prático de início passo a passo na bio. Pegue o seu link especial na biografia da minha conta antes que essa promoção acabe."
              </p>
              <button
                onClick={() => copyToClipboard(
                  `Gancho: "Se você está usando o seu celular de forma diária apenas para dar scroll passivo nesse feed, está jogando rios de dinheiro no lixo de forma burra."\nDesenvolvimento: "Enquanto a maioria apenas assiste vídeos de piadas de mau gosto, criadores silenciosos usam aplicativos simples e gratuitos para arrumar contatos freelancers fora do país e ganhar em notas de dólar todos os dias."\nOferta Direta: "Nós mapeamos as 30 melhores tarefas sem expor seu rosto e reunimos tudo no guia prático de início passo a passo na bio. Pegue o seu link especial na biografia da minha conta antes que essa promoção acabe."`,
                  "copiador-afiliado"
                )}
                className="bg-white/10 hover:bg-white/20 text-white text-[10px] px-3 py-1.5 rounded flex items-center gap-1 cursor-pointer w-fit ml-auto"
              >
                {copiedText === "copiador-afiliado" ? <Check className="h-3.5 w-3.5 text-brand-green" /> : <Copy className="h-3 h-3" />}
                <span>{copiedText === "copiador-afiliado" ? "Roteiro Copiado!" : "Copiar Roteiro"}</span>
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "criador-videos-motivacionais",
      title: "Como Criar Vídeos Motivacionais",
      category: "motivacional",
      icon: Sparkles,
      content: (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-[#1a237e]">A Fábrica de Vídeos Motivacionais Virais</h3>
            <p className="text-slate-650 text-sm leading-relaxed font-sans">
              Vídeos de motivação retêm o usuário com muita facilidade por conta da carga de dopamina, superação e reflexões filosóficas. A fórmula de sucesso é casar **imagens rústicas de cinema** com **música ambiente clássica ou sintética** e **uma fala extremamente imponente de voz IA**.
            </p>

            <div className="bg-[#00c853]/5 border border-[#00c853]/25 p-4.5 rounded-xl space-y-2">
              <span className="text-xs font-bold text-[#00c853] block uppercase font-mono">Ideias de vídeos cinematográficos sugeridas:</span>
              <ul className="text-xs text-slate-705 space-y-1.5 list-emerald pl-1 font-sans">
                <li>• Homens ou mulheres treinando pesado em academia sob chuva leve.</li>
                <li>• Caminhadas focadas em florestas frias e silenciosas cobertas de neblina.</li>
                <li>• Leões caminhando com calmaria e imponência em savanas.</li>
                <li>• Escolas antigas, bibliotecas de madeira ou grandes centros metropolitanos acelerados.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <span className="text-xs font-extrabold uppercase font-mono text-[#1a237e] bg-slate-100 border px-3 py-1 rounded block w-fit">
              Biblioteca de Frases Motivacionais Virais (Clique para Copiar)
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "A disciplina sempre vence o talento quando o talento prefere procrastinar.",
                "Quem age hoje silenciando as reclamações chega nos melhores destinos primeiro.",
                "Sonhos sem tarefas diárias claras de ação são apenas falsos desejos bobos.",
                "O seu futuro financeiro e físico de amanhã depende do que você constrói hoje.",
                "Pequenos passos repetidos diariamente geram decolagens de resultados monumentais.",
                "Trabalhe em completo silêncio absoluto e deixe apenas os seus resultados lucrarem.",
                "A evolução de mentalidade não é conquistada de uma só vez, ela é construída diariamente."
              ].map((phrase, idx) => (
                <button
                  key={idx}
                  onClick={() => copyToClipboard(phrase, `phrase-${idx}`)}
                  className="bg-slate-50 border border-slate-200 hover:border-[#1a237e] hover:bg-[#1a237e]/5 p-3 rounded-lg text-left text-xs font-sans text-slate-700 transition-all cursor-pointer flex items-center justify-between gap-2.5 relative group"
                >
                  <span className="italic">"{phrase}"</span>
                  {copiedText === `phrase-${idx}` ? (
                    <Check className="h-4 w-4 text-[#00c853] shrink-0" />
                  ) : (
                    <Copy className="h-3.5 w-3.5 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: "infoproduto-vs-microsaas",
      title: "Infoproduto vs Micro SaaS",
      category: "recorrencia",
      icon: Layers,
      content: (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-[#1a237e]">Infoproduto vs Micro SaaS: Qual dá mais dinheiro todo mês?</h3>
            <p className="text-slate-655 text-sm leading-relaxed font-sans">
              Enquanto **Infoprodutos (Manuais, Ebooks)** oferecem lucros maciços imediatos por venda única de alto volume, os modelos de **Micro SaaS (Pequenos softwares de assinatura, ferramentas utilitárias simples)** propõem a cobiçada **recorrência mensal garantida**, garantindo previsibilidade de caixa.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
            <h4 className="text-base font-bold text-[#1a237e] flex items-center gap-1.5 font-sans">
              <Sliders className="h-5 w-5 text-[#00c853]" />
              <span>Simulador de Comparação de Modelos de Negócio</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-2">
              {/* Infoproduto side */}
              <div className="bg-rose-500/5 border border-rose-500/10 p-5 rounded-xl space-y-4">
                <span className="text-xs font-extrabold uppercase font-mono text-rose-700 block text-center border-b pb-1.5">Modelo Infoproduto (Venda Única)</span>
                
                <div className="space-y-3.5">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-slate-700">
                      <span>Preço Único sugerido de venda:</span>
                      <strong className="text-rose-750 font-mono">R$ {valVendaUnica.toFixed(2)}</strong>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="197"
                      step="1"
                      value={valVendaUnica}
                      onChange={(e) => setValVendaUnica(parseFloat(e.target.value))}
                      className="w-full accent-rose-600"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-slate-700">
                      <span>Volume estimado de vendas mensal:</span>
                      <strong className="text-rose-750 font-mono">{numVendasUnicas} vendas</strong>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="1000"
                      step="10"
                      value={numVendasUnicas}
                      onChange={(e) => setNumVendasUnicas(parseInt(e.target.value))}
                      className="w-full accent-rose-600"
                    />
                  </div>
                </div>

                <div className="pt-3 border-t text-center">
                  <span className="text-[10px] text-slate-400 font-mono block uppercase">Faturamento Estimado Bruto:</span>
                  <span className="text-xl font-black font-mono text-rose-600">R$ {(valVendaUnica * numVendasUnicas).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
                </div>
              </div>

              {/* Micro SaaS side */}
              <div className="bg-emerald-500/5 border border-emerald-500/10 p-5 rounded-xl space-y-4">
                <span className="text-xs font-extrabold uppercase font-mono text-[#00c853] block text-center border-b pb-1.5">Modelo Micro SaaS (Recorrência)</span>
                
                <div className="space-y-3.5">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-slate-700">
                      <span>Preço da Assinatura Mensal:</span>
                      <strong className="text-[#00c853] font-mono">R$ {valRecorrencia.toFixed(2)}</strong>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="97"
                      step="1"
                      value={valRecorrencia}
                      onChange={(e) => setValRecorrencia(parseFloat(e.target.value))}
                      className="w-full accent-[#00c853]"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-slate-700">
                      <span>Base de Assinantes Ativos:</span>
                      <strong className="text-[#00c853] font-mono">{numAssinantes} usuários</strong>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="1000"
                      step="10"
                      value={numAssinantes}
                      onChange={(e) => setNumAssinantes(parseInt(e.target.value))}
                      className="w-full accent-[#00c853]"
                    />
                  </div>
                </div>

                <div className="pt-3 border-t text-center">
                  <span className="text-[10px] text-slate-400 font-mono block uppercase">Receita Recorrente Mensal (MRR):</span>
                  <span className="text-xl font-black font-mono text-[#00c853]">R$ {(valRecorrencia * numAssinantes).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border p-4 rounded-xl text-center text-xs font-sans text-slate-655 leading-relaxed">
              <strong>Veredito:</strong> O Micro SaaS exige maior suporte de código, mas fornece estabilidade e facilidade de escala técnica recorrente, enquanto o Info permite caixa rápido de alta conversão inicial. O ideal é **financiar o SaaS usando o lucro bruto dos eBooks**.
            </div>
          </div>
        </div>
      )
    },
    {
      id: "financas-pessoais-2026",
      title: "Finanças Pessoais: Plano 2026",
      category: "recorrencia",
      icon: PiggyBank,
      content: (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-[#1a237e]">Finanças Pessoais em 2026</h3>
            <p className="text-slate-650 text-sm leading-relaxed font-sans">
              Fazer dinheiro na internet é maravilhoso, mas o segredo da real riqueza reside em saber **reter e propagar esse capital**. Domine suas metas de finanças pessoais de forma sistemática.
            </p>

            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold text-slate-750 block">Plano Prático de 30 Dias - Organização Financeira:</span>
              {[
                { id: "dividas", label: "Mapeamento rigoroso de toda e qualquer dívida ativa para amortização prioritária imediata." },
                { id: "reserva", label: "Criação de fundo reserva emergência física equivalente a pelo menos 6 meses de despesas de estilo de vida." },
                { id: "aporte", label: "Definição de aportes automáticos mensais fixados de 15% a 20% do faturamento da web direto ao tesouro ou CDBs." },
                { id: "planilha", label: "Tabulação rigorosa diária de todo o faturamento orgânico líquido gerado por suas mídias TikTok e páginas." },
                { id: "cortar", label: "Eliminação total de assinaturas esquecidas de ferramentas redundantes digitais no cartão." }
              ].map((item, idx) => {
                const checked = !!financeMonths[item.id];
                return (
                  <div 
                    key={idx}
                    onClick={() => setFinanceMonths(prev => ({ ...prev, [item.id]: !prev[item.id] }))}
                    className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer select-none transition-all ${
                      checked ? "bg-emerald-50/50 border-[#00c853] text-slate-400 line-through" : "bg-slate-50 border-slate-150 hover:border-slate-300 text-slate-700"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 transition-colors ${
                      checked ? "bg-[#00c853] border-[#00c853] text-white" : "border-slate-300 bg-white"
                    }`}>
                      {checked && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                    </div>
                    <span className="text-xs font-sans font-medium">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )
    },
    {
      id: "clone-voz-ia-fotorrealista",
      title: "Dublagens e Voz IA Fotorrealistas",
      category: "patrocinados",
      icon: Tv,
      badge: "Gratuito",
      content: (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-[#1a237e]">Criador Automático de Dublagens de IA</h3>
            <p className="text-slate-655 text-sm leading-relaxed font-sans">
              Não quer falar usando sua própria voz? **Clone sua própria voz ou utilize locutores premium em segundos** com qualidade 100% fotorrealista de cinema para reter total foco do espectador e fazer mais dinheiro em canais Dark TikTok!
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Demonstração Interativa de Dublador IA:</h4>
            
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 block">Diga o Roteiro Narrador:</label>
                <textarea
                  value={syntheticScript}
                  onChange={(e) => setSyntheticScript(e.target.value)}
                  className="w-full bg-slate-50 border p-3 rounded-lg text-xs font-sans focus:ring-[#1a237e] focus:border-[#1a237e] h-20"
                  placeholder="Insira o texto que você quer ver dublado de forma premium..."
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">Selecione o Locutor:</label>
                  <select
                    value={syntheticVoice}
                    onChange={(e) => setSyntheticVoice(e.target.value)}
                    className="w-full bg-slate-50 border p-2.5 rounded-lg text-xs font-sans"
                  >
                    <option value="thiago-premium">🎙️ Thiago Premium Voice (Voz Grave Intensa • Fitness & Sigma)</option>
                    <option value="camila-lucrativa">🎙️ Camila Conversões (Voz Animada • Marketing Digital)</option>
                    <option value="alberto-filosofo">🎙️ Alberto Sábio (Voz Clássica • Filosofia & Motivação)</option>
                    <option value="voz-clonada">🎙️ Clonar Minha Voz (Uploade arquivo áudio de 10s)</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <button
                    onClick={triggerVoiceGeneration}
                    disabled={isGeneratingVoice}
                    className="w-full bg-[#1a237e] hover:bg-[#151c66] text-white py-2.5 px-4 rounded-lg text-xs font-extrabold cursor-pointer transition-all flex items-center justify-center gap-1 font-sans shadow-xs"
                  >
                    <Play className="h-4 w-4 fill-current text-brand-green" />
                    <span>{isGeneratingVoice ? "Processando Clonagem Tecnológica..." : "Fazer Teste Grátis de Áudio"}</span>
                  </button>
                </div>
              </div>

              {animatedVoiceFeedback(isGeneratingVoice, generatedVoiceClip, syntheticVoice)}
            </div>
          </div>
        </div>
      )
    },
    {
      id: "guia-ganhar-dinheiro-internet",
      title: "Guia: Ganhar Dinheiro Online",
      category: "inicio",
      icon: Smartphone,
      badge: "Iniciante",
      content: (
        <div className="space-y-6 animate-fadeIn">
          {/* Header Banner */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#00c853]/10 text-[#00c853] flex items-center justify-center shrink-0">
                <Smartphone className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-[#00c853] uppercase tracking-wider block">Passo a Passo • Sem Complicação</span>
                <h3 className="text-xl sm:text-2xl font-black text-[#1a237e]">
                  Guia Completo: Ganhar Dinheiro na Internet
                </h3>
              </div>
            </div>
            <p className="text-slate-650 text-sm leading-relaxed font-sans">
              Milhares de brasileiros trabalham pela internet todos os dias. Você também pode! Este guia mostra os caminhos mais práticos e seguros para começar — mesmo se você estiver começando absolutamente do zero e sem qualquer experiência anterior.
            </p>
          </div>

          {/* Formas de Ganhar Dinheiro Grid */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-[#1a237e] flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-[#00c853]" />
              <span>💸 Formas Recomendadas de Ganhar Dinheiro</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  emoji: "🛍️",
                  title: "Vender Produtos Online",
                  difficulty: "Fácil",
                  diffColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
                  desc: "Venda coisas que você já tem em casa e não usa mais, ou compre produtos baratos em atacado para revender com lucro."
                },
                {
                  emoji: "📱",
                  title: "Divulgar como Afiliado",
                  difficulty: "Fácil",
                  diffColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
                  desc: "Divulgue produtos digitais ou físicos de outras pessoas ou lojas conhecidas e ganhe uma comissão em dinheiro por cada venda realizada."
                },
                {
                  emoji: "🎓",
                  title: "Fazer Cursos e Freelancer",
                  difficulty: "Médio",
                  diffColor: "bg-amber-50 text-amber-700 border-amber-200",
                  desc: "Aprenda uma habilidade digital em alta (como tradução, redação ou edição) e ofereça serviços pontuais na internet."
                },
                {
                  emoji: "🎥",
                  title: "Criar Conteúdo",
                  difficulty: "Médio",
                  diffColor: "bg-amber-50 text-amber-700 border-amber-200",
                  desc: "Crie perfis de nicho no YouTube, TikTok ou Instagram para impulsionar audiência e lucrar com visualizações e parcerias."
                },
                {
                  emoji: "💬",
                  title: "Atendimento Online",
                  difficulty: "Fácil",
                  diffColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
                  desc: "Trabalhe prestando suporte ao cliente, respondendo chats ou atuando como digitador remoto para empresas parceiras."
                },
                {
                  emoji: "🎨",
                  title: "Design e Arte Digital",
                  difficulty: "Avançado",
                  diffColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
                  desc: "Crie logotipos, artes para redes sociais, convites e panfletos virtuais práticos para vender no Canva ou Elo7."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 hover:border-[#00c853]/60 hover:shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl">{item.emoji}</span>
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${item.diffColor}`}>
                        {item.difficulty}
                      </span>
                    </div>
                    <h5 className="text-xs font-bold text-[#1a237e] font-sans">{item.title}</h5>
                    <p className="text-[11px] text-slate-500 font-sans leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quanto dá para ganhar Table */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h4 className="text-base font-bold text-[#1a237e] flex items-center gap-2">
              <Sliders className="h-5 w-5 text-[#00c853]" />
              <span>📊 Quanto Dá pra Ganhar? (Estimativa de Ganhos)</span>
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-650 font-sans border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/50">
                    <th className="py-3 px-4 text-[#1a237e] font-bold">Atividade</th>
                    <th className="py-3 px-4 text-[#1a237e] font-bold">Dificuldade</th>
                    <th className="py-3 px-4 text-[#1a237e] font-bold text-right">Ganho Médio/Mês</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { act: "Vender no OLX / Shopee", diff: "⭐ Fácil", payout: "R$ 300 – R$ 2.000" },
                    { act: "Afiliado (Hotmart / Monetizze)", diff: "⭐⭐ Médio", payout: "R$ 500 – R$ 5.000+" },
                    { act: "Digitação / Atendimento", diff: "⭐ Fácil", payout: "R$ 800 – R$ 1.800" },
                    { act: "Freelancer (Workana / 99Freelas)", diff: "⭐⭐ Médio", payout: "R$ 1.000 – R$ 4.000" },
                    { act: "YouTube / TikTok", diff: "⭐⭐⭐ Longo prazo", payout: "R$ 500 – R$ 20.000+" }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition-colors">
                      <td className="py-3.5 px-4 font-medium text-slate-800">{row.act}</td>
                      <td className="py-3.5 px-4 text-slate-500 font-mono">{row.diff}</td>
                      <td className="py-3.5 px-4 text-right font-bold text-[#00c853] font-mono">{row.payout}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Como Começar Agora Steps */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h4 className="text-base font-bold text-[#1a237e] flex items-center gap-2">
              <Zap className="h-5 w-5 text-[#00c853]" />
              <span>🚀 Como Começar Agora (Plano de Ação de 6 Etapas)</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  step: "1",
                  title: "Crie um e-mail profissional",
                  desc: "Use o Gmail (google.com). É 100% gratuito e necessário para abrir contas em qualquer site de trabalho. Crie algo simples como seunome@gmail.com.",
                  actionLabel: "gmail.com",
                  actionUrl: "https://gmail.com"
                },
                {
                  step: "2",
                  title: "Escolha UMA forma para focar",
                  desc: "Não tente tudo ao mesmo tempo. Escolha apenas o mais fácil e foque nele por pelo menos 1 mês.",
                  actionLabel: null,
                  actionUrl: null
                },
                {
                  step: "3",
                  title: "Crie sua conta nas plataformas",
                  desc: "Para vender: olx.com.br ou shopee.com.br. Para afiliado: hotmart.com. Para freelancer: workana.com.",
                  actionLabel: null,
                  actionUrl: null
                },
                {
                  step: "4",
                  title: "Aprenda de graça no YouTube",
                  desc: "Pesquise no YouTube termos exatos como: 'como vender no OLX iniciante' ou 'como ser afiliado Hotmart'. Tem muito conteúdo grátis!",
                  actionLabel: "Pesquisar no YouTube",
                  actionUrl: "https://youtube.com"
                },
                {
                  step: "5",
                  title: "Divulgue no WhatsApp e Instagram",
                  desc: "Comece vendendo para quem você conhece. Mande mensagem direta, poste stories convidativos e peça indicações de conhecidos.",
                  actionLabel: null,
                  actionUrl: null
                },
                {
                  step: "6",
                  title: "Não desista na primeira semana!",
                  desc: "Leva tempo para engajar. A maioria desiste cedo. Quem persiste por pelo menos 30 a 60 dias começa de fato a ver os resultados financeiros.",
                  actionLabel: null,
                  actionUrl: null
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50/50 border border-slate-200/60 rounded-xl p-4.5 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded bg-[#1a237e] text-white flex items-center justify-center font-mono text-xs font-bold shrink-0">
                        {item.step}
                      </span>
                      <h5 className="text-xs font-bold text-[#1a237e] font-sans">{item.title}</h5>
                    </div>
                    <p className="text-[11px] text-slate-500 font-sans leading-relaxed">{item.desc}</p>
                  </div>
                  {item.actionLabel && (
                    <a
                      href={item.actionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] font-bold text-[#00c853] hover:underline pt-1 w-fit mt-2 uppercase font-mono tracking-wider"
                    >
                      <span>→ {item.actionLabel}</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Dicas Importantes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-red-500/5 border border-red-200 rounded-2xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-red-700">
                <span className="text-lg">⚠️</span>
                <h5 className="text-xs font-extrabold font-sans">Cuidado com golpes de internet!</h5>
              </div>
              <p className="text-[10.5px] text-red-800 font-sans leading-relaxed">
                Ninguém paga para se candidatar. Desconfie imediatamente de propostas que pedem dinheiro adiantado ou prometem ganhos absurdos ou robôs lucrativos.
              </p>
            </div>

            <div className="bg-[#00c853]/5 border border-[#00c853]/20 rounded-2xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-[#00c853]">
                <span className="text-lg">📲</span>
                <h5 className="text-xs font-extrabold font-sans">Dá pra começar só com o celular!</h5>
              </div>
              <p className="text-[10.5px] text-slate-600 font-sans leading-relaxed">
                OLX, Shopee, Hotmart, Instagram — tudo funciona perfeitamente pelo celular para você iniciar seu faturamento sem precisar de investimentos ou PCs caros.
              </p>
            </div>

            <div className="bg-indigo-500/5 border border-indigo-200 rounded-2xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-indigo-700">
                <span className="text-lg">🎓</span>
                <h5 className="text-xs font-extrabold font-sans">Aprenda de graça em escolas sérias</h5>
              </div>
              <p className="text-[10.5px] text-indigo-850 font-sans leading-relaxed">
                O SENAC, SEBRAE e Coursera oferecem diversos cursos online 100% gratuitos com certificados legítimos de marketing digital, vendas e administração financeira.
              </p>
            </div>
          </div>

          {/* Sites Úteis links */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h4 className="text-base font-bold text-[#1a237e] flex items-center gap-2">
              <Globe className="h-5 w-5 text-[#00c853]" />
              <span>🔗 Sites Úteis para Começar</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {[
                { label: "shopee.com.br", url: "https://shopee.com.br" },
                { label: "olx.com.br", url: "https://olx.com.br" },
                { label: "hotmart.com", url: "https://hotmart.com" },
                { label: "monetizze.com.br", url: "https://monetizze.com.br" },
                { label: "workana.com", url: "https://workana.com" },
                { label: "99freelas.com.br", url: "https://99freelas.com.br" },
                { label: "canva.com", url: "https://canva.com" },
                { label: "elo7.com.br", url: "https://elo7.com.br" },
                { label: "sebrae.com.br", url: "https://sebrae.com.br" },
                { label: "youtube.com", url: "https://youtube.com" }
              ].map((site, i) => (
                <a
                  key={i}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-50 hover:bg-[#1a237e]/5 border border-slate-200 hover:border-[#1a237e]/35 px-2 py-2.5 rounded-xl text-center text-[10px] font-bold text-[#1a237e] transition-all flex items-center justify-center gap-1 truncate"
                >
                  <span className="truncate">{site.label}</span>
                  <ExternalLink className="h-3 w-3 text-[#00c853]/70 shrink-0" />
                </a>
              ))}
            </div>
          </div>

          {/* Motivation Quote Block */}
          <div className="bg-[#1a237e] text-white rounded-2xl p-6 text-center space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
            
            <p className="text-sm font-medium italic">
              "Todo mundo que hoje ganha dinheiro na internet um dia também começou do zero."
            </p>
            <p className="text-xs text-[#00c853] font-bold tracking-wide uppercase">
              Escolha uma forma, dê o primeiro passo hoje e não pare. O resultado vem com consistência!
            </p>
          </div>
        </div>
      )
    },
    {
      id: "guia-como-vender-produtos-online",
      title: "Guia: Vender Produtos Online",
      category: "inicio",
      icon: ShoppingBag,
      badge: "Iniciante",
      content: (
        <div className="space-y-6 animate-fadeIn">
          {/* Header Banner */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center shrink-0">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider block">Do Zero ao 1º Produto Vendido</span>
                <h3 className="text-xl sm:text-2xl font-black text-[#1a237e]">
                  Guia Prático: Como Vender Produtos Online
                </h3>
              </div>
            </div>
            <p className="text-slate-650 text-sm leading-relaxed font-sans">
              Tudo o que você precisa saber para começar hoje mesmo. Vender na internet não exige experiência sofisticada — você pode transformar itens parados em casa ou mercadorias simples em dinheiro vivo rapidamente!
            </p>
          </div>

          {/* Passo 1: Escolha onde vender */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-[#1a237e] flex items-center gap-2">
              <span className="text-orange-500 font-black">1.</span>
              <span>Escolha onde vender seus produtos</span>
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* OLX */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-orange-500 hover:shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono font-bold text-orange-600 bg-orange-500/10 px-2 py-0.5 rounded">OLX</span>
                    <span className="text-lg">🟠</span>
                  </div>
                  <h5 className="text-xs font-bold text-[#1a237e] font-sans">olx.com.br</h5>
                  <p className="text-[11px] text-slate-550 font-sans leading-relaxed">
                    Ótimo para vender coisas usadas que você tem parado em casa: roupas, móveis antigos, eletrodomésticos ou celulares antigos. O cadastro é gratuito, rápido e direto.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  <span className="text-[9px] font-bold font-mono text-emerald-600 bg-emerald-50 px-1.5 h-4.5 flex items-center rounded">Gratuito</span>
                  <span className="text-[9px] font-bold font-mono text-slate-600 bg-slate-150 px-1.5 h-4.5 flex items-center rounded">Produtos usados</span>
                  <span className="text-[9px] font-bold font-mono text-[#1a237e] bg-[#1a237e]/5 px-1.5 h-4.5 flex items-center rounded">Sem taxa</span>
                </div>
              </div>

              {/* Shopee */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-orange-500 hover:shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono font-bold text-orange-600 bg-orange-500/10 px-2 py-0.5 rounded">Shopee</span>
                    <span className="text-lg">🛍️</span>
                  </div>
                  <h5 className="text-xs font-bold text-[#1a237e] font-sans">shopee.com.br</h5>
                  <p className="text-[11px] text-slate-550 font-sans leading-relaxed">
                    Altamente popular no Brasil. Muito prático para começar vendendo produtos novos de fornecedores ou mesmo usados. A plataforma cuida de toda a transação financeira de forma automatizada por você.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  <span className="text-[9px] font-bold font-mono text-emerald-600 bg-emerald-50 px-1.5 h-4.5 flex items-center rounded">Fácil de usar</span>
                  <span className="text-[9px] font-bold font-mono text-amber-600 bg-amber-50 px-1.5 h-4.5 flex items-center rounded">Taxa de 14%</span>
                  <span className="text-[9px] font-bold font-mono text-[#1a237e] bg-[#1a237e]/5 px-1.5 h-4.5 flex items-center rounded">Muito comprador</span>
                </div>
              </div>

              {/* Mercado Livre */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-orange-500 hover:shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono font-bold text-[#1a237e] bg-yellow-400/20 px-2 py-0.5 rounded">Mercado Livre</span>
                    <span className="text-lg">🔵</span>
                  </div>
                  <h5 className="text-xs font-bold text-[#1a237e] font-sans">mercadolivre.com.br</h5>
                  <p className="text-[11px] text-slate-550 font-sans leading-relaxed">
                    A maior plataforma de comércio eletrônico de toda a América Latina. Recomendado para quem tem planos de crescer estruturado e buscar altos volumes de transações. Tem o maior tráfego orgânico.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  <span className="text-[9px] font-bold font-mono text-amber-600 bg-amber-50 px-1.5 h-4.5 flex items-center rounded">Taxa variável</span>
                  <span className="text-[9px] font-bold font-mono text-slate-600 bg-slate-150 px-1.5 h-4.5 flex items-center rounded">Alta concorrência</span>
                  <span className="text-[9px] font-bold font-mono text-[#00c853] bg-[#00c853]/10 px-1.5 h-4.5 flex items-center rounded">Muito tráfego</span>
                </div>
              </div>

              {/* Facebook Marketplace */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-orange-500 hover:shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Facebook</span>
                    <span className="text-lg">📘</span>
                  </div>
                  <h5 className="text-xs font-bold text-[#1a237e] font-sans">Facebook Marketplace</h5>
                  <p className="text-[11px] text-slate-550 font-sans leading-relaxed">
                    Venda com facilidade direto pela interface do Facebook, sem qualquer tipo de comissão ou taxa interina. Ideal para negociar itens usados na sua própria região ou cidade via chat direto.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  <span className="text-[9px] font-bold font-mono text-emerald-600 bg-emerald-50 px-1.5 h-4.5 flex items-center rounded">Sem taxa</span>
                  <span className="text-[9px] font-bold font-mono text-blue-600 bg-blue-50 px-1.5 h-4.5 flex items-center rounded">Venda local</span>
                </div>
              </div>

              {/* Instagram e WhatsApp */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-orange-500 hover:shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono font-bold text-pink-600 bg-pink-50 px-2 py-0.5 rounded">Insta & Whats</span>
                    <span className="text-lg">📸</span>
                  </div>
                  <h5 className="text-xs font-bold text-[#1a237e] font-sans">Instagram e WhatsApp</h5>
                  <p className="text-[11px] text-slate-550 font-sans leading-relaxed">
                    Crie um perfil expositor simples, publique fotos caprichadas e receba todas as encomendas e orçamentos pelo WhatsApp. Excelente para negócios de atendimento caseiro sem custo algum.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  <span className="text-[9px] font-bold font-mono text-emerald-600 bg-emerald-50 px-1.5 h-4.5 flex items-center rounded">Zero custo</span>
                  <span className="text-[9px] font-bold font-mono text-[#1a237e] bg-[#1a237e]/5 px-1.5 h-4.5 flex items-center rounded">Conexão humana</span>
                  <span className="text-[9px] font-bold font-mono text-pink-600 bg-pink-50 px-1.5 h-4.5 flex items-center rounded">Iniciante</span>
                </div>
              </div>
            </div>
          </div>

          {/* Passo 2: Como colocar um produto à venda */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h4 className="text-base font-bold text-[#1a237e] flex items-center gap-2">
              <span className="text-orange-500 font-black">2.</span>
              <span>Como Colocar seu Primeiro Produto à Venda (Roteiro Completo)</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  step: "1",
                  title: "Escolha o produto ideal",
                  desc: "Comece vasculhando o que você já possui em sua residência: aquela blusa que nunca vestiu, calçados guardados, livros antigos ou utilitários. Ou vá até um brechó local e compre barato para revender."
                },
                {
                  step: "2",
                  title: "Tire fotografias de alta qualidade",
                  desc: "Faça cliques usando seu smartphone em locais bem iluminados com luz natural (perto de janelas durante o dia). Fotos limpas e brilhantes convertem até 5x mais rápido."
                },
                {
                  step: "3",
                  title: "Redija títulos e descrições claras",
                  desc: "Exemplo ideal: 'Tênis Nike tamanho 40, usado apenas 2 vezes, super conservado, acompanha caixa original'. Seja honesto sobre as condições reais do produto para garantir avaliações positivas."
                },
                {
                  step: "4",
                  title: "Defina o preço de forma inteligente",
                  desc: "Faça buscas na OLX ou Mercado Livre para ver os preços da concorrência equivalente. Estabeleça um valor equilibrado e justo — você pode deixar uma pequena margem aberta para negociação."
                },
                {
                  step: "5",
                  title: "Publique o anúncio e atenda rápido",
                  desc: "No instante em que algum comprador interessado entrar em contato pelo chat, seja super ágil em responder! Vendedores profissionais que demoram a responder perdem o cliente de imediato."
                },
                {
                  step: "6",
                  title: "Despache o pacote com segurança",
                  desc: "Para entregas, sempre utilize os Correios oficiais ou centros de coleta recomendados das próprias plataformas de venda. Certifique-se de embalar o produto muito bem e salve sempre o comprovante."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50/50 border border-slate-200/60 rounded-xl p-4.5 space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded bg-orange-500 text-white flex items-center justify-center font-mono text-xs font-bold shrink-0">
                      {item.step}
                    </span>
                    <h5 className="text-xs font-bold text-[#1a237e] font-sans">{item.title}</h5>
                  </div>
                  <p className="text-[11px] text-slate-550 font-sans leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Dicas de Ouro: Imagens */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h4 className="text-base font-bold text-[#1a237e] flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-orange-500" />
              <span>Dicas de Ouro: Como Fazer Fotos que Vendem de Verdade</span>
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { emoji: "☀️", label: "Luz Natural Forte", desc: "Sempre dê preferência para tirar as fotos ao lado de janelas abertas no período do dia." },
                { emoji: "🏳️", label: "Fundo Organizado", desc: "Utilize panos de cores lisas, paredes de fundos brancos ou mesmo papel kraft limpo." },
                { emoji: "🔍", label: "Exiba Todos os Detalhes", desc: "Faça retratos dos mínimos detalhes do item, inclusive pequenos riscos e marcas — isso gera confiança." },
                { emoji: "📐", label: "Variedade de Ângulos", desc: "Garanta imagens detalhadas: mostre a frente, as laterais, as costas e a etiqueta." }
              ].map((tip, idx) => (
                <div key={idx} className="p-4 bg-orange-50/20 border border-orange-500/10 rounded-xl space-y-1.5">
                  <div className="text-2xl">{tip.emoji}</div>
                  <h5 className="text-xs font-bold text-[#1a237e] font-sans">{tip.label}</h5>
                  <p className="text-[10px] text-slate-500 font-sans leading-relaxed">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ideias de produtos recomendados */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* O Que Vender */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4">
              <h5 className="text-xs font-extrabold text-[#1a237e] uppercase tracking-wider border-b pb-2 flex items-center gap-2">
                <Star className="h-4 w-4 text-orange-500" />
                <span>Ideias: O que vender para começar agora?</span>
              </h5>
              <ul className="text-xs text-slate-650 space-y-2.5 font-sans leading-relaxed">
                {[
                  "Roupas, casacos e calçados em excelente estado",
                  "Acessórios eletrônicos (fones de ouvido, cabos, carregadores, capinhas)",
                  "Livros físicos de faculdade, HQs, DVDs de acervo ou videogames antigos",
                  "Bijuterias e acessórios artesanais confeccionados em casa",
                  "Hambúrgueres, salgadinhos e doces artesanais (vendas locais via WhatsApp)",
                  "Produtos importados ou adquiridos em atacado (fácil na Shopee atacado)",
                  "Artesanatos bonitos e personalizados ou sabonetes perfumados",
                  "Produtos extras de cuidados pessoais e cosméticos de marcas famosas"
                ].map((item, id) => (
                  <li key={id} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cuidados Importantes */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4">
              <h5 className="text-xs font-extrabold text-red-650 uppercase tracking-wider border-b pb-2 flex items-center gap-2">
                <Info className="h-4 w-4 text-red-500" />
                <span>Atenção: Cuidados Críticos de Segurança</span>
              </h5>
              <div className="space-y-3">
                {[
                  {
                    emoji: "🚨",
                    title: "Proteja-se de golpes online",
                    desc: "Nunca despache ou entregue seu produto em mãos antes de ter 100% de confirmação de que o valor caiu direto na sua conta bancária. Nunca confie em meros prints de telas ou e-mails de comprovante suspeitos."
                  },
                  {
                    emoji: "⚠️",
                    title: "Dê total prioridade para transações protegidas",
                    desc: "Sempre prefira negociar por Pix ou sistemas oferecidos diretamente pelas plataformas oficiais (Shopee e Mercado Livre mantêm o saldo seguro até a entrega final ao cliente)."
                  },
                  {
                    emoji: "✅",
                    title: "Foque muito rápido em construir reputação",
                    desc: "Seja 100% íntegro em relação às imperfeições do produto, realize o envio no menor prazo possível e atenda com simpatia. Avaliações impecáveis multiplicam o volume de suas próximas vendas."
                  }
                ].map((care, i) => (
                  <div key={i} className="flex gap-2.5 items-start">
                    <span className="text-lg shrink-0">{care.emoji}</span>
                    <div>
                      <h6 className="text-xs font-extrabold text-[#1a237e] font-sans">{care.title}</h6>
                      <p className="text-[10px] text-slate-500 font-sans leading-relaxed mt-0.5">{care.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to action & motivational bar */}
          <div className="bg-orange-600 text-white rounded-2xl p-6 text-center space-y-3 relative overflow-hidden shadow-xs">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-500/10 rounded-full blur-xl pointer-events-none" />
            
            <h5 className="text-sm font-black uppercase tracking-wider">Comece hoje mesmo! 🛒</h5>
            <p className="text-xs font-sans max-w-xl mx-auto opacity-95">
              Escolha um item parado no seu armário, baixe a Shopee ou a OLX, faça uma excelente foto e poste seu item à venda. O primeiro passo é sempre o divisor de águas... Você consegue! 💪
            </p>
          </div>
        </div>
      )
    },
    {
      id: "guia-do-afiliado-ganhar-sem-produto",
      title: "Guia: Ganhar como Afiliado",
      category: "inicio",
      icon: Users,
      badge: "Iniciante",
      content: (
        <div className="space-y-6 animate-fadeIn">
          {/* Header Banner */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-50/10 text-[#1a237e] flex items-center justify-center shrink-0">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-indigo-600 uppercase tracking-wider block">Sem Estoque • Renda com comissão</span>
                <h3 className="text-xl sm:text-2xl font-black text-[#1a237e]">
                  Guia do Afiliado: Ganhe Dinheiro Sem Ter Produto
                </h3>
              </div>
            </div>
            <p className="text-slate-650 text-sm leading-relaxed font-sans">
              Divulgue produtos de outras pessoas e receba comissão por cada venda realizada — 100% online, sem precisar lidar com estoque, frete ou suporte.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="block text-2xl font-black text-[#00c853]">R$0</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Para começar</span>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="block text-2xl font-black text-[#1a237e]">80%</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Comissão máx.</span>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="block text-2xl font-black text-[#1a237e]">24h</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Para iniciar</span>
            </div>
          </div>

          {/* Como funciona ser afiliado */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h4 className="text-base font-bold text-[#1a237e] flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-[#00c853]" />
              <span>Entenda o Conceito: Como Funciona Ser Afiliado?</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  emoji: "🏪",
                  title: "Produtor cria o produto",
                  desc: "Alguém cria um curso, e-book ou produto físico e precisa de ajuda externa para impulsionar as vendas."
                },
                {
                  emoji: "🔗",
                  title: "Você se torna afiliado",
                  desc: "Você se cadastra de graça, escolhe o produto ideal e obtém seu próprio link exclusivo de divulgação."
                },
                {
                  emoji: "📢",
                  title: "Você divulga o seu link",
                  desc: "Compartilhe em redes sociais, WhatsApp, Instagram, TikTok, canais do YouTube — onde desejar."
                },
                {
                  emoji: "💸",
                  title: "Alguém compra = você ganha!",
                  desc: "Assim que um comprador clica no seu link e realiza a compra, a comissão pinga de forma 100% automatizada."
                }
              ].map((step, idx) => (
                <div key={idx} className="bg-slate-50/40 border border-slate-200/50 rounded-xl p-4 flex flex-col justify-between space-y-2">
                  <span className="text-2xl">{step.emoji}</span>
                  <div className="space-y-1">
                    <h5 className="text-xs font-bold text-[#1a237e] font-sans">{step.title}</h5>
                    <p className="text-[10.5px] text-slate-500 font-sans leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Onde se Cadastrar Platforms Grid */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-[#1a237e] flex items-center gap-2">
              <Layers className="h-5 w-5 text-[#00c853]" />
              <span>🔥 Onde se Cadastrar: Principais Plataformas</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  emoji: "🔥",
                  name: "Hotmart",
                  desc: "A maior no Brasil de produtos digitais (cursos, e-books, mentorias). Excelentes taxas.",
                  badge: "Gratuito",
                  comission: "Até 80% comissão",
                  url: "https://hotmart.com"
                },
                {
                  emoji: "⚡",
                  name: "Monetizze",
                  desc: "Infoprodutos e itens físicos diversos. Interface ideal para iniciantes com saques fáceis via Pix.",
                  badge: "Gratuito",
                  comission: "Até 60% comissão",
                  url: "https://monetizze.com.br"
                },
                {
                  emoji: "🛒",
                  name: "Shopee Afiliados",
                  desc: "Divulgue utilitários físicos da Shopee no app. Muito simples de configurar pelo celular.",
                  badge: "Só pelo app",
                  comission: "Até 20% comissão",
                  url: "https://shopee.com.br"
                },
                {
                  emoji: "🌟",
                  name: "Amazon Afiliados",
                  desc: "Excelente para sugerir livros, eletrônicos ou itens que você já recomenda no seu dia a dia.",
                  badge: "Gratuito",
                  comission: "Até 10% comissão",
                  url: "https://associados.amazon.com.br"
                }
              ].map((plat, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 hover:border-[#00c853]/50 hover:shadow-xs transition-all flex flex-col justify-between space-y-3.5">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl">{plat.emoji}</span>
                      <span className="text-[9px] font-mono font-bold bg-[#1a237e]/5 text-[#1a237e] px-1.5 py-0.5 rounded">
                        {plat.badge}
                      </span>
                    </div>
                    <h5 className="text-xs font-bold text-[#1a237e] font-sans">{plat.name}</h5>
                    <p className="text-[10.5px] text-slate-500 font-sans leading-relaxed">{plat.desc}</p>
                  </div>
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-mono font-bold text-[#00c853] block">
                      {plat.comission}
                    </span>
                    <a
                      href={plat.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] font-bold text-[#1a237e] hover:underline uppercase font-mono tracking-wider"
                    >
                      <span>Acessar</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Estratégia de Divulgação */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h4 className="text-base font-bold text-[#1a237e] flex items-center gap-2">
              <Target className="h-5 w-5 text-[#00c853]" />
              <span>📢 Estratégia: Onde Divulgar seu Link Comercial?</span>
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { emoji: "💬", channel: "WhatsApp", diff: "⭐ Mais fácil", desc: "Use seus próprios grupos de contatos ou transmita ofertas diretas selecionadas de forma estratégica." },
                { emoji: "📸", channel: "Instagram", diff: "⭐⭐ Médio", desc: "Adicione o link oficial em sua Bio de perfil, produza Reels atrativos ou use os stickers interativos de links nos Stories." },
                { emoji: "🎵", channel: "TikTok", diff: "⭐⭐ Médio", desc: "Crie pequenos vídeos virais rápidos e cativantes abordando o produto e direcione o lead para seu link." },
                { emoji: "▶️", channel: "YouTube", diff: "⭐⭐⭐ Longo prazo", desc: "Produza análises completas em vídeo (reviews) ou tutoriais e adicione seus links de indicação nas descrições." },
                { emoji: "👥", channel: "Facebook", diff: "⭐ Fácil", desc: "Envolva-se ativamente em grupos de alta relevância com discussões que envolvam temas do produto." },
                { emoji: "✉️", channel: "E-mail", diff: "⭐⭐⭐ Avançado", desc: "Construa listas exclusivas de emails interessados para disparar novidades e campanhas sazonais." }
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-slate-50/50 border border-slate-200/60 rounded-xl space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xl">{item.emoji}</span>
                    <span className="text-[9px] font-mono font-bold text-slate-500 bg-slate-100 border px-1.5 py-0.5 rounded">
                      {item.diff}
                    </span>
                  </div>
                  <h5 className="text-xs font-bold text-[#1a237e] font-sans">{item.channel}</h5>
                  <p className="text-[10px] text-slate-550 font-sans leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comece Agora Steps */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h4 className="text-base font-bold text-[#1a237e] flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-[#00c853]" />
              <span>🚀 Comece Agora: Passo a Passo do Primeiro Dia</span>
            </h4>
            <div className="space-y-3.5">
              {[
                { num: "01", title: "Crie sua conta na Hotmart gratuitamente", desc: "Acesse hotmart.com e clique em 'Cadastre-se grátis'. Defina seu endereço de e-mail de contato e estabeleça uma nova senha segura." },
                { num: "02", title: "Selecione o produto ideal para iniciar", desc: "Navegue até a opção 'Mercado' e filtre pelas categorias do seu interesse. Procure focar em produtos com ótima pontuação de avaliação e comissão acima de 30%." },
                { num: "03", title: "Solicite sua afiliação formal", desc: "Clique diretamente na página do produto de sua escolha e pressione o comando 'Quero ser afiliado'. Algumas marcas aceitam no mesmo instante e outras avaliam em 24-48 horas." },
                { num: "04", title: "Copie seu link exclusivo de vendas", desc: "Você terá direitos ao seu link exclusivo com tracker pessoal integrado. Cada compra concluída a partir dele enviará a comissão diretamente à sua carteira." },
                { num: "05", title: "Conheça o produto nos mínimos detalhes", desc: "Antes mesmo de sugerir o produto, entenda genuinamente quais são as dores solucionadas por ele. Isso ajudará você a criar argumentações mais persuasivas." },
                { num: "06", title: "Seja totalmente honesto na divulgação", desc: "Fale de forma natural em seus canais de preferência. Em vez de simplesmente empurrar ofertas, demonstre os benefícios reais." },
                { num: "07", title: "Vincule sua chave Pix para saques automáticos", desc: "Acesse as configurações do seu perfil financeiro nas plataformas parceiras, configure os dados de identidade e informe sua chave Pix pessoal." }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-slate-50 border border-slate-200/80 rounded-xl items-start">
                  <span className="font-mono text-xs font-bold text-[#00c853] bg-[#00c853]/10 border border-[#00c853]/20 w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                    {step.num}
                  </span>
                  <div>
                    <h5 className="text-xs font-bold text-[#1a237e] font-sans">{step.title}</h5>
                    <p className="text-[10.5px] text-slate-500 font-sans leading-relaxed mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Potencial de Ganho */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h4 className="text-base font-bold text-[#1a237e] flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-[#00c853]" />
              <span>💰 Potencial de Ganho: Simulações Recomendadas</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <span className="text-[10px] font-mono font-bold text-[#1a237e] uppercase tracking-wider block">Curso de R$ 97</span>
                <div className="text-lg font-black text-slate-800">R$ 48 por venda</div>
                <div className="text-xs text-slate-500 font-sans">Comissão de 50%</div>
                <div className="text-xs font-mono font-bold text-[#00c853]/90 pt-1.5 border-t">10 vendas = R$ 480</div>
              </div>

              <div className="p-4.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <span className="text-[10px] font-mono font-bold text-[#1a237e] uppercase tracking-wider block">Curso de R$ 297</span>
                <div className="text-lg font-black text-slate-800">R$ 118 por venda</div>
                <div className="text-xs text-slate-500 font-sans">Comissão de 40%</div>
                <div className="text-xs font-mono font-bold text-[#00c853]/90 pt-1.5 border-t">10 vendas = R$ 1.180</div>
              </div>

              <div className="p-4.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <span className="text-[10px] font-mono font-bold text-[#1a237e] uppercase tracking-wider block">Produto Físico R$ 150</span>
                <div className="text-lg font-black text-slate-800">R$ 22 por venda</div>
                <div className="text-xs text-slate-500 font-sans">Comissão de 15%</div>
                <div className="text-xs font-mono font-bold text-[#00c853]/90 pt-1.5 border-t">30 vendas = R$ 660</div>
              </div>
            </div>
            <div className="p-4 bg-emerald-500/5 border border-emerald-500/15 rounded-xl text-[11px] text-slate-650 font-sans leading-relaxed">
              <span className="text-emerald-750 font-bold block mb-1">✅ Visão Realista de Mercado</span>
              Afiliados dedicados que constroem audiência engajada ganham rotineiramente de R$ 1.000 a R$ 10.000+ por mês. Mas compreenda que exige de 2 a 3 meses de foco e consistência contínua para ver os resultados reais de caixa.
            </div>
          </div>

          {/* Erros para Evitar & Dica de Ouro */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-500/5 border border-red-200 rounded-2xl p-5 space-y-3">
              <h5 className="text-xs font-extrabold text-[#1a237e] uppercase tracking-wider border-b pb-2 flex items-center gap-2">
                <Info className="h-4 w-4 text-red-500" />
                <span>⚠️ Erros Gravíssimos para Evitar</span>
              </h5>
              <div className="space-y-3 text-[11px] text-slate-600 font-sans leading-relaxed">
                <p>
                  <strong>Não faça spam:</strong> Jamais envie links não solicitados de forma repetitiva para grupos ou contatos. Inundar canais de texto só irrita potenciais compradores e arruína sua credibilidade.
                </p>
                <p>
                  <strong>Não divulgue produtos duvidosos:</strong> Sempre investigue a fundo a idoneidade do produtor e do curso. Oferecer ofertas falsas que não trazem benefícios destrói sua reputação.
                </p>
              </div>
            </div>

            <div className="bg-[#00c853]/5 border border-[#00c853]/20 rounded-2xl p-5 space-y-3">
              <h5 className="text-xs font-extrabold text-[#1a237e] uppercase tracking-wider border-b pb-2 flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-[#00c853]" />
                <span>💡 A Grande Dica de Ouro</span>
              </h5>
              <p className="text-[11px] text-slate-650 font-sans leading-relaxed space-y-2">
                <strong>Escolha e domine um único Nicho de Atuação:</strong> Em vez de anunciar aleatoriamente todos os produtos que encontrar no mercado, especialize-se em um único segmento bem delimitado (saúde, beleza, confeitaria, finanças pessoais ou autoajuda) e foque de forma unificada nele. É infinitamente mais prático e converte muito melhor!
              </p>
            </div>
          </div>

          {/* Final Promo Box */}
          <div className="bg-[#1a237e] text-white rounded-2xl p-6 text-center space-y-3 relative overflow-hidden shadow-xs">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#00c853]/10 rounded-full blur-xl pointer-events-none" />
            
            <h5 className="text-sm font-black uppercase tracking-wider">Comece Hoje Mesmo, do Zero! 🚀</h5>
            <p className="text-xs font-sans max-w-xl mx-auto opacity-95">
              Crie agora mesmo sua conta gratuita na Hotmart, selecione um excelente produto e encaminhe seu link exclusivo para 5 conhecidos que possam se interessar hoje mesmo. O pontapé inicial é só começar!
            </p>
          </div>
        </div>
      )
    },
    {
      id: "guia-cursos-e-freelancer",
      title: "Guia: Cursos & Freelancer",
      category: "inicio",
      icon: Briefcase,
      badge: "Iniciante",
      content: (
        <div className="space-y-6 animate-fadeIn">
          {/* Header Banner */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-50/10 text-[#1a237e] flex items-center justify-center shrink-0">
                <Briefcase className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-indigo-600 uppercase tracking-wider block">Estude Grátis • Fature Online</span>
                <h3 className="text-xl sm:text-2xl font-black text-[#1a237e]">
                  Guia Completo: Cursos & Freelancer
                </h3>
              </div>
            </div>
            <p className="text-slate-650 text-sm leading-relaxed font-sans">
              Aprenda uma habilidade altamente valorizada de graça e comece a cobrar por ela na internet — mesmo sem experiência anterior ou carteira assinada.
            </p>
          </div>

          {/* O que é ser freelancer */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 shadow-xs">
            <h4 className="text-xs font-extrabold text-[#1a237e] uppercase tracking-wider border-b pb-2 flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-[#00c853]" />
              <span>O que é ser freelancer?</span>
            </h4>
            <p className="text-[11px] text-slate-555 font-sans leading-relaxed">
              Freelancer é quem trabalha de forma independente, oferecendo e prestando serviços pontuais para vários clientes de forma remota, sem qualquer vínculo empregatício. Você define com total liberdade seus próprios horários de trabalho, seus preços e escolhe para quem quer trabalhar.
            </p>
          </div>

          {/* Onde encontrar clientes */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-[#1a237e] flex items-center gap-2">
              <Globe className="h-5 w-5 text-[#00c853]" />
              <span>💼 Onde Encontrar Clientes: Principais Plataformas</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  name: "Workana",
                  desc: "A maior plataforma de freelancers de toda a América Latina. Recheada de vagas diárias de design, redação, marketing, programação e suporte digital.",
                  badge: "Grátis para se cadastrar",
                  tax: "Taxa de 5% a 20%",
                  url: "https://workana.com"
                },
                {
                  name: "99Freelas",
                  desc: "Plataforma focada no mercado nacional com forte volume de projetos de curto prazo. Excelente para iniciantes buscarem experiência rápida.",
                  badge: "Cadastro gratuito",
                  tax: "Muitos projetos",
                  url: "https://99freelas.com.br"
                },
                {
                  name: "Fiverr",
                  desc: "Plataforma mundial. Você lista pacotes de serviços pré-formatados e compradores globais te contratam. Pagamentos realizados em Dólar!",
                  badge: "Paga em Dólar",
                  tax: "Interface em Inglês",
                  url: "https://fiverr.com"
                },
                {
                  name: "GetNinjas",
                  desc: "Excelente portal para anunciar tanto serviços 100% online quanto de atendimento local em sua cidade (digitação, aulas particulares ou suporte).",
                  badge: "Suporte local",
                  tax: "Cadastro simples",
                  url: "https://getninjas.com.br"
                }
              ].map((plat, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 hover:border-[#00c853]/50 hover:shadow-xs transition-all flex flex-col justify-between space-y-3.5">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-[#1a237e]">{plat.name}</span>
                      <span className="text-[9px] font-mono font-bold bg-[#00c853]/10 text-[#00c853] px-1.5 py-0.5 rounded">
                        {plat.badge}
                      </span>
                    </div>
                    <p className="text-[10.5px] text-slate-500 font-sans leading-relaxed">{plat.desc}</p>
                  </div>
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-mono font-bold text-slate-400 block">
                      {plat.tax}
                    </span>
                    <a
                      href={plat.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] font-bold text-[#1a237e] hover:underline uppercase font-mono tracking-wider"
                    >
                      <span>Entrar</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Como conseguir seu primeiro cliente */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h4 className="text-base font-bold text-[#1a237e] flex items-center gap-2">
              <Zap className="h-5 w-5 text-[#00c853]" />
              <span>🚀 Como Conseguir seu 1º Cliente (Passo a Passo)</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { step: "1", title: "Crie um perfil impecável", desc: "Use fotos limpas com aparência profissional. Escreva uma biografia objetiva listando suas habilidades e anexe bons exemplos de portfólio. Perfis incompletos não atraem propostas." },
                { step: "2", title: "Candidaturas ativas diárias", desc: "No início, não espere os clientes entrarem em contato passivamente. Vá ativamente ao mercado e envie propostas para vários projetos todos os dias." },
                { step: "3", title: "Formule uma boa proposta", desc: "Prove ao cliente de forma direta que você leu a descrição da vaga, explique precisamente o que entregará e demonstre entusiasmo para fechar o projeto." },
                { step: "4", title: "Entregue antes do prazo final", desc: "Esta é a melhor maneira de arrancar avaliações de 5 estrelas do cliente. Feedbacks positivos no seu perfil são seu maior patrimônio digital como freelancer." },
                { step: "5", title: "Fidelize e acumule avaliações", desc: "Ofereça suporte atencioso e peça educadamente uma avaliação sincera de 5 estrelas após cada conclusão de entrega. Clientes satisfeitos tendem a recontratar ou indicar seu trabalho." }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50/50 border border-slate-200/60 rounded-xl p-4.5 space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded bg-[#1a237e] text-white flex items-center justify-center font-mono text-xs font-bold shrink-0">
                      {item.step}
                    </span>
                    <h5 className="text-xs font-bold text-[#1a237e] font-sans">{item.title}</h5>
                  </div>
                  <p className="text-[11px] text-slate-550 font-sans leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Modelo de proposta */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3.5 relative shadow-xs">
            <div className="flex justify-between items-center text-xs font-mono border-b pb-2">
              <span className="text-[#1a237e] font-bold font-sans">✍️ Modelo de Proposta Vencedora (Copie e Personalize)</span>
              <button
                onClick={() => copyToClipboard(
                  `Olá! Li seu projeto e entendi que você precisa de [o que o cliente quer].\\n\\nTenho experiência com [habilidade] e posso entregar exatamente o que você descreveu.\\n\\nEntrego em [prazo] com [número] de revisões incluídas.\\n\\nVeja exemplos do meu trabalho aqui: [link ou imagem].\\n\\nFico à disposição para conversar. Vamos começar?`,
                  "freelancer-proposal-copied"
                )}
                className="text-slate-400 hover:text-[#00c853] flex items-center gap-1 cursor-pointer bg-slate-50 border p-1 rounded hover:border-[#00c853] text-[10px]"
              >
                {copiedText === "freelancer-proposal-copied" ? <Check className="h-3.5 w-3.5 text-[#00c853]" /> : <Copy className="h-3 w-3" />}
                <span>{copiedText === "freelancer-proposal-copied" ? "Copiado!" : "Copiar"}</span>
              </button>
            </div>
            <p className="text-xs text-slate-650 italic font-sans leading-relaxed">
              "Olá! Li seu projeto e entendi que você precisa de <strong>[o que o cliente quer]</strong>.<br className="my-1"/>
              Tenho experiência com <strong>[habilidade]</strong> e posso entregar exatamente o que você descreveu.<br className="my-1"/>
              Entrego em <strong>[prazo]</strong> com <strong>[número]</strong> de revisões incluídas.<br className="my-1"/>
              Veja exemplos do meu trabalho aqui: <strong>[link ou imagem]</strong>.<br className="my-1"/>
              Fico à disposição para conversar. Vamos começar?"
            </p>
            <div className="p-3 bg-emerald-500/5 border border-emerald-500/15 rounded-xl text-[10.5px] text-slate-600 font-sans leading-relaxed">
              <span className="text-emerald-700 font-bold block mb-0.5">💡 Dica do Profissional</span>
              Nunca copie e cole exatamente a mesma proposta para todos de forma automática. Personalize os detalhes para cada nicho, pois isso duplica suas chances de aprovação!
            </div>
          </div>

          {/* Potencial de Ganho */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h4 className="text-base font-bold text-[#1a237e] flex items-center gap-2">
              <Sliders className="h-5 w-5 text-[#00c853]" />
              <span>📊 Potencial de Ganho: Tabela de Preços Sugeridos</span>
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-650 font-sans border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/50">
                    <th className="py-3 px-4 text-[#1a237e] font-bold">Serviço Oferecido</th>
                    <th className="py-3 px-4 text-[#1a237e] font-bold">Nível Requerido</th>
                    <th className="py-3 px-4 text-[#1a237e] font-bold text-right">Valor Médio Estimado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { svc: "Post para Instagram", lvl: "Iniciante", rate: "R$ 30 – R$ 80" },
                    { svc: "Logotipo Simples (Branding)", lvl: "Iniciante", rate: "R$ 80 – R$ 250" },
                    { svc: "Redação de Texto / Artigo acadêmico", lvl: "Iniciante", rate: "R$ 40 – R$ 150" },
                    { svc: "Edição de Vídeo Curto (Reels/TikTok)", lvl: "Médio", rate: "R$ 100 – R$ 600" },
                    { svc: "Gestão completa de Redes Sociais", lvl: "Médio", rate: "R$ 400 – R$ 1.500 / mês" },
                    { svc: "Assistência Virtual de Suporte", lvl: "Iniciante", rate: "R$ 800 – R$ 2.000 / mês" }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 transition-colors">
                      <td className="py-3.5 px-4 font-medium text-slate-800">{row.svc}</td>
                      <td className="py-3.5 px-4 text-slate-500 font-mono">{row.lvl}</td>
                      <td className="py-3.5 px-4 text-right font-bold text-[#00c853] font-mono">{row.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-red-500/5 border border-red-200 rounded-xl text-[11px] text-red-800 font-sans leading-relaxed flex items-start gap-2">
              <span className="text-lg mt-0.5">⚠️</span>
              <div>
                <strong>Atenção ao Valorizar-se:</strong> Não cobre preços extremamente baixos de forma repetitiva! Cobrar barato demais em excesso desvaloriza a percepção do seu trabalho pelo comprador. Faça uma média de pesquisa do mercado antes de cotar e estabeleça um preço inteligente — clientes verdadeiramente comprometidos pagam o valor justo!
              </div>
            </div>
          </div>

          {/* Call to action & motivational footer */}
          <div className="bg-indigo-950 text-white rounded-2xl p-6 text-center space-y-3 relative overflow-hidden shadow-xs">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#00c853]/10 rounded-full blur-xl pointer-events-none" />
            
            <h5 className="text-sm font-black uppercase tracking-wider">Conhecimento Vira Dinheiro. Comece Hoje Mesmo! 🎓</h5>
            <p className="text-xs font-sans max-w-xl mx-auto opacity-95">
              Escolha apenas uma habilidade que você ache interessante (como edição ou design básico). Estude muito e de graça por 30 dias assistindo o YouTube. Em seguida, cadastre-se ativamente no portal Workana. Em 60 dias você pode muito bem celebrar seu primeiríssimo faturamento em mãos!
            </p>
          </div>
        </div>
      )
    },
    {
      id: "guia-do-criador-conteudo-monetizar",
      title: "Guia: Criador de Conteúdo",
      category: "inicio",
      icon: Video,
      badge: "Iniciante",
      content: (
        <div className="space-y-6 animate-fadeIn">
          {/* Header Banner */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-rose-50/10 text-rose-600 flex items-center justify-center shrink-0">
                <Video className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-rose-600 uppercase tracking-wider block">Celular no Bolso • Sem Seguidores</span>
                <h3 className="text-xl sm:text-2xl font-black text-[#1a237e]">
                  Guia do Criador: Crie Conteúdo e Ganhe Dinheiro
                </h3>
              </div>
            </div>
            <p className="text-slate-650 text-sm leading-relaxed font-sans">
              Mostre o que você sabe, construa uma audiência engajada e monetize o seu conhecimento na internet — mesmo começando do absoluto zero, apenas com seu celular!
            </p>
            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
              <span className="text-[10.5px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 flex items-center gap-1">🎵 TikTok</span>
              <span className="text-[10.5px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 flex items-center gap-1">📸 Instagram</span>
              <span className="text-[10.5px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 flex items-center gap-1">▶️ YouTube</span>
              <span className="text-[10.5px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 flex items-center gap-1">🎬 Kwai</span>
            </div>
          </div>

          {/* Onde publicar - Escolha sua plataforma */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-[#1a237e] flex items-center gap-2">
              <Layers className="h-5 w-5 text-rose-500" />
              <span>Onde Publicar: Escolha sua plataforma principal</span>
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* TikTok */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-rose-500 hover:shadow-xs transition-all flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">TikTok</span>
                    <span className="text-lg">🎵</span>
                  </div>
                  <h5 className="text-sm font-bold text-[#1a237e] font-sans">Melhor para iniciantes!</h5>
                  <p className="text-[11px] text-slate-550 font-sans leading-relaxed">
                    O poderoso algoritmo do TikTok entrega seus vídeos para novas pessoas mesmo que você tenha exatamente zero seguidores. Perfeito para postar e testar ideias em formato de vídeos de 30 segundos a 3 minutos.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  <span className="text-[9px] font-bold font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Alcance orgânico</span>
                  <span className="text-[9px] font-bold font-mono text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">Ideal pra começar</span>
                  <span className="text-[9px] font-bold font-mono text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded">Paga por views</span>
                </div>
              </div>

              {/* Instagram */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-rose-500 hover:shadow-xs transition-all flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">Instagram Reels</span>
                    <span className="text-lg">📸</span>
                  </div>
                  <h5 className="text-sm font-bold text-[#1a237e] font-sans">Reels e proximidade</h5>
                  <p className="text-[11px] text-slate-550 font-sans leading-relaxed">
                    O formato de Reels curtos tem um alcance estrondoso de expansão. Ótimo canal para promover e comercializar produtos ou serviços pontuais. Combine-o com Stories diários para engajar e reter sua base.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  <span className="text-[9px] font-bold font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Reels crescem rápido</span>
                  <span className="text-[9px] font-bold font-mono text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">Vendas diretas</span>
                  <span className="text-[9px] font-bold font-mono text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded">Link na bio</span>
                </div>
              </div>

              {/* YouTube */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-rose-500 hover:shadow-xs transition-all flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">YouTube</span>
                    <span className="text-lg">▶️</span>
                  </div>
                  <h5 className="text-sm font-bold text-[#1a237e] font-sans">Conteúdo de longa cauda</h5>
                  <p className="text-[11px] text-slate-550 font-sans leading-relaxed">
                    Seus conteúdos continuam gerando visualizações por anos seguidos após a postagem. Misture vídeos profundos de plano longo com YouTube Shorts para crescer seu público organicamente.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  <span className="text-[9px] font-bold font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Longo prazo</span>
                  <span className="text-[9px] font-bold font-mono text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">Maior pagamento</span>
                  <span className="text-[9px] font-bold font-mono text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded">YouTube Shorts</span>
                </div>
              </div>

              {/* Kwai */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-rose-500 hover:shadow-xs transition-all flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">Kwai</span>
                    <span className="text-lg">🎬</span>
                  </div>
                  <h5 className="text-sm font-bold text-[#1a237e] font-sans">Ganhos imediatos e tarefas</h5>
                  <p className="text-[11px] text-slate-550 font-sans leading-relaxed">
                    Plataforma extremamente generosa que remunera diretamente as suas visualizações acumuladas e pequenas tarefas e gincanas diárias dentro da plataforma. Ideal para levantar faturamento rápido e inicial.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  <span className="text-[9px] font-bold font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Paga por views</span>
                  <span className="text-[9px] font-bold font-mono text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">Fácil para iniciantes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Escolha um nicho */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h4 className="text-base font-bold text-[#1a237e] flex items-center gap-2">
              <Target className="h-5 w-5 text-rose-500" />
              <span>O que postar: Escolha um ótimo nicho (tema)</span>
            </h4>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { emoji: "🍳", topic: "Culinária", desc: "Receitas rápidas, truques culinários e segredos de cozinha. Altamente viral!" },
                { emoji: "💰", topic: "Finanças", desc: "Dicas de economia doméstica, ideias de renda extra e introdução a investimentos." },
                { emoji: "💪", topic: "Saúde e Fitness", desc: "Séries de exercícios em casa, hábitos diários e alimentação saudável." },
                { emoji: "✂️", topic: "Beleza e Moda", desc: "Tutoriais de maquiagem, combinações de looks diários e penteados." },
                { emoji: "📚", topic: "Educação", desc: "Ensine qualquer conhecimento útil que você domine — desde idiomas a truques de Excel." },
                { emoji: "😂", topic: "Humor & Sketches", desc: "Vídeos curtos divertidos, representações engraçadas e reações de memes." },
                { emoji: "🏠", topic: "Casa & Organização", desc: "Transformações de ambientes, truques rápidos de faxina e rotina prática." },
                { emoji: "🐾", topic: "Animais (Pets)", desc: "Momentos fofos e engraçados com cães e gatos sempre viralizam com muita facilidade!" }
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-slate-50 border border-slate-200/60 rounded-xl space-y-1.5">
                  <div className="text-2xl">{item.emoji}</div>
                  <h5 className="text-xs font-bold text-[#1a237e] font-sans">{item.topic}</h5>
                  <p className="text-[10px] text-slate-500 font-sans leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#00c853]/5 border border-[#00c853]/20 rounded-xl space-y-1">
              <h5 className="text-xs font-bold text-[#1a237e] font-sans flex items-center gap-1.5">
                <Lightbulb className="h-4 w-4 text-[#00c853]" />
                <span>💡 Dica de Ouro de Posicionamento</span>
              </h5>
              <p className="text-[10.5px] text-slate-650 font-sans leading-relaxed">
                Opte por um nicho que você realmente tenha prazer em pesquisar e consumir no dia a dia. É infinitamente mais prático e motivador criar conteúdos quando o assunto te anima genuinamente. Você não precisa obrigatoriamente ser um renomado especialista nacional — apenas mostre seu aprendizado de forma 100% autêntica!
              </p>
            </div>
          </div>

          {/* Passo a passo: Como começar do zero */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h4 className="text-base font-bold text-[#1a237e] flex items-center gap-2">
              <CheckSquare className="h-5 w-5 text-rose-500" />
              <span>Como começar do zero (A trilha de 6 passos simples)</span>
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { step: "1", title: "Crie contas nas plataformas", desc: "Baixe o TikTok e o Instagram hoje mesmo. Escolha um nome de usuário limpo e fácil de lembrar e use uma foto nítida sua — perfis com fotos humanizadas passam muito mais credibilidade e confiança." },
                { step: "2", title: "Defina o tema e respeite-o", desc: "Publique única e exclusivamente sobre o tema central escolhido. Perfis que misturam vários nichos aleatórios tendem a confundir o robô das plataformas e desacelerar o crescimento." },
                { step: "3", title: "Grave de forma simples", desc: "Você absolutamente NÃO necessita de estúdios ou câmeras caríssimas. Um celular básico com a câmera no modo retrato e luz solar direta de uma janela são o suficiente." },
                { step: "4", title: "Poste frequentemente", desc: "Publique idealmente todos os dias ou pelo menos 4 a 5 vezes por semana. No início da sua jornada, a consistência de envios é ainda mais vital do que o preciosismo estético." },
                { step: "5", title: "Estude suas melhores postagens", desc: "Observe com atenção quais conteúdos tiveram maior engajamento e visualizações em sua biblioteca e replique o mesmo formato sob novos tópicos similares no seu nicho." },
                { step: "6", title: "Crie conexão genuína", desc: "Sempre reserve tempo para conversar amigavelmente na seção de comentários, responder dúvidas das pessoas e iniciar Lives frequentes — o engajamento qualificado atrai recomendações orgânicas." }
              ].map((item, id) => (
                <div key={id} className="bg-rose-50/10 border border-rose-500/10 rounded-xl p-4.5 space-y-2 flex flex-col justify-start">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded bg-rose-500 text-white flex items-center justify-center font-mono text-xs font-bold shrink-0">
                      {item.step}
                    </span>
                    <h5 className="text-xs font-bold text-[#1a237e] font-sans">{item.title}</h5>
                  </div>
                  <p className="text-[10.5px] text-slate-550 font-sans leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Inspiração: Ideias de vídeos para começar hoje */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex justify-between items-center border-b pb-2">
              <h4 className="text-base font-bold text-[#1a237e] flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-rose-500" />
                <span>🎯 Inspiração: Fórmulas que sempre viralizam rápido</span>
              </h4>
              <button
                onClick={() => copyToClipboard(
                  `Fórmulas de Conteúdo Viral:\\n1. "3 dicas de [tema] que ninguém te conta"\\n2. "Como eu aprendi a [habilidade] em X dias"\\n3. "Antes e depois de [transformação]"\\n4. "Você sabia que [fato surpreendente]?"\\n5. "Erro que todo mundo comete em [tema]"\\n6. "Respondendo dúvidas dos seguidores"`,
                  "creator-formulas-copied"
                )}
                className="text-slate-400 hover:text-rose-600 flex items-center gap-1 cursor-pointer bg-slate-50 border p-1 rounded hover:border-rose-500 text-[10px] font-mono"
              >
                {copiedText === "creator-formulas-copied" ? <Check className="h-3.5 w-3.5 text-rose-700" /> : <Copy className="h-3 w-3" />}
                <span>{copiedText === "creator-formulas-copied" ? "Copiado!" : "Copiar Fórmulas"}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { formula: "“3 dicas de [tema] que ninguém te conta”", benefit: "Gera curiosidade imediata e altíssima taxa de salvamento nos favoritos, funcionando em literalmente qualquer nicho de atuação." },
                { formula: "“Como eu aprendi a [habilidade] em X dias”", benefit: "Documenta e compartilha a sua própria jornada e evolução real, humanizando e facilitando a conexão com os espectadores de início." },
                { formula: "“Antes e depois de [transformação]”", benefit: "Formato visualmente fantástico que estimula o público a compartilhar e assistir ao vídeo novamente até o final." },
                { formula: "“Você sabia que [fato surpreendente sobre o nicho]?”", benefit: "Inicia com um gancho mental e questionamentos surpreendentes que prendem a atenção nos preciosos 3 primeiros segundos." },
                { formula: "“Erro que todo mundo comete em [tema]”", benefit: "Gera identificação instantânea e atrai cliques e reações rápidas de pessoas curiosas para saber se erram naquilo." },
                { formula: "“Respondendo dúvidas dos seguidores”", benefit: "Usa comentários reais de lives e posts como novos conteúdos criativos, estreitando os laços e aumentando o engajamento." }
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-slate-50/50 border border-slate-200/80 rounded-xl space-y-1.5 hover:border-rose-500/25 transition-all">
                  <div className="text-xs font-extrabold text-[#1a237e] font-sans flex items-center gap-1.5">
                    <span className="text-rose-500 font-bold font-mono">→</span>
                    <span>{item.formula}</span>
                  </div>
                  <p className="text-[10.5px] text-slate-500 font-sans leading-relaxed">{item.benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Como ganhar dinheiro: Formas de monetizar */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h4 className="text-base font-bold text-[#1a237e] flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-rose-500" />
              <span>Como Ganhar Dinheiro: Formas de Monetizar o Canal</span>
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* YouTube Ads */}
              <div className="p-4.5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-extrabold text-[#1a237e] uppercase tracking-wider font-mono">Anúncios</span>
                    <span className="text-lg">📺</span>
                  </div>
                  <h5 className="text-xs font-bold text-[#1a237e] font-sans">Monetização de Visualizações</h5>
                  <p className="text-[10px] text-slate-550 font-sans leading-relaxed">
                    Alcance os requisitos de 1.000 inscritos e 4.000 horas do canal do YouTube para habilitar anúncios automáticos nos seus vídeos longos ou Shorts.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200/60 font-mono text-[10px] font-bold text-emerald-650 h-5 flex items-center">
                  R$ 2 a R$ 20 por 1.000 views
                </div>
              </div>

              {/* Links de Afiliados */}
              <div className="p-4.5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-extrabold text-[#1a237e] uppercase tracking-wider font-mono">Afiliado</span>
                    <span className="text-lg">🔗</span>
                  </div>
                  <h5 className="text-xs font-bold text-[#1a237e] font-sans">Links de Indicação Direta</h5>
                  <p className="text-[10px] text-slate-550 font-sans leading-relaxed">
                    Adicione links de afiliado estrategicamente na bio do seu perfil, na descrição de vídeos e nos stories para comissionar cada conversão de compra.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200/60 font-mono text-[10px] font-bold text-emerald-650 h-5 flex items-center">
                  R$ 10 a R$ 500+ por venda
                </div>
              </div>

              {/* Publipost */}
              <div className="p-4.5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-extrabold text-[#1a237e] uppercase tracking-wider font-mono">Parcerias</span>
                    <span className="text-lg">🤝</span>
                  </div>
                  <h5 className="text-xs font-bold text-[#1a237e] font-sans">Publipost & Marcas unidas</h5>
                  <p className="text-[10px] text-slate-550 font-sans leading-relaxed">
                    Marcas e empresas patrocinam vídeos focados em seus produtos e soluções. Campanhas tendem a iniciar organicamente dos 5.000 a 10.000 seguidores.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200/60 font-mono text-[10px] font-bold text-emerald-650 h-5 flex items-center">
                  R$ 100 a R$ 5.000 por post
                </div>
              </div>

              {/* Lives */}
              <div className="p-4.5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-extrabold text-[#1a237e] uppercase tracking-wider font-mono">Transmissões</span>
                    <span className="text-lg">🎁</span>
                  </div>
                  <h5 className="text-xs font-bold text-[#1a237e] font-sans">Presentes de Lives (TikTok/Kwai)</h5>
                  <p className="text-[10px] text-slate-550 font-sans leading-relaxed">
                    Seus espectadores convertem e encaminham adesivos de presente virtuais durante as transmissões que se transformam em fundos bancários reais!
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200/60 font-mono text-[10px] font-bold text-emerald-650 h-5 flex items-center">
                  Varia de acordo com audiência
                </div>
              </div>

              {/* Seus Produtos */}
              <div className="p-4.5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between space-y-3 col-span-1 md:col-span-2">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-extrabold text-[#1a237e] uppercase tracking-wider font-mono">Próprio</span>
                    <span className="text-lg">📦</span>
                  </div>
                  <h5 className="text-xs font-bold text-[#1a237e] font-sans">Venda seus Próprios Infoprodutos ou Serviços</h5>
                  <p className="text-[10px] text-slate-550 font-sans leading-relaxed">
                    Aproveite a autoridade estabelecida com a comunidade para divulgar e vender suas mentorias, e-books autorais, cursos ou produtos artesanais de confecção física. Representa a maior taxa de margem de lucro de caixa!
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200/60 font-mono text-[10px] font-bold text-emerald-650 h-5 flex items-center">
                  Você define o preço final
                </div>
              </div>
            </div>
          </div>

          {/* Atenção - Erros que travam o crescimento */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-500/5 border border-red-200 rounded-2xl p-5 space-y-3">
              <h5 className="text-xs font-extrabold text-[#1a237e] uppercase tracking-wider border-b pb-2 flex items-center gap-2">
                <Info className="h-4 w-4 text-red-500" />
                <span>⚠️ Erros Críticos que Travam seu Crescimento</span>
              </h5>
              
              <ul className="text-slate-650 text-[11px] leading-relaxed space-y-2.5 font-sans">
                <li>
                  <strong>✗ Desistir antes de concluir 3 meses:</strong> O amadurecimento algorítmico demanda tempo constante de publicação. A consistência gera o impulsionamento exponencial.
                </li>
                <li>
                  <strong>✗ Tentar postar sobre múltiplos temas:</strong> Escolha e decida uma linha editorial de início. O robô rejeita canais sem alinhamento temático claro.
                </li>
                <li>
                  <strong>✗ Copiar fielmente outros criadores:</strong> Inspire-se no formato, mas use sim suas opiniões, sorrisos e tom. Autenticidade total atrai visualizações repetitivas.
                </li>
                <li>
                  <strong>✗ Ficar esperando estar idealmente pronto:</strong> Lance-se agora com a iluminação e as falas atuais! Você aperfeiçoará as técnicas de forma empírica ao longo do processo.
                </li>
                <li>
                  <strong>✗ Desconsiderar sua seção de comentários:</strong> Deixar seus seguidores sem interações bloqueia as métricas de engajamento do algoritmo.
                </li>
              </ul>
            </div>

            <div className="bg-[#00c853]/5 border border-[#00c853]/20 rounded-2xl p-5 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <h5 className="text-xs font-extrabold text-[#1a237e] uppercase tracking-wider border-b pb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#00c853]" />
                  <span>⭐ A Regra Fundamental dos 90 Dias</span>
                </h5>
                <p className="text-[11px] text-slate-650 font-sans leading-relaxed">
                  Crie e poste conteúdo direcionado no seu segmento todos os dias pelos próximos 90 dias ininterruptos. Praticamente 100% de todos os novos criadores que mantêm essa rigorosa constância de publicação alcançam faturamentos e audiências expressivas.
                </p>
              </div>
              <div className="p-3 bg-indigo-50 border rounded-xl text-[10px] font-bold font-sans text-indigo-700 italic">
                “O maior e único obstáculo do jogo de audiência é desistir antes de colher os frutos.”
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-rose-600 text-white rounded-2xl p-6 text-center space-y-3 relative overflow-hidden shadow-xs">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-rose-500/10 rounded-full blur-xl pointer-events-none" />
            
            <h5 className="text-sm font-black uppercase tracking-wider">Sua câmera já está no seu bolso. Comece hoje! 🎬</h5>
            <p className="text-xs font-sans max-w-xl mx-auto opacity-95">
              Instale o app do TikTok agora, selecione uma paixão de sua preferência, monte seu roteiro simples e grave sua primeira postagem oficial. Deixe a perfeição de lado e priorize publicar!
            </p>
          </div>
        </div>
      )
    },
    {
      id: "guia-design-e-arte-digital",
      title: "Guia: Design & Arte Digital",
      category: "inicio",
      icon: Palette,
      badge: "Iniciante",
      content: (
        <div className="space-y-6 animate-fadeIn">
          {/* Header Banner */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-violet-50/10 text-violet-600 flex items-center justify-center shrink-0">
                <Palette className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-violet-600 uppercase tracking-wider block">Estética • Comunicação • Criação</span>
                <h3 className="text-xl sm:text-2xl font-black text-[#1a237e]">
                  Guia Prático: Design & Arte Digital
                </h3>
              </div>
            </div>
            <p className="text-slate-650 text-sm leading-relaxed font-sans">
              Áreas criativas incríveis que combinam estética, comunicação visual e ferramentas digitais. Se você está começando do zero, pode aprender de forma estruturada e profissional mesmo sem experiência prévia!
            </p>
          </div>

          {/* O que estudar primeiro */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-[#1a237e] flex items-center gap-2">
              <Layers className="h-5 w-5 text-violet-500" />
              <span>O que estudar primeiro (Mapeamento de Estudos)</span>
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* 1. Fundamentos de Design */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-violet-500 transition-all flex flex-col justify-between space-y-3">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded bg-violet-650 text-white flex items-center justify-center font-mono text-xs font-bold">1</span>
                    <h5 className="text-xs font-bold text-[#1a237e] uppercase tracking-wider">Fundamentos de Design</h5>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                    Aprenda conceitos fundamentais que servem para todo e qualquer tipo de projeto ou software visual:
                  </p>
                  <ul className="text-[11px] text-slate-650 space-y-1.5 list-disc pl-4 font-sans">
                    <li><strong>Composição visual:</strong> Organização de elementos na tela</li>
                    <li><strong>Teoria das cores:</strong> Harmonias e sensações das cores</li>
                    <li><strong>Tipografia:</strong> Escolha e emparelhamento de fontes</li>
                    <li><strong>Hierarquia:</strong> Destacar o que é mais importante</li>
                    <li><strong>Contraste e equilíbrio:</strong> Proporção visual ideal</li>
                    <li><strong>Alinhamento e espaçamento:</strong> Uso inteligente de respiros</li>
                  </ul>
                </div>
              </div>

              {/* 2. Desenho e Ilustração */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-violet-500 transition-all flex flex-col justify-between space-y-3">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded bg-violet-650 text-white flex items-center justify-center font-mono text-xs font-bold">2</span>
                    <h5 className="text-xs font-bold text-[#1a237e] uppercase tracking-wider">Desenho & Ilustração</h5>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                    Práticas essenciais para quem deseja se aprofundar na representação gráfica e pintura digital:
                  </p>
                  <ul className="text-[11px] text-slate-650 space-y-1.5 list-disc pl-4 font-sans">
                    <li><strong>Formas básicas:</strong> Desconstrução de objetos complexos</li>
                    <li><strong>Perspectiva:</strong> Dar profundidade tridimensional</li>
                    <li><strong>Luz e sombra:</strong> Criar volume e realismo nas artes</li>
                    <li><strong>Anatomia humana:</strong> Proporções de corpos e rostos</li>
                    <li><strong>Cenários e objetos:</strong> Criação de mundos envolventes</li>
                  </ul>
                </div>
              </div>

              {/* 3. Ferramentas Digitais */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-violet-500 transition-all flex flex-col justify-between space-y-3">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded bg-violet-650 text-white flex items-center justify-center font-mono text-xs font-bold">3</span>
                    <h5 className="text-xs font-bold text-[#1a237e] uppercase tracking-wider">Ferramentas Digitais</h5>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                    Programas mais consolidados e recomendados do mercado artístico e corporativo:
                  </p>
                  <ul className="text-[11px] text-slate-650 space-y-1.5 list-disc pl-4 font-sans">
                    <li><strong>Adobe Photoshop:</strong> Pintura digital e manipulação</li>
                    <li><strong>Adobe Illustrator:</strong> Criação de logos e vetores</li>
                    <li><strong>Procreate:</strong> Excelente software para ilustrações no iPad</li>
                    <li><strong>Krita:</strong> Incrível ferramenta gratuita para artistas digitais</li>
                    <li><strong>GIMP:</strong> Alternativa open-source gratuita ao Photoshop</li>
                    <li><strong>Blender:</strong> Software completo de modelagem e arte 3D</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Como Praticar (Projetos sugeridos) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h4 className="text-base font-bold text-[#1a237e] flex items-center gap-2">
              <CheckSquare className="h-5 w-5 text-violet-500" />
              <span>Como Praticar: Crie Pequenos Projetos Reais</span>
            </h4>
            <p className="text-xs text-slate-550 leading-relaxed font-sans">
              A melhor forma de evoluir no design e na ilustração é colocando a mão na massa. Em vez de ler toneladas de teorias, force-se a concluir projetos fictícios práticos:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: "Criar um cartaz promocional", desc: "Monte pôsteres fictícios de shows, eventos locais ou filmes cults." },
                { label: "Ilustrar personagens autorais", desc: "Comece definindo formas simples e evolua para roupas e colorização." },
                { label: "Produzir capas para redes sociais", desc: "Crie designs profissionais para e-sports, canais do YouTube ou marcas." },
                { label: "Criar logotipos fictícios", desc: "Crie marcas com base em Briefings gerados ou ideias de comércios." },
                { label: "Desenhar belas paisagens", desc: "Treine perspectiva, atmosfera e gradiente de cor ambientados." },
                { label: "Produzir artes para jogos", desc: "Crie botões de interface (UI), peças de cenários ou sprites de animação." }
              ].map((proj, idx) => (
                <div key={idx} className="p-4 bg-slate-50/50 border border-slate-200/60 rounded-xl space-y-1.5">
                  <div className="text-xs font-bold text-[#1a237e] font-sans flex items-center gap-1.5">
                    <span className="text-violet-500 font-bold font-mono">✦</span>
                    <span>{proj.label}</span>
                  </div>
                  <p className="text-[10.5px] text-slate-500 font-sans leading-relaxed">{proj.desc}</p>
                </div>
              ))}
            </div>
            <div className="p-3 bg-violet-500/5 border border-violet-500/10 rounded-xl font-medium text-[11px] text-slate-600 text-center font-sans">
              💡 <strong>Regra de Ouro:</strong> Quanto maior o número de pequenos projetos finalizados você concluir, mais ágil e natural se tornará sua percepção visual e domínio técnico das ferramentas!
            </div>
          </div>

          {/* Recursos Gratuitos & Portfólio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Recursos Gratuitos */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4">
              <h5 className="text-xs font-extrabold text-[#1a237e] uppercase tracking-wider border-b pb-2 flex items-center gap-2">
                <Star className="h-4 w-4 text-violet-500" />
                <span>Recursos Gratuitos para Aprender</span>
              </h5>
              <div className="space-y-3.5">
                {[
                  { title: "Vídeos no YouTube", desc: "É a maior escola gratuita do mundo. Procure por canais focados em design gráfico raiz no Photoshop/Illustrator e speed paints de pintura digital." },
                  { title: "Cursos gratuitos em plataformas", desc: "Aproveite cupons de introdução e sessões gratuitas na Udemy, Fundação Bradesco ou Coursera para aprender módulos básicos." },
                  { title: "Comunidades de artistas", desc: "Publique seus rascunhos em fóruns, canais do Discord ou Reddit de arte digital para coletar críticas profissionais construtivas." },
                  { title: "Desafios de desenho diário", desc: "Participe de movimentos globais conhecidos (como Inktober ou Daily Sketch) para condicionar sua criatividade diária." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start">
                    <span className="text-violet-500 mt-0.5 shrink-0">✔</span>
                    <div>
                      <h6 className="text-xs font-bold text-[#1a237e] font-sans">{item.title}</h6>
                      <p className="text-[10px] text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Monte seu Portfólio */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <h5 className="text-xs font-extrabold text-[#1a237e] uppercase tracking-wider border-b pb-2 flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-violet-500" />
                  <span>Monte um Portfólio Online de Sucesso</span>
                </h5>
                <p className="text-[11px] text-slate-650 leading-relaxed font-sans">
                  Não espere estar perfeito para postar suas obras. Crie o hábito de documentar sua evolução e organize seus melhores designs em galerias online. Ter um acervo visual claro e profissional é o principal pilar para atrair propostas de emprego corporativo ou fechar contratos vantajosos como freelancer!
                </p>
                <div className="grid grid-cols-2 gap-2 text-center text-[10px] font-mono font-bold text-slate-600">
                  <div className="p-2 border rounded bg-slate-50">Behance</div>
                  <div className="p-2 border rounded bg-slate-50">ArtStation</div>
                  <div className="p-2 border rounded bg-slate-50">Dribbble</div>
                  <div className="p-2 border rounded bg-slate-50">Instagram de Arte</div>
                </div>
              </div>
              <div className="bg-violet-50 border border-violet-200/50 p-3 rounded-xl text-[10px] text-violet-750 font-bold italic text-center font-sans">
                “No mercado criativo, seu melhor trabalho demonstrado fala muito mais do que qualquer certificado acadêmico.”
              </div>
            </div>
          </div>

          {/* Plano simples para iniciantes (30 dias) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h4 className="text-base font-bold text-[#1a237e] flex items-center gap-2">
              <Calendar className="h-5 w-5 text-violet-500" />
              <span>📅 Plano de Ação Prático para Iniciantes (Trilha de 30 Dias)</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { week: "Semana 1", title: "Cores e Fundamentos", items: ["Estudar teoria das cores e composição básica", "Aprender os comandos essenciais e menus do software escolhido", "Fazer exercícios simples de traço e recorte"] },
                { week: "Semana 2", title: "Designs Simples", items: ["Criar 3 cartazes promocionais fictícios", "Produzir posts rápidos bem diagramados", "Aprender a trabalhar com camadas (layers) e tipografia"] },
                { week: "Semana 3", title: "Luz, Sombra e Desenho", items: ["Praticar desenho de objetos e formas simples", "Aplicar estudos guiados de luz e sombreamento", "Colorizar ilustrações usando diferentes pincéis"] },
                { week: "Semana 4", title: "O Projeto Completo", items: ["Planejar e iniciar uma identidade visual ou ilustração densa", "Refinar detalhes de traço e iluminação", "Exportar no formato ideal e postar no portfólio oficial"] }
              ].map((wk, idx) => (
                <div key={idx} className="p-4 bg-violet-50/10 border border-violet-500/10 rounded-xl space-y-2.5">
                  <div className="flex justify-between items-center border-b pb-1.5 border-violet-500/10">
                    <span className="text-[10px] font-mono font-bold text-violet-600 uppercase tracking-wider">{wk.week}</span>
                    <span className="text-xs font-bold text-[#1a237e]">{wk.title}</span>
                  </div>
                  <ul className="text-[10px] text-slate-550 space-y-1.5 pl-3 list-disc leading-relaxed font-sans">
                    {wk.items.map((it, idy) => <li key={idy}>{it}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action footer */}
          <div className="bg-violet-650 text-white rounded-2xl p-6 text-center space-y-3 relative overflow-hidden shadow-xs">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-violet-500/10 rounded-full blur-xl pointer-events-none" />
            
            <h5 className="text-sm font-black uppercase tracking-wider">Desperte sua Criatividade. Comece Hoje! 🎓</h5>
            <p className="text-xs font-sans max-w-xl mx-auto opacity-95">
              Escolha uma única habilidade de design, instale um software de sua escolha (mesmo os gratuitos como o Krita), estude por 30 dias usando tutoriais práticos do YouTube e crie suas primeiras artes. Daqui a 60 dias, seu portfólio estará pronto para colher ótimos frutos!
            </p>
          </div>
        </div>
      )
    },
    {
      id: "guia-marketing-digital",
      title: "Guia: Marketing Digital",
      category: "inicio",
      icon: TrendingUp,
      badge: "Essencial",
      content: (() => {
        const marketingAreas = [
          {
            num: 1,
            title: "Social Media",
            sub: "Redes Sociais",
            emoji: "📱",
            whatIs: "Criar e gerenciar a presença estratégica de marcas nas redes sociais para construir audiência e gerar engajamento recorrente.",
            platforms: [
              { name: "Instagram", desc: "Foco intenso em imagem de alta qualidade, Reels conversivos e Stories para retenção diária." },
              { name: "TikTok", desc: "Vídeos curtos de entretenimento rápido com alcance orgânico viral extremamente alto." },
              { name: "LinkedIn", desc: "Focado no mercado corporativo B2B e fortalecimento de marca pessoal profissional." },
              { name: "YouTube", desc: "Vídeos longos educativos e Shorts na maior plataforma de visualização de vídeo do mundo." },
              { name: "Facebook", desc: "Ainda extremamente robusto para anúncios patrocinados e comunidades focadas em grupos de nicho." }
            ],
            tasks: [
              "Planejar e alimentar calendários de conteúdo mensal",
              "Produzir artes, vídeos curtos, stories e roteiros",
              "Interagir com a comunidade respondendo mensagens e directs",
              "Analisar métricas de engajamento, curtidas e salvamentos"
            ],
            howLearn: "Crie um perfil novo sobre um assunto específico e poste diariamente durante 30 dias. Avalie os dados para ver o que mais atrai a atenção.",
            color: "rose"
          },
          {
            num: 2,
            title: "SEO",
            sub: "Search Engine Optimization",
            emoji: "🔍",
            whatIs: "Otimizar sites, blogs e páginas para aparecer nas primeiras posições de busca orgânica do Google sem pagar por clique.",
            pilars: [
              { name: "SEO On-page", desc: "Uso inteligente de palavras-chave, cabeçalhos, títulos chamativos e estrutura de tópicos." },
              { name: "SEO Off-page", desc: "Aquisição de menções e links de outros portais apontando para o seu (link building)." },
              { name: "SEO Técnico", desc: "Aceleração da velocidade do site, responsividade em celulares e código limpo sem falhas." }
            ],
            tools: [
              "Google Search Console (Gratuito)",
              "Ubersuggest (Gratuito/Pago)",
              "SEMrush / Ahrefs (Sistemas premium avançados)"
            ],
            benefit: "Um texto bem posicionado no topo atrai milhares de visitas qualificadas todos os dias de forma totalmente gratuita por anos.",
            howLearn: "Crie um Blog no WordPress e escreva artigos profundos otimizados para termos específicos pouco concorridos inicialmente.",
            color: "blue"
          },
          {
            num: 3,
            title: "Tráfego Pago",
            sub: "Mídia Paga",
            emoji: "💰",
            whatIs: "Criação e otimização de anúncios patrocinados diretos para atrair visitantes e fechar vendas de maneira acelerada.",
            platforms: [
              { name: "Google Ads", desc: "Anúncios cirúrgicos em resultados de pesquisa de intenção e banners/vídeos pelo YouTube." },
              { name: "Meta Ads", desc: "Patrocínios diretos no feed, reels e stories do Instagram e Facebook." },
              { name: "TikTok Ads", desc: "Formatos altamente visuais integrados de forma nativa ao feed do aplicativo." },
              { name: "LinkedIn Ads", desc: "Ideal para segmentação corporativa sofisticada para fechar com cargos executivos de alto valor." }
            ],
            concepts: [
              { name: "CPC (Custo por Clique)", desc: "Valor pago por cada clique que o anúncio recebe." },
              { name: "CPM (Custo por Mil)", desc: "Custo pago para exibir o anúncio para mil pessoas." },
              { name: "CTR (Taxa de Cliques)", desc: "Proporção de cliques dividida pelo total de exibições." },
              { name: "ROAS (Retorno Líquido)", desc: "Retorno financeiro bruto obtido do valor investido nos anúncios." }
            ],
            remarketing: "Configuração estratégica para mostrar novos anúncios de fechamento para pessoas que já entraram no site, mas não compraram.",
            howLearn: "Adquira as certificações oficiais da escola online Google Skillshop e crie pequenas campanhas reais investindo R$ 10 por dia.",
            color: "emerald"
          },
          {
            num: 4,
            title: "E-mail Marketing",
            sub: "Fidelização e Vendas",
            emoji: "✉️",
            whatIs: "Comunicação direta com uma lista de contatos que deu permissão para envio de conteúdos informativos, ofertas e relacionamento.",
            benefit: "A base de emails é um ativo intocável de sua propriedade. Em média, cada R$ 1 investido em automações de e-mail retorna R$ 42 (o maior ROI do marketing).",
            concepts: [
              { name: "Lista de E-mails", desc: "O banco de contatos e potenciais compradores cadastrados voluntariamente." },
              { name: "Segmentação", desc: "Envio de ofertas selecionadas apenas para pessoas com aquele interesse específico." },
              { name: "Automações", desc: "Disparos automáticos e programados de boas-vindas ou conversão de carrinho." },
              { name: "Engajamento", desc: "Acompanhamento da taxa de abertura dos e-mails e cliques nos links." }
            ],
            tools: [
              "Mailchimp (Gratuito até 500 inscritos)",
              "RD Station (Mecanismo extremamente popular no Brasil)",
              "ActiveCampaign (Otimizado para fluxos automáticos complexos)"
            ],
            howLearn: "Crie uma página simples de captura de e-mails prometendo um guia ou conteúdo gratuito e envie mensagens semanais para a base.",
            color: "indigo"
          },
          {
            num: 5,
            title: "Conteúdo",
            sub: "Autoridade Através do Valor",
            emoji: "✍️",
            whatIs: "Criar materiais informativos ricos em utilidade para atrair e conquistar a confiança de potenciais leads antes de fazer ofertas de venda.",
            formats: [
              "Blog posts ricos descritivos",
              "Vídeos e Tutoriais em plataformas abertas",
              "E-books, infográficos e cartilhas ilustradas",
              "Newsletters periódicas com insights específicos"
            ],
            logic: "Ao invés de interromper as pessoas implorando por compras, você as atrai organicamente ao oferecer valor real e tirar suas dúvidas.",
            example: "Uma academia que produz textos como 'Como emagrecer de forma segura em 30 dias' capta clientes predispostos a assinar o plano fitness.",
            howLearn: "Defina um assunto de seu profundo conhecimento, crie uma série com 10 conteúdos práticos e analise qual gerou maior interesse.",
            color: "amber"
          },
          {
            num: 6,
            title: "Afiliados",
            sub: "Comissionamento Direto",
            emoji: "🤝",
            whatIs: "Promover produtos físicos ou digitais de outras empresas e receber fatias financeiras por cada venda que ocorrer através do seu link exclusivo.",
            steps: [
              "Escolher coleções de produtos em portais de afiliação pública",
              "Pegar seus códigos e links de rastreamento blindados",
              "Espalhar os links em canais estratégicos (redes sociais, vídeos no YouTube ou blogs)",
              "Receber a comissão acordada direto no seu painel de recebíveis"
            ],
            platforms: [
              "Hotmart (Foco total em cursos digitais, mentorias e e-books)",
              "Monetizze (Produtos encapsulados e bem-estar físico)",
              "Amazon Afiliados (Produtos físicos do catálogo global da marca)"
            ],
            whoFit: "Excelente para criadores que já acumularam alguma audiência inicial nos canais e desejam rentabilizar rápido.",
            howLearn: "Inscreva-se em um portal de afiliados, estude a fundo uma boa página de vendas de um produto e monte uma divulgação focada para um público específico.",
            color: "purple"
          },
          {
            num: 7,
            title: "Inbound Marketing",
            sub: "Funil de Vendas Orgânico",
            emoji: "🎯",
            whatIs: "Fusão integrada de SEO, conteúdos de valor e fluxos de e-mail para atrair e reter o público durante toda a jornada de interesse de compra.",
            funnel: [
              { step: "Atração (Topo)", action: "Foco em blogs informativos gerais, posts em redes sociais e buscas orgânicas." },
              { step: "Conversão (Meio)", action: "Entrega de materiais ricos em troca de contato de telefone ou e-mail." },
              { step: "Fechamento (Fundo)", action: "Envio de comparativos de preço, de descontos exclusivos e fechamento comercial." },
              { step: "Fidelização (Pós-venda)", action: "Relacionamento de pós-venda para incentivar indicações do produto." }
            ],
            vsOutbound: "No Inbound o lead se move livremente até você de forma amigável. No Outbound tradicional, você quem realiza interrupções ativas de anúncios ou ligações frias.",
            howLearn: "Mapeie detalhadamente a jornada de compra de um produto simples e estruture quais soluções oferecer em cada nível do funil.",
            color: "cyan"
          },
          {
            num: 8,
            title: "E-commerce",
            sub: "Varejo Digital",
            emoji: "🛒",
            whatIs: "Estratégia e táticas comerciais exclusivas criadas para impulsionar vitrines online e vender mais produtos físicos de forma segura na internet.",
            tactics: [
              "Escrever fichas de produtos fáceis de ler no Google",
              "Promover anúncios patrocinados no Google Shopping integrados",
              "Criar canais de disparo automático para recuperar carrinhos deixados para trás",
              "Apresentar avaliações, testes sociais e fotos de clientes que já compraram"
            ],
            platforms: [
              "Shopify (Plataforma padrão global altamente rápida)",
              "Nuvemshop (Fortemente integrada na América Latina)",
              "WooCommerce (Ideal para integrações robustas WordPress)"
            ],
            howLearn: "Navegue em grandes lojas online nacionais e anote todas as táticas que usam para reter sua atenção e empurrar combos e ofertas.",
            color: "orange"
          },
          {
            num: 9,
            title: "Influenciadores",
            sub: "Marketing de Influência",
            emoji: "🎥",
            whatIs: "Fechamentos promocionais convidando criadores de conteúdo com seguidores leais para endossar ou divulgar produtos em seus canais.",
            influencers: [
              { type: "Nano (1k - 10k seguidores)", strength: "Comunidade extremamente unida e altas taxas de conversão específicas." },
              { type: "Micro (10k - 100k seguidores)", strength: "Nicho bem claro e focado, gerando excelente retenção de orçamento." },
              { type: "Macro (100k - 1M seguidores)", strength: "Grande escala de marca para expansão nacional de novos negócios." },
              { type: "Mega / Celebridade (1M+ seguidores)", strength: "Exposição massiva, porém com investimentos altíssimos por postagem." }
            ],
            tip: "Análises de mercado mostram que contratar múltiplos Micro-influenciadores com fit correto oferece retorno financeiro (ROI) muito maior para conversão de vendas do que celebridades genéricas de grande porte.",
            howLearn: "Mapeie 5 criadores de porte menor em um segmento de interesse e estude a forma natural como integram marcas em seus stories.",
            color: "pink"
          },
          {
            num: 10,
            title: "Dados & Analytics",
            sub: "Inteligência Estratégica",
            emoji: "📊",
            whatIs: "Interpretação e estudo aprofundado do comportamento agregado dos usuários no site para encontrar falhas e oportunidades práticas.",
            tools: [
              "Google Analytics 4 (Focado no comportamento geral)",
              "Meta Business Suite (Métricas de mídias Meta)",
              "Google Search Console (Diagnóstico do Google orgânico)",
              "Hotjar (Gera mapas de calor por onde os clientes clicam)"
            ],
            whatAnalyze: [
              "Canais e mídias principais de origem dos leads",
              "Quais landing pages retêm mais ou menos clientes",
              "Em que exato botão as pessoas travam na hora de comprar",
              "Qual campanha patrocinada deu lucro real consolidado"
            ],
            howLearn: "Instale o Google Analytics 4 em um domínio gratuito de testes e acompanhe o comportamento do fluxo de cliques e permanência.",
            color: "sky"
          }
        ];

        const marketingRisks = [
          {
            id: 1,
            category: "freelancers",
            emoji: "📉",
            title: "Depender de uma única fonte de renda",
            risk: "Ter apenas 1 cliente ou 1 plataforma. Se perder, fica sem renda do dia pra noite.",
            evit: [
              "Tenha sempre no mínimo 3 clientes ativos",
              "Diversifique canais (não dependa só do Instagram, por exemplo)",
              "Monte uma reserva financeira de 3 a 6 meses de despesas"
            ]
          },
          {
            id: 2,
            category: "freelancers",
            emoji: "🚫",
            title: "Conta banida nas plataformas",
            risk: "Instagram, Google Ads, Meta Ads podem banir contas sem aviso, especialmente por violar políticas.",
            evit: [
              "Leia sempre as políticas de uso de cada plataforma",
              "Nunca use práticas proibidas (comprar seguidores, cloaking em anúncios)",
              "Tenha backup dos seus conteúdos fora das redes sociais",
              "Construa uma lista de e-mails — ela é sua, ninguém pode tirar"
            ]
          },
          {
            id: 3,
            category: "freelancers",
            emoji: "💸",
            title: "Gastar dinheiro sem retorno em anúncios",
            risk: "Iniciantes criam campanhas mal configuradas e perdem dinheiro rapidamente.",
            evit: [
              "Comece com orçamentos pequenos (R$10–R$20/dia)",
              "Aprenda antes de investir — faça cursos gratuitos primeiro",
              "Defina sempre um objetivo claro antes de criar o anúncio",
              "Monitore os resultados diariamente no início"
            ]
          },
          {
            id: 4,
            category: "freelancers",
            emoji: "🕵️",
            title: "Clientes inadimplentes",
            risk: "Trabalhar semanas e não receber o pagamento.",
            evit: [
              "Sempre assine contrato antes de começar",
              "Cobre 50% adiantado para novos clientes",
              "Use plataformas de pagamento seguras",
              "Nunca entregue o trabalho final sem receber"
            ]
          },
          {
            id: 5,
            category: "freelancers",
            emoji: "📋",
            title: "Não ter contrato",
            risk: "Sem contrato, o cliente pode pedir revisões infinitas, não pagar ou usar seu trabalho sem autorização.",
            evit: [
              "Formalize tudo por escrito, mesmo que seja um e-mail detalhado",
              "Especifique no contrato: escopo, prazo, valor, número de revisões e forma de pagamento"
            ]
          },
          {
            id: 6,
            category: "empresas",
            emoji: "📢",
            title: "Crise nas redes sociais",
            risk: "Um post mal interpretado ou uma reclamação viral pode destruir a reputação de uma marca em horas.",
            evit: [
              "Tenha um plano de gestão de crise pronto",
              "Monitore menções à sua marca com ferramentas como Google Alerts",
              "Responda reclamações com rapidez, empatia e sem confronto",
              "Nunca delete comentários negativos — isso piora a situação"
            ]
          },
          {
            id: 7,
            category: "empresas",
            emoji: "🔒",
            title: "Vazamento de dados dos clientes (LGPD)",
            risk: "Coletar e usar dados de clientes sem consentimento é ilegal no Brasil pela Lei Geral de Proteção de Dados. A multa pode chegar a R$50 milhões.",
            evit: [
              "Tenha política de privacidade clara no seu site",
              "Peça consentimento explícito antes de coletar e-mails",
              "Use plataformas seguras para armazenar dados",
              "Nunca compre listas de e-mails de terceiros"
            ]
          },
          {
            id: 8,
            category: "empresas",
            emoji: "🤥",
            title: "Métricas de vaidade (resultados falsos)",
            risk: "Focar em curtidas e seguidores e achar que está crescendo — enquanto as vendas não aparecem.",
            evit: [
              "Foque em métricas que importam: conversões, leads, vendas, CAC e ROI",
              "Sempre conecte os resultados do marketing com os resultados financeiros",
              "Questione agências que só entregam relatórios de alcance"
            ]
          },
          {
            id: 9,
            category: "empresas",
            emoji: "🏢",
            title: "Contratar agência ou profissional ruim",
            risk: "Pagar caro por resultados fracos ou por quem não entende do seu negócio.",
            evit: [
              "Peça cases e portfólio antes de contratar",
              "Desconfie de quem promete resultados garantidos",
              "Exija relatórios mensais com métricas reais",
              "Comece com um contrato de teste de 3 meses"
            ]
          },
          {
            id: 10,
            category: "empresas",
            emoji: "🔄",
            title: "Algoritmos mudando do dia pra noite",
            risk: "O que funciona hoje no Instagram ou Google pode parar de funcionar amanhã por mudança de algoritmo.",
            evit: [
              "Nunca dependa de apenas um canal de aquisição",
              "Invista em canais que você controla: e-mail, WhatsApp, site próprio",
              "Acompanhe blogs de notícias do setor (RD Station, Neil Patel, Search Engine Journal)"
            ]
          },
          {
            id: 11,
            category: "online",
            emoji: "🎣",
            title: "Golpes e cursos furada",
            risk: "O mercado digital está cheio de 'gurus' que prometem enriquecimento rápido e vendem cursos superficiais por preços absurdos.",
            evit: [
              "Desconfie de promessas como 'ganhe R$10k em 30 dias sem experiência'",
              "Pesquise o nome do produtor antes de comprar",
              "Comece com conteúdo gratuito — existe muito material de qualidade",
              "Prefira plataformas com garantia de reembolso (Hotmart oferece 7 dias)"
            ]
          },
          {
            id: 12,
            category: "online",
            emoji: "⏳",
            title: "Expectativa de resultado rápido",
            risk: "Desistir antes de ver resultados por achar que marketing digital é renda rápida.",
            evit: [
              "Entenda que SEO leva de 3 a 6 meses para dar resultado",
              "Redes sociais orgânicas levam meses para construir audiência",
              "Trace metas realistas de curto, médio e longo prazo",
              "Celebre pequenas vitórias no caminho"
            ]
          }
        ];

        const goldenRules = [
          { rule: "Sempre tenha contrato", desc: "Protege seu trabalho e pagamento" },
          { rule: "Diversifique canais e clientes", desc: "Evita dependência perigosa" },
          { rule: "Construa sua lista de e-mails", desc: "É o único canal 100% seu" },
          { rule: "Meça o que importa", desc: "Evita ilusão de crescimento" },
          { rule: "Estude antes de investir", desc: "Evita perder dinheiro em anúncios" },
          { rule: "Mantenha backup dos conteúdos", desc: "Protege contra banimentos" },
          { rule: "Fique atualizado sempre", desc: "Algoritmos mudam constantemente" }
        ];

        return (
          <div className="space-y-6 animate-fadeIn">
            {/* Header Banner */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50/10 text-emerald-600 flex items-center justify-center shrink-0">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-wider block">Promoção • Estratégia • Canais Online</span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#1a237e]">
                    Guia do Iniciante: Marketing Digital
                  </h3>
                </div>
              </div>
              <p className="text-slate-650 text-sm leading-relaxed font-sans">
                O Marketing Digital é o conjunto de estratégias de promoção de produtos, serviços ou marcas usando canais online — internet, redes sociais, e-mail, mecanismos de busca, etc. Em vez de outdoors ou comerciais de TV tradicionais, você usa o ambiente dinâmico da web para alcançar de forma certeira e engajar seu público-alvo ideal.
              </p>
              <div className="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-xl space-y-1">
                <h5 className="text-xs font-bold text-[#1a237e] font-sans flex items-center gap-1.55">
                  <Sparkles className="h-4 w-4 text-emerald-500" />
                  <span>Por que é extremamente importante?</span>
                </h5>
                <p className="text-[10.5px] text-slate-650 font-sans leading-relaxed">
                  As pessoas passam horas todos os dias no ambiente online. O marketing digital permite que você atinja o público ideal, exatamente no momento em que estão inclinados a interagir ou comprar, com um investimento infinitamente menor que o marketing físico offline — e o principal: com a incrível capacidade de rastrear e metrificar absolutamente tudo na hora.
                </p>
              </div>
            </div>

            {/* Vantagens & Exemplo Prático */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Vantagens */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-2.5">
                  <span className="text-xl">⭐</span>
                  <div>
                    <h4 className="text-sm font-black text-[#1a237e] font-sans">Vantagens do Marketing Digital</h4>
                    <p className="text-[10px] text-slate-400 font-sans">Por que o meio online domina as atenções</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { title: "Alcance global", desc: "Sua mensagem cruza fronteiras e barreiras geográficas num instante sem limites de distribuição." },
                    { title: "Baixo custo de entrada", desc: "Custo de patrocínio ou produção geralmente muito mais barato que a publicidade tradicional linear offline." },
                    { title: "Métricas e dados cirúrgicos", desc: "Possibilidade de medir resultados com precisão e saber exatamente de onde vem cada real faturado." },
                    { title: "Comunicação direta", desc: "Criação de chats e relacionamentos de ida e volta diretos com seus prospectos em tempo real." },
                    { title: "Segmentação eficiente", desc: "Capacidade de direcionar sua mensagem focado apenas nas pessoas com o interesse exato pelo seu nicho." }
                  ].map((advantage, aIdx) => (
                    <div key={aIdx} className="flex gap-2.5 items-start">
                      <span className="w-5 h-5 rounded bg-emerald-100 text-emerald-800 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">✓</span>
                      <div>
                        <strong className="text-xs text-slate-800 block font-sans">{advantage.title}</strong>
                        <p className="text-[11px] text-slate-500 font-sans leading-normal">{advantage.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exemplo Prático de Moda */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-2.5">
                    <span className="text-xl">🎬</span>
                    <div>
                      <h4 className="text-sm font-black text-[#1a237e] font-sans">Como funciona na prática?</h4>
                      <p className="text-[10px] text-slate-400 font-sans">Visualizando um ciclo básico de sucesso</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-655 leading-relaxed font-sans">
                    <strong>Imagine que você vende roupas:</strong> O Marketing Digital transforma uma loja simples de calçada em um império de faturamento usando o seguinte funil dinâmico:
                  </p>
                  <div className="space-y-2 font-mono">
                    {[
                      { step: "Passo 1", act: "Cria uma página profissional no Instagram", details: "Sua vitrine 24h aberta." },
                      { step: "Passo 2", act: "Publica fotos e vídeos de alta qualidade dos produtos", details: "Gera desejo visual de compra." },
                      { step: "Passo 3", act: "Faz anúncios patrocinados para pessoas interessadas em moda", details: "Atração direta do cliente ideal." },
                      { step: "Passo 4", act: "Recebe mensagens diretas e dúvidas de novos clientes", details: "Interação e relacionamento humano." },
                      { step: "Passo 5", act: "Analisa minuciosamente quais publicações de anúncio geram mais vendas", details: "Melhoria constante baseada em dados reais." },
                    ].map((step, sIdx) => (
                      <div key={sIdx} className="flex gap-2 p-1.5 bg-slate-50 border border-slate-100 rounded-xl text-[10px]">
                        <span className="font-extrabold text-[#1a237e] shrink-0 uppercase tracking-widest text-[8px] bg-slate-100 border px-1.5 py-0.5 rounded-md flex items-center">{step.step}</span>
                        <div className="font-sans text-[11px] text-slate-600 leading-normal">
                          <strong>{step.act}</strong> • <span className="text-slate-450 italic">{step.details}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-2.5 bg-emerald-500/5 border border-emerald-500/10 rounded-xl">
                  <p className="text-[10.5px] text-slate-600 font-sans italic leading-normal text-center">
                    ✨ Viu só? Tudo isso faz parte da inteligência do <strong>Marketing Digital</strong>!
                  </p>
                </div>
              </div>
            </div>

            {/* A Grande Frase de Definição */}
            <div className="p-5 bg-gradient-to-br from-[#1a237e] to-indigo-900 border border-indigo-850 rounded-2xl text-white relative overflow-hidden shadow-md">
              <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl pointer-events-none" />
              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4">
                <span className="text-3xl bg-white/10 p-3 rounded-full border border-white/20 select-none animate-pulse shrink-0">🎯</span>
                <div className="space-y-1 min-w-0">
                  <span className="text-[9px] font-mono font-bold text-emerald-400 uppercase tracking-widest block">EM UMA FRASE:</span>
                  <p className="text-sm font-extrabold sm:text-base leading-relaxed tracking-tight font-sans text-white">
                    "Marketing Digital é usar a internet para atrair pessoas, criar relacionamento com elas e transformar esse interesse em vendas ou outros resultados para um negócio."
                  </p>
                </div>
              </div>
            </div>

            {/* Trilha de Progresso de Níveis "Do Zero à Renda Recorrente" */}
            <MarketingProgressionPath />

            {/* Lição 1: O que é ganhar dinheiro online de verdade */}
            <MarketingLessonOne />

            {/* Lição 2: Como evitar golpes e armadilhas */}
            <MarketingLessonTwo />

            {/* Lição 3: Mentalidade de quem tem sucesso online */}
            <MarketingLessonThree />

            {/* Lição 4: Ferramentas gratuitas que você precisa ter */}
            <MarketingLessonFour />

            {/* Lição 5: Como criar sua presença profissional online */}
            <MarketingLessonFive />

            {/* Guia de Infraestrutura e Criação de Contas Iniciais */}
            <MarketingStarterKit />

            {/* Guias Práticos: LinkedIn, Canva e Exercício de Ativação */}
            <MarketingPracticalGuides />

            {/* Guia Dinâmico das Redes Sociais e Algoritmos */}
            <MarketingSocialNetworks />

            {/* INTERACTIVE AREAS EXPLORER */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
              <div className="border-b border-slate-100 pb-3">
                <h4 className="text-base font-extrabold text-[#1a237e] flex items-center gap-2 font-sans">
                  <span className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">📊</span>
                  <span>As 10 Principais Áreas do Marketing Digital</span>
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Selecione uma das 10 principais ramificações abaixo para explorar detalhadamente as ferramentas essenciais, modos de aprendizado prático e diferenciais do dia a dia profissional:
                </p>
              </div>

              {/* Responsive Grid Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
                {marketingAreas.map((area) => (
                  <button
                    key={area.num}
                    onClick={() => setActiveMarketingArea(area.num)}
                    className={`flex flex-col items-center justify-center p-3.5 rounded-xl border transition-all text-center gap-1.5 cursor-pointer ${
                      activeMarketingArea === area.num
                        ? "border-emerald-500 bg-emerald-500/5 shadow-xs ring-1 ring-emerald-500/20"
                        : "border-slate-100 hover:border-slate-200 bg-slate-50/50"
                    }`}
                  >
                    <span className="text-2xl">{area.emoji}</span>
                    <div className="min-w-0">
                      <span className="text-[10px] font-black font-sans leading-tight block text-slate-800 tracking-tight select-none">
                        {area.num}. {area.title}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Area Details Card */}
              {(() => {
                const currentArea = marketingAreas.find((a) => a.num === activeMarketingArea) || marketingAreas[0];
                return (
                  <div className="p-5 bg-slate-50/30 border border-slate-200/80 rounded-2xl space-y-4 animate-fadeIn">
                    <div className="flex items-center gap-3 border-b border-slate-200/50 pb-3.5">
                      <span className="text-3xl shrink-0 p-2 bg-white rounded-xl shadow-xs border border-slate-150">
                        {currentArea.emoji}
                      </span>
                      <div>
                        <span className="text-[9px] font-mono font-bold text-emerald-600 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded uppercase tracking-wider">
                          Área {currentArea.num} de 10
                        </span>
                        <h4 className="text-base sm:text-lg font-black text-[#1a237e] font-sans mt-0.5 flex flex-wrap items-center gap-1.5">
                          <span>{currentArea.title}</span>
                          <span className="font-medium text-slate-400 text-xs sm:text-sm">({currentArea.sub})</span>
                        </h4>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Left Side */}
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <span className="text-[9px] font-bold text-slate-400 font-sans uppercase tracking-widest block">
                            O que é:
                          </span>
                          <p className="text-xs text-slate-650 leading-relaxed font-sans">
                            {currentArea.whatIs}
                          </p>
                        </div>

                        {currentArea.platforms && (
                          <div className="space-y-1.5">
                            <span className="text-[9px] font-bold text-slate-400 font-sans uppercase tracking-widest block">
                              Canais & Plataformas Principais:
                            </span>
                            <div className="space-y-2">
                              {currentArea.platforms.map((plat, pidx) => (
                                <div key={pidx} className="flex gap-2 items-start text-xs text-slate-650">
                                  <span className="text-[9px] bg-white border border-slate-200 shadow-2xs px-1.5 py-0.5 rounded font-bold font-mono text-emerald-600 shrink-0">
                                    {plat.name}
                                  </span>
                                  <p className="font-sans leading-relaxed text-[11px] text-slate-550">{plat.desc}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {currentArea.pilars && (
                          <div className="space-y-2">
                            <span className="text-[9px] font-bold text-slate-400 font-sans uppercase tracking-widest block">
                              Pilares Fundamentais:
                            </span>
                            <div className="space-y-2">
                              {currentArea.pilars.map((pilar, pidx) => (
                                <div key={pidx} className="bg-white border border-slate-100 p-2.5 rounded-lg space-y-0.5">
                                  <span className="text-[11px] font-black text-[#1a237e] font-sans">{pilar.name}</span>
                                  <p className="text-[10px] text-slate-500 font-sans leading-relaxed">{pilar.desc}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {currentArea.concepts && (
                          <div className="space-y-2">
                            <span className="text-[9px] font-bold text-slate-400 font-sans uppercase tracking-widest block">
                              Conceitos e Diretrizes:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {currentArea.concepts.map((concept, cidx) => (
                                <div key={cidx} className="bg-white border border-slate-100 p-2.5 rounded-lg space-y-0.5">
                                  <span className="text-[10px] font-black text-emerald-600 font-sans block">{concept.name}</span>
                                  <p className="text-[9.5px] text-slate-500 font-sans leading-tight">{concept.desc}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {currentArea.formats && (
                          <div className="space-y-1.5">
                            <span className="text-[9px] font-bold text-slate-400 font-sans uppercase tracking-widest block">
                              Principais Formatos:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {currentArea.formats.map((fmt, fidx) => (
                                <span key={fidx} className="text-[10px] bg-white border border-slate-200 px-2.5 py-1 rounded-full text-slate-650 font-bold font-sans">
                                  {fmt}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {currentArea.funnel && (
                          <div className="space-y-1.5">
                            <span className="text-[9px] font-bold text-slate-400 font-sans uppercase tracking-widest block">
                              As Etapas do Funil Inbound:
                            </span>
                            <div className="space-y-1.5">
                              {currentArea.funnel.map((fn, fidx) => (
                                <div key={fidx} className="bg-white border border-slate-100 p-2 rounded-lg space-y-0.5">
                                  <span className="text-[10px] font-black text-indigo-700 font-sans block">{fn.step}</span>
                                  <p className="text-[9.5px] text-slate-500 font-sans leading-relaxed">{fn.action}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {currentArea.influencers && (
                          <div className="space-y-1.5">
                            <span className="text-[9px] font-bold text-slate-400 font-sans uppercase tracking-widest block">
                              Classificação dos Influenciadores:
                            </span>
                            <div className="space-y-2">
                              {currentArea.influencers.map((inf, iidx) => (
                                <div key={iidx} className="bg-white border border-slate-100 p-2 rounded-lg">
                                  <span className="text-[10.5px] font-extrabold text-[#1a237e] block">{inf.type}</span>
                                  <p className="text-[9.5px] text-slate-500 leading-normal font-sans">{inf.strength}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Right Side */}
                      <div className="space-y-4">
                        {currentArea.tasks && (
                          <div className="space-y-1.5">
                            <span className="text-[9px] font-bold text-slate-400 font-sans uppercase tracking-widest block">
                              Atividades Profissionais:
                            </span>
                            <div className="space-y-1.5">
                              {currentArea.tasks.map((task, tidx) => (
                                <div key={tidx} className="flex items-center gap-2 text-xs text-slate-650">
                                  <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0 stroke-[3]" />
                                  <span className="font-sans text-[11px] text-slate-600">{task}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {currentArea.steps && (
                          <div className="space-y-1.5">
                            <span className="text-[9px] font-bold text-slate-400 font-sans uppercase tracking-widest block">
                              Fluxo de Trabalho de Afiliados:
                            </span>
                            <div className="space-y-1.5">
                              {currentArea.steps.map((st, sidx) => (
                                <div key={sidx} className="flex gap-2 items-start text-xs text-slate-650">
                                  <span className="w-4.5 h-4.5 rounded-full bg-purple-50 text-purple-650 flex items-center justify-center font-mono font-bold text-[9px] shrink-0 border border-purple-200 mt-0.5">
                                    {sidx + 1}
                                  </span>
                                  <span className="font-sans text-[11px] text-slate-600 leading-normal">{st}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {currentArea.tactics && (
                          <div className="space-y-1.5">
                            <span className="text-[9px] font-bold text-slate-400 font-sans uppercase tracking-widest block">
                              Táticas de Vendas E-commerce:
                            </span>
                            <div className="space-y-1.5">
                              {currentArea.tactics.map((tc, tcidx) => (
                                <div key={tcidx} className="flex items-center gap-2 text-xs text-slate-650">
                                  <Check className="h-3.5 w-3.5 text-orange-500 shrink-0 stroke-[3]" />
                                  <span className="font-sans text-[11px] text-slate-600">{tc}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {currentArea.tools && (
                          <div className="space-y-1.5">
                            <span className="text-[9px] font-bold text-slate-400 font-sans uppercase tracking-widest block">
                              Ferramentas Tecnológicas Recomendadas:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {currentArea.tools.map((tool, idx) => (
                                <span key={idx} className="text-[9.5px] bg-slate-100 border border-slate-200 px-2 py-0.5 rounded font-black font-sans text-slate-700">
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {currentArea.whatAnalyze && (
                          <div className="space-y-1.5">
                            <span className="text-[9px] font-bold text-slate-400 font-sans uppercase tracking-widest block">
                              O que analisar no Analytics:
                            </span>
                            <div className="space-y-1.5">
                              {currentArea.whatAnalyze.map((an, idx) => (
                                <div key={idx} className="flex gap-2 items-start text-xs text-slate-650">
                                  <span className="text-sky-500 shrink-0">📈</span>
                                  <span className="font-sans text-[11px] text-slate-600 leading-normal">{an}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {currentArea.benefit && (
                          <div className="p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-xl">
                            <span className="text-[8.5px] font-bold text-emerald-700 font-sans uppercase tracking-widest block mb-0.5">
                              Por que vale muito a pena:
                            </span>
                            <p className="text-[10.5px] text-slate-600 font-sans leading-relaxed">
                              {currentArea.benefit}
                            </p>
                          </div>
                        )}

                        {currentArea.logic && (
                          <div className="p-3 bg-amber-500/5 border border-amber-500/10 rounded-xl">
                            <span className="text-[8.5px] font-bold text-amber-600 font-sans uppercase tracking-widest block mb-0.5">
                              Estratégia de Atração:
                            </span>
                            <p className="text-[10.5px] text-slate-600 font-sans leading-relaxed">
                              {currentArea.logic}
                            </p>
                          </div>
                        )}

                        {currentArea.example && (
                          <div className="p-3 bg-slate-100 border border-slate-200 p-3 rounded-lg">
                            <span className="text-[8.5px] font-bold text-slate-400 font-sans uppercase block mb-0.5">Exemplo Prático:</span>
                            <p className="text-[10px] font-sans leading-relaxed text-slate-550 italic">
                              "{currentArea.example}"
                            </p>
                          </div>
                        )}

                        {currentArea.remarketing && (
                          <div className="p-3 bg-blue-500/5 border border-blue-500/10 rounded-xl">
                            <span className="text-[8.5px] font-bold text-blue-700 font-sans uppercase tracking-widest block mb-0.5">
                              Mecanismo de Remarketing:
                            </span>
                            <p className="text-[10.5px] text-slate-600 font-sans leading-relaxed">
                              {currentArea.remarketing}
                            </p>
                          </div>
                        )}

                        {currentArea.whoFit && (
                          <div className="p-3 bg-purple-500/5 border border-purple-500/10 rounded-xl">
                            <span className="text-[8.5px] font-bold text-purple-700 font-sans uppercase tracking-widest block mb-0.5">
                              Perfil de Ajuste Perfeito:
                            </span>
                            <p className="text-[10.5px] text-[#1a237e] font-sans font-bold leading-normal">
                              {currentArea.whoFit}
                            </p>
                          </div>
                        )}

                        {currentArea.vsOutbound && (
                          <div className="p-3 bg-indigo-500/5 border border-indigo-500/10 rounded-xl">
                            <span className="text-[8.5px] font-bold text-indigo-700 font-sans uppercase tracking-widest block mb-0.5">
                              Inbound vs Outbound Sales:
                            </span>
                            <p className="text-[10.5px] text-slate-600 font-sans leading-normal">
                              {currentArea.vsOutbound}
                            </p>
                          </div>
                        )}

                        {currentArea.tip && (
                          <div className="p-3 bg-pink-500/5 border border-pink-500/10 rounded-xl">
                            <span className="text-[8.5px] font-bold text-pink-700 font-sans uppercase tracking-widest block mb-0.5">
                              Dica de Performance Comercial:
                            </span>
                            <p className="text-[10.5px] text-slate-600 font-sans leading-normal">
                              {currentArea.tip}
                            </p>
                          </div>
                        )}

                        <div className="p-3 pb-3.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl space-y-1">
                          <span className="text-[9px] font-extrabold text-emerald-800 font-sans uppercase tracking-wider block">
                            Como aprender / Treinar na Prática:
                          </span>
                          <p className="text-[11px] text-[#1a237e] font-bold font-sans leading-relaxed">
                            {currentArea.howLearn}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* MAP DE PERFIS DE RECOMENDAÇÃO */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <h4 className="text-base font-extrabold text-[#1a237e] flex items-center gap-2 font-sans">
                  <span className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">🗺️</span>
                  <span>Por onde começar? — Guia Prático de Perfis</span>
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Encontre a área de melhor compatibilidade de acordo com suas afinidades naturais e aspirações profissionais imediatas:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3.5">
                {[
                  { profile: "Gosta de criar conteúdo", area: "Social Media ou YouTube", icon: "📱", desc: "Perfeito se você ama se comunicar, escrever, falar em vídeos ou produzir roteiros e artes visuais." },
                  { profile: "Analítico e gosta de dados", area: "Tráfego Pago ou SEO", icon: "📊", desc: "Se você tem facilidade natural com análise de estatísticas, tabelas, raciocínio lógico e otimizações." },
                  { profile: "Busca renda extra rápida", area: "Marketing de Afiliados", icon: "🔗", desc: "Excelente se o seu principal foco é comissionamento rápido indicando ótimos produtos de terceiros." },
                  { profile: "Quer prestar serviços corporativos", area: "Inbound Marketing + E-mail", icon: "✉️", desc: "Ideal para estruturar do zero captação de contatos corporativos e prestar consultorias estruturadas recorrentes." },
                  { profile: "Tem uma loja ou produto físico", area: "E-commerce Marketing", icon: "🛒", desc: "Direto ao ponto para quem deseja impulsionar e otimizar conversões comerciais de vitrines e lojas virtuais." }
                ].map((item, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-xl p-4.5 bg-slate-50/50 hover:bg-white hover:border-indigo-400 hover:shadow-2xs transition-all flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xl shrink-0 p-1 bg-white rounded border border-slate-100 shadow-3xs">{item.icon}</span>
                        <span className="text-[9px] uppercase font-mono font-bold text-slate-400 block tracking-tight">Qualidade Principal</span>
                      </div>
                      <h5 className="text-xs font-black text-[#1a237e] font-sans leading-tight">
                        {item.profile}
                      </h5>
                      <p className="text-[10px] text-slate-500 leading-relaxed font-sans">{item.desc}</p>
                    </div>
                    <div className="pt-2 border-t border-slate-200/60 mt-2">
                      <span className="text-[8.5px] font-bold text-indigo-500 font-sans block uppercase">Indicação de Foco:</span>
                      <span className="text-[11px] font-extrabold font-sans text-indigo-950 flex items-center justify-between gap-1 w-full mt-0.5">
                        <span className="truncate">{item.area}</span>
                        <ArrowRight className="h-3 w-3 stroke-[3] shrink-0 text-indigo-500" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Como começar do zero — passo a passo */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
              <h4 className="text-base font-bold text-[#1a237e] flex items-center gap-2 font-sans">
                <CheckSquare className="h-5 w-5 text-emerald-500" />
                <span>Como vencer começando do absoluto zero — Estrada Prática</span>
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { step: "1", title: "Escolha uma única área para focar primeiro", desc: "Não caia na armadilha de tentar dominar tudo no mesmo dia. Escolha começar ou por redes sociais ou por SEO básico — as áreas mais acessíveis da atualidade." },
                  { step: "2", title: "Aproveite todo o conteúdo básico gratuito", desc: "Bons portais de decolagem incluem o Google Skillshop para tirar certificações famosas e os blogs em português de marcas como Rock Content, RD de valor ou tutoriais qualificados no YouTube." },
                  { step: "3", title: "Construa e pratique com um projeto de verdade", desc: "O estudo sem colocar a mão na massa se dissolve. Modele uma página, perfil de nicho próprio ou blog sobre um assunto do seu gosto e comece a exercitar ativamente." },
                  { step: "4", title: "Aprenda a decifrar métricas frias", desc: "Sempre faça leituras de comportamento analisando alcance, taxa de clique (CTR), taxas de conversão de leads e de aberturas de e-mail. Marketing robusto é guiado por dados, nunca por achismo." },
                  { step: "5", title: "Monte um Portfólio real comprovado", desc: "Registre meticulosamente seu percurso de crescimento orgânico ou as poucas vendas voluntárias do seu projeto de testes. Esse material visual é a chave de ouro para captar marcas." },
                  { step: "6", title: "Parta para a especialização gradual", desc: "Após solidificar as colunas de base, aprofunde seus conhecimentos. Atualmente no mercado nacional, o tráfego patrocinado e a consultoria de mídia social são de altíssimo faturamento." }
                ].map((item, id) => (
                  <div key={id} className="bg-emerald-50/10 border border-emerald-500/10 rounded-xl p-4.5 space-y-2 flex flex-col justify-start">
                    <div className="flex items-center gap-2">
                      <span className="w-5.5 h-5.5 rounded bg-emerald-500 text-white flex items-center justify-center font-mono text-xs font-bold shrink-0">
                        {item.step}
                      </span>
                      <h5 className="text-[11.5px] font-black text-[#1a237e] font-sans">{item.title}</h5>
                    </div>
                    <p className="text-[10px] text-slate-500 font-sans leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RISCOS DO MARKETING DIGITAL E COMO EVITÁ-LOS */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-[10px] font-mono font-bold text-red-500 uppercase tracking-wider block">PREVENÇÃO & SEGURANÇA ESTRATÉGICA</span>
                <h4 className="text-base sm:text-lg font-black text-slate-850 flex items-center gap-2 font-sans mt-0.5">
                  <span className="p-1.5 rounded-lg bg-red-50 text-red-600">⚠️</span>
                  <span>Riscos do Marketing Digital e Como Evitá-los</span>
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  O marketing digital possui riscos reais, mas todos são evitáveis com preparação e o devido conhecimento. Selecione um perfil para ver as diretrizes preventivas completas:
                </p>
              </div>

              {/* Category Pills Selector */}
              <div className="flex flex-wrap gap-2 pb-2">
                {[
                  { id: "freelancers", label: "Para Profissionais / Freelancers", icon: "👤", color: "red" },
                  { id: "empresas", label: "Para Empresas", icon: "🏢", color: "orange" },
                  { id: "online", label: "Ganhos Online", icon: "🎣", color: "blue" },
                  { id: "regras", label: "🛡️ Regras de Ouro", icon: "🛡️", color: "emerald" },
                ].map((tab) => {
                  const isActive = activeRiskTab === tab.id;
                  let colorClasses = "border-slate-200 text-slate-650 hover:bg-slate-50";
                  if (isActive) {
                    if (tab.color === "red") colorClasses = "border-red-500 bg-red-50 text-red-700 ring-1 ring-red-500/20";
                    else if (tab.color === "orange") colorClasses = "border-amber-500 bg-amber-50 text-amber-700 ring-1 ring-amber-500/20";
                    else if (tab.color === "blue") colorClasses = "border-blue-500 bg-blue-50 text-blue-700 ring-1 ring-blue-500/20";
                    else if (tab.color === "emerald") colorClasses = "border-emerald-500 bg-emerald-50 text-emerald-700 ring-1 ring-emerald-500/20";
                  }
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveRiskTab(tab.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-black font-sans transition-all cursor-pointer ${colorClasses}`}
                    >
                      <span>{tab.icon}</span>
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Render Risks */}
              {activeRiskTab !== "regras" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
                  {marketingRisks
                    .filter((r) => r.category === activeRiskTab)
                    .map((r) => (
                      <div key={r.id} className="border border-slate-150 rounded-xl p-4.5 bg-slate-50/10 hover:bg-white hover:shadow-2xs transition-all space-y-3 flex flex-col justify-between">
                        <div className="space-y-2">
                          <div className="flex gap-2.5 items-start">
                            <span className="text-2xl shrink-0 bg-white border border-slate-150 p-1.5 rounded-lg shadow-3xs">{r.emoji}</span>
                            <div>
                              <span className="text-[9px] font-mono font-bold text-red-500 block uppercase">Risco {r.id}</span>
                              <h5 className="text-xs font-black text-[#1a237e] font-sans leading-tight mt-0.5">{r.title}</h5>
                            </div>
                          </div>
                          
                          <div className="p-3 bg-red-500/5 border border-red-500/10 rounded-lg space-y-0.5">
                            <span className="text-[8.5px] font-bold text-red-500 font-sans uppercase tracking-wider block">O risco real:</span>
                            <p className="text-[10.5px] text-slate-650 font-sans leading-relaxed">{r.risk}</p>
                          </div>
                        </div>

                        <div className="space-y-1.5 pt-2 border-t border-slate-100">
                          <span className="text-[8.5px] font-bold text-emerald-600 font-sans uppercase tracking-wider block">Como evitar:</span>
                          <div className="space-y-1">
                            {r.evit.map((ev, eIdx) => (
                              <div key={eIdx} className="flex gap-1.5 items-start">
                                <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0 stroke-[3] mt-0.5" />
                                <span className="text-[10px] text-slate-650 font-sans leading-tight">{ev}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="space-y-4 animate-fadeIn">
                  <div className="border border-emerald-250 bg-emerald-50/10 rounded-xl p-4.5 space-y-1">
                    <span className="text-[9px] font-mono font-bold text-emerald-600 uppercase tracking-wider block">DIRETRIZ DE BLINDAGEM</span>
                    <h5 className="text-xs font-bold text-[#1a237e] font-sans">🛡️ Resumo — Regras de Ouro para se Proteger</h5>
                    <p className="text-[10px] text-slate-500 font-sans leading-relaxed">
                      Estratégias consolidadas para mitigar perigos em toda a sua jornada profissional e comercial no ambiente digital.
                    </p>
                  </div>

                  <div className="overflow-x-auto border border-slate-150 rounded-xl bg-white shadow-3xs">
                    <table className="w-full text-left border-collapse font-sans text-xs">
                      <thead>
                        <tr className="bg-slate-50/50 border-b border-slate-200">
                          <th className="p-3 font-black text-[#1a237e] tracking-tight lg:w-1/3">Regra</th>
                          <th className="p-3 font-black text-slate-700 tracking-tight">Por quê</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {goldenRules.map((gr, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/30 transition-colors">
                            <td className="p-3 font-black text-emerald-600 flex items-center gap-1.5">
                              <span className="text-xs">🛡️</span>
                              <span>{gr.rule}</span>
                            </td>
                            <td className="p-3 text-slate-500 leading-relaxed text-[10.5px]">
                              {gr.desc}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            {/* STUDY ROUTINE WIDGET WITH INTERACTIVE CALENDAR & CHECKLISTS */}
            <StudyRoutine />

            {/* Dica principal box */}
            <div className="p-4.5 bg-[#00c853]/5 border border-[#00c853]/20 rounded-xl space-y-1">
              <h5 className="text-xs font-bold text-[#1a237e] font-sans flex items-center gap-1.5 justify-center md:justify-start">
                <Lightbulb className="h-4 w-4 text-[#00c853]" />
                <span>Consistência inteligente bate a busca por perfeição</span>
              </h5>
              <p className="text-[10.5px] text-slate-600 font-sans leading-relaxed text-center md:text-left">
                Não espere pelas condições de equipamento ou conhecimento perfeitos. Poste conteúdos, realize testes rápidos, cometa erros simples controlados, aprenda com o feedback, ajuste o rumo e repita com consistência. O mercado de marketing digital paga e valoriza quem exibe resultados práticos verdadeiros e provados, mesmo que de escala menor!
              </p>
            </div>

            {/* CTA Box */}
            <div className="bg-emerald-600 text-white rounded-2xl p-6 text-center space-y-3 relative overflow-hidden shadow-xs">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
              
              <h5 className="text-sm font-black uppercase tracking-wider">Tire seus planos do papel e comece! 🚀</h5>
              <p className="text-xs font-sans max-w-xl mx-auto opacity-95">
                Escolha o perfil e área de sua simpatia, use as ferramentas gratuitas recomendadas e inicie seus testes hoje. Com constância focada e estudo de métricas práticos, você construirá uma nova e valiosa fonte de receita em pouquíssimo tempo!
              </p>
            </div>
          </div>
        );
      })()
    },
    {
      id: "comecar-do-zero-plano-acao",
      title: "Começar do Zero (Plano de Ação)",
      category: "inicio",
      icon: BookOpenCheck,
      badge: "Iniciante",
      content: (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-[#1a237e] flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-[#00c853]" />
              <span>Plano de Ação: Começar do Zero (Guia do Iniciante)</span>
            </h3>
            <p className="text-slate-650 text-sm leading-relaxed font-sans">
              O maior erro de quem tenta começar no marketing digital é complicar as coisas. Você não precisa saber programar, ter equipamentos de milhares de reais ou ser um especialista em decolagens para fazer seus primeiros dólares online.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h4 className="text-base font-bold text-[#1a237e] border-b pb-2 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#00c853]" />
              <span>Sua Rota de Ativação Rápida</span>
            </h4>
            <div className="space-y-3">
              {[
                { step: "1", title: "Configuração Limpa do Perfil", desc: "Crie uma nova conta no TikTok dedicada unicamente ao nicho escolhido. Escreva uma Biografia (Bio) curta, focada em resolver um problema do leitor, acompanhada de uma foto de perfil limpa e em alto contraste." },
                { step: "2", title: "O Aquecimento Obrigatório", desc: "Consuma vídeos do seu nicho por 30 a 45 minutos no primeiro dia. Interaja de forma humanizada (deixe curtidas e comentários úteis). Isso ajuda o robô do TikTok a rotular seus interesses e criar os ganchos certos." },
                { step: "3", title: "Agrupamento de Conteúdos Sem Aparecer", desc: "Baixe vídeos fotorrealistas de alta resolução em plataformas como Pexels ou selecione clipes de podcast para cortes. Utilize legendas contrastantes centralizadas para prender a atenção das pessoas no silencioso." },
                { step: "4", title: "Sequência de Testes Iniciais", desc: "Poste de 2 a 3 vídeos todos os dias sem falta. Não mude a identidade visual no meio da semana — dê tempo para a amostragem estatística encontrar o seu público de ouro." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-[#f8fafc] border border-slate-200 rounded-xl items-start">
                  <span className="font-mono text-xs font-black text-[#00c853] bg-[#00c853]/10 border border-[#00c853]/25 w-7 h-7 flex items-center justify-center rounded-lg shrink-0 mt-0.5">
                    {item.step}
                  </span>
                  <div>
                    <h5 className="text-xs font-extrabold text-[#1a237e] font-sans">{item.title}</h5>
                    <p className="text-[11px] text-slate-500 font-sans leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: "crescimento-primeiro-video-viral",
      title: "Como Fazer seu 1º Vídeo Viralizar",
      category: "roteiros",
      icon: TrendingUp,
      badge: "Crescimento",
      content: (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-[#1a237e] flex items-center gap-2">
              <Flame className="h-5 w-5 text-[#00c853]" />
              <span>Plano de Crescimento & Modelagem de Conteúdo</span>
            </h3>
            <p className="text-slate-650 text-sm leading-relaxed font-sans">
              Para fazer o seu primeiro vídeo viralizar de verdade, você deve dominar a técnica de **Modelagem de Conteúdo Estratégico**. Em vez de tentar inventar a roda do zero, analise o que já está provado estatisticamente que funciona e adapte ao seu estilo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#1a237e] bg-slate-100 border px-2 py-0.5 rounded">
                  A Técnica de Modelagem Estratégica
                </span>
                <p className="text-[11px] text-slate-550 font-sans leading-relaxed mt-3">
                  Pesquise as maiores contas gringas do seu nicho. Filtre pelos vídeos mais assistidos nas últimas duas semanas. Descubra qual foi o gancho exato (os primeiros 3 segundos de texto), a velocidade do áudio de fundo e o tipo de cena que prenderam a atenção das pessoas.
                </p>
              </div>
            </div>
            
            <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#1a237e] bg-[#00c853]/10 text-[#00c853] border border-[#00c853]/20 px-2 py-0.5 rounded">
                  O Segredo do 1º Algoritmo de Tração
                </span>
                <p className="text-[11px] text-slate-550 font-sans leading-relaxed mt-3">
                  Quando o TikTok distribui seu vídeo, ele entrega para um lote inicial de 200 a 500 pessoas. Se a taxa de retenção desse grupo for alta, o lote expande para 10.000 pessoas. Foque 100% da sua energia nos primeiros 3 segundos para que as pessoas não saiam voando.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
            <h4 className="text-sm font-bold text-[#1a237e]">Anatomia de um Gancho Altamente Viral:</h4>
            <div className="bg-slate-50 border rounded-xl p-4.5 space-y-3.5 text-xs text-slate-700 font-sans leading-relaxed">
              <p>
                <strong className="text-[#1a237e] font-sans">Fórmula:</strong> [Curiosidade / Punição] + [Solução Oculta] + [Urgência]
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 rounded-lg">
                  <strong className="text-rose-900 block mb-1">❌ Forma Comum Tímida:</strong> "Hoje vou explicar como usar inteligência artificial para ler PDF."
                </div>
                <div className="p-3 bg-emerald-50 border border-emerald-250 text-emerald-800 rounded-lg">
                  <strong className="text-emerald-900 block mb-1">✅ Gancho de Elite Viral:</strong> "Os professores vão odiar o fato de eu estar revelando este site de Inteligência Artificial secreto que faz seus trabalhos em segundos!"
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "plano-global-zero-ao-mundo",
      title: "Plano Global: Do Zero ao Mundo",
      category: "monetizacao",
      icon: Globe,
      badge: "Mundial",
      content: (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-[#1a237e] flex items-center gap-2">
              <Globe className="h-5 w-5 text-[#00c853]" />
              <span>Plano Global: Do Zero ao Mundo (Monetização Sem Barreiras)</span>
            </h3>
            <p className="text-slate-650 text-sm leading-relaxed font-sans">
              Estar limitado geograficamente ao mercado local é restringir o seu próprio potencial de caixa. Ao criar conteúdos globais desenhados para públicos dos Estados Unidos, Canadá ou Europa, seus ganhos de anúncios e comissões de afiliados multiplicam por dízimos em relação ao faturamento comum de reais.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h4 className="text-base font-bold text-[#1a237e] border-b pb-2">As Soluções para Monetizar Sem Fronteiras</h4>
            <div className="space-y-3">
              {[
                { title: "VPNs Dedicadas de Criação", desc: "Use uma conexão IP estável dos Estados Unidos ou chips pré-pagos internacionais na hora de registrar a conta TikTok. Isso fará com que o algoritmo entregue seus vídeos para o público gringo de imediato." },
                { title: "Vídeos em Inglês sem Pronunciar Nada", desc: "Aproveite geradores sintéticos de voz ultra-humanos em inglês como ElevenLabs para realizar as narrações de forma impecável e fotorrealista. Legende em inglês usando recursos como o CapCut automático." },
                { title: "Processamento de Pagamento Global", desc: "Cadastre contas na Wise, Payoneer ou Stripe Atlas. Elas fornecem agências e contas bancárias americanas virtuais legítimas para receber do Google, TikTok Beta ou redes de afiliação e transferir em segundos ao Pix." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-3.5 bg-slate-50 border rounded-xl items-start">
                  <div className="w-1.5 h-1.5 bg-[#00c853] rounded-full mt-2 shrink-0 animate-pulse" />
                  <div>
                    <h5 className="text-xs font-bold text-[#1a237e] font-sans">{item.title}</h5>
                    <p className="text-[11px] text-slate-500 font-sans leading-normal mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: "planos-de-renda-escala",
      title: "Planos de Renda & Metas (90 Dias)",
      category: "recorrencia",
      icon: DollarSign,
      badge: "Metas de Caixa",
      content: (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-[#1a237e] flex items-center gap-2">
              <PiggyBank className="h-5 w-5 text-[#00c853]" />
              <span>Sua Trilha de Metas Financeiras (Do Zero aos primeiros $1.000)</span>
            </h3>
            <p className="text-slate-650 text-sm leading-relaxed font-sans">
              Estabelecer metas aleatórias sem trilhas diárias e mensais de suporte gera desmotivação e abandono precoce. Dividimos sua escalada financeira em 3 etapas realistas com tarefas simples que não cobram ampla experiência.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Fase 1: Plano de 30 Dias (Primeira Renda Online) • Meta: $50 a $100",
                badge: "Fundação",
                color: "border-slate-200 bg-white",
                badgeColor: "bg-slate-100 text-slate-700",
                desc: "Foque em validar o seu processo simples. Abra suas contas digitais de afiliação de infoprodutos e canais de mídia, configure tudo e busque os primeiros cliques. Faça tarefas fáceis de micro-freelancer (deixar depoimentos, testar sites, legenda simples ou transcrição)."
              },
              {
                title: "Fase 2: Plano Agressivo de 30 Dias (Acelerar Ganhos) • Meta: $100 a $300",
                badge: "Tração",
                color: "border-[#00c853]/30 bg-white hover:border-[#00c853]/60",
                badgeColor: "bg-[#00c853]/15 text-[#00c853]",
                desc: "Comece a publicar conteúdos curtos com ofertas diretas direcionadas para e-books focados ou comissões de afiliados. Teste designs de páginas de vendas simples e use voz sintética de autoajuda ou inteligência para criar de 2 a 3 publicações diárias."
              },
              {
                title: "Fase 3: Plano de 90 Dias (Monetização Ampla) • Meta: Rumo aos primeiros $1.000",
                badge: "Escalabilidade",
                color: "border-indigo-200 bg-white hover:border-indigo-400",
                badgeColor: "bg-indigo-50 text-indigo-700",
                desc: "Consolide suas contas do programa Beta de reprodução qualificada TikTok, expanda para e-books proprietários de alta margem de lucro e crie uma esteira de retenção com múltiplos canais operando de forma 100% silenciosa (Canais Dark)."
              }
            ].map((fase, i) => (
              <div key={i} className={`p-5 rounded-2xl border shadow-xs space-y-3 transition-colors ${fase.color}`}>
                <div className="flex justify-between items-center">
                  <h4 className="text-xs font-extrabold text-[#1a237e] font-sans leading-tight">{fase.title}</h4>
                  <span className={`text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded border ${fase.badgeColor}`}>
                    {fase.badge}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-sans leading-relaxed">
                  {fase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "roteiros-prontos-gravar-hoje",
      title: "Roteiros Prontos para Gravar",
      category: "roteiros",
      icon: Video,
      badge: "Pronto Prático",
      content: (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-[#1a237e] flex items-center gap-2">
              <Video className="h-5 w-5 text-[#00c853]" />
              <span>Roteiros Prontos para Gravar Hoje (Copie de Imediato)</span>
            </h3>
            <p className="text-slate-650 text-sm leading-relaxed font-sans">
              Sem ideias de como formatar seus copys persuasivos? Desenvolvemos dois roteiros de altíssima retenção estruturados sob loops magnéticos para você colar em seu narrador sintético hoje mesmo.
            </p>
          </div>

          <div className="space-y-4">
            {/* Roteiro 1: Segredo Oculto de Produtividade */}
            <div className="bg-white border rounded-2xl p-5 space-y-3.5 relative shadow-xs">
              <div className="flex justify-between items-center text-xs font-mono border-b pb-2">
                <span className="text-[#1a237e] font-bold font-sans">🗒️ Roteiro 1 • Loop de Produtividade</span>
                <button
                  onClick={() => copyToClipboard(
                    `Roteiro 1 • Loop de Produtividade\n\nGancho: "Se você acorda de manhã e a primeira coisa que faz é mexer no celular por 10 minutos, pare e escute o aviso cruel do seu cérebro."\n\nDesenvolvimento: "Ao inundar sua mente com dopamina barata logo ao acordar, você sabota seu foco pelo resto do dia de forma irreversível. Os cientistas afirmam que isso drena sua energia mental. O segredo dos milionários ocultos é banir as telas nas primeiras 2 horas da manhã e ler 5 páginas de metas."\n\nCTA: "Nós organizamos as listas completas de hábitos no material gratuito da nossa bio. Siga este perfil e clique no link."`,
                    "script-prod-copied"
                  )}
                  className="text-slate-400 hover:text-[#00c853] flex items-center gap-1 cursor-pointer bg-slate-50 border p-1 rounded hover:border-[#00c853] text-[10px]"
                >
                  {copiedText === "script-prod-copied" ? <Check className="h-3.5 w-3.5 text-[#00c853]" /> : <Copy className="h-3 w-3" />}
                  <span>{copiedText === "script-prod-copied" ? "Copiado!" : "Copiar"}</span>
                </button>
              </div>
              <p className="text-xs text-slate-650 italic font-sans leading-relaxed">
                <strong>Gancho:</strong> "Se você acorda de manhã e a primeira coisa que faz é mexer no celular por 10 minutos, pare e escute o aviso cruel do seu cérebro."<br className="my-1"/>
                <strong>Desenvolvimento:</strong> "Ao inundar sua mente com dopamina barata logo ao acordar, você sabota seu foco pelo resto do dia de forma irreversível. Os cientistas afirmam que isso drena sua energia mental. O segredo dos milionários ocultos é banir as telas nas primeiras 2 horas da manhã e ler 5 páginas de metas."<br className="my-1"/>
                <strong>CTA/Loop:</strong> "Nós organizamos as listas completas de hábitos no material gratuito da nossa bio. Siga este perfil e clique no link."
              </p>
            </div>

            {/* Roteiro 2: A Verdade sobre Trabalho Remoto */}
            <div className="bg-white border rounded-2xl p-5 space-y-3.5 relative shadow-xs">
              <div className="flex justify-between items-center text-xs font-mono border-b pb-2">
                <span className="text-[#1a237e] font-bold font-sans">🗒️ Roteiro 2 • Loop de Renda Internacional</span>
                <button
                  onClick={() => copyToClipboard(
                    `Roteiro 2 • Loop de Renda Internacional\n\nGancho: "Esta empresa americana secreta está pagando até $30 por hora para pessoas normais fazerem digitação e teste de portais do completo zero."\n\nDesenvolvimento: "Ao contrário dos empregos tradicionais que tiram todo o seu tempo, portais freelancers internacionais buscam talentos básicos diariamente para serviços de legenda simples. Você só precisa do seu celular e acesso à internet. Sem chefes, recebendo notas limpas de dólares toda sexta-feira."\n\nCTA: "Mapeamos o passo a passo completo desses sites e liberamos tudo gratuito para você na bio. Siga nossa conta e corra para pegar!"`,
                    "script-renda-copied"
                  )}
                  className="text-slate-400 hover:text-[#00c853] flex items-center gap-1 cursor-pointer bg-slate-50 border p-1 rounded hover:border-[#00c853] text-[10px]"
                >
                  {copiedText === "script-renda-copied" ? <Check className="h-3.5 w-3.5 text-[#00c853]" /> : <Copy className="h-3 w-3" />}
                  <span>{copiedText === "script-renda-copied" ? "Copiado!" : "Copiar"}</span>
                </button>
              </div>
              <p className="text-xs text-slate-650 italic font-sans leading-relaxed">
                <strong>Gancho:</strong> "Esta empresa americana secreta está pagando até $30 por hora para pessoas normais fazerem digitação e teste de portais do completo zero."<br className="my-1"/>
                <strong>Desenvolvimento:</strong> "Ao contrário dos empregos tradicionais que tiram todo o seu tempo, portais freelancers internacionais buscam talentos básicos diariamente para serviços de legenda simples. Você só precisa do seu celular e acesso à internet. Sem chefes, recebendo notas limpas de dólares toda sexta-feira."<br className="my-1"/>
                <strong>CTA/Loop:</strong> "Mapeamos o passo a passo completo desses sites e liberamos tudo gratuito para você na bio. Siga nossa conta e corra para pegar!"
              </p>
            </div>
          </div>
        </div>
      )
    }
  ], [progress, checklistState, financeMonths, syntheticScript, syntheticVoice, generatedVoiceClip, isGeneratingVoice, valVendaUnica, numVendasUnicas, valRecorrencia, numAssinantes]);

  // Render animated audio status logic elegantly
  function animatedVoiceFeedback(isGenerating: boolean, isDone: boolean, voice: string) {
    if (isGenerating) {
      return (
        <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 text-yellow-805 text-xs rounded-xl flex items-center gap-3 animate-pulse">
          <div className="flex gap-1">
            <span className="w-1 bg-[#1a237e] h-4 rounded animate-bounce delay-75" />
            <span className="w-1 bg-[#1a237e] h-3 rounded animate-bounce delay-150" />
            <span className="w-1 bg-[#1a237e] h-5 rounded animate-bounce delay-225" />
          </div>
          <span>A IA está processando as modulações, as nuances, as pausas e os tons fotorrealistas...</span>
        </div>
      );
    }
    if (isDone) {
      return (
        <div className="p-4 bg-emerald-500/10 border border-[#00c853]/30 text-[#00c853] text-xs rounded-xl space-y-2">
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-[#00c853] stroke-[3]" />
            <span className="font-bold">Áudio Premium Convertido com Sucesso!</span>
          </div>
          <p className="text-slate-600 text-[11px] font-sans">
            [Demonstração Simulada de Alta Fidelidade]: O locutor <strong>{voice === "thiago-premium" ? "Thiago Premium" : voice === "camila-lucrativa" ? "Camila Conversões" : voice === "alberto-filosofo" ? "Alberto Sábio" : "Sua Voz Clonada"}</strong> leu seu roteiro de forma impecável. Duração estimada: 12 segundos.
          </p>
          <div className="flex gap-2">
            <button 
              onClick={() => alert("Função simulada: Download do arquivo .mp3 gerado com sucesso!")}
              className="bg-[#00c853] text-white hover:bg-emerald-600 px-3 py-1.5 rounded text-[10px] font-bold font-sans cursor-pointer flex items-center gap-1 w-fit"
            >
              <Zap className="h-3 w-3 fill-current" />
              <span>Baixar Arquivo MP3</span>
            </button>
          </div>
        </div>
      );
    }
    return null;
  }

  // Filter sections dynamically with search inquiry
  const filteredSections = useMemo(() => {
    if (!searchQuery) return sectionsList;
    const query = searchQuery.toLowerCase();
    return sectionsList.filter(s => 
      s.title.toLowerCase().includes(query) || 
      categories[s.category].label.toLowerCase().includes(query)
    );
  }, [searchQuery, sectionsList]);

  // Find active section
  const currentActiveSection = sectionsList.find(s => s.id === activeSectionId) || sectionsList[0];

  // Visual Reading Progress Bar Logic - calculates reader scroll percentage through active section
  const [scrollPercent, setScrollPercent] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("detail-viewport-content");
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const elementHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      // Calculate based on the element position in relation to viewport
      // offset header height (80px header + 50px reading progress header) approx 130px
      const topOffset = 140; 
      const containerTop = rect.top - topOffset;
      const scrolledOffset = -containerTop;
      const scrollableRange = elementHeight - (viewportHeight - topOffset);
      
      let pct = 0;
      if (scrollableRange > 0) {
        pct = (scrolledOffset / scrollableRange) * 100;
        pct = Math.min(100, Math.max(0, pct));
      } else {
        // If content is very short or in viewport
        pct = rect.bottom <= viewportHeight ? 100 : 0;
      }
      
      setScrollPercent(Math.round(pct));
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    
    // Tiny timeout to ensure DOM recalculation is settled
    const timer = setTimeout(handleScroll, 150);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearTimeout(timer);
    };
  }, [activeSectionId]);

  return (
    <div id="tiktok-playbook-portal" className="bg-[#f8fafc] min-h-screen pb-10">
      
      {/* STICKY READING PROGRESS BAR */}
      <div className="sticky top-20 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="shrink-0 bg-rose-500/10 text-rose-600 border border-rose-500/20 px-2.5 py-1 rounded text-[9px] font-mono font-bold uppercase tracking-wider">
              Lendo Guia
            </span>
            <span className="text-xs sm:text-sm font-extrabold text-[#1a237e] truncate font-sans">
              {currentActiveSection.title}
            </span>
          </div>
          <div className="flex items-center gap-4 shrink-0 justify-between sm:justify-end w-full sm:w-auto">
            <div className="flex items-center gap-2 min-w-0 shrink-0">
              <span className="text-[10px] font-bold text-slate-400 font-sans tracking-wide">
                Progresso:
              </span>
              <span className="text-xs font-mono font-black text-[#1a237e]">
                {scrollPercent}%
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-24 sm:w-40 bg-slate-100 h-2 rounded-full overflow-hidden border border-slate-200/50">
                <div 
                  className="bg-[#00c853] h-full rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${scrollPercent}%` }}
                />
              </div>
              
              {scrollPercent === 100 ? (
                <span className="text-[9px] bg-[#00c853]/15 text-[#00c853] font-mono font-bold px-2 py-0.5 rounded flex items-center gap-1 shrink-0 animate-pulse border border-[#00c853]/20">
                  <span>CONCLUÍDO</span>
                  <Check className="h-2.5 w-2.5 stroke-[3]" />
                </span>
              ) : (
                <span className="text-[9px] bg-indigo-50 text-indigo-700 font-mono font-bold px-2 py-0.5 rounded flex items-center gap-1 shrink-0 border border-indigo-100">
                  <span>LENDO</span>
                  <span className="w-1 h-1 bg-indigo-600 rounded-full animate-bounce" />
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* PLAYBOOK HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center space-x-1.5 bg-[#1a237e]/5 border border-[#1a237e]/15 px-3 py-1 rounded-full text-[#1a237e] text-xs font-mono font-bold uppercase">
            <Flame className="h-3.5 w-3.5 text-[#00c853] animate-pulse animate-bounce" />
            <span>Portal TikTok & Marketing Elite • 2026</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#1a237e] uppercase tracking-tight">
            Máquina de Vendas <span className="text-[#00c853]">TikTok & Tráfego</span>
          </h1>
          <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed font-sans">
            Aprenda a crescer, reter e monetizar sua conta no TikTok com consistência diária e estratégias de elite fáceis de duplicar.
          </p>
        </div>

        {/* SEARCH BAR TOP */}
        <div className="max-w-md mx-auto mb-8 relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400">
            <Search className="h-4 w-4" />
          </div>
          <input
            type="text"
            placeholder="Pesquisar por assunto (ex: Motivação, Ebook, Roteiros)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-slate-200 pl-9 pr-4 py-2.5 rounded-xl text-xs focus:ring-[#1a237e] focus:border-[#1a237e] shadow-xs font-sans text-slate-750"
          />
        </div>

        {/* MAIN PANEL COLUMN GRID DISPLAY */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* SIDEBAR DIRECTORY: Left Col Span 1 */}
          <div className="lg:col-span-1 space-y-5">
            <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-xs space-y-4 max-h-[70vh] overflow-y-auto sticky top-28">
              <span className="text-[9px] font-mono tracking-widest text-[#1a237e] uppercase font-bold block mb-1">
                Catálogo de Conteúdo
              </span>

              {filteredSections.length === 0 ? (
                <div className="text-center py-6">
                  <p className="text-xs text-slate-450 font-sans">Nenhum capítulo encontrado correspondente à pesquisa.</p>
                </div>
              ) : (
                <div className="space-y-1.5">
                  {filteredSections.map((item, idx) => {
                    const IconComp = item.icon;
                    const isActive = item.id === activeSectionId;
                    const catInfo = categories[item.category];
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          setActiveSectionId(item.id);
                          // Auto scroll details view on mobile
                          if (window.innerWidth < 1024) {
                            document.getElementById("detail-viewport-content")?.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                        className={`w-full text-left p-2.5 rounded-lg flex items-center justify-between gap-2.5 transition-all text-xs cursor-pointer select-none group border ${
                          isActive 
                            ? "bg-[#1a237e] border-[#1a237e] text-white shadow-xs font-bold" 
                            : "bg-slate-50 border-slate-100 hover:border-slate-250 text-slate-600 hover:text-slate-800"
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <IconComp className={`h-4 w-4 shrink-0 transition-colors ${isActive ? "text-[#00c853]" : "text-slate-400 group-hover:text-[#1a237e]"}`} />
                          <span className="truncate">{item.title}</span>
                        </div>
                        
                        {item.badge ? (
                          <span className={`text-[8px] font-mono font-bold uppercase px-1.5 py-0.5 rounded ${isActive ? "bg-white/10 text-brand-green border border-emerald-500/10" : "bg-emerald-500/10 text-[#00c853] border border-[#00c853]/20"}`}>
                            {item.badge}
                          </span>
                        ) : (
                          <span className="text-[10px] text-slate-400 group-hover:text-slate-550 shrink-0 font-mono">
                            →
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* PREMIUM PROMO IN SIDEBAR */}
            <PremiumPromoUnit />
          </div>

          {/* MAIN DETAIL INTERACTIVE WORKSPACE: Right Col Span 3 */}
          <div id="detail-viewport-content" className="lg:col-span-3 space-y-6">
            
            {/* active segment category label indicator */}
            <div className="inline-flex items-center gap-1.5">
              <span className={`text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full border ${categories[currentActiveSection.category].color}`}>
                Módulo • {categories[currentActiveSection.category].label}
              </span>
            </div>

            {/* MAIN CARD WORKSPACE viewport container */}
            <div className="animate-fadeIn">
              {currentActiveSection.content}
            </div>

            {/* PREMIUM BOTTOM ADS BANNER */}
            <div className="bg-white border rounded-2xl p-6 flex flex-col items-center shadow-xs md:flex-row justify-between gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 py-1 px-3 bg-[#1a237e]/10 text-[#1a237e] font-mono text-[8px] tracking-wider uppercase font-extrabold rounded-bl">
                Tecnologia • Recomendado
              </div>

              <div className="space-y-1 text-center md:text-left">
                <span className="text-[8px] tracking-widest text-[#00c853] font-mono uppercase font-bold">Oferta Recomendada</span>
                <h4 className="text-sm font-black text-[#1a237e] font-sans">Fazer Seu Download de Cortes Lucrativos</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed font-sans max-w-lg">
                  Acelere seus resultados montando contas Dark no TikTok com <strong>1.500 Clipes Prontos e Editados em 4K</strong> de alta atenção com trilha clássica inclusa.
                </p>
              </div>

              <a
                href="#download-cuts-simulated"
                onClick={(e) => { e.preventDefault(); alert("Ação de download simulada: Você receberá o redirecionamento imediato para a área técnica de download!"); }}
                className="bg-[#00c853] hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl text-xs font-black tracking-wider transition-all shadow-xs shrink-0 flex items-center gap-1 cursor-pointer font-sans text-center justify-center uppercase"
              >
                <span>Baixar Clipes Prontos</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
