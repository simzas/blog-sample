import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Blog project'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}): unknown {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-950 text-slate-200 min-h-screen flex flex-col`}
      >
        <Navbar />
        <div className="flex justify-center flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
