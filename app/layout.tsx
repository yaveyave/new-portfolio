import { ThemeToggle } from '@/components/ThemeToggle';
import { ScrollToTop } from '@/components/ScrollToTop';
import { DynamicHeader } from '@/components/DynamicHeader';
import '@/styles/globals.css';

export const metadata = {
  title: 'Backend & Web3 Developer',
  description: 'Portfolio of Oscar Daniel Yanez Vega — Backend, Full Stack, Web3, Blockchain Developer. Specialized in microservices, cloud, QA automation and blockchain technologies.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cube.svg" />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <DynamicHeader />
        <main className="max-w-5xl mx-auto px-4 py-6">
          <div className="w-full flex justify-end mb-4">
            <ThemeToggle />
          </div>

          {children}
        </main>
        <ScrollToTop />
      </body>
    </html>
  );
}