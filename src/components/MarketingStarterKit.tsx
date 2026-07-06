import React, { useState } from "react";
import { 
  Chrome, 
  Palette, 
  Linkedin, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle,
  HelpCircle,
  Sparkles,
  Award,
  Globe,
  CheckCircle2,
  Lock
} from "lucide-react";

interface StarterAccount {
  id: string;
  name: string;
  subtitle: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  glowColor: string;
  bgColor: string;
  borderColor: string;
  url: string;
  marketingValue: string;
  steps: {
    title: string;
    description: string;
  }[];
}

const STARTER_ACCOUNTS: StarterAccount[] = [
  {
    id: "google",
    name: "Conta Google",
    subtitle: "Seu passaporte corporativo essencial",
    desc: "A conta Google permite o acesso total ao ecossistema profissional da internet: Gmail corporativo, armazenamento na nuvem via Google Drive, canais no YouTube e integração direta com o Google Ads e Google Analytics.",
    icon: Globe,
    color: "from-blue-500 via-red-500 via-yellow-500 to-green-500",
    glowColor: "rgba(59, 130, 246, 0.15)",
    bgColor: "bg-blue-50/50 border-blue-100",
    borderColor: "border-blue-200",
    url: "https://accounts.google.com",
    marketingValue: "Centraliza todas as ferramentas de análise de tráfego, correspondências de e-mail e planejadores de anúncios do seu negócio.",
    steps: [
      { title: "Acesse a Criação", description: "Vá ao site oficial accounts.google.com e clique em 'Criar conta'." },
      { title: "Defina a Finalidade", description: "Escolha 'Para uso pessoal' (ou 'Para trabalho/meu negócio' caso queira separar)." },
      { title: "Preencha a Identidade", description: "Insira seu nome, sobrenome e escolha o nome de usuário desejado (será seu Gmail oficial)." },
      { title: "Segurança de Acesso", description: "Escolha uma senha forte contendo letras maiúsculas, números e caracteres especiais." },
      { title: "Verificação Segura", description: "Informe seu número de telefone celular para verificação via SMS e finalize as configurações." }
    ]
  },
  {
    id: "canva",
    name: "Conta Canva",
    subtitle: "A fábrica de criativos visuais rápidos",
    desc: "O Canva é o centro absoluto de design do profissional moderno de marketing digital. Dispensa conhecimentos profundos de Photoshop e permite produzir posts, banners, carrosséis, e-books e iscas digitais em poucos minutos.",
    icon: Palette,
    color: "from-[#00c4cc] to-[#7d2ae8]",
    glowColor: "rgba(125, 42, 232, 0.15)",
    bgColor: "bg-purple-50/50 border-purple-100",
    borderColor: "border-purple-200",
    url: "https://www.canva.com",
    marketingValue: "Garante agilidade na criação de anúncios (Ads) e posts diários para redes sociais com mais de 100 mil templates profissionais prontos.",
    steps: [
      { title: "Acesse o Canva", description: "Abra canva.com no navegador ou celular e localize o botão 'Registrar-se' (Sign Up)." },
      { title: "Escolha a Conexão", description: "Recomendamos conectar diretamente com sua recém-criada Conta Google para poupar tempo." },
      { title: "Perfil do Estudante", description: "Selecione o perfil de estudante ou uso pessoal quando perguntado sobre o propósito de uso." },
      { title: "Verifique e Conclua", description: "Se optou pelo registro via e-mail manual, abra sua caixa de entrada, copie o token numérico e ative." }
    ]
  },
  {
    id: "linkedin",
    name: "Conta LinkedIn",
    subtitle: "O epicentro de parcerias e clientes qualificados",
    desc: "Mais do que um currículo virtual, o LinkedIn é a maior rede profissional do planeta. No marketing digital, serve para expor o seu portfólio prático de estudos e atrair as primeiras marcas de prestígio dispostas a pagar por seus serviços.",
    icon: Linkedin,
    color: "from-[#0a66c2] to-[#004182]",
    glowColor: "rgba(10, 102, 194, 0.15)",
    bgColor: "bg-indigo-50/50 border-indigo-100",
    borderColor: "border-indigo-200",
    url: "https://www.linkedin.com",
    marketingValue: "É o local ideal para praticar networking corporativo ativo e encontrar vagas remotas de marketing altamente valorizadas.",
    steps: [
      { title: "Abra a Plataforma", description: "Entre em linkedin.com e clique no botão de destaque 'Cadastre-se agora'." },
      { title: "E-mail Profissional", description: "Informe seu e-mail do Gmail criado nas fases anteriores e defina a senha da rede profissional." },
      { title: "Dados de Carreira", description: "Coloque sua localização correta, cargo atual (ex: 'Estudante de Marketing Digital') e siga em frente." },
      { title: "Perfil Impecável", description: "Adicione uma foto de rosto clara, relate sua jornada de portfólio e comece a registrar seus certificados." }
    ]
  }
];

export default function MarketingStarterKit() {
  const [activeTab, setActiveTab] = useState<string>("google");

  const currentTab = STARTER_ACCOUNTS.find(acc => acc.id === activeTab) || STARTER_ACCOUNTS[0];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
      
      {/* SECTION TITLE Banner */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase text-[#1a237e]">
            <Sparkles className="h-3 w-3 text-indigo-600" />
            <span>Infraestrutura Inicial</span>
          </div>
          <h3 className="text-base sm:text-lg font-black text-[#1a237e] font-sans leading-tight">
            Ferramentas de Início Rápido: Crie Suas Contas
          </h3>
          <p className="text-xs text-slate-500 font-sans max-w-2xl">
            Para ingressar no ecossistema e executar as tarefas da rotina semanal de estudos, você necessita destes três pilares operacionais estabelecidos hoje.
          </p>
        </div>

        {/* Global check badges */}
        <div className="flex gap-1.5 items-center bg-slate-50 border px-3 py-1.5 rounded-xl text-[10.5px] font-semibold text-slate-600 font-sans">
          <CheckCircle className="h-4 w-4 text-emerald-500" />
          <span>Foco Prático Total</span>
        </div>
      </div>

      {/* CORE 3 TABS BUTTONS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {STARTER_ACCOUNTS.map((acc) => {
          const isActive = acc.id === activeTab;
          const Icon = acc.icon;

          return (
            <button
              key={acc.id}
              onClick={() => setActiveTab(acc.id)}
              className={`cursor-pointer text-left p-3.5 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                isActive
                  ? "border-[#1a237e] bg-[#1a237e]/5 shadow-3xs"
                  : "border-slate-150 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-8.5 h-8.5 rounded-lg bg-gradient-to-br ${acc.color} p-0.5 shadow-3xs shrink-0 flex items-center justify-center`}>
                  <span className="w-full h-full rounded-[7px] bg-white flex items-center justify-center">
                    <Icon className="h-4 w-4 text-slate-800" />
                  </span>
                </span>
                <div className="min-w-0">
                  <span className="text-xs font-black text-slate-800 font-sans block tracking-tight">{acc.name}</span>
                  <span className="text-[10px] text-slate-450 font-sans block truncate max-w-[130px]">{acc.subtitle}</span>
                </div>
              </div>
              <div className={`w-2 h-2 rounded-full ${isActive ? "bg-[#1a237e] animate-ping" : "bg-slate-200"}`} />
            </button>
          );
        })}
      </div>

      {/* ACTIVE ACCOUNT CONTENT DETAILED PANEL */}
      <div 
        className="border border-slate-200 rounded-2xl bg-slate-50/30 p-5 space-y-5 transition-all duration-300"
        style={{ boxShadow: `inset 0 0 40px 0 ${currentTab.glowColor}` }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div className="space-y-1.5 min-w-0 flex-1">
            <h4 className="text-sm font-black text-slate-800 font-sans flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full bg-gradient-to-br ${currentTab.color}`} />
              <span>{currentTab.name}</span>
              <span className="text-[10px] font-mono text-slate-400 font-normal">| {currentTab.subtitle}</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              {currentTab.desc}
            </p>
          </div>

          <a 
            href={currentTab.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-sans text-[11px] font-black px-4 py-2.5 rounded-xl border border-slate-800 shadow-3xs shrink-0"
          >
            <span>Acessar {currentTab.name}</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* TIMELINE STEPS INTERACTION CARD */}
        <div className="bg-white border border-slate-200 rounded-xl p-4.5 space-y-4">
          <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
            📋 GUIA DE CRIAÇÃO PASSO A PASSO COMPLETO
          </span>
          
          <div className="relative border-l border-slate-150 pl-4.5 ml-2.5 space-y-4">
            {currentTab.steps.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Number bullet badge */}
                <span className="absolute -left-[27px] top-0 w-5.5 h-5.5 rounded-full border border-slate-200 bg-white shadow-3xs flex items-center justify-center text-[10.5px] font-black text-slate-700 font-mono">
                  {idx + 1}
                </span>
                
                <div className="space-y-0.5">
                  <h5 className="text-xs font-black text-[#1a237e] font-sans">
                    {step.title}
                  </h5>
                  <p className="text-[11px] text-slate-500 font-sans leading-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* UNIQUE MARKETING VALUE SPOT */}
        <div className="bg-white/60 border border-slate-150 rounded-xl p-3.5 flex items-start gap-3">
          <span className="text-xl shrink-0">🎯</span>
          <div>
            <span className="text-[8.5px] font-mono font-bold uppercase tracking-wider text-slate-400 block font-sans">COMO ISSO VALORIZA SEU APRENDIZADO:</span>
            <p className="text-[11px] text-slate-600 font-sans leading-relaxed">
              {currentTab.marketingValue}
            </p>
          </div>
        </div>

      </div>

      {/* PIPELINE INTEGRATION ROADMAP SUMMARY */}
      <div className="p-4 bg-[#1a237e]/5 border border-[#1a237e]/10 rounded-2xl space-y-3.5">
        <h5 className="text-xs font-black text-[#1a237e] font-sans flex items-center gap-1.5 border-b border-[#1a237e]/10 pb-2">
          <Award className="h-4 w-4" />
          <span>⚡ Sinergia de Crescimento: O Ecossistema Conectado</span>
        </h5>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans">
          <div className="bg-white border border-slate-150 p-3.5 rounded-xl space-y-1 relative overflow-hidden shadow-3xs">
            <span className="text-lg block mb-1">Gmail / Google</span>
            <strong className="text-slate-850 block font-bold">Base e Integração</strong>
            <p className="text-[10.5px] text-slate-500 leading-normal font-normal">
              Utilize esta identidade corporativa exclusiva do Google para cadastrar ferramentas de tráfego, obter relatórios e gerenciar dados em nuvem.
            </p>
          </div>

          <div className="bg-white border border-slate-150 p-3.5 rounded-xl space-y-1 relative overflow-hidden shadow-3xs">
            <span className="text-lg block mb-1">Canvas / Prototipagem</span>
            <strong className="text-slate-850 block font-bold">Produção Visual Rápida</strong>
            <p className="text-[10.5px] text-slate-500 leading-normal font-normal">
              Utilize o Canva para produzir anúncios e posts de alta atração visual no Instagram, utilizando templates de alta taxa de conversão.
            </p>
          </div>

          <div className="bg-white border border-slate-150 p-3.5 rounded-xl space-y-1 relative overflow-hidden shadow-3xs">
            <span className="text-lg block mb-1">LinkedIn / Portfólio</span>
            <strong className="text-slate-850 block font-bold">Networking & Renda Extra</strong>
            <p className="text-[10.5px] text-slate-500 leading-normal font-normal">
              Publique prints e lições práticas executadas nas tarefas no seu LinkedIn. Atraia marcas buscando novos freelancers de tráfego e conteúdo.
            </p>
          </div>
        </div>

        <div className="text-[10px] text-slate-450 font-sans italic text-center pt-1.5 border-t border-[#1a237e]/5">
          💡 Dica Especial: Evite misturar arquivos pessoais com profissionais. Mantenha essas contas dedicadas inteiramente ao seu plano de estudos.
        </div>
      </div>

    </div>
  );
}
