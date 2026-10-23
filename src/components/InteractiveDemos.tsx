import { useState } from 'react';
import { Play, RotateCcw, Check, Layers, Sparkles, Terminal } from 'lucide-react';

interface DemoProps {
  demoId: string;
}

export function InteractiveDemo({ demoId }: DemoProps) {
  if (demoId === 'flexbox-playground') {
    return <FlexboxPlayground />;
  }
  if (demoId === 'box-model-lab') {
    return <BoxModelLab />;
  }
  if (demoId === 'html-tags-preview') {
    return <HtmlTagsPreview />;
  }
  if (demoId === 'html-semantic-tree') {
    return <HtmlSemanticTree />;
  }
  if (demoId === 'css-grid-visualizer') {
    return <CssGridVisualizer />;
  }
  if (demoId === 'js-counter-dom') {
    return <JsCounterDom />;
  }
  if (demoId === 'js-events-playground') {
    return <JsEventsPlayground />;
  }
  if (demoId === 'js-variables-calc') {
    return <JsVariablesCalc />;
  }
  return null;
}

// 1. FLEXBOX PLAYGROUND
function FlexboxPlayground() {
  const [justify, setJustify] = useState<'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around'>('space-between');
  const [align, setAlign] = useState<'stretch' | 'center' | 'flex-start' | 'flex-end'>('center');
  const [direction, setDirection] = useState<'row' | 'column'>('row');
  const [gap, setGap] = useState<number>(16);

  return (
    <div className="my-8 rounded-lg border border-sky-500/20 bg-[#070b13] p-5 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 pb-4">
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-sky-400" />
          <span className="text-xs font-semibold tracking-wider text-sky-400 uppercase">Laboratorio Interactivo de Flexbox</span>
        </div>
        <span className="text-xs text-slate-400">Modifica las propiedades y observa la distribución en vivo</span>
      </div>

      {/* Controls */}
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3 text-xs">
        <div>
          <label className="block text-slate-400 mb-1">justify-content</label>
          <select
            value={justify}
            onChange={(e) => setJustify(e.target.value as any)}
            className="w-full rounded bg-[#111827] border border-white/10 px-2.5 py-1.5 text-slate-200 focus:outline-none focus:border-sky-400"
          >
            <option value="flex-start">flex-start</option>
            <option value="center">center</option>
            <option value="flex-end">flex-end</option>
            <option value="space-between">space-between</option>
            <option value="space-around">space-around</option>
          </select>
        </div>

        <div>
          <label className="block text-slate-400 mb-1">align-items</label>
          <select
            value={align}
            onChange={(e) => setAlign(e.target.value as any)}
            className="w-full rounded bg-[#111827] border border-white/10 px-2.5 py-1.5 text-slate-200 focus:outline-none focus:border-sky-400"
          >
            <option value="stretch">stretch</option>
            <option value="center">center</option>
            <option value="flex-start">flex-start</option>
            <option value="flex-end">flex-end</option>
          </select>
        </div>

        <div>
          <label className="block text-slate-400 mb-1">flex-direction</label>
          <select
            value={direction}
            onChange={(e) => setDirection(e.target.value as any)}
            className="w-full rounded bg-[#111827] border border-white/10 px-2.5 py-1.5 text-slate-200 focus:outline-none focus:border-sky-400"
          >
            <option value="row">row (fila)</option>
            <option value="column">column (columna)</option>
          </select>
        </div>
      </div>

      {/* Live Stage */}
      <div className="mt-4 rounded border border-white/10 bg-[#0f1422] p-4 min-h-[200px] flex items-stretch">
        <div
          className="w-full min-h-[170px] rounded border border-dashed border-sky-400/30 p-3 transition-all duration-300"
          style={{
            display: 'flex',
            flexDirection: direction,
            justifyContent: justify,
            alignItems: align,
            gap: `${gap}px`,
          }}
        >
          <div className="flex h-14 w-20 items-center justify-center rounded bg-sky-500 text-xs font-semibold text-white shadow-md">
            Caja 1
          </div>
          <div className="flex h-18 w-20 items-center justify-center rounded bg-indigo-500 text-xs font-semibold text-white shadow-md">
            Caja 2
          </div>
          <div className="flex h-12 w-20 items-center justify-center rounded bg-amber-500 text-xs font-semibold text-white shadow-md">
            Caja 3
          </div>
        </div>
      </div>

      {/* Generated CSS display */}
      <div className="mt-3 flex items-center justify-between rounded bg-[#03060a] px-3 py-2 font-mono text-xs text-sky-300/90">
        <code>
          .contenedor &#123; display: flex; flex-direction: {direction}; justify-content: {justify}; align-items: {align}; gap: {gap}px; &#125;
        </code>
      </div>
    </div>
  );
}

// 2. BOX MODEL LAB
function BoxModelLab() {
  const [padding, setPadding] = useState(20);
  const [margin, setMargin] = useState(24);
  const [border, setBorder] = useState(4);
  const [boxSizing, setBoxSizing] = useState<'border-box' | 'content-box'>('border-box');
  const baseContentWidth = 180;

  const totalRenderedWidth = boxSizing === 'content-box' 
    ? baseContentWidth + (padding * 2) + (border * 2)
    : baseContentWidth;

  return (
    <div className="my-8 rounded-lg border border-sky-500/20 bg-[#070b13] p-5 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 pb-4">
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-sky-400" />
          <span className="text-xs font-semibold tracking-wider text-sky-400 uppercase">Simulador del Modelo de Caja (Box Model)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">box-sizing:</span>
          <button
            onClick={() => setBoxSizing(boxSizing === 'border-box' ? 'content-box' : 'border-box')}
            className={`px-2 py-0.5 text-xs font-mono rounded border transition-colors ${
              boxSizing === 'border-box' 
                ? 'bg-sky-500/20 border-sky-400 text-sky-300' 
                : 'bg-amber-500/20 border-amber-400 text-amber-300'
            }`}
          >
            {boxSizing}
          </button>
        </div>
      </div>

      {/* Sliders */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        <div>
          <div className="flex justify-between text-slate-400 mb-1">
            <span>Margen (Margin):</span>
            <span className="font-mono text-amber-400">{margin}px</span>
          </div>
          <input
            type="range"
            min="0"
            max="40"
            value={margin}
            onChange={(e) => setMargin(Number(e.target.value))}
            className="w-full accent-amber-500"
          />
        </div>

        <div>
          <div className="flex justify-between text-slate-400 mb-1">
            <span>Relleno (Padding):</span>
            <span className="font-mono text-emerald-400">{padding}px</span>
          </div>
          <input
            type="range"
            min="5"
            max="40"
            value={padding}
            onChange={(e) => setPadding(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
        </div>

        <div>
          <div className="flex justify-between text-slate-400 mb-1">
            <span>Borde (Border):</span>
            <span className="font-mono text-sky-400">{border}px</span>
          </div>
          <input
            type="range"
            min="1"
            max="12"
            value={border}
            onChange={(e) => setBorder(Number(e.target.value))}
            className="w-full accent-sky-500"
          />
        </div>
      </div>

      {/* Visual Concentric Diagram */}
      <div className="mt-5 flex flex-col items-center justify-center p-4 rounded bg-[#0a0f1d] border border-white/5 overflow-x-auto">
        {/* Margin Layer */}
        <div 
          className="rounded border border-dashed border-amber-500/40 bg-amber-500/10 transition-all text-center flex flex-col items-center justify-center"
          style={{ padding: `${margin}px` }}
        >
          <span className="text-[10px] font-mono text-amber-400 mb-1">MARGIN ({margin}px)</span>

          {/* Border Layer */}
          <div 
            className="rounded bg-sky-500/20 border-sky-400 transition-all flex flex-col items-center justify-center"
            style={{ borderWidth: `${border}px`, borderStyle: 'solid' }}
          >
            <span className="text-[10px] font-mono text-sky-300 pt-1">BORDER ({border}px)</span>

            {/* Padding Layer */}
            <div 
              className="rounded bg-emerald-500/15 border border-dashed border-emerald-500/40 transition-all flex flex-col items-center justify-center"
              style={{ padding: `${padding}px` }}
            >
              <span className="text-[10px] font-mono text-emerald-400 mb-1">PADDING ({padding}px)</span>

              {/* Content Box */}
              <div 
                className="flex items-center justify-center rounded bg-indigo-600 px-4 py-3 text-white text-xs font-semibold shadow-inner"
                style={{ width: `${baseContentWidth}px` }}
              >
                CONTENIDO ({baseContentWidth}px)
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 text-xs text-slate-400">
          Ancho total ocupado en pantalla: <strong className="font-mono text-sky-300">{totalRenderedWidth}px</strong> {boxSizing === 'border-box' ? '(el padding y border caben dentro del ancho)' : '(el padding y border aumentan el ancho exterior)'}
        </div>
      </div>
    </div>
  );
}

// 3. HTML TAGS PREVIEW
function HtmlTagsPreview() {
  const [activeTab, setActiveTab] = useState<'todos' | 'titulos' | 'listas' | 'interactivos'>('todos');

  return (
    <div className="my-8 rounded-lg border border-orange-500/20 bg-[#070b13] p-5 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 pb-4">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-orange-400" />
          <span className="text-xs font-semibold tracking-wider text-orange-400 uppercase">Visor Interactivo de Renderizado HTML</span>
        </div>
        <div className="flex gap-1.5">
          {(['todos', 'titulos', 'listas', 'interactivos'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-2.5 py-1 text-xs rounded transition-colors capitalize ${
                activeTab === tab
                  ? 'bg-orange-500/20 border border-orange-500/40 text-orange-300'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Code View */}
        <div className="rounded border border-white/10 bg-[#04070d] p-3 font-mono text-xs text-orange-200/90 overflow-x-auto">
          <div className="text-[10px] text-slate-500 mb-2 uppercase tracking-wider">// Código HTML fuente</div>
          {(activeTab === 'todos' || activeTab === 'titulos') && (
            <div className="mb-2">
              <span className="text-orange-400">&lt;h1&gt;</span>Encabezado Principal<span className="text-orange-400">&lt;/h1&gt;</span><br />
              <span className="text-orange-400">&lt;p&gt;</span>Párrafo descriptivo con <span className="text-orange-400">&lt;strong&gt;</span>negrita<span className="text-orange-400">&lt;/strong&gt;</span>.<span className="text-orange-400">&lt;/p&gt;</span>
            </div>
          )}
          {(activeTab === 'todos' || activeTab === 'listas') && (
            <div className="mb-2">
              <span className="text-orange-400">&lt;ul&gt;</span><br />
              &nbsp;&nbsp;<span className="text-orange-400">&lt;li&gt;</span>Elemento A<span className="text-orange-400">&lt;/li&gt;</span><br />
              &nbsp;&nbsp;<span className="text-orange-400">&lt;li&gt;</span>Elemento B<span className="text-orange-400">&lt;/li&gt;</span><br />
              <span className="text-orange-400">&lt;/ul&gt;</span>
            </div>
          )}
          {(activeTab === 'todos' || activeTab === 'interactivos') && (
            <div>
              <span className="text-orange-400">&lt;button <span className="text-amber-300">class</span>="btn"&gt;</span>Botón de Acción<span className="text-orange-400">&lt;/button&gt;</span><br />
              <span className="text-orange-400">&lt;a <span className="text-amber-300">href</span>="#"&gt;</span>Enlace web<span className="text-orange-400">&lt;/a&gt;</span>
            </div>
          )}
        </div>

        {/* Live Browser Render */}
        <div className="rounded border border-white/10 bg-[#0c1220] p-4 text-slate-200 space-y-3">
          <div className="text-[10px] text-slate-500 uppercase tracking-wider">// Resultado visual en el navegador</div>
          {(activeTab === 'todos' || activeTab === 'titulos') && (
            <div>
              <h1 className="text-xl font-bold text-white mb-1">Encabezado Principal</h1>
              <p className="text-xs text-slate-300">Párrafo descriptivo con <strong className="text-white">negrita</strong>.</p>
            </div>
          )}
          {(activeTab === 'todos' || activeTab === 'listas') && (
            <ul className="list-disc list-inside text-xs text-slate-300 space-y-0.5">
              <li>Elemento A</li>
              <li>Elemento B</li>
            </ul>
          )}
          {(activeTab === 'todos' || activeTab === 'interactivos') && (
            <div className="flex items-center gap-3 pt-1">
              <button className="px-3 py-1.5 rounded bg-orange-600 text-white text-xs font-medium hover:bg-orange-500 transition-colors">
                Botón de Acción
              </button>
              <a href="#demo" onClick={(e) => e.preventDefault()} className="text-xs text-sky-400 underline hover:text-sky-300">
                Enlace web
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// 4. HTML SEMANTIC TREE
function HtmlSemanticTree() {
  const [selectedTag, setSelectedTag] = useState<string>('main');

  const explanations: Record<string, { role: string; goodFor: string }> = {
    header: {
      role: 'Encabezado introductorio del documento o sección',
      goodFor: 'Logotipo corporativo, buscador global, menú de navegación'
    },
    nav: {
      role: 'Bloque de enlaces de navegación primaria o secundaria',
      goodFor: 'Menú principal, enlaces a categorías, migas de pan (breadcrumbs)'
    },
    main: {
      role: 'Contenido central y único de la página (solo 1 por documento)',
      goodFor: 'El artículo específico, el catálogo de productos o la vista activa'
    },
    article: {
      role: 'Contenido autónomo e independiente',
      goodFor: 'Artículos de blog, tarjetas de comentarios, productos en venta'
    },
    aside: {
      role: 'Información complementaria o tangencial',
      goodFor: 'Barra lateral, artículos relacionados, publicidad o glosario'
    },
    footer: {
      role: 'Pie de página con información de cierre',
      goodFor: 'Derechos de autor, enlaces legales, redes sociales, contacto'
    }
  };

  return (
    <div className="my-8 rounded-lg border border-orange-500/20 bg-[#070b13] p-5 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 pb-4">
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-orange-400" />
          <span className="text-xs font-semibold tracking-wider text-orange-400 uppercase">Mapa Semántico Interactivo de una Página</span>
        </div>
        <span className="text-xs text-slate-400">Haz clic en cada sección del diagrama para conocer su función</span>
      </div>

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Visual schematic */}
        <div className="lg:col-span-2 space-y-2 font-mono text-xs">
          <button
            onClick={() => setSelectedTag('header')}
            className={`w-full p-2.5 rounded border text-left transition-all ${
              selectedTag === 'header'
                ? 'bg-orange-500/25 border-orange-400 text-orange-200'
                : 'bg-[#0e1422] border-white/10 text-slate-300 hover:border-orange-500/40'
            }`}
          >
            &lt;header&gt;
            <div className="mt-1 flex gap-2">
              <span
                onClick={(e) => { e.stopPropagation(); setSelectedTag('nav'); }}
                className={`px-2 py-0.5 rounded text-[11px] border cursor-pointer ${
                  selectedTag === 'nav' ? 'bg-orange-600 text-white border-white' : 'bg-black/30 text-slate-400 border-white/10'
                }`}
              >
                &lt;nav&gt; Menú &lt;/nav&gt;
              </span>
            </div>
          </button>

          <button
            onClick={() => setSelectedTag('main')}
            className={`w-full p-3 rounded border text-left transition-all min-h-[140px] flex flex-col justify-between ${
              selectedTag === 'main'
                ? 'bg-orange-500/20 border-orange-400 text-orange-200'
                : 'bg-[#0a101d] border-white/10 text-slate-300 hover:border-orange-500/40'
            }`}
          >
            <div>&lt;main&gt; (Contenido Principal Único)</div>
            
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div
                onClick={(e) => { e.stopPropagation(); setSelectedTag('article'); }}
                className={`p-2 rounded text-left border cursor-pointer ${
                  selectedTag === 'article' ? 'bg-orange-500/30 border-orange-400 text-white' : 'bg-black/20 border-white/10 text-slate-400'
                }`}
              >
                &lt;article&gt;
                <div className="text-[10px] mt-1">Artículo independiente</div>
              </div>

              <div
                onClick={(e) => { e.stopPropagation(); setSelectedTag('aside'); }}
                className={`p-2 rounded text-left border cursor-pointer ${
                  selectedTag === 'aside' ? 'bg-orange-500/30 border-orange-400 text-white' : 'bg-black/20 border-white/10 text-slate-400'
                }`}
              >
                &lt;aside&gt;
                <div className="text-[10px] mt-1">Contenido lateral / extra</div>
              </div>
            </div>
          </button>

          <button
            onClick={() => setSelectedTag('footer')}
            className={`w-full p-2.5 rounded border text-left transition-all ${
              selectedTag === 'footer'
                ? 'bg-orange-500/25 border-orange-400 text-orange-200'
                : 'bg-[#0e1422] border-white/10 text-slate-300 hover:border-orange-500/40'
            }`}
          >
            &lt;footer&gt; Información de autor, enlaces legales y contacto
          </button>
        </div>

        {/* Tag explanation panel */}
        <div className="rounded border border-orange-500/30 bg-[#0d1322] p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-sm font-bold text-orange-400">&lt;{selectedTag}&gt;</span>
              <span className="text-[11px] text-slate-400 uppercase">Etiqueta Seleccionada</span>
            </div>
            <p className="text-xs text-slate-200 mb-3 leading-relaxed">
              {explanations[selectedTag]?.role}
            </p>
            <div className="border-t border-white/10 pt-2">
              <span className="text-[11px] text-orange-300 font-semibold block mb-1">Casos de uso típicos:</span>
              <p className="text-xs text-slate-300">
                {explanations[selectedTag]?.goodFor}
              </p>
            </div>
          </div>
          <div className="text-[11px] text-slate-400 mt-4 border-t border-white/5 pt-2">
            Mejora el SEO de Google y la navegación para lectores de pantalla asistenciales.
          </div>
        </div>
      </div>
    </div>
  );
}

// 5. CSS GRID VISUALIZER
function CssGridVisualizer() {
  const [columns, setColumns] = useState<number>(3);
  const [gap, setGap] = useState<number>(16);

  return (
    <div className="my-8 rounded-lg border border-sky-500/20 bg-[#070b13] p-5 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 pb-4">
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-sky-400" />
          <span className="text-xs font-semibold tracking-wider text-sky-400 uppercase">Visualizador de Cuadrícula CSS Grid</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">Columnas:</span>
          {[1, 2, 3, 4].map((col) => (
            <button
              key={col}
              onClick={() => setColumns(col)}
              className={`w-7 h-7 rounded text-xs font-mono transition-colors ${
                columns === col ? 'bg-sky-500 text-white font-bold' : 'bg-[#121828] text-slate-400 hover:text-white'
              }`}
            >
              {col}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <div 
          className="rounded border border-white/10 bg-[#0c1220] p-4 transition-all duration-300"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: `${gap}px`
          }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex h-20 items-center justify-center rounded border border-sky-500/30 bg-sky-500/10 font-mono text-xs text-sky-200 transition-all hover:bg-sky-500/20"
            >
              Item {i + 1}
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between rounded bg-[#03060a] px-3 py-2 font-mono text-xs text-sky-300">
          <code>
            .grid &#123; display: grid; grid-template-columns: repeat({columns}, 1fr); gap: {gap}px; &#125;
          </code>
        </div>
      </div>
    </div>
  );
}

// 6. JS DOM COUNTER
function JsCounterDom() {
  const [count, setCount] = useState(0);
  const [textColor, setTextColor] = useState('#38bdf8');
  const [isBold, setIsBold] = useState(false);

  return (
    <div className="my-8 rounded-lg border border-amber-500/20 bg-[#070b13] p-5 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 pb-4">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-amber-400" />
          <span className="text-xs font-semibold tracking-wider text-amber-400 uppercase">Manipulación del DOM en Tiempo Real</span>
        </div>
        <span className="text-xs text-slate-400">Prueba cómo JS altera el contenido y estilos del elemento</span>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Interactive Element */}
        <div className="rounded border border-white/10 bg-[#0c1220] p-6 flex flex-col items-center justify-center text-center">
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2">#elemento-dom</span>
          <div
            id="elemento-dom"
            className="text-4xl transition-all duration-200 mb-2 font-mono"
            style={{
              color: textColor,
              fontWeight: isBold ? 800 : 400
            }}
          >
            {count}
          </div>
          <span className="text-xs text-slate-400">
            {count === 0 ? 'Contador en cero' : count > 0 ? 'Valor positivo incrementado' : 'Valor negativo'}
          </span>
        </div>

        {/* DOM Action Buttons */}
        <div className="space-y-3">
          <div className="flex gap-2">
            <button
              onClick={() => setCount((c) => c + 1)}
              className="flex-1 py-2 px-3 rounded bg-amber-500 text-slate-950 font-semibold text-xs hover:bg-amber-400 transition-colors"
            >
              Incrementar (+1)
            </button>
            <button
              onClick={() => setCount((c) => c - 1)}
              className="flex-1 py-2 px-3 rounded bg-[#1f293d] text-slate-200 text-xs hover:bg-[#2b3952] transition-colors"
            >
              Decrementar (-1)
            </button>
            <button
              onClick={() => setCount(0)}
              className="py-2 px-3 rounded bg-[#1f293d] text-slate-400 text-xs hover:text-white"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Cambiar color (.style.color):</span>
            <button
              onClick={() => setTextColor('#38bdf8')}
              className="w-5 h-5 rounded-full bg-[#38bdf8] border border-white/20"
              title="Cyan"
            />
            <button
              onClick={() => setTextColor('#f59e0b')}
              className="w-5 h-5 rounded-full bg-[#f59e0b] border border-white/20"
              title="Ámbar"
            />
            <button
              onClick={() => setTextColor('#10b981')}
              className="w-5 h-5 rounded-full bg-[#10b981] border border-white/20"
              title="Verde"
            />
            <button
              onClick={() => setTextColor('#ec4899')}
              className="w-5 h-5 rounded-full bg-[#ec4899] border border-white/20"
              title="Rosa"
            />
          </div>

          <div>
            <button
              onClick={() => setIsBold(!isBold)}
              className="w-full py-1.5 px-3 rounded border border-white/10 bg-[#111827] text-xs text-slate-300 hover:text-white"
            >
              Alternar clase negrita (classList.toggle('negrita'))
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// 7. JS EVENTS PLAYGROUND
function JsEventsPlayground() {
  const [eventLogs, setEventLogs] = useState<string[]>([]);
  const [inputText, setInputText] = useState('');

  const addLog = (msg: string) => {
    setEventLogs((prev) => [msg, ...prev.slice(0, 4)]);
  };

  return (
    <div className="my-8 rounded-lg border border-amber-500/20 bg-[#070b13] p-5 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 pb-4">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-amber-400" />
          <span className="text-xs font-semibold tracking-wider text-amber-400 uppercase">Detector de Eventos del Navegador</span>
        </div>
        <button
          onClick={() => setEventLogs([])}
          className="text-xs text-slate-400 hover:text-white"
        >
          Limpiar registro
        </button>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Interactive Triggers */}
        <div className="space-y-3">
          <button
            onClick={() => addLog(`click en Botón a las ${new Date().toLocaleTimeString()}`)}
            onMouseEnter={() => addLog(`mouseenter sobre el Botón`)}
            className="w-full py-2.5 px-4 rounded bg-amber-500 text-slate-950 font-semibold text-xs hover:bg-amber-400 transition-colors"
          >
            Pasa el ratón o haz Clic aquí
          </button>

          <div>
            <label className="block text-xs text-slate-400 mb-1">Evento input / keydown:</label>
            <input
              type="text"
              placeholder="Escribe algo aquí..."
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
                addLog(`input: "${e.target.value.slice(-1)}" (longitud: ${e.target.value.length})`);
              }}
              className="w-full rounded bg-[#111827] border border-white/10 px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>

        {/* Console / Event Log Output */}
        <div className="rounded border border-white/10 bg-[#03060a] p-3 font-mono text-xs">
          <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">// Registro de eventos escuchados</div>
          {eventLogs.length === 0 ? (
            <div className="text-slate-600 italic">Haz clic en el botón o escribe para ver los eventos dispararse...</div>
          ) : (
            <div className="space-y-1.5">
              {eventLogs.map((log, i) => (
                <div key={i} className="text-amber-300/90 flex items-center gap-2">
                  <span className="text-slate-500">[{i + 1}]</span>
                  <span>{log}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// 8. JS VARIABLES CALC
function JsVariablesCalc() {
  const [valA, setValA] = useState<string>('10');
  const [valB, setValB] = useState<string>('5');
  const [mode, setMode] = useState<'number' | 'string'>('number');

  const result = mode === 'number'
    ? Number(valA || 0) + Number(valB || 0)
    : String(valA) + String(valB);

  return (
    <div className="my-8 rounded-lg border border-amber-500/20 bg-[#070b13] p-5 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 pb-4">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-amber-400" />
          <span className="text-xs font-semibold tracking-wider text-amber-400 uppercase">Tipos de Datos: Números vs Textos (Strings)</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setMode('number')}
            className={`px-2.5 py-1 text-xs rounded font-mono transition-colors ${
              mode === 'number' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-[#121828] text-slate-400'
            }`}
          >
            Tipo: Number (Suma)
          </button>
          <button
            onClick={() => setMode('string')}
            className={`px-2.5 py-1 text-xs rounded font-mono transition-colors ${
              mode === 'string' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-[#121828] text-slate-400'
            }`}
          >
            Tipo: String (Concatenación)
          </button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-3">
          <div>
            <label className="block text-xs text-slate-400 mb-1">Variable a:</label>
            <input
              type="text"
              value={valA}
              onChange={(e) => setValA(e.target.value)}
              className="w-full rounded bg-[#111827] border border-white/10 px-3 py-1.5 text-xs text-slate-200 font-mono"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-400 mb-1">Variable b:</label>
            <input
              type="text"
              value={valB}
              onChange={(e) => setValB(e.target.value)}
              className="w-full rounded bg-[#111827] border border-white/10 px-3 py-1.5 text-xs text-slate-200 font-mono"
            />
          </div>
        </div>

        <div className="rounded border border-white/10 bg-[#0c1220] p-4 font-mono text-xs flex flex-col justify-center">
          <div className="text-slate-400 mb-1">
            {mode === 'number' ? 'const total = a + b;' : 'const total = String(a) + String(b);'}
          </div>
          <div className="text-xl text-amber-300 font-bold">
            Resultado: {mode === 'string' ? `"${result}"` : result}
          </div>
          <div className="text-[11px] text-slate-400 mt-2">
            Tipo final: <strong className="text-white">{typeof result}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
