import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alonso Ortega - Product Engineer & Hybrid Athlete',
  description: 'Product engineer who owns problems end-to-end: from framing to deployment. Currently remote engineering + HYROX training while traveling. Based in Canggu, Bali.',
  keywords: ['Product Engineer', 'HYROX', 'Hybrid Athlete', 'Bali', 'Software Engineering', 'Remote Engineering'],
  authors: [{ name: 'Alonso Ortega' }],
  openGraph: {
    title: 'Alonso Ortega - Product Engineer & Hybrid Athlete',
    description: 'Product engineer who owns problems end-to-end: from framing to deployment. Currently remote engineering + HYROX training while traveling.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alonso Ortega - Product Engineer & Hybrid Athlete',
    description: 'Product engineer who owns problems end-to-end: from framing to deployment. Currently remote engineering + HYROX training while traveling.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
