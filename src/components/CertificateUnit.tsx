import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Award, 
  Lock, 
  CheckCircle2, 
  Sparkles, 
  Download, 
  Printer, 
  FileText, 
  ChevronRight, 
  RefreshCw,
  Trophy,
  ArrowRight
} from "lucide-react";
import { jsPDF } from "jspdf";
import { ACADEMY_MODULES } from "../data";

interface CertificateUnitProps {
  completedLessons: string[];
  totalLessonsCount: number;
  onNavigateToTrilha?: () => void;
}

export default function CertificateUnit({ 
  completedLessons, 
  totalLessonsCount,
  onNavigateToTrilha 
}: CertificateUnitProps) {
  const [studentName, setStudentName] = useState("");
  const [theme, setTheme] = useState<"classic" | "emerald" | "gold">("gold");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationSuccess, setGenerationSuccess] = useState(false);

  const completedCount = completedLessons.length;
  const isUnlocked = completedCount >= totalLessonsCount && totalLessonsCount > 0;
  const progressPercentage = totalLessonsCount > 0 ? Math.round((completedCount / totalLessonsCount) * 100) : 0;

  const handleGeneratePDF = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim()) return;

    setIsGenerating(true);
    setGenerationSuccess(false);

    setTimeout(() => {
      try {
        const doc = new jsPDF({
          orientation: "landscape",
          unit: "mm",
          format: "a4"
        });

        const width = 297;
        const height = 210;

        // Background & Border styling
        if (theme === "gold") {
          // Warm elegant cream background
          doc.setFillColor(254, 252, 243);
          doc.rect(0, 0, width, height, "F");

          // Golden outer border
          doc.setDrawColor(212, 175, 55);
          doc.setLineWidth(1.5);
          doc.rect(8, 8, width - 16, height - 16);
          doc.rect(10, 10, width - 20, height - 20);
          
          // Corner decorative points
          doc.setFillColor(212, 175, 55);
          doc.rect(6, 6, 8, 8, "F");
          doc.rect(width - 14, 6, 8, 8, "F");
          doc.rect(6, height - 14, 8, 8, "F");
          doc.rect(width - 14, height - 14, 8, 8, "F");
        } else if (theme === "emerald") {
          // Soft pastel mint background
          doc.setFillColor(244, 249, 246);
          doc.rect(0, 0, width, height, "F");

          // Emerald border
          doc.setDrawColor(0, 200, 83);
          doc.setLineWidth(1.5);
          doc.rect(8, 8, width - 16, height - 16);
          doc.rect(10, 10, width - 20, height - 20);

          doc.setFillColor(0, 200, 83);
          doc.rect(6, 6, 8, 8, "F");
          doc.rect(width - 14, 6, 8, 8, "F");
          doc.rect(6, height - 14, 8, 8, "F");
          doc.rect(width - 14, height - 14, 8, 8, "F");
        } else {
          // Classic navy blue ice background
          doc.setFillColor(245, 247, 251);
          doc.rect(0, 0, width, height, "F");

          // Navy border
          doc.setDrawColor(26, 35, 126);
          doc.setLineWidth(1.5);
          doc.rect(8, 8, width - 16, height - 16);
          doc.rect(10, 10, width - 20, height - 20);

          doc.setFillColor(26, 35, 126);
          doc.rect(6, 6, 8, 8, "F");
          doc.rect(width - 14, 6, 8, 8, "F");
          doc.rect(6, height - 14, 8, 8, "F");
          doc.rect(width - 14, height - 14, 8, 8, "F");
        }

        // Color Palette selection
        let titleColor = [26, 35, 126]; // Navy
        let highlightColor = [197, 160, 40]; // Gold/Amber
        
        if (theme === "emerald") {
          titleColor = [20, 80, 45];
          highlightColor = [0, 200, 83];
        } else if (theme === "gold") {
          titleColor = [110, 85, 10];
          highlightColor = [180, 140, 25];
        }

        // Academy Header Title
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.setTextColor(titleColor[0], titleColor[1], titleColor[2]);
        doc.text("RENDA ONLINE ACADEMY", width / 2, 35, { align: "center" });

        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.setTextColor(110, 120, 135);
        doc.text("TRILHAS EXECUTIVAS DE FORMAÇÃO PROFISSIONAL E MONETIZAÇÃO ATIVA", width / 2, 42, { align: "center" });

        // Seal / Star separator
        doc.setFont("times", "normal");
        doc.setFontSize(14);
        doc.setTextColor(highlightColor[0], highlightColor[1], highlightColor[2]);
        doc.text("★  ★  ★  ★  ★", width / 2, 51, { align: "center" });

        // Certificate title
        doc.setFont("times", "italic");
        doc.setFontSize(18);
        doc.setTextColor(45, 55, 72);
        doc.text("Certificado de Conclusão de Ensino", width / 2, 63, { align: "center" });

        // Certificate prose
        doc.setFont("helvetica", "normal");
        doc.setFontSize(11.5);
        doc.setTextColor(74, 85, 104);
        doc.text("Certificamos para todos os efeitos e fins acadêmicos que o estudante", width / 2, 76, { align: "center" });

        // Student's full name
        doc.setFont("helvetica", "bold");
        doc.setFontSize(28);
        doc.setTextColor(titleColor[0], titleColor[1], titleColor[2]);
        doc.text(studentName.toUpperCase(), width / 2, 94, { align: "center" });

        // Decorative underline
        doc.setDrawColor(highlightColor[0], highlightColor[1], highlightColor[2]);
        doc.setLineWidth(0.6);
        doc.line(width / 2 - 70, 98, width / 2 + 70, 98);

        // Body text of certificate describing modules completed
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10.5);
        doc.setTextColor(74, 85, 104);
        const description = "concluiu com êxito todas as lições práticas, metodologias operacionais de mercado e testes avaliativos da plataforma educacional Renda Online Academy. O programa intensivo abrangeu os seguintes pilares estratégicos: Empreendedorismo e Mindset de Negócios, Atuação Profissional de Elite como Freelancer, Escala em Marketing de Afiliados, Criação de Canais Dark de Vídeos e Coprywriting Persuasivo Aplicado, totalizando carga horária certificada de 60 horas curriculares.";
        
        const splitText = doc.splitTextToSize(description, 215);
        doc.text(splitText, width / 2, 112, { align: "center" });

        // Academic Seal / Star
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.setTextColor(110, 120, 135);
        const today = new Date();
        const dateFormatted = today.toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "long",
          year: "numeric"
        });
        doc.text(`Certificação emitida digitalmente em ${dateFormatted}`, width / 2, 146, { align: "center" });

        // Unique Auth Code (Fully programmatic and highly realistic)
        const randHex = Array.from({ length: 6 }, () => 
          Math.floor(Math.random() * 16).toString(16).toUpperCase()
        ).join("");
        const authCode = `Código de Autenticidade Registrado: ROA-${randHex}-2026-BR`;
        doc.setFont("courier", "bold");
        doc.setFontSize(8.5);
        doc.setTextColor(120, 130, 140);
        doc.text(authCode, width / 2, 153, { align: "center" });

        // Signature section lines
        doc.setDrawColor(180, 190, 204);
        doc.setLineWidth(0.3);
        doc.line(35, 180, 110, 180);
        doc.line(width - 110, 180, width - 35, 180);

        // Academic director
        doc.setFont("times", "italic");
        doc.setFontSize(11);
        doc.setTextColor(26, 35, 126);
        doc.text("Marcio de Souza Carvalho", 72, 175, { align: "center" });
        doc.setFont("helvetica", "bold");
        doc.setFontSize(8);
        doc.setTextColor(74, 85, 104);
        doc.text("DIRETORIA DE ENSINO E REGISTRO ACADÊMICO", 72, 184, { align: "center" });

        // Student validation sign
        doc.setFont("times", "italic");
        doc.setFontSize(11);
        doc.setTextColor(highlightColor[0], highlightColor[1], highlightColor[2]);
        doc.text(studentName, width - 72, 175, { align: "center" });
        doc.setFont("helvetica", "bold");
        doc.setFontSize(8);
        doc.setTextColor(74, 85, 104);
        doc.text("ASSINATURA DE REGISTRO DO TITULAR", width - 72, 184, { align: "center" });

        // Golden geometric star or emblem icon on bottom center
        const sealX = width / 2;
        const sealY = 180;
        doc.setDrawColor(highlightColor[0], highlightColor[1], highlightColor[2]);
        doc.setLineWidth(0.5);
        doc.circle(sealX, sealY, 9, "D");
        doc.circle(sealX, sealY, 7.5, "D");
        doc.setFont("helvetica", "bold");
        doc.setFontSize(5);
        doc.text("ROA", sealX, sealY - 1, { align: "center" });
        doc.text("CERTIFIED", sealX, sealY + 2, { align: "center" });

        // Save file
        doc.save(`Certificado_RendaOnline_${studentName.trim().replace(/\s+/g, "_")}.pdf`);
        setGenerationSuccess(true);
      } catch (err) {
        console.error("PDF Generation error:", err);
      } finally {
        setIsGenerating(false);
      }
    }, 1200);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8 font-sans">
      
      {/* HEADER SECTION */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <span className="text-[10px] font-mono font-bold tracking-widest text-[#00c853] uppercase bg-[#00c853]/10 px-3 py-1.5 rounded-full border border-[#00c853]/20 inline-flex items-center gap-1">
          <Award className="h-3.5 w-3.5" /> CERTIFICAÇÃO PROFISSIONAL OFICIAL
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#1a237e] tracking-tight">
          Certificado de Conclusão de Curso
        </h1>
        <p className="text-slate-550 text-xs sm:text-sm max-w-2xl mx-auto font-sans">
          Obtenha seu diploma oficial assinado pela diretoria de ensino do Renda Online Academy para comprovar suas competências na internet e iniciar suas operações de faturamento digital.
        </p>
      </div>

      {/* RENDER LOCKED STATE */}
      {!isUnlocked ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* LEFT SIDE: LOCK INFORMATION CARD */}
          <div className="lg:col-span-7 bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center p-3.5 bg-amber-500/10 border border-amber-500/20 text-amber-600 rounded-2xl shadow-xs">
                <Lock className="h-6 w-6 stroke-[2.5] animate-pulse" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-[#1a237e] tracking-tight">
                Certificado Atualmente Bloqueado
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Para manter a alta qualidade pedagógica, o seu certificado de formação é liberado automaticamente após a conclusão de <strong>100% das lições</strong> das nossas trilhas de aprendizado.
              </p>

              {/* Progress visualizer bar */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <span className="text-slate-500">Seu Progresso Atual</span>
                  <span className="text-[#00c853] font-mono font-bold">{progressPercentage}% Completo</span>
                </div>
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden border border-slate-200/50">
                  <div 
                    className="h-full bg-gradient-to-r from-[#1a237e] to-[#00c853] rounded-full transition-all duration-1000"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <p className="text-[11px] text-slate-400 font-sans">
                  Você concluiu <strong>{completedCount}</strong> lições de um total de <strong>{totalLessonsCount}</strong> lições obrigatórias.
                </p>
              </div>
            </div>

            {/* Locked summary action panel */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3 justify-between">
              <div className="text-left">
                <span className="text-[10px] text-slate-400 block font-mono">FALTA POUCO!</span>
                <span className="text-xs font-bold text-slate-700">Conclua mais {totalLessonsCount - completedCount} lições para liberar</span>
              </div>
              <button
                onClick={onNavigateToTrilha}
                className="w-full sm:w-auto bg-[#1a237e] hover:bg-[#151c66] text-white px-5 py-2.5 rounded-xl text-xs font-bold font-sans cursor-pointer flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
              >
                Continuar Estudando <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: BEAUTIFUL PROGRESS SUMMARY / LIST OF MODULES CHECKLIST */}
          <div className="lg:col-span-5 bg-slate-50/50 border border-slate-200/80 p-5 rounded-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-[#1a237e] uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-200 pb-2">
                <Trophy className="h-4 w-4 text-amber-500" /> Checklist de Validação
              </h3>
              
              <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                {ACADEMY_MODULES.map((mod) => {
                  const moduleLessonIds = mod.lessons.map(l => l.id);
                  const completedInModule = moduleLessonIds.filter(id => completedLessons.includes(id)).length;
                  const isFinished = completedInModule === mod.lessons.length;
                  
                  return (
                    <div 
                      key={mod.id} 
                      className={`p-3 rounded-xl border flex items-center justify-between gap-3 ${
                        isFinished 
                          ? "bg-[#00c853]/5 border-[#00c853]/25" 
                          : "bg-white border-slate-200"
                      }`}
                    >
                      <div className="flex items-start gap-2.5 min-w-0">
                        <span className="text-base shrink-0">{isFinished ? "✅" : "📁"}</span>
                        <div className="min-w-0">
                          <p className="text-[11px] font-bold text-[#1a237e] truncate leading-none mb-1">
                            Módulo {mod.id}: {mod.title.split("—")[0].trim()}
                          </p>
                          <p className="text-[10px] text-slate-500 font-sans">
                            {completedInModule} de {mod.lessons.length} aulas concluídas
                          </p>
                        </div>
                      </div>
                      
                      <div className="shrink-0">
                        {isFinished ? (
                          <span className="text-[10px] font-mono font-bold text-[#00c853] bg-[#00c853]/10 px-2 py-0.5 rounded-full">
                            OK!
                          </span>
                        ) : (
                          <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                            {Math.round((completedInModule / mod.lessons.length) * 100)}%
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/60 mt-4 text-center">
              <span className="text-[10px] text-slate-400 italic">
                *O certificado é gratuito e gerado instantaneamente no formato PDF A4 internacional de alta resolução.
              </span>
            </div>

          </div>

        </div>
      ) : (
        
        /* RENDER UNLOCKED STATE */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* LEFT COLUMN (COLSPAN 5): CONTROLS FORM PANEL */}
          <div className="lg:col-span-5 bg-white border border-slate-200 p-6 rounded-2xl shadow-lg space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-[9px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 inline-block uppercase mb-1">
                🔓 ACESSO LIBERADO!
              </span>
              <h2 className="text-lg font-bold text-[#1a237e] tracking-tight">
                Emissão de Certificado
              </h2>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed font-sans">
                Parabéns! Você alcançou a pontuação máxima e concluiu todas as lições da nossa trilha profissional. Preencha os detalhes para emitir seu diploma oficial.
              </p>
            </div>

            <form onSubmit={handleGeneratePDF} className="space-y-4">
              
              {/* STUDENT NAME INPUT */}
              <div className="space-y-1.5 text-left">
                <label className="text-[11px] font-bold text-[#1a237e] uppercase tracking-wider block font-sans">
                  Nome Completo do Aluno
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="Digite seu nome completo como deseja no certificado"
                    value={studentName}
                    onChange={(e) => {
                      setStudentName(e.target.value);
                      setGenerationSuccess(false);
                    }}
                    maxLength={50}
                    className="w-full text-xs bg-slate-50/50 border border-slate-200 focus:border-[#1a237e] focus:bg-white text-slate-800 px-4 py-3 rounded-xl outline-none transition-all font-sans placeholder-slate-400 font-medium"
                  />
                  {studentName && (
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] font-semibold text-[#00c853]">
                      Pronto! ✓
                    </span>
                  )}
                </div>
                <span className="text-[10px] text-slate-400 block leading-tight font-sans">
                  *Atenção: Revise a grafia e acentuação antes de clicar para emitir seu PDF.
                </span>
              </div>

              {/* TEMPLATE STYLING CHOOSER */}
              <div className="space-y-2 text-left">
                <label className="text-[11px] font-bold text-[#1a237e] uppercase tracking-wider block font-sans">
                  Selecione o Tema Visual do Certificado
                </label>
                <div className="grid grid-cols-3 gap-2">
                  
                  {/* GOLD THEME */}
                  <button
                    type="button"
                    onClick={() => setTheme("gold")}
                    className={`p-3 rounded-xl border text-center flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                      theme === "gold"
                        ? "bg-amber-500/10 border-amber-500 text-amber-700 font-bold shadow-xs scale-102"
                        : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span className="text-lg">🏆</span>
                    <span className="text-[9px] uppercase tracking-wider font-bold">Ouro Elite</span>
                  </button>

                  {/* EMERALD THEME */}
                  <button
                    type="button"
                    onClick={() => setTheme("emerald")}
                    className={`p-3 rounded-xl border text-center flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                      theme === "emerald"
                        ? "bg-[#00c853]/10 border-[#00c853] text-[#00c853] font-bold shadow-xs scale-102"
                        : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span className="text-lg">🌿</span>
                    <span className="text-[9px] uppercase tracking-wider font-bold">Esmeralda</span>
                  </button>

                  {/* CLASSIC THEME */}
                  <button
                    type="button"
                    onClick={() => setTheme("classic")}
                    className={`p-3 rounded-xl border text-center flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                      theme === "classic"
                        ? "bg-indigo-55/15 border-indigo-700 text-indigo-900 font-bold shadow-xs scale-102"
                        : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span className="text-lg">🏛️</span>
                    <span className="text-[9px] uppercase tracking-wider font-bold">Azul Classic</span>
                  </button>

                </div>
              </div>

              {/* ACTION GENERATION BUTTON */}
              <button
                type="submit"
                disabled={isGenerating || !studentName.trim()}
                className={`w-full py-3.5 rounded-xl text-xs font-bold font-sans cursor-pointer flex items-center justify-center gap-2 transition-all shadow-md ${
                  isGenerating 
                    ? "bg-slate-200 text-slate-400 cursor-not-allowed" 
                    : "bg-[#00c853] hover:bg-[#00a844] text-white hover:shadow-lg active:scale-98"
                }`}
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="h-4 w-4 animate-spin" /> Processando Documento...
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4" /> Gerar Certificado Oficial PDF
                  </>
                )}
              </button>

            </form>

            {/* SUCCESS FEEDBACK MESSAGE */}
            {generationSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#00c853]/10 border border-[#00c853]/30 p-4 rounded-xl text-center space-y-1.5"
              >
                <div className="flex items-center justify-center gap-1.5 text-[#00c853] font-bold text-xs">
                  <CheckCircle2 className="h-4 w-4 shrink-0" /> DOWNLOAD INICIADO COM SUCESSO!
                </div>
                <p className="text-[10px] text-slate-600 font-sans leading-relaxed">
                  Seu certificado oficial do Renda Online Academy foi gerado em formato PDF A4 de altíssima qualidade e o download foi iniciado no seu navegador.
                </p>
              </motion.div>
            )}

            {/* CURRICULAR CREDENTIALS FOOTNOTE CARD */}
            <div className="bg-slate-50 border border-slate-150 p-4 rounded-xl space-y-2">
              <span className="text-[8px] font-mono font-bold text-slate-400 tracking-wider uppercase block">
                CONTEÚDO DA CREDENCIAL
              </span>
              <p className="text-[10.5px] text-slate-500 leading-relaxed font-sans">
                O diploma emitido é reconhecido digitalmente, contendo carga horária de 60 horas, código de autenticidade antifraude exclusivo e assinatura institucional registrada.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN (COLSPAN 7): VISUAL PREVIEW OF CERTIFICATE FRAME */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-[#1a237e] uppercase tracking-wider flex items-center gap-1 font-sans">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" /> Pré-visualização do Diploma
            </span>

            {/* THE ACTUAL VISUAL DIPLOMA BOX PREVIEW */}
            <div className={`relative w-full aspect-[297/210] rounded-2xl border-4 transition-all duration-300 shadow-2xl p-4 sm:p-8 flex flex-col justify-between text-center overflow-hidden font-sans ${
              theme === "gold" 
                ? "bg-[#fdfbf2] border-[#d4af37] shadow-amber-500/10" 
                : theme === "emerald"
                  ? "bg-[#f4f9f6] border-[#00c853] shadow-[#00c853]/10"
                  : "bg-[#f5f7fb] border-[#1a237e] shadow-indigo-500/10"
            }`}>
              
              {/* Inner geometric thin border */}
              <div className={`absolute inset-1 border transition-all duration-300 ${
                theme === "gold" 
                  ? "border-[#d4af37]/40" 
                  : theme === "emerald"
                    ? "border-[#00c853]/40"
                    : "border-[#1a237e]/40"
              }`} />

              {/* Decorative corner circles */}
              <div className={`absolute top-2 left-2 w-3 h-3 rounded-full ${theme === "gold" ? "bg-[#d4af37]" : theme === "emerald" ? "bg-[#00c853]" : "bg-[#1a237e]"}`} />
              <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${theme === "gold" ? "bg-[#d4af37]" : theme === "emerald" ? "bg-[#00c853]" : "bg-[#1a237e]"}`} />
              <div className={`absolute bottom-2 left-2 w-3 h-3 rounded-full ${theme === "gold" ? "bg-[#d4af37]" : theme === "emerald" ? "bg-[#00c853]" : "bg-[#1a237e]"}`} />
              <div className={`absolute bottom-2 right-2 w-3 h-3 rounded-full ${theme === "gold" ? "bg-[#d4af37]" : theme === "emerald" ? "bg-[#00c853]" : "bg-[#1a237e]"}`} />

              {/* Content Header */}
              <div className="space-y-1 z-10 relative">
                <h4 className={`text-[12px] sm:text-base font-black tracking-widest ${
                  theme === "gold" ? "text-amber-850" : theme === "emerald" ? "text-emerald-900" : "text-[#1a237e]"
                }`}>
                  RENDA ONLINE ACADEMY
                </h4>
                <p className="text-[7px] sm:text-[9px] text-slate-400 font-mono tracking-widest leading-none">
                  CURSO DE CAPACITAÇÃO E PRÁTICAS DE NEGÓCIOS DIGITAIS
                </p>
              </div>

              {/* Main title */}
              <div className="z-10 relative">
                <span className="text-[9px] sm:text-[11px] font-mono tracking-widest uppercase text-slate-400 font-bold block mb-1">
                  Certificado Oficial de Formação
                </span>
                <p className="text-[7px] sm:text-[10px] text-slate-500 italic max-w-md mx-auto">
                  Certificamos para todos os fins acadêmicos e mercadológicos de capacitação que o estudante
                </p>
              </div>

              {/* Student name showcase (Responsive type size logic) */}
              <div className="my-1.5 z-10 relative">
                <h3 className={`font-black tracking-tight leading-none text-md sm:text-xl truncate ${
                  theme === "gold" ? "text-amber-700" : theme === "emerald" ? "text-emerald-600" : "text-[#1a237e]"
                }`}>
                  {studentName.trim() ? studentName.toUpperCase() : "SEU NOME COMPLETO AQUI"}
                </h3>
                <div className={`w-32 sm:w-56 h-[1.5px] mx-auto mt-2 ${
                  theme === "gold" ? "bg-[#d4af37]" : theme === "emerald" ? "bg-[#00c853]" : "bg-[#1a237e]"
                }`} />
              </div>

              {/* Curriculum detail text preview */}
              <div className="z-10 relative max-w-lg mx-auto">
                <p className="text-[6.5px] sm:text-[9.5px] text-slate-650 leading-relaxed font-sans">
                  concluiu com êxito todas as lições práticas, metodologias operacionais de mercado e testes avaliativos da plataforma educacional Renda Online Academy. O programa intensivo abrangeu os seguintes pilares estratégicos: Empreendedorismo e Mindset de Negócios, Atuação Profissional de Elite como Freelancer, Escala em Marketing de Afiliados, Criação de Canais Dark de Vídeos e Coprywriting Persuasivo Aplicado, totalizando carga horária certificada de 60 horas curriculares.
                </p>
              </div>

              {/* Signatures & Seal preview layout */}
              <div className="grid grid-cols-3 items-end pt-1 gap-2 border-t border-slate-150/50 mt-1 z-10 relative">
                <div className="text-center">
                  <span className="text-[6.5px] sm:text-[9px] font-bold font-serif italic text-indigo-900 block leading-none">Marcio S. Carvalho</span>
                  <div className="w-full h-[0.5px] bg-slate-300 my-1"></div>
                  <span className="text-[5px] sm:text-[7px] text-slate-400 font-bold uppercase block leading-none">Diretoria Acadêmica</span>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className={`w-6 h-6 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center p-0.5 ${
                    theme === "gold" ? "border-amber-400" : theme === "emerald" ? "border-emerald-400" : "border-indigo-400"
                  }`}>
                    <div className={`w-full h-full rounded-full border-dashed border flex items-center justify-center ${
                      theme === "gold" ? "border-amber-400" : theme === "emerald" ? "border-emerald-400" : "border-indigo-400"
                    }`}>
                      <Award className={`h-3 w-3 sm:h-5 sm:w-5 ${theme === "gold" ? "text-[#d4af37]" : theme === "emerald" ? "text-[#00c853]" : "text-[#1a237e]"}`} />
                    </div>
                  </div>
                  <span className="text-[4px] sm:text-[6px] font-mono text-slate-400 mt-1 block">ROA OFICIAL</span>
                </div>

                <div className="text-center">
                  <span className={`text-[6.5px] sm:text-[9px] font-bold font-serif italic block truncate leading-none ${
                    theme === "gold" ? "text-amber-700" : theme === "emerald" ? "text-emerald-600" : "text-[#1a237e]"
                  }`}>
                    {studentName.trim() ? studentName : "Assinatura do Aluno"}
                  </span>
                  <div className="w-full h-[0.5px] bg-slate-300 my-1"></div>
                  <span className="text-[5px] sm:text-[7px] text-slate-400 font-bold uppercase block leading-none">Registro do Titular</span>
                </div>
              </div>

            </div>

            <div className="text-center">
              <span className="text-[10px] text-slate-400 font-mono flex items-center justify-center gap-1">
                ⚡ Design otimizado para impressão colorida formato A4 de alta fidelidade
              </span>
            </div>

          </div>

        </div>

      )}

    </div>
  );
}
