import Header from '@/components/website/Header';
import Footer from '@/components/website/Footer';
import { db, schema } from '@/db';
import { FolderCheck, MapPin } from 'lucide-react';

export const revalidate = 0;

export default async function ProjectsPage() {
  const projects = await db.select().from(schema.projects);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      <Header />

      {/* Projects Title Banner */}
      <section className="relative py-20 px-4 bg-slate-950 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">Portfolio Showcase</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">Our Solar Energy Projects</h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Explore turnkey rooftop, ground-mounted, and industrial solar installations executed across Tamil Nadu and South India.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div key={proj.id} className="group rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-xl hover:border-emerald-500/40 transition-all">
              <div className="h-56 overflow-hidden relative">
                <img src={proj.image || '/img/project/01.jpg'} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full bg-slate-950/80 text-emerald-400 border border-emerald-500/30">
                  {proj.category}
                </span>
              </div>
              <div className="p-6 space-y-3">
                <h2 className="text-lg font-bold text-white">{proj.title}</h2>
                <p className="text-slate-400 text-xs leading-relaxed">{proj.description || 'Custom engineering, procurement, and construction (EPC) completed to the highest standards.'}</p>
                {proj.location && (
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-2 border-t border-slate-900">
                    <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{proj.location}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
