'use client';

import { useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import { connecticutTowns, historicCounties } from '../../../lib/connecticut-towns';

export default function Towns() {
  const params = useParams();
  const es = params.locale === 'es';
  const [search, setSearch] = useState('');
  const [county, setCounty] = useState('all');
  const results = useMemo(() => connecticutTowns.filter(t => (county === 'all' || t.county === county) && t.name.toLowerCase().includes(search.trim().toLowerCase())), [search, county]);
  return <main className="town-directory">
    <section className="towns-hero">
      <div className="towns-wrap"><span className="towns-kicker">{es ? 'DESCUBRE CONNECTICUT' : 'EXPLORE CONNECTICUT'}</span>
      <h1>{es ? 'Encuentra tu comunidad.' : 'Find your Connecticut town.'}</h1>
      <p>{es ? 'Explora los 169 municipios de Connecticut. Busca por nombre o filtra por condado histórico.' : 'Explore all 169 Connecticut towns. Search by name or browse by historic county to discover where your next chapter could begin.'}</p>
      <div className="towns-stats"><span><strong>169</strong> {es ? 'municipios' : 'towns'}</span><span><strong>8</strong> {es ? 'condados históricos' : 'historic counties'}</span></div></div>
    </section>
    <section className="towns-wrap towns-content" aria-label={es ? 'Directorio de municipios' : 'Town directory'}>
      <div className="towns-featured"><div><span className="towns-kicker">{es?'EMPIEZA A EXPLORAR':'START EXPLORING'}</span><h2>{es?'Comunidades para descubrir':'Featured Connecticut towns'}</h2><p>{es?'Empieza con estas comunidades y descubre sus guías locales.':'Start with these communities and discover their local guides.'}</p></div><div className="towns-featured-links">{[{name:'West Haven',slug:'west-haven'},{name:'Milford',slug:'milford'},{name:'New Haven',slug:'new-haven'},{name:'Branford',slug:'branford'},{name:'East Haven',slug:'east-haven'},{name:'Stamford',slug:'stamford'}].map(t=><a key={t.slug} href={`/${es?'es':'en'}/towns/${t.slug}`}>{t.name} <span aria-hidden="true">↗</span></a>)}</div></div>
      <div className="towns-controls"><label className="towns-search-label">{es ? 'Buscar municipio' : 'Search for a town'}<input type="search" value={search} onChange={e=>setSearch(e.target.value)} placeholder={es ? 'Ej. Milford, New Haven...' : 'Try Milford, New Haven, Stamford...'} /></label><label className="towns-county-label">{es ? 'Condado histórico' : 'Historic county'}<select value={county} onChange={e=>setCounty(e.target.value)}><option value="all">{es ? 'Todos los condados' : 'All counties'}</option>{historicCounties.map(c=><option value={c} key={c}>{es ? `Condado de ${c}` : `${c} County`}</option>)}</select></label></div>
      <div className="towns-filter-pills" aria-label={es ? 'Filtrar por condado' : 'Filter by county'}><button type="button" className={county==='all'?'active':''} onClick={()=>setCounty('all')}>{es?'Todos':'All towns'}</button>{historicCounties.map(c=><button type="button" key={c} className={county===c?'active':''} onClick={()=>setCounty(c)}>{c}</button>)}</div>
      <div className="towns-results-header"><h2>{es ? 'Directorio de municipios' : 'Town directory'}</h2><span aria-live="polite">{results.length} {es ? 'resultados' : results.length===1?'town':'towns'}</span></div>
      {results.length ? <div className="towns-grid">{results.map(t=><a key={t.fips} href={`/${es?'es':'en'}/towns/${t.slug}`} className="town-card"><span className="town-card-icon" aria-hidden="true">⌂</span><span className="town-card-text"><strong>{t.name}</strong><small>{es ? `Condado de ${t.county}` : `${t.county} County`}</small></span><span className="town-card-arrow" aria-hidden="true">↗</span></a>)}</div> : <div className="towns-empty"><h3>{es ? 'No se encontraron municipios' : 'No towns found'}</h3><p>{es ? 'Prueba otra búsqueda o condado.' : 'Try a different search or county.'}</p><button type="button" onClick={()=>{setSearch('');setCounty('all')}}>{es ? 'Borrar filtros' : 'Clear filters'}</button></div>}
      <p className="towns-source">{es ? 'Fuente de nombres y condados históricos:' : 'Town names and historic county assignments sourced from:'} <a href="https://github.com/CT-Data-Collaborative/ct-town-county-fips-list" target="_blank" rel="noopener noreferrer">CT Data Collaborative</a>. {es ? 'Los condados históricos no son las regiones de planificación actuales.' : 'Historic counties are different from today’s Census planning-region county equivalents.'}</p>
    </section>
    <section className="towns-cta"><h2>{es ? '¿Pensando en mudarte a Connecticut?' : 'Thinking about moving to Connecticut?'}</h2><p>{es ? 'Joey McVety puede ayudarte a explorar tus opciones.' : 'Joey McVety can help you explore your options across the state.'}</p><a href="mailto:JoeySellsCT@gmail.com" className="button-primary">{es ? 'Contactar a Joey' : 'Contact Joey'} ↗</a></section>
  </main>;
}
