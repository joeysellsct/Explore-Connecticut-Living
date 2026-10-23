// Add approved affiliate destinations here only after verifying the destination and program terms.
// Never substitute a provider's general homepage for an affiliate tracking link.
export type PartnerLink={name:string;url:string;category:'moving'|'internet'|'security'|'shopping';descriptionEn:string;descriptionEs:string;affiliate:boolean};
export const partnerLinks:PartnerLink[]=[
 // Example when approved: {name:'...',url:'https://...',category:'shopping',descriptionEn:'...',descriptionEs:'...',affiliate:true}
];
export const uiElectricTowns=new Set(['ansonia','derby','east-haven','hamden','milford','new-haven','north-branford','north-haven','orange','west-haven','woodbridge','bridgeport','easton','fairfield','trumbull','shelton','stratford']);
