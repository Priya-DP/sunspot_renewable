import Header from '@/components/website/Header';
import Footer from '@/components/website/Footer';
import AnimatedSection from '@/components/website/AnimatedSection';
import Link from 'next/link';
import { db, schema } from '@/db';
import { ArrowRight, ShieldCheck, Zap, Sun, Award } from 'lucide-react';

export const revalidate = 0;

export default async function HomePage() {
  const slides = await db.select().from(schema.homeSlides);
  const about = (await db.select().from(schema.aboutContent))[0];
  const services = await db.select().from(schema.services);
  const projects = await db.select().from(schema.projects);
  const team = await db.select().from(schema.teamMembers);

  const primarySlide = slides[0] || {
    title: 'WELCOME TO SUNSPOT RENEWABLE ENERGY',
    heading: 'Powering a Sustainable Future with Solar Energy',
    description: 'Harness the power of the sun to create clean, reliable, and cost-effective energy. Our solar solutions reduce carbon emissions and lower electricity bills.',
    image: '/img/hero/hero-8.jpg',
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      <Header />

      {/* Hero Banner Section with Staggered Animations */}
      <section className="relative min-h-[640px] flex items-center justify-center bg-slate-950 overflow-hidden border-b border-slate-800">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 opacity-60 scale-105"
          style={{ backgroundImage: `url(${primarySlide.image || '/img/hero/hero-8.jpg'})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 w-full">
          <div className="max-w-2xl space-y-6">
            <AnimatedSection direction="down" delay={0.1}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/30">
                <Sun className="w-3.5 h-3.5 text-emerald-400 animate-spin-slow" />
                {primarySlide.title}
              </span>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <h1
                className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md"
                dangerouslySetInnerHTML={{ __html: primarySlide.heading }}
              />
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.5}>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {primarySlide.description}
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.7}>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/about"
                  className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm shadow-xl shadow-emerald-950/50 flex items-center gap-2 transition-all hover:scale-105"
                >
                  <span>Explore Company</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-bold rounded-xl text-sm border border-slate-700 flex items-center gap-2 transition-all hover:scale-105"
                >
                  <span>Get A Quote</span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Animated Stats Counter Bar */}
      <section className="bg-slate-950 border-b border-slate-800 py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/30 transition-all hover:-translate-y-1">
              <span className="text-3xl font-extrabold text-emerald-400 block">{about?.experienceYears || '60+'}</span>
              <span className="text-xs text-slate-400 font-medium mt-1 block">Years Experience</span>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/30 transition-all hover:-translate-y-1">
              <span className="text-3xl font-extrabold text-emerald-400 block">{projects.length || '500+'}</span>
              <span className="text-xs text-slate-400 font-medium mt-1 block">Completed Projects</span>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.3}>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/30 transition-all hover:-translate-y-1">
              <span className="text-3xl font-extrabold text-emerald-400 block">{services.length || '10+'}</span>
              <span className="text-xs text-slate-400 font-medium mt-1 block">Solar Services</span>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.4}>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/30 transition-all hover:-translate-y-1">
              <span className="text-3xl font-extrabold text-emerald-400 block">100%</span>
              <span className="text-xs text-slate-400 font-medium mt-1 block">Client Satisfaction</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section with float-bob-y Counter Badge */}
      <section className="py-20 px-4 bg-slate-900 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Floating Experience Badge */}
              <div className="absolute top-4 left-4 z-20 float-bob-y bg-emerald-600 text-white p-4 rounded-2xl shadow-2xl border border-emerald-400/30 flex items-center gap-3">
                <Award className="w-8 h-8 text-amber-300 shrink-0" />
                <div>
                  <h3 className="text-xl font-extrabold leading-none">{about?.experienceYears || '60+'}</h3>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-100">Years Experience</span>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                <img src={about?.aboutImage1 || '/img/about/about3.jpeg'} alt="Sunspot Solar Engineering" className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-6">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">
                {about?.sectionSubtitle || 'About Us'}
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
                {about?.mainHeading || 'Welcome To Sunspot Renewable Energy System'}
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                {about?.description || 'SUNSPOT Renewable Engineering is backed by a highly qualified team of engineers, designers, and certified project managers.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1 hover:border-emerald-500/40 transition-all">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{about?.reliabilityTitle || 'Reliability & Performance'}</span>
                  </div>
                  <p className="text-slate-400 text-xs">{about?.reliabilityDesc || 'Proven solar solutions delivering consistent efficiency.'}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1 hover:border-emerald-500/40 transition-all">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                    <Zap className="w-4 h-4" />
                    <span>{about?.supportTitle || 'BrightSun Support'}</span>
                  </div>
                  <p className="text-slate-400 text-xs">{about?.supportDesc || 'Complete support from installation to after-sales.'}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Animated Services Section */}
      <section className="py-20 px-4 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12">
          <AnimatedSection direction="up">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Services We Offer</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">Comprehensive Ecological & Solar Services</h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((serv, index) => (
              <AnimatedSection key={serv.id} direction="up" delay={index * 0.1}>
                <div className="group p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 space-y-4 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-950/30">
                  <div className="p-3 w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <Sun className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">{serv.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{serv.description}</p>
                  <Link href="/service" className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 group-hover:translate-x-1 transition-transform">
                    <span>Learn Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Projects Showcase */}
      <section className="py-20 px-4 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12">
          <AnimatedSection direction="up">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">Portfolio</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white">Recent Completed Solar Projects</h2>
              </div>
              <Link href="/project" className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1">
                View All Projects <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((proj, index) => (
              <AnimatedSection key={proj.id} direction="up" delay={index * 0.1}>
                <div className="group rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-lg hover:border-emerald-500/40 transition-all hover:-translate-y-1">
                  <div className="h-52 overflow-hidden relative">
                    <img src={proj.image || '/img/project/01.jpg'} alt={proj.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <span className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-950/80 text-emerald-400 border border-emerald-500/30">
                      {proj.category}
                    </span>
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">{proj.title}</h3>
                    <p className="text-slate-400 text-xs">{proj.description || 'Turnkey solar installation completed on schedule.'}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
