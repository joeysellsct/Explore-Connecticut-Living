import Link from 'next/link';
import { notFound } from 'next/navigation';
import { connecticutTowns } from '../../../../lib/connecticut-towns';

export function generateStaticParams(){return ['en','es'].flatMap(locale=>connecticutTowns.map(t=>({locale,slug:t.slug})));}
export default async function TownProfile({params}:{params:Promise<{locale:string;slug:string}>}){
  const {locale,slug}=await params;
  const town=connecticutTowns.find(t=>t.slug===slug);
  if(!town || !['en','es'].includes(locale))notFound();
  const es=locale==='es';
  return <main className="town-profile"><div className="towns-wrap"><Link className="town-back" href={`/${locale}/towns`}>← {es?'Todos los municipios':'All Connecticut towns'}</Link><span className="towns-kicker">{town.county.toUpperCase()} COUNTY · CONNECTICUT</span><h1>{town.name}, Connecticut</h1><p className="town-profile-lead">{es?'Explora este municipio y encuentra ayuda local para tu próxima mudanza.':'Explore this Connecticut town and get local guidance for your next move.'}</p><div className="town-profile-details"><div><small>{es?'Condado histórico':'Historic county'}</small><strong>{town.county} County</strong></div><div><small>{es?'Municipio':'Municipality'}</small><strong>{town.name}</strong></div></div><section className="town-profile-coming"><h2>{es?'Próximamente: guía de la comunidad':'Town guide coming soon'}</h2><p>{es?'Estamos preparando información verificada sobre vivienda, transporte, escuelas y vida local.':'We’re preparing verified information on housing, commuting, schools, and local life. We won’t publish unverified statistics.'}</p></section><div className="town-profile-contact"><h2>{es?'¿Interesado en vivir aquí?':'Interested in living here?'}</h2><p>{es?'Habla con Joey McVety, agente de bienes raíces con licencia en Connecticut.':'Talk with Joey McVety, a real estate agent licensed in Connecticut.'}</p><a className="button-primary" href={`mailto:JoeySellsCT@gmail.com?subject=${encodeURIComponent('Question about '+town.name+', CT')}`}>{es?'Enviar correo a Joey':'Ask Joey about this town'} ↗</a><a className="button-outline" href="tel:+12036277262">203-627-7262</a></div></div></main>;
}
