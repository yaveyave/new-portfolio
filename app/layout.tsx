import { ThemeToggle } from '@/components/ThemeToggle';
import { ScrollToTop } from '@/components/ScrollToTop';
import { DynamicHeader } from '@/components/DynamicHeader';
import '@/styles/globals.css';
import { Analytics } from "@vercel/analytics/react";


export const metadata = {
  metadataBase: new URL("https://oscaryave.dev"),
  title: "Oscar D. Yanez Vega | Backend & Web3 Full Stack Developer",
  description:
    "Portfolio of Oscar D. Yanez Vega — Backend, Full Stack and Web3 Developer specialized in microservices, cloud, QA automation and blockchain technologies.",
  keywords: [
    "Backend Developer",
    "Full Stack Developer",
    "Web3",
    "Blockchain",
    "Ethereum",
    "Smart Contracts",
    "Node.js",
    "Microservices",
    "Cloud",
    "QA Automation",
  ],
  openGraph: {
    title: "Oscar D. Yanez Vega | Backend & Web3 Full Stack Developer",
    description:
      "Backend, Full Stack and Web3 Developer with expertise in microservices, cloud, QA automation and blockchain.",
    url: "https://oscaryave.dev",
    siteName: "Oscar Yanez Portfolio",
    images: [
      {
        url: "/preview.png", // make a 1200x630 image for social preview
        width: 1200,
        height: 630,
        alt: "Oscar D. Yanez Vega - Backend & Web3 Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oscar D. Yanez Vega | Backend & Web3 Full Stack Developer",
    description:
      "Portfolio of Oscar Yanez — Backend, Full Stack and Web3 Developer. Microservices, Cloud, QA Automation, Blockchain.",
    images: ["/preview.png"],
  },
  authors: [{ name: "Oscar D. Yanez Vega", url: "https://oscaryave.dev" }],
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

        {/* Web Analytics */}
        <Analytics />
      </body>
    </html>
  );
}

