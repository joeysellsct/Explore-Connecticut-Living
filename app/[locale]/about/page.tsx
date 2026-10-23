import JoeyReviews from '../JoeyReviews';
import JoeyProductionStats from '../JoeyProductionStats';
import type {Metadata} from 'next';
import {localizedSeo} from '../../../lib/seo';

export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{
 const {locale}=await params;
 return localizedSeo(locale,'about',locale==='es'?'Conoce a Joey McVety':'Meet Joey McVety',locale==='es'?'Conoce a Joey McVety, agente inmobiliario de Connecticut con mygoodagent LLC.':'Meet Joey McVety, a Connecticut real estate agent with mygoodagent LLC.');
}

export default async function AboutPage({params}:{params:Promise<{locale:string}>}){
 const {locale}=await params;const es=locale==='es';
 return <main className="compare-page about-joey">
 <span className="towns-kicker">{es?'CONOCE A TU AGENTE':'MEET YOUR CONNECTICUT AGENT'}</span>
 <h1>{es?'Conoce a Joey McVety':'Meet Joey McVety'}</h1>
 <div className="about-joey-portrait"><img src="/headshotnew.png" alt={es?"Joey McVety, agente inmobiliario en Connecticut":"Joey McVety, Connecticut real estate agent"} width="440" height="540" /></div>
 <p className="about-joey-subtitle">{es?'Agente inmobiliario de Connecticut | mygoodagent LLC':'Connecticut Real Estate Agent | mygoodagent LLC'}</p>
 {es?<div className="about-joey-body">
 <section><h2>Connecticut no es solo donde trabajo. Es mi hogar.</h2>
 <p>Soy Joey McVety, agente inmobiliario con licencia en Connecticut y afiliado a mygoodagent LLC. He vivido toda mi vida en Connecticut. Crecí en West Haven y ahora vivo en East Haven.</p>
 <p>Obtuve mi licencia inmobiliaria en 2021 y comencé mi carrera en William Raveis Real Estate antes de unirme a mygoodagent. Combino mi experiencia profesional con toda una vida de conocimiento de las comunidades de nuestro estado.</p>
 <p>Creo que los bienes raíces son mucho más que comprar y vender casas. Se trata de ayudar a las personas a tomar decisiones importantes, y me tomo esa responsabilidad muy en serio.</p>
 <p>Ya sea que compres tu primera casa, te mudes a Connecticut, busques una vivienda más pequeña, quieras invertir o estés pensando en vender, mi objetivo es hacer que el proceso sea lo más claro y sencillo posible.</p>
 <p>No soy un vendedor que presiona. Te daré consejos sinceros, responderé tus preguntas y te ayudaré a entender tus opciones sin apresurarte. Trabajo personalmente con compradores y vendedores en todo Connecticut, desde la búsqueda de propiedades y las estrategias de precio hasta la negociación, las inspecciones, la financiación y el cierre.</p>
 <p>Mi filosofía es sencilla: estar disponible, comunicarme con claridad, trabajar duro y tratar a los demás como me gustaría que me trataran.</p></section>
 <section><h2>Mi trayectoria</h2>
 <p>Mi experiencia profesional va más allá de los bienes raíces. También soy agente de fianzas con licencia en Connecticut desde el año 2000 y dirijo un negocio que atiende a personas de todo el estado.</p>
 <p>He tenido la oportunidad de formar parte de las juntas directivas de la Bail Association of Connecticut y de Professional Bail Agents of the United States (PBUS), una organización nacional que representa al sector de las fianzas.</p>
 <p>Más de 26 años en ese negocio me han enseñado mucho sobre negociación, resolución de problemas, situaciones difíciles y el trato con personas de todos los ámbitos. Esa experiencia también me ha sido valiosa en mi carrera inmobiliaria.</p></section>
 <section><h2>Comunidad y solidaridad</h2>
 <p>Creo en apoyar a las comunidades donde vivimos y trabajamos. Ya sea colaborando con organizaciones locales, apoyando pequeños negocios o contribuyendo a causas benéficas, para mí es importante devolver algo a la comunidad.</p>
 <p>Dos causas especialmente importantes para mí son el rescate de animales y las organizaciones de apoyo a veteranos. Estoy orgulloso de ser estadounidense y siento un enorme respeto por quienes han servido a nuestro país. Creo que apoyar a los veteranos y sus familias es una de las mejores formas de demostrarles nuestro agradecimiento.</p>
 <p>También soy un orgulloso papá perruno de Max y Lucy y creo firmemente en adoptar mascotas en lugar de comprarlas. Las organizaciones de rescate hacen un trabajo increíble y siempre me alegra apoyarlas.</p></section>
 <section><h2>Fuera del mundo inmobiliario</h2>
 <p>Cuando no estoy trabajando, tengo bastantes aficiones que me mantienen ocupado.</p>
 <p>Soy un gran aficionado a los Buffalo Bills y los New York Yankees, juego 9-ball de competición en un equipo de la American Poolplayers Association (APA) y disfruto de los videojuegos y el póker. Me gusta pensar que soy un jugador profesional de póker, aunque quizá ese título solo exista en mi imaginación. 😂</p>
 <p>También me encanta viajar y descubrir restaurantes, especialmente pizzerías. Como crecí en West Haven, me crié comiendo apizza al estilo de New Haven y estoy convencido de que algunas de las mejores pizzas del mundo están aquí mismo, en Connecticut.</p>
 <p>Me gusta compartir reseñas gastronómicas y recomendar negocios locales, así que probablemente verás un poco de esa personalidad por este sitio.</p></section>
 <section><h2>Por qué creé Explore Connecticut Living</h2>
 <p>Quería crear algo más útil que una página inmobiliaria típica llena de anuncios de propiedades.</p>
 <p>Connecticut tiene 169 municipios, cada uno con su propio carácter, historia, opciones de vivienda y atractivos. Ya sea que te interese vivir cerca de la costa, desplazarte a Nueva York, comparar impuestos inmobiliarios o descubrir restaurantes locales, hay mucho por explorar.</p>
 <p>Mi objetivo es que Explore Connecticut Living sea un recurso para quienes quieran conocer mejor nuestro estado y tomar decisiones informadas sobre dónde vivir.</p>
 <p>Y cuando estés listo para comprar o vender una vivienda en cualquier lugar de Connecticut, me encantaría trabajar contigo personalmente y ganarme tu confianza.</p>
 <h3>¿Quieres comprar o vender fuera de Connecticut? ¡Llámame de todos modos!</h3>
 <p>Aunque mi licencia inmobiliaria es de Connecticut, mygoodagent opera en varios estados y sigue expandiéndose. Si quieres comprar o vender donde tenemos presencia, puedo ponerte en contacto directamente con uno de nuestros agentes.</p>
 <p>Y si te mudas a un lugar donde mygoodagent todavía no opera, puedo ayudarte a encontrar a uno de mis socios inmobiliarios de confianza en esa zona.</p>
 <p>Ya sea que compres o vendas en Connecticut o estés planeando mudarte a otro estado, siempre estaré encantado de atender tu llamada. En Connecticut, me encantaría ser tu agente inmobiliario. En cualquier otro lugar, con gusto te ayudaré a encontrar al profesional adecuado.</p></section>
 </div>:<div className="about-joey-body">
 <section><h2>Connecticut Isn't Just Where I Work. It's Home.</h2>
 <p>I'm Joey McVety, a licensed Connecticut real estate agent with mygoodagent LLC. I've lived my entire life in Connecticut, growing up in West Haven and now calling East Haven home.</p>
 <p>I've been a licensed real estate agent since 2021, beginning my career with William Raveis Real Estate before joining mygoodagent. I bring both professional real estate experience and a lifetime of firsthand knowledge of the communities throughout our state.</p>
 <p>I believe real estate is about more than buying and selling houses. It's about helping people make important decisions, and I take that responsibility seriously.</p>
 <p>Whether you're buying your first home, relocating to Connecticut, downsizing, investing, or getting ready to sell, my goal is to make the process as smooth and straightforward as possible.</p>
 <p>I'm not a high-pressure salesperson. I'll give you honest advice, answer your questions, and help you understand your options without pushing you into a decision. I work with buyers and sellers throughout Connecticut, helping them navigate everything from property searches and pricing strategies to negotiations, inspections, financing, and closing.</p>
 <p>My philosophy is pretty simple: be available, communicate clearly, work hard, and treat people the way I'd want to be treated.</p></section>
 <section><h2>My Background</h2>
 <p>My professional experience goes beyond real estate. I've also been a licensed Connecticut bail bondsman since 2000, operating a business that serves people throughout the state.</p>
 <p>I've had the opportunity to serve on the Board of Directors of both the Bail Association of Connecticut and the Professional Bail Agents of the United States (PBUS), a national organization representing the bail bond industry.</p>
 <p>More than 26 years in that business has taught me a lot about negotiation, problem-solving, handling difficult situations, and working with people from all walks of life. Those experiences have been valuable in my real estate career as well.</p></section>
 <section><h2>Community & Giving Back</h2>
 <p>I'm a big believer in supporting the communities where we live and work. Whether it's helping local organizations, supporting small businesses, or contributing to charitable causes, I believe giving back is important.</p>
 <p>Two causes especially close to my heart are animal rescue and veterans' organizations. I'm a proud American with tremendous respect for the men and women who have served our country, and I believe supporting our veterans and their families is one of the best ways to show our appreciation.</p>
 <p>I'm also a proud dog dad to Max and Lucy, and I'm a big believer in adopting rather than shopping for pets. Animal rescue organizations do incredible work, and they're among the causes I'm always happy to support.</p></section>
 <section><h2>Outside of Real Estate</h2>
 <p>When I'm not working, I have plenty of interests that keep me busy.</p>
 <p>I'm a huge Buffalo Bills and New York Yankees fan, play competitive 9-ball on an American Poolplayers Association (APA) league team, and enjoy gaming and poker. I like to consider myself a professional poker player, although that title might only exist in my own mind! 😂</p>
 <p>I also love traveling and discovering new restaurants, especially pizza places. Growing up in West Haven, I was raised on New Haven-style apizza, and I'm convinced some of the best pizza in the world is right here in Connecticut.</p>
 <p>I enjoy sharing food reviews and recommending local businesses, so you'll probably see some of that personality throughout this website.</p></section>
 <section><h2>Why I Created Explore Connecticut Living</h2>
 <p>I wanted to create something more useful than a typical real estate website filled with property listings.</p>
 <p>Connecticut has 169 towns, each with its own character, history, housing options, and attractions. Whether you're interested in shoreline living, commuting to New York City, comparing property taxes, or discovering local restaurants, there's a lot worth exploring.</p>
 <p>My goal is to make Explore Connecticut Living a resource for anyone who wants to learn more about our state and make informed decisions about where to live.</p>
 <p>And when you're ready to buy or sell a home anywhere in Connecticut, I'd love the opportunity to work with you personally and earn your business.</p>
 <h3>Thinking about buying or selling outside of Connecticut? Give me a call anyway!</h3>
 <p>While I'm personally licensed in Connecticut, mygoodagent operates in multiple states and continues to expand. If you're looking to buy or sell in a state where we have a presence, I can connect you directly with one of our agents within the brokerage.</p>
 <p>And if you're moving somewhere mygoodagent hasn't reached yet, I can still help by connecting you with one of my trusted real estate referral partners in that area.</p>
 <p>Whether you're buying or selling anywhere in Connecticut or planning a move out of state, I'm always happy to take your call. Here in Connecticut, I'd love to be your real estate agent. Anywhere else, I'll be happy to help you find the right one.</p></section>
 </div>}
 <JoeyProductionStats locale={locale} />
 <JoeyReviews locale={locale} />
 </main>;
}
