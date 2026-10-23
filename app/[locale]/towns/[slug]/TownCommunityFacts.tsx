import type {ReactNode} from 'react';

type Props={town:string;locale:string};
const sources=[
 {id:'schools',en:'Schools & district performance',es:'Escuelas y rendimiento escolar',enBody:'View official district and school report cards, graduation rates, enrollment and performance measures. School assignments must be confirmed with the district.',esBody:'Consulta los informes oficiales de distritos y escuelas, tasas de graduación, matrícula y resultados. Confirma las asignaciones directamente con el distrito.',url:'https://edsight.ct.gov/',source:'Connecticut State Department of Education · EdSight'},
 {id:'crime',en:'Reported crime',es:'Delitos denunciados',enBody:'Explore reported offenses and annual trends. Jurisdiction, reporting practices, missing data and reporting year can affect comparisons; statistics do not predict individual safety.',esBody:'Consulta delitos denunciados y tendencias anuales. La jurisdicción, los métodos de registro, los datos faltantes y el año afectan las comparaciones; las cifras no predicen la seguridad individual.',url:'https://cde.ucr.cjis.gov/',source:'FBI Crime Data Explorer'},
 {id:'population',en:'Population & households',es:'Población y hogares',enBody:'Find population estimates, age distribution, household characteristics and housing data. Compare figures from the same census year and dataset.',esBody:'Consulta estimaciones de población, edades, características de hogares y viviendas. Compara datos del mismo año y conjunto estadístico.',url:'https://data.census.gov/',source:'U.S. Census Bureau'},
 {id:'demographics',en:'Community demographics',es:'Datos demográficos',enBody:'Explore official Census data including income, education, languages and other population characteristics. These figures describe communities, not who should live in them.',esBody:'Explora datos oficiales del Censo, como ingresos, educación, idiomas y otras características. Estas cifras describen comunidades, no quién debería vivir en ellas.',url:'https://data.census.gov/',source:'U.S. Census Bureau · American Community Survey'}
] as const;
export default function TownCommunityFacts({town,locale}:Props){
 const es=locale==='es';
 return <section className="community-facts" aria-label={es?'Datos de la comunidad':'Community facts and statistics'}>
  <span className="towns-kicker">{es?'DATOS OFICIALES DE LA COMUNIDAD':'OFFICIAL COMMUNITY RESEARCH'}</span>
  <h2>{es?`Datos y estadísticas de ${town}`:`${town} community facts & statistics`}</h2>
  <p className="community-facts-lead">{es?'Investiga las escuelas, los delitos denunciados, la población y la demografía utilizando fuentes públicas oficiales. Los datos cambian según el año y el área geográfica.':'Research schools, reported crime, population and demographics using official public sources. Data can vary by reporting year and geographic boundaries.'}</p>
  <div className="community-facts-grid">{sources.map(item=><article key={item.id} className="community-fact-card">
   <h3>{es?item.es:item.en}</h3>
   <p>{es?item.esBody:item.enBody}</p>
   <a href={item.url} target="_blank" rel="noopener noreferrer">{es?'Explorar datos oficiales':'Explore official data'} ↗</a>
   <small>{item.source}</small>
  </article>)}</div>
  <p className="community-facts-note">{es?'Estas son fuentes de investigación, no calificaciones calculadas por este sitio. No se publican cifras municipales sin verificar el año, la fuente y la cobertura. Las estadísticas no se utilizan para recomendar municipios según características protegidas.':'These are research sources, not site-generated town ratings. No town-specific figures are shown until the reporting year, source and geographic coverage are verified. Protected-class demographics are not used to rank or recommend communities.'}</p>
 </section>;
}
