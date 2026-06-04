import React from 'react';

export default function BrokerVisualizer() {
  const brokers = [
    {
      name: 'Exness',
      rating: '⭐ 4.8',
      type: 'High Leverage / Instant Withdrawals',
      feature: 'Offers leverage up to 1:2000, low spreads, and quick execution.'
    },
    {
      name: 'IC Markets',
      rating: '⭐ 4.9',
      type: 'True ECN Broker',
      feature: 'Extremely popular for raw spreads starting from 0.0 pips. Great for scalpers.'
    },
    {
      name: 'XM',
      rating: '⭐ 4.7',
      type: 'Micro & Standard Accounts',
      feature: 'Great bonus offers and excellent customer support for beginners.'
    },
    {
      name: 'Pepperstone',
      rating: '⭐ 4.8',
      type: 'Fast Execution / Low Slippage',
      feature: 'Australian broker with excellent execution speeds and raw spreads.'
    }
  ];

  return (
    <div className="w-full space-y-8 animate-fadeIn">
      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        {/* What a broker does */}
        <div className="bg-black/40 border border-white/5 p-6 rounded-xl flex flex-col justify-between">
          <div>
            <h4 className="text-brandGold font-bold font-display text-sm uppercase tracking-wider mb-4">
              🛡️ The Role of a Forex Broker
            </h4>
            <p className="text-gray-400 text-xs font-light leading-relaxed mb-6">
              Without a broker, retail traders cannot trade. They connect you directly to the interbank liquidity providers.
            </p>

            <ul className="space-y-4 text-xs text-gray-300 font-light">
              <li className="flex items-start gap-3">
                <span className="text-brandGold">💻</span>
                <div>
                  <strong className="text-white font-semibold">Provides a Platform:</strong> 
                  <span className="block text-gray-400 mt-0.5">Access to charts, MT4, MT5, or proprietary trading portals.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brandGold">⚡</span>
                <div>
                  <strong className="text-white font-semibold">Executes Orders:</strong>
                  <span className="block text-gray-400 mt-0.5">Places your buys and sells instantly in the live global market.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brandGold">💸</span>
                <div>
                  <strong className="text-white font-semibold">Offers Leverage:</strong>
                  <span className="block text-gray-400 mt-0.5">Lends you the purchasing power to run large trades with small deposits.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brandGold">💰</span>
                <div>
                  <strong className="text-white font-semibold">Collects Fees:</strong>
                  <span className="block text-gray-400 mt-0.5">Charges via the spread gap or a direct commissions-per-lot model.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Metaphor Card */}
        <div className="bg-black/40 border border-white/5 p-6 rounded-xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-brandGold/5 rounded-full blur-xl"></div>
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">✈️ The Travel Agent Metaphor</h4>
            <div className="bg-black/60 p-4 rounded border border-white/5 space-y-4 text-xs font-light leading-relaxed text-gray-300">
              <p>
                Think of a broker as a travel agent:
              </p>
              <div className="border-l-2 border-brandGold pl-4 font-mono text-[11px] text-gray-400">
                You want to travel to Europe $\rightarrow$ You can't print flight tickets yourself.
                <br />
                You pay a travel agent $\rightarrow$ They book the flight and hand you the ticket.
              </div>
              <p>
                In the same way, you cannot trade EUR/USD directly with central banks. The broker acts as your travel agent, connecting your mouse clicks to the global market.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Account & Bid/Ask Prices */}
      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        {/* Demo Account Card */}
        <div className="bg-black/40 border border-white/5 p-6 rounded-xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-brandGold/5 rounded-full blur-xl"></div>
          <div>
            <h4 className="text-brandGold font-bold font-display text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span>🔬</span> Demo Accounts: The Trader's Sandbox
            </h4>
            <p className="text-gray-400 text-xs font-light leading-relaxed mb-6">
              A demo account is a risk-free practice account funded with virtual money. It operates on real-time market feeds, allowing you to practice without financial risk.
            </p>
            <ul className="space-y-3 text-xs text-gray-300 font-light">
              <li className="flex items-start gap-2">
                <span className="text-brandGold">•</span>
                <span><strong className="text-white">Zero Financial Risk:</strong> Learn how to place orders, manage risk, and use indicators with $10,000+ of play money.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brandGold">•</span>
                <span><strong className="text-white">Real Market Feed:</strong> Spreads, prices, and charts behave exactly as they do in the live environment.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brandGold">•</span>
                <span><strong className="text-white">Strategy Testing:</strong> Always test new concepts or execution systems on demo for at least 3-6 months before risking real money.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bid & Ask Card */}
        <div className="bg-black/40 border border-white/5 p-6 rounded-xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-brandGold/5 rounded-full blur-xl"></div>
          <div>
            <h4 className="text-brandGold font-bold font-display text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span>⚖️</span> Bid & Ask: The Two-Way Quote
            </h4>
            <p className="text-gray-400 text-xs font-light leading-relaxed mb-6">
              Forex pairs are always quoted with two prices: the Bid and the Ask.
            </p>
            <ul className="space-y-4 text-xs text-gray-300 font-light">
              <li className="flex items-start gap-3">
                <span className="bg-green-500/20 text-green-400 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider font-mono">Ask</span>
                <div>
                  <strong className="text-white font-semibold">The Buy Price (Ask):</strong>
                  <span className="block text-gray-400 mt-0.5">The price you pay to enter a BUY (Long) trade. It is the higher price in the quote.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-red-500/20 text-red-400 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider font-mono">Bid</span>
                <div>
                  <strong className="text-white font-semibold">The Sell Price (Bid):</strong>
                  <span className="block text-gray-400 mt-0.5">The price you receive to enter a SELL (Short) trade. It is the lower price in the quote.</span>
                </div>
              </li>
            </ul>
            <div className="bg-brandGold/5 p-3 rounded border border-brandGold/15 mt-4 text-[10px] font-sans text-gray-400 leading-relaxed">
              <strong>🚗 Car Dealership Metaphor:</strong> A dealership buys a car from you at a lower price (Bid) and sells it to another customer at a higher price (Ask). The difference is their profit.
            </div>
          </div>
        </div>
      </div>


      {/* Broker List Grid */}
      <div className="space-y-4">
        <h4 className="text-white font-bold font-display text-xs uppercase tracking-wider text-center">
          Examples of Popular Forex Brokers
        </h4>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {brokers.map((b) => (
            <div key={b.name} className="glass-panel p-4 rounded-xl border border-white/5 space-y-3 hover:scale-[1.02] hover:border-brandGold/20 transition-all duration-300">
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-white font-bold font-display tracking-wider text-sm">{b.name}</span>
                <span className="text-brandGold font-mono text-[10px] font-bold">{b.rating}</span>
              </div>
              <span className="text-[9px] bg-brandGold/10 text-brandGold px-2 py-1 rounded font-semibold font-mono inline-block max-w-full uppercase leading-tight whitespace-normal">
                {b.type}
              </span>
              <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                {b.feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
