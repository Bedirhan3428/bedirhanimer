import React, { useState } from 'react';
import { ArrowRight, Code, Server, Cpu, X } from 'lucide-react';

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="relative pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 z-10">
          <div className="inline-block px-3 py-1 mb-6 border border-soft-green/50 bg-soft-green/10 text-soft-green font-mono text-sm rounded-sm">
            AGE 16 • FULL-STACK ARCHITECT
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-pure-white">
            Designing systems that <span className="text-soft-green italic font-medium">scale</span> with logic.
          </h1>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mb-10 leading-relaxed font-light">
            I am Bedirhan İmer. I leverage AI and advanced architectural patterns to build robust, scalable, and high-performance digital infrastructure.
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="group flex items-center gap-2 bg-pure-white text-deep-black px-6 py-3 rounded-sm font-medium hover:bg-gray-200 transition-colors">
              View Architecture
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="mailto:abimer2350@gmail.com" className="flex items-center gap-2 border border-border-color px-6 py-3 rounded-sm font-medium hover:border-text-muted transition-colors text-pure-white">
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="lg:col-span-4 hidden lg:block relative h-[400px]">
          <div className="absolute inset-0 border border-border-color rounded-sm bg-card-bg shadow-2xl p-6 flex flex-col justify-between transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-soft-green/10 rounded-sm flex items-center justify-center border border-soft-green/20">
                <Server className="text-soft-green w-6 h-6" />
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-border-color"></div>
                <div className="w-3 h-3 rounded-full bg-border-color"></div>
                <div className="w-3 h-3 rounded-full bg-border-color"></div>
              </div>
            </div>
            
            <div className="bg-deep-black p-4 border border-border-color rounded-sm font-mono text-sm">
              <div className="text-text-muted mb-2 text-xs">// Interactive Terminal</div>
              <div><span className="text-purple-400">const</span> <span className="text-blue-400">greet</span> = () <span className="text-purple-400">=&gt;</span> {'{'}</div>
              <div className="pl-4"><span className="text-blue-400">System</span>.<span className="text-blue-400">Alert</span>(<span className="text-soft-green">"Welcome!"</span>);</div>
              <div>{'}'};</div>
              <button 
                onClick={() => setShowPopup(true)}
                className="mt-4 w-full flex items-center justify-center gap-2 bg-pure-white text-deep-black hover:bg-soft-green transition-colors py-2 rounded-sm text-xs font-bold"
              >
                <Code className="w-4 h-4" /> EXECUTE
              </button>
            </div>
            
            <div className="border-t border-border-color pt-4 flex justify-between items-center text-xs text-text-muted font-mono">
              <span>SYS_OPT_01</span>
              <span className="flex items-center gap-1 text-soft-green"><Cpu className="w-3 h-3"/> AI DRIVEN</span>
            </div>
          </div>
        </div>
      </div>

      {/* In-App Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-card-bg border border-border-color p-8 rounded-sm shadow-2xl max-w-sm w-full relative">
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-text-muted hover:text-pure-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-16 h-16 bg-soft-green/10 rounded-full flex items-center justify-center border border-soft-green/20 mb-6 mx-auto">
              <Code className="text-soft-green w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-2 text-pure-white">Access Granted</h3>
            <p className="text-text-muted text-center mb-8 font-light">
              Welcome to the architectural network of Bedirhan İmer. All systems are functioning at optimal capacity.
            </p>
            <button 
              onClick={() => setShowPopup(false)}
              className="w-full bg-soft-green text-deep-black py-3 rounded-sm font-bold hover:bg-pure-white transition-colors tracking-widest text-sm"
            >
              ACKNOWLEDGE
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
