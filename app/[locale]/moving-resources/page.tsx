import type {Metadata} from 'next';
import Link from 'next/link';
import {partnerLinks} from '../../../lib/moving-resources';
import {localizedSeo} from '../../../lib/seo';

export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{
 const {locale}=await params;
 return localizedSeo(locale,'moving-resources',locale==='es'?'Recursos para mudarse a Connecticut':'Connecticut Moving & Home Resources',locale==='es'?'Recursos de servicios públicos, internet y productos para instalarte en Connecticut.':'Practical Connecticut moving resources, utility information, internet availability and optional home essentials.');
}

export default async function MovingResourcesPage({params}:{params:Promise<{locale:string}>}){
 const {locale}=await params;const es=locale==='es';
 return <main className="compare-page moving-hub">
  <span className="towns-kicker">{es?'TU PRÓXIMA MUDANZA':'YOUR NEXT MOVE'}</span>
  <h1>{es?'Recursos para mudarse e instalarse en Connecticut':'Moving & Home Resources'}</h1>
  <p className="moving-hub-lead">{es?'Encuentra información práctica para organizar tu mudanza, comprobar servicios y preparar tu nuevo hogar. Algunas recomendaciones incluyen enlaces de referido claramente identificados.':'Useful information for planning your move, checking services and getting your new home ready. Some optional recommendations include clearly identified referral links.'}</p>
  <div className="moving-resources-grid">
   <article className="moving-resource-card">
    <h2>{es?'Servicios públicos e internet':'Utilities & internet availability'}</h2>
    <p>{es?'Los proveedores de electricidad, gas, agua, alcantarillado e internet dependen de la dirección. Verifica la disponibilidad antes de contratar.':'Electric, gas, water, sewer and internet providers vary by address. Always confirm service before signing up.'}</p>
    <a href="https://broadbandmap.fcc.gov/" target="_blank" rel="noopener noreferrer">{es?'Consultar internet por dirección (FCC)':'Check internet availability by address (FCC)'} ↗</a>
    <a href="https://portal.ct.gov/pura" target="_blank" rel="noopener noreferrer">{es?'Regulador de servicios públicos (PURA)':'Connecticut utility regulator (PURA)'} ↗</a>
   </article>
   <article className="moving-resource-card">
    <h2>{es?'Impuestos y comparación de municipios':'Property taxes & town comparisons'}</h2>
    <p>{es?'Compara municipios y calcula impuestos estimados usando tasas oficiales verificadas. Las tasas y distritos fiscales pueden variar.':'Compare towns and estimate property taxes using verified official rates. Tax rates and special districts may vary.'}</p>
    <Link href={`/${locale}/compare`}>{es?'Comparar municipios':'Compare Connecticut towns'} →</Link>
    <Link href={`/${locale}/towns`}>{es?'Explorar las 169 localidades':'Browse all 169 towns'} →</Link>
   </article>
  </div>
  <section className="moving-hub-partners">
   <span className="towns-kicker">{es?'RECURSOS OPCIONALES':'OPTIONAL RESOURCES'}</span>
   <h2>{es?'Recomendaciones para instalarte':'Helpful links for getting settled'}</h2>
   <p>{es?'Estos enlaces son opcionales. Compara proveedores y condiciones antes de comprar o registrarte.':'These links are optional. Compare providers and terms before buying or signing up.'}</p>
   <p className="affiliate-disclosure">{es?'Aviso de afiliados: puedo recibir una comisión, recompensa o crédito por referidos si compras o te registras mediante algunos enlaces de esta sección.':'Affiliate disclosure: I may earn a commission, referral reward or credit if you purchase or sign up through some links in this section.'}</p>
   <div className="moving-hub-partner-grid">{partnerLinks.map(link=><article className="moving-hub-partner" key={link.url}>
    <span className="moving-hub-category">{link.category==='internet'?(es?'INTERNET':'INTERNET'):(es?'HOGAR Y MUDANZA':'HOME & MOVING')}</span>
    <h3>{link.name}</h3><p>{es?link.descriptionEs:link.descriptionEn}</p>
    <a href={link.url} target="_blank" rel="noopener noreferrer sponsored">{es?'Explorar recurso':'Explore resource'} ↗</a>
    {link.affiliate&&<small>{es?'Enlace de referido: puedo recibir compensación':'Referral link: I may receive compensation'}</small>}
   </article>)}</div>
   <p className="affiliate-disclosure">{es?'Como Asociado de Amazon, obtengo ingresos por las compras que cumplen los requisitos.':'As an Amazon Associate I earn from qualifying purchases.'}</p>
  </section>
  <p className="moving-hub-footer">{es?'¿Tienes preguntas sobre una mudanza a Connecticut?':'Questions about moving to Connecticut?'} <a href="mailto:JoeySellsCT@gmail.com">{es?'Escríbele a Joey':'Email Joey McVety'}</a>.</p>
 </main>;
}
