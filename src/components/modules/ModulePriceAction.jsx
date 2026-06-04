import React from 'react';
import PatternExplorer from '../PatternExplorer';

const swingCandles = [
  { x: 20, y: 250, h: 20, type: 'up', high: 245, low: 275 },
  { x: 35, y: 225, h: 20, type: 'up', high: 220, low: 250 },
  { x: 50, y: 200, h: 20, type: 'up', high: 190, low: 225 },
  { x: 65, y: 205, h: 15, type: 'down', high: 195, low: 225 },
  { x: 80, y: 175, h: 25, type: 'up', high: 170, low: 210 },
  { x: 95, y: 150, h: 20, type: 'up', high: 140, low: 180 },
  { x: 110, y: 130, h: 15, type: 'up', high: 120, low: 150 }, // SH1
  { x: 125, y: 135, h: 25, type: 'down', high: 125, low: 165 },
  { x: 140, y: 165, h: 30, type: 'down', high: 155, low: 200 },
  { x: 155, y: 200, h: 20, type: 'down', high: 190, low: 230 },
  { x: 170, y: 215, h: 10, type: 'up', high: 210, low: 235 },
  { x: 185, y: 225, h: 20, type: 'down', high: 215, low: 250 }, // SL1
  { x: 200, y: 195, h: 25, type: 'up', high: 185, low: 230 },
  { x: 215, y: 160, h: 30, type: 'up', high: 150, low: 195 },
  { x: 230, y: 135, h: 20, type: 'up', high: 125, low: 160 },
  { x: 245, y: 140, h: 15, type: 'down', high: 130, low: 165 },
  { x: 260, y: 110, h: 25, type: 'up', high: 100, low: 145 },
  { x: 275, y: 80, h: 25, type: 'up', high: 70, low: 115 },
  { x: 290, y: 50, h: 25, type: 'up', high: 40, low: 85 }, // SH2
  { x: 305, y: 60, h: 30, type: 'down', high: 50, low: 95 },
  { x: 320, y: 95, h: 20, type: 'down', high: 85, low: 120 },
  { x: 335, y: 120, h: 25, type: 'down', high: 110, low: 150 }, // SL2
  { x: 350, y: 90, h: 25, type: 'up', high: 80, low: 125 },
  { x: 365, y: 65, h: 20, type: 'up', high: 55, low: 95 },
  { x: 380, y: 40, h: 20, type: 'up', high: 30, low: 65 }
];

export default function ModulePriceAction() {
  return (
    <>
      {/* Module 4 Hero Section */}
      <section id="module4" className="min-h-screen flex flex-col justify-center items-center relative py-24 px-6">
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brandGold text-brandGold font-bold tracking-widest text-xs uppercase mb-10 bg-brandGold/5">
                  <span className="w-2 h-2 rounded-full bg-brandGold animate-pulse"></span> MODULE 4
              </div>
              <h1 className="text-6xl md:text-8xl font-black font-display leading-none mb-6 tracking-tight uppercase">
                  Price <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brandGold to-yellow-300">Action</span>
              </h1>
              <p className="text-textMuted text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide mt-8">
                  The foundation of trading. Learn to read market structure, identify key levels, and understand the purest form of market movement.
              </p>
          </div>
</section>

      {/* 4.1 Market Structure */}
      <section id="topic-4-1" className="min-h-screen flex flex-col items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 4.1</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Market Structure</h2>
              </div>
              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl bg-black/40 border border-white/5">
                  <p className="text-gray-400 font-light mb-8 leading-relaxed">
                      Market structure is the absolute foundation of price action. It tells you who is in control (buyers or sellers) by tracing the sequences of peaks and troughs.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                      {/* Uptrend */}
                      <div className="bg-black/50 p-6 rounded-lg border border-green-500/20">
                          <h3 className="text-green-400 font-bold uppercase tracking-wider text-sm mb-4 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-green-500"></span> Uptrend (Bullish)
                          </h3>
                          
                          <div className="w-full flex justify-center mb-6 overflow-hidden text-gray-300">
                              <svg viewBox="0 0 300 180" className="w-full max-w-[280px] h-auto drop-shadow-[0_0_10px_rgba(34,197,94,0.1)]">
                                  <polyline points="20,150 70,90 110,130 160,60 200,100 250,30 280,70" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                                  <line x1="50" y1="80" x2="90" y2="80" stroke="#ef4444" strokeWidth="2.5" />
                                  <text x="70" y="72" fill="currentColor" fontSize="13" fontFamily="monospace" fontWeight="bold" textAnchor="middle">HH</text>
                                  <line x1="90" y1="140" x2="130" y2="140" stroke="#22c55e" strokeWidth="2.5" />
                                  <text x="110" y="156" fill="currentColor" fontSize="13" fontFamily="monospace" fontWeight="bold" textAnchor="middle">HL</text>
                                  <line x1="140" y1="50" x2="180" y2="50" stroke="#ef4444" strokeWidth="2.5" />
                                  <text x="160" y="42" fill="currentColor" fontSize="13" fontFamily="monospace" fontWeight="bold" textAnchor="middle">HH</text>
                                  <line x1="180" y1="110" x2="220" y2="110" stroke="#22c55e" strokeWidth="2.5" />
                                  <text x="200" y="126" fill="currentColor" fontSize="13" fontFamily="monospace" fontWeight="bold" textAnchor="middle">HL</text>
                                  <line x1="230" y1="20" x2="270" y2="20" stroke="#ef4444" strokeWidth="2.5" />
                                  <text x="250" y="12" fill="currentColor" fontSize="13" fontFamily="monospace" fontWeight="bold" textAnchor="middle">HH</text>
                                  <line x1="260" y1="80" x2="300" y2="80" stroke="#22c55e" strokeWidth="2.5" />
                                  <text x="280" y="96" fill="currentColor" fontSize="13" fontFamily="monospace" fontWeight="bold" textAnchor="middle">HL</text>
                              </svg>
                          </div>

                          <div className="font-mono text-sm text-gray-300 mb-6 bg-white/5 p-4 rounded text-center">
                              HH → HL → HH → HL
                          </div>
                          <ul className="space-y-3 text-xs text-gray-400 font-light">
                              <li><span className="text-white font-bold">HH (Higher High):</span> Price breaks the previous peak.</li>
                              <li><span className="text-white font-bold">HL (Higher Low):</span> Price pulls back but stays above the previous low.</li>
                          </ul>
                      </div>

                      {/* Downtrend */}
                      <div className="bg-black/50 p-6 rounded-lg border border-red-500/20">
                          <h3 className="text-red-400 font-bold uppercase tracking-wider text-sm mb-4 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-red-500"></span> Downtrend (Bearish)
                          </h3>

                          <div className="w-full flex justify-center mb-6 overflow-hidden text-gray-300">
                              <svg viewBox="0 0 300 180" className="w-full max-w-[280px] h-auto drop-shadow-[0_0_10px_rgba(239,68,68,0.1)]">
                                  <polyline points="20,20 70,80 110,40 160,110 200,70 250,140 280,100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                                  <line x1="50" y1="90" x2="90" y2="90" stroke="#22c55e" strokeWidth="2.5" />
                                  <text x="70" y="106" fill="currentColor" fontSize="13" fontFamily="monospace" fontWeight="bold" textAnchor="middle">LL</text>
                                  <line x1="90" y1="30" x2="130" y2="30" stroke="#ef4444" strokeWidth="2.5" />
                                  <text x="110" y="22" fill="currentColor" fontSize="13" fontFamily="monospace" fontWeight="bold" textAnchor="middle">LH</text>
                                  <line x1="140" y1="120" x2="180" y2="120" stroke="#22c55e" strokeWidth="2.5" />
                                  <text x="160" y="136" fill="currentColor" fontSize="13" fontFamily="monospace" fontWeight="bold" textAnchor="middle">LL</text>
                                  <line x1="180" y1="60" x2="220" y2="60" stroke="#ef4444" strokeWidth="2.5" />
                                  <text x="200" y="52" fill="currentColor" fontSize="13" fontFamily="monospace" fontWeight="bold" textAnchor="middle">LH</text>
                                  <line x1="230" y1="150" x2="270" y2="150" stroke="#22c55e" strokeWidth="2.5" />
                                  <text x="250" y="166" fill="currentColor" fontSize="13" fontFamily="monospace" fontWeight="bold" textAnchor="middle">LL</text>
                              </svg>
                          </div>

                          <div className="font-mono text-sm text-gray-300 mb-6 bg-white/5 p-4 rounded text-center">
                              LL → LH → LL → LH
                          </div>
                          <ul className="space-y-3 text-xs text-gray-400 font-light">
                              <li><span className="text-white font-bold">LL (Lower Low):</span> Price breaks the previous floor.</li>
                              <li><span className="text-white font-bold">LH (Lower High):</span> Price pulls back up but fails to break the previous peak.</li>
                          </ul>
                      </div>
                  </div>

                  <div className="mt-8 bg-brandGold/10 p-5 rounded border border-brandGold/20">
                      <h4 className="text-brandGold text-xs font-bold uppercase tracking-widest mb-2">The Range (Consolidation)</h4>
                      <p className="text-gray-300 text-sm font-light">
                          When price fails to make consecutive Higher Highs or Lower Lows, it enters a <strong className="text-white">Range</strong>. It bounces between established highs and lows without clear directional displacement.
                      </p>
                  </div>
              </div>
          </div>
</section>

      {/* 4.2 Support and Resistance */}
      <section id="topic-4-2" className="min-h-screen flex flex-col items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 4.2</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Support and Resistance</h2>
              </div>
              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl bg-black/40 border border-white/5">
                  <p className="text-gray-400 font-light mb-8 leading-relaxed">
                      Key zones where price has historically reacted due to concentrated buying or selling interest.
                  </p>
                  
                  <div className="w-full flex justify-center mb-10 overflow-hidden text-gray-300">
                      <svg viewBox="0 0 400 200" className="w-full max-w-[400px] h-auto drop-shadow-xl">
                          <polyline points="20,180 100,100 150,150 220,70 270,120 340,40 380,90" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
                          
                          <text x="100" y="85" fill="#ef4444" fontSize="15" fontFamily="monospace" fontWeight="bold" textAnchor="middle" letterSpacing="0.05em">Resistance</text>
                          <text x="220" y="55" fill="#ef4444" fontSize="15" fontFamily="monospace" fontWeight="bold" textAnchor="middle" letterSpacing="0.05em">Resistance</text>
                          <text x="340" y="25" fill="#ef4444" fontSize="15" fontFamily="monospace" fontWeight="bold" textAnchor="middle" letterSpacing="0.05em">Resistance</text>
                          
                          <text x="150" y="175" fill="#22c55e" fontSize="15" fontFamily="monospace" fontWeight="bold" textAnchor="middle" letterSpacing="0.05em">Support</text>
                          <text x="270" y="145" fill="#22c55e" fontSize="15" fontFamily="monospace" fontWeight="bold" textAnchor="middle" letterSpacing="0.05em">Support</text>
                      </svg>
                  </div>
                  
                  <div className="space-y-6">
                      <div className="flex items-start gap-4 bg-black/30 p-5 rounded-lg border border-white/5">
                          <div className="w-2 h-8 bg-green-500 rounded mt-1 flex-shrink-0"></div>
                          <div>
                              <h4 className="text-white font-bold uppercase text-sm mb-2">Support (The Floor)</h4>
                              <p className="text-gray-400 text-xs font-light leading-relaxed">
                                  A zone below the current price where buying interest is strong enough to overcome selling pressure. Previous lows often act as support.
                              </p>
                          </div>
                      </div>

                      <div className="flex items-start gap-4 bg-black/30 p-5 rounded-lg border border-white/5">
                          <div className="w-2 h-8 bg-red-500 rounded mt-1 flex-shrink-0"></div>
                          <div>
                              <h4 className="text-white font-bold uppercase text-sm mb-2">Resistance (The Ceiling)</h4>
                              <p className="text-gray-400 text-xs font-light leading-relaxed">
                                  A zone above the current price where selling pressure overcomes buying pressure. Previous highs often act as resistance.
                              </p>
                          </div>
                      </div>

                      <div className="flex items-start gap-4 bg-brandGold/10 p-5 rounded-lg border border-brandGold/20">
                          <div className="w-2 h-8 bg-brandGold rounded mt-1 flex-shrink-0"></div>
                          <div>
                              <h4 className="text-brandGold font-bold uppercase text-sm mb-2">Role Reversal (Flip Zones)</h4>
                              <p className="text-gray-300 text-xs font-light leading-relaxed">
                                  Once a Resistance level is broken, it often flips to become new Support. Conversely, broken Support often becomes new Resistance. The market remembers these key structural levels.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
</section>

      {/* 4.3 Swing Highs and Swing Lows */}
      <section id="topic-4-3" className="min-h-screen flex flex-col items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 4.3</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Swing Highs & Lows</h2>
              </div>
              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl bg-black/40 border border-white/5">
                  <p className="text-gray-400 font-light mb-8 leading-relaxed">
                      These are the building blocks of market structure. You must accurately map these fractal points to define the current trend.
                  </p>

                  <div className="w-full flex justify-center mb-12 overflow-hidden text-gray-300">
                      <svg viewBox="0 0 420 300" className="w-full max-w-[600px] h-auto drop-shadow-xl bg-black/20 rounded-xl border border-white/5 p-4">
                          <line x1="24" y1="260" x2="114" y2="135" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4 4" />
                          <line x1="189" y1="235" x2="294" y2="60" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4 4" />
                          <line x1="339" y1="130" x2="384" y2="50" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4 4" />

                          {swingCandles.map((c, i) => (
                              <g key={i}>
                                  <line x1={c.x + 4} y1={c.high} x2={c.x + 4} y2={c.low} stroke={c.type === 'up' ? '#22c55e' : '#ef4444'} strokeWidth="1.5" />
                                  <rect x={c.x} y={c.y} width="8" height={c.h} fill={c.type === 'up' ? '#22c55e' : '#ef4444'} rx="1" />
                              </g>
                          ))}

                          <g transform="translate(114, 110)">
                              <text x="0" y="0" fill="#ef4444" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle">SWING HIGH</text>
                              <line x1="-20" y1="10" x2="20" y2="10" stroke="#f97316" strokeWidth="2" />
                          </g>
                          <g transform="translate(294, 30)">
                              <text x="0" y="0" fill="#ef4444" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle">SWING HIGH</text>
                              <line x1="-20" y1="10" x2="20" y2="10" stroke="#f97316" strokeWidth="2" />
                          </g>

                          <g transform="translate(189, 280)">
                              <line x1="-20" y1="-15" x2="20" y2="-15" stroke="#f97316" strokeWidth="2" />
                              <text x="0" y="0" fill="#ef4444" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle">SWING LOW</text>
                          </g>
                          <g transform="translate(339, 175)">
                              <line x1="-20" y1="-15" x2="20" y2="-15" stroke="#f97316" strokeWidth="2" />
                              <text x="0" y="0" fill="#ef4444" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle">SWING LOW</text>
                          </g>
                      </svg>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 text-sm font-light">
                      <div className="bg-black/50 p-6 rounded-lg border border-red-500/20 text-center">
                          <h3 className="text-red-400 font-bold uppercase tracking-wider mb-4">Swing High</h3>
                          <div className="flex justify-center items-end gap-2 mb-6 h-24">
                              <div className="w-8 bg-gray-600 h-12 rounded-t"></div>
                              <div className="w-8 bg-red-500 h-20 rounded-t shadow-[0_0_15px_rgba(239,68,68,0.5)] border-2 border-red-400"></div>
                              <div className="w-8 bg-gray-600 h-10 rounded-t"></div>
                          </div>
                          <p className="text-gray-400 text-xs">
                              A candlestick with a higher high than the candles immediately to its left and right. It forms an upside down "V" shape in price action.
                          </p>
                      </div>

                      <div className="bg-black/50 p-6 rounded-lg border border-green-500/20 text-center">
                          <h3 className="text-green-400 font-bold uppercase tracking-wider mb-4">Swing Low</h3>
                          <div className="flex justify-center items-start gap-2 mb-6 h-24">
                              <div className="w-8 bg-gray-600 h-12 rounded-b"></div>
                              <div className="w-8 bg-green-500 h-20 rounded-b shadow-[0_0_15px_rgba(34,197,94,0.5)] border-2 border-green-400"></div>
                              <div className="w-8 bg-gray-600 h-10 rounded-b"></div>
                          </div>
                          <p className="text-gray-400 text-xs">
                              A candlestick with a lower low than the candles immediately to its left and right. It forms a "V" shape in price action.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
</section>

      {/* 4.4 Break of Structure (BOS) */}
      <section id="topic-4-4" className="min-h-screen flex flex-col items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 4.4</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Break of Structure (BOS)</h2>
              </div>
              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl bg-black/40 border border-white/5 relative overflow-hidden">
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-brandGold/5 rounded-full blur-3xl"></div>
                  
                  <p className="text-gray-300 font-light mb-8 text-lg">
                      A <strong className="text-white">Break of Structure (BOS)</strong> occurs when price successfully closes beyond a previous key structural point (Swing High or Swing Low). It confirms a <span className="text-brandGold border-b border-brandGold">trend continuation</span>.
                  </p>

                  <div className="grid md:grid-cols-2 gap-10">
                      <div className="bg-black/40 p-6 rounded-xl border border-green-500/20 relative">
                          <h3 className="text-green-400 font-bold uppercase tracking-widest text-xs mb-4">Bullish BOS</h3>
                          <p className="text-xs text-gray-400 font-light mb-6">Price breaks and closes above a previous <strong className="text-white">Higher High (HH)</strong>. This confirms buyers are still aggressively in control.</p>
                          <div className="w-full h-40 mb-4 flex justify-center">
                              <svg viewBox="0 0 200 120" className="w-full h-full max-w-[200px] drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">
                                  {/* Dashed lines */}
                                  <line x1="45" y1="70" x2="98" y2="70" stroke="#22c55e" strokeWidth="2.5" strokeDasharray="6,4" />
                                  <line x1="115" y1="35" x2="170" y2="35" stroke="#22c55e" strokeWidth="2.5" strokeDasharray="6,4" />
                                  
                                  {/* Main zig-zag line */}
                                  <polyline points="20,110 50,70 75,95 120,35 145,60 185,10" fill="none" stroke="#e5e7eb" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
                                  
                                  {/* Arrowhead */}
                                  <polyline points="170,10 185,10 185,25" fill="none" stroke="#e5e7eb" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
                                  
                                  {/* BOS Texts */}
                                  <text x="71" y="60" fill="#3b82f6" fontSize="13" fontFamily="sans-serif" fontWeight="900" textAnchor="middle">BOS</text>
                                  <text x="142" y="25" fill="#3b82f6" fontSize="13" fontFamily="sans-serif" fontWeight="900" textAnchor="middle">BOS</text>
                              </svg>
                          </div>
                      </div>

                      <div className="bg-black/40 p-6 rounded-xl border border-red-500/20 relative">
                          <h3 className="text-red-400 font-bold uppercase tracking-widest text-xs mb-4">Bearish BOS</h3>
                          <p className="text-xs text-gray-400 font-light mb-6">Price breaks and closes below a previous <strong className="text-white">Lower Low (LL)</strong>. This confirms sellers are still aggressively in control.</p>
                          <div className="w-full h-40 mb-4 flex justify-center">
                              <svg viewBox="0 0 200 120" className="w-full h-full max-w-[200px] drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">
                                  {/* Dashed lines */}
                                  <line x1="45" y1="50" x2="98" y2="50" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="6,4" />
                                  <line x1="115" y1="85" x2="170" y2="85" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="6,4" />
                                  
                                  {/* Main zig-zag line */}
                                  <polyline points="20,10 50,50 75,25 120,85 145,60 185,110" fill="none" stroke="#e5e7eb" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
                                  
                                  {/* Arrowhead */}
                                  <polyline points="170,110 185,110 185,95" fill="none" stroke="#e5e7eb" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
                                  
                                  {/* BOS Texts */}
                                  <text x="71" y="65" fill="#3b82f6" fontSize="13" fontFamily="sans-serif" fontWeight="900" textAnchor="middle" alignmentBaseline="hanging">BOS</text>
                                  <text x="142" y="100" fill="#3b82f6" fontSize="13" fontFamily="sans-serif" fontWeight="900" textAnchor="middle" alignmentBaseline="hanging">BOS</text>
                              </svg>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
</section>

      {/* 4.5 Change of Character (CHoCH) */}
      <section id="topic-4-5" className="min-h-screen flex flex-col items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 4.5</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Change of Character (CHoCH)</h2>
              </div>
              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl bg-black/40 border border-white/5">
                  <p className="text-gray-300 font-light mb-8 text-lg">
                      While BOS signifies trend continuation, a <strong className="text-brandGold">Change of Character (CHoCH)</strong> is the first early warning sign of a potential <span className="text-white font-bold border-b border-brandGold">trend reversal</span>.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-black/30 p-6 rounded-lg border border-white/10 flex flex-col items-center">
                          <h4 className="text-brandGold text-xs uppercase tracking-widest font-bold mb-6">Bullish CHoCH</h4>
                          <div className="w-full h-40 mb-6 flex justify-center">
                              <svg viewBox="0 0 200 120" className="w-full h-full max-w-[200px] drop-shadow-[0_0_10px_rgba(34,197,94,0.2)]">
                                  <polyline points="20,20 60,80 100,50 140,110" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinejoin="round" />
                                  <line x1="140" y1="110" x2="180" y2="30" stroke="#22c55e" strokeWidth="2.5" strokeLinejoin="round" />
                                  <line x1="90" y1="50" x2="190" y2="50" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="4,4" />
                                  <text x="195" y="46" fill="#22c55e" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="end">CHoCH</text>
                                  <circle cx="60" cy="80" r="3.5" fill="#ef4444" />
                                  <circle cx="100" cy="50" r="3.5" fill="#ef4444" />
                                  <text x="100" y="38" fill="#ef4444" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">LH</text>
                                  <circle cx="140" cy="110" r="3.5" fill="#ef4444" />
                                  <text x="140" y="125" fill="#ef4444" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">LL</text>
                              </svg>
                          </div>
                          <p className="text-gray-400 text-sm font-light text-center">
                              In a downtrend, price makes a Lower Low, but then rallies and breaks above the previous Lower High (LH). The trend character has shifted from bearish to bullish.
                          </p>
                      </div>
                      <div className="bg-black/30 p-6 rounded-lg border border-white/10 flex flex-col items-center">
                          <h4 className="text-brandGold text-xs uppercase tracking-widest font-bold mb-6">Bearish CHoCH</h4>
                          <div className="w-full h-40 mb-6 flex justify-center">
                              <svg viewBox="0 0 200 120" className="w-full h-full max-w-[200px] drop-shadow-[0_0_10px_rgba(239,68,68,0.2)]">
                                  <polyline points="20,100 60,40 100,70 140,10" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinejoin="round" />
                                  <line x1="140" y1="10" x2="180" y2="90" stroke="#ef4444" strokeWidth="2.5" strokeLinejoin="round" />
                                  <line x1="90" y1="70" x2="190" y2="70" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="4,4" />
                                  <text x="195" y="66" fill="#ef4444" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="end">CHoCH</text>
                                  <circle cx="60" cy="40" r="3.5" fill="#22c55e" />
                                  <circle cx="100" cy="70" r="3.5" fill="#22c55e" />
                                  <text x="100" y="88" fill="#22c55e" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">HL</text>
                                  <circle cx="140" cy="10" r="3.5" fill="#22c55e" />
                                  <text x="140" y="0" fill="#22c55e" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">HH</text>
                              </svg>
                          </div>
                          <p className="text-gray-400 text-sm font-light text-center">
                              In an uptrend, price makes a Higher High, but then drops and breaks below the previous Higher Low (HL). The trend character has shifted from bullish to bearish.
                          </p>
                      </div>
                  </div>

                  <div className="mt-8 bg-red-500/5 border border-red-500/20 p-5 rounded">
                      <h4 className="text-red-400 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                          <span className="text-lg">⚠️</span> Crucial Difference
                      </h4>
                      <p className="text-gray-300 text-sm font-light leading-relaxed">
                          Do not confuse BOS with CHoCH. <strong className="text-white">BOS</strong> happens in the direction of the current trend (confirming it). <strong className="text-white">CHoCH</strong> happens against the direction of the current trend (indicating a reversal).
                      </p>
                  </div>
              </div>
          </div>
</section>

      {/* 4.6 Candlestick Patterns */}
      <section id="topic-4-6" className="min-h-screen flex flex-col items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 4.6</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Candlestick Patterns</h2>
              </div>
              <div className="bg-brandGold/10 text-brandGold text-sm font-semibold p-4 rounded mb-8 border border-brandGold/30">
                  Rule: Only trade patterns AFTER identifying market structure. Use them as confirmation, not as a standalone strategy.
              </div>
              <PatternExplorer />
          </div>
</section>

      {/* 4.7 Trend and Pullback Trading */}
      <section id="topic-4-7" className="min-h-screen flex flex-col items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 4.7</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Trend & Pullback Trading</h2>
              </div>
              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl bg-black/40 border border-white/5">
                  <p className="text-gray-300 font-light mb-8 leading-relaxed">
                      This is where many high-probability trades come from. We do not chase price when it is expanding; we wait for the discount (pullback) to enter.
                  </p>

                  <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                      <div className="bg-black/50 p-6 rounded border border-white/10 text-center w-40">
                          <h4 className="text-white font-bold uppercase text-xs mb-2">Phase 1</h4>
                          <span className="text-brandGold font-mono">TREND (BOS)</span>
                      </div>
                      <svg className="w-6 h-6 text-gray-500 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      <svg className="w-6 h-6 text-gray-500 block md:hidden rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      
                      <div className="bg-black/50 p-6 rounded border border-white/10 text-center w-40">
                          <h4 className="text-white font-bold uppercase text-xs mb-2">Phase 2</h4>
                          <span className="text-yellow-500 font-mono">PULLBACK</span>
                      </div>
                      <svg className="w-6 h-6 text-gray-500 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      <svg className="w-6 h-6 text-gray-500 block md:hidden rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>

                      <div className="bg-black/50 p-6 rounded border border-brandGold/50 text-center w-40 relative">
                          <div className="absolute -top-3 -right-3 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">✓</div>
                          <h4 className="text-white font-bold uppercase text-xs mb-2">Phase 3</h4>
                          <span className="text-green-400 font-mono">CONTINUATION</span>
                      </div>
                  </div>

                  <p className="text-gray-400 text-sm font-light leading-relaxed text-center max-w-2xl mx-auto">
                      Wait for a clear Trend (BOS). Let the retail traders chase the breakout. Wait for the algorithm to Pullback into a key structural area (Support/Resistance or Fair Value Gap). Enter when the Continuation phase begins.
                  </p>
              </div>
          </div>
</section>

      {/* 4.8 Confluence */}
      <section id="topic-4-8" className="min-h-screen flex flex-col items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 4.8</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Confluence</h2>
              </div>
              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl bg-black/40 border border-white/5">
                  <p className="text-gray-300 font-light mb-8 text-lg leading-relaxed text-center max-w-3xl mx-auto">
                      No single concept guarantees a winning trade. Professional trading requires <strong className="text-brandGold">Confluence</strong> — combining multiple logical reasons to execute a trade.
                  </p>

                  <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto mb-10">
                      <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-gray-300">Market Structure (Trend)</span>
                      <span className="text-brandGold mt-2">+</span>
                      <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-gray-300">Key Support / Resistance</span>
                      <span className="text-brandGold mt-2">+</span>
                      <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-gray-300">Liquidity Sweeps</span>
                      <span className="text-brandGold mt-2">+</span>
                      <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-gray-300">Session Kill Zones</span>
                      <span className="text-brandGold mt-2">+</span>
                      <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-brandGold font-bold">Candlestick Confirmation</span>
                  </div>

                  <div className="bg-gradient-to-r from-brandGold/10 to-transparent p-6 border-l-4 border-brandGold rounded-r-lg">
                      <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">The Sniper Approach</h4>
                      <p className="text-gray-400 text-xs font-light leading-relaxed">
                          When 3 or more of these elements align perfectly in price and time, you have found a high-probability A+ setup. Execution should be fearless.
                      </p>
                  </div>
              </div>
          </div>
          {/* Next Module Arrow (Links to Module 5 - Sessions) */}
          <div className="mt-8 flex justify-center w-full md:absolute md:bottom-8 md:left-1/2 md:transform md:-translate-x-1/2 z-20">
              <a href="#module5" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                  <span className="uppercase font-bold mb-1">Next Module</span>
                  <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
              </a>
          </div>
      </section>
    </>
  );
}
