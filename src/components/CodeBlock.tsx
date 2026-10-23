import { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';
import { CodeSnippet } from '../types';

interface CodeBlockProps {
  snippet: CodeSnippet;
}

export function CodeBlock({ snippet }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getLanguageColor = () => {
    switch (snippet.language) {
      case 'html':
        return 'text-orange-400 border-orange-500/20';
      case 'css':
        return 'text-sky-400 border-sky-500/20';
      case 'javascript':
        return 'text-amber-400 border-amber-500/20';
      default:
        return 'text-indigo-400 border-indigo-500/20';
    }
  };

  return (
    <div className="my-6 rounded-lg border border-white/10 bg-[#070a10] overflow-hidden shadow-lg">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-[#0f1422] px-4 py-2.5 text-xs">
        <div className="flex items-center gap-2">
          <Terminal className="h-3.5 w-3.5 text-slate-400" />
          <span className="font-mono text-slate-300 font-medium">{snippet.title}</span>
          <span className={`rounded px-1.5 py-0.2 text-[10px] uppercase font-mono font-semibold border ${getLanguageColor()}`}>
            {snippet.language}
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded px-2.5 py-1 text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          title="Copiar código al portapapeles"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">Copiado</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copiar</span>
            </>
          )}
        </button>
      </div>

      {/* Code Display */}
      <div className="p-4 overflow-x-auto text-xs font-mono leading-relaxed text-slate-200">
        <pre>
          <code>{snippet.code}</code>
        </pre>
      </div>

      {snippet.caption && (
        <div className="border-t border-white/5 bg-[#0b101c] px-4 py-2 text-[11px] text-slate-400 italic">
          {snippet.caption}
        </div>
      )}
    </div>
  );
}
