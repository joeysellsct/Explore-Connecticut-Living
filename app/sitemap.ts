import type {MetadataRoute} from 'next';
import {connecticutTowns} from '../lib/connecticut-towns';
import {siteUrl} from '../lib/seo';
export default function sitemap():MetadataRoute.Sitemap {
 const paths=['','towns','town-match','compare','about','moving-resources','privacy','terms',...connecticutTowns.map(t=>'towns/'+t.slug)];
 return paths.flatMap(path=>['en','es'].map(locale=>({url:`${siteUrl}/${locale}${path?'/'+path:''}`,changeFrequency:'monthly' as const,priority:path===''?1:path==='towns'?0.9:path.startsWith('towns/')?0.7:0.4,alternates:{languages:{'en-US':`${siteUrl}/en${path?'/'+path:''}`,'es-US':`${siteUrl}/es${path?'/'+path:''}`,'x-default':`${siteUrl}/en${path?'/'+path:''}`}}})));
}
