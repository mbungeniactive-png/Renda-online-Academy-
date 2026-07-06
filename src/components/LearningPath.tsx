/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  Check, 
  Brain, 
  Briefcase, 
  TrendingUp, 
  Youtube, 
  FileCode, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Lock,
  Award,
  BookOpen,
  ArrowRight,
  HelpCircle,
  Lightbulb,
  CheckCircle2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";
import { ACADEMY_MODULES } from "../data";
import { Module, Lesson } from "../types";
import PremiumPromoUnit from "./PremiumPromoUnit";

// Dynamic Lucide selection mapping helper
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  Briefcase,
  TrendingUp,
  Youtube,
  FileCode,
  ShieldCheck
};

interface LearningPathProps {
  completedLessons: string[];
  toggleLessonComplete: (lessonId: string) => void;
  activeLessonId: string | null;
  setActiveLessonId: (id: string | null) => void;
  onNavigateToCertificate?: () => void;
}

function renderLessonContent(content: string) {
  if (!content) return null;

  // Primeiro limpamos quebras de linha literais (escapadas como \\n ou escritas como \n)
  let normalized = content.replace(/\\n/g, "\n").replace(/\"/g, '"');
  
  // Limpar aspas redundantes que envelopam o texto inteiro
  normalized = normalized.trim();
  if (normalized.startsWith('"') && normalized.endsWith('"')) {
    normalized = normalized.slice(1, -1).trim();
  }
  
  const rawLines = normalized.split("\n");
  
  const elements: React.ReactNode[] = [];
  let currentListItems: { title?: string; body: string }[] = [];
  
  const flushList = (keyPrefix: string) => {
    if (currentListItems.length > 0) {
      elements.push(
        <div key={`grid-${keyPrefix}`} className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-4">
          {currentListItems.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-200/80 p-3.5 rounded-xl shadow-xs hover:border-[#00c853]/40 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {item.title ? (
                  <h5 className="font-bold text-[#1a237e] text-[11px] uppercase tracking-wider mb-1.5 flex items-center gap-1.5 font-sans">
                    <span className="w-1.5 h-3 bg-[#00c853] rounded-full shrink-0"></span>
                    {item.title}
                  </h5>
                ) : (
                  <span className="w-1.5 h-3 bg-[#00c853] rounded-full inline-block mr-1.5 shrink-0"></span>
                )}
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-sans">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      );
      currentListItems = [];
    }
  };

  rawLines.forEach((line, index) => {
    const trimmed = line.trim();
    if (!trimmed) {
      return;
    }

    // Se for um título principal como ### 🟢 INTRODUÇÃO ou ### INTRODUÇÃO
    if (trimmed.startsWith("###")) {
      flushList(`${index}`);
      
      const titleText = trimmed.replace(/^###\s*(🟢|🔴|🟡)?\s*/, "").trim();
      elements.push(
        <h3 key={`h3-${index}`} className="text-sm md:text-md font-bold text-[#1a237e] pt-6 pb-2 border-b border-slate-100 flex items-center tracking-wide uppercase font-sans mt-4">
          <span className="w-2 h-4 bg-[#00c853] rounded mr-2 inline-block shrink-0"></span>
          {titleText}
        </h3>
      );
      return;
    }

    // Se for subtítulo como ####
    if (trimmed.startsWith("####")) {
      flushList(`${index}`);
      const subtitleText = trimmed.replace(/^####\s*/, "").trim();
      elements.push(
        <h4 key={`h4-${index}`} className="text-xs md:text-sm font-bold text-[#00c853] pt-4 pb-1 uppercase tracking-wide font-sans">
          {subtitleText}
        </h4>
      );
      return;
    }

    // Se for item de lista como * ou - ou *   **Passo 1**
    const listMatch = trimmed.match(/^[\*\-\+]\s*(.*)$/);
    if (listMatch) {
      const contentOfItem = listMatch[1].trim();
      
      // Checar se tem negrito delimitando o título do item, ex: **Passo 1 — Criar conta**: conteúdo
      // ou **Vantagem 1 — Começa sem dinheiro**: conteúdo
      const boldMatch = contentOfItem.match(/^\*\*(.*?)\*\*(.*)$/);
      if (boldMatch) {
        const itemTitle = boldMatch[1].replace(/[:\-—]/g, "").trim();
        const itemBody = boldMatch[2].replace(/^[:\-—\s]*/, "").trim();
        currentListItems.push({
          title: itemTitle,
          body: itemBody || itemTitle
        });
      } else {
        currentListItems.push({
          body: contentOfItem
        });
      }
      return;
    }

    // Se a linha não for um item de lista, flush as anteriores pendentes
    flushList(`${index}`);

    // É um parágrafo normal. Vamos renderizar substituindo os ** por tags <strong> reais
    const parts = trimmed.split("**");
    const formattedSpan = parts.map((part, pIdx) => {
      if (pIdx % 2 === 1) {
        return <strong key={pIdx} className="text-[#1a237e] font-extrabold">{part}</strong>;
      }
      return part;
    });

    // Se começar e terminar com aspas, ex: "Fala, pessoal! ..."
    // Tiramos as aspas para dar um ar mais "direto" e integrado ao portal educacional
    let cleanText: React.ReactNode = formattedSpan;
    if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
      const stripped = trimmed.slice(1, -1);
      const innerParts = stripped.split("**");
      cleanText = innerParts.map((part, pIdx) => {
        if (pIdx % 2 === 1) {
          return <strong key={pIdx} className="text-[#1a237e] font-extrabold">{part}</strong>;
        }
        return part;
      });
    }

    elements.push(
      <p key={`p-${index}`} className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans antialiased my-3 pb-1 border-l border-transparent">
        {cleanText}
      </p>
    );
  });

  // Flush remaining list items if any
  flushList("final");

  return <div className="space-y-4">{elements}</div>;
}

export default function LearningPath({
  completedLessons,
  toggleLessonComplete,
  activeLessonId,
  setActiveLessonId,
  onNavigateToCertificate
}: LearningPathProps) {
  const [expandedModuleId, setExpandedModuleId] = useState<number | null>(1);
  const [showCongratsModal, setShowCongratsModal] = useState(false);
  const [showM3Celebration, setShowM3Celebration] = useState(false);
  const [showM4Celebration, setShowM4Celebration] = useState(false);
  const [quizStates, setQuizStates] = useState<Record<number, {
    answers: Record<number, number>; // index of option selected per question index
    submitted: boolean;
    score: number; // percent or count
  }>>({});
  const [lockErrorMessage, setLockErrorMessage] = useState<string | null>(null);
  const [timerEnabled, setTimerEnabled] = useState<Record<number, boolean>>({});
  const [activeQuestionIdx, setActiveQuestionIdx] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState<number>(30);

  // Load quizStates from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("renda-online-quiz-states");
    if (saved) {
      try {
        setQuizStates(JSON.parse(saved));
      } catch (err) {
        console.error("Erro ao carregar o estado do quiz:", err);
      }
    }
  }, []);

  // Auto-expand module if an activeLessonId is selected (e.g. from search results)
  useEffect(() => {
    if (activeLessonId) {
      const parentModule = ACADEMY_MODULES.find(mod => 
        mod.lessons.some(les => les.id === activeLessonId)
      );
      if (parentModule) {
        setExpandedModuleId(parentModule.id);
        // Scroll to the active lesson after expansion
        setTimeout(() => {
          const el = document.getElementById(`complete-checkbox-${activeLessonId}`);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }, 400);
      }
    }
  }, [activeLessonId]);

  const scrollToModule = (moduleId: number) => {
    if (isModuleLocked(moduleId)) {
      handleModuleToggle(moduleId);
      return;
    }
    setExpandedModuleId(moduleId);
    setTimeout(() => {
      const el = document.getElementById(`module-card-${moduleId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

  const module1Lessons = ACADEMY_MODULES.find(m => m.id === 1)?.lessons || [];
  const isModule1MilestoneComplete = module1Lessons.length > 0 && module1Lessons.every(lesson => completedLessons.includes(lesson.id));

  // Dynamic helper to count correct answers based on the current quizStates
  const getCorrectCount = (moduleId: number) => {
    const mod = ACADEMY_MODULES.find(m => m.id === moduleId);
    if (!mod || !quizStates[moduleId]) return 0;
    let count = 0;
    mod.quiz.forEach((q, idx) => {
      if (quizStates[moduleId].answers[idx] === q.correctAnswerIndex) {
        count++;
      }
    });
    return count;
  };

  // Helper to verify if a quiz has been successfully passed
  const isModulePassed = (moduleId: number) => {
    const state = quizStates[moduleId];
    if (!state?.submitted) return false;
    const correctCount = getCorrectCount(moduleId);
    if (moduleId === 1) return correctCount >= 3;
    if (moduleId === 2) return correctCount >= 5;
    if (moduleId === 3) return correctCount >= 5;
    if (moduleId === 4) return correctCount >= 5;
    // For other modules, require at least 60% of correct answers
    const mod = ACADEMY_MODULES.find(m => m.id === moduleId);
    if (!mod) return false;
    return correctCount >= Math.ceil(mod.quiz.length * 0.6);
  };

  // Sequential locking checker to enforce module dependencies
  const isModuleLocked = (moduleId: number) => {
    if (moduleId === 1) return false;
    for (let prevId = 1; prevId < moduleId; prevId++) {
      if (!isModulePassed(prevId)) {
        return true;
      }
    }
    return false;
  };

  // Determine if Quiz has been passed with at least 3 correct answers for Module 1
  const isModule1QuizPassed = isModulePassed(1);
  const isModule2QuizPassed = isModulePassed(2);

  // Trigger congrats when BOTH the milestone (lessons) and the quiz are completed & passed for Module 1
  const isModule1FullyPassed = isModule1MilestoneComplete && isModule1QuizPassed;

  useEffect(() => {
    if (isModule1FullyPassed) {
      const hasBeenShown = localStorage.getItem("renda-online-m1-full-passed-shown-new");
      if (!hasBeenShown) {
        setShowCongratsModal(true);
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 }
        });
        localStorage.setItem("renda-online-m1-full-passed-shown-new", "true");
      }
    } else {
      localStorage.removeItem("renda-online-m1-full-passed-shown-new");
    }
  }, [isModule1FullyPassed]);

  const handleExitLesson = (lessonElementId?: string) => {
    setActiveLessonId(null);
    if (lessonElementId) {
      setTimeout(() => {
        const el = document.getElementById(lessonElementId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 50);
    }
  };

  const handleModuleToggle = (id: number) => {
    for (let prevId = 1; prevId < id; prevId++) {
      if (!isModulePassed(prevId)) {
        const minRequired = prevId === 1 ? 3 : prevId === 2 ? 5 : prevId === 3 ? 5 : prevId === 4 ? 5 : Math.ceil((ACADEMY_MODULES.find(m => m.id === prevId)?.quiz.length || 5) * 0.6);
        setLockErrorMessage(`🔒 Módulo ${id} Bloqueado! Para liberar este módulo, você precisa concluir o Quiz do Módulo ${prevId} com pelo menos ${minRequired} acertos.`);
        setTimeout(() => {
          setLockErrorMessage(prev => prev && prev.includes(`Módulo ${id} Bloqueado`) ? null : prev);
        }, 6000);
        return;
      }
    }
    setLockErrorMessage(null);
    setExpandedModuleId(expandedModuleId === id ? null : id);
  };

  const handleQuizAnswer = (moduleId: number, qIdx: number, oIdx: number) => {
    setQuizStates(prev => {
      const current = prev[moduleId] || { answers: {}, submitted: false, score: 0, attempts: 0 };
      if (current.submitted) return prev; // Lock after submission
      const next = {
        ...prev,
        [moduleId]: {
          ...current,
          answers: {
            ...current.answers,
            [qIdx]: oIdx
          }
        }
      };
      // Keep selected options persisted as active state
      localStorage.setItem("renda-online-quiz-states", JSON.stringify(next));
      return next;
    });
  };

  const handleQuizSubmit = (mod: Module) => {
    const state = quizStates[mod.id] || { answers: {}, submitted: false, score: 0, attempts: 0 };
    if (Object.keys(state.answers).length < mod.quiz.length) {
      alert("Por favor, responda todas as perguntas do Quiz antes de enviar!");
      return;
    }

    let correctCount = 0;
    mod.quiz.forEach((q, idx) => {
      if (state.answers[idx] === q.correctAnswerIndex) {
        correctCount++;
      }
    });

    const scorePct = Math.round((correctCount / mod.quiz.length) * 100);
    const nextAttempts = (state.attempts || 0) + 1;

    setQuizStates(prev => {
      const next = {
        ...prev,
        [mod.id]: {
          ...(prev[mod.id] || { answers: {}, submitted: false, score: 0, attempts: 0 }),
          submitted: true,
          score: scorePct,
          attempts: nextAttempts
        }
      };
      localStorage.setItem("renda-online-quiz-states", JSON.stringify(next));
      return next;
    });

    const passed = mod.id === 1 ? correctCount >= 3 : mod.id === 2 ? correctCount >= 5 : mod.id === 3 ? correctCount >= 5 : mod.id === 4 ? correctCount >= 5 : correctCount >= Math.ceil(mod.quiz.length * 0.6);

    if (passed) {
      // Confetti!
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });

      if (mod.id === 1) {
        if (isModule1MilestoneComplete) {
          setShowCongratsModal(true);
        } else {
          setLockErrorMessage("🎉 Sucesso! Você passou no Quiz do Módulo 1 com pelo menos 3 acertos! Agora conclua as lições restantes em aberto para consolidar 100%!");
          setTimeout(() => {
            setLockErrorMessage(null);
          }, 8000);
        }
      } else if (mod.id === 2) {
        setLockErrorMessage("🎉 Incrível! Você passou no Quiz do Módulo 2 com pelo menos 5 acertos! O Módulo 3 foi DESBLOQUEADO com sucesso! Continue brilhando! 🚀");
        setTimeout(() => {
          setLockErrorMessage(null);
        }, 10000);
      } else if (mod.id === 3) {
        setShowM3Celebration(true);
        // Multi-burst fireworks celebration
        const duration = 4 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval = setInterval(function() {
          const timeLeft = animationEnd - Date.now();

          if (timeLeft <= 0) {
            return clearInterval(interval);
          }

          const particleCount = 50 * (timeLeft / duration);
          confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
          confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
      } else if (mod.id === 4) {
        setShowM4Celebration(true);
        // Multi-burst fireworks celebration
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval = setInterval(function() {
          const timeLeft = animationEnd - Date.now();

          if (timeLeft <= 0) {
            return clearInterval(interval);
          }

          const particleCount = 50 * (timeLeft / duration);
          confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
          confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
      } else {
        setLockErrorMessage(`🎉 Parabéns! Você passou no Quiz do Módulo ${mod.id}! Ótimo trabalho! Continue avançando!`);
        setTimeout(() => {
          setLockErrorMessage(null);
        }, 8000);
      }
    } else {
      if (mod.id === 4) {
        if (correctCount >= 3 && correctCount <= 4) {
          setLockErrorMessage("📚 3 a 4 acertos — Continue estudando! Volte ao Módulo 4 e reveja os conteúdos com calma antes de avançar.");
        } else {
          setLockErrorMessage("🎯 0 a 2 acertos — Sem pressa! Assista novamente as lições do Módulo 4. Cada revisão consolida mais o aprendizado.");
        }
      } else {
        const minRequired = mod.id === 1 ? 3 : mod.id === 2 ? 5 : mod.id === 3 ? 5 : mod.id === 4 ? 5 : Math.ceil(mod.quiz.length * 0.6);
        setLockErrorMessage(`⚠️ Você acertou ${correctCount} de ${mod.quiz.length} perguntas. Você precisa de pelo menos ${minRequired} acertos para passar neste módulo. Tente novamente!`);
      }
      setTimeout(() => {
        setLockErrorMessage(null);
      }, 10000);
    }
  };

  const resetQuiz = (moduleId: number) => {
    // Reset active question index to 0 when resetting quiz
    setActiveQuestionIdx(prev => ({ ...prev, [moduleId]: 0 }));
    setQuizStates(prev => {
      const current = prev[moduleId] || { answers: {}, submitted: false, score: 0, attempts: 0 };
      const next = {
        ...prev,
        [moduleId]: {
          answers: {},
          submitted: false,
          score: 0,
          attempts: current.attempts || 0
        }
      };
      localStorage.setItem("renda-online-quiz-states", JSON.stringify(next));
      return next;
    });
  };

  // Countdown effect for the active question when timer is enabled for the expanded module
  useEffect(() => {
    if (!expandedModuleId) return;
    const isTimerActive = timerEnabled[expandedModuleId];
    if (!isTimerActive) return;

    const quizState = quizStates[expandedModuleId];
    if (quizState?.submitted) return;

    const currentIdx = activeQuestionIdx[expandedModuleId] || 0;
    const hasAnsweredCurrent = quizState?.answers[currentIdx] !== undefined;

    // If already answered, do not count down (pause the timer so they can read the explanation!)
    if (hasAnsweredCurrent) return;

    // Count down
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          // Time's up! Auto select -1 as incorrect answer to trigger explanation & pause timer
          handleQuizAnswer(expandedModuleId, currentIdx, -1);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [expandedModuleId, timerEnabled, quizStates, activeQuestionIdx]);

  // Reset timer to 30 when active question changes or when timer is toggled
  useEffect(() => {
    if (expandedModuleId) {
      setTimeLeft(30);
    }
  }, [expandedModuleId, activeQuestionIdx, timerEnabled]);

  return (
    <div className="bg-[#f8fafc] text-slate-800 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PAGE HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="learning-path-header">
          <div className="inline-flex items-center space-x-1.5 bg-[#00c853]/10 border border-[#00c853]/20 px-3 py-1 rounded-full text-[#00c853] text-xs font-mono font-semibold uppercase">
            <Award className="h-3.5 w-3.5" />
            <span>Trilha Interativa de Formação</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1a237e] leading-tight uppercase">
            Seu Currículo Profissional do Zero ao Avançado
          </h1>
          <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed font-sans">
            Siga nosso currículo modular e interativo na ordem recomendada. Marque as lições concluídas e teste seus conhecimentos com os quizes integrados para garantir a absorção total.
          </p>
        </div>

        {/* PREMIUM INTERACTIVE PROMO BANNER */}
        <div className="mb-12 flex justify-center">
          <PremiumPromoUnit />
        </div>

        {/* SECUNDÁRIO MENU DE NAVEGAÇÃO RÁPIDA (STICKY) */}
        <div className="max-w-4xl mx-auto mb-10 sticky top-20 bg-white/95 border border-slate-150 backdrop-blur-md z-30 p-2 rounded-2xl shadow-md flex items-center gap-1 overflow-x-auto scrollbar-none sm:grid sm:grid-cols-6">
          {ACADEMY_MODULES.map((mod) => {
            const isLocked = isModuleLocked(mod.id);
            const isExpanded = expandedModuleId === mod.id;
            
            // Calculate completed percentage for this specific module
            const moduleLessonIds = mod.lessons.map(l => l.id);
            const completedInModule = moduleLessonIds.filter(id => completedLessons.includes(id)).length;
            const isAllCompletedInModule = completedInModule === mod.lessons.length;
            const percentage = mod.lessons.length > 0 ? Math.round((completedInModule / mod.lessons.length) * 100) : 0;

            return (
              <button
                key={mod.id}
                onClick={() => scrollToModule(mod.id)}
                className={`flex-1 shrink-0 px-3 py-2 rounded-xl text-center flex flex-col justify-between transition-all duration-300 min-w-[110px] cursor-pointer ${
                  isExpanded
                    ? "bg-[#1a237e] text-white shadow-lg shadow-[#1a237e]/20 scale-[1.02]"
                    : isLocked
                      ? "bg-slate-50/50 text-slate-400 border border-transparent opacity-60 cursor-not-allowed"
                      : "bg-white hover:bg-slate-50 text-slate-700 hover:text-[#1a237e] border border-slate-100"
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-[9px] font-mono font-bold tracking-wider uppercase block opacity-80">
                    Mód {mod.id}
                  </span>
                  <div>
                    {isLocked ? (
                      <Lock className="h-2.5 w-2.5 text-slate-400" />
                    ) : isAllCompletedInModule ? (
                      <CheckCircle2 className="h-3 w-3 text-[#00c853]" />
                    ) : (
                      <span className="text-[9px] font-mono font-bold text-[#00c853]">{percentage}%</span>
                    )}
                  </div>
                </div>
                
                <span className="text-[10px] font-bold tracking-tight block truncate text-left">
                  {mod.title.split("—")[0].trim()}
                </span>

                {/* Progress dot/bar indicators */}
                <div className="w-full bg-slate-100/30 h-1 rounded-full overflow-hidden mt-1.5">
                  <div 
                    className={`h-full rounded-full transition-all duration-300 ${
                      isExpanded 
                        ? "bg-[#00c853]" 
                        : isLocked 
                          ? "bg-slate-200" 
                          : "bg-[#00c853]"
                    }`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* MODULES GRAPHIC LIST */}
        <div className="max-w-4xl mx-auto space-y-8" id="modules-list">
          {ACADEMY_MODULES.map((mod, index) => {
            const IconComponent = ICON_MAP[mod.icon] || Brain;
            const isExpanded = expandedModuleId === mod.id;
            const isLocked = isModuleLocked(mod.id);
            
            // Calculate completed percentage for this specific module
            const moduleLessonIds = mod.lessons.map(l => l.id);
            const completedInModule = moduleLessonIds.filter(id => completedLessons.includes(id)).length;
            const moduleProgress = mod.lessons.length > 0
              ? Math.round((completedInModule / mod.lessons.length) * 100)
              : 0;

            const isAllCompletedInModule = completedInModule === mod.lessons.length;

            return (
              <div 
                key={mod.id} 
                className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${
                  isLocked
                    ? "opacity-75 bg-slate-50/50 border-slate-200 cursor-not-allowed select-none"
                    : isExpanded 
                      ? "border-[#1a237e] ring-1 ring-indigo-100 shadow-md" 
                      : "border-slate-200 hover:border-slate-300 shadow-sm"
                }`}
                id={`module-card-${mod.id}`}
              >
                
                {/* MODULE CARD HEADER */}
                <div 
                  onClick={() => handleModuleToggle(mod.id)}
                  className={`p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none transition-colors ${
                    isLocked ? "hover:bg-slate-50/40" : "hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-start sm:items-center space-x-4">
                    <div className={`p-3.5 rounded-xl border shrink-0 ${
                      isLocked
                        ? "bg-slate-100 border-slate-200 text-slate-400"
                        : isAllCompletedInModule 
                          ? "bg-[#00c853]/10 border-[#00c853]/20 text-[#00c853]" 
                          : "bg-slate-50 border-slate-200 text-[#1a237e]"
                    }`}>
                      {isLocked ? <Lock className="h-6 w-6" /> : <IconComponent className="h-6 w-6" />}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                        <span className={`text-[10px] font-mono font-bold tracking-widest uppercase ${
                          isLocked ? "text-slate-400" : "text-[#00c853]"
                        }`}>
                          MÓDULO {mod.id}
                        </span>
                        {isLocked ? (
                          <span className="flex items-center gap-1 text-[9px] font-mono font-bold uppercase text-slate-500 bg-slate-200/60 px-2.5 py-0.5 rounded border border-slate-300/40 whitespace-nowrap">
                            <Lock className="h-2.5 w-2.5" /> Bloqueado
                          </span>
                        ) : (
                          <>
                            {isAllCompletedInModule ? (
                              <span className="flex items-center gap-1.5 text-[9px] font-mono font-bold uppercase text-[#00c853] bg-[#00c853]/15 px-2 py-0.5 rounded border border-[#00c853]/20 whitespace-nowrap">
                                <CheckCircle2 className="h-3 w-3" /> Concluído
                              </span>
                            ) : (
                              <span className="flex items-center gap-1.5 text-[9px] font-mono font-bold uppercase text-amber-700 bg-amber-500/15 px-2.5 py-0.5 rounded border border-amber-500/20 whitespace-nowrap">
                                <span className="relative flex h-1.5 w-1.5">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
                                </span>
                                Em andamento
                              </span>
                            )}
                            {mod.id === 1 && isModule1MilestoneComplete && (
                              <span className="flex items-center gap-1 text-[9px] font-mono font-bold uppercase text-amber-700 bg-amber-500/15 px-2.5 py-0.5 rounded border border-amber-500/25 shadow-xs whitespace-nowrap">
                                🏆 Elite Módulo 1 Ativo
                              </span>
                            )}
                          </>
                        )}
                      </div>
                      <h2 className={`text-lg font-bold mt-0.5 ${isLocked ? "text-slate-400" : "text-[#1a237e]"}`}>{mod.title}</h2>
                      <p className="text-slate-500 text-xs font-sans line-clamp-1 mt-0.5 leading-relaxed">
                        {isLocked ? "🔒 Conteúdo bloqueado — Complete o Quiz do Módulo 1 para destravar!" : mod.description}
                      </p>
                    </div>
                  </div>

                  {/* Progressive bar overlay inside card header */}
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col items-end shrink-0">
                      <span className="text-[10px] text-slate-500 font-sans">Progresso do Módulo</span>
                      <span className="text-xs font-mono font-bold text-slate-700">
                        {completedInModule}/{mod.lessons.length} Aulas
                      </span>
                      {/* Bar indicator */}
                      <div className="w-24 bg-slate-100 h-1.5 rounded-full overflow-hidden mt-1 border border-slate-200">
                        <div 
                          className={`h-full rounded-full transition-all duration-300 ${
                            isLocked ? "bg-slate-300" : "bg-[#00c853]"
                          }`}
                          style={{ width: `${moduleProgress}%` }}
                        />
                      </div>
                    </div>
                    
                    <div className="text-slate-500 p-1.5 bg-slate-100 rounded" id={`chevron-toggle-${mod.id}`}>
                      {isLocked ? <Lock className="h-4 w-4 text-slate-400" /> : isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </div>
                  </div>
                </div>

                {/* MODULE CONTENT */}
                {isExpanded && (
                  <div className="border-t border-slate-100 bg-slate-50/40 p-6 space-y-6">
                    
                    {mod.id === 1 && isModule1MilestoneComplete && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gradient-to-r from-amber-500/10 via-amber-600/5 to-transparent border border-amber-500/20 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="p-2.5 bg-amber-500/15 rounded-lg text-amber-600 shrink-0">
                            <Award className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-[#1a237e] uppercase tracking-wide">
                              Selo de Elite Ativado: Módulo 1 Concluído!
                            </h4>
                            <p className="text-[10px] text-slate-500 font-sans leading-relaxed">
                              Parabéns! Você concluiu as duas lições cruciais de fundação (Finanças e Presença Profissional).
                            </p>
                          </div>
                        </div>
                        <button 
                          onClick={() => setShowCongratsModal(true)}
                          className="bg-amber-500 hover:bg-amber-600 active:scale-95 text-white font-bold text-[10px] px-3 py-1.5 rounded-lg shadow-xs font-sans transition-all shrink-0 cursor-pointer"
                        >
                          Ver Parabéns 🎉
                        </button>
                      </motion.div>
                    )}

                    {/* Lesson lists */}
                    <div className="space-y-4">
                      <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase block mb-3 font-sans">
                        Aulas Disponíveis
                      </span>
                      
                      {mod.lessons.map((les, index) => {
                        const isCompleted = completedLessons.includes(les.id);
                        const isLessonExpanded = activeLessonId === les.id;

                        return (
                          <div 
                            key={les.id}
                            className={`border rounded-lg transition-all ${
                              isLessonExpanded 
                                ? "bg-white border-slate-300 shadow-sm" 
                                : "bg-white/80 border-slate-200 hover:border-slate-300"
                            }`}
                          >
                            
                            {/* Lesson Title header row */}
                            <div 
                              onClick={() => setActiveLessonId(isLessonExpanded ? null : les.id)}
                              className="px-5 py-4 cursor-pointer flex items-center justify-between select-none"
                            >
                              <div className="flex items-center space-x-3 pr-4">
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleLessonComplete(les.id);
                                  }}
                                  className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 transition-all ${
                                    isCompleted 
                                      ? "bg-[#00c853] border-[#00c853] text-white" 
                                      : "border-slate-300 hover:border-[#00c853] bg-white"
                                  }`}
                                  title={isCompleted ? "Marcar como não concluída" : "Marcar como concluída"}
                                  id={`complete-checkbox-${les.id}`}
                                >
                                  {isCompleted && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                                </button>
                                
                                <div>
                                  <span className="text-[10px] font-mono text-slate-400 block">AULA {index + 1} ({les.duration})</span>
                                  <span className={`text-sm font-semibold transition-colors leading-tight ${
                                    isCompleted ? "text-slate-400 line-through font-sans" : "text-[#1a237e]"
                                  }`}>
                                    {les.title}
                                  </span>
                                </div>
                              </div>
                              <div className="text-slate-400">
                                {isLessonExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                              </div>
                            </div>

                            {/* Lesson detailed body content panel representation */}
                            {isLessonExpanded && (
                              <div className="px-5 pb-5 pt-1 border-t border-slate-100 text-slate-600 text-xs leading-relaxed space-y-4">
                                <div className="text-slate-700 font-sans">
                                  {renderLessonContent(les.content)}
                                </div>
                                
                                {/* Self check tasks inside lesson */}
                                <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-lg space-y-2">
                                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-sans">
                                    Metas Práticas desta Aula:
                                  </span>
                                  <ul className="space-y-1.5 text-[11px] text-slate-600 font-sans">
                                    <li className="flex items-center gap-2">
                                      <CheckCircle2 className={`h-3.5 w-3.5 ${isCompleted ? "text-[#00c853]" : "text-slate-300"}`} />
                                      Estudar o resumo conceitual
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <CheckCircle2 className={`h-3.5 w-3.5 ${isCompleted ? "text-[#00c853]" : "text-slate-300"}`} />
                                      Anotar termos chaves em seu rascunho pessoal
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <CheckCircle2 className={`h-3.5 w-3.5 ${isCompleted ? "text-[#00c853]" : "text-slate-300"}`} />
                                      Marcar aula como concluída acima para subir seu progresso geral!
                                    </li>
                                  </ul>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 justify-between items-stretch sm:items-center text-[10px] text-slate-400 pt-3.5 font-sans border-t border-slate-100/60">
                                  <div className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 bg-[#00c853] rounded-full"></span>
                                    <span>Material Pedagógico Renda Online®</span>
                                  </div>
                                  
                                  {/* Navigation Controls */}
                                  <div className="flex flex-wrap items-center gap-2">
                                    {index > 0 && (
                                      <button
                                        onClick={() => {
                                          const prevLes = mod.lessons[index - 1];
                                          setActiveLessonId(prevLes.id);
                                          setTimeout(() => {
                                            document.getElementById(`complete-checkbox-${prevLes.id}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
                                          }, 100);
                                        }}
                                        className="font-bold px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-[#1a237e] transition-all cursor-pointer text-[10px] shadow-2xs"
                                        title="Ir para a aula anterior"
                                      >
                                        ← Anterior
                                      </button>
                                    )}

                                    {index < mod.lessons.length - 1 ? (
                                      <button
                                        onClick={() => {
                                          const nextLes = mod.lessons[index + 1];
                                          setActiveLessonId(nextLes.id);
                                          setTimeout(() => {
                                            document.getElementById(`complete-checkbox-${nextLes.id}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
                                          }, 100);
                                        }}
                                        className="font-bold px-3 py-1.5 rounded-lg border border-[#1a237e]/15 bg-[#1a237e]/5 text-[#1a237e] hover:bg-[#1a237e] hover:text-white transition-all cursor-pointer text-[10px] shadow-2xs"
                                        title="Ir para a próxima aula"
                                      >
                                        Próxima Aula →
                                      </button>
                                    ) : (
                                      <button
                                        onClick={() => {
                                          document.getElementById(`module-quiz-${mod.id}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
                                        }}
                                        className="font-extrabold px-3 py-1.5 rounded-lg border border-[#00c853]/30 bg-[#00c853] text-white hover:bg-[#00a844] transition-all cursor-pointer text-[10px] shadow-2xs flex items-center gap-1.5"
                                        title="Vá direto para a autoavaliação do módulo"
                                      >
                                        Fazer o Quiz do Módulo 🎯
                                      </button>
                                    )}

                                    <div className="h-5 w-[1px] bg-slate-200 mx-1 hidden sm:block"></div>

                                    <button
                                      onClick={() => handleExitLesson(`complete-checkbox-${les.id}`)}
                                      className="font-bold px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-[#1a237e] transition-all cursor-pointer text-[10px] shadow-2xs"
                                      title="Minimizar aula atual e retornar para a lista de aulas"
                                    >
                                      Sair da Aula
                                    </button>
                                    
                                    <button
                                      onClick={() => toggleLessonComplete(les.id)}
                                      className={`font-semibold px-3 py-1.5 rounded-lg border transition-colors cursor-pointer text-[10px] ${
                                        isCompleted 
                                          ? "text-slate-500 border-slate-200 bg-slate-50" 
                                          : "text-[#00c853] border-[#00c853]/30 hover:bg-[#00c853]/5"
                                      }`}
                                    >
                                      {isCompleted ? "Concluída ✓" : "Concluir Aula"}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}

                          </div>
                        );
                      })}
                    </div>

                    {/* INTERACTIVE MODULE RETENTION QUIZ */}
                    <div className="border border-slate-200 bg-white shadow-sm rounded-xl p-5 space-y-5" id={`module-quiz-${mod.id}`}>
                      {/* Optional challenge timer toggle header row */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-150 pb-3">
                        <div className="flex items-center space-x-2">
                          <HelpCircle className="h-5 w-5 text-[#1a237e]" />
                          <div>
                            <h3 className="text-sm font-bold text-[#1a237e] uppercase tracking-wide">
                              Autoavaliação de Fixação do Módulo
                            </h3>
                            <span className="text-[10px] text-slate-500 font-sans font-medium">
                              Responda ao Quiz para garantir o seu Certificado de Participação Módulo {mod.id}.
                            </span>
                          </div>
                        </div>

                        {!quizStates[mod.id]?.submitted && (
                          <label className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 cursor-pointer hover:bg-slate-100 select-none transition-colors shrink-0">
                            <input 
                              type="checkbox" 
                              checked={!!timerEnabled[mod.id]} 
                              onChange={(e) => {
                                const checked = e.target.checked;
                                setTimerEnabled(prev => ({ ...prev, [mod.id]: checked }));
                                if (checked) {
                                  setActiveQuestionIdx(prev => ({ ...prev, [mod.id]: 0 }));
                                  setTimeLeft(30);
                                }
                              }}
                              className="accent-[#1a237e] h-3.5 w-3.5 rounded border-slate-300 cursor-pointer"
                            />
                            <span>⏱️ Desafio Cronometrado (30s)</span>
                          </label>
                        )}
                      </div>

                      {/* Quiz formulation */}
                      <div className="space-y-6 pt-1">
                        {(() => {
                          const isTimerActive = timerEnabled[mod.id] && !quizStates[mod.id]?.submitted;

                          if (isTimerActive) {
                            const currentQIdx = activeQuestionIdx[mod.id] || 0;
                            const q = mod.quiz[currentQIdx];
                            if (!q) return null;

                            const userSelectedOption = quizStates[mod.id]?.answers[currentQIdx];
                            const isCorrect = q.correctAnswerIndex === userSelectedOption;
                            const hasAnswered = userSelectedOption !== undefined;

                            // Color for timer
                            const timerColor = timeLeft > 15 
                              ? "bg-emerald-500" 
                              : timeLeft > 5 
                                ? "bg-amber-500" 
                                : "bg-rose-500 animate-pulse";

                            return (
                              <div className="space-y-5">
                                {/* Header Info & Progress */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50 border border-slate-200/60 p-3.5 rounded-xl">
                                  <span className="text-xs font-bold text-[#1a237e] font-sans">
                                    Pergunta {currentQIdx + 1} de {mod.quiz.length}
                                  </span>
                                  
                                  {/* Timer display */}
                                  <div className="flex items-center space-x-2 shrink-0">
                                    <span className="text-xs font-bold text-slate-600 font-sans">
                                      {hasAnswered ? "⏸️ Pausado (Gabarito)" : `⏳ Tempo Restante: ${timeLeft}s`}
                                    </span>
                                    {!hasAnswered && (
                                      <div className="w-24 bg-slate-200 h-2 rounded-full overflow-hidden border border-slate-300/40">
                                        <div 
                                          className={`h-full transition-all duration-1000 ${timerColor}`}
                                          style={{ width: `${(timeLeft / 30) * 100}%` }}
                                        />
                                      </div>
                                    )}
                                  </div>
                                </div>

                                {/* Question body */}
                                <div className="space-y-3">
                                  <span className="text-[13px] font-bold text-slate-800 block font-sans">
                                    {q.question}
                                  </span>
                                  
                                  <div className="grid grid-cols-1 gap-2">
                                    {q.options.map((opt, oIdx) => {
                                      let btnClass = "bg-white border border-slate-200 text-slate-700 text-left px-4 py-3 rounded-xl text-xs hover:border-slate-300 transition-all font-sans w-full cursor-pointer";
                                      const isSelected = userSelectedOption === oIdx;

                                      if (isSelected) {
                                        btnClass = "bg-indigo-50 border-[#1a237e] text-[#1a237e] text-left px-4 py-3 rounded-xl text-xs font-semibold font-sans w-full";
                                      }

                                      // Time out or completed feedback
                                      if (hasAnswered) {
                                        if (oIdx === q.correctAnswerIndex) {
                                          btnClass = "bg-[#00c853]/10 border-[#00c853]/30 text-[#00c853] text-left px-4 py-3 rounded-xl text-xs font-semibold flex items-center justify-between font-sans w-full";
                                        } else if (isSelected && !isCorrect) {
                                          btnClass = "bg-rose-50 border-rose-200 text-rose-500 text-left px-4 py-3 rounded-xl text-xs line-through font-sans w-full";
                                        } else {
                                          btnClass = "bg-[#f8fafc] border-slate-100 text-slate-400 text-left px-4 py-3 rounded-xl text-xs cursor-not-allowed font-sans w-full";
                                        }
                                      }

                                      return (
                                        <button
                                          key={oIdx}
                                          disabled={hasAnswered}
                                          onClick={() => handleQuizAnswer(mod.id, currentQIdx, oIdx)}
                                          className={btnClass}
                                        >
                                          <div className="flex items-center justify-between w-full">
                                            <span>
                                              <strong className="mr-1.5">{String.fromCharCode(65 + oIdx)})</strong>
                                              {opt}
                                            </span>
                                            {hasAnswered && oIdx === q.correctAnswerIndex && <Check className="h-4 w-4 text-[#00c853] shrink-0" />}
                                          </div>
                                        </button>
                                      );
                                    })}
                                  </div>

                                  {/* Explanation block */}
                                  {hasAnswered && (
                                    <motion.div 
                                      initial={{ opacity: 0, y: 5 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      className={`p-4 rounded-xl border text-[11px] font-sans mt-3 transition-all leading-relaxed ${
                                        isCorrect 
                                          ? "bg-emerald-50 border-emerald-100 text-emerald-800"
                                          : "bg-rose-50 border-rose-100 text-rose-800"
                                      }`}
                                    >
                                      <div className="flex items-start space-x-2">
                                        <span className="text-sm shrink-0">
                                          {isCorrect ? "🟢" : "🔴"}
                                        </span>
                                        <div>
                                          <p className="font-bold font-sans">
                                            {isCorrect 
                                              ? "Gabarito Correto!" 
                                              : userSelectedOption === -1 
                                                ? "O tempo acabou! Você perdeu esta pergunta." 
                                                : `Resposta Incorreta! A opção correta é a Letra ${String.fromCharCode(65 + q.correctAnswerIndex)}`}
                                          </p>
                                          {q.explanation && (
                                            <p className="mt-1 text-slate-600 font-medium">
                                              💡 <strong>Explicação:</strong> {q.explanation}
                                            </p>
                                          )}
                                        </div>
                                      </div>
                                    </motion.div>
                                  )}

                                  {/* Actions/Advance Button */}
                                  {hasAnswered && (
                                    <div className="flex justify-end pt-3">
                                      {currentQIdx < mod.quiz.length - 1 ? (
                                        <button
                                          onClick={() => {
                                            setActiveQuestionIdx(prev => ({ ...prev, [mod.id]: currentQIdx + 1 }));
                                            setTimeLeft(30);
                                          }}
                                          className="bg-[#1a237e] hover:bg-[#151c66] text-white px-5 py-2.5 rounded-xl text-xs font-bold font-sans cursor-pointer transition-colors flex items-center gap-1.5"
                                        >
                                          <span>Próxima Pergunta</span>
                                          <ArrowRight className="h-3.5 w-3.5" />
                                        </button>
                                      ) : (
                                        <button
                                          onClick={() => handleQuizSubmit(mod)}
                                          className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold font-sans cursor-pointer transition-colors flex items-center gap-1.5"
                                        >
                                          <span>Finalizar e Enviar Quiz</span>
                                          <Check className="h-3.5 w-3.5" />
                                        </button>
                                      )}
                                    </div>
                                  )}

                                </div>
                              </div>
                            );
                          } else {
                            // Standard full list view
                            return (
                              <div className="space-y-6 border-t border-slate-100 pt-4">
                                {mod.quiz.map((q, qIdx) => {
                                  const userSelectedOption = quizStates[mod.id]?.answers[qIdx];
                                  const submitted = quizStates[mod.id]?.submitted;
                                  const isCorrect = q.correctAnswerIndex === userSelectedOption;

                                  return (
                                    <div key={qIdx} className="space-y-2 border-b border-slate-150/40 pb-5 last:border-b-0 last:pb-0">
                                      <span className="text-[11px] font-semibold text-slate-700 block font-sans">
                                        Pergunta {qIdx + 1}: {q.question}
                                      </span>
                                      
                                      <div className="grid grid-cols-1 gap-2">
                                        {q.options.map((opt, oIdx) => {
                                          let btnClass = "bg-white border border-slate-200 text-slate-700 text-left px-3.5 py-2.5 rounded-lg text-xs hover:border-slate-300 transition-colors font-sans w-full cursor-pointer";
                                          const isSelected = userSelectedOption === oIdx;

                                          if (isSelected) {
                                            btnClass = "bg-indigo-50 border-[#1a237e] text-[#1a237e] text-left px-3.5 py-2.5 rounded-lg text-xs font-semibold font-sans w-full";
                                          }

                                          // After submission feedback overrides decoration
                                          if (submitted) {
                                            if (oIdx === q.correctAnswerIndex) {
                                              btnClass = "bg-[#00c853]/10 border-[#00c853]/30 text-[#00c853] text-left px-3.5 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-between font-sans w-full";
                                            } else if (isSelected && !isCorrect) {
                                              btnClass = "bg-rose-50 border-rose-200 text-rose-500 text-left px-3.5 py-2.5 rounded-lg text-xs line-through font-sans w-full";
                                            } else {
                                              btnClass = "bg-[#f8fafc] border-slate-100 text-slate-400 text-left px-3.5 py-2.5 rounded-lg text-xs cursor-not-allowed font-sans w-full";
                                            }
                                          }

                                          return (
                                            <button
                                              key={oIdx}
                                              disabled={submitted}
                                              onClick={() => handleQuizAnswer(mod.id, qIdx, oIdx)}
                                              className={btnClass}
                                            >
                                              <div className="flex items-center justify-between w-full">
                                                <span>
                                                  <strong className="mr-1.5">{String.fromCharCode(65 + oIdx)})</strong>
                                                  {opt}
                                                </span>
                                                {submitted && oIdx === q.correctAnswerIndex && <Check className="h-4 w-4 text-[#00c853] shrink-0" />}
                                              </div>
                                            </button>
                                          );
                                        })}
                                      </div>

                                      {/* Explanation block */}
                                      {userSelectedOption !== undefined && (
                                        <motion.div 
                                          initial={{ opacity: 0, y: 5 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          className={`p-3.5 rounded-xl border text-[11px] font-sans mt-3 transition-all leading-relaxed ${
                                            isCorrect 
                                              ? "bg-emerald-50 border-emerald-100 text-emerald-800"
                                              : "bg-rose-50 border-rose-100 text-rose-800"
                                          }`}
                                        >
                                          <div className="flex items-start space-x-2">
                                            <span className="text-sm shrink-0">
                                              {isCorrect ? "🟢" : "🔴"}
                                            </span>
                                            <div>
                                              <p className="font-bold font-sans">
                                                {isCorrect 
                                                  ? "Gabarito Correto!" 
                                                  : userSelectedOption === -1 
                                                    ? "O tempo acabou! Pergunta perdida." 
                                                    : `Resposta Incorreta! A opção correta é a Letra ${String.fromCharCode(65 + q.correctAnswerIndex)}`}
                                              </p>
                                              {q.explanation && (
                                                <p className="mt-1 text-slate-600 font-medium">
                                                  💡 <strong>Explicação:</strong> {q.explanation}
                                                </p>
                                              )}
                                            </div>
                                          </div>
                                        </motion.div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            );
                          }
                        })()}
                      </div>

                      {/* Control buttons of quiz */}
                      <div className="pt-2 flex items-center justify-between border-t border-slate-100 text-slate-500 text-xs font-sans">
                        {(() => {
                          const correctCount = getCorrectCount(mod.id);
                          const minRequired = mod.id === 1 ? 3 : mod.id === 2 ? 5 : mod.id === 3 ? 5 : Math.ceil(mod.quiz.length * 0.6);
                          const passed = correctCount >= minRequired;
                          return quizStates[mod.id]?.submitted ? (
                            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between w-full gap-4 pt-2">
                              <div className="flex flex-col gap-1 text-left">
                                <div className="flex items-center space-x-2">
                                  <span className="text-[11px] text-slate-600 font-sans">Seu Faturamento Retenção:</span>
                                  <span className={`px-2.5 py-1 rounded font-mono font-bold text-xs ${
                                    passed 
                                      ? "bg-[#00c853]/10 border border-[#00c853]/30 text-[#00c853]" 
                                      : "bg-rose-50 border border-rose-200 text-rose-600"
                                  }`}>
                                    {correctCount} de {mod.quiz.length} acertos ({quizStates[mod.id].score}%)
                                  </span>
                                </div>
                                <span className="text-[10px] text-slate-500 font-mono text-left">
                                  Tentativas realizadas: <strong className="text-indigo-600">{quizStates[mod.id].attempts || 1}</strong>
                                </span>
                              </div>
                              
                              <div className="flex items-center space-x-2 w-full sm:w-auto justify-between sm:justify-end">
                                {passed ? (
                                  <div className="flex items-center space-x-1 text-[#00c853] font-bold text-[11px] font-sans">
                                    <Award className="h-4 w-4 shrink-0" />
                                    <span>Módulo Validado! Certificado Liberado.</span>
                                  </div>
                                ) : (
                                  <div className="text-rose-500 text-[11px] font-sans">
                                    Tente novamente para atingir a meta mínima ({minRequired} acertos).
                                  </div>
                                )}
                                <button
                                  onClick={() => resetQuiz(mod.id)}
                                  className="bg-[#1a237e] hover:bg-[#151c66] text-white rounded-lg px-3.5 py-2 text-[11px] font-bold cursor-pointer transition-colors"
                                >
                                  Tentar de Novo
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div className="flex items-center justify-between w-full pt-2">
                              <span className="text-[10px] text-slate-400 font-sans">
                                {mod.id === 1 
                                  ? "Mínimo de 3 acertos (60%) para validar o módulo" 
                                  : mod.id === 2 
                                    ? "Mínimo de 5 acertos para validar o módulo e desbloquear o Módulo 3" 
                                    : `Mínimo de ${minRequired} acertos (${Math.round((minRequired / mod.quiz.length) * 100)}%) para validar o módulo`}
                              </span>
                              <button
                                onClick={() => handleQuizSubmit(mod)}
                                id={`submit-quiz-button-${mod.id}`}
                                className="bg-[#1a237e] hover:bg-[#151c66] text-white px-4 py-2 rounded-lg text-xs font-bold font-sans cursor-pointer transition-colors"
                              >
                                Enviar Respostas
                              </button>
                            </div>
                          );
                        })()}
                      </div>

                    </div>

                  </div>
                )}

              </div>
            );
          })}
        </div>
        
        {/* PROGRESS BADGE NOTIFIER */}
        <div className="max-w-4xl mx-auto mt-12 bg-white border border-slate-200 p-6 rounded-xl text-center space-y-4 shadow-sm">
          <Award className="h-10 w-10 text-[#00c853] mx-auto animate-bounce" />
          <h3 className="text-lg font-bold text-[#1a237e]">Prêmio Exclusivo de Formação Completa</h3>
          <p className="text-slate-600 text-xs max-w-lg mx-auto leading-relaxed font-sans">
            Ao concluir todas as {ACADEMY_MODULES.reduce((acc, m) => acc + m.lessons.length, 0)} aulas das trilhas de aprendizado e marcar o checklist de tarefas das lições, você desbloqueará um Certificado Digital com código de autenticidade único para comprovar suas competências na internet!
          </p>
          <div className="flex flex-col items-center gap-3 justify-center">
            <div className="inline-block bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 font-mono text-xs text-slate-700">
              Aulas Concluídas: <strong className="text-[#00c853] font-bold">{completedLessons.length}</strong> de <strong className="text-[#1a237e] font-bold">{ACADEMY_MODULES.reduce((acc, m) => acc + m.lessons.length, 0)}</strong>
            </div>
            
            {onNavigateToCertificate && (
              <button
                onClick={onNavigateToCertificate}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold cursor-pointer transition-all duration-300 shadow-sm ${
                  completedLessons.length >= ACADEMY_MODULES.reduce((acc, m) => acc + m.lessons.length, 0)
                    ? "bg-[#00c853] hover:bg-[#00a844] text-white hover:shadow-lg active:scale-98"
                    : "bg-[#1a237e] hover:bg-[#151c66] text-white hover:shadow-lg active:scale-98"
                }`}
              >
                {completedLessons.length >= ACADEMY_MODULES.reduce((acc, m) => acc + m.lessons.length, 0)
                  ? "🎉 Acessar Meu Certificado Liberado!"
                  : "Verificar Requisitos do Certificado 🎓"}
              </button>
            )}
          </div>
        </div>

      </div>

      <AnimatePresence>
        {showCongratsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCongratsModal(false)}
              className="absolute inset-0 bg-[#0c1033]/65 backdrop-blur-xs"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl border border-indigo-50 text-center space-y-6 overflow-hidden max-h-[90vh] overflow-y-auto z-10 animate-fade-in"
            >
              {/* Decorative background glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#00c853]/10 rounded-full blur-2xl pointer-events-none -z-10" />

              {/* Icon / Ribbon / Trophy */}
              <div className="relative inline-flex items-center justify-center">
                <div className="absolute inset-0 bg-[#00c853]/20 rounded-full animate-ping opacity-75" />
                <div className="bg-gradient-to-tr from-[#00c853] to-[#baffd0] p-5 rounded-full shadow-lg relative z-10 text-white">
                  <Award className="h-12 w-12 stroke-[2]" />
                </div>
              </div>

              {/* Congratulations text */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#00c853] uppercase bg-[#00c853]/10 px-3 py-1 rounded-full border border-[#00c853]/20">
                  🎉 conquista desbloqueada
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a237e] tracking-tight leading-tight">
                  MÓDULO 1 CONCLUÍDO!
                </h2>
                <p className="text-slate-500 font-medium text-xs">
                  Você dominou a base estratégica e configurou sua fundação profissional!
                </p>
              </div>

              {/* Complete Items summary card */}
              <div className="bg-[#f8fafc] border border-indigo-50/50 p-5 rounded-2xl text-left space-y-3.5">
                <h4 className="text-[11px] font-bold text-[#1a237e] uppercase tracking-wider flex items-center gap-1.5 border-b border-indigo-100 pb-2 font-sans">
                  <CheckCircle2 className="h-4 w-4 text-[#00c853]" /> {module1Lessons.length} Lições de Fundação Consolidadas:
                </h4>
                <div className="space-y-3 font-sans max-h-56 overflow-y-auto pr-1">
                  {module1Lessons.map((lesson, idx) => (
                    <div key={lesson.id} className="flex items-start gap-2.5 text-xs border-b border-slate-100 pb-2 last:border-b-0 last:pb-0">
                      <span className="text-[#00c853] font-bold shrink-0 mt-0.5">✓</span>
                      <div>
                        <p className="font-bold text-slate-800 leading-none">Lição {idx + 1}: {lesson.title}</p>
                        <p className="text-[10px] text-slate-500 mt-1 font-sans line-clamp-1">{lesson.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special message/badge indicator */}
              <div className="flex items-center justify-center gap-2 text-amber-500 font-bold font-sans text-xs bg-amber-500/10 border border-amber-500/20 py-2.5 px-4 rounded-xl">
                <span>🏆</span>
                <span>Badge Desbloqueado: Empreendedor Iniciante Elite</span>
              </div>

              {/* Actions panel */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => setShowCongratsModal(false)}
                  className="flex-1 border border-slate-200 hover:border-slate-300 text-slate-600 bg-white py-3 rounded-xl text-xs font-bold cursor-pointer transition-colors"
                >
                  Continuar Explorando
                </button>
                <button
                  onClick={() => {
                    setShowCongratsModal(false);
                    // Expand and scroll to module 2
                    setExpandedModuleId(2);
                    setTimeout(() => {
                      const el = document.getElementById("module-card-2");
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth", block: "center" });
                      }
                    }, 100);
                  }}
                  className="flex-1 bg-[#1a237e] hover:bg-[#151c66] text-white py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-md transition-all active:scale-[0.98]"
                >
                  <span>Ir para o Módulo 2</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {showM3Celebration && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowM3Celebration(false)}
              className="absolute inset-0 bg-[#0c1033]/70 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="relative bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl border border-indigo-100 text-center space-y-6 overflow-hidden max-h-[90vh] overflow-y-auto z-10 font-sans"
            >
              {/* Decorative background glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

              {/* Trophy icon */}
              <div className="relative inline-flex items-center justify-center">
                <div className="absolute inset-0 bg-emerald-500/20 rounded-full animate-ping opacity-75" />
                <div className="bg-gradient-to-tr from-emerald-500 to-[#00e676] p-5 rounded-full shadow-lg relative z-10 text-white">
                  <Award className="h-14 w-14 stroke-[2]" />
                </div>
              </div>

              {/* Celebration Text */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-600 uppercase bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                  🏆 Conquista de Elite: Módulo 3 Concluído!
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#1a237e] tracking-tight leading-tight">
                  ESPECIALISTA EM AFILIADOS!
                </h2>
                <p className="text-slate-600 font-medium text-xs leading-relaxed max-w-sm mx-auto">
                  Você concluiu o módulo de marketing de afiliados, dominou técnicas de vendas e agora liberou o caminho para a criação do seu próprio império de conteúdo!
                </p>
              </div>

              {/* Celebration Details Box */}
              <div className="bg-slate-50 border border-slate-150 p-5 rounded-2xl text-left space-y-2">
                <h4 className="text-[11px] font-bold text-[#1a237e] uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-200 pb-2">
                  <span>🚀</span> Seu Próximo Grande Passo: Módulo 4
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  No <strong>Módulo 4: Criação de Conteúdo Profissional</strong>, você aprenderá a atrair um público altamente qualificado, escolher o nicho perfeito de alto posicionamento e transformar seguidores em clientes recorrentes!
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => setShowM3Celebration(false)}
                  className="flex-1 border border-slate-200 hover:border-slate-300 text-slate-600 bg-white py-3.5 rounded-xl text-xs font-bold cursor-pointer transition-colors"
                >
                  Continuar Explorando
                </button>
                <button
                  onClick={() => {
                    setShowM3Celebration(false);
                    // Expand and scroll to module 4
                    setExpandedModuleId(4);
                    setTimeout(() => {
                      const el = document.getElementById("module-card-4");
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth", block: "center" });
                      }
                    }, 100);
                  }}
                  className="flex-1 bg-[#1a237e] hover:bg-[#151c66] text-white py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-md transition-all active:scale-[0.98]"
                >
                  <span>Ir para o Módulo 4 🚀</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {showM4Celebration && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowM4Celebration(false)}
              className="absolute inset-0 bg-[#0c1033]/70 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="relative bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl border border-indigo-100 text-center space-y-6 overflow-hidden max-h-[90vh] overflow-y-auto z-10 font-sans"
            >
              {/* Decorative background glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

              {/* Special Animated Icon */}
              <div className="relative inline-flex items-center justify-center">
                <div className="absolute inset-0 bg-indigo-500/20 rounded-full animate-ping opacity-75" />
                <div className="bg-gradient-to-tr from-[#1a237e] to-[#3949ab] p-5 rounded-full shadow-lg relative z-10 text-white">
                  <Award className="h-14 w-14 stroke-[2]" />
                </div>
              </div>

              {/* Quiz results */}
              {(() => {
                const count = getCorrectCount(4);
                const isPerfect = count === 7;
                return (
                  <div className="space-y-4">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#1a237e] uppercase bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100">
                      🏆 RESULTADO DO QUIZ: {count} de 7 ACERTOS
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-[#1a237e] tracking-tight leading-tight">
                      {isPerfect ? "Incrível! Módulo 5 desbloqueado! 🎉" : "Muito bem! 💪 Módulo 5 desbloqueado!"}
                    </h2>
                    <p className="text-slate-600 font-medium text-xs leading-relaxed max-w-sm mx-auto">
                      {isPerfect 
                        ? "Você dominou criação de conteúdo profissional e está pronto pro nível mais avançado do curso."
                        : "Quase lá. Revise as lições das perguntas que errou e tente novamente para buscar o gabarito de elite!"}
                    </p>
                  </div>
                );
              })()}

              {/* Progress Tracker (4 of 5 modules completed) */}
              <div className="bg-slate-50 border border-slate-150 p-5 rounded-2xl text-left space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1a237e] uppercase tracking-wider">
                    Progresso Geral do Curso
                  </span>
                  <span className="text-xs font-mono font-bold text-[#00c853]">
                    4 de 5 Módulos Concluídos
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3.5 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-gradient-to-r from-[#1a237e] to-[#00c853] h-full rounded-full"
                  />
                </div>
                <p className="text-[11px] text-[#1a237e] font-semibold italic text-center pt-1">
                  "Você está quase lá — só mais um módulo pra concluir o curso completo!"
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => setShowM4Celebration(false)}
                  className="flex-1 border border-slate-200 hover:border-slate-300 text-slate-600 bg-white py-3.5 rounded-xl text-xs font-bold cursor-pointer transition-colors"
                >
                  Ver Meu Desempenho
                </button>
                <button
                  onClick={() => {
                    setShowM4Celebration(false);
                    // Expand and scroll to module 5
                    setExpandedModuleId(5);
                    setTimeout(() => {
                      const el = document.getElementById("module-card-5");
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth", block: "center" });
                      }
                    }, 100);
                  }}
                  className="flex-1 bg-[#00c853] hover:bg-[#00b24a] text-white py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-md transition-all active:scale-[0.98]"
                >
                  <span>Ir para o Módulo 5 🚀</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {lockErrorMessage && (
          <div className="fixed bottom-6 right-6 z-50 p-1">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900 border border-amber-500/30 text-white rounded-2xl p-4 shadow-2xl flex items-start space-x-3 w-80 max-w-sm font-sans"
            >
              <span className="text-lg shrink-0 leading-none">⚠️</span>
              <div className="flex-1">
                <p className="text-xs font-bold text-amber-400">Aviso da Trilha</p>
                <p className="text-[11px] text-slate-200 mt-1 leading-relaxed font-sans">{lockErrorMessage}</p>
              </div>
              <button 
                onClick={() => setLockErrorMessage(null)} 
                className="text-slate-400 hover:text-white text-[10px] uppercase font-bold shrink-0 font-sans cursor-pointer self-start ml-1"
              >
                FECHAR
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
