import React from 'react';
import PineScriptSection from '../PineScriptSection';

export default function ModuleSessions() {
  return (
    <>
      {/* Module 4 Hero Section */}
      <section id="module4" className="min-h-screen flex flex-col justify-center items-center relative py-24 px-6">
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brandGold text-brandGold font-bold tracking-widest text-xs uppercase mb-10 bg-brandGold/5">
                  <span className="w-2 h-2 rounded-full bg-brandGold animate-pulse"></span> MODULE 4
              </div>
              <h1 className="text-6xl md:text-8xl font-black font-display leading-none mb-6 tracking-tight uppercase">
                  Sessions <br />& <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandGold to-yellow-300">Liquidity</span>
              </h1>
              <p className="text-textMuted text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide mt-8">
                  Forex & ICT Concepts — Mentorship Program. Master the time-based algorithms (Sessions) and the market liquidity pools they sweep.
              </p>
          </div>
          {/* Next Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <a href="#topic-4-1" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                  <span className="uppercase font-bold mb-1">Next Topic</span>
                  <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
              </a>
          </div>
      </section>

      {/* 4.1 Sessions & Killzone Hours */}
      <section id="topic-4-1" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 4.1</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Sessions & Killzone Hours</h2>
              </div>
              
              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl">
                  <p className="text-gray-400 font-light mb-8 text-sm uppercase tracking-wider">The time-based algorithms that define volatility and retail traps in Forex:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Asian Session */}
                      <div className="bg-black/30 p-6 rounded-xl border border-white/5 flex flex-col justify-between hover:border-brandGold/30 transition-all duration-300">
                          <div>
                              <div className="flex justify-between items-center mb-3">
                                  <span className="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider font-display">Consolidation</span>
                                  <span className="text-gray-500 text-xs font-mono">5:30 AM - 9:30 AM IST</span>
                              </div>
                              <h3 className="text-xl font-bold text-white mb-2">Asian Range</h3>
                              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                                  A period of lower volume and tight range consolidation. The market accumulates orders and builds equal highs/lows.
                              </p>
                          </div>
                          <div className="bg-brandGold/5 p-3 rounded border border-brandGold/20 mt-4 text-xs font-light leading-relaxed">
                              <strong className="text-brandGold font-bold uppercase tracking-wider block mb-1">ICT Concept Tip:</strong>
                              Do not trade the breakouts. The high and low of the Asian session act as major liquidity targets. Expect them to be swept during London or New York.
                          </div>
                      </div>

                      {/* London Killzone */}
                      <div className="bg-black/30 p-6 rounded-xl border border-white/5 flex flex-col justify-between hover:border-brandGold/30 transition-all duration-300">
                          <div>
                              <div className="flex justify-between items-center mb-3">
                                  <span className="bg-red-500/20 text-red-400 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider font-display">Manipulation</span>
                                  <span className="text-gray-500 text-xs font-mono">11:30 AM - 2:30 PM IST</span>
                              </div>
                              <h3 className="text-xl font-bold text-white mb-2">London Killzone</h3>
                              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                                  Injects massive volatility. It is the session most likely to form the absolute high or low of the day.
                              </p>
                          </div>
                          <div className="bg-brandGold/5 p-3 rounded border border-brandGold/20 mt-4 text-xs font-light leading-relaxed">
                              <strong className="text-brandGold font-bold uppercase tracking-wider block mb-1">ICT Concept Tip:</strong>
                              Look for the **Judas Swing**—an initial false run that sweeps the Asian Range high/low, followed by an immediate reversal and true expansion.
                          </div>
                      </div>

                      {/* New York Killzone */}
                      <div className="bg-black/30 p-6 rounded-xl border border-white/5 flex flex-col justify-between hover:border-brandGold/30 transition-all duration-300">
                          <div>
                              <div className="flex justify-between items-center mb-3">
                                  <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider font-display">Distribution</span>
                                  <span className="text-gray-500 text-xs font-mono">4:30 PM - 7:30 PM IST</span>
                              </div>
                              <h3 className="text-xl font-bold text-white mb-2">New York Killzone</h3>
                              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                                  High-volume session overlapping with London. Primary US macroeconomic data is released here, driving price expansion.
                              </p>
                          </div>
                          <div className="bg-brandGold/5 p-3 rounded border border-brandGold/20 mt-4 text-xs font-light leading-relaxed">
                              <strong className="text-brandGold font-bold uppercase tracking-wider block mb-1">ICT Concept Tip:</strong>
                              Reversal or Continuation. If London established the high/low of the day, NY often retraces to a discount/premium FVG and continues the expansion.
                          </div>
                      </div>

                      {/* London Close */}
                      <div className="bg-black/30 p-6 rounded-xl border border-white/5 flex flex-col justify-between hover:border-brandGold/30 transition-all duration-300">
                          <div>
                              <div className="flex justify-between items-center mb-3">
                                  <span className="bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider font-display">Retracement</span>
                                  <span className="text-gray-500 text-xs font-mono">7:30 PM - 9:30 PM IST</span>
                              </div>
                              <h3 className="text-xl font-bold text-white mb-2">London Close Killzone</h3>
                              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                                  The wind-down of daily volume as European markets close. Often sees profit-taking moves.
                              </p>
                          </div>
                          <div className="bg-brandGold/5 p-3 rounded border border-brandGold/20 mt-4 text-xs font-light leading-relaxed">
                              <strong className="text-brandGold font-bold uppercase tracking-wider block mb-1">ICT Concept Tip:</strong>
                              Retracements and reversals. Price often seeks the daily range Equilibrium (50% level). Avoid entering long-term trends here; play for scalp counter-trends.
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* Next Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <a href="#topic-4-2" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                  <span className="uppercase font-bold mb-1">Next Topic</span>
                  <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
              </a>
          </div>
      </section>

      {/* 4.2 Liquidity Pools & Resting Places */}
      <section id="topic-4-2" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 4.2</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Liquidity Pools & Resting Places</h2>
              </div>
              
              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl space-y-10">
                  <div>
                      <p className="text-gray-400 font-light text-sm uppercase tracking-wider mb-2">Understanding the Fuel of the Market:</p>
                      <h3 className="text-xl font-bold text-white mb-4">What is Liquidity?</h3>
                      <p className="text-sm text-gray-300 font-light leading-relaxed">
                          Liquidity is simply the **volume of pending orders** (specifically Stop Losses and Pending Buy/Sell Stops) resting at specific price levels. Institutional algorithms require this matching volume to fill their massive positions without causing major slippage. Price is driven from one pool of liquidity to another.
                      </p>
                  </div>

                  {/* BSL vs SSL Comparison */}
                  <div className="grid md:grid-cols-2 gap-6">
                      {/* Buy-side Liquidity (BSL) Card */}
                      <div className="bg-black/40 border border-white/5 p-6 rounded-xl relative overflow-hidden flex flex-col justify-between">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
                          <div>
                              <h4 className="text-green-400 font-bold uppercase tracking-wider text-xs mb-3 font-display">Buy-Side Liquidity (BSL)</h4>
                              <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                                  Resting orders that are triggered when price moves **UP**. These are buy orders composed of:
                              </p>
                              <ul className="space-y-2 text-xs text-gray-400 font-light list-disc list-inside">
                                  <li>Stop Losses of Short Sellers (buying back to exit).</li>
                                  <li>Buy Stop orders of retail breakout traders.</li>
                              </ul>
                          </div>
                          <div className="bg-green-500/5 border border-green-500/10 p-3 rounded text-[11px] font-semibold text-green-400 mt-4">
                              🎯 Resting above key swing highs & resistance.
                          </div>
                      </div>

                      {/* Sell-side Liquidity (SSL) Card */}
                      <div className="bg-black/40 border border-white/5 p-6 rounded-xl relative overflow-hidden flex flex-col justify-between">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
                          <div>
                              <h4 className="text-red-400 font-bold uppercase tracking-wider text-xs mb-3 font-display">Sell-Side Liquidity (SSL)</h4>
                              <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                                  Resting orders that are triggered when price moves **DOWN**. These are sell orders composed of:
                              </p>
                              <ul className="space-y-2 text-xs text-gray-400 font-light list-disc list-inside">
                                  <li>Stop Losses of Long Buyers (selling back to exit).</li>
                                  <li>Sell Stop orders of retail breakout sellers.</li>
                              </ul>
                          </div>
                          <div className="bg-red-500/5 border border-red-500/10 p-3 rounded text-[11px] font-semibold text-red-400 mt-4">
                              🎯 Resting below key swing lows & support.
                          </div>
                      </div>
                  </div>

                  {/* Core resting places of liquidity */}
                  <div className="space-y-4">
                      <h4 className="text-brandGold font-bold uppercase tracking-wider text-xs font-display">Key Chart Locations Where Liquidity Rests</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {/* Previous Daily High/Low */}
                          <div className="bg-black/30 p-5 rounded-lg border border-white/5 space-y-2">
                              <span className="text-brandGold font-mono text-[10px] font-bold block uppercase">1. Daily Boundaries</span>
                              <h5 className="text-white font-semibold text-xs">PDH & PDL</h5>
                              <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                                  The Previous Daily High (PDH) and Previous Daily Low (PDL) contain massive pools of daily swing trader stops.
                              </p>
                          </div>

                          {/* Previous Weekly High/Low */}
                          <div className="bg-black/30 p-5 rounded-lg border border-white/5 space-y-2">
                              <span className="text-brandGold font-mono text-[10px] font-bold block uppercase">2. Weekly Boundaries</span>
                              <h5 className="text-white font-semibold text-xs">PWH & PWL</h5>
                              <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                                  Previous Weekly High (PWH) and Low (PWL) represent high-timeframe swing targets hunted during macro expansions.
                              </p>
                          </div>

                          {/* Session Boundaries */}
                          <div className="bg-black/30 p-5 rounded-lg border border-white/5 space-y-2">
                              <span className="text-brandGold font-mono text-[10px] font-bold block uppercase">3. Session Swings</span>
                              <h5 className="text-white font-semibold text-xs">Session Highs & Lows</h5>
                              <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                                  Stops resting above/below the Asian Range, London session extremes, or New York session extremes.
                              </p>
                          </div>

                          {/* Equal Highs / Lows */}
                          <div className="bg-black/30 p-5 rounded-lg border border-white/5 space-y-2">
                              <span className="text-brandGold font-mono text-[10px] font-bold block uppercase">4. Double Tops/Bottoms</span>
                              <h5 className="text-white font-semibold text-xs">Clean Equal Highs / Lows</h5>
                              <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                                  Equal Highs (EQH) and Equal Lows (EQL) act as retail "Double Tops" and "Double Bottoms". These build double the stops, creating high-probability targets.
                              </p>
                          </div>

                          {/* Swing Highs / Swing Lows */}
                          <div className="bg-black/30 p-5 rounded-lg border border-white/5 space-y-2">
                              <span className="text-brandGold font-mono text-[10px] font-bold block uppercase">5. Structural Swings</span>
                              <h5 className="text-white font-semibold text-xs">Intraday Swing Points</h5>
                              <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                                  Any prominent peak (Swing High) or trough (Swing Low) on lower timeframes (e.g. 15m, 5m) where retail trend traders place stop losses.
                              </p>
                          </div>

                          {/* Trendlines */}
                          <div className="bg-black/30 p-5 rounded-lg border border-white/5 space-y-2">
                              <span className="text-brandGold font-mono text-[10px] font-bold block uppercase">6. Retail Patterns</span>
                              <h5 className="text-white font-semibold text-xs">Retail Trendlines & Channels</h5>
                              <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                                  Diagonal trendlines build up huge liquidity pools directly behind them. Retailers buy/sell the touches, placing stops just past the line.
                              </p>
                          </div>
                      </div>
                  </div>

                  {/* Liquidity Schematic Graph */}
                  <div className="space-y-4 mt-10">
                      <h4 className="text-brandGold font-bold uppercase tracking-wider text-xs font-display text-center">Liquidity Resting Places - Chart Schematic</h4>
                      <div className="bg-black/40 border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center min-h-[400px] relative">
                          <svg viewBox="0 0 800 450" className="w-full h-auto select-none font-sans" xmlns="http://www.w3.org/2000/svg">
                              <g stroke="rgba(255,255,255,0.02)" stroke-width="1">
                                  <line x1="50" y1="50" x2="750" y2="50" />
                                  <line x1="50" y1="100" x2="750" y2="100" />
                                  <line x1="50" y1="150" x2="750" y2="150" />
                                  <line x1="50" y1="200" x2="750" y2="200" />
                                  <line x1="50" y1="250" x2="750" y2="250" />
                                  <line x1="50" y1="300" x2="750" y2="300" />
                                  <line x1="50" y1="350" x2="750" y2="350" />
                                  <line x1="50" y1="400" x2="750" y2="400" />
                                  <line x1="100" y1="50" x2="100" y2="400" />
                                  <line x1="200" y1="50" x2="200" y2="400" />
                                  <line x1="300" y1="50" x2="300" y2="400" />
                                  <line x1="400" y1="50" x2="400" y2="400" />
                                  <line x1="500" y1="50" x2="500" y2="400" />
                                  <line x1="600" y1="50" x2="600" y2="400" />
                                  <line x1="700" y1="50" x2="700" y2="400" />
                                  <line x1="50" y1="50" x2="50" y2="400" stroke="rgba(255,255,255,0.08)" />
                                  <line x1="750" y1="50" x2="750" y2="400" stroke="rgba(255,255,255,0.08)" />
                              </g>
                              <line x1="50" y1="60" x2="750" y2="60" stroke="#facc15" stroke-width="1.5" stroke-dasharray="6,4" opacity="0.3" />
                              <text x="60" y="52" fill="#facc15" font-size="9" font-family="monospace" opacity="0.6">PREVIOUS DAILY HIGH (PDH)</text>
                              <line x1="50" y1="390" x2="750" y2="390" stroke="#facc15" stroke-width="1.5" stroke-dasharray="6,4" opacity="0.3" />
                              <text x="740" y="382" fill="#facc15" font-size="9" font-family="monospace" opacity="0.6" text-anchor="end">PREVIOUS DAILY LOW (PDL)</text>
                              <line x1="150" y1="350" x2="460" y2="298" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.4" />
                              <text x="220" y="323" fill="#3b82f6" font-size="9" font-family="monospace" opacity="0.6" transform="rotate(-9.5 220 323)">Retail Trendline</text>
                              <path d="M 200,345 L 200,360 L 440,320 L 440,305" fill="none" stroke="#ef4444" stroke-width="1" stroke-dasharray="2,2" opacity="0.5" />
                              <text x="320" y="365" fill="#ef4444" font-size="9" font-family="monospace" text-anchor="middle" font-weight="bold" transform="rotate(-9.5 320 365)">SSL / SELL STOPS (Trendline Liquidity)</text>
                              <line x1="430" y1="140" x2="630" y2="140" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.4" />
                              <text x="530" y="130" fill="#22c55e" font-size="9" font-family="monospace" text-anchor="middle" opacity="0.8">Equal Highs (Double Top)</text>
                              <text x="530" y="115" fill="#22c55e" font-size="9" font-family="monospace" text-anchor="middle" font-weight="bold">BSL / BUY STOPS ($ $ $)</text>
                              <line x1="500" y1="310" x2="680" y2="310" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.4" />
                              <text x="590" y="325" fill="#ef4444" font-size="9" font-family="monospace" text-anchor="middle" opacity="0.8">Equal Lows (Double Bottom)</text>
                              <text x="590" y="340" fill="#ef4444" font-size="9" font-family="monospace" text-anchor="middle" font-weight="bold">SSL / SELL STOPS ($ $ $)</text>
                              <path d="M 50,300 L 100,380 L 150,210 L 200,333 L 260,180 L 290,90 L 320,313 L 380,220 L 440,293 L 480,140 L 530,310 L 580,140 L 630,310 L 700,50" fill="none" stroke="#facc15" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                              <circle cx="100" cy="380" r="5" fill="#ef4444" />
                              <text x="100" y="405" fill="#ef4444" font-size="9" font-family="monospace" text-anchor="middle" font-weight="bold">SSL (Swing Low)</text>
                              <circle cx="290" cy="90" r="5" fill="#22c55e" />
                              <text x="290" y="75" fill="#22c55e" font-size="9" font-family="monospace" text-anchor="middle" font-weight="bold">BSL (Swing High)</text>
                              <circle cx="480" cy="140" r="4" fill="#22c55e" />
                              <circle cx="580" cy="140" r="4" fill="#22c55e" />
                              <circle cx="530" cy="310" r="4" fill="#ef4444" />
                              <circle cx="630" cy="310" r="4" fill="#ef4444" />
                              <circle cx="200" cy="333" r="4" fill="#3b82f6" />
                              <circle cx="320" cy="313" r="4" fill="#3b82f6" />
                              <circle cx="440" cy="293" r="4" fill="#3b82f6" />
                              <circle cx="700" cy="50" r="6" fill="#22c55e" />
                              <path d="M 700,50 L 720,30" stroke="#22c55e" stroke-width="2" stroke-dasharray="2,2" />
                              <text x="725" y="25" fill="#22c55e" font-size="9" font-family="monospace" font-weight="bold">Expansion</text>
                          </svg>
                      </div>
                  </div>
              </div>
          </div>
          {/* Next Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <a href="#topic-4-3" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                  <span className="uppercase font-bold mb-1">Next Topic</span>
                  <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
              </a>
          </div>
      </section>

      {/* 4.3 Killzones & Liquidity Sweeps */}
      <section id="topic-4-3" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 4.3</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Killzones & Liquidity Sweeps</h2>
              </div>
              
              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl">
                  <p className="text-gray-400 font-light mb-8 text-sm uppercase tracking-wider">How institutional algorithms utilize time-based sessions to sweep retail liquidity pools:</p>
                  
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                      {/* Left Panel: Concept & Explanation */}
                      <div className="space-y-6">
                          <div className="bg-black/30 p-6 rounded-xl border border-white/5 space-y-4">
                              <h3 className="text-brandGold font-bold uppercase text-xs tracking-wider font-display flex items-center gap-2">
                                  <span className="w-2.5 h-2.5 rounded-full bg-brandGold animate-pulse"></span>
                                  Time (When) meets Price (Where)
                              </h3>
                              <p className="text-xs text-gray-300 font-light leading-relaxed">
                                  In ICT concepts, the market is governed by an algorithm that operates during specific hours (Killzones). The algorithm does not look for indicators; it seeks **Liquidity** (stops resting above highs and below lows).
                              </p>
                          </div>
                          
                          <div className="space-y-4">
                              <div className="bg-black/20 p-4 rounded-lg border border-white/5">
                                  <h4 className="text-white font-bold text-xs uppercase mb-1">1. Asian Range Liquidity Pools</h4>
                                  <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                                      The low-volume Asian consolidation builds up **Buy-side Liquidity (BSL)** above the range high and **Sell-side Liquidity (SSL)** below the range low.
                                  </p>
                              </div>
                              <div className="bg-black/20 p-4 rounded-lg border border-white/5">
                                  <h4 className="text-red-400 font-bold text-xs uppercase mb-1">2. London Manipulation (Judas Swing)</h4>
                                  <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                                      London Open Killzone frequently triggers a sharp run in the *opposite* direction of the daily trend to sweep Asian BSL or SSL, catching retail breakout traders before reversing.
                                  </p>
                              </div>
                              <div className="bg-black/20 p-4 rounded-lg border border-white/5">
                                  <h4 className="text-green-400 font-bold text-xs uppercase mb-1">3. New York Distribution / Expansion</h4>
                                  <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                                      Following the London sweep, New York sweeps remaining liquidity pools or retraces to high-volume discount arrays (FVGs, Order Blocks) to expand towards HTF targets.
                                  </p>
                              </div>
                          </div>
                      </div>

                      {/* Right Panel: SVG Diagram */}
                      <div className="bg-black/40 border border-white/10 p-6 rounded-xl flex flex-col items-center justify-center min-h-[380px] relative">
                          <div className="absolute top-4 left-4 text-xs font-bold text-gray-500 uppercase tracking-widest font-mono">Sweep Schematic</div>
                          
                          <svg width="340" height="260" viewBox="0 0 340 260" className="w-full max-w-[340px] select-none">
                              <line x1="20" y1="130" x2="320" y2="130" stroke="rgba(255,255,255,0.03)" stroke-width="1" stroke-dasharray="2,2" />
                              <rect x="30" y="90" width="100" height="80" fill="rgba(59, 130, 246, 0.05)" stroke="rgba(59, 130, 246, 0.2)" stroke-width="1" stroke-dasharray="4,4" rx="4" />
                              <text x="80" y="80" fill="#60a5fa" font-size="8" font-family="monospace" text-anchor="middle">ASIAN CONSOLIDATION</text>
                              <text x="80" y="105" fill="rgba(255, 255, 255, 0.3)" font-size="7" font-family="monospace" text-anchor="middle">Equal Highs (BSL)</text>
                              <text x="80" y="155" fill="rgba(255, 255, 255, 0.3)" font-size="7" font-family="monospace" text-anchor="middle">Equal Lows (SSL)</text>
                              <path d="M 20,120 L 30,125 L 45,115 L 60,145 L 75,120 L 90,135 L 110,125 L 130,130 L 150,210 L 175,170 L 200,90 L 230,60 L 260,80 L 285,40 L 320,30" fill="none" stroke="#facc15" stroke-width="2" />
                              <circle cx="150" cy="210" r="4" fill="#ef4444" />
                              <path d="M 150,210 L 150,230" stroke="#ef4444" stroke-width="1" stroke-dasharray="2,2" />
                              <text x="150" y="240" fill="#ef4444" font-size="8" font-family="monospace" text-anchor="middle" font-weight="bold">LONDON SSL SWEEP</text>
                              <text x="150" y="250" fill="rgba(239, 68, 68, 0.6)" font-size="7" font-family="monospace" text-anchor="middle">(Judas Swing)</text>
                              <circle cx="230" cy="60" r="4" fill="#22c55e" />
                              <text x="235" y="55" fill="#22c55e" font-size="8" font-family="monospace" font-weight="bold">NY CONTINUATION</text>
                          </svg>
                      </div>
                  </div>
              </div>
          </div>
          {/* Next Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <a href="#topic-4-4" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                  <span className="uppercase font-bold mb-1">Next Topic</span>
                  <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
              </a>
          </div>
      </section>

      {/* 4.4 Killzone Indicator for TradingView */}
      <section id="topic-4-4" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 4.4</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Killzone Indicator for TradingView</h2>
              </div>
              
              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl">
                  <p className="text-gray-400 font-light mb-8 text-sm uppercase tracking-wider">Automate session shading, pivots, and range metrics on your charts with our custom Pine Script indicator:</p>
                  
                  <div className="grid lg:grid-cols-3 gap-8 items-stretch">
                      {/* Left Panel: Instructions */}
                      <div className="lg:col-span-1 space-y-6 flex flex-col justify-between">
                          <div className="space-y-4">
                              <h3 className="text-white font-bold uppercase text-xs tracking-wider font-display mb-2 text-brandGold">Setup Instructions</h3>
                              <ol className="space-y-4 text-xs text-gray-300 font-light list-decimal list-inside leading-relaxed">
                                  <li className="pl-1"><span className="text-white font-semibold">Copy the Code:</span> Click the gold "Copy Code" button to copy the indicator script to your clipboard.</li>
                                  <li className="pl-1"><span className="text-white font-semibold">Open TradingView:</span> Navigate to your TradingView charts.</li>
                                  <li className="pl-1"><span className="text-white font-semibold">Access Pine Editor:</span> Click on the **Pine Editor** tab located at the bottom of the TradingView window.</li>
                                  <li className="pl-1"><span className="text-white font-semibold">Paste and Save:</span> Delete any template code, paste the copied script, and click **Save**. Name the indicator `KillZones By TeamUnknowns`.</li>
                                  <li className="pl-1"><span className="text-white font-semibold">Add to Chart:</span> Click **Add to chart** to plot the killzones instantly.</li>
                              </ol>
                          </div>
                          
                          <div className="bg-brandGold/5 p-4 rounded-lg border border-brandGold/15 text-[11px] font-mono mt-6 leading-relaxed">
                              <span className="text-brandGold font-bold block mb-1">💡 Customization Tip:</span>
                              Double-click on any of the colored boxes on your chart to open settings. You can adjust box transparency, custom session timings, toggle alert boundaries, and extend session pivots.
                          </div>
                      </div>

                      {/* Right Panel: Code block */}
                      <PineScriptSection />
                  </div>
              </div>
          </div>
          {/* Next Arrow (Points to Module 5) */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
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
