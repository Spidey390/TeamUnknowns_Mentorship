import React, { useState } from 'react';
import OrderSimulator from '../OrderSimulator';

export default function ModuleArchitecture() {
  const [sbSetup, setSbSetup] = useState('bullish');
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

          {/* Next Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <a href="#topic-5-3" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                  <span className="uppercase font-bold mb-1">Next Topic</span>
                  <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
              </a>
          </div>
      </section>

      {/* Section 5.3: Daily Bias & Silver Bullet Strategy */}
      <section id="topic-5-3" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 5.3</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Daily Bias & Silver Bullet</h2>
              </div>

              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl">
                  <p className="text-gray-400 font-light mb-8 text-sm uppercase tracking-wider">The 10:00 AM – 11:00 AM EST AM Session Trade Setup for Daily Consistency:</p>

                  {/* Setup Selector Tabs */}
                  <div className="flex gap-4 mb-8 justify-center md:justify-start">
                      <button
                          onClick={() => setSbSetup('bullish')}
                          className={sbSetup === 'bullish'
                              ? 'border-brandGold bg-brandGold/15 text-brandGold font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-xl border transition-all duration-300 flex items-center gap-2'
                              : 'border-white/5 bg-black/30 text-white/60 hover:text-white hover:bg-white/5 hover:border-white/10 text-xs uppercase tracking-widest px-6 py-3 rounded-xl border transition-all duration-300'
                          }
                      >
                          <span className="w-2 h-2 rounded-full bg-brandGold"></span> Bullish Silver Bullet
                      </button>
                      <button
                          onClick={() => setSbSetup('bearish')}
                          className={sbSetup === 'bearish'
                              ? 'border-red-500 bg-red-500/10 text-red-400 font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-xl border transition-all duration-300 flex items-center gap-2'
                              : 'border-white/5 bg-black/30 text-white/60 hover:text-white hover:bg-white/5 hover:border-white/10 text-xs uppercase tracking-widest px-6 py-3 rounded-xl border transition-all duration-300'
                          }
                      >
                          <span className="w-2 h-2 rounded-full bg-red-500"></span> Bearish Silver Bullet
                      </button>
                  </div>

                  <div className="grid lg:grid-cols-12 gap-8 items-start mb-8">
                      {/* Left: Step-by-Step Checklist */}
                      <div className="lg:col-span-6 space-y-4">
                          {sbSetup === 'bullish' ? (
                              <div className="space-y-4">
                                  <div className="bg-brandGold/5 p-4 rounded-lg border border-brandGold/20">
                                      <h4 className="text-white font-bold text-xs uppercase mb-1">1. Identify Bullish Daily Bias</h4>
                                      <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                                          Check high timeframes (Daily or 4-Hour). Ensure market structure is bullish and heading towards an institutional draw on liquidity (e.g. premium Fair Value Gap or old swing high).
                                      </p>
                                  </div>
                                  <div className="bg-black/20 p-4 rounded-lg border border-white/5">
                                      <h4 className="text-white font-bold text-xs uppercase mb-1">2. Wait for liquidity sweep (10:00 - 11:00 AM EST)</h4>
                                      <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                                          Watch the 5m/1m chart. The algorithm will spike downwards, sweeping beneath a recent key swing low to purge retail sell stops (SSL).
                                      </p>
                                  </div>
                                  <div className="bg-black/20 p-4 rounded-lg border border-white/5">
                                      <h4 className="text-white font-bold text-xs uppercase mb-1">3. Spot Market Structure Shift (MSS)</h4>
                                      <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                                          A displacement run up breaks the previous swing high, creating a Market Structure Shift. This confirms institutional sponsorship and aggressive buying.
                                      </p>
                                  </div>
                                  <div className="bg-black/20 p-4 rounded-lg border border-white/5">
                                      <h4 className="text-white font-bold text-xs uppercase mb-1">4. Place Entry at FVG Retest</h4>
                                      <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                                          Place a buy limit at the top boundary of the newly formed 5-minute Fair Value Gap (FVG). Stop loss goes below the displacement swing low. Target the opposing swing high (BSL), aiming for 1:2+ R:R.
                                      </p>
                                  </div>
                              </div>
                          ) : (
                              <div className="space-y-4">
                                  <div className="bg-red-500/5 p-4 rounded-lg border border-red-500/20">
                                      <h4 className="text-white font-bold text-xs uppercase mb-1">1. Identify Bearish Daily Bias</h4>
                                      <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                                          Check high timeframes (Daily or 4-Hour). Ensure market structure is bearish and drawing towards an institutional pool (e.g. discount Fair Value Gap or old swing low).
                                      </p>
                                  </div>
                                  <div className="bg-black/20 p-4 rounded-lg border border-white/5">
                                      <h4 className="text-white font-bold text-xs uppercase mb-1">2. Wait for liquidity sweep (10:00 - 11:00 AM EST)</h4>
                                      <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                                          Watch the 5m/1m chart. The algorithm will spike upwards, sweeping above a recent key swing high to trigger retail buy stops (BSL).
                                      </p>
                                  </div>
                                  <div className="bg-black/20 p-4 rounded-lg border border-white/5">
                                      <h4 className="text-white font-bold text-xs uppercase mb-1">3. Spot Market Structure Shift (MSS)</h4>
                                      <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                                          A displacement run down breaks the previous swing low, creating a Market Structure Shift. This confirms institutional sponsorship and aggressive selling.
                                      </p>
                                  </div>
                                  <div className="bg-black/20 p-4 rounded-lg border border-white/5">
                                      <h4 className="text-white font-bold text-xs uppercase mb-1">4. Place Entry at FVG Retest</h4>
                                      <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                                          Place a sell limit at the bottom boundary of the newly formed 5-minute Fair Value Gap (FVG). Stop loss goes above the displacement swing high. Target the opposing swing low (SSL), aiming for 1:2+ R:R.
                                      </p>
                                  </div>
                              </div>
                          )}
                      </div>

                      {/* Right: SVG Diagram */}
                      <div className="lg:col-span-6 bg-black/40 border border-white/10 p-6 rounded-xl flex flex-col items-center justify-center min-h-[360px] relative">
                          <div className="absolute top-4 left-4 text-xs font-bold text-gray-500 uppercase tracking-widest font-mono">Setup Schematic</div>

                          {sbSetup === 'bullish' ? (
                              <svg width="360" height="260" viewBox="0 0 360 260" className="w-full max-w-[360px] select-none">
                                  {/* Grid lines */}
                                  <line x1="20" y1="180" x2="340" y2="180" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="3,3" />
                                  <line x1="20" y1="80" x2="340" y2="80" stroke="rgba(234,179,8,0.2)" strokeWidth="1.5" strokeDasharray="4,4" />
                                  <text x="330" y="74" fill="#facc15" fontSize="8" fontFamily="monospace" textAnchor="end" opacity="0.8">Market Structure Shift (MSS) level</text>

                                  {/* Price Path */}
                                  <path
                                      d="M 30,100 L 70,130 L 100,80 L 130,190"
                                      fill="none"
                                      stroke="rgba(255, 255, 255, 0.4)"
                                      strokeWidth="2.5"
                                  />
                                  {/* Liquidity Sweep low line */}
                                  <line x1="100" y1="190" x2="160" y2="190" stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2" />
                                  <circle cx="130" cy="190" r="4" fill="#ef4444" />
                                  <text x="130" y="205" fill="#ef4444" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SSL SWEEP 🎯</text>

                                  {/* Displacement path (surging upwards past high at y=80) */}
                                  <path
                                      d="M 130,190 L 160,110 L 195,50"
                                      fill="none"
                                      stroke="#22c55e"
                                      strokeWidth="3.5"
                                  />
                                  <text x="175" y="85" fill="#22c55e" fontSize="8" fontFamily="monospace" fontWeight="bold">DISPLACEMENT</text>

                                  {/* FVG Highlighted Rectangle */}
                                  <rect
                                      x="165"
                                      y="90"
                                      width="90"
                                      height="45"
                                      fill="rgba(234, 179, 8, 0.15)"
                                      stroke="rgba(234, 179, 8, 0.4)"
                                      strokeWidth="1"
                                      rx="2"
                                  />
                                  <text x="210" y="115" fill="#facc15" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">5m FVG (Buy Zone)</text>

                                  {/* Pullback retest entry & final expansion */}
                                  <path
                                      d="M 195,50 L 225,110"
                                      fill="none"
                                      stroke="rgba(255, 255, 255, 0.5)"
                                      strokeWidth="2"
                                  />
                                  <circle cx="225" cy="110" r="4.5" fill="#facc15" />
                                  <text x="235" y="125" fill="#facc15" fontSize="8" fontFamily="monospace" fontWeight="bold">ENTRY LIMIT</text>

                                  <path
                                      d="M 225,110 L 260,70 L 310,30"
                                      fill="none"
                                      stroke="#22c55e"
                                      strokeWidth="3"
                                  />
                                  <circle cx="310" cy="30" r="4" fill="#22c55e" />
                                  <text x="310" y="20" fill="#22c55e" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">TARGET BSL (TP) 🚀</text>

                                  {/* Stop Loss pointer */}
                                  <line x1="130" y1="190" x2="200" y2="230" stroke="rgba(239, 68, 68, 0.3)" strokeWidth="1" strokeDasharray="2,2" />
                                  <text x="205" y="233" fill="#ef4444" fontSize="8" fontFamily="monospace">STOP LOSS (Invalidation)</text>
                              </svg>
                          ) : (
                              <svg width="360" height="260" viewBox="0 0 360 260" className="w-full max-w-[360px] select-none">
                                  {/* Grid lines */}
                                  <line x1="20" y1="80" x2="340" y2="80" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="3,3" />
                                  <line x1="20" y1="160" x2="340" y2="160" stroke="rgba(239,68,68,0.2)" strokeWidth="1.5" strokeDasharray="4,4" />
                                  <text x="330" y="154" fill="#ef4444" fontSize="8" fontFamily="monospace" textAnchor="end" opacity="0.8">Market Structure Shift (MSS) level</text>

                                  {/* Price Path */}
                                  <path
                                      d="M 30,160 L 70,130 L 100,180 L 130,70"
                                      fill="none"
                                      stroke="rgba(255, 255, 255, 0.4)"
                                      strokeWidth="2.5"
                                  />
                                  {/* Liquidity Sweep high line */}
                                  <line x1="100" y1="70" x2="160" y2="70" stroke="#22c55e" strokeWidth="1" strokeDasharray="2,2" />
                                  <circle cx="130" cy="70" r="4" fill="#22c55e" />
                                  <text x="130" y="55" fill="#22c55e" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">BSL SWEEP 🎯</text>

                                  {/* Displacement path (plunging downwards past low at y=160) */}
                                  <path
                                      d="M 130,70 L 160,150 L 195,210"
                                      fill="none"
                                      stroke="#ef4444"
                                      strokeWidth="3.5"
                                  />
                                  <text x="175" y="175" fill="#ef4444" fontSize="8" fontFamily="monospace" fontWeight="bold">DISPLACEMENT</text>

                                  {/* FVG Highlighted Rectangle */}
                                  <rect
                                      x="165"
                                      y="110"
                                      width="90"
                                      height="45"
                                      fill="rgba(234, 179, 8, 0.15)"
                                      stroke="rgba(234, 179, 8, 0.4)"
                                      strokeWidth="1"
                                      rx="2"
                                  />
                                  <text x="210" y="135" fill="#facc15" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">5m FVG (Sell Zone)</text>

                                  {/* Pullback retest entry & final expansion */}
                                  <path
                                      d="M 195,210 L 225,130"
                                      fill="none"
                                      stroke="rgba(255, 255, 255, 0.5)"
                                      strokeWidth="2"
                                  />
                                  <circle cx="225" cy="130" r="4.5" fill="#facc15" />
                                  <text x="235" y="125" fill="#facc15" fontSize="8" fontFamily="monospace" fontWeight="bold">ENTRY LIMIT</text>

                                  <path
                                      d="M 225,130 L 260,170 L 310,210"
                                      fill="none"
                                      stroke="#ef4444"
                                      strokeWidth="3"
                                  />
                                  <circle cx="310" cy="210" r="4" fill="#ef4444" />
                                  <text x="310" y="225" fill="#ef4444" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">TARGET SSL (TP) 🚀</text>

                                  {/* Stop Loss pointer */}
                                  <line x1="130" y1="70" x2="200" y2="30" stroke="rgba(34, 197, 94, 0.3)" strokeWidth="1" strokeDasharray="2,2" />
                                  <text x="205" y="33" fill="#22c55e" fontSize="8" fontFamily="monospace">STOP LOSS (Invalidation)</text>
                              </svg>
                          )}
                      </div>
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
