import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TraderQuiz from '../components/TraderQuiz';
import QuoteBuilder from '../components/QuoteBuilder';
import PatternExplorer from '../components/PatternExplorer';
import PineScriptSection from '../components/PineScriptSection';
import OrderSimulator from '../components/OrderSimulator';

import trendLineImg from '../assets/images/TrendLine.png';
import rectangleImg from '../assets/images/RectangleTool.png';
import fibImg from '../assets/images/FIb.png';
import shortLongImg from '../assets/images/SortandLong.png';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 relative">

        {/* Abstract background elements */}

        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brandGold rounded-full mix-blend-overlay filter blur-[200px] opacity-[0.03] pointer-events-none"></div>

        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brandGold rounded-full mix-blend-overlay filter blur-[150px] opacity-[0.02] pointer-events-none"></div>

        

        <div className="circle-accent w-[600px] h-[600px] -top-20 -left-40"></div>

        <div className="circle-accent w-[300px] h-[300px] top-80 right-20 border-opacity-5"></div>



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

                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>

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

                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>

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

                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>

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

                                {/* Major Pairs */}

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



                                {/* Minor / Cross Pairs */}

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



                                {/* Commodities */}

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

                <a href="#mechanics" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">

                    <span className="uppercase font-bold mb-1">Next Topic</span>

                    <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>

                    </svg>

                </a>

            </div>

        </section>



        {/* 1.4 Mechanics */}

        <section className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">

            <div id="mechanics" className="w-full max-w-5xl flex flex-col">

                <div className="mb-10 text-center md:text-left">

                    <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 1.4</div>

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

                                {/* Concept */}

                                <div className="bg-black/30 p-5 rounded-lg border border-white/5">

                                    <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-2 text-green-400">1. Core Concept</h4>

                                    <p>You purchase an asset at a low price with the expectation that its value will increase. You later sell it back at a higher price, pocketing the appreciation difference.</p>

                                </div>

                                

                                {/* Step-by-Step Scenario */}

                                <div className="bg-black/30 p-5 rounded-lg border border-white/5">

                                    <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-3 text-green-400">2. Step-by-Step Example</h4>

                                    <ul className="space-y-2 text-xs">

                                        <li><strong className="text-white font-semibold">1. Entry:</strong> You buy EUR/USD at <span className="text-white font-mono bg-white/10 px-1.5 py-0.5 rounded">1.1000</span></li>

                                        <li><strong className="text-white font-semibold">2. Movement:</strong> Price rises to <span className="text-green-400 font-mono bg-green-500/10 px-1.5 py-0.5 rounded">1.1100</span></li>

                                        <li><strong className="text-white font-semibold">3. Exit:</strong> You sell (close) to capture a <strong className="text-white font-semibold">+100 pip</strong> gain.</li>

                                    </ul>

                                </div>



                                {/* Real-World Analogy */}

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

                                {/* Concept */}

                                <div className="bg-black/30 p-5 rounded-lg border border-white/5">

                                    <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-2 text-red-400">1. Core Concept</h4>

                                    <p>You "sell" an asset you do not currently own by borrowing it from your broker. Once the price drops, you buy it back at the cheaper price, return it to the broker, and keep the difference.</p>

                                </div>

                                

                                {/* Step-by-Step Scenario */}

                                <div className="bg-black/30 p-5 rounded-lg border border-white/5">

                                    <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-3 text-red-400">2. Step-by-Step Example</h4>

                                    <ul className="space-y-2 text-xs">

                                        <li><strong className="text-white font-semibold">1. Entry:</strong> You sell (short) EUR/USD at <span className="text-white font-mono bg-white/10 px-1.5 py-0.5 rounded">1.1000</span></li>

                                        <li><strong className="text-white font-semibold">2. Movement:</strong> Price falls to <span className="text-red-400 font-mono bg-red-500/10 px-1.5 py-0.5 rounded">1.0900</span></li>

                                        <li><strong className="text-white font-semibold">3. Exit:</strong> You buy back (close) to capture a <strong className="text-white font-semibold">+100 pip</strong> gain.</li>

                                    </ul>

                                </div>



                                {/* Real-World Analogy */}

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

                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>

                    </svg>

                </a>

            </div>

        </section>



        {/* 1.5 Types of Traders */}

        <section id="trader-types" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">

            <div className="w-full max-w-5xl flex flex-col">

                <div className="mb-10 text-center md:text-left">

                    <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 1.5</div>

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
{/* Next Arrow */}

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">

                <a href="#terms" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">

                    <span className="uppercase font-bold mb-1">Next Topic</span>

                    <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>

                    </svg>

                </a>

            </div>

        </section>



        {/* 1.6 Key terms */}

        <section className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">

            <div id="terms" className="w-full max-w-5xl flex flex-col">

                <div className="mb-10">

                    <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 1.6</div>

                    <h2 className="text-3xl font-black font-display uppercase tracking-wide">Key Terms (Basics)</h2>

                </div>

                

                <div className="glass-panel border-t-4 border-t-white p-1">

                    <div className="overflow-x-auto">

                        <table className="w-full text-left min-w-[400px]">

                            <thead>

                                <tr className="bg-black text-xs tracking-widest uppercase text-brandGold">

                                    <th className="p-6 font-bold w-1/3">Term</th>

                                    <th className="p-6 font-bold">Meaning</th>

                                </tr>

                            </thead>

                            <tbody className="divide-y divide-white/5 text-sm font-light">

                                <tr className="hover:bg-brandGold/5 transition-colors">

                                    <td className="p-5 text-white font-bold tracking-wider uppercase text-xs">Pip</td>

                                    <td className="p-5 text-gray-400">Smallest price movement (0.0001)</td>

                                </tr>

                                <tr className="hover:bg-brandGold/5 transition-colors bg-black/20">

                                    <td className="p-5 text-white font-bold tracking-wider uppercase text-xs">Lot Size</td>

                                    <td className="p-5 text-gray-400">Volume of trade (Standard = 100,000 units)</td>

                                </tr>

                                <tr className="hover:bg-brandGold/5 transition-colors">

                                    <td className="p-5 text-white font-bold tracking-wider uppercase text-xs">Spread</td>

                                    <td className="p-5 text-gray-400">Difference between Buy & Sell price (broker's fee)</td>

                                </tr>

                                <tr className="hover:bg-brandGold/5 transition-colors bg-black/20">

                                    <td className="p-5 text-white font-bold tracking-wider uppercase text-xs">Leverage</td>

                                    <td className="p-5 text-gray-400">Trading more than your capital (e.g., 1:100)</td>

                                </tr>

                                <tr className="hover:bg-brandGold/5 transition-colors">

                                    <td className="p-5 text-white font-bold tracking-wider uppercase text-xs">Margin</td>

                                    <td className="p-5 text-gray-400">Collateral required to open a trade</td>

                                </tr>

                                <tr className="hover:bg-brandGold/5 transition-colors bg-black/20">

                                    <td className="p-5 text-white font-bold tracking-wider uppercase text-xs">Broker</td>

                                    <td className="p-5 text-gray-400">Platform where you trade (MT4, MT5)</td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

            {/* Next Arrow */}

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">

                <a href="#topic-1-7" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">

                    <span className="uppercase font-bold mb-1">Next Topic</span>

                    <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>

                    </svg>

                </a>

            </div>

        </section>



        {/* 1.7 Spread */}

        <section id="topic-1-7" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">

            <div className="w-full max-w-5xl flex flex-col">

                <div className="mb-10 text-center md:text-left">

                    <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 1.7</div>

                    <h2 className="text-3xl font-black font-display uppercase tracking-wide">Spread (The Cost of Trading)</h2>

                </div>

                

                <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl">
                    <p className="text-gray-400 font-light mb-8 text-sm uppercase tracking-wider">Understanding Bid, Ask, and the Transaction Fee:</p>
                    
                    <div className="grid lg:grid-cols-2 gap-8 text-sm font-light leading-relaxed text-gray-300">
                        {/* Left Panel: Concept */}
                        <div className="space-y-6">
                            <div className="bg-black/30 p-6 rounded-lg border border-white/5">
                                <h3 className="text-brandGold font-bold uppercase text-xs tracking-wider mb-2 font-display">What is a Spread?</h3>
                                <p className="text-gray-300">
                                    The spread is the difference between the buying price (<strong className="text-white">Ask</strong>) and the selling price (<strong className="text-white">Bid</strong>) of an asset. It represents the transactional fee charged by the broker to execute your trade.
                                </p>
                            </div>
                            
                            <div className="bg-black/30 p-6 rounded-lg border border-white/5">
                                <h3 className="text-brandGold font-bold uppercase text-xs tracking-wider mb-2 font-display">Bid vs. Ask Explained</h3>
                                <ul className="space-y-3 text-xs">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 font-bold">BID:</span> 
                                        <span>The price the market is willing to pay to buy from you (the price you <strong className="text-red-400">SELL</strong> at).</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-400 font-bold">ASK:</span> 
                                        <span>The price the market demands to sell to you (the price you <strong className="text-green-400">BUY</strong> at).</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Panel: Visualizing Spread */}
                        <div className="flex flex-col justify-between bg-black/40 border border-white/10 p-6 rounded-xl relative">
                            <div className="absolute top-0 left-0 w-1 h-full bg-brandGold"></div>
                            
                            <div>
                                <h3 className="text-brandGold font-bold uppercase text-xs tracking-wider mb-4 font-display">Spread Visualized (EUR/USD Example)</h3>
                                
                                <div className="grid grid-cols-2 gap-4 text-center mb-6">
                                    <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                                        <span className="block text-xs text-red-400 uppercase font-semibold mb-1">Bid Price (Sell)</span>
                                        <span className="text-2xl font-bold font-mono text-white">1.1000</span>
                                    </div>
                                    <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg">
                                        <span className="block text-xs text-green-400 uppercase font-semibold mb-1">Ask Price (Buy)</span>
                                        <span className="text-2xl font-bold font-mono text-white">1.1002</span>
                                    </div>
                                </div>
                                
                                <div className="bg-black/60 p-4 rounded-lg border border-brandGold/20 text-center">
                                    <span className="text-gray-400 text-xs uppercase block mb-1">Calculated Spread</span>
                                    <span className="text-brandGold text-lg font-bold font-mono">1.1002 - 1.1000 = 0.0002 <span className="text-white">(2 Pips)</span></span>
                                </div>
                            </div>
                            
                            <div className="mt-6 text-xs text-gray-500 italic">
                                💡 Liquid currency pairs (like EUR/USD) have tight spreads (0-2 pips), whereas exotic pairs (like USD/INR) have much wider spreads (30+ pips) due to lower trading volumes.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Next Arrow (Points to Module 4) */}

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">

                <a href="#module3" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">

                    <span className="uppercase font-bold mb-1">Next Topic</span>

                    <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>

                    </svg>

                </a>

            </div>

        </section>



        {/* Module 3 Hero Section */}

        <section id="module3" className="min-h-screen flex flex-col justify-center items-center relative py-24 px-6">

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

                <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brandGold text-brandGold font-bold tracking-widest text-xs uppercase mb-10 bg-brandGold/5">

                    <span className="w-2 h-2 rounded-full bg-brandGold animate-pulse"></span> MODULE 3

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

                <a href="#topic-3-1" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">

                    <span className="uppercase font-bold mb-1">Next Topic</span>

                    <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>

                    </svg>

                </a>

            </div>

        </section>



        {/* 4.1 Candlestick Anatomy */}

        <section id="topic-3-1" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">

            <div className="w-full max-w-5xl flex flex-col">

                <div className="mb-10 text-center md:text-left">

                    <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 3.1</div>

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

                                        <line x1="100" y1="35" x2="100" y2="225" stroke="#22c55e" stroke-width="2.5" />

                                        

                                        {/* Body */}

                                        <rect x="70" y="75" width="60" height="110" fill="#22c55e" fill-opacity="0.85" stroke="#4ade80" stroke-width="2" rx="2" className="cursor-pointer hover:fill-opacity-100 transition-all duration-300" />

                                        <text x="100" y="130" fill="#0a0a0a" font-weight="bold" font-size="10" font-family="Montserrat" letter-spacing="1.5" text-anchor="middle" alignment-baseline="middle" transform="rotate(-90 100 130)" className="pointer-events-none">BODY</text>



                                        {/* Labels with pointer lines */}

                                        {/* HIGH */}

                                        <text x="100" y="20" fill="#9ca3af" font-size="10" font-family="monospace" text-anchor="middle">HIGH</text>

                                        <circle cx="100" cy="35" r="2.5" fill="#9ca3af" />



                                        {/* CLOSE (Top of Bullish Body) */}

                                        <line x1="130" y1="75" x2="145" y2="75" stroke="#22c55e" stroke-width="1" stroke-dasharray="2,2" />

                                        <text x="150" y="78" fill="#22c55e" font-size="10" font-family="monospace" font-weight="bold" text-anchor="start">CLOSE</text>



                                        {/* OPEN (Bottom of Bullish Body) */}

                                        <line x1="70" y1="185" x2="55" y2="185" stroke="#9ca3af" stroke-width="1" stroke-dasharray="2,2" />

                                        <text x="50" y="188" fill="#9ca3af" font-size="10" font-family="monospace" text-anchor="end">OPEN</text>



                                        {/* LOW */}

                                        <circle cx="100" cy="225" r="2.5" fill="#9ca3af" />

                                        <text x="100" y="245" fill="#9ca3af" font-size="10" font-family="monospace" text-anchor="middle">LOW</text>

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

                                        <line x1="100" y1="35" x2="100" y2="225" stroke="#ef4444" stroke-width="2.5" />

                                        

                                        {/* Body */}

                                        <rect x="70" y="75" width="60" height="110" fill="#ef4444" fill-opacity="0.85" stroke="#f87171" stroke-width="2" rx="2" className="cursor-pointer hover:fill-opacity-100 transition-all duration-300" />

                                        <text x="100" y="130" fill="#ffffff" font-weight="bold" font-size="10" font-family="Montserrat" letter-spacing="1.5" text-anchor="middle" alignment-baseline="middle" transform="rotate(-90 100 130)" className="pointer-events-none">BODY</text>



                                        {/* Labels with pointer lines */}

                                        {/* HIGH */}

                                        <text x="100" y="20" fill="#9ca3af" font-size="10" font-family="monospace" text-anchor="middle">HIGH</text>

                                        <circle cx="100" cy="35" r="2.5" fill="#9ca3af" />



                                        {/* OPEN (Top of Bearish Body) */}

                                        <line x1="70" y1="75" x2="55" y2="75" stroke="#9ca3af" stroke-width="1" stroke-dasharray="2,2" />

                                        <text x="50" y="78" fill="#9ca3af" font-size="10" font-family="monospace" text-anchor="end">OPEN</text>



                                        {/* CLOSE (Bottom of Bearish Body) */}

                                        <line x1="130" y1="185" x2="145" y2="185" stroke="#ef4444" stroke-width="1" stroke-dasharray="2,2" />

                                        <text x="150" y="188" fill="#ef4444" font-size="10" font-family="monospace" font-weight="bold" text-anchor="start">CLOSE</text>



                                        {/* LOW */}

                                        <circle cx="100" cy="225" r="2.5" fill="#9ca3af" />

                                        <text x="100" y="245" fill="#9ca3af" font-size="10" font-family="monospace" text-anchor="middle">LOW</text>

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

                <a href="#topic-3-2" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">

                    <span className="uppercase font-bold mb-1">Next Topic</span>

                    <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>

                    </svg>

                </a>

            </div>

        </section>



        {/* 4.2 Interactive EUR/USD Quote Builder */}

        <section id="topic-3-2" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">

            <div className="w-full max-w-5xl flex flex-col">

                <div className="mb-10 text-center md:text-left">

                    <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 3.2</div>

                    <h2 className="text-3xl font-black font-display uppercase tracking-wide">Interactive EUR/USD Quote Builder</h2>

                </div>

                

                <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl">

                    <p className="text-gray-400 font-light mb-8 text-sm uppercase tracking-wider">Adjust the sliders to build your own EUR/USD candlestick and see the anatomy adapt in real-time:</p>

                    

                    <QuoteBuilder />
                </div>
            </div>

            {/* Next Arrow (Points to Section 3.3) */}

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">

                <a href="#topic-3-3" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">

                    <span className="uppercase font-bold mb-1">Next Topic</span>

                    <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>

                    </svg>

                </a>

            </div>

        </section>



        {/* 4.3 Key Candlestick Patterns */}

        <section id="topic-3-3" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">

            <div className="w-full max-w-5xl flex flex-col">

                <div className="mb-10 text-center md:text-left">

                    <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 3.3</div>

                    <h2 className="text-3xl font-black font-display uppercase tracking-wide">Key Candlestick Patterns</h2>

                </div>

                

                <PatternExplorer />
            </div>

            {/* Next Arrow (Points to Module 5) */}

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">

                <a href="#module4" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">

                    <span className="uppercase font-bold mb-1">Next Module</span>

                    <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>

                    </svg>

                </a>

            </div>

        </section>



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



        {/* 5.1 Sessions & Killzone Hours */}

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

            {/* Next Arrow (Points to Section 4.2) */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                <a href="#topic-4-2" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                    <span className="uppercase font-bold mb-1">Next Topic</span>
                    <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
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
                                {/* Grid Lines */}
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

                                {/* Macro Boundaries (PDH/PDL) */}
                                <line x1="50" y1="60" x2="750" y2="60" stroke="#facc15" stroke-width="1.5" stroke-dasharray="6,4" opacity="0.3" />
                                <text x="60" y="52" fill="#facc15" font-size="9" font-family="monospace" opacity="0.6">PREVIOUS DAILY HIGH (PDH)</text>
                                
                                <line x1="50" y1="390" x2="750" y2="390" stroke="#facc15" stroke-width="1.5" stroke-dasharray="6,4" opacity="0.3" />
                                <text x="740" y="382" fill="#facc15" font-size="9" font-family="monospace" opacity="0.6" text-anchor="end">PREVIOUS DAILY LOW (PDL)</text>

                                {/* Retail Support Trendline */}
                                <line x1="150" y1="350" x2="460" y2="298" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.4" />
                                <text x="220" y="323" fill="#3b82f6" font-size="9" font-family="monospace" opacity="0.6" transform="rotate(-9.5 220 323)">Retail Trendline</text>
                                {/* Trendline Liquidity Bracket */}
                                <path d="M 200,345 L 200,360 L 440,320 L 440,305" fill="none" stroke="#ef4444" stroke-width="1" stroke-dasharray="2,2" opacity="0.5" />
                                <text x="320" y="365" fill="#ef4444" font-size="9" font-family="monospace" text-anchor="middle" font-weight="bold" transform="rotate(-9.5 320 365)">SSL / SELL STOPS (Trendline Liquidity)</text>

                                {/* Equal Highs (EQH) Resistance Line */}
                                <line x1="430" y1="140" x2="630" y2="140" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.4" />
                                <text x="530" y="130" fill="#22c55e" font-size="9" font-family="monospace" text-anchor="middle" opacity="0.8">Equal Highs (Double Top)</text>
                                <text x="530" y="115" fill="#22c55e" font-size="9" font-family="monospace" text-anchor="middle" font-weight="bold">BSL / BUY STOPS ($ $ $)</text>

                                {/* Equal Lows (EQL) Support Line */}
                                <line x1="500" y1="310" x2="680" y2="310" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.4" />
                                <text x="590" y="325" fill="#ef4444" font-size="9" font-family="monospace" text-anchor="middle" opacity="0.8">Equal Lows (Double Bottom)</text>
                                <text x="590" y="340" fill="#ef4444" font-size="9" font-family="monospace" text-anchor="middle" font-weight="bold">SSL / SELL STOPS ($ $ $)</text>

                                {/* Price Line Path (Continuous yellow line representing chart candles) */}
                                <path d="M 50,300 L 100,380 L 150,210 L 200,333 L 260,180 L 290,90 L 320,313 L 380,220 L 440,293 L 480,140 L 530,310 L 580,140 L 630,310 L 700,50" fill="none" stroke="#facc15" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />

                                {/* Price Swing High/Low Nodes & Highlights */}
                                {/* Major Swing Low */}
                                <circle cx="100" cy="380" r="5" fill="#ef4444" />
                                <text x="100" y="405" fill="#ef4444" font-size="9" font-family="monospace" text-anchor="middle" font-weight="bold">SSL (Swing Low)</text>
                                
                                {/* Major Swing High */}
                                <circle cx="290" cy="90" r="5" fill="#22c55e" />
                                <text x="290" y="75" fill="#22c55e" font-size="9" font-family="monospace" text-anchor="middle" font-weight="bold">BSL (Swing High)</text>

                                {/* Equal High touches */}
                                <circle cx="480" cy="140" r="4" fill="#22c55e" />
                                <circle cx="580" cy="140" r="4" fill="#22c55e" />

                                {/* Equal Low touches */}
                                <circle cx="530" cy="310" r="4" fill="#ef4444" />
                                <circle cx="630" cy="310" r="4" fill="#ef4444" />

                                {/* Trendline touches */}
                                <circle cx="200" cy="333" r="4" fill="#3b82f6" />
                                <circle cx="320" cy="313" r="4" fill="#3b82f6" />
                                <circle cx="440" cy="293" r="4" fill="#3b82f6" />

                                {/* Breakout Highlight */}
                                <circle cx="700" cy="50" r="6" fill="#22c55e" />
                                <path d="M 700,50 L 720,30" stroke="#22c55e" stroke-width="2" stroke-dasharray="2,2" />
                                <text x="725" y="25" fill="#22c55e" font-size="9" font-family="monospace" font-weight="bold">Expansion</text>

                            </svg>
                        </div>
                    </div>




                </div>

            </div>

            {/* Next Arrow (Points to Section 4.3) */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                <a href="#topic-4-3" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                    <span className="uppercase font-bold mb-1">Next Topic</span>
                    <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
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

                                {/* Grid Lines */}

                                <line x1="20" y1="130" x2="320" y2="130" stroke="rgba(255,255,255,0.03)" stroke-width="1" stroke-dasharray="2,2" />

                                

                                {/* Asian Session Box */}

                                <rect x="30" y="90" width="100" height="80" fill="rgba(59, 130, 246, 0.05)" stroke="rgba(59, 130, 246, 0.2)" stroke-width="1" stroke-dasharray="4,4" rx="4" />

                                <text x="80" y="80" fill="#60a5fa" font-size="8" font-family="monospace" text-anchor="middle">ASIAN CONSOLIDATION</text>

                                

                                {/* Liquidity pools */}

                                <text x="80" y="105" fill="rgba(255, 255, 255, 0.3)" font-size="7" font-family="monospace" text-anchor="middle">Equal Highs (BSL)</text>

                                <text x="80" y="155" fill="rgba(255, 255, 255, 0.3)" font-size="7" font-family="monospace" text-anchor="middle">Equal Lows (SSL)</text>

                                

                                {/* Price Line */}

                                <path d="M 20,120 L 30,125 L 45,115 L 60,145 L 75,120 L 90,135 L 110,125 L 130,130 L 150,210 L 175,170 L 200,90 L 230,60 L 260,80 L 285,40 L 320,30" fill="none" stroke="#facc15" stroke-width="2" />

                                

                                {/* London Manipulation Sweep (Judas Swing) */}

                                <circle cx="150" cy="210" r="4" fill="#ef4444" />

                                <path d="M 150,210 L 150,230" stroke="#ef4444" stroke-width="1" stroke-dasharray="2,2" />

                                <text x="150" y="240" fill="#ef4444" font-size="8" font-family="monospace" text-anchor="middle" font-weight="bold">LONDON SSL SWEEP</text>

                                <text x="150" y="250" fill="rgba(239, 68, 68, 0.6)" font-size="7" font-family="monospace" text-anchor="middle">(Judas Swing)</text>

                                

                                {/* NY continuation / expansion */}

                                <circle cx="230" cy="60" r="4" fill="#22c55e" />

                                <text x="235" y="55" fill="#22c55e" font-size="8" font-family="monospace" font-weight="bold">NY CONTINUATION</text>

                            </svg>

                        </div>

                    </div>

                </div>

            </div>

            {/* Next Arrow (Points to Section 4.4) */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                <a href="#topic-4-4" className="flex flex-col items-center text-xs tracking-[0.2em] text-brandGold/60 hover:text-brandGold transition-colors duration-300">
                    <span className="uppercase font-bold mb-1">Next Topic</span>
                    <svg className="w-5 h-5 animate-bounce text-brandGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
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
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </a>
            </div>

        </section>

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
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
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
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
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
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                    </svg>
                </a>
            </div>
        </section>

</main>
      <Footer />
    </>
  );
}
