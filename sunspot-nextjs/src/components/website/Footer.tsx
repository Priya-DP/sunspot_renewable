'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowRight, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Company Profile */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src="/img/logo/sunspot_logo.jpg" alt="Sunspot Logo" className="h-10 w-auto rounded-lg" />
            <div>
              <span className="text-base font-bold text-white block">SUNSPOT</span>
              <span className="text-xs text-emerald-400 font-semibold block">RENEWABLE ENGINEERING</span>
            </div>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            Leading solar energy solutions provider, specializing in high efficiency PV modules, rooftop installations, ground mounted systems, and complete turn-key renewable energy projects.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a href="#" className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-emerald-400 hover:bg-slate-800 transition-all"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-emerald-400 hover:bg-slate-800 transition-all"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-emerald-400 hover:bg-slate-800 transition-all"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-base border-b border-slate-800 pb-2">Quick Links</h3>
          <ul className="space-y-2.5 text-xs font-semibold">
            <li><Link href="/" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-emerald-500" /> Home</Link></li>
            <li><Link href="/about" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-emerald-500" /> About Us</Link></li>
            <li><Link href="/service" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-emerald-500" /> Solar Services</Link></li>
            <li><Link href="/project" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-emerald-500" /> Project Portfolio</Link></li>
            <li><Link href="/team" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-emerald-500" /> Executive Team</Link></li>
            <li><Link href="/contact" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-emerald-500" /> Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Renewable Solutions */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-base border-b border-slate-800 pb-2">Our Solutions</h3>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li>Solar PV Modules & Panels</li>
            <li>Rooftop Solar Power Plants</li>
            <li>Ground Mounted Installations</li>
            <li>Solar Water Pumping Systems</li>
            <li>Commercial Solar Projects</li>
            <li>Solar Water Heaters & Street Lights</li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="space-y-4">
          <h3 className="text-white font-bold text-base border-b border-slate-800 pb-2">Contact Info</h3>
          <div className="space-y-3 text-xs">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>S.No 8, Ponneri High Road, Manali New Town, Tamil Nadu - 600 103</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>+91-9094179527 / 9103</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>sunspotengineering@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-900 py-6 px-4 text-center text-xs text-slate-400">
        <p>© {new Date().getFullYear()} Sunspot Renewable Energy. All rights reserved. Managed via Next.js & Neon DB.</p>
      </div>
    </footer>
  );
}
