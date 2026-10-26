'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';

// Keep visitors on the equivalent localized route instead of sending them
// back to the homepage when switching languages on a town profile.
export default function LocaleSwitcher({locale}:{locale:string}){
 const pathname=usePathname();
 const targetLocale=locale==='es'?'en':'es';
 const currentPath=pathname||`/${locale}`;
 const localizedPath=currentPath.replace(/^\/(?:en|es)(?=\/|$)/,`/${targetLocale}`);
 const href=localizedPath===currentPath?`/${targetLocale}`:localizedPath;
 return <Link className="header-language" href={href} hrefLang={targetLocale==='es'?'es-US':'en-US'} aria-label={locale==='es'?'EN: Cambiar a inglés':'ES: Switch to Spanish'}>{targetLocale.toUpperCase()}</Link>;
}
