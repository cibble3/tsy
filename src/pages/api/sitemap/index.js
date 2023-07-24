import { rootSiteMap } from "@/utilities/sitemapGenerator";

export default function handler(req, res) {
  const sitemapXml = rootSiteMap( );
  res.setHeader('Content-Type', 'text/xml');
  res.send(sitemapXml);
}