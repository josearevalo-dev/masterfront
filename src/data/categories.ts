import { CategoryInfo } from '../types';

export const CATEGORIES: Record<string, CategoryInfo> = {
  html: {
    id: 'html',
    name: 'HTML',
    shortName: 'HTML5',
    tagline: 'Estructura y Semántica',
    description: 'El lenguaje de marcado estándar que da esqueleto, significado y contenido legible a toda la web.',
    longDescription: 'HTML (HyperText Markup Language) es el cimiento insustituible de la web. Sin él no existen títulos, párrafos, enlaces, formularios ni imágenes. Proporciona orden estructural y semántico para que navegadores, motores de búsqueda y lectores de pantalla comprendan el documento.',
    colorHex: '#ea580c',
    textColorHex: '#f97316',
    borderColorHex: 'rgba(234, 88, 12, 0.3)',
    bgLightHex: 'rgba(234, 88, 12, 0.08)',
    iconName: 'FileCode2',
    roleInWeb: 'El esqueleto y los cimientos del contenido',
    essentialAnalogy: 'En una casa, HTML son los cimientos, las vigas, las paredes y la ubicación de las puertas.'
  },
  css: {
    id: 'css',
    name: 'CSS',
    shortName: 'CSS3',
    tagline: 'Diseño, Estilos y Distribución',
    description: 'El lenguaje de hojas de estilo encargado de transformar estructuras planas en experiencias visuales pulidas y adaptables.',
    longDescription: 'CSS (Cascading Style Sheets) controla los colores, la tipografía, los espacios, la alineación en grilla o en línea y la adaptación a celulares, tabletas y computadores. Es la disciplina del espacio, la estética y la experiencia visual.',
    colorHex: '#0284c7',
    textColorHex: '#38bdf8',
    borderColorHex: 'rgba(56, 189, 248, 0.3)',
    bgLightHex: 'rgba(2, 132, 199, 0.08)',
    iconName: 'Palette',
    roleInWeb: 'El aspecto visual, la diagramación y el diseño responsive',
    essentialAnalogy: 'En una casa, CSS es la pintura, el diseño de interiores, las cortinas y el acabado de cada estancia.'
  },
  javascript: {
    id: 'javascript',
    name: 'JavaScript',
    shortName: 'JS',
    tagline: 'Interactividad, Lógica y Dinamismo',
    description: 'El lenguaje de programación que dota de vida a la web: responde a eventos, transforma datos y actualiza la pantalla.',
    longDescription: 'JavaScript es el cerebro funcional en el navegador del usuario. Permite responder a clics, validar formularios al instante, manipular el documento (DOM) en tiempo real, solicitar datos a servidores y crear interacciones fluidas sin recargar la página.',
    colorHex: '#d97706',
    textColorHex: '#f59e0b',
    borderColorHex: 'rgba(245, 158, 11, 0.3)',
    bgLightHex: 'rgba(217, 119, 6, 0.08)',
    iconName: 'Zap',
    roleInWeb: 'El comportamiento, la lógica y la respuesta a eventos',
    essentialAnalogy: 'En una casa, JavaScript es el interruptor de luz, el timbre, el termostato y las cerraduras inteligentes.'
  }
};

export const CATEGORY_LIST = Object.values(CATEGORIES);
