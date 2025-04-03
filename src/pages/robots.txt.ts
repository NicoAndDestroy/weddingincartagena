// https://docs.astro.build/en/guides/integrations-guide/sitemap/#usage
import type { APIRoute } from 'astro';

const getSitemapUrl = (): string => {
  try {
    return new URL('sitemap-index.xml', import.meta.env.SITE).href;
  } catch (error) {
    console.error('Error constructing sitemap URL:', error);
    return '/sitemap-index.xml';
  }
};

const robotsTxt = `
User-agent: Googlebot
Disallow:
Allow: /
Crawl-delay: 10

User-agent: Yandex
Disallow:
Allow: /
Crawl-delay: 2

User-agent: archive.org_bot
Disallow:
Allow: /
Crawl-delay: 2

User-agent: *
Disallow: /

Sitemap: ${getSitemapUrl()}
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};