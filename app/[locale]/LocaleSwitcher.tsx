'use client';

import {usePathname} from 'next/navigation';

// A native link forces a full document navigation so the root <html lang>
// updates when switching languages. Preserve the current localized route.
export default function LocaleSwitcher({locale}:{locale:string}){
 const pathname=usePathname();
 const targetLocale=locale==='es'?'en':'es';
 const currentPath=pathname||`/${locale}`;
 const localizedPath=currentPath.replace(/^\/(?:en|es)(?=\/|$)/,`/${targetLocale}`);
 const href=localizedPath===currentPath?`/${targetLocale}`:localizedPath;
 return <a className="header-language" href={href} hrefLang={targetLocale==='es'?'es-US':'en-US'} aria-label={locale==='es'?'EN: Cambiar a inglés':'ES: Switch to Spanish'}>{targetLocale.toUpperCase()}</a>;
}
