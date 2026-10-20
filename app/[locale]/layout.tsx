import type { ReactNode } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
export default async function LocaleLayout({children,params}:{children:ReactNode;params:Promise<{locale:string}>}) {
  const {locale}=await params;
  if(!['en','es'].includes(locale))notFound();
  return <>
    <div className="topbar"><span>{locale==='es'?'Descubre Connecticut con un experto local':'Your Connecticut relocation resource'}</span><a href="tel:+12036277262">203-627-7262</a></div>
    <header className="brand-header">
      <Link href={`/${locale}`} className="site-logo" aria-label="Explore Connecticut Living home"><span className="logo-symbol">CT<span className="logo-dot">.</span></span><span className="logo-wordmark">EXPLORE <strong>CONNECTICUT</strong><small>LIVING</small></span></Link>
      <nav className="main-nav" aria-label="Main navigation"><Link href={`/${locale}`}>{locale==='es'?'Inicio':'Home'}</Link><Link href={`/${locale}/towns`}>{locale==='es'?'Municipios':'Explore Towns'}</Link><Link href="/en">EN</Link><Link href="/es">ES</Link></nav>
      <div className="agent-header"><div className="agent-header-text"><strong>Joey McVety</strong><small>Real Estate Agent · mygoodagent</small></div><a className="agent-contact" href="mailto:JoeySellsCT@gmail.com">{locale==='es'?'Contáctame':'Contact Joey'} ↗</a></div>
    </header>
    {children}
  </>;
}
