import { Bookmark, ArrowRight, Trash2, ArrowLeft, BookOpen } from 'lucide-react';
import { Article } from '../types';
import { CATEGORIES } from '../data/categories';

interface SavedViewProps {
  savedArticles: Article[];
  onSelectArticle: (article: Article) => void;
  onRemoveSaved: (articleId: string) => void;
  onBackToHome: () => void;
}

export function SavedView({
  savedArticles,
  onSelectArticle,
  onRemoveSaved,
  onBackToHome
}: SavedViewProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Top Bar */}
      <div className="flex items-center justify-between text-xs text-slate-400">
        <button
          onClick={onBackToHome}
          className="flex items-center gap-1.5 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Volver al Inicio</span>
        </button>
      </div>

      <div className="border-b border-white/10 pb-6">
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-2">
          <Bookmark className="h-4 w-4" />
          <span>Lecturas Pendientes</span>
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight">
          Tus Artículos Guardados
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Guarda cualquier artículo para consultarlo cuando tengas unos minutos de lectura disponibles.
        </p>
      </div>

      {savedArticles.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-[#111827] py-16 px-6 text-center text-slate-400 max-w-md mx-auto">
          <BookOpen className="h-10 w-10 mx-auto mb-3 text-slate-600" />
          <h3 className="text-base font-semibold text-white">No tienes artículos guardados</h3>
          <p className="text-xs text-slate-500 mt-1 mb-6">
            Cuando estés leyendo un artículo, pulsa el botón "Guardar" para conservarlo en esta lista personal.
          </p>
          <button
            onClick={onBackToHome}
            className="rounded bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-500 transition-colors"
          >
            Explorar artículos en la Portada
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="text-xs text-slate-400">
            {savedArticles.length} {savedArticles.length === 1 ? 'artículo guardado' : 'artículos guardados'}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {savedArticles.map((article) => {
              const cat = CATEGORIES[article.categoryId];
              return (
                <div
                  key={article.id}
                  className="rounded-xl border border-white/10 bg-[#111827] p-5 hover:border-white/20 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                      <div className="flex items-center gap-2">
                        <span 
                          className="font-semibold"
                          style={{ color: cat.textColorHex }}
                        >
                          {cat.name}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{article.readTimeMinutes} min de lectura</span>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onRemoveSaved(article.id);
                        }}
                        className="text-slate-500 hover:text-red-400 p-1 transition-colors"
                        title="Quitar de guardados"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    <h3 
                      onClick={() => onSelectArticle(article)}
                      className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors cursor-pointer mb-2"
                    >
                      {article.title}
                    </h3>

                    <p className="text-xs text-slate-300 line-clamp-2 mb-4">
                      {article.excerpt}
                    </p>
                  </div>

                  <button
                    onClick={() => onSelectArticle(article)}
                    className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-300 group-hover:text-white transition-colors"
                  >
                    <span>Comenzar a leer</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
