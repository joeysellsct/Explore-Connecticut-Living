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
      <nav className="main-nav" aria-label="Main navigation"><Link href={`/${locale}`}>{locale==='es'?'Inicio':'Home'}</Link><Link href={`/${locale}/town-match`}>{locale==='es'?'Encuentra tu municipio':'Town Match'}</Link><Link href={`/${locale}/towns`}>{locale==='es'?'Municipios':'Explore Towns'}</Link><Link href="/en">EN</Link><Link href="/es">ES</Link></nav>
      <div className="agent-header"><div className="agent-header-text"><strong>mygoodagent LLC</strong><small>888-257-8265 · 680 Boston Post Rd, Suite H, Milford, CT 06460</small><small>Joey McVety · Real Estate Agent · Licensed in Connecticut · 203-627-7262</small></div><a className="agent-contact" href="mailto:JoeySellsCT@gmail.com">{locale==='es'?'Contáctame':'Contact Joey'} ↗</a></div>
    </header>
    {children}
    <footer className="compliance-footer">
      <strong>mygoodagent LLC</strong>
      <span>680 Boston Post Rd, Suite H, Milford, CT 06460 · <a href="tel:+18882578265">888-257-8265</a></span>
      <span>Joey McVety · {locale==='es'?'Agente inmobiliario con licencia en Connecticut':'Real Estate Agent · Licensed in Connecticut'} · <a href="tel:+12036277262">203-627-7262</a> · <a href="mailto:JoeySellsCT@gmail.com">JoeySellsCT@gmail.com</a></span>
      <span>{locale==='es'?'Igualdad de oportunidades de vivienda':'Equal Housing Opportunity'} · <Link href={`/${locale}/privacy`}>{locale==='es'?'Privacidad':'Privacy Policy'}</Link> · <Link href={`/${locale}/terms`}>{locale==='es'?'Condiciones':'Terms & Disclosures'}</Link></span>
      <small>{locale==='es'?'Explore Connecticut Living es un sitio informativo y de marketing inmobiliario de Joey McVety, agente de mygoodagent LLC. No es una correduría independiente.':'Explore Connecticut Living is a real estate information and marketing website operated by Joey McVety, an agent affiliated with mygoodagent LLC. It is not a separate brokerage.'}</small>
    </footer>
  </>;
}
