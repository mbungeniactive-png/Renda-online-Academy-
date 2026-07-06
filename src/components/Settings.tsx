import React, { useState, useEffect } from "react";
import { 
  Settings as SettingsIcon, 
  User, 
  Mail, 
  ShieldCheck, 
  Lock, 
  Bell, 
  Trash2, 
  CheckCircle, 
  HelpCircle,
  Eye,
  Info,
  ChevronRight,
  Database
} from "lucide-react";

interface SettingsProps {
  completedLessonsCount: number;
  totalLessonsCount: number;
  onResetProgress: () => void;
}

export default function Settings({ 
  completedLessonsCount, 
  totalLessonsCount,
  onResetProgress 
}: SettingsProps) {
  // Config States
  const [name, setName] = useState<string>(() => localStorage.getItem("user-name") || "Aluno Elite");
  const [email, setEmail] = useState<string>(() => localStorage.getItem("user-email") || "[SEU EMAIL]");
  const [marketingConsent, setMarketingConsent] = useState<boolean>(() => localStorage.getItem("user-marketing") === "true");
  const [cookieConsent, setCookieConsent] = useState<boolean>(() => localStorage.getItem("user-cookies") !== "false");
  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => localStorage.getItem("user-sounds") !== "false");
  
  // Active settings tab: "geral" | "privacidade" | "termos"
  const [activeTab, setActiveTab] = useState<"geral" | "privacidade" | "termos">("geral");
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);
  const [showResetConfirm, setShowResetConfirm] = useState<boolean>(false);

  // Auto-save changes to localStorage when they change
  const handleSave = () => {
    localStorage.setItem("user-name", name);
    localStorage.setItem("user-email", email);
    localStorage.setItem("user-marketing", String(marketingConsent));
    localStorage.setItem("user-cookies", String(cookieConsent));
    localStorage.setItem("user-[#user-sounds]", String(soundEnabled));
    
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleResetClick = () => {
    onResetProgress();
    setShowResetConfirm(false);
    alert("Progresso de estudos resetado com sucesso!");
  };

  return (
    <div className="bg-[#f8fafc] text-slate-800 min-h-screen py-12" id="settings-layout-page">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-8">
          <div className="flex items-center space-x-3">
            <div className="bg-[#1a237e]/10 p-3 rounded-xl border border-[#1a237e]/20 text-[#1a237e]">
              <SettingsIcon className="h-6 w-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#00c853] uppercase">Painel Geral</span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1a237e]">Configurações</h1>
              <p className="text-xs text-slate-500">Gerencie seus dados de estudante, preferências do portal e termos legais.</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab("geral")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "geral"
                  ? "bg-[#1a237e] text-white shadow-md shadow-indigo-900/10"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              Preferências
            </button>
            <button
              onClick={() => setActiveTab("privacidade")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "privacidade"
                  ? "bg-[#1a237e] text-white shadow-md shadow-indigo-900/10"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              Política de Privacidade
            </button>
            <button
              onClick={() => setActiveTab("termos")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "termos"
                  ? "bg-[#1a237e] text-white shadow-md shadow-indigo-900/10"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              Termos de Uso
            </button>
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* SIDEBAR NAVIGATION CARD */}
          <div className="space-y-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm space-y-1">
              <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider block px-2 pb-2">Navegação</span>
              
              <button
                onClick={() => setActiveTab("geral")}
                className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "geral"
                    ? "bg-slate-50 text-[#1a237e] border border-slate-200"
                    : "text-slate-600 hover:bg-slate-50/55"
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  <User className="h-4 w-4" />
                  <span>Perfil & Preferências</span>
                </div>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </button>

              <button
                onClick={() => setActiveTab("privacidade")}
                className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "privacidade"
                    ? "bg-slate-50 text-[#1a237e] border border-slate-200"
                    : "text-slate-600 hover:bg-slate-50/55"
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  <Lock className="h-4 w-4" />
                  <span>Política de Privacidade</span>
                </div>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </button>

              <button
                onClick={() => setActiveTab("termos")}
                className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "termos"
                    ? "bg-slate-50 text-[#1a237e] border border-slate-200"
                    : "text-slate-600 hover:bg-slate-50/55"
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Termos de Uso</span>
                </div>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </button>
            </div>

            {/* QUICK STATUS CARD */}
            <div className="bg-gradient-to-tr from-[#1a237e] to-indigo-900 text-white rounded-2xl p-5 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
              <div className="space-y-3 relative z-10">
                <div className="bg-white/10 p-2.5 rounded-lg w-fit">
                  <Database className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Banco de Dados Local</h4>
                  <p className="text-white/80 text-[10px] mt-1 leading-relaxed">Seu progresso e configurações são gravados de forma segura e imediata no cache de navegação (localStorage) de acordo com as leis LGPD.</p>
                </div>
                <div className="bg-black/20 p-2.5 rounded-lg flex items-center justify-between text-[10px]">
                  <span>Aulas Concluídas:</span>
                  <span className="font-mono font-bold text-[#00c853]">{completedLessonsCount} / {totalLessonsCount}</span>
                </div>
              </div>
            </div>
          </div>

          {/* MAIN FORM PANEL */}
          <div className="md:col-span-2">
            
            {activeTab === "geral" && (
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
                
                <div className="border-b border-slate-100 pb-4">
                  <h3 className="text-base font-extrabold text-[#1a237e] flex items-center gap-1.5">
                    <User className="h-5 w-5 text-[#00c853]" />
                    <span>Dados do Estudante</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">Essas informações serão exibidas nos seus gráficos e no seu certificado de conclusão.</p>
                </div>

                {/* Name Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 block">Seu Nome de Exibição:</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:bg-white focus:border-[#1a237e] transition-all"
                      placeholder="Ex: Maria Silva"
                    />
                    <User className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 block">Seu E-mail de Contato:</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:bg-white focus:border-[#1a237e] transition-all"
                      placeholder="Ex: seuemail@dominio.com"
                    />
                    <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                  </div>
                  <span className="text-[10px] text-slate-400 leading-relaxed block">
                    Seu e-mail será usado para preenchimento dinâmico da Política de Privacidade abaixo e suporte técnico.
                  </span>
                </div>

                <div className="border-b border-slate-100 pb-4 pt-2">
                  <h3 className="text-base font-extrabold text-[#1a237e] flex items-center gap-1.5">
                    <Bell className="h-5 w-5 text-[#00c853]" />
                    <span>Preferências de Consentimento</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">Gerencie como lidamos com os seus cookies e notificações de conformidade legal.</p>
                </div>

                {/* Consent Toggles */}
                <div className="space-y-4">
                  {/* Cookie Toggle */}
                  <label className="flex items-start space-x-3 p-3.5 rounded-xl border border-slate-100 hover:bg-slate-50/50 cursor-pointer transition-all">
                    <input
                      type="checkbox"
                      checked={cookieConsent}
                      onChange={(e) => setCookieConsent(e.target.checked)}
                      className="mt-0.5 rounded border-slate-300 text-[#00c853] focus:ring-[#00c853]"
                    />
                    <div>
                      <span className="text-xs font-bold text-slate-700 block">Permitir Cookies de Conteúdo Parceiro</span>
                      <p className="text-[10.5px] text-slate-400 leading-relaxed mt-0.5">Utilizado para sugerir conteúdos e ofertas recomendadas baseadas na sua navegação de forma segura e anonimizada.</p>
                    </div>
                  </label>

                  {/* Newsletter Marketing Toggle */}
                  <label className="flex items-start space-x-3 p-3.5 rounded-xl border border-slate-100 hover:bg-slate-50/50 cursor-pointer transition-all">
                    <input
                      type="checkbox"
                      checked={marketingConsent}
                      onChange={(e) => setMarketingConsent(e.target.checked)}
                      className="mt-0.5 rounded border-slate-300 text-[#00c853] focus:ring-[#00c853]"
                    />
                    <div>
                      <span className="text-xs font-bold text-slate-700 block">Aceito receber informativos educacionais</span>
                      <p className="text-[10.5px] text-slate-400 leading-relaxed mt-0.5">Desejo que a equipe da Academy envie atualizações sobre novas aulas grátis e materiais complementares no meu e-mail.</p>
                    </div>
                  </label>
                </div>

                {/* SAVE BUTTON */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
                  {saveSuccess ? (
                    <span className="text-xs font-bold text-[#00c853] flex items-center gap-1.5 animate-fadeIn">
                      <CheckCircle className="h-4.5 w-4.5" />
                      Configurações salvas no cache local!
                    </span>
                  ) : (
                    <span className="text-[10px] text-slate-400 flex items-center gap-1">
                      <Info className="h-3.5 w-3.5 shrink-0" />
                      Clique no botão para persistir no navegador.
                    </span>
                  )}
                  
                  <button
                    onClick={handleSave}
                    className="w-full sm:w-auto cursor-pointer bg-[#00c853] hover:bg-[#00a844] text-white px-6 py-2.5 rounded-xl text-xs font-extrabold shadow-md hover:shadow-lg transition-all"
                  >
                    Salvar Alterações
                  </button>
                </div>

                {/* DESTRUCTIVE ZONE */}
                <div className="bg-red-50/50 border border-red-150 rounded-2xl p-5 space-y-3 pt-4 mt-8">
                  <div>
                    <h4 className="text-xs font-black text-red-700 flex items-center gap-1.5 uppercase tracking-wide">
                      <Trash2 className="h-4 w-4" />
                      Zona de Perigo
                    </h4>
                    <p className="text-[10.5px] text-slate-400 leading-relaxed mt-1">Essas ações são permanentes e apagam todos os registros salvos localmente neste navegador.</p>
                  </div>
                  
                  {showResetConfirm ? (
                    <div className="bg-white border border-red-200 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fadeIn">
                      <div>
                        <span className="text-xs font-bold text-slate-800 block">Tem certeza absoluta?</span>
                        <p className="text-[10px] text-slate-400">Você perderá o histórico de aulas marcadas como concluídas.</p>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={handleResetClick}
                          className="bg-red-600 hover:bg-red-700 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold cursor-pointer"
                        >
                          Sim, resetar
                        </button>
                        <button
                          onClick={() => setShowResetConfirm(false)}
                          className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3.5 py-1.5 rounded-lg text-xs font-bold cursor-pointer"
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setShowResetConfirm(true)}
                      className="cursor-pointer bg-white border border-red-200 text-red-600 hover:bg-red-50/50 px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 w-full sm:w-auto"
                    >
                      <Trash2 className="h-4 w-4" />
                      Resetar Todo o Progresso
                    </button>
                  )}
                </div>

              </div>
            )}

            {activeTab === "privacidade" && (
              
              /* PRIVACY POLICY VIEW (DENTRO DE CONFIGURAÇÕES) */
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6" id="privacy-policy-settings-view">
                
                <div className="border-b border-slate-100 pb-4 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-base font-extrabold text-[#1a237e] flex items-center gap-1.5">
                      <Lock className="h-5 w-5 text-[#00c853]" />
                      <span>Política de Privacidade</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">Conformidade e regulação jurídica do nosso portal.</p>
                  </div>
                  <span className="bg-emerald-50 text-[#00c853] text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded border border-emerald-100 shrink-0">
                    Ativo
                  </span>
                </div>

                {/* TEXT DOC IN PORTUGUESE (EXACTLY AS REQUESTED) */}
                <div className="text-xs sm:text-sm text-slate-650 leading-relaxed space-y-5 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200">
                  <div className="p-3 bg-indigo-50/30 border border-indigo-100/50 rounded-xl text-slate-600 font-sans text-xs leading-relaxed">
                    ℹ️ <strong>E-mail de Contato Configurado:</strong> Esta política de privacidade se comunica com o e-mail cadastrado em seu perfil de estudante: <strong className="text-[#1a237e] font-mono">{email}</strong>. Você pode alterá-lo na aba "Preferências".
                  </div>

                  <p className="font-bold text-[#1a237e] text-center text-xs uppercase tracking-wider bg-slate-50 py-3 rounded-lg border border-slate-150">
                    POLÍTICA DE PRIVACIDADE — RENDA ONLINE ACADEMY
                  </p>
                  
                  <p className="text-xs text-slate-400">Última atualização: 30 de Junho de 2026</p>

                  <h4 className="font-bold text-[#1a237e] text-xs uppercase tracking-wider pt-2">1. INTRODUÇÃO</h4>
                  <p>
                    Esta Política de Privacidade descreve como o site Renda Online Academy ("nós", "nosso" ou "site") coleta, usa, armazena e protege as informações dos usuários que visitam ou utilizam nossos serviços. Ao acessar este site, você concorda com os termos descritos nesta política.
                  </p>

                  <h4 className="font-bold text-[#1a237e] text-xs uppercase tracking-wider pt-2">2. INFORMAÇÕES QUE COLETAMOS</h4>
                  
                  <p className="font-bold text-slate-800 text-xs pl-2 border-l-2 border-[#00c853]">2.1. Informações fornecidas voluntariamente:</p>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li>Nome e e-mail (ao se cadastrar em nossa newsletter ou formulário de contato)</li>
                    <li>Dados de pagamento (processados por plataformas terceiras seguras, como Hotmart, quando aplicável)</li>
                  </ul>

                  <p className="font-bold text-slate-800 text-xs pl-2 border-l-2 border-[#00c853]">2.2. Informações coletadas automaticamente:</p>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li>Endereço IP</li>
                    <li>Tipo de navegador e dispositivo</li>
                    <li>Páginas visitadas e tempo de permanência</li>
                    <li>Cookies e tecnologias similares</li>
                  </ul>

                  <h4 className="font-bold text-[#1a237e] text-xs uppercase tracking-wider pt-2">3. USO DE COOKIES</h4>
                  <p>
                    Este site utiliza cookies para melhorar a experiência do usuário, analisar o tráfego do site e personalizar conteúdo e anúncios. Cookies são pequenos arquivos armazenados no seu dispositivo que nos ajudam a entender como você interage com nosso conteúdo.
                  </p>
                  <p>
                    Você pode desativar os cookies nas configurações do seu navegador, mas isso pode afetar algumas funcionalidades do site.
                  </p>

                  <p className="font-bold text-slate-800 text-xs pl-2 border-l-2 border-[#00c853]">3.1. Publicidade de Terceiros</p>
                  <p>
                    Utilizamos redes de publicidade para exibir anúncios em nosso site. Os provedores de anúncios e seus parceiros podem usar cookies para veicular anúncios com base nas visitas anteriores do usuário a este e a outros sites.
                  </p>
                  <p>
                    Você pode desativar o uso de cookies personalizados acessando as Configurações de Anúncios do Google em: <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">https://adssettings.google.com</a>
                  </p>

                  <h4 className="font-bold text-[#1a237e] text-xs uppercase tracking-wider pt-2">4. COMO USAMOS SUAS INFORMAÇÕES</h4>
                  <p>Utilizamos as informações coletadas para:</p>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li>Fornecer e melhorar nossos conteúdos e serviços</li>
                    <li>Enviar comunicações sobre novidades, cursos e conteúdos (caso você tenha se inscrito)</li>
                    <li>Personalizar a experiência do usuário no site</li>
                    <li>Exibir anúncios relevantes através de nossas redes parceiras</li>
                    <li>Analisar o desempenho e uso do site</li>
                  </ul>

                  <h4 className="font-bold text-[#1a237e] text-xs uppercase tracking-wider pt-2">5. COMPARTILHAMENTO DE DADOS</h4>
                  <p>
                    Não vendemos, alugamos ou comercializamos suas informações pessoais com terceiros. Podemos compartilhar dados com:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li>Plataformas de pagamento (Hotmart, e similares) para processar transações</li>
                    <li>Ferramentas de análise (como Google Analytics) para entender o uso do site</li>
                    <li>Provedores de anúncios conforme descrito acima</li>
                  </ul>

                  <h4 className="font-bold text-[#1a237e] text-xs uppercase tracking-wider pt-2">6. SEGURANÇA DOS DADOS</h4>
                  <p>
                    Adotamos medidas técnicas e administrativas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
                  </p>

                  <h4 className="font-bold text-[#1a237e] text-xs uppercase tracking-wider pt-2">7. SEUS DIREITOS</h4>
                  <p>De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de:</p>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li>Acessar os dados que temos sobre você</li>
                    <li>Corrigir dados incompletos ou desatualizados</li>
                    <li>Solicitar a exclusão dos seus dados</li>
                    <li>Revogar o consentimento a qualquer momento</li>
                  </ul>
                  <p>
                    Para exercer esses direitos, entre em contato através do e-mail: <strong className="text-indigo-900 font-mono select-all bg-slate-100 px-1 py-0.5 rounded">{email}</strong>
                  </p>

                  <h4 className="font-bold text-[#1a237e] text-xs uppercase tracking-wider pt-2">8. LINKS DE AFILIADOS</h4>
                  <p>
                    Este site pode conter links de afiliados. Isso significa que podemos receber uma comissão caso você realize uma compra através desses links, sem custo adicional para você.
                  </p>

                  <h4 className="font-bold text-[#1a237e] text-xs uppercase tracking-wider pt-2">9. ALTERAÇÕES NESTA POLÍTICA</h4>
                  <p>
                    Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre quaisquer mudanças.
                  </p>

                  <h4 className="font-bold text-[#1a237e] text-xs uppercase tracking-wider pt-2">10. CONTATO</h4>
                  <p>
                    Em caso de dúvidas sobre esta Política de Privacidade, entre em contato:
                    <br />
                    E-mail: <strong className="text-indigo-900 font-mono select-all bg-slate-100 px-1 py-0.5 rounded">{email}</strong>
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-450">
                  <span>Renda Online Academy &copy; Compliance Geral</span>
                  <button
                    onClick={() => {
                      alert("Agradecemos a sua leitura! Termos aceitos e confirmados.");
                    }}
                    className="cursor-pointer bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-1.5 rounded-lg text-xs font-bold transition-all"
                  >
                    Aceitar e Confirmar
                  </button>
                </div>

              </div>
            )}

            {activeTab === "termos" && (
              /* TERMS OF USE VIEW (DENTRO DE CONFIGURAÇÕES) */
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6" id="terms-of-use-settings-view">
                
                <div className="border-b border-slate-100 pb-4 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-base font-extrabold text-[#1a237e] flex items-center gap-1.5">
                      <ShieldCheck className="h-5 w-5 text-[#00c853]" />
                      <span>Termos de Uso</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">Regulação de uso e responsabilidades do nosso portal.</p>
                  </div>
                  <span className="bg-emerald-50 text-[#00c853] text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded border border-emerald-100 shrink-0">
                    Ativo
                  </span>
                </div>

                <div className="text-xs sm:text-sm text-slate-650 leading-relaxed space-y-5 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200">
                  <div className="p-3 bg-indigo-50/30 border border-indigo-100/50 rounded-xl text-slate-600 font-sans text-xs leading-relaxed">
                    ℹ️ <strong>E-mail de Contato Configurado:</strong> Estes termos de uso se comunicam com o e-mail cadastrado em seu perfil de estudante: <strong className="text-[#1a237e] font-mono">{email}</strong>. Você pode alterá-lo na aba "Preferências".
                  </div>

                  <p className="font-bold text-[#1a237e] text-center text-xs uppercase tracking-wider bg-slate-50 py-3 rounded-lg border border-slate-150">
                    TERMOS DE USO — RENDA ONLINE ACADEMY
                  </p>
                  
                  <p className="text-xs text-slate-400">Última atualização: 30 de Junho de 2026</p>

                  <h4 className="font-bold text-[#1a237e] text-xs uppercase tracking-wider pt-2">1. ACEITAÇÃO DOS TERMOS</h4>
                  <p>
                    Ao acessar e usar o site Renda Online Academy, você concorda com estes Termos de Uso. Caso não concorde com algum dos termos aqui descritos, recomendamos que não utilize este site.
                  </p>

                  <h4 className="font-bold text-[#1a237e] text-xs uppercase tracking-wider pt-2">2. SOBRE O SITE</h4>
                  <p>
                    O Renda Online Academy é uma plataforma educacional que oferece conteúdo gratuito e pago sobre formas de gerar renda através da internet, incluindo freelancer, marketing de afiliados, criação de conteúdo e produtos digitais.
                  </p>

                  <h4 className="font-bold text-[#1a237e] text-xs uppercase tracking-wider pt-2">3. USO PERMITIDO</h4>
                  <p>
                    Você concorda em utilizar este site apenas para fins legais e de acordo com estes Termos. É proibido:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li>Usar o site de forma que possa danificar, desabilitar ou sobrecarregar nossos servidores</li>
                    <li>Reproduzir, copiar ou redistribuir o conteúdo sem autorização prévia</li>
                    <li>Utilizar o site para fins ilegais ou não autorizados</li>
                  </ul>

                  <h4 className="font-bold text-[#1a237e] text-xs uppercase tracking-wider pt-2">4. PROPRIEDADE INTELECTUAL</h4>
                  <p>
                    Todo o conteúdo deste site — incluindo textos, vídeos, imagens, logotipos e materiais educacionais — é de propriedade do Renda Online Academy ou de seus licenciadores, sendo protegido pelas leis de direitos autorais. A reprodução não autorizada é proibida.
                  </p>

                  <h4 className="font-bold text-[#1a237e] text-xs uppercase tracking-wider pt-2">5. RESULTADOS E ISENÇÃO DE RESPONSABILIDADE</h4>
                  <p>
                    O conteúdo deste site tem caráter educacional e informativo. Os resultados financeiros mencionados são baseados em experiências individuais e não representam garantia de resultados similares para todos os usuários.
                  </p>
                  <p className="bg-rose-50 p-4 rounded-xl border border-rose-100/80 text-xs text-rose-700 font-sans">
                    Ganhar dinheiro online depende de diversos fatores, incluindo dedicação, esforço individual, mercado e fatores externos que estão fora do nosso controle. Não garantimos resultados financeiros específicos.
                  </p>

                  <h4 className="font-bold text-[#1a237e] text-xs uppercase tracking-wider pt-2">6. LINKS DE AFILIADOS E PARCERIAS</h4>
                  <p>
                    Este site pode conter links de afiliados de produtos e serviços de terceiros. Ao clicar nesses links e realizar uma compra, podemos receber uma comissão, sem custo adicional para você. Recomendamos apenas produtos e serviços que consideramos relevantes e de qualidade.
                  </p>

                  <h4 className="font-bold text-[#1a237e] text-xs uppercase tracking-wider pt-2">7. PUBLICIDADE</h4>
                  <p>
                    Este site exibe anúncios através de redes parceiras de publicidade. Não temos controle total sobre o conteúdo específico de cada anúncio exibido e não nos responsabilizamos pelos produtos ou serviços anunciados por terceiros.
                  </p>

                  <h4 className="font-bold text-[#1a237e] text-xs uppercase tracking-wider pt-2">8. PRODUTOS E SERVIÇOS PAGOS</h4>
                  <p>
                    Caso o usuário adquira algum produto digital (curso, e-book ou mentoria) oferecido neste site, as condições de pagamento, acesso e garantia serão detalhadas na página de vendas específica de cada produto no momento da compra.
                  </p>

                  <h4 className="font-bold text-[#1a237e] text-xs uppercase tracking-wider pt-2">9. LIMITAÇÃO DE RESPONSABILIDADE</h4>
                  <p>
                    O Renda Online Academy não se responsabiliza por:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li>Danos diretos ou indiretos decorrentes do uso do site</li>
                    <li>Interrupções temporárias de acesso por motivos técnicos</li>
                    <li>Conteúdo de sites externos linkados a partir deste site</li>
                  </ul>

                  <h4 className="font-bold text-[#1a237e] text-xs uppercase tracking-wider pt-2">10. MODIFICAÇÕES DO SITE E DOS TERMOS</h4>
                  <p>
                    Reservamo-nos o direito de modificar, suspender ou descontinuar qualquer parte do site a qualquer momento, bem como atualizar estes Termos de Uso sem aviso prévio. Recomendamos revisão periódica desta página.
                  </p>

                  <h4 className="font-bold text-[#1a237e] text-xs uppercase tracking-wider pt-2">11. LEGISLAÇÃO APLICÁVEL</h4>
                  <p>
                    Estes Termos de Uso são regidos pelas leis brasileiras. Qualquer disputa relacionada ao uso deste site será resolvida nos tribunais competentes do Brasil.
                  </p>

                  <h4 className="font-bold text-[#1a237e] text-xs uppercase tracking-wider pt-2">12. CONTATO</h4>
                  <p>
                    Para dúvidas sobre estes Termos de Uso, entre em contato:
                    <br />
                    E-mail: <strong className="text-indigo-900 font-mono select-all bg-slate-100 px-1 py-0.5 rounded">{email}</strong>
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-450">
                  <span>Renda Online Academy &copy; Compliance Geral</span>
                  <button
                    onClick={() => {
                      alert("Agradecemos a sua leitura! Termos de Uso aceitos e confirmados.");
                    }}
                    className="cursor-pointer bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-1.5 rounded-lg text-xs font-bold transition-all"
                  >
                    Aceitar e Confirmar
                  </button>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
