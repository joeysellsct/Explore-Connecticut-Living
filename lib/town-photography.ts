// Only show town-specific photos after checking the image's location and reuse license.
// Wikimedia Commons file descriptions supply attribution and license information.
export type TownPhoto={title:string;titleEs?:string;file:string;credit:string;license:string;licenseUrl:string};
export const townPhotography:Record<string,TownPhoto[]>={
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
 'cheshire':[
  {title:'Farmington Canal Heritage Trail in West Cheshire',file:'Farmington Canal Heritage Trail, West Cheshire CT.jpg',credit:'John Phelan',license:'CC BY 4.0',licenseUrl:'https://creativecommons.org/licenses/by/4.0/'},
  {title:'Historic Farmington Canal Lock 12 in Cheshire',file:'Farmington canal lock 12.jpg',credit:'Staib',license:'CC BY-SA 3.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/3.0/'}
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
