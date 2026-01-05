import { MetadataRoute } from "next";

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || "https://dogtrainers.gr/";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: `${DOMAIN}/sitemap.xml`,
  };
}
