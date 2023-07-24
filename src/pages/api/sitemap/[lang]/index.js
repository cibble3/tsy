import { generateSitemap } from "@/utilities/sitemapGenerator";

export default async function handler(req, res) {
  const { lang } = req.query;
  const sitemapXml = await generateSitemap(lang);
  res.setHeader('Content-Type', 'text/xml');
  res.send(sitemapXml);
}