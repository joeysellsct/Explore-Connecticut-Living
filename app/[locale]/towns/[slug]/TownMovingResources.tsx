'use client';
import {useEffect,useState} from 'react';
import {partnerLinks,uiElectricTowns} from '../../../../lib/moving-resources';
import {fy2027MillRates,fy2027MillRateSource} from '../../../../lib/fy2027-mill-rates';

export default function TownMovingResources({slug,town,locale}:{slug:string;town:string;locale:string}){
 const es=locale==='es';
 const [homeValue,setHomeValue]=useState('400000');
 const verifiedRate=fy2027MillRates[slug];
 const [millRate,setMillRate]=useState(()=>verifiedRate===undefined?'':String(verifiedRate));
 useEffect(()=>{setMillRate(verifiedRate===undefined?'':String(verifiedRate));},[slug,verifiedRate]);
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
    <p>{verifiedRate===undefined?(es?'No tenemos una tasa municipal FY2027 verificada para este municipio. Consulta la fuente oficial e ingresa la tasa de bienes raíces correspondiente.':'A verified FY2027 municipal rate is not yet available here. Check the official source and enter the applicable real estate rate.'):(es?`Tasa municipal base FY2027: ${verifiedRate} mills (lista de tasación del 1 de octubre de 2025). Puedes editarla si corresponde un distrito tributario adicional.`:`FY2027 municipal base rate: ${verifiedRate} mills (October 1, 2025 Grand List). You can edit the rate if additional district taxes apply.`)}</p>
    <a href={fy2027MillRateSource} target="_blank" rel="noopener noreferrer">{es?'Fuente oficial OPM, FY2027':'Official Connecticut OPM FY2027 data'} ↗</a>
    <div className="tax-fields">
     <label>{es?'Valor estimado de vivienda ($)':'Estimated home value ($)'}<input type="number" min="0" value={homeValue} onChange={e=>setHomeValue(e.target.value)}/></label>
     <label>{es?'Tasa municipal (mills)':'Verified mill rate (mills)'}<input type="number" min="0" step=".01" placeholder={es?'Ingresar tasa':'Enter rate'} value={millRate} onChange={e=>setMillRate(e.target.value)}/></label>
    </div>
    <div className="tax-estimate" aria-live="polite">{estimate===null?(es?'Ingresa una tasa para calcular.':'Enter a mill rate to calculate.'):<><strong>{estimate.toLocaleString('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0})}</strong> {es?'al año':'per year'} · {(estimate/12).toLocaleString('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0})}/{es?'mes':'month'}</>}</div>
    <small>{es?'Estimación ilustrativa para bienes raíces, no vehículos, con una tasación supuesta del 70% del valor ingresado. El valor de mercado puede diferir del valor tasado. No incluye exenciones ni impuestos de distritos especiales; confirma la factura real con el municipio.':'Illustrative real estate estimate, not motor vehicle taxes, assuming assessment at 70% of entered value. Market value may differ from assessed value. Exemptions and special district levies are excluded; confirm the actual bill with the municipality.'}</small>
    {slug==='milford'&&<p className="town-tax-district-note">{es?'Aviso para Milford: según los datos de OPM para FY2027, algunas propiedades pueden pagar tasas adicionales de distrito: Woodmont Borough (0,5205 mills), Laurel Beach Association (3,34 mills) o Morningside Association (0,0738 mills). No están incluidas en la estimación base. Confirma qué distrito corresponde a la dirección y el importe real con el recaudador de impuestos de Milford.':'Milford district notice: Connecticut OPM FY2027 data lists additional rates for certain parcels in Woodmont Borough (0.5205 mills), Laurel Beach Association (3.34 mills) or Morningside Association (0.0738 mills). These are not included in the base estimate. Confirm the district for the address and the actual bill with Milford’s Tax Collector.'}</p>}
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
   {partnerLinks.length>0&&<><p className="affiliate-disclosure">{es?'Divulgación: puedo recibir una comisión si compras o te registras mediante algunos enlaces identificados como remunerados, sin costo adicional por usar el enlace.':'Disclosure: I may earn a commission if you purchase or sign up through links marked as paid referrals, at no additional cost for using the link.'}</p><div className="partner-grid">{partnerLinks.map(link=><a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer sponsored"><strong>{link.name}</strong><span>{es?link.descriptionEs:link.descriptionEn}</span>{link.affiliate&&<small>{es?'Enlace remunerado: puedo ganar una comisión':'Paid referral: I may earn a commission'}</small>}</a>)}</div>{partnerLinks.some(p=>p.name.toLowerCase().includes('amazon'))&&<p className="affiliate-disclosure">{es?'Como Asociado de Amazon, obtengo ingresos por las compras que cumplen los requisitos.':'As an Amazon Associate I earn from qualifying purchases.'}</p>}</>}
  </div>
 </section>;
}
