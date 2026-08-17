import Link from 'next/link';
import Header from '@/components/website/Header';
import Footer from '@/components/website/Footer';
import { AlertTriangle, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center p-8 text-center max-w-md mx-auto my-20">
        <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
          <AlertTriangle className="w-10 h-10" />
        </div>
        <h1 className="text-4xl font-extrabold text-white mb-2">404</h1>
        <h2 className="text-lg font-bold text-slate-200 mb-2">Page Not Found</h2>
        <p className="text-slate-400 text-xs mb-6">
          The requested page could not be found or has been moved. Return to the Sunspot Renewable Energy homepage.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs flex items-center gap-2 shadow-lg transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Back to Homepage</span>
        </Link>
      </main>

      <Footer />
    </div>
  );
}
