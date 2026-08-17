import type { Metadata } from 'next';
import '@/assets/css/all.min.css';
import '@/assets/css/animate.css';
import 'swiper/css';
import '@/assets/scss/main.scss';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sunspot Renewable Energy System | Solar Engineering Solutions',
  description: 'SUNSPOT Renewable Engineering is a recognized leading solar energy solutions provider specializing in PV module installation, rooftop solar, and ground mounted EPC solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
