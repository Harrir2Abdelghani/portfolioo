import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins, Space_Grotesk } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins'
});
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'Harrir Habib Abdelghani - React/NextJS Developer',
  description: 'Professional portfolio of Harrir Habib Abdelghani, a Full Stack MERN Developer with 5+ years of experience in JavaScript, ReactJs, NextJs, and NodeJs.',
  keywords: ['React Developer', 'NextJS', 'Full Stack Developer', 'JavaScript', 'NodeJS', 'MERN Stack'],
  authors: [{ name: 'Harrir Habib Abdelghani' }],
  openGraph: {
    title: 'Harrir Habib Abdelghani - React/NextJS Developer',
    description: 'Professional portfolio showcasing 5+ years of web development experience',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable} ${spaceGrotesk.variable}`}>
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}