import Link from 'next/link';
import { db, schema } from '@/db';
import {
  Home,
  Info,
  Wrench,
  FolderGit2,
  Users,
  PhoneCall,
  ArrowRight,
  Database
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const serviceCount = (await db.select().from(schema.services)).length;
  const projectCount = (await db.select().from(schema.projects)).length;
  const teamCount = (await db.select().from(schema.teamMembers)).length;
  const slideCount = (await db.select().from(schema.homeSlides)).length;
  const messageCount = (await db.select().from(schema.contactMessages)).length;

  const sections = [
    {
      name: 'Home Section',
      description: 'Manage Hero banners, dynamic slides, and titles',
      count: `${slideCount} Slides`,
      href: '/dashboard/home',
      icon: Home,
      color: 'from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30',
    },
    {
      name: 'About Section',
      description: 'Update company background, vision, mission, and images',
      count: '1 Active Page',
      href: '/dashboard/about',
      icon: Info,
      color: 'from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30',
    },
    {
      name: 'Services Section',
      description: 'Add, edit, delete solar & renewable energy services',
      count: `${serviceCount} Services`,
      href: '/dashboard/services',
      icon: Wrench,
      color: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30',
    },
    {
      name: 'Projects Section',
      description: 'Manage completed solar installations & project portfolio',
      count: `${projectCount} Projects`,
      href: '/dashboard/projects',
      icon: FolderGit2,
      color: 'from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30',
    },
    {
      name: 'Team Section',
      description: 'Update key leadership, management & social links',
      count: `${teamCount} Members`,
      href: '/dashboard/team',
      icon: Users,
      color: 'from-cyan-500/20 to-sky-500/20 text-cyan-400 border-cyan-500/30',
    },
    {
      name: 'Contact Section',
      description: 'Update contact details, phones, address, and view inquiries',
      count: `${messageCount} Messages`,
      href: '/dashboard/contact',
      icon: PhoneCall,
      color: 'from-rose-500/20 to-red-500/20 text-rose-400 border-rose-500/30',
    },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Welcome Banner */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-amber-950/40 border border-slate-800 relative overflow-hidden">
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold border border-amber-500/20">
            <Database className="w-3.5 h-3.5" />
            Neon PostgreSQL Cloud Engine Active
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Sunspot Content Management System
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            Select any section below to add, edit, delete, or upload content. All changes are stored directly in your Neon PostgreSQL cloud database and automatically reflect on the website.
          </p>
        </div>
      </div>

      {/* Grid of Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((sec) => {
          const Icon = sec.icon;
          return (
            <Link
              key={sec.name}
              href={sec.href}
              className="group p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-slate-900/50 hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl bg-gradient-to-br border ${sec.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {sec.count}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {sec.name}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">
                    {sec.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                <span>Manage Section</span>
                <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
