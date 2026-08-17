import Header from '@/components/website/Header';
import Footer from '@/components/website/Footer';
import Link from 'next/link';
import { db, schema } from '@/db';
import { ArrowRight, CheckCircle2, ShieldCheck, Sun, Zap, Award, Users, FolderCheck, Phone } from 'lucide-react';

export const revalidate = 0; // Ensure fresh data on every request from Neon DB

export default async function HomePage() {
  // Fetch dynamic content from Neon PostgreSQL DB via Drizzle ORM
  const slides = await db.select().from(schema.homeSlides);
  const about = (await db.select().from(schema.aboutContent))[0];
  const services = await db.select().from(schema.services);
  const projects = await db.select().from(schema.projects);
  const team = await db.select().from(schema.teamMembers);
  const contact = (await db.select().from(schema.contactInfo))[0];

  const primarySlide = slides[0] || {
    title: 'WELCOME TO SUNSPOT RENEWABLE ENERGY',
    heading: 'Powering a Sustainable Future with Solar Energy',
    description: 'Harness the power of the sun to create clean, reliable, and cost-effective energy. Our solar solutions reduce carbon emissions and lower electricity bills.',
    image: '/img/hero/hero-8.jpg',
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-slate-950 overflow-hidden border-b border-slate-800">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 opacity-60"
          style={{ backgroundImage: `url(${primarySlide.image || '/img/hero/hero-8.jpg'})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="max-w-2xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/30">
              <Sun className="w-3.5 h-3.5 text-emerald-400" />
              {primarySlide.title}
            </span>
            <h1
              className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight"
              dangerouslySetInnerHTML={{ __html: primarySlide.heading }}
            />
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              {primarySlide.description}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/about"
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm shadow-xl shadow-emerald-950/50 flex items-center gap-2 transition-all hover:scale-105"
              >
                <span>Explore Company</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold rounded-xl text-sm border border-slate-700 flex items-center gap-2 transition-all"
              >
                <span>Contact Engineering Team</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="bg-slate-950 border-b border-slate-800 py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <span className="text-3xl font-extrabold text-emerald-400 block">{about?.experienceYears || '60+'}</span>
            <span className="text-xs text-slate-400 font-medium">Years Experience</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <span className="text-3xl font-extrabold text-emerald-400 block">{projects.length || '500+'}</span>
            <span className="text-xs text-slate-400 font-medium">Completed Projects</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <span className="text-3xl font-extrabold text-emerald-400 block">{services.length || '10+'}</span>
            <span className="text-xs text-slate-400 font-medium">Solar Services</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <span className="text-3xl font-extrabold text-emerald-400 block">100%</span>
            <span className="text-xs text-slate-400 font-medium">Client Satisfaction</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-slate-900 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative space-y-4">
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <img src={about?.aboutImage1 || '/img/about/about3.jpeg'} alt="Sunspot Solar Engineering" className="w-full h-80 object-cover" />
            </div>
            {about?.aboutImage2 && (
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-48 rounded-xl overflow-hidden border-2 border-slate-900 shadow-2xl">
                <img src={about.aboutImage2} alt="Sunspot Work" className="w-full h-32 object-cover" />
              </div>
            )}
          </div>

          <div className="space-y-6">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">
              {about?.sectionSubtitle || 'About Us'}
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
              {about?.mainHeading || 'Welcome To Sunspot Renewable Energy System'}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {about?.description || 'SUNSPOT Renewable Engineering is backed by a highly qualified team of engineers, designers, and certified project managers. With years of industry experience, our team delivers reliable solar solutions.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{about?.reliabilityTitle || 'Reliability & Performance'}</span>
                </div>
                <p className="text-slate-400 text-xs">{about?.reliabilityDesc || 'Proven solar solutions delivering consistent efficiency.'}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <Zap className="w-4 h-4" />
                  <span>{about?.supportTitle || 'BrightSun Support'}</span>
                </div>
                <p className="text-slate-400 text-xs">{about?.supportDesc || 'Complete support from installation to after-sales.'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Services We Offer</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">Comprehensive Solar & Renewable Energy Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((serv) => (
              <div key={serv.id} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 space-y-4 hover:-translate-y-1">
                <div className="p-3 w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
                  <Sun className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">{serv.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{serv.description}</p>
                <Link href="/service" className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300">
                  <span>Learn Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 px-4 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">Portfolio</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">Recent Completed Projects</h2>
            </div>
            <Link href="/project" className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1">
              View All Projects <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((proj) => (
              <div key={proj.id} className="group rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-lg hover:border-emerald-500/30 transition-all">
                <div className="h-48 overflow-hidden relative">
                  <img src={proj.image || '/img/project/01.jpg'} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-950/80 text-emerald-400 border border-emerald-500/30">
                    {proj.category}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-base font-bold text-white">{proj.title}</h3>
                  <p className="text-slate-400 text-xs">{proj.description || 'Turnkey solar installation completed on schedule.'}</p>
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
