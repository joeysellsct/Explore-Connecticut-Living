import TownMatch from './TownMatch';
export default async function TownMatchPage({params}:{params:Promise<{locale:string}>}){const {locale}=await params;return <TownMatch locale={locale}/>;}
