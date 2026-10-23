import { useState } from 'react';
import { Search, Bookmark, Menu, X } from 'lucide-react';
import { CategoryId } from '../types';

interface NavbarProps {
  currentView: 'home' | 'category' | 'article' | 'saved';
  selectedCategory?: CategoryId;
  savedCount: number;
  onNavigateHome: () => void;
  onNavigateCategory: (catId: CategoryId) => void;
  onNavigateSaved: () => void;
  onOpenSearch: () => void;
}

export function Navbar({
  currentView,
  selectedCategory,
  savedCount,
  onNavigateHome,
  onNavigateCategory,
  onNavigateSaved,
  onOpenSearch
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0f19]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <button
          onClick={onNavigateHome}
          className="text-xl font-bold tracking-tight text-white hover:text-indigo-300 transition-colors flex items-center gap-2 group"
        >
          <span>MasterFront</span>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <button
            onClick={onNavigateHome}
            className={`transition-colors hover:text-white ${
              currentView === 'home' ? 'text-white border-b-2 border-indigo-400 pb-1 font-semibold' : ''
            }`}
          >
            Inicio
          </button>

          <button
            onClick={() => onNavigateCategory('html')}
            className={`transition-colors hover:text-orange-400 ${
              currentView === 'category' && selectedCategory === 'html'
                ? 'text-orange-400 border-b-2 border-orange-500 pb-1 font-semibold'
                : ''
            }`}
          >
            HTML
          </button>

          <button
            onClick={() => onNavigateCategory('css')}
            className={`transition-colors hover:text-sky-400 ${
              currentView === 'category' && selectedCategory === 'css'
                ? 'text-sky-400 border-b-2 border-sky-400 pb-1 font-semibold'
                : ''
            }`}
          >
            CSS
          </button>

          <button
            onClick={() => onNavigateCategory('javascript')}
            className={`transition-colors hover:text-amber-400 ${
              currentView === 'category' && selectedCategory === 'javascript'
                ? 'text-amber-400 border-b-2 border-amber-400 pb-1 font-semibold'
                : ''
            }`}
          >
            JavaScript
          </button>

          <button
            onClick={onNavigateSaved}
            className={`flex items-center gap-1.5 transition-colors hover:text-white ${
              currentView === 'saved' ? 'text-white border-b-2 border-indigo-400 pb-1 font-semibold' : ''
            }`}
          >
            <Bookmark className="h-4 w-4" />
            <span>Guardados</span>
            {savedCount > 0 && (
              <span className="font-mono text-xs text-indigo-300">({savedCount})</span>
            )}
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 rounded border border-white/10 bg-[#111827] px-3 py-1.5 text-xs text-slate-300 hover:border-indigo-400/50 hover:text-white transition-colors"
            title="Buscar artículos"
          >
            <Search className="h-3.5 w-3.5 text-indigo-400" />
            <span className="hidden sm:inline">Buscar artículos</span>
            <kbd className="hidden lg:inline-block rounded bg-black/40 px-1.5 py-0.2 font-mono text-[10px] text-slate-400 border border-white/10">
              ⌘K
            </kbd>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0f1422] px-4 py-4 space-y-3 animate-in fade-in">
          <button
            onClick={() => { onNavigateHome(); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-sm text-slate-200 hover:text-white"
          >
            Inicio
          </button>
          <button
            onClick={() => { onNavigateCategory('html'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-sm text-orange-400 font-medium"
          >
            HTML (Estructura y Semántica)
          </button>
          <button
            onClick={() => { onNavigateCategory('css'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-sm text-sky-400 font-medium"
          >
            CSS (Diseño y Distribución)
          </button>
          <button
            onClick={() => { onNavigateCategory('javascript'); setMobileMenuOpen(false); }}
            className="block w-full text-left py-2 text-sm text-amber-400 font-medium"
          >
            JavaScript (Interactividad y Lógica)
          </button>
          <button
            onClick={() => { onNavigateSaved(); setMobileMenuOpen(false); }}
            className="flex items-center justify-between w-full text-left py-2 text-sm text-slate-200 border-t border-white/5 pt-3"
          >
            <span className="flex items-center gap-2">
              <Bookmark className="h-4 w-4" />
              Lecturas Guardadas
            </span>
            <span className="font-mono text-xs text-indigo-300">{savedCount}</span>
          </button>
        </div>
      )}
    </header>
  );
}
