// Source-checked public municipal and state resources. Extend town by town.
// These are information portals, not guarantees about an individual property's records.
export type TownOfficialLink = {en:string;es:string;url:string};
export const townOfficialLinks:Record<string,TownOfficialLink[]> = {
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
