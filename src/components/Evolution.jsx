import React, { useState } from 'react';
import { Network, BarChart2, Cpu, Hammer, CheckCircle } from 'lucide-react';

const phases = [
  {
    id: 'social',
    title: 'Social & Web Foundations',
    subtitle: 'Sigal Media Era',
    icon: <Network className="w-5 h-5 text-amber-orange" />,
    period: 'Early Stage',
    focus: 'Dynamic platforms & complex state management',
    details: [
      'Mastered React & Firebase for fast-paced web systems.',
      'Developed native-feeling Reels, Feed, Stories, and a real-time Chat engine.',
      'Conquered state management complexities across parallel components.'
    ]
  },
  {
    id: 'saas',
    title: 'Commercial Logic & SaaS',
    subtitle: 'StokPro & MHM Collection',
    icon: <BarChart2 className="w-5 h-5 text-amber-orange" />,
    period: 'Mid Stage',
    focus: 'E-commerce & commercial business workflows',
    details: [
      'Integrated physical hardware (barcode scanners) into web accounting flows.',
      'Engineered subscription validation hooks (useSubscription.js) and product key license systems.',
      'Built serverless Firebase Cloud Functions alongside secure Firestore rules.'
    ]
  },
  {
    id: 'system',
    title: 'Automation & System Layer',
    subtitle: 'Clofthel & Ashfir v3',
    icon: <Cpu className="w-5 h-5 text-amber-orange" />,
    period: 'Advanced Stage',
    focus: 'Background daemons, scraping & deep security bypass',
    details: [
      'Built a standalone microservice scraper using Playwright automation.',
      'Engineered a React Native background WebView bypass simulating user touches to extract protected streams.',
      'Designed Ashfir: an AES-256 encrypted silent agent bypassing corporate SSL interceptors in kısıtlı ağlar.'
    ]
  },
  {
    id: 'hardware',
    title: 'Hardware & Cyberdeck Phase',
    subtitle: 'ESP32 & Standalone Systems',
    icon: <Hammer className="w-5 h-5 text-amber-orange" />,
    period: 'Elite Phase',
    focus: 'Microcontrollers, Orange Pi & Voice AI',
    details: [
      'Programmed ESP32 microcontrollers and configured Orange Pi 4 Pro boards.',
      'Designed custom standalone physical Cyberdecks.',
      'Built "Alya", a home-brewed, local voice assistant integrating offline audio capture with LLMs.'
    ]
  }
];

const Evolution = () => {
  const [activeTab, setActiveTab] = useState('social');
  const activePhase = phases.find(p => p.id === activeTab);

  return (
    <section id="evolution" className="relative">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-pure-white">Architectural Evolution</h2>
        <div className="h-px flex-grow bg-border-color"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Timeline Sidebar (Left) */}
        <div className="lg:col-span-5 flex flex-col gap-4 relative">
          {/* Vertical line indicator */}
          <div className="absolute left-8 top-8 bottom-8 w-px bg-border-color hidden md:block z-0"></div>

          {phases.map((phase) => {
            const isActive = activeTab === phase.id;
            return (
              <button
                key={phase.id}
                onClick={() => setActiveTab(phase.id)}
                className={`flex items-center gap-6 p-4 rounded-sm border text-left transition-all z-10 ${
                  isActive 
                    ? 'border-amber-orange bg-card-bg glow-amber' 
                    : 'border-border-color bg-deep-black hover:border-text-muted/50'
                }`}
              >
                <div className={`w-9 h-9 rounded-sm flex items-center justify-center border transition-colors shrink-0 ${
                  isActive 
                    ? 'bg-amber-orange/10 border-amber-orange' 
                    : 'bg-card-bg border-border-color'
                }`}>
                  {phase.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-baseline">
                    <span className={`text-xs font-mono tracking-wider ${isActive ? 'text-amber-orange' : 'text-text-muted'}`}>
                      {phase.period}
                    </span>
                  </div>
                  <h3 className="text-md font-bold text-pure-white">{phase.title}</h3>
                  <p className="text-xs text-text-muted font-light">{phase.subtitle}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Window (Right) */}
        <div className="lg:col-span-7 border border-border-color bg-card-bg p-8 rounded-sm glow-amber relative overflow-hidden min-h-[350px] flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div>
            <span className="text-xs font-mono text-amber-orange tracking-widest uppercase mb-2 block">
              Evolution Phase Detail
            </span>
            <h3 className="text-3xl font-bold text-pure-white mb-1">{activePhase.title}</h3>
            <p className="text-sm text-text-muted font-mono mb-6 italic">{activePhase.subtitle}</p>
            
            <div className="mb-6 p-4 bg-deep-black border-l-2 border-amber-orange rounded-r-sm text-sm text-pure-white/90">
              <span className="font-semibold text-amber-orange block text-xs font-mono uppercase mb-1">Core Architecture Focus:</span>
              {activePhase.focus}
            </div>

            <div className="flex flex-col gap-3">
              {activePhase.details.map((detail, idx) => (
                <div key={idx} className="flex gap-3 items-start text-sm text-text-muted font-light">
                  <CheckCircle className="w-4 h-4 text-amber-orange shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-border-color pt-6 mt-8 flex justify-between items-center text-xs text-text-muted font-mono">
            <span>STAGE: {activePhase.period.toUpperCase()}</span>
            <span className="text-amber-orange">STATUS: VERIFIED</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evolution;
