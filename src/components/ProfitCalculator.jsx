import React, { useState, useEffect } from 'react';

export default function ProfitCalculator() {
  const [simPair, setSimPair] = useState('EUR/USD');
  const [simDirection, setSimDirection] = useState('BUY');
  const [simEntry, setSimEntry] = useState(simPair === 'EUR/USD' ? '1.1050' : simPair === 'USD/JPY' ? '145.25' : '2350.50');
  const [simExit, setSimExit] = useState(simPair === 'EUR/USD' ? '1.1070' : simPair === 'USD/JPY' ? '145.85' : '2352.50');
  const [simLotType, setSimLotType] = useState('standard'); // 'standard', 'mini', 'micro', 'custom'
  const [simLotSize, setSimLotSize] = useState(1.0);

  // Sync default entry/exit prices in simulator when simulator pair changes
  useEffect(() => {
    if (simPair === 'EUR/USD') {
      setSimEntry('1.1050');
      setSimExit('1.1070');
    } else if (simPair === 'USD/JPY') {
      setSimEntry('145.25');
      setSimExit('145.85');
    } else {
      // XAU/USD
      setSimEntry('2350.50');
      setSimExit('2352.50');
    }
  }, [simPair]);

  // Lot Size Presets
  const lotPresets = {
    standard: 1.0,
    mini: 0.1,
    micro: 0.01,
  };

  const handleLotTypeChange = (type) => {
    setSimLotType(type);
    if (type !== 'custom') {
      setSimLotSize(lotPresets[type]);
    }
  };

  // Profit / Loss calculation math
  const entryVal = parseFloat(simEntry) || 0;
  const exitVal = parseFloat(simExit) || 0;
  
  let pipsDiff = 0;
  let rawDiff = 0;
  let pipValueUSD = 0;
  let totalProfitUSD = 0;
  let profitFormula = '';
  
  if (simPair === 'EUR/USD') {
    rawDiff = exitVal - entryVal;
    pipsDiff = rawDiff * 10000;
    
    if (simDirection === 'SELL') {
      pipsDiff = -pipsDiff;
    }
    
    // Lot volume size in base currency
    const units = simLotSize * 100000;
    // Pip value in USD = Pip Size * units
    // Since quote is USD, pip value is always constant in USD terms: 0.0001 * Units
    pipValueUSD = 0.0001 * units;
    totalProfitUSD = pipsDiff * pipValueUSD;

    profitFormula = `
• Pip Calculation: (${exitVal.toFixed(4)} - ${entryVal.toFixed(4)}) * 10,000 = ${((exitVal - entryVal) * 10000).toFixed(1)} Pips
• Direction Multiplier: ${simDirection === 'BUY' ? '1x (Buy/Long)' : '-1x (Sell/Short)'} → Net Pips = ${pipsDiff.toFixed(1)}
• Lot Units: ${simLotSize} Lots = ${units.toLocaleString()} Units of EUR
• Pip Value: 0.0001 (Pip Size) * ${units.toLocaleString()} (Units) = $${pipValueUSD.toFixed(2)} USD per Pip
• Total profit/loss: ${pipsDiff.toFixed(1)} Pips * $${pipValueUSD.toFixed(2)} = $${totalProfitUSD.toFixed(2)} USD
    `;
  } else if (simPair === 'USD/JPY') {
    rawDiff = exitVal - entryVal;
    pipsDiff = rawDiff * 100;
    
    if (simDirection === 'SELL') {
      pipsDiff = -pipsDiff;
    }
    
    const units = simLotSize * 100000; // Units of base currency (USD)
    // JPY Pip Size = 0.01 JPY
    // Convert Pip Value to USD: JPY Pip Value / Exit Rate
    if (exitVal > 0) {
      pipValueUSD = (0.01 / exitVal) * units;
      totalProfitUSD = pipsDiff * pipValueUSD;
    }

    profitFormula = `
• Pip Calculation: (${exitVal.toFixed(2)} - ${entryVal.toFixed(2)}) * 100 = ${((exitVal - entryVal) * 100).toFixed(1)} Pips
• Direction Multiplier: ${simDirection === 'BUY' ? '1x (Buy/Long)' : '-1x (Sell/Short)'} → Net Pips = ${pipsDiff.toFixed(1)}
• Lot Units: ${simLotSize} Lots = $${units.toLocaleString()} USD
• JPY Pip Value: 0.01 * $${units.toLocaleString()} = ${(0.01 * units).toLocaleString()} JPY per Pip
• Convert to USD: ${(0.01 * units).toLocaleString()} JPY / ${exitVal.toFixed(2)} (Exit Rate) = $${pipValueUSD.toFixed(2)} USD per Pip
• Total profit/loss: ${pipsDiff.toFixed(1)} Pips * $${pipValueUSD.toFixed(2)} = $${totalProfitUSD.toFixed(2)} USD
    `;
  } else {
    // XAU/USD (Gold)
    rawDiff = exitVal - entryVal;
    pipsDiff = rawDiff * 10; // 1 pip = 0.1 move
    
    if (simDirection === 'SELL') {
      pipsDiff = -pipsDiff;
    }
    
    // Contract size: 1 lot = 100 ounces
    const units = simLotSize * 100; 
    // Pip value in USD = 0.1 * units
    pipValueUSD = 0.1 * units;
    totalProfitUSD = pipsDiff * pipValueUSD;

    profitFormula = `
• Pip Calculation: (${exitVal.toFixed(2)} - ${entryVal.toFixed(2)}) * 10 = ${((exitVal - entryVal) * 10).toFixed(1)} Pips
• Direction Multiplier: ${simDirection === 'BUY' ? '1x (Buy/Long)' : '-1x (Sell/Short)'} → Net Pips = ${pipsDiff.toFixed(1)}
• Lot Volume: ${simLotSize} Lots = ${units.toLocaleString()} Ounces of Gold
• Pip Value: 0.1 (Pip Size) * ${units.toLocaleString()} (Ounces) = $${pipValueUSD.toFixed(2)} USD per Pip
• Total profit/loss: ${pipsDiff.toFixed(1)} Pips * $${pipValueUSD.toFixed(2)} = $${totalProfitUSD.toFixed(2)} USD
    `;
  }

  const isProfitable = totalProfitUSD >= 0;

  return (
    <div className="w-full space-y-8 animate-fadeIn">
      {/* Simulator Controls */}
      <div className="glass-panel border border-white/10 rounded-xl p-6 sm:p-8 space-y-6">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Pair Selection */}
          <div>
            <label className="block text-gray-400 text-xs uppercase font-bold tracking-wider mb-2">
              Asset / Pair
            </label>
            <select
              value={simPair}
              onChange={(e) => setSimPair(e.target.value)}
              className="w-full bg-black/50 border border-white/10 text-white rounded p-2.5 text-xs font-bold font-mono focus:border-brandGold focus:outline-none"
            >
              <option value="EUR/USD">EUR/USD (Standard)</option>
              <option value="USD/JPY">USD/JPY (Yen Pair)</option>
              <option value="XAU/USD">XAU/USD (Gold)</option>
            </select>
          </div>

          {/* Trade Direction */}
          <div>
            <label className="block text-gray-400 text-xs uppercase font-bold tracking-wider mb-2">
              Trade Action
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setSimDirection('BUY')}
                className={`py-2 rounded font-bold text-xs uppercase tracking-wider transition-all duration-200 ${
                  simDirection === 'BUY'
                    ? 'bg-green-500 text-white shadow shadow-green-500/20'
                    : 'bg-white/5 text-gray-400 border border-white/5 hover:text-white'
                }`}
              >
                Buy (Long)
              </button>
              <button
                onClick={() => setSimDirection('SELL')}
                className={`py-2 rounded font-bold text-xs uppercase tracking-wider transition-all duration-200 ${
                  simDirection === 'SELL'
                    ? 'bg-red-500 text-white shadow shadow-red-500/20'
                    : 'bg-white/5 text-gray-400 border border-white/5 hover:text-white'
                }`}
              >
                Sell (Short)
              </button>
            </div>
          </div>

          {/* Lot Sizing */}
          <div>
            <label className="block text-gray-400 text-xs uppercase font-bold tracking-wider mb-2">
              Trade Lot Size
            </label>
            <div className="grid grid-cols-4 gap-1">
              <button
                onClick={() => handleLotTypeChange('standard')}
                className={`py-2 rounded text-[10px] font-semibold transition-all duration-200 ${
                  simLotType === 'standard'
                    ? 'bg-brandGold text-brandDark font-bold'
                    : 'bg-white/5 text-gray-400 hover:text-white'
                }`}
                title={simPair === 'XAU/USD' ? '100 Ounces of Gold' : '100,000 base currency units'}
              >
                Std (1.0)
              </button>
              <button
                onClick={() => handleLotTypeChange('mini')}
                className={`py-2 rounded text-[10px] font-semibold transition-all duration-200 ${
                  simLotType === 'mini'
                    ? 'bg-brandGold text-brandDark font-bold'
                    : 'bg-white/5 text-gray-400 hover:text-white'
                }`}
                title={simPair === 'XAU/USD' ? '10 ounces of Gold' : '10,000 base currency units'}
              >
                Mini (0.1)
              </button>
              <button
                onClick={() => handleLotTypeChange('micro')}
                className={`py-2 rounded text-[10px] font-semibold transition-all duration-200 ${
                  simLotType === 'micro'
                    ? 'bg-brandGold text-brandDark font-bold'
                    : 'bg-white/5 text-gray-400 hover:text-white'
                }`}
                title={simPair === 'XAU/USD' ? '1 ounce of Gold' : '1,000 base currency units'}
              >
                Micro (0.01)
              </button>
              <button
                onClick={() => handleLotTypeChange('custom')}
                className={`py-2 rounded text-[10px] font-semibold transition-all duration-200 ${
                  simLotType === 'custom'
                    ? 'bg-brandGold text-brandDark font-bold'
                    : 'bg-white/5 text-gray-400 hover:text-white'
                }`}
                title="Enter custom lot size"
              >
                Custom
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Entry Price */}
          <div>
            <label className="block text-gray-400 text-xs uppercase font-bold tracking-wider mb-2">
              Entry Price
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                step={simPair === 'EUR/USD' ? '0.0001' : simPair === 'USD/JPY' ? '0.01' : '0.1'}
                value={simEntry}
                onChange={(e) => setSimEntry(e.target.value)}
                className="w-full bg-black/50 border border-white/10 text-white rounded p-2.5 text-xs font-mono focus:border-brandGold focus:outline-none"
              />
              <div className="flex flex-col gap-1 justify-center">
                <button
                  onClick={() => setSimEntry((prev) => (parseFloat(prev) + (simPair === 'EUR/USD' ? 0.0001 : simPair === 'USD/JPY' ? 0.01 : 0.1)).toFixed(simPair === 'EUR/USD' ? 4 : 2))}
                  className="px-1.5 py-0.5 bg-white/5 hover:bg-white/10 border border-white/5 rounded text-[8px]"
                >
                  ▲
                </button>
                <button
                  onClick={() => setSimEntry((prev) => (parseFloat(prev) - (simPair === 'EUR/USD' ? 0.0001 : simPair === 'USD/JPY' ? 0.01 : 0.1)).toFixed(simPair === 'EUR/USD' ? 4 : 2))}
                  className="px-1.5 py-0.5 bg-white/5 hover:bg-white/10 border border-white/5 rounded text-[8px]"
                >
                  ▼
                </button>
              </div>
            </div>
          </div>

          {/* Exit Price */}
          <div>
            <label className="block text-gray-400 text-xs uppercase font-bold tracking-wider mb-2">
              Exit Price
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                step={simPair === 'EUR/USD' ? '0.0001' : simPair === 'USD/JPY' ? '0.01' : '0.1'}
                value={simExit}
                onChange={(e) => setSimExit(e.target.value)}
                className="w-full bg-black/50 border border-white/10 text-white rounded p-2.5 text-xs font-mono focus:border-brandGold focus:outline-none"
              />
              <div className="flex flex-col gap-1 justify-center">
                <button
                  onClick={() => setSimExit((prev) => (parseFloat(prev) + (simPair === 'EUR/USD' ? 0.0001 : simPair === 'USD/JPY' ? 0.01 : 0.1)).toFixed(simPair === 'EUR/USD' ? 4 : 2))}
                  className="px-1.5 py-0.5 bg-white/5 hover:bg-white/10 border border-white/5 rounded text-[8px]"
                >
                  ▲
                </button>
                <button
                  onClick={() => setSimExit((prev) => (parseFloat(prev) - (simPair === 'EUR/USD' ? 0.0001 : simPair === 'USD/JPY' ? 0.01 : 0.1)).toFixed(simPair === 'EUR/USD' ? 4 : 2))}
                  className="px-1.5 py-0.5 bg-white/5 hover:bg-white/10 border border-white/5 rounded text-[8px]"
                >
                  ▼
                </button>
              </div>
            </div>
          </div>

          {/* Custom Lot Input */}
          {simLotType === 'custom' && (
            <div>
              <label className="block text-gray-400 text-xs uppercase font-bold tracking-wider mb-2">
                Custom Lots Amount
              </label>
              <input
                type="number"
                step="0.01"
                min="0.01"
                max="100"
                value={simLotSize}
                onChange={(e) => setSimLotSize(parseFloat(e.target.value) || 0.01)}
                className="w-full bg-black/50 border border-white/10 text-white rounded p-2.5 text-xs font-mono focus:border-brandGold focus:outline-none"
              />
            </div>
          )}
        </div>
      </div>

      {/* Trade Math Output Panel */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Calculation Output Card */}
        <div className="bg-black/40 border border-white/5 p-6 rounded-xl flex flex-col justify-between relative overflow-hidden">
          <div
            className={`absolute left-0 top-0 bottom-0 w-2 ${
              isProfitable ? 'bg-green-500' : 'bg-red-500'
            }`}
          ></div>

          <div className="space-y-4">
            <h4 className="text-white font-bold font-display text-sm uppercase tracking-wider pl-2 flex items-center justify-between">
              <span>Simulation Results</span>
              <span
                className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-widest ${
                  isProfitable
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-red-500/20 text-red-400'
                }`}
              >
                {isProfitable ? 'Profit 📈' : 'Loss 📉'}
              </span>
            </h4>

            <div className="space-y-3 font-mono text-xs pl-2 bg-black/30 p-4 rounded border border-white/5">
              <div className="flex justify-between">
                <span className="text-gray-500">Direction:</span>
                <span className={simDirection === 'BUY' ? 'text-green-400 font-bold' : 'text-red-400 font-bold'}>
                  {simDirection === 'BUY' ? 'BUY (Long)' : 'SELL (Short)'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Price Move:</span>
                <span className="text-white font-bold">
                  {entryVal.toFixed(simPair === 'EUR/USD' ? 4 : 2)} → {exitVal.toFixed(simPair === 'EUR/USD' ? 4 : 2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Total Pip Move:</span>
                <span className={`font-bold ${pipsDiff >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {pipsDiff >= 0 ? `+${pipsDiff.toFixed(1)}` : pipsDiff.toFixed(1)} Pips
                </span>
              </div>
              <div className="flex justify-between border-t border-white/10 pt-2 mt-2">
                <span className="text-gray-500">Profit / Loss (USD):</span>
                <span className={`font-bold text-sm ${isProfitable ? 'text-green-400' : 'text-red-400'}`}>
                  {isProfitable ? `+$${totalProfitUSD.toFixed(2)}` : `-$${Math.abs(totalProfitUSD).toFixed(2)}`} USD
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 text-[10px] text-gray-500 leading-relaxed italic pl-2">
            💡 Lot sizes control how much money each pip is worth. For EUR/USD and Gold, a standard lot (1.0) means every pip is worth $10 USD. For Gold, standard contract size is 100 ounces.
          </div>
        </div>

        {/* Math Formula breakdown */}
        <div className="bg-black/30 border border-white/5 p-6 rounded-xl flex flex-col justify-between">
          <div>
            <h4 className="text-white font-bold font-display text-sm uppercase tracking-wider mb-2">
              📐 How the Math Works
            </h4>
            <div className="bg-black/60 p-4 rounded-lg border border-white/5 text-[11px] text-gray-400 leading-relaxed whitespace-pre-line font-mono">
              {profitFormula.trim()}
            </div>
          </div>

          <div className="mt-4 bg-brandGold/5 p-3 rounded-lg border border-brandGold/15 text-[10px] text-brandGold leading-relaxed">
            💡 <strong>Remember:</strong> In forex and commodities, pip captures price movement, whereas Lot Size scales the contract value. Higher lot sizes yield greater rewards but carry higher risk!
          </div>
        </div>
      </div>
    </div>
  );
}
