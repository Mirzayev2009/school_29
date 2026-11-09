import type { MetadataRoute } from "next";
import { gallery, school } from "@/lib/school-data";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const images = [
    ...new Set([school.heroImage, ...gallery.map((photo) => photo.src)]),
  ];

  return [
    {
      url: absoluteUrl("/"),
      images: images.map(absoluteUrl),
    },
  ];
}
