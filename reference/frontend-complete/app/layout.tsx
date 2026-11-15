import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'MiniTrack — Simple tasks, serious focus',
  description: 'A focused task tracker for your daily work.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
