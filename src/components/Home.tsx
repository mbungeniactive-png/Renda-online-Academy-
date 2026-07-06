/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Users, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Star, 
  Send,
  HelpCircle,
  PiggyBank,
  Globe,
  Zap,
  Laptop,
  Search
} from "lucide-react";
import { STUDENT_TESTIMONIALS } from "../data";

interface HomeProps {
  setRoute: (route: string) => void;
}

export default function Home({ setRoute }: HomeProps) {
  const [studentCount, setStudentCount] = useState(12400);
  const [email, setEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Animated Student Counter Effect
  useEffect(() => {
    const target = 13847;
    const duration = 2000; // ms
    const stepTime = Math.abs(Math.floor(duration / (target - 12400)));
    
    const timer = setInterval(() => {
      setStudentCount((prev) => {
        if (prev >= target) {
          clearInterval(timer);
          return target;
        }
        return prev + Math.floor(Math.random() * 15) + 1;
      });
    }, 15);

    return () => clearInterval(timer);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() !== "") {
      setNewsletterSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div id="home-page" className="bg-[#f8fafc] text-slate-800 min-h-screen">
      
      {/* REVENUE BANNER TOP - 728x90 */}
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <div className="hidden md:flex flex-col items-center justify-center p-3 bg-white border border-slate-200 rounded-xl text-center shadow-sm">
          <span className="text-[9px] font-mono tracking-widest text-[#1a237e] uppercase font-bold mb-1">
            Espaço Reservado (728x90)
          </span>
          <div className="w-full max-w-[728px] h-[90px] bg-slate-50 border border-slate-200 flex items-center justify-center rounded text-xs text-slate-500 font-mono tracking-wide">
            <span className="flex items-center gap-2">
              <Star className="h-4 w-4 text-[#00c853] fill-[#00c853]" />
              Patrocinador Oficial
              <Star className="h-4 w-4 text-[#00c853] fill-[#00c853]" />
            </span>
          </div>
        </div>
        
        {/* Mobile version banner 320x50 */}
        <div className="md:hidden flex flex-col items-center justify-center p-2 bg-white border border-slate-200 rounded-lg text-center shadow-sm">
          <span className="text-[8px] font-mono tracking-widest text-[#1a237e] uppercase font-bold mb-0.5">
            Espaço Reservado (320x50)
          </span>
          <div className="w-[320px] h-[50px] bg-slate-50 border border-slate-200 flex items-center justify-center rounded text-[10px] text-slate-400 font-mono">
            Espaço Reservado
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-20 pb-24 lg:pt-28 lg:pb-36 bg-gradient-to-b from-white to-slate-50">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00c853]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#1a237e]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            <div className="inline-flex items-center space-x-2 bg-white border border-slate-250 rounded-full px-4 py-1.5 shadow-sm">
              <Sparkles className="h-4 w-4 text-brand-green" />
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-[#1a237e] uppercase">
                Inicie Sua Formação Profissional Totalmente Grátis
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-tight text-[#1a237e] uppercase">
              Conquiste Sua Liberdade Financeira Através do <span className="text-[#00c853]">Trabalho Digital</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-sans">
              Descubra do zero ao avançado as melhores e mais rentáveis estratégias validadas do mercado: Marketing de Afiliados, Prestação de Serviços no Exterior, Criação de Conteúdo e Renda Passiva.
            </p>

            {/* Simulated Animated student counter counter */}
            <div className="flex items-center justify-center space-x-2.5 text-slate-600 py-2">
              <div className="flex -space-x-2">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=clamp&w=80&h=80&q=80" alt="Aluna" referrerPolicy="no-referrer" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=clamp&w=80&h=80&q=80" alt="Aluno" referrerPolicy="no-referrer" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=clamp&w=80&h=80&q=80" alt="Aluno" referrerPolicy="no-referrer" />
              </div>
              <div className="flex items-center space-x-1 border-l border-slate-200 pl-3">
                <Users className="h-4 w-4 text-[#00c853]" />
                <span className="font-mono text-[#00c853] font-bold text-sm tracking-wide">
                  {studentCount.toLocaleString("pt-BR")}
                </span>
                <span className="text-xs text-slate-500 font-sans">alunos já decolaram na plataforma</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setRoute("trilha")}
                id="hero-cta-start"
                className="w-full sm:w-auto px-8 py-4 bg-[#00c853] hover:bg-[#00b24a] text-white font-bold rounded-lg shadow-lg shadow-[#00c853]/20 transition-all duration-300 flex items-center justify-center space-x-2 shrink-0 cursor-pointer"
              >
                <span>Escolher Minha Trilha Gratuita</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <button
                onClick={() => setRoute("calculadora")}
                className="w-full sm:w-auto px-8 py-4 bg-[#1a237e] hover:bg-[#151c66] text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shrink-0 cursor-pointer"
              >
                <span>Simular Ganhos Potenciais</span>
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-12 text-center text-xs text-slate-500">
              <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-sm">
                <span className="block font-bold text-[#1a237e] text-sm mb-1">Módulos Interativos</span>
                Guia Do Básico ao Expert
              </div>
              <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-sm">
                <span className="block font-bold text-[#1a237e] text-sm mb-1">Fokus Total em Prática</span>
                Checklists de Lições Reais
              </div>
              <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-sm">
                <span className="block font-bold text-[#1a237e] text-sm mb-1">Artigos Extensos</span>
                Tutoriais Passo a Passo
              </div>
              <div className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-sm">
                <span className="block font-bold text-[#1a237e] text-sm mb-1">100% Livre de Spam</span>
                Suporte de Confiança
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* O QUE VOCÊ PODE APRENDER PRIMEIRO? */}
      <section className="py-20 bg-white border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-1.5 bg-[#00c853]/10 border border-[#00c853]/20 px-3.5 py-1.5 rounded-full text-[#00c853] text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Início Recomendado para Iniciantes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a237e] uppercase tracking-tight">
              O que você pode aprender primeiro?
            </h2>
            <p className="text-slate-650 text-sm font-sans mx-auto max-w-xl leading-relaxed">
              Dê os primeiros passos com facilidade. Siga este roteiro simples estruturado passo a passo para construir sua independência digital do básico ao avançado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Bloco 1: Usar o computador básico */}
            <div className="bg-[#f8fafc] border border-slate-200/80 hover:border-[#00c853] shadow-xs hover:shadow-md rounded-xl p-6 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-lg bg-[#1a237e]/10 text-[#1a237e] flex items-center justify-center mb-5 shrink-0">
                  <Laptop className="h-5.5 w-5.5" />
                </div>
                <h3 className="text-base font-bold text-[#1a237e] mb-3 font-sans">
                  <span className="text-[#00c853] font-mono mr-1">1.</span> Usar o computador básico
                </h3>
                <ul className="text-slate-550 text-xs space-y-2.5 font-sans leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#00c853]/70 shrink-0 mt-0.5" />
                    <span>Abrir programas, criar pastas, salvar arquivos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#00c853]/70 shrink-0 mt-0.5" />
                    <span>Usar o teclado e mouse com confiança</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 border-t border-slate-100 pt-4 text-[10px] uppercase font-mono tracking-widest text-[#00c853] font-bold">
                Conceito de Base
              </div>
            </div>

            {/* Bloco 2: Navegar na internet */}
            <div className="bg-[#f8fafc] border border-slate-200/80 hover:border-[#00c853] shadow-xs hover:shadow-md rounded-xl p-6 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-lg bg-[#1a237e]/10 text-[#1a237e] flex items-center justify-center mb-5 shrink-0">
                  <Search className="h-5.5 w-5.5" />
                </div>
                <h3 className="text-base font-bold text-[#1a237e] mb-3 font-sans">
                  <span className="text-[#00c853] font-mono mr-1">2.</span> Navegar na internet
                </h3>
                <ul className="text-slate-550 text-xs space-y-2.5 font-sans leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#00c853]/70 shrink-0 mt-0.5" />
                    <span>Usar o Google para pesquisar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#00c853]/70 shrink-0 mt-0.5" />
                    <span>Abrir sites, fazer login, criar e-mail</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 border-t border-slate-100 pt-4 text-[10px] uppercase font-mono tracking-widest text-[#00c853] font-bold">
                Navegação Web
              </div>
            </div>

            {/* Bloco 3: Ferramentas de trabalho online */}
            <div className="bg-[#f8fafc] border border-slate-200/80 hover:border-[#00c853] shadow-xs hover:shadow-md rounded-xl p-6 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-lg bg-[#1a237e]/10 text-[#1a237e] flex items-center justify-center mb-5 shrink-0">
                  <Globe className="h-5.5 w-5.5" />
                </div>
                <h3 className="text-base font-bold text-[#1a237e] mb-3 font-sans">
                  <span className="text-[#00c853] font-mono mr-1">3.</span> Ferramentas de trabalho online
                </h3>
                <ul className="text-slate-550 text-xs space-y-2.5 font-sans leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#00c853]/70 shrink-0 mt-0.5" />
                    <span>E-mail (Gmail) — para se comunicar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#00c853]/70 shrink-0 mt-0.5" />
                    <span>WhatsApp Web — mensagens pelo computador</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#00c853]/70 shrink-0 mt-0.5" />
                    <span>Google Docs — escrever documentos online</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#00c853]/70 shrink-0 mt-0.5" />
                    <span>YouTube — assistir vídeos para aprender</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 border-t border-slate-100 pt-4 text-[10px] uppercase font-mono tracking-widest text-[#00c853] font-bold">
                Trabalho Digital
              </div>
            </div>

            {/* Bloco 4: Trabalhos que você pode fazer pela internet */}
            <div className="bg-[#f8fafc] border border-slate-200/80 hover:border-[#00c853] shadow-xs hover:shadow-md rounded-xl p-6 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-lg bg-[#1a237e]/10 text-[#1a237e] flex items-center justify-center mb-5 shrink-0">
                  <Zap className="h-5.5 w-5.5" />
                </div>
                <h3 className="text-base font-bold text-[#1a237e] mb-3 font-sans">
                  <span className="text-[#00c853] font-mono mr-1">4.</span> Trabalhos pela internet
                </h3>
                <ul className="text-slate-550 text-xs space-y-2.5 font-sans leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#00c853]/70 shrink-0 mt-0.5" />
                    <span>Vender produtos (Mercado Livre, OLX)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#00c853]/70 shrink-0 mt-0.5" />
                    <span>Fazer cursos e se qualificar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#00c853]/70 shrink-0 mt-0.5" />
                    <span>Trabalhar como freelancer (digitação, atendimento, design)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#00c853]/70 shrink-0 mt-0.5" />
                    <span>Divulgar serviços nas redes sociais</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 border-t border-slate-100 pt-4 text-[10px] uppercase font-mono tracking-widest text-[#00c853] font-bold">
                Roteiros Práticos
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold text-[#1a237e]">
              Sua Trilha Rumo à Autonomia Financeira
            </h2>
            <p className="text-slate-600 text-sm font-sans">
              Selecionamos e modelamos unicamente ramos de atuação que não exigem barreiras absurdas de entrada e geram pagamentos garantidos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1 */}
            <div className="bg-white border border-slate-200 shadow hover:border-[#00c853] p-8 rounded-xl flex flex-col justify-between transition-all duration-300">
              <div>
                <div className="bg-[#00c853]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="h-6 w-6 text-[#00c853]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a237e] mb-3">
                  Freelance em Moeda Forte
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4 font-sans">
                  Trabalhe de casa vendendo habilidades básicas para empresas de fora e receba em dólar. O poder cambial de multiplicação multiplica seu faturamento no Brasil por 5.
                </p>
              </div>
              <div className="border-t border-slate-100 pt-4 flex items-center justify-between text-xs text-[#00c853] font-semibold cursor-pointer" onClick={() => setRoute("trilha")}>
                <span>Ver Módulo Freelance</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white border border-slate-200 shadow hover:border-[#00c853] p-8 rounded-xl flex flex-col justify-between transition-all duration-300">
              <div>
                <div className="bg-[#00c853]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <PiggyBank className="h-6 w-6 text-[#00c853]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a237e] mb-3">
                  Afiliação Profissional
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4 font-sans">
                  Seja comissionado promovendo soluções digitais estabelecidas nas maiores vitrines virtuais mundiais. Margens de lucro de até 70% sem precisar fabricar nada.
                </p>
              </div>
              <div className="border-t border-slate-100 pt-4 flex items-center justify-between text-xs text-[#00c853] font-semibold cursor-pointer" onClick={() => setRoute("trilha")}>
                <span>Ver Módulo de Afiliados</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-white border border-slate-200 shadow hover:border-[#00c853] p-8 rounded-xl flex flex-col justify-between transition-all duration-300">
              <div>
                <div className="bg-[#00c853]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-[#00c853]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a237e] mb-3">
                  Criação e Renda Recorrente
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4 font-sans">
                  Crie canais anônimos de entretenimento ou empacote e-books focados para faturar com anúncios automáticos 24 horas por dia de forma escalar.
                </p>
              </div>
              <div className="border-t border-slate-100 pt-4 flex items-center justify-between text-xs text-[#00c853] font-semibold cursor-pointer" onClick={() => setRoute("trilha")}>
                <span>Ver Módulo Escalabilidade</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AD BANNER INTERMEDIARY - 300x250 visual grid wrapper next to stats */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-extrabold text-[#1a237e]">
              Por Que Confiar no Nosso Conteúdo?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600 font-sans">
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-4.5 w-4.5 text-[#00c853] shrink-0 mt-0.5" />
                <span><strong>Sem Mentiras de Enriquecimento:</strong> Não vendemos carros de luxo ou soluções mágicas de cassinos. Ensinamos negócios técnicos estruturados.</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-4.5 w-4.5 text-[#00c853] shrink-0 mt-0.5" />
                <span><strong>Compliance Contábil:</strong> Artigos 100% autorais que facilitam sua inserção regulamentar em programas globais de anúncio.</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-4.5 w-4.5 text-[#00c853] shrink-0 mt-0.5" />
                <span><strong>Atualizações Periódicas:</strong> Nossa curadoria de professores realiza monitoramentos regulares para preservar as lições de acordo com as diretrizes vigentes das mídias.</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-4.5 w-4.5 text-[#00c853] shrink-0 mt-0.5" />
                <span><strong>Suporte Comunitário Aberto:</strong> Envie perguntas diretas em nossos canais oficiais de correio corporativo sem restrições.</span>
              </div>
            </div>
          </div>
          
          {/* Adbox mockup 300x250 */}
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex flex-col items-center justify-center text-center">
            <span className="text-[9px] font-mono tracking-wider text-[#1a237e] uppercase font-bold mb-2">
              Retângulo Médio (300x250)
            </span>
            <div className="w-[250px] h-[200px] bg-white border border-dashed border-slate-300 flex flex-col items-center justify-center rounded p-4">
              <Star className="h-6 w-6 text-[#00c853]/50 mb-2 animate-spin" style={{ animationDuration: "12s" }} />
              <span className="text-[11px] text-slate-800 font-semibold mb-1">Seu Espaço Monetizado</span>
              <span className="text-[10px] text-slate-500 leading-snug font-sans">Monetize o tráfego de seu blog educativo através de parcerias de qualidade.</span>
            </div>
          </div>
        </div>
      </section>

      {/* STUDENT TESTIMONIALS */}
      <section className="py-20 bg-[#f8fafc] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold text-[#1a237e] uppercase">
              Histórias de Sucesso da Renda Online Academy
            </h2>
            <p className="text-slate-600 text-sm font-sans">
              Veja as transformações reais alcançadas por pessoas disciplinadas que implementaram fielmente as lições do nosso portal de ensino.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STUDENT_TESTIMONIALS.map((t, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200 p-6 rounded-xl flex flex-col justify-between hover:border-[#00c853] hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-[#00c853] fill-[#00c853]" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-xs italic leading-relaxed mb-6 font-sans">
                    "{t.content}"
                  </p>
                </div>
                
                <div className="flex items-center space-x-3 border-t border-slate-100 pt-4">
                  <img 
                    src={t.avatar} 
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover border border-slate-200"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-[#1a237e]">{t.name}</h4>
                    <span className="block text-[10px] text-slate-500 font-sans">{t.role}</span>
                    <span className="inline-block mt-1.5 text-[9px] font-bold text-[#00c853] bg-[#00c853]/10 px-2 py-0.5 rounded border border-[#00c853]/25">
                      {t.results}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER CAPTURING */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-brand-navy border border-indigo-950 p-8 sm:p-12 rounded-2xl relative overflow-hidden shadow-xl text-white">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-650/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-[#00c853]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
                Fique Por Dentro das Novidades do Mercado Digital
              </h3>
              <p className="text-indigo-200 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-sans">
                Inscreva-se gratuitamente em nossa Newsletter semanal. Receba em seu correio novas vagas de freelance internacional, alertas de produtos quentes e kits de modelos de e-books.
              </p>

              {newsletterSubscribed ? (
                <div className="p-4 bg-emerald-950/80 border border-[#00c853]/40 rounded-xl max-w-lg mx-auto text-emerald-300">
                  <CheckCircle2 className="h-6 w-6 text-[#00c853] mx-auto mb-2" />
                  <span className="text-xs font-bold block mb-1">Inscrição Confirmada com Sucesso!</span>
                  <p className="text-[10px] text-slate-200 leading-relaxed font-sans">
                    Nós odiamos spam. Em instantes, lhe enviaremos o "Kit do Empreendedor Digital" com planilhas de comissões e e-books exclusivos.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="email"
                    required
                    placeholder="Digite seu melhor e-mail..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow bg-[#151c66] border border-indigo-900 rounded-lg px-4 py-3 text-xs text-white placeholder-indigo-300 focus:outline-none focus:border-[#00c853]"
                  />
                  <button
                    type="submit"
                    className="bg-[#00c853] hover:bg-[#00b24a] text-white font-bold px-5 py-3 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 text-xs shrink-0 cursor-pointer"
                  >
                    <span>Fazer Download Grátis</span>
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
              <span className="block text-[10px] text-indigo-300 font-sans">
                Respeitamos a LGPD brasileira: seus dados estão amparados sob nossa Política de Privacidade.
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
