import { Article } from '../../types';
import { HTML_ARTICLES } from './html';
import { CSS_ARTICLES } from './css';
import { JAVASCRIPT_ARTICLES } from './javascript';

export const ARTICLES: Article[] = [
  ...HTML_ARTICLES,
  ...CSS_ARTICLES,
  ...JAVASCRIPT_ARTICLES
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return ARTICLES.find((a) => a.slug === slug || a.id === slug);
};

export const getArticlesByCategory = (categoryId: string): Article[] => {
  return ARTICLES.filter((a) => a.categoryId === categoryId);
};

export const getFeaturedArticles = (): Article[] => {
  return ARTICLES.filter((a) => a.featured);
};
