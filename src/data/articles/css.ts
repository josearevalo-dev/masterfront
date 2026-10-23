import { Article } from '../../types';

export const CSS_ARTICLES: Article[] = [
  // 1. ¿QUÉ ES CSS Y CÓMO SE CONECTA A HTML?
  {
    id: 'que-es-css',
    slug: 'que-es-css',
    categoryId: 'css',
    title: '¿Qué es CSS y cómo se conecta a un archivo HTML?',
    subtitle: 'El lenguaje visual que transforma estructuras monocromáticas en interfaces cautivadoras.',
    excerpt: 'Descubre el propósito de Cascading Style Sheets, la historia de la separación de responsabilidades en la web y las tres formas de aplicar estilos: en línea, interno y hojas externas vinculadas mediante link.',
    readTimeMinutes: 7,
    level: 'Introductorio',
    publishedDate: '16 de Mayo, 2026',
    tags: ['CSS', 'Hojas de Estilo', 'Separación de Responsabilidades', 'Enlace Externo'],
    featured: true,
    keyTakeaways: [
      'CSS significa Cascading Style Sheets (Hojas de Estilo en Cascada) y fue propuesto por Håkon Wium Lie y Bert Bos en 1994.',
      'Su principio fundamental es la Separación de Responsabilidades: el documento HTML se enfoca en el significado y contenido; el archivo CSS se enfoca en la presentación estética.',
      'Existen tres métodos para aplicar estilos: en línea (atributo style), internos (etiqueta <style>) y externos (archivo .css vinculado con <link>).',
      'El método profesional por excelencia es el archivo CSS externo, ya que permite reutilizar los mismos estilos en cientos de páginas y aprovecha la memoria caché del navegador.',
      'El navegador analiza el CSS para construir el CSSOM (CSS Object Model) antes de pintar los elementos en la pantalla.'
    ],
    sections: [
      {
        id: 'la-separacion-de-responsabilidades',
        title: 'La crisis del diseño en los 90 y la invención de CSS',
        paragraphs: [
          'En los primeros años de la World Wide Web, HTML no poseía herramientas para diseñar. Para dar formato a una página, los navegadores de la época (como Netscape Navigator) empezaron a inventar etiquetas propietarias como <font color="red" size="5">, <center> o trucos de maquetación basados en tablas <table> anidadas.',
          'El resultado fue una catástrofe de mantenimiento conocida como "código espagueti". Si un portal corporativo de 200 páginas decidía cambiar su color corporativo de azul a verde, los programadores tenían que abrir los 200 archivos HTML uno por uno y reemplazar manualmente cada etiqueta <font>. Además, el peso de los archivos crecía desmesuradamente.',
          'Para resolver este problema de raíz, en 1994 Håkon Wium Lie propuso en el CERN las "Hojas de Estilo en Cascada" (CSS), adoptadas oficialmente por el W3C en 1996. La filosofía de diseño era revolucionaria: un único archivo independiente de estilos (estilos.css) podía controlar la estética visual de miles de páginas HTML simultáneamente.'
        ],
        callout: {
          type: 'analogia',
          title: 'Analogía del perchero de ropa',
          text: 'Imagina a una persona que asiste a distintos eventos: por la mañana viste ropa deportiva para correr, por la tarde viste traje formal para una reunión de negocios y por la noche viste pijama para descansar. La persona (HTML) sigue siendo exactamente la misma en cuerpo e identidad; lo único que cambia es el conjunto de ropa y accesorios que viste en cada momento (CSS). Puedes cambiar la apariencia por completo sin tocar una sola línea de la estructura base.'
        }
      },
      {
        id: 'formas-de-conectar-css',
        title: 'Los tres métodos para aplicar estilos a un documento',
        paragraphs: [
          'En el desarrollo web existen tres vías para asociar código CSS a un documento HTML. Conocer sus ventajas y limitaciones es indispensable:',
          '1. Estilos en Línea (Inline Styles): Se escriben directamente dentro de la etiqueta HTML utilizando el atributo style="...". Ejemplo: <h1 style="color: #4f46e5; font-size: 24px;">. Desventaja: Mezcla presentación con estructura, sufre de una especificidad extremadamente alta que dificulta su sobreescritura posterior y no permite utilizar pseudo-clases como :hover ni Media Queries.',
          '2. Estilos Internos (Internal Styles): Se escriben dentro de un bloque <style> ubicado en la sección <head> del documento HTML. Ventaja: Útil para pruebas rápidas de una sola página o para correos electrónicos HTML (newsletters). Desventaja: No se pueden compartir entre distintas páginas del sitio.',
          '3. Hojas de Estilo Externas (External Stylesheet - Estándar Profesional): Se escribe todo el código de diseño en un archivo de texto independiente con extensión .css y se vincula en el <head> mediante la etiqueta <link rel="stylesheet" href="ruta.css">.'
        ],
        codeSnippet: {
          language: 'html',
          title: 'vinculacion-estilos.html',
          code: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Sitio con CSS Externo</title>

  <!-- Forma correcta y profesional: hoja de estilo externa vinculada -->
  <link rel="stylesheet" href="css/estilos-principales.css">

  <!-- Forma interna: reservada para estilos exclusivos de esta página específica -->
  <style>
    .banner-especial {
      background-color: #1e1b4b;
      padding: 1.5rem;
    }
  </style>
</head>
<body>
  <!-- Forma en línea: evítala en la medida de lo posible -->
  <p style="color: #ea580c;">Párrafo con estilo en línea (no recomendado para código limpio).</p>
</body>
</html>`
        },
        callout: {
          type: 'tip',
          title: 'El beneficio del almacenamiento en caché HTTP',
          text: 'Cuando utilizas un archivo CSS externo, el navegador descarga el archivo estilos.css en la primera visita del usuario y lo guarda en su memoria caché local. Cuando el usuario navega a la segunda, tercera o décima página del sitio, el navegador no vuelve a descargar el archivo por Internet, logrando tiempos de carga prácticamente instantáneos.'
        }
      },
      {
        id: 'el-cssom-y-renderizado',
        title: '¿Cómo procesa el navegador tus reglas de estilo?',
        paragraphs: [
          'De la misma forma que el navegador construye el árbol DOM a partir de las etiquetas HTML, procesa el archivo CSS para construir el CSSOM (CSS Object Model). El CSSOM es una estructura en árbol que asocia a cada nodo los estilos calculados tras resolver la cascada y la especificidad.',
          'La combinación del DOM y el CSSOM da origen al Render Tree (Árbol de Renderizado). Es en este momento cuando el motor calcula la disposición geométrica de cada caja y procede a la etapa de pintura (Painting).'
        ]
      }
    ]
  },

  // 2. ¿CÓMO COMENZAR CON CSS: SINTAXIS, REGLAS Y LA CASCADA?
  {
    id: 'como-comenzar-con-css',
    slug: 'como-comenzar-con-css',
    categoryId: 'css',
    title: '¿Cómo comenzar con CSS: sintaxis, reglas y la cascada?',
    subtitle: 'Aprende a escribir tu primera regla de estilos, comprende las unidades modernas y domina el algoritmo de cascada.',
    excerpt: 'Selectores, llaves, propiedades y valores. Analizamos la anatomía formal de una declaración CSS, las unidades de medida absolutas y relativas (rem, px, %, vh), el modelo de color y cómo el navegador resuelve conflictos.',
    readTimeMinutes: 8,
    level: 'Introductorio',
    publishedDate: '19 de Mayo, 2026',
    tags: ['Sintaxis', 'Cascada', 'Unidades', 'rem vs px', 'Colores'],
    keyTakeaways: [
      'Una regla CSS consta de un selector que apunta al elemento y un bloque de declaraciones encerrado entre llaves { }.',
      'Cada declaración se compone de una propiedad, dos puntos, un valor estandarizado y finaliza obligatoriamente con punto y coma (;).',
      'Las unidades relativas como rem son preferibles a los píxeles (px) para tipografía y espaciado, ya que respetan las preferencias de accesibilidad del usuario.',
      'La "Cascada" es el algoritmo que decide qué estilo se aplica cuando varias reglas entran en conflicto, basándose en origen, especificidad y orden de aparición.',
      'Los comentarios en CSS se escriben exclusivamente con la sintaxis /* comentario */.'
    ],
    sections: [
      {
        id: 'anatomia-de-una-regla',
        title: 'Anatomía formal de una regla CSS',
        paragraphs: [
          'Escribir CSS es muy metódico y predecible una vez que asimilas su estructura de bloques. Una hoja de estilo está compuesta por una sucesión de "reglas CSS" (CSS Rulesets). Cada regla se conforma de:',
          '1. Selector: Indica al motor del navegador a qué elemento o conjunto de elementos HTML se aplicarán las instrucciones (por ejemplo, h1, .tarjeta, #menu).',
          '2. Bloque de declaraciones: Delimitado obligatoriamente por llaves de apertura y cierre ({ y }).',
          '3. Declaraciones individuales: Cada línea dentro del bloque representa una instrucción estética. Se compone de un nombre de Propiedad estandarizado (como color, font-size, background-color), seguido de dos puntos (:), el Valor correspondiente y un punto y coma final (;).'
        ],
        codeSnippet: {
          language: 'css',
          title: 'anatomia-regla.css',
          code: `/* Selector: apunta a todos los elementos con la clase .articulo-card */
.articulo-card {
  /* Declaración 1: Propiedad color de fondo con valor hexadecimal */
  background-color: #111827;

  /* Declaración 2: Relleno interno con unidades relativas */
  padding: 1.5rem;

  /* Declaración 3: Borde sutil de un pixel */
  border: 1px solid rgba(255, 255, 255, 0.1);

  /* Declaración 4: Esquinas ligeramente suavizadas */
  border-radius: 8px;
}`
        },
        callout: {
          type: 'warning',
          title: 'El error más común: olvidar el punto y coma final',
          text: 'Si olvidas colocar el punto y coma (;) al final de una declaración, el navegador considerará que la siguiente línea forma parte del mismo valor, interpretará la regla como inválida y descartará silenciosamente ambas declaraciones.'
        }
      },
      {
        id: 'unidades-de-medida',
        title: 'Unidades de medida: px, rem, em y porcentajes',
        paragraphs: [
          'En CSS disponemos de dos grandes familias de unidades para definir tamaños de fuente, márgenes y anchos:',
          '• Unidades Absolutas (px): El píxel CSS representa una medida fija en pantalla. Aunque es intuitivo para principiantes, usar px para tamaños de fuente es desaconsejado por motivos de accesibilidad: si un usuario con dificultades visuales configura su navegador para que el texto base sea más grande, los tamaños en px ignorarán esa preferencia.',
          '• Unidades Relativas a la Raíz (rem - Root EM): 1rem equivale al font-size del elemento raíz <html> (por defecto en todos los navegadores, 16px). Así, 1.5rem equivale a 24px, y 2rem a 32px. Si el usuario amplía el tamaño de letra en los ajustes de su sistema, todos los elementos definidos en rem escalarán armoniosamente.',
          '• Unidades Relativas al Padre (em): 1em equivale al font-size de su propio elemento contenedor padre. Se utiliza habitualmente en padding de botones para que el botón crezca proporcionalmente con el texto.',
          '• Unidades de Viewport (vw, vh): 1vw es el 1% del ancho de la ventana visible del navegador, y 1vh es el 1% de su altura.'
        ]
      },
      {
        id: 'el-algoritmo-de-la-cascada',
        title: '¿Por qué se llama hojas de estilo "en cascada"?',
        paragraphs: [
          'El concepto de "Cascada" (Cascade) es el corazón de CSS. Describe el algoritmo determinista que utiliza el navegador para resolver conflictos cuando dos o más reglas asignan valores distintos a la misma propiedad de un elemento.',
          'El navegador evalúa tres factores en orden estricto de precedencia:',
          '1. Origen e Importancia: Los estilos de autor (tu archivo CSS) prevalecen sobre los estilos por defecto del navegador (User Agent Stylesheet). Las reglas con la directiva !important tienen máxima prioridad técnica, aunque deben evitarse porque rompen la arquitectura.',
          '2. Especificidad: Si dos reglas provienen del mismo autor, gana la regla que tenga un selector más específico y concreto (por ejemplo, una clase supera a una etiqueta general).',
          '3. Orden de aparición en el código: Si dos reglas tienen exactamente la misma especificidad, la que esté escrita más abajo en el archivo CSS es la que "cae en cascada" y prevalece.'
        ],
        codeSnippet: {
          language: 'css',
          title: 'orden-cascada.css',
          code: `/* Regla 1 */
p {
  color: #94a3b8; /* Gris azulado */
}

/* Regla 2 (Escrita más abajo en el archivo) */
p {
  color: #38bdf8; /* Celeste */
}

/* Como ambas reglas apuntan a la etiqueta 'p' (misma especificidad),
   el texto de todos los párrafos será celeste (#38bdf8) porque Regla 2 apareció al final. */`
        }
      }
    ]
  },

  // 3. SELECTORES Y ESPECIFICIDAD
  {
    id: 'selectores-y-especificidad',
    slug: 'selectores-y-especificidad',
    categoryId: 'css',
    title: 'Selectores y especificidad: cómo el navegador decide qué estilo aplicar',
    subtitle: 'El sistema matemático de puntuación que define la jerarquía de tus estilos y cómo evitar !important.',
    excerpt: 'Selectores de tipo, clases, IDs, combinadores y pseudo-clases de interacción. Aprende la fórmula de cálculo de especificidad (0, 0, 0) y las metodologías profesionales para mantener tu código mantenible.',
    readTimeMinutes: 8,
    level: 'Esencial',
    publishedDate: '23 de Mayo, 2026',
    tags: ['Selectores', 'Especificidad', 'Combinadores', 'Pseudo-clases', 'BEM'],
    keyTakeaways: [
      'La especificidad en CSS se calcula mediante un sistema de tres componentes: (IDs, Clases/Atributos/Pseudo-clases, Elementos/Pseudo-elementos).',
      'Un selector de etiqueta (h1, p) tiene un peso bajo de (0, 0, 1).',
      'Un selector de clase (.boton) o pseudo-clase (:hover) tiene un peso medio de (0, 1, 0) y es el estándar de oro en la industria.',
      'Un selector de ID (#cabecera) tiene un peso muy alto de (1, 0, 0) y hace que sobreescribir estilos sea muy engorroso.',
      'Evita la tentación de usar !important como parche rápido: es síntoma de especificidad desordenada y genera deuda técnica grave.'
    ],
    sections: [
      {
        id: 'catalogo-de-selectores',
        title: 'El catálogo completo de selectores CSS',
        paragraphs: [
          'Para aplicar estilos de manera quirúrgica, CSS proporciona una amplia variedad de selectores:',
          '1. Selector de Tipo (Etiqueta): Selecciona todos los elementos que coincidan con la etiqueta HTML. Ejemplo: p, h2, a. Se usa para estilos globales y tipografía base.',
          '2. Selector de Clase: Comienza con un punto (.) y selecciona cualquier elemento que posea ese nombre en su atributo class. Ejemplo: .tarjeta, .btn-primario. Es reutilizable en múltiples elementos y es la base de las arquitecturas CSS modernas.',
          '3. Selector de ID: Comienza con una almohadilla (#) y apunta al elemento con ese id único. Ejemplo: #menu-principal. Su uso en CSS está desaconsejado debido a su excesiva especificidad.',
          '4. Combinadores jerárquicos:',
          '  • Descendiente (espacio): article p selecciona todos los párrafos dentro de un article, sin importar la profundidad.',
          '  • Hijo directo (>): ul > li selecciona únicamente los elementos <li> que son hijos inmediatos del <ul>.',
          '  • Hermano adyacente (+): h2 + p selecciona el primer párrafo inmediatamente posterior a un encabezado <h2>.',
          '5. Pseudo-clases de interacción: Representan estados dinámicos del elemento, como :hover (cursor encima), :focus-visible (enfocado mediante teclado para accesibilidad) o :active (pulsado).'
        ],
        codeSnippet: {
          language: 'css',
          title: 'selectores-variados.css',
          code: `/* Selector de tipo */
button {
  font-family: inherit;
  cursor: pointer;
}

/* Selector de clase reutilizable */
.btn-accion {
  background-color: #4f46e5;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

/* Pseudo-clase de interacción */
.btn-accion:hover {
  background-color: #4338ca;
}

/* Combinador de hijo directo */
.lista-navegacion > li {
  display: inline-block;
  margin-right: 1rem;
}`
        }
      },
      {
        id: 'calculo-matematico-especificidad',
        title: 'El sistema matemático de puntuación de especificidad',
        paragraphs: [
          'La especificidad no es un misterio arbitrario: es una fórmula matemática que el navegador evalúa mediante una tupla de tres valores numéricos (A, B, C):',
          '• Columna A (Peso Alto): Número de selectores de ID en la regla (#identificador).',
          '• Columna B (Peso Medio): Número de selectores de clase (.clase), selectores de atributo ([type="text"]) y pseudo-clases (:hover, :focus).',
          '• Columna C (Peso Bajo): Número de selectores de elemento (p, span, div) y pseudo-elementos (::before, ::after).',
          'Al comparar dos reglas, el navegador evalúa las columnas de izquierda a derecha. Una sola clase (0, 1, 0) siempre vencerá a diez elementos anidados (0, 0, 10). Un solo ID (1, 0, 0) siempre vencerá a una regla con diez clases (0, 10, 0).'
        ],
        codeSnippet: {
          language: 'css',
          title: 'ejemplos-especificidad.css',
          code: `/* Especificidad (0, 0, 1) -> 1 elemento */
p {
  color: #94a3b8;
}

/* Especificidad (0, 0, 2) -> 2 elementos */
div p {
  color: #cbd5e1;
}

/* Especificidad (0, 1, 0) -> 1 clase (¡Gana a div p!) */
.texto-destacado {
  color: #38bdf8;
}

/* Especificidad (0, 2, 0) -> 2 clases */
.tarjeta .texto-destacado {
  color: #f59e0b;
}

/* Especificidad (1, 0, 0) -> 1 ID (¡Gana a todas las anteriores!) */
#parrafo-unico {
  color: #ec4899;
}`
        },
        callout: {
          type: 'tip',
          title: 'Buenas prácticas profesionales de especificidad',
          text: 'La regla de oro en equipos de ingeniería es mantener la especificidad siempre baja y homogénea basando tus estilos exclusivamente en clases simples (.card, .card-title). Evita anidar selectores profundos (como body div.container div.wrapper p) y nunca utilices IDs en CSS.'
        }
      }
    ]
  },

  // 4. MODELO DE CAJA (BOX MODEL)
  {
    id: 'modelo-de-caja-box-model',
    slug: 'modelo-de-caja-box-model',
    categoryId: 'css',
    title: 'El Modelo de Caja (Box Model): margin, border, padding y content',
    subtitle: 'Todo elemento en una página web es secretamente una caja rectangular geométrica.',
    excerpt: 'Comprende las 4 capas de toda caja HTML, el fenómeno del colapso de márgenes verticales y por qué la propiedad box-sizing: border-box es el reseteo obligatorio en cualquier proyecto profesional.',
    readTimeMinutes: 8,
    level: 'Esencial',
    publishedDate: '27 de Mayo, 2026',
    tags: ['Box Model', 'Padding', 'Margin', 'Border', 'Border-Box', 'Colapso de Márgenes'],
    keyTakeaways: [
      'Todo elemento renderizado por el motor CSS ocupa un rectángulo geométrico compuesto por Content, Padding, Border y Margin.',
      'El Padding es el relleno interno entre el contenido y el borde; hereda el color de fondo del elemento.',
      'El Margin es el espacio perimetral externo transparente que separa a la caja de sus vecinas.',
      'En el modelo tradicional (content-box), añadir padding y borde aumenta el ancho exterior de la caja, provocando roturas de maquetación.',
      'La solución universal es aplicar * { box-sizing: border-box; }, haciendo que width incluya el padding y el border en su cálculo total.'
    ],
    sections: [
      {
        id: 'las-cuatro-capas-del-box-model',
        title: 'Las 4 capas concéntricas de toda caja en la web',
        paragraphs: [
          'Aunque una imagen sea circular gracias a border-radius: 50% o un botón tenga formas orgánicas, para el motor de maquetación de CSS todo elemento sin excepción se calcula como una caja rectangular.',
          'Dicha caja está compuesta por cuatro zonas concéntricas que se expanden desde el núcleo hacia el exterior:',
          '1. Contenido (Content Area): El núcleo donde se renderiza el texto, la fotografía o los elementos hijos. Sus dimensiones base se controlan con las propiedades width y height.',
          '2. Relleno (Padding Area): El espacio amortiguador que rodea al contenido. Es transparente pero adopta el color o imagen de fondo (background) del elemento. Se configura con padding-top, padding-right, padding-bottom y padding-left, o la propiedad abreviada padding: 1rem 2rem.',
          '3. Borde (Border Area): La línea perimetral que delimita la caja. Posee grosor (border-width), estilo (border-style: solid, dashed, none) y color (border-color).',
          '4. Margen (Margin Area): El espacio perimetral exterior y completamente transparente que aleja a esta caja de las demás cajas circundantes en el documento.'
        ]
      },
      {
        id: 'la-revolucion-de-border-box',
        title: 'El problema de content-box y la solución con border-box',
        paragraphs: [
          'Históricamente, el valor predeterminado del navegador para la propiedad box-sizing es content-box. En este modo, si defines una caja con width: 300px y luego añades padding: 20px y border: 2px, el ancho real físico que la caja ocupa en la pantalla será de 344px (300px + 20px izq + 20px der + 2px izq + 2px der).',
          'Este comportamiento provocaba constantes roturas en las rejillas de diseño: si colocabas dos cajas con width: 50% y les agregabas un simple borde o relleno, la suma superaba el 100% y la segunda caja caía torpemente a la línea siguiente.',
          'Con box-sizing: border-box, la fórmula matemática se invierte y se vuelve lógica: si defines width: 300px, la caja medirá exactamente 300px en pantalla en todo momento, y el navegador restará automáticamente el padding y el border del espacio reservado para el contenido interior.'
        ],
        codeSnippet: {
          language: 'css',
          title: 'reset-universal-box-sizing.css',
          code: `/* El reseteo universal que todo desarrollador incluye en su proyecto */
*, *::before, *::after {
  box-sizing: border-box;
}

/* Ahora los cálculos son limpios y predecibles */
.tarjeta-mitad {
  width: 50%;
  padding: 24px;              /* El padding no aumentará el ancho exterior */
  border: 1px solid #334155;  /* El borde tampoco romperá la grilla */
  margin: 16px 0;             /* Margen externo vertical */
}`
        }
      },
      {
        id: 'colapso-de-margenes',
        title: 'El fenómeno del Colapso de Márgenes (Margin Collapsing)',
        paragraphs: [
          'Un comportamiento que desconcierta a quienes aprenden CSS es el colapso de márgenes verticales. Cuando dos elementos de bloque adyacentes se encuentran en el flujo normal, sus márgenes verticales no se suman.',
          'Por ejemplo: si el primer párrafo tiene margin-bottom: 30px y el siguiente párrafo tiene margin-top: 20px, la distancia entre ellos no será de 50px, sino de 30px (el margen mayor absorbe y colapsa al menor).',
          'Es importante notar que los márgenes horizontales (margin-left y margin-right) nunca colapsan, y que los contenedores con display: flex o display: grid tampoco provocan colapso de márgenes en sus elementos hijos.'
        ]
      }
    ],
    interactiveDemoId: 'box-model-lab'
  },

  // 5. FLEXBOX SIN MISTERIO
  {
    id: 'flexbox-sin-misterio',
    slug: 'flexbox-sin-misterio',
    categoryId: 'css',
    title: 'Flexbox sin misterio: alineación y distribución en una sola dimensión',
    subtitle: 'La herramienta definitiva para ordenar elementos en filas o columnas con control absoluto.',
    excerpt: 'Domina los ejes Main Axis y Cross Axis, las propiedades del contenedor (justify-content, align-items, flex-direction, gap) y el comportamiento dinámico de los flex items (flex-grow, flex-shrink, flex-basis).',
    readTimeMinutes: 9,
    level: 'Esencial',
    publishedDate: '31 de Mayo, 2026',
    tags: ['Flexbox', 'Layout', 'Alineación', 'Ejes', 'gap', 'Responsive'],
    featured: true,
    keyTakeaways: [
      'Flexbox es un modelo unidimensional: está diseñado para distribuir elementos a lo largo de un solo eje a la vez (fila horizontal o columna vertical).',
      'El contenedor padre se activa con display: flex; sus hijos inmediatos se convierten automáticamente en flex items.',
      'justify-content alinea a lo largo del eje principal (Main Axis); align-items alinea en el eje transversal (Cross Axis).',
      'La propiedad moderna gap es la forma limpia de establecer separación física entre elementos sin márgenes residuales.',
      'Los flex items pueden encogerse o crecer dinámicamente para absorber o ceder espacio mediante la propiedad abreviada flex: 1.'
    ],
    sections: [
      {
        id: 'los-dos-ejes-de-flexbox',
        title: 'El secreto de los dos ejes: Main Axis y Cross Axis',
        paragraphs: [
          'Durante décadas, centrar un elemento verticalmente en CSS requería trucos arcanos como tablas invisibles o combinaciones complejas de position: absolute y transform: translateY(-50%). El Flexible Box Layout Module (Flexbox) se diseñó específicamente para resolver estas deficiencias.',
          'La clave conceptual de Flexbox consiste en entender que siempre opera sobre dos ejes ortogonales:',
          '1. Eje Principal (Main Axis): Por defecto corre en sentido horizontal, de izquierda a derecha. Sin embargo, su dirección está gobernada por la propiedad flex-direction: si defines flex-direction: column, el eje principal pasa a correr en sentido vertical, de arriba a abajo.',
          '2. Eje Transversal o Cruzado (Cross Axis): Corre siempre de forma estrictamente perpendicular al eje principal.'
        ],
        callout: {
          type: 'tip',
          title: 'Regla nemotécnica infalible',
          text: '• justify-content SIEMPRE alinea a lo largo del Eje Principal (hacia donde apunte flex-direction).\n• align-items SIEMPRE alinea a lo largo del Eje Cruzado (perpendicular al Eje Principal).'
        }
      },
      {
        id: 'propiedades-del-contenedor-flex',
        title: 'Propiedades del contenedor padre (Flex Container)',
        paragraphs: [
          'Al aplicar display: flex a un elemento, este se convierte en un contenedor flex y adquiere el control sobre la disposición de sus hijos directos:',
          '• flex-direction: row (por defecto, fila horizontal), column (columna vertical), row-reverse o column-reverse.',
          '• flex-wrap: nowrap (por defecto, comprime a todos los hijos en una sola línea aunque desborden), wrap (permite que los hijos salten a la siguiente fila si no caben).',
          '• justify-content: flex-start, flex-end, center, space-between (distribuye los elementos en los extremos), space-around o space-evenly.',
          '• align-items: stretch (por defecto, estira los hijos para igualar la altura), center (centrado perfecto en el eje cruzado), flex-start o flex-end.',
          '• gap: Define la distancia en pixeles o rem entre los hijos (ej. gap: 1.5rem), eliminando la necesidad de aplicar márgenes en los elementos individuales.'
        ],
        codeSnippet: {
          language: 'css',
          title: 'patrones-flexbox.css',
          code: `/* Patrón 1: Barra de navegación con logo a la izquierda y enlaces a la derecha */
.navbar {
  display: flex;
  justify-content: space-between; /* Extremos opuestos */
  align-items: center;            /* Centrado vertical perfecto */
  padding: 1rem 2rem;
}

/* Patrón 2: El centrado absoluto perfecto */
.contenedor-centrado {
  display: flex;
  justify-content: center;        /* Centro horizontal */
  align-items: center;            /* Centro vertical */
  min-height: 100vh;
}

/* Patrón 3: Lista de etiquetas con salto de línea automático */
.tags-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}`
        }
      },
      {
        id: 'propiedades-de-los-hijos',
        title: 'Propiedades de los elementos hijos (Flex Items)',
        paragraphs: [
          'Los elementos hijos también disponen de propiedades para negociar su tamaño individual dentro del contenedor:',
          '• flex-grow: Factor numérico sin unidades que indica qué proporción del espacio sobrante debe absorber este elemento. Un elemento con flex-grow: 2 absorberá el doble de espacio libre que uno con flex-grow: 1.',
          '• flex-shrink: Factor numérico que define cuánto puede reducirse el elemento si el espacio del contenedor resulta insuficiente.',
          '• flex-basis: El tamaño base inicial del elemento antes de que se distribuya el espacio libre restante.',
          '• Propiedad abreviada flex: La recomendación de la especificación es usar siempre la forma abreviada flex: 1 (que equivale internamente a flex: 1 1 0%), logrando que los elementos se distribuyan en anchos perfectamente equitativos.'
        ]
      }
    ],
    interactiveDemoId: 'flexbox-playground'
  },

  // 6. CSS GRID MODERNO
  {
    id: 'css-grid-moderno',
    slug: 'css-grid-moderno',
    categoryId: 'css',
    title: 'CSS Grid moderno: maquetando interfaces en dos dimensiones',
    subtitle: 'El sistema definitivo para diseñar cuadrículas completas de columnas y filas simultáneas.',
    excerpt: 'Mientras Flexbox es ideal para componentes y barras lineales en una dimensión, CSS Grid domina la arquitectura macro de páginas completas. Domina las fracciones (fr), repeat(), minmax() y el patrón de rejilla responsiva sin media queries.',
    readTimeMinutes: 8,
    level: 'Práctico',
    publishedDate: '4 de Junio, 2026',
    tags: ['CSS Grid', 'Maquetación', 'Columnas', 'Bidimensional', 'minmax', 'fr'],
    keyTakeaways: [
      'CSS Grid es un sistema bidimensional nativo: calcula y alinea filas y columnas de forma simultánea.',
      'La unidad fraccionaria fr representa una fracción proporcional del espacio disponible sobrante dentro del contenedor.',
      'La combinación grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) genera una galería de tarjetas completamente responsiva sin necesidad de escribir Media Queries.',
      'Con grid-template-areas puedes diagramar la estructura completa de una página mediante nombres de áreas descriptivos y legibles.',
      'Flexbox y Grid no compiten: se complementan. La mejor práctica es usar Grid para el esqueleto macro de la página y Flexbox para los componentes internos.'
    ],
    sections: [
      {
        id: 'bidimensional-vs-unidimensional',
        title: '¿Cuándo usar CSS Grid y cuándo Flexbox?',
        paragraphs: [
          'Una de las preguntas más recurrentes en el desarrollo Front-End es cuál de los dos sistemas de maquetación se debe elegir. La respuesta técnica es que resuelven problemas distintos pero colaboran en armonía:',
          '• Flexbox es unidimensional (Content-First): Su fortaleza radica en distribuir elementos en una sola línea continua (o fila o columna). Es ideal para menús de navegación, botones con icono y texto, tarjetas de comentarios y controles de formularios.',
          '• CSS Grid es bidimensional (Layout-First): Permite definir una estructura previa de filas y columnas simultáneas, ubicando elementos en intersecciones exactas de coordenadas. Es la herramienta suprema para maquetar la plantilla general de un sitio web (cabecera, barra lateral, contenido y pie) y para catálogos o galerías fotográficas en cuadrícula.'
        ]
      },
      {
        id: 'conceptos-clave-grid',
        title: 'Terminología arquitectónica de CSS Grid',
        paragraphs: [
          'Para entender la especificación de Grid conviene familiarizarse con sus conceptos anatómicos:',
          '• Grid Container: El elemento padre que declara display: grid.',
          '• Grid Lines: Las líneas divisoras invisibles numeradas (1, 2, 3...) que separan las columnas y las filas.',
          '• Grid Tracks: El espacio delimitado entre dos líneas adyacentes; es decir, una columna individual o una fila individual.',
          '• Grid Cell: La celda unitaria individual (la intersección entre una fila y una columna), análoga a la celda de una hoja de cálculo.',
          '• Grid Area: El espacio rectangular total formado por una o más celdas adyacentes.'
        ]
      },
      {
        id: 'el-patron-dorado-responsivo',
        title: 'El patrón de oro de rejillas responsivas sin Media Queries',
        paragraphs: [
          'Uno de los mayores triunfos de CSS Grid es la capacidad de crear cuadrículas adaptables a cualquier tamaño de pantalla sin escribir una sola consulta @media. Esto se logra combinando tres funciones maestras:',
          '1. repeat(): Evita tener que escribir manualmente 1fr 1fr 1fr.',
          '2. auto-fit: Le ordena al navegador: "calcula dinámicamente cuántas columnas caben en el ancho actual de la pantalla; si hay espacio para 4 columnas, pon 4; si en un móvil solo cabe 1, pon 1".',
          '3. minmax(280px, 1fr): Define que cada columna debe medir como mínimo 280px para que el contenido sea legible, pero si sobra espacio, debe expandirse proporcionalmente hasta 1fr para llenar el contenedor sin dejar huecos vacíos.'
        ],
        codeSnippet: {
          language: 'css',
          title: 'grid-magico-responsivo.css',
          code: `/* Galería de tarjetas totalmente fluida y responsive */
.catalogo-articulos {
  display: grid;
  /* Magia de CSS Grid: auto-adaptable desde móviles hasta monitores 4K */
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

/* Maquetación macro con áreas nominales */
.layout-principal {
  display: grid;
  grid-template-columns: 260px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "cabecera cabecera"
    "sidebar  contenido"
    "pie      pie";
  min-height: 100vh;
}

.cabecera  { grid-area: cabecera; }
.sidebar   { grid-area: sidebar; }
.contenido { grid-area: contenido; }
.pie       { grid-area: pie; }`
        }
      }
    ],
    interactiveDemoId: 'css-grid-visualizer'
  },

  // 7. RESPONSIVE DESIGN Y MEDIA QUERIES
  {
    id: 'responsive-design-media-queries',
    slug: 'responsive-design-media-queries',
    categoryId: 'css',
    title: 'Diseño adaptativo (Responsive Design) y Media Queries',
    subtitle: 'Aprende a transformar una pantalla de computador en una experiencia impecable para celular.',
    excerpt: 'Comprende el enfoque Mobile-First, la tríada del diseño responsivo y la sintaxis moderna de Media Queries. Diseña breakpoints fundamentados en el contenido y respeta las preferencias de accesibilidad del usuario.',
    readTimeMinutes: 7,
    level: 'Práctico',
    publishedDate: '7 de Junio, 2026',
    tags: ['Responsive', 'Media Queries', 'Mobile-First', 'Breakpoints', 'Accesibilidad'],
    keyTakeaways: [
      'El Diseño Web Responsivo fue conceptualizado en 2010 por Ethan Marcotte combinando rejillas fluidas, imágenes flexibles y Media Queries.',
      'El enfoque Mobile-First consiste en escribir los estilos base pensando en smartphones primero, añadiendo complejidad progresiva con min-width.',
      'Los puntos de quiebre (breakpoints) deben decidirse en función del momento en que el contenido se rompe o resulta incómodo, no basados en modelos específicos de dispositivos comerciales.',
      'Las Media Queries modernas admiten sintaxis de operadores de rango como @media (width >= 768px).',
      'Es buena práctica incluir consultas de accesibilidad como prefers-reduced-motion para respetar a usuarios con sensibilidad al movimiento.'
    ],
    sections: [
      {
        id: 'filosofia-mobile-first',
        title: 'La filosofía Mobile-First: por qué diseñar para móviles primero',
        paragraphs: [
          'Más del 60% del tráfico web mundial proviene hoy en día de dispositivos móviles. El enfoque histórico (Desktop-First) consistía en diseñar un sitio complejo para pantallas de 1920px y luego intentar comprimirlo o esconder elementos torpemente para que cupiera en un celular pequeño.',
          'La metodología Mobile-First invierte este paradigma de manera virtuosa:',
          '1. Empiezas escribiendo el CSS base sin ninguna Media Query, optimizado para la pantalla más reducida: una sola columna vertical, tipografía legible y navegación simplificada.',
          '2. A medida que la pantalla se amplía, utilizas consultas con min-width para expandir el diseño: organizar en dos columnas en tablets y en tres o cuatro columnas en computadores de escritorio.',
          'Ventaja técnica: El código CSS resultante es mucho más liviano y ordenado porque añade capas progresivas en lugar de sobrescribir y anular reglas complejas previas.'
        ]
      },
      {
        id: 'sintaxis-media-queries',
        title: 'Sintaxis clásica y moderna de Media Queries',
        paragraphs: [
          'Una Media Query permite condicionar la aplicación de un bloque de estilos al cumplimiento de ciertas características del dispositivo (ancho, orientación de pantalla, resolución o preferencias del sistema).',
          'En CSS actual coexisten dos sintaxis:',
          '• Sintaxis tradicional: @media screen and (min-width: 768px) { ... }',
          '• Sintaxis moderna (CSS Media Queries Level 4): Utiliza operadores matemáticos directos como @media (width >= 768px), mucho más legible e intuitiva.'
        ],
        codeSnippet: {
          language: 'css',
          title: 'responsive-mobile-first.css',
          code: `/* 1. Estilos Base: Móvil (se aplican a todas las pantallas por defecto) */
.contenedor-tarjetas {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

/* 2. Breakpoint Tablet (a partir de 768px hacia arriba) */
@media (min-width: 768px) {
  .contenedor-tarjetas {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 2rem;
  }
}

/* 3. Breakpoint Escritorio (a partir de 1024px hacia arriba) */
@media (min-width: 1024px) {
  .contenedor-tarjetas {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}

/* 4. Consulta de accesibilidad: desactivar animaciones si el usuario lo solicita en su SO */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}`
        }
      }
    ]
  }
];
