// Add approved affiliate destinations here only after verifying the destination and program terms.
// Never substitute a provider's general homepage for an affiliate tracking link.
export type PartnerLink={name:string;url:string;category:'moving'|'internet'|'security'|'shopping';descriptionEn:string;descriptionEs:string;affiliate:boolean};
export const partnerLinks:PartnerLink[]=[
 {name:'Frontier Internet',url:'https://frontier.com/ftr-buy?user_id=122784&affiliateKey=c75de3d7-1f0b-4d0d-8603-02aa8517357f&utm_campaign=customerreferral&utm_term=frontier-cart&utm_medium=click-to-copy&utm_source=web',category:'internet',descriptionEn:'Check Frontier internet plans and availability at your exact address. Referral link; service and offers vary by location.',descriptionEs:'Consulta los planes de internet de Frontier y la disponibilidad en tu dirección. Enlace de referido; los servicios y ofertas varían según la ubicación.',affiliate:true},
 {name:"Joey's Amazon Storefront",url:'https://www.amazon.com/shop/influencer-9242d3e9?linkCode=ll2&tag=josephf.mcvet-20&language=en_US',category:'shopping',descriptionEn:'Shop Joey’s curated home essentials, moving supplies and useful finds on Amazon.',descriptionEs:'Explora los productos seleccionados por Joey para el hogar y la mudanza en Amazon.',affiliate:true},
];
export const uiElectricTowns=new Set(['ansonia','derby','east-haven','hamden','milford','new-haven','north-branford','north-haven','orange','west-haven','woodbridge','bridgeport','easton','fairfield','trumbull','shelton','stratford']);
