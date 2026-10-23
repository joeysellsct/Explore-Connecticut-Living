'use client';
import {useState} from 'react';
import {partnerLinks,uiElectricTowns} from '../../../../lib/moving-resources';

export default function TownMovingResources({slug,town,locale}:{slug:string;town:string;locale:string}){
 const es=locale==='es';
 const [homeValue,setHomeValue]=useState('400000');
 const [millRate,setMillRate]=useState(''); // FY2027 OPM base rates are maintained in lib/fy2027-mill-rates.ts; integrate after review.
 const validValue=homeValue.trim()!==''&&Number.isFinite(Number(homeValue))&&Number(homeValue)>=0;
 const validRate=millRate.trim()!==''&&Number.isFinite(Number(millRate))&&Number(millRate)>=0;
 const estimate=validValue&&validRate?Number(homeValue)*.7*Number(millRate)/1000:null;
 const isUI=uiElectricTowns.has(slug);
 return <section className="moving-resources">
  <span className="towns-kicker">{es?'PLANIFICA LOS COSTOS Y SERVICIOS':'PLAN YOUR COSTS & SERVICES'}</span>
  <h2>{es?`Impuestos, servicios y mudanza en ${town}`:`Property taxes, utilities & moving to ${town}`}</h2>
  <div className="moving-resources-grid">
   <article className="moving-resource-card">
    <h3>{es?'Calculadora de impuestos inmobiliarios':'Property tax estimator'}</h3>
    <p>{es?'Consulta primero la tasa municipal oficial. La tasa no se completa automáticamente hasta verificar el año fiscal y los distritos especiales.':'Look up the official municipal mill rate first. Rates are not filled automatically until the fiscal year and special taxing districts are verified.'}</p>
    <a href="https://portal.ct.gov/opm/igpp/publications/mill-rates" target="_blank" rel="noopener noreferrer">{es?'Tasas oficiales de Connecticut':'Connecticut official mill rates'} ↗</a>
    <div className="tax-fields">
     <label>{es?'Valor estimado de vivienda ($)':'Estimated home value ($)'}<input type="number" min="0" value={homeValue} onChange={e=>setHomeValue(e.target.value)}/></label>
     <label>{es?'Tasa municipal (mills)':'Verified mill rate (mills)'}<input type="number" min="0" step=".01" placeholder={es?'Ingresar tasa':'Enter rate'} value={millRate} onChange={e=>setMillRate(e.target.value)}/></label>
    </div>
    <div className="tax-estimate" aria-live="polite">{estimate===null?(es?'Ingresa una tasa para calcular.':'Enter a mill rate to calculate.'):<><strong>{estimate.toLocaleString('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0})}</strong> {es?'al año':'per year'} · {(estimate/12).toLocaleString('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0})}/{es?'mes':'month'}</>}</div>
    <small>{es?'Ejemplo basado en 70% del valor ingresado como tasación. El valor de mercado no es necesariamente el valor tasado. No incluye exenciones ni distritos especiales; verifica la factura real con el municipio.':'Illustration assumes assessment at 70% of entered value. Market value may differ from assessed value. Exemptions, special districts and actual assessments are not included. Verify actual taxes with the assessor.'}</small>
   </article>
   <article className="moving-resource-card">
    <h3>{es?'Electricidad, internet y otros servicios':'Electricity, internet & other utilities'}</h3>
    {isUI?<p>{es?'United Illuminating identifica este municipio dentro de su territorio de servicio eléctrico. Confirma el servicio en la dirección exacta.':'United Illuminating lists this municipality in its electric service territory. Confirm availability at the specific address.'} <a href="https://www.uinet.com/ourcompany/whoweare/servicearea" target="_blank" rel="noopener noreferrer">United Illuminating ↗</a></p>:<p>{es?'Confirma el proveedor eléctrico de la dirección con la empresa local o la autoridad reguladora. No se ha verificado un proveedor exclusivo para esta localidad.':'Confirm the electric utility for the exact address with the local utility or regulator. An exclusive town provider has not been verified here.'}</p>}
    <p>{es?'El servicio de internet, gas, agua, alcantarillado y seguridad puede variar por calle o propiedad. Verifica con cada proveedor antes de contratar.':'Internet, gas, water, sewer and security service can vary by street or property. Check availability with each provider before ordering.'}</p>
    <a href="https://broadbandmap.fcc.gov/" target="_blank" rel="noopener noreferrer">{es?'Consultar internet por dirección (FCC)':'Check address-level internet availability (FCC)'} ↗</a>
    <a href="https://portal.ct.gov/pura" target="_blank" rel="noopener noreferrer">{es?'Regulador de servicios de Connecticut':'Connecticut utility regulator (PURA)'} ↗</a>
   </article>
  </div>
  <div className="moving-partners">
   <h3>{es?'Recursos útiles para instalarte':'Helpful resources for getting settled'}</h3>
   <p>{es?'Recursos opcionales para mudanzas, productos del hogar e internet. Verifica los servicios y condiciones antes de contratar.':'Optional resources for moving, home essentials and internet. Check provider availability and terms before signing up.'}</p>
   {partnerLinks.length>0&&<><p className="affiliate-disclosure">{es?'Divulgación: puedo recibir una comisión si compras o te registras mediante algunos enlaces identificados como remunerados, sin costo adicional por usar el enlace.':'Disclosure: I may earn a commission if you purchase or sign up through links marked as paid referrals, at no additional cost for using the link.'}</p><div className="partner-grid">{partnerLinks.map(link=><a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer sponsored"><strong>{link.name}</strong><span>{es?link.descriptionEs:link.descriptionEn}</span>{link.affiliate&&<small>{es?'Enlace remunerado: puedo ganar una comisión':'Paid referral: I may earn a commission'}</small>}</a>)}</div>{partnerLinks.some(p=>p.name.toLowerCase().includes('amazon'))&&<p className="affiliate-disclosure">As an Amazon Associate I earn from qualifying purchases.</p>}</>}
  </div>
 </section>;
}
