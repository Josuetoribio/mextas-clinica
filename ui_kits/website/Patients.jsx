/* Información para pacientes, artículo, urgencias y páginas legales. */
const {Button,Badge,Chip,Card,Eyebrow,SectionHeading,Accordion,DoctorCard,SpecialtyCard}=window.ClinicaMextasDesignSystem_d4abcf;
const D=window.CM_DATA;

const PT_TABS=[['primera','Primera visita','footprints'],['estudios','Preparación para estudios','flask-conical'],['faq','Preguntas frecuentes','circle-help'],['pagos','Métodos de pago','credit-card'],['seguros','Seguros y convenios','shield-check'],['horarios','Horarios','clock'],['ubicaciones','Ubicaciones','map-pin'],['cancelacion','Políticas de cancelación','calendar-x'],['recomendaciones','Recomendaciones generales','heart-pulse']];

function PtList({items}){return <ul style={{listStyle:'none',padding:0,margin:'18px 0 0',display:'flex',flexDirection:'column',gap:12}}>
  {items.map(([ic,t,d])=><li key={t} style={{display:'flex',gap:14,padding:'16px 18px',background:'var(--surface-card)',border:'1px solid var(--line-hairline)',borderRadius:'var(--radius-sm)'}}>
    <Icon name={ic} size={19} color="var(--gold-600)"/><div><div style={{fontSize:14.5,fontWeight:600,color:'var(--text-heading)'}}>{t}</div>{d&&<div style={{fontSize:13.5,lineHeight:1.6,color:'var(--text-muted)',marginTop:4}}>{d}</div>}</div></li>)}</ul>;}
function PtHead({t,d}){return <><h2 style={{fontSize:'var(--text-display-sm)'}}>{t}</h2>{d&&<p style={{fontSize:15,lineHeight:1.7,color:'var(--text-muted)',marginTop:10,maxWidth:620}}>{d}</p>}</>;}

function PatientsTab({id,go}){
  if(id==='primera') return <><PtHead t="Tu primera visita" d="Todo lo que necesitas saber para llegar tranquilo a tu consulta."/>
    <PtList items={[['calendar-check','Antes de tu cita','Revisa el correo de confirmación de tu solicitud. Prepara identificación oficial, estudios previos y la lista de medicamentos que tomas.'],
      ['door-open','Al llegar','Llega 15 minutos antes. En recepción registramos tus datos generales y te indicamos la sala de espera.'],
      ['stethoscope','Durante la consulta','Tu médico revisa tus antecedentes, realiza una exploración y te explica los siguientes pasos. Pregunta todo lo que necesites.'],
      ['repeat','Después','Recibes indicaciones por escrito. Si se requieren estudios o seguimiento, recepción te ayuda a programarlos.']]}/></>;
  if(id==='estudios') return <><PtHead t="Preparación para estudios" d="Indicaciones generales. Tu médico o el laboratorio te darán instrucciones específicas para cada estudio."/>
    <PtList items={[['moon','Estudios de sangre','Generalmente requieren ayuno de 8 a 12 horas. Puedes tomar agua natural.'],
      ['glass-water','Ultrasonido abdominal','Suele requerir ayuno de 6 a 8 horas. Algunos ultrasonidos requieren vejiga llena.'],
      ['shirt','Rayos X','Usa ropa cómoda sin elementos metálicos. Informa si existe posibilidad de embarazo.'],
      ['pill','Medicamentos','No suspendas ningún medicamento sin indicación de tu médico.']]}/></>;
  if(id==='faq') return <><PtHead t="Preguntas frecuentes"/><div style={{marginTop:18}}><Accordion items={D.faqs} defaultOpen={[0]}/></div></>;
  if(id==='pagos') return <><PtHead t="Formas de pago" d="Aceptamos distintos métodos para tu comodidad. El pago se realiza en recepción al finalizar tu consulta."/>
    <div className="cm-serv-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:14,marginTop:18}}>
      {[['credit-card','Tarjeta','Crédito y débito, principales emisores.'],['arrow-left-right','Transferencia','Te compartimos los datos en recepción.'],['banknote','Efectivo','En moneda nacional.']].map(([ic,t,d])=>
        <Card key={t} padding={22}><Icon name={ic} size={24} color="var(--gold-600)"/><div style={{fontSize:15,fontWeight:600,marginTop:12,color:'var(--text-heading)'}}>{t}</div><div style={{fontSize:13,color:'var(--text-muted)',marginTop:5,lineHeight:1.5}}>{d}</div></Card>)}
    </div>
    <p style={{fontSize:13,color:'var(--text-muted)',marginTop:16}}>Emitimos factura electrónica. Solicítala en recepción el mismo día de tu consulta.</p></>;
  if(id==='seguros') return <><PtHead t="Seguros y convenios" d="Trabajamos con aseguradoras y convenios empresariales. Los nombres mostrados son ejemplos demostrativos."/>
    <div className="cm-serv-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12,marginTop:18}}>
      {D.insurers.map(n=><Card key={n} padding={20} style={{display:'flex',flexDirection:'column',gap:10}}>
        <div style={{display:'flex',alignItems:'center',gap:10}}><span style={{width:34,height:34,borderRadius:'50%',background:'var(--ivory-200)',display:'grid',placeItems:'center'}}><Icon name="shield" size={16} color="var(--green-500)"/></span>
        <span style={{fontSize:14,fontWeight:600,color:'var(--text-heading)'}}>{n}</span></div>
        <Badge tone="gold" size="sm" style={{alignSelf:'flex-start'}}>Ejemplo de convenio</Badge></Card>)}
    </div>
    <Card padding={18} tone="sunken" style={{marginTop:16,display:'flex',gap:12,alignItems:'flex-start'}}><Icon name="info" size={17} color="var(--gold-600)"/>
      <p style={{fontSize:13,lineHeight:1.6,color:'var(--text-body)'}}>Antes de tu consulta, verifica con tu aseguradora la cobertura y los requisitos. Recepción puede orientarte con el trámite.</p></Card></>;
  if(id==='horarios') return <><PtHead t="Horarios" d="Los horarios pueden variar según especialidad y disponibilidad."/>
    <Card padding={24} style={{marginTop:18,maxWidth:520}}>{D.clinic.hours.map(([d,h])=><div key={d} style={{display:'flex',justifyContent:'space-between',padding:'13px 0',borderBottom:'1px solid var(--line-hairline)',fontSize:14.5}}>
      <span>{d}</span><span style={{fontWeight:600,color:h==='Cerrado'?'var(--text-muted)':'var(--text-heading)'}}>{h}</span></div>)}</Card>
    <Button style={{marginTop:18}} onClick={()=>go('medicos')}>Consulta los horarios de cada especialista</Button></>;
  if(id==='ubicaciones') return <><PtHead t="Ubicaciones"/>
    <div className="cm-dir-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginTop:18}}>
      {D.locations.map(l=><Card key={l.id} interactive padding={20} onClick={()=>go('sedes')}>
        <div style={{fontSize:15,fontWeight:600,color:'var(--text-heading)'}}>{l.name}</div>
        <div style={{fontSize:13,color:'var(--text-muted)',marginTop:5}}>{l.address} · {l.city}</div>
        <div style={{fontSize:13,color:'var(--text-accent)',marginTop:10,display:'flex',gap:7,alignItems:'center'}}><Icon name="phone" size={14}/>{l.phone}</div></Card>)}
    </div></>;
  if(id==='cancelacion') return <><PtHead t="Políticas de cancelación" d="Texto demostrativo. Ajusta estas políticas a la operación real de la clínica."/>
    <PtList items={[['calendar-clock','Cambios y cancelaciones','Puedes cambiar o cancelar tu cita contactando a recepción con al menos 12 horas de anticipación.'],
      ['clock','Tolerancia','Contamos con 15 minutos de tolerancia. Después de ese tiempo, recepción te ofrecerá el siguiente horario disponible.'],
      ['bell','Recordatorios','Te enviamos un recordatorio por correo 24 horas antes de tu cita.']]}/></>;
  return <><PtHead t="Recomendaciones generales" d="Consejos prácticos para aprovechar mejor tu atención."/>
    <PtList items={[['file-text','Lleva tus estudios','Los estudios recientes ayudan a tu médico a tener un panorama completo.'],
      ['message-square-text','Anota tus dudas','Escribe tus preguntas antes de la consulta para no olvidar ninguna.'],
      ['users','Acompañamiento','Puedes asistir acompañado de un familiar o persona de confianza.'],
      ['accessibility','Accesibilidad','Si requieres apoyo de movilidad, avísanos al solicitar tu cita.']]}/></>;
}

function PatientsPage({tab,go}){
  const [t,setT]=React.useState(tab||'primera');
  React.useEffect(()=>{if(tab)setT(tab)},[tab]);
  return <Section>
    <Crumbs go={go} items={[['Información para pacientes']]}/>
    <SectionHeading eyebrow="Pacientes" title="Información para pacientes" description="Guías prácticas, políticas y respuestas para que tu experiencia sea clara desde el primer contacto."/>
    <div className="cm-pat" style={{display:'grid',gridTemplateColumns:'260px minmax(0,1fr)',gap:44,marginTop:40,alignItems:'start'}}>
      <nav className="cm-pat-nav" role="tablist" aria-label="Categorías" style={{display:'flex',flexDirection:'column',gap:2,position:'sticky',top:96}}>
        {PT_TABS.map(([id,l,ic])=><button key={id} role="tab" aria-selected={t===id} onClick={()=>setT(id)}
          style={{display:'flex',alignItems:'center',gap:11,padding:'12px 14px',border:'none',borderRadius:'var(--radius-sm)',cursor:'pointer',textAlign:'left',whiteSpace:'nowrap',
            fontFamily:'var(--font-sans)',fontSize:13.5,fontWeight:t===id?600:400,background:t===id?'var(--surface-card)':'transparent',
            color:t===id?'var(--green-800)':'var(--text-body)',boxShadow:t===id?'var(--shadow-xs)':'none',transition:'all var(--dur-fast) var(--ease-standard)'}}>
          <Icon name={ic} size={16} color={t===id?'var(--gold-600)':'var(--ink-300)'}/>{l}</button>)}
      </nav>
      <div key={t} role="tabpanel" style={{animation:'cmRise var(--dur-slow) var(--ease-entrance)',minWidth:0}}><PatientsTab id={t} go={go}/></div>
    </div>
  </Section>;
}

function ArticlePage({idx,go,onBook}){
  const a=D.articles[idx]||D.articles[0], b=D.articleBodies[idx]||D.articleBodies[0];
  const sp=D.specialties.find(s=>s.slug===b.spec);
  const doc=b.doc?D.doctors.find(d=>d.id===b.doc):null;
  const related=D.articles.map((x,i)=>({...x,i})).filter(x=>x.i!==idx).slice(0,3);
  return <>
  <Section>
    <Crumbs go={go} items={[['Blog','blog'],[a.title]]}/>
    <div className="cm-article" style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) 320px',gap:56,alignItems:'start'}}>
      <article>
        <div style={{display:'flex',gap:10,alignItems:'center'}}><Badge tone="gold">{a.cat}</Badge><span style={{fontSize:12.5,color:'var(--text-muted)'}}>{a.read} de lectura · Equipo médico ClinicaMextas</span></div>
        <h1 style={{fontSize:'var(--text-display-md)',marginTop:18,maxWidth:720}}>{a.title}</h1>
        <p style={{fontSize:19,lineHeight:1.65,color:'var(--text-muted)',marginTop:18,fontFamily:'var(--font-display)'}}>{b.intro}</p>
        <div style={{aspectRatio:'12/5',borderRadius:'var(--radius-lg)',overflow:'hidden',marginTop:32,background:'var(--ivory-200)'}}>{a.photo?<img src={a.photo} alt={a.title} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>:<PhotoSlot/>}</div>
        {b.sections.map(([h,p])=><section key={h} style={{marginTop:34}}>
          <h2 style={{fontSize:26}}>{h}</h2><p style={{fontSize:16,lineHeight:1.8,color:'var(--text-body)',marginTop:12}}>{p}</p></section>)}
        <Card padding={20} tone="sunken" style={{marginTop:40,display:'flex',gap:12,alignItems:'flex-start'}}><Icon name="info" size={18} color="var(--gold-600)"/>
          <p style={{fontSize:13.5,lineHeight:1.6}}>Este contenido es informativo y no sustituye una consulta médica. Si tienes dudas sobre tu salud, agenda una valoración con un especialista.</p></Card>
      </article>
      <aside style={{display:'flex',flexDirection:'column',gap:16,position:'sticky',top:96}}>
        {sp&&<><Eyebrow>Especialidad relacionada</Eyebrow><SpecialtyCard name={sp.name} icon={<Icon name={sp.icon} size={28} color="var(--gold-600)"/>} description="Ver especialidad" onClick={()=>go('especialidad:'+sp.slug)} style={{aspectRatio:'auto',padding:24}}/></>}
        {doc?<><Eyebrow style={{marginTop:8}}>Especialista</Eyebrow><DoctorCard {...doc} layout="row" subspecialty={undefined} location={'Sede '+doc.location}
          actions={<Button size="sm" onClick={()=>onBook(doc)}>Solicitar cita</Button>}/></>
          :<Card padding={22}><p style={{fontSize:14,lineHeight:1.6}}>¿Quieres hablar con un especialista sobre este tema?</p>
            <div style={{display:'flex',gap:8,marginTop:14,flexWrap:'wrap'}}><Button size="sm" onClick={()=>onBook(sp?{specialty:sp.name}:{})}>Solicitar cita</Button><Button size="sm" variant="secondary" onClick={()=>go('medicos')}>Ver médicos</Button></div></Card>}
      </aside>
    </div>
  </Section>
  <Section tone="raised" py="var(--space-9)">
    <SectionHeading eyebrow="Sigue leyendo" title="Artículos relacionados" size="sm"/>
    <div className="cm-serv-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginTop:28}}>
      {related.map(r=><Card key={r.i} interactive padding={0} onClick={()=>go('articulo:'+r.i)} style={{overflow:'hidden'}}>
        {r.photo&&<img src={r.photo} alt="" loading="lazy" style={{width:'100%',height:150,objectFit:'cover',display:'block'}}/>}
        <div style={{padding:22}}><Badge tone="gold" size="sm">{r.cat}</Badge><h3 style={{fontSize:19,lineHeight:1.3,marginTop:12}}>{r.title}</h3>
        <span style={{fontSize:12,color:'var(--text-muted)',display:'block',marginTop:12}}>{r.read} de lectura</span></div></Card>)}
    </div>
  </Section></>;
}

function UrgenciasPage({go}){
  return <>
  <Section>
    <Crumbs go={go} items={[['Urgencias']]}/>
    <Card padding={40} style={{background:'var(--status-danger-soft)',borderColor:'rgba(140,58,46,.28)'}}>
      <div className="cm-emg" style={{display:'grid',gridTemplateColumns:'1fr auto',gap:32,alignItems:'center'}}>
        <div><div style={{display:'flex',gap:10,alignItems:'center'}}><Icon name="siren" size={22} color="var(--status-danger)"/><span style={{fontSize:12,fontWeight:600,letterSpacing:'.16em',color:'var(--status-danger)'}}>EMERGENCIAS</span></div>
          <h1 style={{fontSize:'var(--text-display-md)',color:'var(--status-danger)',marginTop:14}}>¿Es una emergencia médica?</h1>
          <p style={{fontSize:16,lineHeight:1.7,color:'var(--ink-700)',marginTop:14,maxWidth:640}}>Si presentas una emergencia médica o una situación que pueda poner en riesgo tu vida, llama al servicio de emergencias de tu localidad o acude al servicio de urgencias más cercano.</p></div>
        <a href="tel:911" style={{display:'inline-flex',alignItems:'center',gap:10,background:'var(--status-danger)',color:'#fff',padding:'18px 30px',borderRadius:'var(--radius-sm)',fontSize:17,fontWeight:600}}><Icon name="phone" size={19}/>Llamar al 911</a>
      </div>
    </Card>
  </Section>
  <Section tone="raised">
    <div className="cm-faq" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:48}}>
      <div><SectionHeading eyebrow="Urgencias en ClinicaMextas" title="Atención el mismo día" size="sm" description="Nuestro servicio de urgencias atiende situaciones que requieren valoración médica pronta y no ponen en riesgo la vida."/>
        <div style={{marginTop:24}}>{[['Sede San Pedro','Abierto 24 horas'],['Sede Polanco','Lunes a domingo · 7:00 AM – 11:00 PM'],['Sede Monterrey Centro','Lunes a sábado · 7:00 AM – 9:00 PM']].map(([s,h])=>
          <div key={s} style={{display:'flex',justifyContent:'space-between',gap:16,padding:'14px 0',borderBottom:'1px solid var(--line-hairline)',fontSize:14}}><span style={{fontWeight:600,color:'var(--text-heading)'}}>{s}</span><span style={{color:'var(--text-muted)',textAlign:'right'}}>{h}</span></div>)}</div>
        <p style={{fontSize:12.5,color:'var(--text-muted)',marginTop:14}}>Horarios demostrativos.</p></div>
      <div><SectionHeading eyebrow="Si acudes a urgencias" title="Qué llevar" size="sm"/>
        <PtList items={[['contact','Identificación oficial',null],['pill','Lista de medicamentos actuales',null],['file-text','Estudios recientes, si los tienes',null],['shield-check','Póliza de seguro, si aplica',null]]}/>
        <Button variant="secondary" style={{marginTop:20}} onClick={()=>go('sedes')}>Ver ubicaciones</Button></div>
    </div>
  </Section></>;
}

const LEGAL={
  privacidad:['Aviso de privacidad',[['Responsable del tratamiento','ClinicaMextas, con domicilio en Av. San Pedro 123, Col. Del Valle, San Pedro Garza García, N.L., es responsable del uso y protección de los datos personales que nos proporcionas.'],
    ['Datos que recabamos','Datos de identificación y contacto: nombre, teléfono y correo electrónico, así como el motivo general de consulta que decidas compartir en nuestros formularios.'],
    ['Finalidad','Gestionar solicitudes de cita, responder mensajes de contacto, enviar recordatorios y mejorar la experiencia del sitio.'],
    ['Derechos del usuario','Puedes solicitar el acceso, rectificación, cancelación u oposición al uso de tus datos, así como revocar tu consentimiento.'],
    ['Contacto','Para ejercer tus derechos escribe a privacidad@clinicamextas.mx indicando tu nombre y la solicitud.'],
    ['Cookies','Este sitio utiliza cookies necesarias, analíticas y de preferencias. Puedes configurarlas desde el banner de cookies.'],
    ['Actualización','Este aviso puede modificarse. La versión vigente estará siempre disponible en esta página. Última actualización: septiembre 2026.']]],
  terminos:['Términos y condiciones',[['Uso del sitio','El contenido de este sitio es informativo y no sustituye una consulta médica.'],['Solicitudes de cita','Las solicitudes enviadas en línea no constituyen una cita confirmada hasta que recepción la confirme.'],['Propiedad','Textos, imágenes y marca son propiedad de ClinicaMextas.']]],
  cookies:['Política de cookies',[['Necesarias','Permiten el funcionamiento básico del sitio y no pueden desactivarse.'],['Analíticas','Nos ayudan a entender cómo se usa el sitio de forma agregada.'],['Preferencias','Recuerdan tus ajustes, como la sede seleccionada.']]],
  accesibilidad:['Accesibilidad',[['Compromiso','Diseñamos este sitio para que pueda usarse con teclado, lectores de pantalla y distintos tamaños de texto.'],['Movimiento','Si tu sistema tiene activada la reducción de movimiento, las animaciones se desactivan.'],['Contacto','Si encuentras una barrera de accesibilidad, escríbenos a hola@clinicamextas.mx.']]]};

function LegalPage({kind,go}){
  const [title,secs]=LEGAL[kind]||LEGAL.privacidad;
  return <Section>
    <Crumbs go={go} items={[['Legal'],[title]]}/>
    <div className="cm-article" style={{display:'grid',gridTemplateColumns:'240px minmax(0,1fr)',gap:56,alignItems:'start'}}>
      <nav aria-label="Contenido" style={{position:'sticky',top:96,display:'flex',flexDirection:'column',gap:4}}>
        <Eyebrow style={{marginBottom:10}}>Legal</Eyebrow>
        {Object.entries(LEGAL).map(([k,[t]])=><a key={k} href="#" onClick={e=>{e.preventDefault();go('legal:'+k)}}
          style={{fontSize:13.5,padding:'8px 0',color:k===(kind||'privacidad')?'var(--green-800)':'var(--text-muted)',fontWeight:k===(kind||'privacidad')?600:400}}>{t}</a>)}
      </nav>
      <div style={{maxWidth:760}}>
        <h1 style={{fontSize:'var(--text-display-md)'}}>{title}</h1>
        <Card padding={16} tone="accent" style={{marginTop:20,display:'flex',gap:10,alignItems:'center'}}><Icon name="info" size={16} color="var(--gold-700)"/>
          <span style={{fontSize:13,color:'var(--gold-700)'}}>Documento demostrativo y editable. No constituye un texto legal vigente.</span></Card>
        {secs.map(([h,p],k)=><section key={h} style={{marginTop:32,paddingTop:28,borderTop:k?'1px solid var(--line-hairline)':'none'}}>
          <h2 style={{fontSize:22}}>{h}</h2><p style={{fontSize:15.5,lineHeight:1.8,marginTop:10}}>{p}</p></section>)}
      </div>
    </div>
  </Section>;
}

Object.assign(window,{PatientsPage,ArticlePage,UrgenciasPage,LegalPage});
