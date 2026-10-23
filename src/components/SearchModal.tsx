import { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, BookOpen } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { CATEGORIES } from '../data/categories';
import { Article } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (article: Article) => void;
}

export function SearchModal({ isOpen, onClose, onSelectArticle }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredArticles = query.trim() === ''
    ? ARTICLES.slice(0, 5)
    : ARTICLES.filter((art) => {
        const q = query.toLowerCase();
        return (
          art.title.toLowerCase().includes(q) ||
          art.subtitle.toLowerCase().includes(q) ||
          art.excerpt.toLowerCase().includes(q) ||
          art.tags.some((t) => t.toLowerCase().includes(q)) ||
          CATEGORIES[art.categoryId]?.name.toLowerCase().includes(q)
        );
      });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="w-full max-w-2xl rounded-xl border border-white/10 bg-[#0f1422] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3 bg-[#131a2b]">
          <Search className="h-5 w-5 text-indigo-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar artículos por tema (ej. flexbox, etiquetas, dom, variables...)"
            className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-white p-1"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block rounded bg-black/40 px-2 py-0.5 text-[10px] font-mono text-slate-400 border border-white/10">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-1">
          <div className="px-3 py-1.5 text-[11px] font-medium text-slate-500 uppercase tracking-wider">
            {query.trim() === '' ? 'Artículos sugeridos' : `${filteredArticles.length} resultados encontrados`}
          </div>

          {filteredArticles.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              <BookOpen className="h-8 w-8 mx-auto mb-2 text-slate-600" />
              <p className="text-sm">No encontramos artículos para "{query}"</p>
              <p className="text-xs text-slate-500 mt-1">Prueba con términos como: HTML, CSS, Flexbox, DOM o Variables</p>
            </div>
          ) : (
            filteredArticles.map((article) => {
              const cat = CATEGORIES[article.categoryId];
              return (
                <button
                  key={article.id}
                  onClick={() => {
                    onSelectArticle(article);
                    onClose();
                  }}
                  className="w-full text-left rounded-lg p-3 hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 flex items-start justify-between group"
                >
                  <div className="space-y-1 pr-3">
                    <div className="flex items-center gap-2 text-xs">
                      <span
                        className="font-semibold text-[11px]"
                        style={{ color: cat.textColorHex }}
                      >
                        {cat.name}
                      </span>
                      <span className="text-slate-600" aria-hidden="true">·</span>
                      <span className="text-slate-400">{article.readTimeMinutes} min de lectura</span>
                      <span className="text-slate-600" aria-hidden="true">·</span>
                      <span className="text-slate-400">{article.level}</span>
                    </div>

                    <h4 className="text-sm font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors">
                      {article.title}
                    </h4>

                    <p className="text-xs text-slate-400 line-clamp-1">
                      {article.subtitle}
                    </p>
                  </div>

                  <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all shrink-0 mt-2" />
                </button>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="border-t border-white/5 bg-[#0a0e18] px-4 py-2.5 flex items-center justify-between text-[11px] text-slate-500">
          <span>MasterFront · Plataforma de Artículos Front-End</span>
          <button 
            onClick={onClose}
            className="hover:text-slate-300 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
