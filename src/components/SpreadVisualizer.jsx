import React, { useState } from 'react';

export default function SpreadVisualizer() {
  const [spreadType, setSpreadType] = useState('low'); // 'low' | 'medium' | 'high'
  const [priceShift, setPriceShift] = useState(0); // Pips the market moves in your favor
  const [lotSize, setLotSize] = useState(1.0); // 1.0, 0.1, 0.01

  // Data mapping for different spread scenarios
  const spreadData = {
    low: {
      pair: 'EUR/USD',
      spreadPips: 1.5,
      bidBase: 1.1050,
      factor: 0.0001,
      multiplier: 10000,
      desc: 'Typical major pair. High liquidity means brokers charge a tiny fee.'
    },
    medium: {
      pair: 'GBP/JPY',
      spreadPips: 4.0,
      bidBase: 190.20,
      factor: 0.01,
      multiplier: 100,
      desc: 'Cross-currency pair. Medium volatility leads to moderate spread size.'
    },
    high: {
      pair: 'USD/INR',
      spreadPips: 15.0,
      bidBase: 83.50,
      factor: 0.01,
      multiplier: 100,
      desc: 'Exotic pair. Lower trading volume results in a wide spread fee.'
    }
  };

  const current = spreadData[spreadType];

  // Calculate prices
  // If priceShift = 0, Bid = Bid Base, Ask = Bid Base + Spread
  const bidPrice = current.bidBase + (priceShift * current.factor);
  const askPrice = current.bidBase + (current.spreadPips * current.factor) + (priceShift * current.factor);
  const decimalPlaces = spreadType === 'low' ? 4 : 2;

  // Simulate a BUY trade entered at the initial Ask price: current.bidBase + (current.spreadPips * current.factor)
  const entryPrice = current.bidBase + (current.spreadPips * current.factor);
  // Current sell price is the current Bid price
  const currentSellPrice = bidPrice;
  // Net pips = (currentSellPrice - entryPrice) * multiplier
  const netPips = (currentSellPrice - entryPrice) * current.multiplier;
  
  // USD Pip value: 1 Lot = $10/pip, 0.1 Lot = $1/pip, 0.01 Lot = $0.10/pip
  const pipValueUSD = lotSize * 10;
  const netPNL = netPips * pipValueUSD;

  const isBreakEven = netPips >= 0;

  return (
    <div className="w-full space-y-8">
      {/* Selector and Info */}
      <div className="grid md:grid-cols-3 gap-4">
        {/* Toggle Buttons */}
        <div className="md:col-span-1 bg-black/40 border border-white/5 p-4 rounded-xl flex flex-col justify-between">
          <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider block mb-3">Spread Type:</span>
          <div className="space-y-2">
            <button
              onClick={() => { setSpreadType('low'); setPriceShift(0); }}
              className={`w-full px-4 py-2 rounded text-left font-bold text-xs uppercase transition-all duration-300 ${
                spreadType === 'low'
                  ? 'bg-green-500/20 border border-green-500 text-green-400'
                  : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              🟢 Low Spread (1.5 Pips)
            </button>
            <button
              onClick={() => { setSpreadType('medium'); setPriceShift(0); }}
              className={`w-full px-4 py-2 rounded text-left font-bold text-xs uppercase transition-all duration-300 ${
                spreadType === 'medium'
                  ? 'bg-yellow-500/20 border border-yellow-500 text-yellow-400'
                  : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              🟡 Medium Spread (4.0 Pips)
            </button>
            <button
              onClick={() => { setSpreadType('high'); setPriceShift(0); }}
              className={`w-full px-4 py-2 rounded text-left font-bold text-xs uppercase transition-all duration-300 ${
                spreadType === 'high'
                  ? 'bg-red-500/20 border border-red-500 text-red-400'
                  : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              🔴 High Spread (15.0 Pips)
            </button>
          </div>
        </div>

        {/* Dynamic description of spread */}
        <div className="md:col-span-2 bg-black/40 border border-white/5 p-5 rounded-xl flex flex-col justify-between">
          <div>
            <h4 className="text-white font-bold text-sm font-display uppercase tracking-wider mb-2">
              Asset: <span className="text-brandGold">{current.pair}</span>
            </h4>
            <p className="text-gray-400 text-xs font-light leading-relaxed">
              {current.desc}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4 mt-4 text-xs font-mono">
            <div>
              <span className="text-gray-500 block">SPREAD VALUE</span>
              <span className="text-brandGold font-bold text-sm">{current.spreadPips} Pips</span>
            </div>
            <div>
              <span className="text-gray-500 block">BROKER FEE (STD LOT)</span>
              <span className="text-red-400 font-bold text-sm">${(current.spreadPips * 10).toFixed(2)} USD</span>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Bid-Ask Price Comparison */}
      <div className="bg-black/50 border border-white/10 rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden">
        <h3 className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-6">
          Price Spread Visualized
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center max-w-4xl mx-auto">
          {/* Bid Card */}
          <div className="md:col-span-2 bg-red-500/10 border border-red-500/25 p-6 rounded-xl flex flex-col items-center">
            <span className="text-[10px] text-red-400 font-bold uppercase tracking-wider mb-2">Bid Price (Sell / Short)</span>
            <span className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-wider">
              {bidPrice.toFixed(decimalPlaces)}
            </span>
            <span className="text-[10px] text-gray-500 mt-2 font-mono">You SELL at this rate</span>
          </div>

          {/* Spread Gap */}
          <div className="md:col-span-1 flex flex-col items-center justify-center">
            <div className="w-10 h-1 bg-brandGold/40"></div>
            <span className="text-[10px] bg-brandGold text-brandDark font-extrabold uppercase px-2 py-0.5 rounded shadow mt-2">
              {current.spreadPips.toFixed(1)} Pips
            </span>
            <span className="text-[9px] text-gray-500 mt-1 uppercase tracking-wider">Spread Gap</span>
            <div className="w-10 h-1 bg-brandGold/40 mt-2"></div>
          </div>

          {/* Ask Card */}
          <div className="md:col-span-2 bg-green-500/10 border border-green-500/25 p-6 rounded-xl flex flex-col items-center">
            <span className="text-[10px] text-green-400 font-bold uppercase tracking-wider mb-2">Ask Price (Buy / Long)</span>
            <span className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-wider">
              {askPrice.toFixed(decimalPlaces)}
            </span>
            <span className="text-[10px] text-gray-500 mt-2 font-mono">You BUY at this rate</span>
          </div>
        </div>
      </div>

      {/* Break-Even Simulator */}
      <div className="bg-black/30 border border-white/5 p-6 rounded-xl space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h4 className="text-white font-bold font-display text-sm uppercase tracking-wider">
              📈 Break-Even & Entry Simulator
            </h4>
            <p className="text-gray-400 text-xs font-light">
              Drag the slider to move the market and see how long it takes to clear the spread and get into profit.
            </p>
          </div>

          {/* Lot Size Toggle */}
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-xs font-mono">Lot Size:</span>
            <div className="flex bg-black/40 rounded border border-white/5 p-0.5">
              {[1.0, 0.1, 0.01].map((size) => (
                <button
                  key={size}
                  onClick={() => setLotSize(size)}
                  className={`px-2 py-1 rounded text-[10px] font-mono font-bold transition-all ${
                    lotSize === size ? 'bg-brandGold text-brandDark' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {size === 1.0 ? '1.0 (Std)' : size === 0.1 ? '0.1 (Mini)' : '0.01 (Micro)'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Simulator Slider */}
        <div className="space-y-2 max-w-3xl mx-auto">
          <div className="flex justify-between text-xs text-gray-500 font-mono">
            <span>Market Drops (-10 Pips)</span>
            <span className="text-brandGold font-bold">Price Move: {priceShift >= 0 ? `+${priceShift}` : priceShift} Pips</span>
            <span>Market Rises (+20 Pips)</span>
          </div>
          <input
            type="range"
            min="-10"
            max="20"
            step="0.5"
            value={priceShift}
            onChange={(e) => setPriceShift(parseFloat(e.target.value))}
            className="w-full accent-brandGold cursor-pointer"
          />
        </div>

        {/* Results Bar */}
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* Status Display Card */}
          <div className="bg-black/50 border border-white/10 p-5 rounded-xl flex flex-col justify-between relative overflow-hidden">
            <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${isBreakEven ? 'bg-green-500' : 'bg-red-500'}`}></div>

            <div className="space-y-4 pl-2">
              <div className="flex justify-between items-center">
                <span className="text-white font-semibold text-xs uppercase tracking-wider">Your Position Status:</span>
                <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                  isBreakEven ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {isBreakEven ? 'In Profit' : 'Broker Fee Zone'}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-mono bg-black/40 p-4 rounded border border-white/5">
                <div>
                  <span className="text-gray-500 block">NET PIP GAIN</span>
                  <span className={`text-sm font-bold ${netPips >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {netPips >= 0 ? `+${netPips.toFixed(1)}` : netPips.toFixed(1)} Pips
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block">NET POSITION PNL</span>
                  <span className={`text-sm font-bold ${netPNL >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {netPNL >= 0 ? `+$${netPNL.toFixed(2)}` : `-$${Math.abs(netPNL).toFixed(2)}`} USD
                  </span>
                </div>
              </div>
            </div>

            <div className="text-[10px] text-gray-500 mt-4 leading-relaxed pl-2 italic">
              💡 Notice how at 0.0 Pips move, you are in a negative PNL of <span className="text-red-400 font-semibold">-{current.spreadPips} Pips</span>. The broker collects this immediately at entry.
            </div>
          </div>

          {/* Metaphor Card */}
          <div className="bg-black/40 border border-white/5 p-6 rounded-xl flex flex-col justify-between">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-2">
              🏫 Classroom Shop Metaphor
            </h4>
            <div className="bg-black/60 p-4 rounded border border-white/5 space-y-3 text-[11px] leading-relaxed text-gray-300">
              <p>
                Imagine a mobile store buys a phone for <span className="text-white font-semibold">₹9,900</span> (Bid) and sells it to you for <span className="text-white font-semibold">₹10,000</span> (Ask).
              </p>
              <p>
                The gap of <span className="text-brandGold font-bold">₹100</span> is the <strong>Spread</strong>. If you buy the phone and immediately try to return it or sell it back to the store, they will only buy it at ₹9,900. You lose ₹100 instantly.
              </p>
              <p>
                To make a profit on the phone, the market value of the phone must rise past <span className="text-green-400 font-semibold">₹10,000</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
