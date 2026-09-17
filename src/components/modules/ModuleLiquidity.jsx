import { Coins, Handshake, Cpu, Target, Lightbulb, RefreshCw, ShoppingBag, BarChart2, Layers, Zap, Hammer, Sparkles, AlertTriangle } from "lucide-react";
import React from 'react';
import OrderSimulator from '../OrderSimulator';

export default function ModuleLiquidity() {
  return (
    <>
      {/* MODULE 4 Hero Section */}
      <section id="module4" className="min-h-screen flex flex-col justify-center items-center relative py-24 px-6">
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brandGold text-brandGold font-bold tracking-widest text-xs uppercase mb-10 bg-brandGold/5">
                  <span className="w-2 h-2 rounded-full bg-brandGold animate-pulse"></span> MODULE 4
              </div>
              <h1 className="text-6xl md:text-8xl font-black font-display leading-none mb-6 tracking-tight uppercase">
                  Market <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brandGold to-yellow-300">Liquidity</span>
              </h1>
              <p className="text-textMuted text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide mt-8">
                  Forex & ICT Concepts — Mentorship Program. Master the fuel of the market, identify every high-probability liquidity resting pool, and decode institutional order book mechanics.
              </p>
          </div>
      </section>

      {/* Section 4.1: Liquidity Concepts: Foundation */}
      <section id="topic-4-1" className="min-h-screen flex flex-col items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 4.1</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">What is Liquidity?</h2>
              </div>

              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl space-y-10 bg-black/40 border border-white/5">
                  <div className="space-y-4">
                      <p className="text-gray-400 font-light text-sm uppercase tracking-wider mb-2">Understanding the Fuel of the Market:</p>
                      <p className="text-sm text-gray-300 font-light leading-relaxed font-sans">
                          In trading, <strong>Liquidity</strong> represents the ease with which an asset can be bought or sold without causing a significant change in its price. At its core, liquidity is the <strong>total volume of active buy and sell orders</strong> waiting in the market.
                      </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                      {/* Concept 1 */}
                      <div className="bg-black/30 p-6 rounded-xl border border-white/5 space-y-3">
                          <Coins className="w-6 h-6 text-brandGold" />
                          <h4 className="text-white font-bold text-sm uppercase tracking-wider">Fuel for the Move</h4>
                          <p className="text-xs text-gray-400 leading-relaxed font-light">
                              Just like a car needs fuel to run, institutional market orders need matching counterparty orders to be executed. Without a large pool of matching orders, large institutional trades cannot get filled.
                          </p>
                      </div>

                      {/* Concept 2 */}
                      <div className="bg-black/30 p-6 rounded-xl border border-white/5 space-y-3">
                          <Handshake className="w-6 h-6 text-emerald-400" />
                          <h4 className="text-white font-bold text-sm uppercase tracking-wider">Buyers & Sellers</h4>
                          <p className="text-xs text-gray-400 leading-relaxed font-light">
                              For every buyer, there must be a seller, and vice versa. If an institution wants to buy $100 Million worth of EUR/USD, they need to match their buy orders with $100 Million of sell orders.
                          </p>
                      </div>

                      {/* Concept 3 */}
                      <div className="bg-black/30 p-6 rounded-xl border border-white/5 space-y-3">
                          <Cpu className="w-6 h-6 text-sky-400" />
                          <h4 className="text-white font-bold text-sm uppercase tracking-wider">The Matchmaking Algorithm</h4>
                          <p className="text-xs text-gray-400 leading-relaxed font-light">
                              The interbank price delivery algorithm delivers price to specific areas where clusters of pending retail orders (stop-losses) are resting. Triggering these stop-losses provides the liquidity banks need.
                          </p>
                      </div>
                  </div>

                  <div className="bg-brandGold/5 p-5 rounded-lg border border-brandGold/20 text-xs font-light text-gray-300 leading-relaxed">
                      <strong className="text-white font-semibold uppercase tracking-wider block mb-1">Key Student Takeaway:</strong>
                      As a beginner, you must realize that <strong>price is drawn toward liquidity</strong>. The market does not move randomly; it moves from one pocket of resting orders to another.
                  </div>
              </div>
          </div>
      </section>

      {/* Section 4.2: Liquidity Pools & Resting Places */}
      <section id="topic-4-2" className="min-h-screen flex flex-col items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-6xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 4.2</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Liquidity Pools & Resting Places</h2>
                  <p className="text-textMuted text-sm font-light mt-2">
                      Comprehensive guide to institutional order resting points, chart pools, and delivery behaviors.
                  </p>
              </div>
              
              <div className="glass-panel border-t-4 border-t-brandGold p-6 sm:p-8 md:p-12 rounded-xl space-y-12 bg-black/40 border border-white/5">
                  <div>
                      <p className="text-gray-400 font-light text-sm uppercase tracking-wider mb-2">Mapping Institutional Stop-Loss Clusters:</p>
                      <p className="text-sm text-gray-300 font-light leading-relaxed font-sans">
                          A <strong>Liquidity Pool</strong> is a specific area on a chart where a massive concentration of pending stop-loss and breakout orders are resting. Below is the complete catalog of primary liquidity pools, boundaries, internal/external structures, and reaction signatures.
                      </p>
                  </div>

                  {/* TOPIC LIST WITH ZERO-OVERLAP FINANCIAL SVG CHARTS */}
                  <div className="space-y-10">

                      {/* TOPIC 1 & 2: BSL vs SSL GRID */}
                      <div className="grid lg:grid-cols-2 gap-6">
                          
                          {/* 1. Buy-Side Liquidity — BSL */}
                          <div className="bg-black/50 border border-white/10 rounded-xl p-6 flex flex-col justify-between relative overflow-hidden hover:border-green-500/30 transition-all duration-300">
                              <div className="absolute top-0 left-0 right-0 h-1 bg-green-500"></div>
                              <div>
                                  <div className="flex items-center justify-between mb-3">
                                      <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-green-500/10 text-green-400 font-bold border border-green-500/20">
                                          1. Core Concept
                                      </span>
                                      <span className="text-green-400 font-bold text-xs">$$$ Resting Above</span>
                                  </div>
                                  <h3 className="text-xl font-bold font-display uppercase tracking-wide text-white mb-2">
                                      Buy-Side Liquidity (BSL)
                                  </h3>
                                  <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                                      Orders resting <strong>above key swing highs, resistance levels, or consolidation peaks</strong> that trigger as <strong>BUY</strong> market orders when reached.
                                  </p>

                                  {/* SVG Illustration: BSL */}
                                  <div className="bg-black/60 rounded-lg p-3 border border-white/5 mb-4">
                                      <svg viewBox="0 0 480 220" className="w-full h-auto select-none font-sans">
                                          {/* Grid */}
                                          <g stroke="rgba(255,255,255,0.03)" strokeWidth="1">
                                              <line x1="20" y1="40" x2="460" y2="40" />
                                              <line x1="20" y1="90" x2="460" y2="90" />
                                              <line x1="20" y1="140" x2="460" y2="140" />
                                              <line x1="20" y1="190" x2="460" y2="190" />
                                          </g>

                                          {/* Header Tag */}
                                          <rect x="25" y="16" width="130" height="20" rx="3" fill="#0d1f14" stroke="#22c55e" strokeWidth="1" />
                                          <text x="90" y="30" fill="#4ade80" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">BUY-SIDE LIQUIDITY</text>

                                          {/* BSL Line */}
                                          <line x1="40" y1="90" x2="385" y2="90" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="5,4" />
                                          
                                          {/* Price Action Swing Path (Stops safely before right axis) */}
                                          <path d="M 60,165 L 110,120 L 145,150 L 200,90 L 250,155 L 295,115 L 345,50 L 365,75" fill="none" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                          
                                          {/* Old Swing High Marker */}
                                          <circle cx="200" cy="90" r="4.5" fill="#22c55e" />
                                          <text x="200" y="72" fill="#22c55e" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Old Swing High</text>

                                          {/* Raid Arrow & Text */}
                                          <circle cx="345" cy="50" r="4.5" fill="#4ade80" />
                                          <text x="345" y="34" fill="#4ade80" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Raid / Sweep ↑</text>

                                          {/* Right-Side Dedicated Level Axis Badge */}
                                          <rect x="385" y="78" width="85" height="24" rx="3" fill="#0d1f14" stroke="#22c55e" strokeWidth="1" />
                                          <text x="427" y="94" fill="#4ade80" fontSize="8.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">BSL ($$$)</text>
                                      </svg>
                                  </div>

                                  <ul className="space-y-1.5 text-[11px] text-gray-400 font-light list-disc list-inside">
                                      <li><strong className="text-gray-200">Who is resting here:</strong> Stop-losses of short sellers (buy to close) + retail buy-stop breakout traders.</li>
                                      <li><strong className="text-gray-200">Institutional intent:</strong> Banks sell into this flood of buy orders to enter large short positions or take profit on longs.</li>
                                  </ul>
                              </div>
                              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-green-400 font-medium">
                                  <Target className="w-4 h-4 inline mr-1 text-brandGold" /> Price searches for BSL during bullish expansions or before bearish reversals.
                              </div>
                          </div>

                          {/* 2. Sell-Side Liquidity — SSL */}
                          <div className="bg-black/50 border border-white/10 rounded-xl p-6 flex flex-col justify-between relative overflow-hidden hover:border-red-500/30 transition-all duration-300">
                              <div className="absolute top-0 left-0 right-0 h-1 bg-red-500"></div>
                              <div>
                                  <div className="flex items-center justify-between mb-3">
                                      <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-red-500/10 text-red-400 font-bold border border-red-500/20">
                                          2. Core Concept
                                      </span>
                                      <span className="text-red-400 font-bold text-xs">$$$ Resting Below</span>
                                  </div>
                                  <h3 className="text-xl font-bold font-display uppercase tracking-wide text-white mb-2">
                                      Sell-Side Liquidity (SSL)
                                  </h3>
                                  <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                                      Orders resting <strong>below key swing lows, support levels, or range bottoms</strong> that trigger as <strong>SELL</strong> market orders when reached.
                                  </p>

                                  {/* SVG Illustration: SSL */}
                                  <div className="bg-black/60 rounded-lg p-3 border border-white/5 mb-4">
                                      <svg viewBox="0 0 480 220" className="w-full h-auto select-none font-sans">
                                          {/* Grid */}
                                          <g stroke="rgba(255,255,255,0.03)" strokeWidth="1">
                                              <line x1="20" y1="40" x2="460" y2="40" />
                                              <line x1="20" y1="90" x2="460" y2="90" />
                                              <line x1="20" y1="130" x2="460" y2="130" />
                                              <line x1="20" y1="190" x2="460" y2="190" />
                                          </g>

                                          {/* Header Tag */}
                                          <rect x="25" y="16" width="130" height="20" rx="3" fill="#1f0d0d" stroke="#ef4444" strokeWidth="1" />
                                          <text x="90" y="30" fill="#f87171" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">SELL-SIDE LIQUIDITY</text>

                                          {/* SSL Line */}
                                          <line x1="40" y1="130" x2="385" y2="130" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="5,4" />
                                          
                                          {/* Price Action Swing Path */}
                                          <path d="M 60,55 L 110,100 L 145,70 L 200,130 L 250,65 L 295,105 L 345,170 L 365,145" fill="none" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                          
                                          {/* Old Swing Low Marker */}
                                          <circle cx="200" cy="130" r="4.5" fill="#ef4444" />
                                          <text x="200" y="150" fill="#ef4444" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Old Swing Low</text>

                                          {/* Raid Arrow & Text */}
                                          <circle cx="345" cy="170" r="4.5" fill="#f87171" />
                                          <text x="345" y="190" fill="#f87171" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Raid / Sweep ↓</text>

                                          {/* Right-Side Dedicated Level Axis Badge */}
                                          <rect x="385" y="118" width="85" height="24" rx="3" fill="#1f0d0d" stroke="#ef4444" strokeWidth="1" />
                                          <text x="427" y="134" fill="#f87171" fontSize="8.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">SSL ($$$)</text>
                                      </svg>
                                  </div>

                                  <ul className="space-y-1.5 text-[11px] text-gray-400 font-light list-disc list-inside">
                                      <li><strong className="text-gray-200">Who is resting here:</strong> Stop-losses of long buyers (sell to close) + retail sell-stop breakdown traders.</li>
                                      <li><strong className="text-gray-200">Institutional intent:</strong> Banks buy from this flood of sell orders at discounted wholesale prices.</li>
                                  </ul>
                              </div>
                              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-red-400 font-medium">
                                  <Target className="w-4 h-4 inline mr-1 text-emerald-400" /> Price hunts SSL to accumulate longs at cheap prices before explosive bull runs.
                              </div>
                          </div>

                      </div>

                      {/* TOPIC 3 & 4: EQUAL HIGHS vs EQUAL LOWS */}
                      <div className="grid lg:grid-cols-2 gap-6">

                          {/* Equal Highs (EQH) */}
                          <div className="bg-black/50 border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-brandGold/30 transition-all duration-300">
                              <div>
                                  <div className="flex items-center justify-between mb-3">
                                      <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-yellow-500/10 text-yellow-400 font-bold border border-yellow-500/20">
                                          Equal Highs (EQH)
                                      </span>
                                      <span className="text-yellow-400 font-bold text-xs">Double / Triple Top</span>
                                  </div>
                                  <h4 className="text-lg font-bold font-display uppercase tracking-wide text-white mb-2">
                                      Equal Highs — Engineered Liquidity
                                  </h4>
                                  <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                                      When two or more peaks peak at the exact same horizontal level, retail interprets this as <em>"strong resistance"</em>. This manufactures a double cluster of stop-losses resting directly overhead.
                                  </p>

                                  {/* SVG Illustration: EQH */}
                                  <div className="bg-black/60 rounded-lg p-3 border border-white/5 mb-4">
                                      <svg viewBox="0 0 480 220" className="w-full h-auto select-none font-sans">
                                          {/* Grid */}
                                          <line x1="20" y1="45" x2="460" y2="45" stroke="rgba(255,255,255,0.03)" />
                                          <line x1="20" y1="90" x2="460" y2="90" stroke="rgba(255,255,255,0.03)" />
                                          <line x1="20" y1="145" x2="460" y2="145" stroke="rgba(255,255,255,0.03)" />

                                          {/* Header Tag */}
                                          <rect x="25" y="16" width="170" height="20" rx="3" fill="#0d1f14" stroke="#22c55e" strokeWidth="1" />
                                          <text x="110" y="30" fill="#4ade80" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">EQUAL HIGHS / DOUBLE TOP</text>

                                          {/* EQH Line */}
                                          <line x1="40" y1="90" x2="385" y2="90" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4,4" />

                                          {/* Swing path */}
                                          <path d="M 50,165 L 90,120 L 120,145 L 160,90 L 210,155 L 260,90 L 300,135 L 345,50 L 365,115" fill="none" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

                                          {/* Equal High Circles */}
                                          <circle cx="160" cy="90" r="4.5" fill="#22c55e" />
                                          <circle cx="260" cy="90" r="4.5" fill="#22c55e" />
                                          <text x="160" y="72" fill="#86efac" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Peak 1</text>
                                          <text x="260" y="72" fill="#86efac" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Peak 2</text>

                                          {/* Sweep Arrow */}
                                          <circle cx="345" cy="50" r="4.5" fill="#ef4444" />
                                          <text x="345" y="34" fill="#f87171" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Purge ↑</text>

                                          {/* Right Axis Tag */}
                                          <rect x="385" y="78" width="85" height="24" rx="3" fill="#0d1f14" stroke="#22c55e" strokeWidth="1" />
                                          <text x="427" y="94" fill="#4ade80" fontSize="8.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">EQH ($$$)</text>
                                      </svg>
                                  </div>

                                  <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                                      <Lightbulb className="w-4 h-4 inline mr-1 text-brandGold" /> <strong>Rule:</strong> Equal highs are rarely respected long-term. Smart money uses them as magnets to purge retail breakout orders before reversing.
                                  </p>
                              </div>
                          </div>

                          {/* Equal Lows (EQL) */}
                          <div className="bg-black/50 border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-brandGold/30 transition-all duration-300">
                              <div>
                                  <div className="flex items-center justify-between mb-3">
                                      <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-yellow-500/10 text-yellow-400 font-bold border border-yellow-500/20">
                                          Equal Lows (EQL)
                                      </span>
                                      <span className="text-yellow-400 font-bold text-xs">Double / Triple Bottom</span>
                                  </div>
                                  <h4 className="text-lg font-bold font-display uppercase tracking-wide text-white mb-2">
                                      Equal Lows — Engineered Liquidity
                                  </h4>
                                  <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                                      When two or more troughs bounce at the identical price level, retail treats it as <em>"unbreakable support"</em>. A dense field of sell stops accumulates directly below.
                                  </p>

                                  {/* SVG Illustration: EQL */}
                                  <div className="bg-black/60 rounded-lg p-3 border border-white/5 mb-4">
                                      <svg viewBox="0 0 480 220" className="w-full h-auto select-none font-sans">
                                          {/* Grid */}
                                          <line x1="20" y1="45" x2="460" y2="45" stroke="rgba(255,255,255,0.03)" />
                                          <line x1="20" y1="130" x2="460" y2="130" stroke="rgba(255,255,255,0.03)" />
                                          <line x1="20" y1="175" x2="460" y2="175" stroke="rgba(255,255,255,0.03)" />

                                          {/* Header Tag */}
                                          <rect x="25" y="16" width="170" height="20" rx="3" fill="#1f0d0d" stroke="#ef4444" strokeWidth="1" />
                                          <text x="110" y="30" fill="#f87171" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">EQUAL LOWS / DOUBLE BOTTOM</text>

                                          {/* EQL Line */}
                                          <line x1="40" y1="130" x2="385" y2="130" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4,4" />

                                          {/* Swing path */}
                                          <path d="M 50,55 L 90,100 L 120,75 L 160,130 L 210,65 L 260,130 L 300,85 L 345,170 L 365,105" fill="none" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

                                          {/* Equal Low Circles */}
                                          <circle cx="160" cy="130" r="4.5" fill="#ef4444" />
                                          <circle cx="260" cy="130" r="4.5" fill="#ef4444" />
                                          <text x="160" y="150" fill="#fca5a5" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Bottom 1</text>
                                          <text x="260" y="150" fill="#fca5a5" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Bottom 2</text>

                                          {/* Sweep Arrow */}
                                          <circle cx="345" cy="170" r="4.5" fill="#22c55e" />
                                          <text x="345" y="190" fill="#4ade80" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Purge ↓</text>

                                          {/* Right Axis Tag */}
                                          <rect x="385" y="118" width="85" height="24" rx="3" fill="#1f0d0d" stroke="#ef4444" strokeWidth="1" />
                                          <text x="427" y="134" fill="#f87171" fontSize="8.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">EQL ($$$)</text>
                                      </svg>
                                  </div>

                                  <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                                      <Lightbulb className="w-4 h-4 inline mr-1 text-brandGold" /> <strong>Rule:</strong> EQL acts like a high-voltage magnet for price delivery algorithms to grab cheap fill volume before upward expansions.
                                  </p>
                              </div>
                          </div>

                      </div>

                      {/* TOPIC 5 & 6: PREVIOUS DAY HIGH (PDH) & PREVIOUS DAY LOW (PDL) */}
                      <div className="grid lg:grid-cols-2 gap-6">

                          {/* Previous Day High (PDH) */}
                          <div className="bg-black/50 border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-brandGold/30 transition-all duration-300">
                              <div>
                                  <div className="flex items-center justify-between mb-3">
                                      <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 font-bold border border-amber-500/20">
                                          Daily Boundary
                                      </span>
                                      <span className="text-amber-300 font-mono font-bold text-xs">PDH</span>
                                  </div>
                                  <h4 className="text-lg font-bold font-display uppercase tracking-wide text-white mb-2">
                                      Previous Day High (PDH)
                                  </h4>
                                  <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                                      The absolute highest price traded during the previous 24-hour daily cycle (00:00 - 23:59 UTC). A premier intra-day target for institutional liquidity hunts.
                                  </p>

                                  {/* SVG Illustration: PDH */}
                                  <div className="bg-black/60 rounded-lg p-3 border border-white/5 mb-4">
                                      <svg viewBox="0 0 480 220" className="w-full h-auto select-none font-sans">
                                          {/* Day Separator */}
                                          <line x1="210" y1="10" x2="210" y2="205" stroke="rgba(255,255,255,0.1)" strokeDasharray="3,3" />
                                          <text x="115" y="22" fill="#9ca3af" fontSize="9" fontFamily="monospace" textAnchor="middle">DAY 1 (Yesterday)</text>
                                          <text x="295" y="22" fill="#9ca3af" fontSize="9" fontFamily="monospace" textAnchor="middle">DAY 2 (Today)</text>

                                          {/* PDH Line */}
                                          <line x1="30" y1="90" x2="385" y2="90" stroke="#facc15" strokeWidth="1.5" strokeDasharray="4,4" />

                                          {/* Day 1 Swing (x: 40 -> 190) */}
                                          <path d="M 40,165 L 80,125 L 125,90 L 165,135 L 190,150" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                          <circle cx="125" cy="90" r="4" fill="#facc15" />
                                          <text x="125" y="72" fill="#facc15" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Day 1 High</text>

                                          {/* Day 2 Sweep Path (x: 230 -> 365) */}
                                          <path d="M 230,150 L 265,115 L 305,52 L 345,110 L 365,160" fill="none" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                          <circle cx="305" cy="52" r="4.5" fill="#22c55e" />
                                          <text x="305" y="38" fill="#4ade80" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">PDH Purged ↑</text>

                                          {/* Right Axis PDH Tag (Safe zone away from price lines) */}
                                          <rect x="385" y="78" width="85" height="24" rx="3" fill="#1f1a05" stroke="#facc15" strokeWidth="1" />
                                          <text x="427" y="94" fill="#fde047" fontSize="8.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">PDH ($$$)</text>
                                      </svg>
                                  </div>

                                  <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                                      <Target className="w-4 h-4 inline mr-1 text-brandGold" /> Intraday traders monitor London & NY open to observe whether PDH is swept for a reversal or accepted for continuation.
                                  </p>
                              </div>
                          </div>

                          {/* Previous Day Low (PDL) */}
                          <div className="bg-black/50 border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-brandGold/30 transition-all duration-300">
                              <div>
                                  <div className="flex items-center justify-between mb-3">
                                      <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 font-bold border border-amber-500/20">
                                          Daily Boundary
                                      </span>
                                      <span className="text-amber-300 font-mono font-bold text-xs">PDL</span>
                                  </div>
                                  <h4 className="text-lg font-bold font-display uppercase tracking-wide text-white mb-2">
                                      Previous Day Low (PDL)
                                  </h4>
                                  <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                                      The absolute lowest price recorded in the prior trading day. Daily longs place protective stop-losses just beneath this key benchmark.
                                  </p>

                                  {/* SVG Illustration: PDL */}
                                  <div className="bg-black/60 rounded-lg p-3 border border-white/5 mb-4">
                                      <svg viewBox="0 0 480 220" className="w-full h-auto select-none font-sans">
                                          {/* Day Separator */}
                                          <line x1="210" y1="10" x2="210" y2="205" stroke="rgba(255,255,255,0.1)" strokeDasharray="3,3" />
                                          <text x="115" y="22" fill="#9ca3af" fontSize="9" fontFamily="monospace" textAnchor="middle">DAY 1 (Yesterday)</text>
                                          <text x="295" y="22" fill="#9ca3af" fontSize="9" fontFamily="monospace" textAnchor="middle">DAY 2 (Today)</text>

                                          {/* PDL Line */}
                                          <line x1="30" y1="130" x2="385" y2="130" stroke="#facc15" strokeWidth="1.5" strokeDasharray="4,4" />

                                          {/* Day 1 Swing (x: 40 -> 190) */}
                                          <path d="M 40,55 L 80,95 L 125,130 L 165,85 L 190,70" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                          <circle cx="125" cy="130" r="4" fill="#facc15" />
                                          <text x="125" y="150" fill="#facc15" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Day 1 Low</text>

                                          {/* Day 2 Sweep Path (x: 230 -> 365) */}
                                          <path d="M 230,70 L 265,105 L 305,168 L 345,110 L 365,60" fill="none" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                          <circle cx="305" cy="168" r="4.5" fill="#ef4444" />
                                          <text x="305" y="188" fill="#f87171" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">PDL Purged ↓</text>

                                          {/* Right Axis PDL Tag */}
                                          <rect x="385" y="118" width="85" height="24" rx="3" fill="#1f1a05" stroke="#facc15" strokeWidth="1" />
                                          <text x="427" y="134" fill="#fde047" fontSize="8.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">PDL ($$$)</text>
                                      </svg>
                                  </div>

                                  <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                                      <Target className="w-4 h-4 inline mr-1 text-brandGold" /> Institutional algorithms frequently drive price into PDL to engineer sell-side panic before launching daily bullish rallies.
                                  </p>
                              </div>
                          </div>

                      </div>

                      {/* TOPIC 7 & 8: PREVIOUS WEEK HIGH (PWH) & PREVIOUS WEEK LOW (PWL) */}
                      <div className="grid lg:grid-cols-2 gap-6">

                          {/* Previous Week High (PWH) */}
                          <div className="bg-black/50 border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-brandGold/30 transition-all duration-300">
                              <div>
                                  <div className="flex items-center justify-between mb-3">
                                      <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-300 font-bold border border-cyan-500/20">
                                          Macro Weekly Boundary
                                      </span>
                                      <span className="text-cyan-300 font-mono font-bold text-xs">PWH</span>
                                  </div>
                                  <h4 className="text-lg font-bold font-display uppercase tracking-wide text-white mb-2">
                                      Previous Week High (PWH)
                                  </h4>
                                  <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                                      The highest price level reached across the entire 5-day trading week. Holds macro liquidity from multi-day swing traders and institutional funds.
                                  </p>

                                  {/* SVG Illustration: PWH */}
                                  <div className="bg-black/60 rounded-lg p-3 border border-white/5 mb-4">
                                      <svg viewBox="0 0 480 220" className="w-full h-auto select-none font-sans">
                                          {/* Week Separator */}
                                          <line x1="210" y1="10" x2="210" y2="205" stroke="rgba(255,255,255,0.1)" strokeDasharray="3,3" />
                                          <text x="115" y="22" fill="#9ca3af" fontSize="9" fontFamily="monospace" textAnchor="middle">WEEK 1 (Mon-Fri)</text>
                                          <text x="295" y="22" fill="#9ca3af" fontSize="9" fontFamily="monospace" textAnchor="middle">WEEK 2 (Current)</text>

                                          {/* PWH Line */}
                                          <line x1="30" y1="90" x2="385" y2="90" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="5,4" />

                                          {/* Week 1 swing range (x: 40 -> 190) */}
                                          <path d="M 40,160 L 80,120 L 120,90 L 160,130 L 190,145" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                          <circle cx="120" cy="90" r="4" fill="#06b6d4" />
                                          <text x="120" y="72" fill="#06b6d4" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Week 1 Peak</text>

                                          {/* Week 2 Expansion (x: 230 -> 365) */}
                                          <path d="M 230,145 L 265,110 L 305,50 L 345,95 L 365,75" fill="none" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                          <circle cx="305" cy="50" r="4.5" fill="#06b6d4" />
                                          <text x="305" y="38" fill="#67e8f9" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">PWH Purged ↑</text>

                                          {/* Right Axis PWH Tag */}
                                          <rect x="385" y="78" width="85" height="24" rx="3" fill="#041a1f" stroke="#06b6d4" strokeWidth="1" />
                                          <text x="427" y="94" fill="#67e8f9" fontSize="8.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">PWH ($$$)</text>
                                      </svg>
                                  </div>

                                  <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                                      <Lightbulb className="w-4 h-4 inline mr-1 text-brandGold" /> When high-timeframe order flow is bullish, PWH serves as the primary weekly <strong>Draw on Liquidity (DOL)</strong>.
                                  </p>
                              </div>
                          </div>

                          {/* Previous Week Low (PWL) */}
                          <div className="bg-black/50 border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-brandGold/30 transition-all duration-300">
                              <div>
                                  <div className="flex items-center justify-between mb-3">
                                      <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-300 font-bold border border-cyan-500/20">
                                          Macro Weekly Boundary
                                      </span>
                                      <span className="text-cyan-300 font-mono font-bold text-xs">PWL</span>
                                  </div>
                                  <h4 className="text-lg font-bold font-display uppercase tracking-wide text-white mb-2">
                                      Previous Week Low (PWL)
                                  </h4>
                                  <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                                      The absolute lowest price recorded during the previous week. Represents high-timeframe sell-side liquidity for large institutional liquidations.
                                  </p>

                                  {/* SVG Illustration: PWL */}
                                  <div className="bg-black/60 rounded-lg p-3 border border-white/5 mb-4">
                                      <svg viewBox="0 0 480 220" className="w-full h-auto select-none font-sans">
                                          {/* Week Separator */}
                                          <line x1="210" y1="10" x2="210" y2="205" stroke="rgba(255,255,255,0.1)" strokeDasharray="3,3" />
                                          <text x="115" y="22" fill="#9ca3af" fontSize="9" fontFamily="monospace" textAnchor="middle">WEEK 1 (Mon-Fri)</text>
                                          <text x="295" y="22" fill="#9ca3af" fontSize="9" fontFamily="monospace" textAnchor="middle">WEEK 2 (Current)</text>

                                          {/* PWL Line */}
                                          <line x1="30" y1="130" x2="385" y2="130" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="5,4" />

                                          {/* Week 1 swing range (x: 40 -> 190) */}
                                          <path d="M 40,60 L 80,100 L 120,130 L 160,90 L 190,75" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                          <circle cx="120" cy="130" r="4" fill="#06b6d4" />
                                          <text x="120" y="150" fill="#06b6d4" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Week 1 Trough</text>

                                          {/* Week 2 Expansion (x: 230 -> 365) */}
                                          <path d="M 230,75 L 265,110 L 305,170 L 345,125 L 365,145" fill="none" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                          <circle cx="305" cy="170" r="4.5" fill="#06b6d4" />
                                          <text x="305" y="190" fill="#67e8f9" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">PWL Purged ↓</text>

                                          {/* Right Axis PWL Tag */}
                                          <rect x="385" y="118" width="85" height="24" rx="3" fill="#041a1f" stroke="#06b6d4" strokeWidth="1" />
                                          <text x="427" y="134" fill="#67e8f9" fontSize="8.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">PWL ($$$)</text>
                                      </svg>
                                  </div>

                                  <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                                      <Lightbulb className="w-4 h-4 inline mr-1 text-brandGold" /> When high-timeframe order flow is bearish, PWL acts as the premier downside magnet for institutional price delivery.
                                  </p>
                              </div>
                          </div>

                      </div>

                      {/* TOPIC 9 & 10: SESSION HIGH & SESSION LOW */}
                      <div className="grid lg:grid-cols-2 gap-6">

                          {/* Session High */}
                          <div className="bg-black/50 border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-brandGold/30 transition-all duration-300">
                              <div>
                                  <div className="flex items-center justify-between mb-3">
                                      <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-purple-500/10 text-purple-300 font-bold border border-purple-500/20">
                                          Session Intraday
                                      </span>
                                      <span className="text-purple-300 font-mono font-bold text-xs">Asian / London High</span>
                                  </div>
                                  <h4 className="text-lg font-bold font-display uppercase tracking-wide text-white mb-2">
                                      Session High
                                  </h4>
                                  <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                                      The highest price established during an individual session (e.g. Asian Range High 00:00–06:00 UTC). Routinely swept during the subsequent London or New York Open (Judas Swing).
                                  </p>

                                  {/* SVG Illustration: Session High */}
                                  <div className="bg-black/60 rounded-lg p-3 border border-white/5 mb-4">
                                      <svg viewBox="0 0 480 220" className="w-full h-auto select-none font-sans">
                                          {/* Asian Box */}
                                          <rect x="30" y="55" width="150" height="110" fill="#a855f7" fillOpacity="0.08" stroke="#a855f7" strokeWidth="1" strokeDasharray="3,3" rx="4" />
                                          <text x="105" y="44" fill="#c084fc" fontSize="8.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Asian Session Range</text>

                                          {/* Session High Line */}
                                          <line x1="30" y1="80" x2="385" y2="80" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4,3" />

                                          {/* Asian internal consolidation */}
                                          <path d="M 40,135 L 75,80 L 105,120 L 135,95 L 165,140" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                          <circle cx="75" cy="80" r="3.5" fill="#c084fc" />

                                          {/* London Judas Swing Raid */}
                                          <path d="M 185,140 L 225,110 L 270,45 L 315,145 L 360,175" fill="none" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                          <circle cx="270" cy="45" r="4.5" fill="#22c55e" />
                                          <text x="270" y="32" fill="#4ade80" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Judas High Raid ↑</text>
                                          <text x="340" y="195" fill="#ef4444" fontSize="8.5" fontFamily="monospace" textAnchor="middle">London Drop</text>

                                          {/* Right Axis Tag */}
                                          <rect x="385" y="68" width="85" height="24" rx="3" fill="#160824" stroke="#a855f7" strokeWidth="1" />
                                          <text x="427" y="84" fill="#d8b4fe" fontSize="8.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Session H</text>
                                      </svg>
                                  </div>

                                  <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                                      <Target className="w-4 h-4 inline mr-1 text-red-400" /> <strong>Judas Swing:</strong> London opens, fake-breaks above Asian High to raid buy stops, then distributes heavily in the true downward direction.
                                  </p>
                              </div>
                          </div>

                          {/* Session Low */}
                          <div className="bg-black/50 border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-brandGold/30 transition-all duration-300">
                              <div>
                                  <div className="flex items-center justify-between mb-3">
                                      <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-purple-500/10 text-purple-300 font-bold border border-purple-500/20">
                                          Session Intraday
                                      </span>
                                      <span className="text-purple-300 font-mono font-bold text-xs">Asian / London Low</span>
                                  </div>
                                  <h4 className="text-lg font-bold font-display uppercase tracking-wide text-white mb-2">
                                      Session Low
                                  </h4>
                                  <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                                      The lowest price printed during a specific session window. Raided by smart money algorithms to generate sell-side liquidity before powerful reversals.
                                  </p>

                                  {/* SVG Illustration: Session Low */}
                                  <div className="bg-black/60 rounded-lg p-3 border border-white/5 mb-4">
                                      <svg viewBox="0 0 480 220" className="w-full h-auto select-none font-sans">
                                          {/* Asian Box */}
                                          <rect x="30" y="55" width="150" height="110" fill="#a855f7" fillOpacity="0.08" stroke="#a855f7" strokeWidth="1" strokeDasharray="3,3" rx="4" />
                                          <text x="105" y="44" fill="#c084fc" fontSize="8.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Asian Session Range</text>

                                          {/* Session Low Line */}
                                          <line x1="30" y1="140" x2="385" y2="140" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4,3" />

                                          {/* Asian internal consolidation */}
                                          <path d="M 40,85 L 75,140 L 105,100 L 135,125 L 165,80" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                          <circle cx="75" cy="140" r="3.5" fill="#c084fc" />

                                          {/* London Judas Swing Raid */}
                                          <path d="M 185,80 L 225,110 L 270,175 L 315,75 L 360,45" fill="none" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                          <circle cx="270" cy="175" r="4.5" fill="#ef4444" />
                                          <text x="270" y="195" fill="#f87171" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Judas Low Raid ↓</text>
                                          <text x="340" y="32" fill="#4ade80" fontSize="8.5" fontFamily="monospace" textAnchor="middle">London Rally</text>

                                          {/* Right Axis Tag */}
                                          <rect x="385" y="128" width="85" height="24" rx="3" fill="#160824" stroke="#a855f7" strokeWidth="1" />
                                          <text x="427" y="144" fill="#d8b4fe" fontSize="8.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Session L</text>
                                      </svg>
                                  </div>

                                  <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                                      <Target className="w-4 h-4 inline mr-1 text-emerald-400" /> Raiding the Asian Low during London Open cleans out retail buyer stop-losses, providing liquidity for the day's true upward trend.
                                  </p>
                              </div>
                          </div>

                      </div>

                      {/* TOPIC 11 & 12: INTERNAL VS EXTERNAL LIQUIDITY */}
                      <div className="grid lg:grid-cols-2 gap-6">

                          {/* Internal Liquidity */}
                          <div className="bg-black/50 border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-brandGold/30 transition-all duration-300">
                              <div>
                                  <div className="flex items-center justify-between mb-3">
                                      <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-blue-500/10 text-blue-300 font-bold border border-blue-500/20">
                                          Range Mechanics
                                      </span>
                                      <span className="text-blue-300 font-mono font-bold text-xs">IFVG / Minor Swings</span>
                                  </div>
                                  <h4 className="text-lg font-bold font-display uppercase tracking-wide text-white mb-2">
                                      Internal Liquidity
                                  </h4>
                                  <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                                      Liquidity resting <strong>inside the current dealing range</strong>. Composed of Fair Value Gaps (FVG), Volume Imbalances, and minor intermediate swing points.
                                  </p>

                                  {/* SVG Illustration: Internal Liquidity */}
                                  <div className="bg-black/60 rounded-lg p-3 border border-white/5 mb-4">
                                      <svg viewBox="0 0 480 220" className="w-full h-auto select-none font-sans">
                                          {/* Dealing Range Boundaries */}
                                          <line x1="20" y1="45" x2="460" y2="45" stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2" />
                                          <text x="30" y="35" fill="#9ca3af" fontSize="8" fontFamily="monospace">External Range High</text>

                                          <line x1="20" y1="180" x2="460" y2="180" stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2" />
                                          <text x="30" y="195" fill="#9ca3af" fontSize="8" fontFamily="monospace">External Range Low</text>

                                          {/* Header Tag Top-Right */}
                                          <rect x="300" y="16" width="155" height="20" rx="3" fill="#0c1f38" stroke="#3b82f6" strokeWidth="1" />
                                          <text x="377" y="30" fill="#60a5fa" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">INTERNAL FVG / IMBALANCE</text>

                                          {/* Internal FVG Shaded Zone */}
                                          <rect x="150" y="85" width="180" height="35" fill="#3b82f6" fillOpacity="0.15" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3,3" rx="3" />
                                          <text x="315" y="105" fill="#60a5fa" fontSize="8" fontFamily="monospace" fontStyle="italic" textAnchor="end">Fair Value Gap</text>

                                          {/* Mitigation Tag Above */}
                                          <rect x="195" y="52" width="110" height="20" rx="3" fill="#0a0a0a" stroke="#3b82f6" strokeWidth="1" />
                                          <text x="250" y="66" fill="#93c5fd" fontSize="8.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Mitigation Tap ↑</text>
                                          <line x1="250" y1="72" x2="250" y2="88" stroke="#93c5fd" strokeWidth="1" strokeDasharray="2,2" />

                                          {/* Delivery Path: External High -> Impulse Down -> Retrace to Internal FVG -> External Expansion Down */}
                                          <path d="M 70,55 L 160,165 L 250,95 L 340,185 L 390,155" fill="none" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                          
                                          {/* Points */}
                                          <circle cx="70" cy="55" r="4" fill="#9ca3af" />
                                          <circle cx="250" cy="95" r="4.5" fill="#3b82f6" />
                                          <circle cx="340" cy="185" r="4.5" fill="#ef4444" />
                                          <text x="340" y="202" fill="#f87171" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">External SSL Taken</text>
                                      </svg>
                                  </div>

                                  <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                                      <RefreshCw className="w-4 h-4 inline mr-1 text-brandGold" /> <strong>Delivery Law:</strong> After sweeping external liquidity, price returns inward to rebalance <strong>internal liquidity (FVGs)</strong> before the next major expansion.
                                  </p>
                              </div>
                          </div>

                          {/* External Liquidity */}
                          <div className="bg-black/50 border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-brandGold/30 transition-all duration-300">
                              <div>
                                  <div className="flex items-center justify-between mb-3">
                                      <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-blue-500/10 text-blue-300 font-bold border border-blue-500/20">
                                          Range Mechanics
                                      </span>
                                      <span className="text-blue-300 font-mono font-bold text-xs">Major Highs / Lows</span>
                                  </div>
                                  <h4 className="text-lg font-bold font-display uppercase tracking-wide text-white mb-2">
                                      External Liquidity
                                  </h4>
                                  <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                                      Liquidity resting at the <strong>outermost perimeter of the dealing range</strong> (major swing highs, major swing lows, weekly/monthly extremes).
                                  </p>

                                  {/* SVG Illustration: External Liquidity */}
                                  <div className="bg-black/60 rounded-lg p-3 border border-white/5 mb-4">
                                      <svg viewBox="0 0 480 220" className="w-full h-auto select-none font-sans">
                                          {/* External BSL & SSL lines */}
                                          <line x1="30" y1="55" x2="385" y2="55" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4,4" />
                                          <line x1="30" y1="165" x2="385" y2="165" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4,4" />

                                          {/* Swing path inside range breaking out to external */}
                                          <path d="M 50,110 L 95,75 L 140,135 L 190,95 L 250,145 L 340,35" fill="none" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                          
                                          {/* External Raid Marker */}
                                          <circle cx="340" cy="35" r="5" fill="#22c55e" />
                                          <text x="340" y="24" fill="#4ade80" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">External Expansion ↑</text>

                                          {/* Right-Side Dedicated Level Axis Badges */}
                                          <rect x="385" y="43" width="85" height="24" rx="3" fill="#0d1f14" stroke="#22c55e" strokeWidth="1" />
                                          <text x="427" y="59" fill="#4ade80" fontSize="8.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Ext BSL ($)</text>

                                          <rect x="385" y="153" width="85" height="24" rx="3" fill="#1f0d0d" stroke="#ef4444" strokeWidth="1" />
                                          <text x="427" y="169" fill="#f87171" fontSize="8.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Ext SSL ($)</text>
                                      </svg>
                                  </div>

                                  <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                                      <RefreshCw className="w-4 h-4 inline mr-1 text-brandGold" /> <strong>The Cycle:</strong> Price oscillates endlessly in a continuous rhythm: <em>Internal Liquidity → External Liquidity → Internal Liquidity</em>.
                                  </p>
                              </div>
                          </div>

                      </div>

                      {/* TOPIC 13 & 14: LIQUIDITY SWEEP VS LIQUIDITY RUN */}
                      <div className="grid lg:grid-cols-2 gap-6">

                          {/* Liquidity Sweep */}
                          <div className="bg-black/50 border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300">
                              <div>
                                  <div className="flex items-center justify-between mb-3">
                                      <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 font-bold border border-emerald-500/20">
                                          Reaction Type 1
                                      </span>
                                      <span className="text-emerald-300 font-mono font-bold text-xs">Purge & Reversal</span>
                                  </div>
                                  <h4 className="text-lg font-bold font-display uppercase tracking-wide text-white mb-2">
                                      Liquidity Sweep (Raid / Turtle Soup)
                                  </h4>
                                  <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                                      Price <strong>wicks or briefly penetrates beyond a liquidity level</strong> only to immediately reject and close back inside. Shows orders were absorbed by smart money for an instant reversal.
                                  </p>

                                  {/* SVG Illustration: Sweep */}
                                  <div className="bg-black/60 rounded-lg p-3 border border-white/5 mb-4">
                                      <svg viewBox="0 0 480 220" className="w-full h-auto select-none font-sans">
                                          {/* Key Level */}
                                          <line x1="30" y1="90" x2="385" y2="90" stroke="#facc15" strokeWidth="1.5" strokeDasharray="4,4" />

                                          {/* Right Axis Tag */}
                                          <rect x="385" y="78" width="85" height="24" rx="3" fill="#1f1a05" stroke="#facc15" strokeWidth="1" />
                                          <text x="427" y="94" fill="#fde047" fontSize="8.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Key Pool</text>

                                          {/* Candles */}
                                          {/* Candle 1 (Bullish approach) */}
                                          <line x1="130" y1="95" x2="130" y2="155" stroke="#22c55e" strokeWidth="2" />
                                          <rect x="119" y="105" width="22" height="40" fill="#22c55e" rx="1" />

                                          {/* Candle 2 (THE SWEEP CANDLE - Long upper wick) */}
                                          <line x1="210" y1="40" x2="210" y2="140" stroke="#ef4444" strokeWidth="2" />
                                          <rect x="199" y="95" width="22" height="35" fill="#ef4444" rx="1" />
                                          <circle cx="210" cy="40" r="4" fill="#ef4444" />
                                          <text x="210" y="28" fill="#f87171" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Wick Raids Stops ↑</text>
                                          <text x="210" y="155" fill="#9ca3af" fontSize="8" fontFamily="monospace" textAnchor="middle">Body Closes BELOW</text>

                                          {/* Candle 3 (Bearish Displacement) */}
                                          <line x1="290" y1="105" x2="290" y2="180" stroke="#ef4444" strokeWidth="2" />
                                          <rect x="279" y="115" width="22" height="55" fill="#ef4444" rx="1" />
                                          
                                          {/* Reversal Arrow */}
                                          <path d="M 315,135 L 345,155" stroke="#ef4444" strokeWidth="2" strokeDasharray="3,2" />
                                          <text x="345" y="175" fill="#ef4444" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Reversal</text>
                                      </svg>
                                  </div>

                                  <ul className="space-y-1 text-[11px] text-gray-400 font-light list-disc list-inside">
                                      <li><strong className="text-gray-200">Signature:</strong> Candle body fails to close beyond the level; long wick purges stops.</li>
                                      <li><strong className="text-gray-200">Execution:</strong> Look for Market Structure Shift (MSS) on lower timeframe to enter the reversal.</li>
                                  </ul>
                              </div>
                          </div>

                          {/* Liquidity Run */}
                          <div className="bg-black/50 border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300">
                              <div>
                                  <div className="flex items-center justify-between mb-3">
                                      <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 font-bold border border-emerald-500/20">
                                          Reaction Type 2
                                      </span>
                                      <span className="text-emerald-300 font-mono font-bold text-xs">Expansion & Continuation</span>
                                  </div>
                                  <h4 className="text-lg font-bold font-display uppercase tracking-wide text-white mb-2">
                                      Liquidity Run (Displacement / Trend)
                                  </h4>
                                  <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                                      Price <strong>blasts straight through the liquidity pool with heavy displacement bodies</strong> and closes decisively beyond. Signals trend continuation toward the next major pool.
                                  </p>

                                  {/* SVG Illustration: Run */}
                                  <div className="bg-black/60 rounded-lg p-3 border border-white/5 mb-4">
                                      <svg viewBox="0 0 480 220" className="w-full h-auto select-none font-sans">
                                          {/* Key Level */}
                                          <line x1="30" y1="120" x2="385" y2="120" stroke="#facc15" strokeWidth="1.5" strokeDasharray="4,4" />

                                          {/* Right Axis Tag */}
                                          <rect x="385" y="108" width="85" height="24" rx="3" fill="#1f1a05" stroke="#facc15" strokeWidth="1" />
                                          <text x="427" y="124" fill="#fde047" fontSize="8.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Key Pool</text>

                                          {/* Candle 1 (Bullish approach) */}
                                          <line x1="130" y1="125" x2="130" y2="180" stroke="#22c55e" strokeWidth="2" />
                                          <rect x="119" y="135" width="22" height="35" fill="#22c55e" rx="1" />

                                          {/* Candle 2 (THE RUN CANDLE - Massive displacement body) */}
                                          <line x1="210" y1="55" x2="210" y2="155" stroke="#22c55e" strokeWidth="2" />
                                          <rect x="199" y="65" width="22" height="80" fill="#22c55e" rx="1" />
                                          <text x="210" y="38" fill="#4ade80" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Full Body Close ABOVE ↑</text>

                                          {/* Candle 3 (Continuation Candle) */}
                                          <line x1="290" y1="25" x2="290" y2="95" stroke="#22c55e" strokeWidth="2" />
                                          <rect x="279" y="35" width="22" height="50" fill="#22c55e" rx="1" />
                                          
                                          {/* Expansion Arrow */}
                                          <path d="M 315,55 L 345,35" stroke="#4ade80" strokeWidth="2" strokeDasharray="3,2" />
                                          <text x="350" y="40" fill="#4ade80" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Expansion</text>
                                      </svg>
                                  </div>

                                  <ul className="space-y-1 text-[11px] text-gray-400 font-light list-disc list-inside">
                                      <li><strong className="text-gray-200">Signature:</strong> Large candle bodies close firmly beyond the pool with minimal wick rejection.</li>
                                      <li><strong className="text-gray-200">Execution:</strong> Do NOT fade the move; wait for a pullback into the newly created FVG to join the trend.</li>
                                  </ul>
                              </div>
                          </div>

                      </div>

                  </div>

                  {/* MASTER SCHEMATIC OVERVIEW */}
                  <div className="space-y-4 mt-12 pt-8 border-t border-white/10">
                      <h4 className="text-brandGold font-bold uppercase tracking-wider text-xs font-display text-center">
                          Comprehensive Market Liquidity Architecture — Chart Master Schematic
                      </h4>
                      <div className="bg-black/40 border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center min-h-[420px] relative">
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
                              
                              {/* Boundaries */}
                              <line x1="50" y1="60" x2="750" y2="60" stroke="#facc15" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.35" />
                              <text x="60" y="50" fill="#facc15" fontSize="9" fontFamily="monospace" opacity="0.85">PREVIOUS DAILY HIGH (PDH) / PWH</text>
                              
                              <line x1="50" y1="390" x2="750" y2="390" stroke="#facc15" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.35" />
                              <text x="740" y="405" fill="#facc15" fontSize="9" fontFamily="monospace" opacity="0.85" textAnchor="end">PREVIOUS DAILY LOW (PDL) / PWL</text>
                              
                              {/* Trendline Liquidity */}
                              <line x1="150" y1="350" x2="460" y2="298" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.4" />
                              <text x="220" y="323" fill="#3b82f6" fontSize="9" fontFamily="monospace" opacity="0.6" transform="rotate(-9.5 220 323)">Retail Trendline</text>
                              
                              <text x="320" y="365" fill="#ef4444" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold" transform="rotate(-9.5 320 365)">SSL / SELL STOPS (Trendline Liquidity)</text>
                              
                              {/* Equal Highs */}
                              <line x1="430" y1="140" x2="630" y2="140" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.5" />
                              <text x="530" y="125" fill="#22c55e" fontSize="9" fontFamily="monospace" textAnchor="middle" opacity="0.9">Equal Highs (EQH)</text>
                              <text x="530" y="110" fill="#22c55e" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">BSL / BUY STOPS ($ $ $)</text>
                              
                              {/* Equal Lows */}
                              <line x1="500" y1="310" x2="680" y2="310" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.5" />
                              <text x="590" y="335" fill="#ef4444" fontSize="9" fontFamily="monospace" textAnchor="middle" opacity="0.9">Equal Lows (EQL)</text>
                              <text x="590" y="350" fill="#ef4444" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SSL / SELL STOPS ($ $ $)</text>
                              
                              {/* Price Delivery Path */}
                              <path d="M 50,300 L 100,380 L 150,210 L 200,333 L 260,180 L 290,90 L 320,313 L 380,220 L 440,293 L 480,140 L 530,310 L 580,140 L 630,310 L 700,50" fill="none" stroke="#facc15" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                              
                              {/* Points */}
                              <circle cx="100" cy="380" r="5" fill="#ef4444" />
                              <text x="100" y="405" fill="#ef4444" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SSL (Swing Low)</text>
                              
                              <circle cx="290" cy="90" r="5" fill="#22c55e" />
                              <text x="290" y="75" fill="#22c55e" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">BSL (Swing High)</text>
                              
                              <circle cx="480" cy="140" r="4" fill="#22c55e" />
                              <circle cx="580" cy="140" r="4" fill="#22c55e" />
                              <circle cx="530" cy="310" r="4" fill="#ef4444" />
                              <circle cx="630" cy="310" r="4" fill="#ef4444" />
                              
                              <circle cx="700" cy="50" r="6" fill="#22c55e" />
                              <path d="M 700,50 L 720,30" stroke="#22c55e" strokeWidth="2" strokeDasharray="2,2" />
                              <text x="725" y="25" fill="#22c55e" fontSize="9" fontFamily="monospace" fontWeight="bold">Liquidity Run Expansion</text>
                          </svg>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Section 4.3: Liquidity Mechanics & Slippage */}
      <section id="topic-4-3" className="min-h-screen flex flex-col items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 4.3</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Liquidity Mechanics & Slippage</h2>
              </div>

              <div className="space-y-8">
                  {/* Apple Market Analogy Widget */}
                  <div className="glass-panel p-6 sm:p-8 rounded-xl border border-white/10 relative overflow-hidden bg-black/40">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-brandGold/5 rounded-full blur-2xl"></div>
                      
                      <h4 className="text-lg font-bold font-display uppercase tracking-wider text-brandGold mb-2 flex items-center gap-2">
                          <ShoppingBag className="w-5 h-5 inline mr-2 text-brandGold" /> The Apple Market Analogy
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
                                  <span className="block font-bold text-brandGold font-display mb-1">1. BAIT</span>
                                  <span>Retail buys and places stops (sell orders) below support.</span>
                              </div>
                              <div className="bg-black/20 p-3 rounded border border-white/5">
                                  <span className="block font-bold text-brandGold font-display mb-1">2. PUSH</span>
                                  <span>Banks push price below support to trigger stop-losses.</span>
                              </div>
                              <div className="bg-black/20 p-3 rounded border border-white/5">
                                  <span className="block font-bold text-brandGold font-display mb-1">3. TRAP</span>
                                  <span>Retail stop-losses trigger automatically as sell orders.</span>
                              </div>
                              <div className="bg-black/20 p-3 rounded border border-white/5">
                                  <span className="block font-bold text-brandGold font-display mb-1">4. FEAST</span>
                                  <span>Banks buy up the flood of retail sells at a cheap price.</span>
                              </div>
                              <div className="bg-black/20 p-3 rounded border border-white/5">
                                  <span className="block font-bold text-brandGold font-display mb-1">5. REVERSAL</span>
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
                                  Orders executed immediately at the best available market price. These cross the bid-ask spread and <strong>take liquidity</strong> out of the order book. Large market orders suffer from <strong>slippage</strong> as they eat through the order book levels.
                              </div>
                              <div className="bg-black/30 p-4 rounded border border-white/5">
                                  <span className="text-brandGold font-bold block mb-1">Limit Orders (Liquidity Makers)</span>
                                  Orders set to execute only at a specific price or better. These rest in the order book waiting to be filled, and <strong>add liquidity</strong> to the market. Institutions use limit orders to fill blocks at precise price points.
                              </div>
                          </div>
                      </div>

                      {/* The Shift */}
                      <div className="bg-brandGold/10 p-4 rounded border border-brandGold/40 text-xs font-light mt-6">
                          <p className="text-white font-bold font-display mb-1 flex items-center gap-1.5 text-brandGold">
                              <Lightbulb className="w-4 h-4 inline mr-1.5 text-brandGold" /> Student Mindset Shift:
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
                          <BarChart2 className="w-5 h-5 inline mr-2 text-brandGold" /> Order Book & Slippage Simulator
                      </h4>
                      <p className="text-gray-400 text-xs font-light mb-6">
                          Simulate how different order sizes consume market depth and affect average entry prices.
                      </p>

                      <OrderSimulator />
                  </div>
              </div>
          </div>
      </section>

      {/* Section 4.4: Displacement & The Complete Execution Flow */}
      <section id="topic-4-4" className="min-h-screen flex flex-col items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 4.4</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Displacement: Institutional Footprint</h2>
                  <p className="text-textMuted text-sm font-light mt-2">
                      After liquidity, learn displacement. Identifying true institutional aggression versus empty volatility.
                  </p>
              </div>

              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl space-y-10 bg-black/40 border border-white/5">
                  <div className="space-y-4">
                      <p className="text-gray-400 font-light text-sm uppercase tracking-wider mb-2">What is Displacement?</p>
                      <p className="text-sm text-gray-300 font-light leading-relaxed font-sans">
                          A <strong>Displacement</strong> is a strong, aggressive price movement that occurs when institutional algorithms enter the market with massive volume. It represents urgent, one-sided repricing that leaves no doubt about institutional direction.
                      </p>
                  </div>

                  {/* 5 Key Characteristics */}
                  <div className="space-y-4">
                      <h4 className="text-brandGold font-bold uppercase tracking-wider text-xs font-display">
                          5 Visual Signatures of True Displacement:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          <div className="bg-black/30 p-5 rounded-lg border border-white/5 space-y-2">
                              <Layers className="w-6 h-6 text-brandGold" />
                              <h5 className="text-white font-semibold text-xs">1. Large-Bodied Candles</h5>
                              <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                                  Candles where 80%+ of the total range consists of the real candle body rather than long indecisive wicks.
                              </p>
                          </div>

                          <div className="bg-black/30 p-5 rounded-lg border border-white/5 space-y-2">
                              <Zap className="w-6 h-6 text-sky-400" />
                              <h5 className="text-white font-semibold text-xs">2. Strong Directional Momentum</h5>
                              <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                                  Price expands rapidly across multiple price levels in consecutive energetic candles without hesitation.
                              </p>
                          </div>

                          <div className="bg-black/30 p-5 rounded-lg border border-white/5 space-y-2">
                              <Target className="w-6 h-6 text-emerald-400" />
                              <h5 className="text-white font-semibold text-xs">3. Small Opposing Wicks</h5>
                              <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                                  Minimal pushback from counter-trend traders, indicating complete institutional domination of the order book.
                              </p>
                          </div>

                          <div className="bg-black/30 p-5 rounded-lg border border-white/5 space-y-2">
                              <Hammer className="w-6 h-6 text-purple-400" />
                              <h5 className="text-white font-semibold text-xs">4. Breaking Market Structure</h5>
                              <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                                  Displacement candle bodies close decisively beyond previous swing highs/lows, causing a structural shift (MSS).
                              </p>
                          </div>

                          <div className="bg-black/30 p-5 rounded-lg border border-white/5 space-y-2 sm:col-span-2 lg:col-span-2">
                              <Sparkles className="w-6 h-6 text-amber-400" />
                              <h5 className="text-white font-semibold text-xs">5. Creating Imbalances / Fair Value Gaps (FVG)</h5>
                              <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                                  Because price moved so fast and one-sidedly, it leaves an unmitigated 3-candle Fair Value Gap behind. This gap serves as your future entry footprint.
                              </p>
                          </div>
                      </div>
                  </div>

                  {/* 6-Step Conceptual Pipeline Flow */}
                  <div className="border-t border-white/10 pt-8 space-y-6">
                      <div className="text-center md:text-left">
                          <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-brandGold/10 text-brandGold font-bold border border-brandGold/20">
                              The ICT Master Sequence
                          </span>
                          <h4 className="text-xl font-bold font-display uppercase tracking-wide text-white mt-2">
                              From Liquidity to High-Probability Entry
                          </h4>
                      </div>

                      {/* Step Cards Horizontal Flow */}
                      <div className="grid grid-cols-2 md:grid-cols-6 gap-3 text-center">
                          {/* Step 1 */}
                          <div className="bg-black/40 border border-white/5 p-4 rounded-xl relative overflow-hidden flex flex-col items-center justify-between">
                              <div className="w-7 h-7 rounded-full bg-brandGold/10 border border-brandGold/30 text-brandGold font-bold text-xs flex items-center justify-center mb-2">
                                  1
                              </div>
                              <span className="text-xs font-bold text-white uppercase font-display mb-1">Liquidity</span>
                              <span className="text-[10px] text-gray-400 font-light leading-tight">Engineered resting orders (BSL / SSL)</span>
                          </div>

                          {/* Step 2 */}
                          <div className="bg-black/40 border border-white/5 p-4 rounded-xl relative overflow-hidden flex flex-col items-center justify-between">
                              <div className="w-7 h-7 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-bold text-xs flex items-center justify-center mb-2">
                                  2
                              </div>
                              <span className="text-xs font-bold text-white uppercase font-display mb-1">Sweep</span>
                              <span className="text-[10px] text-gray-400 font-light leading-tight">Wick raid purges resting stops</span>
                          </div>

                          {/* Step 3 */}
                          <div className="bg-black/40 border border-brandGold/30 p-4 rounded-xl relative overflow-hidden flex flex-col items-center justify-between bg-brandGold/5">
                              <div className="w-7 h-7 rounded-full bg-brandGold border border-brandGold text-brandDark font-bold text-xs flex items-center justify-center mb-2">
                                  3
                              </div>
                              <span className="text-xs font-bold text-brandGold uppercase font-display mb-1">Displacement</span>
                              <span className="text-[10px] text-gray-300 font-light leading-tight">Aggressive candle creates FVG</span>
                          </div>

                          {/* Step 4 */}
                          <div className="bg-black/40 border border-white/5 p-4 rounded-xl relative overflow-hidden flex flex-col items-center justify-between">
                              <div className="w-7 h-7 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-bold text-xs flex items-center justify-center mb-2">
                                  4
                              </div>
                              <span className="text-xs font-bold text-white uppercase font-display mb-1">Structure Shift</span>
                              <span className="text-[10px] text-gray-400 font-light leading-tight">MSS confirms institutional bias</span>
                          </div>

                          {/* Step 5 */}
                          <div className="bg-black/40 border border-white/5 p-4 rounded-xl relative overflow-hidden flex flex-col items-center justify-between">
                              <div className="w-7 h-7 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 font-bold text-xs flex items-center justify-center mb-2">
                                  5
                              </div>
                              <span className="text-xs font-bold text-white uppercase font-display mb-1">Retracement</span>
                              <span className="text-[10px] text-gray-400 font-light leading-tight">Calm pullback into the FVG</span>
                          </div>

                          {/* Step 6 */}
                          <div className="bg-black/40 border border-green-500/30 p-4 rounded-xl relative overflow-hidden flex flex-col items-center justify-between bg-green-500/5">
                              <div className="w-7 h-7 rounded-full bg-green-500 border border-green-500 text-brandDark font-bold text-xs flex items-center justify-center mb-2">
                                  6
                              </div>
                              <span className="text-xs font-bold text-green-400 uppercase font-display mb-1">Entry</span>
                              <span className="text-[10px] text-gray-300 font-light leading-tight">Execution with tight invalidation</span>
                          </div>
                      </div>
                  </div>

                  {/* Comprehensive Schematic SVG */}
                  <div className="space-y-4 pt-6">
                      <h4 className="text-brandGold font-bold uppercase tracking-wider text-xs font-display text-center">
                          Displacement & Execution Sequence — Visual Breakdown
                      </h4>
                      <div className="bg-black/50 border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center min-h-[360px] relative">
                          <svg viewBox="0 0 760 320" className="w-full h-auto select-none font-sans">
                              {/* Background grid */}
                              <g stroke="rgba(255,255,255,0.03)" strokeWidth="1">
                                  <line x1="20" y1="50" x2="740" y2="50" />
                                  <line x1="20" y1="110" x2="740" y2="110" />
                                  <line x1="20" y1="170" x2="740" y2="170" />
                                  <line x1="20" y1="230" x2="740" y2="230" />
                                  <line x1="20" y1="280" x2="740" y2="280" />
                              </g>

                              {/* 1. Liquidity Pool Line */}
                              <line x1="40" y1="75" x2="260" y2="75" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4,4" />
                              <rect x="40" y="55" width="130" height="18" rx="2" fill="#1f0d0d" stroke="#ef4444" strokeWidth="0.8" />
                              <text x="105" y="67" fill="#f87171" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">1. Buy-Side Liquidity (BSL)</text>

                              {/* Prior Swing Structure */}
                              <path d="M 50,150 L 90,105 L 125,135 L 160,75 L 195,120" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <circle cx="160" cy="75" r="4" fill="#ef4444" />

                              {/* 2. Sweep Candle */}
                              <line x1="230" y1="45" x2="230" y2="120" stroke="#ef4444" strokeWidth="2" />
                              <rect x="221" y="70" width="18" height="35" fill="#ef4444" rx="1" />
                              <circle cx="230" cy="45" r="4" fill="#f87171" />
                              <rect x="175" y="24" width="110" height="18" rx="2" fill="#0a0a0a" stroke="#f87171" strokeWidth="0.8" />
                              <text x="230" y="36" fill="#f87171" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">2. Sweep / Purge ↑</text>

                              {/* 3. Displacement Energetic Red Candles */}
                              <line x1="270" y1="85" x2="270" y2="185" stroke="#ef4444" strokeWidth="2" />
                              <rect x="259" y="95" width="22" height="80" fill="#ef4444" rx="1" />

                              <line x1="310" y1="165" x2="310" y2="245" stroke="#ef4444" strokeWidth="2" />
                              <rect x="299" y="175" width="22" height="60" fill="#ef4444" rx="1" />

                              {/* Displacement Bracket Callout */}
                              <rect x="245" y="255" width="130" height="20" rx="3" fill="#1f1a05" stroke="#facc15" strokeWidth="1" />
                              <text x="310" y="268" fill="#fde047" fontSize="8.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">3. Displacement</text>

                              {/* 4. Market Structure Shift (MSS) Line */}
                              <line x1="195" y1="120" x2="400" y2="120" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3,3" />
                              <rect x="330" y="110" width="90" height="18" rx="2" fill="#0c1f38" stroke="#3b82f6" strokeWidth="0.8" />
                              <text x="375" y="122" fill="#60a5fa" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">4. MSS Broken ↓</text>

                              {/* 5. Fair Value Gap (FVG) Zone */}
                              <rect x="281" y="130" width="180" height="45" fill="#3b82f6" fillOpacity="0.15" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3,3" rx="3" />
                              <text x="450" y="145" fill="#60a5fa" fontSize="8" fontFamily="monospace" fontStyle="italic" textAnchor="end">Fair Value Gap</text>

                              {/* Retracement Candles into FVG */}
                              <line x1="365" y1="210" x2="365" y2="165" stroke="#22c55e" strokeWidth="1.5" />
                              <rect x="357" y="175" width="16" height="30" fill="#22c55e" rx="1" />

                              <line x1="400" y1="180" x2="400" y2="135" stroke="#22c55e" strokeWidth="1.5" />
                              <rect x="392" y="145" width="16" height="25" fill="#22c55e" rx="1" />

                              {/* 5 & 6. Retracement & Entry Callout */}
                              <circle cx="400" cy="135" r="5" fill="#22c55e" />
                              <rect x="370" y="70" width="125" height="22" rx="3" fill="#0d1f14" stroke="#22c55e" strokeWidth="1" />
                              <text x="432" y="84" fill="#4ade80" fontSize="8.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">5 & 6. Entry in FVG</text>
                              <line x1="410" y1="92" x2="400" y2="130" stroke="#4ade80" strokeWidth="1.2" strokeDasharray="2,2" />

                              {/* Final Expansion Down */}
                              <line x1="445" y1="140" x2="445" y2="235" stroke="#ef4444" strokeWidth="2" />
                              <rect x="434" y="150" width="22" height="75" fill="#ef4444" rx="1" />

                              <line x1="490" y1="215" x2="490" y2="290" stroke="#ef4444" strokeWidth="2" />
                              <rect x="479" y="225" width="22" height="55" fill="#ef4444" rx="1" />

                              {/* Target Outcome */}
                              <path d="M 505,255 L 560,285" stroke="#ef4444" strokeWidth="2" strokeDasharray="3,2" />
                              <rect x="565" y="275" width="160" height="22" rx="3" fill="#1f0d0d" stroke="#ef4444" strokeWidth="1" />
                              <text x="645" y="289" fill="#f87171" fontSize="8.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Take Profit Expansion</text>
                          </svg>
                      </div>
                  </div>

                  {/* Pro Caution Warning */}
                  <div className="bg-amber-500/10 p-5 rounded-lg border border-amber-500/30 text-xs font-light text-gray-300 leading-relaxed">
                      <strong className="text-amber-400 font-semibold uppercase tracking-wider block mb-1 flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5 inline mr-2 text-amber-400" /> Crucial Rule: Context Over Size
                      </strong>
                      <p>
                          <strong>Don't treat every large candle as displacement.</strong> A large candle during a high-impact news release without a prior liquidity sweep is often just erratic spread widening. Genuine institutional displacement only has high probability when it follows a clear <strong>Liquidity Sweep</strong> and breaks market structure with an FVG.
                      </p>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}

