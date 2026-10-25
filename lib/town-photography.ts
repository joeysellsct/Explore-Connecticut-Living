// Only show town-specific photos after checking the image's location and reuse license.
// Wikimedia Commons file descriptions supply attribution and license information.
export type TownPhoto={title:string;titleEs?:string;file:string;credit:string;license:string;licenseUrl:string};
export const townPhotography:Record<string,TownPhoto[]>={
 // Prospect: Commons image identity, location, creator and CC0 license checked 2026-10-25.
 // Sources: https://commons.wikimedia.org/wiki/File:Prospect,_Connecticut_Town_Green.jpg ; https://commons.wikimedia.org/wiki/File:Prospect,_Connecticut_Town_Hall.jpg ; https://commons.wikimedia.org/wiki/File:Prospect,_CT.jpg
 'prospect': [
  {"title":"Prospect Town Green (photographed October 2020)","titleEs":"Plaza histórica Prospect Town Green (fotografía de octubre de 2020)","file":"Prospect, Connecticut Town Green.jpg","credit":"CosmicKanan (MsCosmicAsh)","license":"CC0 1.0","licenseUrl":"https://creativecommons.org/publicdomain/zero/1.0/"},
  {"title":"Prospect Town Hall (photographed October 2020)","titleEs":"Ayuntamiento de Prospect (fotografía de octubre de 2020)","file":"Prospect, Connecticut Town Hall.jpg","credit":"CosmicKanan (MsCosmicAsh)","license":"CC0 1.0","licenseUrl":"https://creativecommons.org/publicdomain/zero/1.0/"},
  {"title":"Prospect village sign (photographed June 2025)","titleEs":"Letrero de bienvenida a Prospect (fotografía de junio de 2025)","file":"Prospect, CT.jpg","credit":"CTsignhunt","license":"CC0 1.0","licenseUrl":"https://creativecommons.org/publicdomain/zero/1.0/"},
 ],
  // Oxford: Wikimedia Commons file identity, location and author/license verified 2026-10-25.
 // Original files: https://commons.wikimedia.org/wiki/File:Southford_Falls_I.jpg ; https://commons.wikimedia.org/wiki/File:SouthfordFallsSP_IMG_0955.jpg ; https://commons.wikimedia.org/wiki/File:Oxford_Airport.JPG
 // Southford Falls State Park spans Oxford and Southbury; some bridges/trails are closed after 2024 flooding. Photos are historical, not proof of current access.
 'oxford': [
  {"title":"Southford Falls in Oxford (photographed October 2018; park spans Oxford and Southbury)","titleEs":"Cascadas de Southford Falls en Oxford (fotografía de octubre de 2018; el parque abarca Oxford y Southbury)","file":"Southford Falls I.jpg","credit":"Karl Thomas Moore (Karlfonza)","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"},
  {"title":"Covered bridge over Eight Mile Brook at Southford Falls State Park (photographed April 2015; Oxford-Southbury border park)","titleEs":"Puente cubierto sobre Eight Mile Brook en el parque estatal Southford Falls (fotografía de abril de 2015; parque entre Oxford y Southbury)","file":"SouthfordFallsSP IMG 0955.jpg","credit":"Morrowlong","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"},
  {"title":"Aerial view of Waterbury-Oxford Airport in Oxford (photograph uploaded November 2007)","titleEs":"Vista aérea del aeropuerto Waterbury-Oxford en Oxford (fotografía publicada en noviembre de 2007)","file":"Oxford Airport.JPG","credit":"Zook024","license":"CC BY-SA 3.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/3.0/"},
 ],
 // North Branford/Northford Commons location, original author and CC BY-SA license verified 2026-10-25.
 // Original files: https://commons.wikimedia.org/wiki/File:NorthBranfordCT_HowdLinsleyHouse.jpg ; https://commons.wikimedia.org/wiki/File:Northford_Congregational_Church_(1846).JPG ; https://commons.wikimedia.org/wiki/File:Aerial_view_of_Tilcon_Connecticut_quarry_and_Lake_Gaillard,_July_2019.JPG
 'north-branford': [
  {"title":"Howd-Linsley House in North Branford (photographed December 2018)","titleEs":"Casa Howd-Linsley en North Branford (fotografía de diciembre de 2018)","file":"NorthBranfordCT HowdLinsleyHouse.jpg","credit":"Magicpiano","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"},
  {"title":"Northford Community Church in Northford Center Historic District (photographed November 2013)","titleEs":"Iglesia comunitaria de Northford en el distrito histórico Northford Center (fotografía de noviembre de 2013)","file":"Northford Congregational Church (1846).JPG","credit":"Paperchaser29","license":"CC BY-SA 3.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/3.0/"},
  {"title":"Aerial view of Lake Gaillard and Tilcon quarry in North Branford (photographed July 2019)","titleEs":"Vista aérea del lago Gaillard y la cantera Tilcon en North Branford (fotografía de julio de 2019)","file":"Aerial view of Tilcon Connecticut quarry and Lake Gaillard, July 2019.JPG","credit":"Pi.1415926535","license":"CC BY-SA 3.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/3.0/"},
 ],
 // Middlebury location and licenses checked 2026-10-25 against Wikimedia Commons original file pages.
 // Sources: https://commons.wikimedia.org/wiki/File:Larkin_State_Park_Trail_cut,_Middlebury_CT.jpg ; https://commons.wikimedia.org/wiki/File:Quassy_Amusement_Park_-_48334606547.jpg ; https://commons.wikimedia.org/wiki/File:WoodenWarrior.jpg
 'middlebury': [
  {"title":"Larkin State Park Trail rock cut in Middlebury (photographed October 2023)","titleEs":"Trinchera rocosa del sendero Larkin State Park Trail en Middlebury (fotografía de octubre de 2023)","file":"Larkin State Park Trail cut, Middlebury CT.jpg","credit":"John Phelan (Faolin42)","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"},
  {"title":"Grand Carousel at Quassy Amusement Park in Middlebury (photographed July 2019)","titleEs":"Carrusel Grand Carousel del parque Quassy en Middlebury (fotografía de julio de 2019)","file":"Quassy Amusement Park - 48334606547.jpg","credit":"Roller Coaster Philosophy (Jeremy Thompson)","license":"CC BY 2.0","licenseUrl":"https://creativecommons.org/licenses/by/2.0/"},
  {"title":"Wooden Warrior roller coaster at Quassy in Middlebury (photographed June 2025)","titleEs":"Montaña rusa Wooden Warrior en Quassy, Middlebury (fotografía de junio de 2025)","file":"WoodenWarrior.jpg","credit":"Elvisisalive95","license":"CC BY 4.0","licenseUrl":"https://creativecommons.org/licenses/by/4.0/"},
 ],
 // Waterbury Wikimedia Commons locations, authors, dates and CC BY-SA licenses checked 2026-10-25.
 // Original files: Waterbury City Hall.jpg; PalaceTheater-WaterburyCT-1.jpg; WATERBURY UNION STATION BUILDING.jpg.
 // Gallery crops are adaptations; keep photographer credit, original source and ShareAlike license visible.
 'waterbury': [
  {"title":"Waterbury City Hall on Grand Street (2019 photograph)","titleEs":"Ayuntamiento de Waterbury en Grand Street (fotografía de 2019)","file":"Waterbury City Hall.jpg","credit":"Farragutful","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"},
  {"title":"Palace Theater in downtown Waterbury (2016 photograph)","titleEs":"Teatro Palace en el centro de Waterbury (fotografía de 2016)","file":"PalaceTheater-WaterburyCT-1.jpg","credit":"Koskenart","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"},
  {"title":"Waterbury Union Station clock tower (2022 photograph)","titleEs":"Torre del reloj de Union Station en Waterbury (fotografía de 2022)","file":"WATERBURY UNION STATION BUILDING.jpg","credit":"TRexEditorNJ (Ted Shaffrey)","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"},
 ],
 // Woodbridge, Connecticut: Wikimedia Commons town identity and licenses checked 2026-10-25.
 // https://commons.wikimedia.org/wiki/File:Woodbridge-ct-1st-church-of-christ.jpg
 // https://commons.wikimedia.org/wiki/File:WoodbridgeCT_NewEnglandCementCompanyQuarry.jpg
 // https://commons.wikimedia.org/wiki/File:WoodbridgeCT_ChatfieldFarmstead_Barn.jpg
 // Historical capture dates; keep author, license, ShareAlike and crop attribution visible.
 'woodbridge': [
  {"title":"First Church of Christ on the Woodbridge Green (2008 photograph)","titleEs":"Primera Iglesia de Cristo en el centro de Woodbridge (fotografía de 2008)","file":"Woodbridge-ct-1st-church-of-christ.jpg","credit":"Staib","license":"CC BY-SA 3.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/3.0/"},
  {"title":"Historic New England Cement Company Quarry in Woodbridge (2017 photograph)","titleEs":"Antigua cantera de New England Cement Company en Woodbridge (fotografía de 2017)","file":"WoodbridgeCT NewEnglandCementCompanyQuarry.jpg","credit":"Magicpiano","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"},
  {"title":"Chatfield Farmstead barn in Woodbridge (2017 photograph)","titleEs":"Granero de Chatfield Farmstead en Woodbridge (fotografía de 2017)","file":"WoodbridgeCT ChatfieldFarmstead Barn.jpg","credit":"Magicpiano","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"},
 ],
 // Southbury, Connecticut: Commons identity, author and CC license verified 2026-10-25.
 // https://commons.wikimedia.org/wiki/File:Southford_Falls_State_Park_-_Connecticut_-_4965616145.jpg
 // https://commons.wikimedia.org/wiki/File:SouthburyCT_HurleyRoadHD2.jpg
 // https://commons.wikimedia.org/wiki/File:SouthburyCT_RussianVillage_3.jpg
 // Captions identify original capture dates; preserve author, ShareAlike and crop notices.
 'southbury': [
  {"title":"Southford Falls State Park in Southford (2010 photograph)","titleEs":"Parque estatal Southford Falls en Southford (fotografía de 2010)","file":"Southford Falls State Park - Connecticut - 4965616145.jpg","credit":"Dougtone (Doug Kerr)","license":"CC BY-SA 2.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/2.0/"},
  {"title":"Hurley Road Historic District in Southbury (2016 photograph)","titleEs":"Distrito histórico Hurley Road en Southbury (fotografía de 2016)","file":"SouthburyCT HurleyRoadHD2.jpg","credit":"Magicpiano","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"},
  {"title":"Russian Village Historic District in Southbury (2016 photograph)","titleEs":"Distrito histórico Russian Village en Southbury (fotografía de 2016)","file":"SouthburyCT RussianVillage 3.jpg","credit":"Magicpiano","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"}
 ],
 // Wallingford, CONNECTICUT Commons source, identity, author and license checked 2026-10-25.
 // https://commons.wikimedia.org/wiki/File:Town_Hall_of_Wallingford.jpg
 // https://commons.wikimedia.org/wiki/File:St_Paul%27s_Episcopal_Church_Wallingford.jpg
 // https://commons.wikimedia.org/wiki/File:Wallingford_station_from_northbound_platform,_December_2017.JPG
 // All captions identify historical capture dates; preserve credits and ShareAlike notices on rendered pages.
 'wallingford': [
  {"title":"Wallingford Town Hall on South Main Street (2012 photograph)","titleEs":"Ayuntamiento de Wallingford en South Main Street (fotografía de 2012)","file":"Town Hall of Wallingford.jpg","credit":"Nancysands1965","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"},
  {"title":"St. Paul's Episcopal Church in Wallingford (2021 photograph)","titleEs":"Iglesia episcopal de San Pablo en Wallingford (fotografía de 2021)","file":"St Paul's Episcopal Church Wallingford.jpg","credit":"Gloucester1692","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"},
  {"title":"Wallingford Hartford Line station, northbound platform (2017 photograph)","titleEs":"Estación de Hartford Line en Wallingford, andén hacia el norte (fotografía de 2017)","file":"Wallingford station from northbound platform, December 2017.JPG","credit":"Pi.1415926535","license":"CC BY-SA 3.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/3.0/"},
 ],
 // Meriden, Connecticut (not the namesake English village): Commons source and CC terms checked 2026-10-25.
 // https://commons.wikimedia.org/wiki/File:Castle_Craig_Meriden_CT_2.jpg
 // https://commons.wikimedia.org/wiki/File:The_Walking_Bridge_At_The_Hub_Park_In_Meriden_(149365613).jpeg
 // https://commons.wikimedia.org/wiki/File:Hubbard_Park_Festival_of_Silver_Lights_20181229_Big_Cat.jpg
 // Historical dates and cropping/attribution terms must remain visible in rendered bilingual pages.
 'meriden': [
  {"title":"Castle Craig above Meriden (2018 aerial photograph)","titleEs":"Castle Craig sobre Meriden (fotografía aérea de 2018)","file":"Castle Craig Meriden CT 2.jpg","credit":"Hallettx","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"},
  {"title":"Pedestrian bridge at the downtown Hub park, Meriden (2016 photograph)","titleEs":"Puente peatonal en el parque Hub del centro de Meriden (fotografía de 2016)","file":"The Walking Bridge At The Hub Park In Meriden (149365613).jpeg","credit":"Mark Balcher","license":"CC BY 3.0","licenseUrl":"https://creativecommons.org/licenses/by/3.0/"},
  {"title":"Festival of Silver Lights display in Hubbard Park, Meriden (2018 photograph)","titleEs":"Iluminación del Festival of Silver Lights en Hubbard Park, Meriden (fotografía de 2018)","file":"Hubbard Park Festival of Silver Lights 20181229 Big Cat.jpg","credit":"Morrowlong","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"},
 ],
 // North Haven town identity, photographer, date and CC licenses verified 2026-10-25 at:
 // https://commons.wikimedia.org/wiki/File:St._Johns_Episcopal_Church,_North_Haven,_CT.jpg
 // https://commons.wikimedia.org/wiki/File:NorthHavenCT_RisingSunTavern.jpg
 // https://commons.wikimedia.org/wiki/File:NorthHavenCT_PinesBridgeHD_1.jpg
 // Captions give the image year; photos are not represented as current views.
 'north-haven': [
  {"title":"St. John's Episcopal Church, North Haven (2013 photograph)","titleEs":"Iglesia episcopal de San Juan, North Haven (fotografía de 2013)","file":"St. Johns Episcopal Church, North Haven, CT.jpg","credit":"Paperchaser29","license":"CC BY-SA 3.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/3.0/"},
  {"title":"Former Rising Sun Tavern, North Haven (2018 photograph)","titleEs":"Antigua taberna Rising Sun, North Haven (fotografía de 2018)","file":"NorthHavenCT RisingSunTavern.jpg","credit":"Magicpiano","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"},
  {"title":"Pines Bridge Historic District, North Haven (2018 photograph)","titleEs":"Distrito histórico Pines Bridge, North Haven (fotografía de 2018)","file":"NorthHavenCT PinesBridgeHD 1.jpg","credit":"Magicpiano","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"},
 ],
 // Naugatuck Wikimedia Commons file pages, location, author and license checked 2026-10-24:
 // https://commons.wikimedia.org/wiki/File:Naugatuck_Green,_Connecticut.jpg
 // https://commons.wikimedia.org/wiki/File:Congregational_Church,_Naugatuck,_Connecticut.jpg
 // https://commons.wikimedia.org/wiki/File:Naugatuck_Civil_War_Monument._On_the_Green..jpg
 // Historic images must not be treated as a live view; cropped display is disclosed on town pages.
 'naugatuck': [
  {"title":"Naugatuck Green (photographed September 2023)","titleEs":"Plaza municipal de Naugatuck (fotografía de septiembre de 2023)","file":"Naugatuck Green, Connecticut.jpg","credit":"Kenneth C. Zirkel","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"},
  {"title":"Congregational Church in Naugatuck (photographed September 2023)","titleEs":"Iglesia congregacional de Naugatuck (fotografía de septiembre de 2023)","file":"Congregational Church, Naugatuck, Connecticut.jpg","credit":"Kenneth C. Zirkel","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"},
  {"title":"Civil War monument on Naugatuck Green (historic view, September 2013)","titleEs":"Monumento de la Guerra Civil en la plaza de Naugatuck (vista histórica, septiembre de 2013)","file":"Naugatuck Civil War Monument. On the Green..jpg","credit":"Bill Hass","license":"CC BY-SA 3.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/3.0/"},
 ],
 // Bethany Commons file pages, photographer credits, locations and licenses verified 2026-10-24:
 // https://commons.wikimedia.org/wiki/File:Downs_Road,_Bethany,_Connecticut_(53834031755).jpg
 // https://commons.wikimedia.org/wiki/File:Lake_Watrous10-28-07.jpg
 // https://commons.wikimedia.org/wiki/File:WhittemoreSideTrailNaugatuckStateForestBethanyCT-MtLaurelPath.jpg
 // Older views are explicitly dated and do not represent current property or trail conditions.
 'bethany': [
  {"title":"Downs Road in Bethany (photographed July 2024)","titleEs":"Downs Road en Bethany (fotografía de julio de 2024)","file":"Downs Road, Bethany, Connecticut (53834031755).jpg","credit":"Ethan Long","license":"CC BY-SA 2.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/2.0/"},
  {"title":"Lake Watrous seen from the Regicides Trail near Bethany (historic view, October 2007)","titleEs":"Lago Watrous desde el sendero Regicides cerca de Bethany (vista histórica, octubre de 2007)","file":"Lake Watrous10-28-07.jpg","credit":"Tebersold","license":"CC BY-SA 3.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/3.0/"},
  {"title":"Whittemore side trail in Naugatuck State Forest, Bethany (historic view, April 2010)","titleEs":"Sendero secundario Whittemore en Naugatuck State Forest, Bethany (vista histórica, abril de 2010)","file":"WhittemoreSideTrailNaugatuckStateForestBethanyCT-MtLaurelPath.jpg","credit":"Morrowlong","license":"CC BY-SA 3.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/3.0/"},
 ],
 // Beacon Falls Wikimedia Commons location, photographer and licenses verified 2026-10-24:
 // https://commons.wikimedia.org/wiki/File:BeaconFalls_DepotStreetBridge.jpg (Magicpiano, CC BY-SA 4.0, 2017)
 // https://commons.wikimedia.org/wiki/File:BeaconFallsCT_HomeWoolenCompany1.jpg (Magicpiano, CC BY-SA 4.0, 2017)
 // https://commons.wikimedia.org/wiki/File:Beacon_Falls_Station.jpg (Adam Moss, CC BY-SA 2.0, 2011)
 // These are dated historical views; the 2011 station photo does not show current Waterbury Branch service.
 'beacon-falls': [
  {"title":"Depot Street Bridge in Beacon Falls (photographed March 2017)","titleEs":"Puente de Depot Street en Beacon Falls (fotografía de marzo de 2017)","file":"BeaconFalls DepotStreetBridge.jpg","credit":"Magicpiano","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"},
  {"title":"Historic Home Woolen Company building in Beacon Falls (photographed March 2017)","titleEs":"Edificio histórico de Home Woolen Company en Beacon Falls (fotografía de marzo de 2017)","file":"BeaconFallsCT HomeWoolenCompany1.jpg","credit":"Magicpiano","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"},
  {"title":"Beacon Falls railroad station in July 2011 (historic view; check current service alerts)","titleEs":"Estación de tren de Beacon Falls en julio de 2011 (vista histórica; consulte los avisos del servicio actual)","file":"Beacon Falls Station.jpg","credit":"Adam Moss","license":"CC BY-SA 2.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/2.0/"}
 ],

 // Seymour Commons file descriptions, depicted locations, photographer and CC BY-SA 3.0 licenses checked 2026-10-24:
 // https://commons.wikimedia.org/wiki/File:Seymour,_CT_-_Town_Hall_01.jpg
 // https://commons.wikimedia.org/wiki/File:Seymour,_CT_-_train_station_01.jpg
 // https://commons.wikimedia.org/wiki/File:Seymour,_CT_-_Bank_St_02.jpg
 // These 2012 photographs document historic scenes and must not be presented as current conditions.
 'seymour': [
  {"title":"Seymour Town Hall in the Downtown Seymour Historic District (photographed March 2012)","titleEs":"Ayuntamiento de Seymour en el distrito histórico del centro (fotografía de marzo de 2012)","file":"Seymour, CT - Town Hall 01.jpg","credit":"Joe Mabel","license":"CC BY-SA 3.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/3.0/"},
  {"title":"Seymour railroad station seen from Kisson's Crossing (photographed March 2012)","titleEs":"Estación de tren de Seymour vista desde Kisson's Crossing (fotografía de marzo de 2012)","file":"Seymour, CT - train station 01.jpg","credit":"Joe Mabel","license":"CC BY-SA 3.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/3.0/"},
  {"title":"Historic Bank Street storefront in downtown Seymour (photographed March 2012)","titleEs":"Fachada comercial histórica en Bank Street, centro de Seymour (fotografía de marzo de 2012)","file":"Seymour, CT - Bank St 02.jpg","credit":"Joe Mabel","license":"CC BY-SA 3.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/3.0/"},
 ],
 // Derby Commons file pages and licenses checked 2026-10-24:
 // https://commons.wikimedia.org/wiki/File:Naugatuck_River,_Derby,_CT,_USA.jpg
 // https://commons.wikimedia.org/wiki/File:City_Hall,_Derby_CT.jpg
 // https://commons.wikimedia.org/wiki/File:Derby_Osbornedale_house.jpg
 // Historical images do not represent current building conditions. Credit and license links must render on page.
 'derby': [
  {"title":"Naugatuck River from Derby Greenway (photographed November 2020)","titleEs":"Río Naugatuck desde Derby Greenway (fotografía de noviembre de 2020)","file":"Naugatuck River, Derby, CT, USA.jpg","credit":"Staib","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"},
  {"title":"Derby City Hall (photographed May 2014)","titleEs":"Ayuntamiento de Derby (fotografía de mayo de 2014)","file":"City Hall, Derby CT.jpg","credit":"John Phelan","license":"CC BY-SA 3.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/3.0/"},
  {"title":"Historic Osbornedale house in Derby (photographed July 2008)","titleEs":"Casa histórica de Osbornedale en Derby (fotografía de julio de 2008)","file":"Derby Osbornedale house.jpg","credit":"Polaron","license":"CC BY 3.0","licenseUrl":"https://creativecommons.org/licenses/by/3.0/"},
 ],
 // Ansonia-specific Commons images, locations, photographers and licenses checked 2026-10-24:
 // https://commons.wikimedia.org/wiki/File:MainStreetAnsoniaCT.jpg
 // https://commons.wikimedia.org/wiki/File:Ansonia_Nature_and_Recreation_Center_-_building.jpg
 // https://commons.wikimedia.org/wiki/File:AnsoniaCT_PublicLibrary.jpg
 // Historical photographs (2010–2017) are not evidence of current property or visitor conditions.
 'ansonia': [
  {"title":"Main Street in Ansonia's historic downtown (photographed 2010)","titleEs":"Main Street en el centro histórico de Ansonia (fotografía de 2010)","file":"MainStreetAnsoniaCT.jpg","credit":"Jerry Dougherty","license":"CC BY 2.5","licenseUrl":"https://creativecommons.org/licenses/by/2.5/"},
  {"title":"Ansonia Nature and Recreation Center visitor building (photographed July 2011)","titleEs":"Edificio de visitantes del Centro de Naturaleza y Recreación de Ansonia (fotografía de julio de 2011)","file":"Ansonia Nature and Recreation Center - building.jpg","credit":"Jllm06","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"},
  {"title":"Ansonia Public Library historic building (photographed October 2017)","titleEs":"Edificio histórico de la Biblioteca Pública de Ansonia (fotografía de octubre de 2017)","file":"AnsoniaCT PublicLibrary.jpg","credit":"Magicpiano","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"},
 ],
 // Orange, Connecticut Commons files and reuse terms verified 2026-10-24:
 // https://commons.wikimedia.org/wiki/File:Orange_CT_town_hall.jpg
 // https://commons.wikimedia.org/wiki/File:Pez_Visitor%27s_Center_208.JPG
 // https://commons.wikimedia.org/wiki/File:Orange_ct_congregational_church.jpg
 // Images date from 2007-2012; do not represent current facility conditions or visitor hours.
 'orange': [
  {"title":"Orange Town Hall exterior (photographed March 2009)","titleEs":"Exterior del ayuntamiento de Orange (fotografía de marzo de 2009)","file":"Orange CT town hall.jpg","credit":"Staib","license":"CC BY 3.0","licenseUrl":"https://creativecommons.org/licenses/by/3.0/"},
  {"title":"PEZ Visitor Center in Orange (photographed May 2012)","titleEs":"Centro de visitantes PEZ en Orange (fotografía de mayo de 2012)","file":"Pez Visitor's Center 208.JPG","credit":"Pedro Xing","license":"CC0 1.0","licenseUrl":"https://creativecommons.org/publicdomain/zero/1.0/"},
  {"title":"Orange Congregational Church in the historic center (photographed May 2007)","titleEs":"Iglesia congregacional de Orange en el centro histórico (fotografía de mayo de 2007)","file":"Orange ct congregational church.jpg","credit":"Staib","license":"CC BY 2.5","licenseUrl":"https://creativecommons.org/licenses/by/2.5/"},
 ],
 // Madison Commons file identity, Madison location, creator and CC BY-SA licenses verified 2026-10-24:
 // https://commons.wikimedia.org/wiki/File:Madison_Green,_Connecticut.JPG
 // https://commons.wikimedia.org/wiki/File:Hammonasset_Beach_State_Park.jpg
 // https://commons.wikimedia.org/wiki/File:Hammonasset_Beach_State_Park_-_foot_bridge.jpg
 'madison': [
  {"title":"Madison Green Historic District (photographed October 2012)","titleEs":"Distrito histórico Madison Green (fotografía de octubre de 2012)","file":"Madison Green, Connecticut.JPG","credit":"SveaA","license":"CC BY-SA 3.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/3.0/"},
  {"title":"Meigs Point shoreline at Hammonasset Beach State Park (photographed August 2016)","titleEs":"Costa de Meigs Point en el Parque Estatal Hammonasset Beach (fotografía de agosto de 2016)","file":"Hammonasset Beach State Park.jpg","credit":"Karl Thomas Moore","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"},
  {"title":"Footbridge over the eastern salt marsh at Hammonasset Beach State Park (photographed February 2017)","titleEs":"Puente peatonal sobre la marisma oriental del Parque Estatal Hammonasset Beach (fotografía de febrero de 2017)","file":"Hammonasset Beach State Park - foot bridge.jpg","credit":"Jllm06","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"},
 ],
 // Guilford location, photographer and reuse license verified against Commons file pages 2026-10-24:
 // https://commons.wikimedia.org/wiki/File:The_Guilford_Town_Green_in_Connecticut.jpg
 // https://commons.wikimedia.org/wiki/File:Green_Rectangle_Trail_passing_through_Rock_Cave_near_Moose_Hill_Road_in_Westwoods,_Guilford,_Connecticut.jpg
 // https://commons.wikimedia.org/wiki/File:GuilfordCT_DudleytownHD_2.jpg
 // Cropping and live image delivery still require rendered-page QA.
 'guilford': [
  {"title":"Guilford Town Green in the historic village center (photographed 2025)","titleEs":"Guilford Green en el centro histórico (fotografía de 2025)","file":"The Guilford Town Green in Connecticut.jpg","credit":"Fergo22","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"},
  {"title":"Rock Cave along the Green Rectangle Trail in Westwoods Preserve (photographed 2015)","titleEs":"Rock Cave en el sendero Green Rectangle de Westwoods Preserve (fotografía de 2015)","file":"Green Rectangle Trail passing through Rock Cave near Moose Hill Road in Westwoods, Guilford, Connecticut.jpg","credit":"Morrowlong","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"},
  {"title":"Dudleytown Historic District in Guilford (photographed 2018)","titleEs":"Distrito histórico de Dudleytown en Guilford (fotografía de 2018)","file":"GuilfordCT DudleytownHD 2.jpg","credit":"Magicpiano","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"},
 ],
 // Hamden image identity, location, author and license checked on Commons 2026-10-24:
 // https://commons.wikimedia.org/wiki/File:Hamden,_Connecticut_town_hall_and_sign.jpg
 // https://commons.wikimedia.org/wiki/File:Sleeping_Giant_State_Park,_Hamden,_Connecticut_(54512327437).jpg
 // https://commons.wikimedia.org/wiki/File:Farmington_Canal_Heritage_Trail_by_Whitney_Avenue,_Mount_Carmel,_Hamden,_CT_(53308793522).jpg
 'hamden': [
  {"title":"Hamden Memorial Town Hall and town sign (photographed 2020)","titleEs":"Ayuntamiento histórico y letrero de Hamden (fotografía de 2020)","file":"Hamden, Connecticut town hall and sign.jpg","credit":"Kenneth C. Zirkel","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"},
  {"title":"Sleeping Giant State Park in Hamden (photographed 2024)","titleEs":"Sleeping Giant State Park en Hamden (fotografía de 2024)","file":"Sleeping Giant State Park, Hamden, Connecticut (54512327437).jpg","credit":"Ethan Long","license":"CC BY-SA 2.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/2.0/"},
  {"title":"Farmington Canal Heritage Trail near Whitney Avenue in Mount Carmel (photographed 2023)","titleEs":"Sendero Farmington Canal junto a Whitney Avenue en Mount Carmel (fotografía de 2023)","file":"Farmington Canal Heritage Trail by Whitney Avenue, Mount Carmel, Hamden, CT (53308793522).jpg","credit":"Ethan Long","license":"CC BY-SA 2.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/2.0/"},
 ],
 // East Haven Commons file identities and license credits checked 2026-10-24; credits also documented at https://www.ethosguides.com/g/east-haven-ct-travel-guide/photos . Live delivery not yet verified.
 'east-haven': [
  {"title":"Tidal marshes at Farm River State Park","titleEs":"Marismas de marea en Farm River State Park","file":"Marshes at Farm River State Park (54052819227).jpg","credit":"Ethan Long","license":"CC BY-SA 2.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/2.0/"},
  {"title":"Historic trolley at the Shore Line Trolley Museum (2008)","titleEs":"Tranvía histórico en el Shore Line Trolley Museum (2008)","file":"BERA Trolley Station EastHaven-CT.jpg","credit":"Versageek","license":"CC BY-SA 3.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/3.0/"},
  {"title":"Old Stone Church near East Haven Town Green","titleEs":"Old Stone Church junto al centro histórico de East Haven","file":"EH Old Stone Church.jpg","credit":"Versageek","license":"CC BY-SA 3.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/3.0/"},
 ],
 // Branford Wikimedia Commons location, creator and CC BY-SA 4.0 licenses verified 2026-10-23:
 // https://commons.wikimedia.org/wiki/File:Branford_Town_Green,_Connecticut.jpg
 // https://commons.wikimedia.org/wiki/File:Stony_creek_branford.jpg
 'branford': [
  {
    "title": "Branford Town Green and historic town center (photographed 2019)",
    "titleEs": "Branford Green y centro histórico (fotografía de 2019)",
    "file": "Branford Town Green, Connecticut.jpg",
    "credit": "Kenneth C. Zirkel",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"
  },
  {
    "title": "Stony Creek waterfront in Branford (photographed 2019)",
    "titleEs": "Costa de Stony Creek en Branford (fotografía de 2019)",
    "file": "Stony creek branford.jpg",
    "credit": "Andreas Faessler",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"
  }
],
 // Manchester Commons file pages, locations, creators and licenses checked 2026-10-23: https://commons.wikimedia.org/wiki/File:Main_Street,_Manchester_CT.jpg ; https://commons.wikimedia.org/wiki/File:Case_Pond_Manchester_Connecticut.jpg ; https://commons.wikimedia.org/wiki/File:Cheney_Rail_Trail_bridge_over_Bigelow_Brook,_Manchester_CT.jpg
 'manchester': [
  {
    "title": "Main Street Historic District in Manchester (photographed 2013)",
    "titleEs": "Distrito histórico de Main Street en Manchester (fotografía de 2013)",
    "file": "Main Street, Manchester CT.jpg",
    "credit": "John Phelan",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  {
    "title": "Case Pond in the Case Mountain Recreational Area (photographed 2020)",
    "titleEs": "Case Pond en el área recreativa Case Mountain (fotografía de 2020)",
    "file": "Case Pond Manchester Connecticut.jpg",
    "credit": "Morrowlong",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"
  },
  {
    "title": "Cheney Rail Trail bridge over Bigelow Brook (photographed 2023)",
    "titleEs": "Puente del sendero ferroviario Cheney sobre Bigelow Brook (fotografía de 2023)",
    "file": "Cheney Rail Trail bridge over Bigelow Brook, Manchester CT.jpg",
    "credit": "John Phelan",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"
  }
],
 // Glastonbury image subjects, authors and CC BY-SA 4.0 licenses verified on Wikimedia Commons file descriptions 2026-10-23.
 'glastonbury': [
  {
    "title": "First Church of Christ in Glastonbury (photographed 2018)",
    "titleEs": "First Church of Christ en Glastonbury (fotografía de 2018)",
    "file": "First Church of Christ, Glastonbury CT.jpg",
    "credit": "John Phelan",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"
  },
  {
    "title": "South Glastonbury Library in the historic district (photographed 2018)",
    "titleEs": "Biblioteca de South Glastonbury en el distrito histórico (fotografía de 2018)",
    "file": "GlastonburyCT SouthGlastonburyLibrary.jpg",
    "credit": "Magicpiano",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"
  }
],
 // Rocky Hill Commons file descriptions, locations, authors and CC BY-SA 3.0 reuse rights verified 2026-10-23. Images dated 2007, not current-service depictions.
 'rocky-hill': [
  {
    "title": "Dinosaur State Park exhibit dome (photographed 2007)",
    "titleEs": "Cúpula de exposiciones de Dinosaur State Park (fotografía de 2007)",
    "file": "Dinosaur State Park (Rocky Hill, CT) - dome.JPG",
    "credit": "Daderot",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  {
    "title": "Rocky Hill–Glastonbury Ferry (photographed 2007)",
    "titleEs": "Ferry entre Rocky Hill y Glastonbury (fotografía de 2007)",
    "file": "IMG 4136 Rocky Hill - Glastonbury Ferry.jpg",
    "credit": "Denimadept",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
  }
],
 // Wethersfield photos, location, creators and CC licenses verified on Wikimedia Commons file pages 2026-10-23.
 'wethersfield':[{"title":"Main Street in historic Wethersfield","file":"Main Street, Wethersfield, Connecticut (54572267045).jpg","credit":"Ethan Long","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"},{"title":"Historic Wethersfield Cove Warehouse","file":"Wethersfield Cove Warehouse (54571935481).jpg","credit":"Ethan Long","license":"CC BY-SA 2.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/2.0/"}],
 // Middletown photo locations, creators and CC BY-SA 3.0 licenses verified 2026-10-23 on Wikimedia Commons file pages.
 'middletown':[
  {"title":"Main Street Historic District in downtown Middletown","file":"Downtown Middletown, CT.jpg","credit":"Daniel Case","license":"CC BY-SA 3.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/3.0/"},
  {"title":"Patricelli '92 Theater on the Wesleyan University campus","file":"Wesleyan University Middletown CT.jpg","credit":"Steadyjohn","license":"CC BY-SA 3.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/3.0/"},
 ],
 // Canton locations, creators and CC BY-SA 4.0 licenses verified 2026-10-23 on Wikimedia Commons file description pages.
 'canton':[
  {"title":"Farmington River Trail bridge in Collinsville","file":"Farmington River Trail bridge over the Farmington River, Collinsville CT.jpg","credit":"John Phelan","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"},
  {"title":"Canton Historical Museum in Collinsville","file":"Canton Historical Museum, Canton CT.jpg","credit":"John Phelan","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"},
 ],
 // Cheshire Commons file identities, photographer, location and licenses rechecked 2026-10-24: https://commons.wikimedia.org/wiki/File:Farmington_Canal_Heritage_Trail,_West_Cheshire_CT.jpg ; https://commons.wikimedia.org/wiki/File:Farmington_canal_lock_12.jpg. Verify live delivery and displayed attribution before launch.
 'cheshire': [
   {
     "title": "Farmington Canal Heritage Trail in West Cheshire (photographed 2024)",
     "titleEs": "Sendero Farmington Canal Heritage Trail en West Cheshire (fotografía de 2024)",
     "file": "Farmington Canal Heritage Trail, West Cheshire CT.jpg",
     "credit": "John Phelan",
     "license": "CC BY 4.0",
     "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
   },
   {
     "title": "Historic Farmington Canal Lock 12 in Cheshire (photographed 2007)",
     "titleEs": "Esclusa histórica número 12 del canal Farmington en Cheshire (fotografía de 2007)",
     "file": "Farmington canal lock 12.jpg",
     "credit": "Staib",
     "license": "CC BY-SA 3.0",
     "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
   }
 ],
 'milford':[{title:'Milford Green',file:'Milford Green.jpg',credit:'Wikimedia Commons contributor',license:'CC0 / public domain',licenseUrl:'https://commons.wikimedia.org/wiki/File:Milford_Green.jpg'}],
 'stonington':[
  {title:'Stonington Harbor Lighthouse',file:'Stonington Harbor Lighthouse 2007.jpg',credit:'Kenneth C. Zirkel',license:'CC BY-SA 3.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/3.0/'},
  {title:'Stonington Harbor Lighthouse, side view',file:'Stonington Harbor Lighthouse 2007 side view.jpg',credit:'Kenneth C. Zirkel',license:'CC BY-SA 3.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/3.0/'}
 ],
 'new-haven':[
  {title:'Five Mile Point Light at Lighthouse Point Park',file:'Five Mile Point Light, New Haven, Connecticut.jpg',credit:'Christian David',license:'CC BY-SA 4.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/'},
  {title:'Five Mile Point Light and New Haven Harbor',file:'Five Mile Point Light and the New Haven skyline, Connecticut.jpg',credit:'Christian David',license:'CC BY-SA 4.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/'},
  {title:'New Haven Green',file:'New Haven Green (54106261478).jpg',credit:'ajay_suresh',license:'CC BY 2.0',licenseUrl:'https://creativecommons.org/licenses/by/2.0/'},
  {title:'Path on the New Haven Green',file:'Path on the New Haven Green, New Haven, Connecticut.jpg',credit:'Christian David',license:'CC BY-SA 4.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/'}
 ],

 // West Haven Commons location, photographer and licenses checked 2026-10-23: https://commons.wikimedia.org/wiki/File:Savin_Rock,_West_Haven,_CT,_USA.jpg ; https://commons.wikimedia.org/wiki/File:WestHavenAerial5.jpg. Both photos may be cropped by the page layout; preserve attribution and share-alike obligations.
 'west-haven': [
  {"title":"Savin Rock outcropping and beach in West Haven (photographed 2021)","titleEs":"Rocas y playa de Savin Rock en West Haven (fotografía de 2021)","file":"Savin Rock, West Haven, CT, USA.jpg","credit":"Staib","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0/"},
  {"title":"Aerial view of the Bradley Point and Savin Rock shoreline (photographed 2007)","titleEs":"Vista aérea de la costa de Bradley Point y Savin Rock (fotografía de 2007)","file":"WestHavenAerial5.jpg","credit":"PostMan1107","license":"CC BY-SA 3.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/3.0/"},
 ],
};
