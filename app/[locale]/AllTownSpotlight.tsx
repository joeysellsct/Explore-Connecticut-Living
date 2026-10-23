'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import {connecticutTowns} from '../../lib/connecticut-towns';
import {townPhotography} from '../../lib/town-photography';
export default function AllTownSpotlight({locale}:{locale:string}){
 const es=locale==='es';
 const [start,setStart]=useState(0);
 useEffect(()=>{setStart(Math.floor(Math.random()*connecticutTowns.length));},[]);
 const towns=Array.from({length:4},(_,i)=>connecticutTowns[(start+i)%connecticutTowns.length]);
 return <div className="all-town-spotlight">
  <div className="all-town-spotlight-controls"><span>{es?'Los 169 municipios tienen su turno':'All 169 towns take a turn'}</span><div><button type="button" onClick={()=>setStart(s=>(s+165)%169)}>←</button><button type="button" onClick={()=>setStart(s=>(s+4)%169)}>{es?'Siguientes':'Next towns'} →</button></div></div>
  <div className="magazine-town-grid">{towns.map(t=>{
   const photo=townPhotography[t.slug]?.[0];
   const photoUrl=photo?'https://commons.wikimedia.org/wiki/Special:FilePath/'+encodeURIComponent(photo.file)+'?width=800':null;
   return <article key={t.slug} className="magazine-town-card" style={photoUrl?{backgroundImage:'linear-gradient(180deg,rgba(10,40,50,.08),rgba(10,40,50,.9)),url("'+photoUrl+'")',backgroundSize:'cover',backgroundPosition:'center'}:undefined}>
    <span className="magazine-town-index">{t.county} COUNTY</span>
    <div><small>CONNECTICUT</small><h3>{t.name}</h3><Link className="magazine-town-open" href={'/'+locale+'/towns/'+t.slug}>{es?'Explorar municipio':'Explore town'} ↗</Link></div>
    {photo&&<small className="magazine-town-credit">{photo.title} · {photo.credit} · <a href={photo.licenseUrl} target="_blank" rel="noopener noreferrer">{photo.license}</a></small>}
   </article>
  })}</div>
  <p className="all-town-photo-note">{es?'Solo usamos fotos con ubicación y licencia documentadas.':'Only photos with documented locations and licenses are used.'}</p>
 </div>;
}
