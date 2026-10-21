import {NextRequest,NextResponse} from 'next/server';

// Keep the document's language in sync with the URL for assistive technology.
export function proxy(request:NextRequest){
 const requestHeaders=new Headers(request.headers);
 const locale=request.nextUrl.pathname==='/es'||request.nextUrl.pathname.startsWith('/es/')?'es':'en';
 requestHeaders.set('x-site-locale',locale);
 return NextResponse.next({request:{headers:requestHeaders}});
}

export const config={matcher:['/((?!api/|_next/|.*\\..*).*)']};
