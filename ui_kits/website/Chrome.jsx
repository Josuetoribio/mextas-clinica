/* Header, footer, iconos y utilidades compartidas del sitio de ClinicaMextas. */
const {Button,Badge,Eyebrow}=window.ClinicaMextasDesignSystem_d4abcf;

function Icon({name,size=20,color='currentColor',stroke=1.5}){
  const r=React.useRef(null);
  React.useEffect(()=>{if(!r.current)return;r.current.innerHTML='';const e=document.createElement('i');e.setAttribute('data-lucide',name);r.current.appendChild(e);window.lucide&&window.lucide.createIcons({attrs:{width:size,height:size,'stroke-width':stroke}})},[name,size]);
  return <span ref={r} style={{display:'inline-flex',color,lineHeight:0}}/>;
}

function Wordmark({inverse=false,size=20}){
  return <div style={{lineHeight:1}}>
    <div style={{fontFamily:'var(--font-display)',fontSize:size,letterSpacing:'.12em',color:inverse?'var(--ivory-100)':'var(--green-800)'}}>CLINICAMEXTAS</div>
    <div style={{fontSize:size*0.33,letterSpacing:'.34em',color:inverse?'var(--green-300)':'var(--text-muted)',marginTop:3}}>CLÍNICA PRIVADA</div>
  </div>;
}

const NAV=[['inicio','Inicio'],['nosotros','Nosotros'],['especialidades','Especialidades'],['servicios','Servicios'],['medicos','Médicos'],['instalaciones','Instalaciones'],['sedes','Sedes'],['blog','Blog'],['contacto','Contacto']];
const FOOT_ROUTES={'Nosotros':'nosotros','Especialidades':'especialidades','Médicos':'medicos','Instalaciones':'instalaciones','Sedes':'sedes','Horarios':'pacientes:horarios','Primera visita':'pacientes:primera','Urgencias':'urgencias','Check-ups':'checkups','Preguntas frecuentes':'pacientes:faq','Preparación para estudios':'pacientes:estudios','Métodos de pago':'pacientes:pagos','Seguros y convenios':'pacientes:seguros','Blog':'blog','Información médica':'blog','Tecnología médica':'tecnologia','Aviso de privacidad':'legal:privacidad','Términos y condiciones':'legal:terminos','Política de cookies':'legal:cookies','Accesibilidad':'legal:accesibilidad'};

function Header({page,goSection,onBook,onSearch,scrolled}){
  const [menu,setMenu]=React.useState(false);
  return <>
  <header style={{position:'sticky',top:0,zIndex:40,background:'rgba(249,246,240,.92)',backdropFilter:'blur(12px)',borderBottom:'1px solid var(--line-hairline)',transition:'padding var(--dur-base) var(--ease-standard)'}}>
    <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:scrolled?'12px var(--gutter)':'18px var(--gutter)',display:'flex',alignItems:'center',gap:28,transition:'padding var(--dur-base) var(--ease-standard)'}}>
      <a href="#inicio" onClick={e=>{e.preventDefault();goSection('inicio')}} style={{flex:'0 0 auto'}}><Wordmark size={scrolled?17:19}/></a>
      <nav className="cm-desktop cm-nav" style={{display:'flex',gap:22,marginLeft:'auto',minWidth:0}}>
        {NAV.map(([k,l])=><a key={k} href={'#'+k} onClick={e=>{e.preventDefault();goSection(k)}} aria-current={page===k?'true':undefined}
          style={{fontSize:13.5,fontWeight:page===k?600:400,color:page===k?'var(--green-800)':'var(--text-body)',paddingBottom:4,borderBottom:'2px solid '+(page===k?'var(--gold-600)':'transparent')}}>{l}</a>)}
      </nav>
      <div style={{display:'flex',alignItems:'center',gap:14,marginLeft:'auto',flex:'0 0 auto'}}>
        <button onClick={onSearch} aria-label="Buscar en el sitio" style={{background:'none',border:'none',cursor:'pointer',color:'var(--text-body)',display:'flex',padding:6}}><Icon name="search" size={18}/></button>
        <a href="tel:+528112345678" className="cm-desktop cm-phone" style={{display:'flex',alignItems:'center',gap:8,fontSize:13.5,color:'var(--text-body)'}}><Icon name="phone" size={15} color="var(--gold-600)"/>(81) 1234 5678</a>
        <span className="cm-hdr-cta"><Button size="sm" onClick={onBook} icon={<Icon name="calendar-days" size={15}/>}>Agendar cita</Button></span>
        <button className="cm-mobile" onClick={()=>setMenu(true)} aria-label="Abrir menú" style={{background:'none',border:'none',cursor:'pointer',display:'none',padding:6,color:'var(--green-800)'}}><Icon name="menu" size={22}/></button>
      </div>
    </div>
  </header>
  {menu&&<div onClick={()=>setMenu(false)} style={{position:'fixed',inset:0,zIndex:90,background:'var(--surface-page)',padding:'22px var(--gutter)',overflowY:'auto'}}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><Wordmark/>
      <button onClick={()=>setMenu(false)} aria-label="Cerrar menú" style={{background:'none',border:'1px solid var(--line-hairline)',borderRadius:'50%',width:36,height:36,cursor:'pointer'}}>×</button></div>
    <nav style={{display:'flex',flexDirection:'column',marginTop:28}}>
      {NAV.map(([k,l])=><a key={k} href={'#'+k} onClick={e=>{e.preventDefault();e.stopPropagation();setMenu(false);goSection(k)}}
        style={{fontFamily:'var(--font-display)',fontSize:26,padding:'14px 0',borderBottom:'1px solid var(--line-hairline)',color:'var(--green-800)'}}>{l}</a>)}
    </nav>
    <div style={{marginTop:26}}><Button fullWidth size="lg" onClick={()=>{setMenu(false);onBook()}}>Agendar cita</Button></div>
  </div>}
  </>;
}

const FOOT_SECTIONS={'Nosotros':'nosotros','Especialidades':'especialidades','Médicos':'medicos','Instalaciones':'instalaciones','Sedes':'sedes','Blog':'blog'};
function Footer({go,goSection,onBook}){
  const nav=(l)=>e=>{e.preventDefault();if(l==='Agendar cita')return onBook&&onBook();if(FOOT_SECTIONS[l])return goSection(FOOT_SECTIONS[l]);FOOT_ROUTES[l]&&go(FOOT_ROUTES[l])};
  const cols=[['ClinicaMextas',['Nosotros','Especialidades','Médicos','Instalaciones','Sedes']],
    ['Atención',['Agendar cita','Horarios','Primera visita','Urgencias','Check-ups']],
    ['Pacientes',['Preguntas frecuentes','Preparación para estudios','Métodos de pago','Seguros y convenios']],
    ['Recursos',['Blog','Información médica','Tecnología médica']]];
  return <footer style={{background:'var(--surface-inverse)',color:'var(--text-on-inverse-muted)',paddingTop:'var(--space-10)'}}>
    <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'0 var(--gutter)'}}>
      <div className="cm-footer-grid" style={{display:'grid',gridTemplateColumns:'1.4fr repeat(4,1fr)',gap:40}}>
        <div><Wordmark inverse/>
          <p style={{fontSize:13.5,lineHeight:1.7,marginTop:18,maxWidth:280}}>Atención médica especializada con un enfoque integral, humano y personalizado.</p>
          <div style={{display:'flex',flexDirection:'column',gap:9,marginTop:20,fontSize:13.5}}>
            <span style={{display:'flex',gap:10,alignItems:'center'}}><Icon name="phone" size={15} color="var(--gold-500)"/>(81) 1234 5678</span>
            <span style={{display:'flex',gap:10,alignItems:'center'}}><Icon name="message-circle" size={15} color="var(--gold-500)"/>WhatsApp</span>
            <span style={{display:'flex',gap:10,alignItems:'center'}}><Icon name="mail" size={15} color="var(--gold-500)"/>hola@clinicamextas.mx</span>
            <span style={{display:'flex',gap:10,alignItems:'flex-start'}}><Icon name="map-pin" size={15} color="var(--gold-500)"/>Av. San Pedro 123, Col. Del Valle,<br/>San Pedro Garza García, N.L.</span>
          </div></div>
        {cols.map(([t,items])=><div key={t}>
          <div style={{fontSize:11.5,fontWeight:600,letterSpacing:'.16em',textTransform:'uppercase',color:'var(--gold-500)',marginBottom:16}}>{t}</div>
          <div style={{display:'flex',flexDirection:'column',gap:11}}>
            {items.map(i=><a key={i} href="#" onClick={nav(i)} style={{fontSize:13.5,color:'var(--text-on-inverse-muted)'}}>{i}</a>)}
          </div></div>)}
      </div>
      <div style={{marginTop:'var(--space-9)',paddingTop:24,paddingBottom:32,borderTop:'1px solid var(--line-inverse)',display:'flex',flexWrap:'wrap',gap:16,justifyContent:'space-between',fontSize:12.5}}>
        <span>© 2026 ClinicaMextas. Todos los derechos reservados. · Sitio demostrativo desarrollado por Mextas.</span>
        <span style={{display:'flex',flexWrap:'wrap',gap:'10px 20px'}}>{['Aviso de privacidad','Términos y condiciones','Política de cookies','Accesibilidad'].map(l=><a key={l} href="#" onClick={nav(l)} style={{color:'var(--text-on-inverse-muted)'}}>{l}</a>)}</span>
      </div>
    </div>
  </footer>;
}

function Section({id,tone='page',children,py='var(--section-y)'}){
  const bg={page:'var(--surface-page)',raised:'var(--surface-raised)',sunken:'var(--surface-sunken)',inverse:'var(--surface-inverse)'}[tone];
  return <section id={id} style={{background:bg,padding:py+' 0'}}>
    <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'0 var(--gutter)'}}>{children}</div></section>;
}

function Reveal({children,delay=0,style}){
  const r=React.useRef(null),[v,setV]=React.useState(false);
  React.useEffect(()=>{const o=new IntersectionObserver(e=>{if(e[0].isIntersecting){setV(true);o.disconnect()}},{threshold:.12});r.current&&o.observe(r.current);return()=>o.disconnect()},[]);
  return <div ref={r} style={{opacity:v?1:0,transform:v?'none':'translateY(16px)',transition:`opacity var(--dur-reveal) var(--ease-entrance) ${delay}ms, transform var(--dur-reveal) var(--ease-entrance) ${delay}ms`,...style}}>{children}</div>;
}

function Counter({to,suffix=''}){
  const [n,setN]=React.useState(0),r=React.useRef(null);
  React.useEffect(()=>{const o=new IntersectionObserver(e=>{if(!e[0].isIntersecting)return;o.disconnect();const t0=performance.now();
    const tick=t=>{const p=Math.min((t-t0)/1200,1);setN(Math.round(to*(1-Math.pow(1-p,3))));p<1&&requestAnimationFrame(tick)};requestAnimationFrame(tick)},{threshold:.4});
    r.current&&o.observe(r.current);return()=>o.disconnect()},[to]);
  return <span ref={r}>{n}{suffix}</span>;
}

function Crumbs({go,items}){
  return <nav aria-label="Ruta" style={{display:'flex',gap:9,flexWrap:'wrap',fontSize:12.5,color:'var(--text-muted)',marginBottom:22}}>
    <a href="#" onClick={e=>{e.preventDefault();go('inicio')}}>Inicio</a>
    {items.map(([l,r],i)=><React.Fragment key={i}><span>/</span>{r?<a href="#" onClick={e=>{e.preventDefault();go(r)}}>{l}</a>:<span style={{color:'var(--text-heading)'}}>{l}</span>}</React.Fragment>)}
  </nav>;
}
function PhotoSlot({name,icon='image',dark=false,style}){
  return <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:10,background:dark?'var(--green-700)':'var(--ivory-200)',...style}}>
    <Icon name={icon} size={30} color={dark?'var(--green-300)':'var(--ink-200)'}/>
    <span style={{fontSize:11,letterSpacing:'.12em',textTransform:'uppercase',color:dark?'var(--green-300)':'var(--ink-300)'}}>Fotografía por agregar</span>
  </div>;
}
Object.assign(window,{Icon,Wordmark,Header,Footer,Section,Reveal,Counter,NAV,Crumbs,PhotoSlot});