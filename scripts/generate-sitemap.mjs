import { writeFileSync } from 'fs';
import { globby } from 'globby';
import prettier from 'prettier';
 
async function generate() {
  //const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const pages = await globby([
    'pages/*.js',
    'data/**/*.mdx',
    '!data/*.mdx',
    '!pages/_*.js',
    '!pages/api',
    '!pages/404.js',
  ]);

  const siteUrl = 'http://tsyum.com/';
 
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((page) => {
            const path = page
              .replace('pages', '')
              .replace('data', '')
              .replace('.js', '')
              .replace('.mdx', '');
            const route = path === '/index' ? '' : path;
 
            return `
              <url>
                  <loc>${siteUrl}${route}</loc>
              </url>
            `;
          })
          .join('')}
    </urlset>
    `;

  // eslint-disable-next-line no-sync
  writeFileSync('public/sitemap.xml', sitemap);
}
 
generate();