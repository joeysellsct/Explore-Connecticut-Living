import Link from 'next/link';

const production = [
  {value:'37',en:'Closed Transactions',es:'Transacciones cerradas'},
  {value:'$6.62M',en:'Combined Property Sale Prices',es:'Valor total de propiedades vendidas'},
  {value:'23',en:'Property Sales',es:'Propiedades vendidas'},
  {value:'14',en:'Rentals Closed',es:'Alquileres cerrados'}
];

export default function JoeyProductionStats({locale,compact=false}:{locale:string;compact?:boolean}){
 const es=locale==='es';
 return <section className={compact?'joey-stats joey-stats-compact':'joey-stats'} aria-labelledby={compact?'joey-stats-home-title':'joey-stats-about-title'}>
  <div className="joey-stats-heading">
   <span className="eyebrow dark">{es?'EXPERIENCIA INMOBILIARIA':'REAL ESTATE TRACK RECORD'}</span>
   <h2 id={compact?'joey-stats-home-title':'joey-stats-about-title'}>{es?'Mis resultados en bienes raíces':'My Real Estate Track Record'}</h2>
  </div>
  <div className="joey-stats-grid">{production.map(stat=><div className="joey-stat" key={stat.en}><strong>{stat.value}</strong><span>{es?stat.es:stat.en}</span></div>)}</div>
  <p className="joey-stats-note">{es?'Según el informe de producción de SmartMLS hasta el 23 de octubre de 2026. Incluye ventas residenciales, viviendas móviles, terrenos y alquileres. Cada operación MLS se cuenta una sola vez, aunque haya representado a ambas partes. El volumen de ventas suma los precios de cierre de las propiedades, no las comisiones ni el volumen acreditado por MLS.':'Based on SmartMLS production records through October 23, 2026. Includes residential, mobile-home, land, and rental transactions. Each MLS transaction is counted once, even when representing both sides. Property sales volume is the sum of property closing prices, not commissions or MLS agent-credited volume.'}</p>
  {compact&&<Link href={`/${locale}/about`} className="meet-bio-link">{es?'Conoce más sobre Joey y su experiencia':'Meet Joey and read his full story'} <span aria-hidden="true">→</span></Link>}
 </section>;
}
