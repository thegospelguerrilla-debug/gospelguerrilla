import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'GospelGuerrilla | The Raw Gospel for Real People',
    template: '%s | GospelGuerrilla',
  },
  description:
    'No fluff. No church voice. Just the raw truth about sin, the cross, and real hope. For the broken, the skeptic, and the ones who know something is missing.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: 'GospelGuerrilla | The Raw Gospel for Real People',
    description:
      'The streets don’t lie. Neither does God. Clear, urgent, gritty presentation of the Gospel with no performance and no religious games.',
    images: [
      {
        url: '/images/guerrilla-street.jpg',
        width: 1200,
        height: 630,
        alt: 'GospelGuerrilla - The raw Gospel on the streets',
      },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0a0a',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-[#f5f5f5] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
