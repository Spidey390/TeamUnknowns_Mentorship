import React, { useState } from 'react';
import {
  Layers,
  TrendingUp,
  TrendingDown,
  Target,
  Lightbulb,
  ArrowRight,
  ShieldAlert,
  AlertTriangle,
  Zap,
  CheckCircle2,
  Sparkles,
  Sliders,
  Scale,
  Crosshair,
  BarChart2
} from 'lucide-react';

export default function ModulePDArray() {
  // State for Interactive Dealing Range / OTE Calculator
  const [directionMode, setDirectionMode] = useState('bullish'); // 'bullish' | 'bearish'
  const [swingLowPrice, setSwingLowPrice] = useState(1.0800);
  const [swingHighPrice, setSwingHighPrice] = useState(1.1000);
  const [selectedArrayTab, setSelectedArrayTab] = useState('premium'); // 'premium' | 'discount'
  const [activeArrayDetail, setActiveArrayDetail] = useState(2); // index in hierarchy list

  // Calculated Fibonacci / PD Array Levels
  const rangeDelta = swingHighPrice - swingLowPrice;
  const equilibrium = swingLowPrice + rangeDelta * 0.5;
  const ote62 = directionMode === 'bullish' ? swingHighPrice - rangeDelta * 0.62 : swingLowPrice + rangeDelta * 0.62;
  const ote705 = directionMode === 'bullish' ? swingHighPrice - rangeDelta * 0.705 : swingLowPrice + rangeDelta * 0.705;
  const ote79 = directionMode === 'bullish' ? swingHighPrice - rangeDelta * 0.79 : swingLowPrice + rangeDelta * 0.79;
  const targetExt27 = directionMode === 'bullish' ? swingHighPrice + rangeDelta * 0.27 : swingLowPrice - rangeDelta * 0.27;
  const targetExt62 = directionMode === 'bullish' ? swingHighPrice + rangeDelta * 0.62 : swingLowPrice - rangeDelta * 0.62;

  // Hierarchy Data
  const premiumHierarchy = [
    {
      id: 1,
      name: 'Old High / BSL (Buy-Side Liquidity)',
      badge: 'External Liquidity',
      color: 'text-red-400 border-red-500/30 bg-red-500/10',
      desc: 'The ultimate target for bullish expansion or the ultimate sweep level before a major bearish reversal. Contains retail buy stops.',
      role: 'Prime Target for Longs / Sweep Catalyst for Shorts'
    },
    {
      id: 2,
      name: 'Rejection Block (Premium)',
      badge: 'Extreme Wick Zone',
      color: 'text-orange-400 border-orange-500/30 bg-orange-500/10',
      desc: 'The highest candle wick(s) above the candle bodies. Represents immediate institutional aggressive rejection at premium extremes.',
      role: 'High-probability reversal wicking level'
    },
    {
      id: 3,
      name: 'Bearish Order Block (OB)',
      badge: 'High Probability',
      color: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
      desc: 'The highest up-close candle before the aggressive downward displacement that breaks market structure and creates an FVG.',
      role: 'Institutional Sell Entry on Retracement'
    },
    {
      id: 4,
      name: 'Bearish Fair Value Gap (FVG)',
      badge: 'Core Imbalance',
      color: 'text-brandGold border-brandGold/30 bg-brandGold/10',
      desc: 'A 3-candle imbalance where Candle 1 low and Candle 3 high do not overlap. Price magnetic draw for algorithmic rebalancing.',
      role: 'Premier Precision Entry Zone'
    },
    {
      id: 5,
      name: 'Bearish Liquidity Void',
      badge: 'Rapid Imbalance',
      color: 'text-yellow-300 border-yellow-300/30 bg-yellow-300/10',
      desc: 'A violent, one-directional drop of consecutive large-bodied candles leaving massive unfilled orders in the order book.',
      role: 'Magnet for deep market rebalancing'
    },
    {
      id: 6,
      name: 'Bearish Breaker Block (BB)',
      badge: 'Trapped Buyers',
      color: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
      desc: 'An up-close candle (Bullish OB) that successfully swept a prior high, but was subsequently violated by a violent drop breaking structure. Turns into formidable resistance.',
      role: 'High-Conviction Institutional Resistance'
    },
    {
      id: 7,
      name: 'Bearish Mitigation Block (MB)',
      badge: 'Failed Swing High',
      color: 'text-sky-400 border-sky-500/30 bg-sky-500/10',
      desc: 'Similar to a breaker block, but the swing high failed to sweep liquidity (Lower High) before breaking structure downward.',
      role: 'Secondary Resistance on Pullback'
    }
  ];

  const discountHierarchy = [
    {
      id: 1,
      name: 'Old Low / SSL (Sell-Side Liquidity)',
      badge: 'External Liquidity',
      color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
      desc: 'The prime draw for bearish expansion or the ultimate sweep pool for smart money to accumulate long orders at wholesale prices.',
      role: 'Prime Target for Shorts / Sweep Catalyst for Longs'
    },
    {
      id: 2,
      name: 'Rejection Block (Discount)',
      badge: 'Extreme Wick Zone',
      color: 'text-teal-400 border-teal-500/30 bg-teal-500/10',
      desc: 'The lowest candle wick(s) below candle bodies. Represents immediate institutional buying injection at extreme discount levels.',
      role: 'High-probability reversal wicking level'
    },
    {
      id: 3,
      name: 'Bullish Order Block (OB)',
      badge: 'High Probability',
      color: 'text-green-400 border-green-500/30 bg-green-500/10',
      desc: 'The lowest down-close candle before the aggressive upward displacement that breaks market structure and creates an FVG.',
      role: 'Institutional Buy Entry on Retracement'
    },
    {
      id: 4,
      name: 'Bullish Fair Value Gap (FVG)',
      badge: 'Core Imbalance',
      color: 'text-brandGold border-brandGold/30 bg-brandGold/10',
      desc: 'A 3-candle imbalance where Candle 1 high and Candle 3 low do not overlap. Algorithmic delivery magnet for cheap fills.',
      role: 'Premier Precision Entry Zone'
    },
    {
      id: 5,
      name: 'Bullish Liquidity Void',
      badge: 'Rapid Imbalance',
      color: 'text-emerald-300 border-emerald-300/30 bg-emerald-300/10',
      desc: 'A violent, one-directional rally with multiple un-mitigated gaps requiring downward algorithmic price re-delivery.',
      role: 'Magnet for deep market rebalancing'
    },
    {
      id: 6,
      name: 'Bullish Breaker Block (BB)',
      badge: 'Trapped Sellers',
      color: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
      desc: 'A down-close candle (Bearish OB) that swept a prior low, but was violently broken to the upside. Turns into rock-solid support.',
      role: 'High-Conviction Institutional Support'
    },
    {
      id: 7,
      name: 'Bullish Mitigation Block (MB)',
      badge: 'Failed Swing Low',
      color: 'text-sky-400 border-sky-500/30 bg-sky-500/10',
      desc: 'Similar to a breaker block, but the swing low failed to sweep liquidity (Higher Low) before breaking structure upward.',
      role: 'Secondary Support on Pullback'
    }
  ];

  const currentHierarchy = selectedArrayTab === 'premium' ? premiumHierarchy : discountHierarchy;
  const currentDetail = currentHierarchy[activeArrayDetail] || currentHierarchy[0];

  return (
    <>
      {/* MODULE 6 Hero Section */}
      <section id="module6" className="min-h-screen flex flex-col justify-center items-center relative py-24 px-6">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brandGold text-brandGold font-bold tracking-widest text-xs uppercase mb-10 bg-brandGold/5">
            <span className="w-2 h-2 rounded-full bg-brandGold animate-pulse"></span> MODULE 6
          </div>
          <h1 className="text-6xl md:text-8xl font-black font-display leading-none mb-6 tracking-tight uppercase">
            PD Array <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandGold to-yellow-300">
              Premium &amp; Discount
            </span>
          </h1>
          <p className="text-textMuted text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide mt-8">
            ICT Institutional Order Flow — Master the Premium vs. Discount Matrix, the 7-Tier PD Array Hierarchy Ladder, Optimal Trade Entry (OTE), and Algorithmic Mitigation Models.
          </p>
        </div>
      </section>

      {/* =========================================================
          SECTION 6.1: What is a PD Array? (Premium vs Discount Matrix)
      ========================================================= */}
      <section id="topic-6-1" className="min-h-screen flex flex-col items-center justify-center py-24 px-4 sm:px-6 relative z-10">
        <div className="w-full max-w-5xl flex flex-col">
          <div className="mb-10 text-center md:text-left">
            <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 6.1</div>
            <h2 className="text-3xl font-black font-display uppercase tracking-wide">
              What is a PD Array? (The Premium &amp; Discount Matrix)
            </h2>
          </div>

          <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl space-y-10 bg-black/40 border border-white/5">
            <div className="space-y-4">
              <p className="text-gray-400 font-light text-sm uppercase tracking-wider mb-2">
                The Foundation of Institutional Price Delivery:
              </p>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                A <strong className="text-white font-semibold">PD Array (Premium / Discount Array)</strong> is a specific institutional price reference point (such as an Order Block, Fair Value Gap, or Old High/Low) inside a defined <strong className="text-brandGold font-semibold">Dealing Range</strong>. Central bank algorithms (IPDA) deliver price in a continuous rhythm: from <span className="text-red-400 font-semibold">Premium</span> (expensive) to <span className="text-emerald-400 font-semibold">Discount</span> (cheap) and vice-versa.
              </p>
            </div>

            {/* Core 3 Zones Card Grid */}
            <div className="grid md:grid-cols-3 gap-6 font-mono text-xs">
              {/* Premium Zone */}
              <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-xl flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-red-500/20 text-red-400 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                      &gt; 50% Equilibrium
                    </span>
                    <TrendingDown className="w-5 h-5 text-red-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-display uppercase mb-2">Premium Zone</h4>
                  <p className="text-gray-300 font-sans text-xs font-light leading-relaxed">
                    Price is considered <strong className="text-white font-semibold">expensive</strong>. Smart money uses Premium arrays to <strong>sell / distribute</strong> or take profit on existing long positions.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-red-500/20 text-red-300 font-bold uppercase text-[10px] flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 shrink-0" /> Never Buy in Premium
                </div>
              </div>

              {/* Equilibrium Line */}
              <div className="bg-brandGold/10 border-2 border-brandGold/40 p-6 rounded-xl flex flex-col justify-between shadow-[0_0_20px_rgba(234,179,8,0.1)]">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-brandGold/20 text-brandGold px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                      Exactly 50.0%
                    </span>
                    <Scale className="w-5 h-5 text-brandGold" />
                  </div>
                  <h4 className="text-lg font-bold text-brandGold font-display uppercase mb-2">Equilibrium (EQ)</h4>
                  <p className="text-gray-300 font-sans text-xs font-light leading-relaxed">
                    The <strong className="text-white font-semibold">fair value center</strong> of the Dealing Range. The 50% line acts as the dividing watershed between institutional selling and institutional buying.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-brandGold/20 text-brandGold font-bold uppercase text-[10px] flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 shrink-0" /> Fair Value Baseline
                </div>
              </div>

              {/* Discount Zone */}
              <div className="bg-green-500/10 border border-green-500/30 p-6 rounded-xl flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-green-500/20 text-green-400 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                      &lt; 50% Equilibrium
                    </span>
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-display uppercase mb-2">Discount Zone</h4>
                  <p className="text-gray-300 font-sans text-xs font-light leading-relaxed">
                    Price is considered <strong className="text-white font-semibold">cheap / wholesale</strong>. Smart money uses Discount arrays to <strong>accumulate / buy</strong> long positions at institutional discounts.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-green-500/20 text-green-300 font-bold uppercase text-[10px] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> High-Probability Buy Zone
                </div>
              </div>
            </div>

            {/* Dealing Range Visual SVG Diagram */}
            <div className="bg-black/60 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="text-center space-y-1">
                <span className="text-brandGold font-mono text-xs uppercase font-bold tracking-widest block">
                  Visual Architecture
                </span>
                <h4 className="text-xl font-bold font-display uppercase text-white">
                  The Dealing Range &amp; Equilibrium Matrix
                </h4>
                <p className="text-xs text-gray-400 font-light max-w-xl mx-auto">
                  Understanding how a single Swing Low to Swing High creates a complete institutional marketplace.
                </p>
              </div>

              <div className="flex justify-center">
                <svg width="680" height="340" viewBox="0 0 680 340" className="w-full max-w-[680px] select-none">
                  <defs>
                    <linearGradient id="premGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ef4444" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#ef4444" stopOpacity="0.02" />
                    </linearGradient>
                    <linearGradient id="discGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22c55e" stopOpacity="0.02" />
                      <stop offset="100%" stopColor="#22c55e" stopOpacity="0.25" />
                    </linearGradient>
                    <linearGradient id="oteGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#facc15" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#facc15" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>

                  {/* Grid Lines */}
                  <line x1="60" y1="40" x2="620" y2="40" stroke="rgba(255,255,255,0.06)" strokeDasharray="3,3" />
                  <line x1="60" y1="170" x2="620" y2="170" stroke="rgba(255,255,255,0.1)" strokeDasharray="4,4" />
                  <line x1="60" y1="300" x2="620" y2="300" stroke="rgba(255,255,255,0.06)" strokeDasharray="3,3" />

                  {/* Premium Background Fill */}
                  <rect x="60" y="40" width="560" height="130" fill="url(#premGradient)" rx="4" />
                  <text x="75" y="70" fill="#f87171" fontSize="12" fontFamily="monospace" fontWeight="bold" opacity="0.9">
                    PREMIUM ZONE (&gt; 50%) — INSTITUTIONAL SELLING
                  </text>

                  {/* Equilibrium 50% Center Line */}
                  <line x1="60" y1="170" x2="620" y2="170" stroke="#facc15" strokeWidth="2" strokeDasharray="6,4" />
                  <rect x="270" y="158" width="140" height="24" rx="4" fill="#0b0f17" stroke="#facc15" strokeWidth="1" />
                  <text x="340" y="174" fill="#facc15" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                    EQUILIBRIUM (50.0%)
                  </text>

                  {/* Discount Background Fill */}
                  <rect x="60" y="170" width="560" height="130" fill="url(#discGradient)" rx="4" />
                  <text x="75" y="285" fill="#4ade80" fontSize="12" fontFamily="monospace" fontWeight="bold" opacity="0.9">
                    DISCOUNT ZONE (&lt; 50%) — INSTITUTIONAL BUYING
                  </text>

                  {/* OTE Highlight Zone (between 62% and 79% = y: 220 to 245) */}
                  <rect x="60" y="205" width="560" height="42" fill="url(#oteGradient)" stroke="#facc15" strokeWidth="1" strokeDasharray="2,2" />
                  <text x="500" y="222" fill="#facc15" fontSize="9" fontFamily="monospace" fontWeight="bold">
                    OTE SWEET SPOT (62% - 79%)
                  </text>
                  <text x="500" y="236" fill="#fef08a" fontSize="8" fontFamily="monospace">
                    70.5% ICT Precision Level
                  </text>

                  {/* Price Path tracing Swing Low to Swing High to OTE Retracement to Expansion */}
                  <path
                    d="M 100,300 L 160,210 L 220,130 L 280,40"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="3.5"
                  />
                  {/* Swing Low Node */}
                  <circle cx="100" cy="300" r="5" fill="#22c55e" stroke="#ffffff" strokeWidth="1.5" />
                  <text x="100" y="325" fill="#4ade80" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                    0.0 (SWING LOW)
                  </text>

                  {/* Swing High Node */}
                  <circle cx="280" cy="40" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
                  <text x="280" y="25" fill="#f87171" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                    1.0 (SWING HIGH)
                  </text>

                  {/* Retracement Path into OTE Discount */}
                  <path
                    d="M 280,40 L 340,110 L 400,225"
                    fill="none"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="2.5"
                    strokeDasharray="4,4"
                  />

                  {/* Entry Limit at 70.5% in Discount FVG */}
                  <circle cx="400" cy="225" r="6" fill="#facc15" stroke="#000" strokeWidth="2" />
                  <text x="415" y="220" fill="#fde047" fontSize="10" fontFamily="monospace" fontWeight="bold">
                    BUY ENTRY (in Discount FVG)
                  </text>

                  {/* Expansion Path into -0.27 / -0.62 targets */}
                  <path
                    d="M 400,225 L 480,110 L 560,30"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="3.5"
                  />
                  <circle cx="560" cy="30" r="5" fill="#22c55e" />
                  <text x="560" y="15" fill="#4ade80" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                    TP EXTENSION (-0.27 / -0.62)
                  </text>
                </svg>
              </div>
            </div>

            {/* Interactive Dealing Range & Fibonacci OTE Calculator */}
            <div className="bg-black/60 border border-brandGold/20 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <h4 className="text-xl font-bold font-display uppercase tracking-wider text-white flex items-center gap-2">
                    <Sliders className="w-5 h-5 text-brandGold" /> Interactive Dealing Range &amp; OTE Calculator
                  </h4>
                  <p className="text-xs text-gray-400 font-light mt-1">
                    Enter the Swing High and Swing Low to generate exact institutional PD Array &amp; OTE levels.
                  </p>
                </div>

                <div className="flex bg-black/40 rounded-lg p-1 border border-white/10">
                  <button
                    onClick={() => setDirectionMode('bullish')}
                    className={`px-3 py-1.5 rounded text-xs font-bold font-mono transition-all ${
                      directionMode === 'bullish'
                        ? 'bg-green-500 text-black shadow'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Bullish Dealing Range
                  </button>
                  <button
                    onClick={() => setDirectionMode('bearish')}
                    className={`px-3 py-1.5 rounded text-xs font-bold font-mono transition-all ${
                      directionMode === 'bearish'
                        ? 'bg-red-500 text-white shadow'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Bearish Dealing Range
                  </button>
                </div>
              </div>

              {/* Price Inputs */}
              <div className="grid sm:grid-cols-2 gap-4 font-mono text-xs">
                <div className="bg-black/40 p-4 rounded-xl border border-white/5 space-y-2">
                  <label className="text-gray-400 block font-semibold">
                    {directionMode === 'bullish' ? 'Swing Low (0.0 Origin)' : 'Swing Low (1.0 Invalidation)'}:
                  </label>
                  <input
                    type="number"
                    step="0.0001"
                    value={swingLowPrice}
                    onChange={(e) => setSwingLowPrice(parseFloat(e.target.value) || 0)}
                    className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white font-bold text-sm focus:outline-none focus:border-brandGold"
                  />
                </div>

                <div className="bg-black/40 p-4 rounded-xl border border-white/5 space-y-2">
                  <label className="text-gray-400 block font-semibold">
                    {directionMode === 'bullish' ? 'Swing High (1.0 Deal Peak)' : 'Swing High (0.0 Origin)'}:
                  </label>
                  <input
                    type="number"
                    step="0.0001"
                    value={swingHighPrice}
                    onChange={(e) => setSwingHighPrice(parseFloat(e.target.value) || 0)}
                    className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white font-bold text-sm focus:outline-none focus:border-brandGold"
                  />
                </div>
              </div>

              {/* Real-time Level Matrix Output */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
                <div className="bg-red-500/10 border border-red-500/25 p-3 rounded-lg text-center">
                  <span className="text-[10px] text-red-400 font-bold uppercase block">Premium Threshold</span>
                  <span className="text-white font-bold text-sm mt-1 block">&gt; {equilibrium.toFixed(4)}</span>
                  <span className="text-[9px] text-gray-500">Sell / Target Zone</span>
                </div>

                <div className="bg-brandGold/10 border border-brandGold/30 p-3 rounded-lg text-center">
                  <span className="text-[10px] text-brandGold font-bold uppercase block">Equilibrium (50.0%)</span>
                  <span className="text-brandGold font-bold text-sm mt-1 block">{equilibrium.toFixed(4)}</span>
                  <span className="text-[9px] text-gray-400">Balance Line</span>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/30 p-3 rounded-lg text-center">
                  <span className="text-[10px] text-yellow-400 font-bold uppercase block">OTE Sweet Spot (70.5%)</span>
                  <span className="text-yellow-300 font-bold text-sm mt-1 block">{ote705.toFixed(4)}</span>
                  <span className="text-[9px] text-gray-400">Optimal Entry</span>
                </div>

                <div className="bg-green-500/10 border border-green-500/25 p-3 rounded-lg text-center">
                  <span className="text-[10px] text-green-400 font-bold uppercase block">Discount Threshold</span>
                  <span className="text-white font-bold text-sm mt-1 block">&lt; {equilibrium.toFixed(4)}</span>
                  <span className="text-[9px] text-gray-500">Buy / Wholesale Zone</span>
                </div>
              </div>

              {/* Fibonacci Matrix Table */}
              <div className="overflow-x-auto border border-white/5 rounded-xl font-mono text-xs">
                <table className="w-full text-left">
                  <thead className="bg-black/80 text-[10px] uppercase text-gray-400 border-b border-white/10">
                    <tr>
                      <th className="p-3">Fib Level</th>
                      <th className="p-3">Calculated Price</th>
                      <th className="p-3">Classification</th>
                      <th className="p-3">Institutional Execution Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-light">
                    <tr className="hover:bg-white/[0.02]">
                      <td className="p-3 font-bold text-gray-400">-0.62 Extension</td>
                      <td className="p-3 font-bold text-green-400">{targetExt62.toFixed(4)}</td>
                      <td className="p-3"><span className="text-green-400 font-semibold">Macro Target</span></td>
                      <td className="p-3 text-gray-400">Full Profit Realization / Final Run Target</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02]">
                      <td className="p-3 font-bold text-gray-400">-0.27 Extension</td>
                      <td className="p-3 font-bold text-green-400">{targetExt27.toFixed(4)}</td>
                      <td className="p-3"><span className="text-green-400 font-semibold">Primary Target</span></td>
                      <td className="p-3 text-gray-400">Take Profit 1 (TP1) &amp; Partial Scale Out</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] bg-red-500/5">
                      <td className="p-3 font-bold text-red-400">1.00 (Dealing Peak)</td>
                      <td className="p-3 font-bold text-white">{swingHighPrice.toFixed(4)}</td>
                      <td className="p-3"><span className="text-red-400 font-semibold">Premium Extreme</span></td>
                      <td className="p-3 text-gray-400">Buy-Side Liquidity Pool / Rejection Block</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] bg-brandGold/5">
                      <td className="p-3 font-bold text-brandGold">0.50 (Equilibrium)</td>
                      <td className="p-3 font-bold text-brandGold">{equilibrium.toFixed(4)}</td>
                      <td className="p-3"><span className="text-brandGold font-semibold">Fair Value Baseline</span></td>
                      <td className="p-3 text-gray-400">Dividing Watershed between Buy and Sell Orders</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] bg-yellow-500/10">
                      <td className="p-3 font-bold text-yellow-400">0.62 (OTE Start)</td>
                      <td className="p-3 font-bold text-yellow-300">{ote62.toFixed(4)}</td>
                      <td className="p-3"><span className="text-yellow-400 font-semibold">Discount Entry</span></td>
                      <td className="p-3 text-gray-400">Aggressive limit orders placed here</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] bg-yellow-500/15">
                      <td className="p-3 font-bold text-yellow-300">0.705 (OTE Sweet Spot)</td>
                      <td className="p-3 font-bold text-yellow-200">{ote705.toFixed(4)}</td>
                      <td className="p-3"><span className="text-brandGold font-extrabold">Optimal Sweet Spot</span></td>
                      <td className="p-3 text-gray-300 font-semibold">Highest risk-to-reward limit order execution</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] bg-yellow-500/10">
                      <td className="p-3 font-bold text-yellow-400">0.79 (Deep OTE)</td>
                      <td className="p-3 font-bold text-yellow-300">{ote79.toFixed(4)}</td>
                      <td className="p-3"><span className="text-yellow-400 font-semibold">Deep Discount</span></td>
                      <td className="p-3 text-gray-400">Last boundary for valid institutional mitigation</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] bg-green-500/5">
                      <td className="p-3 font-bold text-green-400">0.00 (Dealing Origin)</td>
                      <td className="p-3 font-bold text-white">{swingLowPrice.toFixed(4)}</td>
                      <td className="p-3"><span className="text-green-400 font-semibold">Discount Extreme</span></td>
                      <td className="p-3 text-gray-400">Invalidation Level (Stop Loss sits below this point)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6.2: The ICT PD Array Hierarchy Matrix (Top-Down)
      ========================================================= */}
      <section id="topic-6-2" className="min-h-screen flex flex-col items-center justify-center py-24 px-4 sm:px-6 relative z-10">
        <div className="w-full max-w-5xl flex flex-col">
          <div className="mb-10 text-center md:text-left">
            <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 6.2</div>
            <h2 className="text-3xl font-black font-display uppercase tracking-wide">
              The ICT PD Array Hierarchy Matrix (Top-Down Ladder)
            </h2>
          </div>

          <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl space-y-10 bg-black/40 border border-white/5">
            <div className="space-y-4">
              <p className="text-gray-400 font-light text-sm uppercase tracking-wider mb-2">
                The Algorithmic Priority Ladder:
              </p>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                IPDA does not choose levels at random. When price expands, it moves systematically down or up through the <strong className="text-white font-semibold">PD Array Hierarchy</strong>. The ladder below illustrates the exact institutional ranking order from the extreme high to the deep discount.
              </p>
            </div>

            {/* Matrix Selector Tabs */}
            <div className="flex justify-center md:justify-start gap-4">
              <button
                onClick={() => { setSelectedArrayTab('premium'); setActiveArrayDetail(2); }}
                className={`px-6 py-3 rounded-xl font-bold font-mono text-xs uppercase tracking-widest transition-all ${
                  selectedArrayTab === 'premium'
                    ? 'bg-red-500/20 text-red-400 border border-red-500/50 shadow'
                    : 'bg-black/30 text-gray-400 border border-white/5 hover:text-white'
                }`}
              >
                Premium PD Array Matrix (Top Down)
              </button>
              <button
                onClick={() => { setSelectedArrayTab('discount'); setActiveArrayDetail(2); }}
                className={`px-6 py-3 rounded-xl font-bold font-mono text-xs uppercase tracking-widest transition-all ${
                  selectedArrayTab === 'discount'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/50 shadow'
                    : 'bg-black/30 text-gray-400 border border-white/5 hover:text-white'
                }`}
              >
                Discount PD Array Matrix (Bottom Up)
              </button>
            </div>

            {/* Interactive Hierarchy Split View */}
            <div className="grid lg:grid-cols-12 gap-6 items-start">
              {/* Left: Interactive Ladder */}
              <div className="lg:col-span-6 space-y-2 font-mono">
                {currentHierarchy.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveArrayDetail(idx)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between group ${
                      activeArrayDetail === idx
                        ? `${item.color} font-bold shadow-md scale-[1.01]`
                        : 'bg-white/[0.02] border-white/5 text-gray-400 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold">
                        {item.id}
                      </span>
                      <span className="text-xs uppercase tracking-wide">{item.name}</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 font-sans">
                      {item.badge}
                    </span>
                  </button>
                ))}
              </div>

              {/* Right: Selected PD Array Deep Dive Card */}
              <div className="lg:col-span-6 bg-black/60 border border-white/10 p-6 rounded-2xl space-y-4 relative overflow-hidden">
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-[10px] text-brandGold uppercase font-bold font-mono tracking-widest">
                    Rank #{currentDetail.id} in Hierarchy
                  </span>
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded ${currentDetail.color}`}>
                    {currentDetail.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display uppercase text-white">
                  {currentDetail.name}
                </h3>

                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  {currentDetail.desc}
                </p>

                <div className="bg-black/40 border border-white/5 p-4 rounded-xl space-y-2 font-mono text-xs">
                  <span className="text-[10px] text-gray-400 uppercase font-bold block">
                    Institutional Role &amp; Execution:
                  </span>
                  <span className="text-brandGold font-semibold block">
                    {currentDetail.role}
                  </span>
                </div>

                <div className="p-3 bg-brandGold/5 border border-brandGold/20 rounded-lg text-[11px] text-gray-300 leading-relaxed font-light">
                  <Lightbulb className="w-4 h-4 inline mr-1 text-brandGold" />
                  <strong>Smart Money Rule:</strong> Always frame your trade setups around a higher-timeframe PD Array (Daily / 4H) and execute on the lower-timeframe array (15m / 5m) once alignment is confirmed.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6.3: Core PD Arrays Deep Dive (with Custom SVGs)
      ========================================================= */}
      <section id="topic-6-3" className="min-h-screen flex flex-col items-center justify-center py-24 px-4 sm:px-6 relative z-10">
        <div className="w-full max-w-5xl flex flex-col">
          <div className="mb-10 text-center md:text-left">
            <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 6.3</div>
            <h2 className="text-3xl font-black font-display uppercase tracking-wide">
              Core PD Arrays Explained with Visual Models
            </h2>
          </div>

          <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl space-y-12 bg-black/40 border border-white/5">
            {/* 1. Bullish vs Bearish Order Blocks */}
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-3">
                <span className="text-xs font-bold text-brandGold font-mono uppercase tracking-widest block">
                  PD Array 1
                </span>
                <h3 className="text-2xl font-bold font-display uppercase text-white">
                  Order Block (OB) vs. Breaker Block (BB)
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6 items-stretch">
                {/* Order Block Card */}
                <div className="bg-black/50 border border-white/10 p-6 rounded-xl flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-lg font-bold font-display uppercase text-brandGold mb-2 flex items-center gap-2">
                      <Layers className="w-4 h-4" /> Order Block (OB) Anatomy
                    </h4>
                    <p className="text-xs text-gray-300 font-light leading-relaxed">
                      An **Order Block** is the last opposing candle before an aggressive displacement that breaks market structure and creates an imbalance (FVG).
                    </p>
                    <ul className="text-xs text-gray-400 space-y-1.5 mt-3 font-sans list-disc list-inside">
                      <li><strong>Bullish OB:</strong> Last down-candle before a violent rally breaking swing high.</li>
                      <li><strong>Bearish OB:</strong> Last up-candle before a violent plunge breaking swing low.</li>
                      <li><strong>Mean Threshold:</strong> The 50% midpoint of the Order Block body is the critical defense line.</li>
                    </ul>
                  </div>

                  {/* SVG for Bullish Order Block */}
                  <div className="bg-black/70 p-4 rounded-lg border border-white/5 flex justify-center">
                    <svg width="340" height="150" viewBox="0 0 340 150" className="w-full select-none">
                      {/* Candle 1 (Down Candle - Order Block) */}
                      <rect x="50" y="60" width="24" height="40" fill="#ef4444" rx="2" />
                      <line x1="62" y1="45" x2="62" y2="115" stroke="#ef4444" strokeWidth="2" />
                      <text x="62" y="135" fill="#f87171" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                        BULLISH OB
                      </text>

                      {/* Mean Threshold (50% of OB) */}
                      <line x1="30" y1="80" x2="280" y2="80" stroke="#facc15" strokeWidth="1" strokeDasharray="3,3" />
                      <text x="275" y="75" fill="#facc15" fontSize="7" fontFamily="monospace" textAnchor="end">
                        Mean Threshold (50%)
                      </text>

                      {/* Displacement Candle 2 (Explosive Up) */}
                      <rect x="90" y="30" width="28" height="65" fill="#22c55e" rx="2" />
                      <line x1="104" y1="15" x2="104" y2="105" stroke="#22c55e" strokeWidth="2" />

                      {/* Displacement Candle 3 (Explosive Up) */}
                      <rect x="135" y="10" width="28" height="60" fill="#22c55e" rx="2" />
                      <line x1="149" y1="5" x2="149" y2="80" stroke="#22c55e" strokeWidth="2" />
                      <text x="149" y="95" fill="#4ade80" fontSize="7.5" fontFamily="monospace" textAnchor="middle">
                        Displacement (MSS)
                      </text>

                      {/* Retracement Candle tapping Order Block */}
                      <rect x="200" y="45" width="22" height="35" fill="#ef4444" rx="2" />
                      <line x1="211" y1="35" x2="211" y2="78" stroke="#ef4444" strokeWidth="2" />
                      <circle cx="211" cy="78" r="4" fill="#facc15" stroke="#000" strokeWidth="1" />
                      <text x="220" y="92" fill="#facc15" fontSize="8" fontFamily="monospace" fontWeight="bold">
                        BUY ENTRY
                      </text>
                    </svg>
                  </div>
                </div>

                {/* Breaker Block Card */}
                <div className="bg-black/50 border border-white/10 p-6 rounded-xl flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-lg font-bold font-display uppercase text-purple-400 mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4" /> Breaker Block (BB) Formation
                    </h4>
                    <p className="text-xs text-gray-300 font-light leading-relaxed">
                      A **Breaker Block** is a failed Order Block that previously purged liquidity (made a higher high or lower low), but was violently invalidated when price shifted structure.
                    </p>
                    <ul className="text-xs text-gray-400 space-y-1.5 mt-3 font-sans list-disc list-inside">
                      <li><strong>Trapped Capital:</strong> Retail traders bought at the high; smart money ran stops down.</li>
                      <li><strong>Role Reversal:</strong> The previous up-candle now becomes powerful resistance.</li>
                      <li><strong>Higher Win Rate:</strong> Breakers carry higher conviction than regular Order Blocks.</li>
                    </ul>
                  </div>

                  {/* SVG for Breaker Block */}
                  <div className="bg-black/70 p-4 rounded-lg border border-white/5 flex justify-center">
                    <svg width="340" height="150" viewBox="0 0 340 150" className="w-full select-none">
                      {/* Structure Path: Low -> High -> Higher High -> Violate Low -> Retest */}
                      <path
                        d="M 20,120 L 70,60 L 120,100 L 170,25 L 230,135 L 275,75 L 320,135"
                        fill="none"
                        stroke="#a855f7"
                        strokeWidth="2.5"
                      />

                      {/* Liquidity Sweep high */}
                      <circle cx="170" cy="25" r="3.5" fill="#facc15" />
                      <text x="170" y="16" fill="#facc15" fontSize="7" fontFamily="monospace" textAnchor="middle">
                        BSL SWEEP (Stop Hunt)
                      </text>

                      {/* Breaker Level Box at y: 60-80 */}
                      <rect x="70" y="60" width="220" height="20" fill="rgba(168,85,247,0.15)" stroke="#a855f7" strokeWidth="1" strokeDasharray="2,2" rx="2" />
                      <text x="80" y="73" fill="#c084fc" fontSize="7.5" fontFamily="monospace" fontWeight="bold">
                        BEARISH BREAKER BLOCK
                      </text>

                      {/* Market Structure Shift */}
                      <line x1="120" y1="100" x2="240" y2="100" stroke="#ef4444" strokeDasharray="3,3" />
                      <text x="200" y="112" fill="#f87171" fontSize="7" fontFamily="monospace">
                        MSS (Shift)
                      </text>

                      {/* Entry at Retest of Breaker */}
                      <circle cx="275" cy="75" r="4.5" fill="#facc15" stroke="#000" strokeWidth="1" />
                      <text x="275" y="65" fill="#facc15" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                        SELL ENTRY
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Mitigation Block vs Inversion FVG */}
            <div className="space-y-6 pt-4 border-t border-white/5">
              <div className="border-b border-white/10 pb-3">
                <span className="text-xs font-bold text-brandGold font-mono uppercase tracking-widest block">
                  PD Array 2
                </span>
                <h3 className="text-2xl font-bold font-display uppercase text-white">
                  Mitigation Block vs. Inversion Fair Value Gap (IFVG)
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6 items-stretch">
                {/* Mitigation Block Card */}
                <div className="bg-black/50 border border-white/5 p-6 rounded-xl space-y-4">
                  <h4 className="text-lg font-bold font-display uppercase text-sky-400 flex items-center gap-2">
                    <Scale className="w-4 h-4" /> Mitigation Block (MB)
                  </h4>
                  <p className="text-xs text-gray-300 font-light leading-relaxed">
                    A **Mitigation Block** occurs when the price tries to make a higher high, but <strong className="text-white">fails to sweep liquidity</strong> (printing a Lower High), then collapses and breaks the swing low.
                  </p>
                  <div className="bg-sky-500/10 border border-sky-500/20 p-3 rounded-lg text-xs font-mono text-sky-300 space-y-1">
                    <div>• <strong>Breaker Block:</strong> SWEPT prior liquidity (Higher High) before shifting.</div>
                    <div>• <strong>Mitigation Block:</strong> FAILED to sweep liquidity (Lower High) before shifting.</div>
                  </div>
                </div>

                {/* Inversion FVG Card */}
                <div className="bg-black/50 border border-white/5 p-6 rounded-xl space-y-4">
                  <h4 className="text-lg font-bold font-display uppercase text-amber-400 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> Inversion Fair Value Gap (IFVG)
                  </h4>
                  <p className="text-xs text-gray-300 font-light leading-relaxed">
                    An **Inversion FVG** is a Fair Value Gap that completely failed to hold support/resistance and was aggressively breached. Once breached, it <strong className="text-white">inverts its polarity</strong>.
                  </p>
                  <div className="bg-amber-500/10 border border-amber-500/20 p-3 rounded-lg text-xs font-mono text-amber-300 space-y-1">
                    <div>• <strong>Bullish FVG Violate:</strong> Price drops through it → Flips into Resistance.</div>
                    <div>• <strong>Bearish FVG Violate:</strong> Price surges through it → Flips into Support.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6.4: The ICT Optimal Trade Entry (OTE) Model
      ========================================================= */}
      <section id="topic-6-4" className="min-h-screen flex flex-col items-center justify-center py-24 px-4 sm:px-6 relative z-10">
        <div className="w-full max-w-5xl flex flex-col">
          <div className="mb-10 text-center md:text-left">
            <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 6.4</div>
            <h2 className="text-3xl font-black font-display uppercase tracking-wide">
              The Optimal Trade Entry (OTE) Model
            </h2>
          </div>

          <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl space-y-10 bg-black/40 border border-white/5">
            <div className="space-y-4">
              <p className="text-gray-400 font-light text-sm uppercase tracking-wider mb-2">
                The Precision Fibonacci Retracement Template:
              </p>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                The **ICT Optimal Trade Entry (OTE)** model utilizes precise Fibonacci ratios calibrated to institutional algorithms. It identifies the deepest, highest-probability discount zone inside a dealing range.
              </p>
            </div>

            {/* OTE Anatomy Card Grid */}
            <div className="grid md:grid-cols-3 gap-6 font-mono text-xs">
              <div className="bg-black/50 border border-white/10 p-5 rounded-xl space-y-2">
                <span className="text-yellow-400 font-bold block text-sm">1. 0.62 Level (Threshold)</span>
                <p className="text-gray-400 font-sans text-xs font-light leading-relaxed">
                  The minimum entry threshold for a valid institutional discount pullback. Aggressive traders place early limit orders here.
                </p>
              </div>

              <div className="bg-brandGold/10 border-2 border-brandGold/40 p-5 rounded-xl space-y-2 shadow-[0_0_20px_rgba(234,179,8,0.15)]">
                <span className="text-brandGold font-extrabold block text-sm">2. 0.705 Sweet Spot</span>
                <p className="text-gray-300 font-sans text-xs font-light leading-relaxed">
                  The mathematical sweet spot of institutional order flow. Provides the absolute highest Risk-to-Reward ratio with tight stop loss placement.
                </p>
              </div>

              <div className="bg-black/50 border border-white/10 p-5 rounded-xl space-y-2">
                <span className="text-yellow-400 font-bold block text-sm">3. 0.79 Level (Deep Bound)</span>
                <p className="text-gray-400 font-sans text-xs font-light leading-relaxed">
                  Deep discount mitigation boundary. Stop loss is strictly placed just below 1.0 (Swing Low origin) for maximum capital protection.
                </p>
              </div>
            </div>

            {/* 4-Step OTE Execution Blueprint */}
            <div className="bg-black/60 border border-white/10 p-6 sm:p-8 rounded-2xl space-y-6">
              <h4 className="text-lg font-bold font-display uppercase tracking-wider text-brandGold flex items-center gap-2">
                <Crosshair className="w-5 h-5" /> The 4-Step OTE Execution Checklist
              </h4>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
                <div className="bg-black/40 p-4 rounded-xl border border-white/5 space-y-2">
                  <span className="w-6 h-6 rounded-full bg-brandGold/20 text-brandGold font-bold flex items-center justify-center text-xs">1</span>
                  <h5 className="text-white font-bold uppercase text-xs">Liquidity Sweep</h5>
                  <p className="text-gray-400 font-sans text-[11px] font-light leading-relaxed">
                    Price sweeps Old High (BSL) or Old Low (SSL) on the higher timeframe.
                  </p>
                </div>

                <div className="bg-black/40 p-4 rounded-xl border border-white/5 space-y-2">
                  <span className="w-6 h-6 rounded-full bg-brandGold/20 text-brandGold font-bold flex items-center justify-center text-xs">2</span>
                  <h5 className="text-white font-bold uppercase text-xs">Displacement &amp; MSS</h5>
                  <p className="text-gray-400 font-sans text-[11px] font-light leading-relaxed">
                    Aggressive large-bodied candles break structure, confirming institutional shift.
                  </p>
                </div>

                <div className="bg-brandGold/40 border border-brandGold/30 p-4 rounded-xl space-y-2">
                  <span className="w-6 h-6 rounded-full bg-brandGold text-brandDark font-bold flex items-center justify-center text-xs">3</span>
                  <h5 className="text-brandGold font-bold uppercase text-xs">Pullback to OTE</h5>
                  <p className="text-gray-300 font-sans text-[11px] font-light leading-relaxed">
                    Price retraces into the 62% - 79% (0.705) zone, tapping into a discount FVG or OB.
                  </p>
                </div>

                <div className="bg-black/40 p-4 rounded-xl border border-white/5 space-y-2">
                  <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 font-bold flex items-center justify-center text-xs">4</span>
                  <h5 className="text-white font-bold uppercase text-xs">Target Expansion</h5>
                  <p className="text-gray-400 font-sans text-[11px] font-light leading-relaxed">
                    Price surges to target the opposing liquidity pool (-0.27 and -0.62 extensions).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6.5: Practical Rules & Algorithmic Confluence
      ========================================================= */}
      <section id="topic-6-5" className="min-h-screen flex flex-col items-center justify-center py-24 px-4 sm:px-6 relative z-10">
        <div className="w-full max-w-5xl flex flex-col">
          <div className="mb-10 text-center md:text-left">
            <div className="text-brandGold font-bold tracking-widest uppercase text-sm mb-2">Section 6.5</div>
            <h2 className="text-3xl font-black font-display uppercase tracking-wide">
              PD Array Golden Rules &amp; Confluence
            </h2>
          </div>

          <div className="glass-panel border-t-4 border-t-brandGold p-8 sm:p-10 md:p-14 rounded-xl space-y-8 bg-black/40 border border-white/5">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Golden Rule 1 */}
              <div className="bg-black/50 border border-white/10 p-6 rounded-xl space-y-3">
                <span className="text-brandGold font-bold font-mono uppercase text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 1. Premium vs. Discount Discipline
                </span>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  Never execute buy orders when price is in the <strong className="text-red-400">Premium</strong> half (&gt;50%) of the dealing range. Never execute sell orders when price is in the <strong className="text-green-400">Discount</strong> half (&lt;50%). This single rule eliminates 70% of retail losses.
                </p>
              </div>

              {/* Golden Rule 2 */}
              <div className="bg-black/50 border border-white/10 p-6 rounded-xl space-y-3">
                <span className="text-brandGold font-bold font-mono uppercase text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 2. Confluence is King
                </span>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  A high-probability trade occurs when <strong className="text-white">multiple PD Arrays align at the same price</strong>: e.g., a Bullish Order Block + 5m Fair Value Gap nested inside the 70.5% OTE level during London or NY Killzone.
                </p>
              </div>

              {/* Golden Rule 3 */}
              <div className="bg-black/50 border border-white/10 p-6 rounded-xl space-y-3">
                <span className="text-brandGold font-bold font-mono uppercase text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 3. Top-Down PD Array Delivery
                </span>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  High-timeframe (Daily / 4H) PD Arrays always overpower lower-timeframe (5m / 1m) arrays. Look at where the daily candle is drawing towards, and use lower timeframes only for timing the entry.
                </p>
              </div>

              {/* Golden Rule 4 */}
              <div className="bg-black/50 border border-white/10 p-6 rounded-xl space-y-3">
                <span className="text-brandGold font-bold font-mono uppercase text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 4. Mean Threshold Defense
                </span>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  For any valid Order Block or Fair Value Gap, candle bodies should not close past the <strong className="text-white font-semibold">50% midpoint (Mean Threshold / Consequent Encroachment)</strong>. Wicks are acceptable; candle body closes signal invalidation.
                </p>
              </div>
            </div>

            {/* Final Summary Callout */}
            <div className="bg-brandGold/5 border border-brandGold/20 p-6 rounded-xl text-center space-y-3">
              <h4 className="text-brandGold font-bold font-display uppercase text-sm tracking-wider">
                Module 6 Summary: The Algorithmic Cycle
              </h4>
              <p className="text-xs text-gray-300 font-light max-w-2xl mx-auto leading-relaxed font-mono">
                External Liquidity Sweep <span className="text-brandGold">→</span> Displacement &amp; MSS <span className="text-brandGold">→</span> Retracement into Discount PD Array (62%-79% OTE) <span className="text-brandGold">→</span> Expansion into Opposing Premium Target.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
