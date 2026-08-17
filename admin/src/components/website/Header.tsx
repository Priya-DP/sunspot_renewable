'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, Facebook, Instagram, Linkedin, Menu, X, ArrowRight, Lock } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full relative z-50">
      {/* Top Header Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-6">
            <a href="mailto:sunspotengineering@gmail.com" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-emerald-500" />
              <span>sunspotengineering@gmail.com</span>
            </a>
            <a href="tel:+919094179527" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-emerald-500" />
              <span>+91-9094179527 / 9103</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-slate-400">Follow Us:</span>
              <a href="#" className="hover:text-emerald-400 transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
              <a href="#" className="hover:text-emerald-400 transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
              <a href="#" className="hover:text-emerald-400 transition-colors"><Linkedin className="w-3.5 h-3.5" /></a>
            </div>

            <Link
              href="/login"
              className="flex items-center gap-1.5 px-3 py-1 bg-slate-900 hover:bg-slate-800 text-emerald-400 rounded-full border border-emerald-500/30 text-xs font-semibold transition-all"
            >
              <Lock className="w-3 h-3" />
              <span>Admin Login</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-slate-900/95 backdrop-blur-md border-b border-slate-800 sticky top-0 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/img/logo/sunspot_logo.jpg" alt="Sunspot Renewable Energy" className="h-12 w-auto object-contain rounded-lg" />
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-white tracking-tight block">SUNSPOT</span>
              <span className="text-xs text-emerald-400 font-semibold tracking-wider block">RENEWABLE ENGINEERING</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-200">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-emerald-400 transition-colors">About</Link>
            <Link href="/service" className="hover:text-emerald-400 transition-colors">Services</Link>
            <Link href="/project" className="hover:text-emerald-400 transition-colors">Projects</Link>
            <Link href="/team" className="hover:text-emerald-400 transition-colors">Team</Link>
            <Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm shadow-lg shadow-emerald-900/30 transition-all hover:scale-105"
            >
              <span>Get A Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-800 text-slate-200 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 py-6 space-y-4">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-emerald-400 font-semibold text-base">Home</Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-emerald-400 font-semibold text-base">About</Link>
            <Link href="/service" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-emerald-400 font-semibold text-base">Services</Link>
            <Link href="/project" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-emerald-400 font-semibold text-base">Projects</Link>
            <Link href="/team" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-emerald-400 font-semibold text-base">Team</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-emerald-400 font-semibold text-base">Contact</Link>
            <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="block text-emerald-400 hover:text-emerald-300 font-bold text-base pt-2 border-t border-slate-800">Admin Portal</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
