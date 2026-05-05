import React from 'react';
import { BrainCircuit, Layers, Wrench } from 'lucide-react';

const Philosophy = () => {
  return (
    <section className="relative">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-pure-white">Architecture Philosophy</h2>
        <div className="h-px flex-grow bg-border-color"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 border border-border-color bg-card-bg hover:border-soft-green/50 transition-colors rounded-sm group">
          <BrainCircuit className="w-8 h-8 text-soft-green mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-semibold mb-4 text-pure-white">Human Logic + AI Tools</h3>
          <p className="text-text-muted font-light leading-relaxed">
            I utilize LLMs not simply as coding assistants, but as primary instruments for designing system architectures, debugging complex network issues, and optimizing large-scale infrastructure.
          </p>
        </div>
        
        <div className="p-8 border border-border-color bg-card-bg hover:border-soft-green/50 transition-colors rounded-sm group">
          <Layers className="w-8 h-8 text-soft-green mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-semibold mb-4 text-pure-white">System Design Focus</h3>
          <p className="text-text-muted font-light leading-relaxed">
            Going beyond basic syntax, my focus is entirely on "Problem Solving" and creating resilient system designs that stand the test of time and scale effortlessly under load.
          </p>
        </div>
        
        <div className="p-8 border border-border-color bg-card-bg hover:border-soft-green/50 transition-colors rounded-sm group">
          <Wrench className="w-8 h-8 text-soft-green mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-semibold mb-4 text-pure-white">Full-Stack Synergy</h3>
          <p className="text-text-muted font-light leading-relaxed">
            Mastering the complete ecosystem from robust React frontends to scalable Node.js backends. I architect seamless data flows to ensure high performance across the entire stack.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
