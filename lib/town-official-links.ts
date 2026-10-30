// Source-checked public municipal and state resources. Extend town by town.
// These are information portals, not guarantees about an individual property's records.
export type TownOfficialLink = {en:string;es:string;url:string};
export const townOfficialLinks:Record<string,TownOfficialLink[]> = {
 // Newtown: municipal, borough, school and utility resources checked 2026-10-30; separate borough tax and zoning may apply.
 'newtown': [
  {"en":"Tax Assessor: verify parcel assessment, field cards and October 2026 revaluation","es":"Tasador: verifica tasaciones, fichas de inmuebles y reevaluación de octubre de 2026","url":"https://www.newtown-ct.gov/tax-assessor"},
  {"en":"Tax Collector: check property tax bills, payments and sewer or water charges","es":"Recaudación: consulta impuestos inmobiliarios, pagos y cargos de agua o alcantarillado","url":"https://www.newtown-ct.gov/tax-collector"},
  {"en":"Borough Tax Collector: check additional borough tax obligations where applicable","es":"Recaudación del Borough: verifica impuestos adicionales del distrito cuando correspondan","url":"https://www.newtown-ct.gov/borough-tax-collector"},
  {"en":"Town Clerk: research recorded deeds, mortgages and land documents","es":"Secretaría municipal: investiga escrituras, hipotecas y registros de tierras","url":"https://www.newtown-ct.gov/town-clerk"},
  {"en":"Land Records Search: review online indexes and image-access terms","es":"Búsqueda de Registros: consulta índices en línea y condiciones de acceso a imágenes","url":"https://www.newtown-ct.gov/town-clerk/pages/search-public-records-online"},
  {"en":"Building Department: find building permit and inspection contacts in the official directory","es":"Departamento de Construcción: encuentra contactos de permisos e inspecciones en el directorio oficial","url":"https://www.newtown-ct.gov/departments"},
  {"en":"Land Use Agency: review zoning, wetlands, floodplain and permitted uses","es":"Agencia de Uso de Suelo: consulta zonificación, humedales, zonas inundables y usos permitidos","url":"https://www.newtown-ct.gov/land-use-agency"},
  {"en":"Newtown Health District: research environmental health and private septic or well questions","es":"Distrito de Salud: consulta salud ambiental y cuestiones de pozos o sistemas sépticos","url":"https://www.newtown-ct.gov/newtown-health-district/pages/environmental-health"},
  {"en":"Public Works: check roads, waste services and sewer infrastructure","es":"Obras Públicas: consulta caminos, residuos e infraestructura de alcantarillado","url":"https://www.newtown-ct.gov/public-works"},
  {"en":"Recycling Information: verify transfer-station procedures and accepted materials","es":"Información de Reciclaje: verifica normas del centro de transferencia y materiales admitidos","url":"https://www.newtown-ct.gov/recycling-information"},
  {"en":"Water and Sewer Authority: ask about service boundaries and connections for a specific parcel","es":"Autoridad de Agua y Alcantarillado: consulta zonas de servicio y conexiones de cada parcela","url":"https://www.newtown-ct.gov/water-sewer-authority"},
  {"en":"Newtown Public Schools: check enrollment documents and address-specific assignments","es":"Escuelas Públicas de Newtown: consulta documentos de inscripción y asignación por domicilio","url":"https://newtown.k12.ct.us/NewStudentEnrollment"},
 ],
 // Stratford: municipal pages and district registration checked 2026-10-30; 2025 revaluation requires parcel-specific tax verification.
 'stratford': [
  {"en":"Tax Assessor: review assessments, revaluation notices and parcel questions","es":"Tasador: consulta tasaciones, avisos de reevaluación y datos de parcelas","url":"https://www.stratfordct.gov/page/tax-assessor"},
  {"en":"Tax Collector: check current real-estate tax bills and payment options","es":"Recaudación: verifica facturas de impuestos inmobiliarios y formas de pago","url":"https://www.stratfordct.gov/page/tax-collector"},
  {"en":"Town Clerk: research deeds, recorded documents and land records","es":"Secretaría municipal: consulta escrituras y registros de tierras","url":"https://www.stratfordct.gov/page/town-clerk"},
  {"en":"Building Official: ask about permits, inspections and code requirements","es":"Oficina de Construcción: consulta permisos, inspecciones y requisitos del código","url":"https://www.stratfordct.gov/page/building-official"},
  {"en":"Planning and Zoning: review regulations and land-use documents","es":"Planificación y Zonificación: revisa reglamentos y documentos de uso de suelo","url":"https://www.stratfordct.gov/page/planning-and-zoning-documents"},
  {"en":"Business and Construction Permit Offices: identify the correct office for work on a property","es":"Oficinas de Permisos: identifica la oficina correspondiente para obras en un inmueble","url":"https://www.stratfordct.gov/page/business-and-construction-permit-offices/"},
  {"en":"Health Department: ask about environmental health, private systems and beach advisories","es":"Departamento de Salud: consulta salud ambiental, sistemas privados y avisos de playas","url":"https://www.stratfordct.gov/page/health"},
  {"en":"Public Works: research town road maintenance and municipal services","es":"Obras Públicas: consulta mantenimiento de caminos y servicios municipales","url":"https://www.stratfordct.gov/page/public-works"},
  {"en":"Garbage and Recycling: check collection schedules and disposal requirements","es":"Basura y Reciclaje: verifica calendarios de recolección y requisitos de disposición","url":"https://www.stratfordct.gov/page/garbage-recycling-information"},
  {"en":"Beaches and Parks: check access, permits and seasonal rules","es":"Playas y Parques: consulta acceso, permisos y reglas de temporada","url":"https://www.stratfordct.gov/page/beaches-parks"},
  {"en":"Stratford Public Schools: review K-12 registration requirements and school assignment","es":"Escuelas Públicas de Stratford: consulta inscripción K-12 y asignación escolar","url":"https://www.stratfordk12.org/documents/registration/student-registration-k-12/301533"},
 ],
 // Trumbull: official town and district resources checked 2026-10-30; confirm fire district and sewer charges for each address.
 'trumbull': [
  {"en":"Tax Assessor: review parcel assessments, field cards, exemptions and revaluation notices","es":"Tasador: revisa tasaciones, fichas de inmuebles, exenciones y reevaluación","url":"https://trumbull-ct.gov/274/Tax-Assessor"},
  {"en":"Tax Collector: verify property tax, sewer assessment and sewer usage bills","es":"Recaudación: verifica impuestos inmobiliarios y facturas de alcantarillado","url":"https://trumbull-ct.gov/280/Tax-Collector"},
  {"en":"Town Clerk: research deeds, liens, mortgages and recorded land documents","es":"Secretaría municipal: investiga escrituras, gravámenes, hipotecas y registros de tierras","url":"https://trumbull-ct.gov/283/Town-Clerk"},
  {"en":"Building Department: confirm permit history, inspections and certificates of occupancy","es":"Construcción: confirma permisos, inspecciones y certificados de ocupación","url":"https://trumbull-ct.gov/155/Building-Department"},
  {"en":"Planning and Zoning: check permitted uses, applications and zoning rules","es":"Planificación y zonificación: verifica usos permitidos, solicitudes y normas","url":"https://trumbull-ct.gov/218/Planning-Zoning"},
  {"en":"Health Department: ask about septic system reviews and environmental health requirements","es":"Salud: consulta revisiones de sistemas sépticos y requisitos ambientales","url":"https://trumbull-ct.gov/179/Health"},
  {"en":"Public Works: ask about municipal roads, infrastructure and maintenance programs","es":"Obras Públicas: consulta caminos municipales, infraestructura y mantenimiento","url":"https://trumbull-ct.gov/268/Public-Works"},
  {"en":"Transfer Station and Recycling Center: confirm accepted materials and current access rules","es":"Centro de transferencia y reciclaje: confirma materiales admitidos y normas de acceso","url":"https://trumbull-ct.gov/275/Transfer-Station-Recycling-Center"},
  {"en":"Water Pollution Control Authority: confirm sewer service, connections and related questions","es":"Autoridad de Alcantarillado: confirma servicio, conexiones y consultas relacionadas","url":"https://trumbull-ct.gov/294/Water-Pollution-Control-Authority-WPCA"},
  {"en":"Online Services: access municipal property, land record, tax and permit tools","es":"Servicios en línea: accede a registros de propiedades, tierras, impuestos y permisos","url":"https://www.trumbull-ct.gov/483/Use-Online-Services"},
  {"en":"Trumbull Public Schools: check new-student registration and residency documentation","es":"Escuelas Públicas de Trumbull: consulta inscripción y documentos de residencia","url":"https://www.trumbullps.org/general/student-registration"},
 ],
 // Monroe: municipal and district sources checked 2026-10-30; tax collector currently displays FY 2025-26, so do not infer FY 2026-27 rate.
 'monroe': [
  {"en":"Assessor: review property valuations, exemptions and revaluation information","es":"Tasador: revisa valoraciones, exenciones y datos de reevaluación","url":"https://monroect.gov/p/assessor"},
  {"en":"Tax Collector: verify current bills, payment options and fiscal-year mill rates","es":"Recaudación: verifica facturas, opciones de pago y tasas por año fiscal","url":"https://monroect.gov/p/tax-collector"},
  {"en":"Town Clerk: request recorded deeds and land-record research guidance","es":"Secretaría municipal: solicita escrituras y orientación para consultar registros de tierras","url":"https://monroect.gov/p/town-clerk"},
  {"en":"Building Department: check permits, inspections and improvements","es":"Construcción: consulta permisos, inspecciones y mejoras de inmuebles","url":"https://monroect.gov/p/building"},
  {"en":"Online Permitting: find application procedures for building, health, wetlands and zoning","es":"Permisos en línea: encuentra trámites de construcción, salud, humedales y zonificación","url":"https://monroect.gov/p/online-permitting"},
  {"en":"Planning and Zoning: research zoning maps, wetlands and permitted property uses","es":"Planificación y zonificación: investiga mapas, humedales y usos permitidos","url":"https://monroect.gov/p/planning-zoning"},
  {"en":"Health Department: ask about subsurface sewage disposal and environmental health reviews","es":"Salud: consulta sistemas sépticos y revisiones de salud ambiental","url":"https://monroect.gov/p/health-department"},
  {"en":"Public Works: check town road maintenance, drainage, refuse and transfer station guidance","es":"Obras Públicas: consulta caminos, drenaje, residuos y centro de transferencia","url":"https://www.monroect.gov/p/public-works"},
  {"en":"Electronics Recycling: confirm eligible devices and drop-off instructions","es":"Reciclaje electrónico: confirma dispositivos aceptados e instrucciones de entrega","url":"https://monroect.gov/p/electronics-recycling-program"},
  {"en":"Department Directory: locate municipal contacts for property and moving questions","es":"Directorio municipal: encuentra contactos para consultas inmobiliarias y de mudanza","url":"https://www.monroect.gov/p/department-directory"},
  {"en":"Monroe Public Schools: verify registration, residency documents and elementary assignment","es":"Escuelas Públicas de Monroe: verifica inscripción, documentos de residencia y escuela primaria asignada","url":"https://www.monroeps.org/373203_2"},
 ],
 // Brookfield: official municipal and district pages checked 2026-10-30; verify parcel-level service and tax details.
 'brookfield': [
  {"en":"Assessor: review parcel assessments, field cards and exemptions","es":"Tasador: consulta tasaciones de parcelas, fichas y exenciones","url":"https://www.brookfieldct.gov/232/Assessor"},
  {"en":"2026 Revaluation: read the town's assessment-review notices and contact instructions","es":"Reevaluación de 2026: lee avisos municipales y cómo consultar sobre tasaciones","url":"https://www.brookfieldct.gov/743/Brookfield-Revaluation-2026"},
  {"en":"Tax Collector: check real estate bills, payments and applicable water-line assessments","es":"Recaudación: consulta impuestos inmobiliarios, pagos y posibles cargos de tuberías de agua","url":"https://www.brookfieldct.gov/217/Tax-Collector"},
  {"en":"Town Clerk: research recorded property documents and municipal land records","es":"Secretaría municipal: investiga documentos inmobiliarios registrados y archivos de tierras","url":"https://www.brookfieldct.gov/216/Town-Clerk"},
  {"en":"Building Department: ask about permits, inspections and completed improvements","es":"Construcción: pregunta por permisos, inspecciones y mejoras terminadas","url":"https://www.brookfieldct.gov/231/Building-Department"},
  {"en":"Land Use: check zoning, wetlands and development applications for a specific parcel","es":"Uso del suelo: verifica zonificación, humedales y solicitudes de desarrollo para la parcela","url":"https://www.brookfieldct.gov/225/Land-Use"},
  {"en":"Health Department: ask about environmental-health rules and property-specific concerns","es":"Salud: consulta requisitos ambientales y cuestiones sanitarias de la propiedad","url":"https://www.brookfieldct.gov/227/Health-Department"},
  {"en":"Public Works: check municipal road maintenance, drainage and refuse permits","es":"Obras Públicas: consulta mantenimiento vial, drenaje y permisos de residuos","url":"https://www.brookfieldct.gov/222/Public-Works"},
  {"en":"Water Pollution Control Authority: confirm whether a property is served by sewer and any applicable charges","es":"Autoridad de Alcantarillado: confirma si una propiedad tiene conexión y posibles cargos","url":"https://www.brookfieldct.gov/215/Water-Pollution-Control-Authority"},
  {"en":"Online Services: find property data, mapping, tax and permit portals","es":"Servicios en línea: encuentra datos de propiedades, mapas, impuestos y permisos","url":"https://www.brookfieldct.gov/409/Online-Services"},
  {"en":"Brookfield Public Schools: verify registration steps and residency documentation","es":"Escuelas Públicas de Brookfield: verifica inscripción y documentos de residencia","url":"https://www.brookfieldps.org/37926_3"},
 ],
 // Ridgefield: official town and school pages checked 2026-10-30; verify property-specific tax and service details.
 'ridgefield': [
  {"en":"Assessor: verify property assessments, exemptions and parcel records","es":"Tasador: verifica tasaciones, exenciones y registros de parcelas","url":"https://ridgefieldct.gov/departments/tax_assessors_office/index.php"},
  {"en":"Tax Collector: confirm the current mill rate, real estate bills and sewer-related charges","es":"Recaudación: confirma la tasa impositiva vigente, facturas inmobiliarias y cargos de alcantarillado","url":"https://ridgefieldct.gov/departments/tax_collector/"},
  {"en":"Town Clerk: search recorded deeds, mortgages and survey maps","es":"Secretaría municipal: consulta escrituras, hipotecas y planos registrados","url":"https://ridgefieldct.gov/departments/town_clerk/"},
  {"en":"Building Department: research permits, inspections and certificates for improvements","es":"Construcción: investiga permisos, inspecciones y certificados de mejoras","url":"https://ridgefieldct.gov/departments/building_department/index.php"},
  {"en":"Planning and Zoning: review applications, permitted uses and land-use procedures","es":"Planificación y zonificación: revisa solicitudes, usos permitidos y trámites de suelo","url":"https://www.ridgefieldct.gov/departments/planning_and_zoning/planning_and_zoning_development_procedures.php"},
  {"en":"Zoning Regulations: consult current rules and confirm later amendments with the town","es":"Normas de zonificación: consulta reglas vigentes y confirma en el municipio posibles enmiendas posteriores","url":"https://www.ridgefieldct.gov/departments/planning_and_zoning/zoning_regulations.php"},
  {"en":"Health Department: request septic and private-well records and environmental permits","es":"Salud: solicita registros de sistemas sépticos, pozos privados y permisos ambientales","url":"https://ridgefieldct.gov/departments/health/index.php"},
  {"en":"Public Works: check road maintenance, drainage and municipal infrastructure contacts","es":"Obras Públicas: consulta mantenimiento vial, drenaje e infraestructura municipal","url":"https://www.ridgefieldct.gov/departments/public_works/index.php"},
  {"en":"Highway Department: inquire about town roads, driveway and excavation permits","es":"Carreteras: consulta caminos municipales y permisos para entradas y excavaciones","url":"https://ridgefieldct.gov/departments/public_works/highway_department/"},
  {"en":"Transfer Station: check permit eligibility, accepted waste and current fees","es":"Centro de transferencia: verifica permisos, residuos aceptados y tarifas vigentes","url":"https://www.ridgefieldct.gov/government/transfer_station.php"},
  {"en":"Recycling Center: confirm accepted materials, permits and operating guidance","es":"Centro de reciclaje: confirma materiales aceptados, permisos y normas de uso","url":"https://ridgefieldct.gov/government/recycling_center.php"},
  {"en":"Ridgefield Public Schools: verify student registration, residency documents and street assignments","es":"Escuelas Públicas de Ridgefield: verifica inscripción, pruebas de residencia y asignación por calle","url":"https://www.ridgefield.org/registration-and-immunizations"},
 ],
 // New Canaan: official town and school resources checked 2026-10-30; verify parcel-specific charges and services.
 'new-canaan': [
  {"en":"Assessor: review property assessments, field cards, exemptions and revaluation records","es":"Tasador: consulta tasaciones, fichas de propiedades, exenciones y reevaluaciones","url":"https://www.newcanaan.info/departments/assessor/index.php"},
  {"en":"Tax Collector: check real estate tax billing, payment procedures and due dates","es":"Recaudación: consulta facturas inmobiliarias, procedimientos de pago y vencimientos","url":"https://www.newcanaan.info/departments/tax/index.php"},
  {"en":"Tax account inquiry: look up a specific property's tax account and confirm payment status","es":"Consulta tributaria: busca la cuenta fiscal de una propiedad y confirma los pagos","url":"https://www.newcanaan.info/departments/tax/tax_account_inquiry.php"},
  {"en":"Town Clerk: obtain guidance on recorded deeds, land records and municipal filings","es":"Secretaría municipal: consulta escrituras, registros de tierras y documentos municipales","url":"https://www.newcanaan.info/government/boards_councils___elected_officials/town_clerk/index.php"},
  {"en":"Town Clerk records: start an online search for recorded land documents and verify indexing dates","es":"Registros de la Secretaría: inicia la búsqueda de documentos de tierras y verifica fechas de indexación","url":"https://www.newcanaan.info/online_services/town_clerk_records.php"},
  {"en":"Building Department: check construction permits, inspections and property improvements","es":"Construcción: verifica permisos de obra, inspecciones y modificaciones de inmuebles","url":"https://www.newcanaan.info/departments/land_use/building/index.php"},
  {"en":"Planning and Zoning: research permitted uses, applications and zoning rules for the parcel","es":"Planificación y zonificación: investiga usos permitidos, solicitudes y normas de la parcela","url":"https://www.newcanaan.info/departments/land_use/planning___zoning/index.php"},
  {"en":"Health Department: ask about septic, wells and other address-specific environmental health requirements","es":"Salud: consulta sistemas sépticos, pozos y requisitos sanitarios específicos de la dirección","url":"https://www.newcanaan.info/departments/health/index.php"},
  {"en":"Public Works: consult roads, drainage and municipal infrastructure before moving or planning construction","es":"Obras Públicas: consulta carreteras, drenaje e infraestructura antes de mudarte o construir","url":"https://www.newcanaan.info/departments/public_works/index.php"},
  {"en":"Transfer Station: confirm current permits, recycling rules, accepted materials and disposal fees","es":"Centro de residuos: confirma permisos, normas de reciclaje, materiales admitidos y tarifas","url":"https://www.newcanaan.info/departments/public_works/transfer_station.php"},
  {"en":"New Canaan Public Schools: review schools and contact the district to verify enrollment and address assignment","es":"Escuelas Públicas de New Canaan: consulta centros y confirma inscripción y asignación según domicilio","url":"https://www.ncps-k12.org/"},
  {"en":"Student registration FAQ: verify residency eligibility and documentation with the school district","es":"Preguntas de inscripción: verifica residencia y documentos exigidos con el distrito escolar","url":"https://www.ncps-k12.org/page/registration-faq"},
 ],
 // Darien: official town and school resources checked 2026-10-30; verify tax bills, utilities and permit requirements for each property.
 'darien': [
  {"en":"Assessor: research assessed values, property characteristics, exemptions and revaluation before estimating taxes","es":"Tasador: consulta valores tasados, características de la propiedad, exenciones y reevaluación antes de estimar impuestos","url":"https://darienct.gov/327/Assessor"},
  {"en":"Property record cards: search the assessor's address-based database; verify the parcel and assessment year","es":"Fichas de propiedad: busca por dirección en la base del tasador y verifica la parcela y el año de tasación","url":"https://assessment.darienct.gov/"},
  {"en":"Tax Collector: check real estate tax bills, payment dates, sewer charges and special assessments","es":"Recaudación: consulta facturas inmobiliarias, fechas de pago, cargos de alcantarillado y contribuciones especiales","url":"https://www.darienct.gov/1354/Collector"},
  {"en":"Town Clerk: research recorded deeds, survey maps and land records before purchasing","es":"Secretaría municipal: investiga escrituras, planos y registros de tierras antes de comprar","url":"https://www.darienct.gov/278/Town-Clerk"},
  {"en":"Building Department: review permits, inspections and occupancy records; older permit research may require an in-person visit","es":"Construcción: revisa permisos, inspecciones y registros de ocupación; algunos archivos antiguos pueden requerir una visita","url":"https://www.darienct.gov/157/Building-Department"},
  {"en":"Planning and Zoning: verify permitted uses, land-use approvals and current electronic permit procedures","es":"Planificación y zonificación: verifica usos permitidos, autorizaciones de suelo y trámites electrónicos vigentes","url":"https://www.darienct.gov/273/Planning-Zoning"},
  {"en":"Health Department: ask about environmental health and property-specific public-health requirements","es":"Salud municipal: consulta requisitos sanitarios y ambientales aplicables a la propiedad","url":"https://www.darienct.gov/186/Health"},
  {"en":"Public Works: check roads, drainage, sanitary sewers and street-opening requirements; confirm connections for each address","es":"Obras Públicas: consulta calles, drenaje, alcantarillado y permisos de apertura; confirma conexiones por dirección","url":"https://www.darienct.gov/282/Public-Works"},
  {"en":"Recycling Center: check current residential permit requirements, accepted materials and disposal fees","es":"Centro de reciclaje: verifica permisos residenciales, materiales aceptados y tarifas vigentes","url":"https://www.darienct.gov/287/Recycling-Center"},
  {"en":"Darien Public Schools registration: review residency documents and enrollment steps directly with the district","es":"Inscripción escolar de Darien: revisa documentos de residencia y pasos de matrícula con el distrito","url":"https://www.darienps.org/parents/student-registration-process"},
  {"en":"Parks and Recreation: check beach permits, park access, facilities and current seasonal rules","es":"Parques y Recreación: verifica permisos de playa, acceso, instalaciones y normas de temporada","url":"https://www.darienct.gov/101/Departments"},
  {"en":"Shoreline Management: research coastal-water and harbor matters when relevant to a property","es":"Gestión costera: investiga asuntos de aguas costeras y puertos cuando correspondan a una propiedad","url":"https://www.darienct.gov/101/Departments"},
 ],
 // Wilton: ten town/district-operated resource pages checked 2026-10-30. Rates and service connections require address-level confirmation.
 'wilton': [
  {"en":"Assessor: review parcel field cards, assessed values, exemptions and revaluation information before estimating property taxes","es":"Tasador: consulta fichas de parcelas, valores tasados, exenciones y reevaluaciones antes de estimar impuestos","url":"https://www.wiltonct.gov/assessors-office"},
  {"en":"Tax Collector: review current property-tax bills, payment status and any sewer or water capital assessments","es":"Recaudación: revisa facturas de impuestos, pagos y posibles cargos de capital de agua o alcantarillado","url":"https://www.wiltonct.gov/tax-collector"},
  {"en":"Town Clerk: research recorded deeds, surveys, land records and other property documents","es":"Secretaría municipal: consulta escrituras, planos, registros de tierras y otros documentos de propiedad","url":"https://www.wiltonct.gov/town-clerk"},
  {"en":"Building Department: check construction permits, inspections and certificates of occupancy","es":"Departamento de Construcción: verifica permisos, inspecciones y certificados de ocupación","url":"https://www.wiltonct.gov/building-department"},
  {"en":"Land Use offices: consult planning, zoning, environmental affairs and health staff before proposing changes to a parcel","es":"Oficinas de Uso del Suelo: consulta planificación, zonificación, medioambiente y salud antes de modificar una parcela","url":"https://www.wiltonct.gov/land-use"},
  {"en":"Virtual Town Hall: access municipal transactions, property records, GIS maps, sewer connection requests and public works services","es":"Ayuntamiento virtual: accede a trámites, registros de propiedades, mapas GIS, solicitudes de conexión al alcantarillado y obras públicas","url":"https://www.wiltonct.gov/home/pages/virtual-town-hall"},
  {"en":"Transfer Station: confirm resident vehicle permits, disposal tickets, accepted waste and recycling procedures before moving","es":"Centro de transferencia: confirma permisos de vehículos, boletos, residuos admitidos y normas de reciclaje antes de mudarte","url":"https://www.wiltonct.gov/transfer-station-waste-and-trash-disposal"},
  {"en":"Transfer Station permit guide: check current sticker and ticket purchasing instructions; published fees may be from prior fiscal years","es":"Guía de permisos del centro de transferencia: consulta instrucciones actuales de compra; las tarifas publicadas pueden ser de años anteriores","url":"https://www.wiltonct.gov/transfer-station-waste-and-trash-disposal/pages/how-obtain-vehicle-permit-stickers-transfer-station"},
  {"en":"Wilton Public Schools enrollment: review registration steps, residency documentation and kindergarten guidance directly with the district","es":"Inscripción en las Escuelas Públicas de Wilton: revisa los pasos, documentos de residencia y requisitos de jardín de infancia con el distrito","url":"https://www.wiltonps.org/enrollment"},
  {"en":"Municipal departments: find official contacts for Public Works, Health, Parks and Recreation, Planning and Zoning and other services","es":"Departamentos municipales: encuentra contactos oficiales de Obras Públicas, Salud, Parques y Recreación, Planificación y Zonificación y otros servicios","url":"https://www.wiltonct.gov/departments"},
 ],
 // Shelton: 12 official municipal, health-district and public-school sources checked 2026-10-30.
 // The Tax Collector's FY 2026–27 notice reports 15.51 mills; parcel assessments, revaluation, sewer fees and school assignment require independent checks.
 'shelton': [
  {"en":"Assessor: review property assessments, the 2025 revaluation, exemptions and parcel-specific information before estimating taxes","es":"Tasador: consulta avalúos, reevaluación de 2025, exenciones y datos de cada parcela antes de calcular impuestos","url":"https://www.shelton-ct.gov/p/assessor/"},
  {"en":"Tax Collector: the FY 2026–27 notice lists 15.51 mills for the October 1, 2025 Grand List; verify the individual tax bill and separate sewer charges","es":"Recaudación: el aviso del año fiscal 2026–27 indica 15,51 mills para la lista fiscal del 1 de octubre de 2025; verifica la factura individual y cargos de alcantarillado","url":"https://www.cityofshelton.org/p/tax-collector"},
  {"en":"City/Town Clerk: research recorded deeds, mortgages, liens and land records before closing","es":"Secretaría municipal: consulta escrituras, hipotecas, gravámenes y registros de propiedad antes del cierre","url":"https://www.shelton-ct.gov/p/city-town-clerk/"},
  {"en":"Building Department: ask about permits, inspections and building-code requirements for renovations","es":"Departamento de Construcción: consulta permisos, inspecciones y requisitos de construcción para reformas","url":"https://www.shelton-ct.gov/p/building-department/"},
  {"en":"Planning and Zoning: check parcel zoning, permitted uses, site plans and applications before proposing improvements","es":"Planificación y Zonificación: verifica zonificación, usos permitidos, planos y solicitudes antes de proponer mejoras","url":"https://www.shelton-ct.gov/p/zoning-planning"},
  {"en":"Public Works: check road maintenance, drainage, stormwater and municipal infrastructure information","es":"Obras Públicas: consulta mantenimiento vial, drenaje, aguas pluviales e infraestructura municipal","url":"https://www.shelton-ct.gov/p/public-works/"},
  {"en":"Waste Disposal and Recycling: confirm current collection guidelines, accepted materials and resident disposal rules","es":"Residuos y Reciclaje: confirma normas de recogida, materiales aceptados y reglas de eliminación para residentes","url":"https://www.shelton-ct.gov/p/waste-disposal-recycling/"},
  {"en":"Water Pollution Control Authority: confirm sewer service, connections and account charges for the exact address","es":"Autoridad de Aguas Residuales: confirma servicio de alcantarillado, conexiones y cargos para la dirección exacta","url":"https://www.shelton-ct.gov/p/water-pollution-control-authority/"},
  {"en":"Naugatuck Valley Health District: ask about private wells, septic systems and applicable environmental health reviews","es":"Distrito de Salud Naugatuck Valley: consulta pozos privados, sistemas sépticos y revisiones de salud ambiental aplicables","url":"https://www.nvhd.org/about/"},
  {"en":"Shelton Public Schools registration: check current K–12 enrollment forms, appointment requirements and school-by-street assignment","es":"Inscripción escolar de Shelton: consulta formularios K–12, citas obligatorias y asignación escolar por calle","url":"https://www.sheltonpublicschools.org/grades_112_forms"},
  {"en":"Shelton Public Schools residency: verify required documents for owners, renters or other living arrangements","es":"Residencia para escuelas públicas: verifica documentos exigidos a propietarios, inquilinos y otras situaciones de vivienda","url":"https://www.sheltonpublicschools.org/residency"},
  {"en":"Shelton Public Schools transportation: check current school-by-street information and bus-route updates","es":"Transporte escolar: consulta asignación por calle y cambios actuales en las rutas de autobús","url":"https://www.sheltonpublicschools.org/transportation"},
 ],
 // Stamford: 12 municipal/district resources verified against official city and school pages 2026-10-29.
 // Stamford real estate tax rates differ by taxing district; verify the specific parcel and any Downtown Special Services District levy.
 'stamford': [
  {"en":"Property Assessment: search parcel assessments and check the current district-specific real estate mill rates and revaluation information","es":"Tasación de propiedades: consulta avalúos y las tasas inmobiliarias por distrito y la información sobre reevaluaciones","url":"https://www.stamfordct.gov/government/administration/property-assessment/"},
  {"en":"Tax Collection: review real estate tax bills, payment options and any outstanding balances before closing","es":"Recaudación de impuestos: revisa facturas inmobiliarias, opciones de pago y saldos pendientes antes del cierre","url":"https://www.stamfordct.gov/government/administration/tax-collection/paying-your-taxes"},
  {"en":"Town Clerk: research recorded deeds, mortgages, maps and land records","es":"Secretaría municipal: consulta escrituras, hipotecas, planos y registros de propiedad","url":"https://www.stamfordct.gov/government/town-clerk/land-records/search-land-records"},
  {"en":"Building Records: review historical and current permits, certificates of occupancy and open applications","es":"Registros de construcción: consulta permisos antiguos y actuales, certificados de ocupación y solicitudes pendientes","url":"https://www.stamfordct.gov/government/operations/building-department/building-records"},
  {"en":"Zoning Permits: check permitted uses, zoning requirements and the process for proposed alterations","es":"Permisos de zonificación: consulta usos permitidos, requisitos y trámites para posibles modificaciones","url":"https://www.stamfordct.gov/government/operations/building-department/zoning-permits"},
  {"en":"City GIS Maps: review zoning and comprehensive-plan maps for the property address","es":"Mapas GIS municipales: consulta mapas de zonificación y del plan integral para la dirección de la propiedad","url":"https://www.stamfordct.gov/government/operations/land-use-bureau-planning-zoning-housing-epb/maps"},
  {"en":"Water Pollution Control Authority: check sewer-use billing and request a prorated closing balance for a connected property","es":"Autoridad de aguas residuales: revisa cargos de alcantarillado y solicita el saldo prorrateado al cierre si la propiedad está conectada","url":"https://www.stamfordct.gov/government/operations/water-pollution-control-authority/sewer-use-bill"},
  {"en":"Recycling and Refuse: check transfer-station access, waste disposal and recycling guidance","es":"Reciclaje y residuos: consulta acceso a centros de transferencia, eliminación de basura y normas de reciclaje","url":"https://www.stamfordct.gov/government/operations/recycling-and-sanitation/how-do-i/find-recycling-refuse-centers"},
  {"en":"Health and Permits: check well, septic and other property-related permit requirements where applicable","es":"Salud y permisos: consulta requisitos de pozos, sistemas sépticos y otros permisos según corresponda","url":"https://www.stamfordct.gov/residents/permits-and-licenses"},
  {"en":"Stamford Public Schools: check current enrollment documents and registration steps","es":"Escuelas Públicas de Stamford: consulta documentos y pasos de inscripción vigentes","url":"https://www.stamfordpublicschools.org/departments/office-of-family-community-engagement/student-registration"},
  {"en":"Find a School: look up the current public-school attendance boundary by street address; boundaries may change","es":"Buscar escuela: consulta la zona escolar actual por dirección; los límites pueden cambiar","url":"https://www.stamfordpublicschools.org/connect/find-a-school"},
  {"en":"Cove Island Park: review city park facilities, beach parking and permit information","es":"Parque Cove Island: consulta instalaciones, estacionamiento de playa e información sobre permisos","url":"https://www.stamfordct.gov/Home/Components/FacilityDirectory/FacilityDirectory/120/507"}
 ],
 // Norwalk: 12 official city/authority resources checked 2026-10-29. Property-tax rates vary by district; no universal mill rate.
 'norwalk': [
  {"en":"Tax Assessor: look up a parcel assessment, revaluation phase-in and exemptions before estimating property taxes","es":"Tasador: consulta valoración de la parcela, aplicación gradual de reevaluación y exenciones antes de estimar impuestos","url":"https://norwalkct.gov/224/Tax-Assessor"},
  {"en":"Tax Collector: review the current 2025 Grand List bills and district-specific FY 2026–27 mill rates; Norwalk does not have one universal real-estate rate","es":"Recaudación: consulta facturas de la lista fiscal de 2025 y tasas por distrito del año 2026–27; Norwalk no tiene una sola tasa inmobiliaria","url":"https://norwalkct.gov/225/Tax-Collector"},
  {"en":"Town Clerk: search recorded deeds and land records and confirm recording requirements","es":"Secretaría municipal: consulta escrituras y registros de propiedad y confirma requisitos de inscripción","url":"https://www.norwalkct.gov/155/Town-Clerk"},
  {"en":"Building and Code Enforcement: check permit history, open permits, inspections and certificates of occupancy","es":"Construcción y cumplimiento: revisa historial y permisos abiertos, inspecciones y certificados de ocupación","url":"https://www.norwalkct.gov/16/Building-Code-Enforcement"},
  {"en":"Planning and Zoning: review permitted uses, zoning maps, applications and coastal or flood-related considerations","es":"Planificación y Zonificación: revisa usos permitidos, mapas, solicitudes y condiciones costeras o de inundación","url":"https://www.norwalkct.gov/3901/Planning-Zoning"},
  {"en":"City GIS Mapping: investigate parcel maps and geographic information; confirm boundaries against recorded documents","es":"Mapas GIS municipales: consulta mapas de parcelas e información geográfica; confirma límites con documentos registrados","url":"https://norwalkct.gov/1397/GIS-Mapping"},
  {"en":"Public Works: ask about city streets, drainage, stormwater, road permits and public infrastructure","es":"Obras Públicas: consulta calles, drenaje, aguas pluviales, permisos viales e infraestructura municipal","url":"https://www.norwalkct.gov/19/Public-Works"},
  {"en":"Water Pollution Control Authority: verify sewer availability, account obligations and service at the specific address","es":"Autoridad de Alcantarillado: verifica disponibilidad, cargos y servicio de alcantarillado para cada dirección","url":"https://www.norwalkwpca.org/"},
  {"en":"Solid Waste and Recycling: confirm household collection, transfer station rules and disposal options","es":"Residuos y Reciclaje: confirma recolección domiciliaria, normas de la estación de transferencia y opciones de desecho","url":"https://www.norwalkct.gov/189/Solid-Waste-Recycling-Yard-Waste"},
  {"en":"Recreation and Parks: check current park and beach access, programs, passes and seasonal rules","es":"Parques y Recreación: consulta acceso a parques y playas, programas, pases y normas de temporada","url":"https://www.norwalkct.gov/3898/Recreation-Parks"},
  {"en":"Resident Pass Verification: check eligibility for separate parks-parking and disposal passes","es":"Verificación de pases: consulta requisitos de pases separados para estacionamiento en parques y para desechos","url":"https://hub.norwalkct.gov/passes/"},
  {"en":"City Departments: locate official contacts for health, schools, transportation and other moving-related questions","es":"Departamentos municipales: encuentra contactos oficiales de salud, escuelas, transporte y otros trámites de mudanza","url":"https://www.norwalkct.gov/3943/Departments"},
 ],
 // Wolcott: 11 official town sources checked 2026-10-25; 2025 Grand List 28.90 mills applies to FY 2026–27.
 // Municipal water/sewer, parks and property records require address- or visit-specific confirmation.
 'wolcott': [
  {"en":"Assessor: review parcel assessments, revaluation records and available exemptions before comparing tax bills","es":"Tasador: consulta valoraciones de parcelas, reevaluaciones y exenciones antes de comparar impuestos","url":"https://www.wolcottct.org/181/Assessor"},
  {"en":"Tax Collector: Wolcott reports 28.90 mills for the 2025 Grand List (FY 2026–27); verify each property's assessment and bill","es":"Recaudación: Wolcott informa 28,90 mills para la lista fiscal de 2025 (año 2026–27); verifica valoración y factura de cada inmueble","url":"https://www.wolcottct.org/218/Tax-Collector"},
  {"en":"Town Clerk: request deeds, recorded land documents and other official records before closing","es":"Secretaría municipal: solicita escrituras, registros de terrenos y documentos oficiales antes del cierre","url":"https://www.wolcottct.org/230/Town-Clerk"},
  {"en":"Building Office: check required building, electrical, plumbing and mechanical permits for property improvements","es":"Construcción: consulta permisos de obras, electricidad, plomería y sistemas mecánicos para mejoras","url":"https://www.wolcottct.org/187/Building"},
  {"en":"Planning and Zoning: confirm land-use rules, zoning permits and allowable changes to a parcel","es":"Planificación y Zonificación: confirma normas de uso del suelo, permisos y cambios permitidos en la parcela","url":"https://www.wolcottct.org/252/Planning-Zoning"},
  {"en":"Sewer and Water Department: confirm whether a specific address has municipal water or sewer connections, fees and permit requirements","es":"Agua y Alcantarillado: confirma conexiones municipales, cargos y permisos de cada dirección","url":"https://www.wolcottct.org/216/Sewer-Water"},
  {"en":"Public Works: review road work, stormwater reporting and municipal infrastructure questions","es":"Obras Públicas: consulta obras viales, reportes de aguas pluviales y preguntas de infraestructura","url":"https://www.wolcottct.org/209/Public-Works"},
  {"en":"Recycling Center: review resident identification, curbside recycling and accepted materials before moving","es":"Centro de Reciclaje: consulta identificación de residentes, recogida y materiales aceptados antes de mudarte","url":"https://www.wolcottct.org/234/Recycling-Center-Information"},
  {"en":"Recreation and Leisure: check Mill Pond Way, parks, reservoir activities and current facility restrictions","es":"Recreación: consulta Mill Pond Way, parques, actividades en embalses y restricciones vigentes","url":"https://www.wolcottct.org/262/Recreation-Leisure"},
  {"en":"Woodtick Reservoir: check boat launch access and electric-motor-only rules before visiting","es":"Embalse Woodtick: consulta acceso para embarcaciones y la norma de motores solo eléctricos antes de visitar","url":"https://www.wolcottct.org/Facilities/Facility/Details/Woodtick-Reservoir-9"},
  {"en":"Parks and Recreation Commission: verify park programs and Woodtick Recreation Area access updates","es":"Comisión de Parques y Recreación: confirma programas y novedades de acceso a Woodtick Recreation Area","url":"https://www.wolcottct.org/226/Parks-and-Recreation-and-Acquired-Facili"},
 ],
  // Prospect: official municipal, recreation and water-service sources reviewed 2026-10-25.
 // 28.47 mills is for FY 2026–27 (October 1, 2025 Grand List); parcel assessments, service areas and fees require address-level checks.
 'prospect': [
  {"en":"Assessor: check the property's assessed value, revaluation records and available exemptions","es":"Tasador: consulta la valoración fiscal de la propiedad, la reevaluación y las exenciones disponibles","url":"https://townofprospect.gov/assessor/"},
  {"en":"FY 2026–27 real-property mill rate: Prospect reports 28.47 mills for the October 1, 2025 Grand List; verify the individual bill","es":"Tasa inmobiliaria 2026–27: Prospect indica 28,47 mills para la lista fiscal del 1 de octubre de 2025; verifica la factura individual","url":"https://townofprospect.gov/tax-faq/"},
  {"en":"Tax Collector: verify current real-estate bills, payment methods, deadlines and sewer-use charges","es":"Recaudación de impuestos: verifica facturas inmobiliarias, pagos, vencimientos y cargos de alcantarillado","url":"https://townofprospect.gov/tax-collector/"},
  {"en":"Tax payment guidance: review installment rules and payment options before closing","es":"Guía de pagos: consulta los plazos de cuotas y las opciones de pago antes del cierre","url":"https://townofprospect.gov/taxes-due/"},
  {"en":"Town Clerk: obtain recorded deeds, land records, maps and other official municipal documents","es":"Secretaría municipal: solicita escrituras inscritas, registros de terrenos, planos y otros documentos oficiales","url":"https://townofprospect.gov/townclerk/"},
  {"en":"Municipal external links: access the town's land-record search, property cards, permit portal and other tools","es":"Enlaces municipales: accede a registros de terrenos, fichas de propiedades, permisos y otras herramientas","url":"https://townofprospect.gov/links/"},
  {"en":"Prospect GIS: review parcel maps and verify boundaries against a professional survey","es":"GIS de Prospect: consulta mapas de parcelas y confirma linderos con un levantamiento profesional","url":"https://prospect.mapxpress.net/pages/Contact.html"},
  {"en":"Building Department: confirm permit requirements before additions, decks, pools or remodeling","es":"Departamento de Construcción: confirma permisos antes de ampliaciones, terrazas, piscinas o reformas","url":"https://townofprospect.gov/building-department/"},
  {"en":"Land Use Office: ask about zoning permits, home occupations, variances and parcel-specific restrictions","es":"Oficina de Uso del Suelo: consulta permisos de zonificación, negocios en casa, excepciones y restricciones de la parcela","url":"https://townofprospect.gov/land-use/"},
  {"en":"Planning and Zoning: review commission information and current land-use decisions","es":"Planificación y Zonificación: revisa información de la comisión y decisiones actuales sobre uso del suelo","url":"https://townofprospect.gov/planning-and-zoning/"},
  {"en":"Inland Wetlands: check whether wetlands review is required before disturbing a site","es":"Humedales Interiores: comprueba si se requiere una revisión antes de alterar un terreno","url":"https://townofprospect.gov/inland-wetlands/"},
  {"en":"Public Works: find municipal road maintenance and town infrastructure information","es":"Obras Públicas: consulta mantenimiento de calles e infraestructura municipal","url":"https://townofprospect.gov/public-works/"},
  {"en":"Parks and Recreation: check current recreation programs and facility access rules","es":"Parques y Recreación: consulta programas vigentes y normas de acceso a instalaciones","url":"https://prospectct.myrec.com/info/default.aspx"},
  {"en":"Prospect WPCA sewer user fees: some connected properties have separate sewer charges; confirm service and bills by address","es":"Cargos de alcantarillado de Prospect: algunas propiedades conectadas pagan cargos aparte; confirma servicio y facturas por dirección","url":"https://townofprospect.gov/sewer-user-fee/"},
  {"en":"Waterbury Water Department: this provider serves portions of Prospect; verify the actual supplier and meter for each address","es":"Departamento de Agua de Waterbury: abastece partes de Prospect; confirma proveedor y contador de cada dirección","url":"https://waterburyct.gov/services/water"},
 ],
 // Oxford: municipal departments, CCM FY2027 mill rate and Housatonic Valley Health District checked 2026-10-25.
 // The 20.55-mill rate is per $1,000 of assessed value; verify parcel bills, water and sewer availability individually.
 'oxford': [
  {"en":"Assessor: review parcel assessments, exemptions and valuation records before estimating property taxes","es":"Tasador: revisa la tasación de la parcela, las exenciones y los registros de valoración antes de calcular los impuestos","url":"https://www.oxford-ct.gov/1243/Assessor"},
  {"en":"FY 2026–27 real-property mill rate: CCM reports 20.55 mills; verify the parcel assessment and actual tax bill","es":"Tasa de impuesto inmobiliario 2026–27: CCM indica 20,55 mills; verifica la tasación y la factura de la parcela","url":"https://hub.ccm-ct.org/community/oxford/"},
  {"en":"Tax Collector: check billing, payment methods and due-date guidance for the specific property","es":"Recaudación de impuestos: consulta facturas, métodos de pago y fechas de vencimiento de la propiedad","url":"https://www.oxford-ct.gov/1219/Tax-Collector"},
  {"en":"Land Records: search recorded deeds, easements and other public property documents","es":"Registros de tierras: busca escrituras, servidumbres y otros documentos públicos de la propiedad","url":"https://www.oxford-ct.gov/1691/Land-Records"},
  {"en":"Town Clerk: ask about recording procedures and official municipal records","es":"Secretaría municipal: consulta los trámites de inscripción y los registros municipales oficiales","url":"https://www.oxford-ct.gov/1218/Town-Clerk"},
  {"en":"Building Department: review permits and requirements before planning renovations or additions","es":"Departamento de Construcción: revisa permisos y requisitos antes de planificar reformas o ampliaciones","url":"https://www.oxford-ct.gov/1241/Building-Department"},
  {"en":"Planning and Zoning: check land-use rules and permit requirements for the parcel","es":"Planificación y Zonificación: consulta normas de uso del suelo y requisitos de permisos de la parcela","url":"https://www.oxford-ct.gov/1228/Planning-Zoning"},
  {"en":"Inland Wetlands Agency: confirm whether proposed work in regulated areas requires review","es":"Agencia de Humedales Interiores: confirma si las obras en áreas reguladas necesitan autorización","url":"https://www.oxford-ct.gov/1794/Conservation-CommissionInland-Wetlands-A"},
  {"en":"Water Pollution Control Authority: ask whether public sewer is available at the address and whether charges apply","es":"Autoridad de Control de Contaminación del Agua: pregunta si hay alcantarillado público en la dirección y qué cargos se aplican","url":"https://www.oxford-ct.gov/1216/WPCA"},
  {"en":"Housatonic Valley Health District: ask about private wells, septic systems and health records for a property","es":"Distrito de Salud Housatonic Valley: consulta pozos privados, sistemas sépticos y registros sanitarios de la propiedad","url":"https://hvhdct.gov/communities/oxford-ct/"},
  {"en":"Public Works and Recycling: review driveway and road-opening permits, recycling rules and private trash arrangements","es":"Obras Públicas y Reciclaje: revisa permisos de accesos y apertura de calles, normas de reciclaje y recogida privada de basura","url":"https://www.oxford-ct.gov/1225/Public-Works-Recycling-Center"},
  {"en":"Parks and Recreation: find town recreation facilities and program information","es":"Parques y Recreación: encuentra instalaciones recreativas y programas municipales","url":"https://www.oxford-ct.gov/1229/Parks-Recreation"},
  {"en":"Town department directory: find the appropriate municipal office for moving and property questions","es":"Directorio municipal: encuentra la oficina correspondiente para consultas de mudanza y propiedad","url":"https://www.oxford-ct.gov/1213/Departments"},
 ],
 // North Branford: municipal department pages, health district, conservation trust and CCM FY2027 data checked 2026-10-25.
 // Town's budget news retains a 28.91 proposed rate; CCM FY2027 lists 28.81. Confirm parcel bills with Tax Department.
 'north-branford': [
  {"en":"Assessor: research the 2025 revaluation, assessed value, property exemptions and parcel details before estimating taxes","es":"Tasador: consulta la reevaluación de 2025, el valor tasado, las exenciones y los datos de la parcela antes de calcular impuestos","url":"https://www.northbranfordct.gov/200/Assessor"},
  {"en":"Connecticut Conference of Municipalities: FY 2026–27 real-property rate is 28.81 mills per $1,000 of assessed value; check the actual parcel bill","es":"Conferencia de Municipios de Connecticut: tasa inmobiliaria de 2026–27 de 28,81 mills por cada $1.000 de valor tasado; verifica la factura real","url":"https://hub.ccm-ct.org/community/north-branford/"},
  {"en":"Tax Department: confirm real-estate tax bills, payment options, due dates and outstanding balances","es":"Departamento de Impuestos: confirma facturas inmobiliarias, pagos, vencimientos y saldos pendientes","url":"https://www.northbranfordct.gov/255/Tax-Department"},
  {"en":"Town Clerk: recorded deeds, mortgages, easements and other land records for a specific property","es":"Secretaría municipal: escrituras, hipotecas, servidumbres y otros registros de una propiedad","url":"https://www.northbranfordct.gov/257/Town-Clerk"},
  {"en":"Building Department: check permits and inspections for renovations, systems and prior work; application alone is not approval","es":"Departamento de Construcción: verifica permisos e inspecciones de reformas y sistemas; presentar una solicitud no equivale a una aprobación","url":"https://www.northbranfordct.gov/205/Building-Department"},
  {"en":"Planning and Zoning: research land-use rules, applications and inland-wetlands considerations before buying or building","es":"Planificación y Zonificación: consulta normas de uso del suelo, solicitudes y humedales antes de comprar o construir","url":"https://www.northbranfordct.gov/231/Planning-Zoning-Department"},
  {"en":"Engineering and sewer administration: confirm address-specific public sewer connection, sewer permits and floodplain questions","es":"Ingeniería y alcantarillado: confirma por dirección la conexión al sistema público, permisos de alcantarillado y riesgos de inundación","url":"https://www.northbranfordct.gov/220/Engineering-Department"},
  {"en":"East Shore District Health Department: check septic permits and private-well guidance for homes without confirmed public service","es":"Distrito de Salud East Shore: consulta permisos sépticos y orientación sobre pozos privados cuando no se confirme el servicio público","url":"https://esdhd.org/"},
  {"en":"Engineering street-light information: southern North Branford uses United Illuminating and northern areas Wallingford Electric; confirm the provider for each address","es":"Información de alumbrado de Ingeniería: el sur utiliza United Illuminating y zonas del norte Wallingford Electric; confirma el proveedor por dirección","url":"https://www.northbranfordct.gov/220/Engineering-Department"},
  {"en":"Public Works: town road maintenance, waste and recycling guidance; verify pickup rules for the property","es":"Obras Públicas: mantenimiento vial, basura y reciclaje; verifica las normas de recogida de la vivienda","url":"https://www.northbranfordct.gov/241/Public-Works"},
  {"en":"Parks, Recreation and Senior Center: local recreation programs, facilities and registration details","es":"Parques, Recreación y Centro de Mayores: programas, instalaciones e información de inscripción","url":"https://www.northbranfordct.gov/226/Parks-Recreation-Senior-Center"},
  {"en":"North Branford Land Conservation Trust: official trail descriptions and access information for local preserves","es":"Fideicomiso de Conservación de North Branford: senderos y acceso a reservas naturales locales","url":"https://nblandtrust.org/trails"},
  {"en":"Town department directory: contact municipal offices directly to resolve parcel-specific utility, permit or record questions","es":"Directorio municipal: contacta las oficinas para resolver dudas de servicios, permisos o registros de cada parcela","url":"https://www.northbranfordct.gov/180/Departments"},
 ],
 // Middlebury municipal sources verified 2026-10-25; FY2027 rate 26.46 mills per CT OPM/CCM. Parcel bills and utility hookups must be checked by address.
 'middlebury': [
  {"en":"Assessor: confirm assessed value, exemptions and the 2025 revaluation before estimating a specific home's taxes","es":"Tasador: confirma el avalúo, las exenciones y la reevaluación de 2025 antes de calcular los impuestos de una vivienda","url":"https://www.middleburyct.gov/1198/Assessors-Office"},
  {"en":"Official parcel assessment database: October 1, 2025 revaluation records; assessments are not asking prices","es":"Base oficial de avalúos por parcela: reevaluación del 1 de octubre de 2025; los avalúos no son precios de venta","url":"https://gis.vgsi.com/middleburyct/"},
  {"en":"Town GIS maps: research parcel context and nearby features; not a legal boundary survey","es":"Mapas GIS municipales: consulta parcelas y su entorno; no sustituyen un deslinde legal","url":"https://middlebury.mapxpress.net/"},
  {"en":"Connecticut OPM FY 2026–27 mill-rate data: 26.46-mill municipal real-property base rate; verify the current parcel bill and any special charges","es":"Datos oficiales OPM 2026–27: tasa municipal inmobiliaria base de 26,46 mills; verifica la factura actual y posibles cargos especiales","url":"https://data.ct.gov/Local-Government/Mill-Rates-for-FY-2014-2027/emyx-j53e"},
  {"en":"Middlebury online tax bills: search real-estate, personal-property and vehicle bills; confirm payment amounts with the Tax Collector","es":"Facturas tributarias en línea: consulta impuestos inmobiliarios, personales y de vehículos; confirma importes con Recaudación","url":"https://www.middleburyct.gov/1337/Online-Bill-Pay"},
  {"en":"Town Clerk: recorded deeds, mortgages, easements, land records and property-fraud alerts","es":"Secretaría municipal: escrituras, hipotecas, servidumbres, registros de propiedad y alertas de fraude","url":"https://www.middleburyct.gov/1341/Town-Clerks-Office"},
  {"en":"Building and Land Use: construction permits, inspections, zoning and wetlands application guidance","es":"Construcción y Uso del Suelo: permisos de obra, inspecciones, zonificación y trámites de humedales","url":"https://www.middleburyct.gov/1207/Building-Land-Use-Department"},
  {"en":"Water Pollution Control Authority: town sewer lines and pump stations; confirm whether the specific address connects to public sewer or uses septic","es":"Autoridad de Aguas Residuales: tuberías municipales y estaciones de bombeo; confirma si la dirección tiene alcantarillado o sistema séptico","url":"https://www.middleburyct.gov/1353/Water-Pollution-Control-Authority"},
  {"en":"Public Works: roads, storm drains, transfer station and water/sewer operations oversight; verify utility service and fees by address","es":"Obras Públicas: calles, drenaje, centro de residuos y supervisión de agua/alcantarillado; verifica servicios y tarifas por dirección","url":"https://www.middleburyct.gov/1306/Public-Works-Department"},
  {"en":"Parks and Recreation: current programs, public facilities and access information","es":"Parques y Recreación: programas vigentes, instalaciones públicas e información de acceso","url":"https://www.middleburyct.gov/1282/Parks-Recreation"},
  {"en":"Town voter registration: residency and voter-registration guidance for new residents","es":"Inscripción electoral municipal: orientación sobre residencia y registro de votantes para nuevos vecinos","url":"https://www.middleburyct.gov/1333/Register-to-Vote"},
  {"en":"Middlebury Land Trust: preserved open space and trail information; check current site-specific access rules","es":"Fideicomiso de Tierras de Middlebury: espacios naturales protegidos y senderos; consulta las normas de acceso de cada lugar","url":"https://middleburylandtrust.org/"},
 ],
 // Waterbury municipal and moving sources checked 2026-10-25 against city departments and Connecticut OPM.
 // FY2027 real-estate base rate 43.34 mills; water/sewer connections and actual bills are parcel-specific.
 'waterbury': [
  {"en":"Assessor: assessment records, exemptions and revaluation questions; assessed values are not sale prices","es":"Tasador: avalúos, exenciones y consultas de reevaluación; el valor tasado no es el precio de venta","url":"https://www.waterburyct.org/assessor"},
  {"en":"Connecticut OPM FY 2026–27 mill-rate dataset: Waterbury real-property base rate is 43.34 mills; confirm the parcel bill and any district charges","es":"Datos estatales OPM 2026–27: tasa base inmobiliaria de Waterbury de 43,34 mills; confirma la factura de la parcela y posibles cargos de distrito","url":"https://data.ct.gov/Local-Government/Mill-Rates-for-FY-2014-2027/emyx-j53e"},
  {"en":"Tax Collector: real-estate bills, July and January installments, payment options and late-payment rules","es":"Recaudación: facturas inmobiliarias, cuotas de julio y enero, formas de pago y normas por retrasos","url":"https://www.waterburyct.org/services/tax-collection"},
  {"en":"Online tax and water/sewer payment guide: review balances and any processing fees before paying","es":"Guía de pagos en línea de impuestos y agua/alcantarillado: revisa saldos y cargos de gestión antes de pagar","url":"https://www.waterburyct.org/services/tax-collection/online-payment"},
  {"en":"Town Clerk land records: deeds, liens, SearchIQS index access, recording fees and fraud-alert information","es":"Registros de la Secretaría: escrituras, gravámenes, índice SearchIQS, tarifas y alertas de posible fraude","url":"https://waterburyct.gov/landrecords"},
  {"en":"Town Clerk: recorded documents, property registrations and municipal certificates","es":"Secretaría municipal: documentos registrados, registros de propiedades y certificados municipales","url":"https://waterburyct.org/townclerk"},
  {"en":"City GIS maps: parcel and zoning layers for preliminary research; maps are not boundary surveys","es":"Mapas GIS municipales: parcelas y zonificación para investigación inicial; no sustituyen un deslinde legal","url":"https://www.waterburyct.org/services/public-works/maps-GIS"},
  {"en":"Department of Inspections: building, electrical, plumbing and heating permits; confirm prior work and permit status","es":"Departamento de Inspecciones: permisos de construcción, electricidad, plomería y calefacción; verifica obras previas","url":"https://www.waterburyct.org/services/department-of-inspections"},
  {"en":"City Planning, Zoning and Inland Wetlands: permitted uses, site plans, subdivisions and wetlands reviews","es":"Planificación, Zonificación y Humedales: usos permitidos, planos de sitio, subdivisiones y revisión de humedales","url":"https://www.waterburyct.org/services/city-planning"},
  {"en":"Engineering: drainage, street-opening permits, municipal infrastructure maps and address assignments","es":"Ingeniería: drenaje, permisos para abrir calles, mapas de infraestructura y asignación de direcciones","url":"https://www.waterburyct.gov/services/public-works/engineering"},
  {"en":"Water Department: check whether the address has municipal water; July 2026 schedule lists $3.50 per 100 cubic feet plus meter-dependent service charges","es":"Departamento de Agua: comprueba la conexión de la dirección; desde julio de 2026 figuran $3,50 por 100 pies cúbicos más cargos según medidor","url":"https://www.waterburyct.gov/services/water"},
  {"en":"Water Pollution Control: sewer-system questions, sewer billing and connection verification; do not assume every parcel is connected","es":"Control de Aguas Residuales: consultas sobre alcantarillado, facturación y conexiones; no presupongas que cada parcela está conectada","url":"https://www.waterburyct.gov/services/water-pollution"},
  {"en":"Bureau of Refuse: garbage and recycling services, Mark Lane transfer facility and collection information","es":"Servicio de Residuos: basura y reciclaje, centro de transferencia Mark Lane e información de recogida","url":"https://www.waterburyct.org/services/public-works/solid-waste"},
  {"en":"Trash pickup guidelines: bulky-item scheduling, electronics recycling and yard-waste preparation","es":"Normas de recogida: citas para objetos voluminosos, reciclaje de electrónicos y preparación de residuos vegetales","url":"https://www.waterburyct.org/services/public-works/solid-waste/pick-up-guidelines"},
  {"en":"Parks and Recreation: city parks, public pools, recreation centers and current program information","es":"Parques y Recreación: parques, piscinas públicas, centros recreativos e información actual de programas","url":"https://www.waterburyct.org/services/public-works/recreation"},
  {"en":"311 Citizens Service Center: report potholes, trash concerns and other non-emergency municipal issues","es":"Centro municipal 311: reporta baches, problemas de basura y otras incidencias no urgentes","url":"https://waterburyct.gov/services/citizens-service-center"},
 ],
 // Woodbridge official sources checked 2026-10-25: town departments, adopted FY2027 budget,
 // adopted POCD, and Regional Water Authority. Utility service is parcel-specific.
 'woodbridge': [
  {"en":"Assessor: property assessments, exemptions, and the 2025 grand-list real estate mill rate of 33.99 for July 2026–January 2027 bills; verify the parcel bill","es":"Tasador: avalúos, exenciones y tasa inmobiliaria de 33,99 mills de la lista de 2025 para facturas de julio de 2026 a enero de 2027; verifica la factura de la parcela","url":"https://www.woodbridgect.org/151/Assessor"},
  {"en":"FY 2026–27 adopted budget: confirms 33.99 mills for real estate/personal property and 32.46 mills for motor vehicles; these are different rates","es":"Presupuesto aprobado 2026–27: confirma 33,99 mills para inmuebles/bienes personales y 32,46 para vehículos; son tasas distintas","url":"https://www.woodbridgect.org/428/Annual-Budgets"},
  {"en":"Tax Collector: real estate bills, payment status, deadlines and payment fees","es":"Recaudación: facturas inmobiliarias, estado de pagos, vencimientos y cargos por pago","url":"https://www.woodbridgect.org/238/Tax-Collector"},
  {"en":"Town Clerk land records: deeds, liens, online search information and recording fees","es":"Registros de la Secretaría: escrituras, gravámenes, búsqueda en línea y tarifas de inscripción","url":"https://www.woodbridgect.org/180/Land-Records"},
  {"en":"Town Clerk: recorded documents, property transfers and municipal certificates","es":"Secretaría municipal: documentos registrados, transferencias y certificados municipales","url":"https://www.woodbridgect.org/177/Town-Clerk"},
  {"en":"Building Department: online permits, construction records, inspections and occupancy certificates","es":"Departamento de Construcción: permisos en línea, expedientes de obra, inspecciones y certificados de ocupación","url":"https://www.woodbridgect.org/170/Building-Department"},
  {"en":"Town Plan & Zoning: land-use rules, subdivision questions and the adopted 2025 conservation/development plan","es":"Planificación y Zonificación: usos del suelo, subdivisiones y plan de conservación y desarrollo adoptado en 2025","url":"https://www.woodbridgect.org/219/Town-Plan-Zoning"},
  {"en":"Inland Wetlands: review of projects near wetlands and watercourses","es":"Humedales interiores: revisión de proyectos cerca de humedales y cursos de agua","url":"https://www.woodbridgect.org/287/Inland-Wetlands"},
  {"en":"Woodbridge conservation/development plan: sewer infrastructure is limited and concentrated in the southeast; confirm sewer or septic at the address","es":"Plan municipal de conservación y desarrollo: el alcantarillado es limitado y se concentra en el sureste; confirma conexión o sistema séptico de la dirección","url":"https://www.woodbridgect.org/DocumentCenter/View/7345/Woodbridge-POCD-Adopted-December-18-2025-effective-January-1-2026?bidId="},
  {"en":"Regional Water Authority: start/stop service for eligible Woodbridge addresses; verify municipal water versus a private well before moving","es":"Autoridad Regional del Agua: alta o baja del servicio en direcciones de Woodbridge cubiertas; verifica agua pública o pozo privado antes de mudarte","url":"https://www.rwater.com/customer-care/start-or-stop-service/"},
  {"en":"Public Works: roads, drainage, snow response and scheduled bulky-item collection","es":"Obras Públicas: calles, drenaje, nieve y recogida programada de objetos voluminosos","url":"https://www.woodbridgect.org/271/Public-Works"},
  {"en":"Transfer and Recycling Station: resident access, permits and waste/recycling rules","es":"Centro de transferencia y reciclaje: acceso de residentes, permisos y normas de residuos/reciclaje","url":"https://www.woodbridgect.org/163/Transfer-and-Recycling-Station"},
  {"en":"Parks: town-maintained parks, fields and current access guidance","es":"Parques: parques y campos municipales e información actualizada de acceso","url":"https://www.woodbridgect.org/254/Parks"},
 ],
 // Wallingford municipal and utility sources checked 2026-10-25 against town departments and CCM.
 // FY2027 base rate 24.57 mills; town electric division and partial water/sewer coverage require parcel verification.
 'wallingford': [
  {"en":"Assessor: parcel assessments, 2024 revaluation and exemption questions","es":"Tasador: avalúos por parcela, reevaluación de 2024 y consultas sobre exenciones","url":"https://www.wallingfordct.gov/government/departments/assessors-office/"},
  {"en":"Tax Collector: real estate bills, payment options and account questions","es":"Recaudación: impuestos inmobiliarios, opciones de pago y consultas de cuentas","url":"https://www.wallingfordct.gov/government/departments/tax-office/"},
  {"en":"Connecticut Conference of Municipalities: FY 2026–27 real property rate of 24.57 mills; confirm the parcel bill","es":"Conferencia de Municipios de Connecticut: tasa inmobiliaria 2026–27 de 24,57 mills; confirma la factura de la propiedad","url":"https://hub.ccm-ct.org/community/wallingford/"},
  {"en":"Town Clerk: deeds, liens and RECORDhub land-record access; online image/printing fees may apply","es":"Secretaría municipal: escrituras, gravámenes y registros de RECORDhub; puede haber cargos por imágenes o copias","url":"https://www.wallingfordct.gov/government/departments/town-clerk/"},
  {"en":"Building, Rental Housing and Blight: permits, inspections and rental-code information","es":"Construcción, alquileres y mantenimiento: permisos, inspecciones y normas de viviendas arrendadas","url":"https://www.wallingfordct.gov/government/departments/building-department/"},
  {"en":"Planning and Zoning: zoning rules, maps and land-use applications","es":"Planificación y Zonificación: normas, mapas y solicitudes de uso del suelo","url":"https://www.wallingfordct.gov/government/departments/planning-zoning/"},
  {"en":"Inland Wetlands and Watercourses: environmental permit reviews and wetlands questions","es":"Humedales y cursos de agua: revisión de permisos ambientales y consultas sobre humedales","url":"https://www.wallingfordct.gov/government/departments/inland-wetlands-watercourses/"},
  {"en":"Engineering: public drainage, road questions and municipal mapping; private surveys require a professional","es":"Ingeniería: drenaje público, caminos y mapas municipales; los estudios privados requieren un profesional","url":"https://www.wallingfordct.gov/government/departments/engineering-department/"},
  {"en":"Electric Division: town-operated electric service, rates, billing and outages; verify the address","es":"División Eléctrica: servicio municipal, tarifas, facturación y cortes; verifica la dirección","url":"https://www.wallingfordct.gov/government/departments/electric-division/"},
  {"en":"Water and Sewer Divisions: service-area inquiries, closing forms, rates and bills; not every parcel is connected","es":"Agua y Alcantarillado: cobertura, formularios de cierre, tarifas y facturas; no todas las parcelas están conectadas","url":"https://www.wallingfordct.gov/government/departments/water-sewer-divisions/"},
  {"en":"Public Works: roads, recycling, waste disposal and seasonal collection notices","es":"Obras Públicas: calles, reciclaje, residuos y avisos de recolección estacional","url":"https://www.wallingfordct.gov/government/departments/public-works/"},
  {"en":"Parks and Recreation: Quinnipiac River Linear Trail, park facilities and program registration","es":"Parques y Recreación: sendero del río Quinnipiac, instalaciones y programas","url":"https://www.wallingfordct.gov/government/departments/parks-recreation/"},
  {"en":"Finance: adopted FY 2026–27 budget and financial reports","es":"Finanzas: presupuesto aprobado para 2026–27 e informes financieros","url":"https://www.wallingfordct.gov/government/departments/finance-department/"},
  {"en":"Wallingford Public Library: local learning, events and community resources","es":"Biblioteca Pública de Wallingford: aprendizaje, eventos y recursos comunitarios","url":"https://www.wallingfordlibrary.org/"},
 ],
 // Bethany sources verified 2026-10-24: Bethany Assessor FY2027 29.99 mills (2025 Grand List),
 // Town Clerk, Land Use, QVHD septic, Veterans Memorial Park and CT State Parks.
 // Town Tax Collector page may still display FY2025 29.14 mills: direct users to Assessor/current bill.
 // The town reports no municipal water or sewer services; verify well and septic records by parcel.
 'bethany': [
  {"en":"Assessor: parcel assessments, 2023 revaluation and FY 2026–27 real estate rate of 29.99 mills","es":"Tasador: avalúos, reevaluación de 2023 y tasa inmobiliaria 2026–27 de 29,99 mills","url":"https://www.bethanyct.gov/assessor"},
  {"en":"Tax Collector: bills and payments; page may show an older Grand List rate, so confirm the bill","es":"Recaudación: facturas y pagos; la página puede mostrar una tasa anterior, confirma la factura","url":"https://bethanyct.gov/tax-collector"},
  {"en":"Town Clerk: deeds, recorded documents and official town records","es":"Secretaría municipal: escrituras, documentos registrados y archivos oficiales","url":"https://bethanyct.gov/town-clerk"},
  {"en":"Land records: online deeds and PropertyCheck fraud alerts","es":"Registros de propiedad: escrituras en línea y alertas de fraude PropertyCheck","url":"https://bethanyct.gov/town-clerk/land-records"},
  {"en":"Building Department: permits, inspections and occupancy approvals","es":"Construcción: permisos, inspecciones y certificados de ocupación","url":"https://bethanyct.gov/building"},
  {"en":"Permit application process: check health and land-use approvals before work","es":"Trámite de permisos: verifica las autorizaciones sanitarias y de uso del suelo","url":"https://bethanyct.gov/building/permit-application-process"},
  {"en":"Land Use Department: zoning, wetlands and project review contacts","es":"Uso del suelo: contactos de zonificación, humedales y revisión de proyectos","url":"https://bethanyct.gov/land-use"},
  {"en":"Planning and Zoning Commission: regulations, zoning map and applications","es":"Comisión de Planificación y Zonificación: reglamentos, mapa y solicitudes","url":"https://www.bethanyct.gov/planning-zoning-commission"},
  {"en":"Inland Wetlands Commission: watercourse and wetland permit rules","es":"Comisión de Humedales: normas para permisos de humedales y cursos de agua","url":"https://www.bethanyct.gov/inland-wetlands-commission"},
  {"en":"Quinnipiack Valley Health District: septic system permits and inspections","es":"Distrito de Salud Quinnipiack Valley: permisos e inspecciones de sistemas sépticos","url":"https://www.qvhd.org/septic"},
  {"en":"Town profile: Bethany reports no municipal water or sewer service; verify each private system","es":"Perfil municipal: Bethany informa que no ofrece agua ni alcantarillado municipal; verifica cada sistema privado","url":"https://bethanyct.gov/about"},
  {"en":"Veterans Memorial Park: Hockanum Lake, trails and required visitor pass","es":"Veterans Memorial Park: lago Hockanum, senderos y pase obligatorio","url":"https://bethanyct.gov/parks/vets-park"},
  {"en":"West Rock Ridge State Park: official trail and access information","es":"Parque estatal West Rock Ridge: información oficial sobre senderos y acceso","url":"https://ctparks.com/parks/west-rock-ridge-state-park"},
  {"en":"Public Works: town roads, recycling center and waste-service contacts","es":"Obras Públicas: calles municipales, centro de reciclaje y contactos de residuos","url":"https://www.bethanyct.gov/public-works"},
  {"en":"Town FOI guide: locate parcel cards, GIS, permits and health records","es":"Guía municipal de acceso a registros: fichas catastrales, GIS, permisos y salud","url":"https://www.bethanyct.gov/foi"},
 ],
 // Beacon Falls links checked against the town's own department pages and CTDOT on 2026-10-24.
 // FY 2026-27 23.67-mill rate: town's final adopted FY27 budget narrative (May 28, 2026).
 // 2025 revaluation changed assessments; a lower mill rate does not guarantee a lower parcel tax bill.
 // Town Tax Collector lists possible separate sewer/water assessments; verify utility availability by address.
 // CTDOT: Waterbury Branch trains replaced by buses July 20, 2026–May 31, 2027.
 'beacon-falls': [
  {en:"Town departments: local services and contacts",es:"Departamentos municipales: servicios y contactos",url:"https://www.beaconfalls-ct.org/204/Departments"},
  {en:"Assessor: property assessments, 2025 revaluation and GIS information",es:"Tasador: avalúos, reevaluación de 2025 e información cartográfica GIS",url:"https://www.beaconfalls-ct.org/223/Assessor"},
  {en:"Tax Collector: property tax bills, installments and possible sewer/water assessments",es:"Recaudación: facturas, plazos y posibles cargos de alcantarillado y agua",url:"https://www.beaconfalls-ct.org/209/Tax-Collector"},
  {en:"Adopted FY 2026–27 budget: 23.67-mill rate on the 2025 Grand List; check your actual parcel assessment",es:"Presupuesto aprobado 2026–27: tasa de 23,67 mills sobre la lista de 2025; verifica el avalúo de tu inmueble",url:"https://beaconfalls-ct.org/DocumentCenter/View/4758/TOBF-FY27-Narrative-Final-Adopted_52826"},
  {en:"Town Clerk: deeds, land records and property-document fraud alerts",es:"Secretaría municipal: escrituras, registros de tierras y alertas de fraude documental",url:"https://www.beaconfalls-ct.org/208/Town-Clerk"},
  {en:"Building Department: permits, inspections and land-use questions",es:"Construcción: permisos, inspecciones y consultas sobre uso de suelo",url:"https://www.beaconfalls-ct.org/222/Building"},
  {en:"Town directory: Planning & Zoning and Inland Wetlands commission contacts",es:"Directorio municipal: contactos de Planificación, Zonificación y Humedales",url:"https://www.beaconfalls-ct.org/m/directory"},
  {en:"Health Department: local health and Naugatuck Valley Health District resources",es:"Salud: recursos locales y del Distrito de Salud del Valle de Naugatuck",url:"https://www.beaconfalls-ct.org/216/Health"},
  {en:"Wastewater Treatment Plant: town sewer department contact; confirm connection and fees by address",es:"Planta de aguas residuales: contacto del alcantarillado; confirma conexión y cargos por dirección",url:"https://www.beaconfalls-ct.org/206/Wastewater-Treatment-Plant"},
  {en:"Regional Water Authority: town contact information; verify the property's actual water provider",es:"Autoridad Regional del Agua: información de contacto; confirma el proveedor real de cada vivienda",url:"https://www.beaconfalls-ct.org/212/Regional-Water-Authority"},
  {en:"Public Works: municipal road and maintenance contacts",es:"Obras Públicas: contactos para calles y mantenimiento municipal",url:"https://www.beaconfalls-ct.org/213/Public-Works"},
  {en:"Town parks guide: Matthies Park residents-only rules, Pent Road, Riverbend, Toby\'s Pond and Lantern Ridge",es:"Guía municipal de parques: acceso exclusivo para residentes en Matthies, Pent Road, Riverbend, Toby\'s Pond y Lantern Ridge",url:"https://beaconfalls-ct.org/376/Beacon-Falls---Parks-and-Recreation-Faci"},
  {en:"CTDOT Waterbury Branch station upgrades: substitute buses July 20, 2026–May 31, 2027; check current schedules",es:"CTDOT: obras en la línea Waterbury y autobuses sustitutos del 20 de julio de 2026 al 31 de mayo de 2027; consulta horarios actuales",url:"https://portal.ct.gov/dot/ctdot-press-releases/2026/ctdot-announces-construction-underway-on-four-waterbury-branch-line-station-upgrades"}
 ],
 // Derby sources checked 2026-10-24 against derbyct.gov city department pages, CT DEEP and CTDOT.
 // City Tax Collector confirms FY 2026–27 real-estate mill rate 38.44 and separate motor-vehicle rate 32.46.
 // WPCA bills sewer use and capital charges separately; water availability and all utilities must be confirmed by address.
 // CTDOT confirms Waterbury Branch bus substitution July 20, 2026–May 31, 2027.
 'derby': [
  {"en":"City of Derby: official city services and department directory","es":"Ciudad de Derby: servicios y directorio de departamentos municipales","url":"https://www.derbyct.gov/city-hall"},
  {"en":"Tax Assessor: property valuation, 2025 revaluation and assessment appeals","es":"Tasador: valoración de inmuebles, reevaluación de 2025 y apelaciones","url":"https://www.derbyct.gov/tax-assessor"},
  {"en":"Tax Collector: FY 2026–27 real estate rate 38.44 mills, separate vehicle rate 32.46; verify each bill","es":"Recaudación: tasa inmobiliaria 2026–27 de 38,44 mills y tasa vehicular distinta de 32,46; verifica cada factura","url":"https://www.derbyct.gov/tax-collector"},
  {"en":"City Clerk: deeds, land records, recording fees and online records access","es":"Secretaría municipal: escrituras, registros de tierras, tarifas y consulta en línea","url":"https://www.derbyct.gov/land-records-fees"},
  {"en":"Building Department: permits, inspections, zoning and occupancy rules","es":"Departamento de Construcción: permisos, inspecciones, zonificación y normas de ocupación","url":"https://www.derbyct.gov/building-department"},
  {"en":"Derby city map: parks, civic buildings and municipal facilities; not a parcel boundary survey","es":"Mapa municipal de Derby: parques, edificios públicos e instalaciones; no sustituye un deslinde","url":"https://www.derbyct.gov/maps"},
  {"en":"City budgets and audits: official FY 2026–27 adopted budget and mill-rate history","es":"Presupuestos y auditorías: presupuesto aprobado 2026–27 e historial de tasas tributarias","url":"https://www.derbyct.gov/BudgetsandAudits"},
  {"en":"Water Pollution Control Authority: sewer connections, usage and capital fees; confirm service for each address","es":"Autoridad de Aguas Residuales: conexiones, cargos por uso y capital; confirma el servicio por dirección","url":"https://www.derbyct.gov/water-pollution-control-authority"},
  {"en":"Regional Water Authority information from Derby: confirm water supplier and connection at the address","es":"Información de la Autoridad Regional del Agua: confirma proveedor y conexión de cada vivienda","url":"https://www.derbyct.gov/regional-water-authority"},
  {"en":"Public Works: city streets, drainage, flood infrastructure and municipal maintenance","es":"Obras Públicas: calles, drenaje, infraestructura contra inundaciones y mantenimiento","url":"https://www.derbyct.gov/public-works"},
  {"en":"City services: sanitation, recycling, parks and local transportation resources","es":"Servicios municipales: basura, reciclaje, parques y transporte local","url":"https://www.derbyct.gov/services"},
  {"en":"Parks and Recreation: Osbornedale State Park, Witek Memorial Park and community programs","es":"Parques y Recreación: Osbornedale, Witek Memorial Park y programas comunitarios","url":"https://www.derbyct.gov/parks-recreation"},
  {"en":"Derby Greenway: city trail information along the Naugatuck and Housatonic river area","es":"Sendero Derby Greenway: información municipal del recorrido en la zona de los ríos Naugatuck y Housatonic","url":"https://www.derbyct.gov/maps/location/DerbyGreenway"},
  {"en":"Connecticut DEEP: Kellogg Environmental Center and Osbornedale State Park visitor information","es":"CT DEEP: centro ambiental Kellogg y visitas al parque estatal Osbornedale","url":"https://portal.ct.gov/deep/education/kellogg/kellogg-environmental-center-directions-and-contact-information"},
  {"en":"CTDOT: Derby–Shelton Waterbury Branch trains replaced by buses July 20, 2026–May 31, 2027; check live service","es":"CTDOT: autobuses sustituyen trenes de la línea Waterbury en Derby–Shelton del 20 de julio de 2026 al 31 de mayo de 2027; verifica avisos actuales","url":"https://portal.ct.gov/dot/ctdot-press-releases/2026/substitute-busing-wbl-july-2026-through-may-2027"},
 ],
 // Ansonia sources checked 2026-10-24 against city department pages, CT OPM, CTDOT and CTtransit.
 // FY2027 real-property rate 29.46 mills cross-checked with https://hub.ccm-ct.org/community/ansonia/ .
 // City lists Regional Water Authority for water inquiries and Aquarion for sewer operations/billing; service is address-specific.
 // CTDOT confirms substitute buses replace Waterbury Branch trains July 20, 2026–May 31, 2027.
 'ansonia': [
  {"en":"City of Ansonia: official department directory and resident services","es":"Ciudad de Ansonia: directorio de departamentos y servicios para residentes","url":"https://cityofansonia.com/departments"},
  {"en":"Assessor: property record cards, assessments, revaluation and GIS links","es":"Tasador: fichas de propiedades, tasaciones, reevaluación y enlaces GIS","url":"https://cityofansonia.com/content/8132/8142/8144/default.aspx"},
  {"en":"Ansonia GIS: parcel map research; verify boundaries with the city","es":"GIS de Ansonia: mapas de parcelas; confirma los límites con el municipio","url":"https://ansonia.mapxpress.net/"},
  {"en":"Tax Collector: real-estate bills, payments and October 2025 Grand List notice","es":"Recaudación: facturas inmobiliarias, pagos y aviso de la lista tributaria de octubre de 2025","url":"https://www.cityofansonia.com/content/8132/8142/8180/default.aspx"},
  {"en":"Connecticut municipal tax rates: confirm Ansonia FY 2026–27 real-property rate (29.46 mills) and individual bills","es":"Tasas municipales de Connecticut: confirma los 29,46 mills de Ansonia para 2026–27 y cada factura","url":"https://portal.ct.gov/opm/igpp/publications/mill-rates"},
  {"en":"Town & City Clerk: deeds, land records, recorded maps and regulations","es":"Secretaría municipal: escrituras, registros inmobiliarios, planos y reglamentos","url":"https://www.cityofansonia.com/content/8132/8142/8182/default.aspx"},
  {"en":"Land Use, Zoning and Building: permits, inspections and zoning regulations","es":"Uso del suelo, zonificación y construcción: permisos, inspecciones y reglamentos","url":"https://cityofansonia.com/content/8132/8142/8190/default.aspx"},
  {"en":"Public Works: streets, stormwater, recycling and transfer-station services","es":"Obras Públicas: calles, aguas pluviales, reciclaje y estación de transferencia","url":"https://cityofansonia.com/publicworks"},
  {"en":"Trash & Recycling: address-based collection lookup and holiday changes","es":"Basura y reciclaje: consulta de recolección por dirección y cambios por feriados","url":"https://www.cityofansonia.com/trash"},
  {"en":"Recreation Department: city parks and community programs","es":"Departamento de Recreación: parques y programas comunitarios","url":"https://www.cityofansonia.com/content/8132/8142/8172/default.aspx"},
  {"en":"Ansonia Nature Center: trails, exhibits and program updates","es":"Centro de Naturaleza de Ansonia: senderos, exhibiciones y actividades","url":"https://ansonianaturecenter.org/"},
  {"en":"City moving resources: Regional Water Authority contact and Aquarion sewer billing","es":"Recursos municipales para mudanzas: contacto de agua RWA y facturación de alcantarillado Aquarion","url":"https://cityofansonia.com/content/8134/8374/default.aspx"},
  {"en":"CTDOT: Waterbury Branch substitute buses July 2026–May 2027; check current service","es":"CTDOT: autobuses sustitutos en la línea Waterbury de julio de 2026 a mayo de 2027; verifica el servicio","url":"https://portal.ct.gov/dot/ctdot-press-releases/2026/substitute-busing-wbl-july-2026-through-may-2027"},
  {"en":"CTDOT: Ansonia station accessibility reconstruction and construction updates","es":"CTDOT: obras de accesibilidad y reconstrucción de la estación de Ansonia","url":"https://portal.ct.gov/dot/projects/waterbury-branch-line-improvements/ansonia"},
  {"en":"CTtransit: route 255 New Haven–Ansonia–Seymour service alerts","es":"CTtransit: avisos de la ruta 255 New Haven–Ansonia–Seymour","url":"https://www.cttransit.com/alerts/54/details"},
 ],
 // Orange links checked 2026-10-24 against official town department pages; tax collector confirms 27.40 mills for July 2026 bills (2025 Grand List). Confirm actual parcel bills, sewer/water connections and permits with town staff.
 'orange': [
  {"en":"Town of Orange: departments and resident services","es":"Municipio de Orange: departamentos y servicios para residentes","url":"https://www.orange-ct.gov/27/Departments"},
  {"en":"Assessor: property assessments and revaluation research","es":"Tasador: tasaciones y consultas de reevaluación","url":"https://www.orange-ct.gov/153/Assessor"},
  {"en":"Tax Collector: official 27.40-mill rate for July 2026 bills and payment details; confirm the individual bill","es":"Recaudación: tasa oficial de 27,40 mills para julio de 2026 y pagos; verifica la factura de cada inmueble","url":"https://www.orange-ct.gov/206/Tax-Collector"},
  {"en":"Town Clerk: land records, deeds and recorded documents","es":"Secretaría municipal: registros inmobiliarios, escrituras y documentos inscritos","url":"https://www.orange-ct.gov/212/Town-Clerk"},
  {"en":"Building Department: permits, inspections and approvals","es":"Departamento de Construcción: permisos, inspecciones y autorizaciones","url":"https://www.orange-ct.gov/158/Building-Department"},
  {"en":"Plan and Zoning: land-use rules and zoning applications","es":"Planificación y Zonificación: normas de uso del suelo y solicitudes","url":"https://orange-ct.gov/165/Plan-Zoning-Department"},
  {"en":"Health Department: environmental health and property-related inquiries","es":"Departamento de Salud: salud ambiental y consultas sobre propiedades","url":"https://www.orange-ct.gov/150/Health-Department"},
  {"en":"Public Works: drainage, roads, sewer maintenance and flood-study links","es":"Obras Públicas: drenaje, caminos, mantenimiento de alcantarillado y estudios de inundación","url":"https://www.orange-ct.gov/167/Public-Works"},
  {"en":"Parks and Recreation: town programs and facilities","es":"Parques y Recreación: programas e instalaciones municipales","url":"https://www.orange-ct.gov/480/Parks-Recreation"},
  {"en":"Official online permit portal: confirm application and approval status with town staff","es":"Portal municipal de permisos: confirma solicitudes y aprobaciones con el personal","url":"https://orangect.portal.opengov.com/"},
  {"en":"Town website site map: find GIS, property data, revaluation and land-record links","es":"Mapa del sitio municipal: enlaces a GIS, datos de propiedades, reevaluación y registros de tierras","url":"https://orange-ct.gov/sitemap"},
 ],
 // Madison links verified 2026-10-24 against official Madison municipal pages and Shore Line East. The town publishes 23.06 mills effective July 1, 2026; confirm parcel-specific districts, utilities and current bills directly.
 'madison': [
  {"en":"Town of Madison: municipal services and resident information","es":"Municipio de Madison: servicios e información para residentes","url":"https://www.madisonct.org/"},
  {"en":"Assessor: assessment questions, exemptions and property valuation","es":"Tasador municipal: tasaciones, exenciones y valoración de propiedades","url":"https://www.madisonct.org/157/Assessor"},
  {"en":"Tax Collector: bills, payments and delinquency information","es":"Recaudación de impuestos: facturas, pagos e información sobre atrasos","url":"https://www.madisonct.org/328/Tax-Collector"},
  {"en":"Official tax rate: 23.06 mills effective July 1, 2026; check parcel and any special-district charges","es":"Tasa tributaria oficial: 23,06 mills desde el 1 de julio de 2026; verifica la parcela y posibles cargos de distritos especiales","url":"https://www.madisonct.org/434/Tax-Rate"},
  {"en":"Town Clerk land records: deeds and recorded documents","es":"Registros de tierras de la secretaría municipal: escrituras y documentos inscritos","url":"https://www.madisonct.org/459/Land-Records"},
  {"en":"Building Department: permit rules, inspections and historical permit searches","es":"Departamento de Construcción: permisos, inspecciones y consultas de permisos anteriores","url":"https://www.madisonct.org/241/Building-Department"},
  {"en":"Planning and Zoning: land-use questions and applications","es":"Planificación y Zonificación: uso del suelo y solicitudes","url":"https://www.madisonct.org/349/Planning-Zoning-Department"},
  {"en":"Zoning maps: check district boundaries and regulations before relying on a use","es":"Mapas de zonificación: consulta los límites y normas antes de decidir sobre un uso","url":"https://www.madisonct.org/354/Zoning-Maps"},
  {"en":"GIS information: parcel and environmental mapping, not a boundary survey","es":"Información GIS: mapas de parcelas y medioambiente; no sustituyen un deslinde","url":"https://www.madisonct.org/665/Geographic-Information-System"},
  {"en":"Health Department: environmental health, testing and property-related health questions","es":"Departamento de Salud: salud ambiental, pruebas y consultas relacionadas con inmuebles","url":"https://www.madisonct.org/200/Health-Department"},
  {"en":"Public Works: roads, drainage and solid-waste services","es":"Obras Públicas: calles, drenaje y gestión de residuos","url":"https://www.madisonct.org/391/Public-Works-Department"},
  {"en":"Floodplain Management: flood-risk maps and development rules","es":"Gestión de zonas inundables: mapas de riesgo y normas de construcción","url":"https://www.madisonct.org/800/Floodplain-Management"},
  {"en":"Beach and Recreation: park programs and beach access rules","es":"Playas y Recreación: programas de parques y normas de acceso a playas","url":"https://www.madisonct.org/165/Beach-Recreation-Department"},
  {"en":"Emergency Management: hurricane and storm preparedness","es":"Gestión de Emergencias: preparación ante huracanes y tormentas","url":"https://www.madisonct.org/247/Emergency-Management"},
  {"en":"Shore Line East Madison station: service, accessibility and connections","es":"Estación Madison de Shore Line East: servicio, accesibilidad y conexiones","url":"https://shorelineeast.com/stations/madison-station/"},
 ],
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
  {en:"City online services: indexed land records, permits and tax payments",es:"Servicios municipales en línea: escrituras indexadas, permisos y pagos de impuestos",url:"https://www.milfordct.us/768/On-Line-Services"},
  {en:"Planning and Zoning: permits, land use and flood-zone maps",es:"Planificación y zonificación: permisos, uso del suelo y mapas de inundación",url:"https://milfordct.us/540/Planning-Zoning"},
  {en:"City GIS maps: parcel research, flood zones and school district maps",es:"Mapas SIG municipales: parcelas, zonas de inundación y distritos escolares",url:"https://milfordct.us/699/City-Maps-GIS"},
  {en:"Flood safety and insurance: local hazard guidance and FEMA map resources",es:"Seguridad y seguro contra inundaciones: riesgos locales y mapas de FEMA",url:"https://milfordct.us/243/Flood-Safety-Information"},
  {en:"Tax Collector: real estate bills, payment schedule and separate sewer charges",es:"Recaudación de impuestos: facturas inmobiliarias, fechas de pago y cargos de alcantarillado",url:"https://www.milfordct.us/663/Tax-Collector"},
  // The City explicitly says listed boroughs and associations collect taxes separately; verify any parcel with the applicable district.
  {en:"Boroughs and beach associations: check separate local tax collectors and potential additional bills for your address",es:"Distritos y asociaciones costeras: consulta recaudadores independientes y posibles impuestos adicionales según la dirección",url:"https://milfordct.us/668/Boroughs-Associations"},
  {en:"Milford public works and wastewater department contacts",es:"Contactos de obras públicas y aguas residuales de Milford",url:"https://www.milfordct.us/m/directory"},
  {en:"Milford beach parking: resident stickers and current requirements",es:"Estacionamiento en playas de Milford: permisos de residentes y requisitos vigentes",url:"https://milfordct.us/680/Resident-Parking-Stickers"},
  {en:"Milford beach water-quality monitoring and swimming advisories",es:"Control de calidad del agua en las playas de Milford y avisos para bañistas",url:"https://www.milfordct.us/402/Beach-Monitoring"},
  // Milford municipal primary sources reviewed 2026-10-28; verify seasonal harbor permits and access directly with the City.
  {en:"City history and Milford Green: official downtown, harbor and historical context",es:"Historia municipal y Milford Green: información oficial sobre el centro, el puerto y el patrimonio histórico",url:"https://www.milfordct.us/697/About-Milford"},
  {en:"Harbor Management Commission: coastal development review, public boat ramp and current marina/launch-permit rules",es:"Comisión del Puerto: revisión de obras costeras, rampa pública y normas vigentes de la marina y permisos de botadura",url:"https://www.milfordct.us/311/Harbor-Management-Commission-Marina"},
  {en:"Silver Sands State Park: access, trails and visitor rules",es:"Parque estatal Silver Sands: acceso, senderos y normas de visita",url:"https://ctparks.com/parks/silver-sands-state-park"},
  {en:"Connecticut park transit options: check the program year and current alternatives before planning a trip",es:"Transporte a parques estatales de Connecticut: comprueba el año del programa y las alternativas vigentes antes de viajar",url:"https://ctparks.com/parkconnect"},
  // MTA station and timetable pages independently checked 2026-10-26; schedules and station services may change.
  {en:"Metro-North Milford station: New Haven Line, accessibility, ticket machines and local bus connections; check current notices",es:"Estación Milford de Metro-North: línea New Haven, accesibilidad, máquinas de boletos y conexiones de autobús; consulta avisos actuales",url:"https://www.mta.info/stations/milford"},
  {en:"Metro-North New Haven Line schedules: verify current Milford departures, transfers and service changes before commuting",es:"Horarios de la línea New Haven de Metro-North: comprueba salidas desde Milford, transbordos y cambios de servicio antes de viajar",url:"https://www.mta.info/agency/metro-north-railroad/schedules"},
  // Attraction details verified 2026-10-26 directly with the organizations; visit their sites for current access and event information.
  {en:"Connecticut Audubon Coastal Center at Milford Point: birdwatching, salt-marsh trails and sanctuary visitor guidance; check tides and nesting-area restrictions",es:"Centro Costero de Connecticut Audubon en Milford Point: observación de aves, senderos de marismas y normas de visita; comprueba mareas y restricciones de anidación",url:"https://ctaudubon.org/locations/the-coastal-center-at-milford-point-and-smith-hubbell-sanctuary/"},
  {en:"Milford Historical Society: Eells-Stow House, historic-house exhibits and seasonal tour information",es:"Sociedad Histórica de Milford: casa Eells-Stow, exposiciones históricas y visitas de temporada",url:"https://milfordhistoricalsociety.org/"},
  // School assignments, district enrollment and online permitting checked against official pages 2026-10-26.
  {en:"Milford Public Schools: look up school attendance boundaries by street address; confirm assignment with the district before enrolling",es:"Escuelas Públicas de Milford: consulta los límites escolares según la dirección; confirma la asignación con el distrito antes de matricular",url:"https://www.milforded.org/page/school-and-street-assignment"},
  {en:"Milford Public Schools registration: open the district enrollment page; if instructions do not display, contact the assigned school to confirm current steps and documents",es:"Inscripción en las Escuelas Públicas de Milford: abre la página de matrícula del distrito; si no aparecen las instrucciones, consulta con la escuela asignada para confirmar los pasos y documentos vigentes",url:"https://www.milforded.org/page/registration"},
  // District announcement dated 2026-01-30 identifies the PowerSchool Parent Portal route; this does not establish that the external portal works.
  {en:"2026–27 online kindergarten registration: district confirms the PowerSchool Parent Portal route; if instructions do not display, contact your assigned school",es:"Inscripción en línea a kínder 2026–27: el distrito confirma el acceso por PowerSchool Parent Portal; si no aparecen instrucciones, comunícate con tu escuela asignada",url:"https://www.milforded.org/article/2670596"},
  // Official district announcement dated 2026-01-12 is a readable, year-specific fallback when the registration portal does not render instructions.
  {en:"2026–27 kindergarten enrollment guidance: district announcement explains school-by-address assignment, eligibility and where to seek portal help; confirm current steps with your school",es:"Guía de inscripción a kínder 2026–27: el aviso oficial explica la escuela asignada por dirección, la elegibilidad y dónde pedir ayuda con el portal; confirma los pasos actuales con la escuela",url:"https://www.milforded.org/article/2628419"},
  // District notice dated 2026-04-24: future 2027–28 eligibility differs from the 2026–27 guidance above.
  {en:"2027–28 kindergarten eligibility change: the district says children must turn five by September 1, 2027 and early-entry waivers end; check the latest district policy before enrolling",es:"Cambio de elegibilidad para kínder 2027–28: el distrito indica que los niños deben cumplir cinco años antes o el 1 de septiembre de 2027 y que terminan las excepciones de ingreso anticipado; consulta la norma vigente antes de inscribirte",url:"https://www.milforded.org/article/2842624"},
  {en:"City online permitting center: apply for building, zoning and wetlands permits; confirm existing permit records with Building Inspection",es:"Centro municipal de permisos en línea: solicita permisos de construcción, zonificación y humedales; confirma el historial de permisos con Inspección de Edificios",url:"https://www.milfordct.us/537/Online-Permitting-Center"},
  // Property due diligence resources verified directly on Milford municipal pages 2026-10-26.
  {en:"Building Inspection: review issued-permit lists, permit requirements and flood-zone construction guidance; ask the office about a specific property's history",es:"Inspección de Construcciones: consulta listas de permisos emitidos, requisitos y obras en zonas inundables; pregunta por el historial de una propiedad concreta",url:"https://milfordct.us/517/Building-Inspection"},
  {en:"Engineering Division: sanitary sewer connection permits, septic abandonment forms, driveway approaches and street-opening requirements; confirm service for the address",es:"División de Ingeniería: permisos de conexión al alcantarillado, formularios para abandonar sistemas sépticos, accesos y apertura de calles; confirma el servicio por dirección",url:"https://www.milfordct.us/535/Engineering-Division"},
  {en:"Inland Wetlands Agency: review permit requirements for work in or near wetlands, watercourses and regulated upland areas before altering a parcel",es:"Agencia de Humedales Interiores: revisa permisos para obras en humedales, cursos de agua y zonas adyacentes reguladas antes de modificar una parcela",url:"https://www.milfordct.us/533/Inland-Wetlands"},

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
  {"en":"West Haven Assessor: assessments, 2024 revaluation, municipal mill rate and fire-district street list; verify each parcel’s combined tax rate","es":"Tasador de West Haven: avalúos, revaluación de 2024, tasa municipal y lista de calles por distrito de bomberos; confirma la tasa total de cada parcela","url":"https://www.cityofwesthaven.com/152/Assessors-Office"},
  {"en":"West Haven GIS and real property parcel search","es":"Mapas GIS y consulta de parcelas inmobiliarias","url":"https://westhaven.mapxpress.net/"},
  {"en":"West Haven City Clerk: deeds and land records","es":"Secretaría municipal: escrituras y registros de propiedad","url":"https://www.cityofwesthaven.com/156/City-Clerks-Office"},
  {"en":"West Haven Tax Collector: property tax and sewer billing","es":"Recaudación de impuestos: facturas de propiedad y alcantarillado","url":"https://www.cityofwesthaven.com/180/Tax-Collector"},
  {"en":"West Haven Building Department and permit guidance","es":"Departamento de Construcción y guía de permisos","url":"https://www.cityofwesthaven.com/154/Building"},
  {"en":"West Haven building permit application and search portal","es":"Portal de solicitudes y consulta de permisos de construcción","url":"https://westhavenct.portal.fasttrackgov.com/Common/ApplicationLinks.aspx"},
  {"en":"West Haven Planning and Development: zoning and land use","es":"Planificación y Desarrollo: zonificación y uso del suelo","url":"https://www.cityofwesthaven.com/174/Planning-and-Development"},
  {"en":"West Haven Parks and Recreation programs","es":"Programas de Parques y Recreación de West Haven","url":"https://www.cityofwesthaven.com/172/Parks-and-Recreation"},
  {"en":"West Haven shoreline and beach access information","es":"Información sobre la costa y el acceso a las playas","url":"https://www.cityofwesthaven.com/294/Directions-to-Beaches"},
  {"en":"West Haven beach parking: license-plate-based resident eligibility (West Haven registration and no delinquent vehicle taxes), nonresident payment and annual passes; Dawson Avenue lot is restricted to residents and annual pass holders. Beach lots close half an hour after sunset. Separate guest/event permits apply to restricted residential streets (check current rules and fees).","es":"Estacionamiento en playas de West Haven: elegibilidad de residentes por matrícula (vehículo registrado en West Haven y sin impuestos de vehículo vencidos), pagos de no residentes y pases anuales; el estacionamiento de Dawson Avenue se reserva a residentes y titulares de pases anuales. Los estacionamientos de playa cierran media hora después de la puesta del sol. Hay permisos distintos para invitados y eventos en calles residenciales restringidas (verifica normas y tarifas vigentes).","url":"https://www.cityofwesthaven.com/166/Human-Resources-Social-Services"},
  {"en":"West Haven Public Works: sewer service and local infrastructure","es":"Obras Públicas: alcantarillado e infraestructura local","url":"https://cityofwesthaven.com/177/Public-Works"},
  {"en":"Regional Water Authority: start or stop water service and request property-closing statements; verify that the specific West Haven address is served","es":"Regional Water Authority: iniciar o terminar el servicio de agua y solicitar estados de cuenta para el cierre; confirma que atiende la dirección concreta en West Haven","url":"https://www.rwater.com/customer-care/start-or-stop-service/"},
  {"en":"West Haven recycling cart rules: use the city recycling cart and place recyclables loose, not in plastic bags; review the city’s recycling guides","es":"Normas del contenedor de reciclaje de West Haven: usa el contenedor municipal y deposita los materiales sueltos, sin bolsas plásticas; consulta las guías de reciclaje","url":"https://www.cityofwesthaven.com/266/Recycling-Info-Carts"},
  {"en":"West Haven weekly rubbish and recycling pickup: find your collection day by city district and confirm the address-specific district before moving","es":"Recogida semanal de basura y reciclaje en West Haven: consulta el día según el distrito municipal y confirma el distrito de la dirección antes de mudarte","url":"https://www.cityofwesthaven.com/1394/RubbishRecycling-Pickup-Schedule-Weekly"},
  {"en":"West Haven bulk trash and special disposal: check current collection weeks, accepted items and separate mattress, construction-debris and hazardous-waste rules","es":"Residuos voluminosos y eliminación especial en West Haven: consulta semanas de recogida, artículos permitidos y normas distintas para colchones, escombros y residuos peligrosos","url":"https://www.cityofwesthaven.com/260/Bulk-Trash-Pickup-Other-Services"},
  {"en":"West Haven Public Schools registration: official new-student enrollment starting point; confirm current documents, residency requirements and school assignment with the district","es":"Inscripción en las escuelas públicas de West Haven: punto de partida oficial para alumnos nuevos; confirma documentos, requisitos de residencia y escuela asignada con el distrito","url":"https://www.whschools.org/page/registration"},
 ],
 // Seymour sources checked 2026-10-24 against the official town pages; FY 2026-27 real-estate mill rate 28.64 appears on the Assessor page.
 // Tax amounts, exemptions, sewer service, permits and utilities depend on the individual property; confirm with town and providers.
 'seymour': [
  {"en":"Town of Seymour: municipal departments and contacts","es":"Municipio de Seymour: departamentos y contactos","url":"https://www.seymourct.org/directory"},
  {"en":"Assessor: FY 2026–27 mill rate 28.64, property assessments and exemptions; verify parcel-specific taxes","es":"Tasador: tasa de 28,64 mills para 2026–27, avalúos y exenciones; verifica impuestos de cada parcela","url":"https://www.seymourct.org/directory/assessor"},
  {"en":"Assessor's online parcel maps: research land and assessment information, not a boundary survey","es":"Mapas de parcelas del tasador: consulta terrenos y avalúos; no sustituyen un deslinde","url":"https://seymour.mapxpress.net/"},
  {"en":"Tax Collector: property tax bills, payment schedules and delinquent balances","es":"Recaudación: facturas de impuestos, fechas de pago y saldos vencidos","url":"https://www.seymourct.org/departments/TaxCollector"},
  {"en":"Tax Collector FAQ: July and January installments, grace periods and payment options","es":"Preguntas de impuestos: cuotas de julio y enero, plazos de gracia y formas de pago","url":"https://www.seymourct.org/departments/TaxCollector/tax-collector"},
  {"en":"Town Clerk: recorded deeds, land records and document-copy services","es":"Secretaría municipal: escrituras, registros de tierras y copias de documentos","url":"https://www.seymourct.org/departments/TownClerk"},
  {"en":"Building Inspector contacts: ask about permits, inspections and code compliance","es":"Contactos de inspección de edificios: consulta permisos, inspecciones y códigos","url":"https://www.seymourct.org/departments/staff_directory/BuildingInspector/"},
  {"en":"Town documents: building and zoning permit forms, wetlands applications and ordinances","es":"Documentos municipales: formularios de construcción, zonificación, humedales y ordenanzas","url":"https://www.seymourct.org/TownDocuments"},
  {"en":"Zoning Enforcement: land use, zoning approvals and property compliance","es":"Control de zonificación: uso de suelo, autorizaciones y cumplimiento de normas","url":"https://www.seymourct.org/departments/ZoningEnforcement"},
  {"en":"Water Pollution Control Authority: wastewater and sewer oversight; verify connection by address","es":"Autoridad de aguas residuales: alcantarillado y supervisión; verifica la conexión por dirección","url":"https://www.seymourct.org/departments/WaterPollutionControlAuthority"},
  {"en":"Public Works: garbage, bulk pickup, transfer station and snow removal information","es":"Obras Públicas: basura, recogida de objetos grandes, centro de transferencia y nieve","url":"https://www.seymourct.org/departments/publicworks"},
  {"en":"Town operations: municipal facilities, parks and development administration","es":"Operaciones municipales: instalaciones, parques y administración del desarrollo","url":"https://www.seymourct.org/departments/Operations"},
 ],
 // Naugatuck links checked 2026-10-24 against borough, CTDOT, CT Parks and Connecticut Water sources.
 // 2025 Grand List / FY 2026-27 real estate 40.44 mills and motor vehicles 32.46 mills: borough Tax Office.
 // Water and sewer connections, additional assessments and property conditions are address-specific.
 'naugatuck': [
  {"en":"Assessor: property cards, Grand List, exemptions and assessment appeals","es":"Tasador: fichas catastrales, lista de avalúos, exenciones y apelaciones","url":"https://www.naugatuck-ct.gov/assessor"},
  {"en":"Tax Office: 2025 Grand List real-estate rate 40.44 mills; motor vehicles 32.46 mills; verify each bill","es":"Recaudación: tasa inmobiliaria de 40,44 mills para la lista de 2025; vehículos 32,46; confirma cada factura","url":"https://naugatuck-ct.gov/tax-office"},
  {"en":"Town Clerk: deeds, land records and recorded-document requests","es":"Secretaría municipal: escrituras, registros de propiedad y solicitudes de documentos","url":"https://www.naugatuck-ct.gov/town-clerk"},
  {"en":"Building Inspector: permits, inspections and construction-code questions","es":"Inspección de edificios: permisos, inspecciones y consultas sobre códigos","url":"https://www.naugatuck-ct.gov/building-inspector"},
  {"en":"Land Use and Planning: zoning and wetlands contacts and application guidance","es":"Uso del suelo y planificación: contactos de zonificación, humedales y solicitudes","url":"https://www.naugatuck-ct.gov/land-use-planning-zoning"},
  {"en":"Land Use Regulations: zoning, subdivision and wetlands rules; check current amendments","es":"Normativa de uso del suelo: zonificación, subdivisiones y humedales; consulta las modificaciones vigentes","url":"https://www.naugatuck-ct.gov/land-use-regulations"},
  {"en":"Engineering and Water Pollution Control: drainage maps, sewer questions and possible assessments","es":"Ingeniería y control de aguas residuales: drenaje, alcantarillado y posibles cargos","url":"https://www.naugatuck-ct.gov/engineering-water-pollution-control"},
  {"en":"Public Works: town roads, winter maintenance and municipal service requests","es":"Obras Públicas: calles, mantenimiento invernal y solicitudes de servicio","url":"https://www.naugatuck-ct.gov/public-works"},
  {"en":"Refuse and Recycling: collection routes, transfer station and disposal rules","es":"Basura y reciclaje: rutas de recogida, centro de transferencia y normas","url":"https://www.naugatuck-ct.gov/public-works/refuse-recycle"},
  {"en":"Parks and Recreation: municipal parks, programs and posted access rules","es":"Parques y recreación: parques municipales, programas y normas de acceso","url":"https://www.naugatuck-ct.gov/parks-rec"},
  {"en":"Parks and Trails: borough trail maps including Gunntown and Andrew Mountain","es":"Parques y senderos: mapas municipales, incluidos Gunntown y Andrew Mountain","url":"https://naugatuck-ct.gov/parks-rec/parks-trails"},
  {"en":"Connecticut Water: provider lists Naugatuck among served towns; confirm service at the exact address","es":"Connecticut Water: incluye Naugatuck entre sus municipios; confirma el servicio en cada dirección","url":"https://www.ctwater.com/about-us/"},
  {"en":"CTDOT: Waterbury Branch substitute buses replace trains July 20, 2026 through May 31, 2027; check alerts","es":"CTDOT: autobuses sustituyen los trenes de Waterbury Branch del 20 de julio de 2026 al 31 de mayo de 2027; revisa avisos","url":"https://portal.ct.gov/dot/ctdot-press-releases/2026/substitute-busing-wbl-july-2026-through-may-2027"},
  {"en":"Larkin State Park Trail: Naugatuck access and flood-related closure elsewhere on the trail","es":"Sendero estatal Larkin: acceso desde Naugatuck y cierre por inundaciones en otro tramo","url":"https://ctparks.com/parks/larkin-state-park-trail"},
  {"en":"Naugatuck State Forest: state trail maps, access information and recreation rules","es":"Bosque estatal Naugatuck: mapas de senderos, acceso y normas de recreación","url":"https://ctparks.com/parks/naugatuck-state-forest"},
 ],
 // North Haven official town department pages and links checked 2026-10-24; FY2027 rate from CCM.
 // Cott land-record searches do not include real-estate tax or sewer-use liens: confirm with Tax Collector/WPCA.
 // The 30.56-mill base rate does not establish a specific parcel's bill or utility connections.
 'north-haven': [
  {"en":"Assessor: property assessments, Grand List, 2024 revaluation and tax-relief programs","es":"Tasador: avalúos, lista tributaria, reevaluación de 2024 y programas de alivio fiscal","url":"https://www.northhaven-ct.gov/government/town_departments/departments_(a_-_d)/assessor/index.php"},
  {"en":"Tax Collector: current bills, installments, payments and real-estate tax liens","es":"Recaudación: facturas, plazos, pagos y gravámenes por impuestos inmobiliarios","url":"https://www.northhaven-ct.gov/government/town_departments/departments_(s_-_z)/tax_collector/index.php"},
  {"en":"Online tax bills: official town instructions for searching and paying bills","es":"Facturas de impuestos en línea: instrucciones municipales para buscar y pagar","url":"https://www.northhaven-ct.gov/government/town_departments/departments_(s_-_z)/tax_collector/view_and_pay_tax_bills_online.php"},
  {"en":"Town Clerk: recorded deeds, land records and copies; check lien records with the proper office","es":"Secretaría municipal: escrituras y documentos; verifica gravámenes con la oficina correspondiente","url":"https://www.northhaven-ct.gov/government/town_departments/departments_(s_-_z)/town_clerk/index.php"},
  {"en":"Building Office: building permits, inspection scheduling and required approvals","es":"Oficina de Construcción: permisos, programación de inspecciones y autorizaciones","url":"https://www.northhaven-ct.gov/government/town_departments/departments_(a_-_d)/building/index.php"},
  {"en":"Land Use: zoning, wetlands and development review; verify restrictions for the parcel","es":"Uso del suelo: zonificación, humedales y revisión de proyectos; verifica cada parcela","url":"https://www.northhaven-ct.gov/government/town_departments/departments_(e_-_l)/land_use/index.php"},
  {"en":"Engineering: drainage, sewer installations, roads and floodplain regulations","es":"Ingeniería: drenaje, instalaciones de alcantarillado, calles y normas de zonas inundables","url":"https://www.northhaven-ct.gov/government/town_departments/departments_(e_-_l)/engineering/index.php"},
  {"en":"Public Works: town maintenance, sanitation and sewer-use questions","es":"Obras Públicas: mantenimiento, saneamiento y consultas sobre alcantarillado","url":"https://www.northhaven-ct.gov/government/town_departments/departments_(m_-_r)/public_works/index.php"},
  {"en":"Town GIS parcel map: map context is not a survey or proof of property boundaries","es":"Mapa GIS municipal: no sustituye un levantamiento ni acredita límites de propiedad","url":"https://northhavenct.mapgeo.io/"},
  {"en":"Town parks: municipal recreation areas and current access rules","es":"Parques municipales: espacios recreativos y normas vigentes de acceso","url":"https://www.northhaven-ct.gov/government/town_departments/departments_(m_-_r)/parks.php"},
  {"en":"Recreation Department: programs, pool information and seasonal schedules","es":"Recreación: programas, piscina y calendarios de temporada","url":"https://www.northhaven-ct.gov/government/town_departments/departments_(m_-_r)/recreation/index.php"},
  {"en":"North Haven Memorial Library: community services and links to municipal online tools","es":"Biblioteca Memorial de North Haven: servicios comunitarios y enlaces a trámites municipales","url":"https://www.northhavenlibrary.net/community-resources"},
  {"en":"Connecticut Conference of Municipalities: FY2027 base real-property rate of 30.56 mills; confirm actual bill","es":"Conferencia de Municipios de Connecticut: tasa inmobiliaria base FY2027 de 30,56 mills; confirma la factura real","url":"https://hub.ccm-ct.org/community/north-haven/"},
 ],
 // Meriden source pass 2026-10-25: municipal Assessor, Clerk, Building, Planning, Public Works,
 // Water/Sewer and parks pages, plus CCM FY2027 29.99-mill base real-estate rate.
 // The city's Tax Collection page still quotes a 2023 Grand List rate; do not present it as current.
 // Meriden has tax districts and a 2025 revaluation: verify each property's actual bill and services.
 'meriden': [
  {"en":"City Assessor: parcel values, assessment records and 2025 revaluation","es":"Tasador municipal: valores, registros catastrales y reevaluación de 2025","url":"https://www.meridenct.gov/city-services/finance/assessment-1/"},
  {"en":"2025 citywide revaluation: new assessments used for tax bills beginning July 2026","es":"Reevaluación municipal de 2025: nuevos avalúos para facturas desde julio de 2026","url":"https://www.meridenct.gov/city-services/finance/assessment-1/2025-citywide-revaluation/"},
  {"en":"Connecticut Conference of Municipalities: FY 2026–27 base real estate rate 29.99 mills; verify district charges and parcel bill","es":"Conferencia de Municipios: tasa inmobiliaria base 2026–27 de 29,99 mills; confirma cargos distritales y factura","url":"https://hub.ccm-ct.org/community/meriden/"},
  {"en":"Tax Collector: property taxes and water/sewer payments; some posted mill-rate text refers to older tax years","es":"Recaudación: impuestos y pagos de agua/alcantarillado; parte de la información tributaria corresponde a años anteriores","url":"https://www.meridenct.gov/city-services/finance/tax-collection/"},
  {"en":"City Clerk: recorded documents, deeds and official municipal records","es":"Secretaría municipal: documentos registrados, escrituras y archivos oficiales","url":"https://www.meridenct.gov/government/departments/city-clerk/"},
  {"en":"Land records: official deed search, recording details and online access","es":"Registros de tierras: búsqueda oficial de escrituras, inscripción y acceso en línea","url":"https://www.meridenct.gov/government/departments/city-clerk/land-records/"},
  {"en":"City GIS parcel viewer: assessment and map context, not a boundary survey","es":"Visor GIS de parcelas: avalúos y mapas orientativos, no sustituye un deslinde","url":"https://gis.meridenct.gov/meriden/"},
  {"en":"Building Department: construction permits, inspections and occupancy certificates","es":"Departamento de Construcción: permisos, inspecciones y certificados de ocupación","url":"https://www.meridenct.gov/government/departments/building-department-/"},
  {"en":"Planning and Zoning: zoning maps, subdivisions, wetlands and land-use approvals","es":"Planificación y Zonificación: mapas, subdivisiones, humedales y autorizaciones","url":"https://www.meridenct.gov/government/departments/planning-and-zoning/"},
  {"en":"Engineering permits: work in public rights-of-way, drainage and utility connections","es":"Permisos de Ingeniería: obras en vías públicas, drenaje y conexiones de servicios","url":"https://www.meridenct.gov/government/departments/public-works/engineering-documents-/"},
  {"en":"Meriden Water Division: municipal water service, billing and September 2026 rate notice; confirm each address","es":"División de Agua: servicio, facturación y aviso de tarifas de septiembre de 2026; confirma cada dirección","url":"https://www.meridenct.gov/city-services/utilities/meriden-water-division/"},
  {"en":"Water Pollution Control: municipal sewer system and connection inquiries; confirm parcel service and charges","es":"Control de Aguas Residuales: red de alcantarillado y consultas de conexión; confirma servicio y cargos","url":"https://www.meridenct.gov/city-services/utilities/water-pollution-control-division/"},
  {"en":"Trash and recycling: city collection applies to qualifying inner-district homes; outer-district residents arrange private hauling","es":"Basura y reciclaje: recogida municipal para viviendas elegibles del distrito interior; otras contratan servicio privado","url":"https://www.meridenct.gov/government/departments/public-works/curbside-recycling-solid-waste-trash-collection/"},
  {"en":"Parks and recreation: municipal parks, accessibility details and reservation information","es":"Parques y recreación: espacios municipales, accesibilidad y reservas","url":"https://www.meridenct.gov/city-services/parks-and-recreation/parks-park-rentals/"},
  {"en":"Hubbard Park and Castle Craig: city history, hiking and seasonal tower-road access","es":"Hubbard Park y Castle Craig: historia, senderos y acceso estacional por carretera","url":"https://www.meridenct.gov/city-services/parks-and-recreation/hubbard-park/"},
 ],

 // Southbury municipal sources verified 2026-10-25 against the Town's official department pages.
 // Town Tax Collector lists FY 2026-27 at 25.4 mills; CCM's Southbury page currently differs (23.29),
 // so defer to the municipality's own current published rate and verify parcel bills/district charges.
 // WPCA states Southbury has no municipal sewage system; private septic and water service vary by address.
 'southbury': [
  {"en":"Assessor: property cards, Grand List assessments and exemptions; verify the specific parcel","es":"Tasador: fichas catastrales, avalúos y exenciones; verifica la parcela","url":"https://www.southbury-ct.org/assessor"},
  {"en":"Town's FY 2026–27 mill rate: 25.4 mills per $1,000 of taxable assessment; confirm district charges and actual bill","es":"Tasa municipal 2026–27: 25,4 mills por cada $1.000 de avalúo gravable; confirma cargos distritales y factura","url":"https://www.southbury-ct.org/mill-rate"},
  {"en":"Tax Collector: property-tax bills, payment inquiries and delinquency information","es":"Recaudación: facturas de impuestos, consultas de pago e información de deudas","url":"https://www.southbury-ct.org/tax"},
  {"en":"Paying taxes: municipal installment rules and secure online-payment link","es":"Pago de impuestos: plazos municipales y enlace al sistema seguro de pagos","url":"https://www.southbury-ct.org/payingtaxes"},
  {"en":"Town Clerk: recorded deeds, land records and document-search information","es":"Secretaría municipal: escrituras registradas, registros inmobiliarios y búsquedas","url":"https://www.southbury-ct.org/townclerk"},
  {"en":"Town Clerk recording fees: deed-copy costs and land-record filing details","es":"Tarifas del registro municipal: copias de escrituras e inscripción de documentos","url":"https://www.southbury-ct.org/content/20556/20567/21548/22062.aspx"},
  {"en":"GIS and property cards: parcel maps and assessment context, not a legal boundary survey","es":"GIS y fichas de propiedades: mapas y avalúos orientativos; no sustituyen un deslinde legal","url":"https://www.southbury-ct.org/gis"},
  {"en":"Building Department: construction permits, inspections and online applications","es":"Construcción: permisos de obra, inspecciones y solicitudes en línea","url":"https://www.southbury-ct.org/building"},
  {"en":"Planning Department: subdivision questions, land-use plans and maps","es":"Planificación: consultas sobre subdivisiones, planes de uso del suelo y mapas","url":"https://www.southbury-ct.org/planning"},
  {"en":"Zoning Department: permitted uses, zoning map and land-use applications","es":"Zonificación: usos permitidos, mapa de zonas y solicitudes de uso del suelo","url":"https://southbury-ct.org/zoning"},
  {"en":"Inland Wetlands: permit reviews near wetlands and watercourses","es":"Humedales: revisión de permisos cerca de humedales y cursos de agua","url":"https://www.southbury-ct.org/inlandwetlands"},
  {"en":"Water Pollution Control Authority: no municipal sewage system; verify septic arrangements and any private system for each address","es":"Autoridad de Aguas Residuales: no hay alcantarillado municipal; verifica el sistema séptico o privado de cada dirección","url":"https://www.southbury-ct.org/content/20556/20610/20673/default.aspx"},
  {"en":"Southbury business guide: Housatonic Valley Health District handles septic and water-supply oversight; verify property-specific water source","es":"Guía municipal: el Distrito de Salud Housatonic Valley supervisa sistemas sépticos y fuentes de agua; verifica cada propiedad","url":"https://www.southbury-ct.org/startbusiness"},
  {"en":"Public Works: road maintenance, recycling and transfer-station information","es":"Obras Públicas: mantenimiento vial, reciclaje e información del centro de residuos","url":"https://www.southbury-ct.org/publicworks"},
  {"en":"Parks and Recreation: public parks, town pool and current program/access rules","es":"Parques y Recreación: parques públicos, piscina municipal y normas de acceso y programas","url":"https://www.southbury-ct.org/parkrec"},
 ],

 // Sherman: official town/agency pages independently checked 2026-10-29.
 // Assessor https://www.shermanct.gov/entities/assessor ; Tax Collector https://www.shermanct.gov/entities/tax-collector
 // Clerk https://www.shermanct.gov/entities/town-clerk ; Building https://www.shermanct.gov/entities/building-department
 // Planning https://www.shermanct.gov/entities/planning-and-zoning-department
 // Health https://www.shermanct.gov/entities/health-department
 // Parks https://www.shermanct.gov/subpages/catalog ; Library https://www.shermanlibrary.org/
 'sherman': [
  {en:'Assessor: review the parcel field card, 2023 revaluation and eligibility for assessment exemptions',es:'Tasador: consulta la ficha de la parcela, la reevaluación de 2023 y posibles exenciones',url:'https://www.shermanct.gov/entities/assessor'},
  {en:'Tax Collector: 17.41 municipal mills for FY 2026–27; verify the actual tax bill and any separate district levy',es:'Recaudación: tasa municipal de 17,41 mills para 2026–27; verifica la factura y posibles cargos de distritos',url:'https://www.shermanct.gov/entities/tax-collector'},
  {en:'Town Clerk: search recorded deeds, mortgages and liens through the official land-records service',es:'Secretaría municipal: busca escrituras, hipotecas y gravámenes en el registro oficial',url:'https://www.shermanct.gov/entities/town-clerk'},
  {en:'Building Department: confirm permits, inspections and records for proposed or existing improvements',es:'Construcción: confirma permisos, inspecciones y registros de mejoras existentes o propuestas',url:'https://www.shermanct.gov/entities/building-department'},
  {en:'Planning and Zoning: check current land-use rules, accessory dwellings and parcel restrictions',es:'Planificación y Zonificación: consulta normas vigentes, viviendas accesorias y restricciones de la parcela',url:'https://www.shermanct.gov/entities/planning-and-zoning-department'},
  {en:'Health Department: ask about private wells, septic permits and property-specific health records; Sherman reports no municipal water or sewer system',es:'Salud: pregunta por pozos privados, permisos sépticos y registros de la propiedad; Sherman informa que no tiene red municipal de agua ni alcantarillado',url:'https://www.shermanct.gov/entities/health-department'},
  {en:'Park and Recreation: review the Town Park–Colonial Park nature trail, boating rules and current programs',es:'Parques y Recreación: consulta el sendero Town Park–Colonial Park, normas de navegación y programas vigentes',url:'https://www.shermanct.gov/subpages/catalog'},
  {en:'Sherman Library: check local programs, digital materials and community resources',es:'Biblioteca de Sherman: consulta programas locales, materiales digitales y recursos comunitarios',url:'https://www.shermanlibrary.org/'},
  {en:'Social Services: find information about housing, food and energy assistance',es:'Servicios Sociales: encuentra información sobre ayuda para vivienda, alimentos y energía',url:'https://www.shermanct.gov/entities/social-services'},
 ],

 // Danbury municipal, tax, parks and school sources independently reviewed 2026-10-29.
 // Rates, fees, school assignment, permits and utility connections require property-specific rechecks.
 'danbury': [
  {"en":"City Hall and departments: find municipal contacts, public notices and resident services","es":"Ayuntamiento y departamentos: consulta contactos municipales, avisos públicos y servicios para residentes","url":"https://www.danbury-ct.gov/"},
  {"en":"Assessor: research parcel assessments, Grand List records and available exemptions before estimating taxes","es":"Tasador: investiga las valoraciones de parcelas, la lista fiscal y las exenciones antes de estimar impuestos","url":"https://assessor.danbury-ct.gov/"},
  {"en":"FY 2026–27 tax schedule: the October 1, 2025 Grand List uses 25.23 mills; check parcel bills and any additional charges","es":"Calendario fiscal 2026–27: la lista del 1 de octubre de 2025 utiliza 25,23 mills; confirma la factura y cargos adicionales","url":"https://assessor.danbury-ct.gov/162/Due-Dates"},
  {"en":"Tax Collector: confirm payment options, current balances, due dates and municipal utility billing","es":"Recaudación: confirma opciones de pago, saldos, vencimientos y facturación municipal de servicios","url":"https://www.taxcollector.danbury-ct.gov/"},
  {"en":"Town Clerk: request recorded deeds, land records, maps and official documents","es":"Secretaría municipal: solicita escrituras inscritas, registros de terrenos, planos y documentos oficiales","url":"https://www.danbury-ct.gov/265/Town-Clerk"},
  {"en":"Permit Center: review building, zoning, engineering and utility permit procedures for renovations or additions","es":"Centro de Permisos: consulta trámites de construcción, zonificación, ingeniería y servicios para reformas o ampliaciones","url":"https://www.danbury-ct.gov/237/Permit-Center"},
  {"en":"Planning and Zoning: check zoning regulations, land-use approvals and parcel-specific restrictions","es":"Planificación y Zonificación: consulta normas, autorizaciones de uso del suelo y restricciones de la parcela","url":"https://www.danbury-ct.gov/247/Planning-Zoning"},
  {"en":"Public Utilities: verify municipal water and sewer service availability, connection procedures and recycling information by address","es":"Servicios Públicos: verifica por dirección la disponibilidad de agua y alcantarillado, conexiones y reciclaje","url":"https://www.danbury-ct.gov/337/Public-Utilities"},
  {"en":"Public Works: ask about roads, public infrastructure and municipal service requests","es":"Obras Públicas: consulta asuntos de calles, infraestructura y solicitudes de servicios municipales","url":"https://danbury-ct.gov/295/Public-Works"},
  {"en":"Tarrywile Park Authority: check trail access, park rules and historic-site restrictions before visiting","es":"Autoridad de Tarrywile Park: comprueba senderos, normas del parque y restricciones de sitios históricos antes de visitar","url":"https://www.danbury-ct.gov/267/Tarrywile-Park-Authority"},
  {"en":"Danbury Public Schools: confirm registration requirements, school assignments, transportation and current district notices","es":"Escuelas Públicas de Danbury: confirma matrícula, asignación escolar, transporte y avisos vigentes del distrito","url":"https://www.danbury.k12.ct.us/"},
 ],

 // New Fairfield official municipal, school and state park resources checked 2026-10-29.
 // Verify parcel tax districts, school assignment, permits, utility connections and seasonal park access by address or visit.
 'new-fairfield': [
  {"en":"Town Hall and municipal departments: find local services, notices and contact information","es":"Ayuntamiento y departamentos: consulta servicios, avisos y contactos municipales","url":"https://www.newfairfield.org/municipal-departments"},
  {"en":"Assessor: research property assessments, the 2024 revaluation and parcel records before estimating taxes","es":"Tasador: investiga valoraciones, la reevaluación de 2024 y expedientes de parcelas antes de estimar impuestos","url":"https://www.newfairfield.org/municipal-departments/finance-and-taxes/assessor/real-estate"},
  {"en":"Tax Collector: confirm the 27.54-mill rate for FY 2026–27, the parcel's bill, exemptions and payment dates","es":"Recaudación: confirma la tasa de 27,54 mills para 2026–27, la factura, exenciones y vencimientos","url":"https://www.newfairfield.org/municipal-departments/finance-and-taxes/tax-collector/general-tax-questions"},
  {"en":"Town Clerk: search recorded land documents and learn about the RecordHub property-alert service","es":"Secretaría municipal: consulta documentos de terrenos y el servicio de alertas de propiedades RecordHub","url":"https://www.newfairfield.org/municipal-departments/town-administration/town-clerk"},
  {"en":"Building Department: verify permits, inspections and requirements before work on a property","es":"Construcción: verifica permisos, inspecciones y requisitos antes de realizar obras","url":"https://www.newfairfield.org/municipal-departments/services/building"},
  {"en":"Zoning: review current regulations, land-use records and parcel-specific restrictions","es":"Zonificación: revisa normas vigentes, expedientes de uso del suelo y restricciones de la parcela","url":"https://www.newfairfield.org/municipal-departments/services/zoning"},
  {"en":"Health Department: ask about septic permits, soil tests and health-related property records","es":"Salud: consulta permisos sépticos, pruebas del suelo y expedientes sanitarios de la propiedad","url":"https://www.newfairfield.org/municipal-departments/services/health"},
  {"en":"Parks and Recreation: check Town Beach passes, programs, seasonal access and fees","es":"Parques y Recreación: consulta pases de playa, programas, acceso estacional y tarifas","url":"https://www.newfairfield.org/municipal-departments/services/parks-and-recreation"},
  {"en":"Squantz Pond State Park: review trail information, parking reservations and current state rules","es":"Parque Estatal Squantz Pond: revisa senderos, reservas de estacionamiento y normas actuales","url":"https://ctparks.com/parks/squantz-pond-state-park"},
  {"en":"New Fairfield Public Schools: verify registration, school assignment, transportation and district notices","es":"Escuelas Públicas de New Fairfield: confirma matrícula, asignación escolar, transporte y avisos del distrito","url":"https://www.newfairfieldschools.org/"},
  {"en":"Drop Off Center and recycling: confirm permit requirements, accepted materials and fees","es":"Centro de residuos y reciclaje: confirma permisos, materiales aceptados y tarifas","url":"https://www.newfairfield.org/municipal-departments/services/public-works/drop-off-center-recycling"},
  {"en":"Public Works: contact the town about roads, drainage and municipal infrastructure","es":"Obras Públicas: consulta calles, drenaje e infraestructura municipal","url":"https://www.newfairfield.org/municipal-departments/services/public-works"},
 ],

 // Weston official town, school and conservation resources reviewed 2026-10-29.
 // Property-specific taxes, school eligibility, well/septic records and utility service require confirmation.
 'weston': [
  {"en":"Town Hall: municipal contacts and services at 56 Norfield Road; land-use offices are at the annex","es":"Ayuntamiento: servicios y contactos en 56 Norfield Road; las oficinas de uso del suelo están en el anexo","url":"https://www.westonct.gov/about-us/town-hall"},
  {"en":"Assessor: review field cards, the 2023 revaluation, 24.57-mill current rate and assessment appeals","es":"Tasador: consulta fichas, reevaluación de 2023, tasa vigente de 24,57 mills y apelaciones","url":"https://www.westonct.gov/government/municipal-departments/assessor"},
  {"en":"Tax Collector: verify property-specific tax bills, due dates, payment options and possible exemptions","es":"Recaudación: verifica facturas de la propiedad, vencimientos, pagos y posibles exenciones","url":"https://www.westonct.gov/government/municipal-departments/tax-collector"},
  {"en":"Town Clerk: access land-record indexes, deeds, recorded maps and other official documents","es":"Secretaría municipal: consulta índices de terrenos, escrituras, planos y otros documentos oficiales","url":"https://www.westonct.gov/government/municipal-departments/town-clerk"},
  {"en":"Building Department: check permits, inspections and certificate-of-occupancy procedures","es":"Construcción: revisa permisos, inspecciones y trámites de certificados de ocupación","url":"https://www.westonct.gov/government/municipal-departments/building-department"},
  {"en":"Planning and Zoning: review land-use rules, applications and property restrictions","es":"Planificación y Zonificación: revisa normas de uso del suelo, solicitudes y restricciones","url":"https://www.westonct.gov/government/municipal-departments/planning-and-zoning"},
  {"en":"Permit resources: locate building, health-district, conservation and zoning permit information","es":"Permisos: consulta trámites de construcción, distrito sanitario, conservación y zonificación","url":"https://www.westonct.gov/government/permits-regulations"},
  {"en":"Weston Public Schools: check enrollment, residency documentation, school assignments and transportation","es":"Escuelas Públicas de Weston: consulta matrícula, residencia, asignación escolar y transporte","url":"https://www.westonps.org/student-registration"},
  {"en":"Parks and Recreation: check park access, programs, registration and seasonal facilities","es":"Parques y Recreación: consulta acceso, programas, inscripciones e instalaciones de temporada","url":"https://www.westonct.gov/government/municipal-departments/parks-recreation"},
  {"en":"Devil's Den Preserve: consult the Nature Conservancy's trail map, access rules and directions","es":"Reserva Devil's Den: consulta senderos, normas de acceso e indicaciones de The Nature Conservancy","url":"https://www.nature.org/en-us/get-involved/how-to-help/places-we-protect/lucius-pond-ordwaydevils-den-preserve/"},
  {"en":"Transfer Station: confirm accepted materials, fees and waste or recycling procedures","es":"Centro de residuos: confirma materiales admitidos, tarifas y procedimientos de reciclaje","url":"https://www.westonct.gov/government/municipal-departments/transfer-station"},
  {"en":"Stormwater resources: review local drainage information and septic-system care guidance","es":"Aguas pluviales: consulta drenaje local y recomendaciones para sistemas sépticos","url":"https://www.westonct.gov/government/municipal-departments/public-works/stormwater-management-program"},
 ],

 // Bethel: eleven official municipal pages verified 2026-10-29; tax rate from the Tax Collector's 2025 Grand List notice.
 // Water/sewer connections, septic records, taxes and fees must be confirmed for each property.
 'bethel': [
  {"en":"Assessor: check parcel assessments, exemptions and the applicable Grand List before estimating property taxes","es":"Tasador: revisa tasaciones de parcelas, exenciones y la lista fiscal correspondiente antes de calcular impuestos","url":"https://bethel-ct.gov/depts-assessor"},
  {"en":"Tax Collector: the 2025 Grand List rate is 31.71 mills for FY 2026–27; confirm the actual parcel bill and any separate charges","es":"Recaudación: la tasa de la lista fiscal de 2025 es de 31,71 mills para 2026–27; confirma la factura de la parcela y los cargos adicionales","url":"https://bethel-ct.gov/depts-tax-collector"},
  {"en":"Town Clerk: obtain recorded deeds, land records, maps and certified municipal records","es":"Secretaría municipal: solicita escrituras inscritas, registros de terrenos, planos y documentos certificados","url":"https://bethel-ct.gov/depts-clerk"},
  {"en":"Building Department: review permits, inspection records and approval requirements for planned improvements","es":"Departamento de Construcción: consulta permisos, inspecciones y aprobaciones necesarias para reformas","url":"https://bethel-ct.gov/depts-building"},
  {"en":"Planning and Zoning: check zoning, subdivision and inland-wetlands rules for the individual parcel","es":"Planificación y Zonificación: consulta normas de zonificación, subdivisiones y humedales para la parcela","url":"https://bethel-ct.gov/planning-zoning"},
  {"en":"Public Works: ask about town roads, maintenance, drainage and public infrastructure","es":"Obras Públicas: consulta calles municipales, mantenimiento, drenaje e infraestructura pública","url":"https://bethel-ct.gov/public-works"},
  {"en":"Water and sewer billing: check whether an address is connected and review usage or assessment charges before transfer","es":"Facturación de agua y alcantarillado: confirma si la dirección está conectada y revisa cargos de uso o evaluación antes de la transferencia","url":"https://bethel-ct.gov/paywatersewer"},
  {"en":"Health Department septic guidance: verify septic permits, repairs and inspection records for properties with on-site systems","es":"Guía sanitaria sobre sistemas sépticos: verifica permisos, reparaciones e inspecciones de propiedades con sistemas individuales","url":"https://bethel-ct.gov/septic-repair"},
  {"en":"Transfer Station: check resident permit requirements, accepted waste and recycling procedures","es":"Centro de transferencia: consulta permisos para residentes, residuos admitidos y normas de reciclaje","url":"https://bethel-ct.gov/depts-transfer-station"},
  {"en":"Parks and Recreation: check programs, registration and current access to recreational facilities","es":"Parques y Recreación: consulta programas, inscripciones y acceso vigente a instalaciones recreativas","url":"https://bethel-ct.gov/depts-park-rec"},
  {"en":"Municipal directory: find town offices and contacts for property, school and moving questions","es":"Directorio municipal: encuentra oficinas y contactos para consultas de propiedades, escuelas y mudanzas","url":"https://bethel-ct.gov/directory"},
 ],

 // Redding: municipal resources and CCM FY2027 finance data reviewed 2026-10-29.
 // Town-wide rate excludes any applicable fire-district tax; sewer, well and septic service are property-specific.
 'redding': [
  {"en":"Assessor: review property assessment cards, revaluation, GIS and tax-relief programs","es":"Tasador: consulta fichas de valoración, reevaluación, mapas GIS y programas de alivio fiscal","url":"https://reddingct.gov/government/finance-and-taxes/assessor-town-of-redding-connecticut/"},
  {"en":"Tax Collector: review real-estate tax bills, installments and Georgetown sewer charges where applicable","es":"Recaudación: consulta impuestos inmobiliarios, cuotas y cargos de alcantarillado de Georgetown cuando correspondan","url":"https://reddingct.gov/government/town-administration/tax-collector/"},
  {"en":"FY 2026–27 town mill rate: Connecticut Conference of Municipalities reports 30.47 mills; verify applicable fire-district taxes and parcel bills","es":"Tasa municipal 2026–27: la Conferencia de Municipios de Connecticut indica 30,47 mills; verifica impuestos de distritos de bomberos y la factura de la parcela","url":"https://hub.ccm-ct.org/community/redding/"},
  {"en":"Town and fire-district tax portals: check whether separate fire-district bills apply to an address","es":"Portales de impuestos municipales y de distritos de bomberos: comprueba si la dirección tiene facturas adicionales","url":"https://reddingct.gov/view-pay-taxes/"},
  {"en":"Town Clerk: research recorded deeds, property transfers, land records and municipal documents","es":"Secretaría municipal: consulta escrituras inscritas, transferencias, registros de terrenos y documentos oficiales","url":"https://reddingct.gov/government/town-administration/town-clerk/"},
  {"en":"Building Department: verify permits and approvals for construction, additions and renovations","es":"Construcción: verifica permisos y aprobaciones de obras, ampliaciones y reformas","url":"https://reddingct.gov/government/services/building-department/"},
  {"en":"Zoning Department: review parcel-specific land-use and inland-watercourse restrictions","es":"Zonificación: revisa las restricciones de uso del suelo y cursos de agua de cada parcela","url":"https://reddingct.gov/government/services/zoning/"},
  {"en":"Health Department: ask about septic inspections, private water quality and health records","es":"Salud: consulta inspecciones sépticas, calidad del agua privada y expedientes sanitarios","url":"https://reddingct.gov/government/services/health-department/"},
  {"en":"Recycling and Transfer Station: review permits, fees and accepted materials before moving","es":"Reciclaje y centro de transferencia: consulta permisos, tarifas y materiales admitidos antes de mudarte","url":"https://reddingct.gov/government/services/recycling-center-and-transfer-station/"},
  {"en":"Highway Department: consult road maintenance, winter service and drainage questions","es":"Carreteras: consulta mantenimiento vial, servicio invernal y asuntos de drenaje","url":"https://reddingct.gov/government/services/public-works-highway-transfer-station/"},
  {"en":"Utility companies: consult the town's directory, then confirm the actual providers and service availability for the address","es":"Empresas de servicios: consulta el directorio municipal y confirma proveedores y disponibilidad para la dirección","url":"https://reddingct.gov/how-do-i/find-utility-companies/"},
  {"en":"Schools: review official town school links and confirm enrollment eligibility directly with the district","es":"Escuelas: consulta enlaces escolares municipales y confirma directamente con el distrito los requisitos de inscripción","url":"https://reddingct.gov/about-redding/schools/"},
 ],

 // Bridgeport: official city department pages and Bridgeport Public Schools checked 2026-10-29.
 // FY 2026–27 rate is for real/personal property; property-level assessments, sewer connections and charges require confirmation.
 'bridgeport': [
  {"en":"Tax Assessor: check the current Grand List assessment, parcel details, exemptions and appeals before estimating property taxes","es":"Tasador: consulta la valoración de la lista fiscal, datos de la parcela, exenciones y apelaciones antes de estimar impuestos","url":"https://www.bridgeportct.gov/government/departments/tax-assessor"},
  {"en":"Tax Collector: Bridgeport lists 27.95 mills for real and personal property in FY 2026–27; confirm the parcel assessment and actual bill","es":"Recaudación: Bridgeport publica 27,95 mills para inmuebles y bienes personales en 2026–27; confirma la valoración y factura de la parcela","url":"https://www.bridgeportct.gov/government/departments/tax-collector/general-tax-information"},
  {"en":"Town Clerk: research deeds, land records, recorded maps and other official documents before closing","es":"Secretaría municipal: consulta escrituras, registros de terrenos, planos inscritos y otros documentos antes del cierre","url":"https://www.bridgeportct.gov/government/departments/town-clerk"},
  {"en":"Building Department: check permit history and requirements for renovations, demolition, electrical and plumbing work","es":"Departamento de Construcción: consulta historial y requisitos de permisos para reformas, demoliciones, electricidad y plomería","url":"https://www.bridgeportct.gov/government/departments/building-department"},
  {"en":"Zoning Department: confirm the property's zoning, allowed uses and zoning-plan approval process","es":"Zonificación: confirma la clasificación de la parcela, usos permitidos y el proceso de aprobación de planos","url":"https://www.bridgeportct.gov/government/departments/zoning-department"},
  {"en":"Water Pollution Control Authority: verify sewer connections, outstanding charges and permits for a specific property","es":"Autoridad de Alcantarillado (WPCA): verifica conexiones, cargos pendientes y permisos de la propiedad concreta","url":"https://www.bridgeportct.gov/government/departments/water-pollution-control-authority-wpca"},
  {"en":"WPCA sewer use fees: review the FY 2027 usage-based rate and verify a property's actual bill","es":"Tarifas de alcantarillado: consulta la tarifa por consumo del año fiscal 2027 y verifica la factura real del inmueble","url":"https://www.bridgeportct.gov/government/departments/water-pollution-control-authority-wpca/sewer-use-fees"},
  {"en":"Public Facilities: review roadway maintenance, snow operations, street cleaning and sanitation services","es":"Servicios Públicos: consulta mantenimiento vial, operaciones de nieve, limpieza de calles y recogida de residuos","url":"https://www.bridgeportct.gov/government/departments/public-facilities"},
  {"en":"Trash and Recycling: check pickup schedules, accepted materials and current curbside rules for the address","es":"Basura y Reciclaje: consulta horarios de recogida, materiales aceptados y normas actuales para la dirección","url":"https://www.bridgeportct.gov/government/departments/public-facilities/trash-recycling"},
  {"en":"Transfer Station: check proof-of-residency rules, accepted items and restrictions before bringing moving debris","es":"Centro de transferencia: consulta identificación de residente, materiales aceptados y restricciones antes de llevar residuos de mudanza","url":"https://www.bridgeportct.gov/government/departments/public-facilities/transfer-station"},
  {"en":"New-homeowner trash and recycling bins: check the city's documentation and replacement-toter process","es":"Contenedores para nuevos propietarios: consulta la documentación municipal y el proceso de solicitud o reemplazo","url":"https://www.bridgeportct.gov/government/departments/public-facilities/trash-recycling/toter-request"},
  {"en":"Parks and Recreation: consult current park access, amenities and rules before planning a visit","es":"Parques y Recreación: consulta acceso, instalaciones y normas vigentes antes de planear una visita","url":"https://www.bridgeportct.gov/government/departments/parks-recreation"},
  {"en":"Bridgeport Public Schools: check enrollment steps and residency documentation directly with the district","es":"Escuelas Públicas de Bridgeport: consulta inscripción y documentos de residencia directamente con el distrito","url":"https://www.bridgeportedu.net/information/student-registration/student-registration-home"},
 ],

};
