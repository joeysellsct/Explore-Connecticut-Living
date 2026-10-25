import {NextRequest,NextResponse} from 'next/server';

// Apply an HTTP-level noindex safeguard using the actual request hostname.
// Metadata and robots.txt also fail closed, but a production SITE_URL setting
// must never accidentally make a workers.dev or other preview host indexable.
function approvedForIndexing(request:NextRequest){
 const host=request.nextUrl.hostname.toLowerCase();
 const configuredUrl=process.env.NEXT_PUBLIC_SITE_URL;
 if(process.env.ENABLE_PRODUCTION_INDEXING!=='true'||!configuredUrl)return false;
 let production:URL;
 try{production=new URL(configuredUrl);}catch{return false;}
 const preview=host==='localhost'||host==='127.0.0.1'||host.endsWith('.workers.dev')||
  host.endsWith('.pages.dev')||host.startsWith('staging.')||host.startsWith('preview.');
 return !preview&&request.nextUrl.protocol==='https:'&&production.protocol==='https:'&&
  host===production.hostname.toLowerCase();
}

// Keep the document's language in sync with the URL for assistive technology.
export function proxy(request:NextRequest){
 const requestHeaders=new Headers(request.headers);
 const locale=request.nextUrl.pathname==='/es'||request.nextUrl.pathname.startsWith('/es/')?'es':'en';
 requestHeaders.set('x-site-locale',locale);
 const response=NextResponse.next({request:{headers:requestHeaders}});
 if(!approvedForIndexing(request))response.headers.set('X-Robots-Tag','noindex, nofollow, noarchive');
 return response;
}

export const config={matcher:['/((?!api/|_next/|.*\\..*).*)']};
