import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {localizedSeo,siteUrl} from '../../lib/seo';
import { notFound } from 'next/navigation';
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{
 const {locale}=await params;
 const es=locale==='es';
 const title=es?'Explora Connecticut | Ciudades, comunidades y bienes raíces':'Explore Connecticut Living | Towns, Communities & Real Estate';
 const description=es?'Explora los 169 municipios de Connecticut, compara estilos de vida y encuentra comunidades que se adapten a tus prioridades con Joey McVety, agente inmobiliario de mygoodagent LLC.':'Explore Connecticut towns, compare communities, and find places that fit your lifestyle with Joey McVety, Connecticut real estate agent with mygoodagent LLC.';
 // Keep search indexing disabled by default. Even an explicit opt-in must not
 // make Cloudflare preview or staging domains indexable.
 const host=new URL(siteUrl).hostname.toLowerCase();
 const preview=host==='localhost'||host.endsWith('.workers.dev')||host.endsWith('.pages.dev')||host.startsWith('staging.')||host.startsWith('preview.');
 const allowIndexing=process.env.ENABLE_PRODUCTION_INDEXING==='true'&&!preview&&siteUrl.startsWith('https://');
 return {...localizedSeo(locale,'',title,description),metadataBase:new URL(siteUrl),robots:{index:allowIndexing,follow:allowIndexing}};
}
export default async function LocaleLayout({children,params}:{children:ReactNode;params:Promise<{locale:string}>}) {
  const {locale}=await params;
  if(!['en','es'].includes(locale))notFound();
  return <>
    <header className="brand-header">
      <Link href={`/${locale}`} className="site-logo" aria-label={locale==='es'?'Inicio de Explore Connecticut Living':'Explore Connecticut Living home'}><span className="logo-symbol">CT<span className="logo-dot">.</span></span><span className="logo-wordmark">EXPLORE <strong>CONNECTICUT</strong><small>LIVING</small></span></Link>
      <nav className="main-nav" aria-label={locale==='es'?'Navegación principal':'Main navigation'}><Link href={`/${locale}/towns`}>{locale==='es'?'Municipios':'Explore Towns'}</Link><Link href={`/${locale}/town-match`}>{locale==='es'?'Encuentra tu municipio':'Town Match'}</Link><Link href={`/${locale}/compare`}>{locale==='es'?'Comparar':'Compare'}</Link><details className="nav-more"><summary>{locale==='es'?'Más':'More'}</summary><div className="nav-more-menu"><Link href={`/${locale}/moving-resources`}>{locale==='es'?'Recursos de mudanza':'Moving Resources'}</Link><Link href={`/${locale}/about`}>{locale==='es'?'Conoce a Joey':'Meet Joey'}</Link></div></details><Link className="header-language" href={locale==='es'?'/en':'/es'} aria-label={locale==='es'?'Switch to English':'Cambiar a español'}>{locale==='es'?'EN':'ES'}</Link><a className="header-cta" href="mailto:JoeySellsCT@gmail.com">{locale==='es'?'Contactar':'Contact Joey'}</a></nav>
    </header>
    {children}
    <footer className="compliance-footer compact-footer">
      <div className="footer-minimal"><div className="footer-minimal-brand"><strong>Explore Connecticut Living</strong></div></div>
      <div className="footer-minimal-legal">
        <span>Joey McVety · {locale==='es'?'Agente inmobiliario con licencia en Connecticut':'Connecticut Licensed Real Estate Agent'} · RES.0820513</span>
        <span>mygoodagent LLC · 680 Boston Post Rd, Suite H, Milford, CT 06460 · <a href="tel:+18882578265">888-257-8265</a></span>
        <span className="footer-minimal-housing"><svg viewBox="0 0 64 64" width="38" height="38" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M7 30 L32 9 L57 30 V57 H7 Z" fill="none" stroke="currentColor" strokeWidth="5" strokeLinejoin="round"/><path d="M20 36 H44 M20 46 H44" stroke="currentColor" strokeWidth="5" strokeLinecap="square"/></svg><span>{locale==='es'?'Igualdad de oportunidades de vivienda':'Equal Housing Opportunity'}</span></span>
        <p className="footer-housing-disclosure">{locale==='es'?'Apoyamos la igualdad de oportunidades de vivienda para todas las personas, sin discriminación por motivos protegidos por las leyes federales y de Connecticut.':'We support equal housing opportunity for everyone, without discrimination on any basis protected by federal or Connecticut law.'}</p>
        <span><Link href={`/${locale}/privacy`}>{locale==='es'?'Privacidad':'Privacy'}</Link> · <Link href={`/${locale}/terms`}>{locale==='es'?'Términos y divulgaciones':'Terms & Disclosures'}</Link></span>
        <small>{locale==='es'?'Sitio informativo y de marketing inmobiliario de Joey McVety, agente de mygoodagent LLC; no es una correduría independiente.':'Real estate information and marketing website operated by Joey McVety, an agent affiliated with mygoodagent LLC; not a separate brokerage.'}</small>
      </div>
    </footer>
  </>;
}
