import type { Metadata } from 'next';
import './globals.css';
import { Inter, Work_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const workSans = Work_Sans({ subsets: ['latin'], variable: '--font-worksans' });

export const metadata: Metadata = {
  title: 'TwistUp ? Brand Identity',
  description: 'Modern, refreshing brand system for TwistUp beverage.',
  icons: {
    icon: '/icon.svg'
  },
  openGraph: {
    title: 'TwistUp ? Brand Identity',
    description: 'Modern, refreshing brand system for TwistUp beverage.',
    images: ['/og-image.svg'],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TwistUp ? Brand Identity',
    description: 'Modern, refreshing brand system for TwistUp beverage.',
    images: ['/og-image.svg']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${workSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
