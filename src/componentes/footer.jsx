import React from 'react';
import { ReactComponent as LogoLF } from '../img/logo-lf.svg';

const Footer = () => {
  return (
    <footer className="relative bg-[#09090b] border-t border-white/5 pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-500 to-transparent opacity-20"></div>
      
      {/* Huge background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] overflow-hidden whitespace-nowrap">
        <span className="text-[12vw] font-black font-sans tracking-tighter">LUIS LOZADA</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center">
        <div className="w-16 h-16 mb-6 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <LogoLF className="w-full h-full grayscale" />
        </div>
        
        <div className="flex items-center gap-3 bg-[#111113] border border-white/5 px-4 py-2 rounded-full mb-10 shadow-lg">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-zinc-400 font-mono text-xs">status: "Open to work"</span>
        </div>

        {/* Contact Info (Replaced Nav) */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-12 text-zinc-400">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            <span className="text-sm tracking-wide font-mono">pipelozada994@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <span className="text-sm tracking-wide font-mono">Neiva, Colombia</span>
          </div>
        </div>

        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center w-full text-zinc-600 text-sm font-mono">
          <p>&copy; {new Date().getFullYear()} Luis Felipe Lozada.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">
            <span className="text-zinc-500">{"//"}</span> Designed with logic.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
