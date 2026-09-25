import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Good Question — An Academy for the Curious',
  description: 'Beautiful learning paths through philosophy, mathematics, and computing—guided by curiosity rather than certainty.',
  openGraph: {
    title: 'Good Question — An Academy for the Curious',
    description: 'Every understanding begins with a good question.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Good Question — An Academy for the Curious',
    description: 'Every understanding begins with a good question.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
