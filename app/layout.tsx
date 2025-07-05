import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abdullah Tajudeen - Full Stack Developer',
  description: 'Award-winning full stack software developer specializing in modern web technologies, 3D experiences, and innovative digital solutions.',
  keywords: 'full stack developer, software engineer, web developer, React, Next.js, Three.js, TypeScript',
  authors: [{ name: 'Abdullah Tajudeen' }],
  openGraph: {
    title: 'Abdullah Tajudeen - Full Stack Developer',
    description: 'Award-winning full stack software developer specializing in modern web technologies.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}