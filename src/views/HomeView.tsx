import { ArrowRight, FileCode2, Palette, Zap, Sparkles, BookOpen, Layers } from 'lucide-react';
import { CATEGORY_LIST, CATEGORIES } from '../data/categories';
import { getFeaturedArticles, getArticlesByCategory } from '../data/articles';
import { Article, CategoryId } from '../types';

interface HomeViewProps {
  onSelectCategory: (catId: CategoryId) => void;
  onSelectArticle: (article: Article) => void;
  onOpenSearch: () => void;
}

export function HomeView({ onSelectCategory, onSelectArticle, onOpenSearch }: HomeViewProps) {
  const featuredArticles = getFeaturedArticles();

  const getCategoryIcon = (id: CategoryId) => {
    switch (id) {
      case 'html':
        return <FileCode2 className="h-6 w-6 text-orange-400" />;
      case 'css':
        return <Palette className="h-6 w-6 text-sky-400" />;
      case 'javascript':
        return <Zap className="h-6 w-6 text-amber-400" />;
    }
  };

  return (
    <div className="space-y-20 pb-16">
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-8 sm:pt-20 sm:pb-12 text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded mb-6">
          <BookOpen className="h-3.5 w-3.5" />
          <span>Biblioteca Abierta de Artículos Front-End</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
          La guía clara y sencilla para entrar al mundo del <span className="text-indigo-400">Front-End</span>.
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
          MasterFront es una publicación de artículos independientes pensada para principiantes. Sin módulos rígidos, sin evaluaciones ni requisitos previos: elige el tema que necesites entender y comienza a leer.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
          <button
            onClick={() => onSelectCategory('html')}
            className="rounded bg-[#ea580c] hover:bg-[#c2410c] text-white px-5 py-2.5 font-medium transition-colors shadow-lg shadow-orange-950/40"
          >
            Explorar HTML
          </button>
          <button
            onClick={() => onSelectCategory('css')}
            className="rounded bg-[#0284c7] hover:bg-[#0369a1] text-white px-5 py-2.5 font-medium transition-colors shadow-lg shadow-sky-950/40"
          >
            Explorar CSS
          </button>
          <button
            onClick={() => onSelectCategory('javascript')}
            className="rounded bg-[#d97706] hover:bg-[#b45309] text-white px-5 py-2.5 font-medium transition-colors shadow-lg shadow-amber-950/40"
          >
            Explorar JavaScript
          </button>
        </div>
      </section>

      {/* Main Pillars Showcase (The 3 Core Categories) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Los Tres Pilares del Desarrollo Web
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Cada tecnología cumple un rol específico en el navegador. Haz clic en cualquiera para ver su catálogo completo de artículos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CATEGORY_LIST.map((category) => {
            const articles = getArticlesByCategory(category.id);
            const topArticles = articles.slice(0, 3);

            return (
              <div
                key={category.id}
                className="group flex flex-col justify-between rounded-xl border border-white/10 bg-[#111827] p-6 hover:border-white/20 transition-all duration-200 relative overflow-hidden"
              >
                {/* Subtle top indicator bar matching the category tone */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: category.textColorHex }}
                />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className="p-3 rounded-lg border"
                      style={{ 
                        backgroundColor: category.bgLightHex, 
                        borderColor: category.borderColorHex 
                      }}
                    >
                      {getCategoryIcon(category.id)}
                    </div>
                    <span className="font-mono text-xs text-slate-400">
                      {articles.length} artículos
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {category.name}
                  </h3>
                  <div 
                    className="text-xs font-medium mb-3"
                    style={{ color: category.textColorHex }}
                  >
                    {category.tagline}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {/* Featured articles previews */}
                  <div className="space-y-2 border-t border-white/5 pt-4 mb-6">
                    <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider block mb-2">
                      Artículos destacados:
                    </span>
                    {topArticles.map((art) => (
                      <button
                        key={art.id}
                        onClick={() => onSelectArticle(art)}
                        className="w-full text-left p-2 rounded hover:bg-white/5 transition-colors group/item block"
                      >
                        <div className="text-xs text-slate-200 group-hover/item:text-white font-medium line-clamp-1">
                          {art.title}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {art.readTimeMinutes} min de lectura · {art.level}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Primary Category Access Button */}
                <button
                  onClick={() => onSelectCategory(category.id)}
                  className="w-full mt-2 flex items-center justify-center gap-2 rounded border border-white/10 bg-[#161f30] py-2.5 px-4 text-xs font-semibold text-white hover:bg-[#1f2b42] hover:border-white/20 transition-all"
                >
                  <span>Ver todos los artículos de {category.name}</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Conceptual Analogy Section: How the 3 Work Together */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-white/10 bg-[#0f1422] p-8 lg:p-10">
          <div className="max-w-2xl mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              ¿Cómo colaboran HTML, CSS y JavaScript?
            </h2>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed">
              En cualquier proyecto web real, los tres lenguajes coexisten de forma complementaria. Ninguno reemplaza al otro: cada uno asume una responsabilidad clara.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg bg-[#0a0e17] border border-orange-500/20 space-y-2">
              <span className="text-xs font-mono font-semibold text-orange-400 uppercase">1. Estructura (HTML)</span>
              <h4 className="text-sm font-semibold text-white">El qué de la página</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dice qué es un título, qué es una imagen y qué es un botón. Sin HTML no hay nada en pantalla que ver ni indexar.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#0a0e17] border border-sky-500/20 space-y-2">
              <span className="text-xs font-mono font-semibold text-sky-400 uppercase">2. Estética (CSS)</span>
              <h4 className="text-sm font-semibold text-white">El cómo se ve</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Aplica colores, márgenes, tipografías atractivas y distribuye los elementos en filas, columnas o cuadrículas adaptables.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#0a0e17] border border-amber-500/20 space-y-2">
              <span className="text-xs font-mono font-semibold text-amber-400 uppercase">3. Comportamiento (JS)</span>
              <h4 className="text-sm font-semibold text-white">El cómo reacciona</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Escucha los clics del usuario, valida entradas de texto, anima elementos y comunica la página con servidores externos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Editorial Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Artículos Destacados
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Lecturas esenciales recomendadas para comprender los conceptos cardinales.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article) => {
            const cat = CATEGORIES[article.categoryId];
            return (
              <article
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="cursor-pointer rounded-xl border border-white/10 bg-[#111827] p-6 hover:border-indigo-400/40 hover:-translate-y-0.5 transition-all flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs mb-3 text-slate-400">
                    <span 
                      className="font-semibold"
                      style={{ color: cat.textColorHex }}
                    >
                      {cat.name}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTimeMinutes} min de lectura</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.level}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 group-hover:text-white">
                  <span>Leer artículo</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            );
          })}
        </div>
      </section>

    </div>
  );
}
