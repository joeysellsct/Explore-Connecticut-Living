import type {Metadata} from 'next';
import TownMatch from './TownMatch';
import {localizedSeo} from '../../../lib/seo';
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const {locale}=await params;const es=locale==='es';return localizedSeo(locale,'town-match',es?'Encuentra tu municipio ideal | Explore Connecticut Living':'Connecticut Town Match | Explore Connecticut Living',es?'Responde cinco preguntas para explorar municipios de Connecticut según tus preferencias de vivienda y estilo de vida.':'Answer five questions to explore Connecticut towns based on your housing and lifestyle preferences.');}
export default async function TownMatchPage({params}:{params:Promise<{locale:string}>}){const {locale}=await params;return <TownMatch locale={locale}/>;}
