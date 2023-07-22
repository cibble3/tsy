import fs from 'fs';
import { globby } from 'globby';
import axios from "axios";

async function generate() {
  const md = fs.readFileSync('./src/context/menuData.json', 'utf8');
  const menuJson = JSON.parse(md);
  let pageArr = [];

  const menuJsonData = JSON.parse(md);

  const pages = await globby(pageArr);
  const siteUrl = 'http://tsyum.com';

  pages.push(`/`);
  pages.push(`/models-wanted`);
  pages.push(`/18-2257`);

  // Load Free Pages
  for (let i in menuJsonData.Trans.data.Free) {
    pages.push(`/trans/${i}`);
  }
  pages.push(`/girls`);
  for (let i in menuJsonData.Girls.data.Free) {
    pages.push(`/girls/${i}`);
  }

  // Load Premium Pages
  for (let i in menuJsonData.Trans.data.Premium) {
    pages.push(`/premium/trans/${i}`);
  }
  for (let i in menuJsonData.Girls.data.Premium) {
    pages.push(`/premium/girls/${i}`);
  }
 //console.log(process.env);return;
  const axiosInstance = axios.create({
    baseURL: 'https://system.mistressworld.xxx/api/app2/v1',
    //baseURL: `${process.env.NEXT_PUBLIC_BASE_API_URL}`,
  });
  const response = await axiosInstance.get(`/blog?limit=100`);
  const responseData = response.data;
  pages.push(`/blog`);
  responseData.articles.forEach((post) => {
    pages.push(`/blog/${post.post_url}`);
  });
  
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
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
            
            //console.log('page: ', `${siteUrl}${route}`);

            return `<url><loc>${siteUrl}${route}</loc></url>`;
          })
          .join('')}
    </urlset>
    `;

  // eslint-disable-next-line no-sync
  fs.writeFileSync('public/sitemap.xml', sitemap);
}
 


generate();