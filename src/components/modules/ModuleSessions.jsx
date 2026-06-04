import React, { useState } from 'react';
import OrderSimulator from '../OrderSimulator';

export default function ModuleSessions() {
  const [activePhase, setActivePhase] = useState('accumulation');

  return (
    <>
      {/* Module 4 Hero Section */}
      <section id="module4" className="min-h-screen flex flex-col justify-center items-center relative py-24 px-6">
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brandGold text-brandGold font-bold tracking-widest text-xs uppercase mb-10 bg-brandGold/5">
                  <span className="w-2 h-2 rounded-full bg-brandGold animate-pulse"></span> MODULE 4
              </div>
              <h1 className="text-6xl md:text-8xl font-black font-display leading-none mb-6 tracking-tight uppercase">
                  Market Dynamics <br />& <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandGold to-yellow-300">Sessions</span>
              </h1>
              <p className="text-textMuted text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide mt-8">
                  Forex & ICT Concepts — Mentorship Program. Master trader tiers, liquidity mechanics, session timing, and the daily algorithm cycle.
              </p>
          </div>
          {/* Next Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <a href="#topic-4-1" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                  <span className="uppercase font-bold mb-1">Next Topic</span>
                  <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
              </a>
          </div>
      </section>

      {/* Section 4.1: Trader Tiers & Market Impact */}
      <section id="topic-4-1" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 4.1</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Trader Tiers & Market Impact</h2>
              </div>

              {/* Trader Categories Grid */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                  {/* Retail Card */}
                  <div className="glass-panel border-t-4 border-t-rose-500 p-6 rounded-xl flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 group">
                      <div>
                          <div className="flex justify-between items-center mb-6">
                              <span className="bg-rose-500/10 text-rose-400 text-xs px-2.5 py-1 rounded font-mono font-semibold uppercase">Tier 3: Retail</span>
                              <span className="text-2xl">👤</span>
                          </div>
                          <h4 className="text-xl font-bold text-white mb-3 font-display">Retail Traders</h4>
                          <p className="text-gray-400 text-xs font-light leading-relaxed mb-6">
                              Individual retail market participants trading their personal accounts via brokers (MT4/MT5). They act as liquidity takers with zero impact on underlying prices.
                          </p>
                      </div>
                      <div className="border-t border-white/5 pt-4 mt-auto space-y-2 text-xs font-mono">
                          <div className="flex justify-between"><span className="text-gray-500">TIMEFRAME</span><span className="text-white">Daily / Short</span></div>
                          <div className="flex justify-between"><span className="text-gray-500">MAX LOTS</span><span className="text-rose-400 font-semibold">10 Lots ($1M)</span></div>
                          <div className="mt-4">
                              <span className="text-[10px] text-gray-500 block mb-1">MARKET IMPACT SCALE</span>
                              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                  <div className="bg-rose-500 h-full w-[5%]"></div>
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* Professional Card */}
                  <div className="glass-panel border-t-4 border-t-brandGold p-6 rounded-xl flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 group">
                      <div>
                          <div className="flex justify-between items-center mb-6">
                              <span className="bg-brandGold/10 text-brandGold text-xs px-2.5 py-1 rounded font-mono font-semibold uppercase">Tier 2: Professional</span>
                              <span className="text-2xl">💼</span>
                          </div>
                          <h4 className="text-xl font-bold text-white mb-3 font-display">Prop & Fund Traders</h4>
                          <p className="text-gray-400 text-xs font-light leading-relaxed mb-6">
                              Traders utilizing prop firm capitals or managing small boutique funds. They execute larger blocks of trades that may cause minor local slippage.
                          </p>
                      </div>
                      <div className="border-t border-white/5 pt-4 mt-auto space-y-2 text-xs font-mono">
                          <div className="flex justify-between"><span className="text-gray-500">TIMEFRAME</span><span className="text-white">Intraday / Swing</span></div>
                          <div className="flex justify-between"><span className="text-gray-500">MAX LOTS</span><span className="text-brandGold font-semibold">100 Lots ($10M)</span></div>
                          <div className="mt-4">
                              <span className="text-[10px] text-gray-500 block mb-1">MARKET IMPACT SCALE</span>
                              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                  <div className="bg-brandGold h-full w-[20%]"></div>
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* Institutional Card */}
                  <div className="glass-panel border-t-4 border-t-emerald-400 p-6 rounded-xl flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 group">
                      <div>
                          <div className="flex justify-between items-center mb-6">
                              <span className="bg-emerald-400/10 text-emerald-400 text-xs px-2.5 py-1 rounded font-mono font-semibold uppercase">Tier 1: Institution</span>
                              <span className="text-2xl">🏢</span>
                          </div>
                          <h4 className="text-xl font-bold text-white mb-3 font-display">Banks & Market Makers</h4>
                          <p className="text-gray-400 text-xs font-light leading-relaxed mb-6">
                              Central banks, Tier-1 institutions, and massive hedge funds. Their trades are market-moving and must be split using TWAP/VWAP algorithms.
                          </p>
                      </div>
                      <div className="border-t border-white/5 pt-4 mt-auto space-y-2 text-xs font-mono">
                          <div className="flex justify-between"><span className="text-gray-500">TIMEFRAME</span><span className="text-white">Weekly / Macro</span></div>
                          <div className="flex justify-between"><span className="text-gray-500">MAX LOTS</span><span className="text-emerald-400 font-semibold">1,000 - 10,000+ Lots</span></div>
                          <div className="mt-4">
                              <span className="text-[10px] text-gray-500 block mb-1">MARKET IMPACT SCALE</span>
                              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                  <div className="bg-emerald-400 h-full w-[100%]"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Callout & Analogy Panel */}
              <div className="space-y-6">
                  {/* Summary Callout */}
                  <div className="bg-brandGold/5 p-5 rounded-lg border border-brandGold/20 flex items-start gap-4 text-xs font-light text-gray-300">
                      <span className="text-lg mt-0.5">💡</span>
                      <div>
                          <p className="font-bold text-white uppercase tracking-wider mb-1">Who Moves the Market?</p>
                          <p className="leading-relaxed font-sans">
                              The market is not moved by retail buying or selling. Underlying prices are driven by **Tier 1 Banks & Institutions** executing massive block orders. Because they trade at such high scales, they cannot buy or sell instantly without slippage. They must seek out locations with concentrated counter-party liquidity to match their orders.
                          </p>
                      </div>
                  </div>

                  {/* Brush vs Crowd Analogy Widget */}
                  <div className="glass-panel p-6 sm:p-8 rounded-xl border border-white/10 relative overflow-hidden bg-black/40">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl"></div>
                      
                      <h4 className="text-lg font-bold font-display uppercase tracking-wider text-brandGold mb-2 flex items-center gap-2">
                          🎨 The "Brush" vs. "The Crowd"
                      </h4>
                      <p className="text-gray-400 text-xs font-light mb-6">
                          A simple analogy explaining the massive power imbalance in Forex market structure.
                      </p>

                      <div className="grid md:grid-cols-2 gap-8 text-xs font-light text-gray-300 leading-relaxed">
                          <div className="space-y-3">
                              <h5 className="text-white font-bold font-display uppercase tracking-wider text-xs">The Brush (Institutions)</h5>
                              <p>
                                  Wields concentrated volume. For example, <strong>5 major institutions</strong> placing <strong>100 standard lots</strong> each, resulting in a unified, market-moving block of <strong>500 lots</strong>. They "paint" the charts, sweep liquidity, and dictate direction.
                              </p>
                          </div>
                          <div className="space-y-3">
                              <h5 className="text-white font-bold font-display uppercase tracking-wider text-xs">The Crowd (Retail)</h5>
                              <p>
                                  Highly fragmented and weak. For example, <strong>800 retail traders</strong> placing <strong>0.5 standard lots</strong> each, resulting in <strong>400 lots</strong>. Since retail trades are scattered and cancel each other out, they have zero market impact and serve as counterparties for the institutions.
                              </p>
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

      {/* Section 4.2: Liquidity Foundation */}
      <section id="topic-4-2" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 4.2</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">What is Liquidity?</h2>
              </div>

              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl space-y-10">
                  <div className="space-y-4">
                      <p className="text-gray-400 font-light text-sm uppercase tracking-wider mb-2">Understanding the Fuel of the Market:</p>
                      <p className="text-sm text-gray-300 font-light leading-relaxed">
                          In trading, **Liquidity** represents the ease with which an asset can be bought or sold without causing a significant change in its price. At its core, liquidity is the **total volume of active buy and sell orders** waiting in the market.
                      </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                      {/* Concept 1 */}
                      <div className="bg-black/30 p-6 rounded-xl border border-white/5 space-y-3">
                          <span className="text-2xl">💰</span>
                          <h4 className="text-white font-bold text-sm uppercase tracking-wider">Fuel for the Move</h4>
                          <p className="text-xs text-gray-400 leading-relaxed font-light">
                              Just like a car needs fuel to run, institutional market orders need matching counterparty orders to be executed. Without a large pool of matching orders, large institutional trades cannot get filled.
                          </p>
                      </div>

                      {/* Concept 2 */}
                      <div className="bg-black/30 p-6 rounded-xl border border-white/5 space-y-3">
                          <span className="text-2xl">🤝</span>
                          <h4 className="text-white font-bold text-sm uppercase tracking-wider">Buyers & Sellers</h4>
                          <p className="text-xs text-gray-400 leading-relaxed font-light">
                              For every buyer, there must be a seller, and vice versa. If an institution wants to buy $100 Million worth of EUR/USD, they need to match their buy orders with $100 Million of sell orders.
                          </p>
                      </div>

                      {/* Concept 3 */}
                      <div className="bg-black/30 p-6 rounded-xl border border-white/5 space-y-3">
                          <span className="text-2xl">⚙️</span>
                          <h4 className="text-white font-bold text-sm uppercase tracking-wider">The Matchmaking Algorithm</h4>
                          <p className="text-xs text-gray-400 leading-relaxed font-light">
                              The interbank price delivery algorithm delivers price to specific areas where clusters of pending retail orders (stop-losses) are resting. Triggering these stop-losses provides the liquidity banks need.
                          </p>
                      </div>
                  </div>

                  <div className="bg-brandGold/5 p-5 rounded-lg border border-brandGold/20 text-xs font-light text-gray-300 leading-relaxed">
                      <strong className="text-white font-semibold uppercase tracking-wider block mb-1">Key Student Takeaway:</strong>
                      As a beginner, you must realize that **price is drawn toward liquidity**. The market does not move randomly; it moves from one pocket of resting orders to another.
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

      {/* Section 4.3: Liquidity Pools & Resting Places */}
      <section id="topic-4-3" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 4.3</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Liquidity Pools & Resting Places</h2>
              </div>
              
              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl space-y-10">
                  <div>
                      <p className="text-gray-400 font-light text-sm uppercase tracking-wider mb-2">Finding Stop-Loss Clusters on the Charts:</p>
                      <p className="text-sm text-gray-300 font-light leading-relaxed">
                          A **Liquidity Pool** is a specific area on a chart where a massive number of pending stop-loss orders are concentrated. Institutions target these pools to fill their own orders.
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
                                  Stops resting above/below the Asian Range, London session extremes, or New York extremes.
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
                              <g stroke="rgba(255,255,255,0.02)" strokeWidth="1">
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
                              <line x1="50" y1="60" x2="750" y2="60" stroke="#facc15" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.3" />
                              <text x="60" y="52" fill="#facc15" fontSize="9" fontFamily="monospace" opacity="0.6">PREVIOUS DAILY HIGH (PDH)</text>
                              <line x1="50" y1="390" x2="750" y2="390" stroke="#facc15" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.3" />
                              <text x="740" y="382" fill="#facc15" fontSize="9" fontFamily="monospace" opacity="0.6" textAnchor="end">PREVIOUS DAILY LOW (PDL)</text>
                              <line x1="150" y1="350" x2="460" y2="298" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.4" />
                              <text x="220" y="323" fill="#3b82f6" fontSize="9" fontFamily="monospace" opacity="0.6" transform="rotate(-9.5 220 323)">Retail Trendline</text>
                              <path d="M 20,345 L 20,360 L 440,320 L 440,305" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2" opacity="0.5" />
                              <text x="320" y="365" fill="#ef4444" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold" transform="rotate(-9.5 320 365)">SSL / SELL STOPS (Trendline Liquidity)</text>
                              <line x1="430" y1="140" x2="630" y2="140" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.4" />
                              <text x="530" y="130" fill="#22c55e" fontSize="9" fontFamily="monospace" textAnchor="middle" opacity="0.8">Equal Highs (Double Top)</text>
                              <text x="530" y="115" fill="#22c55e" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">BSL / BUY STOPS ($ $ $)</text>
                              <line x1="500" y1="310" x2="680" y2="310" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.4" />
                              <text x="590" y="325" fill="#ef4444" fontSize="9" fontFamily="monospace" textAnchor="middle" opacity="0.8">Equal Lows (Double Bottom)</text>
                              <text x="590" y="340" fill="#ef4444" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SSL / SELL STOPS ($ $ $)</text>
                              <path d="M 50,300 L 100,380 L 150,210 L 200,333 L 260,180 L 290,90 L 320,313 L 380,220 L 440,293 L 480,140 L 530,310 L 580,140 L 630,310 L 700,50" fill="none" stroke="#facc15" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                              <circle cx="100" cy="380" r="5" fill="#ef4444" />
                              <text x="100" y="405" fill="#ef4444" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SSL (Swing Low)</text>
                              <circle cx="290" cy="90" r="5" fill="#22c55e" />
                              <text x="290" y="75" fill="#22c55e" fontSize="9" fontFamily="monospace" textAnchor="middle" font-weight="bold">BSL (Swing High)</text>
                              <circle cx="480" cy="140" r="4" fill="#22c55e" />
                              <circle cx="580" cy="140" r="4" fill="#22c55e" />
                              <circle cx="530" cy="310" r="4" fill="#ef4444" />
                              <circle cx="630" cy="310" r="4" fill="#ef4444" />
                              <circle cx="200" cy="333" r="4" fill="#3b82f6" />
                              <circle cx="320" cy="313" r="4" fill="#3b82f6" />
                              <circle cx="440" cy="293" r="4" fill="#3b82f6" />
                              <circle cx="700" cy="50" r="6" fill="#22c55e" />
                              <path d="M 700,50 L 720,30" stroke="#22c55e" strokeWidth="2" strokeDasharray="2,2" />
                              <text x="725" y="25" fill="#22c55e" fontSize="9" fontFamily="monospace" font-weight="bold">Expansion</text>
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

      {/* Section 4.4: Liquidity Mechanics & Slippage */}
      <section id="topic-4-4" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 4.4</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Liquidity Mechanics & Slippage</h2>
              </div>

              <div className="space-y-8">
                  {/* Apple Market Analogy Widget */}
                  <div className="glass-panel p-6 sm:p-8 rounded-xl border border-white/10 relative overflow-hidden bg-black/40">
                      <div className="absolute top-0 left-0 w-32 h-32 bg-brandGold/5 rounded-full blur-2xl"></div>
                      
                      <h4 className="text-lg font-bold font-display uppercase tracking-wider text-brandGold mb-2 flex items-center gap-2">
                          🍎 The Apple Market Analogy
                      </h4>
                      <p className="text-gray-400 text-xs font-light mb-6">
                          The simplest way to understand how big banks trade against retail traders.
                      </p>

                      <div className="grid md:grid-cols-2 gap-8 text-xs font-light text-gray-300 leading-relaxed mb-6">
                          <div className="space-y-4">
                              <h5 className="text-white font-bold font-display uppercase tracking-wider text-xs">1. The Problem: Slippage</h5>
                              <p>
                                  If a bank needs to buy <strong>10,000 apples</strong> instantly, buying one-by-one sweeps up prices (from $1 to $2, $3, etc.). This price jump is called <strong>slippage</strong>. To protect profit margins, banks need to buy all 10,000 apples at $1 at the exact same moment.
                              </p>
                          </div>
                          <div className="space-y-4">
                              <h5 className="text-white font-bold font-display uppercase tracking-wider text-xs">2. The Solution: Finding the Crowd</h5>
                              <p>
                                  To buy a massive amount of stock at a cheap price, the big bank needs to find a place where thousands of retail traders are willing to sell at the exact same time. These sellers are retail traders' stop-losses (sell stops).
                              </p>
                          </div>
                      </div>

                      {/* The Sweep Process */}
                      <div className="border-t border-white/10 pt-6">
                          <h5 className="text-white font-bold font-display uppercase tracking-wider text-xs mb-4">The Sweep Timeline:</h5>
                          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-[11px] text-gray-400 leading-relaxed">
                              <div className="bg-black/20 p-3 rounded border border-white/5">
                                  <span className="block font-bold text-brandGold font-display mb-1">1. BAIT 🎯</span>
                                  <span>Retail buys and places stops (sell orders) below support.</span>
                              </div>
                              <div className="bg-black/20 p-3 rounded border border-white/5">
                                  <span className="block font-bold text-brandGold font-display mb-1">2. PUSH 📉</span>
                                  <span>Banks push price below support to trigger stop-losses.</span>
                              </div>
                              <div className="bg-black/20 p-3 rounded border border-white/5">
                                  <span className="block font-bold text-brandGold font-display mb-1">3. TRAP 🕸️</span>
                                  <span>Retail stop-losses trigger automatically as sell orders.</span>
                              </div>
                              <div className="bg-black/20 p-3 rounded border border-white/5">
                                  <span className="block font-bold text-brandGold font-display mb-1">4. FEAST 🍽️</span>
                                  <span>Banks buy up the flood of retail sells at a cheap price.</span>
                              </div>
                              <div className="bg-black/20 p-3 rounded border border-white/5">
                                  <span className="block font-bold text-brandGold font-display mb-1">5. REVERSAL 🚀</span>
                                  <span>The bank drives price up, leaving retail stopped out as price takes off.</span>
                              </div>
                          </div>
                      </div>

                      {/* Market vs Limit orders */}
                      <div className="border-t border-white/10 pt-6 mt-6">
                          <h5 className="text-white font-bold font-display uppercase tracking-wider text-xs mb-4">Market Orders vs. Limit Orders:</h5>
                          <div className="grid md:grid-cols-2 gap-6 text-[11px] text-gray-300 leading-relaxed font-light">
                              <div className="bg-black/30 p-4 rounded border border-white/5">
                                  <span className="text-brandGold font-bold block mb-1">Market Orders (Liquidity Takers)</span>
                                  Orders executed immediately at the best available market price. These cross the bid-ask spread and **take liquidity** out of the order book. Large market orders suffer from **slippage** as they eat through the order book levels.
                              </div>
                              <div className="bg-black/30 p-4 rounded border border-white/5">
                                  <span className="text-brandGold font-bold block mb-1">Limit Orders (Liquidity Makers)</span>
                                  Orders set to execute only at a specific price or better. These rest in the order book waiting to be filled, and **add liquidity** to the market. Institutions use limit orders to fill blocks at precise price points.
                              </div>
                          </div>
                      </div>

                      {/* The Shift */}
                      <div className="bg-brandGold/10 p-4 rounded border border-brandGold/40 text-xs font-light mt-6">
                          <p className="text-white font-bold font-display mb-1 flex items-center gap-1.5 text-brandGold">
                              💡 Student Mindset Shift:
                          </p>
                          <p className="text-gray-300 leading-relaxed">
                              Instead of asking, <strong className="text-white font-medium">"Why is the market out to get me?"</strong> you must train your eyes to ask: <strong className="text-white font-medium">"Where are all the retail traders hiding their stop-losses?"</strong> Because that is exactly where the big banks will drive the price next to fill their orders.
                          </p>
                      </div>
                  </div>

                  {/* Order Book & Slippage Simulator Widget */}
                  <div className="glass-panel p-6 sm:p-8 rounded-xl border border-white/10 relative overflow-hidden bg-black/40">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl"></div>
                      
                      <h4 className="text-lg font-bold font-display uppercase tracking-wider text-brandGold mb-2 flex items-center gap-2">
                          📊 Order Book & Slippage Simulator
                      </h4>
                      <p className="text-gray-400 text-xs font-light mb-6">
                          Simulate how different order sizes consume market depth and affect average entry prices.
                      </p>

                      <OrderSimulator />
                  </div>
              </div>
          </div>
          {/* Next Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <a href="#topic-4-5" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                  <span className="uppercase font-bold mb-1">Next Topic</span>
                  <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
              </a>
          </div>
      </section>

      {/* Section 4.5: Sessions & Killzone Hours */}
      <section id="topic-4-5" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 4.5</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Sessions & Killzone Hours</h2>
              </div>
              
              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl">
                  <p className="text-gray-400 font-light mb-8 text-sm uppercase tracking-wider">The time-based periods that define volume, volatility, and trading opportunities in Forex:</p>
                  
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

                      {/* London Session */}
                      <div className="bg-black/30 p-6 rounded-xl border border-white/5 flex flex-col justify-between hover:border-brandGold/30 transition-all duration-300">
                          <div>
                              <div className="flex justify-between items-center mb-3">
                                  <span className="bg-red-500/20 text-red-400 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider font-display">Manipulation</span>
                                  <span className="text-gray-500 text-xs font-mono">11:30 AM - 2:30 PM IST</span>
                              </div>
                              <h3 className="text-xl font-bold text-white mb-2">London Session</h3>
                              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                                  Injects massive volume and volatility. It is the session most likely to establish the absolute high or low of the day.
                              </p>
                          </div>
                          <div className="bg-brandGold/5 p-3 rounded border border-brandGold/20 mt-4 text-xs font-light leading-relaxed">
                              <strong className="text-brandGold font-bold uppercase tracking-wider block mb-1">ICT Concept Tip:</strong>
                              Look for the **Judas Swing**—an initial false run that sweeps the Asian Range high/low, followed by an immediate reversal and true expansion.
                          </div>
                      </div>

                      {/* New York Session */}
                      <div className="bg-black/30 p-6 rounded-xl border border-white/5 flex flex-col justify-between hover:border-brandGold/30 transition-all duration-300">
                          <div>
                              <div className="flex justify-between items-center mb-3">
                                  <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider font-display">Distribution</span>
                                  <span className="text-gray-500 text-xs font-mono">4:30 PM - 7:30 PM IST</span>
                              </div>
                              <h3 className="text-xl font-bold text-white mb-2">New York Session</h3>
                              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                                  High-volume session overlapping with London. Primary US macroeconomic data is released here, driving price expansion.
                              </p>
                          </div>
                          <div className="bg-brandGold/5 p-3 rounded border border-brandGold/20 mt-4 text-xs font-light leading-relaxed">
                              <strong className="text-brandGold font-bold uppercase tracking-wider block mb-1">ICT Concept Tip:</strong>
                              Reversal or Continuation. If London established the high/low of the day, NY often retraces to a discount/premium FVG and continues the expansion.
                          </div>
                      </div>

                      {/* Session Overlaps */}
                      <div className="bg-black/30 p-6 rounded-xl border border-white/5 flex flex-col justify-between hover:border-brandGold/30 transition-all duration-300">
                          <div>
                              <div className="flex justify-between items-center mb-3">
                                  <span className="bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider font-display">Peak Volatility</span>
                                  <span className="text-gray-500 text-xs font-mono">4:30 PM - 8:30 PM IST</span>
                              </div>
                              <h3 className="text-xl font-bold text-white mb-2">London & NY Overlap</h3>
                              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                                  The window when both London and New York financial centers are open. This produces the highest trading volume and sharpest trends of the day.
                              </p>
                          </div>
                          <div className="bg-brandGold/5 p-3 rounded border border-brandGold/20 mt-4 text-xs font-light leading-relaxed">
                              <strong className="text-brandGold font-bold uppercase tracking-wider block mb-1">ICT Concept Tip:</strong>
                              Excellent for intraday expansions. Watch for quick retracements into institutional arrays and target opposing session extremes.
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* Next Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <a href="#topic-4-6" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                  <span className="uppercase font-bold mb-1">Next Topic</span>
                  <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
              </a>
          </div>
      </section>

      {/* Section 4.6: Kill Zones */}
      <section id="topic-4-6" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 4.6</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Kill Zones & PO3</h2>
              </div>
              
              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl">
                  <p className="text-gray-400 font-light mb-8 text-sm uppercase tracking-wider">Why institutions execute trades during specific times of day and how the algorithm behaves:</p>
                  
                  <div className="grid lg:grid-cols-12 gap-8 items-start mb-8">
                      {/* Left: Interactive Tab Buttons */}
                      <div className="lg:col-span-4 flex flex-col gap-3">
                          <button
                              onClick={() => setActivePhase('accumulation')}
                              className={`text-left px-5 py-4 rounded-xl border transition-all duration-300 flex justify-between items-center group ${
                                  activePhase === 'accumulation'
                                      ? 'border-brandGold/30 bg-brandGold/15 hover:border-brandGold/50'
                                      : 'border-white/5 bg-black/30 hover:border-white/10 hover:bg-white/5'
                              }`}
                          >
                              <div className="space-y-1">
                                  <span className="font-bold text-[10px] uppercase tracking-wider text-gray-500 block">Phase 1</span>
                                  <span className="font-bold text-xs uppercase tracking-wider text-brandGold font-display flex items-center gap-2">
                                      <span className="w-2 h-2 rounded-full bg-brandGold animate-pulse"></span> Accumulation
                                  </span>
                              </div>
                              <span className="text-xs text-brandGold/60 group-hover:translate-x-1 transition-transform">→</span>
                          </button>

                          <button
                              onClick={() => setActivePhase('manipulation')}
                              className={`text-left px-5 py-4 rounded-xl border transition-all duration-300 flex justify-between items-center group ${
                                  activePhase === 'manipulation'
                                      ? 'border-red-500/30 bg-red-500/10 hover:border-red-500/50'
                                      : 'border-white/5 bg-black/30 hover:border-white/10 hover:bg-white/5'
                              }`}
                          >
                              <div className="space-y-1">
                                  <span className="font-bold text-[10px] uppercase tracking-wider text-gray-500 block">Phase 2</span>
                                  <span className="font-bold text-xs uppercase tracking-wider text-red-400 font-display flex items-center gap-2">
                                      <span className="w-2 h-2 rounded-full bg-red-500"></span> Manipulation
                                  </span>
                              </div>
                              <span className="text-xs text-red-400/60 group-hover:translate-x-1 transition-transform">→</span>
                          </button>

                          <button
                              onClick={() => setActivePhase('distribution')}
                              className={`text-left px-5 py-4 rounded-xl border transition-all duration-300 flex justify-between items-center group ${
                                  activePhase === 'distribution'
                                      ? 'border-green-500/30 bg-green-500/10 hover:border-green-500/50'
                                      : 'border-white/5 bg-black/30 hover:border-white/10 hover:bg-white/5'
                              }`}
                          >
                              <div className="space-y-1">
                                  <span className="font-bold text-[10px] uppercase tracking-wider text-gray-500 block">Phase 3</span>
                                  <span className="font-bold text-xs uppercase tracking-wider text-green-400 font-display flex items-center gap-2">
                                      <span className="w-2 h-2 rounded-full bg-green-500"></span> Distribution
                                  </span>
                              </div>
                              <span className="text-xs text-green-400/60 group-hover:translate-x-1 transition-transform">→</span>
                          </button>
                      </div>

                      {/* Middle: Content updates based on active phase */}
                      <div className="lg:col-span-8 bg-black/30 border border-white/5 p-6 rounded-xl min-h-[220px] flex flex-col justify-between">
                          {activePhase === 'accumulation' && (
                              <div className="space-y-4">
                                  <div className="flex items-center gap-2 text-brandGold font-bold text-xs uppercase tracking-wider">
                                      <span>🔒</span> The Setup: Asian Session Consolidation
                                  </div>
                                  <p className="text-xs text-gray-300 font-light leading-relaxed font-sans">
                                      During the Asian session (low market volume), the interbank algorithm keeps the price confined within a tight range. This consolidation acts as a bait. As retail traders buy and sell the boundaries, they place their stop-losses (liquidity) directly above the highs (Buy-side Liquidity) and below the lows (Sell-side Liquidity).
                                  </p>
                                  <div className="bg-brandGold/5 p-3 rounded border border-brandGold/20 text-[11px] text-gray-400">
                                      <span className="text-brandGold font-bold block uppercase mb-1">Student Checklist:</span>
                                      Do NOT trade breakouts here. Just mark the high and low of the Asian Range and wait.
                                  </div>
                              </div>
                          )}

                          {activePhase === 'manipulation' && (
                              <div className="space-y-4">
                                  <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wider">
                                      <span>🕸️</span> The Trap: London Judas Swing (Kill Zone)
                                  </div>
                                  <p className="text-xs text-gray-300 font-light leading-relaxed font-sans">
                                      At London Open (London Kill Zone), the algorithm triggers a sharp breakout in the *opposite* direction of the daily bias. If daily bias is bullish, price spikes down, sweeping below the Asian Range Low. This triggers retail sell-stops and stops out early buyers, providing the necessary counterparty liquidity for banks to buy at discount prices.
                                  </p>
                                  <div className="bg-red-500/5 p-3 rounded border border-red-500/25 text-[11px] text-gray-400">
                                      <span className="text-red-400 font-bold block uppercase mb-1">Student Checklist:</span>
                                      Look for a sweep of the Asian Range during London Killzone. Wait for a quick price rejection that leaves a long wick pointing to key liquidity pools.
                                  </div>
                              </div>
                          )}

                          {activePhase === 'distribution' && (
                              <div className="space-y-4">
                                  <div className="flex items-center gap-2 text-green-400 font-bold text-xs uppercase tracking-wider">
                                      <span>🚀</span> The Move: New York Expansion (Kill Zone)
                                  </div>
                                  <p className="text-xs text-gray-300 font-light leading-relaxed font-sans">
                                      After the manipulation sweep is complete, the algorithm aggressively drives price in the true direction of the day (New York Kill Zone expansion). Price runs cleanly toward the opposing pool of liquidity (Asian Range High or Previous Daily High) to distribute positions to late breakout buyers.
                                  </p>
                                  <div className="bg-green-500/5 p-3 rounded border border-green-500/25 text-[11px] text-gray-400">
                                      <span className="text-green-400 font-bold block uppercase mb-1">Student Checklist:</span>
                                      Identify the displacement on lower timeframes (5m/1m). Enter trades on retracements into Fair Value Gaps (FVG) or institutional Order Blocks (OB) during the NY Killzone. Target the opposite session high.
                                  </div>
                              </div>
                          )}
                      </div>
                  </div>

                  {/* Bottom: Dynamic SVG Graphic */}
                  <div className="space-y-4 mt-8">
                      <h4 className="text-brandGold font-bold uppercase tracking-wider text-xs font-display text-center">Interactive PO3 Timeline Schematic</h4>
                      <div className="bg-black/40 border border-white/10 rounded-xl p-8 flex flex-col items-center justify-center min-h-[300px] relative">
                          <div className="absolute top-4 left-4 text-xs font-bold text-gray-500 uppercase tracking-widest font-mono">Dynamic Schematic</div>
                          
                          <svg width="600" height="240" viewBox="0 0 600 240" className="w-full max-w-[600px] select-none">
                              {/* Background grids */}
                              <line x1="20" y1="120" x2="580" y2="120" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="2,2" />
                              
                              {/* Asian consolidation range box */}
                              <rect
                                  x="40"
                                  y="80"
                                  width="180"
                                  height="80"
                                  fill={activePhase === 'accumulation' ? "rgba(234, 179, 8, 0.15)" : "rgba(59, 130, 246, 0.02)"}
                                  stroke={activePhase === 'accumulation' ? "#facc15" : "rgba(59, 130, 246, 0.1)"}
                                  strokeWidth={activePhase === 'accumulation' ? 1.5 : 1}
                                  strokeDasharray={activePhase === 'accumulation' ? "none" : "4,4"}
                                  rx="4"
                                  className="transition-all duration-500"
                              />
                              <text x="130" y="70" fill={activePhase === 'accumulation' ? "#facc15" : "rgba(255,255,255,0.2)"} fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                                  ASIAN CONSOLIDATION (ACCUMULATION)
                              </text>
                              <text x="130" y="105" fill={activePhase === 'accumulation' ? "#60a5fa" : "rgba(255, 255, 255, 0.15)"} fontSize="7" fontFamily="monospace" textAnchor="middle">
                                  Equal Highs (Buy Stops)
                              </text>
                              <text x="130" y="145" fill={activePhase === 'accumulation' ? "#ef4444" : "rgba(255, 255, 255, 0.15)"} fontSize="7" fontFamily="monospace" textAnchor="middle">
                                  Equal Lows (Sell Stops)
                              </text>

                              {/* Price paths divided into three sections */}
                              {/* 1. Accumulation path */}
                              <path
                                  d="M 30,120 L 50,125 L 70,115 L 90,140 L 110,110 L 130,135 L 150,115 L 170,130 L 190,120 L 210,130 L 220,120"
                                  fill="none"
                                  stroke={activePhase === 'accumulation' ? "#facc15" : "rgba(255,255,255,0.2)"}
                                  strokeWidth={activePhase === 'accumulation' ? 3 : 2}
                                  className="transition-all duration-500"
                              />

                              {/* 2. Manipulation path (Judas Swing) */}
                              <path
                                  d="M 220,120 L 255,200"
                                  fill="none"
                                  stroke={activePhase === 'manipulation' ? "#ef4444" : "rgba(255,255,255,0.2)"}
                                  strokeWidth={activePhase === 'manipulation' ? 4 : 2}
                                  className="transition-all duration-500"
                              />
                              <line
                                  x1="220"
                                  y1="200"
                                  x2="290"
                                  y2="200"
                                  stroke={activePhase === 'manipulation' ? "#ef4444" : "rgba(255,255,255,0.05)"}
                                  strokeWidth="1"
                                  strokeDasharray="2,2"
                              />
                              <circle
                                  cx="255"
                                  cy="200"
                                  r={activePhase === 'manipulation' ? 5 : 3.5}
                                  fill={activePhase === 'manipulation' ? "#ef4444" : "rgba(255,255,255,0.2)"}
                                  className="transition-all duration-500"
                              />
                              <text
                                  x="255"
                                  y="220"
                                  fill={activePhase === 'manipulation' ? "#ef4444" : "rgba(255,255,255,0.15)"}
                                  fontSize="8"
                                  fontFamily="monospace"
                                  textAnchor="middle"
                                  fontWeight="bold"
                              >
                                  LONDON SSL SWEEP (MANIPULATION)
                              </text>

                              {/* 3. Distribution path */}
                              <path
                                  d="M 255,200 L 280,165 L 305,100 L 330,120 L 360,60 L 390,80 L 420,40 L 450,60 L 490,30 L 530,45 L 570,25"
                                  fill="none"
                                  stroke={activePhase === 'distribution' ? "#22c55e" : "rgba(255,255,255,0.2)"}
                                  strokeWidth={activePhase === 'distribution' ? 3 : 2}
                                  className="transition-all duration-500"
                              />
                              <circle
                                  cx="360"
                                  cy="60"
                                  r={activePhase === 'distribution' ? 4 : 3}
                                  fill={activePhase === 'distribution' ? "#22c55e" : "rgba(255,255,255,0.2)"}
                                  className="transition-all duration-500"
                              />
                              <text
                                  x="365"
                                  y="50"
                                  fill={activePhase === 'distribution' ? "#22c55e" : "rgba(255,255,255,0.15)"}
                                  fontSize="8"
                                  fontFamily="monospace"
                                  fontWeight="bold"
                              >
                                  NY CONTINUATION (DISTRIBUTION)
                              </text>
                          </svg>
                      </div>
                  </div>
              </div>
          </div>
          {/* Next Arrow */}
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
