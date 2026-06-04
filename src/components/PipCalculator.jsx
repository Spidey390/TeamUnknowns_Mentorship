import React, { useState, useEffect } from 'react';

export default function PipCalculator() {
  const [pair, setPair] = useState('EUR/USD');
  
  // Storing the price as an integer in units of pipettes (1/10 of a pip)
  // EUR/USD: 110500 represents 1.10500 (5 decimals)
  // USD/JPY: 145250 represents 145.250 (3 decimals)
  // XAU/USD: 235050 represents 2350.50 (2 decimals)
  const [pipValueInt, setPipValueInt] = useState(110500);
  const [flash, setFlash] = useState(null); // 'up' | 'down' | null

  // Sync integer value when pair changes in explorer
  useEffect(() => {
    if (pair === 'EUR/USD') {
      setPipValueInt(110500);
    } else if (pair === 'USD/JPY') {
      setPipValueInt(145250);
    } else {
      setPipValueInt(235050);
    }
  }, [pair]);

  // Price adjustment functions
  const adjustPrice = (amountPipettes) => {
    setPipValueInt((prev) => {
      if (amountPipettes > 0) {
        setFlash('up');
      } else {
        setFlash('down');
      }
      return prev + amountPipettes;
    });
  };

  // Clear flash color after 300ms
  useEffect(() => {
    if (flash) {
      const timer = setTimeout(() => setFlash(null), 300);
      return () => clearTimeout(timer);
    }
  }, [flash]);

  // Compute formatted price string
  const getFormattedPrice = () => {
    if (pair === 'EUR/USD') {
      return (pipValueInt / 100000).toFixed(5);
    } else if (pair === 'USD/JPY') {
      return (pipValueInt / 1000).toFixed(3);
    } else {
      // XAU/USD
      return (pipValueInt / 100).toFixed(2);
    }
  };

  const currentPriceStr = getFormattedPrice();

  // Digits array for visual rendering
  const priceChars = currentPriceStr.split('');

  // Identifiers of PIP and Pipette indices in the string
  // For EUR/USD "1.10500": Index 5 is 4th decimal (PIP), Index 6 is 5th decimal (Pipette)
  // For USD/JPY "145.250": Index 5 is 2nd decimal (PIP), Index 6 is 3rd decimal (Pipette)
  // For XAU/USD "2350.50": Index 5 is 1st decimal (PIP), Index 6 is 2nd decimal (Pipette)
  const isPipIndex = (index) => index === 5;
  const isPipetteIndex = (index) => index === 6;

  return (
    <div className="w-full">
      <div className="space-y-8 animate-fadeIn">
        {/* Pair Toggle */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-black/40 border border-white/5 p-4 rounded-xl text-center sm:text-left">
          <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Select Asset Pair:</span>
          <div className="flex flex-wrap justify-center sm:justify-end gap-2">
            <button
              onClick={() => setPair('EUR/USD')}
              className={`px-4 py-1.5 rounded font-bold text-xs transition-all duration-300 ${
                pair === 'EUR/USD'
                  ? 'bg-brandGold/20 border border-brandGold text-brandGold'
                  : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              EUR/USD (Standard)
            </button>
            <button
              onClick={() => setPair('USD/JPY')}
              className={`px-4 py-1.5 rounded font-bold text-xs transition-all duration-300 ${
                pair === 'USD/JPY'
                  ? 'bg-brandGold/20 border border-brandGold text-brandGold'
                  : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              USD/JPY (Yen Pair)
            </button>
            <button
              onClick={() => setPair('XAU/USD')}
              className={`px-4 py-1.5 rounded font-bold text-xs transition-all duration-300 ${
                pair === 'XAU/USD'
                  ? 'bg-brandGold/20 border border-brandGold text-brandGold'
                  : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              XAU/USD (Gold)
            </button>
          </div>
        </div>

        {/* Interactive Digit Display */}
        <div className="bg-black/50 border border-white/10 rounded-2xl p-8 text-center relative overflow-hidden">
          {/* Visual Flash effect */}
          <div
            className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
              flash === 'up'
                ? 'bg-green-500/5 opacity-100'
                : flash === 'down'
                ? 'bg-red-500/5 opacity-100'
                : 'opacity-0'
            }`}
          ></div>

          <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-6">
            Interactive Exchange Rate Layout
          </div>

          {/* Rendered Digits */}
          <div className="flex items-center justify-center gap-1 sm:gap-2 select-none my-16">
            {priceChars.map((char, idx) => {
              if (char === '.') {
                return (
                  <span key={idx} className="text-4xl sm:text-6xl text-white/55 font-mono px-1 sm:px-2">
                    .
                  </span>
                );
              }

              const isPip = isPipIndex(idx);
              const isPipette = isPipetteIndex(idx);

              if (isPip) {
                return (
                  <div key={idx} className="relative flex flex-col items-center">
                    <div className="bg-brandGold/15 border-brandGold shadow-md shadow-brandGold/20 text-brandGold font-bold font-mono text-4xl sm:text-6xl h-16 w-12 sm:h-24 sm:w-18 flex items-center justify-center rounded-xl border-2 transition-all duration-300 transform scale-110">
                      {char}
                    </div>
                    <div className="absolute -bottom-14 sm:-bottom-18 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
                      <svg className="w-3.5 h-3.5 text-brandGold mb-1 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-[9px] sm:text-[10px] bg-brandGold text-brandDark font-extrabold uppercase px-1.5 py-0.5 rounded shadow-lg whitespace-nowrap">
                        {pair === 'EUR/USD' ? '1 PIP (4th Dec)' : pair === 'USD/JPY' ? '1 PIP (2nd Dec)' : '1 PIP (1st Dec)'}
                      </span>
                    </div>
                  </div>
                );
              }

              if (isPipette) {
                return (
                  <div key={idx} className="relative flex flex-col items-center self-end mb-1 sm:mb-2">
                    <div className="absolute -top-14 sm:-top-18 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
                      <span className="text-[8px] bg-sky-500 text-brandDark font-extrabold uppercase px-1.5 py-0.5 rounded shadow-lg whitespace-nowrap">
                        Pipette (1/10 Pip)
                      </span>
                      <svg className="w-3 h-3 text-sky-400 mt-1 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div className="bg-sky-500/10 border-sky-500/30 text-sky-400 font-bold font-mono text-2xl sm:text-4xl h-10 w-8 sm:h-16 sm:w-12 flex items-center justify-center rounded-lg border-2">
                      {char}
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={idx}
                  className="bg-white/5 border-white/10 text-white/90 font-mono text-3xl sm:text-5xl h-14 w-10 sm:h-20 sm:w-15 flex items-center justify-center rounded-xl border transition-all duration-300"
                >
                  {char}
                </div>
              );
            })}
          </div>

          {/* Instruction Tip */}
          <div className="text-gray-400 text-xs font-light max-w-xl mx-auto leading-relaxed mt-6">
            {pair === 'EUR/USD' ? (
              <span>
                For <strong>Standard Currency Pairs</strong>, a PIP is represented at the <strong>4th decimal place</strong> (0.0001). The smaller 5th decimal place is called a <strong>Pipette</strong> (0.00001), representing a fraction of a pip.
              </span>
            ) : pair === 'USD/JPY' ? (
              <span>
                For <strong>Japanese Yen (JPY) Pairs</strong>, the PIP is located at the <strong>2nd decimal place</strong> (0.01). The 3rd decimal place represents the fractional <strong>Pipette</strong> (0.001).
              </span>
            ) : (
              <span>
                For <strong>Gold (XAU/USD)</strong>, the PIP is located at the <strong>1st decimal place</strong> (0.1). The 2nd decimal place (0.01) represents the fractional <strong>Pipette</strong>.
              </span>
            )}
          </div>
        </div>

        {/* Pricing Adjuster Panel */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-black/30 border border-white/5 p-6 rounded-xl space-y-4">
            <h4 className="text-white font-bold font-display text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brandGold"></span>
              Adjust Rate Value
            </h4>
            <p className="text-gray-400 text-xs font-light leading-relaxed">
              Click the interactive triggers below to shift the exchange rate and observe how the PIP and Pipette digits behave.
            </p>

            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => adjustPrice(10)}
                className="px-3 py-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/20 rounded font-semibold text-xs transition-all duration-200"
              >
                +1.0 Pip
              </button>
              <button
                onClick={() => adjustPrice(100)}
                className="px-3 py-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/20 rounded font-semibold text-xs transition-all duration-200"
              >
                +10.0 Pips
              </button>
              <button
                onClick={() => adjustPrice(1)}
                className="px-3 py-2 bg-green-500/10 hover:bg-green-500/20 text-sky-400 border border-sky-500/20 rounded font-semibold text-[10px] transition-all duration-200"
              >
                +0.1 Pip (+1 Ppt)
              </button>
              <button
                onClick={() => adjustPrice(-10)}
                className="px-3 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded font-semibold text-xs transition-all duration-200"
              >
                -1.0 Pip
              </button>
              <button
                onClick={() => adjustPrice(-100)}
                className="px-3 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded font-semibold text-xs transition-all duration-200"
              >
                -10.0 Pips
              </button>
              <button
                onClick={() => adjustPrice(-1)}
                className="px-3 py-2 bg-red-500/10 hover:bg-red-500/20 text-sky-400 border border-sky-500/20 rounded font-semibold text-[10px] transition-all duration-200"
              >
                -0.1 Pip (-1 Ppt)
              </button>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setPipValueInt(pair === 'EUR/USD' ? 110500 : pair === 'USD/JPY' ? 145250 : 235050)}
                className="w-full py-1.5 bg-white/5 hover:bg-white/10 text-gray-300 text-xs rounded border border-white/5 font-semibold transition-all duration-200"
              >
                Reset Price
              </button>
            </div>
          </div>

          {/* Student Note */}
          <div className="bg-black/30 border border-white/5 p-6 rounded-xl flex flex-col justify-between">
            <div>
              <h4 className="text-white font-bold font-display text-sm uppercase tracking-wider mb-2">
                📝 Simple Definition for Students
              </h4>
              <blockquote className="border-l-2 border-brandGold pl-4 text-gray-300 text-xs font-light leading-relaxed my-3 italic">
                {pair === 'EUR/USD' ? (
                  "A pip is the smallest standard unit used to measure price changes in standard forex currency pairs. It represents 0.0001 (1/10,000th)."
                ) : pair === 'USD/JPY' ? (
                  "For Japanese Yen (JPY) pairs, a pip is 0.01 (1/100th), meaning it is at the second decimal place."
                ) : (
                  "For commodities like Gold (XAU/USD), a pip is 0.1 (10 cents), meaning it is at the first decimal place."
                )}
              </blockquote>
            </div>
            <div className="bg-brandGold/5 border border-brandGold/20 p-3 rounded-lg text-[10px] text-brandGold leading-relaxed">
              {pair === 'EUR/USD' ? (
                <span>💡 <strong>Why 4 Decimals?</strong> If EUR/USD moves from 1.1050 to 1.1051, that is 1 pip. A move of 5 pips is 0.0005.</span>
              ) : pair === 'USD/JPY' ? (
                <span>💡 <strong>Yen Difference:</strong> If USD/JPY moves from 145.25 to 145.26, that is 1 pip. A move of 10 pips is 0.10 JPY.</span>
              ) : (
                <span>💡 <strong>Gold Difference:</strong> If Gold moves from 2350.50 to 2350.60, that is 1 pip (10 cents). A $1.00 move is 10 pips.</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
