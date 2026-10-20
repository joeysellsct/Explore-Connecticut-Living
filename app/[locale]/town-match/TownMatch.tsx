'use client';
import {useMemo,useState} from 'react';
import Link from 'next/link';

type Answers={budget:string[];setting:string[];commute:string[];priority:string[];home:string[]};
import {connecticutTowns} from '../../../lib/connecticut-towns';

type Profile={slug:string;name:string;setting:string[];commute:string[];priority:string[];home:string[];county:string};
const shoreline=new Set('Greenwich|Stamford|Darien|Norwalk|Westport|Fairfield|Bridgeport|Stratford|Milford|West Haven|New Haven|East Haven|Branford|Guilford|Madison|Clinton|Westbrook|Old Saybrook|Old Lyme|East Lyme|Waterford|New London|Groton|Stonington'.split('|'));
const rail=new Set('Greenwich|Stamford|Darien|New Canaan|Norwalk|Wilton|Westport|Fairfield|Bridgeport|Stratford|Milford|West Haven|New Haven|East Haven|Branford|Guilford|Madison|Clinton|Westbrook|Old Saybrook|New London|Groton|Danbury|Bethel|Redding|Ridgefield|Shelton|Derby|Ansonia|Seymour|Waterbury|Naugatuck|Meriden|Wallingford|Berlin|Hartford|Windsor|Windsor Locks|Enfield|Newington|New Britain|Middletown'.split('|'));
const city=new Set('Bridgeport|New Haven|Hartford|Stamford|Waterbury|New Britain|New London|Norwalk|Danbury|Meriden|Bristol|Manchester|Middletown|Norwich|Torrington|West Hartford|Milford|Greenwich'.split('|'));
const downtown=new Set('New Haven|West Hartford|Middletown|Milford|Branford|Guilford|Madison|Old Saybrook|Essex|Chester|Mystic|Stonington|New London|Norwich|Stamford|Norwalk|Fairfield|Westport|Greenwich|Danbury|Manchester|Glastonbury|Southington|Wallingford|Wethersfield|Putnam|Litchfield|Ridgefield|Newtown|Bethel|Simsbury'.split('|'));
const ruralCounties=new Set(['Litchfield','Windham','Tolland']);
const nearNewHaven=new Set('New Haven|East Haven|West Haven|Hamden|North Haven|North Branford|Branford|Milford|Orange|Woodbridge|Bethany|Wallingford|Guilford|Derby|Ansonia|Seymour|Cheshire|Madison|Easton'.split('|'));
const nearHartford=new Set('Hartford|West Hartford|East Hartford|Wethersfield|Newington|New Britain|Bloomfield|Windsor|South Windsor|Manchester|Glastonbury|Rocky Hill|Farmington|Avon|Berlin|Cromwell|Simsbury|East Windsor|Windsor Locks|Bristol|Southington'.split('|'));
const nearNYC=new Set('Greenwich|Stamford|Darien|New Canaan|Norwalk|Westport|Wilton|Fairfield|Bridgeport|Stratford|Milford|Ridgefield|Redding|Bethel|Danbury|Trumbull'.split('|'));
const towns:Profile[]=connecticutTowns.map(t=>{
 const coast=shoreline.has(t.name),urban=city.has(t.name),walk=downtown.has(t.name);
 const rural=ruralCounties.has(t.county)||['Bethany','Easton','Weston','Redding','Oxford','Monroe','Killingworth','Durham','Haddam','East Haddam','Lyme','Old Lyme','Woodbridge','Guilford'].includes(t.name);
 return {slug:t.slug,name:t.name,county:t.county,
 setting:[...(coast?['shore']:[]),...(urban?['city']:['suburb']),...(rural?['country']:[])],
 commute:[...(nearNewHaven.has(t.name)?['new-haven']:[]),...(nearHartford.has(t.name)?['hartford']:[]),...(nearNYC.has(t.name)?['nyc']:[]),...(rail.has(t.name)?['train']:[])],
 priority:[...(coast?['water']:[]),...(walk?['walk']:[]),...(!urban?['quiet']:[])],
 home:urban?['single','condo','multi']:['single','condo',...(rural?[]:['multi'])]};});
function reasons(t:Profile,a:Answers,es:boolean){
 const items:string[]=[];
 if(a.setting.includes('shore')&&t.setting.includes('shore'))items.push(es?'comunidad costera':'coastal community');
 if(a.setting.includes('country')&&t.setting.includes('country'))items.push(es?'entorno tranquilo':'quieter setting');
 if(a.setting.includes('city')&&t.setting.includes('city'))items.push(es?'vida urbana':'city living');
 if(a.commute.includes('train')&&t.commute.includes('train'))items.push(es?'acceso ferroviario':'rail access');
 if(a.commute.includes('new-haven')&&t.commute.includes('new-haven'))items.push(es?'cerca de New Haven':'near New Haven');
 if(a.commute.includes('hartford')&&t.commute.includes('hartford'))items.push(es?'cerca de Hartford':'near Hartford');
 if(a.commute.includes('nyc')&&t.commute.includes('nyc'))items.push(es?'conexión hacia Nueva York':'New York commute area');
 if(a.priority.includes('walk')&&t.priority.includes('walk'))items.push(es?'centro con restaurantes':'downtown amenities');
 if(a.priority.includes('water')&&t.priority.includes('water'))items.push(es?'costa y playas':'shoreline and beaches');
 if(a.priority.includes('quiet')&&t.priority.includes('quiet'))items.push(es?'ritmo más tranquilo':'quieter pace');
 return items.slice(0,3).join(' · ')||(es?'Coincide con algunas de tus preferencias':'Matches some of your preferences');
}
type Question=[string,[string,string][]];
type Translations={questions:Question[];[key:string]:string|Question[]};
const copy:{en:Translations;es:Translations}={
 en:{eyebrow:'YOUR CONNECTICUT TOWN MATCH',title:'Where in Connecticut could you feel at home?',intro:'Answer five quick questions to discover communities worth exploring. No account required.',step:'Question',of:'of',multi:'Select all that apply.',questions:[
 ['What is your approximate home-buying budget?',[['under300','Under $300,000'],['300-450','$300,000–$450,000'],['450-650','$450,000–$650,000'],['over650','$650,000+'],['unsure','Still figuring it out']]],
 ['What kind of setting appeals to you?',[['shore','Coastal / shoreline'],['suburb','Suburban neighborhoods'],['city','Walkable city living'],['country','Quieter / more rural']]],
 ['What matters most for your commute?',[['new-haven','Convenient to New Haven'],['train','Rail / train access'],['hartford','Convenient to Hartford'],['nyc','Commute toward New York City'],['flexible','Flexible / work from home']]],
 ['What is your lifestyle priorities?',[['water','Waterfront and beaches'],['walk','Restaurants and downtown activities'],['quiet','Space and a quieter pace']]],
 ['What type of home are you looking for?',[['single','Single-family home'],['condo','Condo / townhome'],['multi','Multi-family property'],['unsure','Open to options']]]
 ],back:'Back',next:'Next',results:'See my town matches',matched:'Your Connecticut town matches',note:'Recommendations consider all 169 towns and general community characteristics. Budget is collected for Joey to review, but is not used to rank towns without verified current housing prices. Confirm commute times, home types, and affordability with current listings.',browse:'Explore town guide',search:'Search homes with Joey',leadTitle:'Want Joey to help narrow down your options?',leadBody:'Send your contact details, answers and town matches securely to Joey for a personal follow-up.',name:'Your name',email:'Email address',phone:'Phone number (required)',message:'Anything else Joey should know? (optional)',consent:'I agree to share my contact details and questionnaire responses with Joey McVety for a real estate follow-up.',send:'Send my request',sent:'Thanks! Your request was received. Joey will follow up with you.',restart:'Start over',required:'Please enter your name, phone number, a valid email, and check the confirmation box.',matchLabel:'Suggested match'},
 es:{eyebrow:'ENCUENTRA TU MUNICIPIO IDEAL',title:'¿Dónde podrías sentirte en casa en Connecticut?',intro:'Responde cinco preguntas rápidas para descubrir comunidades que vale la pena explorar. No necesitas crear una cuenta.',step:'Pregunta',of:'de',multi:'Selecciona todas las opciones que correspondan.',questions:[
 ['¿Cuál es tu presupuesto aproximado para comprar una vivienda?',[['under300','Menos de $300,000'],['300-450','$300,000–$450,000'],['450-650','$450,000–$650,000'],['over650','$650,000 o más'],['unsure','Todavía no lo sé']]],
 ['¿Qué tipo de entorno prefieres?',[['shore','Costa y playas'],['suburb','Vecindarios suburbanos'],['city','Vida urbana para caminar'],['country','Zona tranquila o rural']]],
 ['¿Qué es lo más importante para tus traslados?',[['new-haven','Cerca de New Haven'],['train','Acceso a trenes'],['hartford','Cerca de Hartford'],['nyc','Traslado hacia Nueva York'],['flexible','Flexible / trabajo desde casa']]],
 ['¿Qué estilo de vida prefieres?',[['water','Agua y playas'],['walk','Restaurantes y centros urbanos'],['quiet','Espacio y tranquilidad']]],
 ['¿Qué tipo de vivienda buscas?',[['single','Casa unifamiliar'],['condo','Condominio / casa adosada'],['multi','Propiedad multifamiliar'],['unsure','Estoy abierto a opciones']]]
 ],back:'Atrás',next:'Siguiente',results:'Ver mis recomendaciones',matched:'Tus municipios recomendados',note:'Las recomendaciones consideran los 169 municipios y sus características generales. El presupuesto se comparte con Joey, pero no influye en la clasificación sin precios verificados. Confirma los traslados, tipos de vivienda y precios con anuncios actuales.',browse:'Explorar la guía',search:'Buscar viviendas con Joey',leadTitle:'¿Quieres que Joey te ayude a elegir?',leadBody:'Envía tus datos de contacto, respuestas y recomendaciones a Joey de forma segura para recibir atención personalizada.',name:'Tu nombre',email:'Correo electrónico',phone:'Número de teléfono (obligatorio)',message:'¿Algo más que Joey deba saber? (opcional)',consent:'Acepto compartir mis datos de contacto y respuestas con Joey McVety para recibir seguimiento inmobiliario.',send:'Enviar mi solicitud',sent:'¡Gracias! Recibimos tu solicitud. Joey se comunicará contigo.',restart:'Empezar de nuevo',required:'Ingresa tu nombre, número de teléfono, un correo válido y marca la casilla de confirmación.',matchLabel:'Municipio recomendado'}
};
const keys:(keyof Answers)[]=['budget','setting','commute','priority','home'];
export default function TownMatch({locale}:{locale:string}){
 const es=locale==='es';const t=es?copy.es:copy.en;
 const [answers,setAnswers]=useState<Answers>({budget:[],setting:[],commute:[],priority:[],home:[]});
 const [sending,setSending]=useState(false);const [step,setStep]=useState(0);const [name,setName]=useState('');const [email,setEmail]=useState('');const [phone,setPhone]=useState('');const [message,setMessage]=useState('');const [consent,setConsent]=useState(false);const [error,setError]=useState('');const [prepared,setPrepared]=useState(false);
 const matches=useMemo(()=>towns.map(town=>{const score=(answers.setting.filter(v=>town.setting.includes(v)).length*4)+(answers.commute.filter(v=>town.commute.includes(v)).length*4)+(answers.priority.filter(v=>town.priority.includes(v)).length*3)+(answers.home.filter(v=>town.home.includes(v)).length*2);const seed=JSON.stringify(answers)+town.slug;let tie=0;for(let i=0;i<seed.length;i++)tie=(tie*31+seed.charCodeAt(i))|0;return {town,score,tie:tie>>>0};}).sort((a,b)=>b.score-a.score||a.tie-b.tie).slice(0,4),[answers]);
 const done=step===keys.length;const current=keys[step];
 function formatPhone(raw:string){const digits=raw.replace(/\D/g,'').slice(0,10);return digits.length>6?digits.slice(0,3)+'-'+digits.slice(3,6)+'-'+digits.slice(6):digits.length>3?digits.slice(0,3)+'-'+digits.slice(3):digits;}
 function toggle(value:string){setAnswers(a=>{const selected=a[current];const next=value==='unsure'?[...(selected.includes(value)?[]:[value])]:selected.includes(value)?selected.filter(v=>v!==value):[...selected.filter(v=>v!=='unsure'),value];return {...a,[current]:next};});}
 async function submit(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault();
  if(!name.trim()||phone.replace(/\D/g,'').length<10||!/^\S+@\S+\.\S+$/.test(email)||!consent){setError(es?'Ingresa un nombre, teléfono válido, correo electrónico y acepta la confirmación.':'Enter your name, a valid phone number and email, and check the consent box.');return;}
  setError('');setPrepared(false);setSending(true);
  try{
   const response=await fetch('/api/town-match',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,email,phone,message,consent,locale,answers,matches:matches.map(m=>m.town.name)})});
   if(!response.ok)throw new Error('Submission failed');
   setPrepared(true);
  }catch{setError(es?'No se pudo enviar tu solicitud. Inténtalo de nuevo.':'Your request could not be sent. Please try again.');}
  finally{setSending(false);}
 }
 return <main className="match-page"><div className="match-shell"><span className="towns-kicker">{t.eyebrow}</span><h1>{t.title}</h1><p className="match-intro">{t.intro}</p>{!done?<section className="match-panel"><div className="match-progress"><span>{t.step} {step+1} {t.of} {keys.length}</span><div className="match-track"><div style={{width:`${(step+1)/keys.length*100}%`}}/></div></div><h2>{t.questions[step][0]}</h2><p className="match-multi-hint">{String(t.multi)}</p><div className="match-options">{t.questions[step][1].map(([value,label])=><button type="button" key={value} className={answers[current].includes(value)?'match-option selected':'match-option'} aria-pressed={answers[current].includes(value)} onClick={()=>toggle(value)}>{label}<span aria-hidden="true">{answers[current].includes(value)?'✓':'□'}</span></button>)}</div><div className="match-controls"><button type="button" disabled={step===0} className="match-back" onClick={()=>setStep(s=>s-1)}>{t.back}</button><button type="button" className="match-next" disabled={answers[current].length===0} onClick={()=>setStep(s=>s+1)}>{step===keys.length-1?t.results:t.next} →</button></div></section>:<><section className="match-results"><h2>{t.matched}</h2><p>{t.note}</p><div className="match-results-grid">{matches.map(({town},i)=><article key={town.slug}><span className="match-rank">{t.matchLabel} {i+1}</span><h3>{town.name}</h3><p>{town.county} County</p><p>{reasons(town,answers,es)}</p><div className="match-result-actions"><Link href={`/${locale}/towns/${town.slug}`}>{t.browse} →</Link><a href="https://joeymcvety.mgarealty.com/" target="_blank" rel="noopener noreferrer">{t.search} ↗</a></div></article>)}</div></section><section className="match-lead"><h2>{t.leadTitle}</h2><p>{t.leadBody}</p><form onSubmit={submit}><div className="match-form-row"><label>{t.name} *<input required autoComplete="name" value={name} onChange={e=>setName(e.target.value)}/></label><label>{t.email} *<input required type="email" autoComplete="email" value={email} onChange={e=>setEmail(e.target.value)}/></label></div><label>{t.phone}<input required type="tel" inputMode="tel" autoComplete="tel" placeholder="203-555-1234" maxLength={12} value={phone} onChange={e=>setPhone(formatPhone(e.target.value))}/></label><label>{t.message}<textarea rows={3} value={message} onChange={e=>setMessage(e.target.value)}/></label><label className="match-consent"><input type="checkbox" checked={consent} onChange={e=>setConsent(e.target.checked)}/><span>{t.consent}</span></label>{error&&<p role="alert" className="match-error">{error}</p>}<button type="submit" disabled={sending||prepared} className="match-next">{sending?(es?"Enviando...":"Sending..."):t.send} →</button>{prepared&&<p role="status">{t.sent}</p>}</form></section><button className="match-restart" onClick={()=>{setStep(0);setPrepared(false);}}>{t.restart}</button></>}</div></main>;
}