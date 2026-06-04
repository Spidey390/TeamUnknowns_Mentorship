import React from 'react';
import QuoteBuilder from '../QuoteBuilder';
import PatternExplorer from '../PatternExplorer';

export default function ModuleCandlesticks() {
  return (
    <>
      {/* Module 2 Hero Section */}
      <section id="module2" className="min-h-screen flex flex-col justify-center items-center relative py-24 px-6">
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brandGold text-brandGold font-bold tracking-widest text-xs uppercase mb-10 bg-brandGold/5">
                  <span className="w-2 h-2 rounded-full bg-brandGold animate-pulse"></span> MODULE 2
              </div>
              <h1 className="text-6xl md:text-8xl font-black font-display leading-none mb-6 tracking-tight uppercase">
                  Reading the <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brandGold to-yellow-300">Candlestick</span>
              </h1>
              <p className="text-textMuted text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide mt-8">
                  Forex & ICT Concepts — Mentorship Program. Translate raw price action into readable market narratives using EUR/USD examples.
              </p>
          </div>
          {/* Next Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <a href="#topic-2-1" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                  <span className="uppercase font-bold mb-1">Next Topic</span>
                  <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
              </a>
          </div>
      </section>

      {/* 2.1 Anatomy of a Candlestick */}
      <section id="topic-2-1" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 2.1</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Anatomy of a Candlestick</h2>
              </div>
              
              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl">
                  <p className="text-gray-400 font-light mb-8 text-sm uppercase tracking-wider">Dissecting the structure of price data:</p>
                  
                  <div className="grid md:grid-cols-2 gap-12 items-stretch">
                      {/* Bullish Candlestick Structure */}
                      <div className="bg-black/40 border border-white/5 p-6 rounded-xl relative overflow-hidden flex flex-col justify-between hover:border-green-500/20 transition-all duration-300">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
                          <div className="mb-6">
                              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                                  <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span> Bullish Candle
                              </h3>
                              <p className="text-xs text-gray-400">Forms when buyers drive the price up. The closing price is higher than the opening price.</p>
                          </div>
                          
                          <div className="flex justify-around items-center py-6">
                              {/* Candle Graphic */}
                              <div className="w-full max-w-[200px] flex-shrink-0">
                                  <svg width="200" height="260" viewBox="0 0 200 260" className="mx-auto select-none">
                                      {/* Wicks */}
                                      <line x1="100" y1="35" x2="100" y2="225" stroke="#22c55e" strokeWidth="2.5" />
                                      {/* Body */}
                                      <rect x="70" y="75" width="60" height="110" fill="#22c55e" fillOpacity="0.85" stroke="#4ade80" strokeWidth="2" rx="2" className="cursor-pointer hover:fill-opacity-100 transition-all duration-300" />
                                      <text x="100" y="130" fill="#0a0a0a" fontWeight="bold" fontSize="10" fontFamily="Montserrat" letterSpacing="1.5" textAnchor="middle" alignmentBaseline="middle" transform="rotate(-90 100 130)" className="pointer-events-none">BODY</text>

                                      {/* Labels with pointer lines */}
                                      {/* HIGH */}
                                      <text x="100" y="20" fill="#9ca3af" fontSize="10" fontFamily="monospace" textAnchor="middle">HIGH</text>
                                      <circle cx="100" cy="35" r="2.5" fill="#9ca3af" />

                                      {/* CLOSE (Top of Bullish Body) */}
                                      <line x1="130" y1="75" x2="145" y2="75" stroke="#22c55e" strokeWidth="1" strokeDasharray="2,2" />
                                      <text x="150" y="78" fill="#22c55e" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="start">CLOSE</text>

                                      {/* OPEN (Bottom of Bullish Body) */}
                                      <line x1="70" y1="185" x2="55" y2="185" stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2" />
                                      <text x="50" y="188" fill="#9ca3af" fontSize="10" fontFamily="monospace" textAnchor="end">OPEN</text>

                                      {/* LOW */}
                                      <circle cx="100" cy="225" r="2.5" fill="#9ca3af" />
                                      <text x="100" y="245" fill="#9ca3af" fontSize="10" fontFamily="monospace" textAnchor="middle">LOW</text>
                                  </svg>
                              </div>
                              
                              {/* Bullet points */}
                              <div className="text-xs space-y-4 max-w-[200px] text-gray-300">
                                  <div>
                                      <span className="text-white font-bold block">1. Upper Wick (Shadow):</span>
                                      Shows the highest price reached during the timeframe.
                                  </div>
                                  <div>
                                      <span className="text-white font-bold block">2. Real Body:</span>
                                      Shows the range between Open and Close. Filled green because Close &gt; Open.
                                  </div>
                                  <div>
                                      <span className="text-white font-bold block">3. Lower Wick:</span>
                                      Shows the lowest price reached.
                                  </div>
                              </div>
                          </div>
                      </div>

                      {/* Bearish Candlestick Structure */}
                      <div className="bg-black/40 border border-white/5 p-6 rounded-xl relative overflow-hidden flex flex-col justify-between hover:border-red-500/20 transition-all duration-300">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
                          <div className="mb-6">
                              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                                  <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span> Bearish Candle
                              </h3>
                              <p className="text-xs text-gray-400">Forms when sellers drive the price down. The closing price is lower than the opening price.</p>
                          </div>
                          
                          <div className="flex justify-around items-center py-6">
                              {/* Candle Graphic */}
                              <div className="w-full max-w-[200px] flex-shrink-0">
                                  <svg width="200" height="260" viewBox="0 0 200 260" className="mx-auto select-none">
                                      {/* Wicks */}
                                      <line x1="100" y1="35" x2="100" y2="225" stroke="#ef4444" strokeWidth="2.5" />
                                      {/* Body */}
                                      <rect x="70" y="75" width="60" height="110" fill="#ef4444" fillOpacity="0.85" stroke="#f87171" strokeWidth="2" rx="2" className="cursor-pointer hover:fill-opacity-100 transition-all duration-300" />
                                      <text x="100" y="130" fill="#ffffff" fontWeight="bold" fontSize="10" fontFamily="Montserrat" letterSpacing="1.5" textAnchor="middle" alignmentBaseline="middle" transform="rotate(-90 100 130)" className="pointer-events-none">BODY</text>

                                      {/* Labels with pointer lines */}
                                      {/* HIGH */}
                                      <text x="100" y="20" fill="#9ca3af" fontSize="10" fontFamily="monospace" textAnchor="middle">HIGH</text>
                                      <circle cx="100" cy="35" r="2.5" fill="#9ca3af" />

                                      {/* OPEN (Top of Bearish Body) */}
                                      <line x1="70" y1="75" x2="55" y2="75" stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2" />
                                      <text x="50" y="78" fill="#9ca3af" fontSize="10" fontFamily="monospace" textAnchor="end">OPEN</text>

                                      {/* CLOSE (Bottom of Bearish Body) */}
                                      <line x1="130" y1="185" x2="145" y2="185" stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2" />
                                      <text x="150" y="188" fill="#ef4444" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="start">CLOSE</text>

                                      {/* LOW */}
                                      <circle cx="100" cy="225" r="2.5" fill="#9ca3af" />
                                      <text x="100" y="245" fill="#9ca3af" fontSize="10" fontFamily="monospace" textAnchor="middle">LOW</text>
                                  </svg>
                              </div>
                              
                              {/* Bullet points */}
                              <div className="text-xs space-y-4 max-w-[200px] text-gray-300">
                                  <div>
                                      <span className="text-white font-bold block">1. Upper Wick:</span>
                                      Shows the highest price. Buyers pushed price up, but sellers pushed it back down.
                                  </div>
                                  <div>
                                      <span className="text-white font-bold block">2. Real Body:</span>
                                      Shows the drop. Filled red because Close &lt; Open.
                                  </div>
                                  <div>
                                      <span className="text-white font-bold block">3. Lower Wick:</span>
                                      Shows the lowest price. Sellers pushed low, but buyers pushed it back up slightly.
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* Next Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <a href="#topic-2-2" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                  <span className="uppercase font-bold mb-1">Next Topic</span>
                  <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
              </a>
          </div>
      </section>

      {/* 2.2 Interactive EUR/USD Quote Builder */}
      <section id="topic-2-2" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 2.2</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Interactive EUR/USD Quote Builder</h2>
              </div>
              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl">
                  <p className="text-gray-400 font-light mb-8 text-sm uppercase tracking-wider">Adjust the sliders to build your own EUR/USD candlestick and see the anatomy adapt in real-time:</p>
                  <QuoteBuilder />
              </div>
          </div>
          {/* Next Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <a href="#topic-2-3" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                  <span className="uppercase font-bold mb-1">Next Topic</span>
                  <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
              </a>
          </div>
      </section>

      {/* 2.3 Key Candlestick Patterns */}
      <section id="topic-2-3" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 2.3</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Key Candlestick Patterns</h2>
              </div>
              <PatternExplorer />
          </div>
          {/* Next Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <a href="#module3" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
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
