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
      <div className="agent-header"><div className="agent-header-text"><div className="agent-identity"><strong>Joey McVety</strong><span>{locale==='es'?'Agente inmobiliario · Licenciado en Connecticut':'Real Estate Agent · Licensed in Connecticut'}</span><span>License #RES.0820513 · <a href="tel:+12036277262">203-627-7262</a></span></div><div className="broker-identity"><strong>mygoodagent LLC</strong><span><a href="tel:+18882578265">888-257-8265</a></span><span>680 Boston Post Rd, Suite H, Milford, CT 06460</span></div></div><a className="agent-contact" href="mailto:JoeySellsCT@gmail.com">{locale==='es'?'Contáctame':'Contact Joey'} ↗</a></div>
    </header>
    {children}
    <footer className="compliance-footer">
      <strong>mygoodagent LLC</strong>
      <span>680 Boston Post Rd, Suite H, Milford, CT 06460 · <a href="tel:+18882578265">888-257-8265</a></span>
      <span>Joey McVety · License #RES.0820513 · {locale==='es'?'Agente inmobiliario con licencia en Connecticut':'Real Estate Agent · Licensed in Connecticut'} · <a href="tel:+12036277262">203-627-7262</a> · <a href="mailto:JoeySellsCT@gmail.com">JoeySellsCT@gmail.com</a></span>
      <div className="fair-housing"><svg viewBox="0 0 64 64" width="52" height="52" role="img" aria-label="Equal Housing Opportunity symbol" xmlns="http://www.w3.org/2000/svg"><path d="M7 30 L32 9 L57 30 V57 H7 Z" fill="none" stroke="currentColor" strokeWidth="5" strokeLinejoin="round"/><path d="M20 36 H44 M20 46 H44" stroke="currentColor" strokeWidth="5" strokeLinecap="square"/></svg><div><strong>{locale==='es'?'Igualdad de oportunidades de vivienda':'Equal Housing Opportunity'}</strong><p>{locale==='es'?'Apoyamos la igualdad de oportunidades de vivienda para todas las personas, sin discriminación por motivos protegidos por las leyes federales y de Connecticut.':'We support equal housing opportunity for everyone, without discrimination on any basis protected by federal or Connecticut law.'}</p></div></div>
      <span><Link href={`/${locale}/privacy`}>{locale==='es'?'Privacidad':'Privacy Policy'}</Link> · <Link href={`/${locale}/terms`}>{locale==='es'?'Condiciones':'Terms & Disclosures'}</Link></span>
      <small>{locale==='es'?'Explore Connecticut Living es un sitio informativo y de marketing inmobiliario de Joey McVety, agente de mygoodagent LLC. No es una correduría independiente.':'Explore Connecticut Living is a real estate information and marketing website operated by Joey McVety, an agent affiliated with mygoodagent LLC. It is not a separate brokerage.'}</small>
    </footer>
  </>;
}
