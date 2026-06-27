import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { blogs } from "@/data/blogs";
import { careers } from "@/data/careers";
import { doctors } from "@/data/doctors";
import { news } from "@/data/news";
import { patientStories } from "@/data/patientStories";
import { specialities } from "@/data/specialities";
import { visitorPages } from "@/data/visitorPages";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about-us",
    "/find-doctors",
    "/specialities",
    "/online-report",
    "/visitors-patients",
    "/news-media",
    "/blog",
    "/patient-stories",
    "/career",
    "/contact",
    "/appointment",
    "/privacy-policy",
    "/terms",
    ...doctors.map((item) => `/doctors/${item.slug}`),
    ...specialities.map((item) => `/specialities/${item.slug}`),
    ...visitorPages.map((item) => `/visitors-patients/${item.slug}`),
    ...news.map((item) => `/news-media/${item.slug}`),
    "/news-media/news",
    "/news-media/gallery",
    "/news-media/publications",
    "/news-media/events",
    ...blogs.map((item) => `/blog/${item.slug}`),
    ...patientStories.map((item) => `/patient-stories/${item.slug}`),
    ...careers.map((item) => `/career/${item.slug}`)
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date()
  }));
}
