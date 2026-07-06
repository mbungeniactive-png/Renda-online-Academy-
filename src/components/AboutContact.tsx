/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  Award, 
  Mail, 
  Send, 
  CheckCircle2, 
  Instagram, 
  Linkedin, 
  Users, 
  GraduationCap, 
  PhoneCall, 
  MapPin, 
  ShieldCheck,
  Star
} from "lucide-react";

export default function AboutContact() {
  const [activeTab, setActiveTab] = useState<"sobre" | "contato">("sobre");

  // Contact form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [subject, setSubject] = useState("Dúvida de Aula");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() !== "" && email.trim() !== "" && message.trim() !== "") {
      setSubmitted(true);
      setName("");
      setEmail("");
      setWhatsapp("");
      setMessage("");
    }
  };

  return (
    <div className="bg-[#f8fafc] text-slate-800 min-h-screen py-16" id="about-contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TAB CONTROLLERS SCREEN */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm">
            <button
              onClick={() => { setActiveTab("sobre"); setSubmitted(false); }}
              className={`px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "sobre" 
                  ? "bg-[#1a237e] text-white shadow-sm" 
                  : "text-slate-500 hover:text-[#1a237e]"
              }`}
            >
              📖 Quem Somos & Missão
            </button>
            <button
              onClick={() => { setActiveTab("contato"); setSubmitted(false); }}
              className={`px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "contato" 
                  ? "bg-[#1a237e] text-white shadow-sm" 
                  : "text-slate-500 hover:text-[#1a237e]"
              }`}
              id="contato-tab-button"
            >
              📞 Fale Conosco
            </button>
          </div>
        </div>

        {/* TAB CONTENT: SOBRE */}
        {activeTab === "sobre" && (
          <div className="space-y-16 animate-fadeIn" id="about-tab-panel">
            
            {/* HERO HISTORY PROFILE */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-1 bg-[#1a237e]/10 border border-[#1a237e]/20 px-3 py-1 rounded-full text-[#1a237e] text-xs font-mono uppercase font-semibold">
                  <GraduationCap className="h-3.5 w-3.5" />
                  <span>Portal Educacional Recomendado</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1a237e] leading-tight">
                  Democratizando a Educação Financeira Digital no Brasil
                </h1>
                
                <p className="text-slate-700 text-sm leading-relaxed font-sans">
                  A <strong>Renda Online Academy</strong> foi criada em 2026 com o propósito claro de guiar o cidadão comum, do absoluto zero, na construção de fontes legítimas de receita pela internet. Acreditamos firmemente que o ecossistema digital oferece o maior e mais ágil mecanismo de alvancagem social e financeira de nossa era.
                </p>
                <p className="text-slate-500 text-xs leading-relaxed font-sans">
                  Diferente de falsos profetas que prometem lucros rápidos desprovidos de bases reais, nosso portal foca puramente em habilidades técnicas de alta empregabilidade: copywriting comercial, funis automatizados, e-mail marketing, tráfego de afiliados, estratégias SEO e posicionamento de serviços globais para agências estrangeiras.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-4 text-center">
                  <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                    <span className="block text-xl font-extrabold text-[#1a237e] font-mono">100%</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono font-sans font-sans">Grátis para Alunos</span>
                  </div>
                  <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                    <span className="block text-xl font-extrabold text-[#1a237e] font-mono">13K+</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono font-sans font-sans">Alunos Matriculados</span>
                  </div>
                </div>
              </div>

              {/* COVER ILLSUSTRATION STYLED */}
              <div className="relative aspect-video lg:aspect-square bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex items-center justify-center p-8">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#00c853]/5 rounded-full blur-3xl" />
                
                <div className="relative z-10 text-center space-y-4 max-w-sm">
                  <Award className="h-14 w-14 text-[#00c853] mx-auto animate-pulse" />
                  <h3 className="text-lg font-bold text-[#1a237e] uppercase tracking-wider">Aprenda Com Método Integrado</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    Nossos roteiros de ensino são refinados sequencialmente. Você recebe checklists minuciosos acoplados a quizes para atestar que as competências estão sólidas para faturamento.
                  </p>
                  <div className="flex justify-center space-x-3 text-slate-400 pt-2 border-t border-slate-100">
                    <Instagram className="h-5 w-5 hover:text-[#00c853] transition-colors cursor-pointer" />
                    <Linkedin className="h-5 w-5 hover:text-[#00c853] transition-colors cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>

            {/* THREE CORE VALUES */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              <div className="space-y-3">
                <div className="text-[#1a237e] font-bold font-mono text-sm uppercase flex items-center gap-1.5 font-sans">
                  <ShieldCheck className="h-4.5 w-4.5 text-[#00c853]" />
                  01. Integridade
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-sans font-sans">
                  Não camuflamos dificuldades e não induzimos riscos desnecessários. Ensinamos negócios, e negócios exigem consistência, dedicação técnica e respeito regulatório.
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-[#1a237e] font-bold font-mono text-sm uppercase flex items-center gap-1.5 font-sans">
                  <Users className="h-4.5 w-4.5 text-[#00c853]" />
                  02. Acessibilidade
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-sans font-sans">
                  Disponibilizamos aulas de alta qualidade teórica inteiramente a custo zero para remover quaisquer distâncias socioeconômicas no fomento da emancipação profissional digital.
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-[#1a237e] font-bold font-mono text-sm uppercase flex items-center gap-1.5 font-sans">
                  <Award className="h-4.5 w-4.5 text-[#00c853]" />
                  03. Didática Prática
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-sans font-sans">
                  Toda aula ensinada conta com tarefas autoaplicáveis imediatas. Você estuda, executa seus rascunhos práticos, valida seus acertos no quiz e sobe degraus reais no mercado.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* TAB CONTENT: CONTACT FORM */}
        {activeTab === "contato" && (
          <div className="max-w-4xl mx-auto animate-fadeIn grid grid-cols-1 md:grid-cols-3 gap-8 items-start" id="contact-tab-panel">
            
            {/* DIRECT INFO BOX (COLSPAN 1) */}
            <div className="space-y-6 text-xs text-slate-600 leading-relaxed bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
              <h3 className="text-[#1a237e] text-sm font-extrabold uppercase tracking-wider font-sans">
                Canais Especializados
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-4.5 w-4.5 text-[#00c853] mt-0.5 shrink-0" />
                  <div>
                    <span className="block font-bold text-slate-900">Suporte Oficial & Contato</span>
                    <a href="mailto:academyrendaonline@gmail.com" className="text-[#1a237e] hover:underline font-bold font-sans">
                      academyrendaonline@gmail.com
                    </a>
                  </div>
                </div>

                <div className="p-3 bg-[#1a237e]/5 border border-[#1a237e]/10 rounded-lg text-[11px] text-slate-600 font-sans">
                  💡 <strong>Importante:</strong> Não realizamos atendimento via WhatsApp ou telefone comercial. Todo o suporte pedagógico e administrativo é realizado exclusivamente através do nosso e-mail oficial acima.
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-400 font-sans">
                <strong>Horário de Expediente:</strong> Segunda-feira a Sexta-feira, das 09h00 às 18h00 comerciais de Brasília.
              </div>
            </div>

            {/* INTERACTIVE FORM FIELD (COLSPAN 2) */}
            <div className="md:col-span-2 bg-white border border-slate-200 p-6 sm:p-8 rounded-xl shadow-sm">
              <h2 className="text-lg font-bold text-[#1a237e] mb-2 uppercase tracking-wide">
                Envie-nos Sua Mensagem Direta
              </h2>
              <p className="text-xs text-slate-600 mb-6 leading-relaxed font-sans">
                Preencha o formulário abaixo com suas informações pedagógicas ou dúvidas de parcerias para receber o feedback de nossos conselheiros acadêmicos em até 24h úteis.
              </p>

              {submitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3" id="contact-success-indicator">
                  <CheckCircle2 className="h-10 w-10 text-[#00c853] mx-auto animate-bounce" />
                  <h3 className="text-[#00c853] font-bold text-sm uppercase">Mensagem Expedida Com Sucesso!</h3>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto font-sans">
                    Olá! Nós registramos sua mensagem na central de suporte da Renda Online Academy. Um e-mail com o bilhete de atendimento formal foi despachado para sua caixa postal. Responderemos em breve!
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs text-white bg-[#1a237e] hover:bg-[#151c66] px-4 py-2 rounded-lg font-bold"
                  >
                    Enviar Nova Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" id="academy-contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] text-slate-500 uppercase font-mono tracking-wider block mb-1 font-sans font-medium">Seu Nome Completo *</label>
                      <input 
                        type="text"
                        required
                        placeholder="Ex: Carlos Albuquerque"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-xs text-slate-850 focus:outline-none focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-500 uppercase font-mono tracking-wider block mb-1 font-sans font-medium">Seu E-mail Preferencial *</label>
                      <input 
                        type="email"
                        required
                        placeholder="carlos@provedor.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-xs text-slate-850 focus:outline-none focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] text-slate-500 uppercase font-mono tracking-wider block mb-1 font-sans font-medium">Whatsapp / contato telefônico</label>
                      <input 
                        type="tel"
                        placeholder="Ex: (11) 99999-9999"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-xs text-slate-850 focus:outline-none focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-500 uppercase font-mono tracking-wider block mb-1 font-sans font-medium">Tema da Mensagem</label>
                      <select 
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-xs text-slate-850 focus:outline-none focus:border-[#1a237e] transition-colors"
                      >
                        <option value="Dúvida de Aula">🙋‍♂️ Ajuda em lição/aula</option>
                        <option value="Dúvida no Quiz">📝 Correção de Quiz</option>
                        <option value="Problema Técnico">⚙️ Problema técnico</option>
                        <option value="Parceria de Conteúdo">🤝 Parcerias comerciais</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-slate-500 uppercase font-mono tracking-wider block mb-1 font-sans font-bold">Resumo Sua Proposta / Mensagem *</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="Descreva detalhadamente o que deseja alinhar com nosso time de professores..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-xs text-slate-850 focus:outline-none focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1a237e] hover:bg-[#151c66] text-white font-extrabold py-3 px-6 rounded-lg shadow transition-all flex items-center justify-center space-x-2 text-xs shrink-0 cursor-pointer"
                  >
                    <span>Expedir Mensagem Corporativa</span>
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>

          </div>
        )}

        {/* REVENUE MOCK BANNER AT BOTTOM */}
        <div className="pt-12 flex justify-center">
          <div className="w-full max-w-[728px] p-3.5 bg-white border border-slate-200 rounded-xl text-center shadow-sm">
            <span className="text-[8px] font-mono text-slate-400 uppercase font-bold tracking-widest block mb-1 font-sans">
              Espaço de Conteúdo Recomendado (728x90)
            </span>
            <div className="w-full bg-slate-50 h-[90px] border border-slate-200 rounded-lg flex items-center justify-center text-xs text-slate-500 font-mono">
              Patrocinado Oficial — Espaço Reservado
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
