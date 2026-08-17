import Header from '@/components/website/Header';
import Footer from '@/components/website/Footer';
import { db, schema } from '@/db';
import { ShieldCheck, Zap, Award, Target, Compass, CheckCircle2 } from 'lucide-react';

export const revalidate = 0;

export default async function AboutPage() {
  const about = (await db.select().from(schema.aboutContent))[0];
  const team = await db.select().from(schema.teamMembers);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      <Header />

      {/* Page Title Banner */}
      <section className="relative py-20 px-4 bg-slate-950 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">
            {about?.sectionSubtitle || 'About Us'}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            {about?.mainHeading || 'Sunspot Renewable Engineering'}
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Dedicated to providing sustainable, reliable, and high-efficiency solar energy systems for commercial, residential, and industrial clients.
          </p>
        </div>
      </section>

      {/* Detailed About Content */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Leading the Clean Energy Transformation
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {about?.description || 'SUNSPOT Renewable Engineering is backed by a highly qualified team of engineers, designers, and certified project managers. With years of industry experience, our team delivers reliable solar solutions that build trust and long-term value.'}
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-800">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Our Mission</h3>
                  <p className="text-slate-400 text-xs mt-1">
                    To make solar energy affordable and accessible for all communities while delivering top-tier engineering standards and long-term savings.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Our Vision & Goal</h3>
                  <p className="text-slate-400 text-xs mt-1">
                    Building long-lasting relationships with valued customers by ensuring maximum system efficiency, durability, and customized project support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <img src={about?.aboutImage1 || '/img/about/about4.jpeg'} alt="About Sunspot" className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <img src={about?.aboutImage2 || '/img/about/about6.jpg'} alt="Sunspot Solar Installations" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Highlights */}
      <section className="py-20 px-4 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Leadership</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">Our Executive Management & Team</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.id} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-emerald-500/30 mx-auto">
                  <img src={member.image || '/img/team/hover-1.png'} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-center">
                  <h3 className="text-base font-bold text-white">{member.name}</h3>
                  <span className="text-xs text-emerald-400 font-semibold">{member.role}</span>
                  <p className="text-slate-400 text-xs mt-2 line-clamp-3">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
