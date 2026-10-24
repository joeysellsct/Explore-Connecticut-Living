// Source-checked public municipal and state resources. Extend town by town.
// These are information portals, not guarantees about an individual property's records.
export type TownOfficialLink = {en:string;es:string;url:string};
export const townOfficialLinks:Record<string,TownOfficialLink[]> = {
 // Guilford links checked 2026-10-24 against the official Guilford municipal site navigation and linked portals; GIS is not a survey. Verify tax bills, utility connections and permits by parcel.
 'guilford': [
  {"en":"Town of Guilford: municipal departments and resident services","es":"Municipio de Guilford: departamentos y servicios para residentes","url":"https://www.guilfordct.gov/"},
  {"en":"Assessor: property valuation, 2026 revaluation and assessment records","es":"Tasador: valoración, reevaluación de 2026 y registros de tasación","url":"https://www.guilfordct.gov/town_departments/assessor/index.php"},
  {"en":"Tax Collector: tax bills, payment guidance and parcel-specific charges","es":"Recaudación de impuestos: facturas, pagos y cargos por parcela","url":"https://www.guilfordct.gov/town_departments/tax_collector/index.php"},
  {"en":"Town Clerk: deeds, recorded land documents and title research","es":"Secretaría municipal: escrituras, documentos registrados y búsqueda de títulos","url":"https://www.guilfordct.gov/town_departments/town_clerk/index.php"},
  {"en":"Building Department: permits, inspections and permit fees","es":"Departamento de construcción: permisos, inspecciones y tarifas","url":"https://www.guilfordct.gov/town_departments/building_department/index.php"},
  {"en":"Planning and Zoning: permitted uses, regulations and applications","es":"Planificación y zonificación: usos permitidos, normas y solicitudes","url":"https://www.guilfordct.gov/town_departments/planning___zoning/index.php"},
  {"en":"Guilford GIS: parcel maps and land-use research (not a legal survey)","es":"GIS de Guilford: mapas de parcelas y uso del suelo (no es un plano legal)","url":"https://guilford.mapxpress.net/portal.asp"},
  {"en":"Inland Wetlands: regulated areas and application requirements","es":"Humedales interiores: áreas reguladas y requisitos de solicitudes","url":"https://www.guilfordct.gov/town_departments/inland_wetlands_natural_resources/index.php"},
  {"en":"Health Department: septic-system records and inspection guidance","es":"Departamento de Salud: registros de sistemas sépticos y guía de inspección","url":"https://www.guilfordct.gov/town_departments/health_department/index.php"},
  {"en":"Engineering Department: flood hazards, drainage and public works permits","es":"Ingeniería municipal: riesgo de inundación, drenaje y permisos de obras","url":"https://www.guilfordct.gov/town_departments/engineering_department/index.php"},
  {"en":"Guilford Parks and Recreation: facilities, activities and resident programs","es":"Parques y Recreación de Guilford: instalaciones, actividades y programas","url":"https://www.guilfordparkrec.com/"},
 ],
 // Hamden links checked 2026-10-24 against Town of Hamden, CT Parks, RWA, GNHWPCA and Eli Whitney Museum sources. Verify parcel-level service, taxes and rules with each agency.
 'hamden': [
  {"en":"Town of Hamden: official municipal services","es":"Municipio de Hamden: servicios oficiales","url":"https://www.hamden.com/"},
  {"en":"Assessor: assessments, property cards and valuation questions","es":"Tasador: tasaciones, fichas y consultas de valor","url":"https://www.hamden.com/168/Assessors-Office"},
  {"en":"Property card lookup (Vision): parcel assessment information","es":"Consulta de fichas inmobiliarias (Vision): tasaciones por parcela","url":"https://gis.vgsi.com/hamdenct/"},
  {"en":"Tax Office: FY 2026–27 mill rate, bills and revaluation phase-in","es":"Oficina de impuestos: tasa 2026–27, facturas y aplicación gradual de la reevaluación","url":"https://www.hamden.com/240/Tax-Office"},
  {"en":"Town Clerk: deeds, land records and IQS search guidance","es":"Secretaría municipal: escrituras, registros inmobiliarios y búsqueda IQS","url":"https://www.hamden.com/243/Town-Clerk"},
  {"en":"Building Department: permits, inspections and application rules","es":"Departamento de construcción: permisos, inspecciones y solicitudes","url":"https://www.hamden.com/174/Building"},
  {"en":"Planning and Zoning: permitted uses, wetlands and zoning questions","es":"Planificación y zonificación: usos permitidos, humedales y consultas","url":"https://www.hamden.com/199/Planning-Zoning"},
  {"en":"Hamden GIS: map layers and parcel research (not a survey)","es":"GIS de Hamden: mapas y parcelas (no sustituye un plano legal)","url":"https://www.hamdengis.com/"},
  {"en":"Parks and Facilities: municipal parks and recreation sites","es":"Parques e instalaciones: áreas recreativas municipales","url":"https://www.hamden.com/229/Parks-Facilities"},
  {"en":"Brooksvale Park: farm-inspired park and trail information","es":"Brooksvale Park: parque rural, granja y senderos","url":"https://hamden.com/570/Welcome-to-Brooksvale-Park"},
  {"en":"Sleeping Giant State Park: official trails and visitor guidance","es":"Sleeping Giant State Park: senderos y recomendaciones oficiales","url":"https://ctparks.com/parks/sleeping-giant-state-park"},
  {"en":"Regional Water Authority: water service and customer care","es":"Autoridad Regional del Agua: servicio y atención al cliente","url":"https://www.rwater.com/"},
  {"en":"Greater New Haven WPCA: sewer service, connection and billing questions","es":"Autoridad regional GNHWPCA: alcantarillado, conexiones y facturación","url":"https://gnhwpca.com/"},
  {"en":"Eli Whitney Museum & Workshop: visitor and educational programs","es":"Museo y Taller Eli Whitney: visitas y programas educativos","url":"https://www.eliwhitney.org/visit"},
 ],
 // East Haven municipal, state park and museum pages checked 2026-10-24; confirm parcel-level records and current park/permit rules with each agency.
 'east-haven': [
  {"en":"Town of East Haven: municipal services","es":"Municipio de East Haven: servicios municipales","url":"https://www.easthaven-ct.gov/"},
  {"en":"Assessor: property records, assessments and 2025 Grand List mill rates","es":"Tasador: fichas, tasaciones y tasas del padrón fiscal de 2025","url":"https://www.easthaven-ct.gov/162/Assessor"},
  {"en":"Tax Department: property bills, payment information and rates","es":"Oficina de impuestos: facturas, pagos y tasas inmobiliarias","url":"https://www.easthaven-ct.gov/196/Tax-Department"},
  {"en":"Town Clerk: recorded deeds, maps and land records","es":"Secretaría municipal: escrituras, planos y registros inmobiliarios","url":"https://www.easthaven-ct.gov/201/Town-Clerk"},
  {"en":"Building Department: online permits and inspections","es":"Departamento de construcción: permisos en línea e inspecciones","url":"https://www.easthaven-ct.gov/168/Building-Department"},
  {"en":"Planning and Zoning: zoning rules, permits and map inquiries","es":"Planificación y zonificación: normas, permisos y consultas de mapas","url":"https://easthaven-ct.gov/183/Planning-Zoning-Department"},
  {"en":"Public Services: roads, drainage and park maintenance","es":"Servicios públicos municipales: calles, drenaje y mantenimiento de parques","url":"https://www.easthaven-ct.gov/189/Public-Services"},
  {"en":"Municipal refuse and recycling: collection and transfer guidance","es":"Basura y reciclaje municipales: recolección y orientación para residuos","url":"https://www.easthaven-ct.gov/191/Municipal-Refuse-Waste-Recycling"},
  {"en":"Town Beach parking: seasonal permit rules and applications","es":"Estacionamiento en la playa municipal: permisos y normas de temporada","url":"https://www.easthaven-ct.gov/286/Permit-Parking---East-Haven-Town-Beach"},
  {"en":"Town facilities: beach, playgrounds and public spaces","es":"Instalaciones municipales: playa, parques infantiles y espacios públicos","url":"https://www.easthaven-ct.gov/facilities"},
  {"en":"Recreation Department: community programs and activities","es":"Departamento de recreación: actividades y programas comunitarios","url":"https://www.easthaven-ct.gov/216/Recreation-Department"},
  {"en":"Farm River State Park: official access, trail and marina information","es":"Parque estatal Farm River: accesos, senderos e información de la marina","url":"https://ctparks.com/parks/farm-river-state-park"},
  {"en":"Shore Line Trolley Museum: visitor information and schedules","es":"Museo Shore Line Trolley: visitas y programación","url":"https://shorelinetrolley.org/"},
 ],
 // Milford city departments, property research and state park checked 2026-10-24 on official sources; use property-specific records before relying on any estimate.
 'milford': [
  {en:"City of Milford official website",es:"Sitio web oficial de la ciudad de Milford",url:"https://www.milfordct.us/"},
  {en:"Assessor: assessments, property cards and revaluation",es:"Tasador: tasaciones, fichas de propiedades y revaluación",url:"https://milfordct.us/210/Assessors-Office"},
  {en:"Milford property assessment map search",es:"Búsqueda de mapas y tasaciones de propiedades de Milford",url:"https://milford.mapxpress.net/"},
  {en:"City departments: tax collector, clerk and building inspection",es:"Departamentos municipales: impuestos, secretaría e inspección de edificios",url:"https://www.milfordct.us/149/Departments"},
  {en:"City Clerk land records and online indexed records (via site map)",es:"Registros de escrituras y documentos indexados de la secretaría municipal (mapa del sitio)",url:"https://www.milfordct.us/sitemap"},
  {en:"Planning and Zoning: permits, land use and flood-zone maps",es:"Planificación y zonificación: permisos, uso del suelo y mapas de inundación",url:"https://milfordct.us/540/Planning-Zoning"},
  {en:"City maps, school district maps and resident beach parking (via site map)",es:"Mapas municipales, distritos escolares y estacionamiento de residentes en playas (mapa del sitio)",url:"https://milfordct.us/sitemap"},
  {en:"Tax collector FAQs: real estate tax installments and sewer bills",es:"Preguntas de impuestos: cuotas inmobiliarias y facturas de alcantarillado",url:"https://www.milfordct.us/faq"},
  {en:"Milford public works and wastewater department contacts",es:"Contactos de obras públicas y aguas residuales de Milford",url:"https://www.milfordct.us/m/directory"},
  {en:"Silver Sands State Park: access, trails and visitor rules",es:"Parque estatal Silver Sands: acceso, senderos y normas de visita",url:"https://ctparks.com/parks/silver-sands-state-park"},
  {en:"Connecticut park transit connections and current alternatives",es:"Conexiones de transporte a parques estatales y alternativas actuales",url:"https://ctparks.com/parkconnect"}
 ],
 // New Haven source pages checked 2026-10-24 against official City of New Haven and CTtransit websites. Links are research starting points; verify address-specific records and current policies directly.
 'new-haven': [
  {en:"City of New Haven official website",es:"Sitio web oficial de la ciudad de New Haven",url:"https://www.newhavenct.gov/"},
  {en:"Assessor: property valuations, records and revaluation",es:"Tasador municipal: valoraciones, registros y revaluación",url:"https://www.newhavenct.gov/government/departments-divisions/assessor-s-office"},
  {en:"Tax Collector: real estate taxes and current mill rates",es:"Recaudación de impuestos: impuestos inmobiliarios y tasas vigentes",url:"https://www.newhavenct.gov/government/departments-divisions/tax-collector-division"},
  {en:"Real estate tax payment information for new homebuyers",es:"Información para nuevos propietarios sobre el pago de impuestos",url:"https://www.newhavenct.gov/government/departments-divisions/tax-collector-division/pay-taxes"},
  {en:"City Clerk: recorded deeds, mortgages and liens",es:"Secretaría municipal: escrituras, hipotecas y gravámenes registrados",url:"https://www.newhavenct.gov/government/departments-divisions/city-clerk"},
  {en:"City records hub: land and property records",es:"Centro de registros municipales: terrenos y propiedades",url:"https://www.newhavenct.gov/city-services/records"},
  {en:"Building Inspection: online permits and historical permit research",es:"Inspección de edificios: permisos en línea y consulta de permisos anteriores",url:"https://www.newhavenct.gov/government/departments-divisions/office-of-building-inspection-enforcement/hours-of-operation/building-department-hours"},
  {en:"City Plan: land use, planning and development",es:"Planificación municipal: uso del suelo y desarrollo",url:"https://www.newhavenct.gov/government/departments-divisions/city-plan"},
  {en:"Official zoning maps (not a property survey)",es:"Mapas oficiales de zonificación (no sustituyen un plano de mensura)",url:"https://www.newhavenct.gov/government/departments-divisions/city-plan/interactive-maps/zoning-maps"},
  {en:"Zoning ordinances, flood and land-use regulations",es:"Ordenanzas de zonificación y normas de inundación y uso del suelo",url:"https://www.newhavenct.gov/government/departments-divisions/city-plan/zoning-and-regulations"},
  {en:"City parks directory and current access notices",es:"Directorio de parques y avisos actuales de acceso",url:"https://www.newhavenct.gov/government/departments-divisions/parks-department"},
  {en:"City contact directory: utilities, public works and city services",es:"Directorio municipal: servicios públicos, obras públicas y trámites",url:"https://www.newhavenct.gov/contact"},
  {en:"CTtransit: New Haven area bus service and schedules",es:"CTtransit: autobuses y horarios de la zona de New Haven",url:"https://www.cttransit.com/services"},
 ],
 // Cheshire town departments and services verified 2026-10-24 against cheshirect.gov departmental pages; GIS is a town-linked portal. Confirm parcel-specific taxes, sewer and zoning directly with the municipality.
 'cheshire': [
   {
     "en": "Cheshire town government and services",
     "es": "Gobierno y servicios municipales de Cheshire",
     "url": "https://www.cheshirect.gov/"
   },
   {
     "en": "Assessor: property valuations, exemptions and current mill-rate guidance",
     "es": "Tasador: valores de propiedades, exenciones y tasa impositiva vigente",
     "url": "https://cheshirect.gov/184/Assessor"
   },
   {
     "en": "Town Clerk: recorded deeds and land records",
     "es": "Secretaría municipal: escrituras y documentos inmobiliarios registrados",
     "url": "https://cheshirect.gov/258/Land-Records"
   },
   {
     "en": "Town GIS and property map (not a legal survey)",
     "es": "Mapa GIS y parcelas (no sustituye un plano legal)",
     "url": "https://cheshire.mapxpress.net/"
   },
   {
     "en": "Building Department: permits and inspections",
     "es": "Departamento de construcción: permisos e inspecciones",
     "url": "https://cheshirect.gov/186/Building-Department"
   },
   {
     "en": "Planning and Development: zoning, wetlands rules and application forms",
     "es": "Planificación y desarrollo: zonificación, humedales y solicitudes",
     "url": "https://cheshirect.gov/208/Regulations-Permits-Forms"
   },
   {
     "en": "Collector of Revenue: property-tax and sewer-bill payment guidance",
     "es": "Recaudación: pagos de impuestos inmobiliarios y facturas de alcantarillado",
     "url": "https://cheshirect.gov/187/Collector-of-Revenue"
   },
   {
     "en": "Sewer Division: public sewer service and connections",
     "es": "División de alcantarillado: servicio público y conexiones",
     "url": "https://cheshirect.gov/231/Sewer-Division-WPCD"
   },
   {
     "en": "Engineering: drainage, public works permits and sewer questions",
     "es": "Ingeniería: drenaje, permisos de obras públicas y consultas de alcantarillado",
     "url": "https://cheshirect.gov/490/Engineering-and-Water-Pollution-Control"
   },
   {
     "en": "Recreation: parks, trails, programs and facility reservations",
     "es": "Recreación: parques, senderos, programas y reservas",
     "url": "https://cheshirect.gov/241/Recreation"
   },
   {
     "en": "Trash and recycling: collection rules and schedules",
     "es": "Basura y reciclaje: normas y horarios de recolección",
     "url": "https://cheshirect.gov/237/Trash-Recycling"
   },
   {
     "en": "Open Space: land preservation and planning resources",
     "es": "Espacios naturales: conservación de terrenos y planificación",
     "url": "https://cheshirect.gov/207/Open-Space"
   }
 ],
 // Branford official town and transit pages checked 2026-10-23. Confirm current charges and parcel conditions directly with the agencies.
 'branford': [
  {
    "en": "Town of Branford municipal services",
    "es": "Servicios municipales de Branford",
    "url": "https://www.branford-ct.gov/"
  },
  {
    "en": "Branford Assessor: property assessments and field cards",
    "es": "Tasador de Branford: tasaciones y fichas de propiedades",
    "url": "https://www.branford-ct.gov/179/Assessors-Office"
  },
  {
    "en": "Branford Town Clerk: recorded land documents",
    "es": "Secretaría municipal: documentos inmobiliarios registrados",
    "url": "https://www.branford-ct.gov/333/Land-Records"
  },
  {
    "en": "Branford GIS: parcel and zoning map layers (not a legal survey)",
    "es": "GIS de Branford: mapas de parcelas y zonificación (no sustituyen un plano legal)",
    "url": "https://www.branford-ct.gov/220/Branford-GIS"
  },
  {
    "en": "Branford Building Department: permits and inspections",
    "es": "Departamento de construcción: permisos e inspecciones",
    "url": "https://www.branford-ct.gov/200/Building-Department"
  },
  {
    "en": "Planning and Zoning: land-use regulations and permits",
    "es": "Planificación y zonificación: normas de uso del suelo y permisos",
    "url": "https://www.branford-ct.gov/288/Planning-Zoning-Section"
  },
  {
    "en": "Tax Collector: current bills, payment guidance and sewer charges",
    "es": "Recaudación de impuestos: facturas, pagos y cargos de alcantarillado",
    "url": "https://www.branford-ct.gov/319/Tax-Collector"
  },
  {
    "en": "Engineering Department: flood maps, drainage and sewer questions",
    "es": "Ingeniería municipal: mapas de inundación, drenaje y alcantarillado",
    "url": "https://www.branford-ct.gov/219/Engineering-Department"
  },
  {
    "en": "Water Pollution Control Facility: sewer service and user fees",
    "es": "Servicio de alcantarillado: cobertura y cargos por uso",
    "url": "https://www.branford-ct.gov/329/Water-Pollution-Control-Facility"
  },
  {
    "en": "Parks, recreation and senior programs",
    "es": "Parques, recreación y programas para personas mayores",
    "url": "https://www.branford-ct.gov/287/Parks-Recreation-and-Senior-Services"
  },
  {
    "en": "Resident permits: beach/park parking and transfer station access",
    "es": "Permisos de residentes: estacionamiento en playas y parques y acceso al centro de reciclaje",
    "url": "https://www.branford-ct.gov/320/Branford-Resident-Permits"
  },
  {
    "en": "Shore Line East: Branford station and connections",
    "es": "Shore Line East: estación de Branford y conexiones ferroviarias",
    "url": "https://shorelineeast.com/stations/"
  }
],
 // Manchester municipal resources checked 2026-10-23.
 'manchester': [
  {
    "en": "Town of Manchester official municipal website",
    "es": "Sitio oficial del municipio de Manchester",
    "url": "https://www.manchesterct.gov/"
  },
  {
    "en": "Manchester assessment, tax and GIS property search",
    "es": "Consulta de tasaciones, impuestos y mapas GIS",
    "url": "https://www.manchesterct.gov/Government/Departments/Information-Technology/Tax-Public-Computer"
  },
  {
    "en": "Manchester Town Clerk land records",
    "es": "Registro de escrituras y documentos inmobiliarios del Town Clerk",
    "url": "https://www.manchesterct.gov/Government/Departments/Office-of-The-Town-Clerk/Land-Records"
  },
  {
    "en": "Building Inspection Division and permit portal",
    "es": "Inspección de edificios y portal de permisos",
    "url": "https://www.manchesterct.gov/Government/Departments/Public-Works/Building-Inspection-Division"
  },
  {
    "en": "Planning, zoning and map resources",
    "es": "Recursos de planificación, zonificación y mapas",
    "url": "https://www.manchesterct.gov/Government/Departments/Planning-and-Economic-Development"
  },
  {
    "en": "Manchester parks and pools directory",
    "es": "Directorio municipal de parques y piscinas",
    "url": "https://www.manchesterct.gov/Government/Departments/Leisure-Family-and-Recreation-Department/Recreation-Divison/Parks-Pools-Locator"
  },
  {
    "en": "Charter Oak Park and The Oak facilities",
    "es": "Instalaciones de Charter Oak Park y The Oak",
    "url": "https://www.manchesterct.gov/Government/Departments/Leisure-Family-and-Recreation-Department/Recreation-Divison/Parks-Pools-Locator/Charter-Oak-Park-and-The-Oak"
  }
],
 // Glastonbury official and historical-society resources checked 2026-10-23.
 'glastonbury': [
  {
    "en": "Town of Glastonbury municipal services",
    "es": "Servicios municipales de Glastonbury",
    "url": "https://www.glastonburyct.gov/"
  },
  {
    "en": "Glastonbury property assessments and parcel research",
    "es": "Tasaciones y consulta de parcelas de Glastonbury",
    "url": "https://www.glastonburyct.gov/departments/department-directory-i-z/property-assessment/-alpha-P"
  },
  {
    "en": "Glastonbury Town Clerk land records",
    "es": "Documentos inmobiliarios de la Secretaría Municipal",
    "url": "https://www.glastonburyct.gov/departments/department-directory-i-z/town-clerk/land-records"
  },
  {
    "en": "Building Inspection and Zoning permits",
    "es": "Permisos de construcción y zonificación",
    "url": "https://www.glastonburyct.gov/departments/department-directory-a-h/building-inspection-zoning/-alpha-W"
  },
  {
    "en": "Riverfront Park and Boathouse information",
    "es": "Información de Riverfront Park y Boathouse",
    "url": "https://www.glastonburyct.gov/departments/department-directory-i-z/parks-and-recreation/riverfront-park-boathouse"
  },
  {
    "en": "Cotton Hollow Preserve access and regulations",
    "es": "Acceso y normas de Cotton Hollow Preserve",
    "url": "https://www.glastonburyct.gov/home/components/facilitydirectory/facilitydirectory/112/180"
  },
  {
    "en": "Historical Society of Glastonbury historic sites",
    "es": "Lugares históricos de la Sociedad Histórica de Glastonbury",
    "url": "https://hsgct.org/"
  }
],
 // Rocky Hill town/state official links verified 2026-10-23.
 'rocky-hill': [
  {
    "en": "Town of Rocky Hill municipal services",
    "es": "Servicios municipales de Rocky Hill",
    "url": "https://rockyhillct.gov/"
  },
  {
    "en": "Rocky Hill Assessor and property assessments",
    "es": "Tasaciones y datos de propiedades de Rocky Hill",
    "url": "https://rockyhillct.gov/194/Assessor"
  },
  {
    "en": "Rocky Hill Town Clerk and land records",
    "es": "Secretaría municipal y registros inmobiliarios de Rocky Hill",
    "url": "https://rockyhillct.gov/423/Land-Records"
  },
  {
    "en": "Rocky Hill GIS parcel maps (not legal surveys)",
    "es": "Mapas de parcelas GIS (no sustituyen planos legales)",
    "url": "https://rockyhillct.gov/254/Online-Property-Maps"
  },
  {
    "en": "Rocky Hill Building Department and permits",
    "es": "Departamento de Construcción y permisos de Rocky Hill",
    "url": "https://www.rockyhillct.gov/195/Building-Department-Permits"
  },
  {
    "en": "Rocky Hill Quarry Park visitor information",
    "es": "Información para visitar Quarry Park",
    "url": "https://www.rockyhillct.gov/facilities/facility/details/quarrypark-12"
  },
  {
    "en": "Connecticut DOT Rocky Hill–Glastonbury Ferry information",
    "es": "Información del ferry Rocky Hill–Glastonbury",
    "url": "https://portal.ct.gov/dot/travel-gateway/public-transportation/ct-ferries/rocky-hill-ferry"
  },
  {
    "en": "Dinosaur State Park visitor information",
    "es": "Información para visitar Dinosaur State Park",
    "url": "https://ctparks.com/parks/dinosaur-state-park"
  }
],
 // Wethersfield municipal resource URLs verified 2026-10-23 against official town pages.
 'wethersfield':[{"en":"Town of Wethersfield municipal services","es":"Servicios municipales de Wethersfield","url":"https://www.wethersfieldct.gov/"},{"en":"Wethersfield Assessor and property assessments","es":"Tasaciones y datos de propiedades de Wethersfield","url":"https://www.wethersfieldct.gov/159/Assessor"},{"en":"Wethersfield Town Clerk and recorded land documents","es":"Secretaría municipal y documentos inmobiliarios registrados","url":"https://www.wethersfieldct.gov/360/Town-Clerk"},{"en":"Wethersfield Building Department and permits","es":"Departamento de construcción y permisos municipales","url":"https://www.wethersfieldct.gov/173/Building"},{"en":"Keeney Memorial Cultural Center visitor services","es":"Centro de visitantes Keeney Memorial Cultural Center","url":"https://www.wethersfieldct.gov/740/Visitor-Services"}],
 // Middletown official municipal and state resources verified 2026-10-23.
 'middletown':[
  {"en":"City of Middletown municipal services","es":"Servicios municipales de Middletown","url":"https://www.middletownct.gov/"},
  {"en":"Middletown Assessor and property research","es":"Tasador municipal y consulta de propiedades de Middletown","url":"https://middletownct.gov/260/Assessor"},
  {"en":"Middletown Town Clerk and land records","es":"Secretaría municipal y registros de propiedad de Middletown","url":"https://middletownct.gov/269/Town-Clerk"},
  {"en":"Middletown Building Division and permits","es":"Departamento de construcción y permisos de Middletown","url":"https://www.middletownct.gov/188/Building-Division"},
  {"en":"Harbor Park city facility information","es":"Información municipal sobre Harbor Park","url":"https://www.middletownct.gov/facilities/facility/details/harborpark-10"},
  {"en":"Wadsworth Falls State Park visitor information","es":"Información para visitar Wadsworth Falls State Park","url":"https://ctparks.com/parks/wadsworth-falls-state-park"},
 ],
 // Canton municipal sources verified 2026-10-23 on the town's official website.
 'canton':[
  {"en":"Town of Canton municipal services","es":"Servicios municipales de Canton","url":"https://www.townofcantonct.gov/"},
  {"en":"Canton Assessor, valuations and GIS","es":"Tasaciones y mapas GIS de Canton","url":"https://www.townofcantonct.gov/751/Assessor"},
  {"en":"Canton Town Clerk and recorded land documents","es":"Secretaría municipal y registros de propiedad de Canton","url":"https://www.townofcantonct.gov/735/Town-Clerk"},
  {"en":"Canton Building Department and permits","es":"Departamento de construcción y permisos de Canton","url":"https://www.townofcantonct.gov/756/Building-Department"},
  {"en":"Farmington River Trail maps and safety","es":"Mapas y seguridad del Farmington River Trail","url":"https://www.townofcantonct.gov/914/Farmington-River-Trail"},
  {"en":"Canton parks and recreation","es":"Parques y actividades recreativas de Canton","url":"https://www.townofcantonct.gov/1068/Parks-Recreation"},
 ],
 // Avon municipal resources checked 2026-10-23.
 'avon':[
  {"en":"Town of Avon","es":"Municipio de Avon","url":"https://www.avonct.gov/"},
  {"en":"Avon Assessor and property assessments","es":"Tasador municipal y valoraciones de Avon","url":"https://www.avonct.gov/departments/assessor/index.php"},
  {"en":"Avon GIS maps and parcel research","es":"Mapas GIS y consulta de parcelas de Avon","url":"https://www.avonct.gov/departments/engineering/maps.php"},
  {"en":"Avon Building Department and permits","es":"Departamento de construcción y permisos de Avon","url":"https://www.avonct.gov/departments/building/index.php"},
  {"en":"Avon parks, facilities and rentals","es":"Parques, instalaciones y alquileres de Avon","url":"https://www.avonct.gov/departments/recreation_parks/parks_facilities.php"},
 ],
 // Simsbury municipal and state resources checked 2026-10-23.
 'simsbury':[
  {"en":"Town of Simsbury","es":"Municipio de Simsbury","url":"https://simsbury-ct.gov/"},
  {"en":"Simsbury Assessor and property record guidance","es":"Tasador municipal y consulta de propiedades de Simsbury","url":"https://simsbury-ct.gov/392/Assessors-Office"},
  {"en":"Simsbury Town Clerk and land records","es":"Secretaría municipal y registros de propiedad de Simsbury","url":"https://simsbury-ct.gov/370/Town-Clerk"},
  {"en":"Simsbury parks and recreation facilities","es":"Parques e instalaciones recreativas de Simsbury","url":"https://www.simsbury-ct.gov/626/Simsbury-Parks"},
  {"en":"Talcott Mountain State Park visitor information","es":"Información para visitar Talcott Mountain State Park","url":"https://ctparks.com/parks/talcott-mountain-state-park"},
 ],
 // Farmington town sources checked 2026-10-23.
 'farmington':[
  {"en":"Town of Farmington","es":"Municipio de Farmington","url":"https://www.farmington-ct.org/"},
  {"en":"Farmington property record search","es":"Consulta de tasaciones de Farmington","url":"https://www.farmington-ct.org/departments/assessor-s-office/property-record-search"},
  {"en":"Farmington Town Clerk and land records","es":"Secretaría municipal y registros de propiedad de Farmington","url":"https://www.farmington-ct.org/departments/town-clerk/land-records"},
  {"en":"Farmington Valley walking and biking trails","es":"Senderos para caminar y andar en bicicleta de Farmington Valley","url":"https://www.farmington-ct.org/community/trail-system/farmington-valley-greenway"},
 ],
 // Greenwich municipal sources checked 2026-10-23.
 'greenwich':[
  {"en":"Town of Greenwich","es":"Municipio de Greenwich","url":"https://www.greenwichct.gov/"},
  {"en":"Greenwich property assessments","es":"Tasaciones de propiedades de Greenwich","url":"https://www.greenwichct.gov/150/Assessor"},
  {"en":"Greenwich Town Clerk and land records","es":"Secretaría municipal y registros de propiedad de Greenwich","url":"https://www.greenwichct.gov/319/Town-Clerk"},
  {"en":"Greenwich parks and seasonal passes","es":"Parques y pases de temporada de Greenwich","url":"https://www.greenwichct.gov/799/Parks-Recreation"},
 ],
 // Verified 2026-10-23: https://www.fairfieldct.org/ ; https://gis.vgsi.com/fairfieldct/ ; https://www.ffldcommunity.com/waterfront/index.php
 'fairfield':[
  {en:'Town of Fairfield',es:'Municipio de Fairfield',url:'https://www.fairfieldct.org/'},
  {en:'Fairfield property assessment search',es:'Consulta de tasaciones de Fairfield',url:'https://gis.vgsi.com/fairfieldct/'},
  {en:'Fairfield beach and lake passes',es:'Pases de playas y lago de Fairfield',url:'https://www.ffldcommunity.com/waterfront/index.php'},
 ],
 // Verified 2026-10-23: https://www.westportct.gov/ ; https://www.westportct.gov/how-do-i/access-property-information/town-gis-map-system ; https://www.westportct.gov/government/departments-a-z/parks-and-recreation/memberships/parking-emblems
 'westport':[
  {en:'Town of Westport',es:'Municipio de Westport',url:'https://www.westportct.gov/'},
  {en:'Westport property and GIS maps',es:'Mapas GIS y propiedades de Westport',url:'https://www.westportct.gov/how-do-i/access-property-information/town-gis-map-system'},
  {en:'Westport beach parking emblems',es:'Distintivos de estacionamiento de playas de Westport',url:'https://www.westportct.gov/government/departments-a-z/parks-and-recreation/memberships/parking-emblems'},
 ],

 // West Haven municipal and public-resource pages verified 2026-10-23. Check current fees, eligibility and address-specific conditions with the city.
 'west-haven': [
  {"en":"City of West Haven official website","es":"Sitio web oficial de la ciudad de West Haven","url":"https://www.cityofwesthaven.com/"},
  {"en":"West Haven Assessor: assessments, revaluation and mill rates","es":"Oficina de tasaciones: avalúos, revaluación y tasas impositivas","url":"https://www.cityofwesthaven.com/152/Assessors-Office"},
  {"en":"West Haven GIS and real property parcel search","es":"Mapas GIS y consulta de parcelas inmobiliarias","url":"https://westhaven.mapxpress.net/"},
  {"en":"West Haven City Clerk: deeds and land records","es":"Secretaría municipal: escrituras y registros de propiedad","url":"https://www.cityofwesthaven.com/156/City-Clerks-Office"},
  {"en":"West Haven Tax Collector: property tax and sewer billing","es":"Recaudación de impuestos: facturas de propiedad y alcantarillado","url":"https://www.cityofwesthaven.com/180/Tax-Collector"},
  {"en":"West Haven Building Department and permit guidance","es":"Departamento de Construcción y guía de permisos","url":"https://www.cityofwesthaven.com/154/Building"},
  {"en":"West Haven building permit application and search portal","es":"Portal de solicitudes y consulta de permisos de construcción","url":"https://westhavenct.portal.fasttrackgov.com/Common/ApplicationLinks.aspx"},
  {"en":"West Haven Planning and Development: zoning and land use","es":"Planificación y Desarrollo: zonificación y uso del suelo","url":"https://www.cityofwesthaven.com/174/Planning-and-Development"},
  {"en":"West Haven Parks and Recreation programs","es":"Programas de Parques y Recreación de West Haven","url":"https://www.cityofwesthaven.com/172/Parks-and-Recreation"},
  {"en":"West Haven shoreline and beach access information","es":"Información sobre la costa y el acceso a las playas","url":"https://www.cityofwesthaven.com/294/Directions-to-Beaches"},
  {"en":"West Haven beach parking and resident permit information","es":"Estacionamiento de playas y permisos para residentes","url":"https://cityofwesthaven.com/166/Human-Resources-Social-Services"},
  {"en":"West Haven Public Works: sewer service and local infrastructure","es":"Obras Públicas: alcantarillado e infraestructura local","url":"https://cityofwesthaven.com/177/Public-Works"},
 ],
};
