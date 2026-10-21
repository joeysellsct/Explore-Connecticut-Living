import type { ReactNode } from 'react';
import { headers } from 'next/headers';
import './globals.css';
export default async function RootLayout({ children }: { children: ReactNode }) {
 const requestHeaders=await headers();
 const locale=requestHeaders.get('x-site-locale')==='es'?'es':'en';
 return <html lang={locale}><body>{children}</body></html>;
}
