import React from 'react';

export default function RevisionVisualizer() {
  const revisions = [
    { term: 'Pip', role: 'Movement', desc: 'Smallest standard unit of price change.', icon: '📈', formula: '0.0001 (standard) / 0.01 (JPY) / 0.1 (Gold)' },
    { term: 'Lot', role: 'Size', desc: 'Volume size of your trade contract.', icon: '📦', formula: 'Standard (100k) / Mini (10k) / Micro (1k)' },
    { term: 'Spread', role: 'Cost', desc: 'Difference between Buy (Ask) and Sell (Bid) price.', icon: '💸', formula: 'Spread = Ask - Bid (Broker transaction fee)' },
    { term: 'Leverage', role: 'Power', desc: 'Borrowed trading power provided by your broker.', icon: '⚡', formula: '1:100 leverage allows $100 to control $10,000' },
    { term: 'Margin', role: 'Deposit', desc: 'Required collateral held to open a leveraged position.', icon: '🔒', formula: 'Margin = Position Size ÷ Leverage Ratio' },
    { term: 'Broker', role: 'Middleman', desc: 'The company providing access to execute your trades.', icon: '🏢', formula: 'Provides platform, liquidity access, and quotes' }
  ];

  return (
    <div className="w-full space-y-8 animate-fadeIn">
      {/* Revision Table */}
      <div className="glass-panel border border-white/10 p-1 rounded-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-black/60 text-xs tracking-wider uppercase border-b border-white/10">
                <th className="p-5 font-bold text-brandGold w-1/4">Term</th>
                <th className="p-5 font-bold text-brandGold w-1/4">Core Concept</th>
                <th className="p-5 font-bold text-brandGold w-1/2">Meaning & Function</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-light text-sm">
              {revisions.map((item) => (
                <tr key={item.term} className="hover:bg-brandGold/5 transition-colors">
                  <td className="p-4 text-white font-bold flex items-center gap-2">
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.term}</span>
                  </td>
                  <td className="p-4">
                    <span className="font-mono text-brandGold bg-brandGold/10 px-2 py-0.5 rounded font-bold uppercase text-[10px]">
                      {item.role}
                    </span>
                  </td>
                  <td className="p-4 text-gray-400">
                    {item.desc}
                    <span className="block text-[10px] text-gray-500 font-mono mt-1 font-semibold">{item.formula}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Memory Trick Panel */}
      <div className="bg-brandGold/5 border border-brandGold/20 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto text-center relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-brandGold/5 rounded-full blur-2xl"></div>
        <h4 className="text-brandGold font-bold font-display uppercase tracking-widest text-xs mb-4">
          💡 Easy Student Memory Trick
        </h4>
        
        <div className="text-white text-base font-light tracking-wide max-w-xl mx-auto leading-relaxed mb-6 font-mono">
          <span className="text-brandGold font-extrabold">Pip</span> → <span className="text-brandGold font-extrabold">Lot</span> → <span className="text-brandGold font-extrabold">Spread</span> → <span className="text-brandGold font-extrabold">Leverage</span> → <span className="text-brandGold font-extrabold">Margin</span> → <span className="text-brandGold font-extrabold">Broker</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
          {revisions.map((r) => (
            <div key={r.term} className="bg-black/40 border border-white/5 p-3 rounded-lg flex flex-col items-center">
              <span className="text-white font-bold text-xs">{r.term}</span>
              <span className="text-[10px] text-gray-500 mt-1 font-mono uppercase tracking-wider">is the</span>
              <span className="text-brandGold font-bold text-[11px] font-mono mt-1 uppercase tracking-wider">{r.role}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
