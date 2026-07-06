/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ShieldCheck, FileText, Lock, Scale, AlertCircle } from "lucide-react";

interface LegalProps {
  pageType: "privacidade" | "termos";
}

export default function Legal({ pageType }: LegalProps) {
  const email = "academyrendaonline@gmail.com";

  return (
    <div className="bg-[#f8fafc] text-slate-800 min-h-screen py-16" id="legal-layout-page">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* PRIVACY POLICY */}
        {pageType === "privacidade" ? (
          <div className="space-y-8" id="privacy-policy-document">
            
            {/* CARD TITLE METAS */}
            <div className="flex items-center space-x-3.5 border-b border-slate-200 pb-6">
              <div className="bg-[#1a237e]/10 p-3 rounded-xl border border-[#1a237e]/20 text-[#1a237e]">
                <Lock className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#00c853] uppercase font-sans">Documento Regulamentar</span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1a237e]">Política de Privacidade</h1>
                <span className="text-xs text-slate-450 block font-sans">Última atualização: 30 de Junho de 2026</span>
              </div>
            </div>

            {/* DOCUMENT PROSE BODY */}
            <div className="text-xs sm:text-sm text-slate-650 leading-relaxed font-sans space-y-6">
              <p className="font-bold text-[#1a237e] text-sm uppercase tracking-wider text-center bg-slate-50 py-3 rounded-lg border border-slate-150">
                POLÍTICA DE PRIVACIDADE — RENDA ONLINE ACADEMY
              </p>

              <h3 className="text-base font-bold text-[#1a237e] uppercase tracking-wider flex items-center pt-4 font-sans">
                <ShieldCheck className="h-4.5 w-4.5 text-[#00c853] mr-2" />
                1. INTRODUÇÃO
              </h3>
              <p>
                Esta Política de Privacidade descreve como o site Renda Online Academy ("nós", "nosso" ou "site") coleta, usa, armazena e protege as informações dos usuários que visitam ou utilizam nossos serviços. Ao acessar este site, você concorda com os termos descritos nesta política.
              </p>

              <h3 className="text-base font-bold text-[#1a237e] uppercase tracking-wider flex items-center pt-4 font-sans">
                <ShieldCheck className="h-4.5 w-4.5 text-[#00c853] mr-2" />
                2. INFORMAÇÕES QUE COLETAMOS
              </h3>
              <p className="font-bold text-slate-800 text-xs pl-2 border-l-2 border-[#00c853]">
                2.1. Informações fornecidas voluntariamente:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs">
                <li>Nome e e-mail (ao se cadastrar em nossa newsletter ou formulário de contato)</li>
                <li>Dados de pagamento (processados por plataformas terceiras seguras, como Hotmart, quando aplicável)</li>
              </ul>

              <p className="font-bold text-slate-800 text-xs pl-2 border-l-2 border-[#00c853]">
                2.2. Informações coletadas automaticamente:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs">
                <li>Endereço IP</li>
                <li>Tipo de navegador e dispositivo</li>
                <li>Páginas visitadas e tempo de permanência</li>
                <li>Cookies e tecnologias similares</li>
              </ul>

              <h3 className="text-base font-bold text-[#1a237e] uppercase tracking-wider flex items-center pt-4 font-sans">
                <ShieldCheck className="h-4.5 w-4.5 text-[#00c853] mr-2" />
                3. USO DE COOKIES
              </h3>
              <p>
                Este site utiliza cookies para melhorar a experiência do usuário, analisar o tráfego do site e personalizar conteúdo e anúncios. Cookies são pequenos arquivos armazenados no seu dispositivo que nos ajudam a entender como você interage com nosso conteúdo.
              </p>
              <p>
                Você pode desativar os cookies nas configurações do seu navegador, mas isso pode afetar algumas funcionalidades do site.
              </p>

              <p className="font-bold text-slate-800 text-xs pl-2 border-l-2 border-[#00c853]">
                3.1. Publicidade de Terceiros
              </p>
              <p>
                Utilizamos redes de publicidade para exibir anúncios em nosso site. Os provedores de anúncios e seus parceiros podem usar cookies para veicular anúncios com base nas visitas anteriores do usuário a este e a outros sites.
              </p>
              <p>
                Você pode desativar o uso de cookies personalizados acessando as Configurações de Anúncios do Google em:{" "}
                <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">
                  https://adssettings.google.com
                </a>
              </p>

              <h3 className="text-base font-bold text-[#1a237e] uppercase tracking-wider flex items-center pt-4 font-sans">
                <ShieldCheck className="h-4.5 w-4.5 text-[#00c853] mr-2" />
                4. COMO USAMOS SUAS INFORMAÇÕES
              </h3>
              <p>Utilizamos as informações coletadas para:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs">
                <li>Fornecer e melhorar nossos conteúdos e serviços</li>
                <li>Enviar comunicações sobre novidades, cursos e conteúdos (caso você tenha se inscrito)</li>
                <li>Personalizar a experiência do usuário no site</li>
                <li>Exibir anúncios relevantes através de nossas redes parceiras</li>
                <li>Analisar o desempenho e uso do site</li>
              </ul>

              <h3 className="text-base font-bold text-[#1a237e] uppercase tracking-wider flex items-center pt-4 font-sans">
                <ShieldCheck className="h-4.5 w-4.5 text-[#00c853] mr-2" />
                5. COMPARTILHAMENTO DE DADOS
              </h3>
              <p>
                Não vendemos, alugamos ou comercializamos suas informações pessoais com terceiros. Podemos compartilhar dados com:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs">
                <li>Plataformas de pagamento (Hotmart, e similares) para processar transações</li>
                <li>Ferramentas de análise (como Google Analytics) para entender o uso do site</li>
                <li>Provedores de anúncios conforme descrito acima</li>
              </ul>

              <h3 className="text-base font-bold text-[#1a237e] uppercase tracking-wider flex items-center pt-4 font-sans">
                <ShieldCheck className="h-4.5 w-4.5 text-[#00c853] mr-2" />
                6. SEGURANÇA DOS DADOS
              </h3>
              <p>
                Adotamos medidas técnicas e administrativas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>

              <h3 className="text-base font-bold text-[#1a237e] uppercase tracking-wider flex items-center pt-4 font-sans">
                <ShieldCheck className="h-4.5 w-4.5 text-[#00c853] mr-2" />
                7. SEUS DIREITOS
              </h3>
              <p>De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs">
                <li>Acessar os dados que temos sobre você</li>
                <li>Corrigir dados incompletos ou desatualizados</li>
                <li>Solicitar a exclusão dos seus dados</li>
                <li>Revogar o consentimento a qualquer momento</li>
              </ul>
              <p>
                Para exercer esses direitos, entre em contato através do e-mail: <strong className="text-[#1a237e] select-all bg-slate-150 px-1 py-0.5 rounded">{email}</strong>
              </p>

              <h3 className="text-base font-bold text-[#1a237e] uppercase tracking-wider flex items-center pt-4 font-sans">
                <ShieldCheck className="h-4.5 w-4.5 text-[#00c853] mr-2" />
                8. LINKS DE AFILIADOS
              </h3>
              <p>
                Este site pode conter links de afiliados. Isso significa que podemos receber uma comissão caso você realize uma compra através desses links, sem custo adicional para você.
              </p>

              <h3 className="text-base font-bold text-[#1a237e] uppercase tracking-wider flex items-center pt-4 font-sans">
                <ShieldCheck className="h-4.5 w-4.5 text-[#00c853] mr-2" />
                9. ALTERAÇÕES NESTA POLÍTICA
              </h3>
              <p>
                Esta Política de Privacidade pode ser updated periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre quaisquer mudanças.
              </p>

              <h3 className="text-base font-bold text-[#1a237e] uppercase tracking-wider flex items-center pt-4 font-sans">
                <ShieldCheck className="h-4.5 w-4.5 text-[#00c853] mr-2" />
                10. CONTATO
              </h3>
              <p>
                Em caso de dúvidas sobre esta Política de Privacidade, entre em contato:
                <br />
                E-mail: <strong className="text-[#1a237e] select-all bg-slate-150 px-1 py-0.5 rounded">{email}</strong>
              </p>
            </div>

          </div>
        ) : (
          
          /* TERMS OF USE */
          <div className="space-y-8" id="terms-of-use-document">
            
            {/* CARD TITLE METAS */}
            <div className="flex items-center space-x-3.5 border-b border-slate-200 pb-6">
              <div className="bg-[#1a237e]/10 p-3 rounded-xl border border-[#1a237e]/20 text-[#1a237e]">
                <Scale className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#00c853] uppercase font-sans">Documento Regulamentar</span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1a237e]">Termos de Uso</h1>
                <span className="text-xs text-slate-450 block font-sans">Última atualização: 30 de Junho de 2026</span>
              </div>
            </div>

            {/* DOCUMENT PROSE BODY */}
            <div className="text-xs sm:text-sm text-slate-650 leading-relaxed font-sans space-y-6">
              <p className="font-bold text-[#1a237e] text-sm uppercase tracking-wider text-center bg-slate-50 py-3 rounded-lg border border-slate-150">
                TERMOS DE USO — RENDA ONLINE ACADEMY
              </p>

              <h3 className="text-base font-bold text-[#1a237e] uppercase tracking-wider flex items-center pt-4 font-sans">
                <AlertCircle className="h-4.5 w-4.5 text-[#00c853] mr-2" />
                1. ACEITAÇÃO DOS TERMOS
              </h3>
              <p>
                Ao acessar e usar o site Renda Online Academy, você concorda com estes Termos de Uso. Caso não concorde com algum dos termos aqui descritos, recomendamos que não utilize este site.
              </p>

              <h3 className="text-base font-bold text-[#1a237e] uppercase tracking-wider flex items-center pt-4 font-sans">
                <AlertCircle className="h-4.5 w-4.5 text-[#00c853] mr-2" />
                2. SOBRE O SITE
              </h3>
              <p>
                O Renda Online Academy é uma plataforma educacional que oferece conteúdo gratuito e pago sobre formas de gerar renda através da internet, incluindo freelancer, marketing de afiliados, criação de conteúdo e produtos digitais.
              </p>

              <h3 className="text-base font-bold text-[#1a237e] uppercase tracking-wider flex items-center pt-4 font-sans">
                <AlertCircle className="h-4.5 w-4.5 text-[#00c853] mr-2" />
                3. USO PERMITIDO
              </h3>
              <p>
                Você concorda em utilizar este site apenas para fins legais e de acordo com estes Termos. É proibido:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs">
                <li>Usar o site de forma que possa danificar, desabilitar ou sobrecarregar nossos servidores</li>
                <li>Reproduzir, copiar ou redistribuir o conteúdo sem autorização prévia</li>
                <li>Utilizar o site para fins ilegais ou não autorizados</li>
              </ul>

              <h3 className="text-base font-bold text-[#1a237e] uppercase tracking-wider flex items-center pt-4 font-sans">
                <AlertCircle className="h-4.5 w-4.5 text-[#00c853] mr-2" />
                4. PROPRIEDADE INTELECTUAL
              </h3>
              <p>
                Todo o conteúdo deste site — incluindo textos, vídeos, imagens, logotipos e materiais educacionais — é de propriedade do Renda Online Academy ou de seus licenciadores, sendo protegido pelas leis de direitos autorais. A reprodução não autorizada é proibida.
              </p>

              <h3 className="text-base font-bold text-[#1a237e] uppercase tracking-wider flex items-center pt-4 font-sans">
                <AlertCircle className="h-4.5 w-4.5 text-[#00c853] mr-2" />
                5. RESULTADOS E ISENÇÃO DE RESPONSABILIDADE
              </h3>
              <p>
                O conteúdo deste site tem caráter educacional e informativo. Os resultados financeiros mencionados são baseados em experiências individuais e não representam garantia de resultados similares para todos os usuários.
              </p>
              <p className="bg-rose-50 p-4 rounded-xl border border-rose-100/80 text-xs text-rose-700 font-sans">
                Ganhar dinheiro online depende de diversos fatores, incluindo dedicação, esforço individual, mercado e fatores externos que estão fora do nosso controle. Não garantimos resultados financeiros específicos.
              </p>

              <h3 className="text-base font-bold text-[#1a237e] uppercase tracking-wider flex items-center pt-4 font-sans">
                <AlertCircle className="h-4.5 w-4.5 text-[#00c853] mr-2" />
                6. LINKS DE AFILIADOS E PARCERIAS
              </h3>
              <p>
                Este site pode conter links de afiliados de produtos e serviços de terceiros. Ao clicar nesses links e realizar uma compra, podemos receber uma comissão, sem custo adicional para você. Recomendamos apenas produtos e serviços que consideramos relevantes e de qualidade.
              </p>

              <h3 className="text-base font-bold text-[#1a237e] uppercase tracking-wider flex items-center pt-4 font-sans">
                <AlertCircle className="h-4.5 w-4.5 text-[#00c853] mr-2" />
                7. PUBLICIDADE
              </h3>
              <p>
                Este site exibe anúncios através de redes parceiras de publicidade. Não temos controle total sobre o conteúdo específico de cada anúncio exibido e não nos responsabilizamos pelos produtos ou serviços anunciados por terceiros.
              </p>

              <h3 className="text-base font-bold text-[#1a237e] uppercase tracking-wider flex items-center pt-4 font-sans">
                <AlertCircle className="h-4.5 w-4.5 text-[#00c853] mr-2" />
                8. PRODUTOS E SERVIÇOS PAGOS
              </h3>
              <p>
                Caso o usuário adquira algum produto digital (curso, e-book ou mentoria) oferecido neste site, as condições de pagamento, acesso e garantia serão detalhadas na página de vendas específica de cada produto no momento da compra.
              </p>

              <h3 className="text-base font-bold text-[#1a237e] uppercase tracking-wider flex items-center pt-4 font-sans">
                <AlertCircle className="h-4.5 w-4.5 text-[#00c853] mr-2" />
                9. LIMITAÇÃO DE RESPONSABILIDADE
              </h3>
              <p>
                O Renda Online Academy não se responsabiliza por:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>Danos diretos ou indiretos decorrentes do uso do site</li>
                <li>Interrupções temporárias de acesso por motivos técnicos</li>
                <li>Conteúdo de sites externos linkados a partir deste site</li>
              </ul>

              <h3 className="text-base font-bold text-[#1a237e] uppercase tracking-wider flex items-center pt-4 font-sans">
                <AlertCircle className="h-4.5 w-4.5 text-[#00c853] mr-2" />
                10. MODIFICAÇÕES DO SITE E DOS TERMOS
              </h3>
              <p>
                Reservamo-nos o direito de modificar, suspender ou descontinuar qualquer parte do site a qualquer momento, bem como atualizar estes Termos de Uso sem aviso prévio. Recomendamos revisão periódica desta página.
              </p>

              <h3 className="text-base font-bold text-[#1a237e] uppercase tracking-wider flex items-center pt-4 font-sans">
                <AlertCircle className="h-4.5 w-4.5 text-[#00c853] mr-2" />
                11. LEGISLAÇÃO APLICÁVEL
              </h3>
              <p>
                Estes Termos de Uso são regidos pelas leis brasileiras. Qualquer disputa relacionada ao uso deste site será resolvida nos tribunais competentes do Brasil.
              </p>

              <h3 className="text-base font-bold text-[#1a237e] uppercase tracking-wider flex items-center pt-4 font-sans">
                <AlertCircle className="h-4.5 w-4.5 text-[#00c853] mr-2" />
                12. CONTATO
              </h3>
              <p>
                Para dúvidas sobre estes Termos de Uso, entre em contato:
                <br />
                E-mail: <strong className="text-[#1a237e] select-all bg-slate-150 px-1 py-0.5 rounded">{email}</strong>
              </p>
            </div>

          </div>
        )}

        {/* BACK BUTTON TO LIST */}
        <div className="pt-12 text-center border-t border-slate-200 mt-12 pb-8">
          <p className="text-xs text-slate-500 mb-4">Dúvidas sobre esses termos contratuais regulamentares?</p>
          <a href={`mailto:${email}`} className="text-xs text-[#00c853] hover:underline hover:text-[#00a844] font-bold font-sans">
            {email}
          </a>
        </div>

      </div>
    </div>
  );
}
