// Add approved affiliate destinations here only after verifying the destination and program terms.
// Never substitute a provider's general homepage for an affiliate tracking link.
export type PartnerLink={name:string;url:string;category:'moving'|'internet'|'security'|'shopping';descriptionEn:string;descriptionEs:string;affiliate:boolean};
export const partnerLinks:PartnerLink[]=[
 {name:"Joey's Amazon Storefront",url:'https://www.amazon.com/shop/influencer-9242d3e9?linkCode=ll2&tag=josephf.mcvet-20&language=en_US',category:'shopping',descriptionEn:'Shop Joey’s curated home essentials, moving supplies and useful finds on Amazon.',descriptionEs:'Explora los productos seleccionados por Joey para el hogar y la mudanza en Amazon.',affiliate:true},
];
export const uiElectricTowns=new Set(['ansonia','derby','east-haven','hamden','milford','new-haven','north-branford','north-haven','orange','west-haven','woodbridge','bridgeport','easton','fairfield','trumbull','shelton','stratford']);
