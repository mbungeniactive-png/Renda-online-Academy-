/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { 
  TrendingUp, 
  Menu, 
  X, 
  Search, 
  BookOpen, 
  Award, 
  Lightbulb, 
  CheckCircle2 
} from "lucide-react";
import { BLOG_POSTS, ACADEMY_MODULES } from "../data";

interface HeaderProps {
  currentRoute: string;
  setRoute: (route: string) => void;
  completedLessonsCount: number;
  totalLessonsCount: number;
  onSearchResultSelect: (type: "blog" | "lesson", idOrSlug: string, moduleId?: number) => void;
}

export default function Header({
  currentRoute,
  setRoute,
  completedLessonsCount,
  totalLessonsCount,
  onSearchResultSelect
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const progressPercentage = totalLessonsCount > 0 
    ? Math.round((completedLessonsCount / totalLessonsCount) * 100) 
    : 0;

  // Handle click outside to close search suggestions
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter search results
  const filteredArticles = searchQuery.trim() === "" 
    ? [] 
    : BLOG_POSTS.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 3);

  const filteredLessons: Array<{ moduleId: number; moduleTitle: string; lessonId: string; lessonTitle: string }> = [];
  if (searchQuery.trim() !== "") {
    ACADEMY_MODULES.forEach(mod => {
      mod.lessons.forEach(les => {
        if (
          les.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          les.content.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          filteredLessons.push({
            moduleId: mod.id,
            moduleTitle: mod.title,
            lessonId: les.id,
            lessonTitle: les.title
          });
        }
      });
    });
  }
  const slicedFilteredLessons = filteredLessons.slice(0, 3);

  const hasResults = filteredArticles.length > 0 || slicedFilteredLessons.length > 0;

  const navItems = [
    { id: "home", label: "Início" },
    { id: "trilha", label: "Trilhas de Aprendizado" },
    { id: "tiktok-playbook", label: "Manual TikTok" },
    { id: "blog", label: "Artigos" },
    { id: "calculadora", label: "Calculadora" },
    { id: "certificado", label: "Certificado 🎓" },
    { id: "sobre-contato", label: "Quem Somos / Contato" },
    { id: "configuracoes", label: "Configurações" }
  ];

  const handleSuggestionClick = (type: "blog" | "lesson", idOrSlug: string, moduleId?: number) => {
    setSearchQuery("");
    setShowSuggestions(false);
    onSearchResultSelect(type, idOrSlug, moduleId);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-navy border-b border-indigo-950 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO */}
          <div 
            className="flex items-center space-x-3 cursor-pointer select-none"
            onClick={() => { setRoute("home"); setMobileMenuOpen(false); }}
            id="nav-logo"
          >
            <div className="bg-brand-green p-2.5 rounded-lg text-white shadow shadow-brand-green/20 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="font-extrabold text-base md:text-lg tracking-tight text-white uppercase block leading-none">
                RENDA ONLINE
              </span>
              <span className="block text-[8px] md:text-[9px] font-mono tracking-widest text-[#00c853] text-left font-bold uppercase mt-1">
                ACADEMY
              </span>
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex space-x-1">
            {navItems.map((item) => {
              const isActive = currentRoute === item.id || (item.id === "sobre-contato" && (currentRoute === "sobre" || currentRoute === "contato"));
              return (
                <button
                  key={item.id}
                  id={`nav-${item.id}`}
                  onClick={() => setRoute(item.id)}
                  className={`px-3.5 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? "text-brand-green border-b-2 border-brand-green font-bold bg-white/5" 
                      : "text-white/85 hover:text-brand-green hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* INTERNAL SEARCH BAR */}
          <div ref={searchRef} className="hidden md:block relative w-64 lg:w-72">
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquisar lição ou artigo..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                className="w-full bg-white/10 border border-white/20 rounded-full pl-10 pr-4 py-2 text-xs text-white placeholder-white/50 focus:outline-none focus:bg-white/15 focus:border-[#00c853] transition-all duration-200"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-white/50" />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-2.5 text-xs text-white/40 hover:text-white"
                >
                  Limpar
                </button>
              )}
            </div>

            {/* SEARCH RESULTS POPOVER */}
            {showSuggestions && searchQuery.trim() !== "" && (
              <div className="absolute right-0 mt-2 w-80 bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden z-50 text-slate-800">
                <div className="p-3 bg-slate-50 border-b border-slate-100">
                  <span className="text-[10px] font-bold tracking-widest text-[#1a237e] uppercase">
                    Resultados da Busca
                  </span>
                </div>
                
                <div className="max-h-96 overflow-y-auto divide-y divide-slate-100">
                  {/* Article suggestions */}
                  {filteredArticles.length > 0 && (
                    <div className="p-2">
                      <div className="px-2 py-1 text-[10px] font-semibold text-[#1a237e] uppercase">
                        Artigos do Blog
                      </div>
                      {filteredArticles.map(post => (
                        <button
                          key={post.slug}
                          onClick={() => handleSuggestionClick("blog", post.slug)}
                          className="w-full text-left p-2 rounded-lg hover:bg-slate-50 flex items-start space-x-2 transition-colors duration-150"
                        >
                          <BookOpen className="h-4 w-4 text-[#1a237e] mt-0.5 shrink-0" />
                          <div>
                            <div className="text-xs font-semibold text-slate-800 line-clamp-1">{post.title}</div>
                            <div className="text-[10px] text-slate-500 line-clamp-1">{post.excerpt}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Lesson suggestions */}
                  {slicedFilteredLessons.length > 0 && (
                    <div className="p-2">
                      <div className="px-2 py-1 text-[10px] font-semibold text-[#00c853] uppercase">
                        Módulos da Trilha
                      </div>
                      {slicedFilteredLessons.map(les => (
                        <button
                          key={les.lessonId}
                          onClick={() => handleSuggestionClick("lesson", les.lessonId, les.moduleId)}
                          className="w-full text-left p-2 rounded-lg hover:bg-slate-50 flex items-start space-x-2 transition-colors duration-150"
                        >
                          <Lightbulb className="h-4 w-4 text-[#00c853] mt-0.5 shrink-0" />
                          <div>
                            <div className="text-xs font-semibold text-slate-800 line-clamp-1">{les.lessonTitle}</div>
                            <div className="text-[10px] text-slate-500 line-clamp-1">{les.moduleTitle}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {!hasResults && (
                    <div className="p-4 text-center text-xs text-slate-400">
                      Nenhum resultado para "{searchQuery}"
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* PROGRESS INDICATOR */}
          <div className="hidden lg:flex items-center space-x-3 bg-black/15 border border-white/10 rounded-xl px-4 py-2">
            <div className="flex flex-col items-end">
              <span className="text-[9px] font-mono tracking-wider text-white/70 uppercase">
                Seu Progresso
              </span>
              <span className="text-xs font-bold text-white">
                {completedLessonsCount}/{totalLessonsCount} Aulas concluídas
              </span>
            </div>
            <div className="relative w-12 h-12 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                {/* Background circle */}
                <circle
                  cx="24"
                  cy="24"
                  r="19"
                  className="stroke-indigo-950"
                  strokeWidth="3.5"
                  fill="transparent"
                />
                {/* Foreground progress circle */}
                <circle
                  cx="24"
                  cy="24"
                  r="19"
                  className="stroke-[#00c853] transition-all duration-500 ease-out"
                  strokeWidth="3.5"
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 19}`}
                  strokeDashoffset={`${2 * Math.PI * 19 * (1 - progressPercentage / 100)}`}
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute text-[9px] font-mono font-bold text-[#00c853] text-center">
                {progressPercentage}%
              </span>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-navy border-t border-indigo-950 px-4 pt-3 pb-6 space-y-3">
          {/* SEARCH BAR FOR MOBILE */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Pesquisar lição ou artigo..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-2 text-xs text-white placeholder-white/40 focus:outline-none"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-white/50" />
            {showSuggestions && searchQuery.trim() !== "" && (
              <div className="absolute left-0 mt-2 w-full bg-white border border-slate-200 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto divide-y divide-slate-150 text-slate-800">
                {filteredArticles.map(post => (
                  <button
                    key={post.slug}
                    onClick={() => {
                      handleSuggestionClick("blog", post.slug);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left p-3 hover:bg-slate-50 block"
                  >
                    <span className="text-[10px] font-bold text-[#1a237e] block uppercase">Artigo</span>
                    <span className="text-xs font-semibold text-slate-800">{post.title}</span>
                  </button>
                ))}
                {slicedFilteredLessons.map(les => (
                  <button
                    key={les.lessonId}
                    onClick={() => {
                      handleSuggestionClick("lesson", les.lessonId, les.moduleId);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left p-3 hover:bg-slate-50 block"
                  >
                    <span className="text-[10px] font-bold text-[#00c853] block uppercase">Lição da Trilha</span>
                    <span className="text-xs font-semibold text-slate-800">{les.lessonTitle}</span>
                  </button>
                ))}
                {!hasResults && (
                  <div className="p-3 text-center text-xs text-slate-400">Nenhum resultado correspondente</div>
                )}
              </div>
            )}
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = currentRoute === item.id || (item.id === "sobre-contato" && (currentRoute === "sobre" || currentRoute === "contato"));
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setRoute(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    isActive 
                      ? "bg-white/10 text-[#00c853] font-bold border-l-4 border-[#00c853]" 
                      : "text-white/80 hover:text-[#00c853] hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* MOBILE PROGRESS INDICATOR STATUS */}
          <div className="pt-4 border-t border-indigo-900 flex items-center justify-between">
            <span className="text-xs text-white/75">Progresso Geral das Aulas</span>
            <span className="text-xs font-mono font-bold text-[#00c853] bg-black/20 border border-white/10 px-2 py-1 rounded">
              {completedLessonsCount}/{totalLessonsCount} ({progressPercentage}%)
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
