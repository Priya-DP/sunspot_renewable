import Header from '@/components/website/Header';
import Footer from '@/components/website/Footer';
import { db, schema } from '@/db';
import ContactFormClient from './ContactFormClient';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const revalidate = 0;

export default async function ContactPage() {
  const contact = (await db.select().from(schema.contactInfo))[0];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      <Header />

      {/* Contact Title Banner */}
      <section className="relative py-20 px-4 bg-slate-950 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">Get In Touch</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">Contact Sunspot Engineering</h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Have questions about solar panel installations, commercial power plants, or custom quotes? Reach out to our engineering team.
          </p>
        </div>
      </section>

      {/* Contact Info Cards & Interactive Form */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column: Contact Cards */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs text-slate-400 font-semibold">Phone Support</h3>
                <p className="text-base font-bold text-white mt-1">{contact?.phone || '+91-9094179527 / 9103'}</p>
                <span className="text-xs text-emerald-400 font-medium">Available 7/24</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs text-slate-400 font-semibold">Email Inquiry</h3>
                <p className="text-base font-bold text-white mt-1">{contact?.email || 'sunspotengineering@gmail.com'}</p>
                <span className="text-xs text-emerald-400 font-medium">Fast Response</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs text-slate-400 font-semibold">Office & Plant Location</h3>
                <p className="text-sm font-bold text-white mt-1">{contact?.address || 'S.No 8, Ponneri High Road, Manali New Town, Tamil Nadu-600 103'}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Client Form */}
          <div className="lg:col-span-2">
            <ContactFormClient />
          </div>
        </div>
      </section>

      {/* Embedded Google Map */}
      <section className="w-full h-96 bg-slate-950 border-t border-slate-800 overflow-hidden">
        <iframe
          title="Sunspot Solar Location Map"
          src={contact?.mapUrl || 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.8966952758135!2d80.25268487484496!3d13.169123887164998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526fb4c46faefb%3A0x67ee0a1f0a8e7a0!2sManali%20New%20Town%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'}
          className="w-full h-full border-0 filter grayscale opacity-80 hover:grayscale-0 transition-all duration-500"
          allowFullScreen
          loading="lazy"
        />
      </section>

      <Footer />
    </div>
  );
}
