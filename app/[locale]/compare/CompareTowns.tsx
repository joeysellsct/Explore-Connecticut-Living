'use client';
import {useState} from 'react';
import Link from 'next/link';
import {connecticutTowns} from '../../../lib/connecticut-towns';
import {uiElectricTowns} from '../../../lib/moving-resources';
const opm='https://data.ct.gov/Local-Government/Mill-Rates-for-FY-2014-2027/emyx-j53e';
export default function CompareTowns({locale}:{locale:string}){
 const es=locale==='es';
 const [towns,setTowns]=useState(['east-haven','milford','west-haven']);
 const [rates,setRates]=useState(['','','']);
 const [value,setValue]=useState('400000');
 const validValue=value.trim()!==''&&Number.isFinite(Number(value))&&Number(value)>=0;
 const money=(n:number)=>n.toLocaleString('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0});
 return <section className="compare-tool">
  <h1>{es?'Compara municipios de Connecticut':'Compare Connecticut towns'}</h1>
  <p>{es?'Compara hasta tres municipios usando las mismas fuentes oficiales. No asignamos puntuaciones a las comunidades ni recomendamos áreas según características protegidas.':'Explore up to three towns side by side using the same official research sources. We do not score communities or recommend areas based on protected characteristics.'}</p>
  <div className="compare-value"><label>{es?'Valor de vivienda para estimar impuestos ($)':'Home value for tax illustration ($)'} <input type="number" min="0" value={value} onChange={e=>setValue(e.target.value)}/></label></div>
  <div className="compare-columns">{towns.map((slug,i)=>{
   const town=connecticutTowns.find(t=>t.slug===slug);
   const rate=Number(rates[i]);
   const validRate=rates[i].trim()!==''&&Number.isFinite(rate)&&rate>=0;
   const tax=validValue&&validRate?Number(value)*.7*rate/1000:null;
   return <article className="compare-column" key={i}>
    <label>{es?'Municipio':'Town'} {i+1}<select value={slug} onChange={e=>setTowns(prev=>prev.map((v,j)=>i===j?e.target.value:v))}>{connecticutTowns.map(t=><option key={t.slug} value={t.slug}>{t.name}</option>)}</select></label>
    <h2>{town?.name}</h2>
    <p>{es?'Condado histórico':'Historic county'}: {town?.county}</p>
    <label>{es?'Tasa municipal verificada (mills)':'Verified real-property mill rate'}<input type="number" min="0" step=".001" placeholder={es?'Consulta la fuente oficial':'Look up official rate'} value={rates[i]} onChange={e=>setRates(prev=>prev.map((v,j)=>i===j?e.target.value:v))}/></label>
    <p className="compare-tax">{tax===null?(es?'Introduce la tasa para estimar':'Enter the rate to estimate'):money(tax)+(es?' / año':' / year')}</p>
    <p>{es?'Servicio eléctrico':'Electric service'}: {uiElectricTowns.has(slug)?'United Illuminating':(es?'Verifica el proveedor de la dirección':'Verify provider by address')}</p>
    <div className="compare-links">
     <a href={opm} target="_blank" rel="noopener noreferrer">{es?'Tasas fiscales FY2027 (OPM)':'FY2027 tax rates (OPM)'} ↗</a>
     <a href="https://edsight.ct.gov/" target="_blank" rel="noopener noreferrer">{es?'Datos escolares (EdSight)':'School data (EdSight)'} ↗</a>
     <a href="https://cde.ucr.cjis.gov/" target="_blank" rel="noopener noreferrer">{es?'Delitos denunciados (FBI)':'Reported crime (FBI)'} ↗</a>
     <a href="https://data.census.gov/" target="_blank" rel="noopener noreferrer">{es?'Población y viviendas (Censo)':'Population and housing (Census)'} ↗</a>
     <a href="https://broadbandmap.fcc.gov/" target="_blank" rel="noopener noreferrer">{es?'Internet por dirección (FCC)':'Internet by address (FCC)'} ↗</a>
     <Link href={`/${locale}/towns/${slug}`}>{es?'Ver guía del municipio':'View town guide'} →</Link>
    </div>
   </article>
  })}</div>
  <p className="compare-caveat">{es?'Estimación ilustrativa: 70% del valor ingresado multiplicado por la tasa y dividido entre 1,000. No se autocompletan tasas no verificadas. Los distritos especiales, exenciones y tasaciones reales pueden cambiar la factura. Confirma los datos con el municipio.':'Illustrative estimate: 70% of entered home value times mill rate divided by 1,000. Unverified rates are never auto-filled. Special districts, exemptions and actual assessments can change tax bills. Confirm with the municipality.'}</p>
 </section>;
}
