import { CategoryId } from '../types';

interface FooterProps {
  onNavigateHome: () => void;
  onNavigateCategory: (catId: CategoryId) => void;
}

export function Footer({ onNavigateHome, onNavigateCategory }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-[#070a12] text-slate-400 mt-20">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand & Purpose */}
          <div className="md:col-span-2 space-y-3">
            <button
              onClick={onNavigateHome}
              className="text-lg font-bold text-white hover:text-indigo-300 transition-colors"
            >
              MasterFront
            </button>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Una plataforma editorial de artículos concebida para servir como introducción sencilla y directa al desarrollo web Front-End. Sin rutas obligatorias ni evaluaciones: lee a tu propio ritmo los conceptos que necesitas comprender hoy.
            </p>
            <div className="pt-2 text-[11px] text-slate-500">
              Asistente interactivo integrado vía <span className="text-slate-300 font-medium">Botpress Webchat</span>.
            </div>
          </div>

          {/* Categories Quick Nav */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
              Los Tres Pilares
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigateCategory('html')}
                  className="hover:text-orange-400 transition-colors"
                >
                  HTML · Estructura y Semántica
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateCategory('css')}
                  className="hover:text-sky-400 transition-colors"
                >
                  CSS · Diseño, Flexbox y Grid
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateCategory('javascript')}
                  className="hover:text-amber-400 transition-colors"
                >
                  JavaScript · Interactividad y DOM
                </button>
              </li>
            </ul>
          </div>

          {/* Philosophy */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
              Filosofía Editorial
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Creemos en la claridad explicativa, en ejemplos de código legibles y en desmitificar términos técnicos con analogías del mundo real.
            </p>
            <div className="mt-3 text-[11px] text-slate-500">
              Contenido libre, independiente y accesible desde cualquier dispositivo.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} MasterFront. Construido para la comunidad de aprendizaje web.
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span>HTML5</span>
            <span aria-hidden="true">·</span>
            <span>CSS3</span>
            <span aria-hidden="true">·</span>
            <span>ECMAScript 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
