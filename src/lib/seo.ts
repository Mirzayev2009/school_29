import { school } from "@/lib/school-data";

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  "https://samarkandcityschool29.vercel.app";

export const siteUrl = new URL(configuredSiteUrl);
export const siteTitle = "Samarqand shahar 29-maktabi | Samarqand";
export const siteDescription =
  "Samarqand shahar 29-maktabi: Buyuk Ipak Yo‘li 44 manzili, 2 100+ o‘quvchi va maktab hayotidan suratlar.";

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export const schoolStructuredData = {
  "@context": "https://schema.org",
  "@type": "School",
  "@id": absoluteUrl("/#school"),
  name: school.fullName,
  url: absoluteUrl("/"),
  description: siteDescription,
  image: absoluteUrl(school.heroImage),
  address: {
    "@type": "PostalAddress",
    streetAddress: school.address.street,
    addressLocality: "Samarqand shahri",
    addressRegion: "Samarqand viloyati",
    addressCountry: "UZ",
  },
  sameAs: school.contacts.map((contact) => contact.href),
} as const;
