const {Button,Badge,Chip,Card,Eyebrow,SectionHeading,SpecialtyCard,DoctorCard,StatBlock,Accordion,Input,Field,Select,Checkbox}=window.ClinicaMextasDesignSystem_d4abcf;
const D=window.CM_DATA;

function Hero({onBook,go}){
  return <section id="inicio" style={{background:'var(--surface-page)',position:'relative'}}>
    <div className="cm-hero" style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'0 0 0 var(--gutter)',display:'grid',gridTemplateColumns:'minmax(0,1fr) minmax(0,1.15fr)',gap:56,alignItems:'center',minHeight:520}}>
      <Reveal style={{paddingBlock:'var(--space-9)'}}>
        <Eyebrow>Tu salud, nuestra prioridad</Eyebrow>
        <h1 style={{fontSize:'var(--text-display-lg)',marginTop:18,maxWidth:520}}>Cuidado médico que te acompaña en cada etapa.</h1>
        <p style={{fontSize:'var(--text-body-lg)',lineHeight:1.7,color:'var(--text-muted)',marginTop:20,maxWidth:440}}>En ClinicaMextas combinamos experiencia médica, tecnología y atención humana para ofrecer una experiencia de salud diseñada alrededor de cada paciente.</p>
        <div style={{display:'flex',gap:12,marginTop:30,flexWrap:'wrap'}}>
          <Button size="lg" onClick={onBook} icon={<Icon name="calendar-days" size={17}/>}>Agendar cita</Button>
          <Button size="lg" variant="secondary" onClick={()=>go('especialidades')}>Conocer nuestras especialidades</Button>
        </div>
      </Reveal>
      <Reveal delay={120} style={{alignSelf:'stretch',display:'flex'}}>
        <img src="../../assets/photos/recepcion.png" alt="Recepción de ClinicaMextas" style={{width:'100%',height:'100%',minHeight:520,objectFit:'cover',borderRadius:'var(--radius-xl) 0 0 var(--radius-xl)'}}/>
      </Reveal>
    </div>
    <div style={{borderTop:'1px solid var(--line-hairline)'}}>
      <div className="cm-trust" style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'22px var(--gutter)',display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:28}}>
        {D.trust.map(([t,s],i)=><Reveal key={t} delay={i*70} style={{display:'flex',gap:13,alignItems:'center',borderLeft:i?'1px solid var(--line-hairline)':'none',paddingLeft:i?28:0}}>
          <Icon name={['heart-handshake','badge-check','cpu','building-2'][i]} size={26} color="var(--gold-600)"/>
          <div><div style={{fontSize:13.5,fontWeight:600,color:'var(--text-heading)'}}>{t}</div><div style={{fontSize:12.5,color:'var(--text-muted)',marginTop:2}}>{s}</div></div>
        </Reveal>)}
      </div>
    </div>
  </section>;
}

function QuickActions({onBook,go}){
  const acts=[['calendar-days','Agendar cita',()=>onBook()],['user-search','Encontrar un especialista',()=>go('medicos')],['layout-grid','Ver especialidades',()=>go('especialidades')],['map-pin','Ver sedes',()=>go('sedes')],['phone','Llamar a la clínica',()=>{}]];
  return <div style={{background:'var(--surface-raised)',borderBlock:'1px solid var(--line-hairline)'}}>
    <div className="cm-quick" style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'0 var(--gutter)',display:'grid',gridTemplateColumns:'repeat(5,1fr)'}}>
      {acts.map(([i,l,fn],k)=><button key={l} onClick={fn} style={{display:'flex',alignItems:'center',justifyContent:'center',gap:11,padding:'22px 12px',background:'none',border:'none',borderLeft:k?'1px solid var(--line-hairline)':'none',cursor:'pointer',fontFamily:'var(--font-sans)',fontSize:13.5,fontWeight:500,color:'var(--text-body)',transition:'background var(--dur-fast) var(--ease-standard)'}}
        onMouseEnter={e=>e.currentTarget.style.background='var(--ivory-100)'} onMouseLeave={e=>e.currentTarget.style.background='none'}>
        <Icon name={i} size={18} color="var(--gold-600)"/>{l}</button>)}
    </div></div>;
}

function AboutTeaser({go,full=false}){
  return <Section id={full?undefined:'nosotros'}>
    <Reveal><SectionHeading eyebrow="Nosotros" title="Una clínica construida alrededor del paciente"
      description="ClinicaMextas nació en 2016 como un consultorio de medicina interna en San Pedro Garza García. Hoy son cinco sedes que comparten un mismo modelo: escuchar antes de indicar."
      actions={full?null:<Button variant="secondary" onClick={()=>go('nosotros')} iconRight={<Icon name="arrow-right" size={15}/>}>Conoce más de nosotros</Button>}/></Reveal>
    <div className="cm-serv-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginTop:44}}>
      {[['Misión','Ofrecer atención médica especializada, accesible y humana, con continuidad real entre consultas.'],
        ['Visión','Ser la clínica privada de referencia en el noreste de México por la calidad de su trato, no solo de su tecnología.'],
        ['Filosofía','Medicina centrada en el paciente: prevención, explicación clara y seguimiento en cada etapa.']].map(([t,d],i)=>
        <Reveal key={t} delay={i*80}><Card padding={28} style={{height:'100%'}}><Eyebrow>{t}</Eyebrow>
          <p style={{fontSize:15,lineHeight:1.7,color:'var(--text-body)',marginTop:14}}>{d}</p></Card></Reveal>)}
    </div>
    {!full&&<div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:28}}>
      {['Empatía','Excelencia','Confianza','Innovación','Ética','Cercanía'].map(v=><Badge key={v} tone="green">{v}</Badge>)}</div>}
  </Section>;
}

function Specialties({go}){
  const list=D.specialties.slice(0,7);
  return <Section id="especialidades" tone="raised">
    <Reveal><SectionHeading align="center" eyebrow="Nuestras especialidades" title="Especialistas en tu bienestar" description="Doce áreas médicas trabajando de forma coordinada alrededor de cada paciente."/></Reveal>
    <div className="cm-spec-grid" style={{display:'grid',gridTemplateColumns:'repeat(8,1fr)',gap:14,marginTop:44}}>
      {list.map((s,i)=><Reveal key={s.slug} delay={i*60}><SpecialtyCard name={s.name} icon={<Icon name={s.icon} size={28} color="var(--gold-600)"/>} onClick={()=>go('especialidad:'+s.slug)}/></Reveal>)}
      <Reveal delay={7*60}><button onClick={()=>go('especialidades-todas')} style={{width:'100%',aspectRatio:'1/1',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:12,background:'var(--surface-inverse)',border:'none',borderRadius:'var(--radius-md)',cursor:'pointer',color:'var(--ivory-100)',fontFamily:'var(--font-sans)',fontSize:13,fontWeight:600,lineHeight:1.35,padding:14}}>
        <span style={{width:34,height:34,borderRadius:'50%',border:'1px solid var(--gold-500)',display:'grid',placeItems:'center'}}><Icon name="plus" size={16} color="var(--gold-500)"/></span>
        Ver todas las especialidades</button></Reveal>
    </div>
  </Section>;
}

function Doctors({go,onBook}){
  return <Section id="medicos">
    <div className="cm-doc-split" style={{display:'grid',gridTemplateColumns:'0.85fr 2fr',gap:48,alignItems:'center'}}>
      <Reveal><SectionHeading eyebrow="Nuestro equipo" title="Médicos especialistas cerca de ti" description="Contamos con un equipo altamente capacitado y comprometido con tu salud y la de tu familia."
        actions={<Button onClick={()=>go('medicos')}>Conoce a nuestros médicos</Button>}/></Reveal>
      <div className="cm-doc-grid" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16}}>
        {D.doctors.map((d,i)=><Reveal key={d.id} delay={i*80}>
          <DoctorCard {...d} subspecialty={undefined} license={d.license} location={'Sede '+d.location} onClick={()=>go('medico:'+d.id)}/></Reveal>)}
      </div>
    </div>
  </Section>;
}

function Services({onOpen,tone='raised'}){
  return <Section tone={tone} id="servicios">
    <Reveal><SectionHeading align="center" eyebrow="Servicios" title="Atención integral para tu salud" description="Estudios, prevención y seguimiento en un mismo lugar."/></Reveal>
    <div className="cm-serv-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginTop:44}}>
      {D.services.map((s,i)=><Reveal key={s.name} delay={i*60}>
        <Card interactive padding={26} onClick={()=>onOpen(s)} style={{height:'100%'}}>
          <Icon name={s.icon} size={28} color="var(--gold-600)"/>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'var(--text-title-sm)',fontWeight:600,marginTop:16,color:'var(--text-heading)'}}>{s.name}</h3>
          <p style={{fontSize:13.5,color:'var(--text-muted)',marginTop:7,lineHeight:1.6}}>{s.desc}</p>
          <span style={{display:'inline-flex',alignItems:'center',gap:7,fontSize:12.5,fontWeight:600,color:'var(--gold-600)',marginTop:16}}>Más información <Icon name="arrow-right" size={14}/></span>
        </Card></Reveal>)}
    </div>
  </Section>;
}

function Stats(){
  const [i,setI]=React.useState(0);
  React.useEffect(()=>{const t=setInterval(()=>setI(x=>(x+1)%D.testimonials.length),6000);return()=>clearInterval(t)},[]);
  const t=D.testimonials[i];
  return <section style={{background:'var(--surface-inverse)'}}>
    <div className="cm-stats" style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-8) var(--gutter)',display:'grid',gridTemplateColumns:'1.6fr 1fr',gap:48,alignItems:'center'}}>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:24}}>
        {D.stats.map(([v,l],k)=><StatBlock key={l} icon={<Icon name={['award','users','stethoscope','map-pin'][k]} size={22}/>}
          value={k===0?<><Counter to={10}/>+</>:k===1?<><Counter to={25}/>K+</>:k===2?<><Counter to={30}/>+</>:<Counter to={5}/>} label={l}/>)}
      </div>
      <div style={{borderLeft:'1px solid var(--line-inverse)',paddingLeft:40}}>
        <div style={{display:'flex',gap:3,color:'var(--gold-500)'}}>{[0,1,2,3,4].map(n=><Icon key={n} name="star" size={13}/>)}</div>
        <p key={i} style={{fontFamily:'var(--font-display)',fontSize:19,lineHeight:1.5,color:'var(--ivory-100)',marginTop:14,animation:'cmRise var(--dur-slow) var(--ease-entrance)'}}>“{t.quote}”</p>
        <p style={{fontSize:13,color:'var(--text-on-inverse-muted)',marginTop:12}}>— {t.author}</p>
        <div style={{display:'flex',gap:7,marginTop:18}}>{D.testimonials.map((_,k)=><button key={k} onClick={()=>setI(k)} aria-label={'Testimonio '+(k+1)} style={{width:7,height:7,borderRadius:'50%',border:'none',cursor:'pointer',padding:0,background:k===i?'var(--gold-500)':'rgba(255,255,255,.28)'}}/>)}</div>
      </div>
    </div></section>;
}

function Emergency({go}){
  return <Section tone="page" py="var(--space-8)">
    <Card padding={30} style={{borderColor:'rgba(140,58,46,.28)',background:'var(--status-danger-soft)'}}>
      <div className="cm-emg" style={{display:'grid',gridTemplateColumns:'auto 1fr auto',gap:24,alignItems:'center'}}>
        <Icon name="siren" size={30} color="var(--status-danger)"/>
        <div><h3 style={{fontFamily:'var(--font-display)',fontSize:'var(--text-title-md)',color:'var(--status-danger)'}}>¿Es una emergencia médica?</h3>
        <p style={{fontSize:14,lineHeight:1.65,color:'var(--ink-700)',marginTop:7,maxWidth:640}}>Si presentas una emergencia médica o una situación que pueda poner en riesgo tu vida, llama al servicio de emergencias de tu localidad o acude al servicio de urgencias más cercano.</p></div>
        <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
          <Button variant="secondary" onClick={()=>go&&go('urgencias')}>Ver información de urgencias</Button>
          <Button style={{background:'var(--status-danger)'}} icon={<Icon name="phone" size={15}/>}>Llamar a emergencias</Button></div>
      </div></Card>
  </Section>;
}

function Faq(){
  return <Section tone="raised">
    <div className="cm-faq" style={{display:'grid',gridTemplateColumns:'0.8fr 1.4fr',gap:56,alignItems:'start'}}>
      <Reveal><SectionHeading eyebrow="Preguntas frecuentes" title="Resolvemos tus dudas" description="Y si no encuentras lo que buscas, recepción puede ayudarte por teléfono o WhatsApp." size="sm"/></Reveal>
      <Reveal delay={100}><Accordion items={D.faqs} defaultOpen={[0]}/></Reveal>
    </div>
  </Section>;
}

function Blog({go}){
  const cats=['Todos','Prevención','Cardiología','Pediatría','Nutrición','Dermatología','Bienestar'];
  const [c,setC]=React.useState('Todos');
  const list=c==='Todos'?D.articles:D.articles.filter(a=>a.cat===c);
  return <Section id="blog">
    <Reveal><SectionHeading eyebrow="Información médica" title="Contenido para cuidarte mejor" description="Artículos educativos escritos por nuestro equipo clínico. No sustituyen una consulta médica."/></Reveal>
    <div style={{display:'flex',gap:9,marginTop:26,flexWrap:'wrap'}}>{cats.map(x=><Chip key={x} selected={c===x} onClick={()=>setC(x)}>{x}</Chip>)}</div>
    <div className="cm-blog-grid" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16,marginTop:26}}>
      {list.map((a,i)=><Card key={a.title} interactive padding={0} onClick={()=>go('articulo:'+D.articles.indexOf(a))} style={{overflow:'hidden',display:'flex',flexDirection:'column'}}>
        <div style={{height:150,background:'var(--ivory-200)',overflow:'hidden'}}>{a.photo?<img src={a.photo} alt="" loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>:<PhotoSlot/>}</div>
        <div style={{padding:20,display:'flex',flexDirection:'column',gap:10,flex:1}}>
          <Badge tone="gold" size="sm">{a.cat}</Badge>
          <h3 style={{fontFamily:'var(--font-display)',fontSize:18,lineHeight:1.3,color:'var(--text-heading)'}}>{a.title}</h3>
          <span style={{fontSize:12,color:'var(--text-muted)',marginTop:'auto'}}>{a.read} de lectura</span>
        </div></Card>)}
    </div>
  </Section>;
}

function ContactBlock(){
  const [sent,setSent]=React.useState(false),[ok,setOk]=React.useState(false);
  return <Section id="contacto" tone="raised">
    <div className="cm-contact" style={{display:'grid',gridTemplateColumns:'0.9fr 1fr 1fr',gap:40,alignItems:'start'}}>
      <div><Eyebrow>Visítanos</Eyebrow>
        <h2 style={{fontSize:'var(--text-display-sm)',marginTop:16}}>Estamos para ayudarte</h2>
        <p style={{fontSize:14.5,color:'var(--text-muted)',marginTop:14,lineHeight:1.7}}>Contáctanos o visítanos en cualquiera de nuestras sedes.</p>
        <div style={{display:'flex',flexDirection:'column',gap:13,marginTop:24,fontSize:13.5,color:'var(--text-body)'}}>
          {[['phone',D.clinic.phone],['mail',D.clinic.email],['clock','Lun – Vie: 7:00 am – 8:00 pm · Sáb: 8:00 am – 2:00 pm'],['map-pin',D.clinic.address]].map(([i,t])=>
            <span key={t} style={{display:'flex',gap:11,alignItems:'flex-start'}}><Icon name={i} size={16} color="var(--gold-600)"/>{t}</span>)}
        </div></div>
      <div style={{background:'var(--ivory-200)',borderRadius:'var(--radius-md)',height:340,position:'relative',overflow:'hidden',border:'1px solid var(--line-hairline)'}}>
        <svg width="100%" height="100%" viewBox="0 0 400 340" aria-label="Mapa estilizado de la sede principal">
          <rect width="400" height="340" fill="#F3EFE7"/>
          {[40,100,160,220,280].map(y=><line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#E4DDD0" strokeWidth="6"/>)}
          {[60,150,250,340].map(x=><line key={x} x1={x} y1="0" x2={x} y2="340" stroke="#E4DDD0" strokeWidth="6"/>)}
          <line x1="0" y1="160" x2="400" y2="160" stroke="#DCD3C2" strokeWidth="14"/>
        </svg>
        <div style={{position:'absolute',top:'42%',left:'50%',transform:'translate(-50%,-50%)',background:'#fff',borderRadius:'var(--radius-md)',padding:'14px 18px',boxShadow:'var(--shadow-md)',minWidth:180}}>
          <div style={{display:'flex',gap:9,alignItems:'center'}}><Icon name="map-pin" size={16} color="var(--gold-600)"/>
            <div><div style={{fontSize:13,fontWeight:600,color:'var(--text-heading)'}}>Sede San Pedro</div><div style={{fontSize:11.5,color:'var(--text-muted)'}}>Av. San Pedro 123</div></div></div>
          <a href="#" onClick={e=>e.preventDefault()} style={{fontSize:12,fontWeight:600,color:'var(--gold-600)',marginTop:10,display:'inline-block'}}>Cómo llegar</a>
        </div></div>
      <Card padding={26}>
        {sent?<div style={{textAlign:'center',padding:'34px 6px',animation:'cmRise var(--dur-slow) var(--ease-entrance)'}}>
          <span style={{width:52,height:52,borderRadius:'50%',background:'var(--green-100)',display:'grid',placeItems:'center',margin:'0 auto'}}><Icon name="check" size={24} color="var(--green-800)"/></span>
          <h3 style={{fontFamily:'var(--font-display)',fontSize:22,marginTop:18}}>Mensaje enviado</h3>
          <p style={{fontSize:13.5,color:'var(--text-muted)',marginTop:10,lineHeight:1.6}}>Gracias por escribirnos. Recepción te contactará dentro del siguiente día hábil.</p>
          <Button variant="secondary" size="sm" style={{marginTop:20}} onClick={()=>setSent(false)}>Enviar otro mensaje</Button>
        </div>:<form onSubmit={e=>{e.preventDefault();setSent(true)}} style={{display:'flex',flexDirection:'column',gap:14}}>
          <Eyebrow>Escríbenos</Eyebrow>
          <Field label="Nombre" required htmlFor="cf1"><Input id="cf1" required placeholder="Nombre completo"/></Field>
          <Field label="Correo" required htmlFor="cf2"><Input id="cf2" type="email" required placeholder="tucorreo@ejemplo.mx"/></Field>
          <Field label="Teléfono" htmlFor="cf3"><Input id="cf3" placeholder="(81) 1234 5678"/></Field>
          <Field label="Motivo de contacto" htmlFor="cf4"><Select id="cf4" options={['Información general','Agendar cita','Estudios y laboratorio','Facturación','Otro']}/></Field>
          <Field label="Mensaje" hint="No incluyas información médica sensible." htmlFor="cf5"><Input id="cf5" multiline rows={3} placeholder="¿En qué podemos ayudarte?"/></Field>
          <Checkbox checked={ok} onChange={setOk} label="Al enviar este formulario acepto el aviso de privacidad."/>
          <Button type="submit" fullWidth disabled={!ok}>Enviar mensaje</Button>
        </form>}
      </Card>
    </div>
  </Section>;
}

Object.assign(window,{Hero,QuickActions,AboutTeaser,Specialties,Doctors,Services,Stats,Emergency,Faq,Blog,ContactBlock});