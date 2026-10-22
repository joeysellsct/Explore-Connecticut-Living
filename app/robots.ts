import type {MetadataRoute} from 'next';
import {siteUrl} from '../lib/seo';
export default function robots():MetadataRoute.Robots {
 const staging=siteUrl.includes('staging.') || !process.env.NEXT_PUBLIC_SITE_URL;
 return {rules:staging?{userAgent:'*',disallow:'/'}:{userAgent:'*',allow:'/'},sitemap:`${siteUrl}/sitemap.xml`};
}
