import Header from '@/components/website/Header';
import Footer from '@/components/website/Footer';
import Link from 'next/link';
import { db, schema } from '@/db';
import { Sun, CheckCircle2, ArrowRight } from 'lucide-react';

export const revalidate = 0;

export default async function ServicesPage() {
  const services = await db.select().from(schema.services);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      <Header />

      {/* Services Title Banner */}
      <section className="relative py-20 px-4 bg-slate-950 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">Solutions Catalog</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">Solar & Renewable Energy Services</h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            High-efficiency solar solutions engineered for residential, commercial, industrial, and agricultural needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((serv) => (
            <div key={serv.id} className="p-8 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 hover:border-emerald-500/40 transition-all duration-300">
              <div className="p-3 w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
                <Sun className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white">{serv.title}</h2>
              <p className="text-slate-300 text-xs leading-relaxed">{serv.description}</p>
              <div className="pt-4 border-t border-slate-900 flex items-center justify-between">
                <span className="text-xs text-emerald-400 font-semibold px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800">
                  {serv.category || 'Solar Energy'}
                </span>
                <Link href="/contact" className="text-xs font-bold text-slate-300 hover:text-emerald-400 flex items-center gap-1">
                  Inquire <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
