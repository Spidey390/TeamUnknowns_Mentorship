import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ModuleBasics from '../components/modules/ModuleBasics';
import ModuleTradingView from '../components/modules/ModuleTradingView';
import ModuleCandlesticks from '../components/modules/ModuleCandlesticks';
import ModuleSessions from '../components/modules/ModuleSessions';
import ModuleArchitecture from '../components/modules/ModuleArchitecture';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 relative">

        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brandGold rounded-full mix-blend-overlay filter blur-[200px] opacity-[0.03] pointer-events-none"></div>
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brandGold rounded-full mix-blend-overlay filter blur-[150px] opacity-[0.02] pointer-events-none"></div>
        
        <div className="circle-accent w-[600px] h-[600px] -top-20 -left-40"></div>
        <div className="circle-accent w-[300px] h-[300px] top-80 right-20 border-opacity-5"></div>

        <ModuleBasics />
        <ModuleCandlesticks />
        <ModuleTradingView />
        <ModuleSessions />
        <ModuleArchitecture />

      </main>
      <Footer />
    </>
  );
}
