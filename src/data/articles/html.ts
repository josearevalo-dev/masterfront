import { Article } from '../../types';

export const HTML_ARTICLES: Article[] = [
  // 1. ¿QUÉ ES HTML Y CÓMO FUNCIONA LA WEB?
  {
    id: 'que-es-html',
    slug: 'que-es-html',
    categoryId: 'html',
    title: '¿Qué es HTML y cómo funciona la web?',
    subtitle: 'El cimiento elemental sobre el que se construye cualquier página en Internet.',
    excerpt: 'HTML no es un lenguaje de programación, sino de marcado declarativo. Descubre cómo las etiquetas estructuran información, la historia detrás del estándar y cómo el navegador traduce texto plano en una interfaz gráfica interactiva.',
    readTimeMinutes: 7,
    level: 'Introductorio',
    publishedDate: '15 de Mayo, 2026',
    tags: ['Fundamentos', 'Navegadores', 'DOM', 'Estándares Web'],
    featured: true,
    keyTakeaways: [
      'HTML significa HyperText Markup Language (Lenguaje de Marcado de Hipertexto) y describe la estructura semántica de un documento, no su diseño visual.',
      'No es un lenguaje de programación porque carece de estructuras de control de flujo como bucles, variables o funciones matemáticas.',
      'El navegador procesa el archivo HTML mediante un pipeline técnico: conversión de bytes a caracteres, generación de tokens, creación de nodos y ensamble del DOM (Document Object Model).',
      'Un elemento HTML estándar consta de etiqueta de apertura, atributos con configuración adicional, contenido textual o anidado y etiqueta de cierre.',
      'Existen elementos vacíos (void elements) como <img>, <br> o <input> que no admiten contenido interior ni etiqueta de cierre independiente.'
    ],
    sections: [
      {
        id: 'introduccion-al-marcado',
        title: 'El lenguaje que define la información',
        paragraphs: [
          'Cuando escribes una dirección web en la barra de tu navegador (como https://ejemplo.com) y pulsas Enter, desencadenas un diálogo cliente-servidor a través del protocolo HTTP o HTTPS. El servidor web localiza el recurso solicitado y envía como respuesta principal un flujo de bytes que corresponde a un archivo de texto con extensión .html.',
          'Ese archivo no contiene gráficos dibujados ni coordenadas fijas de pixeles. En su lugar, contiene texto plano enriquecido con instrucciones estructurales denominadas "etiquetas de marcado". Fue concebido a finales de 1989 por el físico Tim Berners-Lee en el laboratorio del CERN en Suiza, con la meta de que científicos e investigadores de todo el mundo pudieran enlazar y consultar documentos técnicos mediante hipervínculos ("hipertexto").',
          'Con el transcurso de las décadas, aquel modesto sistema de intercambio documental se transformó en el estándar global de la World Wide Web. Hoy en día, la especificación de HTML es desarrollada y mantenida por el WHATWG (Web Hypertext Application Technology Working Group), un consorcio formado por los principales fabricantes de navegadores (Apple, Google, Mozilla y Microsoft) que gestiona HTML como un "Living Standard" (estándar vivo y en continua evolución).'
        ],
        callout: {
          type: 'analogia',
          title: 'Analogía del periódico impreso',
          text: 'Imagina la redacción de un periódico antes de imprimir: el redactor marca en el borrador qué frase es el titular de primera plana, qué párrafo es la entradilla, qué bloque es una cita textual y qué pie de foto acompaña a la imagen. HTML cumple exactamente esa función: no define el color de la tinta ni el grosor del papel (eso es tarea de CSS), sino el rol y jerarquía de cada pieza de información.'
        }
      },
      {
        id: 'lenguaje-marcado-vs-programacion',
        title: '¿Por qué HTML no es un lenguaje de programación?',
        paragraphs: [
          'Una duda clásica entre principiantes es si aprender HTML equivale a aprender a programar. La respuesta técnica es no: HTML es un lenguaje de marcado declarativo (Markup Language).',
          'En un lenguaje de programación (como JavaScript, Python o C++), escribes algoritmos que resuelven problemas lógicos: evalúas condiciones (si el usuario es mayor de edad, haz esto; de lo contrario, haz aquello), ejecutas bucles repetitivos, manipulas memoria y calculas ecuaciones matemáticas. El código le dice a la computadora CÓMO procesar los datos paso a paso.',
          'En cambio, en un lenguaje de marcado declarativo, no defines procedimientos lógicos ni algoritmos; describes QUÉ es cada dato. Al escribir <h1>Manual de Vuelo</h1>, le indicas al navegador: "el texto encerrado es el encabezado de mayor jerarquía de este documento". Es el propio motor del navegador quien se encarga internamente de interpretar y presentar ese significado.'
        ]
      },
      {
        id: 'anatomia-de-una-etiqueta',
        title: 'Anatomía exhaustiva de un elemento HTML',
        paragraphs: [
          'En la terminología oficial del W3C y WHATWG, existe una distinción sutil pero importante entre "etiqueta" (tag) y "elemento" (element). La etiqueta es la sintaxis delimitada por corchetes angulares (< >), mientras que el elemento comprende todo el conjunto: la etiqueta de apertura, sus atributos, el contenido interno y la etiqueta de cierre.',
          'Una etiqueta de apertura contiene el nombre del elemento en minúsculas (por convención universal y buenas prácticas) y puede albergar uno o más atributos. Los atributos son pares clave-valor (nombre="valor") que aportan configuración complementaria: el destino de un enlace (href), la ruta de un archivo (src) o una clase identificadora para CSS (class).',
          'Es fundamental prestar atención a los "elementos vacíos" o void elements (como <img>, <input>, <hr>, <br> y <meta>). Estos elementos no encierran texto ni otros nodos hijos, por lo que nunca llevan etiqueta de cierre (</input> o </img> es un error de sintaxis). En HTML5 moderno no es necesario añadir la barra diagonal al final (<img />), aunque sigue siendo válida si prefieres esa convención.'
        ],
        codeSnippet: {
          language: 'html',
          title: 'anatomia-elemento.html',
          code: `<!-- Elemento estándar completo: apertura, atributo, contenido y cierre -->
<p class="destacado" id="primer-parrafo">
  Este texto es el contenido interno del elemento párrafo.
</p>

<!-- Elemento con anidamiento jerárquico -->
<div class="contenedor-tarjeta">
  <h2>Título de la Tarjeta</h2>
  <p>Párrafo complementario con un <a href="https://ejemplo.com" target="_blank" rel="noopener">enlace seguro</a>.</p>
</div>

<!-- Void element (elemento vacío): no lleva contenido interno ni etiqueta de cierre -->
<img src="avatar.webp" alt="Fotografía de perfil de María Gómez" width="96" height="96">`
        },
        callout: {
          type: 'tip',
          title: 'Regla de oro de anidamiento',
          text: 'Las etiquetas deben cerrarse en el orden inverso al que fueron abiertas. Si abres un párrafo <p> y dentro abres una negrita <strong>, debes cerrar primero </strong> y luego </p>. El solapamiento (<p>Texto <strong>incorrecto</p></strong>) produce árboles DOM rotos y comportamientos erráticos.'
        }
      },
      {
        id: 'como-lee-el-navegador',
        title: 'El pipeline del navegador: de bytes de texto a píxeles en pantalla',
        paragraphs: [
          '¿Qué ocurre en el interior de Chrome, Safari o Firefox cuando recibe tu código index.html? El navegador ejecuta una tubería de procesamiento (Critical Rendering Path) sumamente optimizada:',
          '1. Conversión de Bytes a Caracteres: El navegador lee los bytes brutos transmitidos por la red y los traduce a caracteres legibles siguiendo la codificación indicada (habitualmente UTF-8).',
          '2. Tokenización (Tokenizing): El analizador sintáctico (parser) convierte la cadena de caracteres en tokens individuales reconocidos por el estándar: etiquetas de inicio (<p>), etiquetas de fin (</p>), atributos y cadenas de texto.',
          '3. Creación de Nodos (Node Generation): Cada token se transforma en un objeto en memoria denominado Nodo, el cual posee propiedades y métodos específicos de su interfaz (por ejemplo, HTMLParagraphElement).',
          '4. Construcción del DOM (Document Object Model): Los nodos se conectan en un árbol jerárquico que refleja las relaciones padre-hijo del documento.',
          'Simultáneamente, el navegador procesa las hojas de estilo CSS para generar el CSSOM (CSS Object Model). La fusión del DOM y el CSSOM da origen al Render Tree (Árbol de Renderizado), que descarta elementos invisibles (como <head> o elementos con display: none). A continuación, el motor calcula la geometría exacta de cada elemento en la pantalla (Layout o Reflow) y finalmente transfiere los colores y texturas a la GPU para dibujarlos en la pantalla (Paint).'
        ]
      }
    ],
    interactiveDemoId: 'html-tags-preview'
  },

  // 2. ¿CÓMO COMENZAR CON HTML: TU PRIMER INDEX.HTML?
  {
    id: 'como-comenzar-con-html',
    slug: 'como-comenzar-con-html',
    categoryId: 'html',
    title: '¿Cómo comenzar con HTML: tu primer archivo index.html?',
    subtitle: 'El esqueleto mínimo obligatorio que todo documento web moderno debe incluir para ser válido y accesible.',
    excerpt: 'Aprende a preparar tu primer archivo con la estructura estándar de HTML5. Analizamos línea por línea el doctype, el atributo lang, la codificación UTF-8, el meta viewport y la separación fundamental entre metadatos y contenido.',
    readTimeMinutes: 7,
    level: 'Introductorio',
    publishedDate: '18 de Mayo, 2026',
    tags: ['index.html', 'Doctype', 'UTF-8', 'Viewport', 'Buenas Prácticas'],
    keyTakeaways: [
      'Por convención estándar de servidores web (Apache, Nginx, Node.js), index.html es el archivo predeterminado que se entrega al solicitar la raíz de un dominio.',
      'La declaración <!DOCTYPE html> no es una etiqueta HTML, sino una instrucción que activa el modo estándar (Standards Mode) en el navegador.',
      'El atributo lang en la etiqueta <html> es crítico para sintetizadores de voz para invidentes y para la indexación lingüística de Google.',
      'La etiqueta <meta charset="UTF-8"> previene problemas de codificación (mojibake) al garantizar soporte para acentos, caracteres especiales y emojis.',
      'La meta etiqueta viewport es imprescindible para que el diseño responda adecuadamente al ancho real de pantallas móviles sin zoom artificial.'
    ],
    sections: [
      {
        id: 'el-archivo-index',
        title: 'Por qué index.html es el punto de partida universal',
        paragraphs: [
          'Cuando un usuario introduce en el navegador una URL como "https://ejemplo.com/", el servidor web recibe una petición que no especifica ningún archivo concreto. Para evitar mostrar la lista cruda de directorios internos del disco duro, los servidores están configurados para buscar un archivo de bienvenida predeterminado, denominado históricamente "Directory Index".',
          'El nombre estándar universal de ese archivo es index.html. Por esta razón, todo proyecto de desarrollo web Front-End —desde una sencilla tarjeta de presentación personal hasta complejas aplicaciones de una sola página (SPA)— toma como punto de partida y raíz obligatoria este archivo.',
          'Para empezar a crear sitios web no requieres pagar servidores ni instalar programas pesados: únicamente necesitas un editor de código fuente (como Visual Studio Code) y cualquier navegador moderno (Google Chrome, Firefox, Safari o Microsoft Edge). Guardas el archivo con la extensión .html en tu disco duro y puedes abrirlo con doble clic en tu navegador para ver los resultados inmediatamente.'
        ]
      },
      {
        id: 'desglose-linea-por-linea',
        title: 'Desglose exhaustivo del esqueleto HTML5',
        paragraphs: [
          'Un documento HTML válido y profesional debe contener una estructura base que los navegadores exigen para interpretar el contenido correctamente. A continuación, desglosamos cada una de las líneas esenciales:'
        ],
        codeSnippet: {
          language: 'html',
          title: 'index.html (Plantilla Estándar)',
          code: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Primer Sitio Web | MasterFront</title>
  <link rel="stylesheet" href="estilos.css">
</head>
<body>
  <h1>¡Hola mundo desde HTML5!</h1>
  <p>Esta es mi primera página web construida con código limpio y semántico.</p>
</body>
</html>`
        },
        callout: {
          type: 'note',
          title: '¿Qué hace cada una de estas etiquetas?',
          text: '1. <!DOCTYPE html>: Obliga al navegador a usar el motor de renderizado HTML5 en "modo estándar" en lugar del obsoleto "modo quirks".\n2. <html lang="es">: El contenedor raíz de todo el documento, declarando el idioma español.\n3. <head>: Almacena metainformación técnica que la máquina necesita procesar.\n4. <meta charset="UTF-8">: Permite utilizar tildes, eñes y emojis sin caracteres rotos.\n5. <meta name="viewport"...>: Adapta la escala visual a pantallas móviles.\n6. <title>: Define el texto visible en la pestaña del navegador y en los resultados de búsqueda.\n7. <body>: Contenedor exclusivo de todo elemento gráfico y textual visible por el usuario.'
        }
      },
      {
        id: 'la-frontera-head-body',
        title: 'La regla de oro: la frontera entre <head> y <body>',
        paragraphs: [
          'Uno de los errores más frecuentes al comenzar es colocar elementos de contenido (como títulos <h1> o párrafos <p>) dentro del <head>, o colocar etiquetas de metadatos (como <title> o <meta>) dentro del <body>.',
          'La frontera es tajante y no admite excepciones: todo lo que vive dentro de <head> son instrucciones de configuración para el navegador, motores de búsqueda (Google) y redes sociales. El usuario no lo ve directamente en el lienzo de la página. Por el contrario, todo lo que reside dentro de <body> es lo que se dibuja en el viewport.',
          'Si accidentalmente colocas texto o botones dentro del <head>, los motores modernos de navegación intentarán forzar un cierre prematuro del head y moverán tus elementos al body de forma desordenada, lo cual puede arruinar la carga de estilos CSS y scripts vinculados.'
        ]
      },
      {
        id: 'flujo-de-trabajo-local',
        title: 'Flujo de trabajo para editar y previsualizar localmente',
        paragraphs: [
          'Para poner a prueba tu primer archivo index.html en tu computadora, sigue estos sencillos pasos profesionales:',
          '1. Crea una carpeta en tu computadora llamada por ejemplo "mi-primer-proyecto".',
          '2. Abre esa carpeta dentro de tu editor de código (como Visual Studio Code).',
          '3. Crea un archivo nuevo y nómbralo exactamente index.html.',
          '4. Copia la plantilla estándar de HTML5 mostrada arriba y guarda los cambios (Ctrl+S en Windows/Linux o Cmd+S en Mac).',
          '5. Abre tu explorador de archivos y haz doble clic sobre index.html. Tu navegador predeterminado lo abrirá mediante la dirección de archivo local (con protocolo file://).',
          'Consejo profesional: Si usas VS Code, instala la extensión "Live Server". Al hacer clic derecho sobre tu index.html y elegir "Open with Live Server", tu sitio se cargará a través de un servidor local (habitualmente en http://127.0.0.1:5500/) y la página se actualizará automáticamente en pantalla cada vez que guardes cambios en tu código, sin necesidad de recargar manualmente.'
        ]
      }
    ]
  },

  // 3. ETIQUETAS HTML ESENCIALES
  {
    id: 'etiquetas-html-esenciales',
    slug: 'etiquetas-html-esenciales',
    categoryId: 'html',
    title: 'Etiquetas HTML esenciales: textos, encabezados, enlaces e imágenes',
    subtitle: 'El repertorio fundamental de elementos que utilizarás en el 90% de tus proyectos web.',
    excerpt: 'Domina los encabezados jerárquicos h1 a h6, párrafos, elementos de énfasis, listas ordenadas y desordenadas, enlaces con atributos de seguridad y la inserción accesible de imágenes.',
    readTimeMinutes: 8,
    level: 'Esencial',
    publishedDate: '22 de Mayo, 2026',
    tags: ['Etiquetas', 'Encabezados', 'Enlaces', 'Imágenes', 'Listas', 'Accesibilidad'],
    keyTakeaways: [
      'Los encabezados <h1> a <h6> representan jerarquía de contenido (como los capítulos y subcapítulos de un libro), nunca deben usarse para alterar el tamaño visual de la letra.',
      'Solo debe existir un único encabezado <h1> por documento, el cual sintetiza la temática principal de la página.',
      'Los enlaces <a> pueden ser absolutos, relativos o anclas internas; si abren en nueva pestaña (target="_blank"), deben incluir rel="noopener noreferrer" por seguridad y rendimiento.',
      'El atributo alt en las imágenes <img> es un requisito crítico de accesibilidad para lectores de pantalla; omitirlo perjudica a personas con ceguera o baja visión.',
      'Las listas desordenadas (<ul>) y ordenadas (<ol>) solo deben contener elementos <li> como hijos directos.'
    ],
    sections: [
      {
        id: 'encabezados-y-jerarquia',
        title: 'Encabezados (h1 - h6) y estructuración de párrafos',
        paragraphs: [
          'En HTML existen seis niveles de encabezados: desde <h1> hasta <h6>. Un error conceptual habitual es creer que <h1> es "texto gigante" y <h6> es "texto diminuto". El tamaño en pixeles es una cuestión de presentación estética que se gestiona exclusivamente con CSS (font-size).',
          'En el plano semántico de HTML, los encabezados construyen el esquema lógico o índice del documento (document outline). Las pautas de accesibilidad web WCAG (Web Content Accessibility Guidelines) establecen que la jerarquía debe ser coherente y sin saltos arbitrarios: no debes pasar de un <h1> directamente a un <h4> solo porque te gusta cómo se ve.',
          'La regla universal es contar con exactamente un <h1> por página, que sintetiza el asunto supremo del documento. Luego, cada sección principal se introduce con un <h2>. Si dentro de esa sección necesitas subtemas, empleas <h3>, y así sucesivamente.'
        ],
        codeSnippet: {
          language: 'html',
          title: 'jerarquia-textos.html',
          code: `<!-- Encabezado supremo de la página -->
<h1>Arquitectura Web Front-End</h1>
<p>Introducción general al ecosistema del desarrollo web para clientes.</p>

<!-- Sección principal nivel 2 -->
<h2>1. El rol del navegador</h2>
<p>El navegador es el entorno de ejecución que interpreta HTML, CSS y JS.</p>

<!-- Subsección nivel 3 anidada bajo la sección anterior -->
<h3>1.1 Motores de renderizado</h3>
<p>Motores como Blink, Gecko y WebKit se encargan del parseo gráfico.</p>

<!-- Párrafo con elementos de énfasis semántico -->
<p>Es <strong>imprescindible</strong> entender este concepto antes de avanzar hacia <em>frameworks</em> modernos.</p>`
        },
        callout: {
          type: 'tip',
          title: 'Diferencia entre <strong> y <b>, <em> e <i>',
          text: '<strong> confiere importancia y gravedad semántica al texto (un lector de pantalla cambiará el tono de voz para enfatizarlo), mientras que <b> solo pone el texto en negrita visual sin connotación semántica. De igual manera, <em> indica énfasis conversacional, mientras que <i> solo aplica cursiva tipográfica (apropiada para términos técnicos o títulos de obras).'
        }
      },
      {
        id: 'enlaces-e-hipertexto',
        title: 'Hipervínculos: la etiqueta anchor (<a>) y atributos de seguridad',
        paragraphs: [
          'La esencia fundacional de la Web es la interconexión mediante enlaces. La etiqueta <a> (anchor) permite al usuario navegar hacia otra URL, descargar archivos o saltar a secciones específicas de la misma página mediante anclas (#seccion).',
          'El atributo principal es href (hypertext reference). Según el destino, los enlaces pueden clasificarse en:',
          '• Enlaces absolutos: apuntan a dominios externos completos (por ejemplo, href="https://developer.mozilla.org").',
          '• Enlaces relativos: apuntan a archivos dentro del mismo sitio (por ejemplo, href="/contacto.html" o href="../css/estilos.html").',
          '• Enlaces de protocolo especial: permiten iniciar llamadas telefónicas (href="tel:+34912345678") o redactar correos (href="mailto:hola@ejemplo.com").',
          '• Anclas intra-página: vinculan directamente al identificador de un elemento en el mismo documento (href="#preguntas-frecuentes").'
        ],
        codeSnippet: {
          language: 'html',
          title: 'enlaces-seguros.html',
          code: `<!-- Enlace interno a otra página del mismo sitio -->
<a href="/articulos/css.html">Leer artículos de CSS</a>

<!-- Enlace a un ancla en la misma página -->
<a href="#conclusion">Saltar a la conclusión</a>

<!-- Enlace externo que abre en pestaña nueva con directivas de seguridad -->
<a href="https://w3.org" target="_blank" rel="noopener noreferrer">
  Visitar el consorcio W3C
</a>`
        },
        callout: {
          type: 'warning',
          title: 'Vulnerabilidad reverse tabnabbing',
          text: 'Cuando utilizas target="_blank" para abrir un enlace externo en una pestaña nueva, la página externa obtiene una referencia a la pestaña original a través del objeto window.opener de JavaScript. Esto permite que una página maliciosa redirija silenciosamente la pestaña de tu sitio a una web fraudulenta de phishing. Para neutralizar este riesgo, añade siempre rel="noopener noreferrer". Los navegadores modernos ya lo aplican por defecto, pero explicitarlo es una buena práctica obligatoria en la industria.'
        }
      },
      {
        id: 'imagenes-y-multimedia',
        title: 'Imágenes (<img>): rendimiento, formatos y accesibilidad real',
        paragraphs: [
          'La etiqueta <img> es un elemento vacío (void element) que incrusta un recurso gráfico en el flujo del documento. Posee dos atributos obligatorios según la especificación:',
          '1. src (source): La ruta relativa o URL absoluta donde se aloja el archivo de imagen.',
          '2. alt (alternative text): La descripción textual del contenido de la imagen. Si la imagen falla en cargar (por conexión inestable o enlace roto), este texto se muestra en su lugar. Lo más importante: los programas lectores de pantalla utilizados por personas ciegas leen este atributo en voz alta.',
          'Formatos recomendados: Para fotografías complejas, prefiere formatos de compresión moderna como WebP o AVIF (mucho más ligeros que los antiguos JPEG). Para logotipos, iconos y gráficos vectoriales nítidos a cualquier resolución, utiliza SVG (Scalable Vector Graphics).',
          'Para optimizar el rendimiento y evitar saltos bruscos de contenido (fenómeno conocido como Cumulative Layout Shift o CLS en las Core Web Vitals de Google), incluye siempre los atributos width y height numéricos en la etiqueta. Además, puedes añadir loading="lazy" para que el navegador posponga la descarga de imágenes que estén fuera del área visible inicial de la pantalla.'
        ],
        codeSnippet: {
          language: 'html',
          title: 'imagen-optimizada.html',
          code: `<!-- Imagen moderna, accesible y optimizada con lazy loading -->
<img 
  src="/imagenes/diagrama-front-end.webp" 
  alt="Diagrama arquitectónico que muestra la interacción entre HTML, CSS y JavaScript"
  width="800" 
  height="450" 
  loading="lazy"
>

<!-- Imagen meramente decorativa (patrón o adorno que no aporta información) -->
<!-- El atributo alt se deja vacío intencionalmente para que los lectores de pantalla lo ignoren -->
<img src="/imagenes/onda-decorativa.svg" alt="" aria-hidden="true">`
        }
      },
      {
        id: 'listas-en-html',
        title: 'Listas ordenadas, desordenadas y de descripción',
        paragraphs: [
          'Las listas son la herramienta canónica para agrupar series de elementos relacionados. En HTML disponemos de tres variantes principales:',
          '• Listas desordenadas (<ul> - Unordered List): para colecciones donde el orden de los elementos no altera el significado (por ejemplo, ingredientes de una receta, listas de enlaces de navegación o características de un producto). Sus hijos directos deben ser exclusivamente elementos <li> (List Item).',
          '• Listas ordenadas (<ol> - Ordered List): para secuencias donde el orden numérico es secuencial y crucial (por ejemplo, los pasos cronológicos de una guía o el podio de una competencia). Admiten atributos como start="5" o reversed.',
          '• Listas de descripción (<dl> - Description List): compuestas por términos (<dt> - Definition Term) y sus correspondientes descripciones (<dd> - Definition Description). Son ideales para glosarios de términos, especificaciones de productos o metadatos clave-valor.'
        ],
        codeSnippet: {
          language: 'html',
          title: 'listas.html',
          code: `<!-- Lista ordenada de pasos -->
<ol>
  <li>Descargar un editor de código como Visual Studio Code.</li>
  <li>Crear un archivo llamado index.html.</li>
  <li>Escribir la estructura básica y previsualizar en el navegador.</li>
</ol>

<!-- Lista de descripción (glosario) -->
<dl>
  <dt>HTML</dt>
  <dd>Lenguaje de marcado que provee la estructura del documento.</dd>
  <dt>CSS</dt>
  <dd>Lenguaje de hojas de estilo que define la apariencia visual.</dd>
</dl>`
        }
      }
    ],
    interactiveDemoId: 'html-tags-preview'
  },

  // 4. ESTRUCTURA SEMÁNTICA HTML
  {
    id: 'estructura-semantica-html',
    slug: 'estructura-semantica-html',
    categoryId: 'html',
    title: 'Semántica web: por qué usar main, header, article y section',
    subtitle: 'Cómo dotar de significado real a tu código más allá del genérico div y construir páginas accesibles.',
    excerpt: 'Comprende la diferencia entre maquetar con cajones anónimos y emplear etiquetas con propósito. Analizamos los puntos de referencia (landmarks), el árbol de accesibilidad y cómo Google y los lectores de pantalla entienden tu página.',
    readTimeMinutes: 7,
    level: 'Esencial',
    publishedDate: '26 de Mayo, 2026',
    tags: ['Semántica', 'Accesibilidad', 'SEO', 'HTML5', 'Landmarks'],
    keyTakeaways: [
      'HTML semántico utiliza etiquetas que describen el significado del contenido para máquinas y humanos, no su apariencia gráfica.',
      'El elemento <main> define el núcleo temático central del documento y solo debe existir uno por página.',
      'Un <article> debe tener sentido autónomo completo fuera del contexto de la página (por ejemplo, en un lector RSS o sindicación de contenidos).',
      'Una <section> agrupa contenido temático relacionado y debe comenzar habitualmente con un encabezado jerárquico.',
      'El uso de landmarks semánticos permite a los usuarios con discapacidad visual navegar velozmente entre secciones usando atajos de teclado.'
    ],
    sections: [
      {
        id: 'que-es-la-semantica',
        title: 'El problema histórico de la "divitis" y la solución de HTML5',
        paragraphs: [
          'En las versiones anteriores a HTML5 (como HTML 4.01), los desarrolladores contaban con muy pocas etiquetas estructurales. Como consecuencia, prácticamente toda la arquitectura de un sitio web se resolvía creando contenedores genéricos <div> acompañados de nombres de clases inventados por cada programador: <div class="cabecera">, <div class="menu-navegacion">, <div class="caja-noticia">, <div class="pie-pagina">.',
          'Esta práctica generó el fenómeno conocido en la industria como "divitis": páginas compuestas por decenas de cajas anónimas e indistinguibles entre sí para las computadoras. Para un motor de búsqueda como Google o para una persona ciega que navega mediante un sintetizador de voz (lector de pantalla JAWS, NVDA o VoiceOver), un <div> no aporta ningún significado semántico: es simplemente una caja neutra vacía de propósito.',
          'En 2014, la llegada oficial de HTML5 revolucionó esta situación al introducir un catálogo de elementos con significado estructural intrínseco. Ahora, la propia etiqueta declara la función de la sección sin necesidad de interpretar nombres de clases arbitrarios.'
        ]
      },
      {
        id: 'arbol-accesibilidad-landmarks',
        title: 'Puntos de referencia (Landmarks) y el Árbol de Accesibilidad',
        paragraphs: [
          'Cuando el navegador procesa tu HTML semántico, no solo genera el DOM visual: genera de forma paralela el Accessibility Tree (Árbol de Accesibilidad). Las tecnologías de asistencia se conectan a este árbol para ofrecer una navegación eficiente a usuarios con diversas discapacidades.',
          'Por ejemplo, las etiquetas semánticas clave exponen de manera nativa los llamados ARIA Landmarks (puntos de referencia de orientación):',
          '• <header> actúa como el punto de referencia "banner".',
          '• <nav> actúa como el punto de referencia "navigation".',
          '• <main> actúa como el punto de referencia "main".',
          '• <footer> actúa como el punto de referencia "contentinfo".',
          '• <aside> actúa como el punto de referencia "complementary".',
          'Gracias a estos puntos de referencia, una persona invidente puede presionar una sola tecla en su teclado para saltarse toda la barra de menús y aterrizar directamente en el contenido central (<main>), ahorrándose tener que escuchar cientos de enlaces repetitivos en cada recarga de página.'
        ]
      },
      {
        id: 'catalogo-etiquetas-semanticas',
        title: 'Guía detallada de cada elemento semántico',
        paragraphs: [
          'A continuación revisamos la definición técnica y el caso de uso preciso de cada elemento:',
          '1. <header>: Representa el encabezado introductorio de una página completa o de una sección individual. Suele albergar logotipos, barras de búsqueda y menús.',
          '2. <nav>: Reservado exclusivamente para bloques con enlaces de navegación principales (menú global, migas de pan o índices de capítulos). No toda lista de enlaces debe ser un <nav>: los enlaces legales del pie de página suelen bastar dentro de un simple <ul>.',
          '3. <main>: El contenido nuclear y exclusivo del documento. No debe incluir elementos que se repitan en múltiples páginas (como barras laterales globales, cabeceras o pies de página). Por especificación, solo debe haber un <main> visible en el documento.',
          '4. <article>: Representa una composición autónoma y autocontenida que tendría perfecto sentido por sí misma si fuera extraída y publicada de forma independiente (un artículo periodístico, una entrada de blog, una reseña de producto o un comentario de usuario).',
          '5. <section>: Representa una sección temática genérica dentro de un documento. A diferencia de un simple <div> (que se usa con fines puramente estéticos o de maquetación CSS), una <section> debe tener coherencia temática y habitualmente comienza con su propio encabezado (<h2> o <h3>).',
          '6. <aside>: Contenido tangencialmente relacionado con el contenido que lo rodea (notas al margen, enlaces a artículos recomendados, biografía breve del redactor o glosarios complementarios).',
          '7. <footer>: Pie de cierre del documento o de un artículo. Contiene datos de autoría, enlaces a políticas de privacidad, términos de servicio y avisos de copyright.'
        ],
        codeSnippet: {
          language: 'html',
          title: 'arquitectura-semantica.html',
          code: `<body>
  <!-- Cabecera principal del sitio web -->
  <header>
    <a href="/" class="logotipo">MasterFront</a>
    <nav aria-label="Navegación principal">
      <ul>
        <li><a href="/html">HTML</a></li>
        <li><a href="/css">CSS</a></li>
        <li><a href="/javascript">JavaScript</a></li>
      </ul>
    </nav>
  </header>

  <!-- Contenido principal único de la página -->
  <main>
    <article>
      <header>
        <h1>Introducción al Desarrollo Web</h1>
        <p>Publicado por Carlos Mendoza el 15 de Octubre</p>
      </header>

      <section>
        <h2>Los cimientos del navegador</h2>
        <p>El código HTML se procesa secuencialmente para generar el DOM...</p>
      </section>

      <section>
        <h2>Separación de responsabilidades</h2>
        <p>Mantener el diseño en CSS y la lógica en JavaScript...</p>
      </section>
    </article>

    <!-- Barra lateral con información tangencial -->
    <aside aria-label="Lecturas complementarias">
      <h3>Artículos relacionados</h3>
      <ul>
        <li><a href="#flexbox">Guía completa de Flexbox</a></li>
      </ul>
    </aside>
  </main>

  <!-- Pie de página institucional -->
  <footer>
    <p>© 2026 MasterFront. Plataforma educativa abierta.</p>
  </footer>
</body>`
        }
      }
    ],
    interactiveDemoId: 'html-semantic-tree'
  },

  // 5. FORMULARIOS HTML
  {
    id: 'formularios-html',
    slug: 'formularios-html',
    categoryId: 'html',
    title: 'Formularios web: inputs, etiquetas y validación nativa accesible',
    subtitle: 'El puente interactivo mediante el cual los usuarios envían datos y se comunican con aplicaciones.',
    excerpt: 'Descubre cómo diseñar formularios robustos usando form, label, inputs especializados, fieldset y botones de envío. Aprende a aplicar validaciones nativas de HTML5 sin necesidad de JavaScript.',
    readTimeMinutes: 7,
    level: 'Práctico',
    publishedDate: '30 de Mayo, 2026',
    tags: ['Formularios', 'Inputs', 'Labels', 'Validación', 'UX', 'Accesibilidad'],
    keyTakeaways: [
      'Todo control de entrada (<input>, <textarea>, <select>) debe estar asociado de forma explícita a un <label> mediante el par for e id.',
      'El atributo type determina el teclado virtual que se abre en dispositivos móviles (teléfono, correo, numérico).',
      'HTML5 incluye validación nativa con atributos como required, min, max, minlength y pattern sin requerir scripts.',
      'El elemento <button> dentro de un <form> tiene por defecto type="submit"; si deseas un botón sin acción de envío, debes explicitar type="button".',
      'Agrupar campos relacionados mediante <fieldset> y <legend> mejora drásticamente la usabilidad en formularios complejos.'
    ],
    sections: [
      {
        id: 'anatomia-formulario',
        title: 'Anatomía del elemento <form> y métodos de envío',
        paragraphs: [
          'Un formulario web se encapsula mediante la etiqueta <form>. Este elemento actúa como el contenedor que recopila los valores ingresados por el usuario y define a dónde y cómo se despacharán.',
          'Sus dos atributos cruciales son:',
          '1. action: La URL del endpoint o servicio backend que procesará los datos recibidos (por ejemplo, /api/registro o /enviar-mensaje).',
          '2. method: El verbo HTTP de envío. Habitualmente es "GET" (los datos se adjuntan en la barra de direcciones como parámetros de consulta ?nombre=ana, ideal para buscadores) o "POST" (los datos viajan en el cuerpo de la petición HTTP de forma oculta a la URL, obligatorio para contraseñas, pagos o datos sensibles).'
        ]
      },
      {
        id: 'la-dupla-label-input',
        title: 'La conexión inseparable entre <label> e <input>',
        paragraphs: [
          'El error más recurrente en principiantes es colocar un campo de texto con un texto suelto al lado o confiar únicamente en el atributo placeholder. Esto rompe la accesibilidad y degrada la experiencia de usuario.',
          'La etiqueta <label> (etiqueta de texto descriptiva) debe vincularse de manera unívoca con su <input> correspondiente. Hay dos maneras de lograrlo:',
          '• Vinculación explícita (Recomendada): Colocando el atributo for en el label con el mismo valor exacto que el atributo id del input.',
          '• Vinculación implícita: Envolviendo el input dentro de la propia etiqueta label.',
          'Beneficio de usabilidad: Cuando un usuario hace clic o toca con el dedo sobre el texto del <label>, el cursor se sitúa automáticamente dentro del campo de entrada o se activa la casilla de verificación. En teléfonos móviles con pantallas reducidas, esto amplía enormemente el área táctil efectiva.'
        ],
        codeSnippet: {
          language: 'html',
          title: 'formulario-accesible.html',
          code: `<form action="/procesar-registro" method="POST">
  <!-- Grupo 1: Nombre completo -->
  <div class="campo">
    <label for="nombre-usuario">Nombre completo:</label>
    <input 
      type="text" 
      id="nombre-usuario" 
      name="nombre" 
      placeholder="Ej. Ana Pérez" 
      required
      minlength="3"
    >
  </div>

  <!-- Grupo 2: Correo electrónico -->
  <div class="campo">
    <label for="correo-electronico">Correo electrónico corporativo:</label>
    <input 
      type="email" 
      id="correo-electronico" 
      name="correo" 
      placeholder="ana@empresa.com" 
      required
    >
  </div>

  <!-- Grupo 3: Selector de opción -->
  <div class="campo">
    <label for="interes-principal">Área de mayor interés:</label>
    <select id="interes-principal" name="area_interes">
      <option value="html">Estructura y Semántica (HTML)</option>
      <option value="css">Diseño y Layouts (CSS)</option>
      <option value="js">Lógica e Interactividad (JS)</option>
    </select>
  </div>

  <!-- Botón de envío explícito -->
  <button type="submit">Completar registro</button>
</form>`
        }
      },
      {
        id: 'catalogo-inputs-y-teclados-moviles',
        title: 'Tipos de input y optimización de teclados en smartphones',
        paragraphs: [
          'El atributo type del elemento <input> no solo condiciona la apariencia del control; en dispositivos táctiles como teléfonos y tablets, le indica al sistema operativo qué tipo de teclado virtual debe desplegar ante el usuario:',
          '• type="text": Teclado alfanumérico convencional.',
          '• type="email": Teclado con acceso directo a la arroba (@) y al punto com (.com).',
          '• type="tel": Teclado numérico ampliado para marcación de llamadas.',
          '• type="number": Teclado numérico estricto con flechas de incremento (soporta atributos min, max y step).',
          '• type="password": Oculta los caracteres ingresados con puntos o asteriscos de seguridad.',
          '• type="checkbox": Casilla de selección múltiple independiente.',
          '• type="radio": Botón de selección única excluyente. Para que formen un grupo alternativo, todos los radio buttons del grupo deben compartir el mismo atributo name exacto.',
          '• type="date": Selector nativo de calendario del sistema operativo.'
        ]
      },
      {
        id: 'validacion-nativa-html5',
        title: 'Validación nativa en el navegador (Constraint Validation)',
        paragraphs: [
          'Antes de HTML5, para verificar que un usuario no enviara un formulario vacío o que su correo tuviera formato válido se requería escribir decenas de líneas de JavaScript. Hoy en día, el propio navegador incluye un motor de validación nativo y automático mediante atributos declarativos:',
          '• required: Impide enviar el formulario si el campo está vacío.',
          '• minlength / maxlength: Controla la longitud mínima y máxima de caracteres permitidos.',
          '• min / max: Establece rangos numéricos o de fechas.',
          '• pattern="[A-Za-z]{3,}": Permite definir expresiones regulares (RegEx) para forzar patrones específicos (como códigos postales o números de documento).',
          'Al pulsar el botón de submit, si un campo infringe alguna de estas reglas, el navegador detiene el envío al instante y despliega un mensaje de error localizado en el idioma del usuario.'
        ]
      }
    ]
  },

  // 6. METADATOS Y HEAD HTML
  {
    id: 'metadatos-head-html',
    slug: 'metadatos-head-html',
    categoryId: 'html',
    title: 'El misterioso <head>: meta tags, viewport y cómo Google lee tu página',
    subtitle: 'Las directivas técnicas invisibles que configuran tu sitio ante motores de búsqueda, navegadores y redes sociales.',
    excerpt: 'Entiende en profundidad qué ocurre dentro de la etiqueta head: meta charset, viewport responsivo, SEO básico (title y description), favicons vectoriales y tarjetas de Open Graph para WhatsApp y Twitter.',
    readTimeMinutes: 7,
    level: 'Práctico',
    publishedDate: '2 de Junio, 2026',
    tags: ['Head', 'Meta Tags', 'SEO', 'Viewport', 'Open Graph', 'Rendimiento'],
    keyTakeaways: [
      'El elemento <head> es una sala de máquinas técnica que no renderiza contenido visible en la pantalla.',
      'La meta etiqueta viewport previene que los navegadores móviles escalen la página como si fuera un monitor de escritorio de 980px.',
      'El elemento <title> es el factor on-page más influyente para motores de búsqueda y la etiqueta visible en pestañas e historiales.',
      'Las etiquetas del protocolo Open Graph (og:title, og:image) configuran la vista previa enriquecida al compartir enlaces por redes o aplicaciones de mensajería.',
      'Vincular scripts con el atributo defer en el head garantiza una descarga paralela sin bloquear el renderizado del DOM.'
    ],
    sections: [
      {
        id: 'el-rol-del-head',
        title: 'El centro de control de metadatos del documento',
        paragraphs: [
          'Mientras que el <body> es el lienzo donde vive la experiencia visual del usuario, el <head> es la cabina de instrumentación técnica del documento. Todo lo que reside en su interior está diseñado para ser leído por máquinas: el motor de renderizado del navegador, el rastreador de Google (Googlebot), las arañas de indexación de redes sociales o los lectores RSS.',
          'Un <head> mal configurado puede provocar desastres silenciosos: desde caracteres con tildes que se muestran rotos (mojibake como "diseÃ±o"), hasta páginas web que en teléfonos móviles se ven diminutas y lejanas, pasando por enlaces compartidos en WhatsApp que carecen de imagen y título.'
        ]
      },
      {
        id: 'la-etiqueta-viewport',
        title: 'La meta etiqueta viewport y la revolución móvil',
        paragraphs: [
          'En los primeros teléfonos inteligentes (como el iPhone original en 2007), la mayoría de los sitios web estaban maquetados para pantallas de computadores de escritorio de al menos 960 o 1024 pixeles de ancho. Para permitir que el usuario pudiera navegar por esos sitios sin romper el diseño, los navegadores móviles inventaron un "viewport virtual" de 980px y luego reducían la escala óptica de toda la página para que cupiera en la pantalla pequeña.',
          'El resultado era que la página se veía microscópica y obligaba al usuario a hacer "pellizco con los dedos" (pinch-to-zoom) para poder leer cualquier párrafo.',
          'La línea <meta name="viewport" content="width=device-width, initial-scale=1.0"> neutraliza este comportamiento y le dice al navegador móvil: "ajusta el ancho del área de dibujo exactamente al ancho físico real de la pantalla del dispositivo (width=device-width) y establece el zoom inicial al 100% (initial-scale=1.0)". Sin esta línea, ninguna regla de diseño responsivo de CSS funcionará correctamente en smartphones.'
        ]
      },
      {
        id: 'seo-y-open-graph',
        title: 'SEO técnico y tarjetas sociales (Open Graph y Twitter Cards)',
        paragraphs: [
          'Para que tu contenido destaque cuando un usuario lo encuentra en Google o lo comparte con amigos en redes, el <head> requiere metadatos específicos:',
          '• <title>: La longitud ideal recomendada oscila entre 50 y 60 caracteres. Google lo utiliza como el enlace azul en sus resultados de búsqueda y el navegador lo muestra en la pestaña.',
          '• <meta name="description" content="...">: Un resumen sintético de entre 140 y 160 caracteres que sintetiza la propuesta del documento. Google suele utilizarlo como el texto descriptivo (snippet) debajo del título.',
          '• Open Graph Protocol: Creado por Facebook y adoptado por la industria (WhatsApp, LinkedIn, Telegram, Slack). Etiquetas como og:title, og:description, og:image y og:url determinan la tarjeta visual que se genera al compartir el enlace.',
          '• Twitter Cards: Etiquetas como twitter:card y twitter:title para personalizar la apariencia en la plataforma X/Twitter.'
        ],
        codeSnippet: {
          language: 'html',
          title: 'head-completo-profesional.html',
          code: `<head>
  <!-- 1. Codificación de caracteres (siempre en la primera línea del head) -->
  <meta charset="UTF-8">

  <!-- 2. Viewport para diseño móvil -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- 3. Título y descripción para SEO -->
  <title>MasterFront | Artículos Esenciales de Desarrollo Front-End</title>
  <meta name="description" content="Aprende los fundamentos de HTML, CSS y JavaScript mediante explicaciones claras, sin rutas forzadas ni complejidades innecesarias.">

  <!-- 4. Favicon e iconos -->
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">

  <!-- 5. Tarjetas sociales Open Graph (WhatsApp, LinkedIn, Facebook) -->
  <meta property="og:title" content="MasterFront | Artículos de Front-End">
  <meta property="og:description" content="Guías claras y accesibles para dominar la web moderna.">
  <meta property="og:image" content="https://masterfront.dev/og-banner.png">
  <meta property="og:url" content="https://masterfront.dev">
  <meta property="og:type" content="website">

  <!-- 6. Hojas de estilo externas y precarga de fuentes -->
  <link rel="stylesheet" href="/estilos.css">

  <!-- 7. Scripts diferidos para no bloquear el renderizado -->
  <script src="/app.js" defer></script>
</head>`
        }
      }
    ]
  }
];
