import React, { useState } from "react";
import { 
  Linkedin, 
  Palette, 
  Target, 
  Check, 
  ArrowRight, 
  Sparkles, 
  User, 
  FileText, 
  CheckCircle2, 
  Download, 
  Share2, 
  Image,
  Flame,
  Award
} from "lucide-react";

export default function MarketingPracticalGuides() {
  const [activeGuide, setActiveGuide] = useState<"linkedin" | "canva" | "exercise">("linkedin");
  const [copiedDraft, setCopiedDraft] = useState<string | null>(null);

  // Play audio sfx feedback on completion milestones
  const triggerMilestoneSfx = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, ctx.currentTime); // A4
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.1); // A5
      
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.18);
    } catch {
      // Ignored if interaction model blocks
    }
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedDraft(label);
    triggerMilestoneSfx();
    setTimeout(() => setCopiedDraft(null), 2500);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
      
      {/* HEADER ACTION BANNER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-150 pb-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1 bg-[#1a237e]/10 border border-[#1a237e]/25 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase text-[#1a237e]">
            <Sparkles className="h-3 w-3 text-indigo-700 font-bold" />
            <span>Guias Práticos e Aplicação</span>
          </div>
          <h3 className="text-base sm:text-lg font-black text-[#1a237e] font-sans leading-tight">
            Guias de Execução Avançada
          </h3>
          <p className="text-xs text-slate-500 font-sans max-w-xl">
            Siga os tutoriais passo a passo para desenhar seus primeiros criativos no Canva, otimizar seu LinkedIn profissional e publicar sua primeira ativação mercadológica.
          </p>
        </div>

        {/* Mini tabs triggers */}
        <div className="flex gap-1 p-1 bg-slate-100 border border-slate-150 rounded-xl shrink-0">
          <button
            onClick={() => setActiveGuide("linkedin")}
            className={`cursor-pointer px-3 py-1.5 rounded-lg text-[11px] font-bold font-sans transition-all flex items-center gap-1.5 ${
              activeGuide === "linkedin"
                ? "bg-white text-[#1a237e] shadow-3xs border border-slate-200"
                : "text-slate-550 hover:text-slate-850"
            }`}
          >
            <Linkedin className="h-3.5 w-3.5" />
            <span>LinkedIn</span>
          </button>
          <button
            onClick={() => setActiveGuide("canva")}
            className={`cursor-pointer px-3 py-1.5 rounded-lg text-[11px] font-bold font-sans transition-all flex items-center gap-1.5 ${
              activeGuide === "canva"
                ? "bg-white text-[#1a237e] shadow-3xs border border-slate-200"
                : "text-slate-550 hover:text-slate-850"
            }`}
          >
            <Palette className="h-3.5 w-3.5" />
            <span>Canva</span>
          </button>
          <button
            onClick={() => setActiveGuide("exercise")}
            className={`cursor-pointer px-3 py-1.5 rounded-lg text-[11px] font-bold font-sans transition-all flex items-center gap-1.5 ${
              activeGuide === "exercise"
                ? "bg-white text-[#1a237e] shadow-3xs border border-slate-200"
                : "text-slate-550 hover:text-[#00c853]"
            }`}
          >
            <Target className="h-3.5 w-3.5" />
            <span className="flex items-center gap-1">
              <span>Exercício</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00c853] animate-ping" />
            </span>
          </button>
        </div>
      </div>

      {/* DYNAMIC COMPONENT PANEL CANVAS */}
      <div className="transition-all duration-300">
        
        {/* TAB 1: LINKEDIN */}
        {activeGuide === "linkedin" && (
          <div className="space-y-5">
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Otimização Textual */}
              <div className="lg:col-span-2 space-y-4">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                  ⚙️ ESTRUTURAÇÃO DO PERFIL PASSO A PASSO
                </span>

                <div className="space-y-3.5 font-sans">
                  
                  {/* Photo Section */}
                  <div className="p-4 bg-slate-50 border border-slate-150 rounded-xl space-y-2">
                    <h5 className="text-xs font-black text-slate-800 flex items-center gap-1.5">
                      <span className="bg-[#1a237e]/10 text-[#1a237e] p-1 rounded-md text-[10.5px]">1</span>
                      Coloque uma Foto Profissional
                    </h5>
                    <ul className="list-disc pl-4.5 text-[11px] text-slate-500 space-y-1">
                      <li>Use uma foto bem nítida, de peito para cima, onde você apareça sorrindo suavemente.</li>
                      <li>Mostre seu rosto de forma clara, preferencialmente sob iluminação natural de frente.</li>
                      <li>Evite cenários poluídos, roupas informais exageradas ou excessos de filtros de imagem.</li>
                    </ul>
                  </div>

                  {/* Title Section */}
                  <div className="p-4 bg-slate-50 border border-slate-150 rounded-xl space-y-3">
                    <div className="flex justify-between items-center flex-wrap gap-2">
                      <h5 className="text-xs font-black text-slate-800 flex items-center gap-1.5">
                        <span className="bg-[#1a237e]/10 text-[#1a237e] p-1 rounded-md text-[10.5px]">2</span>
                        Escreva um Título Profissional de Atração
                      </h5>
                      <button
                        onClick={() => handleCopy("Estudante de Marketing Digital | Aprendendo Redes Sociais, Canva e Criação de Conteúdo", "title")}
                        className="cursor-pointer text-[9.5px] font-bold text-indigo-700 hover:text-indigo-900 border border-indigo-100 bg-indigo-50/50 px-2 py-1 rounded-md"
                      >
                        {copiedDraft === "title" ? "✓ Copiado" : "📋 Copiar Modelo"}
                      </button>
                    </div>
                    
                    <div className="p-3 bg-white border rounded-lg border-slate-205">
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">MODELO SUGERIDO:</div>
                      <p className="text-xs font-bold text-slate-800 mt-1">
                        Estudante de Marketing Digital | Aprendendo Redes Sociais, Canva e Criação de Conteúdo
                      </p>
                    </div>
                  </div>

                  {/* Summary Section */}
                  <div className="p-4 bg-slate-50 border border-slate-150 rounded-xl space-y-3">
                    <div className="flex justify-between items-center flex-wrap gap-2">
                      <h5 className="text-xs font-black text-slate-800 flex items-center gap-1.5">
                        <span className="bg-[#1a237e]/10 text-[#1a237e] p-1 rounded-md text-[10.5px]">3</span>
                        Faça um Resumo sobre Você (Sobre)
                      </h5>
                      <button
                        onClick={() => handleCopy("Sou iniciante em Marketing Digital e estou aprendendo a criar conteúdos para redes sociais, design no Canva e estratégias de divulgação online. Estou buscando desenvolver minhas habilidades e crescer profissionalmente.", "summary")}
                        className="cursor-pointer text-[9.5px] font-bold text-indigo-700 hover:text-indigo-900 border border-indigo-100 bg-indigo-50/50 px-2 py-1 rounded-md"
                      >
                        {copiedDraft === "summary" ? "✓ Copiado" : "📋 Copiar Modelo"}
                      </button>
                    </div>

                    <div className="p-3 bg-white border rounded-lg border-slate-205">
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">MODELO SUGERIDO:</div>
                      <p className="text-xs italic text-slate-600 mt-1 leading-normal">
                        "Sou iniciante em Marketing Digital e estou aprendendo a criar conteúdos para redes sociais, design no Canva e estratégias de divulgação online. Estou buscando desenvolver minhas habilidades e crescer profissionalmente."
                      </p>
                    </div>
                  </div>

                  {/* Education & Skills */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="p-4 bg-slate-50 border border-slate-150 rounded-xl space-y-2">
                      <h5 className="text-xs font-black text-slate-800 flex items-center gap-1.5">
                        <span className="bg-[#1a237e]/10 text-[#1a237e] p-1 rounded-md text-[10.5px]">4</span>
                        Adicione sua Formação
                      </h5>
                      <p className="text-[11px] text-slate-550 leading-relaxed">
                        Insira sua escola, curso técnico ou universidade. À medida que avança na carreira, inclua os cursos online livres e práticos.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 border border-slate-150 rounded-xl space-y-2">
                      <h5 className="text-xs font-black text-slate-800 flex items-center gap-1.5">
                        <span className="bg-[#1a237e]/10 text-[#1a237e] p-1 rounded-md text-[10.5px]">5</span>
                        Liste Habilidades Principais
                      </h5>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {["Marketing Digital", "Canva", "Redes Sociais", "Criação de Conteúdo", "Comunicação"].map((skill, sIdx) => (
                          <span key={sIdx} className="text-[9.5px] bg-slate-200/60 border border-slate-250 font-semibold px-2 py-0.5 rounded text-slate-700">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* LinkedIn Interactive Visual Card Mockup */}
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                  🎨 PRÉVIA DE PERFIL PROFISSIONAL
                </span>

                <div className="bg-gradient-to-b from-[#1a237e] to-[#040C3F] p-[1px] rounded-2xl">
                  <div className="bg-slate-950 rounded-[15px] p-5 relative overflow-hidden text-white font-sans space-y-4">
                    <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-indigo-750 to-blue-500 opacity-60 pointer-events-none" />
                    
                    {/* User profile details layout */}
                    <div className="relative pt-6 flex flex-col items-center text-center space-y-2">
                      <div className="w-16 h-16 rounded-full border-2 border-white bg-slate-800 flex items-center justify-center text-2xl select-none shadow-md">
                        🧑‍💻
                      </div>
                      <div className="min-w-0">
                        <h6 className="text-[13px] font-black tracking-tight text-white leading-tight">Seu Nome Profissional</h6>
                        <span className="text-[9.5px] text-emerald-400 font-bold uppercase tracking-wider block mt-0.5 font-mono">RANK: INICIANTE ATIVO</span>
                      </div>
                      
                      <p className="text-[10.5px] text-slate-300 px-2 leading-relaxed">
                        Estudante de Marketing Digital | Aprendendo Redes Sociais, Canva e Criação de Conteúdo
                      </p>
                    </div>

                    <div className="divide-y divide-slate-800 space-y-2.5 pt-2">
                      <div className="pt-2">
                        <span className="text-[9px] font-mono text-slate-500 uppercase block tracking-wider">SOBRE</span>
                        <p className="text-[10px] text-slate-400 italic leading-relaxed mt-0.5">
                          Sou iniciante em Marketing Digital e estou focado em criar anúncios eficientes, editar criativos altamente persuasivos e dominar funis de tráfego.
                        </p>
                      </div>

                      <div className="pt-2.5 flex justify-between text-[10px] text-slate-500">
                        <span>Localização: Brasil</span>
                        <span>Disponível para Projetos</span>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="bg-[#1a237e]/5 border border-[#1a237e]/10 p-4 rounded-xl text-[10.5px] text-slate-650 leading-relaxed font-sans">
                  💡 <strong>Benefício do LinkedIn:</strong> Ao compartilhar anotações estruturadas da sua apostila prática, empresários de pequeno porte verão sua dedicação e podem contratá-lo como suporte de tráfego ou mídias sociais.
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: CANVA GRAPHIC GUIDE */}
        {activeGuide === "canva" && (
          <div className="space-y-5">
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Canva steps */}
              <div className="lg:col-span-2 space-y-4">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                  🎨 SEU PRIMEIRO DESIGN PASSO A PASSO
                </span>

                <div className="space-y-3.5 font-sans">
                  
                  {[
                    { title: "Entre no Canva e Autentique", desc: "Acesse canva.com pelo navegador ou baixe o app no smartphone, e realize o login vinculando sua conta Gmail básica de estudos." },
                    { title: "Escolha Seu Formato de Saída", desc: "Clique no botão azul destacado 'Criar um design' e selecione 'Post para Instagram (Quadrado 1080x1080px)' ou 'Story para Instagram' para obter margens ideais." },
                    { title: "Selecione e Filtre um Modelo", desc: "No menu esquerdo de templates, faça uma busca rápida por palavras como 'Marketing', 'Estudos' ou 'Futuro' e escolha um layout limpo." },
                    { title: "Personalize Textos, Tipografias & Cores", desc: "Dê um toque humano alterando os títulos para o exercício prático, mude a paleta básica para refletir seu gosto e carregue uma imagem se necessário." },
                    { title: "Baixe a Mídia Otimizada", desc: "No canto superior, clique em 'Compartilhar' → 'Baixar'. Escolha o formato PNG (alta fidelidade e sem perdas de cor) ou JPG para anúncios rápidos." }
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-4 p-4.5 bg-slate-50 border border-slate-150 rounded-xl relative overflow-hidden">
                      <span className="text-xs font-black font-sans bg-indigo-50 border border-indigo-150 text-[#1a237e] w-6 h-6 rounded-lg flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <div className="space-y-0.5">
                        <strong className="text-xs text-slate-800 block">{step.title}</strong>
                        <p className="text-[11px] text-slate-550 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}

                </div>
              </div>

              {/* Supported standard formats column */}
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                  💾 FORMATOS DE EXPORTAÇÃO DISPONÍVEIS
                </span>

                <div className="divide-y divide-slate-100 bg-white border border-slate-200 rounded-2xl p-4.5 space-y-3 font-sans">
                  {[
                    { ext: ".PNG", usage: "Imagem de alta definição", p: "Melhor para posts, texto cru, logotipos e criativos que exigem fidelidade máxima de pixel do Canva." },
                    { ext: ".JPG", usage: "Imagem comprimida rápida", p: "Melhor para fotos pesadas de fundo e anúncios patrocinados no Meta Ads que exigem carregamento relâmpago." },
                    { ext: ".PDF", usage: "Documento fixado", p: "Melhor para exportar e-books de isca digital, calendários editoriais planejados e relatórios mensais ao cliente." },
                  ].map((format, fIdx) => (
                    <div key={fIdx} className={`${fIdx > 0 ? "pt-3" : ""} flex gap-3.5 items-start`}>
                      <span className="text-xs font-mono font-black border bg-slate-50 text-slate-800 p-1.5 rounded-lg shrink-0 w-11 text-center">
                        {format.ext}
                      </span>
                      <div className="min-w-0">
                        <strong className="text-xs block text-slate-800 leading-none">{format.usage}</strong>
                        <p className="text-[10px] text-slate-455 mt-1 leading-normal">{format.p}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-indigo-500/5 border border-indigo-500/10 p-4.5 rounded-2xl text-[11px] text-slate-650 leading-relaxed font-sans">
                  💡 <strong>Paleta de Cores:</strong> Mantenha consistência. Se você escolher azul e branco para sua marca pessoal de estudos, utilize essas mesmas tonalidades em todos os posts para ser reconhecido instantaneamente.
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 3: FIRST PRACTICAL EXERCISE */}
        {activeGuide === "exercise" && (
          <div className="space-y-5">
            
            <div className="bg-emerald-500/5 border border-emerald-500/25 p-5 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#00c853]">PLANILHA DE ATIVAÇÃO IMEDIATA</span>
                <h4 className="text-base font-black text-slate-800 font-sans">
                  Desafio Prático de Posicionamento Oficial
                </h4>
                <p className="text-xs text-slate-550 max-w-2xl font-sans">
                  O conhecimento teórico sem ação ativa evapora em 48h. Conclua este pequeno desafio profissional hoje e marque seu check na rotina.
                </p>
              </div>

              <span className="bg-[#00c853]/15 border border-[#00c853]/35 text-[#00c853] text-[9.5px] font-mono font-black uppercase px-3 py-1 rounded-full shrink-0 tracking-wider">
                Renda Extra Próxima
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Exercise Details Card */}
              <div className="lg:col-span-2 space-y-4">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                  ⚙️ O QUE FAZER PASSO A PASSO
                </span>

                <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4 font-sans">
                  
                  {/* Step 1 text mockup */}
                  <div className="flex gap-4.5 items-start">
                    <span className="w-6.5 h-6.5 rounded-full bg-[#00c853]/10 border border-[#00c853]/30 text-[#00c853] font-bold text-[11px] flex items-center justify-center shrink-0">1</span>
                    <div className="min-w-0 space-y-1">
                      <strong className="text-xs text-slate-800">Crie seu criativo gráfico no Canva de estudos:</strong>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Abra o Canva, crie um post quadrado com as exatas seguintes frases elegantes de alta atração:
                      </p>
                      
                      <div className="p-3 bg-slate-50 border border-slate-150 rounded-xl space-y-1 mt-1">
                        <p className="text-xs font-black text-indigo-900">“Estou aprendendo Marketing Digital!”</p>
                        <p className="text-[11px] font-semibold text-slate-500">“Acompanhe minha jornada prática de evolução.”</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 writing mockup */}
                  <div className="flex gap-4.5 items-start pt-3.5 border-t border-slate-100">
                    <span className="w-6.5 h-6.5 rounded-full bg-[#00c853]/10 border border-[#00c853]/30 text-[#00c853] font-bold text-[11px] flex items-center justify-center shrink-0">2</span>
                    <div className="min-w-0 space-y-1">
                      <strong className="text-xs text-slate-800">Crie uma publicação em seu LinkedIn pessoal:</strong>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Faça o upload da imagem recém-salva do Canva e escreva uma mensagem contando por que escolheu o Marketing Digital para expandir seus horizontes. Veja o rascunho de alto engajamento abaixo.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Ready copyable post content banner */}
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                  📋 IDEIA DE TEXTO PARA POSTAR (MELHORES FREELAS)
                </span>

                <div className="bg-slate-950 p-[1px] rounded-2xl">
                  <div className="bg-slate-950 rounded-[15px] p-5 space-y-3.5 font-sans relative overflow-hidden">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-emerald-400 font-mono font-bold tracking-widest">AÇÃO RECOMENDADA</span>
                      
                      <button
                        onClick={() => handleCopy("Olá rede! Hoje inicio oficialmente minha jornada de estudos focada em Marketing Digital. Estou mergulhando fundo em tráfego pago, análise de dados e design no Canva para auxiliar empreendimentos locais a crescerem de patamar online. Acompanhem meus próximos criativos e relatórios!", "post_draft")}
                        className="cursor-pointer text-[9.5px] font-bold text-emerald-400 border border-emerald-500/20 bg-emerald-500/5 px-2 py-1 rounded-md"
                      >
                        {copiedDraft === "post_draft" ? "✓ Copiado" : "📋 Copiar Texto"}
                      </button>
                    </div>

                    <p className="text-xs text-slate-305 leading-relaxed bg-[#111] p-3 rounded-xl border border-slate-850">
                      "Olá rede! Hoje inicio oficialmente minha jornada de estudos focada em Marketing Digital. Estou mergulhando fundo em tráfego pago, análise de dados e design no Canva para auxiliar empreendimentos locais a crescerem de patamar online. Acompanhem meus próximos criativos e relatórios!"
                    </p>

                    <div className="text-[10.5px] text-slate-450 leading-relaxed">
                      💡 <strong>Por que fazer isso?</strong> Demonstrar transparência de progresso e "aprender em público" gera interesse de agências de marketing locais atrás de novos talentos dispostos a trabalhar.
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}
