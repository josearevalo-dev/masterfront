import { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Bookmark, 
  Share2, 
  Check, 
  Clock, 
  Calendar, 
  BookOpen, 
  Sparkles, 
  ChevronRight,
  ZoomIn,
  ZoomOut
} from 'lucide-react';
import { Article, CategoryId } from '../types';
import { CATEGORIES } from '../data/categories';
import { getArticlesByCategory } from '../data/articles';
import { CodeBlock } from '../components/CodeBlock';
import { InteractiveDemo } from '../components/InteractiveDemos';

interface ArticleViewProps {
  article: Article;
  isSaved: boolean;
  onToggleSave: (articleId: string) => void;
  onSelectArticle: (article: Article) => void;
  onNavigateCategory: (catId: CategoryId) => void;
  onNavigateHome: () => void;
}

export function ArticleView({
  article,
  isSaved,
  onToggleSave,
  onSelectArticle,
  onNavigateCategory,
  onNavigateHome
}: ArticleViewProps) {
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string>(article.sections[0]?.id || '');

  const category = CATEGORIES[article.categoryId];
  const siblingArticles = getArticlesByCategory(article.categoryId).filter((a) => a.id !== article.id);

  // Scroll to top on article change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (article.sections[0]) {
      setActiveSectionId(article.sections[0].id);
    }
  }, [article.id]);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'large':
        return 'text-base leading-relaxed';
      case 'xlarge':
        return 'text-lg leading-loose';
      default:
        return 'text-sm sm:text-base leading-relaxed';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Breadcrumb Navigation & Reader Actions Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4 text-xs text-slate-400">
        <nav className="flex items-center gap-1.5 flex-wrap">
          <button 
            onClick={onNavigateHome}
            className="hover:text-white transition-colors"
          >
            Inicio
          </button>
          <ChevronRight className="h-3 w-3 text-slate-600" />
          <button 
            onClick={() => onNavigateCategory(article.categoryId)}
            className="font-medium hover:text-white transition-colors"
            style={{ color: category.textColorHex }}
          >
            {category.name}
          </button>
          <ChevronRight className="h-3 w-3 text-slate-600" />
          <span className="text-slate-300 truncate max-w-[200px] sm:max-w-[320px]">
            {article.title}
          </span>
        </nav>

        {/* Reader Utility Tools */}
        <div className="flex items-center gap-3 self-end sm:self-auto">
          {/* Font scale buttons */}
          <div className="flex items-center gap-1 bg-[#111827] rounded border border-white/10 p-0.5">
            <button
              onClick={() => setFontSize(fontSize === 'xlarge' ? 'large' : 'normal')}
              className={`p-1.5 rounded hover:text-white ${fontSize === 'normal' ? 'text-indigo-400' : 'text-slate-400'}`}
              title="Reducir tamaño de letra"
            >
              <ZoomOut className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'xlarge')}
              className={`p-1.5 rounded hover:text-white ${fontSize === 'xlarge' ? 'text-indigo-400' : 'text-slate-400'}`}
              title="Aumentar tamaño de letra"
            >
              <ZoomIn className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Bookmark trigger */}
          <button
            onClick={() => onToggleSave(article.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded border transition-colors ${
              isSaved
                ? 'bg-indigo-600/20 border-indigo-500/40 text-indigo-300'
                : 'bg-[#111827] border-white/10 text-slate-300 hover:text-white hover:border-white/20'
            }`}
            title={isSaved ? 'Guardado en lecturas pendientes' : 'Guardar para leer después'}
          >
            <Bookmark className={`h-3.5 w-3.5 ${isSaved ? 'fill-indigo-400' : ''}`} />
            <span>{isSaved ? 'Guardado' : 'Guardar'}</span>
          </button>

          {/* Share trigger */}
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-white/10 bg-[#111827] text-slate-300 hover:text-white hover:border-white/20 transition-colors"
            title="Copiar enlace"
          >
            {copiedLink ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copiado</span>
              </>
            ) : (
              <>
                <Share2 className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Compartir</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Article Header & Editorial Masthead */}
      <header className="max-w-4xl space-y-4">
        {/* Unboxed category label */}
        <div className="flex items-center gap-2 text-xs">
          <button
            onClick={() => onNavigateCategory(article.categoryId)}
            className="font-mono font-semibold tracking-wider uppercase hover:underline"
            style={{ color: category.textColorHex }}
          >
            {category.name} ({category.tagline})
          </button>
          <span className="text-slate-600" aria-hidden="true">·</span>
          <span className="text-slate-400 flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {article.readTimeMinutes} minutos de lectura
          </span>
          <span className="text-slate-600" aria-hidden="true">·</span>
          <span className="text-slate-400">{article.level}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          {article.title}
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed">
          {article.subtitle}
        </p>

        {/* Publication metadata */}
        <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5 text-slate-500" />
            Publicado el {article.publishedDate}
          </span>
          <span className="text-slate-600" aria-hidden="true">·</span>
          <span>Redacción editorial de MasterFront</span>
        </div>
      </header>

      {/* Main Layout: Asymmetric 2-Column (Content + Table of Contents) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Reading Article Column */}
        <main className="lg:col-span-8 space-y-10">
          
          {/* Abstract / Excerpt Block */}
          <div className="rounded-xl border border-white/10 bg-[#111827] p-5 text-sm sm:text-base text-slate-300 leading-relaxed border-l-4" style={{ borderLeftColor: category.textColorHex }}>
            {article.excerpt}
          </div>

          {/* Interactive Demo (if any) */}
          {article.interactiveDemoId && (
            <section aria-label="Demostración interactiva">
              <InteractiveDemo demoId={article.interactiveDemoId} />
            </section>
          )}

          {/* Article Editorial Sections */}
          <div className="space-y-12">
            {article.sections.map((section) => (
              <section 
                key={section.id} 
                id={section.id}
                className="scroll-mt-24 space-y-4"
              >
                <h2 className="text-2xl font-bold text-white tracking-tight border-b border-white/5 pb-2">
                  {section.title}
                </h2>

                <div className={`space-y-4 text-slate-300 font-normal ${getFontSizeClass()}`}>
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {/* Callout box (if any) */}
                {section.callout && (
                  <aside 
                    className="my-6 rounded-lg border p-4 bg-[#0d1322]"
                    style={{
                      borderColor: section.callout.type === 'analogia' 
                        ? category.borderColorHex 
                        : section.callout.type === 'warning' 
                        ? 'rgba(239, 68, 68, 0.3)' 
                        : 'rgba(99, 102, 241, 0.3)'
                    }}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <Sparkles 
                        className="h-4 w-4" 
                        style={{ color: category.textColorHex }}
                      />
                      <span className="text-xs font-semibold text-white">
                        {section.callout.title}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {section.callout.text}
                    </p>
                  </aside>
                )}

                {/* Code Snippet (if any) */}
                {section.codeSnippet && (
                  <CodeBlock snippet={section.codeSnippet} />
                )}
              </section>
            ))}
          </div>

          {/* Key Takeaways Summary Block */}
          <section className="rounded-xl border border-indigo-500/20 bg-[#0f1422] p-6 space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-indigo-400" />
              <h3 className="text-lg font-bold text-white">
                Ideas clave para recordar
              </h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {article.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-indigo-400 font-bold shrink-0 mt-0.5">•</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Article Navigation Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => onNavigateCategory(article.categoryId)}
              className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Volver a todos los artículos de {category.name}</span>
            </button>

            <button
              onClick={onNavigateHome}
              className="text-xs text-slate-400 hover:text-white transition-colors"
            >
              Ir a la portada de MasterFront
            </button>
          </div>

        </main>

        {/* Sidebar: Table of Contents & Related Reads */}
        <aside className="lg:col-span-4 space-y-8">
          
          {/* Sticky Table of Contents */}
          <div className="sticky top-24 rounded-xl border border-white/10 bg-[#111827] p-5 space-y-4">
            <div className="text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase">
              Contenido del artículo
            </div>

            <nav className="space-y-1.5 text-xs">
              {article.sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSectionId(sec.id);
                    document.getElementById(sec.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`block py-1.5 px-2 rounded transition-colors ${
                    activeSectionId === sec.id
                      ? 'bg-white/10 text-white font-medium border-l-2'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  style={{
                    borderLeftColor: activeSectionId === sec.id ? category.textColorHex : 'transparent'
                  }}
                >
                  {sec.title}
                </a>
              ))}
            </nav>

            <div className="border-t border-white/5 pt-4">
              <div className="text-[11px] text-slate-500 mb-2">Etiquetas del artículo:</div>
              <div className="flex flex-wrap gap-1.5">
                {article.tags.map((t) => (
                  <span 
                    key={t}
                    className="font-mono text-[11px] text-slate-400 bg-black/30 px-2 py-0.5 rounded border border-white/5"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Related Articles in Same Category */}
          {siblingArticles.length > 0 && (
            <div className="rounded-xl border border-white/10 bg-[#111827] p-5 space-y-3">
              <div className="text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase">
                Otros artículos de {category.name}
              </div>

              <div className="space-y-3">
                {siblingArticles.slice(0, 3).map((sibling) => (
                  <button
                    key={sibling.id}
                    onClick={() => onSelectArticle(sibling)}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-white/5 transition-colors group block border border-transparent hover:border-white/5"
                  >
                    <div className="text-xs font-semibold text-slate-200 group-hover:text-indigo-300 transition-colors line-clamp-2">
                      {sibling.title}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1 flex items-center justify-between">
                      <span>{sibling.readTimeMinutes} min · {sibling.level}</span>
                      <ArrowRight className="h-3 w-3 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </button>
                ))}
              </div>

              <button
                onClick={() => onNavigateCategory(article.categoryId)}
                className="w-full mt-2 text-center text-xs text-indigo-400 hover:text-indigo-300 pt-2 border-t border-white/5 block"
              >
                Ver los {siblingArticles.length + 1} artículos de {category.name} →
              </button>
            </div>
          )}

        </aside>

      </div>
    </div>
  );
}
