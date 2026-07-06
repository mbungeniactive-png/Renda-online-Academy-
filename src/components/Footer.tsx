/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { TrendingUp, Mail, ShieldAlert, Heart } from "lucide-react";

interface FooterProps {
  setRoute: (route: string) => void;
}

export default function Footer({ setRoute }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-slate-400 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Logo Column */}
          <div className="md:col-span-1 space-y-4">
            <div 
              className="flex items-center space-x-3 cursor-pointer select-none"
              onClick={() => setRoute("home")}
            >
              <div className="bg-[#00c853] p-2 rounded-lg text-white">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="font-extrabold text-base tracking-tight text-white uppercase block leading-none">
                  RENDA ONLINE
                </span>
                <span className="block text-[8px] font-mono tracking-widest text-[#00c853] uppercase font-bold mt-1">
                  ACADEMY
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Capacitando brasileiros com educação digital de alto nível. Uma jornada do zero absoluto ao faturamento recorrente na internet por vias éticas, legais e testadas no mercado.
            </p>
          </div>

          {"/* Quick Links Column */"}
          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-4 font-sans">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => setRoute("home")} 
                  className="hover:text-brand-green transition-colors duration-150 cursor-pointer"
                >
                  Início (Home)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setRoute("trilha")} 
                  className="hover:text-brand-green transition-colors duration-150 cursor-pointer"
                >
                  Trilhas de Aprendizado
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setRoute("blog")} 
                  className="hover:text-brand-green transition-colors duration-150 cursor-pointer"
                >
                  Artigos & Blog Original
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setRoute("calculadora")} 
                  className="hover:text-brand-green transition-colors duration-150 cursor-pointer"
                >
                  Calculadora de Comissão
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setRoute("configuracoes")} 
                  className="hover:text-brand-green transition-colors duration-150 cursor-pointer text-emerald-400 font-bold"
                >
                  Configurações ⚙️
                </button>
              </li>
            </ul>
          </div>

          {/* Institucional / Suporte */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-4 font-sans">
              Suporte & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => setRoute("sobre")} 
                  className="hover:text-brand-green transition-colors duration-150 cursor-pointer"
                >
                  Quem Somos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setRoute("contato")} 
                  className="hover:text-brand-green transition-colors duration-150 cursor-pointer"
                >
                  Fale Conosco
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setRoute("privacidade")} 
                  className="hover:text-brand-green transition-colors duration-150 cursor-pointer text-slate-300 font-medium"
                >
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setRoute("termos")} 
                  className="hover:text-brand-green transition-colors duration-150 cursor-pointer text-slate-300 font-medium"
                >
                  Termos de Uso
                </button>
              </li>
            </ul>
          </div>

          {/* Contact bio Column */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-bold tracking-widest uppercase font-sans">
              Contato Acadêmico
            </h4>
            <div className="flex items-center space-x-2 text-xs text-slate-300">
              <Mail className="h-4 w-4 text-[#00c853] shrink-0" />
              <a href="mailto:academyrendaonline@gmail.com" className="hover:underline hover:text-white">
                academyrendaonline@gmail.com
              </a>
            </div>
            <div className="bg-[#1e293b] border border-slate-700 rounded-lg p-3 text-[11px] leading-relaxed">
              <div className="flex items-start space-x-2 text-slate-300">
                <ShieldAlert className="h-4 w-4 text-[#00c853] shrink-0 mt-0.5" />
                <span>
                  <strong>Qualidade & Compliance:</strong> Nosso site segue as melhores diretrizes de conformidade editorial, promovendo conteúdo autêntico e dados protegidos.
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Affiliate Link Warning Banner */}
        <div className="border-t border-slate-800 py-6 mb-6 text-center text-[11px] leading-relaxed text-slate-500 max-w-4xl mx-auto">
          <strong>Disclaimer Importante:</strong> Este site contém links de afiliados. Nós recomendamos produtos e serviços testados que podem gerar compensações ou comissões financeiras para nossa equipe técnica ao serem adquiridos pelo usuário final, sem nenhum custo extra adicionado. Todas as aulas na trilha de aprendizado são distribuídas de forma 100% gratuita para impulsionar a educação nacional.
        </div>

        {/* Bottom copyright and compliance block */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-600">
          <div>
            &copy; {currentYear} Renda Online Academy. Todos os direitos reservados.
          </div>
          <div className="flex items-center space-x-1 mt-4 sm:mt-0">
            <span>Desenvolvido com</span>
            <Heart className="h-3.5 w-3.5 text-brand-green fill-[#00c853]" />
            <span>para impulsionar a sua Liberdade Financeira</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
