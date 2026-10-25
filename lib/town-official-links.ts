// Source-checked public municipal and state resources. Extend town by town.
// These are information portals, not guarantees about an individual property's records.
export type TownOfficialLink = {en:string;es:string;url:string};
export const townOfficialLinks:Record<string,TownOfficialLink[]> = {
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
};
