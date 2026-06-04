import React from 'react';
import OrderSimulator from '../OrderSimulator';

export default function ModuleArchitecture() {
  return (
    <>
      {/* Module 5 Hero Section (Market Architecture) */}
      <section id="module5" className="min-h-screen flex flex-col justify-center items-center relative py-24 px-6">
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brandGold text-brandGold font-bold tracking-widest text-xs uppercase mb-10 bg-brandGold/5">
                  <span className="w-2 h-2 rounded-full bg-brandGold animate-pulse"></span> MODULE 5
              </div>
              <h1 className="text-6xl md:text-8xl font-black font-display leading-none mb-6 tracking-tight uppercase">
                  Market <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brandGold to-yellow-300">Architecture</span>
              </h1>
              <p className="text-textMuted text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide mt-8">
                  Forex & ICT Concepts — Mentorship Program. Master the internal mechanics of order flow, institutional liquidity sweeps, order books, and slippage.
              </p>
          </div>
          {/* Next Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <a href="#topic-5-1" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                  <span className="uppercase font-bold mb-1">Next Topic</span>
                  <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
              </a>
          </div>
      </section>

      {/* Section 5.1: Trader Tiers & Market Impact */}
      <section id="topic-5-1" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 5.1</div>
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
              <div className="space-y-6 mb-12">
                  {/* Summary Callout */}
                  <div className="bg-brandGold/5 p-5 rounded-lg border border-brandGold/20 flex items-start gap-4 text-xs font-light text-gray-300">
                      <span className="text-lg mt-0.5">💡</span>
                      <div>
                          <p className="font-bold text-white uppercase tracking-wider mb-1">Institutional Mechanics & Liquidity Sweeps</p>
                          <p className="leading-relaxed">
                              Because <strong className="text-white">Banks & Institutions</strong> trade in massive scales of <strong className="text-brandGold">1,000 to 10,000+ standard lots</strong> ($100M to $1B+ in contract value), they cannot enter the market instantly without causing massive price slippage. To get filled, their algorithms must seek out massive pools of counter-party liquidity (stop losses of retail/professional traders). This is why key highs/lows are "swept" before a true move begins.
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
              <a href="#topic-5-2" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                  <span className="uppercase font-bold mb-1">Next Topic</span>
                  <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
              </a>
          </div>
      </section>

      {/* Section 5.2: Liquidity Mechanics & Slippage */}
      <section id="topic-5-2" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 5.2</div>
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

          {/* Back to Top Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <a href="#module1" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                  <span className="uppercase font-bold mb-1">Back to Top</span>
                  <svg className="w-5 h-5 text-brandGold animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                  </svg>
              </a>
          </div>
      </section>
    </>
  );
}
