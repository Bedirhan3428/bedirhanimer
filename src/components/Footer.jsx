import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-border-color bg-deep-black py-8 mt-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-text-muted font-mono">
          &copy; {new Date().getFullYear()} BEDIRHAN İMER. ALL SYSTEMS ONLINE.
        </div>
        <div className="flex gap-6 text-sm font-medium">
          <a href="https://github.com/Bedirhan3428" target="_blank" rel="noreferrer" className="text-pure-white hover:text-amber-orange transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
