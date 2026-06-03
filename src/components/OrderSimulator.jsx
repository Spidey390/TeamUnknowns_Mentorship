import React, { useState } from 'react';

export default function OrderSimulator() {
  const book = [
    { id: 'level-11000', price: 1.1000, capacity: 50 },
    { id: 'level-11001', price: 1.1001, capacity: 100 },
    { id: 'level-11002', price: 1.1002, capacity: 300 },
    { id: 'level-11003', price: 1.1003, capacity: 500 },
    { id: 'level-11004', price: 1.1004, capacity: 100 }
  ];

  const [simulated, setSimulated] = useState(false);
  const [activeLevelIds, setActiveLevelIds] = useState([]);
  const [qty, setQty] = useState(0);
  const [avgPrice, setAvgPrice] = useState(0);
  const [slippagePips, setSlippagePips] = useState(0);
  const [logs, setLogs] = useState([]);

  const simulateOrder = (orderQty) => {
    let remaining = orderQty;
    let totalValue = 0;
    const tempLogs = [];
    const tempActiveIds = [];

    for (let i = 0; i < book.length; i++) {
      const lvl = book[i];
      if (remaining <= 0) break;

      tempActiveIds.push(lvl.id);
      const taken = Math.min(remaining, lvl.capacity);
      totalValue += taken * lvl.price;
      remaining -= taken;

      tempLogs.push(`Bought ${taken} lots at price ${lvl.price.toFixed(4)}`);
    }

    const calculatedAvgPrice = totalValue / orderQty;
    const calculatedSlippage = (calculatedAvgPrice - 1.1000) * 10000;

    setQty(orderQty);
    setAvgPrice(calculatedAvgPrice);
    setSlippagePips(calculatedSlippage);
    setLogs(tempLogs);
    setActiveLevelIds(tempActiveIds);
    setSimulated(true);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 items-stretch">
      {/* Left Panel: Ask Book */}
      <div className="bg-black/30 p-5 rounded-lg border border-white/5 flex flex-col justify-between">
        <div>
          <h5 className="text-white font-bold text-xs uppercase tracking-wider font-display mb-4 border-b border-white/10 pb-2">
            The Order Book (Available Ask/Sell Liquidity)
          </h5>
          <div className="space-y-2 font-mono text-xs" id="order-book-list">
            {/* Render from top level (1.1004) to bottom level (1.1000) */}
            {[...book].reverse().map((lvl) => {
              const isActive = activeLevelIds.includes(lvl.id);
              return (
                <div
                  key={lvl.id}
                  id={lvl.id}
                  className={`flex justify-between items-center transition-all duration-300 ${
                    isActive
                      ? 'bg-rose-500/10 border-rose-500/30 text-rose-400 p-2.5 rounded shadow-md shadow-rose-500/5'
                      : 'bg-white/5 p-2.5 rounded border border-white/5'
                  }`}
                >
                  <span className={isActive ? 'text-rose-400 font-semibold' : 'text-rose-400 font-semibold'}>
                    {lvl.price.toFixed(4)}
                  </span>
                  <div className="flex gap-4">
                    <span className="text-gray-500">CAPACITY</span>
                    <span className={isActive ? 'text-rose-400 font-bold' : 'text-white font-bold'}>
                      {lvl.capacity} Lots
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-6 text-[10px] text-gray-500 italic">
          Note: Standard orders are filled from bottom to top (cheapest available sellers filled first).
        </div>
      </div>

      {/* Right Panel: Execution Panel */}
      <div className="bg-black/30 p-5 rounded-lg border border-white/5 flex flex-col justify-between">
        <div>
          <h5 className="text-white font-bold text-xs uppercase tracking-wider font-display mb-4 border-b border-white/10 pb-2">
            Institutional Order Execution
          </h5>
          
          <p className="text-gray-400 text-[11px] font-light leading-relaxed mb-4">
            Select an order volume size to trigger execution. Watch how the simulator sweeps the order book and shifts your average fill price.
          </p>

          <div className="grid grid-cols-2 gap-2 mb-6">
            <button
              onClick={() => simulateOrder(50)}
              className="px-3 py-2 bg-brandGold/10 border border-brandGold/20 hover:border-brandGold text-brandGold text-xs font-bold rounded hover:bg-brandGold hover:text-brandDark transition-all duration-300"
            >
              Buy 50 Lots
            </button>
            <button
              onClick={() => simulateOrder(150)}
              className="px-3 py-2 bg-brandGold/10 border border-brandGold/20 hover:border-brandGold text-brandGold text-xs font-bold rounded hover:bg-brandGold hover:text-brandDark transition-all duration-300"
            >
              Buy 150 Lots
            </button>
            <button
              onClick={() => simulateOrder(450)}
              className="px-3 py-2 bg-brandGold/10 border border-brandGold/20 hover:border-brandGold text-brandGold text-xs font-bold rounded hover:bg-brandGold hover:text-brandDark transition-all duration-300"
            >
              Buy 450 Lots
            </button>
            <button
              onClick={() => simulateOrder(1000)}
              className="px-3 py-2 bg-brandGold/10 border border-brandGold/20 hover:border-brandGold text-brandGold text-xs font-bold rounded hover:bg-brandGold hover:text-brandDark transition-all duration-300"
            >
              Buy 1000 Lots
            </button>
          </div>

          <div className="space-y-2 mb-6 text-xs bg-black/40 p-4 rounded border border-white/5 font-mono">
            <div className="flex justify-between">
              <span className="text-gray-500">Order Quantity:</span>
              <span id="exec-qty" className="text-white font-bold">
                {simulated ? `${qty} Lots` : '-'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Average Fill Price:</span>
              <span id="exec-avg-price" className="text-brandGold font-bold">
                {simulated ? avgPrice.toFixed(5) : '-'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Slippage Cost:</span>
              <span id="exec-slippage" className="text-rose-400 font-bold">
                {simulated ? (slippagePips === 0 ? '0 Pips' : `+${slippagePips.toFixed(1)} Pips`) : '-'}
              </span>
            </div>
          </div>
        </div>

        <div id="exec-steps-output" className="bg-black/50 p-3 rounded border border-white/5 text-[10px] text-gray-500 font-light min-h-[100px] max-h-[120px] overflow-y-auto">
          {!simulated ? (
            "Simulation execution logs will print here..."
          ) : (
            <div>
              <strong>Execution logs:</strong>
              <div className="space-y-1 block mt-2 text-[11px] font-mono">
                {logs.map((step, idx) => (
                  <div key={idx}>
                    • {step}
                  </div>
                ))}
                {qty > 100 ? (
                  <span className="text-rose-400 font-bold block mt-2">
                    ⚠️ Warning: Slippage detected. Capital cost is too high!
                  </span>
                ) : (
                  <span className="text-green-400 font-semibold block mt-2">
                    ✅ Success: Instant order filled at target price.
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
