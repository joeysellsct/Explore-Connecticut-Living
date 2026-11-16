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
   <article className="moving-resource-card">
    <h2>{es?'Licencia de conducir y registro del vehículo':'Driver license & vehicle registration'}</h2>
    <p>{es?'Si te mudas desde otro estado, revisa con el Departamento de Vehículos Motorizados de Connecticut los requisitos actuales para transferir la licencia y registrar el vehículo. Consulta los documentos, plazos, inspecciones y citas directamente con el DMV; los requisitos dependen de tu situación.':'Moving from another state? Review Connecticut DMV requirements for transferring your driver license and registering your vehicle. Check documents, deadlines, inspections and appointments directly with the DMV; requirements depend on your situation.'}</p>
    <p>{es?'¿Cambiaste de domicilio y ya tienes una licencia, identificación de no conductor o registro de vehículo de Connecticut? El DMV indica que debes actualizar tu dirección dentro de las 48 horas posteriores al cambio. La actualización de dirección es gratuita y puede realizarse en línea para personas elegibles; confirma los pasos actuales con el DMV.':'Already have a Connecticut driver license, non-driver ID or vehicle registration and changing address? The DMV says to update your address within 48 hours of moving. Address changes are free and eligible residents can complete them online; confirm the current steps with the DMV.'}</p>
    <a href="https://portal.ct.gov/dmv/licenses-permits-ids/change-driver-license" target="_blank" rel="noopener noreferrer">{es?'Actualizar la dirección con el DMV (guía oficial)':'Update your address with the DMV (official guidance)'} ↗</a>
    <a href="https://portal.ct.gov/dmv" target="_blank" rel="noopener noreferrer">{es?'Departamento de Vehículos Motorizados de Connecticut':'Connecticut DMV official services'} ↗</a>
    <a href="https://portal.ct.gov/services/driving-and-transportation/vehicle-registration-and-title/register-your-vehicle" target="_blank" rel="noopener noreferrer">{es?'Guía oficial para registrar un vehículo':'Official vehicle registration guidance'} ↗</a>
   </article>
   <article className="moving-resource-card">
    <h2>{es?'Ayuda para vivienda, alimentos y servicios públicos':'Housing, food & utility assistance'}</h2>
    <p>{es?'Connecticut 211 permite buscar recursos comunitarios por ciudad o código postal, incluidos programas de vivienda, alimentos y ayuda para pagar servicios públicos. La disponibilidad y los requisitos de cada programa pueden cambiar; consulta directamente con el proveedor antes de hacer planes. También puedes marcar 2-1-1 dentro de Connecticut.':'Connecticut 211 lets you search community resources by town or ZIP code, including housing, food and utility-payment assistance. Program availability and eligibility can change; check directly with each provider before making plans. You can also dial 2-1-1 within Connecticut.'}</p>
    <a href="https://www.211ct.org/" target="_blank" rel="noopener noreferrer">{es?'Buscar recursos locales en Connecticut 211':'Find local resources through Connecticut 211'} ↗</a>
    <a href="https://uwc.211ct.org/categorysearch/utility-assistance/" target="_blank" rel="noopener noreferrer">{es?'Explorar programas de ayuda para servicios públicos':'Explore utility assistance programs'} ↗</a>
   </article>
   <article className="moving-resource-card">
    <h2>{es?'Registro electoral y cambio de domicilio':'Voter registration & address updates'}</h2>
    <p>{es?'Al mudarte dentro de Connecticut o desde otro estado, consulta la Secretaría del Estado para registrarte o actualizar tu domicilio electoral. Comprueba los requisitos, plazos y lugar de votación con los funcionarios electorales de tu municipio; no supongas que el cambio de dirección del DMV actualiza tu inscripción.':'Moving within Connecticut or arriving from another state? Consult the Secretary of the State about registering or updating your voter address. Confirm eligibility, deadlines and polling location with your town election officials; do not assume a DMV address change updates voter registration.'}</p>
    <a href="https://portal.ct.gov/sots/election-services/voter-information/voter-registration-information" target="_blank" rel="noopener noreferrer">{es?'Información oficial de registro electoral (CT)':'Official Connecticut voter registration information'} ↗</a>
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
