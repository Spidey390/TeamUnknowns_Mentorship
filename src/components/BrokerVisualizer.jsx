import React, { useState } from 'react';
import SpreadVisualizer from './SpreadVisualizer';
import {
  Landmark,
  User,
  Building2,
  Globe,
  Plane,
  Microscope,
  Briefcase,
  Monitor,
  BarChart2,
  Zap,
  Settings,
  FileText,
  CreditCard,
  Check,
  X,
  Lightbulb,
  Lock,
  Home,
  ShieldAlert,
  AlertTriangle,
  Coins,
  Unlock,
  Pin,
  ShieldCheck,
  Star
} from 'lucide-react';


export default function BrokerVisualizer() {
  // State for interactive Balance / Equity simulator
  const [balance, setBalance] = useState(1000);
  const [openTradePnl, setOpenTradePnl] = useState(30);
  const [usedMargin, setUsedMargin] = useState(100);

  // State for Section 5 & 6: Interactive Leverage Visualizer
  const [levDeposit, setLevDeposit] = useState(1000);
  const [levRatio, setLevRatio] = useState(100);
  const [levLots, setLevLots] = useState(1.0);
  const [levPipShift, setLevPipShift] = useState(25);

  // Calculated Leverage Parameters
  const totalPurchasingPower = levDeposit * levRatio;
  const notionalPositionValue = levLots * 100000;
  const requiredMarginCalc = (levLots * 100000) / levRatio;
  const marginPercentage = ((1 / levRatio) * 100).toFixed(2);
  const levPipProfit = levLots * 10 * levPipShift;
  const levAccountReturn = ((levPipProfit / levDeposit) * 100).toFixed(1);
  const canAffordTrade = levDeposit >= requiredMarginCalc;

  // Calculated Account Parameters
  const equity = balance + openTradePnl;
  const freeMargin = equity - usedMargin;
  const marginLevel = usedMargin > 0 ? ((equity / usedMargin) * 100).toFixed(1) : '∞';

  // State for Section 4: Interactive Bid / Ask Price Simulator
  const [selectedSymbolKey, setSelectedSymbolKey] = useState('EURUSD');
  const [priceTickShift, setPriceTickShift] = useState(0); // in pips
  const [simSpreadPips, setSimSpreadPips] = useState(0.2); // pips
  const [simActiveTrade, setSimActiveTrade] = useState(null); // { type: 'BUY' | 'SELL', entryPrice: number, entryTime: string }

  const quoteSymbols = {
    EURUSD: {
      name: 'EUR/USD',
      baseBid: 1.17000,
      pipDigits: 5,
      pipFactor: 0.0001,
      defaultSpread: 0.2,
      pipMultiplier: 10000
    },
    GBPUSD: {
      name: 'GBP/USD',
      baseBid: 1.30500,
      pipDigits: 5,
      pipFactor: 0.0001,
      defaultSpread: 0.5,
      pipMultiplier: 10000
    },
    USDJPY: {
      name: 'USD/JPY',
      baseBid: 155.200,
      pipDigits: 3,
      pipFactor: 0.01,
      defaultSpread: 0.8,
      pipMultiplier: 100
    },
    XAUUSD: {
      name: 'XAU/USD (Gold)',
      baseBid: 2450.50,
      pipDigits: 2,
      pipFactor: 0.1,
      defaultSpread: 1.5,
      pipMultiplier: 10
    }
  };

  const currentSymbol = quoteSymbols[selectedSymbolKey];
  const simBidPrice = currentSymbol.baseBid + (priceTickShift * currentSymbol.pipFactor);
  const simAskPrice = simBidPrice + (simSpreadPips * currentSymbol.pipFactor);
  const simSpreadDifference = (simAskPrice - simBidPrice).toFixed(currentSymbol.pipDigits);

  // Calculate live floating PnL if a simulated trade is active
  let simTradeFloatingPips = 0;
  let simTradeFloatingUSD = 0;
  if (simActiveTrade) {
    if (simActiveTrade.type === 'BUY') {
      // You bought at Ask, you close at current Bid
      simTradeFloatingPips = ((simBidPrice - simActiveTrade.entryPrice) * currentSymbol.pipMultiplier);
    } else {
      // You sold at Bid, you close at current Ask
      simTradeFloatingPips = ((simActiveTrade.entryPrice - simAskPrice) * currentSymbol.pipMultiplier);
    }
    simTradeFloatingUSD = simTradeFloatingPips * 10; // $10 per pip standard lot
  }

  const brokers = [
    {
      name: 'IC Markets',
      rating: '4.9',
      type: 'True ECN Broker',
      badge: 'Best for Raw Spreads & Scalping',
      features: ['Raw spreads from 0.0 pips', 'NY4 Equinix server (low latency)', 'Micro & standard lot flexibility', 'Regulated by ASIC & CySEC']
    },
    {
      name: 'Exness',
      rating: '4.8',
      type: 'High Leverage / Instant',
      badge: 'Best for Capital Flexibility',
      features: ['Flexible leverage options', 'Instant automatic withdrawals', 'Zero swap on major pairs', 'Regulated by FCA & CySEC']
    },
    {
      name: 'Pepperstone',
      rating: '4.8',
      type: 'Fast ECN / STP',
      badge: 'Best for Execution Speed',
      features: ['Razor accounts with tight spreads', 'cTrader, MT4 & MT5 integration', 'Ultra-fast execution (<30ms)', 'Regulated by FCA, ASIC & BaFin']
    },
    {
      name: 'XM',
      rating: '4.7',
      type: 'Micro & Standard Accounts',
      badge: 'Best for Beginners',
      features: ['Micro lots for small accounts', 'Deposit bonuses & promo rewards', 'Multi-lingual 24/7 customer support', 'Regulated by CySEC & FSC']
    }
  ];

  return (
    <div className="w-full space-y-10 animate-fadeIn text-gray-300">
      
      {/* =========================================================
          INTRO: What is a Broker?
      ========================================================= */}
      <div className="bg-black/40 border border-white/10 p-6 md:p-8 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-brandGold/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <Landmark className="w-8 h-8 text-brandGold shrink-0" />
            <div>
              <h3 className="text-2xl font-bold font-display uppercase tracking-wider text-white">
                What is a Broker?
              </h3>
            </div>
          </div>
          <span className="self-start md:self-auto bg-brandGold/10 border border-brandGold/30 text-brandGold text-xs font-mono px-3 py-1.5 rounded-full font-bold">
            The Market Gateway
          </span>
        </div>

        <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-8">
          A <strong className="text-white font-semibold">broker</strong> is a financial company/service that gives you access to financial markets so you can place trades.
          You normally don't connect directly to the global interbank Forex market yourself. The broker provides the trading account, live price quotes, trading platform connection, order execution, and account management.
        </p>

        {/* TRUE CONNECTED ORDER EXECUTION FLOW */}
        <div className="bg-black/70 border border-brandGold/20 p-6 rounded-2xl relative overflow-hidden mb-6">
          <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-brandGold font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brandGold animate-pulse"></span>
              Order Execution Flow Pipeline
            </span>
            <span className="text-[10px] font-mono text-gray-400 bg-white/5 px-2.5 py-1 rounded">
              Direct Order Routing
            </span>
          </div>

          {/* Desktop Connected Flow */}
          <div className="hidden lg:grid grid-cols-5 items-center gap-2 text-center font-mono">
            
            {/* Step 1: YOU */}
            <div className="bg-white/[0.04] border border-white/15 p-5 rounded-xl hover:border-brandGold/50 transition-all group flex flex-col items-center justify-between h-44">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <User className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <div className="text-white font-bold font-display text-sm uppercase tracking-wider">YOU</div>
                <div className="text-[11px] text-gray-400 mt-0.5">Retail Trader</div>
              </div>
              <span className="bg-blue-500/15 text-blue-400 text-[10px] font-bold px-2.5 py-1 rounded border border-blue-500/30">
                Clicks Buy / Sell
              </span>
            </div>

            {/* Connector 1 */}
            <div className="flex flex-col items-center justify-center px-1">
              <div className="bg-brandGold/10 border border-brandGold/30 text-brandGold text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap mb-2 shadow-sm">
                1. Buy / Sell Order →
              </div>
              <div className="w-full flex items-center relative">
                <div className="h-0.5 w-full bg-gradient-to-r from-blue-500/50 via-brandGold to-brandGold/80"></div>
                <div className="w-2.5 h-2.5 border-t-2 border-r-2 border-brandGold transform rotate-45 -ml-2.5"></div>
              </div>
              <span className="text-[9px] text-gray-500 mt-1.5">Network Payload</span>
            </div>

            {/* Step 2: BROKER */}
            <div className="bg-brandGold/10 border-2 border-brandGold/50 p-5 rounded-xl shadow-[0_0_25px_rgba(234,179,8,0.15)] flex flex-col items-center justify-between h-44 relative">
              <div className="absolute -top-3 bg-brandGold text-brandDark text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow">
                Middleman &amp; Gateway
              </div>
              <div className="w-12 h-12 rounded-full bg-brandGold/20 border border-brandGold/40 flex items-center justify-center mt-1">
                <Building2 className="w-6 h-6 text-brandGold" />
              </div>
              <div>
                <div className="text-brandGold font-bold font-display text-base uppercase tracking-wider">BROKER</div>
                <div className="text-[11px] text-gray-300 mt-0.5">Account &amp; Execution Server</div>
              </div>
              <span className="bg-brandGold/20 text-brandGold text-[10px] font-bold px-2.5 py-1 rounded border border-brandGold/40">
                Validates &amp; Routes Order
              </span>
            </div>

            {/* Connector 2 */}
            <div className="flex flex-col items-center justify-center px-1">
              <div className="bg-green-500/10 border border-green-500/30 text-green-400 text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap mb-2 shadow-sm">
                2. Sends / Executes →
              </div>
              <div className="w-full flex items-center relative">
                <div className="h-0.5 w-full bg-gradient-to-r from-brandGold via-green-500 to-green-400"></div>
                <div className="w-2.5 h-2.5 border-t-2 border-r-2 border-green-400 transform rotate-45 -ml-2.5"></div>
              </div>
              <span className="text-[9px] text-gray-500 mt-1.5">Liquidity Bridge</span>
            </div>

            {/* Step 3: MARKET */}
            <div className="bg-white/[0.04] border border-white/15 p-5 rounded-xl hover:border-green-500/50 transition-all group flex flex-col items-center justify-between h-44">
              <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="text-white font-bold font-display text-sm uppercase tracking-wider">MARKET / LPs</div>
                <div className="text-[11px] text-gray-400 mt-0.5">Liquidity Providers</div>
              </div>
              <span className="bg-green-500/15 text-green-400 text-[10px] font-bold px-2.5 py-1 rounded border border-green-500/30">
                Interbank Fill at Live Price
              </span>
            </div>

          </div>

          {/* Mobile Connected Flow */}
          <div className="lg:hidden space-y-3 font-mono">
            <div className="bg-white/[0.04] border border-white/15 p-4 rounded-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <div className="text-white font-bold text-sm uppercase">YOU (Retail Trader)</div>
                <div className="text-xs text-gray-400">Places Buy / Sell order from terminal</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 py-1 text-xs">
              <div className="h-6 w-0.5 bg-brandGold"></div>
              <span className="bg-brandGold/15 border border-brandGold/40 text-brandGold text-[10px] font-bold px-3 py-0.5 rounded-full">
                ↓ 1. Buy / Sell Order
              </span>
              <div className="h-6 w-0.5 bg-brandGold"></div>
            </div>

            <div className="bg-brandGold/10 border-2 border-brandGold/40 p-4 rounded-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brandGold/20 border border-brandGold/40 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-brandGold" />
              </div>
              <div>
                <div className="text-brandGold font-bold text-sm uppercase">FOREX BROKER</div>
                <div className="text-xs text-gray-300">Receives order, validates margin, routes to LP</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 py-1 text-xs">
              <div className="h-6 w-0.5 bg-green-500"></div>
              <span className="bg-green-500/15 border border-green-500/40 text-green-400 text-[10px] font-bold px-3 py-0.5 rounded-full">
                ↓ 2. Sends / Executes Order
              </span>
              <div className="h-6 w-0.5 bg-green-500"></div>
            </div>

            <div className="bg-white/[0.04] border border-white/15 p-4 rounded-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="text-white font-bold text-sm uppercase">MARKET / LIQUIDITY PROVIDERS</div>
                <div className="text-xs text-gray-400">Order filled at best live interbank price</div>
              </div>
            </div>
          </div>
        </div>

        {/* Metaphor & Demo Sandbox Panels */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl">
            <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2 mb-2">
              <span className="flex items-center gap-2"><Plane className="w-4 h-4 text-brandGold" /> The Travel Agent Metaphor</span>
            </span>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              You want to travel to Europe <span className="text-brandGold font-bold">→</span> you cannot issue airline tickets yourself. You book through an airline agent. In the same way, you cannot trade EUR/USD directly with central banks; the broker acts as your travel agent connecting your clicks to global liquidity.
            </p>
          </div>

          <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl">
            <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2 mb-2">
              <span className="flex items-center gap-2"><Microscope className="w-4 h-4 text-brandGold" /> Demo Accounts (The Trader's Sandbox)</span>
            </span>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              A risk-free practice account funded with virtual money ($10,000+). It streams live interbank price feeds so you can practice execution, charts, and strategies with zero financial risk before risking real capital.
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================
          SECTION 1: Why do you need a broker? (Full-Width Professional)
      ========================================================= */}
      <div className="bg-black/40 border border-white/10 p-6 md:p-8 rounded-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
          <div>
            <h4 className="text-xl font-bold font-display uppercase tracking-wider text-white flex items-center gap-2">
              <span className="text-brandGold">1.</span> Why Do You Need a Broker?
            </h4>
            <p className="text-xs text-gray-400 font-light mt-1">
              Understanding why retail market access requires dedicated brokerage infrastructure.
            </p>
          </div>
          <span className="text-xs font-mono bg-white/10 text-gray-300 px-3 py-1 rounded border border-white/10">
            Market Access Layer
          </span>
        </div>

        {/* Real-World Trading Scenario */}
        <div className="bg-black/60 p-5 rounded-xl border-l-4 border-l-brandGold border-t border-r border-b border-white/5 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 font-mono text-xs">
            <span className="text-brandGold font-bold uppercase tracking-wider">Example Scenario: Trading EUR/USD</span>
            <span className="text-gray-400">Account Capital: <strong className="text-white font-bold">$1,000</strong></span>
          </div>
          <p className="text-xs text-gray-300 leading-relaxed font-light">
            You want to buy EURUSD. You cannot simply open a browser and tell the Forex market: <span className="text-brandGold italic font-semibold">"Buy EURUSD for me."</span> You need an institutional broker to hold your funds in a segregated account, stream interbank quotes, and route your orders.
          </p>
        </div>

        <span className="text-xs font-mono uppercase tracking-widest text-gray-400 block mb-3 font-semibold">
          The 8 Essential Services Provided by Your Broker:
        </span>

        {/* 8 Features Grid (4x2 on Desktop, 2x4 on Tablet, 1x8 on Mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono">
          {[
            { icon: <Briefcase className="w-4 h-4 text-brandGold" />, title: 'Trading Account', desc: 'Secure capital holding in segregated tier-1 bank accounts.' },
            { icon: <Monitor className="w-4 h-4 text-sky-400" />, title: 'Trading Platform', desc: 'Access to MT5, MT4, cTrader & TradingView chart engines.' },
            { icon: <BarChart2 className="w-4 h-4 text-emerald-400" />, title: 'Market Price Feeds', desc: 'Real-time Bid and Ask price quotes aggregated from banks.' },
            { icon: <Zap className="w-4 h-4 text-amber-400" />, title: 'Order Execution', desc: 'Instant order routing and clearing at the best available market price.' },
            { icon: <Settings className="w-4 h-4 text-purple-400" />, title: 'Leverage & Margin', desc: 'Capital multiplier allowing efficient margin allocation.' },
            { icon: <FileText className="w-4 h-4 text-blue-400" />, title: 'Trade History & Logs', desc: 'Comprehensive transaction logs, swap records, and audit history.' },
            { icon: <CreditCard className="w-4 h-4 text-green-400" />, title: 'Deposits & Banking', desc: 'Instant funding via Bank Wire, USDT Crypto, and Credit Cards.' },
            { icon: <FileText className="w-4 h-4 text-rose-400" />, title: 'Account Statements', desc: 'Monthly performance reports, tax statements, and audit sheets.' },
          ].map((item, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/5 p-3.5 rounded-xl hover:border-brandGold/30 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="flex items-center justify-center shrink-0">{item.icon}</span>
                  <span className="text-white font-bold">{item.title}</span>
                </div>
                <p className="text-[11px] text-gray-400 font-sans font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================
          SECTION 2: The Live Execution Pipeline (True Connected Flow)
      ========================================================= */}
      <div className="bg-black/40 border border-white/10 p-6 md:p-8 rounded-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
          <div>
            <h4 className="text-xl font-bold font-display uppercase tracking-wider text-white flex items-center gap-2">
              <span className="text-brandGold">2.</span> The Live Execution Pipeline
            </h4>
            <p className="text-xs text-gray-400 font-light mt-1">
              Follow the journey of an order from capital deposit to execution in the live market.
            </p>
          </div>
          <span className="text-xs font-mono bg-green-500/10 text-green-400 px-3 py-1 rounded border border-green-500/30">
            Order Flow Lifecycle
          </span>
        </div>

        <p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
          When you click <strong className="text-green-400 font-mono font-bold">BUY</strong> on your chart, your order is routed in milliseconds through a continuous infrastructure pipeline:
        </p>

        {/* Desktop Connected Flow Diagram with Directional Connectors */}
        <div className="hidden lg:flex items-center justify-between gap-1.5 bg-black/60 p-5 md:p-6 rounded-2xl border border-white/10 font-mono text-xs">
          
          {/* Node 1: Your Money */}
          <div className="flex-1 min-h-[155px] bg-white/[0.03] border border-white/10 p-3.5 rounded-xl text-center hover:border-brandGold/40 transition-all group flex flex-col justify-between">
            <div className="w-7 h-7 rounded-full bg-brandGold/10 border border-brandGold/30 text-brandGold font-bold flex items-center justify-center mx-auto text-xs">
              1
            </div>
            <div className="my-1">
              <div className="text-white font-bold uppercase text-xs tracking-wider">Your Money</div>
              <div className="text-[10px] text-gray-400 mt-0.5 font-sans">$1,000 Capital</div>
            </div>
            <span className="text-[9px] bg-white/5 text-gray-300 px-2 py-0.5 rounded font-mono truncate">
              Bank / USDT
            </span>
          </div>

          {/* Connector 1 */}
          <div className="flex flex-col items-center justify-center px-1 flex-shrink-0">
            <span className="text-[9px] text-brandGold font-bold mb-1">Deposit</span>
            <div className="flex items-center text-brandGold">
              <div className="w-4 xl:w-6 h-0.5 bg-brandGold"></div>
              <span className="text-xs font-bold -ml-1">→</span>
            </div>
          </div>

          {/* Node 2: Broker Account */}
          <div className="flex-1 min-h-[155px] bg-white/[0.03] border border-white/10 p-3.5 rounded-xl text-center hover:border-brandGold/40 transition-all group flex flex-col justify-between">
            <div className="w-7 h-7 rounded-full bg-brandGold/10 border border-brandGold/30 text-brandGold font-bold flex items-center justify-center mx-auto text-xs">
              2
            </div>
            <div className="my-1">
              <div className="text-white font-bold uppercase text-xs tracking-wider">Broker Account</div>
              <div className="text-[10px] text-gray-400 mt-0.5 font-sans">Credentials Created</div>
            </div>
            <span className="text-[9px] bg-white/5 text-gray-300 px-2 py-0.5 rounded font-mono truncate">
              Account Ready
            </span>
          </div>

          {/* Connector 2 */}
          <div className="flex flex-col items-center justify-center px-1 flex-shrink-0">
            <span className="text-[9px] text-blue-400 font-bold mb-1">Login</span>
            <div className="flex items-center text-blue-400">
              <div className="w-4 xl:w-6 h-0.5 bg-blue-500"></div>
              <span className="text-xs font-bold -ml-1">→</span>
            </div>
          </div>

          {/* Node 3: Trading Platform */}
          <div className="flex-1 min-h-[155px] bg-white/[0.03] border border-white/10 p-3.5 rounded-xl text-center hover:border-blue-500/40 transition-all group flex flex-col justify-between">
            <div className="w-7 h-7 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-bold flex items-center justify-center mx-auto text-xs">
              3
            </div>
            <div className="my-1">
              <div className="text-white font-bold uppercase text-xs tracking-wider">Platform</div>
              <div className="text-[10px] text-gray-400 mt-0.5 font-sans">MT5 / TradingView</div>
            </div>
            <span className="text-[9px] bg-blue-500/10 text-blue-300 px-2 py-0.5 rounded font-mono truncate">
              Connected
            </span>
          </div>

          {/* Connector 3 */}
          <div className="flex flex-col items-center justify-center px-1 flex-shrink-0">
            <span className="text-[9px] text-yellow-400 font-bold mb-1">Select Pair</span>
            <div className="flex items-center text-yellow-400">
              <div className="w-4 xl:w-6 h-0.5 bg-yellow-500"></div>
              <span className="text-xs font-bold -ml-1">→</span>
            </div>
          </div>

          {/* Node 4: EURUSD */}
          <div className="flex-1 min-h-[155px] bg-white/[0.03] border border-white/10 p-3.5 rounded-xl text-center hover:border-yellow-500/40 transition-all group flex flex-col justify-between">
            <div className="w-7 h-7 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 font-bold flex items-center justify-center mx-auto text-xs">
              4
            </div>
            <div className="my-1">
              <div className="text-white font-bold uppercase text-xs tracking-wider">EURUSD</div>
              <div className="text-[10px] text-gray-400 mt-0.5 font-sans">1.17000 / 1.17002</div>
            </div>
            <span className="text-[9px] bg-yellow-500/10 text-yellow-300 px-2 py-0.5 rounded font-mono truncate">
              Live Feed
            </span>
          </div>

          {/* Connector 4 */}
          <div className="flex flex-col items-center justify-center px-1 flex-shrink-0">
            <span className="text-[9px] text-green-400 font-bold mb-1">Click BUY</span>
            <div className="flex items-center text-green-400">
              <div className="w-4 xl:w-6 h-0.5 bg-green-500"></div>
              <span className="text-xs font-bold -ml-1">→</span>
            </div>
          </div>

          {/* Node 5: Execution Filled */}
          <div className="flex-1 min-h-[155px] bg-green-500/10 border-2 border-green-500/40 p-3.5 rounded-xl text-center shadow-[0_0_20px_rgba(34,197,94,0.15)] flex flex-col justify-between">
            <div className="w-7 h-7 rounded-full bg-green-500 text-black font-extrabold flex items-center justify-center mx-auto text-xs">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <div className="my-1">
              <div className="text-green-400 font-bold uppercase text-xs tracking-wider">BUY Filled!</div>
              <div className="text-[10px] text-gray-300 mt-0.5 font-sans">Filled at 1.17002</div>
            </div>
            <span className="text-[9px] bg-green-500/20 text-green-300 px-2 py-0.5 rounded font-mono font-bold truncate">
              Position Live
            </span>
          </div>

        </div>

        {/* Medium and Mobile Stepper (Stacked with downward flow arrows) */}
        <div className="xl:hidden space-y-2.5 font-mono text-xs">
          
          <div className="bg-black/60 border border-white/10 p-3.5 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-brandGold/20 text-brandGold font-bold flex items-center justify-center text-xs">1</span>
              <div>
                <span className="text-white font-bold block">Your Money</span>
                <span className="text-gray-400 text-[11px] font-sans">$1,000 Capital Deposit</span>
              </div>
            </div>
            <span className="text-[10px] text-gray-500 bg-white/5 px-2 py-0.5 rounded">Deposit</span>
          </div>

          <div className="text-center text-brandGold text-sm py-0.5">↓</div>

          <div className="bg-black/60 border border-white/10 p-3.5 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-brandGold/20 text-brandGold font-bold flex items-center justify-center text-xs">2</span>
              <div>
                <span className="text-white font-bold block">Broker Account</span>
                <span className="text-gray-400 text-[11px] font-sans">Trading Login &amp; Password</span>
              </div>
            </div>
            <span className="text-[10px] text-gray-500 bg-white/5 px-2 py-0.5 rounded">Created</span>
          </div>

          <div className="text-center text-blue-400 text-sm py-0.5">↓</div>

          <div className="bg-black/60 border border-white/10 p-3.5 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 font-bold flex items-center justify-center text-xs">3</span>
              <div>
                <span className="text-white font-bold block">Trading Platform</span>
                <span className="text-gray-400 text-[11px] font-sans">MT5 / TradingView Terminal</span>
              </div>
            </div>
            <span className="text-[10px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">Connected</span>
          </div>

          <div className="text-center text-yellow-400 text-sm py-0.5">↓</div>

          <div className="bg-black/60 border border-white/10 p-3.5 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-yellow-500/20 text-yellow-400 font-bold flex items-center justify-center text-xs">4</span>
              <div>
                <span className="text-white font-bold block">EURUSD Chart</span>
                <span className="text-gray-400 text-[11px] font-sans">Real-time Quotes (Bid: 1.17000 / Ask: 1.17002)</span>
              </div>
            </div>
            <span className="text-[10px] text-yellow-400 bg-yellow-500/10 px-2 py-0.5 rounded">Streaming</span>
          </div>

          <div className="text-center text-green-400 text-sm py-0.5">↓</div>

          <div className="bg-green-500/10 border-2 border-green-500/40 p-3.5 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-green-500 text-black font-extrabold flex items-center justify-center text-xs"><Check className="w-4 h-4 stroke-[3]" /></span>
              <div>
                <span className="text-green-400 font-bold block">BUY Order Filled!</span>
                <span className="text-gray-300 text-[11px] font-sans">Filled at 1.17002 Ask Price</span>
              </div>
            </div>
            <span className="text-[10px] text-green-300 bg-green-500/20 px-2.5 py-0.5 rounded font-bold">Executed</span>
          </div>

        </div>

        <div className="mt-4 p-3 rounded-lg bg-white/[0.02] border border-white/5 text-[11px] text-gray-400 flex items-center justify-between font-mono">
          <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-brandGold" /> Execution Time: ~15ms</span>
          <span className="text-brandGold">Order Routed Directly to Liquidity Pool</span>
        </div>
      </div>

      {/* =========================================================
          SECTION 3: Broker != Forex Market (Full-Width Architecture)
      ========================================================= */}
      <div className="bg-black/40 border border-white/10 p-6 md:p-8 rounded-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
          <div>
            <h4 className="text-xl font-bold font-display uppercase tracking-wider text-white flex items-center gap-2">
              <span className="text-brandGold">3.</span> Broker ≠ Forex Market
            </h4>
            <p className="text-xs text-gray-400 font-light mt-1">
              Separating the decentralized interbank financial system from retail brokerage gateways.
            </p>
          </div>
          <span className="text-xs font-mono bg-red-500/10 text-red-400 px-3 py-1 rounded border border-red-500/30">
            Crucial Distinction
          </span>
        </div>

        <p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
          A broker is <strong className="text-white">not the Forex market itself</strong>. The Forex market is an over-the-counter decentralized network of central banks, multinational financial institutions, and global liquidity providers. The broker is simply your client access portal.
        </p>

        {/* Hierarchical Architecture Stack with Connected Flow Connectors */}
        <div className="bg-black/60 p-6 md:p-8 rounded-2xl border border-white/10 relative font-mono text-xs">
          
          {/* Level 1: Interbank Market */}
          <div className="bg-brandGold/10 border-2 border-brandGold/40 p-4 md:p-5 rounded-xl shadow-[0_0_20px_rgba(234,179,8,0.1)] hover:border-brandGold/70 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brandGold/20 border border-brandGold/40 flex items-center justify-center flex-shrink-0">
                <Landmark className="w-5 h-5 text-brandGold" />
              </div>
              <div>
                <span className="text-brandGold font-bold font-display uppercase tracking-wider text-sm block">
                  1. Interbank Forex Market
                </span>
                <span className="text-gray-300 text-[11px] font-sans font-light block mt-0.5">
                  Decentralized global network of central banks &amp; sovereign financial institutions.
                </span>
              </div>
            </div>
            <span className="self-start sm:self-auto text-[10px] text-brandGold bg-brandGold/20 border border-brandGold/40 px-3 py-1 rounded-full font-bold uppercase whitespace-nowrap">
              $7.5 Trillion / Day
            </span>
          </div>

          {/* Flow Connector 1 */}
          <div className="flex flex-col items-center justify-center py-2.5 relative">
            <div className="h-6 w-0.5 bg-gradient-to-b from-brandGold to-cyan-500"></div>
            <div className="bg-black/90 border border-cyan-500/40 text-cyan-400 text-[10px] font-bold px-3 py-1 rounded-full shadow flex items-center gap-1.5 my-1">
              <span>↕</span>
              <span>Interbank Pricing Feeds &amp; Clearing Contracts</span>
            </div>
            <div className="h-6 w-0.5 bg-gradient-to-b from-cyan-500 to-cyan-400"></div>
          </div>

          {/* Level 2: Liquidity Providers */}
          <div className="bg-cyan-500/10 border border-cyan-500/30 p-4 md:p-5 rounded-xl hover:border-cyan-500/60 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <span className="text-cyan-400 font-bold font-display uppercase tracking-wider text-sm block">
                  2. Tier-1 Liquidity Providers (LPs)
                </span>
                <span className="text-gray-300 text-[11px] font-sans font-light block mt-0.5">
                  Prime institutional market makers: J.P. Morgan, Citi, UBS, Deutsche Bank, Barclays.
                </span>
              </div>
            </div>
            <span className="self-start sm:self-auto text-[10px] text-cyan-300 bg-cyan-500/20 border border-cyan-500/40 px-3 py-1 rounded-full font-bold uppercase whitespace-nowrap">
              Prime Liquidity
            </span>
          </div>

          {/* Flow Connector 2 */}
          <div className="flex flex-col items-center justify-center py-2.5 relative">
            <div className="h-6 w-0.5 bg-gradient-to-b from-cyan-400 to-brandGold"></div>
            <div className="bg-black/90 border border-brandGold/40 text-brandGold text-[10px] font-bold px-3 py-1 rounded-full shadow flex items-center gap-1.5 my-1">
              <span>↕</span>
              <span>Liquidity Aggregation Engine &amp; Bridge</span>
            </div>
            <div className="h-6 w-0.5 bg-gradient-to-b from-brandGold to-brandGold/80"></div>
          </div>

          {/* Level 3: Forex Broker */}
          <div className="bg-brandGold/10 border-2 border-brandGold/40 p-4 md:p-5 rounded-xl shadow-[0_0_20px_rgba(234,179,8,0.1)] hover:border-brandGold/70 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brandGold/20 border border-brandGold/40 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-5 h-5 text-brandGold" />
              </div>
              <div>
                <span className="text-brandGold font-bold font-display uppercase tracking-wider text-sm block">
                  3. Forex Broker (Retail Gateway)
                </span>
                <span className="text-gray-300 text-[11px] font-sans font-light block mt-0.5">
                  Provides trading account, margin facilities, spread pricing &amp; order execution.
                </span>
              </div>
            </div>
            <span className="self-start sm:self-auto text-[10px] text-brandGold bg-brandGold/20 border border-brandGold/40 px-3 py-1 rounded-full font-bold uppercase whitespace-nowrap">
              Account Host
            </span>
          </div>

          {/* Flow Connector 3 */}
          <div className="flex flex-col items-center justify-center py-2.5 relative">
            <div className="h-6 w-0.5 bg-gradient-to-b from-brandGold to-blue-500"></div>
            <div className="bg-black/90 border border-blue-500/40 text-blue-400 text-[10px] font-bold px-3 py-1 rounded-full shadow flex items-center gap-1.5 my-1">
              <span>↕</span>
              <span>Trading Terminal Connection (MT5 / TradingView)</span>
            </div>
            <div className="h-6 w-0.5 bg-gradient-to-b from-blue-500 to-blue-400"></div>
          </div>

          {/* Level 4: Retail Trader */}
          <div className="bg-blue-500/10 border border-blue-500/30 p-4 md:p-5 rounded-xl hover:border-blue-500/60 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <span className="text-blue-400 font-bold font-display uppercase tracking-wider text-sm block">
                  4. YOU (Retail Trader)
                </span>
                <span className="text-gray-300 text-[11px] font-sans font-light block mt-0.5">
                  Performs market analysis, risk management, and sends Buy / Sell orders.
                </span>
              </div>
            </div>
            <span className="self-start sm:self-auto text-[10px] text-blue-300 bg-blue-500/20 border border-blue-500/40 px-3 py-1 rounded-full font-bold uppercase whitespace-nowrap">
              End User
            </span>
          </div>

        </div>
      </div>

      {/* =========================================================
          SECTION 4: What Does a Broker Provide? (Full-Width Pricing & Platform)
      ========================================================= */}
      <div className="bg-black/40 border border-white/10 p-6 md:p-8 rounded-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
          <div>
            <h4 className="text-xl font-bold font-display uppercase tracking-wider text-white flex items-center gap-2">
              <span className="text-brandGold">4.</span> What Does a Broker Provide?
            </h4>
            <p className="text-xs text-gray-400 font-light mt-1">
              Two core operational pillars: Live price generation and trading platform connectivity.
            </p>
          </div>
          <span className="text-xs font-mono bg-brandGold/10 text-brandGold px-3 py-1 rounded border border-brandGold/30">
            Core Facilities
          </span>
        </div>

        {/* Full-Width Stacked Layout for Simulator + Platform Architecture */}
        <div className="space-y-6">
          
          {/* Pillar A: Interactive Live Bid/Ask Price Simulator (Full-Width) */}
          <div className="w-full bg-black/60 p-5 md:p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-white/5 pb-3">
                <h5 className="text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 font-mono">
                  <span className="text-brandGold font-extrabold text-sm">A.</span> Interactive Bid / Ask Price Simulator
                </h5>
                <span className="text-[10px] font-mono bg-brandGold/10 text-brandGold px-2.5 py-0.5 rounded border border-brandGold/30">
                  Live Market Watch
                </span>
              </div>

              {/* Instrument Selector Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 font-mono text-xs">
                {Object.keys(quoteSymbols).map((symKey) => (
                  <button
                    key={symKey}
                    type="button"
                    onClick={() => {
                      setSelectedSymbolKey(symKey);
                      setPriceTickShift(0);
                      setSimSpreadPips(quoteSymbols[symKey].defaultSpread);
                      setSimActiveTrade(null);
                    }}
                    className={`py-2 px-2.5 rounded-lg font-bold text-xs transition-all border ${
                      selectedSymbolKey === symKey
                        ? 'bg-brandGold text-brandDark border-brandGold shadow-md'
                        : 'bg-white/[0.03] text-gray-300 border-white/10 hover:border-white/20'
                    }`}
                  >
                    {quoteSymbols[symKey].name}
                  </button>
                ))}
              </div>

              {/* Live Interactive Bid & Ask Quote Board */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs font-mono my-3">
                
                {/* BID CARD (SELL) */}
                <div className="bg-red-500/10 border-2 border-red-500/40 p-4 rounded-xl text-center relative flex flex-col justify-between">
                  <div>
                    <span className="text-red-400 text-[10px] block uppercase font-bold tracking-wider mb-1">
                      BID (Sell Price)
                    </span>
                    <span className="text-white text-xl sm:text-3xl font-black tracking-tight block my-1 font-mono">
                      {simBidPrice.toFixed(currentSymbol.pipDigits)}
                    </span>
                    <span className="text-[10px] text-gray-400 block font-sans">
                      Price you get when you <strong className="text-red-400">SELL</strong>
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSimActiveTrade({ type: 'SELL', entryPrice: simBidPrice, entryTime: 'Just Now' })}
                    className="mt-3 w-full bg-red-500/20 hover:bg-red-500 text-red-300 hover:text-white border border-red-500/40 font-bold py-2 px-3 rounded-lg text-xs transition-colors uppercase tracking-wider"
                  >
                    Simulate SELL
                  </button>
                </div>

                {/* ASK CARD (BUY) */}
                <div className="bg-green-500/10 border-2 border-green-500/40 p-4 rounded-xl text-center relative flex flex-col justify-between">
                  <div>
                    <span className="text-green-400 text-[10px] block uppercase font-bold tracking-wider mb-1">
                      ASK (Buy Price)
                    </span>
                    <span className="text-white text-xl sm:text-3xl font-black tracking-tight block my-1 font-mono">
                      {simAskPrice.toFixed(currentSymbol.pipDigits)}
                    </span>
                    <span className="text-[10px] text-gray-400 block font-sans">
                      Price you pay when you <strong className="text-green-400">BUY</strong>
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSimActiveTrade({ type: 'BUY', entryPrice: simAskPrice, entryTime: 'Just Now' })}
                    className="mt-3 w-full bg-green-500/20 hover:bg-green-500 text-green-300 hover:text-white border border-green-500/40 font-bold py-2 px-3 rounded-lg text-xs transition-colors uppercase tracking-wider"
                  >
                    Simulate BUY
                  </button>
                </div>

              </div>

              {/* Dynamic Spread Gap Callout */}
              <div className="bg-white/[0.03] p-3 rounded-xl border border-white/5 font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <span className="text-gray-400">
                  Spread = Ask ({simAskPrice.toFixed(currentSymbol.pipDigits)}) - Bid ({simBidPrice.toFixed(currentSymbol.pipDigits)})
                </span>
                <span className="text-brandGold font-bold text-sm bg-brandGold/10 px-2.5 py-0.5 rounded border border-brandGold/20">
                  {simSpreadDifference} ({simSpreadPips.toFixed(1)} Pips)
                </span>
              </div>

              {/* Controls for Price Movement & Spread Simulation */}
              <div className="space-y-4 pt-2 border-t border-white/5 font-mono text-xs">
                
                {/* Spread Scenario Slider */}
                <div>
                  <div className="flex justify-between text-[11px] text-gray-400 mb-1">
                    <span>Adjust Broker Spread:</span>
                    <span className="text-brandGold font-bold">{simSpreadPips.toFixed(1)} pips (${(simSpreadPips * 10).toFixed(2)} / lot)</span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="4.0"
                    step="0.1"
                    value={simSpreadPips}
                    onChange={(e) => setSimSpreadPips(Number(e.target.value))}
                    className="w-full accent-brandGold cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] text-gray-500 mt-0.5">
                    <span>Raw ECN (0.1)</span>
                    <span>Standard (1.2)</span>
                    <span>High Spread / News (4.0)</span>
                  </div>
                </div>

                {/* Market Movement Tick Buttons */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="text-[11px] text-gray-400">Move Market Price:</span>
                  <button
                    type="button"
                    onClick={() => setPriceTickShift((prev) => prev + 1)}
                    className="bg-green-500/15 hover:bg-green-500/30 text-green-400 border border-green-500/30 px-3 py-1 rounded font-bold text-[11px] transition-colors"
                  >
                    ▲ +1 Pip
                  </button>
                  <button
                    type="button"
                    onClick={() => setPriceTickShift((prev) => prev - 1)}
                    className="bg-red-500/15 hover:bg-red-500/30 text-red-400 border border-red-500/30 px-3 py-1 rounded font-bold text-[11px] transition-colors"
                  >
                    ▼ -1 Pip
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setPriceTickShift(0);
                      setSimSpreadPips(currentSymbol.defaultSpread);
                    }}
                    className="bg-white/5 hover:bg-white/10 text-gray-400 border border-white/10 px-2.5 py-1 rounded text-[10px] ml-auto transition-colors"
                  >
                    Reset
                  </button>
                </div>

              </div>

              {/* Active Trade Feedback Card */}
              {simActiveTrade && (
                <div className="mt-4 p-4 rounded-xl border border-brandGold/40 bg-brandGold/5 animate-fadeIn font-mono text-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-bold flex items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${
                        simActiveTrade.type === 'BUY' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                      }`}>
                        ACTIVE {simActiveTrade.type} 1.00 Lot
                      </span>
                      <span className="text-gray-400 text-[11px]">@ {simActiveTrade.entryPrice.toFixed(currentSymbol.pipDigits)}</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setSimActiveTrade(null)}
                      className="text-[10px] text-red-400 hover:underline font-bold"
                    >
                      <span className="flex items-center gap-1">Close Trade <X className="w-3.5 h-3.5" /></span>
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-center mt-2">
                    <div className="bg-black/60 p-2.5 rounded-lg border border-white/5">
                      <span className="text-[10px] text-gray-500 block">Floating Pips</span>
                      <span className={`text-base font-bold ${simTradeFloatingPips >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {simTradeFloatingPips >= 0 ? `+${simTradeFloatingPips.toFixed(1)}` : simTradeFloatingPips.toFixed(1)} pips
                      </span>
                    </div>
                    <div className="bg-black/60 p-2.5 rounded-lg border border-white/5">
                      <span className="text-[10px] text-gray-500 block">Floating P&amp;L (USD)</span>
                      <span className={`text-base font-bold ${simTradeFloatingUSD >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {simTradeFloatingUSD >= 0 ? `+$${simTradeFloatingUSD.toFixed(2)}` : `-$${Math.abs(simTradeFloatingUSD).toFixed(2)}`}
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-gray-400 font-sans mt-2 italic text-center">
                    <Lightbulb className="w-4 h-4 inline mr-1.5 text-brandGold" /> Notice: Every trade starts slightly negative due to the broker spread gap!
                  </p>
                </div>
              )}

            </div>
          </div>

          {/* Pillar B: Platform Connectivity Architecture (Full-Width) */}
          <div className="w-full bg-black/60 p-5 md:p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4 border-b border-white/5 pb-3">
                <h5 className="text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 font-mono">
                  <span className="text-brandGold font-extrabold text-sm">B.</span> Platform Connectivity Architecture
                </h5>
                <span className="text-[10px] font-mono bg-blue-500/10 text-blue-400 px-2.5 py-0.5 rounded border border-blue-500/30">
                  Terminal Gateway
                </span>
              </div>

              <p className="text-xs text-gray-400 font-light leading-relaxed mb-4">
                The broker links your charting interface to its high-speed execution servers and interbank liquidity pool:
              </p>

              {/* Horizontal / Stacked Platforms */}
              <div className="grid sm:grid-cols-2 gap-3 text-xs font-mono mb-4">
                <div className="bg-white/[0.02] p-3.5 rounded-xl border border-white/5 flex justify-between items-center hover:border-brandGold/30 transition-colors">
                  <div>
                    <span className="text-white font-bold block">MetaTrader 5 (MT5)</span>
                    <span className="text-gray-500 text-[10px]">Multi-asset trading &amp; charting standard</span>
                  </div>
                  <span className="text-[10px] text-brandGold bg-brandGold/10 px-2 py-0.5 rounded">Native MT5</span>
                </div>

                <div className="bg-white/[0.02] p-3.5 rounded-xl border border-white/5 flex justify-between items-center hover:border-brandGold/30 transition-colors">
                  <div>
                    <span className="text-white font-bold block">cTrader / TradingView</span>
                    <span className="text-gray-500 text-[10px]">Modern charting with visual order entry</span>
                  </div>
                  <span className="text-[10px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">Cloud Synced</span>
                </div>
              </div>

              {/* Connected Step Pipeline */}
              <div className="bg-brandGold/5 border border-brandGold/20 p-4 rounded-xl text-xs font-mono text-gray-300">
                <span className="text-brandGold font-bold uppercase tracking-wider text-[11px] block mb-2">
                  Connection Pipeline:
                </span>
                <div className="grid sm:grid-cols-3 gap-2 text-[11px]">
                  <div className="bg-black/50 p-2 rounded border border-white/5">
                    <span className="text-white font-bold block">1. Trader Terminal</span>
                    <span className="text-gray-400 text-[10px]">Local Device App</span>
                  </div>
                  <div className="bg-black/50 p-2 rounded border border-white/5">
                    <span className="text-brandGold font-bold block">2. Broker Gateway</span>
                    <span className="text-gray-400 text-[10px]">Trading Server</span>
                  </div>
                  <div className="bg-black/50 p-2 rounded border border-white/5">
                    <span className="text-green-400 font-bold block">3. Matching Engine</span>
                    <span className="text-gray-400 text-[10px]">Liquidity Bridge</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================
          SECTION 5 & 6: Leverage & Margin Explained (INTERACTIVE VISUALIZER)
      ========================================================= */}
      <div className="bg-black/40 border border-white/10 p-6 md:p-8 rounded-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
          <div>
            <h4 className="text-xl font-bold font-display uppercase tracking-wider text-white flex items-center gap-2">
              <span className="text-brandGold">5 &amp; 6.</span> Leverage &amp; Margin Explained
            </h4>
            <p className="text-xs text-gray-400 font-light mt-1">
              Test how leverage multiplies your purchasing power, reduces required margin, and magnifies risk.
            </p>
          </div>
          <span className="text-xs font-mono bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded border border-yellow-500/30 self-start sm:self-auto">
            Interactive Leverage Visualizer
          </span>
        </div>

        {/* 2 Core Concept Cards */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 font-mono text-xs mb-4">
          <div className="bg-black/60 p-4 sm:p-5 rounded-xl border border-white/5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-white font-bold text-sm flex items-center gap-1.5"><Zap className="w-4 h-4 text-brandGold" /> 5. What is Leverage?</span>
              <span className="text-[10px] bg-brandGold/10 text-brandGold px-2 py-0.5 rounded font-bold">Multiplier</span>
            </div>
            <p className="text-gray-300 font-sans font-light leading-relaxed">
              A broker facility that lets you control a large contract position using only a fraction of cash as margin collateral.
            </p>
            <div className="bg-white/[0.02] p-2.5 rounded-lg border border-white/5 text-[11px] text-brandGold">
              1:100 Leverage = $1,000 controls up to $100,000 purchasing power.
            </div>
          </div>

          <div className="bg-black/60 p-4 sm:p-5 rounded-xl border border-white/5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-orange-400 font-bold text-sm flex items-center gap-1.5"><Lock className="w-4 h-4 text-orange-400" /> 6. What is Margin?</span>
              <span className="text-[10px] bg-orange-500/10 text-orange-300 px-2 py-0.5 rounded font-bold">Collateral</span>
            </div>
            <p className="text-gray-300 font-sans font-light leading-relaxed">
              The required cash deposit temporarily locked from your balance by the broker to keep your trade active in the market.
            </p>
            <div className="bg-black/80 p-2.5 rounded-lg border border-brandGold/20 text-[11px] text-gray-300 font-mono">
              Formula: <span className="text-brandGold font-bold">Required Margin = Position Size ÷ Leverage Ratio</span>
            </div>
          </div>
        </div>

        {/* Real-Life Metaphor Box (House Mortgage Analogy) */}
        <div className="bg-black/60 border border-white/5 p-4 sm:p-5 rounded-xl mb-6 text-xs font-mono">
          <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
            <span className="text-white font-bold uppercase text-xs flex items-center gap-2">
              <span className="flex items-center gap-2"><Home className="w-4 h-4 text-brandGold" /> Real-Life House Mortgage Analogy</span>
            </span>
            <span className="text-[10px] text-brandGold bg-brandGold/10 px-2 py-0.5 rounded border border-brandGold/20 font-bold">1:10 Leverage Example</span>
          </div>
          <p className="text-gray-300 font-sans font-light leading-relaxed mb-3 text-[11px]">
            Imagine buying a property worth <strong className="text-white font-semibold">₹10 Lakhs ($100,000)</strong>. You don't need the full amount in cash:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-center">
            <div className="bg-green-500/10 border border-green-500/20 p-3 rounded-lg">
              <span className="block text-green-400 font-bold text-[10px] uppercase">Your Margin Deposit (Collateral)</span>
              <span className="text-white font-bold text-sm">₹1 Lakh (10%)</span>
              <span className="text-[9px] text-gray-400 block mt-0.5">Your cash down-payment</span>
            </div>
            <div className="bg-brandGold/10 border border-brandGold/20 p-3 rounded-lg">
              <span className="block text-brandGold font-bold text-[10px] uppercase">Broker / Bank Leverage Loan</span>
              <span className="text-white font-bold text-sm">₹9 Lakhs (90%)</span>
              <span className="text-[9px] text-gray-400 block mt-0.5">Financed capital to control the asset</span>
            </div>
          </div>
        </div>

        {/* Interactive Leverage & Margin Simulator Terminal */}
        <div className="bg-black/60 border border-white/10 rounded-xl p-5 md:p-6 space-y-6 font-mono text-xs">
          
          {/* Controls Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-3">
            <h5 className="text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2">
              <span className="flex items-center gap-2"><Settings className="w-4 h-4 text-brandGold" /> Leverage &amp; Margin Simulator:</span>
            </h5>
            <span className="text-[11px] text-gray-400">
              Contract Standard: <strong className="text-white">1.00 Lot = 100,000 Units ($10/pip)</strong>
            </span>
          </div>

          {/* 1. Interactive Multipliers & Inputs */}
          <div className="space-y-4">
            
            {/* Leverage Selector Tabs */}
            <div>
              <div className="flex justify-between text-[11px] text-gray-400 mb-2">
                <span>Select Broker Leverage Ratio:</span>
                <span className="text-brandGold font-bold">1:{levRatio} ({marginPercentage}% Required Margin)</span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-7 gap-2">
                {[
                  { ratio: 1, label: '1:1 (Cash)' },
                  { ratio: 10, label: '1:10' },
                  { ratio: 30, label: '1:30 (EU/UK)' },
                  { ratio: 50, label: '1:50 (US)' },
                  { ratio: 100, label: '1:100 (Standard)' },
                  { ratio: 200, label: '1:200' },
                  { ratio: 500, label: '1:500 (High)' },
                ].map((item) => (
                  <button
                    key={item.ratio}
                    type="button"
                    onClick={() => setLevRatio(item.ratio)}
                    className={`py-2 px-2 rounded-lg font-bold text-xs transition-all border ${
                      levRatio === item.ratio
                        ? 'bg-brandGold text-brandDark border-brandGold shadow-md font-extrabold'
                        : 'bg-white/[0.03] text-gray-300 border-white/10 hover:border-white/25'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Account Capital & Position Size Sliders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              
              {/* Account Deposit */}
              <div className="bg-black/40 p-3.5 rounded-xl border border-white/5">
                <div className="flex justify-between text-[11px] mb-1.5">
                  <span className="text-gray-400">Your Account Deposit:</span>
                  <span className="text-white font-bold">${levDeposit.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="10000"
                  step="100"
                  value={levDeposit}
                  onChange={(e) => setLevDeposit(Number(e.target.value))}
                  className="w-full accent-brandGold cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                  <span>$200</span>
                  <span>$5,000</span>
                  <span>$10,000</span>
                </div>
              </div>

              {/* Lot Size to Trade */}
              <div className="bg-black/40 p-3.5 rounded-xl border border-white/5">
                <div className="flex justify-between text-[11px] mb-1.5">
                  <span className="text-gray-400">Trade Volume (Lot Size):</span>
                  <span className="text-brandGold font-bold">{levLots.toFixed(2)} Lots (${notionalPositionValue.toLocaleString()})</span>
                </div>
                <input
                  type="range"
                  min="0.10"
                  max="5.00"
                  step="0.10"
                  value={levLots}
                  onChange={(e) => setLevLots(Number(e.target.value))}
                  className="w-full accent-brandGold cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                  <span>0.10 Lot ($10k)</span>
                  <span>1.00 Lot ($100k)</span>
                  <span>5.00 Lots ($500k)</span>
                </div>
              </div>

            </div>

          </div>

          {/* 2. Visual Leverage Beam & Margin Output */}
          <div className="bg-black/40 p-4 rounded-xl border border-white/5 space-y-4">
            
            {/* Metrics Dashboard */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
              
              <div className="bg-white/[0.02] p-3 rounded-lg border border-white/5">
                <span className="text-[10px] text-gray-400 block uppercase">Max Buying Power (1:{levRatio})</span>
                <span className="text-base sm:text-lg font-bold text-white">${totalPurchasingPower.toLocaleString()}</span>
                <span className="text-[9px] text-gray-500 block mt-0.5">${levDeposit} × {levRatio}</span>
              </div>

              <div className={`p-3 rounded-lg border ${canAffordTrade ? 'bg-orange-500/10 border-orange-500/30' : 'bg-red-500/20 border-red-500/50'}`}>
                <span className="text-[10px] text-orange-400 block uppercase">Required Margin Collateral</span>
                <span className={`text-base sm:text-lg font-bold ${canAffordTrade ? 'text-orange-300' : 'text-red-400 animate-pulse'}`}>
                  ${requiredMarginCalc.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </span>
                <span className="text-[9px] text-gray-400 block mt-0.5">${notionalPositionValue.toLocaleString()} ÷ {levRatio} ({marginPercentage}%)</span>
              </div>

              <div className={`p-3 rounded-lg border ${canAffordTrade ? 'bg-green-500/10 border-green-500/30' : 'bg-red-500/10 border-red-500/30'}`}>
                <span className="text-[10px] text-green-400 block uppercase">Remaining Free Capital</span>
                <span className={`text-base sm:text-lg font-bold ${canAffordTrade ? 'text-green-400' : 'text-red-400'}`}>
                  {canAffordTrade ? `$${(levDeposit - requiredMarginCalc).toLocaleString(undefined, { maximumFractionDigits: 0 })}` : 'Margin Shortfall'}
                </span>
                <span className="text-[9px] text-gray-400 block mt-0.5">{canAffordTrade ? 'Buffer for Drawdown' : 'Trade Blocked'}</span>
              </div>

            </div>

            {/* Visual Margin Allocation Bar */}
            <div>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-gray-400">Account Collateral Usage:</span>
                <span className={`font-bold ${canAffordTrade ? 'text-green-400' : 'text-red-400'}`}>
                  {canAffordTrade ? `${((requiredMarginCalc / levDeposit) * 100).toFixed(1)}% Allocated` : <span className="inline-flex items-center gap-1 text-red-400"><AlertTriangle className="w-3.5 h-3.5" /> Insufficient Margin!</span>}
                </span>
              </div>
              <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden flex border border-white/10">
                <div
                  style={{ width: `${Math.min(100, (requiredMarginCalc / levDeposit) * 100)}%` }}
                  className={`${canAffordTrade ? 'bg-orange-500' : 'bg-red-500'} transition-all duration-300`}
                />
                <div
                  style={{ width: `${Math.max(0, 100 - (requiredMarginCalc / levDeposit) * 100)}%` }}
                  className="bg-green-500 transition-all duration-300 flex-1"
                />
              </div>
            </div>

          </div>

          {/* 3. Double-Edged Sword Telemetry (Market Movement Impact) */}
          <div className="bg-brandGold/5 border border-brandGold/20 p-4 rounded-xl space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-brandGold font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <span className="flex items-center gap-1.5"><ShieldAlert className="w-4 h-4 text-amber-400" /> The Double-Edged Sword (Profit &amp; Loss Magnification):</span>
              </span>
              <span className="text-[11px] text-gray-400">
                Market Move: <strong className={levPipShift >= 0 ? 'text-green-400' : 'text-red-400'}>{levPipShift >= 0 ? `+${levPipShift}` : levPipShift} Pips</strong>
              </span>
            </div>

            {/* Pip Shift Slider & Controls */}
            <div>
              <input
                type="range"
                min="-100"
                max="100"
                step="5"
                value={levPipShift}
                onChange={(e) => setLevPipShift(Number(e.target.value))}
                className="w-full accent-brandGold cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                <span>-100 Pips</span>
                <span>0 Pips (Break Even)</span>
                <span>+100 Pips</span>
              </div>
            </div>

            {/* PnL Telemetry Output */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className={`p-3 rounded-lg border text-center ${levPipProfit >= 0 ? 'bg-green-500/10 border-green-500/30' : 'bg-red-500/15 border-red-500/40'}`}>
                <span className="text-[10px] text-gray-400 block uppercase">Trade Net P&amp;L</span>
                <span className={`text-xl font-bold font-mono ${levPipProfit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {levPipProfit >= 0 ? `+$${levPipProfit.toLocaleString()}` : `-$${Math.abs(levPipProfit).toLocaleString()}`}
                </span>
                <span className="text-[10px] text-gray-400 block font-sans">
                  {levLots} Lots × $10 × {levPipShift} pips
                </span>
              </div>

              <div className={`p-3 rounded-lg border text-center ${Number(levAccountReturn) >= 0 ? 'bg-green-500/10 border-green-500/30' : 'bg-red-500/15 border-red-500/40'}`}>
                <span className="text-[10px] text-gray-400 block uppercase">Return on Account Capital</span>
                <span className={`text-xl font-bold font-mono ${Number(levAccountReturn) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {Number(levAccountReturn) >= 0 ? `+${levAccountReturn}%` : `${levAccountReturn}%`}
                </span>
                <span className="text-[10px] text-gray-400 block font-sans">
                  {Number(levAccountReturn) <= -100 ? 'ACCOUNT WIPED (Stop Out)' : 'Impact on $1,000 Deposit'}
                </span>
              </div>
            </div>

            <p className="text-[11px] text-gray-400 font-sans font-light leading-relaxed pt-1">
              <Lightbulb className="w-4 h-4 inline mr-1.5 text-brandGold" /> <strong>Key Takeaway:</strong> Leverage reduces the margin needed to open trades, but <strong className="text-white">your dollar gain or loss per pip depends entirely on your position lot size</strong>. High leverage with excessive lot size can wipe out your account on a small market swing!
            </p>

          </div>

        </div>

        {/* Crucial Risk Warning Box */}
        <div className="mt-4 bg-red-500/10 border border-red-500/30 p-4 rounded-xl text-gray-300">
          <div className="flex items-center gap-2 text-red-400 font-bold font-mono text-xs uppercase mb-1">
            <span className="flex items-center gap-1.5"><AlertTriangle className="w-4 h-4 text-amber-400" /> Crucial Risk Rule</span>
          </div>
          <p className="text-xs font-sans font-light leading-relaxed">
            If you have $1,000 with 1:100 leverage ($100,000 purchasing power), <strong className="text-white font-semibold">this does NOT mean you have $100,000 to lose</strong>. Your loss is strictly capped to your own account capital ($1,000). Leverage only reduces the initial margin required by the broker.
          </p>
        </div>

      </div>

      {/* =========================================================
          SECTION 7 & 8: Trading Account & Balance vs Equity (INTERACTIVE)
      ========================================================= */}
      <div className="bg-black/40 border border-white/10 p-6 md:p-8 rounded-2xl">
        
        {/* Clean Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 border-b border-white/10 pb-4">
          <div>
            <h4 className="text-xl font-bold font-display uppercase tracking-wider text-white flex items-center gap-2">
              <span className="text-brandGold">7 &amp; 8.</span> Trading Account (Balance vs Equity)
            </h4>
            <p className="text-xs text-gray-400 font-light mt-1">
              Master the core account parameters that govern your live trading capital.
            </p>
          </div>
          <span className="text-xs font-mono bg-brandGold/10 text-brandGold px-3 py-1 rounded border border-brandGold/30 self-start sm:self-auto">
            Live Account Simulator
          </span>
        </div>

        {/* Unified Minimalist Account Terminal */}
        <div className="bg-black/60 border border-white/10 rounded-xl p-5 md:p-6 space-y-6 font-mono">
          
          {/* 1. Live Account Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            
            {/* Balance */}
            <div className="bg-white/[0.02] border border-white/5 p-3.5 rounded-lg hover:border-brandGold/30 transition-colors">
              <div className="flex items-center justify-between text-[11px] text-gray-400 mb-1">
                <span className="font-bold text-gray-300 flex items-center gap-1.5"><Coins className="w-3.5 h-3.5 text-brandGold" /> Balance</span>
                <span className="text-[9px] bg-white/5 px-1.5 py-0.5 rounded text-gray-400">Settled</span>
              </div>
              <div className="text-lg sm:text-2xl font-bold text-white tracking-tight font-mono">
                ${balance.toLocaleString()}
              </div>
              <div className="text-[10px] text-gray-500 font-sans mt-1">Fixed until trades close</div>
            </div>

            {/* Equity */}
            <div className="bg-blue-500/5 border border-blue-500/20 p-3.5 rounded-lg hover:border-blue-500/40 transition-colors">
              <div className="flex items-center justify-between text-[11px] text-blue-400 mb-1">
                <span className="font-bold flex items-center gap-1.5"><BarChart2 className="w-3.5 h-3.5 text-blue-400" /> Equity</span>
                <span className="text-[9px] bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded font-bold">Real-Time</span>
              </div>
              <div className="text-lg sm:text-2xl font-bold text-blue-300 tracking-tight font-mono">
                ${equity.toLocaleString()}
              </div>
              <div className="text-[10px] text-gray-400 font-sans mt-1">
                Balance {openTradePnl >= 0 ? `+$${openTradePnl}` : `-$${Math.abs(openTradePnl)}`}
              </div>
            </div>

            {/* Used Margin */}
            <div className="bg-orange-500/5 border border-orange-500/20 p-3.5 rounded-lg hover:border-orange-500/40 transition-colors">
              <div className="flex items-center justify-between text-[11px] text-orange-400 mb-1">
                <span className="font-bold flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-orange-400" /> Used Margin</span>
                <span className="text-[9px] bg-orange-500/20 text-orange-300 px-1.5 py-0.5 rounded">Collateral</span>
              </div>
              <div className="text-lg sm:text-2xl font-bold text-orange-300 tracking-tight font-mono">
                ${usedMargin.toLocaleString()}
              </div>
              <div className="text-[10px] text-gray-400 font-sans mt-1">Locked for positions</div>
            </div>

            {/* Free Margin */}
            <div className={`p-3.5 rounded-lg border transition-colors ${freeMargin >= 0 ? 'bg-green-500/5 border-green-500/20 hover:border-green-500/40' : 'bg-red-500/10 border-red-500/40'}`}>
              <div className="flex items-center justify-between text-[11px] text-green-400 mb-1">
                <span className={`font-bold flex items-center gap-1.5 ${freeMargin < 0 ? 'text-red-400' : ''}`}><Unlock className="w-3.5 h-3.5 text-green-400" /> Free Margin</span>
                <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${freeMargin >= 0 ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                  {freeMargin >= 0 ? 'Available' : 'Deficit'}
                </span>
              </div>
              <div className={`text-lg sm:text-2xl font-bold tracking-tight font-mono ${freeMargin >= 0 ? 'text-green-400' : 'text-red-400 animate-pulse'}`}>
                ${freeMargin.toLocaleString()}
              </div>
              <div className="text-[10px] text-gray-400 font-sans mt-1">Equity − Used Margin</div>
            </div>

          </div>

          {/* 2. Visual Proportional Capital Bar */}
          <div className="space-y-2 bg-black/40 p-3.5 rounded-xl border border-white/5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px]">
              <span className="text-gray-400">
                Capital Allocation (Total Equity: <strong className="text-white">${equity.toLocaleString()}</strong>):
              </span>
              <span className={`font-bold ${
                usedMargin === 0 || Number(marginLevel) > 500 ? 'text-green-400' : Number(marginLevel) > 100 ? 'text-yellow-400' : 'text-red-400'
              }`}>
                Margin Level: {usedMargin === 0 ? '100% Free' : `${marginLevel}%`}
              </span>
            </div>
            
            {/* Visual Stacked Bar */}
            <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden flex border border-white/10">
              <div 
                style={{ width: `${Math.min(100, Math.max(0, (usedMargin / (equity || 1)) * 100))}%` }}
                className="bg-orange-500 transition-all duration-300"
                title={`Used Margin: $${usedMargin}`}
              />
              <div 
                style={{ width: `${Math.min(100, Math.max(0, (Math.max(0, freeMargin) / (equity || 1)) * 100))}%` }}
                className="bg-green-500 transition-all duration-300 flex-1"
                title={`Free Margin: $${freeMargin}`}
              />
            </div>

            <div className="flex justify-between text-[10px] text-gray-500 font-sans">
              <span className="text-orange-400">■ Used Margin: ${usedMargin.toLocaleString()} ({((usedMargin / (equity || 1)) * 100).toFixed(1)}%)</span>
              <span className="text-green-400">■ Free Margin: ${freeMargin.toLocaleString()} ({((Math.max(0, freeMargin) / (equity || 1)) * 100).toFixed(1)}%)</span>
            </div>
          </div>

          {/* 3. Interactive Controls with Presets */}
          <div className="pt-2 border-t border-white/5 space-y-4">
            
            {/* Preset Pills */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs text-gray-400 font-semibold">Live Controls:</span>
              <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                <button
                  type="button"
                  onClick={() => { setBalance(3000); setOpenTradePnl(250); setUsedMargin(100); }}
                  className="bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/30 px-2.5 py-1 rounded transition-colors"
                >
                  In Profit (+8%)
                </button>
                <button
                  type="button"
                  onClick={() => { setBalance(3000); setOpenTradePnl(-400); setUsedMargin(150); }}
                  className="bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 px-2.5 py-1 rounded transition-colors"
                >
                  In Drawdown (-13%)
                </button>
                <button
                  type="button"
                  onClick={() => { setBalance(1000); setOpenTradePnl(-450); setUsedMargin(500); }}
                  className="bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-2.5 py-1 rounded transition-colors"
                >
                  Near Margin Call
                </button>
                <button
                  type="button"
                  onClick={() => { setBalance(1000); setOpenTradePnl(0); setUsedMargin(50); }}
                  className="bg-white/5 hover:bg-white/10 text-gray-400 border border-white/10 px-2.5 py-1 rounded transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* 3 Sliders in Clean Minimalist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="bg-black/40 p-3 rounded-lg border border-white/5">
                <div className="flex justify-between text-[11px] mb-1.5">
                  <span className="text-gray-400">Balance:</span>
                  <span className="text-white font-bold">${balance.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="100" 
                  max="10000" 
                  step="100" 
                  value={balance} 
                  onChange={(e) => setBalance(Number(e.target.value))}
                  className="w-full accent-brandGold cursor-pointer"
                />
              </div>

              <div className="bg-black/40 p-3 rounded-lg border border-white/5">
                <div className="flex justify-between text-[11px] mb-1.5">
                  <span className="text-gray-400">Floating P&amp;L:</span>
                  <span className={`font-bold ${openTradePnl >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {openTradePnl >= 0 ? `+$${openTradePnl}` : `-$${Math.abs(openTradePnl)}`}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="-500" 
                  max="500" 
                  step="10" 
                  value={openTradePnl} 
                  onChange={(e) => setOpenTradePnl(Number(e.target.value))}
                  className="w-full accent-brandGold cursor-pointer"
                />
              </div>

              <div className="bg-black/40 p-3 rounded-lg border border-white/5">
                <div className="flex justify-between text-[11px] mb-1.5">
                  <span className="text-gray-400">Used Margin:</span>
                  <span className="text-orange-400 font-bold">${usedMargin}</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="800" 
                  step="20" 
                  value={usedMargin} 
                  onChange={(e) => setUsedMargin(Number(e.target.value))}
                  className="w-full accent-brandGold cursor-pointer"
                />
              </div>
            </div>

          </div>

        </div>

        {/* Quick Takeaways / Two Golden Rules */}
        <div className="mt-4 grid sm:grid-cols-2 gap-3 text-xs font-mono">
          <div className="bg-white/[0.02] border border-white/5 p-3.5 rounded-xl text-gray-300">
            <span className="text-brandGold font-bold block mb-1"><span className="flex items-center gap-1"><Pin className="w-3.5 h-3.5 text-brandGold" /> Core Formulas:</span></span>
            <div className="text-[11px] text-gray-400 space-y-1 font-sans">
              <div>• <strong>Equity</strong> = Balance + Floating P&amp;L</div>
              <div>• <strong>Free Margin</strong> = Equity − Used Margin</div>
            </div>
          </div>
          <div className="bg-white/[0.02] border border-white/5 p-3.5 rounded-xl text-gray-300">
            <span className="text-red-400 font-bold block mb-1"><span className="flex items-center gap-1"><AlertTriangle className="w-3.5 h-3.5 text-red-400" /> Margin Call vs Stop Out:</span></span>
            <div className="text-[11px] text-gray-400 space-y-1 font-sans">
              <div>• <strong>Margin Call (100%):</strong> Account blocked from opening new trades.</div>
              <div>• <strong>Stop Out (50%-30%):</strong> Broker server forcibly closes positions.</div>
            </div>
          </div>
        </div>

      </div>

      {/* =========================================================
          SECTION 9: What is Spread in Forex? (Spread Visualizer)
      ========================================================= */}
      <div className="bg-black/40 border border-white/10 p-6 md:p-8 rounded-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <h4 className="text-xl font-bold font-display uppercase tracking-wider text-white flex items-center gap-2">
              <span className="text-brandGold">9.</span> What is Spread in Forex?
            </h4>
            <p className="text-xs text-gray-400 font-light mt-1">
              Visualizing the Bid/Ask price gap, broker transaction fee, and live break-even simulator.
            </p>
          </div>
          <span className="text-xs font-mono bg-brandGold/10 text-brandGold px-3 py-1 rounded border border-brandGold/30 self-start sm:self-auto">
            Spread Visualizer
          </span>
        </div>

        <SpreadVisualizer />
      </div>

      {/* =========================================================
          SECTION 10: Pre-Flight Broker Selection Checklist
      ========================================================= */}
      <div className="bg-black/40 border border-white/10 p-6 md:p-8 rounded-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
          <div>
            <h4 className="text-xl font-bold font-display uppercase tracking-wider text-white flex items-center gap-2">
              <span className="text-brandGold">10.</span> What Should You Check Before Choosing a Broker?
            </h4>
            <p className="text-xs text-gray-400 font-light mt-1">
              Never deposit real funds before verifying these 6 critical institutional pillars.
            </p>
          </div>
          <span className="text-xs font-mono bg-green-500/10 text-green-400 px-3 py-1 rounded border border-green-500/30">
            Due Diligence Checklist
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-light">
          
          {/* Item 1 */}
          <div className="bg-black/60 border border-white/5 p-4 rounded-xl space-y-2">
            <span className="text-brandGold font-bold font-mono uppercase text-sm block flex items-center gap-2">
              <span className="flex items-center gap-2"><Landmark className="w-4 h-4 text-brandGold" /> 1. Tier-1 Regulation</span>
            </span>
            <p className="text-gray-400 leading-relaxed">
              Verify the exact legal entity holding your account. Look for top-tier regulators: <strong className="text-white">FCA (UK), ASIC (Australia), CySEC (Europe)</strong>, or CFTC/NFA (US).
            </p>
          </div>

          {/* Item 2 */}
          <div className="bg-black/60 border border-white/5 p-4 rounded-xl space-y-2">
            <span className="text-brandGold font-bold font-mono uppercase text-sm block flex items-center gap-2">
              <span className="flex items-center gap-2"><Coins className="w-4 h-4 text-brandGold" /> 2. Total Trading Costs</span>
            </span>
            <p className="text-gray-400 leading-relaxed">
              Inspect total round-trip cost: <strong className="text-white">Spread + Commission + Overnight Swap fees</strong>. For scalpers, avoid wide floating spreads during session rollovers.
            </p>
          </div>

          {/* Item 3 */}
          <div className="bg-black/60 border border-white/5 p-4 rounded-xl space-y-2">
            <span className="text-brandGold font-bold font-mono uppercase text-sm block flex items-center gap-2">
              <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-brandGold" /> 3. Execution &amp; Slippage</span>
            </span>
            <p className="text-gray-400 leading-relaxed">
              Ensure low latency (&lt;50ms) execution with zero requotes and minimal negative slippage. Check server location (e.g. Equinix LD4 / NY4).
            </p>
          </div>

          {/* Item 4 */}
          <div className="bg-black/60 border border-white/5 p-4 rounded-xl space-y-2">
            <span className="text-brandGold font-bold font-mono uppercase text-sm block flex items-center gap-2">
              <span className="flex items-center gap-2"><Settings className="w-4 h-4 text-brandGold" /> 4. Account Rules &amp; Policies</span>
            </span>
            <p className="text-gray-400 leading-relaxed">
              Confirm the broker explicitly allows <strong className="text-white">scalping, hedging, and news trading</strong> with flexible lot sizes (0.01 micro lots to 100+ standard lots).
            </p>
          </div>

          {/* Item 5 */}
          <div className="bg-black/60 border border-white/5 p-4 rounded-xl space-y-2">
            <span className="text-brandGold font-bold font-mono uppercase text-sm block flex items-center gap-2">
              <span className="flex items-center gap-2"><CreditCard className="w-4 h-4 text-brandGold" /> 5. Withdrawals &amp; Banking</span>
            </span>
            <p className="text-gray-400 leading-relaxed">
              Check withdrawal speeds (same-day or instant), accepted payment methods (crypto/USDT, bank transfer, cards), and verify there are no hidden fees.
            </p>
          </div>

          {/* Item 6 */}
          <div className="bg-black/60 border border-white/5 p-4 rounded-xl space-y-2">
            <span className="text-brandGold font-bold font-mono uppercase text-sm block flex items-center gap-2">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brandGold" /> 6. Negative Balance Protection</span>
            </span>
            <p className="text-gray-400 leading-relaxed">
              Ensure the broker guarantees negative balance protection so you can never owe money in unexpected market gap events.
            </p>
          </div>

        </div>
      </div>

      {/* =========================================================
          POPULAR FOREX BROKERS DIRECTORY
      ========================================================= */}
      <div className="space-y-4">
        <div className="text-center">
          <h4 className="text-white font-bold font-display text-sm uppercase tracking-wider">
            Popular Forex Brokers in the Industry
          </h4>
          <p className="text-xs text-gray-500 font-light mt-1">
            Always verify which legal jurisdiction applies to your specific residency.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {brokers.map((b) => (
            <div key={b.name} className="glass-panel p-5 rounded-xl border border-white/5 space-y-3 hover:scale-[1.02] hover:border-brandGold/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-white font-bold font-display tracking-wider text-base">{b.name}</span>
                  <span className="text-brandGold font-mono text-xs font-bold flex items-center gap-1"><Star className="w-3.5 h-3.5 text-brandGold fill-brandGold" /> {b.rating}</span>
                </div>
                
                <div className="my-2">
                  <span className="text-[10px] bg-brandGold/10 text-brandGold px-2 py-0.5 rounded font-semibold font-mono inline-block">
                    {b.type}
                  </span>
                  <span className="text-[10px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded font-semibold font-mono block mt-1">
                    {b.badge}
                  </span>
                </div>

                <ul className="text-[11px] text-gray-400 font-light space-y-1.5 mt-3">
                  {b.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-brandGold shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
