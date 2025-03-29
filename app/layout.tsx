import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'InstaSave - Instagram Content Downloader',
  description: 'Download Instagram videos, photos, reels, IGTV, stories, and carousels in high quality. Free online Instagram downloader with no watermark and no login required.',
  keywords: 'instagram downloader, instagram video downloader, download instagram reels, instagram story downloader, instagram photo downloader, save instagram content, instagram content saver',
  openGraph: {
    title: 'InstaSave - Instagram Content Downloader',
    description: 'Download Instagram videos, photos, reels, IGTV, stories, and carousels in high quality.',
    type: 'website',
    url: 'https://instasave.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen bg-gradient-to-b from-white to-pink-50">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}