import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import {
  schoolStructuredData,
  siteDescription,
  siteTitle,
  siteUrl,
} from "@/lib/seo";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const displayFont = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: "/",
    siteName: "Samarqand shahar 29-maktabi",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/images/school/school-building.png",
        width: 1320,
        height: 743,
        alt: "Samarqand shahar 29-maktabining binosi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/school/school-building.png"],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="uz-Latn-UZ"
      className={`${bodyFont.variable} ${displayFont.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schoolStructuredData).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        {children}
      </body>
    </html>
  );
}
