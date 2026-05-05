import React from 'react';
import { ExternalLink, Github, Database, Layout, Server, Lock, ShoppingCart } from 'lucide-react';

const projects = [
  {
    id: 'stokpro',
    title: 'StokPro',
    type: 'Commercial Product',
    description: 'High-performance SEO optimization platform, successfully reaching top Google search results for target keywords through strategic architecture.',
    tech: ['React', 'SEO Optimization', 'Performance Tuning'],
    live: 'https://www.stokpro.shop/',
    github: 'https://github.com/Bedirhan3428/stokpro',
    icon: <Layout className="w-6 h-6 text-soft-green" />
  },
  {
    id: 'mhmcollection',
    title: 'MHM Collection',
    type: 'E-Commerce Platform',
    description: 'A fast, modern e-commerce application utilizing Firebase for serverless backend operations and seamless user experience.',
    tech: ['React', 'Vite', 'Firebase', 'Cloud Functions'],
    live: 'https://mhmcollection.org',
    github: 'https://github.com/Bedirhan3428/mhmcollection',
    icon: <ShoppingCart className="w-6 h-6 text-soft-green" />
  },
  {
    id: 'sigalmedia',
    title: 'Sigal Media',
    type: 'Social Ecosystem',
    description: 'A full-stack social platform designed for a local school community. Features real-time interactions and a highly customized backend architecture.',
    tech: ['React', 'Node.js', 'MongoDB', 'Real-time Systems'],
    live: null,
    github: 'https://github.com/Bedirhan3428/sigalmedia',
    githubBackend: 'https://github.com/Bedirhan3428/sigalmedia-backend',
    icon: <Database className="w-6 h-6 text-soft-green" />
  },
  {
    id: 'ashfir',
    title: 'Ashfir / Cloud Backup',
    type: 'Security & Optimization',
    description: 'Demonstrates architectural decision-making by migrating from a high-cost dedicated server model to a cost-efficient Google Cloud Functions infrastructure.',
    tech: ['React', 'Node.js', 'GCP', 'Firebase Security Rules'],
    live: null,
    github: 'https://github.com/Bedirhan3428/cloudbackup',
    githubLegacy: 'https://github.com/Bedirhan3428/cloudbackup-server',
    githubAgent: 'https://github.com/Bedirhan3428/ashfir-agent',
    icon: <Lock className="w-6 h-6 text-soft-green" />,
    note: "Firebase configurations are intentionally public to demonstrate Security Rules. The Ashfir Agent code has had sensitive functions removed and is provided STRICTLY for educational purposes."
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-pure-white">Project Architecture</h2>
        <div className="h-px flex-grow bg-border-color"></div>
      </div>

      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group border border-border-color bg-card-bg p-8 rounded-sm hover:border-soft-green/30 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-soft-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-soft-green/10 transition-colors"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  {project.icon}
                  <span className="text-sm font-mono text-soft-green font-medium tracking-wider uppercase">{project.type}</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-pure-white">{project.title}</h3>
                <p className="text-text-muted font-light text-lg mb-6 leading-relaxed max-w-3xl">
                  {project.description}
                </p>
                
                {project.note && (
                  <div className="mb-6 p-4 bg-deep-black border-l-4 border-soft-green/50 text-sm text-text-muted italic rounded-r-sm">
                    <span className="font-semibold not-italic text-pure-white">Note:</span> {project.note}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-deep-black text-text-muted border border-border-color text-sm font-medium rounded-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 min-w-[200px]">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 border border-border-color hover:border-soft-green hover:text-soft-green transition-colors rounded-sm text-pure-white group/link">
                    <span className="font-medium text-sm">Live Production</span>
                    <ExternalLink className="w-4 h-4 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 border border-border-color hover:border-soft-green hover:bg-deep-black transition-colors rounded-sm text-pure-white">
                    <span className="font-medium text-sm">{project.githubBackend ? 'Frontend Repo' : (project.githubLegacy ? 'Web Panel Repo' : 'Source Code')}</span>
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {project.githubBackend && (
                  <a href={project.githubBackend} target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 border border-border-color hover:border-soft-green hover:bg-deep-black transition-colors rounded-sm text-pure-white">
                    <span className="font-medium text-sm">Backend Repo</span>
                    <Server className="w-4 h-4" />
                  </a>
                )}
                {project.githubLegacy && (
                  <a href={project.githubLegacy} target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 border border-border-color hover:border-soft-green hover:bg-deep-black transition-colors rounded-sm text-pure-white">
                    <span className="font-medium text-sm">Legacy Server Repo</span>
                    <Server className="w-4 h-4" />
                  </a>
                )}
                {project.githubAgent && (
                  <a href={project.githubAgent} target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 border border-border-color hover:border-soft-green hover:bg-deep-black transition-colors rounded-sm text-pure-white">
                    <span className="font-medium text-sm">Agent Repo (Edu)</span>
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
