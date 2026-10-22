import type {MetadataRoute} from 'next';
import {siteUrl} from '../lib/seo';

// Fail closed: a public URL alone must never enable crawling.
// Production indexing requires explicit approval and a non-preview HTTPS domain.
export default function robots():MetadataRoute.Robots {
 const approved=process.env.ENABLE_PRODUCTION_INDEXING==='true';
 const host=new URL(siteUrl).hostname.toLowerCase();
 const preview=host==='localhost'||host.endsWith('.workers.dev')||host.endsWith('.pages.dev')||host.startsWith('staging.')||host.startsWith('preview.');
 const allowIndexing=approved&&!preview&&siteUrl.startsWith('https://');
 return {
  rules:allowIndexing?{userAgent:'*',allow:'/'}:{userAgent:'*',disallow:'/'},
  ...(allowIndexing?{sitemap:`${siteUrl}/sitemap.xml`}:{}),
 };
}
