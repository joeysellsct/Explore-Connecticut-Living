'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import {townPhotography} from '../../lib/town-photography';

type Photo={title:string;file:string;credit:string;license:string;licenseUrl:string};
type Place={town:string;slug:string;area:'shoreline'|'inland';season:'autumn'|'year-round';photo:Photo};
const fromTown=(slug:string,town:string,area:Place['area'],season:Place['season']):Place[]=>(townPhotography[slug]||[]).map(photo=>({slug,town,area,season,photo}));
const places:Place[]=[
 ...fromTown('new-haven','New Haven','shoreline','year-round'),
 ...fromTown('milford','Milford','shoreline','autumn'),
 ...fromTown('cheshire','Cheshire','inland','autumn'),
 ...fromTown('stonington','Stonington','shoreline','year-round'),
];
const photoUrl=(file:string)=>'https://commons.wikimedia.org/wiki/Special:FilePath/'+encodeURIComponent(file)+'?width=1800';
const sourceUrl=(file:string)=>'https://commons.wikimedia.org/wiki/File:'+encodeURIComponent(file).replace(/%20/g,'_');
function shuffle<T,>(items:T[]):T[]{
 const result=[...items];
 for(let i=result.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}
 return result;
}
function ordered(area:'all'|'shoreline'|'inland',month:number){
 const filtered=places.filter(p=>area==='all'||p.area===area);
 // Autumn emphasis without misrepresenting when a photo was taken.
 const autumn=month>=9&&month<=11;
 return shuffle(filtered).sort((a,b)=>autumn?Number(b.season==='autumn')-Number(a.season==='autumn'):0);
}
const initial=places.slice(0,4);
let currentVisit:Place[]|undefined;
function visitSelection(){
 if(!currentVisit)currentVisit=ordered('all',new Date().getMonth()+1);
 return currentVisit;
}
function useVisitSelection(){
 const [selection,setSelection]=useState<Place[]>(initial);
 useEffect(()=>{setSelection(visitSelection());},[]);
 return selection;
}
export function RotatingHeroPhoto(){
 const selection=useVisitSelection();
 const hero=selection[0]||places[0];
 return <>
  <div className="rotating-hero-image" style={{backgroundImage:`linear-gradient(90deg,rgba(7,18,13,.90),rgba(7,18,13,.65) 52%,rgba(7,18,13,.2)),url("${photoUrl(hero.photo.file)}")`}} aria-hidden="true"/>
  <div className="rotating-hero-place">{hero.photo.title} · {hero.town}, CT</div>
 </>;
}
export function RotatingPhotoTiles({locale}:{locale:string}){
 const es=locale==='es';
 const selection=useVisitSelection();
 const [area,setArea]=useState<'all'|'shoreline'|'inland'>('all');
 const [cards,setCards]=useState<Place[]>(initial.slice(1,4));
 useEffect(()=>{
  const filtered=area==='all'?selection.slice(1):ordered(area,new Date().getMonth()+1);
  setCards(filtered.slice(0,3));
 },[area,selection]);
 return <div className="rotating-photo-area">
   <div className="photo-filter" aria-label={es?'Filtrar por zona':'Filter locations by area'}>
    {(['all','shoreline','inland'] as const).map(value=><button key={value} type="button" aria-pressed={area===value} onClick={()=>setArea(value)}>{value==='all'?(es?'Todo Connecticut':'All Connecticut'):value==='shoreline'?(es?'Costa':'Shoreline'):(es?'Interior':'Inland')}</button>)}
   </div>
   <div className="photo-grid">{cards.map(item=><Link key={item.photo.file} href={`/${locale}/towns/${item.slug}`} className="photo-tile rotating-photo-tile" style={{backgroundImage:`linear-gradient(180deg,rgba(8,30,38,.05),rgba(8,30,38,.45)),url("${photoUrl(item.photo.file)}")`}}>
     <span className="tile-label">{item.photo.title}<small>{item.town}, Connecticut</small></span><span className="tile-arrow" aria-hidden="true">↗</span>
   </Link>)}</div>
   <div className="photo-credits">{[selection[0],...cards].filter((item):item is Place=>Boolean(item)).map(item=><span key={item.photo.file}><a href={sourceUrl(item.photo.file)} target="_blank" rel="noopener noreferrer">{item.photo.title}</a> · {item.photo.credit} · <a href={item.photo.licenseUrl} target="_blank" rel="noopener noreferrer">{item.photo.license}</a>. </span>)}<span>{es?'Fotos: Wikimedia Commons. Recortadas para el diseño.':'Photos: Wikimedia Commons. Cropped to fit layout.'}</span></div>
  </div>;
}
