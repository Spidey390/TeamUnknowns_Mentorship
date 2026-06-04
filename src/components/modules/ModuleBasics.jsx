import React from 'react';
import TraderQuiz from '../TraderQuiz';
import PipCalculator from '../PipCalculator';
import LotVisualizer from '../LotVisualizer';
import ProfitCalculator from '../ProfitCalculator';
import SpreadVisualizer from '../SpreadVisualizer';
import LeverageMarginVisualizer from '../LeverageMarginVisualizer';
import BrokerVisualizer from '../BrokerVisualizer';
import RevisionVisualizer from '../RevisionVisualizer';

export default function ModuleBasics() {
  return (
    <>
      {/* Hero Section */}
      <section id="module1" className="min-h-screen flex flex-col justify-center items-center relative py-24 px-6">
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brandGold text-brandGold font-bold tracking-widest text-xs uppercase mb-10 bg-brandGold/5">
                  <span className="w-2 h-2 rounded-full bg-brandGold animate-pulse"></span> MODULE 1
              </div>
              <h1 className="text-6xl md:text-8xl font-black font-display leading-none mb-6 tracking-tight uppercase">
                  What is <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brandGold to-yellow-300">Trading?</span>
              </h1>
              <p className="text-textMuted text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide mt-8">
                  Forex & ICT Concepts — Mentorship Program by Team Unknowns. The basics of the financial markets.
              </p>
          </div>
          {/* Next Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <a href="#topic-1-1" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                  <span className="uppercase font-bold mb-1">Next Topic</span>
                  <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
              </a>
          </div>
      </section>

      {/* 1.1 What is Trading? */}
      <section id="topic-1-1" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="glass-panel w-full max-w-5xl p-8 sm:p-10 md:p-14 rounded-xl border-l-4 border-l-brandGold relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-brandGold opacity-5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <div className="flex items-start gap-6 mb-8">
                  <div className="text-5xl font-black font-display text-brandGold/30">1.1</div>
                  <h2 className="text-3xl font-bold font-display uppercase tracking-wide mt-2">What is Trading?</h2>
              </div>
              <p className="text-textMuted text-lg leading-relaxed mb-10 font-light">
                  Trading is the act of buying and selling financial instruments (currencies, stocks, commodities) to make a profit from price movement.
              </p>
              <div className="bg-black/50 p-6 rounded-lg border border-brandGold/20 relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-brandGold"></div>
                  <h3 className="text-brandGold font-bold uppercase tracking-wider text-sm mb-3">Think of it like this:</h3>
                  <p className="text-gray-300 font-light leading-relaxed">
                      You buy rice for <span className="text-white font-bold border-b border-brandGold">₹40/kg</span> and sell it for <span className="text-white font-bold border-b border-brandGold">₹50/kg</span> — that's trading logic.
                  </p>
              </div>
          </div>
          {/* Next Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <a href="#topic-1-2" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                  <span className="uppercase font-bold mb-1">Next Topic</span>
                  <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
              </a>
          </div>
      </section>

      {/* 1.2 What is Forex? */}
      <section id="topic-1-2" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="glass-panel w-full max-w-5xl p-8 sm:p-10 md:p-14 rounded-xl border-r-4 border-r-brandGold relative overflow-hidden group">
               <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-brandGold opacity-5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <div className="flex items-start gap-6 mb-8">
                  <div className="text-5xl font-black font-display text-brandGold/30">1.2</div>
                  <h2 className="text-3xl font-bold font-display uppercase tracking-wide mt-2">What is Forex?</h2>
              </div>
              <p className="text-brandGold font-bold tracking-widest uppercase text-sm mb-6 border-b border-white/10 pb-4">
                  Forex = Foreign Exchange Market
              </p>
              <ul className="space-y-5 text-gray-300 font-light mb-8">
                  <li className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-brandGold mt-2.5 flex-shrink-0"></div>
                      <span>The market where currencies are bought and sold.</span>
                  </li>
                  <li className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-brandGold mt-2.5 flex-shrink-0"></div>
                      <span>Largest financial market in the world — <strong className="text-white font-semibold border-b border-brandGold/50">$7.5 Trillion/day</strong>.</span>
                  </li>
                  <li className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-brandGold mt-2.5 flex-shrink-0"></div>
                      <span>Runs 24 hours, 5 days a week (Mon–Fri).</span>
                  </li>
                  <li className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-brandGold mt-2.5 flex-shrink-0"></div>
                      <span>No central exchange — it's decentralized (over-the-counter).</span>
                  </li>
              </ul>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-brandGold/5 p-5 rounded border border-brandGold/20">
                      <span className="text-brandGold font-bold uppercase text-xs tracking-widest block mb-2">Example</span> 
                      <span className="text-gray-300 font-light text-sm">USD/INR = <span className="text-white font-bold">83.50</span> <br />→ You're buying 1 US Dollar for 83.50 Indian Rupees.</span>
                  </div>
                  <div className="bg-black/50 p-5 rounded border border-white/10">
                      <span className="text-brandGold font-bold uppercase text-xs tracking-widest block mb-2">Market Session Hours (IST)</span> 
                      <span className="text-gray-300 font-light text-sm block leading-relaxed">
                          🟢 <strong className="text-white">Opens:</strong> Monday at 3:30 AM IST<br />
                          🔴 <strong className="text-white">Closes:</strong> Saturday at 3:30 AM IST<br />
                          <span className="text-xs text-gray-500 block mt-2">💡 Runs 24 hours a day, 5 days a week across major global sessions (Sydney, Tokyo, London, New York).</span>
                      </span>
                  </div>
              </div>
          </div>
          {/* Next Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <a href="#pairs" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                  <span className="uppercase font-bold mb-1">Next Topic</span>
                  <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
              </a>
          </div>
      </section>

      {/* 1.3 Currency Pairs */}
      <section id="pairs" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="text-center mb-10">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-4">Section 1.3</div>
                  <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tight">Currency & Commodity Pairs</h2>
                  <div className="w-24 h-1 bg-brandGold mx-auto mt-6"></div>
              </div>

              {/* Asset Reference Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Currencies Panel */}
                  <div className="glass-panel p-6 rounded-xl border-l-2 border-l-brandGold">
                      <h3 className="text-brandGold font-bold font-display uppercase text-sm tracking-wider mb-4 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-brandGold animate-pulse"></span>
                          Core Currencies
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                          <div className="bg-black/30 p-3 rounded border border-white/5">
                              <span className="block font-mono text-brandGold font-bold">EUR</span>
                              <span className="text-xs text-gray-400">Euro (Europe)</span>
                          </div>
                          <div className="bg-black/30 p-3 rounded border border-white/5">
                              <span className="block font-mono text-brandGold font-bold">GBP</span>
                              <span className="text-xs text-gray-400">British Pound (UK)</span>
                          </div>
                          <div className="bg-black/30 p-3 rounded border border-white/5">
                              <span className="block font-mono text-brandGold font-bold">JPY</span>
                              <span className="text-xs text-gray-400">Japanese Yen (Japan)</span>
                          </div>
                          <div className="bg-black/30 p-3 rounded border border-white/5">
                              <span className="block font-mono text-brandGold font-bold">USD</span>
                              <span className="text-xs text-gray-400">US Dollar (USA)</span>
                          </div>
                      </div>
                  </div>

                  {/* Commodities Panel */}
                  <div className="glass-panel p-6 rounded-xl border-r-2 border-r-brandGold">
                      <h3 className="text-brandGold font-bold font-display uppercase text-sm tracking-wider mb-4 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-brandGold animate-pulse"></span>
                          Core Commodities
                      </h3>
                      <div className="grid grid-cols-3 gap-3">
                          <div className="bg-black/30 p-3 rounded border border-white/5 text-center">
                              <span className="block font-mono text-yellow-500 font-bold font-display">XAU</span>
                              <span className="text-xs text-gray-400 block mt-1">Gold</span>
                          </div>
                          <div className="bg-black/30 p-3 rounded border border-white/5 text-center">
                              <span className="block font-mono text-slate-300 font-bold font-display">XAG</span>
                              <span className="text-xs text-gray-400 block mt-1">Silver</span>
                          </div>
                          <div className="bg-black/30 p-3 rounded border border-white/5 text-center">
                              <span className="block font-mono text-red-400 font-bold font-display">WTI/BRENT</span>
                              <span className="text-xs text-gray-400 block mt-1">Crude Oil</span>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Explanation Banner */}
              <div className="bg-black/60 p-6 rounded-xl border border-brandGold/20 flex flex-col md:flex-row gap-6 justify-between items-center text-sm font-light mb-8">
                  <div className="space-y-2">
                      <p className="text-gray-400"><span className="text-white font-semibold">Base Currency / Asset</span> = The first asset in the pair (the one you are trading).</p>
                      <p className="text-gray-400"><span className="text-white font-semibold">Quote Currency / Pricing</span> = The second asset (how much it costs in that currency).</p>
                  </div>
                  <div className="border-l-2 border-brandGold pl-6 py-2 flex-shrink-0">
                      <p className="text-white font-mono text-xs mb-1">If XAU/USD = 2,350.00</p>
                      <p className="text-brandGold font-bold">→ 1 Ounce of Gold = $2,350.00 USD</p>
                  </div>
              </div>

              {/* Pairs Table */}
              <div className="glass-panel border border-white/10 p-1 rounded-xl">
                  <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse min-w-[700px]">
                          <thead>
                              <tr className="bg-black/60 text-sm tracking-wider uppercase border-b border-white/10">
                                  <th className="p-5 font-bold text-brandGold w-1/4">Category</th>
                                  <th className="p-5 font-bold text-brandGold w-1/4">Pair Symbol</th>
                                  <th className="p-5 font-bold text-brandGold w-1/2">Meaning & Characteristics</th>
                              </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5 font-light text-sm">
                              <tr className="hover:bg-brandGold/5 transition-colors">
                                  <td className="p-4 text-white font-semibold flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Major Pair
                                  </td>
                                  <td className="p-4">
                                      <span className="font-mono text-brandGold bg-brandGold/10 px-2 py-1 rounded">EUR/USD</span>
                                  </td>
                                  <td className="p-4 text-gray-400">Euro vs US Dollar <span className="text-xs text-brandGold/60 block mt-1">(Most traded currency pair globally, extremely high liquidity & low spreads)</span></td>
                              </tr>
                              <tr className="hover:bg-brandGold/5 transition-colors">
                                  <td className="p-4 text-white font-semibold flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Major Pair
                                  </td>
                                  <td className="p-4">
                                      <span className="font-mono text-brandGold bg-brandGold/10 px-2 py-1 rounded">GBP/USD</span>
                                  </td>
                                  <td className="p-4 text-gray-400">British Pound vs US Dollar <span className="text-xs text-brandGold/60 block mt-1">(Commonly referred to as "Cable", high volatility & solid daily range)</span></td>
                              </tr>
                              <tr className="hover:bg-brandGold/5 transition-colors">
                                  <td className="p-4 text-white font-semibold flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Major Pair
                                  </td>
                                  <td className="p-4">
                                      <span className="font-mono text-brandGold bg-brandGold/10 px-2 py-1 rounded">USD/JPY</span>
                                  </td>
                                  <td className="p-4 text-gray-400">US Dollar vs Japanese Yen <span className="text-xs text-brandGold/60 block mt-1">(Known as the "Gopher", heavily influenced by global bond yields)</span></td>
                              </tr>
                              <tr className="hover:bg-brandGold/5 transition-colors bg-black/20">
                                  <td className="p-4 text-white font-semibold flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Minor / Cross
                                  </td>
                                  <td className="p-4">
                                      <span className="font-mono text-brandGold bg-brandGold/10 px-2 py-1 rounded">EUR/GBP</span>
                                  </td>
                                  <td className="p-4 text-gray-400">Euro vs British Pound <span className="text-xs text-blue-400/60 block mt-1">(European cross-pair, slower-moving & excellent for structure traders)</span></td>
                              </tr>
                              <tr className="hover:bg-brandGold/5 transition-colors bg-black/20">
                                  <td className="p-4 text-white font-semibold flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Minor / Cross
                                  </td>
                                  <td className="p-4">
                                      <span className="font-mono text-brandGold bg-brandGold/10 px-2 py-1 rounded">GBP/JPY</span>
                                  </td>
                                  <td className="p-4 text-gray-400">British Pound vs Japanese Yen <span className="text-xs text-blue-400/60 block mt-1">(Called the "Beast" or "Dragon" due to high volatility & massive swings)</span></td>
                              </tr>
                              <tr className="hover:bg-brandGold/5 transition-colors bg-black/20">
                                  <td className="p-4 text-white font-semibold flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Minor / Cross
                                  </td>
                                  <td className="p-4">
                                      <span className="font-mono text-brandGold bg-brandGold/10 px-2 py-1 rounded">EUR/JPY</span>
                                  </td>
                                  <td className="p-4 text-gray-400">Euro vs Japanese Yen <span className="text-xs text-blue-400/60 block mt-1">(Highly liquid cross-pair, strongly driven by global risk sentiment)</span></td>
                              </tr>
                              <tr className="hover:bg-brandGold/5 transition-colors">
                                  <td className="p-4 text-white font-semibold flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> Commodity
                                  </td>
                                  <td className="p-4">
                                      <span className="font-mono text-brandGold bg-brandGold/10 px-2 py-1 rounded">XAU/USD</span>
                                  </td>
                                  <td className="p-4 text-gray-400">Gold vs US Dollar <span className="text-xs text-yellow-500/60 block mt-1">(The ultimate inflation hedge, highly volatile & a staple for retail/bank traders)</span></td>
                              </tr>
                              <tr className="hover:bg-brandGold/5 transition-colors">
                                  <td className="p-4 text-white font-semibold flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> Commodity
                                  </td>
                                  <td className="p-4">
                                      <span className="font-mono text-brandGold bg-brandGold/10 px-2 py-1 rounded">XAG/USD</span>
                                  </td>
                                  <td className="p-4 text-gray-400">Silver vs US Dollar <span className="text-xs text-yellow-500/60 block mt-1">(Strongly correlated with Gold but typically experiences larger percentage swings)</span></td>
                              </tr>
                              <tr className="hover:bg-brandGold/5 transition-colors">
                                  <td className="p-4 text-white font-semibold flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> Commodity
                                  </td>
                                  <td className="p-4">
                                      <span className="font-mono text-brandGold bg-brandGold/10 px-2 py-1 rounded">USOIL</span>
                                  </td>
                                  <td className="p-4 text-gray-400">WTI Crude Oil vs US Dollar <span className="text-xs text-yellow-500/60 block mt-1">(West Texas Intermediate, highly correlated to global inflation and energy demand)</span></td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
          {/* Next Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <a href="#pips-section" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                  <span className="uppercase font-bold mb-1">Next Topic</span>
                  <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
              </a>
          </div>
      </section>

      {/* 1.4 What is a PIP? */}
      <section id="pips-section" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 1.4</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">What is a PIP?</h2>
              </div>
              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl">
                  <PipCalculator />
              </div>
          </div>
          {/* Next Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <a href="#lots-section" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                  <span className="uppercase font-bold mb-1">Next Topic</span>
                  <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
              </a>
          </div>
      </section>

      {/* 1.5 What is a Lot? */}
      <section id="lots-section" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 1.5</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">What is a Lot?</h2>
              </div>
              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl">
                  <LotVisualizer />
              </div>
          </div>
          {/* Next Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <a href="#spread-section" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                  <span className="uppercase font-bold mb-1">Next Topic</span>
                  <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
              </a>
          </div>
      </section>

      {/* 1.6 What is Spread in Forex? */}
      <section id="spread-section" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 1.6</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">What is Spread in Forex?</h2>
              </div>
              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl">
                  <SpreadVisualizer />
              </div>
          </div>
          {/* Next Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <a href="#leverage-margin-section" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                  <span className="uppercase font-bold mb-1">Next Topic</span>
                  <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
              </a>
          </div>
      </section>

      {/* 1.7 What is Leverage & Margin in Forex? */}
      <section id="leverage-margin-section" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 1.7</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Leverage & Margin</h2>
              </div>
              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl">
                  <LeverageMarginVisualizer />
              </div>
          </div>
          {/* Next Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <a href="#broker-section" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                  <span className="uppercase font-bold mb-1">Next Topic</span>
                  <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
              </a>
          </div>
      </section>

      {/* 1.8 What is a Forex Broker? */}
      <section id="broker-section" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 1.8</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">What is a Forex Broker?</h2>
              </div>
              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl">
                  <BrokerVisualizer />
              </div>
          </div>
          {/* Next Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <a href="#revision-section" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                  <span className="uppercase font-bold mb-1">Next Topic</span>
                  <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
              </a>
          </div>
      </section>

      {/* 1.9 Quick Revision for Students */}
      <section id="revision-section" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 1.9</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Quick Revision</h2>
              </div>
              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl">
                  <RevisionVisualizer />
              </div>
          </div>
          {/* Next Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <a href="#profit-simulator" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                  <span className="uppercase font-bold mb-1">Next Topic</span>
                  <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
              </a>
          </div>
      </section>

      {/* 1.10 Profit & Loss Simulator */}
      <section id="profit-simulator" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 1.10</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Profit & Loss Simulator</h2>
              </div>
              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl">
                  <ProfitCalculator />
              </div>
          </div>
          {/* Next Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <a href="#mechanics" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                  <span className="uppercase font-bold mb-1">Next Topic</span>
                  <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
              </a>
          </div>
      </section>

      {/* 1.11 How Do Traders Make Money? */}
      <section id="mechanics" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 1.11</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">How Do Traders Make Money?</h2>
              </div>
              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14">
                  <p className="text-gray-400 font-light mb-8 text-sm uppercase tracking-wider">Two directions to trade the market:</p>
                  <div className="space-y-8">
                      {/* BUY (Long) */}
                      <div className="bg-black/40 border border-white/5 p-8 rounded-xl relative overflow-hidden">
                          <div className="absolute left-0 top-0 bottom-0 w-2 bg-green-500"></div>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                  <span className="bg-green-500/20 text-green-400 px-4 py-1.5 rounded-lg text-sm uppercase tracking-widest font-display font-semibold">BUY (Long)</span>
                              </h3>
                              <div className="text-sm font-semibold text-green-400">Target: Market goes UP 📈</div>
                          </div>
                          <div className="grid lg:grid-cols-3 gap-8 text-sm font-light leading-relaxed text-gray-300">
                              <div className="bg-black/30 p-5 rounded-lg border border-white/5">
                                  <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-2 text-green-400">1. Core Concept</h4>
                                  <p>You purchase an asset at a low price with the expectation that its value will increase. You later sell it back at a higher price, pocketing the appreciation difference.</p>
                              </div>
                              <div className="bg-black/30 p-5 rounded-lg border border-white/5">
                                  <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-3 text-green-400">2. Step-by-Step Example</h4>
                                  <ul className="space-y-2 text-xs">
                                      <li><strong className="text-white font-semibold">1. Entry:</strong> You buy EUR/USD at <span className="text-white font-mono bg-white/10 px-1.5 py-0.5 rounded">1.1000</span></li>
                                      <li><strong className="text-white font-semibold">2. Movement:</strong> Price rises to <span className="text-green-400 font-mono bg-green-500/10 px-1.5 py-0.5 rounded">1.1100</span></li>
                                      <li><strong className="text-white font-semibold">3. Exit:</strong> You sell (close) to capture a <strong className="text-white font-semibold">+100 pip</strong> gain.</li>
                                  </ul>
                              </div>
                              <div className="bg-black/30 p-5 rounded-lg border border-white/5">
                                  <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-2 text-green-400">3. Real-World Analogy</h4>
                                  <p>Buying a house for <strong className="text-white">$100,000</strong>. If property values go up and you sell the house later for <strong className="text-white">$120,000</strong>, you keep the <strong className="text-green-400 font-semibold">$20,000</strong> profit.</p>
                              </div>
                          </div>
                      </div>

                      {/* SELL (Short) */}
                      <div className="bg-black/40 border border-white/5 p-8 rounded-xl relative overflow-hidden">
                          <div className="absolute left-0 top-0 bottom-0 w-2 bg-red-500"></div>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                  <span className="bg-red-500/20 text-red-400 px-4 py-1.5 rounded-lg text-sm uppercase tracking-widest font-display font-semibold">SELL (Short)</span>
                              </h3>
                              <div className="text-sm font-semibold text-red-400">Target: Market goes DOWN 📉</div>
                          </div>
                          <div className="grid lg:grid-cols-3 gap-8 text-sm font-light leading-relaxed text-gray-300">
                              <div className="bg-black/30 p-5 rounded-lg border border-white/5">
                                  <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-2 text-red-400">1. Core Concept</h4>
                                  <p>You "sell" an asset you do not currently own by borrowing it from your broker. Once the price drops, you buy it back at the cheaper price, return it to the broker, and keep the difference.</p>
                              </div>
                              <div className="bg-black/30 p-5 rounded-lg border border-white/5">
                                  <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-3 text-red-400">2. Step-by-Step Example</h4>
                                  <ul className="space-y-2 text-xs">
                                      <li><strong className="text-white font-semibold">1. Entry:</strong> You sell (short) EUR/USD at <span className="text-white font-mono bg-white/10 px-1.5 py-0.5 rounded">1.1000</span></li>
                                      <li><strong className="text-white font-semibold">2. Movement:</strong> Price falls to <span className="text-red-400 font-mono bg-red-500/10 px-1.5 py-0.5 rounded">1.0900</span></li>
                                      <li><strong className="text-white font-semibold">3. Exit:</strong> You buy back (close) to capture a <strong className="text-white font-semibold">+100 pip</strong> gain.</li>
                                  </ul>
                              </div>
                              <div className="bg-black/30 p-5 rounded-lg border border-white/5">
                                  <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-2 text-red-400">3. Real-World Analogy</h4>
                                  <p>Borrowing a phone worth <strong className="text-white">$1,000</strong> and selling it immediately. When the price drops to <strong className="text-white">$800</strong>, you buy a new one, return it to the lender, and pocket <strong className="text-green-400 font-semibold">$200</strong>.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* Next Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <a href="#trader-types" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                  <span className="uppercase font-bold mb-1">Next Topic</span>
                  <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
              </a>
          </div>
      </section>

      {/* 1.12 Types of Traders */}
      <section id="trader-types" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 1.12</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Types of Traders</h2>
              </div>

              {/* Cards Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {/* Scalper Card */}
                  <div className="glass-panel border-t-4 border-t-sky-400 p-6 rounded-xl flex flex-col justify-between hover:scale-[1.03] hover:shadow-lg hover:shadow-sky-400/10 transition-all duration-300 group">
                      <div>
                          <div className="flex justify-between items-start mb-4">
                              <span className="bg-sky-400/20 text-sky-400 px-3 py-1 rounded text-xs font-bold tracking-wider font-display uppercase">Scalper</span>
                              <span className="text-gray-500 group-hover:text-sky-400 transition-colors duration-300">⚡</span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2 font-display">Scalping</h3>
                          <p className="text-gray-400 text-xs font-light leading-relaxed mb-4">
                              Captures tiny price movements within seconds or minutes. Extreme speed and high trade volume.
                          </p>
                      </div>
                      <div className="border-t border-white/5 pt-4 mt-auto space-y-2 text-xs font-mono">
                          <div className="flex justify-between"><span className="text-gray-500">TIMEFRAME</span><span className="text-sky-400 font-semibold">1m - 5m</span></div>
                          <div className="flex justify-between"><span className="text-gray-500">HOLD TIME</span><span className="text-white">Secs - Mins</span></div>
                          <div className="flex justify-between"><span className="text-gray-500">PACE</span><span className="text-white">Intense</span></div>
                      </div>
                  </div>

                  {/* Day Trader Card */}
                  <div className="glass-panel border-t-4 border-t-brandGold p-6 rounded-xl flex flex-col justify-between hover:scale-[1.03] hover:shadow-lg hover:shadow-brandGold/10 transition-all duration-300 group">
                      <div>
                          <div className="flex justify-between items-start mb-4">
                              <span className="bg-brandGold/20 text-brandGold px-3 py-1 rounded text-xs font-bold tracking-wider font-display uppercase">Day Trader</span>
                              <span className="text-gray-500 group-hover:text-brandGold transition-colors duration-300">☀️</span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2 font-display">Day Trading</h3>
                          <p className="text-gray-400 text-xs font-light leading-relaxed mb-4">
                              Opens and closes positions within the same trading day. Avoids overnight carrying risk.
                          </p>
                      </div>
                      <div className="border-t border-white/5 pt-4 mt-auto space-y-2 text-xs font-mono">
                          <div className="flex justify-between"><span className="text-gray-500">TIMEFRAME</span><span className="text-brandGold font-semibold">5m - 1h</span></div>
                          <div className="flex justify-between"><span className="text-gray-500">HOLD TIME</span><span className="text-white">Hours</span></div>
                          <div className="flex justify-between"><span className="text-gray-500">PACE</span><span className="text-white">Moderate</span></div>
                      </div>
                  </div>

                  {/* Swing Trader Card */}
                  <div className="glass-panel border-t-4 border-t-purple-400 p-6 rounded-xl flex flex-col justify-between hover:scale-[1.03] hover:shadow-lg hover:shadow-purple-400/10 transition-all duration-300 group">
                      <div>
                          <div className="flex justify-between items-start mb-4">
                              <span className="bg-purple-400/20 text-purple-400 px-3 py-1 rounded text-xs font-bold tracking-wider font-display uppercase">Swing Trader</span>
                              <span className="text-gray-500 group-hover:text-purple-400 transition-colors duration-300">🌊</span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2 font-display">Swing Trading</h3>
                          <p className="text-gray-400 text-xs font-light leading-relaxed mb-4">
                              Holds trades for days or weeks to ride medium-term market swings and structures.
                          </p>
                      </div>
                      <div className="border-t border-white/5 pt-4 mt-auto space-y-2 text-xs font-mono">
                          <div className="flex justify-between"><span className="text-gray-500">TIMEFRAME</span><span className="text-purple-400 font-semibold">4h - Daily</span></div>
                          <div className="flex justify-between"><span className="text-gray-500">HOLD TIME</span><span className="text-white">Days - Weeks</span></div>
                          <div className="flex justify-between"><span className="text-gray-500">PACE</span><span className="text-white">Relaxed</span></div>
                      </div>
                  </div>

                  {/* Position Trader Card */}
                  <div className="glass-panel border-t-4 border-t-emerald-400 p-6 rounded-xl flex flex-col justify-between hover:scale-[1.03] hover:shadow-lg hover:shadow-emerald-400/10 transition-all duration-300 group">
                      <div>
                          <div className="flex justify-between items-start mb-4">
                              <span className="bg-emerald-400/20 text-emerald-400 px-3 py-1 rounded text-xs font-bold tracking-wider font-display uppercase">Position Trader</span>
                              <span className="text-gray-500 group-hover:text-emerald-400 transition-colors duration-300">🏢</span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2 font-display">Position Trading</h3>
                          <p className="text-gray-400 text-xs font-light leading-relaxed mb-4">
                              Long-term investing based on macroeconomic trends and monthly bias.
                          </p>
                      </div>
                      <div className="border-t border-white/5 pt-4 mt-auto space-y-2 text-xs font-mono">
                          <div className="flex justify-between"><span className="text-gray-500">TIMEFRAME</span><span className="text-emerald-400 font-semibold">Daily - Monthly</span></div>
                          <div className="flex justify-between"><span className="text-gray-500">HOLD TIME</span><span className="text-white">Weeks - Years</span></div>
                          <div className="flex justify-between"><span className="text-gray-500">PACE</span><span className="text-white">Macro</span></div>
                      </div>
                  </div>
              </div>

              {/* Interactive Quiz Widget */}
              <TraderQuiz />
          </div>
          {/* Next Arrow (Points to Module 2) */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <a href="#module2" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
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
