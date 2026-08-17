import Header from '@/components/website/Header';
import Footer from '@/components/website/Footer';
import { db, schema } from '@/db';
import { Users, Award, Shield, Linkedin, Facebook, Instagram } from 'lucide-react';

export const revalidate = 0;

export default async function TeamPage() {
  const team = await db.select().from(schema.teamMembers);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      <Header />

      {/* Team Title Banner */}
      <section className="relative py-20 px-4 bg-slate-950 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">Leadership & Experts</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">Our Executive Management Team</h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Engineers, certified project managers, procurement directors, and solar experts dedicated to high performance.
          </p>
        </div>
      </section>

      {/* Managing Director Spotlight */}
      <section className="py-16 px-4 max-w-7xl mx-auto w-full">
        <div className="p-8 md:p-12 rounded-3xl bg-slate-950 border border-slate-800 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 border-emerald-500/30 mx-auto shadow-2xl">
            <img src="/img/team/team1.jpeg" alt="MR. M KARUNAKARAN" className="w-full h-full object-cover" />
          </div>

          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 inline-block">
              Managing Director
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">MR. M KARUNAKARAN B.E., MBA.,</h2>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
              MR. M KARUNAKARAN B.E., MBA., has been associated with the solar industry for over 10 years. Under his vision and leadership, Sunspot Solar has executed large-scale commercial solar panel projects across South India.
            </p>
            <div className="flex items-center gap-4 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-emerald-500" /> 10+ Years Experience</span>
              <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-emerald-500" /> Certified Solar Leader</span>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12 px-4 max-w-7xl mx-auto w-full pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.id} className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 hover:border-emerald-500/30 transition-all">
              <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-emerald-500/20 mx-auto">
                <img src={member.image || '/img/team/hover-1.png'} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-center space-y-1">
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <span className="text-xs text-emerald-400 font-semibold block">{member.role}</span>
                <p className="text-slate-400 text-xs leading-relaxed pt-2">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
