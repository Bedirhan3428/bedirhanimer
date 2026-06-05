import React, { useState } from 'react';
import { Cpu, Radio, Zap, Settings, Mic, LayoutGrid } from 'lucide-react';

const specs = [
  {
    id: 'esp32',
    name: 'ESP32 Firmware',
    type: 'Microcontroller',
    desc: 'Low-latency C/C++ firmware driving sensory inputs, wireless telemetry (Wi-Fi/BLE), and serial communications for embedded modules.',
    icon: <Cpu className="w-5 h-5" />
  },
  {
    id: 'orangepi',
    name: 'Orange Pi 4 Pro',
    type: 'SBC Master Node',
    desc: 'Configured headless Linux kernels, GPIO interfaces, and local threading to serve as the server core for remote agents.',
    icon: <Radio className="w-5 h-5" />
  },
  {
    id: 'cyberdeck',
    name: 'Cyberdeck Chassis',
    type: 'Physical Hardware',
    desc: 'Envisioning and assembling standalone custom mobile computer builds with battery rigs, micro-screens, and custom peripheral mapping.',
    icon: <LayoutGrid className="w-5 h-5" />
  },
  {
    id: 'alya',
    name: 'Alya Assistant',
    type: 'Autonomous Audio AI',
    desc: 'Built an offline audio pipeline triggering LLM inference parameters. Executes custom bash scripts locally upon voice query matches.',
    icon: <Mic className="w-5 h-5" />
  }
];

const Cyberdeck = () => {
  const [selectedSpec, setSelectedSpec] = useState('esp32');
  const currentSpec = specs.find(s => s.id === selectedSpec);

  return (
    <section id="cyberdeck" className="relative">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-pure-white">Cyberdeck & Hardware Hacks</h2>
        <div className="h-px flex-grow bg-border-color"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        {/* Schematic Grid Display */}
        <div className="md:col-span-7 border border-border-color bg-deep-black p-6 rounded-sm relative flex flex-col justify-between glow-amber overflow-hidden">
          <div className="absolute inset-0 architectural-grid opacity-50 z-0"></div>
          
          <div className="relative z-10 flex justify-between items-center border-b border-border-color pb-4 mb-6">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-orange animate-pulse" />
              <span className="font-mono text-xs text-pure-white tracking-widest">HARDWARE SCHEMATIC v1.0</span>
            </div>
            <span className="font-mono text-xs text-text-muted">ESP32_GPIO_CONN: ENABLED</span>
          </div>

          {/* Interactive Schematic Diagram Mockup */}
          <div className="relative z-10 flex-grow py-8 flex items-center justify-center min-h-[200px]">
            <div className="grid grid-cols-2 gap-6 w-full max-w-sm">
              {specs.map((spec) => {
                const isSelected = spec.id === selectedSpec;
                return (
                  <button
                    key={spec.id}
                    onClick={() => setSelectedSpec(spec.id)}
                    className={`p-4 border font-mono rounded-sm transition-all text-center flex flex-col items-center justify-center gap-2 group ${
                      isSelected 
                        ? 'border-amber-orange bg-amber-orange/5 text-amber-orange shadow-md glow-amber' 
                        : 'border-border-color bg-card-bg text-text-muted hover:border-text-muted'
                    }`}
                  >
                    <div className={`p-2 rounded-sm border ${isSelected ? 'border-amber-orange/50 bg-amber-orange/10' : 'border-border-color bg-deep-black group-hover:text-pure-white'}`}>
                      {spec.icon}
                    </div>
                    <span className="text-xs font-semibold">{spec.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative z-10 border-t border-border-color pt-4 mt-6 flex justify-between text-[10px] font-mono text-text-muted">
            <span>BAUD_RATE: 115200</span>
            <span>OS: headless_arm64_linux</span>
          </div>
        </div>

        {/* Selected Hardware Node Detail Card */}
        <div className="md:col-span-5 border border-border-color bg-card-bg p-8 rounded-sm glow-amber flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-amber-orange animate-ping"></div>
              <span className="text-xs font-mono text-amber-orange uppercase tracking-wider">
                {currentSpec.type}
              </span>
            </div>
            <h3 className="text-3xl font-bold text-pure-white mb-6 font-sans">{currentSpec.name}</h3>
            
            <p className="text-text-muted font-light leading-relaxed mb-6 text-sm">
              {currentSpec.desc}
            </p>

            <div className="bg-deep-black p-4 border border-border-color rounded-sm font-mono text-xs text-text-muted flex flex-col gap-2">
              <span className="text-pure-white text-[10px] uppercase tracking-wider font-semibold">// Integration Module</span>
              <div className="flex gap-2">
                <span className="text-amber-orange">import</span>
                <span className="text-zinc-300">hardware_driver</span>
              </div>
              <div>
                <span className="text-purple-400">spec</span> = hardware_driver.load(<span className="text-amber-orange">"{currentSpec.id}"</span>)
              </div>
              <div>
                <span className="text-purple-400">status</span> = spec.initialize_gpio()
              </div>
            </div>
          </div>

          <div className="border-t border-border-color pt-6 mt-8 flex justify-between items-center text-xs text-text-muted font-mono">
            <span>PERIPHERALS: OK</span>
            <span className="text-amber-orange">VOLTAGE: 3.3V/5V</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cyberdeck;
