/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import LearningPath from "./components/LearningPath";
import TikTokPlaybook from "./components/TikTokPlaybook";
import Blog from "./components/Blog";
import Calculator from "./components/Calculator";
import AboutContact from "./components/AboutContact";
import Legal from "./components/Legal";
import Settings from "./components/Settings";
import CertificateUnit from "./components/CertificateUnit";
import TikTokAlgorithmGuide from "./components/TikTokAlgorithmGuide";
import AdsterraSkyscraper from "./components/AdsterraSkyscraper";
import AdsterraLeaderboard from "./components/AdsterraLeaderboard";
import { ACADEMY_MODULES } from "./data";
import { MessageCircle, ArrowUp, Mail } from "lucide-react";

export default function App() {
  const [route, setRoute] = useState<string>("home");
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [selectedArticleSlug, setSelectedArticleSlug] = useState<string | undefined>(undefined);
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);

  // Load completed lessons from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("renda-online-completed-lessons");
    if (saved) {
      try {
        setCompletedLessons(JSON.parse(saved));
      } catch (err) {
        console.error("Erro ao carregar o progresso do aluno:", err);
      }
    }
  }, []);

  // Total lessons across all modules
  const totalLessonsCount = ACADEMY_MODULES.reduce(
    (acc, m) => acc + m.lessons.length, 
    0
  );

  // Toggle lesson completed state
  const toggleLessonComplete = (lessonId: string) => {
    setCompletedLessons((prev) => {
      const updated = prev.includes(lessonId)
        ? prev.filter((id) => id !== lessonId)
        : [...prev, lessonId];
      
      localStorage.setItem("renda-online-completed-lessons", JSON.stringify(updated));
      return updated;
    });
  };

  const handleResetProgress = () => {
    setCompletedLessons([]);
    localStorage.removeItem("renda-online-completed-lessons");
  };

  // Click handler from header search redirects directly
  const handleSearchResultSelect = (
    type: "blog" | "lesson", 
    idOrSlug: string, 
    moduleId?: number
  ) => {
    if (type === "blog") {
      setSelectedArticleSlug(idOrSlug);
      setRoute("blog");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (type === "lesson") {
      setRoute("trilha");
      setActiveLessonId(idOrSlug);
      window.scrollTo({ top: 350, behavior: "smooth" });
    }
  };

  // Scroll to Top utility
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Support email click handler
  const handleEmailClick = () => {
    window.open("mailto:academyrendaonline@gmail.com?subject=D%C3%BAvida%20Renda%20Online%20Academy", "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc] font-sans text-slate-800 selection:bg-[#00c853] selection:text-white">
      
      {/* GLOBAL ACADEMY HEADER */}
      <Header
        currentRoute={route}
        setRoute={(newRoute) => {
          setRoute(newRoute);
          setSelectedArticleSlug(undefined); // Clear deep article state when navbar is clicked
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        completedLessonsCount={completedLessons.length}
        totalLessonsCount={totalLessonsCount}
        onSearchResultSelect={handleSearchResultSelect}
      />

      {/* ADSTERRA LEADERBOARD BANNER */}
      <div className="max-w-7xl mx-auto w-full flex justify-center pt-2">
        <AdsterraLeaderboard />
      </div>

      {/* CORE CONTENT ROUTER */}
      <main className="flex-grow">
        {route === "home" && <Home setRoute={(newRoute) => { setRoute(newRoute); window.scrollTo({ top: 0, behavior: "smooth" }); }} />}
        
        {route === "trilha" && (
          <LearningPath
            completedLessons={completedLessons}
            toggleLessonComplete={toggleLessonComplete}
            activeLessonId={activeLessonId}
            setActiveLessonId={setActiveLessonId}
            onNavigateToCertificate={() => {
              setRoute("certificado");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        )}
        
        {route === "tiktok-playbook" && (
          <TikTokPlaybook />
        )}
        
        {route === "algoritmo-tiktok" && (
          <TikTokAlgorithmGuide />
        )}
        
        {route === "blog" && (
          <Blog
            selectedSlug={selectedArticleSlug}
            onPostSelect={(slug) => {
              setSelectedArticleSlug(slug);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onBackToList={() => {
              setSelectedArticleSlug(undefined);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        )}
        
        {route === "calculadora" && <Calculator />}
        
        {(route === "sobre-contato" || route === "sobre" || route === "contato") && (
          <AboutContact />
        )}
        
        {route === "configuracoes" && (
          <Settings 
            completedLessonsCount={completedLessons.length}
            totalLessonsCount={totalLessonsCount}
            onResetProgress={handleResetProgress}
          />
        )}

        {route === "certificado" && (
          <CertificateUnit 
            completedLessons={completedLessons}
            totalLessonsCount={totalLessonsCount}
            onNavigateToTrilha={() => {
              setRoute("trilha");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        )}
        
        {route === "privacidade" && <Legal pageType="privacidade" />}
        {route === "termos" && <Legal pageType="termos" />}
      </main>

      {/* FLOATING EMAIL SUPPORT BUTTON */}
      <button
        onClick={handleEmailClick}
        className="fixed bottom-6 right-6 z-40 bg-[#1a237e] hover:bg-[#151c66] text-white p-4 rounded-2xl border-2 border-[#1a237e]/50 hover:border-white shadow-xl hover:shadow-2xl hover:shadow-[#1a237e]/60 hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer group"
        title="Enviar E-mail de Suporte"
        id="email-floating-button"
      >
        <Mail className="h-6 w-6 stroke-[2.5]" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out text-xs font-bold font-sans tracking-wide whitespace-nowrap pl-0 group-hover:pl-2">
          Suporte por E-mail
        </span>
      </button>

      {/* COMPLIANT COOKIE RETENTION LIGHT NOTIFICATION BANNER */}
      <div className="fixed bottom-6 left-6 z-40 max-w-sm p-4 bg-white border border-slate-200 rounded-xl shadow-xl flex flex-col gap-2.5">
        <span className="text-[10px] font-semibold text-slate-650 leading-relaxed font-sans">
          🍪 <strong className="text-[#1a237e]">Política de Cookies:</strong> Nós e nossos parceiros usamos cookies para melhorar sua experiência educacional e personalizar os anúncios exibidos.
        </span>
        <div className="flex gap-2 font-sans">
          <button 
            onClick={(e) => {
              // Hide cookie compliance easily
              const parent = e.currentTarget.parentElement?.parentElement;
              if (parent) parent.style.display = "none";
            }}
            className="bg-[#1a237e] hover:bg-[#151c66] text-white text-[10px] font-extrabold px-3 py-1.5 rounded-lg cursor-pointer transition-colors shadow-sm"
          >
            Aceitar Todos
          </button>
          <button 
            onClick={() => setRoute("privacidade")}
            className="text-slate-500 hover:text-[#1a237e] text-[10px] underline cursor-pointer font-medium"
          >
            Saber Mais
          </button>
        </div>
      </div>

      {/* SCROLL TO TOP UTILITY */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-24 right-7 z-40 bg-white hover:bg-slate-50 text-slate-500 hover:text-[#1a237e] p-3 rounded-full shadow-md border border-slate-150 hover:scale-105 transition-all text-xs cursor-pointer"
        title="Voltar ao Topo"
      >
        <ArrowUp className="h-4 w-4" />
      </button>

      {/* FIXED ADSTERRA SKYSCRAPER SIDES (Only visible on wide desktop layouts) */}
      <div className="hidden 2xl:block fixed left-4 top-36 z-30">
        <AdsterraSkyscraper />
      </div>
      <div className="hidden 2xl:block fixed right-4 top-36 z-30">
        <AdsterraSkyscraper />
      </div>

      {/* GLOBAL FOOTER COMPONENT */}
      <Footer setRoute={(newRoute) => {
        setRoute(newRoute);
        setSelectedArticleSlug(undefined); // Reset deep states
        window.scrollTo({ top: 0, behavior: "smooth" });
      }} />

    </div>
  );
}
