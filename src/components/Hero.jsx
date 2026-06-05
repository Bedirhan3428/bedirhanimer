import React, { useState } from 'react';
import { ArrowRight, Code, Server, Cpu, X, Terminal, ShieldAlert } from 'lucide-react';

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState([
    '// Welcome to analytical sandbox',
    'guest@bedirhan:~$ ./run_ashfir_agent.sh',
  ]);
  const [isExecuting, setIsExecuting] = useState(false);

  const executeTerminal = () => {
    if (isExecuting) return;
    setIsExecuting(true);
    setTerminalLogs(prev => [...prev, 'status: Initializing backup routine...']);
    
    setTimeout(() => {
      setTerminalLogs(prev => [...prev, 'network: Bypassing corporate SSL interceptor [ENABLED]']);
    }, 400);

    setTimeout(() => {
      setTerminalLogs(prev => [...prev, 'crypto: AES-256 cipher initialized...']);
    }, 800);

    setTimeout(() => {
      setTerminalLogs(prev => [
        ...prev, 
        'status: 12.8GB payload backed up silently.',
        'result: ALL SYSTEMS SECURE [SUCCESS]'
      ]);
      setIsExecuting(false);
      setShowPopup(true);
    }, 1200);
  };

  return (
    <section className="relative pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 z-10">
          <div className="inline-block px-3 py-1 mb-6 border border-amber-orange/50 bg-amber-orange/10 text-amber-orange font-mono text-sm rounded-sm">
            AGE 16 • SYSTEM & FULL-STACK ARCHITECT
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-pure-white">
            Designing systems that <span className="text-amber-orange italic font-medium">scale</span> with logic.
          </h1>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mb-10 leading-relaxed font-light">
            I am Bedirhan İmer. I leverage analytical discipline and advanced architectural patterns to build robust, secure, and high-performance digital infrastructure. From microcontroller firmware to custom scraping microservices and background agents.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#projects" className="group flex items-center gap-2 bg-pure-white text-deep-black px-6 py-3 rounded-sm font-medium hover:bg-amber-orange transition-colors">
              View Architecture
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="mailto:abimer2350@gmail.com" className="flex items-center gap-2 border border-border-color px-6 py-3 rounded-sm font-medium hover:border-text-muted transition-colors text-pure-white">
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="lg:col-span-4 hidden lg:block relative h-[420px]">
          <div className="absolute inset-0 border border-border-color rounded-sm bg-card-bg shadow-2xl p-6 flex flex-col justify-between transform rotate-2 hover:rotate-0 transition-transform duration-500 glow-amber">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-amber-orange/10 rounded-sm flex items-center justify-center border border-amber-orange/20">
                <Terminal className="text-amber-orange w-6 h-6" />
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-border-color"></div>
                <div className="w-3 h-3 rounded-full bg-border-color"></div>
                <div className="w-3 h-3 rounded-full bg-border-color"></div>
              </div>
            </div>
            
            <div className="bg-deep-black p-4 border border-border-color rounded-sm font-mono text-xs h-[220px] flex flex-col justify-between">
              <div className="overflow-y-auto max-h-[140px] flex flex-col gap-1.5 scrollbar-none">
                {terminalLogs.map((log, i) => (
                  <div key={i} className={
                    log.includes('[SUCCESS]') ? 'text-amber-orange font-semibold' :
                    log.includes('[ENABLED]') ? 'text-cyan-400' :
                    log.includes('//') ? 'text-text-muted' : 'text-zinc-300'
                  }>
                    {log}
                  </div>
                ))}
              </div>
              <button 
                onClick={executeTerminal}
                disabled={isExecuting}
                className="w-full flex items-center justify-center gap-2 bg-pure-white text-deep-black hover:bg-amber-orange disabled:bg-zinc-700 disabled:text-zinc-500 transition-colors py-2 rounded-sm text-xs font-bold font-mono tracking-wider"
              >
                <Code className="w-4 h-4" /> {isExecuting ? 'EXECUTING...' : 'RUN BACKUP AGENT'}
              </button>
            </div>
            
            <div className="border-t border-border-color pt-4 flex justify-between items-center text-xs text-text-muted font-mono">
              <span>ASHFIR_AGENT_V3</span>
              <span className="flex items-center gap-1 text-amber-orange"><Cpu className="w-3 h-3"/> AI ENHANCED</span>
            </div>
          </div>
        </div>
      </div>

      {/* In-App Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-card-bg border border-border-color p-8 rounded-sm shadow-2xl max-w-sm w-full relative glow-amber-strong">
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-text-muted hover:text-pure-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-16 h-16 bg-amber-orange/10 rounded-full flex items-center justify-center border border-amber-orange/20 mb-6 mx-auto">
              <ShieldAlert className="text-amber-orange w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-2 text-pure-white">Security Cleared</h3>
            <p className="text-text-muted text-center mb-8 font-light text-sm">
              Successfully executed backup bypass module. Demonstrated mastery over network and low-level thread scheduling under severe connection constraints.
            </p>
            <button 
              onClick={() => setShowPopup(false)}
              className="w-full bg-amber-orange text-deep-black py-3 rounded-sm font-bold hover:bg-pure-white transition-colors tracking-widest text-sm"
            >
              CONFIRM LOGIC
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
