import { MetadataRoute } from "next";

type StoreUrls = {
  id: number;
  name: string;
  slug: string;
  image_url: string;
  store_url_analytics: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const result = await fetch(
    "https://admin.nestooffers.com/api/get-store-urls",
    {
      method: "GET",
      headers: {
        "Content-Type": "text/xml",
      },
    }
  );

  if (!result.ok) {
    throw new Error(`Failed to fetch sitemap. Status: ${result.status}`);
  }

  const xmlObject: StoreUrls[] = (await result.json())?.urls || [];
  // Using xml2js to parse the XML string
  const parsedSitemap: MetadataRoute.Sitemap = (xmlObject || [])?.map((e) => ({
    url: e.store_url_analytics,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 1,
  }));

  return parsedSitemap;
}
