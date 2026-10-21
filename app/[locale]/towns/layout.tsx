import type {Metadata} from 'next';
import type {ReactNode} from 'react';
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{
 const {locale}=await params;
 const es=locale==='es';
 return {title:es?'169 municipios de Connecticut | Explore Connecticut Living':'Explore 169 Connecticut Towns | Explore Connecticut Living',description:es?'Explora los 169 municipios de Connecticut y filtra por nombre o condado histórico.':'Browse all 169 Connecticut towns and search by town name or historic county.'};
}
export default function TownsLayout({children}:{children:ReactNode}){return children;}
