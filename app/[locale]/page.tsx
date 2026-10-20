import Link from 'next/link';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const es = locale === 'es';
  const t = es ? {
    eyebrow: 'TU PRÓXIMO CAPÍTULO EMPIEZA AQUÍ',
    title: 'Encuentra tu lugar en Connecticut.',
    subtitle: 'Desde pueblos costeros hasta comunidades rurales y ciudades llenas de vida, descubre dónde te sentirás en casa.',
    browse: 'Explorar los 169 municipios',
    discover: 'Conoce Connecticut',
    introTag: 'UN ESTADO. MUCHAS FORMAS DE VIVIR.',
    introTitle: 'Conoce las comunidades antes de mudarte.',
    introBody: 'Explora información local, opciones de transporte, estilos de vida y recursos para planificar tu próximo paso con confianza.',
    coastal: 'Vida junto a la costa',
    coastalBody: 'Descubre comunidades de Long Island Sound, playas y centros históricos.',
    towns: 'Pueblos y comunidades',
    townsBody: 'Compara el carácter de los pueblos, desde pequeñas localidades hasta centros urbanos.',
    commute: 'Tu vida diaria',
    commuteBody: 'Piensa en transporte, vecindarios y actividades que importan para tu rutina.',
    guideTag: 'HECHO PARA TU MUDANZA',
    guideTitle: 'La búsqueda de tu próximo hogar empieza con el lugar adecuado.',
    guideBody: 'Estamos construyendo guías de municipios, herramientas de comparación y recursos de reubicación para ayudarte a explorar Connecticut.',
    guideButton: 'Ver municipios',
    photoTag: 'EXPLORA POR ESTILO DE VIDA',
    photoTitle: 'Un lugar para cada estilo de vida.',
    photoLead: 'Encuentra la comunidad que mejor se adapte a ti.',
    meetTag: 'TU CONTACTO LOCAL',
    meetTitle: 'Conoce a Joey McVety',
    meetBody: '¿Estás pensando en mudarte a Connecticut? Soy un agente de bienes raíces de mygoodagent y trabajo con compradores y vendedores en todo Connecticut. Exploremos juntos tus opciones.',
    meetCall: 'Llama a Joey',
    meetEmail: 'Enviar un correo',
    footer: 'Impulsado por Joey McVety de mygoodagent',
    note: 'Las herramientas de comparación y las guías detalladas se agregarán próximamente.'
  } : {
    eyebrow: 'YOUR NEXT CHAPTER STARTS HERE',
    title: 'Find your place in Connecticut.',
    subtitle: 'From shoreline towns to quiet country roads and vibrant downtowns, discover the communities that feel like home.',
    browse: 'Explore all 169 towns',
    discover: 'Discover Connecticut',
    introTag: 'ONE STATE. SO MANY WAYS TO LIVE.',
    introTitle: 'Get to know the community before you make your move.',
    introBody: 'Explore local character, commuting options, lifestyle highlights, and practical resources to help plan your next chapter.',
    coastal: 'Shoreline living',
    coastalBody: 'Explore Long Island Sound communities, beaches, and historic town centers.',
    towns: 'Towns & neighborhoods',
    townsBody: 'Discover the character of Connecticut communities, from small towns to lively cities.',
    commute: 'Everyday life',
    commuteBody: 'Think about transportation, local amenities, and the routines that matter to you.',
    guideTag: 'BUILT FOR YOUR NEXT MOVE',
    guideTitle: 'Finding the right home starts with finding the right place.',
    guideBody: 'We are building town guides, comparison tools, and relocation resources to help you explore Connecticut with confidence.',
    guideButton: 'Browse Connecticut towns',
    photoTag: 'EXPLORE BY LIFESTYLE',
    photoTitle: 'A place for every kind of life.',
    photoLead: 'Start with the Connecticut setting that feels right for you.',
    meetTag: 'YOUR LOCAL CONNECTION',
    meetTitle: 'Meet Joey McVety',
    meetBody: "Thinking about making a move in Connecticut? I'm a real estate agent with mygoodagent, helping buyers and sellers throughout the state. Let's talk about your next move.",
    meetCall: 'Call Joey',
    meetEmail: 'Email Joey',
    footer: 'Powered by Joey McVety of mygoodagent',
    note: 'Detailed town guides and comparison tools are coming soon.'
  };

  return <main className="homepage">
    <section className="hero">
      <div className="hero-inner">
        <span className="eyebrow">{t.eyebrow}</span>
        <h1>{t.title}</h1>
        <p className="hero-copy">{t.subtitle}</p>
        <div className="hero-actions">
          <Link className="button-primary" href={`/${locale}/town-match`}>{es ? "Encuentra tu municipio ideal" : "Find your town match"} →</Link><Link className="button-secondary" href={`/${locale}/towns`}>{t.browse} <span aria-hidden="true">→</span></Link>
          <a className="button-secondary" href="#discover">{t.discover} <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <div className="hero-caption">CONNECTICUT · NEW ENGLAND</div>
    </section>

    <section className="intro-section" id="discover">
      <div className="section-heading">
        <span className="eyebrow dark">{t.introTag}</span>
        <h2>{t.introTitle}</h2>
        <p>{t.introBody}</p>
      </div>
      <div className="feature-grid">
        <article className="feature-card"><div className="feature-icon" aria-hidden="true">≈</div><h3>{t.coastal}</h3><p>{t.coastalBody}</p></article>
        <article className="feature-card"><div className="feature-icon" aria-hidden="true">⌂</div><h3>{t.towns}</h3><p>{t.townsBody}</p></article>
        <article className="feature-card"><div className="feature-icon" aria-hidden="true">↗</div><h3>{t.commute}</h3><p>{t.commuteBody}</p></article>
      </div>
    </section>

    <section className="photo-section">
      <div className="photo-heading"><span className="eyebrow dark">{t.photoTag}</span><h2>{t.photoTitle}</h2><p>{t.photoLead}</p></div>
      <div className="photo-grid">
        <Link href={`/${locale}/towns`} className="photo-tile tile-shore"><span className="tile-label">{t.coastal}<small>{t.coastalBody}</small></span><span className="tile-arrow" aria-hidden="true">↗</span></Link>
        <Link href={`/${locale}/towns`} className="photo-tile tile-village"><span className="tile-label">{t.towns}<small>{t.townsBody}</small></span><span className="tile-arrow" aria-hidden="true">↗</span></Link>
        <Link href={`/${locale}/towns`} className="photo-tile tile-city"><span className="tile-label">{t.commute}<small>{t.commuteBody}</small></span><span className="tile-arrow" aria-hidden="true">↗</span></Link>
      </div>
    </section>

    <section className="guide-section">
      <div className="guide-copy">
        <span className="eyebrow dark">{t.guideTag}</span>
        <h2>{t.guideTitle}</h2>
        <p>{t.guideBody}</p>
        <Link className="button-primary" href={`/${locale}/towns`}>{t.guideButton} <span aria-hidden="true">→</span></Link>
        <p className="coming-soon">{t.note}</p>
      </div>
      <div className="guide-art" aria-hidden="true"><span>169</span><small>CONNECTICUT TOWNS</small></div>
    </section>
    <section className="meet-joey" id="meet-joey">
      <div className="meet-photo"><img src="/headshotnew.png" alt="Joey McVety, Connecticut real estate agent with mygoodagent" loading="lazy" /></div>
      <div className="meet-copy">
        <span className="eyebrow dark">{t.meetTag}</span>
        <h2>{t.meetTitle}</h2>
        <p>{t.meetBody}</p>
        <div className="meet-brand"><img src="/The%20Good%20Agent.jpg" alt="mygoodagent logo" loading="lazy" /></div>
        <p className="meet-license">Real Estate Agent · Licensed in Connecticut</p>
        <div className="meet-actions"><a className="button-primary" href="tel:+12036277262">{t.meetCall}: 203-627-7262</a><a className="button-outline" href="mailto:JoeySellsCT@gmail.com">{t.meetEmail} ↗</a></div>
      </div>
    </section>
    <footer className="site-footer"><strong>Explore Connecticut Living</strong><span>{t.footer}</span></footer>
  </main>;
}
