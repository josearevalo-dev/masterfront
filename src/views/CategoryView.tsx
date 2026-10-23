import { useState } from 'react';
import { ArrowLeft, ArrowRight, Search, FileCode2, Palette, Zap, BookOpen, Clock, Tag } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { getArticlesByCategory } from '../data/articles';
import { Article, CategoryId } from '../types';

interface CategoryViewProps {
  categoryId: CategoryId;
  onSelectArticle: (article: Article) => void;
  onBackToHome: () => void;
  onSelectCategory: (catId: CategoryId) => void;
}

export function CategoryView({
  categoryId,
  onSelectArticle,
  onBackToHome,
  onSelectCategory
}: CategoryViewProps) {
  const category = CATEGORIES[categoryId];
  const allArticles = getArticlesByCategory(categoryId);
  const [filterQuery, setFilterQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<'Todos' | 'Introductorio' | 'Esencial' | 'Práctico'>('Todos');

  const getCategoryIcon = (id: CategoryId) => {
    switch (id) {
      case 'html':
        return <FileCode2 className="h-8 w-8 text-orange-400" />;
      case 'css':
        return <Palette className="h-8 w-8 text-sky-400" />;
      case 'javascript':
        return <Zap className="h-8 w-8 text-amber-400" />;
    }
  };

  const filteredArticles = allArticles.filter((art) => {
    const matchesQuery = filterQuery.trim() === '' ||
      art.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
      art.subtitle.toLowerCase().includes(filterQuery.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(filterQuery.toLowerCase()));

    const matchesLevel = selectedLevel === 'Todos' || art.level === selectedLevel;

    return matchesQuery && matchesLevel;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center justify-between text-xs text-slate-400">
        <button
          onClick={onBackToHome}
          className="flex items-center gap-1.5 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Volver al Inicio</span>
        </button>

        {/* Quick sibling category switchers */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-slate-500">Cambiar de tecnología:</span>
          {(['html', 'css', 'javascript'] as const).map((id) => (
            <button
              key={id}
              onClick={() => onSelectCategory(id)}
              className={`px-2.5 py-1 rounded text-xs transition-colors ${
                categoryId === id
                  ? 'bg-white/10 text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {CATEGORIES[id].name}
            </button>
          ))}
        </div>
      </div>

      {/* Category Hero Banner */}
      <section 
        className="rounded-2xl border p-8 lg:p-10 relative overflow-hidden"
        style={{
          backgroundColor: '#0f1422',
          borderColor: category.borderColorHex
        }}
      >
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-3">
              <div 
                className="p-3 rounded-xl border"
                style={{
                  backgroundColor: category.bgLightHex,
                  borderColor: category.borderColorHex
                }}
              >
                {getCategoryIcon(categoryId)}
              </div>
              <div>
                <span 
                  className="text-xs font-mono font-semibold tracking-wider uppercase"
                  style={{ color: category.textColorHex }}
                >
                  Categoría Editorial · {category.shortName}
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  {category.name}
                </h1>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-200 font-medium">
              {category.tagline}
            </p>

            <p className="text-sm text-slate-300 leading-relaxed">
              {category.longDescription}
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 rounded bg-black/40 border border-white/10 px-3.5 py-2 text-xs text-slate-300">
                <span className="font-semibold" style={{ color: category.textColorHex }}>Analogía clara:</span>
                <span>{category.essentialAnalogy}</span>
              </div>
            </div>
          </div>

          <div className="shrink-0 font-mono text-xs text-slate-400 bg-[#070b14] p-4 rounded-xl border border-white/10 space-y-1">
            <div className="text-slate-500 uppercase text-[10px]">Artículos disponibles</div>
            <div className="text-2xl font-bold text-white">{allArticles.length} artículos</div>
            <div className="text-[11px] text-slate-400">Lecturas 100% independientes</div>
          </div>
        </div>
      </section>

      {/* Filter & Article Search Bar */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Search within category */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder={`Filtrar artículos de ${category.name}...`}
              className="w-full rounded-lg bg-[#111827] border border-white/10 pl-9 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-400"
            />
          </div>

          {/* Level filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#111827] rounded-lg border border-white/10 overflow-x-auto">
            {(['Todos', 'Introductorio', 'Esencial', 'Práctico'] as const).map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                  selectedLevel === level
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Results summary */}
        <div className="text-xs text-slate-400 flex items-center justify-between">
          <span>Mostrando {filteredArticles.length} de {allArticles.length} artículos</span>
          {filterQuery && (
            <button
              onClick={() => setFilterQuery('')}
              className="text-xs text-indigo-400 hover:underline"
            >
              Borrar filtro
            </button>
          )}
        </div>
      </section>

      {/* Articles Grid / List */}
      <section>
        {filteredArticles.length === 0 ? (
          <div className="rounded-xl border border-white/10 bg-[#111827] py-16 text-center text-slate-400">
            <BookOpen className="h-10 w-10 mx-auto mb-3 text-slate-600" />
            <h3 className="text-base font-semibold text-white">No se encontraron artículos con ese filtro</h3>
            <p className="text-xs text-slate-500 mt-1">Prueba cambiando el nivel o el término de búsqueda.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="cursor-pointer rounded-xl border border-white/10 bg-[#111827] p-6 hover:border-white/20 hover:-translate-y-0.5 transition-all flex flex-col justify-between group shadow-sm"
              >
                <div>
                  {/* Clean unboxed metadata (anti-pill) */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                    <span 
                      className="font-semibold text-[11px]"
                      style={{ color: category.textColorHex }}
                    >
                      {category.name}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTimeMinutes} min
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{article.level}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors mb-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Clean unboxed tags */}
                  <div className="flex flex-wrap gap-2 text-[11px] text-slate-400 mb-6">
                    {article.tags.map((t) => (
                      <span key={t} className="font-mono text-slate-400">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-white transition-colors">
                  <span>Abrir para leer</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

    </div>
  );
}
