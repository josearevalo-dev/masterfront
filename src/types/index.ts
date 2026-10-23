export type CategoryId = 'html' | 'css' | 'javascript';

export interface CategoryInfo {
  id: CategoryId;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  longDescription: string;
  colorHex: string;
  textColorHex: string;
  borderColorHex: string;
  bgLightHex: string;
  iconName: string;
  roleInWeb: string;
  essentialAnalogy: string;
}

export interface CodeSnippet {
  language: 'html' | 'css' | 'javascript' | 'bash';
  title: string;
  code: string;
  caption?: string;
}

export interface ArticleSection {
  id: string;
  title: string;
  paragraphs: string[];
  codeSnippet?: CodeSnippet;
  callout?: {
    type: 'tip' | 'note' | 'warning' | 'analogia';
    title: string;
    text: string;
  };
}

export interface Article {
  id: string;
  slug: string;
  categoryId: CategoryId;
  title: string;
  subtitle: string;
  excerpt: string;
  readTimeMinutes: number;
  level: 'Introductorio' | 'Esencial' | 'Práctico';
  publishedDate: string;
  tags: string[];
  sections: ArticleSection[];
  interactiveDemoId?: 'html-tags-preview' | 'html-semantic-tree' | 'box-model-lab' | 'flexbox-playground' | 'css-grid-visualizer' | 'js-counter-dom' | 'js-events-playground' | 'js-variables-calc';
  keyTakeaways: string[];
  featured?: boolean;
}
