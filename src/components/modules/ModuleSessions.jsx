import { Lightbulb, Lock, ShieldAlert, Rocket } from "lucide-react";
import React, { useState } from 'react';
import PineScriptSection from '../PineScriptSection';

export default function ModuleSessions() {
  const [activePhase, setActivePhase] = useState('accumulation');

  return (
    <>
      {/* MODULE 5 Hero Section */}
      <section id="module5" className="min-h-screen flex flex-col justify-center items-center relative py-24 px-6">
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brandGold text-brandGold font-bold tracking-widest text-xs uppercase mb-10 bg-brandGold/5">
                  <span className="w-2 h-2 rounded-full bg-brandGold animate-pulse"></span> MODULE 5
              </div>
              <h1 className="text-6xl md:text-8xl font-black font-display leading-none mb-6 tracking-tight uppercase">
                  Market Dynamics <br />& <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandGold to-yellow-300">Sessions</span>
              </h1>
              <p className="text-textMuted text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide mt-8">
                  Forex & ICT Concepts — Mentorship Program. Master market sessions, kill zones, algorithm cycles, and chart layout configuration.
              </p>
          </div>
      </section>

      {/* Section 5.1: Market Sessions & Overlaps */}
      <section id="topic-5-1" className="min-h-screen flex flex-col items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 5.1</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Market Sessions & Overlaps</h2>
              </div>
              
              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl space-y-8 bg-black/40 border border-white/5">
                  <p className="text-gray-400 font-light text-sm uppercase tracking-wider font-mono">Forex Market Hours & Key Sessions (IST):</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Asian Session */}
                      <div className="bg-black/30 p-6 rounded-xl border border-white/5 flex flex-col justify-between hover:border-brandGold/30 transition-all duration-300">
                          <div>
                              <div className="flex justify-between items-center mb-3">
                                  <span className="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider font-display">Consolidation</span>
                                  <span className="text-gray-500 text-xs font-mono">5:30 AM - 9:30 AM IST</span>
                              </div>
                              <h3 className="text-xl font-bold text-white mb-2">Asian Session</h3>
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
                              <h3 className="text-xl font-bold text-white mb-2">London Session (Kill Zone)</h3>
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
                              <h3 className="text-xl font-bold text-white mb-2">New York Session (Kill Zone)</h3>
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
      </section>

      {/* Section 5.2: Custom TradingView Indicator */}
      <section id="topic-5-2" className="min-h-screen flex flex-col items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 5.2</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Killzone Indicator for TradingView</h2>
              </div>
              
              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl bg-black/40 border border-white/5">
                  <p className="text-gray-400 font-light mb-8 text-sm uppercase tracking-wider">Automate session shading, pivots, and range metrics on your charts with our custom Pine Script indicator:</p>
                  
                  <div className="grid lg:grid-cols-3 gap-8 items-stretch">
                      {/* Left Panel: Instructions */}
                      <div className="lg:col-span-1 space-y-6 flex flex-col justify-between">
                          <div className="space-y-4">
                              <h3 className="text-white font-bold uppercase text-xs tracking-wider font-display mb-2 text-brandGold">Setup Instructions</h3>
                              <ol className="space-y-4 text-xs text-gray-300 font-light list-decimal list-inside leading-relaxed font-sans">
                                  <li className="pl-1"><span className="text-white font-semibold">Copy the Code:</span> Click the gold "Copy Code" button to copy the indicator script to your clipboard.</li>
                                  <li className="pl-1"><span className="text-white font-semibold">Open TradingView:</span> Navigate to your TradingView charts.</li>
                                  <li className="pl-1"><span className="text-white font-semibold">Access Pine Editor:</span> Click on the **Pine Editor** tab located at the bottom of the TradingView window.</li>
                                  <li className="pl-1"><span className="text-white font-semibold">Paste and Save:</span> Delete any template code, paste the copied script, and click **Save**. Name the indicator `KillZones By TeamUnknowns`.</li>
                                  <li className="pl-1"><span className="text-white font-semibold">Add to Chart:</span> Click **Add to chart** to plot the killzones instantly.</li>
                              </ol>
                          </div>
                          
                          <div className="bg-brandGold/5 p-4 rounded-lg border border-brandGold/15 text-[11px] font-mono mt-6 leading-relaxed">
                              <span className="text-brandGold font-bold block mb-1"><Lightbulb className="w-4 h-4 inline mr-1 text-brandGold" /> Customization Tip:</span>
                              Double-click on any of the colored boxes on your chart to open settings. You can adjust box transparency, custom session timings, toggle alert boundaries, and extend session pivots.
                          </div>
                      </div>

                      {/* Right Panel: Code block */}
                      <PineScriptSection />
                  </div>
              </div>
          </div>
      </section>

      {/* Section 5.3: Kill Zones & Power of 3 (PO3) */}
      <section id="topic-5-3" className="min-h-screen flex flex-col items-center justify-center py-24 px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-5xl flex flex-col">
              <div className="mb-10 text-center md:text-left">
                  <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 5.3</div>
                  <h2 className="text-3xl font-black font-display uppercase tracking-wide">Kill Zones & Power of 3 (PO3)</h2>
              </div>
              
              <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl space-y-12 bg-black/40 border border-white/5">
                  {/* Power of 3 Section */}
                  <div>
                      <p className="text-gray-400 font-light mb-4 text-sm uppercase tracking-wider font-mono">The Algorithmic Power of 3 (PO3):</p>
                      
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

                          {/* Middle: Content updates */}
                          <div className="lg:col-span-8 bg-black/30 border border-white/5 p-6 rounded-xl min-h-[220px] flex flex-col justify-between">
                              {activePhase === 'accumulation' && (
                                  <div className="space-y-4">
                                      <div className="flex items-center gap-2 text-brandGold font-bold text-xs uppercase tracking-wider">
                                          <Lock className="w-4 h-4 inline mr-2 text-brandGold" /> The Setup: Asian Session Consolidation
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
                                          <ShieldAlert className="w-4 h-4 inline mr-2 text-red-400" /> The Trap: London Judas Swing (Kill Zone)
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
                                          <Rocket className="w-4 h-4 inline mr-2 text-emerald-400" /> The Move: New York Expansion (Kill Zone)
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

                      {/* Timeline SVG */}
                      <div className="bg-black/40 border border-white/10 rounded-xl p-8 flex flex-col items-center justify-center min-h-[300px] relative">
                          <div className="absolute top-4 left-4 text-xs font-bold text-gray-500 uppercase tracking-widest font-mono">Dynamic Schematic</div>
                          
                          <svg width="600" height="280" viewBox="0 0 600 280" className="w-full max-w-[600px] select-none">
                              {/* Background grids */}
                              <line x1="20" y1="120" x2="580" y2="120" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="2,2" />
                              
                              {/* Dotted boundaries extending from Asian Range */}
                              <line x1="220" y1="80" x2="340" y2="80" stroke="rgba(250, 204, 21, 0.2)" strokeWidth="1" strokeDasharray="3,3" />
                              <line x1="220" y1="160" x2="270" y2="160" stroke="rgba(239, 68, 68, 0.2)" strokeWidth="1" strokeDasharray="3,3" />

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
                              <text 
                                  x="130" 
                                  y="60" 
                                  fill={activePhase === 'accumulation' ? "#facc15" : "rgba(255,255,255,0.2)"} 
                                  fontSize="8" 
                                  fontFamily="monospace" 
                                  textAnchor="middle" 
                                  fontWeight="bold"
                                  style={{ paintOrder: 'stroke', stroke: '#0a0a0a', strokeWidth: '3px', strokeLinejoin: 'round' }}
                              >
                                  ASIAN CONSOLIDATION (ACCUMULATION)
                              </text>
                              <text 
                                  x="130" 
                                  y="92" 
                                  fill={activePhase === 'accumulation' ? "#60a5fa" : "rgba(255, 255, 255, 0.15)"} 
                                  fontSize="7" 
                                  fontFamily="monospace" 
                                  textAnchor="middle"
                                  style={{ paintOrder: 'stroke', stroke: '#0a0a0a', strokeWidth: '3px', strokeLinejoin: 'round' }}
                              >
                                  Equal Highs (Buy Stops)
                              </text>
                              <text 
                                  x="130" 
                                  y="152" 
                                  fill={activePhase === 'accumulation' ? "#ef4444" : "rgba(255, 255, 255, 0.15)"} 
                                  fontSize="7" 
                                  fontFamily="monospace" 
                                  textAnchor="middle"
                                  style={{ paintOrder: 'stroke', stroke: '#0a0a0a', strokeWidth: '3px', strokeLinejoin: 'round' }}
                              >
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
                                  y="235"
                                  fill={activePhase === 'manipulation' ? "#ef4444" : "rgba(255,255,255,0.15)"}
                                  fontSize="8"
                                  fontFamily="monospace"
                                  textAnchor="middle"
                                  fontWeight="bold"
                                  style={{ paintOrder: 'stroke', stroke: '#0a0a0a', strokeWidth: '3px', strokeLinejoin: 'round' }}
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
                                  x="410"
                                  y="105"
                                  fill={activePhase === 'distribution' ? "#22c55e" : "rgba(255,255,255,0.15)"}
                                  fontSize="8"
                                  fontFamily="monospace"
                                  fontWeight="bold"
                                  style={{ paintOrder: 'stroke', stroke: '#0a0a0a', strokeWidth: '3px', strokeLinejoin: 'round' }}
                              >
                                  NY CONTINUATION (DISTRIBUTION)
                              </text>
                          </svg>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
