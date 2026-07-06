/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Search, 
  Share2, 
  MessageSquare, 
  Heart, 
  Send,
  Star,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";
import { BLOG_POSTS } from "../data";
import { BlogPost } from "../types";
import PremiumPromoUnit from "./PremiumPromoUnit";

export interface BlogProps {
  selectedSlug?: string;
  onPostSelect?: (slug: string) => void;
  onBackToList?: () => void;
}

export default function Blog({
  selectedSlug,
  onPostSelect,
  onBackToList
}: BlogProps) {
  const [activeSlug, setActiveSlug] = useState<string | null>(selectedSlug || null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");
  
  // Custom Comment Form states
  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [commentSubmitted, setCommentSubmitted] = useState(false);
  const [likedList, setLikedList] = useState<Record<string, boolean>>({});

  const categories = ["todos", "Marketing de Afiliados", "Trabalho Remoto", "Produtos Digitais", "Criação de Conteúdo", "Redes Social"];

  // Sync state if prop changes from external search selection
  React.useEffect(() => {
    if (selectedSlug) {
      setActiveSlug(selectedSlug);
    }
  }, [selectedSlug]);

  const handlePostClick = (slug: string) => {
    setActiveSlug(slug);
    setCommentSubmitted(false);
    setCommentName("");
    setCommentText("");
    if (onPostSelect) onPostSelect(slug);
  };

  const handleBack = () => {
    setActiveSlug(null);
    if (onBackToList) onBackToList();
  };

  const toggleLike = (slug: string) => {
    setLikedList(prev => ({
      ...prev,
      [slug]: !prev[slug]
    }));
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentName.trim() !== "" && commentText.trim() !== "") {
      setCommentSubmitted(true);
    }
  };

  // Filter strategy
  const displayedPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    // exact or partial category match
    const categoryQuery = selectedCategory === "todos" 
      ? true 
      : post.category.toLowerCase().includes(selectedCategory.toLowerCase().slice(0, 8)); // fuzzy match for "Redes Social"
      
    return matchesSearch && categoryQuery;
  });

  const activePost = BLOG_POSTS.find(post => post.slug === activeSlug);

  return (
    <div className="bg-[#f8fafc] text-slate-800 min-h-screen py-16" id="blog-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {activePost ? (
          
          /* VIEWING A SINGLE DETAILED ARTICLE CONTAINER */
          <div className="max-w-4xl mx-auto space-y-8" id={`article-${activePost.slug}`}>
            
            {/* BACK TO LIST BUTTON */}
            <button 
              onClick={handleBack}
              className="inline-flex items-center space-x-2 text-xs font-bold text-[#1a237e] hover:text-[#151c66] py-2 border border-slate-200 bg-white rounded-lg px-4 shadow-sm cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Voltar para Lista de Artigos</span>
            </button>

            {/* ARTICLE HERO */}
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-[#1a237e]/10 border border-[#1a237e]/20 text-[#1a237e] font-mono text-[10px] font-bold uppercase rounded-full font-sans">
                {activePost.category}
              </span>
              
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1a237e] leading-snug">
                {activePost.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2 border-b border-slate-100 pb-4">
                <div className="flex items-center space-x-1.5">
                  <Calendar className="h-4 w-4 text-[#00c853] shrink-0" />
                  <span>{activePost.publishedDate}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Clock className="h-4 w-4 text-[#00c853] shrink-0" />
                  <span>{activePost.readTime}</span>
                </div>
                <div className="ml-auto flex items-center gap-3">
                  <button 
                    onClick={() => toggleLike(activePost.slug)}
                    className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md border cursor-pointer ${
                      likedList[activePost.slug] 
                        ? "text-rose-600 border-rose-200 bg-[#fff1f2]" 
                        : "text-slate-500 border-slate-200 hover:text-rose-600 hover:bg-rose-50 bg-white shadow-sm"
                    }`}
                  >
                    <Heart className={`h-3.5 w-3.5 ${likedList[activePost.slug] ? "fill-rose-500 text-rose-500" : ""}`} />
                    <span>{likedList[activePost.slug] ? "Gostou!" : "Curtir Artigo"}</span>
                  </button>
                  <button 
                    onClick={() => alert("Link de compartilhamento copiado para sua área de transferência!")}
                    className="p-1 px-1.5 text-slate-500 hover:text-[#00c853] border border-slate-200 bg-white rounded shadow-sm cursor-pointer"
                    title="Compartilhar"
                  >
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* MAIN IMAGE BANNER */}
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-sm relative border border-slate-100">
              <img 
                src={activePost.imageUrl} 
                alt={activePost.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* DOUBLE GRID LAYOUT: ARTICLE BODY + PROMO SIDEBAR */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              
              {/* POST CONTENT BODY (COLSPAN 2) */}
              <div className="lg:col-span-2 space-y-6 text-sm text-slate-700 leading-relaxed font-sans" id="article-prose">
                {activePost.content.map((paragraph, pIdx) => {
                  // If paragraph starts with heading tags, style it nicely!
                  if (paragraph.startsWith("###")) {
                    return (
                      <h3 key={pIdx} className="text-md font-bold text-[#1a237e] pt-6 border-b border-slate-150 pb-1 flex items-center font-sans">
                        <span className="w-1.5 h-4.5 bg-[#00c853] rounded mr-2 inline-block shrink-0"></span>
                        {paragraph.replace("###", "").trim()}
                      </h3>
                    );
                  }
                  
                  if (paragraph.startsWith("####")) {
                    return (
                      <h4 key={pIdx} className="text-sm font-bold text-[#00c853] pt-4 pb-0.5 font-sans">
                        {paragraph.replace("####", "").trim()}
                      </h4>
                    );
                  }

                  // Bullet lists parsing
                  if (paragraph.includes("\n*")) {
                    const lines = paragraph.split("\n*").map(s => s.trim()).filter(Boolean);
                    const introText = lines[0].endsWith(":") ? lines[0] : "";
                    const listItems = introText ? lines.slice(1) : lines;

                    return (
                      <div key={pIdx} className="space-y-2">
                        {introText && <p>{introText}</p>}
                        <ul className="list-disc pl-5 space-y-2 text-xs text-slate-600 bg-slate-50 p-3.5 border border-slate-150 rounded-lg font-sans">
                          {listItems.map((item, itemIdx) => {
                            // Extract bold texts like **Title**: Content
                            const formattedItem = item.split("**").map((part, partIdx) => {
                              if (partIdx % 2 === 1) return <strong key={partIdx} className="text-slate-900 font-bold">{part}</strong>;
                              return part;
                            });
                            return <li key={itemIdx}>{formattedItem}</li>;
                          })}
                        </ul>
                      </div>
                    );
                  }

                  // Split bold text markers **bold**
                  const parts = paragraph.split("**");
                  const formattedParagraph = parts.map((part, index) => {
                    // Odd indices are surrounded by **
                    if (index % 2 === 1) {
                      return <strong key={index} className="text-[#1a237e] font-extrabold">{part}</strong>;
                    }
                    return part;
                  });

                  return (
                    <p key={pIdx} className="text-xs sm:text-sm text-slate-700 leading-relaxed antialiased font-sans">
                      {formattedParagraph}
                    </p>
                  );
                })}

                {/* INTEGRATED HORIZONTAL PROMO BANNER */}
                <div className="py-6 border-t border-b border-slate-100 text-center">
                  <span className="text-[8px] font-mono tracking-widest text-slate-400 uppercase font-bold mb-1 block">
                    Espaço Reservado (468x60)
                  </span>
                  <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-lg h-[60px] flex items-center justify-center text-xs text-slate-600 font-mono">
                    Hospedagem Hostgator® Recargável por R$ 9.90/mês
                  </div>
                </div>

                {/* SIGN OFF WARNING */}
                <div className="bg-[#1a237e]/5 border border-[#1a237e]/15 p-5 rounded-xl space-y-2">
                  <div className="flex items-center space-x-2 text-[#1a237e]">
                    <AlertTriangle className="h-5 w-5 text-[#1a237e]" />
                    <span className="text-xs font-bold uppercase tracking-wide">Aviso de Garantias Legais</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-sans">
                    A renda online de afiliado, produtor ou freelancer qualificado oscila conforme a complexidade comercial executada individualmente. Este material foca em competências curriculares teóricas e técnicas oficiais, isentando o portal de responsabilidades por perdas, lucros malsucedidos ou penalidades tributárias pessoais.
                  </p>
                </div>

                {/* COMMENTS SECTION */}
                <div className="border-t border-slate-200 pt-8 mt-12 space-y-6">
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5 text-[#00c853]" />
                    <h3 className="text-sm font-bold text-[#1a237e] uppercase tracking-wider">
                      Comentários do Artigo
                    </h3>
                  </div>

                  {commentSubmitted ? (
                    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-[#00c853] text-xs font-sans">
                      <CheckCircle2 className="h-5 w-5 text-[#00c853] mb-1 inline" />
                      <strong> Comentário enviado com sucesso!</strong>
                      <p className="text-[10px] text-slate-600 mt-1">
                        Para preservar a integridade contra spams agressivos em nosso portal, seu comentário passará por auditoria de moderação manual antes de entrar no ar. Agradecemos sua valiosa colaboração!
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleCommentSubmit} className="space-y-4 bg-slate-50 border border-slate-200 p-5 rounded-lg">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="text-[10px] text-slate-500 uppercase font-mono block mb-1 font-sans font-medium">Seu Nome</label>
                          <input 
                            type="text"
                            required
                            placeholder="Ex: Pedro Silva"
                            value={commentName}
                            onChange={(e) => setCommentName(e.target.value)}
                            className="w-full bg-white border border-slate-200 roundedpx px-3 py-2 text-xs text-slate-800 focus:outline-[#1a237e] focus:border-[#1a237e] rounded-lg"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-500 uppercase font-mono block mb-1 font-sans font-medium">Sua Pergunta ou Feedback</label>
                        <textarea 
                          required
                          rows={3}
                          placeholder="Digite aqui o que achou deste tutorial..."
                          value={commentText}
                          onChange={(e) => setCommentText(e.target.value)}
                          className="w-full bg-white border border-slate-200 roundedpx px-3 py-2 text-xs text-slate-800 focus:outline-[#1a237e] focus:border-[#1a237e] rounded-lg"
                        />
                      </div>
                      <button
                        type="submit"
                        className="bg-[#1a237e] hover:bg-[#151c66] text-white font-extrabold px-4 py-2 rounded-lg text-xs flex items-center gap-1.5 cursor-pointer shadow-sm"
                      >
                        <span>Postar Comentário</span>
                        <Send className="h-3 w-3" />
                      </button>
                    </form>
                  )}
                </div>

              </div>

              {/* SIDEBAR RIGHT WITH DYNAMIC PROMO AD */}
              <div className="grid grid-cols-1 gap-6 sticky top-28">
                
                <PremiumPromoUnit />

                {/* RELATED SIDE RECOMMENDATION CARDS */}
                <div className="bg-white border border-slate-200 p-4 rounded-xl space-y-4 shadow-sm">
                  <span className="text-[9px] font-bold tracking-widest text-[#1a237e] uppercase block border-b border-slate-100 pb-2 font-sans">
                    Mais Lidos do Mês
                  </span>
                  {BLOG_POSTS.filter(post => post.slug !== activePost.slug).slice(0, 3).map(post => (
                    <div 
                      key={post.slug}
                      onClick={() => handlePostClick(post.slug)}
                      className="cursor-pointer group flex items-start gap-2.5 text-xs text-slate-600 hover:text-[#1a237e]"
                    >
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="w-12 h-12 object-cover rounded-lg shrink-0 border border-slate-100"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="font-semibold line-clamp-1 group-hover:text-[#00c853] transition-colors leading-snug">
                          {post.title}
                        </h4>
                        <span className="text-[9px] text-slate-400 flex items-center gap-1 mt-0.5">
                          <Clock className="h-3 w-3 text-[#1a237e]" /> {post.readTime}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

            </div>

          </div>

        ) : (
          
          /* VIEWING THE ARCHIVE LISTING OF BLOG ARTICLES */
          <div className="space-y-12">
            
            {/* SEARCH AND NAVIGATION PANEL */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center md:justify-between gap-4 border-b border-slate-200 pb-8">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1a237e]">
                  Acervo de Artigos Educacionais Originais
                </h1>
                <p className="text-slate-500 text-xs mt-1 font-sans">
                  Conteúdos técnicos completos estruturados para educar o público e obter plena conformidade e qualidade editorial.
                </p>
              </div>

              {/* SEARCH BOX */}
              <div className="relative w-full md:w-80 shrink-0">
                <input
                  type="text"
                  placeholder="Pesquisar nos artigos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-lg pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e]"
                />
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-450" />
              </div>
            </div>

            {/* CATEGORY SWITCHER CAROUSEL */}
            <div className="flex flex-wrap items-center gap-1.5 pt-2">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      isActive 
                        ? "bg-[#1a237e] text-white font-bold shadow-sm" 
                        : "bg-white text-slate-600 hover:text-[#1a237e] hover:bg-slate-50 border border-slate-200 shadow-xs"
                    }`}
                  >
                    {cat === "todos" ? "Todos os Assuntos" : cat}
                  </button>
                );
              })}
            </div>

            {/* MAIN GRID LIST OF ARTICLES */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="posts-archive">
              {displayedPosts.map((post) => (
                <article 
                  key={post.slug}
                  onClick={() => handlePostClick(post.slug)}
                  className="bg-white border border-slate-200/85 hover:border-[#1a237e]/40 p-5 rounded-xl flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  id={`post-card-${post.slug}`}
                >
                  <div className="space-y-4">
                    {/* Cover image thumbnail */}
                    <div className="w-full aspect-video rounded-xl overflow-hidden border border-slate-100 bg-slate-50 relative">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-white/95 border border-[#1a237e]/20 text-[#1a237e] text-[9px] uppercase font-mono tracking-wider font-extrabold rounded shadow-sm">
                        {post.category}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-[10px] text-slate-500 font-sans">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-[#00c853]" /> {post.publishedDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5 text-[#00c853]" /> {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-sm font-bold text-[#1a237e] line-clamp-2 leading-snug group-hover:text-[#00c853] transition-colors font-sans">
                        {post.title}
                      </h2>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 font-sans">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-4 mt-5 flex items-center justify-between text-xs text-[#00c853] font-bold font-sans">
                    <span>Ajustar para Leitura</span>
                    <BookOpen className="h-4 w-4" />
                  </div>
                </article>
              ))}

              {displayedPosts.length === 0 && (
                <div className="col-span-1 md:col-span-3 text-center py-16 text-slate-500 text-xs font-sans">
                  Nenhum artigo localizado correspondente ao termo selecionado.
                </div>
              )}
            </div>

            {/* PREMIUM BANNER ARCHIVE BOTTOM */}
            <div className="flex justify-center pt-8">
              <div className="w-full max-w-[728px] p-3.5 bg-white border border-slate-200 rounded-xl flex flex-col items-center shadow-sm">
                <span className="text-[8px] font-mono tracking-wider text-slate-400 uppercase font-bold mb-1 font-sans">
                  Espaço Reservado (728x90)
                </span>
                <div className="w-full h-[90px] bg-slate-50 border border-slate-150 rounded-lg flex items-center justify-center text-xs font-mono text-slate-500 text-center px-4">
                  Espaço de Conteúdo Recomendado
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
