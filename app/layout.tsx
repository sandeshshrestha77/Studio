import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorPage } from '@/components/error-page';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata: Metadata = {
  metadataBase: new URL('https://studiospark.design'),
  title: {
    default: 'Studio Spark - Creative Design Agency',
    template: '%s | Studio Spark'
  },
  description: 'We craft exceptional digital experiences that inspire and elevate brands.',
  keywords: ['design agency', 'web design', 'branding', 'digital marketing', 'UI/UX design'],
  authors: [{ name: 'Studio Spark Team' }],
  creator: 'Studio Spark',
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://studiospark.design',
    title: 'Studio Spark - Creative Design Agency',
    description: 'We craft exceptional digital experiences that inspire and elevate brands.',
    siteName: 'Studio Spark',
    images: [
      {
        url: 'https://studiospark.design/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Studio Spark'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Spark - Creative Design Agency',
    description: 'We craft exceptional digital experiences that inspire and elevate brands.',
    creator: '@studiospark',
    images: ['https://studiospark.design/twitter-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ErrorBoundary FallbackComponent={ErrorPage}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navigation />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </ThemeProvider>
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  );
}