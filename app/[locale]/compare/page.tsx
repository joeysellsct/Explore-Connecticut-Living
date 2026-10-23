import type {Metadata} from 'next';
import CompareTowns from './CompareTowns';
import {localizedSeo} from '../../../lib/seo';
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{
 const {locale}=await params;
 return localizedSeo(locale,'compare',locale==='es'?'Comparar municipios de Connecticut':'Compare Connecticut Towns',locale==='es'?'Compara municipios, impuestos, servicios y fuentes oficiales.':'Compare Connecticut towns, property tax estimates, utilities and official community research sources.');
}
export default async function ComparePage({params}:{params:Promise<{locale:string}>}){
 const {locale}=await params;
 return <main className="compare-page"><CompareTowns locale={locale}/></main>;
}
