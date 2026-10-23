/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { HomeView } from './views/HomeView';
import { CategoryView } from './views/CategoryView';
import { ArticleView } from './views/ArticleView';
import { SavedView } from './views/SavedView';
import { ARTICLES, getArticleBySlug } from './data/articles';
import { Article, CategoryId } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'category' | 'article' | 'saved'>('home');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('html');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [savedArticleIds, setSavedArticleIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('masterfront_saved_articles');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Keep localStorage updated
  useEffect(() => {
    try {
      localStorage.setItem('masterfront_saved_articles', JSON.stringify(savedArticleIds));
    } catch {
      // Ignore write errors
    }
  }, [savedArticleIds]);

  // Global Keyboard shortcut: Cmd+K / Ctrl+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Hash-based routing to support browser back button & bookmarking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash || hash === 'home') {
        setCurrentView('home');
        setSelectedArticle(null);
      } else if (hash.startsWith('categoria/')) {
        const cat = hash.replace('categoria/', '') as CategoryId;
        if (['html', 'css', 'javascript'].includes(cat)) {
          setSelectedCategory(cat);
          setCurrentView('category');
          setSelectedArticle(null);
        }
      } else if (hash.startsWith('articulo/')) {
        const slug = hash.replace('articulo/', '');
        const found = getArticleBySlug(slug);
        if (found) {
          setSelectedArticle(found);
          setSelectedCategory(found.categoryId);
          setCurrentView('article');
        }
      } else if (hash === 'guardados') {
        setCurrentView('saved');
        setSelectedArticle(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial run on mount
    if (window.location.hash) {
      handleHashChange();
    }
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Navigation handlers
  const navigateToHome = () => {
    window.location.hash = 'home';
    setCurrentView('home');
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCategory = (catId: CategoryId) => {
    window.location.hash = `categoria/${catId}`;
    setSelectedCategory(catId);
    setCurrentView('category');
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToArticle = (article: Article) => {
    window.location.hash = `articulo/${article.slug}`;
    setSelectedArticle(article);
    setSelectedCategory(article.categoryId);
    setCurrentView('article');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToSaved = () => {
    window.location.hash = 'guardados';
    setCurrentView('saved');
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSaveArticle = (articleId: string) => {
    setSavedArticleIds((prev) => 
      prev.includes(articleId)
        ? prev.filter((id) => id !== articleId)
        : [...prev, articleId]
    );
  };

  const savedArticlesList = ARTICLES.filter((art) => savedArticleIds.includes(art.id));

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f19] text-[#dfe2f1]">
      {/* Top Bar Navigation */}
      <Navbar
        currentView={currentView}
        selectedCategory={selectedCategory}
        savedCount={savedArticleIds.length}
        onNavigateHome={navigateToHome}
        onNavigateCategory={navigateToCategory}
        onNavigateSaved={navigateToSaved}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Main View Router */}
      <div className="flex-1">
        {currentView === 'home' && (
          <HomeView
            onSelectCategory={navigateToCategory}
            onSelectArticle={navigateToArticle}
            onOpenSearch={() => setSearchModalOpen(true)}
          />
        )}

        {currentView === 'category' && (
          <CategoryView
            categoryId={selectedCategory}
            onSelectArticle={navigateToArticle}
            onBackToHome={navigateToHome}
            onSelectCategory={navigateToCategory}
          />
        )}

        {currentView === 'article' && selectedArticle && (
          <ArticleView
            article={selectedArticle}
            isSaved={savedArticleIds.includes(selectedArticle.id)}
            onToggleSave={toggleSaveArticle}
            onSelectArticle={navigateToArticle}
            onNavigateCategory={navigateToCategory}
            onNavigateHome={navigateToHome}
          />
        )}

        {currentView === 'saved' && (
          <SavedView
            savedArticles={savedArticlesList}
            onSelectArticle={navigateToArticle}
            onRemoveSaved={toggleSaveArticle}
            onBackToHome={navigateToHome}
          />
        )}
      </div>

      {/* Footer */}
      <Footer
        onNavigateHome={navigateToHome}
        onNavigateCategory={navigateToCategory}
      />

      {/* Full-text Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectArticle={navigateToArticle}
      />
    </div>
  );
}
