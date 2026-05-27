import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vnshydraulic.com';
  const locales = ['th', 'en'] as const;

  const routes = [
    '',
    '/about',
    '/contact',
    '/products',
    '/products/stainless-304',
    '/products/hydraulic-hose',
    '/products/stainless-steel-flexible-hose',
    '/products/ptfe-teflon-hose',
    '/products/r7-thermoplastic-hose',
    '/products/steam-hose',
    '/products/toyox',
    '/products/industrial-hose',
    '/products/tube-fittings',
    '/products/camlock-coupling',
    '/products/quick-coupling',
    '/products/hydraulic-ball-valve',
    '/products/industrial-pipe-service',
    '/services/fitting-and-adapter',
    '/services/hydraulic-hose',
    '/services/industrial-hose',
    '/services/metal-hose',
    '/services/ptfe-teflon-hose',
    '/services/steam-hose',
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      const lastModified =
        route === '' || route === '/about' || route === '/contact'
          ? '2026-05-21'
          : route.startsWith('/products/')
          ? '2026-05-15'
          : '2026-04-15';

      const priority =
        route === '' ? 1.0
        : route.startsWith('/products/') || route.startsWith('/services/') ? 0.8
        : 0.6;

      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified,
        changeFrequency: 'weekly',
        priority,
        alternates: {
          languages: {
            th: `${baseUrl}/th${route}`,
            en: `${baseUrl}/en${route}`,
          },
        },
      });
    }
  }

  return entries;
}
