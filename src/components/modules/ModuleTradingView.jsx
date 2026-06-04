import React from 'react';

export default function ModuleTradingView() {
  return (
    <>
      {/* Module 3 Hero Section (TradingView Tools) */}
      <section id="module3" className="min-h-screen flex flex-col justify-center items-center relative py-24 px-6">
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brandGold text-brandGold font-bold tracking-widest text-xs uppercase mb-10 bg-brandGold/5">
                  <span className="w-2 h-2 rounded-full bg-brandGold animate-pulse"></span> MODULE 3
              </div>
              <h1 className="text-6xl md:text-8xl font-black font-display leading-none mb-6 tracking-tight uppercase">
                  Tools in <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brandGold to-yellow-300">TradingView</span>
              </h1>
              <p className="text-textMuted text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide mt-8">
                  Forex & ICT Concepts — Mentorship Program. Master the chart, drawing, indicators, and tools inside TradingView to execute like a professional.
              </p>
          </div>
          {/* Next Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <a href="#topic-3-1" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                  <span className="uppercase font-bold mb-1">Next Topic</span>
                  <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
              </a>
          </div>
      </section>

      {/* Section 3.1 Drawing Tools */}
      <section id="topic-3-1" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 3.1</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Drawing & Analysis Tools</h2>
              </div>

              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl">
                  <p className="text-gray-400 font-light mb-8 text-sm uppercase tracking-wider">Drawing instruments for chart annotation (Fully interactive vector render):</p>

                  <div className="grid grid-cols-1 gap-8 text-sm font-light leading-relaxed text-gray-300">
                      
                      {/* Trendlines */}
                      <div className="bg-black/30 p-6 md:p-8 rounded-xl border border-white/5 flex flex-col md:flex-row items-center gap-8 transition-all duration-300 hover:border-brandGold/30">
                          <div className="flex-1 space-y-4">
                              <span className="bg-brandGold/20 text-brandGold px-2.5 py-1 rounded text-[10px] uppercase font-bold tracking-wider block w-max font-display">Liquidity Pools</span>
                              <h3 className="text-2xl font-bold text-white">Trendlines as Liquidity Pools</h3>
                              <p className="text-sm text-gray-400 leading-relaxed">
                                  Retail traders view trendlines as diagonal support or resistance. In institutional trading, these trendlines are recognized as <strong className="text-white font-semibold">diagonally engineered liquidity pools</strong>. They exist to induce retail buying or selling, building up a cluster of stop-losses resting directly below or above them for the algorithm to sweep.
                              </p>
                              <div className="bg-brandGold/5 border-l-2 border-brandGold p-4 rounded-r-lg mt-4">
                                  <h4 className="text-brandGold font-bold text-xs uppercase tracking-wider mb-1">ICT Concept Tip</h4>
                                  <p className="text-xs text-gray-300 font-light">Never trade breakouts or bounces along trendlines. The interbank algorithm targets these diagonal lines to run stops, gathering the necessary opposite orders before reversing to the true direction.</p>
                              </div>
                          </div>
                          
                          {/* Vector Trendline Tool Explanation */}
                          <div className="w-full md:w-[450px] flex-shrink-0 border border-white/10 rounded-lg overflow-hidden bg-brandDarker shadow-lg p-4">
                              <svg viewBox="0 0 450 220" className="w-full h-auto select-none">
                                  {/* Grid Lines */}
                                  <g stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1">
                                      <line x1="10" y1="40" x2="440" y2="40" />
                                      <line x1="10" y1="80" x2="440" y2="80" />
                                      <line x1="10" y1="120" x2="440" y2="120" />
                                      <line x1="10" y1="160" x2="440" y2="160" />
                                      <line x1="10" y1="200" x2="440" y2="200" />
                                      <line x1="90" y1="10" x2="90" y2="210" />
                                      <line x1="180" y1="10" x2="180" y2="210" />
                                      <line x1="270" y1="10" x2="270" y2="210" />
                                      <line x1="360" y1="10" x2="360" y2="210" />
                                  </g>
                                  
                                  {/* Trendline (Dashed Gold) */}
                                  <line x1="40" y1="180" x2="360" y2="80" stroke="#facc15" strokeWidth="2" strokeDasharray="4,4" />
                                  <text x="50" y="160" fill="#facc15" fontSize="8" fontFamily="monospace" fontWeight="bold">Trendline Support (Retail Lure)</text>
                                  
                                  {/* Stop Loss Clusters (Dotted Red Zone) */}
                                  <rect x="50" y="185" width="280" height="25" fill="rgba(239, 68, 68, 0.04)" rx="3" />
                                  <text x="190" y="200" fill="#ef4444" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">$$$ Retail Stop-Loss Cluster (Sell-Side Liquidity) $$$</text>
                                  
                                  {/* Bounces */}
                                  <g>
                                      {/* Bounce 1 (Green) */}
                                      <line x1="100" y1="130" x2="100" y2="175" stroke="#22c55e" strokeWidth="1.5" />
                                      <rect x="94" y="140" width="12" height="22" fill="#22c55e" fillOpacity="0.8" stroke="#4ade80" strokeWidth="0.5" rx="1" />
                                      
                                      {/* Bounce 2 (Green) */}
                                      <line x1="190" y1="105" x2="190" y2="145" stroke="#22c55e" strokeWidth="1.5" />
                                      <rect x="184" y="115" width="12" height="20" fill="#22c55e" fillOpacity="0.8" stroke="#4ade80" strokeWidth="0.5" rx="1" />
                                      
                                      {/* Bounce 3 (Green) */}
                                      <line x1="280" y1="75" x2="280" y2="115" stroke="#22c55e" strokeWidth="1.5" />
                                      <rect x="274" y="85" width="12" height="18" fill="#22c55e" fillOpacity="0.8" stroke="#4ade80" strokeWidth="0.5" rx="1" />
                                  </g>
                                  
                                  {/* Sweeper Candle (Big Red Institutional Move) */}
                                  <g>
                                      <line x1="330" y1="70" x2="330" y2="205" stroke="#ef4444" strokeWidth="2" />
                                      <rect x="322" y="85" width="16" height="85" fill="#ef4444" fillOpacity="0.85" stroke="#f87171" strokeWidth="0.5" rx="2" />
                                      
                                      {/* Sweep Callout */}
                                      <circle cx="330" cy="205" r="5" fill="none" stroke="#facc15" strokeWidth="1.5" />
                                      <path d="M335 205 L365 180" stroke="#facc15" strokeWidth="1" strokeDasharray="2,2" />
                                      <text x="370" y="178" fill="#facc15" fontSize="8" fontFamily="monospace" fontWeight="bold">Liquidity Sweep (Stop Hunt)</text>
                                  </g>

                                  {/* Big Green Reversal Candle */}
                                  <g>
                                      <line x1="390" y1="30" x2="390" y2="160" stroke="#22c55e" strokeWidth="2" />
                                      <rect x="382" y="45" width="16" height="100" fill="#22c55e" fillOpacity="0.85" stroke="#4ade80" strokeWidth="0.5" rx="2" />
                                      <text x="390" y="25" fill="#22c55e" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Displacement Up</text>
                                  </g>
                              </svg>
                          </div>
                      </div>

                      {/* Rectangles */}
                      <div className="bg-black/30 p-6 md:p-8 rounded-xl border border-white/5 flex flex-col md:flex-row items-center gap-8 transition-all duration-300 hover:border-brandGold/30">
                          <div className="flex-1 space-y-4">
                              <span className="bg-brandGold/20 text-brandGold px-2.5 py-1 rounded text-[10px] uppercase font-bold tracking-wider block w-max font-display">Structural Zones</span>
                              <h3 className="text-2xl font-bold text-white">Rectangle Tool (Zone Marker)</h3>
                              <p className="text-sm text-gray-400 leading-relaxed">
                                  The primary tool for drawing structural areas like <strong className="text-white font-semibold">Order Blocks (OB)</strong> and <strong className="text-white font-semibold">Fair Value Gaps (FVG)</strong> on your charts.
                              </p>
                              <div className="bg-brandGold/5 border-l-2 border-brandGold p-4 rounded-r-lg mt-4">
                                  <h4 className="text-brandGold font-bold text-xs uppercase tracking-wider mb-1">ICT Concept Tip</h4>
                                  <p className="text-xs text-gray-300 font-light">Use rectangles to map the last up-close candle before a bearish drop (Bearish Order Block) or down-close candle before a bullish run (Bullish Order Block). These represent institutional entries.</p>
                              </div>
                          </div>
                          
                          {/* Vector Rectangle Tool Explanation */}
                          <div className="w-full md:w-[450px] flex-shrink-0 border border-white/10 rounded-lg overflow-hidden bg-brandDarker shadow-lg p-4">
                              <svg viewBox="0 0 450 220" className="w-full h-auto select-none">
                                  {/* Grid Lines */}
                                  <g stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1">
                                      <line x1="10" y1="40" x2="440" y2="40" />
                                      <line x1="10" y1="80" x2="440" y2="80" />
                                      <line x1="10" y1="120" x2="440" y2="120" />
                                      <line x1="10" y1="160" x2="440" y2="160" />
                                      <line x1="10" y1="200" x2="440" y2="200" />
                                      <line x1="90" y1="10" x2="90" y2="210" />
                                      <line x1="180" y1="10" x2="180" y2="210" />
                                      <line x1="270" y1="10" x2="270" y2="210" />
                                      <line x1="360" y1="10" x2="360" y2="210" />
                                  </g>
                                  
                                  {/* Rectangle Tool Highlight (Shaded Zone) */}
                                  <rect x="75" y="90" width="290" height="55" fill="rgba(250, 204, 21, 0.08)" stroke="#facc15" strokeWidth="1.2" strokeDasharray="3,3" rx="2" />
                                  <text x="220" y="122" fill="#facc15" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold" opacity="0.8">BULLISH ORDER BLOCK (INSTITUTIONAL BUY ZONE)</text>
                                  
                                  {/* Mapped Bearish Candle (The block source) */}
                                  <g>
                                      <line x1="100" y1="70" x2="100" y2="160" stroke="#ef4444" strokeWidth="2" />
                                      <rect x="92" y="90" width="16" height="55" fill="#ef4444" fillOpacity="0.8" stroke="#f87171" strokeWidth="0.5" rx="2" />
                                      <text x="100" y="62" fill="#ef4444" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">OB Source</text>
                                  </g>
                                  
                                  {/* Displacement rally (leaving zone) */}
                                  <g>
                                      {/* Candle 2 (Green) */}
                                      <line x1="150" y1="40" x2="150" y2="110" stroke="#22c55e" strokeWidth="1.5" />
                                      <rect x="144" y="50" width="12" height="40" fill="#22c55e" fillOpacity="0.8" stroke="#4ade80" strokeWidth="0.5" rx="1" />
                                      
                                      {/* Candle 3 (Green) */}
                                      <line x1="200" y1="20" x2="200" y2="70" stroke="#22c55e" strokeWidth="1.5" />
                                      <rect x="194" y="25" width="12" height="35" fill="#22c55e" fillOpacity="0.8" stroke="#4ade80" strokeWidth="0.5" rx="1" />
                                  </g>
                                  
                                  {/* Return to block (Mitigation) */}
                                  <g>
                                      {/* Candle 4 (Red pulling back directly into rect) */}
                                      <line x1="250" y1="50" x2="250" y2="125" stroke="#ef4444" strokeWidth="1.5" />
                                      <rect x="244" y="60" width="12" height="55" fill="#ef4444" fillOpacity="0.8" stroke="#f87171" strokeWidth="0.5" rx="1" />
                                      
                                      {/* Candle 5 (Red testing deeper into OB) */}
                                      <line x1="300" y1="80" x2="300" y2="135" stroke="#ef4444" strokeWidth="1.5" />
                                      <rect x="294" y="95" width="12" height="35" fill="#ef4444" fillOpacity="0.8" stroke="#f87171" strokeWidth="0.5" rx="1" />
                                      
                                      {/* Callout */}
                                      <path d="M 300 130 L 320 165" stroke="#facc15" strokeWidth="1" strokeDasharray="2,2" />
                                      <text x="325" y="172" fill="#facc15" fontSize="8" fontFamily="monospace" fontWeight="bold">Mitigation / Entry Trigger</text>
                                  </g>
                                  
                                  {/* Final Expansion (Green) */}
                                  <g>
                                      <line x1="350" y1="30" x2="350" y2="120" stroke="#22c55e" strokeWidth="2" />
                                      <rect x="342" y="40" width="16" height="65" fill="#22c55e" fillOpacity="0.8" stroke="#4ade80" strokeWidth="0.5" rx="2" />
                                      
                                      {/* Candle 7 (Green) */}
                                      <line x1="400" y1="10" x2="400" y2="60" stroke="#22c55e" strokeWidth="2" />
                                      <rect x="392" y="15" width="16" height="35" fill="#22c55e" fillOpacity="0.8" stroke="#4ade80" strokeWidth="0.5" rx="2" />
                                  </g>
                              </svg>
                          </div>
                      </div>

                      {/* Fibonacci */}
                      <div className="bg-black/30 p-6 md:p-8 rounded-xl border border-white/5 flex flex-col md:flex-row items-center gap-8 transition-all duration-300 hover:border-brandGold/30">
                          <div className="flex-1 space-y-4">
                              <span className="bg-brandGold/20 text-brandGold px-2.5 py-1 rounded text-[10px] uppercase font-bold tracking-wider block w-max font-display">Equilibrium</span>
                              <h3 className="text-2xl font-bold text-white">Fibonacci Retracement</h3>
                              <p className="text-sm text-gray-400 leading-relaxed">
                                  Used to divide price ranges into <strong className="text-white font-semibold">Premium</strong> (above 0.5) and <strong className="text-white font-semibold">Discount</strong> (below 0.5) trading environments.
                              </p>
                              <div className="bg-brandGold/5 border-l-2 border-brandGold p-4 rounded-r-lg mt-4">
                                  <h4 className="text-brandGold font-bold text-xs uppercase tracking-wider mb-1">ICT Concept Tip</h4>
                                  <p className="text-xs text-gray-300 font-light">Configure your Fibonacci settings to only highlight: 0.0 (Start), 0.5 (Equilibrium), 1.0 (End), and the Optimal Trade Entry (OTE) levels: 0.62, 0.705, and 0.79. Always look for long trades in Discount (below 0.5).</p>
                              </div>
                          </div>
                          
                          {/* Vector Fibonacci Explanation */}
                          <div className="w-full md:w-[450px] flex-shrink-0 border border-white/10 rounded-lg overflow-hidden bg-brandDarker shadow-lg p-4">
                              <svg viewBox="0 0 450 220" className="w-full h-auto select-none">
                                  {/* Premium Zone Shading */}
                                  <rect x="50" y="30" width="350" height="80" fill="rgba(239, 68, 68, 0.02)" />
                                  
                                  {/* Discount Zone Shading */}
                                  <rect x="50" y="110" width="350" height="80" fill="rgba(34, 197, 94, 0.02)" />
                                  
                                  {/* Optimal Trade Entry (OTE) Highlight Box */}
                                  <rect x="50" y="65" width="350" height="25" fill="rgba(250, 204, 21, 0.08)" stroke="rgba(250, 204, 21, 0.2)" strokeWidth="0.8" />
                                  
                                  {/* Grid Lines */}
                                  <g stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1">
                                      <line x1="90" y1="10" x2="90" y2="210" />
                                      <line x1="180" y1="10" x2="180" y2="210" />
                                      <line x1="270" y1="10" x2="270" y2="210" />
                                      <line x1="360" y1="10" x2="360" y2="210" />
                                  </g>
                                  
                                  {/* Price Path Line (Dotted Gray) */}
                                  <path d="M 60 190 L 170 30 L 260 80 L 370 15" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="3,3" />

                                  {/* Fibonacci Levels (Horizontal Lines) */}
                                  {/* 1.00 Level */}
                                  <line x1="40" y1="30" x2="410" y2="30" stroke="#f87171" strokeWidth="1" />
                                  <text x="415" y="33" fill="#f87171" fontSize="8" fontFamily="monospace">1.00 - Swing High</text>

                                  {/* OTE Zone Upper Bound (0.79) */}
                                  <line x1="40" y1="65" x2="410" y2="65" stroke="#facc15" strokeWidth="0.8" strokeDasharray="2,2" opacity="0.6" />
                                  <text x="415" y="68" fill="#facc15" fontSize="7" fontFamily="monospace" opacity="0.6">0.79 - OTE Upper</text>

                                  {/* OTE Level (0.705) */}
                                  <line x1="40" y1="78" x2="410" y2="78" stroke="#facc15" strokeWidth="1.2" />
                                  <text x="415" y="81" fill="#facc15" fontSize="8" fontFamily="monospace" fontWeight="bold">0.705 - OTE Optimal</text>

                                  {/* OTE Zone Lower Bound (0.62) */}
                                  <line x1="40" y1="90" x2="410" y2="90" stroke="#facc15" strokeWidth="0.8" strokeDasharray="2,2" opacity="0.6" />
                                  <text x="415" y="93" fill="#facc15" fontSize="7" fontFamily="monospace" opacity="0.6">0.62 - OTE Lower</text>

                                  {/* 0.50 Level (Equilibrium) */}
                                  <line x1="40" y1="110" x2="410" y2="110" stroke="#ffffff" strokeWidth="1.5" />
                                  <text x="415" y="113" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold">0.50 - Equilibrium</text>

                                  {/* 0.00 Level */}
                                  <line x1="40" y1="190" x2="410" y2="190" stroke="#4ade80" strokeWidth="1" />
                                  <text x="415" y="193" fill="#4ade80" fontSize="8" fontFamily="monospace">0.00 - Swing Low</text>

                                  {/* Zones Labels */}
                                  <text x="70" y="48" fill="#f87171" fontSize="8" fontFamily="monospace" fontWeight="bold" opacity="0.4">PREMIUM ZONE (SEEK SHORTS)</text>
                                  <text x="70" y="175" fill="#4ade80" fontSize="8" fontFamily="monospace" fontWeight="bold" opacity="0.4">DISCOUNT ZONE (SEEK LONGS)</text>

                                  {/* Callout */}
                                  <circle cx="260" cy="80" r="4" fill="#facc15" />
                                  <path d="M 260 80 L 290 140" stroke="#facc15" strokeWidth="1" strokeDasharray="2,2" />
                                  <text x="295" y="144" fill="#facc15" fontSize="8" fontFamily="monospace" fontWeight="bold">Buy entry in OTE Zone!</text>
                              </svg>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* Next Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <a href="#topic-3-2" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                  <span className="uppercase font-bold mb-1">Next Topic</span>
                  <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
              </a>
          </div>
      </section>

      {/* Section 3.2 Technical Indicators */}
      <section id="topic-3-2" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 3.2</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Technical Indicators</h2>
              </div>

              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl">
                  <p className="text-gray-400 font-light mb-8 text-sm uppercase tracking-wider">Applying helper scripts to complement structural layouts:</p>

                  <div className="grid md:grid-cols-2 gap-8 text-sm font-light leading-relaxed text-gray-300">
                      {/* Indicator panel */}
                      <div className="space-y-4">
                          <div className="bg-black/30 p-4 rounded border border-white/5">
                                  <h3 className="text-white font-semibold mb-1">Moving Averages (EMA / SMA) — Lagging Retail Decoys</h3>
                              <p className="text-xs text-gray-400">Retailers use crossovers or bounces off moving averages. Because of this, the algorithm targets these price points to execute stop hunts, leaving retail stopped out at "crossover" zones.</p>
                          </div>
                          <div className="bg-black/30 p-4 rounded border border-white/5">
                                  <h3 className="text-white font-semibold mb-1">Relative Strength Index (RSI) — Lagging Momentum Trap</h3>
                              <p className="text-xs text-gray-400">Designed to show overbought (70) and oversold (30) levels. When retail sells an "overbought" RSI, they place buy stops above the high. The algorithm sweeps these buy stops to fill institutional short positions.</p>
                          </div>
                      </div>

                      {/* Session indicators */}
                      <div className="bg-black/40 border border-white/10 p-6 rounded-xl flex flex-col justify-between">
                          <div>
                              <h3 className="text-brandGold font-bold uppercase text-xs tracking-wider font-display mb-3">Session & Time Highlights</h3>
                              <p className="text-gray-400 text-xs leading-relaxed mb-4">
                                  Time is the ultimate key that unlocks price. While indicators lag, the market's clock is precise. The algorithm only seeks liquidity during specific hours. Shading killzones on your chart shows you exactly when to expect institutional sweeps.
                              </p>
                          </div>
                          <div className="bg-brandGold/5 p-4 rounded border border-brandGold/20 text-xs font-semibold text-center text-white">
                              Remember: Price is irrelevant without Time!
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* Next Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <a href="#topic-3-3" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                  <span className="uppercase font-bold mb-1">Next Topic</span>
                  <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
              </a>
          </div>
      </section>

      {/* Section 3.3 Execution & Position Sizing */}
      <section id="topic-3-3" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 3.3</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Execution & Position Sizing</h2>
              </div>

              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl">
                  <p className="text-gray-400 font-light mb-8 text-sm uppercase tracking-wider">Measuring risk-to-reward and execution methods:</p>

                  <div className="max-w-3xl mx-auto text-sm font-light leading-relaxed text-gray-300">
                      {/* Measurement Tools */}
                      <div className="bg-black/30 p-6 rounded-lg border border-white/5 flex flex-col justify-between">
                          <div className="mb-6">
                              <h3 className="text-brandGold font-bold uppercase text-xs tracking-wider font-display mb-3 text-center">Long & Short Position Tools</h3>
                              <p className="text-xs text-gray-400 leading-relaxed text-center">
                                  Use these drawing tools to overlay your entry, target (take profit), and stop loss levels. TradingView automatically calculates your <strong className="text-white">Risk-to-Reward Ratio (R:R)</strong> and shows exactly how many pips your stop loss and profit targets span.
                              </p>
                          </div>
                          
                          {/* Vector Long Position Tool Explanation */}
                          <div className="border border-white/10 rounded-lg overflow-hidden bg-brandDarker p-4 mb-6 max-w-xl w-full mx-auto">
                              <svg viewBox="0 0 450 220" className="w-full h-auto select-none">
                                  {/* Grid Lines */}
                                  <g stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1">
                                      <line x1="10" y1="40" x2="440" y2="40" />
                                      <line x1="10" y1="80" x2="440" y2="80" />
                                      <line x1="10" y1="120" x2="440" y2="120" />
                                      <line x1="10" y1="160" x2="440" y2="160" />
                                      <line x1="10" y1="200" x2="440" y2="200" />
                                      <line x1="90" y1="10" x2="90" y2="210" />
                                      <line x1="180" y1="10" x2="180" y2="210" />
                                      <line x1="270" y1="10" x2="270" y2="210" />
                                      <line x1="360" y1="10" x2="360" y2="210" />
                                  </g>
                                  
                                  {/* Take Profit Box (Green Shaded Zone) */}
                                  <rect x="140" y="40" width="200" height="90" fill="rgba(34, 197, 94, 0.12)" stroke="rgba(34, 197, 94, 0.3)" strokeWidth="1" />
                                  
                                  {/* Stop Loss Box (Red Shaded Zone) */}
                                  <rect x="140" y="130" width="200" height="30" fill="rgba(239, 68, 68, 0.12)" stroke="rgba(239, 68, 68, 0.3)" strokeWidth="1" />
                                  
                                  {/* Entry Line (Central boundary line) */}
                                  <line x1="130" y1="130" x2="350" y2="130" stroke="#facc15" strokeWidth="2" />
                                  <text x="355" y="133" fill="#facc15" fontSize="8" fontFamily="monospace" fontWeight="bold">Entry (1.1000)</text>

                                  {/* Take Profit Target Level Line */}
                                  <line x1="130" y1="40" x2="350" y2="40" stroke="#22c55e" strokeWidth="1.2" strokeDasharray="3,3" />
                                  <text x="355" y="43" fill="#22c55e" fontSize="8" fontFamily="monospace">Profit Target +30.0 pips (1.1030)</text>
                                  
                                  {/* Stop Loss Level Line */}
                                  <line x1="130" y1="160" x2="350" y2="160" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="3,3" />
                                  <text x="355" y="163" fill="#ef4444" fontSize="8" fontFamily="monospace">Stop Loss -10.0 pips (1.0990)</text>

                                  {/* Risk/Reward Statistics inside tool */}
                                  <g>
                                      <rect x="190" y="80" width="100" height="30" fill="rgba(10, 10, 10, 0.85)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" rx="3" />
                                      <text x="240" y="93" fill="#ffffff" fontSize="7" fontFamily="monospace" textAnchor="middle">Risk/Reward: 3.00</text>
                                      <text x="240" y="103" fill="#facc15" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">3:1 Setup</text>
                                  </g>

                                  {/* Price Path demonstrating trade success */}
                                  <path d="M 60 145 L 140 130 L 170 142 L 230 90 L 310 40" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
                                  <circle cx="140" cy="130" r="3" fill="#facc15" />
                                  <circle cx="310" cy="40" r="3.5" fill="#22c55e" />
                                  <text x="315" y="32" fill="#22c55e" fontSize="8" fontFamily="monospace" fontWeight="bold">Target Hit! 🎉</text>
                              </svg>
                          </div>
                          
                          <div className="bg-green-500/10 p-3 rounded border border-green-500/20 text-[10px] text-green-400 uppercase tracking-widest font-bold w-max mx-auto">
                              AIM FOR A MINIMUM 1:3 R:R
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* Next Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <a href="#module4" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                  <span className="uppercase font-bold mb-1">Next Topic</span>
                  <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
              </a>
          </div>
      </section>
    </>
  );
}
