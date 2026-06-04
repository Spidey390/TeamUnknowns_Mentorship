import React, { useState } from 'react';
import PineScriptSection from '../PineScriptSection';

export default function ModuleArchitecture() {
  const [sbSetup, setSbSetup] = useState('bullish');

  return (
    <>
      {/* Module 5 Hero Section (Strategy & Execution) */}
      <section id="module5" className="min-h-screen flex flex-col justify-center items-center relative py-24 px-6">
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brandGold text-brandGold font-bold tracking-widest text-xs uppercase mb-10 bg-brandGold/5">
                  <span className="w-2 h-2 rounded-full bg-brandGold animate-pulse"></span> MODULE 5
              </div>
              <h1 className="text-6xl md:text-8xl font-black font-display leading-none mb-6 tracking-tight uppercase">
                  Strategy <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brandGold to-yellow-300">& Execution</span>
              </h1>
              <p className="text-textMuted text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide mt-8">
                  Forex & ICT Concepts — Mentorship Program. Master Daily Bias identification, the step-by-step Silver Bullet model, and technical indicators.
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

      {/* Section 5.1: Daily Bias */}
      <section id="topic-5-1" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 5.1</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Daily Bias</h2>
              </div>

              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl space-y-8">
                  <div className="space-y-4">
                      <p className="text-gray-400 font-light text-sm uppercase tracking-wider mb-2">Determining Macro Market Direction:</p>
                      <p className="text-sm text-gray-300 font-light leading-relaxed font-sans">
                          **Daily Bias** refers to the expected direction of the market for the day (Bullish or Bearish) based on High-Timeframe (HTF) analysis. Before looking for low-timeframe setups, you must determine where price is heading next.
                      </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 text-xs font-light text-gray-300 leading-relaxed">
                      <div className="bg-black/30 p-6 rounded-xl border border-white/5 space-y-3">
                          <h4 className="text-brandGold font-bold text-sm uppercase tracking-wider font-display">1. Draw on Liquidity (DOL)</h4>
                          <p>
                              The algorithm seeks liquidity. Look at the Daily or 4-Hour chart to locate the nearest **Draw on Liquidity**. This is the target destination price is attracted to:
                          </p>
                          <ul className="list-disc list-inside space-y-1 text-gray-400">
                              <li>Equal Highs (EQH) or Equal Lows (EQL).</li>
                              <li>Previous Daily Highs (PDH) or Lows (PDL).</li>
                              <li>Unmitigated High-Timeframe Fair Value Gaps (FVG).</li>
                          </ul>
                      </div>

                      <div className="bg-black/30 p-6 rounded-xl border border-white/5 space-y-3">
                          <h4 className="text-brandGold font-bold text-sm uppercase tracking-wider font-display">2. Market Structure Analysis</h4>
                          <p>
                              Analyze higher-timeframe swing points to check structural alignment:
                          </p>
                          <ul className="list-disc list-inside space-y-1 text-gray-400">
                              <li>**Bullish Bias**: Price is printing Higher Highs and Higher Lows, breaking swing highs, and respecting discount zones (FVGs, Order Blocks).</li>
                              <li>**Bearish Bias**: Price is printing Lower Highs and Lower Lows, breaking swing lows, and respecting premium zones.</li>
                          </ul>
                      </div>
                  </div>

                  <div className="bg-brandGold/5 p-5 rounded-lg border border-brandGold/20 text-xs font-light text-gray-300 leading-relaxed">
                      <span className="text-brandGold font-bold block uppercase mb-1">ICT Concept Tip:</span>
                      If the higher-timeframe Daily Bias is Bullish, you only look for Buy entries (long positions) on lower timeframes. If the Daily Bias is Bearish, you only look for Sell entries (shorts). Never trade against the daily draw!
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

      {/* Section 5.2: The Silver Bullet Strategy */}
      <section id="topic-5-2" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 5.2</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">The Silver Bullet Strategy</h2>
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
                                      <p className="text-[11px] text-gray-400 leading-relaxed font-light font-sans">
                                          Check high timeframes (Daily or 4-Hour). Ensure market structure is bullish and heading towards an institutional draw on liquidity (e.g. premium Fair Value Gap or old swing high).
                                      </p>
                                  </div>
                                  <div className="bg-black/20 p-4 rounded-lg border border-white/5">
                                      <h4 className="text-white font-bold text-xs uppercase mb-1">2. Wait for liquidity sweep (10:00 - 11:00 AM EST)</h4>
                                      <p className="text-[11px] text-gray-400 leading-relaxed font-light font-sans">
                                          Watch the 5m/1m chart. The algorithm will spike downwards, sweeping beneath a recent key swing low to purge retail sell stops (SSL).
                                      </p>
                                  </div>
                                  <div className="bg-black/20 p-4 rounded-lg border border-white/5">
                                      <h4 className="text-white font-bold text-xs uppercase mb-1">3. Spot Market Structure Shift (MSS)</h4>
                                      <p className="text-[11px] text-gray-400 leading-relaxed font-light font-sans">
                                          A displacement run up breaks the previous swing high, creating a Market Structure Shift. This confirms institutional sponsorship and aggressive buying.
                                      </p>
                                  </div>
                                  <div className="bg-black/20 p-4 rounded-lg border border-white/5">
                                      <h4 className="text-white font-bold text-xs uppercase mb-1">4. Place Entry at FVG Retest</h4>
                                      <p className="text-[11px] text-gray-400 leading-relaxed font-light font-sans">
                                          Place a buy limit at the top boundary of the newly formed 5-minute Fair Value Gap (FVG). Stop loss goes below the displacement swing low. Target the opposing swing high (BSL), aiming for 1:2+ R:R.
                                      </p>
                                  </div>
                              </div>
                          ) : (
                              <div className="space-y-4">
                                  <div className="bg-red-500/5 p-4 rounded-lg border border-red-500/20">
                                      <h4 className="text-white font-bold text-xs uppercase mb-1">1. Identify Bearish Daily Bias</h4>
                                      <p className="text-[11px] text-gray-400 leading-relaxed font-light font-sans">
                                          Check high timeframes (Daily or 4-Hour). Ensure market structure is bearish and drawing towards an institutional pool (e.g. discount Fair Value Gap or old swing low).
                                      </p>
                                  </div>
                                  <div className="bg-black/20 p-4 rounded-lg border border-white/5">
                                      <h4 className="text-white font-bold text-xs uppercase mb-1">2. Wait for liquidity sweep (10:00 - 11:00 AM EST)</h4>
                                      <p className="text-[11px] text-gray-400 leading-relaxed font-light font-sans">
                                          Watch the 5m/1m chart. The algorithm will spike upwards, sweeping above a recent key swing high to trigger retail buy stops (BSL).
                                      </p>
                                  </div>
                                  <div className="bg-black/20 p-4 rounded-lg border border-white/5">
                                      <h4 className="text-white font-bold text-xs uppercase mb-1">3. Spot Market Structure Shift (MSS)</h4>
                                      <p className="text-[11px] text-gray-400 leading-relaxed font-light font-sans">
                                          A displacement run down breaks the previous swing low, creating a Market Structure Shift. This confirms institutional sponsorship and aggressive selling.
                                      </p>
                                  </div>
                                  <div className="bg-black/20 p-4 rounded-lg border border-white/5">
                                      <h4 className="text-white font-bold text-xs uppercase mb-1">4. Place Entry at FVG Retest</h4>
                                      <p className="text-[11px] text-gray-400 leading-relaxed font-light font-sans">
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

      {/* Section 5.3: Custom TradingView Indicator */}
      <section id="topic-5-3" className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 5.3</div>
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
