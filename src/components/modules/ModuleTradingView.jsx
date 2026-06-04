import React from 'react';
import trendLineImg from '../../assets/images/TrendLine.png';
import rectangleImg from '../../assets/images/RectangleTool.png';
import fibImg from '../../assets/images/FIb.png';
import shortLongImg from '../../assets/images/SortandLong.png';

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
                  <p className="text-gray-400 font-light mb-8 text-sm uppercase tracking-wider">Drawing instruments for chart annotation (Data & Screenshots from ChartWiseHub):</p>

                  <div className="grid grid-cols-1 gap-8 text-sm font-light leading-relaxed text-gray-300">
                      {/* Trendlines */}
                      <div className="bg-black/30 p-6 md:p-8 rounded-xl border border-white/5 flex flex-col md:flex-row items-center gap-8 transition-all duration-300 hover:border-brandGold/30">
                          <div className="flex-1 space-y-4">
                              <span className="bg-brandGold/20 text-brandGold px-2.5 py-1 rounded text-[10px] uppercase font-bold tracking-wider block w-max font-display">Trend & Shift</span>
                              <h3 className="text-2xl font-bold text-white">Trendlines & Rays</h3>
                              <p className="text-sm text-gray-400 leading-relaxed">
                                  Used to connect swing highs and swing lows. Critical for marking out <strong className="text-white font-semibold">Market Structure Shifts (MSS)</strong> and breakouts.
                              </p>
                              <div className="bg-brandGold/5 border-l-2 border-brandGold p-4 rounded-r-lg mt-4">
                                  <h4 className="text-brandGold font-bold text-xs uppercase tracking-wider mb-1">ICT Concept Tip</h4>
                                  <p className="text-xs text-gray-300 font-light">Retail traders view trendlines as support or resistance. In institutional trading, these trendlines build up liquidity (stops resting above/below). The algorithm often sweeps this liquidity before the true move occurs.</p>
                              </div>
                          </div>
                          <div className="w-full md:w-[450px] flex-shrink-0 border border-white/10 rounded-lg overflow-hidden bg-black/40 shadow-lg">
                              <img src={trendLineImg} alt="Trendlines in TradingView" className="w-full h-auto opacity-85 hover:opacity-100 transition-opacity duration-300" />
                          </div>
                      </div>

                      {/* Rectangles */}
                      <div className="bg-black/30 p-6 md:p-8 rounded-xl border border-white/5 flex flex-col md:flex-row items-center gap-8 transition-all duration-300 hover:border-brandGold/30">
                          <div className="flex-1 space-y-4">
                              <span className="bg-brandGold/20 text-brandGold px-2.5 py-1 rounded text-[10px] uppercase font-bold tracking-wider block w-max font-display">Structural Zones</span>
                              <h3 className="text-2xl font-bold text-white">Rectangle Tool</h3>
                              <p className="text-sm text-gray-400 leading-relaxed">
                                  The primary tool for drawing structural areas like <strong className="text-white font-semibold">Order Blocks (OB)</strong> and <strong className="text-white font-semibold">Fair Value Gaps (FVG)</strong> on your charts.
                              </p>
                              <div className="bg-brandGold/5 border-l-2 border-brandGold p-4 rounded-r-lg mt-4">
                                  <h4 className="text-brandGold font-bold text-xs uppercase tracking-wider mb-1">ICT Concept Tip</h4>
                                  <p className="text-xs text-gray-300 font-light">Use rectangles to map the last up-close candle before a bearish drop (Bearish Order Block) or down-close candle before a bullish run (Bullish Order Block). These represent institutional entries.</p>
                              </div>
                          </div>
                          <div className="w-full md:w-[450px] flex-shrink-0 border border-white/10 rounded-lg overflow-hidden bg-black/40 shadow-lg">
                              <img src={rectangleImg} alt="Rectangle Tool in TradingView" className="w-full h-auto opacity-85 hover:opacity-100 transition-opacity duration-300" />
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
                          <div className="w-full md:w-[450px] flex-shrink-0 border border-white/10 rounded-lg overflow-hidden bg-black/40 shadow-lg">
                              <img src={fibImg} alt="Fibonacci in TradingView" className="w-full h-auto opacity-85 hover:opacity-100 transition-opacity duration-300" />
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
                              <h3 className="text-white font-semibold mb-1">Moving Averages (EMA / SMA)</h3>
                              <p className="text-xs text-gray-400">Smoothes out price action to identify macro trend direction. Traders often track the 50, 100, and 200 EMAs.</p>
                          </div>
                          <div className="bg-black/30 p-4 rounded border border-white/5">
                              <h3 className="text-white font-semibold mb-1">Relative Strength Index (RSI)</h3>
                              <p className="text-xs text-gray-400">A momentum oscillator that tracks buyers vs. sellers, showing overbought (70) and oversold (30) levels.</p>
                          </div>
                      </div>

                      {/* Session indicators */}
                      <div className="bg-black/40 border border-white/10 p-6 rounded-xl flex flex-col justify-between">
                          <div>
                              <h3 className="text-brandGold font-bold uppercase text-xs tracking-wider font-display mb-3">Session & Time Highlights</h3>
                              <p className="text-gray-400 text-xs leading-relaxed mb-4">
                                  Time is crucial in ICT concept trading. Use Session Indicators (such as "Session Boxes") to shade and highlight London and New York session killzones directly on lower-timeframe charts.
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
                          <div>
                              <h3 className="text-brandGold font-bold uppercase text-xs tracking-wider font-display mb-3 text-center">Long & Short Position Tools</h3>
                              <p className="text-xs text-gray-400 leading-relaxed mb-6 text-center">
                                  Use these drawing tools to overlay your entry, target (take profit), and stop loss levels. TradingView automatically calculates your <strong className="text-white">Risk-to-Reward Ratio (R:R)</strong> and shows exactly how many pips your stop loss and profit targets span (Data & Screenshots from ChartWiseHub).
                              </p>
                          </div>
                          <div className="border border-white/10 rounded-lg overflow-hidden bg-black/40 mb-6 max-w-2xl mx-auto">
                              <img src={shortLongImg} alt="Short & Long Position Tools" className="w-full h-auto opacity-85 hover:opacity-100 transition-opacity duration-300" />
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
