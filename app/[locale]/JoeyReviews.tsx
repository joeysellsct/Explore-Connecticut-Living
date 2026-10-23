import Link from 'next/link';

const googleBusiness='https://www.google.com/maps/search/?api=1&query=Joey%20McVety%20with%20mygoodagent%20680%20Boston%20Post%20Rd%20Milford%20CT';
const zillowDirectory='https://zillow.com/reviews/write/?s=X1-ZUraiw82n5l3bd_6o78g';
const realty='https://www.realty.com/real-estate-agents/3549463/joey_mcvety';
const homes='https://www.homes.com/real-estate-agents/milford-ct/p3/';

export default function JoeyReviews({locale,compact=false}:{locale:string;compact?:boolean}){
 const es=locale==='es';
 return <section className={compact?'joey-reviews joey-reviews-compact':'joey-reviews'} aria-labelledby={compact?'joey-reviews-home':'joey-reviews-about'}>
  <span className="eyebrow dark">{es?'OPINIONES DE CLIENTES':'CLIENT REVIEWS'}</span>
  <h2 id={compact?'joey-reviews-home':'joey-reviews-about'}>{es?'Lo que dicen mis clientes':'What My Clients Are Saying'}</h2>
  <p className="joey-reviews-intro">{es?'Las recomendaciones de mis clientes significan mucho para mí. Puedes leer las opiniones en Google y compartir tu experiencia si hemos trabajado juntos.':'Client feedback means a lot to me. Read my reviews on Google, and if we’ve worked together, I’d appreciate you sharing your experience.'}</p>
  <div className="joey-review-feature">
   <div className="joey-review-stars" aria-label={es?'5 de 5 estrellas en Google':'5 out of 5 stars on Google'}>★★★★★</div>
   <strong>5.0 <span>/ 5.0</span></strong>
   <p>{es?'11 opiniones de Google':'11 Google reviews'}</p>
   <div className="joey-review-actions">
    <a className="button-primary" href={googleBusiness} target="_blank" rel="noopener noreferrer">{es?'Ver opiniones en Google':'Read Google Reviews'} ↗</a>
    <a className="button-outline" href={googleBusiness} target="_blank" rel="noopener noreferrer">{es?'Dejar una opinión en Google':'Leave a Google Review'} ↗</a>
   </div>
   <small>{es?'El enlace abre mi ficha de Google; elige «Escribir una reseña» para dejar tu opinión. Calificación consultada el 23 de octubre de 2026; puede cambiar.':'The link opens my Google business listing; select “Write a review” to leave feedback. Rating checked October 23, 2026 and may change.'}</small>
  </div>
  <h3>{es?'Otros perfiles inmobiliarios':'Other Real Estate Profiles'}</h3>
  <div className="joey-review-profiles">
   <a href={zillowDirectory} target="_blank" rel="noopener noreferrer"><strong>Zillow</strong><span>{es?'Dejar una opinión en Zillow':'Leave a Zillow Review'} ↗</span></a>
   <a href={realty} target="_blank" rel="noopener noreferrer"><strong>Realty.com</strong><span>{es?'Ver mi perfil inmobiliario':'View my real estate profile'} ↗</span></a>
   <a href={homes} target="_blank" rel="noopener noreferrer"><strong>Homes.com</strong><span>{es?'Encontrarme en el directorio':'Find me in the agent directory'} ↗</span></a>
  </div>
  <p className="joey-reviews-disclaimer">{es?'El enlace de Zillow abre el formulario de reseñas proporcionado por Joey. Homes.com abre un directorio, no un formulario directo de reseñas.':'The Zillow link opens the review form provided by Joey. Homes.com opens an agent directory, not a direct review form.'}</p>
  {compact&&<Link href={`/${locale}/about`} className="meet-bio-link">{es?'Conoce más sobre Joey':'Learn more about Joey'} →</Link>}
 </section>;
}
