import React from 'react';
import { ReactComponent as LogoLF } from '../img/logo-lf.svg';

const Footer = () => {
  return (
    <footer className="relative bg-[#09090b] border-t border-white/5 pt-20 pb-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-500/50 to-transparent"></div>
      
      {/* Huge background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] overflow-hidden whitespace-nowrap">
        <span className="text-[12vw] font-black font-sans tracking-tighter">LUIS LOZADA</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Unified Logo and Status */}
        <div className="flex flex-col items-center gap-6 mb-12">
          {/* Logo Match with Header */}
          <div className="w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center font-bold text-2xl font-mono transform transition-transform hover:scale-105 duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            L
          </div>
          
          <div className="flex items-center gap-3 bg-zinc-900/80 border border-white/10 px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-zinc-300 font-mono text-xs tracking-wider">STATUS: "OPEN TO WORK"</span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-16 text-zinc-300">
          <a href="mailto:pipelozada994@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors group">
            <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
              <svg className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <span className="text-sm tracking-wide font-mono">pipelozada994@gmail.com</span>
          </a>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/5 rounded-lg">
              <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <span className="text-sm tracking-wide font-mono">Neiva, Colombia</span>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center w-full text-zinc-500 text-xs font-mono">
          <p>&copy; {new Date().getFullYear()} Luis Felipe Lozada. All rights reserved.</p>
          <p className="mt-4 md:mt-0 flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full">
            <span className="text-zinc-600">{"//"}</span> Designed with logic.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
