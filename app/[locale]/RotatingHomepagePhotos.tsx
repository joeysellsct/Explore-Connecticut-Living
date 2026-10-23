'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import {townPhotography} from '../../lib/town-photography';

type Place={town:string;slug:string;photo:typeof townPhotography[string][number]};
const places:Place[]=[
 ...townPhotography['new-haven'].map(photo=>({town:'New Haven',slug:'new-haven',photo})),
 ...townPhotography['cheshire'].map(photo=>({town:'Cheshire',slug:'cheshire',photo})),
];
const photoUrl=(file:string)=>'https://commons.wikimedia.org/wiki/Special:FilePath/'+encodeURIComponent(file)+'?width=1800';
const sourceUrl=(file:string)=>'https://commons.wikimedia.org/wiki/File:'+encodeURIComponent(file).replace(/%20/g,'_');
const initial=[0,1,2,3];
let browserSelection:number[]|undefined;
function getSelection(){
 if(!browserSelection){
  const indices=places.map((_,i)=>i);
  for(let i=indices.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[indices[i],indices[j]]=[indices[j],indices[i]];}
  browserSelection=indices;
 }
 return browserSelection;
}
function useSelection(){
 const [indices,setIndices]=useState(initial);
 useEffect(()=>{setIndices(getSelection());},[]);
 return indices;
}
export function RotatingHeroPhoto(){
 const indices=useSelection();
 const item=places[indices[0]];
 return <div className="rotating-hero-image" style={{backgroundImage:`linear-gradient(90deg,rgba(7,18,13,.90),rgba(7,18,13,.65) 52%,rgba(7,18,13,.2)),url("${photoUrl(item.photo.file)}")`}} aria-hidden="true"/>;
}
export function RotatingPhotoTiles({locale}:{locale:string}){
 const indices=useSelection();
 const es=locale==='es';
 return <div className="rotating-photo-area">
  <div className="photo-grid">{indices.slice(1,4).map((index)=>{
   const item=places[index];
   return <Link key={item.photo.file} href={`/${locale}/towns/${item.slug}`} className="photo-tile rotating-photo-tile" style={{backgroundImage:`linear-gradient(180deg,rgba(8,30,38,.05),rgba(8,30,38,.45)),url("${photoUrl(item.photo.file)}")`}}>
    <span className="tile-label">{item.photo.title}<small>{item.town}, Connecticut</small></span>
    <span className="tile-arrow" aria-hidden="true">↗</span>
   </Link>;
  })}</div>
  <div className="photo-credits">{indices.map((index)=>{
   const item=places[index];
   return <span key={item.photo.file}><a href={sourceUrl(item.photo.file)} target="_blank" rel="noopener noreferrer">{item.photo.title}</a> · {item.photo.credit} · <a href={item.photo.licenseUrl} target="_blank" rel="noopener noreferrer">{item.photo.license}</a>. </span>;
  })}<span>{es?'Imágenes de Wikimedia Commons.':'Images via Wikimedia Commons.'}</span></div>
 </div>;
}
