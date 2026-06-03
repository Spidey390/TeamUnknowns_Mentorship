import React, { useState } from 'react';

export default function PatternExplorer() {
  const [activePattern, setActivePattern] = useState('bullish-engulfing');

  const patternData = {
    'bullish-engulfing': {
      title: 'Bullish Engulfing',
      type: 'Bullish Reversal',
      badgeClass: 'bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider font-display inline-block',
      psychology: 'The session opens with sellers driving the price down. However, aggressive buyers step in with massive volume, completely overtaking the previous candle\'s range and closing near session highs. Represents a shift in momentum.',
      ictTip: 'Look for this pattern at key HTF (High Timeframe) Discount zones or immediately after a Sell-side Liquidity (SSL) sweep. The displacement candle confirms the formation of a bullish Order Block (OB) and market structure shift.',
      example: 'Price sweeps 1.0820 lows, forming a Bullish Engulfing that closes at 1.0865.',
      svg: (
        <svg width="220" height="220" viewBox="0 0 220 220" className="select-none">
          {/* Bearish Candle 1 */}
          <line x1="75" y1="95" x2="75" y2="190" stroke="#ef4444" strokeWidth="2" />
          <rect x="60" y="110" width="30" height="65" fill="#ef4444" fillOpacity="0.85" stroke="#f87171" strokeWidth="1.5" rx="1" />
          {/* Bullish Candle 2 (Engulfing) */}
          <line x1="145" y1="20" x2="145" y2="195" stroke="#22c55e" strokeWidth="2" />
          <rect x="130" y="35" width="30" height="150" fill="#22c55e" fillOpacity="0.85" stroke="#4ade80" strokeWidth="1.5" rx="1" />
        </svg>
      )
    },
    'bearish-engulfing': {
      title: 'Bearish Engulfing',
      type: 'Bearish Reversal',
      badgeClass: 'bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider font-display inline-block',
      psychology: 'Buyers initially push the price up to new session highs. Sellers then intervene aggressively with large volume, pulling price down past the open of the first candle and closing near session lows. Shows distribution.',
      ictTip: 'Look for this pattern at HTF Premium zones, specifically at key bearish Order Blocks or FVG mitigation areas. This confirms rejection and institutional order flow shifting to bearish.',
      example: 'EUR/USD rallies to key daily FVG at 1.0920, printing a Bearish Engulfing closing at 1.0880.',
      svg: (
        <svg width="220" height="220" viewBox="0 0 220 220" className="select-none">
          {/* Bullish Candle 1 */}
          <line x1="75" y1="20" x2="75" y2="125" stroke="#22c55e" strokeWidth="2" />
          <rect x="60" y="35" width="30" height="75" fill="#22c55e" fillOpacity="0.85" stroke="#4ade80" strokeWidth="1.5" rx="1" />
          {/* Bearish Candle 2 (Engulfing) */}
          <line x1="145" y1="10" x2="145" y2="200" stroke="#ef4444" strokeWidth="2" />
          <rect x="130" y="25" width="30" height="160" fill="#ef4444" fillOpacity="0.85" stroke="#f87171" strokeWidth="1.5" rx="1" />
        </svg>
      )
    },
    'bullish-hammer': {
      title: 'Bullish Hammer',
      type: 'Bullish Reversal',
      badgeClass: 'bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider font-display inline-block',
      psychology: 'Price drops sharply, making new lows as sellers dominate. However, buyers step in aggressively, rejecting the low and pushing price back up to close near the open, leaving a long lower tail.',
      ictTip: 'This represents a clear sweep of Sell-side Liquidity (SSL) below a swing low. The long wick shows institutional liquidity absorption, where retail stop losses are filled as sell-orders and bought by institutions.',
      example: 'EUR/USD sweeps swing low at 1.0780, leaving a long Hammer wick pointing to key support.',
      svg: (
        <svg width="220" height="220" viewBox="0 0 220 220" className="select-none">
          <line x1="20" y1="180" x2="200" y2="180" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="3,3" />
          {/* Hammer Candle */}
          <line x1="110" y1="60" x2="110" y2="200" stroke="#22c55e" strokeWidth="2.5" />
          <rect x="90" y="65" width="40" height="30" fill="#22c55e" fillOpacity="0.85" stroke="#4ade80" strokeWidth="1.5" rx="1" />
          {/* Annotations */}
          <path d="M 120,130 L 140,130" stroke="#9ca3af" strokeWidth="1" />
          <text x="145" y="133" fill="#9ca3af" fontSize="8" fontFamily="monospace" alignmentBaseline="middle">REJECTION WICK (2-3x Body)</text>
          <circle cx="110" cy="200" r="3" fill="#ef4444" />
          <text x="110" y="215" fill="#ef4444" fontSize="8" fontFamily="monospace" textAnchor="middle">LIQUIDITY SWEEP</text>
        </svg>
      )
    },
    'bearish-shooting-star': {
      title: 'Bearish Shooting Star',
      type: 'Bearish Reversal',
      badgeClass: 'bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider font-display inline-block',
      psychology: 'Price rallies strongly, breaking new highs as retail buyers FOMO in. Institutions then step in to distribute, driving the price back down to close near the session open, leaving a long upper tail.',
      ictTip: 'Represents a sweep of Buy-side Liquidity (BSL) above a swing high. Institutions trigger retail buy-stops to fill their short entries, showing price rejection at premium zones.',
      example: 'EUR/USD spikes above 1.0980 swing high before London Close, printing a Shooting Star.',
      svg: (
        <svg width="220" height="220" viewBox="0 0 220 220" className="select-none">
          <line x1="20" y1="180" x2="200" y2="180" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="3,3" />
          {/* Shooting Star Candle */}
          <line x1="110" y1="40" x2="110" y2="180" stroke="#ef4444" strokeWidth="2.5" />
          <rect x="90" y="145" width="40" height="30" fill="#ef4444" fillOpacity="0.85" stroke="#f87171" strokeWidth="1.5" rx="1" />
          {/* Annotations */}
          <path d="M 120,90 L 140,90" stroke="#9ca3af" strokeWidth="1" />
          <text x="145" y="93" fill="#9ca3af" fontSize="8" fontFamily="monospace" alignmentBaseline="middle">REJECTION WICK (2-3x Body)</text>
          <circle cx="110" cy="40" r="3" fill="#22c55e" />
          <text x="110" y="25" fill="#22c55e" fontSize="8" fontFamily="monospace" textAnchor="middle">LIQUIDITY SWEEP</text>
        </svg>
      )
    },
    'doji': {
      title: 'Doji (Indecision)',
      type: 'Neutral / Indecision',
      badgeClass: 'bg-gray-500/20 text-gray-400 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider font-display inline-block',
      psychology: 'Neither buyers nor sellers can control the price. Price fluctuates widely during the session, making both highs and lows, but returns to open at the exact same quote. Shows equilibrium.',
      ictTip: 'Represents a pause in order flow. In ICT, Dojis are often observed during Asian range consolidation or immediately preceding a massive expansion displacement.',
      example: 'EUR/USD consolidates at 1.0850 ahead of FOMC news release, printing multiple Doji stars.',
      svg: (
        <svg width="220" height="220" viewBox="0 0 220 220" className="select-none">
          <line x1="20" y1="180" x2="200" y2="180" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="3,3" />
          {/* Doji Candle */}
          <line x1="110" y1="40" x2="110" y2="180" stroke="#9ca3af" strokeWidth="2.5" />
          <line x1="85" y1="110" x2="135" y2="110" stroke="#ffffff" strokeWidth="4" />
          {/* Annotations */}
          <path d="M 140,110 L 155,110" stroke="#9ca3af" strokeWidth="1" />
          <text x="160" y="113" fill="#9ca3af" fontSize="8" fontFamily="monospace" alignmentBaseline="middle">OPEN = CLOSE</text>
        </svg>
      )
    }
  };

  const selected = patternData[activePattern];

  return (
    <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl">
      <p className="text-gray-400 font-light mb-8 text-sm uppercase tracking-wider">Select a pattern below to inspect its anatomy and institutional psychology:</p>
      
      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {/* Left Panel: Navigation buttons for patterns */}
        <div className="flex flex-col gap-3 lg:col-span-1">
          <button
            onClick={() => setActivePattern('bullish-engulfing')}
            className={`text-left px-5 py-4 rounded-xl border transition-all duration-300 flex justify-between items-center group ${
              activePattern === 'bullish-engulfing'
                ? 'border-brandGold/30 bg-brandGold/15 hover:border-brandGold/50'
                : 'border-white/5 bg-black/30 hover:border-white/10 hover:bg-white/5'
            }`}
          >
            <span className="font-bold text-xs uppercase tracking-wider text-green-400 font-display flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> Bullish Engulfing
            </span>
            <svg
              className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${
                activePattern === 'bullish-engulfing' ? 'text-brandGold' : 'text-gray-500'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button
            onClick={() => setActivePattern('bearish-engulfing')}
            className={`text-left px-5 py-4 rounded-xl border transition-all duration-300 flex justify-between items-center group ${
              activePattern === 'bearish-engulfing'
                ? 'border-brandGold/30 bg-brandGold/15 hover:border-brandGold/50'
                : 'border-white/5 bg-black/30 hover:border-white/10 hover:bg-white/5'
            }`}
          >
            <span className="font-bold text-xs uppercase tracking-wider text-red-400 font-display flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span> Bearish Engulfing
            </span>
            <svg
              className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${
                activePattern === 'bearish-engulfing' ? 'text-brandGold' : 'text-gray-500'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button
            onClick={() => setActivePattern('bullish-hammer')}
            className={`text-left px-5 py-4 rounded-xl border transition-all duration-300 flex justify-between items-center group ${
              activePattern === 'bullish-hammer'
                ? 'border-brandGold/30 bg-brandGold/15 hover:border-brandGold/50'
                : 'border-white/5 bg-black/30 hover:border-white/10 hover:bg-white/5'
            }`}
          >
            <span className="font-bold text-xs uppercase tracking-wider text-gray-200 font-display flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400"></span> Bullish Hammer
            </span>
            <svg
              className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${
                activePattern === 'bullish-hammer' ? 'text-brandGold' : 'text-gray-500'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button
            onClick={() => setActivePattern('bearish-shooting-star')}
            className={`text-left px-5 py-4 rounded-xl border transition-all duration-300 flex justify-between items-center group ${
              activePattern === 'bearish-shooting-star'
                ? 'border-brandGold/30 bg-brandGold/15 hover:border-brandGold/50'
                : 'border-white/5 bg-black/30 hover:border-white/10 hover:bg-white/5'
            }`}
          >
            <span className="font-bold text-xs uppercase tracking-wider text-gray-200 font-display flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400"></span> Bearish Shooting Star
            </span>
            <svg
              className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${
                activePattern === 'bearish-shooting-star' ? 'text-brandGold' : 'text-gray-500'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button
            onClick={() => setActivePattern('doji')}
            className={`text-left px-5 py-4 rounded-xl border transition-all duration-300 flex justify-between items-center group ${
              activePattern === 'doji'
                ? 'border-brandGold/30 bg-brandGold/15 hover:border-brandGold/50'
                : 'border-white/5 bg-black/30 hover:border-white/10 hover:bg-white/5'
            }`}
          >
            <span className="font-bold text-xs uppercase tracking-wider text-gray-400 font-display flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gray-500"></span> Doji (Indecision)
            </span>
            <svg
              className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${
                activePattern === 'doji' ? 'text-brandGold' : 'text-gray-500'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Middle Column: SVG Visualization */}
        <div className="bg-black/40 border border-white/10 p-6 rounded-xl flex flex-col items-center justify-center min-h-[300px] lg:col-span-1 relative">
          <div className="absolute top-4 left-4 text-xs font-bold text-gray-500 uppercase tracking-widest font-mono">SVG Schematic</div>
          <div id="pattern-svg-container" className="w-full flex justify-center items-center">
            {selected.svg}
          </div>
        </div>

        {/* Right Column: Descriptions & Details */}
        <div className="lg:col-span-1 space-y-6 flex flex-col justify-between h-full min-h-[300px]">
          <div className="space-y-4">
            <div>
              <span className={selected.badgeClass}>{selected.type}</span>
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider font-display mt-2">{selected.title}</h3>
            </div>

            <div className="bg-black/20 border border-white/5 p-4 rounded-lg">
              <span className="text-brandGold font-bold text-[10px] uppercase tracking-wider block mb-1">Market Psychology</span>
              <p className="text-xs text-gray-300 font-light leading-relaxed">{selected.psychology}</p>
            </div>

            <div className="bg-black/20 border border-white/5 p-4 rounded-lg">
              <span className="text-brandGold font-bold text-[10px] uppercase tracking-wider block mb-1">ICT Concept Integration</span>
              <p className="text-xs text-gray-300 font-light leading-relaxed">{selected.ictTip}</p>
            </div>
          </div>

          <div className="bg-brandGold/5 p-4 rounded-lg border border-brandGold/15 text-[11px] font-mono text-center">
            <span className="text-brandGold font-bold block mb-1">EUR/USD Example:</span>
            <span>{selected.example}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
