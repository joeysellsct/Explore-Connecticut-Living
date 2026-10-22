import type { Metadata } from 'next';
// Staging is deliberately noindex. Set NEXT_PUBLIC_SITE_URL to the approved production domain at launch.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://explore-connecticut-living-staging.joeysellsct.workers.dev').replace(/\/$/, '');
export function localizedSeo(locale:string,path:string,title:string,description:string):Metadata {
 const suffix=path ? '/'+path.replace(/^\/+|\/+$/g,'') : '';
 const en='/en'+suffix, es='/es'+suffix;
 const current=locale==='es'?es:en;
 return {
  title, description,
  alternates:{canonical:current,languages:{'en-US':en,'es-US':es,'x-default':en}},
  openGraph:{type:'website',url:current,siteName:'Explore Connecticut Living',locale:locale==='es'?'es_US':'en_US',alternateLocale:[locale==='es'?'en_US':'es_US'],title,description},
  twitter:{card:'summary_large_image',title,description},
 };
}
