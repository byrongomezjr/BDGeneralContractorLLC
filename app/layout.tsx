import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bdgeneralcontractor.com'),
  title: {
    default: 'B&D General Contractor LLC | New Jersey\'s Trusted General Contractor',
    template: '%s | B&D General Contractor LLC',
  },
  description: 'B&D General Contractor LLC provides expert building, remodeling, plumbing, electrical, and painting services across New Jersey. Licensed & Insured with 15+ years of experience.',
  keywords: [
    'General Contractor New Jersey',
    'NJ Home Remodeling',
    'Licensed Contractor Franklin NJ',
    'Residential Construction NJ',
    'Plumbing Services NJ',
    'Electrical Contractor NJ',
    'Painting Services NJ',
    'Home Renovation New Jersey',
  ],
  authors: [{ name: 'B&D General Contractor LLC' }],
  creator: 'B&D General Contractor LLC',
  publisher: 'B&D General Contractor LLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bdgeneralcontractor.com',
    siteName: 'B&D General Contractor LLC',
    title: 'B&D General Contractor LLC | New Jersey\'s Trusted General Contractor',
    description: 'Expert building, remodeling, plumbing, electrical, and painting services across New Jersey. Licensed & Insured with 15+ years of experience.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'B&D General Contractor LLC - Quality Craftsmanship',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B&D General Contractor LLC | New Jersey\'s Trusted General Contractor',
    description: 'Expert construction and remodeling services across New Jersey. Licensed & Insured.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} dark`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#F2A900" />
        
        {/* Schema.org LocalBusiness Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'GeneralContractor',
              name: 'B&D General Contractor LLC',
              image: 'https://bdgeneralcontractor.com/logo.png',
              '@id': 'https://bdgeneralcontractor.com',
              url: 'https://bdgeneralcontractor.com',
              telephone: '+1-555-123-4567',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Main Street',
                addressLocality: 'Franklin',
                addressRegion: 'NJ',
                postalCode: '08873',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 40.4774,
                longitude: -74.5518,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '07:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '08:00',
                  closes: '14:00',
                },
              ],
              sameAs: [
                'https://www.facebook.com/bdgeneralcontractor',
                'https://www.instagram.com/bdgeneralcontractor',
              ],
              priceRange: '$$',
              areaServed: {
                '@type': 'State',
                name: 'New Jersey',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'General Contracting Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Building & Remodeling',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Plumbing Services',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Electrical Services',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Painting',
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="font-body">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
