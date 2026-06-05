import React, { useState } from 'react';
import { ExternalLink, Github, Database, Layout, Server, Lock, ShoppingCart, Tv, ChevronDown, ChevronUp, Cpu } from 'lucide-react';

const projects = [
  {
    id: 'clofthel',
    title: 'Clofthel Backend & Scraper',
    type: 'Automation & Distributed Scraper',
    description: 'A multi-layered scraping platform utilizing headless browsers and background React Native WebView configuration hacks to fetch and index visual streaming sources securely.',
    tech: ['Playwright', 'Node.js', 'React Native', 'MongoDB Atlas', 'Cron Engine'],
    live: null,
    github: 'https://github.com/Bedirhan3428/clofthel-backend',
    icon: <Tv className="w-6 h-6 text-amber-orange" />,
    architecture: [
      {
        module: 'Mikroservis ve Dağıtık Mimari',
        details: 'Scraper task decoupled as a distinct microservice, communicating via secure custom API key tokens and request validations.'
      },
      {
        module: 'WebView & Touch Injection Bypass',
        details: 'Crafted a custom workaround within React Native to execute an overlay/invisible WebView. Bypasses security by mapping dynamic player coordinates and injecting fake user clicks to extract video source links.'
      },
      {
        module: 'Zamanlanmış Görevler (Cron Engine)',
        details: 'Utilized node-cron scheduling on the Node backend to process and synchronize indexing dumps every 24 hours automatically.'
      },
      {
        module: 'MongoDB Atlas Custom Schema',
        details: 'Deployed replica set clusters configured with dynamic Mixed schemas to persist varied attributes of animes and episodes fluidly.'
      },
      {
        module: 'Güvenlik ve Auth',
        details: 'Configured Firebase & Google Sign-In verification on mobile, linked with JWT-based session protection and a MOBILE_APP_SECRET handshake.'
      }
    ]
  },
  {
    id: 'stokpro',
    title: 'StokPro',
    type: 'Commercial ERP / SaaS',
    description: 'High-performance corporate ERP and SaaS project engineered to run retail stock calculations, physical hardware interfaces, and analytics graphs.',
    tech: ['React', 'Chart.js', 'Firebase Auth', 'Hardware Scanning'],
    live: 'https://www.stokpro.shop/',
    github: 'https://github.com/Bedirhan3428/stokpro',
    icon: <Layout className="w-6 h-6 text-amber-orange" />,
    architecture: [
      {
        module: 'Donanım Entegrasyonu (BarcodeScanner.js)',
        details: 'Hooked physical USB/Bluetooth barcode guns into browser key listeners, automatically logging barcode matches to current stock lines.'
      },
      {
        module: 'Muhasebe & Satış Takibi (Sales.js, Accounting.js)',
        details: 'Calculates cash-flow ledger files, inventory margins, and tax values immediately on checkout completions.'
      },
      {
        module: 'SaaS Billing Model (useSubscription.js)',
        details: 'Guards premium API endpoints with react custom subscription hooks, checking client access dates and licensing flags.'
      },
      {
        module: 'Ürün Anahtarı Doğrulama (ProductKey.jsx)',
        details: 'Custom authentication model verifying license authenticity keys inside the tenant registration steps.'
      },
      {
        module: 'Veri Görselleştirme (chartSetup.js)',
        details: 'Compiled custom configurations on Chart.js to build dynamic transaction and user activity analytics panels.'
      }
    ]
  },
  {
    id: 'mhmcollection',
    title: 'MHM Collection',
    type: 'E-Commerce Platform',
    description: 'Modern serverless online store utilizing cloud function triggers and strict database rules to perform transactions.',
    tech: ['React', 'Vite', 'Firebase Cloud Functions', 'Firestore Rules'],
    live: 'https://mhmcollection.org',
    github: 'https://github.com/Bedirhan3428/mhmcollection',
    icon: <ShoppingCart className="w-6 h-6 text-amber-orange" />,
    architecture: [
      {
        module: 'Serverless Functions (functions/index.js)',
        details: 'Executed cloud tasks on order submissions to format records serverlessly and securely.'
      },
      {
        module: 'Firestore Güvenlik Kuralları (firestore.rules)',
        details: 'Rigid read/write constraints preventing database injection attacks and protecting customer fields.'
      },
      {
        module: 'Ödeme ve Sepet Akışı (CheckoutPage.jsx, CartContext.jsx)',
        details: 'Built custom React context providers managing checkout sequences and payment state logs without race conditions.'
      },
      {
        module: 'Kullanıcı Deneyimi (LookbookPage.jsx, OrderTrackingPage.jsx)',
        details: 'Created visual styling lookbooks and order shipment trackers updating directly from database events.'
      }
    ]
  },
  {
    id: 'ashfir',
    title: 'Ashfir / Cloud Backup v3',
    type: 'Security & Network Optimization',
    description: 'AES-256 encrypted silent client agent, migrating costly legacy dedicated nodes into highly scalable Google Cloud serverless models.',
    tech: ['Python', 'Node.js', 'GCP', 'AES-256 Encryption', 'SSL Bypass'],
    live: null,
    github: 'https://github.com/Bedirhan3428/cloudbackup',
    githubLegacy: 'https://github.com/Bedirhan3428/cloudbackup-server',
    githubAgent: 'https://github.com/Bedirhan3428/ashfir-agent',
    icon: <Lock className="w-6 h-6 text-amber-orange" />,
    note: "Firebase configurations are intentionally public to demonstrate Security Rules. The Ashfir Agent code has had sensitive functions removed and is provided STRICTLY for educational purposes.",
    architecture: [
      {
        module: 'SSL Interceptor Bypass',
        details: 'Modified network client setups to establish a secure tunnel and bypass local enterprise SSL proxies/blocking filters.'
      },
      {
        module: 'AES-256 Encryption Cipher',
        details: 'Performs chunk-level dataset encryption on the client agent side before executing file transfer operations.'
      },
      {
        module: 'GCP Cloud Serverless Migration',
        details: 'Ditched static high-cost VPS networks, rebuilding the payload ingestion endpoints as serverless functions, saving 90% hosting fees.'
      },
      {
        module: 'Analitik Log Gözlemi (Ayanokoji Mindset)',
        details: 'Resolved critical thread-blocking constraints within the background python script by analyzing system logs and rewriting multithreading queues.'
      }
    ]
  },
  {
    id: 'sigalmedia',
    title: 'Sigal Media',
    type: 'Social Ecosystem',
    description: 'Full-stack media network designed for custom school communities, featuring high performance media compression and LLM bot bots.',
    tech: ['React', 'Node.js', 'MongoDB', 'PWA', 'mediaCompressor'],
    live: null,
    github: 'https://github.com/Bedirhan3428/sigalmedia',
    githubBackend: 'https://github.com/Bedirhan3428/sigalmedia-backend',
    icon: <Database className="w-6 h-6 text-amber-orange" />,
    architecture: [
      {
        module: 'Sosyal Dinamikler (Feed, Reels, Stories, Chat)',
        details: 'Engineered real-time instant messaging protocols and heavy media feed algorithms managing concurrent connections.'
      },
      {
        module: 'PWA Altyapısı (sw.js, manifest.json)',
        details: 'Turned the application into a Progressive Web App utilizing custom service workers to cache layouts offline.'
      },
      {
        module: 'Medya İşleme (mediaCompressor)',
        details: 'Implemented custom javascript media compressors to process media formats on the client device before uploads, ensuring fast loads.'
      },
      {
        module: 'Yapay Zeka (Groq Client & botEngine)',
        details: 'Hooked backend processes with Groq LLM pipelines, feeding user prompts into customized analytical AI agents.'
      },
      {
        module: 'Güvenlik Katmanları (Aegis Shield & Rate Limiters)',
        details: 'Wrapped sensitive routes in custom authentication middleware, DDoS-resistant rate limiters, and admin access control check logic.'
      }
    ]
  }
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (id) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
    }
  };

  return (
    <section id="projects" className="relative">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-pure-white">Project Architecture</h2>
        <div className="h-px flex-grow bg-border-color"></div>
      </div>

      <div className="flex flex-col gap-8">
        {projects.map((project) => {
          const isExpanded = expandedProject === project.id;
          return (
            <div key={project.id} className="group border border-border-color bg-card-bg p-8 rounded-sm hover:border-amber-orange/30 transition-all duration-300 relative overflow-hidden glow-amber">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-orange/10 transition-colors"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    {project.icon}
                    <span className="text-sm font-mono text-amber-orange font-medium tracking-wider uppercase">{project.type}</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-pure-white">{project.title}</h3>
                  <p className="text-text-muted font-light text-base mb-6 leading-relaxed max-w-3xl">
                    {project.description}
                  </p>
                  
                  {project.note && (
                    <div className="mb-6 p-4 bg-deep-black border-l-4 border-amber-orange/50 text-sm text-text-muted italic rounded-r-sm">
                      <span className="font-semibold not-italic text-pure-white text-xs block mb-1">SECURITY & TRANSPARENCY NOTICE:</span> {project.note}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-deep-black text-text-muted border border-border-color text-xs font-mono rounded-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Architecture Accordion */}
                  {project.architecture && (
                    <div className="mt-4">
                      <button 
                        onClick={() => toggleProject(project.id)}
                        className="flex items-center gap-2 px-4 py-2 border border-border-color hover:border-amber-orange/50 hover:bg-deep-black transition-colors rounded-sm text-xs font-mono text-pure-white"
                      >
                        {isExpanded ? <ChevronUp className="w-4 h-4 text-amber-orange" /> : <ChevronDown className="w-4 h-4 text-amber-orange" />}
                        {isExpanded ? 'Hide System Details' : 'Explore System Details'}
                      </button>

                      {isExpanded && (
                        <div className="mt-6 border-t border-border-color pt-6 flex flex-col gap-4 animate-fade-in">
                          <h4 className="text-sm font-mono text-amber-orange uppercase tracking-wider mb-2 flex items-center gap-2">
                            <Cpu className="w-4 h-4" /> Codebase Modules & Engineering Workarounds
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.architecture.map((arch, index) => (
                              <div key={index} className="p-4 bg-deep-black border border-border-color rounded-sm">
                                <div className="text-xs font-mono text-pure-white font-semibold mb-1 uppercase tracking-wide">
                                  ⚡ {arch.module}
                                </div>
                                <p className="text-xs text-text-muted font-light leading-relaxed">
                                  {arch.details}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-3 min-w-[200px] justify-start">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 border border-border-color hover:border-amber-orange hover:text-amber-orange transition-colors rounded-sm text-pure-white group/link">
                      <span className="font-mono text-xs">Live Production</span>
                      <ExternalLink className="w-4 h-4 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 border border-border-color hover:border-amber-orange hover:bg-deep-black transition-colors rounded-sm text-pure-white">
                      <span className="font-mono text-xs">{project.githubBackend ? 'Frontend Repo' : (project.githubLegacy ? 'Web Panel Repo' : 'Source Code')}</span>
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.githubBackend && (
                    <a href={project.githubBackend} target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 border border-border-color hover:border-amber-orange hover:bg-deep-black transition-colors rounded-sm text-pure-white">
                      <span className="font-mono text-xs">Backend Repo</span>
                      <Server className="w-4 h-4" />
                    </a>
                  )}
                  {project.githubLegacy && (
                    <a href={project.githubLegacy} target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 border border-border-color hover:border-amber-orange hover:bg-deep-black transition-colors rounded-sm text-pure-white">
                      <span className="font-mono text-xs">Legacy Server Repo</span>
                      <Server className="w-4 h-4" />
                    </a>
                  )}
                  {project.githubAgent && (
                    <a href={project.githubAgent} target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 border border-border-color hover:border-amber-orange hover:bg-deep-black transition-colors rounded-sm text-pure-white">
                      <span className="font-mono text-xs">Agent Repo (Edu)</span>
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
