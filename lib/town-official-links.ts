// Source-checked public municipal and state resources. Extend town by town.
// These are information portals, not guarantees about an individual property's records.
export type TownOfficialLink = {en:string;es:string;url:string};
export const townOfficialLinks:Record<string,TownOfficialLink[]> = {
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
  {en:"City Clerk land records and online indexed records (via site map)",es:"Registros de escrituras y documentos indexados de la secretaría municipal (mapa del sitio)",url:"https://www.milfordct.us/sitemap"},
  {en:"Planning and Zoning: permits, land use and flood-zone maps",es:"Planificación y zonificación: permisos, uso del suelo y mapas de inundación",url:"https://milfordct.us/540/Planning-Zoning"},
  {en:"City maps, school district maps and resident beach parking (via site map)",es:"Mapas municipales, distritos escolares y estacionamiento de residentes en playas (mapa del sitio)",url:"https://milfordct.us/sitemap"},
  {en:"Tax collector FAQs: real estate tax installments and sewer bills",es:"Preguntas de impuestos: cuotas inmobiliarias y facturas de alcantarillado",url:"https://www.milfordct.us/faq"},
  {en:"Milford public works and wastewater department contacts",es:"Contactos de obras públicas y aguas residuales de Milford",url:"https://www.milfordct.us/m/directory"},
  {en:"Milford beach parking: resident stickers and current requirements",es:"Estacionamiento en playas de Milford: permisos de residentes y requisitos vigentes",url:"https://milfordct.us/680/Resident-Parking-Stickers"},
  {en:"Milford beach water-quality monitoring and swimming advisories",es:"Control de calidad del agua en las playas de Milford y avisos para bañistas",url:"https://www.milfordct.us/402/Beach-Monitoring"},
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

};
