import React, { useState } from 'react';
import { pineScriptCode } from '../assets/pineScriptCode';

export default function PineScriptSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(pineScriptCode).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <div className="lg:col-span-2 bg-black/40 border border-white/10 rounded-xl p-6 flex flex-col justify-between relative min-h-[400px]">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest font-mono">Pine Script (v6)</span>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className={`px-4 py-1.5 border transition-all duration-300 text-xs font-bold rounded-lg uppercase tracking-wider flex items-center gap-1.5 ${
            copied
              ? 'bg-green-500/10 text-green-400 border-green-500/30'
              : 'bg-brandGold/15 border-brandGold/30 text-brandGold hover:bg-brandGold hover:text-brandDark'
          }`}
        >
          {copied ? (
            <>
              <svg className="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
              </svg>
              Copy Code
            </>
          )}
        </button>
      </div>

      <div className="relative flex-1">
        {/* Scrollable Code view */}
        <pre className="text-[10px] font-mono text-gray-300 bg-black/60 p-4 rounded-lg border border-white/5 max-h-80 overflow-y-auto overflow-x-auto w-full max-w-full scrollbar-thin select-all leading-normal">
          <code>{pineScriptCode}</code>
        </pre>
      </div>
    </div>
  );
}
