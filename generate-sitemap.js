import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  // Add more URLs here
];

const sitemap = new SitemapStream({ hostname: 'http://localhost:5173' });

const writeStream = createWriteStream(resolve('public/sitemap.xml'));

writeStream.on('finish', () => {
  console.log('Sitemap writing complete.');
});

writeStream.on('error', (err) => {
  console.error('Error writing sitemap to file', err);
});

streamToPromise(sitemap)
  .then(() => {
    console.log('Sitemap created successfully!');
  })
  .catch((err) => {
    console.error('Error creating sitemap', err);
  });

links.forEach(link => sitemap.write(link));
sitemap.end();

// Pipe the sitemap stream to the file write stream
sitemap.pipe(writeStream);
