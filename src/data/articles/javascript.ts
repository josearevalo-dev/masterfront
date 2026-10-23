import { Article } from '../../types';

export const JAVASCRIPT_ARTICLES: Article[] = [
  // 1. ¿QUÉ ES JAVASCRIPT Y CUÁL ES SU ROL EN EL FRONT-END?
  {
    id: 'que-es-javascript',
    slug: 'que-es-javascript',
    categoryId: 'javascript',
    title: '¿Qué es JavaScript y cuál es su rol en el Front-End?',
    subtitle: 'El lenguaje que transformó la web de un catálogo estático a una plataforma de aplicaciones interactivas en tiempo real.',
    excerpt: 'Conoce la historia de Brendan Eich en Netscape, la estandarización ECMAScript, cómo operan los motores modernos (V8, SpiderMonkey) y el modelo de ejecución de hilo único (Single Threaded) y Event Loop en el navegador.',
    readTimeMinutes: 8,
    level: 'Introductorio',
    publishedDate: '17 de Mayo, 2026',
    tags: ['JavaScript', 'ECMAScript', 'V8', 'Event Loop', 'Fundamentos'],
    featured: true,
    keyTakeaways: [
      'JavaScript es un lenguaje de programación de alto nivel, interpretado y compilado Just-In-Time (JIT), multiparadigma, de tipado dinámico y basado en prototipos.',
      'No tiene ninguna relación técnica con Java: el parecido de nombre fue un acuerdo de marketing entre Netscape y Sun Microsystems en 1995.',
      'La especificación oficial y estandarizada del lenguaje se denomina ECMAScript y es gobernada por el comité técnico TC39.',
      'En el navegador, JavaScript se ejecuta en un solo hilo principal (Single Thread) gestionado mediante una Pila de Llamadas (Call Stack) y un Bucle de Eventos (Event Loop).',
      'HTML aporta la estructura semántica, CSS la capa estética y visual, y JavaScript la lógica funcional, la interactividad y la comunicación con servicios externos.'
    ],
    sections: [
      {
        id: 'del-documento-a-la-aplicacion',
        title: 'Historia: de un script de 10 días a la tecnología más utilizada del mundo',
        paragraphs: [
          'A mediados de la década de 1990, navegar por Internet era una experiencia lenta y desconectada. Si un usuario rellenaba un formulario de diez campos y cometía un error en el código postal, debía pulsar "Enviar", esperar a que la petición viajara por la red hasta el servidor, y esperar a que el servidor le devolviera una página completa informándole del error.',
          'En mayo de 1995, Brendan Eich, un ingeniero de Netscape Communications, creó un lenguaje de programación en tan solo diez días con el objetivo de permitir que el propio navegador pudiera validar formularios e interactuar con el usuario sin esperar al servidor.',
          'Originalmente bautizado como Mocha y luego como LiveScript, se le cambió el nombre a JavaScript debido a un acuerdo comercial con Sun Microsystems para aprovechar la enorme popularidad que tenía el lenguaje Java en aquel momento. A pesar de la similitud en el nombre, son dos lenguajes completamente distintos en sintaxis, filosofía y arquitectura.',
          'Para evitar que los distintos navegadores fragmentaran el lenguaje con versiones incompatibles, en 1997 se encomendó su estandarización a la asociación internacional ECMA. Desde entonces, el estándar formal de JavaScript se denomina técnicamente ECMAScript.'
        ],
        callout: {
          type: 'analogia',
          title: 'Analogía del automóvil moderno',
          text: 'Imagina la construcción de un coche: HTML es el chasis de acero, la estructura del motor y la posición de las puertas. CSS es el acabado de pintura metalizada, la tapicería de cuero, el diseño aerodinámico y la iluminación interior. JavaScript es el sistema electrónico, la transmisión automática, los sensores de proximidad, el encendido por botón y el sistema de navegación GPS. Sin JavaScript, el coche puede verse impecable, pero permanece inmóvil.'
        }
      },
      {
        id: 'como-funciona-el-motor-js',
        title: '¿Cómo ejecuta el navegador el código JavaScript?',
        paragraphs: [
          'A diferencia de lenguajes como C++ o Rust (que se compilan anticipadamente a código binario antes de ejecutarse), o de lenguajes interpretados tradicionales (que leen línea por línea con lentitud), los navegadores modernos ejecutan JavaScript a través de motores de compilación Just-In-Time (JIT):',
          '• V8: Desarrollado por Google para Chrome y utilizado también en Node.js.',
          '• SpiderMonkey: Desarrollado por Mozilla para Firefox (el primer motor de JS de la historia).',
          '• JavaScriptCore (Nitro): Desarrollado por Apple para Safari.',
          'El motor JIT toma el código fuente en JavaScript, genera un Árbol de Sintaxis Abstracta (AST - Abstract Syntax Tree), lo convierte en bytecode y, mientras el programa está corriendo en vivo, compila las secciones más ejecutadas ("hot paths") directamente a código máquina nativo del procesador, logrando una velocidad impresionante.'
        ]
      },
      {
        id: 'el-modelo-de-hilo-unico',
        title: 'El modelo de ejecución: Single Thread y Event Loop',
        paragraphs: [
          'Una característica arquitectónica esencial de JavaScript en el navegador es que es Single Threaded (de un solo hilo de ejecución). Esto significa que solo puede procesar una sola tarea a la vez en su Pila de Llamadas (Call Stack).',
          'Para que tareas lentas (como descargar una foto de 5MB por Internet o esperar a que el usuario pulse un botón) no congelen por completo la pantalla del navegador, JavaScript delega esas esperas a las APIs del navegador (Web APIs). Cuando la operación finaliza, el resultado se encola y el Bucle de Eventos (Event Loop) lo introduce de nuevo en la pila en cuanto esta queda libre.',
          'Este diseño es lo que permite que una página web permanezca fluida y reactiva incluso mientras se ejecutan complejas transferencias de datos en segundo plano.'
        ]
      }
    ]
  },

  // 2. ¿CÓMO COMENZAR CON JAVASCRIPT: LA CONSOLA Y TUS PRIMEROS SCRIPTS?
  {
    id: 'como-comenzar-con-javascript',
    slug: 'como-comenzar-con-javascript',
    categoryId: 'javascript',
    title: '¿Cómo comenzar con JavaScript: la consola del navegador y tus primeros scripts?',
    subtitle: 'Tu navegador ya es un entorno de desarrollo completo listo para ejecutar código hoy mismo.',
    excerpt: 'Aprende a abrir las Developer Tools (F12), usar la consola interactiva (REPL), dominar los métodos de console y conectar un archivo .js externo a tu HTML mediante el atributo defer.',
    readTimeMinutes: 7,
    level: 'Introductorio',
    publishedDate: '20 de Mayo, 2026',
    tags: ['Consola', 'DevTools', 'console.log', 'defer', 'Primer Script'],
    keyTakeaways: [
      'Todo navegador moderno incluye una consola interactiva REPL accesible mediante la tecla F12 o Ctrl+Shift+I / Cmd+Opt+I.',
      'console.log() es la herramienta fundamental de depuración para inspeccionar valores y el flujo de ejecución de tus programas.',
      'console.table() formatea arrays y objetos en tablas limpias con columnas y encabezados ordenables.',
      'La mejor práctica profesional para enlazar archivos JavaScript externos es colocar <script src="app.js" defer></script> en la cabecera <head>.',
      'El atributo defer descarga el script en paralelo sin detener el análisis del HTML y lo ejecuta en cuanto el DOM está completo.'
    ],
    sections: [
      {
        id: 'la-consola-interactiva',
        title: 'Tu primer laboratorio: la consola de DevTools',
        paragraphs: [
          'La gran ventaja de aprender JavaScript frente a cualquier otro lenguaje es que no necesitas instalar compiladores, máquinas virtuales ni configuraciones complejas en la terminal: cualquier navegador web que uses a diario ya incorpora un entorno de desarrollo completo y gratuito.',
          'Para abrirlo en cualquier página web:',
          '1. Presiona la tecla F12 (en Windows/Linux) o Cmd + Option + I (en Mac).',
          '2. O bien, haz clic derecho sobre cualquier punto de la página y selecciona "Inspeccionar".',
          '3. En el panel superior de las herramientas de desarrollo, haz clic en la pestaña "Console".',
          'Esta consola opera como un entorno REPL (Read-Eval-Print Loop): lee lo que escribes, evalúa el código de inmediato, imprime el resultado en pantalla y queda a la espera de la siguiente instrucción. Si escribes 10 * 5 y pulsas Enter, verás aparecer el número 50 al instante.'
        ]
      },
      {
        id: 'metodos-de-inspeccion-console',
        title: 'Los métodos esenciales del objeto console',
        paragraphs: [
          'Aunque console.log() es el método más popular, el objeto console ofrece una rica variedad de herramientas de diagnóstico:',
          '• console.log(dato): Imprime mensajes informativos estándar.',
          '• console.warn(mensaje): Muestra una advertencia con fondo amarillo e icono de alerta.',
          '• console.error(error): Muestra un error crítico con fondo rojo y la traza de la pila (stack trace) que indica en qué línea ocurrió el fallo.',
          '• console.table(colección): Imprime un array de objetos en una tabla visual estructurada con columnas.',
          '• console.time("etiqueta") y console.timeEnd("etiqueta"): Permite medir con precisión de microsegundos cuánto tarda en ejecutarse un bloque de código.'
        ],
        codeSnippet: {
          language: 'javascript',
          title: 'depuracion-consola.js',
          code: `// Mensaje informativo estándar
console.log('Iniciando aplicación MasterFront...');

// Tabla visual estructurada para listas de datos
const cursos = [
  { tecnologia: 'HTML', dificultad: 'Básica', articulos: 6 },
  { tecnologia: 'CSS', dificultad: 'Media', articulos: 7 },
  { tecnologia: 'JavaScript', dificultad: 'Media', articulos: 7 }
];

console.table(cursos);

// Medición de rendimiento en milisegundos
console.time('CalculoMatematico');
let acumulador = 0;
for (let i = 0; i < 100000; i++) {
  acumulador += i;
}
console.timeEnd('CalculoMatematico'); // Imprime: CalculoMatematico: 1.84ms`
        }
      },
      {
        id: 'conectando-archivo-js-externo',
        title: 'Conectando un archivo JavaScript: la importancia de defer',
        paragraphs: [
          'En aplicaciones reales, nunca se escribe código JavaScript en atributos HTML (como onclick="..."). El código se organiza en archivos externos con extensión .js (por ejemplo, app.js).',
          'Históricamente, los desarrolladores colocaban la etiqueta <script src="app.js"></script> justo antes de la etiqueta de cierre </body>. Esto se hacía porque si el script se colocaba en el <head>, el navegador detenía la lectura del HTML para descargar y ejecutar el script, provocando que la página se quedara en blanco.',
          'En el desarrollo moderno, la solución canónica y recomendada por las especificaciones de HTML5 es colocar el script en el <head> acompañado del atributo defer. Esto le indica al navegador: "descarga el script en segundo plano mientras continúas dibujando el HTML, y ejecútalo exactamente en el momento en que el DOM esté listo, respetando el orden secuencial de los scripts".'
        ],
        codeSnippet: {
          language: 'html',
          title: 'index.html (Enlace Profesional de Script)',
          code: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi Aplicación con JavaScript</title>
  <!-- La mejor práctica moderna: script en el head con atributo defer -->
  <script src="js/app.js" defer></script>
</head>
<body>
  <h1 id="titulo">Hola desde el DOM</h1>
  <button id="btn-saludo">Saludar</button>
</body>
</html>`
        }
      }
    ]
  },

  // 3. VARIABLES Y TIPOS EN JAVASCRIPT
  {
    id: 'variables-y-tipos-en-javascript',
    slug: 'variables-y-tipos-en-javascript',
    categoryId: 'javascript',
    title: 'Variables y tipos de datos: let, const y tipos primitivos',
    subtitle: 'Aprende a guardar información en memoria y comprende la diferencia entre textos, números y booleanos.',
    excerpt: 'Olvida var para siempre. Domina const para inmutabilidad de referencia y let para variables reasignables. Exploramos los 7 tipos primitivos de JavaScript, los tipos de referencia y la diferencia entre igualdad estricta (===) y débil (==).',
    readTimeMinutes: 8,
    level: 'Esencial',
    publishedDate: '24 de Mayo, 2026',
    tags: ['Variables', 'let', 'const', 'Tipos Primitivos', 'TDZ', 'Igualdad Estricta'],
    keyTakeaways: [
      'Declara siempre tus variables con const por defecto; utiliza let únicamente cuando sepas de antemano que el valor necesitará ser reasignado.',
      'No utilices nunca var en código moderno: carece de alcance de bloque y provoca errores sutiles derivados de su hoisting descontrolado.',
      'JavaScript tiene 7 tipos primitivos: String, Number, Boolean, Null, Undefined, BigInt y Symbol.',
      'Los tipos primitivos se pasan por valor (inmutables); los tipos de objeto (Object, Array, Function) se pasan por referencia en memoria.',
      'Utiliza siempre el operador de igualdad estricta (===) para evitar errores causados por la coerción implícita de tipos del operador débil (==).'
    ],
    sections: [
      {
        id: 'const-vs-let-vs-var',
        title: 'La regla de oro moderna: const primero, let si es necesario, nunca var',
        paragraphs: [
          'Una variable es un identificador simbólico asociado a una posición en la memoria del ordenador donde guardamos un dato para leerlo o transformarlo a lo largo de nuestro programa.',
          'Antes de la llegada del estándar ECMAScript 2015 (ES6), todas las variables se declaraban con la palabra clave var. Sin embargo, var tenía un grave defecto de diseño: su alcance era de función (function scope), no respetaba los bloques delimitados por llaves (como if o for) y sufría de elevación (hoisting) impredecible.',
          'ES6 introdujo let y const, que operan con alcance de bloque (block scope) y resuelven estos problemas por completo:',
          '• const (Constante): Se utiliza para declarar identificadores que no van a cambiar de referencia. Es la opción predeterminada recomendada para el 90% de tus variables.',
          '• let: Se utiliza cuando el valor necesita ser reasignado explícitamente a lo largo del tiempo (por ejemplo, el acumulador de un bucle o el puntaje de un juego).',
          '• Zona Muerta Temporal (TDZ): Con let y const, si intentas acceder a una variable antes de la línea donde está declarada, el motor lanza un error protector (ReferenceError), previniendo bugs accidentales.'
        ],
        codeSnippet: {
          language: 'javascript',
          title: 'declaracion-variables.js',
          code: `// Valores inmutables en referencia: usar const
const nombrePlataforma = 'MasterFront';
const puertoServidor = 3000;

// Valores reasignables en el tiempo: usar let
let articulosLeidos = 0;
articulosLeidos = articulosLeidos + 1; // Correcto: se reasigna a 1

// Intentar reasignar una constante arroja TypeError
// nombrePlataforma = 'OtraCosa'; // ¡Error en tiempo de ejecución!`
        },
        callout: {
          type: 'tip',
          title: 'Cuidado: const en objetos y arrays',
          text: 'Declarar un array o un objeto con const no significa que sus propiedades internas sean congeladas; significa que la variable no puede apuntar a otro objeto distinto. Sí puedes añadir elementos a un array (const arr = []; arr.push(1);) o cambiar propiedades de un objeto (const obj = {}; obj.activo = true;).'
        }
      },
      {
        id: 'los-siete-tipos-primitivos',
        title: 'Los 7 tipos de datos primitivos de JavaScript',
        paragraphs: [
          'En JavaScript, un tipo de dato primitivo es aquel que no es un objeto y no posee métodos propios incorporados directamente en su valor almacenado:',
          '1. String: Cadenas de texto alfanuméricas delimitadas por comillas simples (\'\'), dobles ("") o plantillas literales con backticks (``). Las plantillas literales permiten interpolar variables mediante ${variable} y admiten saltos de línea sin concatenar.',
          '2. Number: Representa números enteros y decimales en formato de coma flotante de 64 bits (IEEE 754). Incluye valores especiales como NaN (Not a Number) e Infinity.',
          '3. BigInt: Permite almacenar números enteros arbitrariamente gigantescos más allá del límite seguro de Number.MAX_SAFE_INTEGER (9,007,199,254,740,991).',
          '4. Boolean: Solo admite dos valores literales lógicos: true o false.',
          '5. Undefined: Valor que posee automáticamente una variable declarada a la que aún no se le ha asignado ningún valor.',
          '6. Null: Valor asignado de manera explícita e intencional por el programador para indicar la ausencia consciente de valor u objeto.',
          '7. Symbol: Identificador único e inmutable introducido en ES6, utilizado principalmente como claves de propiedades avanzadas en objetos.'
        ]
      },
      {
        id: 'igualdad-estricta-vs-debil',
        title: 'Igualdad estricta (===) versus igualdad débil (==)',
        paragraphs: [
          'JavaScript es un lenguaje de tipado débil. Si comparas dos valores de distinto tipo con el operador de doble igual (==), el motor intentará forzar una conversión automática (coerción implícita) para intentar igualarlos.',
          'Esto produce resultados contra-intuitivos y peligrosos:',
          '• 0 == false devuelve true.',
          '• "" == 0 devuelve true.',
          '• null == undefined devuelve true.',
          'Para prevenir estos comportamientos, la regla universal en la industria es usar siempre el operador de triple igual (===), que realiza una comparación estricta de valor y tipo. En igualdad estricta, 0 === false devuelve false, y "" === 0 devuelve false.'
        ]
      }
    ],
    interactiveDemoId: 'js-variables-calc'
  },

  // 4. FUNCIONES EN JAVASCRIPT
  {
    id: 'funciones-en-javascript',
    slug: 'funciones-en-javascript',
    categoryId: 'javascript',
    title: 'Funciones en JavaScript: reutilización de código y funciones flecha',
    subtitle: 'El bloque fundamental para organizar lógica repetitiva, modularizar programas y dominar el ámbito léxico.',
    excerpt: 'Descubre cómo escribir funciones declarativas y expresiones flecha (arrow functions). Analizamos los parámetros por defecto, el operador rest, el valor de this y el concepto de funciones como ciudadanos de primer orden.',
    readTimeMinutes: 8,
    level: 'Esencial',
    publishedDate: '28 de Mayo, 2026',
    tags: ['Funciones', 'Arrow Functions', 'Parámetros', 'Scope', 'Closures'],
    keyTakeaways: [
      'Una función encapsula un procedimiento lógico reutilizable que puede recibir datos de entrada (parámetros) y devolver una salida (return).',
      'Las declaraciones de función tradicionales (function) experimentan hoisting completo y crean su propio contexto dinámico this.',
      'Las funciones flecha (() => {}) proporcionan una sintaxis concisa con retorno implícito en expresiones de una línea y heredan el contexto léxico de this.',
      'En JavaScript las funciones son ciudadanos de primer orden (First-Class Citizens): pueden guardarse en variables, pasarse como argumentos y devolverse desde otras funciones.',
      'Los parámetros por defecto (default parameters) permiten definir valores de respaldo en caso de que un argumento se omita al invocar la función.'
    ],
    sections: [
      {
        id: 'el-principio-dry',
        title: 'El principio DRY y el rol de las funciones',
        paragraphs: [
          'En la ingeniería de software existe una máxima fundamental: DRY (Don\'t Repeat Yourself - No te repitas). Si en tu código necesitas calcular el impuesto de una factura, formatear una fecha o validar un correo en diez lugares distintos, escribir la misma fórmula diez veces es una pésima práctica: si la fórmula cambia, tendrás que buscar y editar diez líneas.',
          'Una función permite empaquetar esa secuencia de pasos bajo un nombre descriptivo. La función actúa como una caja negra: le pasas argumentos a través de sus parámetros, ejecuta su procedimiento interno y devuelve el resultado mediante la palabra clave return.'
        ]
      },
      {
        id: 'declaracion-vs-arrow-functions',
        title: 'Declaración tradicional versus Funciones Flecha (Arrow Functions)',
        paragraphs: [
          'En el ecosistema moderno conviven dos formas primordiales de escribir funciones:',
          '1. Declaración Tradicional de Función (Function Declaration): Se escribe con la palabra clave function. Su ventaja histórica es que el compilador la eleva (hoisting) al inicio del ámbito, lo que permite llamarla en el código antes de la línea física donde está escrita.',
          '2. Funciones Flecha (Arrow Functions - ES6): Sintaxis compacta que utiliza el operador =>. Si la función se compone de una sola expresión, puedes prescindir de las llaves {} y de la palabra return (retorno implícito).',
          'Diferencia técnica crucial: Las funciones flecha no tienen su propio contexto this ni su propio objeto arguments; adoptan el valor de this del entorno léxico superior donde fueron creadas. Esto las convierte en la herramienta predilecta para callbacks de métodos de arrays (como map, filter o reduce) y para temporizadores (setTimeout).'
        ],
        codeSnippet: {
          language: 'javascript',
          title: 'comparativa-funciones.js',
          code: `// 1. Declaración tradicional con parámetros por defecto
function calcularTotal(precio, tasaImpuesto = 0.19) {
  const impuesto = precio * tasaImpuesto;
  return precio + impuesto;
}

const totalFactura = calcularTotal(100); // Devuelve 119
console.log('Total calculado:', totalFactura);

// 2. Función Flecha completa con llaves y return explícito
const formatearMoneda = (cantidad) => {
  return \`$\${cantidad.toFixed(2)} USD\`;
};

// 3. Función Flecha concisa con retorno implícito (una sola línea)
const duplicar = (numero) => numero * 2;

console.log(formatearMoneda(totalFactura)); // "$119.00 USD"
console.log(duplicar(5)); // 10`
        }
      },
      {
        id: 'funciones-de-primer-orden',
        title: 'Funciones como ciudadanos de primer orden (First-Class Citizens)',
        paragraphs: [
          'En JavaScript, las funciones son tratadas como cualquier otro valor o variable: pueden ser asignadas a una constante, pasadas como argumento a otra función (lo que llamamos un "callback") o devueltas como valor de retorno de otra función.',
          'Esta capacidad es la base de la programación funcional y de métodos de colecciones de uso cotidiano:',
          '• Array.prototype.map(): Transforma cada elemento de una lista mediante una función.',
          '• Array.prototype.filter(): Filtra los elementos que cumplen una condición evaluada por una función.',
          '• Array.prototype.find(): Localiza el primer elemento que satisface el predicado.'
        ],
        codeSnippet: {
          language: 'javascript',
          title: 'metodos-arrays-funcionales.js',
          code: `const articulos = [
  { id: 1, titulo: 'Guía de HTML', minutos: 4 },
  { id: 2, titulo: 'Guía de CSS', minutos: 7 },
  { id: 3, titulo: 'Guía de JavaScript', minutos: 8 }
];

// Uso de función flecha como callback en .filter
const lecturasLargas = articulos.filter((art) => art.minutos >= 6);

// Uso de callback en .map para extraer solo los títulos
const nombres = articulos.map((art) => art.titulo);

console.log('Lecturas largas:', lecturasLargas);
console.log('Títulos extraídos:', nombres);`
        }
      }
    ]
  },

  // 5. MANIPULACIÓN DEL DOM
  {
    id: 'manipulacion-del-dom',
    slug: 'manipulacion-del-dom',
    categoryId: 'javascript',
    title: 'Manipulación del DOM: cómo conectar JavaScript con tus etiquetas HTML',
    subtitle: 'Aprende a seleccionar elementos, cambiar textos en tiempo real y alternar clases de CSS con código vivo.',
    excerpt: 'El Document Object Model es la interfaz que permite a JavaScript leer y transformar cualquier etiqueta de la página sin recargar el navegador. Domina querySelector, classList, textContent y la creación dinámica de elementos.',
    readTimeMinutes: 9,
    level: 'Práctico',
    publishedDate: '1 de Junio, 2026',
    tags: ['DOM', 'querySelector', 'classList', 'textContent', 'createElement', 'Interactividad'],
    featured: true,
    keyTakeaways: [
      'El DOM (Document Object Model) es una representación en memoria del documento HTML como un árbol jerárquico de objetos.',
      'document.querySelector(\'.clase\') y querySelectorAll() son los métodos modernos estándar para encontrar elementos usando la misma sintaxis de selectores de CSS.',
      'Utiliza siempre textContent para modificar textos de forma segura y evitar vulnerabilidades de Cross-Site Scripting (XSS) causadas por innerHTML.',
      'La propiedad classList proporciona métodos limpios (add, remove, toggle, contains) para encender o apagar estilos visuales de CSS.',
      'Puedes crear nuevos elementos en memoria con document.createElement() y añadirlos al árbol con append() o appendChild().'
    ],
    sections: [
      {
        id: 'que-es-el-dom-realmente',
        title: '¿Qué es el DOM y cómo se comunica con JavaScript?',
        paragraphs: [
          'Cuando el navegador analiza tu archivo index.html, no lo almacena como una simple cadena de texto plana. Crea una estructura viva de objetos en memoria llamada DOM (Document Object Model).',
          'En ese árbol, cada elemento HTML (<p>, <button>, <h1>) se transforma en un objeto con propiedades y métodos. Por ejemplo, la etiqueta <a href="..."> se modela como un objeto de tipo HTMLAnchorElement.',
          'JavaScript por sí mismo no incluye conceptos como botones ni pestañas; es un lenguaje de programación puro. Sin embargo, los navegadores le exponen un objeto global llamado document. A través de document, JavaScript puede consultar cualquier elemento del árbol, leer lo que contiene, alterar sus atributos o borrarlo de la pantalla en una fracción de milisegundo.'
        ]
      },
      {
        id: 'seleccion-quirurgica-elementos',
        title: 'Selección quirúrgica de elementos: querySelector y querySelectorAll',
        paragraphs: [
          'En las primeras versiones de JavaScript se utilizaban métodos como getElementById() o getElementsByClassName(). Aunque siguen funcionando, en el desarrollo actual el estándar universal es:',
          '1. document.querySelector(\'selector\'): Recibe como argumento cualquier selector de CSS válido y devuelve el PRIMER elemento del árbol que coincida con la consulta (o null si no existe).',
          '2. document.querySelectorAll(\'selector\'): Devuelve una colección NodeList estática iterable con TODOS los elementos que cumplan el criterio de selección.',
          'Ventaja: Al utilizar la misma sintaxis que ya aprendiste en CSS, puedes escribir selectores complejos como document.querySelector(\'article.destacado button.btn-primario\') sin esfuerzo.'
        ]
      },
      {
        id: 'modificacion-contenido-y-seguridad',
        title: 'Modificación de contenido: textContent versus innerHTML y seguridad XSS',
        paragraphs: [
          'Una vez seleccionado un elemento, existen dos formas habituales de alterar lo que contiene:',
          '• elemento.textContent: Lee o escribe texto plano. Es el método recomendado por excelencia porque es veloz y 100% inmune a ataques de seguridad. Si intentas inyectar una etiqueta <script> a través de textContent, el navegador la trata literalmente como texto visible y nunca la ejecuta.',
          '• elemento.innerHTML: Analiza el texto como marcado HTML. Aunque es útil en ciertas situaciones, utilizar innerHTML con datos ingresados por usuarios abre la puerta a la vulnerabilidad más extendida de la web: Cross-Site Scripting (XSS), donde un atacante puede inyectar código malicioso que robe contraseñas o cookies de sesión.'
        ],
        codeSnippet: {
          language: 'javascript',
          title: 'manipulacion-dom-segura.js',
          code: `// 1. Selección de elementos mediante selectores CSS
const titulo = document.querySelector('#encabezado-articulo');
const boton = document.querySelector('.btn-alternar-modo');
const contenedor = document.querySelector('.lista-tarjetas');

// 2. Modificación segura de texto plano
titulo.textContent = 'Nuevo Título Asignado por JavaScript';

// 3. Encender / apagar clases de CSS con classList
boton.addEventListener('click', () => {
  // Alterna la clase 'modo-oscuro' (si está la quita, si no está la añade)
  document.body.classList.toggle('modo-oscuro');
});

// 4. Creación e inserción de nuevos elementos en el árbol
const nuevaTarjeta = document.createElement('article');
nuevaTarjeta.classList.add('tarjeta-item');
nuevaTarjeta.textContent = 'Este elemento fue creado en memoria.';

// Se añade al final del contenedor en el DOM
contenedor.appendChild(nuevaTarjeta);`
        }
      }
    ],
    interactiveDemoId: 'js-counter-dom'
  },

  // 6. EVENTOS DEL NAVEGADOR
  {
    id: 'eventos-del-navegador',
    slug: 'eventos-del-navegador',
    categoryId: 'javascript',
    title: 'Eventos en el navegador: addEventListener, clicks y formularios',
    subtitle: 'Aprende a escuchar las acciones del usuario y ejecutar respuestas dinámicas con control total.',
    excerpt: 'Descubre el paradigma de programación dirigida por eventos, el método addEventListener, el objeto Event, preventDefault y la técnica avanzada de Delegación de Eventos (Event Delegation).',
    readTimeMinutes: 8,
    level: 'Práctico',
    publishedDate: '5 de Junio, 2026',
    tags: ['Eventos', 'addEventListener', 'preventDefault', 'Event Delegation', 'Bubbling'],
    keyTakeaways: [
      'addEventListener() es el método estándar para registrar funciones que reaccionan a acciones del usuario.',
      'El objeto de evento recibido como parámetro contiene información contextual como e.target, e.key o coordenadas del puntero.',
      'e.preventDefault() cancela el comportamiento predeterminado del navegador, como la recarga de página al enviar un formulario.',
      'Los eventos se propagan por defecto hacia arriba a través de los nodos ancestros mediante la fase de burbujeo (Event Bubbling).',
      'La Delegación de Eventos aprovecha el burbujeo para escuchar eventos de cientos de elementos hijos mediante un único listener en el contenedor padre.'
    ],
    sections: [
      {
        id: 'el-sistema-de-eventos',
        title: 'Programación orientada a eventos en el navegador',
        paragraphs: [
          'A diferencia de un script que se ejecuta de inicio a fin en una terminal y luego se apaga, una aplicación Front-End opera bajo el paradigma de Event-Driven Programming (Programación Dirigida por Eventos).',
          'La aplicación permanece en reposo a la espera de que ocurran sucesos: el usuario hace clic con el ratón, presiona una tecla, hace scroll en la pantalla, redimensiona la ventana o el navegador termina de descargar un recurso. Cuando el evento ocurre, el motor despacha una señal que activa las funciones suscritas.'
        ]
      },
      {
        id: 'metodo-add-event-listener',
        title: 'El método maestro: addEventListener',
        paragraphs: [
          'La forma correcta y estándar de escuchar un evento es invocar addEventListener sobre el elemento objetivo. Recibe dos argumentos esenciales:',
          '1. El nombre del tipo de evento como cadena (por ejemplo: \'click\', \'submit\', \'input\', \'keydown\').',
          '2. La función manejadora (callback) que se ejecutará en respuesta al suceso.',
          'Nunca utilices atributos en línea como onclick="..." ni la propiedad elemento.onclick = fn. Estas fórmulas antiguas sobrescriben manejadores previos y violan las políticas de seguridad (Content Security Policy).'
        ],
        codeSnippet: {
          language: 'javascript',
          title: 'escuchadores-eventos.js',
          code: `const formulario = document.querySelector('#form-registro');
const campoCorreo = document.querySelector('#input-correo');

// Escuchamos el evento de envío del formulario
formulario.addEventListener('submit', (evento) => {
  // CRÍTICO: Detiene la recarga automática que el navegador haría por defecto
  evento.preventDefault();

  console.log('Formulario interceptado sin recargar la página.');
  console.log('Valor enviado:', campoCorreo.value);
});

// Escuchamos lo que el usuario teclea en tiempo real
campoCorreo.addEventListener('input', (evento) => {
  const textoActual = evento.target.value;
  console.log('Caracteres ingresados:', textoActual.length);
});`
        }
      },
      {
        id: 'delegacion-de-eventos',
        title: 'Fase de burbujeo y la técnica de Delegación de Eventos',
        paragraphs: [
          'Cuando haces clic sobre un botón que está dentro de un <article> que a su vez está dentro de <main>, el evento no solo ocurre en el botón: "burbujea" (Event Bubbling) subiendo por la jerarquía hacia el padre, el abuelo, el body y finalmente el objeto window.',
          'Esta propiedad física del DOM permite implementar un patrón de alto rendimiento llamado Delegación de Eventos (Event Delegation): en lugar de colocar 50 listeners individuales sobre 50 botones en una lista de productos, colocas UN SOLO listener sobre el contenedor padre y utilizas evento.target para identificar qué botón específico fue presionado.'
        ]
      }
    ],
    interactiveDemoId: 'js-events-playground'
  },

  // 7. ASINCRONÍA Y FETCH API
  {
    id: 'asincronia-y-fetch-api',
    slug: 'asincronia-y-fetch-api',
    categoryId: 'javascript',
    title: 'Introducción a la asincronía: promesas y peticiones con Fetch API',
    subtitle: 'Cómo solicitar datos a un servidor o API externa sin congelar la interfaz del usuario.',
    excerpt: 'Entiende por qué JavaScript es no bloqueante y cómo async / await y la Fetch API nativa te permiten consumir datos reales (JSON) con manejo robusto de errores mediante try...catch.',
    readTimeMinutes: 9,
    level: 'Práctico',
    publishedDate: '8 de Junio, 2026',
    tags: ['Asincronía', 'Promesas', 'Fetch API', 'async/await', 'JSON', 'APIs'],
    keyTakeaways: [
      'La asincronía permite que el navegador continúe respondiendo a animaciones e interacciones de usuario mientras espera la respuesta de operaciones lentas.',
      'Una Promesa (Promise) es un objeto que representa el resultado eventual de una tarea asíncrona en tres estados: Pending, Fulfilled o Rejected.',
      'La sintaxis moderna async / await simplifica el consumo de promesas permitiendo escribir código asíncrono que se lee con la claridad secuencial del código síncrono.',
      'La función global fetch() realiza peticiones HTTP a servidores y devuelve una promesa con el objeto Response.',
      'fetch() no rechaza la promesa ante códigos de error HTTP como 404 o 500; debes verificar siempre la propiedad booleana response.ok.'
    ],
    sections: [
      {
        id: 'por-que-asincronia',
        title: '¿Por qué la asincronía es indispensable en la web?',
        paragraphs: [
          'Imagina que entras a una tienda de comercio electrónico y la aplicación necesita consultar el inventario de 50 productos a una base de datos en la nube. Supón que la conexión tarda dos segundos en responder.',
          'Si JavaScript ejecutara esa operación de forma síncrona y bloqueante, el hilo de ejecución se quedaría paralizado esperando la respuesta durante esos dos segundos. La pantalla se congelaría por completo: no podrías mover el cursor, hacer scroll ni presionar ningún botón.',
          'Para evitar esto, JavaScript utiliza un modelo asíncrono y no bloqueante: envía la petición al sistema de red del navegador y continúa ejecutando el resto de la interfaz con total normalidad. Cuando los datos llegan desde el servidor, se notifica a tu código para que pinte la información en pantalla.'
        ]
      },
      {
        id: 'de-callbacks-a-async-await',
        title: 'La evolución: de Callbacks a Promesas y async / await',
        paragraphs: [
          'Históricamente, la asincronía se gestionaba mediante funciones pasadas como argumentos (callbacks). Sin embargo, cuando una tarea dependía del resultado de otra anterior y esa a su vez de otra, el código se anidaba en una estructura piramidal inmanejable conocida como "Callback Hell".',
          'En ES6 nacieron las Promesas (Promises), objetos que representan el estado futuro de una operación. Y en ES2017 (ES8) se estandarizó la combinación suprema: async y await.',
          'Al anteponer la palabra clave async a una función, esta devuelve automáticamente una promesa. Y dentro de esa función, puedes anteponer await a cualquier promesa para pausar de forma ordenada la ejecución de esa función local hasta que la promesa se resuelva, sin bloquear el navegador.'
        ]
      },
      {
        id: 'consumo-de-apis-con-fetch',
        title: 'Consumo práctico de APIs con Fetch y control de errores con try...catch',
        paragraphs: [
          'La Fetch API es la herramienta nativa e integrada en todos los navegadores para realizar solicitudes HTTP (GET, POST, PUT, DELETE).',
          'Un detalle técnico fundamental que confunde a muchos desarrolladores es que fetch() NO lanza un error si el servidor responde con un código de fallo HTTP (como un error 404 Not Found o un error 500 Internal Server Error). La promesa solo se rechaza si hay un fallo de red absoluto (por ejemplo, si el usuario pierde la conexión a Internet).',
          'Por ello, la forma profesional y robusta de consumir datos exige comprobar siempre la propiedad booleana response.ok antes de procesar el JSON:'
        ],
        codeSnippet: {
          language: 'javascript',
          title: 'consumo-api-profesional.js',
          code: `// Función asíncrona para consultar datos externos
async function cargarDatosArticulo(idArticulo) {
  try {
    console.log('Iniciando descarga de datos...');

    // 1. Petición HTTP a la API externa
    const respuesta = await fetch(\`https://api.ejemplo.com/articulos/\${idArticulo}\`);

    // 2. Comprobación obligatoria del estado HTTP (200-299)
    if (!respuesta.ok) {
      throw new Error(\`Error en el servidor: \${respuesta.status} \${respuesta.statusText}\`);
    }

    // 3. Conversión del flujo de datos a formato objeto JSON
    const datos = await respuesta.json();

    console.log('Datos recibidos con éxito:', datos);
    return datos;

  } catch (error) {
    // 4. Captura de errores de red o excepciones lanzadas
    console.error('No fue posible completar la petición:', error.message);
  } finally {
    console.log('Operación de red finalizada.');
  }
}

// Invocación de la función
cargarDatosArticulo(1);`
        }
      }
    ]
  }
];
