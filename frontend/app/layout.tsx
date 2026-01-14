import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chrono Master Pro - Advanced Clock & Timer App',
  description: 'All-in-one World Clock, Stopwatch, Timer, and Alarm application with beautiful UI',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
