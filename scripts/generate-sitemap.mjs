import fs from 'fs';
import { globby } from 'globby';

async function generate() {
  const pages = await globby([
    // Home
    './src/pages/index.js',
    './src/pages/models-wanted.js',
    './src/pages/18-2257',
    // Free and Premium
    './src/pages/[type]/*.js',
    './src/pages/[type]/[cat]/*.js',
    './src/pages/[type]/[cat]/[sub_cat]/*.js',
    // Blogs
    './src/pages/blog/*.js',
    './src/pages/blog/categories/*.js',
    './src/pages/blog/tag/*.js',
    // Videos
    './src/pages/video/[page_name]/*.js',
    './src/pages/videos/*.js',
    './src/pages/videos/[cat]/*.js',
    './src/pages/videos/[cat]/[sub_cat]]/*.js',
  ]);

  //const pages = walk('./src/pages/');

  const siteUrl = 'http://tsyum.com';
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((page) => {
            
            const path = page
              .replace('./src/', '')
              .replace('pages', '')
              .replace('data', '')
              .replace('.js', '')
              .replace('.mdx', '');
            const route = path === '/index' ? '' : path;
            
            console.log('page: ', `${siteUrl}${route}`);

            return `<url><loc>${siteUrl}${route}</loc></url>`;
          })
          .join('')}
    </urlset>
    `;

  // eslint-disable-next-line no-sync
  fs.writeFileSync('public/sitemap.xml', sitemap);
}
 
generate();