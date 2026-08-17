import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sunspot Admin Panel',
  description: 'Content Management Application for Sunspot Renewable Energy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-slate-900 text-slate-100">
        {children}
      </body>
    </html>
  );
}
