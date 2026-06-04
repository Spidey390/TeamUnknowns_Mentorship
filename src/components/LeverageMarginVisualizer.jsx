import React, { useState } from 'react';

export default function LeverageMarginVisualizer() {
  const [balance, setBalance] = useState(1000); // Account Balance in USD
  const [leverage, setLeverage] = useState(100); // 10, 50, 100, 500
  const [lots, setLots] = useState(1.0); // Lot size

  // Constants
  const positionSize = lots * 100000; // 1 lot = $100,000 USD
  const requiredMargin = positionSize / leverage;
  const freeMargin = balance - requiredMargin;
  const marginPercentage = (balance / requiredMargin) * 100;

  // Margin safety checks
  let safetyStatus = 'safe'; // 'safe' | 'warning' | 'danger'
  let safetyMessage = 'Healthy margin cushion. Low risk of margin call.';

  if (requiredMargin > balance) {
    safetyStatus = 'danger';
    safetyMessage = '❌ MARGIN CALL WARNING: Required deposit exceeds your balance! The broker will not allow this trade.';
  } else if (freeMargin < (balance * 0.2)) {
    safetyStatus = 'warning';
    safetyMessage = '⚠️ HIGH RISK: Very low free margin cushion. A small price move against you will trigger a margin call!';
  }

  return (
    <div className="w-full space-y-8 animate-fadeIn">
      {/* Simulation Controls */}
      <div className="grid md:grid-cols-3 gap-6 bg-black/40 border border-white/5 p-6 rounded-xl">
        {/* Balance Input */}
        <div>
          <label className="block text-gray-400 text-xs uppercase font-bold tracking-wider mb-2">
            Account Balance (USD)
          </label>
          <div className="space-y-2">
            <input
              type="range"
              min="100"
              max="10000"
              step="100"
              value={balance}
              onChange={(e) => setBalance(parseInt(e.target.value))}
              className="w-full accent-brandGold cursor-pointer"
            />
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-gray-500">$100</span>
              <span className="text-white font-bold text-sm">${balance.toLocaleString()} USD</span>
              <span className="text-gray-500">$10,000</span>
            </div>
          </div>
        </div>

        {/* Leverage Selector */}
        <div>
          <label className="block text-gray-400 text-xs uppercase font-bold tracking-wider mb-2">
            Leverage Ratio
          </label>
          <div className="grid grid-cols-4 gap-1.5">
            {[10, 50, 100, 500].map((ratio) => (
              <button
                key={ratio}
                onClick={() => setLeverage(ratio)}
                className={`py-2 rounded text-[10px] font-mono font-bold transition-all ${
                  leverage === ratio
                    ? 'bg-brandGold text-brandDark shadow shadow-brandGold/20'
                    : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
                }`}
              >
                1:{ratio}
              </button>
            ))}
          </div>
          <span className="text-[10px] text-gray-500 mt-2 block leading-relaxed font-mono">
            {leverage === 10 ? '₹1 controls ₹10' : leverage === 50 ? '₹1 controls ₹50' : leverage === 100 ? '₹1 controls ₹100' : '₹1 controls ₹500'}
          </span>
        </div>

        {/* Position Size (Lots) */}
        <div>
          <label className="block text-gray-400 text-xs uppercase font-bold tracking-wider mb-2">
            Position Size (Lots)
          </label>
          <div className="flex bg-black/40 rounded border border-white/5 p-0.5">
            {[0.01, 0.1, 1.0].map((size) => (
              <button
                key={size}
                onClick={() => setLots(size)}
                className={`flex-1 py-1 rounded text-[10px] font-mono font-bold transition-all ${
                  lots === size ? 'bg-brandGold text-brandDark' : 'text-gray-400 hover:text-white'
                }`}
              >
                {size === 0.01 ? '0.01 (Micro)' : size === 0.1 ? '0.1 (Mini)' : '1.0 (Std)'}
              </button>
            ))}
          </div>
          <span className="text-[10px] text-gray-400 font-mono mt-2 block">
            Contract Value: <strong className="text-white">${positionSize.toLocaleString()} USD</strong>
          </span>
        </div>
      </div>

      {/* Visual Balance Bar: Margin vs Free Margin */}
      <div className="bg-black/50 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
        <h4 className="text-xs text-gray-500 uppercase tracking-widest font-semibold text-center">
          Margin Cushion Meter
        </h4>

        {requiredMargin <= balance ? (
          <div className="space-y-4 max-w-2xl mx-auto">
            {/* Visual Bar representation */}
            <div className="w-full bg-white/5 h-6 rounded-full overflow-hidden flex border border-white/10 font-mono text-[10px] font-bold text-center">
              {/* Used Margin */}
              <div
                style={{ width: `${(requiredMargin / balance) * 100}%` }}
                className="bg-red-500/30 text-red-400 border-r border-red-500/25 h-full flex items-center justify-center transition-all duration-300 whitespace-nowrap min-w-max px-2"
              >
                Required Margin (${requiredMargin.toLocaleString()})
              </div>
              {/* Free Margin */}
              <div
                style={{ width: `${(freeMargin / balance) * 100}%` }}
                className="bg-green-500/30 text-green-400 h-full flex items-center justify-center transition-all duration-300 whitespace-nowrap min-w-max px-2"
              >
                Free Margin (${freeMargin.toLocaleString()})
              </div>
            </div>

            <div className="flex justify-between text-[10px] text-gray-500 font-mono px-2">
              <span>Used Margin: {((requiredMargin / balance) * 100).toFixed(0)}%</span>
              <span>Available Free Margin: {((freeMargin / balance) * 100).toFixed(0)}%</span>
            </div>
          </div>
        ) : (
          <div className="bg-red-500/10 border border-red-500/35 p-6 rounded-xl max-w-2xl mx-auto text-center font-mono">
            <span className="text-red-400 font-bold block text-sm mb-1">❌ MARGIN OUT OF BOUNDS</span>
            <span className="text-xs text-gray-400 block leading-relaxed">
              Required deposit (${requiredMargin.toLocaleString()} USD) exceeds your total account balance (${balance.toLocaleString()} USD). You must reduce your lot size or increase leverage ratio.
            </span>
          </div>
        )}
      </div>

      {/* Side by Side Metaphor and Calculations */}
      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        {/* Math Breakdown Card */}
        <div className="bg-black/40 border border-white/5 p-6 rounded-xl flex flex-col justify-between relative overflow-hidden">
          <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${safetyStatus === 'safe' ? 'bg-green-500' : safetyStatus === 'warning' ? 'bg-yellow-500' : 'bg-red-500'}`}></div>

          <div className="space-y-4 pl-2">
            <h5 className="text-white font-bold text-xs uppercase tracking-wider">Required Margin Math</h5>

            <div className="space-y-3 font-mono text-xs bg-black/40 p-4 rounded border border-white/5">
              <div className="flex justify-between">
                <span className="text-gray-500">Trade Size (1 Lot = $100k):</span>
                <span className="text-white font-bold">${positionSize.toLocaleString()} USD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Leverage Divider:</span>
                <span className="text-brandGold font-bold">{leverage}x</span>
              </div>
              <div className="flex justify-between border-t border-white/10 pt-2 mt-2">
                <span className="text-gray-500">Required Margin:</span>
                <span className="text-red-400 font-bold">${requiredMargin.toLocaleString()} USD</span>
              </div>
            </div>

            {/* Formula box */}
            <div className="bg-brandGold/5 border border-brandGold/20 rounded p-3 text-[10px] text-brandGold font-mono">
              Margin = Position Size ÷ Leverage Ratio
              <br />
              ${positionSize.toLocaleString()} ÷ {leverage} = ${requiredMargin.toLocaleString()} USD
            </div>

            {/* Safety status alert */}
            <p className={`text-[11px] leading-relaxed font-semibold ${safetyStatus === 'safe' ? 'text-green-400' : safetyStatus === 'warning' ? 'text-yellow-400' : 'text-red-400'}`}>
              {safetyMessage}
            </p>
          </div>
        </div>

        {/* Real-Life Metaphor Card */}
        <div className="bg-black/40 border border-white/5 p-6 rounded-xl flex flex-col justify-between">
          <div>
            <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-3">🏡 Real-Life House Analogy</h5>
            <div className="bg-black/60 p-4 rounded border border-white/5 space-y-4 text-xs font-light leading-relaxed text-gray-300">
              <p>
                Imagine you want to buy a house worth <span className="text-white font-semibold">₹10 Lakhs</span>.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center font-mono text-[10px]">
                <div className="bg-green-500/10 border border-green-500/10 p-3 rounded">
                  <span className="block text-green-400 font-bold">Your Margin Deposit</span>
                  <span className="text-white font-bold text-xs">₹1 Lakh (10%)</span>
                </div>
                <div className="bg-brandGold/10 border border-brandGold/10 p-3 rounded">
                  <span className="block text-brandGold font-bold">Bank Leverage Loan</span>
                  <span className="text-white font-bold text-xs">₹9 Lakhs (90%)</span>
                </div>
              </div>
              <p>
                This represents <span className="text-brandGold font-bold">1:10 Leverage</span>. Your ₹1 Lakh controls a asset worth ₹10 Lakhs. The bank provides the rest. In forex, your broker does the exact same thing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
