import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://studiospark.design';
  
  const routes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/blog',
    '/contact',
    '/careers',
    '/privacy',
    '/terms',
    '/faq'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
