import React from 'react';
import { BrainCircuit, Activity, Cpu } from 'lucide-react';

const Philosophy = () => {
  return (
    <section className="relative">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-pure-white">Engineering Philosophy</h2>
        <div className="h-px flex-grow bg-border-color"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 border border-border-color bg-card-bg hover:border-amber-orange/50 transition-colors rounded-sm group glow-amber">
          <BrainCircuit className="w-8 h-8 text-amber-orange mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-semibold mb-4 text-pure-white">The Analytical Mindset</h3>
          <p className="text-text-muted font-light leading-relaxed text-sm">
            I approach engineering challenges with rigorous discipline and composure. When facing thread blocking or network drops, I analyze system logs to target core infrastructure faults rather than patching symptoms.
          </p>
        </div>
        
        <div className="p-8 border border-border-color bg-card-bg hover:border-amber-orange/50 transition-colors rounded-sm group glow-amber">
          <Activity className="w-8 h-8 text-amber-orange mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-semibold mb-4 text-pure-white">Performance-First UI/UX</h3>
          <p className="text-text-muted font-light leading-relaxed text-sm">
            Rejecting generic design trends, I adhere to a clean, geometric visual hierarchy powered by dark tones and amber accents. Design is a performance problem—optimized via structures like `mediaCompressor`.
          </p>
        </div>
        
        <div className="p-8 border border-border-color bg-card-bg hover:border-amber-orange/50 transition-colors rounded-sm group glow-amber">
          <Cpu className="w-8 h-8 text-amber-orange mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-semibold mb-4 text-pure-white">Hardware & Silicon Synergy</h3>
          <p className="text-text-muted font-light leading-relaxed text-sm">
            My stack isn't bounded by the browser. I bridge the physical-digital divide by programming ESP32 and Orange Pi microcontrollers, designing custom cyberdecks, and building local voice assistants.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
