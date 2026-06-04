import React, { useState, useMemo } from 'react';

export default function TimeframeVisualizer() {
  const [activeTf, setActiveTf] = useState('H1');
  const [hoveredCandle, setHoveredCandle] = useState(null);
  const [revealedActivity, setRevealedActivity] = useState(false);

  // Timeframe configurations
  const timeframes = {
    M1: {
      id: 'M1',
      label: '1 Minute (M1)',
      candleCount: 180, // Representative dense count
      detail: 'Super High Detail',
      noise: 'High Market Noise',
      desc: '1 candle = 1 minute of price action. Used by high-frequency scalpers to spot micro-sweeps and immediate structure shifts. Highly chaotic with massive noise.',
      movieTitle: 'Frame-by-Frame Film Reel 🎞️',
      movieDesc: 'Like pausing a movie second-by-second. You see the actor\'s eye blink, dust floating in the air, and tiny micro-movements, but it\'s extremely easy to lose track of the overall storyline.',
      durationText: '1,440 candles per day'
    },
    M5: {
      id: 'M5',
      label: '5 Minutes (M5)',
      candleCount: 96,
      detail: 'High Detail',
      noise: 'Moderate-High Noise',
      desc: '1 candle = 5 minutes of price action. Perfect for executing precise entries inside order blocks once the higher-timeframe trend is established.',
      movieTitle: 'Slow-Motion Scenes 🎬',
      movieDesc: 'Like watching a film at 0.25x speed. You see every specific gesture and movement in detail, but it takes a long time for the scene\'s main plot to unfold.',
      durationText: '288 candles per day'
    },
    M15: {
      id: 'M15',
      label: '15 Minutes (M15)',
      candleCount: 48,
      detail: 'Medium Detail',
      noise: 'Moderate Noise',
      desc: '1 candle = 15 minutes of price action. The absolute bread and butter for intraday day traders to identify local session market structures.',
      movieTitle: 'Short Teaser / Clip 🎥',
      movieDesc: 'Like watching a 30-second scene or preview clip. You understand the local dialogue and conflict, but you don\'t know the overall ending of the movie.',
      durationText: '96 candles per day'
    },
    H1: {
      id: 'H1',
      label: '1 Hour (H1)',
      candleCount: 24,
      detail: 'Clean Trend View',
      noise: 'Low Noise',
      desc: '1 candle = 1 hour of price action. Used to analyze intraday session flow (Asian, London, NY) and determine key session biases.',
      movieTitle: 'Movie Chapter 📖',
      movieDesc: 'Like watching a full chapter or act of the film. You see the key plot developments, major conflicts, and resolution points for that specific hour of the story.',
      durationText: '24 candles per day'
    },
    H4: {
      id: 'H4',
      label: '4 Hours (H4)',
      candleCount: 6,
      detail: 'Macro Swing Structure',
      noise: 'Very Low Noise',
      desc: '1 candle = 4 hours of price action. Heavyweight trend indicator used by swing traders to locate major institutional order blocks and market bias.',
      movieTitle: 'Major Story Arcs 🎭',
      movieDesc: 'Like watching a movie split into 3 major sections: the setup, the climax, and the resolution. You see the overarching shifts without micro details.',
      durationText: '6 candles per day'
    },
    D1: {
      id: 'D1',
      label: '1 Day (D1)',
      candleCount: 1,
      detail: 'Macro Big Picture',
      noise: 'Almost Zero Noise',
      desc: '1 candle = 24 hours of price action. Used by banks and fund managers to identify long-term direction, key liquidity pools, and major macro levels.',
      movieTitle: 'Movie Poster & Synopsis 🎫',
      movieDesc: 'Like looking at the official poster and reading the synopsis. You instantly understand the genre, main theme, and final narrative without getting bogged down in individual scenes.',
      durationText: '1 candle per day'
    }
  };

  // Helper formula to define the base intraday ICT Power of 3 (PO3) price curve
  // Accumulation (Asia t: 0 -> 0.25) -> Manipulation (London t: 0.25 -> 0.35) -> Distribution (NY t: 0.35 -> 0.8) -> Pullback (t: 0.8 -> 1.0)
  const getBasePrice = (t) => {
    if (t < 0.25) {
      // Asia: tight consolidation around 1.1000
      return 1.1000 - 0.0004 * Math.sin(t * 4 * Math.PI);
    } else if (t < 0.35) {
      // London Sweep: manipulation drop to sweep sell-stops down to 1.0985
      const localT = (t - 0.25) / 0.1;
      return 1.1000 - 0.0015 * Math.sin(localT * Math.PI / 2);
    } else if (t < 0.8) {
      // NY Expansion: distribution rally to sweep buy-stops up to 1.1120
      const localT = (t - 0.35) / 0.45;
      return 1.0985 + 0.0135 * Math.sin(localT * Math.PI / 2);
    } else {
      // End of Day: profit taking pull-back down to 1.1100
      const localT = (t - 0.8) / 0.2;
      return 1.1120 - 0.0020 * localT;
    }
  };

  // Generate the candles based on selected timeframe
  const candles = useMemo(() => {
    const config = timeframes[activeTf];
    const count = config.candleCount;
    const generated = [];
    let currentOpen = 1.1000;

    for (let i = 0; i < count; i++) {
      const t = i / count;
      const nextT = (i + 1) / count;

      const baseOpen = getBasePrice(t);
      const baseClose = getBasePrice(nextT);

      // Noise amplitude decreases for higher timeframes
      let noiseAmp = 0.0008;
      if (count === 6) noiseAmp = 0.0006;
      else if (count === 24) noiseAmp = 0.0004;
      else if (count === 48) noiseAmp = 0.0003;
      else if (count === 96) noiseAmp = 0.0002;
      else if (count === 180) noiseAmp = 0.00015;

      const noiseClose = (Math.sin((i + 1) * 2.3) + Math.cos((i + 1) * 1.7)) * noiseAmp * 0.5;

      let open = i === 0 ? 1.1000 : currentOpen;
      let close = baseClose + noiseClose;

      // Force first and last values to match standard range
      if (i === 0) {
        open = 1.1000;
      }
      if (i === count - 1) {
        close = 1.1100;
      }

      // Calculate high/low wicks
      const bodyMax = Math.max(open, close);
      const bodyMin = Math.min(open, close);

      let highPrice = bodyMax + Math.abs(Math.sin(i * 1.1)) * noiseAmp * 0.8 + 0.0001;
      let lowPrice = bodyMin - Math.abs(Math.cos(i * 1.9)) * noiseAmp * 0.8 - 0.0001;

      // Clamp absolute bounds
      let high = Math.min(1.1120, highPrice);
      let low = Math.max(1.0980, lowPrice);

      // Override for the single Daily candle
      if (count === 1) {
        open = 1.1000;
        close = 1.1100;
        high = 1.1120;
        low = 1.0980;
      }

      generated.push({
        index: i,
        o: open,
        c: close,
        h: high,
        l: low,
        isBullish: close >= open
      });

      currentOpen = close;
    }
    return generated;
  }, [activeTf]);

  // Coordinate mapping helper
  const mapY = (price) => {
    const minPrice = 1.0970;
    const maxPrice = 1.1130;
    const height = 180;
    const padding = 35;
    const pct = (price - minPrice) / (maxPrice - minPrice);
    return padding + height * (1 - pct);
  };

  const startX = 65;
  const endX = 465;
  const chartWidth = endX - startX;

  const mapX = (index, count) => {
    const spacing = chartWidth / count;
    return startX + index * spacing + spacing / 2;
  };

  const getCandleWidth = (count) => {
    if (count === 1) return 60;
    const spacing = chartWidth / count;
    return Math.max(1.2, spacing * 0.7);
  };

  // Mouse move handler for interactive tooltip
  const handleMouseMove = (e) => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const svgX = (x / rect.width) * 500;

    if (svgX >= startX && svgX <= endX) {
      const count = candles.length;
      const spacing = chartWidth / count;
      const index = Math.floor((svgX - startX) / spacing);
      if (index >= 0 && index < count) {
        setHoveredCandle(candles[index]);
      }
    }
  };

  const handleMouseLeave = () => {
    setHoveredCandle(null);
  };

  const selected = timeframes[activeTf];

  return (
    <div className="w-full space-y-12 animate-fadeIn text-gray-300 font-sans">
      
      {/* Definition Block */}
      <div className="border border-brandGold/30 bg-brandGold/5 p-6 rounded-xl relative overflow-hidden flex flex-col md:flex-row gap-6 items-center">
        <div className="w-12 h-12 rounded-xl bg-brandGold/10 flex items-center justify-center text-brandGold flex-shrink-0 border border-brandGold/20">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <div>
          <span className="text-[10px] font-bold text-brandGold uppercase tracking-widest block mb-1">Simple Definition for Students</span>
          <p className="text-sm md:text-base text-white font-light leading-relaxed">
            A <strong className="text-brandGold font-semibold">timeframe</strong> is the amount of time represented by <strong className="text-brandGold font-semibold">one single candle</strong> on a chart. Smaller timeframes show granular detail and noise, while larger timeframes show the overall market trend.
          </p>
        </div>
      </div>

      {/* Main Interactive Interactive Visualizer */}
      <div className="space-y-6">
        <div className="flex flex-col items-center justify-between gap-4 border-b border-white/5 pb-4 md:flex-row">
          <div>
            <h3 className="text-lg font-bold text-white font-display uppercase tracking-wide">
              Visualizing: EUR/USD Intraday Price Action
            </h3>
            <p className="text-xs text-gray-400 font-light mt-1">
              Observe how the exact same day (price moving from 1.1000 to 1.1100) changes detail levels.
            </p>
          </div>
          
          {/* Custom Timeframe Selector */}
          <div className="flex flex-wrap gap-1.5 bg-black/40 border border-white/10 p-1 rounded-xl">
            {Object.keys(timeframes).map((tf) => (
              <button
                key={tf}
                onClick={() => {
                  setActiveTf(tf);
                  setHoveredCandle(null);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold font-display uppercase tracking-wider transition-all duration-300 ${
                  activeTf === tf
                    ? 'bg-brandGold text-brandDark shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Panel: Movie Analogy Card */}
          <div className="lg:col-span-1 bg-black/30 border border-white/5 p-6 rounded-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brandGold/5 rounded-full blur-2xl"></div>
            <div>
              <div className="flex items-center gap-2 mb-4 text-brandGold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
                <span className="text-[10px] font-bold uppercase tracking-widest font-mono">The Movie Analogy</span>
              </div>
              <h4 className="text-white font-bold font-display text-lg uppercase tracking-wide mb-3">
                {selected.movieTitle}
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed font-light mb-6">
                {selected.movieDesc}
              </p>
            </div>

            <div className="border-t border-white/5 pt-4 space-y-3">
              <div>
                <span className="text-gray-500 text-[10px] font-bold uppercase tracking-wider block">Duration per Candle:</span>
                <span className="text-white text-xs font-mono font-medium">{selected.label.split(' ')[0]} {selected.label.split(' ')[1]}</span>
              </div>
              <div>
                <span className="text-gray-500 text-[10px] font-bold uppercase tracking-wider block">Data Density (1 Day):</span>
                <span className="text-brandGold text-xs font-mono font-bold">{selected.durationText}</span>
              </div>
              <div>
                <span className="text-gray-500 text-[10px] font-bold uppercase tracking-wider block">Market Characteristic:</span>
                <span className="text-white text-xs font-medium">{selected.noise}</span>
              </div>
            </div>
          </div>

          {/* Right Panel: Interactive SVG Chart */}
          <div className="lg:col-span-2 bg-brandDarker border border-white/10 p-6 rounded-xl flex flex-col justify-between relative overflow-hidden min-h-[340px]">
            {/* Live Chart HUD */}
            <div className="flex justify-between items-center border-b border-white/5 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-white font-mono bg-white/5 px-2.5 py-1 rounded border border-white/10">
                  EURUSD, {activeTf}
                </span>
                <span className="text-[10px] font-medium text-gray-500 uppercase tracking-widest">
                  {selected.detail}
                </span>
              </div>

              {/* Live Info Bar on Hover */}
              <div className="text-[11px] font-mono flex gap-3 text-gray-400">
                {hoveredCandle ? (
                  <>
                    <span>O: <span className={hoveredCandle.isBullish ? 'text-green-400' : 'text-red-400'}>{hoveredCandle.o.toFixed(4)}</span></span>
                    <span>H: <span className="text-gray-200">{hoveredCandle.h.toFixed(4)}</span></span>
                    <span>L: <span className="text-gray-200">{hoveredCandle.l.toFixed(4)}</span></span>
                    <span>C: <span className={hoveredCandle.isBullish ? 'text-green-400' : 'text-red-400'}>{hoveredCandle.c.toFixed(4)}</span></span>
                  </>
                ) : (
                  <span className="text-gray-500 italic animate-pulse">Hover over candles to view details</span>
                )}
              </div>
            </div>

            {/* SVG Chart area */}
            <div className="flex-1 flex items-center justify-center py-4 relative">
              <svg
                viewBox="0 0 500 260"
                className="w-full h-full cursor-crosshair select-none"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* Horizontal Price Grid Lines */}
                <g stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1">
                  <line x1={startX} y1={mapY(1.1120)} x2={endX} y2={mapY(1.1120)} />
                  <line x1={startX} y1={mapY(1.1085)} x2={endX} y2={mapY(1.1085)} />
                  <line x1={startX} y1={mapY(1.1050)} x2={endX} y2={mapY(1.1050)} />
                  <line x1={startX} y1={mapY(1.1015)} x2={endX} y2={mapY(1.1015)} />
                  <line x1={startX} y1={mapY(1.0980)} x2={endX} y2={mapY(1.0980)} />
                </g>

                {/* Y-Axis Labels */}
                <g fill="rgba(255,255,255,0.3)" fontSize="9" fontFamily="monospace" textAnchor="end">
                  <text x={startX - 10} y={mapY(1.1120) + 3}>1.1120 (Max High)</text>
                  <text x={startX - 10} y={mapY(1.1085) + 3}>1.1085</text>
                  <text x={startX - 10} y={mapY(1.1050) + 3}>1.1050 (Mid)</text>
                  <text x={startX - 10} y={mapY(1.1015) + 3}>1.1015</text>
                  <text x={startX - 10} y={mapY(1.0980) + 3}>1.0980 (Min Low)</text>
                </g>

                {/* Candle Shapes */}
                {candles.map((c, i) => {
                  const x = mapX(c.index, candles.length);
                  const w = getCandleWidth(candles.length);
                  const color = c.isBullish ? '#22c55e' : '#ef4444';
                  const strokeColor = c.isBullish ? '#4ade80' : '#f87171';
                  const yOpen = mapY(c.o);
                  const yClose = mapY(c.c);
                  const yHigh = mapY(c.h);
                  const yLow = mapY(c.l);
                  
                  const isHovered = hoveredCandle && hoveredCandle.index === c.index;

                  return (
                    <g key={i} className="transition-all duration-150">
                      {/* Wick */}
                      <line
                        x1={x}
                        y1={yHigh}
                        x2={x}
                        y2={yLow}
                        stroke={color}
                        strokeWidth={candles.length > 50 ? 1 : 1.5}
                        opacity={isHovered ? 1 : 0.75}
                      />
                      {/* Body */}
                      <rect
                        x={x - w / 2}
                        y={Math.min(yOpen, yClose)}
                        width={w}
                        height={Math.max(1, Math.abs(yOpen - yClose))}
                        fill={color}
                        fillOpacity={isHovered ? 1 : 0.8}
                        stroke={strokeColor}
                        strokeWidth={candles.length > 50 ? 0 : 0.5}
                        rx={candles.length > 40 ? 0.5 : 1.5}
                      />
                      {/* Highlight hover circle */}
                      {isHovered && (
                        <circle cx={x} cy={yClose} r="3.5" fill="#facc15" stroke="#ffffff" strokeWidth="1" />
                      )}
                    </g>
                  );
                })}

                {/* Highlight Sweep Regions (ICT Context Annotation) */}
                {activeTf === 'H4' && (
                  <>
                    {/* London Sweep Marker */}
                    <g>
                      <circle cx={mapX(0, 6)} cy={mapY(1.0980)} r="8" fill="none" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="2,2" />
                      <text x={mapX(0, 6)} y={mapY(1.0980) + 18} fill="#ef4444" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">London SSL Sweep</text>
                    </g>
                    {/* NY High Marker */}
                    <g>
                      <circle cx={mapX(4, 6)} cy={mapY(1.1120)} r="8" fill="none" stroke="#22c55e" strokeWidth="1.2" strokeDasharray="2,2" />
                      <text x={mapX(4, 6)} y={mapY(1.1120) - 12} fill="#22c55e" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">NY BSL Sweep</text>
                    </g>
                  </>
                )}

                {/* Draw connecting structure for Single Daily Candle */}
                {activeTf === 'D1' && (
                  <g>
                    {/* High Label (Right) */}
                    <line x1="265" y1={mapY(1.1120)} x2="320" y2={mapY(1.1120)} stroke="#4ade80" strokeWidth="1" strokeDasharray="2,2" />
                    <text x="325" y={mapY(1.1120) + 3} fill="#4ade80" fontSize="9" fontFamily="monospace" textAnchor="start">← 1.1120 High Wick</text>

                    {/* Close Label (Right) */}
                    <line x1="295" y1={mapY(1.1100)} x2="320" y2={mapY(1.1100)} stroke="#22c55e" strokeWidth="1" strokeDasharray="2,2" />
                    <text x="325" y={mapY(1.1100) + 3} fill="#22c55e" fontSize="9" fontFamily="monospace" textAnchor="start">← 1.1100 Close</text>

                    {/* Open Label (Left) */}
                    <line x1="210" y1={mapY(1.1000)} x2="235" y2={mapY(1.1000)} stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2" />
                    <text x="205" y={mapY(1.1000) + 3} fill="#9ca3af" fontSize="9" fontFamily="monospace" textAnchor="end">1.1000 Open →</text>

                    {/* Low Label (Left) */}
                    <line x1="210" y1={mapY(1.0980)} x2="265" y2={mapY(1.0980)} stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2" />
                    <text x="205" y={mapY(1.0980) + 3} fill="#9ca3af" fontSize="9" fontFamily="monospace" textAnchor="end">1.0980 Low Wick →</text>
                  </g>
                )}

                {/* X-Axis Timeline */}
                <line x1={startX} y1={235} x2={endX} y2={235} stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
                <g fill="rgba(255,255,255,0.25)" fontSize="8" fontFamily="monospace" textAnchor="middle">
                  <text x={startX} y="248">00:00 (Asia Open)</text>
                  <text x={startX + chartWidth * 0.3} y="248">08:00 (London Open)</text>
                  <text x={startX + chartWidth * 0.6} y="248">16:00 (NY Midday)</text>
                  <text x={endX} y="248">24:00 (NY Close)</text>
                </g>
              </svg>
            </div>
            
            {/* Visual description */}
            <div className="border-t border-white/5 pt-4 text-xs font-light text-gray-400">
              <span className="text-brandGold font-bold uppercase text-[9px] tracking-widest block mb-1">Timeframe Characteristic:</span>
              <p className="leading-relaxed font-light text-gray-300">
                {selected.desc}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Why Timeframes Matter Table */}
      <div className="bg-black/30 border border-white/5 rounded-xl overflow-hidden p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-[10px] font-bold text-brandGold uppercase tracking-widest block mb-1">Practical Application</span>
          <h4 className="text-white font-bold font-display text-lg uppercase tracking-wide">
            Why Timeframes Matter (Trader Classifications)
          </h4>
          <p className="text-xs text-gray-400 font-light mt-1">
            Different trading styles operate on specific timeframe combinations depending on their holding times and objectives.
          </p>
        </div>

        <div className="overflow-x-auto rounded-lg border border-white/5">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 border-b border-white/10 text-brandGold font-display uppercase text-[10px] tracking-widest font-bold">
                <th className="py-4 px-6">Trader Type</th>
                <th className="py-4 px-6">Common Timeframes</th>
                <th className="py-4 px-6">Average Trade Duration</th>
                <th className="py-4 px-6">Core Operational Focus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-xs text-gray-300">
              <tr className="hover:bg-white/5 transition-all duration-300">
                <td className="py-4 px-6 font-semibold text-white">Scalper</td>
                <td className="py-4 px-6 font-mono text-brandGold">M1, M5</td>
                <td className="py-4 px-6">Seconds to Minutes</td>
                <td className="py-4 px-6 font-light">Exploiting immediate liquidity sweeps, high leverage.</td>
              </tr>
              <tr className="hover:bg-white/5 transition-all duration-300">
                <td className="py-4 px-6 font-semibold text-white">Day Trader</td>
                <td className="py-4 px-6 font-mono text-brandGold">M5, M15, H1</td>
                <td className="py-4 px-6">Hours (Exits before daily close)</td>
                <td className="py-4 px-6 font-light">Trading intraday sessions (London/NY) and session overlaps.</td>
              </tr>
              <tr className="hover:bg-white/5 transition-all duration-300">
                <td className="py-4 px-6 font-semibold text-white">Swing Trader</td>
                <td className="py-4 px-6 font-mono text-brandGold">H4, D1</td>
                <td className="py-4 px-6">Days to Weeks</td>
                <td className="py-4 px-6 font-light">Capitalizing on weekly trends and high-probability swings.</td>
              </tr>
              <tr className="hover:bg-white/5 transition-all duration-300">
                <td className="py-4 px-6 font-semibold text-white">Position Trader</td>
                <td className="py-4 px-6 font-mono text-brandGold">D1, W1</td>
                <td className="py-4 px-6 font-light">Weeks to Months</td>
                <td className="py-4 px-6 font-light">Capturing long-term macroeconomic moves and major bank flows.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Multi-Timeframe Analysis Rules */}
      <div className="glass-panel p-6 sm:p-8 rounded-xl border border-white/10 bg-black/40 space-y-8">
        <div>
          <h4 className="text-sm font-bold font-display uppercase tracking-widest text-brandGold text-center">
            Multi-Timeframe Analysis Architecture
          </h4>
          <p className="text-xs text-gray-400 font-light text-center mt-1">
            Always structure your top-down analysis using the golden rule.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          
          {/* Step 1: Direction */}
          <div className="bg-black/40 p-5 rounded-lg border border-white/5 flex flex-col justify-between relative">
            <div>
              <span className="bg-brandGold/10 text-brandGold px-2.5 py-1 rounded text-[9px] font-mono font-bold uppercase tracking-wider block w-max mb-3">1. Direction Bias (H4 / D1)</span>
              <h5 className="text-white font-semibold text-sm mb-2 font-display uppercase tracking-wide">Higher Timeframe (HTF)</h5>
              <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                Check the macro trend. Are we moving bullishly to sweep buy-side liquidity? Establish the market compass.
              </p>
            </div>
            <div className="text-brandGold text-xs font-semibold mt-4 border-t border-white/5 pt-3 font-mono text-center">
              🧭 Bias: H4 / D1 = Direction
            </div>
          </div>

          {/* Step 2: Setup */}
          <div className="bg-black/40 p-5 rounded-lg border border-white/5 flex flex-col justify-between relative">
            <div className="hidden md:block absolute left-[-16px] top-1/2 transform -translate-y-1/2 text-brandGold/30 text-lg">→</div>
            <div>
              <span className="bg-brandGold/10 text-brandGold px-2.5 py-1 rounded text-[9px] font-mono font-bold uppercase tracking-wider block w-max mb-3">2. Search Setup (H1)</span>
              <h5 className="text-white font-semibold text-sm mb-2 font-display uppercase tracking-wide">Medium Timeframe (MTF)</h5>
              <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                Filter out intraday noise. Look for key discount ranges, Fair Value Gaps, or institutional Order Blocks.
              </p>
            </div>
            <div className="text-brandGold text-xs font-semibold mt-4 border-t border-white/5 pt-3 font-mono text-center">
              🛠️ Pattern: H1 = Setup
            </div>
          </div>

          {/* Step 3: Entry */}
          <div className="bg-black/40 p-5 rounded-lg border border-white/5 flex flex-col justify-between relative">
            <div className="hidden md:block absolute left-[-16px] top-1/2 transform -translate-y-1/2 text-brandGold/30 text-lg">→</div>
            <div>
              <span className="bg-brandGold/10 text-brandGold px-2.5 py-1 rounded text-[9px] font-mono font-bold uppercase tracking-wider block w-max mb-3">3. Execute Entry (M15 / M5)</span>
              <h5 className="text-white font-semibold text-sm mb-2 font-display uppercase tracking-wide">Lower Timeframe (LTF)</h5>
              <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                Zoom in on the setup. Spot the micro-displacement sweep and lower-timeframe structure shifts to place limit orders.
              </p>
            </div>
            <div className="text-brandGold text-xs font-semibold mt-4 border-t border-white/5 pt-3 font-mono text-center">
              🎯 Execution: M15 = Entry
            </div>
          </div>

        </div>

        {/* Vertical funnel text representation */}
        <div className="flex flex-col items-center justify-center space-y-1 py-4 border-t border-white/5 mt-4">
          <div className="text-xs font-mono text-white bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
            H4 Direction Bias <span className="text-brandGold font-bold">↓</span> H1 Setup Frame <span className="text-brandGold font-bold">↓</span> M15 Entry Execution
          </div>
        </div>
      </div>

      {/* Classroom Activity Discussion card */}
      <div className="border border-brandGold/20 rounded-xl overflow-hidden bg-black/45 shadow-2xl relative">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-brandGold"></div>
        <div className="p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="max-w-xl">
            <span className="text-[10px] font-mono font-bold text-brandGold uppercase tracking-widest">Classroom Discussion Prompt</span>
            <h4 className="text-white font-bold font-display text-base uppercase mt-1">
              "Did the price change, or only the way we are looking at it?"
            </h4>
            <p className="text-xs text-gray-400 mt-2 font-light leading-relaxed">
              Ask your students this question after showing them the chart switcher above to drill down the movie analogy.
            </p>
          </div>
          
          <button
            onClick={() => setRevealedActivity(!revealedActivity)}
            className="px-5 py-3 rounded-lg text-xs font-bold font-display uppercase tracking-wider bg-brandGold/15 border border-brandGold/30 text-brandGold hover:bg-brandGold hover:text-brandDark transition-all duration-300 w-full md:w-auto text-center"
          >
            {revealedActivity ? 'Hide Explanation' : 'Reveal Explanation'}
          </button>
        </div>

        {revealedActivity && (
          <div className="px-6 pb-8 pt-2 sm:px-8 border-t border-white/5 animate-slideDown">
            <div className="bg-brandDark/50 border border-white/5 rounded-lg p-5 text-xs sm:text-sm font-light leading-relaxed space-y-3">
              <span className="text-brandGold font-semibold block uppercase text-[10px] tracking-wider font-mono">Teacher Answer Key:</span>
              <p className="text-gray-300">
                <strong>No, the price is identical.</strong> EUR/USD moved from 1.1000 to 1.1100 over the course of the day regardless of your chart settings.
              </p>
              <p className="text-gray-400">
                The timeframe setting only determines **how much detail/noise is compressed into each candle**. A Daily chart shows 1 green candle, while a 15-Minute chart shows the same trend broken down into 96 separate candles highlighting all local sweeps and session shifts.
              </p>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
