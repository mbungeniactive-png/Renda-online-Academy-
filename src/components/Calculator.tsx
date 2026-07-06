/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  Percent, 
  DollarSign, 
  Users, 
  Clock, 
  ArrowRight, 
  Calculator as CalcIcon, 
  TrendingUp, 
  Sparkles,
  HelpCircle,
  PiggyBank,
  Star
} from "lucide-react";

type CalcMode = "afiliado" | "freelancer" | "youtube" | "infoproduto";

export default function Calculator() {
  const [mode, setMode] = useState<CalcMode>("afiliado");
  const dolarRate = 5.25; // exchange rate of 1 USD = 5.25 BRL

  // 1. Affiliate Marketing States
  const [affTraffic, setAffTraffic] = useState(10000);
  const [affConversion, setAffConversion] = useState(1.5); // %
  const [affCommission, setAffCommission] = useState(80); // R$

  // 2. Freelancing States
  const [freeHours, setFreeHours] = useState(25); // weekly
  const [freeHourlyRate, setFreeHourlyRate] = useState(18); // USD

  // 3. YouTube Monetization States
  const [ytViews, setYtViews] = useState(150000);
  const [ytRpm, setYtRpm] = useState(4.5); // USD per 1000 views

  // 4. Infoproduct Creator States
  const [infoSales, setInfoSales] = useState(80);
  const [infoPrice, setInfoPrice] = useState(197); // R$
  const [infoCosts, setInfoCosts] = useState(15); // % operating cost

  // Calculated Outputs
  let estimatedMonthlyResult = 0;
  let calculationDetails = "";

  switch (mode) {
    case "afiliado":
      estimatedMonthlyResult = affTraffic * (affConversion / 100) * affCommission;
      calculationDetails = `Tráfego de ${affTraffic.toLocaleString()} visitantes × ${affConversion}% de taxa de conversão direta = ${Math.round(affTraffic * (affConversion / 100))} vendas estimadas por mês. Faturamento de R$ ${affCommission} por comissão unitária.`;
      break;
    case "freelancer":
      estimatedMonthlyResult = freeHours * 4.3 * freeHourlyRate * dolarRate;
      calculationDetails = `${freeHours} horas trabalhadas por semana × 4.3 semanas no mês = ${Math.round(freeHours * 4.3)} horas faturadas. Taxa de US$ ${freeHourlyRate}/hora convertidas sob cotação constante de R$ ${dolarRate.toFixed(2)}.`;
      break;
    case "youtube":
      estimatedMonthlyResult = (ytViews / 1000) * ytRpm * dolarRate;
      calculationDetails = `${ytViews.toLocaleString()} visualizações válidas mensais divididas por 1.000 × RPM estabelecido de US$ ${ytRpm.toFixed(2)} convertidos em reais pela cotação constante de R$ ${dolarRate.toFixed(2)}.`;
      break;
    case "infoproduto":
      const rawRevenue = infoSales * infoPrice;
      estimatedMonthlyResult = rawRevenue * (1 - infoCosts / 100);
      calculationDetails = `${infoSales} unidades transacionadas × valor final de R$ ${infoPrice} = faturamento bruto de R$ ${rawRevenue.toLocaleString("pt-BR")}. Descontando um custo operacional e de plataforma estimada de ${infoCosts}%.`;
      break;
  }

  // 6-Month Projected list simulating compound expansion
  const monthsProjected = [1, 2, 3, 4, 5, 6];
  const compoundFactors = [1.0, 1.25, 1.6, 2.1, 2.8, 3.8]; // growth modifier

  return (
    <div className="bg-[#f8fafc] text-slate-800 min-h-screen py-16" id="calculator-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 bg-[#00c853]/10 border border-[#00c853]/20 px-3 py-1 rounded-full text-[#00c853] text-xs font-mono font-semibold uppercase">
            <CalcIcon className="h-3.5 w-3.5" />
            <span>Simulador de Mercado Digital</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1a237e] leading-tight uppercase">
            Descubra o Seu Potencial de Faturamento
          </h1>
          <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed font-sans">
            Selecione uma das principais profissões digitais e ajuste as variáveis recomendadas de tráfego, horas, conversões ou preços para visualizar projeções realistas de resultados financeiros.
          </p>
        </div>

        {/* CONTAINER GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* CALCULATOR CONTROLS (COLSPAN 2) */}
          <div className="lg:col-span-2 bg-white border border-slate-200 p-6 sm:p-8 rounded-xl space-y-8 shadow-sm">
            
            {/* CALCULATOR MODE SWITCHER BUTTONS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
              {(["afiliado", "freelancer", "youtube", "infoproduto"] as CalcMode[]).map((m) => {
                const label = m.charAt(0).toUpperCase() + m.slice(1);
                const isActive = mode === m;
                return (
                  <button
                    key={m}
                    onClick={() => setMode(m)}
                    className={`px-4 py-3 rounded-lg text-xs font-bold transition-all text-center cursor-pointer ${
                      isActive 
                        ? "bg-[#00c853]/10 text-[#00c853] border border-[#00c853]/25" 
                        : "bg-slate-50 border border-slate-200 text-slate-500 hover:text-[#1a237e]"
                    }`}
                  >
                    {label === "Afiliado" ? "👥 Afiliado" : 
                     label === "Freelancer" ? "💻 Freelancer (USD)" : 
                     label === "Youtube" ? "🎥 YouTube RPM" : 
                     "📦 Infoproduto"}
                  </button>
                );
              })}
            </div>

            {/* DYNAMIC CALCULATOR INPUT FORMS */}
            <div className="space-y-6 pt-4 border-t border-slate-100">
              
              {/* MODE 1: AFFILIATE MARKETING */}
              {mode === "afiliado" && (
                <div className="space-y-6" id="calc-afiliados-form">
                  {/* Traffic slider */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <label className="text-slate-750 font-medium flex items-center gap-1.5 font-sans">
                        <Users className="h-4 w-4 text-[#00c853]" />
                        Tráfego Mensal (Visitantes únicos)
                      </label>
                      <span className="font-mono font-bold text-[#00c853]">{affTraffic.toLocaleString()} pessoas</span>
                    </div>
                    <input
                      type="range"
                      min="1000"
                      max="100000"
                      step="1000"
                      value={affTraffic}
                      onChange={(e) => setAffTraffic(Number(e.target.value))}
                      className="w-full h-2 rounded-lg bg-slate-100 accent-[#00c853] appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                      <span>1.000</span>
                      <span>50.000</span>
                      <span>100.000</span>
                    </div>
                  </div>

                  {/* Conversion rate slider */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <label className="text-slate-750 font-medium flex items-center gap-1.5 font-sans">
                        <Percent className="h-4 w-4 text-[#00c853]" />
                        Taxa de Conversão em Vendas (CTR)
                      </label>
                      <span className="font-mono font-bold text-[#00c853]">{affConversion}%</span>
                    </div>
                    <input
                      type="range"
                      min="0.1"
                      max="5.0"
                      step="0.1"
                      value={affConversion}
                      onChange={(e) => setAffConversion(Number(e.target.value))}
                      className="w-full h-2 rounded-lg bg-slate-100 accent-[#00c853] appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                      <span>0.1% (Iniciante)</span>
                      <span>2.5% (Intermediário)</span>
                      <span>5.0% (Avançado)</span>
                    </div>
                  </div>

                  {/* Commission slider */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <label className="text-slate-750 font-medium flex items-center gap-1.5 font-sans">
                        <DollarSign className="h-4 w-4 text-[#00c853]" />
                        Valor da Comissão por Venda
                      </label>
                      <span className="font-mono font-bold text-[#00c853]">R$ {affCommission}</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="300"
                      step="5"
                      value={affCommission}
                      onChange={(e) => setAffCommission(Number(e.target.value))}
                      className="w-full h-2 rounded-lg bg-slate-100 accent-[#00c853] appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                      <span>R$ 20</span>
                      <span>R$ 150</span>
                      <span>R$ 300</span>
                    </div>
                  </div>
                </div>
              )}

              {/* MODE 2: FREELANCER (DÓLAR) */}
              {mode === "freelancer" && (
                <div className="space-y-6" id="calc-freelancer-form">
                  {/* Hours worked slider */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <label className="text-slate-750 font-medium flex items-center gap-1.5 font-sans">
                        <Clock className="h-4 w-4 text-[#00c853]" />
                        Horas Cobradas Trabalhadas por Semana
                      </label>
                      <span className="font-mono font-bold text-[#00c853]">{freeHours} horas semanais</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="60"
                      step="1"
                      value={freeHours}
                      onChange={(e) => setFreeHours(Number(e.target.value))}
                      className="w-full h-2 rounded-lg bg-slate-100 accent-[#00c853] appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 font-mono font-sans font-sans font-sans">
                      <span>5 hs (Part-time)</span>
                      <span>30 hs (Full-time)</span>
                      <span>60 hs (Intenso)</span>
                    </div>
                  </div>

                  {/* Hourly Rate slider in USD */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <label className="text-slate-750 font-medium flex items-center gap-1.5 font-sans">
                        <DollarSign className="h-4 w-4 text-[#00c853]" />
                        Preço por Hora Cobrada de Serviço (em USD)
                      </label>
                      <span className="font-mono font-bold text-[#00c853]">US$ {freeHourlyRate}/h (~R$ {(freeHourlyRate * dolarRate).toFixed(0)}/h)</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="100"
                      step="1"
                      value={freeHourlyRate}
                      onChange={(e) => setFreeHourlyRate(Number(e.target.value))}
                      className="w-full h-2 rounded-lg bg-slate-100 accent-[#00c853] appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 font-mono font-sans font-sans">
                      <span>US$ 5 (Básico)</span>
                      <span>US$ 50 (Sênior)</span>
                      <span>US$ 100 (Expert)</span>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-center justify-between text-xs text-slate-500 font-sans">
                    <span>Taxa de Câmbio Fixada de Mercado</span>
                    <span className="font-mono font-bold text-[#1a237e]">1 USD = R$ {dolarRate.toFixed(2)}</span>
                  </div>
                </div>
              )}

              {/* MODE 3: YOUTUBE MONETIZATION */}
              {mode === "youtube" && (
                <div className="space-y-6" id="calc-youtube-form">
                  {/* Views slider */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <label className="text-slate-750 font-medium flex items-center gap-1.5 font-sans">
                        <Users className="h-4 w-4 text-[#00c853]" />
                        Visualizações de Vídeo Válidas por Mês
                      </label>
                      <span className="font-mono font-bold text-[#00c853]">{ytViews.toLocaleString()} views</span>
                    </div>
                    <input
                      type="range"
                      min="10000"
                      max="1000000"
                      step="10000"
                      value={ytViews}
                      onChange={(e) => setYtViews(Number(e.target.value))}
                      className="w-full h-2 rounded-lg bg-slate-100 accent-[#00c853] appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 font-mono font-sans">
                      <span>10.000</span>
                      <span>500.000</span>
                      <span>1.000.000</span>
                    </div>
                  </div>

                  {/* RPM slider in USD */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <label className="text-slate-750 font-medium flex items-center gap-1.5 font-sans">
                        <Percent className="h-4 w-4 text-[#00c853]" />
                        Faixa de RPM Monetizado (em USD por cada 1.000 views)
                      </label>
                      <span className="font-mono font-bold text-[#00c853]">US$ {ytRpm.toFixed(2)} (~R$ {(ytRpm * dolarRate).toFixed(2)})</span>
                    </div>
                    <input
                      type="range"
                      min="1.0"
                      max="20.0"
                      step="0.5"
                      value={ytRpm}
                      onChange={(e) => setYtRpm(Number(e.target.value))}
                      className="w-full h-2 rounded-lg bg-slate-100 accent-[#00c853] appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 font-mono font-sans">
                      <span>US$ 1.0 (Humor/Teens)</span>
                      <span>US$ 10.0 (Negócios)</span>
                      <span>US$ 20.0 (Investimentos Premium)</span>
                    </div>
                  </div>
                </div>
              )}

              {/* MODE 4: INFOPRODUCT */}
              {mode === "infoproduto" && (
                <div className="space-y-6" id="calc-infoprodutos-form">
                  {/* Sales unit counts slider */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <label className="text-slate-750 font-medium flex items-center gap-1.5 font-sans">
                        <Users className="h-4 w-4 text-[#00c853]" />
                        Unidades Vendidas por Mês
                      </label>
                      <span className="font-mono font-bold text-[#00c853]">{infoSales} vendas</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="1000"
                      step="5"
                      value={infoSales}
                      onChange={(e) => setInfoSales(Number(e.target.value))}
                      className="w-full h-2 rounded-lg bg-slate-100 accent-[#00c853] appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 font-mono font-sans">
                      <span>5 vendas</span>
                      <span>500 vendas</span>
                      <span>1.000 vendas</span>
                    </div>
                  </div>

                  {/* Price slider */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <label className="text-slate-750 font-medium flex items-center gap-1.5 font-sans">
                        <DollarSign className="h-4 w-4 text-[#00c853]" />
                        Valor do Produto Unitário
                      </label>
                      <span className="font-mono font-bold text-[#00c853]">R$ {infoPrice}</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="997"
                      step="10"
                      value={infoPrice}
                      onChange={(e) => setInfoPrice(Number(e.target.value))}
                      className="w-full h-2 rounded-lg bg-slate-100 accent-[#00c853] appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 font-mono font-sans">
                      <span>R$ 10 (E-book)</span>
                      <span>R$ 497 (Curso)</span>
                      <span>R$ 997 (Mentoria)</span>
                    </div>
                  </div>

                  {/* costs operating slider */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <label className="text-slate-750 font-medium flex items-center gap-1.5 font-sans">
                        <Percent className="h-4 w-4 text-[#00c853]" />
                        Custos Estimados de Plataforma & Anúncio
                      </label>
                      <span className="font-mono font-bold text-[#00c853]">{infoCosts}% do preço</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="50"
                      step="1"
                      value={infoCosts}
                      onChange={(e) => setInfoCosts(Number(e.target.value))}
                      className="w-full h-2 rounded-lg bg-slate-100 accent-[#00c853] appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 font-mono font-sans">
                      <span>5% (Apenas Hotmart taxas)</span>
                      <span>25% (Tráfego leve)</span>
                      <span>50% (Escala agressiva paga)</span>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* MATH FORMULA VERBOSE EXPLANATION */}
            <div className="bg-slate-50 border border-slate-200 p-4.5 rounded-lg space-y-2.5">
              <span className="text-[10px] font-mono font-bold text-[#00c853] tracking-wider uppercase block">
                Detalhes Matemáticos do Cálculo
              </span>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                {calculationDetails}
              </p>
            </div>

          </div>

          {/* RESULTS DISPLAY BAR & PROJECTED CHART (COLPAN 1) */}
          <div className="space-y-8">
            
            {/* RETURNING MONTHLY NET */}
            <div className="bg-[#1a237e] border border-slate-200 p-8 rounded-xl text-center space-y-4 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 bg-white/10 text-[9px] font-bold text-white uppercase tracking-widest font-mono rounded-bl-xl border-b border-l border-white/15">
                Líquido Estimado
              </div>
              <span className="text-xs tracking-wider font-semibold text-indigo-200 uppercase block font-sans">
                Renda Mensal Potencial
              </span>
              <div className="text-3.5xl font-extrabold text-[#00c853]">
                R$ {estimatedMonthlyResult.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
              <p className="text-[11px] text-indigo-150 leading-relaxed max-w-xs mx-auto font-sans">
                Este valor representa uma simulação matemática conservadora com base nas escolhas selecionadas. Resultados reais mudam conforme sua execução.
              </p>
            </div>

            {/* Projected bar charts using basic HTML styling */}
            <div className="bg-white border border-slate-200 p-6 rounded-xl space-y-4 shadow-sm">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4.5 w-4.5 text-[#00c853]" />
                <h3 className="text-xs font-bold text-[#1a237e] uppercase tracking-wider">Projeção de Escala (6 Meses)</h3>
              </div>
              
              <div className="space-y-3.5 pt-2">
                {monthsProjected.map((monthNum, index) => {
                  const factor = compoundFactors[index];
                  const valueProjected = estimatedMonthlyResult * factor;
                  const maxPossible = estimatedMonthlyResult * compoundFactors[compoundFactors.length - 1];
                  const barWidth = maxPossible > 0 ? (valueProjected / maxPossible) * 100 : 0;

                  return (
                    <div key={monthNum} className="space-y-1">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-500 font-medium font-sans font-sans">Mês {monthNum} ({((factor - 1) * 100).toFixed(0)}% crescimento)</span>
                        <span className="font-mono font-bold text-[#00c853]">R$ {valueProjected.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}</span>
                      </div>
                      
                      <div className="bg-slate-50 h-2.5 rounded-full overflow-hidden border border-slate-200">
                        <div 
                          className="bg-gradient-to-r from-[#1a237e] to-[#00c853] h-full rounded-full transition-all duration-300"
                          style={{ width: `${barWidth}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 text-[10px] text-slate-400 leading-normal font-sans">
                📈 <em>A projeção assume uma evolução constante mensal devido ao acúmulo de audiência e maturidade técnica.</em>
              </div>
            </div>

            {/* MOCK PROMO AD BOX SIDEBAR - 300x250 */}
            <div className="bg-white border border-slate-200 p-4 rounded-xl flex flex-col items-center text-center shadow-sm">
              <span className="text-[9px] font-mono tracking-wider text-slate-400 uppercase font-bold mb-2 font-sans">
                Espaço Patrocinado — Recomendado (300x250)
              </span>
              <div className="w-full h-[220px] bg-slate-50 border border-slate-200 rounded-lg flex flex-col items-center justify-center p-3">
                <Star className="h-5 w-5 text-[#00c853] fill-[#00c853] mb-2" />
                <span className="text-[11px] text-[#1a237e] font-bold mb-1 font-sans">Renda Online Academy®</span>
                <span className="text-[10px] text-slate-500 max-w-[200px] leading-relaxed font-sans">
                  Ganhar em dólar como freelancer qualificado é a forma mais rápida de atingir a meta do primeiro mês. Comece grátis!
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
