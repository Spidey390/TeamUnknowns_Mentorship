import React, { useState } from 'react';

export default function QuoteBuilder() {
  const [open, setOpen] = useState(1.0830);
  const [high, setHigh] = useState(1.0890);
  const [low, setLow] = useState(1.0810);
  const [close, setClose] = useState(1.0870);

  const handleOpenChange = (val) => {
    const newOpen = parseFloat(val);
    setOpen(newOpen);
    if (newOpen > high) setHigh(newOpen);
    if (newOpen < low) setLow(newOpen);
  };

  const handleCloseChange = (val) => {
    const newClose = parseFloat(val);
    setClose(newClose);
    if (newClose > high) setHigh(newClose);
    if (newClose < low) setLow(newClose);
  };

  const handleHighChange = (val) => {
    const newHigh = parseFloat(val);
    const minPossibleHigh = Math.max(open, close);
    setHigh(Math.max(newHigh, minPossibleHigh));
  };

  const handleLowChange = (val) => {
    const newLow = parseFloat(val);
    const maxPossibleLow = Math.min(open, close);
    setLow(Math.min(newLow, maxPossibleLow));
  };

  // SVG Scaling Map
  const minPrice = 1.0800;
  const scaleY = (p) => 250 - (p - minPrice) * 20000;

  const yOpen = scaleY(open);
  const yClose = scaleY(close);
  const yHigh = scaleY(high);
  const yLow = scaleY(low);

  const isBullish = close >= open;
  const color = isBullish ? '#22c55e' : '#ef4444';
  const colorLight = isBullish ? '#4ade80' : '#f87171';
  const pips = Math.round((close - open) * 10000);

  const bodyY = Math.min(yOpen, yClose);
  const bodyHeight = Math.max(Math.abs(yOpen - yClose), 2); // Avoid 0px height

  // Resolve overlaps for open/close text labels
  let textCloseY = yClose;
  let textOpenY = yOpen;
  if (Math.abs(yOpen - yClose) < 14) {
    if (isBullish) {
      textCloseY = yClose - 5;
      textOpenY = yOpen + 9;
    } else {
      textOpenY = yOpen - 5;
      textCloseY = yClose + 9;
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-8 items-stretch">
      {/* Left Panel: Sliders & Controls */}
      <div className="space-y-6 bg-black/30 p-6 rounded-xl border border-white/5">
        <div>
          <h3 className="text-brandGold font-bold uppercase text-xs tracking-wider mb-4 font-display">Quote Controls (EUR/USD)</h3>
        </div>

        {/* Sliders */}
        <div className="space-y-4">
          {/* Open Slider */}
          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="text-gray-400">OPEN PRICE</span>
              <span id="open-val" className="text-white font-bold">{open.toFixed(4)}</span>
            </div>
            <input
              type="range"
              min="1.0800"
              max="1.0900"
              step="0.0001"
              value={open}
              onChange={(e) => handleOpenChange(e.target.value)}
              className="w-full accent-brandGold bg-gray-800 h-1 rounded-lg cursor-pointer"
            />
          </div>

          {/* High Slider */}
          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="text-gray-400">HIGH PRICE</span>
              <span id="high-val" className="text-white font-bold">{high.toFixed(4)}</span>
            </div>
            <input
              type="range"
              min="1.0800"
              max="1.0900"
              step="0.0001"
              value={high}
              onChange={(e) => handleHighChange(e.target.value)}
              className="w-full accent-brandGold bg-gray-800 h-1 rounded-lg cursor-pointer"
            />
          </div>

          {/* Low Slider */}
          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="text-gray-400">LOW PRICE</span>
              <span id="low-val" className="text-white font-bold">{low.toFixed(4)}</span>
            </div>
            <input
              type="range"
              min="1.0800"
              max="1.0900"
              step="0.0001"
              value={low}
              onChange={(e) => handleLowChange(e.target.value)}
              className="w-full accent-brandGold bg-gray-800 h-1 rounded-lg cursor-pointer"
            />
          </div>

          {/* Close Slider */}
          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="text-gray-400">CLOSE PRICE</span>
              <span id="close-val" className="text-white font-bold">{close.toFixed(4)}</span>
            </div>
            <input
              type="range"
              min="1.0800"
              max="1.0900"
              step="0.0001"
              value={close}
              onChange={(e) => handleCloseChange(e.target.value)}
              className="w-full accent-brandGold bg-gray-800 h-1 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Live Feedback */}
        <div className="bg-black/50 p-4 rounded-lg border border-white/5 text-center mt-6">
          <span className="text-gray-400 text-xs uppercase block mb-1">Candlestick Sentiment</span>
          {isBullish ? (
            <>
              <span id="sentiment-text" className="text-green-400 text-sm font-bold uppercase tracking-wider">
                Bullish (+{pips} Pips)
              </span>
              <p id="sentiment-desc" className="text-xs text-gray-400 mt-1 font-light leading-relaxed">
                Buyers successfully dominated this session, driving the quote upward from open to close.
              </p>
            </>
          ) : open > close ? (
            <>
              <span id="sentiment-text" className="text-red-400 text-sm font-bold uppercase tracking-wider">
                Bearish ({pips} Pips)
              </span>
              <p id="sentiment-desc" className="text-xs text-gray-400 mt-1 font-light leading-relaxed">
                Sellers controlled this session, aggressively pulling the quote downward.
              </p>
            </>
          ) : (
            <>
              <span id="sentiment-text" className="text-gray-400 text-sm font-bold uppercase tracking-wider">
                Doji (0 Pips)
              </span>
              <p id="sentiment-desc" className="text-xs text-gray-400 mt-1 font-light leading-relaxed">
                Buying and selling forces matched perfectly, closing at the exact open price.
              </p>
            </>
          )}
        </div>
      </div>

      {/* Right Panel: Dynamic Candlestick Rendering */}
      <div className="bg-black/40 border border-white/10 p-6 rounded-xl flex flex-col items-center justify-center min-h-[350px] relative">
        <div className="absolute top-4 left-4 text-xs font-bold text-gray-500 uppercase tracking-widest font-mono">Live SVG Chart</div>
        
        {/* Dynamic Candle SVG */}
        <svg id="dynamic-candle-svg" width="200" height="300" viewBox="0 0 200 300" className="w-full max-w-[200px]">
          {/* Upper Wick */}
          <line
            id="candle-upper-wick"
            x1="100"
            y1={yHigh}
            x2="100"
            y2={bodyY}
            stroke={color}
            strokeWidth="2"
          />

          {/* Lower Wick */}
          <line
            id="candle-lower-wick"
            x1="100"
            y1={bodyY + bodyHeight}
            x2="100"
            y2={yLow}
            stroke={color}
            strokeWidth="2"
          />

          {/* Body */}
          <rect
            id="candle-body"
            x="70"
            y={bodyY}
            width="60"
            height={bodyHeight}
            fill={color}
            fillOpacity="0.8"
            stroke={colorLight}
            strokeWidth="2"
            rx="2"
          />
          
          {/* Text labels for prices inside SVG for extra clarity */}
          <text
            id="svg-high-text"
            x="115"
            y={yHigh}
            fill="#9ca3af"
            fontSize="10"
            fontFamily="monospace"
            alignmentBaseline="middle"
          >
            H: {high.toFixed(4)}
          </text>

          <text
            id="svg-close-text"
            x="140"
            y={textCloseY}
            fill={isBullish ? "#22c55e" : "#ef4444"}
            fontSize="10"
            fontFamily="monospace"
            alignmentBaseline="middle"
          >
            C: {close.toFixed(4)}
          </text>

          <text
            id="svg-open-text"
            x="140"
            y={textOpenY}
            fill="#9ca3af"
            fontSize="10"
            fontFamily="monospace"
            alignmentBaseline="middle"
          >
            O: {open.toFixed(4)}
          </text>

          <text
            id="svg-low-text"
            x="115"
            y={yLow}
            fill="#9ca3af"
            fontSize="10"
            fontFamily="monospace"
            alignmentBaseline="middle"
          >
            L: {low.toFixed(4)}
          </text>
        </svg>
      </div>
    </div>
  );
}
