import axiosInstance from "@/instance/axiosInstance";
import menuData from "../context/menuData.json"

export async function generateSitemap(language) {
    // const baseUrl = `${process.env.NEXT_BASE_SITEMAP_URL}${language}/`; // Change the base URL according to your website structure
    const baseUrl = `${process.env.NEXT_BASE_SITEMAP_URL}`; // Change the base URL according to your website structure

    const generateUrls = (data) => {
        const urls = [];

        Object.keys(data)?.forEach(mainCat => {
            urls.push(`${mainCat.toLowerCase()}`);

            Object.keys(data[mainCat.charAt(0).toUpperCase() + mainCat.slice(1)].data)?.forEach(subCat => {

                if (!['free', 'premium', 'videos'].includes(subCat.toLowerCase())) {
                    urls.push(`${mainCat.toLowerCase()}/${subCat.toLowerCase()}`);
                }

                Object.keys(data[mainCat.charAt(0).toUpperCase() + mainCat.slice(1)].data[subCat])?.forEach(subsubCat => {
                    if (subCat.toLowerCase() !== "free" && subCat.toLowerCase() !== "categories") {
                        urls.push(`${subCat.toLowerCase()}/${mainCat.toLowerCase()}/${subsubCat.toLowerCase()}`);
                    } else if (subCat.toLowerCase() === "categories") {
                        urls.push(`${mainCat.toLowerCase()}/${subCat.toLowerCase()}/${subsubCat.toLowerCase()}`);
                    } else {
                        urls.push(`${mainCat.toLowerCase()}/${subsubCat.toLowerCase()}`);
                    }
                });

            });
        });
        return urls;
    };

    const pages = generateUrls(menuData)

    const response = await axiosInstance.get(`/blog?limit=20`);
    const responseData = response.data.articles;
    const blogSlugs = responseData?.map(blog => blog.post_url);

    const pageUrls = pages.map((page) => ({
        loc: `${baseUrl}${page}`, // Assuming each page has a unique slug
    }));

    const blogUrls = blogSlugs.map((slug) => ({
        loc: `${baseUrl}blog/${slug}`, // Assuming each blog has a unique slug
    }));

    const urls = [...pageUrls, ...blogUrls];

    return generateXml(urls);
}
export function rootSiteMap() {
    let SiteMaps = "";
    ["en", "de", "fr", "da", "es", "is", "it", "nl", "sv"].map((lang) => (
        SiteMaps += `<sitemap>
    <loc>${process.env.NEXT_BASE_SITEMAP_URL}sitemap-${lang}.xml</loc>
    </sitemap>`
    ));

    return `<sitemapindex xmlns="http://www.google.com/schemas/sitemap/0.84">
${SiteMaps}    
    </sitemapindex>`;
}

function generateXml(urls) {
    const xmlItems = urls
        .map((url) => {
            return `
        <url>
          <loc>${url.loc}</loc>
          <lastmod>2023-04-04T00:00:00+00:00</lastmod>
        </url>
      `;
        })
        .join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${xmlItems}
    </urlset>`;
}
