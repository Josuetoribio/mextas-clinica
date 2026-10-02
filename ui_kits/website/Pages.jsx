/* Instalaciones + lightbox, Tecnología, Check-ups y teasers de la home. */
const {Button,Badge,Chip,Card,Eyebrow,SectionHeading,Modal,Field,Input,Select,Checkbox}=window.ClinicaMextasDesignSystem_d4abcf;
const D=window.CM_DATA;

function Lightbox({items,index,onClose,onNav}){
  const tx=React.useRef(0);
  React.useEffect(()=>{if(index==null)return;const k=e=>{if(e.key==='Escape')onClose();if(e.key==='ArrowRight')onNav(1);if(e.key==='ArrowLeft')onNav(-1)};window.addEventListener('keydown',k);return()=>window.removeEventListener('keydown',k)},[index]);
  if(index==null) return null;
  const it=items[index];
  const nb={width:46,height:46,borderRadius:'50%',border:'1px solid rgba(255,255,255,.25)',background:'transparent',cursor:'pointer',display:'grid',placeItems:'center'};
  return <div role="dialog" aria-modal="true" aria-label={it.name} onClick={onClose}
    onTouchStart={e=>tx.current=e.touches[0].clientX} onTouchEnd={e=>{const d=e.changedTouches[0].clientX-tx.current;if(Math.abs(d)>50)onNav(d<0?1:-1)}}
    style={{position:'fixed',inset:0,zIndex:96,background:'rgba(12,26,20,.94)',display:'flex',alignItems:'center',justifyContent:'center',padding:24,animation:'cmRise var(--dur-base) var(--ease-standard)'}}>
    <button onClick={onClose} aria-label="Cerrar galería" style={{...nb,position:'absolute',top:20,right:20}}><Icon name="x" size={18} color="var(--ivory-100)"/></button>
    <div onClick={e=>e.stopPropagation()} style={{width:'min(1080px,100%)',display:'flex',flexDirection:'column',gap:20}}>
      <div key={index} style={{aspectRatio:'16/9',maxHeight:'66vh',borderRadius:'var(--radius-lg)',overflow:'hidden',animation:'cmRise var(--dur-slow) var(--ease-entrance)'}}>
        {it.photo?<img src={it.photo} alt={it.name} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>:<PhotoSlot name={it.name} icon={it.icon} dark/>}
      </div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:24,flexWrap:'wrap'}}>
        <div style={{maxWidth:640}}>
          <Eyebrow tone="inverse">{String(index+1).padStart(2,'0')} / {String(items.length).padStart(2,'0')}</Eyebrow>
          <h2 style={{fontSize:'var(--text-display-sm)',color:'var(--ivory-100)',marginTop:10}}>{it.name}</h2>
          <p style={{fontSize:15,lineHeight:1.65,color:'var(--green-300)',marginTop:10}}>{it.desc}</p>
        </div>
        <div style={{display:'flex',gap:10}}>
          <button onClick={()=>onNav(-1)} aria-label="Anterior" style={nb}><Icon name="arrow-left" size={18} color="var(--ivory-100)"/></button>
          <button onClick={()=>onNav(1)} aria-label="Siguiente" style={nb}><Icon name="arrow-right" size={18} color="var(--ivory-100)"/></button>
        </div>
      </div>
      <div style={{display:'flex',gap:6,justifyContent:'center'}}>{items.map((_,k)=><span key={k} style={{width:k===index?22:6,height:6,borderRadius:3,background:k===index?'var(--gold-500)':'rgba(255,255,255,.25)',transition:'width var(--dur-base) var(--ease-standard)'}}/>)}</div>
    </div>
  </div>;
}

function Gallery({items}){
  const [i,setI]=React.useState(null);
  const nav=d=>setI(x=>(x+d+items.length)%items.length);
  return <>
    <div className="cm-gallery" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gridAutoRows:220,gap:14}}>
      {items.map((it,k)=><Reveal key={it.name} delay={k*50} style={{gridColumn:k===0?'span 2':undefined,gridRow:k===0?'span 2':undefined}}>
        <button onClick={()=>setI(k)} aria-label={'Ver '+it.name} className="cm-gtile"
          style={{position:'relative',width:'100%',height:'100%',padding:0,border:'none',borderRadius:'var(--radius-md)',overflow:'hidden',cursor:'zoom-in',display:'block'}}>
          {it.photo?<img src={it.photo} alt="" loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',transition:'transform var(--dur-slow) var(--ease-standard)'}}/>:<PhotoSlot name={it.name} icon={it.icon}/>}
          <span style={{position:'absolute',left:0,right:0,bottom:0,padding:'40px 18px 16px',textAlign:'left',background:'linear-gradient(to top,rgba(18,39,31,.72),rgba(18,39,31,0))',color:'var(--ivory-100)',fontFamily:'var(--font-display)',fontSize:k===0?24:17}}>{it.name}</span>
        </button></Reveal>)}
    </div>
    <Lightbox items={items} index={i} onClose={()=>setI(null)} onNav={nav}/>
  </>;
}

function TechnologyGrid(){
  return <div className="cm-serv-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginTop:40}}>
    {D.technology.map(([ic,t,d],k)=><Reveal key={t} delay={k*60}><Card padding={28} style={{height:'100%'}}>
      <Icon name={ic} size={28} color="var(--gold-600)"/>
      <h3 style={{fontFamily:'var(--font-sans)',fontSize:'var(--text-title-sm)',fontWeight:600,marginTop:16}}>{t}</h3>
      <p style={{fontSize:14,lineHeight:1.65,color:'var(--text-muted)',marginTop:8}}>{d}</p></Card></Reveal>)}
  </div>;
}

function FacilitiesPage({go}){
  return <>
    <Section>
      <Crumbs go={go} items={[['Instalaciones']]}/>
      <div className="cm-doc-split" style={{display:'grid',gridTemplateColumns:'1fr auto',gap:32,alignItems:'end',marginBottom:36}}>
        <SectionHeading eyebrow="Instalaciones" title="Espacios pensados para tu tranquilidad" description="Luz natural, materiales cálidos y circulación clara. Selecciona un espacio para recorrerlo."/>
        <p style={{fontSize:12.5,color:'var(--text-muted)',display:'flex',gap:8,alignItems:'center'}}><Icon name="mouse-pointer-click" size={15} color="var(--gold-600)"/>Usa ← → para navegar la galería</p>
      </div>
      <Gallery items={D.facilities}/>
    </Section>
    <Section tone="raised" id="tecnologia">
      <SectionHeading align="center" eyebrow="Tecnología médica" title="Herramientas al servicio del criterio médico" description="La tecnología apoya el diagnóstico; las decisiones las toma siempre tu médico contigo."/>
      <TechnologyGrid/>
    </Section>
  </>;
}

function TechnologyPage({go}){
  return <Section>
    <Crumbs go={go} items={[['Instalaciones','instalaciones'],['Tecnología médica']]}/>
    <SectionHeading eyebrow="Tecnología médica" title="Herramientas al servicio del criterio médico" description="Diagnóstico, laboratorio, imagenología y seguimiento digital, integrados en un mismo expediente."/>
    <TechnologyGrid/>
    <div style={{marginTop:40,display:'flex',gap:12,flexWrap:'wrap'}}><Button onClick={()=>go('instalaciones')}>Recorrer instalaciones</Button><Button variant="secondary" onClick={()=>go('checkups')}>Ver check-ups</Button></div>
  </Section>;
}

function InfoRequest({pkg,onClose}){
  const [st,setSt]=React.useState('idle'),[ok,setOk]=React.useState(false);
  React.useEffect(()=>{if(pkg)setSt('idle')},[pkg]);
  const submit=e=>{e.preventDefault();setSt('loading');setTimeout(()=>setSt('done'),1100)};
  return <Modal open={!!pkg} onClose={onClose} size="sm" eyebrow="Solicitar información" title={pkg&&pkg.name}>
    {st==='done'?<div style={{textAlign:'center',padding:'12px 0 6px',animation:'cmRise var(--dur-slow) var(--ease-entrance)'}}>
      <span style={{width:54,height:54,borderRadius:'50%',background:'var(--green-100)',display:'grid',placeItems:'center',margin:'0 auto'}}><Icon name="check" size={24} color="var(--green-800)"/></span>
      <h3 style={{fontSize:22,marginTop:16}}>Solicitud enviada</h3>
      <p style={{fontSize:14,color:'var(--text-muted)',marginTop:10,lineHeight:1.6}}>Un coordinador de check-ups te contactará para explicarte el paquete y resolver tus dudas.</p>
      <Button style={{marginTop:22}} onClick={onClose}>Entendido</Button></div>
    :<form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:14}}>
      <Field label="Nombre" required htmlFor="ir1"><Input id="ir1" required placeholder="Nombre completo"/></Field>
      <Field label="Teléfono" required htmlFor="ir2"><Input id="ir2" required placeholder="(81) 1234 5678"/></Field>
      <Field label="Correo" htmlFor="ir3"><Input id="ir3" type="email" placeholder="tucorreo@ejemplo.mx"/></Field>
      <Field label="Sede de preferencia" htmlFor="ir4"><Select id="ir4" options={D.locations.map(l=>l.name)}/></Field>
      <Checkbox checked={ok} onChange={setOk} label="Acepto el aviso de privacidad."/>
      <Button type="submit" fullWidth disabled={!ok||st==='loading'}>{st==='loading'?'Enviando…':'Solicitar información'}</Button>
    </form>}
  </Modal>;
}

function CheckupsPage({go}){
  const [pkg,setPkg]=React.useState(null);
  return <>
    <Section>
      <Crumbs go={go} items={[['Servicios','servicios'],['Check-ups']]}/>
      <SectionHeading eyebrow="Check-ups preventivos" title="Conoce tu salud cuando te sientes bien" description="Tres paquetes con estudios coordinados y una consulta para explicarte los resultados."/>
      <div className="cm-serv-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:18,marginTop:40,alignItems:'stretch'}}>
        {D.checkups.map((c,k)=><Reveal key={c.id} delay={k*90}><Card padding={0} style={{height:'100%',display:'flex',flexDirection:'column',overflow:'hidden',borderColor:k===1?'var(--gold-300)':undefined}}>
          <div style={{padding:'28px 28px 22px',background:k===2?'var(--surface-inverse)':k===1?'var(--surface-accent-soft)':'var(--surface-card)',borderBottom:'1px solid '+(k===2?'var(--line-inverse)':'var(--line-hairline)')}}>
            <Eyebrow tone={k===2?'inverse':'gold'}>{['01','02','03'][k]}</Eyebrow>
            <h3 style={{fontSize:26,marginTop:10,color:k===2?'var(--ivory-100)':undefined}}>{c.name}</h3>
            <p style={{fontSize:14,marginTop:8,color:k===2?'var(--green-300)':'var(--text-muted)'}}>{c.tag}</p>
            <div style={{display:'flex',gap:8,alignItems:'center',marginTop:16,fontSize:13,color:k===2?'var(--ivory-100)':'var(--text-body)'}}><Icon name="clock" size={15} color="var(--gold-600)"/>{c.duration}</div>
          </div>
          <div style={{padding:'22px 28px 28px',display:'flex',flexDirection:'column',gap:18,flex:1}}>
            <div><div style={{fontSize:11.5,fontWeight:600,letterSpacing:'.08em',textTransform:'uppercase',color:'var(--text-muted)'}}>Para quién</div>
              <p style={{fontSize:14,lineHeight:1.6,marginTop:6}}>{c.for}</p></div>
            <div><div style={{fontSize:11.5,fontWeight:600,letterSpacing:'.08em',textTransform:'uppercase',color:'var(--text-muted)'}}>Qué incluye</div>
              <ul style={{listStyle:'none',padding:0,margin:'10px 0 0',display:'flex',flexDirection:'column',gap:8}}>
                {c.includes.map(x=><li key={x} style={{display:'flex',gap:9,fontSize:13.5,lineHeight:1.5}}><Icon name="check" size={15} color="var(--gold-600)"/>{x}</li>)}</ul></div>
            <div style={{background:'var(--surface-sunken)',borderRadius:'var(--radius-sm)',padding:'14px 16px'}}>
              <div style={{fontSize:11.5,fontWeight:600,letterSpacing:'.08em',textTransform:'uppercase',color:'var(--text-muted)'}}>Preparación general</div>
              <p style={{fontSize:13,lineHeight:1.6,marginTop:6,color:'var(--text-body)'}}>{c.prep.join(' · ')}</p></div>
            <Button fullWidth variant={k===1?'primary':'secondary'} onClick={()=>setPkg(c)} style={{marginTop:'auto'}}>Solicitar información</Button>
          </div></Card></Reveal>)}
      </div>
      <p style={{fontSize:12.5,color:'var(--text-muted)',marginTop:24,textAlign:'center'}}>Contenido demostrativo. Tu médico puede ajustar los estudios según tu historial clínico.</p>
    </Section>
    <InfoRequest pkg={pkg} onClose={()=>setPkg(null)}/>
  </>;
}

function CheckupTeaser({go}){
  return <Section tone="sunken" py="var(--space-9)">
    <div className="cm-doc-split" style={{display:'grid',gridTemplateColumns:'0.9fr 1.6fr',gap:48,alignItems:'center'}}>
      <Reveal><SectionHeading eyebrow="Check-ups" title="Prevención en una sola visita" description="Paquetes con estudios coordinados y consulta de resultados." size="sm" actions={<Button onClick={()=>go('checkups')}>Ver paquetes</Button>}/></Reveal>
      <div className="cm-serv-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:14}}>
        {D.checkups.map((c,k)=><Reveal key={c.id} delay={k*80}><Card interactive padding={22} onClick={()=>go('checkups')} style={{height:'100%'}}>
          <h3 style={{fontSize:20}}>{c.name.replace('Check-up ','')}</h3>
          <p style={{fontSize:13,color:'var(--text-muted)',marginTop:8,lineHeight:1.5}}>{c.tag}</p>
          <div style={{display:'flex',gap:7,alignItems:'center',marginTop:16,fontSize:12.5,color:'var(--text-accent)'}}><Icon name="clock" size={14}/>{c.duration}</div>
        </Card></Reveal>)}
      </div>
    </div>
  </Section>;
}

function FacilitiesTeaser({go}){
  const f=D.facilities;
  return <Section>
    <div className="cm-doc-split" style={{display:'grid',gridTemplateColumns:'1fr auto',gap:24,alignItems:'end',marginBottom:32}}>
      <Reveal><SectionHeading eyebrow="Instalaciones" title="Espacios de primer nivel, con calidez"/></Reveal>
      <Button variant="secondary" onClick={()=>go('instalaciones')} iconRight={<Icon name="arrow-right" size={15}/>}>Recorrer instalaciones</Button>
    </div>
    <div className="cm-fac-teaser" style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr',gridTemplateRows:'200px 200px',gap:14}}>
      {[0,1,3,4,6].map((k,i)=><button key={k} onClick={()=>go('instalaciones')} style={{gridRow:i===0?'span 2':undefined,position:'relative',padding:0,border:'none',borderRadius:'var(--radius-md)',overflow:'hidden',cursor:'pointer'}}>
        {f[k].photo?<img src={f[k].photo} alt={f[k].name} loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>:<PhotoSlot icon={f[k].icon}/>}
        <span style={{position:'absolute',left:14,bottom:12,background:'rgba(249,246,240,.94)',borderRadius:'var(--radius-pill)',padding:'5px 12px',fontSize:12,fontWeight:600,color:'var(--green-800)'}}>{f[k].name}</span>
      </button>)}
    </div>
  </Section>;
}

function FirstVisit({go}){
  const steps=[['calendar-check','Antes de tu cita','Recibirás la confirmación de tu solicitud y qué llevar: identificación, estudios previos y lista de medicamentos.'],
    ['door-open','Al llegar','Preséntate en recepción 15 minutos antes. Registramos tus datos y te acompañamos a la sala de espera.'],
    ['stethoscope','Durante la consulta','Tu médico te escucha, revisa tus antecedentes y te explica con claridad los siguientes pasos.'],
    ['repeat','Después','Recibes indicaciones por escrito y, si aplica, programamos estudios o tu consulta de seguimiento.']];
  return <Section tone="raised">
    <div className="cm-faq" style={{display:'grid',gridTemplateColumns:'1.7fr 1fr',gap:48,alignItems:'start'}}>
      <div>
        <Reveal><SectionHeading eyebrow="Pacientes nuevos" title="¿Es tu primera visita?" description="Así es el proceso, de principio a fin." size="sm"/></Reveal>
        <div className="cm-steps" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:0,marginTop:32,borderTop:'1px solid var(--line-hairline)'}}>
          {steps.map(([ic,t,d],k)=><Reveal key={t} delay={k*80} style={{padding:'22px 18px 0 0'}}>
            <div style={{display:'flex',alignItems:'center',gap:10}}><span style={{fontFamily:'var(--font-display)',fontSize:22,color:'var(--gold-600)'}}>0{k+1}</span><Icon name={ic} size={18} color="var(--green-500)"/></div>
            <h3 style={{fontFamily:'var(--font-sans)',fontSize:15,fontWeight:600,marginTop:12}}>{t}</h3>
            <p style={{fontSize:13,lineHeight:1.6,color:'var(--text-muted)',marginTop:7}}>{d}</p></Reveal>)}
        </div>
        <Button variant="ghost" style={{marginTop:22,paddingInline:0}} onClick={()=>go('pacientes:primera')} iconRight={<Icon name="arrow-right" size={15}/>}>Guía completa para tu primera visita</Button>
      </div>
      <Reveal delay={120}><Card padding={28} id="horarios">
        <Eyebrow>Horarios</Eyebrow>
        <h3 style={{fontSize:24,marginTop:10}}>Atención general</h3>
        <div style={{marginTop:16}}>{D.clinic.hours.map(([d,h])=><div key={d} style={{display:'flex',justifyContent:'space-between',gap:12,padding:'12px 0',borderBottom:'1px solid var(--line-hairline)',fontSize:14}}>
          <span style={{color:'var(--text-body)'}}>{d}</span><span style={{fontWeight:600,color:h==='Cerrado'?'var(--text-muted)':'var(--text-heading)'}}>{h}</span></div>)}</div>
        <p style={{fontSize:12.5,color:'var(--text-muted)',marginTop:14,lineHeight:1.55}}>Los horarios pueden variar según especialidad y disponibilidad.</p>
        <Button fullWidth variant="secondary" style={{marginTop:18}} onClick={()=>go('medicos')}>Consulta los horarios de cada especialista</Button>
      </Card></Reveal>
    </div>
  </Section>;
}

Object.assign(window,{Lightbox,Gallery,FacilitiesPage,TechnologyPage,CheckupsPage,CheckupTeaser,FacilitiesTeaser,FirstVisit});
