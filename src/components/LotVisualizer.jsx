import React, { useState } from 'react';

export default function LotVisualizer() {
  const [selectedLot, setSelectedLot] = useState('standard');
  const [simulatedPips, setSimulatedPips] = useState(10); // starting at +10 pips

  const lotData = {
    standard: {
      name: 'Standard Lot',
      multiplier: 1.0,
      units: 100000,
      pipValue: 10.0,
      risk: 'High / Institutional',
      desc: 'The institutional standard. A 1-pip movement is worth $10. Requires significant capital to trade safely.',
      vehicle: 'Semi-Truck 🚛',
      vehicleDesc: 'Carries a massive payload. Moves huge wealth but demands heavy protection (stop losses) and strict control.',
      color: 'text-brandGold border-brandGold bg-brandGold/5',
      accentColor: '#facc15',
      svg: (
        <svg viewBox="0 0 100 40" className="w-16 h-8 text-brandGold fill-current">
          <path d="M5 25h75v-18h-15v4h-45v-4h-15v18zm70-13h10v5h-10v-5zm-55 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm45 0c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm18-6h7v4h-7v-4z" />
          <circle cx="20" cy="30" r="4" className="text-brandDark fill-current" />
          <circle cx="65" cy="30" r="4" className="text-brandDark fill-current" />
          <circle cx="77" cy="30" r="4" className="text-brandDark fill-current" />
        </svg>
      )
    },
    mini: {
      name: 'Mini Lot',
      multiplier: 0.1,
      units: 10000,
      pipValue: 1.0,
      risk: 'Moderate',
      desc: 'Great for professional retail traders. A 1-pip movement is worth $1. Provides a balanced risk/reward layout.',
      vehicle: 'Sedan Car 🚗',
      vehicleDesc: 'Standard everyday vehicle. Handles well, has moderate payload, and fits standard budgets.',
      color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5',
      accentColor: '#34d399',
      svg: (
        <svg viewBox="0 0 100 40" className="w-16 h-8 text-emerald-400 fill-current">
          <path d="M15 22h70v-6c0-2.8-2.2-5-5-5h-15c-2-2-4.5-4-8-4h-20c-3.5 0-6 2-8 4h-10c-2.8 0-5 2.2-5 5v6zm15 8c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm45 0c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
          <circle cx="30" cy="28" r="4" className="text-brandDark fill-current" />
          <circle cx="75" cy="28" r="4" className="text-brandDark fill-current" />
        </svg>
      )
    },
    micro: {
      name: 'Micro Lot',
      multiplier: 0.01,
      units: 1000,
      pipValue: 0.1,
      risk: 'Low',
      desc: 'The best entry point for students. A 1-pip movement is worth $0.10. Great for building confidence without major loss.',
      vehicle: 'Scooter 🛵',
      vehicleDesc: 'Light and nimble. Very little payload capacity but incredibly cheap to operate and has very low risk.',
      color: 'text-sky-400 border-sky-500/30 bg-sky-500/5',
      accentColor: '#38bdf8',
      svg: (
        <svg viewBox="0 0 100 40" className="w-16 h-8 text-sky-400 fill-current">
          <path d="M10 28h12l5-8h-6v-5h12l3-6c.7-1.5 2-2.5 3.5-2.5h8v4h-6l-3 6h15v9h8v4h-8v-3h-38l-4 9h-6v-11zm15 6c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm48 0c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" />
          <circle cx="25" cy="30" r="3" className="text-brandDark fill-current" />
          <circle cx="73" cy="30" r="3" className="text-brandDark fill-current" />
        </svg>
      )
    },
    nano: {
      name: 'Nano Lot',
      multiplier: 0.001,
      units: 100,
      pipValue: 0.01,
      risk: 'Minimal',
      desc: 'Practically risk-free. A 1-pip movement is worth $0.01. Best for practicing real market orders on micro budgets.',
      vehicle: 'Bicycle 🚲',
      vehicleDesc: 'Purely manual, tiny cargo. Highly educational for beginners to understand real trading execution without fear.',
      color: 'text-purple-400 border-purple-500/30 bg-purple-500/5',
      accentColor: '#c084fc',
      svg: (
        <svg viewBox="0 0 100 40" className="w-16 h-8 text-purple-400 fill-current">
          <path d="M35 18l5-8h15v4h-11l-3 4h18v3h-22zm-10 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm45 0c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm-15-18h8v3h-8v-3z" />
          <circle cx="25" cy="28" r="4" className="text-brandDark fill-current" />
          <circle cx="70" cy="28" r="4" className="text-brandDark fill-current" />
        </svg>
      )
    }
  };

  const selectedData = lotData[selectedLot];

  return (
    <div className="w-full space-y-8 animate-fadeIn">
      {/* Visual Metaphor Panel */}
      <div className="bg-black/40 border border-white/5 p-6 rounded-xl flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1 space-y-4">
          <span className="bg-brandGold/20 text-brandGold px-2.5 py-1 rounded text-[10px] uppercase font-bold tracking-wider block w-max font-display">
            The Payload Analogy
          </span>
          <h3 className="text-xl font-bold text-white uppercase font-display">Pips vs. Lots Explained</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            If <strong>Pips</strong> represent the <strong>distance</strong> your vehicle travels (the speedometer metric), then <strong>Lots</strong> represent the **size of your vehicle** (the weight of your cargo). 
          </p>
          <p className="text-xs text-gray-400 leading-relaxed">
            A small movement of 10 pips inside a bicycle cargo is practically unnoticeable ($0.10 profit), but that same 10-pip movement inside a heavy semi-truck yields massive momentum ($100.00 profit or loss).
          </p>
        </div>

        {/* Metaphor Matrix Card */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full md:w-auto">
          {Object.entries(lotData).map(([key, data]) => {
            const isSelected = selectedLot === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedLot(key)}
                className={`p-3 rounded-lg border flex flex-col items-center text-center gap-2 transition-all duration-300 ${
                  isSelected 
                    ? `border-brandGold bg-brandGold/10 scale-105 shadow-md shadow-brandGold/5` 
                    : 'border-white/5 bg-white/5 hover:border-white/20'
                }`}
              >
                <div className="h-10 flex items-center justify-center">
                  {data.svg}
                </div>
                <span className="text-[10px] font-bold text-white uppercase tracking-wider block mt-1">
                  {data.name.split(' ')[0]}
                </span>
                <span className="text-[9px] text-gray-500 font-mono">
                  {(data.multiplier).toFixed(3).replace(/\.?0+$/, "")} Lot
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lot Type Inspector Card */}
      <div className="glass-panel border border-white/10 rounded-2xl p-6 sm:p-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Details Column */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${selectedData.color}`}>
                  {selectedData.name}
                </span>
                <span className="text-xs text-gray-500 font-semibold font-mono">
                  {selectedData.units.toLocaleString()} Units of Base Currency
                </span>
              </div>
              <h4 className="text-2xl font-bold text-white font-display uppercase tracking-wide">
                Trading {selectedData.units.toLocaleString()} units
              </h4>
            </div>

            <div className="space-y-4">
              <div className="bg-black/40 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">
                  How it operates:
                </span>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  {selectedData.desc}
                </p>
              </div>

              <div className="bg-black/40 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">
                  Vehicle Vehicle Representation ({selectedData.vehicle}):
                </span>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  {selectedData.vehicleDesc}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs font-mono">
              <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                <span className="block text-gray-500 text-[10px] uppercase mb-1">Pip value (EUR/USD)</span>
                <span className="text-brandGold font-bold text-lg">${selectedData.pipValue.toFixed(2)} USD</span>
              </div>
              <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                <span className="block text-gray-500 text-[10px] uppercase mb-1">Risk Profile</span>
                <span className="text-white font-semibold text-xs block mt-1">{selectedData.risk}</span>
              </div>
            </div>
          </div>

          {/* Interactive Pip Slider Comparison */}
          <div className="bg-black/40 border border-white/15 p-6 rounded-2xl space-y-6">
            <h4 className="text-white font-bold font-display text-sm uppercase tracking-wider border-b border-white/10 pb-3 flex justify-between items-center">
              <span>Interactive Multiplier Test</span>
              <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold font-mono ${simulatedPips >= 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                {simulatedPips >= 0 ? `+${simulatedPips}` : simulatedPips} Pips
              </span>
            </h4>

            {/* Slider Control */}
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                <span>Loss (-50 pips)</span>
                <span>0 Pips</span>
                <span>Profit (+50 pips)</span>
              </div>
              <input
                type="range"
                min="-50"
                max="50"
                value={simulatedPips}
                onChange={(e) => setSimulatedPips(parseInt(e.target.value))}
                className="w-full h-1.5 bg-black/80 rounded-lg appearance-none cursor-pointer accent-brandGold"
              />
            </div>

            {/* PNL Comparative Meter Stack */}
            <div className="space-y-4 pt-2">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">
                Profit/Loss comparison across lot sizes:
              </span>

              {Object.entries(lotData).map(([key, data]) => {
                const isSelected = selectedLot === key;
                const pnl = simulatedPips * data.pipValue;
                const isPositive = pnl >= 0;
                
                // percentage width for filling bars: max pnl = 50 pips * 10 pipValue = 500 max
                const maxVal = Math.max(50 * data.pipValue, 0.1);
                const barFillWidth = Math.min((Math.abs(pnl) / maxVal) * 100, 100);

                return (
                  <div key={key} className={`space-y-1 p-2 rounded transition-all duration-300 ${isSelected ? 'bg-white/5 border-l-2 border-l-brandGold pl-3' : 'opacity-70'}`}>
                    <div className="flex justify-between text-xs font-mono">
                      <span className="font-semibold text-white uppercase">{data.name.split(' ')[0]} Lot <span className="text-[10px] text-gray-500">({(data.multiplier).toFixed(3).replace(/\.?0+$/, "")})</span></span>
                      <span className={`font-bold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                        {isPositive ? `+$${pnl.toFixed(2)}` : `-$${Math.abs(pnl).toFixed(2)}`}
                      </span>
                    </div>

                    {/* Bar visualization */}
                    <div className="w-full h-2 bg-black/60 rounded-full overflow-hidden relative">
                      <div
                        className={`h-full transition-all duration-300 rounded-full ${
                          isPositive ? 'bg-green-500 shadow shadow-green-500/20' : 'bg-red-500 shadow shadow-red-500/20'
                        }`}
                        style={{ width: `${barFillWidth}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Simulated selected lot math description */}
            <div className="bg-black/60 p-4 rounded-xl border border-white/5 text-center text-xs font-mono">
              <span className="text-[10px] text-gray-500 uppercase block mb-1">Calculated Formula ({selectedData.name}):</span>
              <span className="text-white">
                {simulatedPips} Pips × ${selectedData.pipValue.toFixed(2)} / Pip = {' '}
                <span className={`font-bold ${simulatedPips * selectedData.pipValue >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  ${(simulatedPips * selectedData.pipValue).toFixed(2)}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Summary Reference Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-black/30 border border-white/5 p-5 rounded-xl">
          <span className="text-brandGold font-bold text-xs uppercase tracking-wider block mb-2">Pips vs. Lots Summary</span>
          <p className="text-gray-400 text-xs font-light leading-relaxed">
            <strong>Pips</strong> represent the <em>price difference</em> in rate movement. 
            <strong>Lots</strong> represent the <em>volume</em> of cash traded. 
            The combination of both dictates the final profit or loss.
          </p>
        </div>

        <div className="bg-black/30 border border-white/5 p-5 rounded-xl">
          <span className="text-brandGold font-bold text-xs uppercase tracking-wider block mb-2">Example (EUR/USD)</span>
          <ul className="space-y-1.5 text-xs text-gray-400 font-light font-mono">
            <li>• 1.00 Lot = 100,000 EUR</li>
            <li>• 0.10 Lot = 10,000 EUR</li>
            <li>• 0.01 Lot = 1,000 EUR</li>
            <li>• 0.001 Lot = 100 EUR</li>
          </ul>
        </div>

        <div className="bg-black/30 border border-white/5 p-5 rounded-xl sm:col-span-2 md:col-span-1">
          <span className="text-brandGold font-bold text-xs uppercase tracking-wider block mb-2 font-display">Student Takeaway</span>
          <blockquote className="border-l border-brandGold/40 pl-3 text-gray-400 text-xs font-light leading-relaxed italic">
            "A lot is the amount of currency being bought or sold in a forex trade. The larger the lot size, the more money is gained or lost for each pip movement."
          </blockquote>
        </div>
      </div>
    </div>
  );
}
