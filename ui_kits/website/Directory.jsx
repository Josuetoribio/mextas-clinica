const {Button,Badge,Chip,Card,Input,Select,Field,Modal,DoctorCard,TimeSlotPicker,Accordion,SectionHeading,Eyebrow,SpecialtyCard}=window.ClinicaMextasDesignSystem_d4abcf;
const D=window.CM_DATA;

function DoctorProfile({doctor,onClose,onBook}){
  if(!doctor) return null;
  const d=doctor;
  return <Modal open={!!d} onClose={onClose} size="lg" eyebrow={d.specialty} title={d.name}>
    <div className="cm-prof" style={{display:'grid',gridTemplateColumns:'190px 1fr',gap:26,alignItems:'start'}}>
      <img src={d.photo} alt={d.name} style={{width:'100%',borderRadius:'var(--radius-md)',objectFit:'cover',objectPosition:'top',aspectRatio:'3/4'}}/>
      <div>
        <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
          <Badge tone="green">{d.mode}</Badge><Badge tone="neutral">Sede {d.location}</Badge><Badge tone="outline">{d.years} años de experiencia</Badge></div>
        <p style={{fontSize:14.5,lineHeight:1.7,color:'var(--text-body)',marginTop:16}}>{d.sub}. Atiende valoración inicial, seguimiento y estudios relacionados con su especialidad, con un enfoque preventivo y explicativo en cada consulta.</p>
        <div className="cm-wz2" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'14px 24px',marginTop:20}}>
          {[['Cédula profesional','Céd. Prof. '+d.license],['Idiomas',d.languages.join(', ')],['Modalidad',d.mode],['Formación','Universidad Autónoma de Nuevo León · Especialidad en Hospital Universitario']].map(([k,v])=>
            <div key={k}><div style={{fontSize:11,fontWeight:600,letterSpacing:'.08em',textTransform:'uppercase',color:'var(--text-muted)'}}>{k}</div>
            <div style={{fontSize:13.5,color:'var(--text-body)',marginTop:4,lineHeight:1.5}}>{v}</div></div>)}
        </div>
        <div style={{marginTop:24,paddingTop:20,borderTop:'1px solid var(--line-hairline)'}}>
          <Eyebrow>Próximos horarios disponibles</Eyebrow>
          <div style={{display:'flex',gap:24,marginTop:14,flexWrap:'wrap'}}>
            {Object.entries(d.slots).map(([day,times])=><div key={day} style={{minWidth:180,flex:1}}>
              <div style={{fontSize:13,fontWeight:600,color:'var(--text-heading)',marginBottom:9}}>{day}</div>
              <TimeSlotPicker columns={3} slots={times}/></div>)}
          </div>
          <p style={{fontSize:12,color:'var(--text-muted)',marginTop:14}}>Horarios de demostración. Pueden variar según especialidad y disponibilidad.</p>
        </div>
        <div style={{display:'flex',gap:10,marginTop:22}}>
          <Button onClick={()=>onBook(d)}>Solicitar cita</Button>
          <Button variant="secondary" onClick={onClose}>Volver al directorio</Button></div>
      </div>
    </div>
  </Modal>;
}

function DirectoryPage({onBook,go}){
  const [q,setQ]=React.useState(''),[spec,setSpec]=React.useState('Todas'),[loc,setLoc]=React.useState('Todas'),[mode,setMode]=React.useState('Todas'),[sel,setSel]=React.useState(null),[sheet,setSheet]=React.useState(false);
  const active=[spec,loc,mode].filter(x=>x!=='Todas').length;
  const specs=['Todas',...new Set(D.doctors.map(d=>d.specialty))];
  const locs=['Todas',...new Set(D.doctors.map(d=>d.location))];
  const list=D.doctors.filter(d=>(spec==='Todas'||d.specialty===spec)&&(loc==='Todas'||d.location===loc)&&(mode==='Todas'||d.mode.includes(mode))&&(!q||(d.name+d.specialty+d.sub).toLowerCase().includes(q.toLowerCase())));
  return <Section id="medicos">
    <nav aria-label="Ruta" style={{display:'flex',gap:9,fontSize:12.5,color:'var(--text-muted)',marginBottom:22}}>
      <a href="#" onClick={e=>{e.preventDefault();go('inicio')}}>Inicio</a><span>/</span><span style={{color:'var(--text-heading)'}}>Médicos</span></nav>
    <SectionHeading eyebrow="Directorio médico" title="Encuentra a tu especialista" description="Filtra por especialidad, sede y modalidad de atención."/>
    <div className="cm-mfilter" style={{display:'none',gap:10,marginTop:24}}>
      <div style={{flex:1}}><Input value={q} onChange={e=>setQ(e.target.value)} icon={<Icon name="search" size={16}/>} placeholder="Buscar especialista" aria-label="Buscar especialista"/></div>
      <Button variant="secondary" onClick={()=>setSheet(true)} icon={<Icon name="sliders-horizontal" size={16}/>}>Filtros{active?' ('+active+')':''}</Button>
    </div>
    <Modal open={sheet} onClose={()=>setSheet(false)} variant="sheet" eyebrow="Directorio" title="Filtrar especialistas"
      footer={<><Button variant="ghost" onClick={()=>{setSpec('Todas');setLoc('Todas');setMode('Todas')}}>Limpiar</Button><Button onClick={()=>setSheet(false)}>Ver {list.length} resultados</Button></>}>
      <div style={{display:'flex',flexDirection:'column',gap:20}}>
        {[['Especialidad',specs,spec,setSpec],['Sede',locs,loc,setLoc],['Modalidad',['Todas','Presencial','virtual'],mode,setMode]].map(([t,opts,v,fn])=><div key={t}>
          <div style={{fontSize:12,fontWeight:600,letterSpacing:'.06em',textTransform:'uppercase',color:'var(--text-muted)',marginBottom:10}}>{t}</div>
          <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>{opts.map(o=><Chip key={o} selected={v===o} onClick={()=>fn(o)}>{o==='virtual'?'Virtual':o}</Chip>)}</div></div>)}
      </div>
    </Modal>
    <Card padding={20} style={{marginTop:28}} className="cm-filter-card">
      <div className="cm-filters" style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr',gap:12,alignItems:'end'}}>
        <Field label="Búsqueda" htmlFor="q"><Input id="q" value={q} onChange={e=>setQ(e.target.value)} icon={<Icon name="search" size={16}/>} placeholder="¿Qué especialista estás buscando?"/></Field>
        <Field label="Especialidad" htmlFor="fs"><Select id="fs" value={spec} onChange={e=>setSpec(e.target.value)} placeholder="Todas" options={specs.slice(1)}/></Field>
        <Field label="Sede" htmlFor="fl"><Select id="fl" value={loc} onChange={e=>setLoc(e.target.value)} placeholder="Todas" options={locs.slice(1)}/></Field>
        <Field label="Modalidad" htmlFor="fm"><Select id="fm" value={mode} onChange={e=>setMode(e.target.value)} placeholder="Todas" options={['Presencial','virtual']}/></Field>
      </div>
      <div style={{display:'flex',gap:8,marginTop:16,flexWrap:'wrap',alignItems:'center'}}>
        <span style={{fontSize:12.5,color:'var(--text-muted)'}}>Accesos rápidos:</span>
        {['Cardiología','Pediatría','Ginecología','Traumatología'].map(x=><Chip key={x} selected={spec===x} onClick={()=>setSpec(spec===x?'Todas':x)}>{x}</Chip>)}
      </div>
    </Card>
    <p style={{fontSize:13,color:'var(--text-muted)',marginTop:22}}>{list.length} {list.length===1?'especialista':'especialistas'} {list.length!==D.doctors.length&&'· '}{list.length!==D.doctors.length&&<a href="#" onClick={e=>{e.preventDefault();setQ('');setSpec('Todas');setLoc('Todas');setMode('Todas')}}>Limpiar filtros</a>}</p>
    <div className="cm-dir-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginTop:14}}>
      {list.map(d=><DoctorCard key={d.id} {...d} subspecialty={d.sub} location={'Sede '+d.location} layout="row" style={{minHeight:150}}
        actions={<><Button size="sm" variant="secondary" onClick={()=>setSel(d)}>Ver perfil</Button><Button size="sm" onClick={()=>onBook(d)}>Solicitar cita</Button></>}/>)}
      {!list.length&&<Card padding={40} style={{gridColumn:'1/-1',textAlign:'center'}}>
        <Icon name="user-search" size={28} color="var(--ink-200)"/>
        <p style={{fontSize:15,color:'var(--text-heading)',marginTop:12}}>No encontramos especialistas con esos filtros.</p>
        <p style={{fontSize:13.5,color:'var(--text-muted)',marginTop:6}}>Prueba con otra especialidad o contacta a recepción al (81) 1234 5678.</p></Card>}
    </div>
    <DoctorProfile doctor={sel} onClose={()=>setSel(null)} onBook={d=>{setSel(null);onBook(d)}}/>
  </Section>;
}

function SpecialtyPage({slug,onBook,go}){
  const sp=D.specialties.find(x=>x.slug===slug)||D.specialties[3];
  const docs=D.doctors.filter(d=>d.specialty===sp.name);
  const atiende={'Cardiología':['Hipertensión arterial','Colesterol elevado','Evaluación cardiovascular','Prevención cardiovascular','Seguimiento cardiológico'],
    'Pediatría':['Control del niño sano','Vacunación por edad','Infecciones frecuentes','Desarrollo y crecimiento','Orientación a madres y padres']}[sp.name]
    ||['Valoración inicial','Diagnóstico y estudios','Tratamiento y seguimiento','Prevención','Segunda opinión'];
  return <>
  <Section>
    <nav aria-label="Ruta" style={{display:'flex',gap:9,fontSize:12.5,color:'var(--text-muted)',marginBottom:22}}>
      <a href="#" onClick={e=>{e.preventDefault();go('inicio')}}>Inicio</a><span>/</span>
      <a href="#" onClick={e=>{e.preventDefault();go('especialidades-todas')}}>Especialidades</a><span>/</span>
      <span style={{color:'var(--text-heading)'}}>{sp.name}</span></nav>
    <div className="cm-spec-hero" style={{display:'grid',gridTemplateColumns:'1.2fr 1fr',gap:48,alignItems:'center'}}>
      <div><Icon name={sp.icon} size={38} color="var(--gold-600)"/>
        <h1 style={{fontSize:'var(--text-display-md)',marginTop:18}}>{sp.name}</h1>
        <p style={{fontSize:'var(--text-body-lg)',lineHeight:1.7,color:'var(--text-muted)',marginTop:16,maxWidth:520}}>Evaluación, prevención y seguimiento integral con un equipo que te explica cada paso del proceso.</p>
        <div style={{display:'flex',gap:12,marginTop:26}}>
          <Button onClick={()=>onBook({specialty:sp.name})}>Solicitar cita</Button>
          <Button variant="secondary" onClick={()=>go('medicos')}>Ver especialistas</Button></div></div>
      <Card padding={26} tone="sunken">
        <Eyebrow>¿Cuándo acudir?</Eyebrow>
        <ul style={{margin:'14px 0 0',padding:0,listStyle:'none',display:'flex',flexDirection:'column',gap:11}}>
          {['Si tu médico general te refirió a esta especialidad','Si tienes estudios previos que requieren interpretación','Si necesitas seguimiento de un tratamiento en curso','Si buscas una evaluación preventiva'].map(x=>
            <li key={x} style={{display:'flex',gap:10,fontSize:13.5,lineHeight:1.55,color:'var(--text-body)'}}><Icon name="check" size={15} color="var(--gold-600)"/>{x}</li>)}
        </ul>
        <p style={{fontSize:12,color:'var(--text-muted)',marginTop:16}}>Esta información es orientativa y no sustituye una valoración médica.</p>
      </Card>
    </div>
  </Section>
  <Section tone="raised">
    <div className="cm-two" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:48}}>
      <div><SectionHeading eyebrow="¿Qué atendemos?" title="Motivos de consulta frecuentes" size="sm"/>
        <div style={{display:'grid',gap:10,marginTop:22}}>
          {atiende.map(x=><div key={x} style={{display:'flex',gap:12,alignItems:'center',padding:'14px 16px',background:'var(--surface-page)',borderRadius:'var(--radius-sm)',border:'1px solid var(--line-hairline)'}}>
            <Icon name="activity" size={17} color="var(--gold-600)"/><span style={{fontSize:14,color:'var(--text-body)'}}>{x}</span></div>)}
        </div></div>
      <div><SectionHeading eyebrow="Servicios relacionados" title="Estudios y procedimientos" size="sm"/>
        <div style={{display:'grid',gap:10,marginTop:22}}>
          {D.services.slice(0,4).map(s=><div key={s.name} style={{display:'flex',gap:12,alignItems:'center',padding:'14px 16px',background:'var(--surface-page)',borderRadius:'var(--radius-sm)',border:'1px solid var(--line-hairline)'}}>
            <Icon name={s.icon} size={17} color="var(--gold-600)"/><span style={{fontSize:14,color:'var(--text-body)'}}>{s.name}</span></div>)}
        </div>
        <div style={{marginTop:26}}><Eyebrow>Sedes donde se ofrece</Eyebrow>
          <div style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:12}}>{D.locations.map(l=><Badge key={l.id} tone="neutral">{l.name}</Badge>)}</div></div>
      </div>
    </div>
  </Section>
  <Section>
    <SectionHeading align="center" eyebrow="Conoce a nuestros especialistas" title={'Médicos de '+sp.name}/>
    <div className="cm-doc-grid" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16,marginTop:36}}>
      {(docs.length?docs:D.doctors.slice(0,4)).map(d=><DoctorCard key={d.id} {...d} subspecialty={undefined} location={'Sede '+d.location}
        actions={<Button size="sm" onClick={()=>onBook(d)}>Solicitar cita</Button>}/>)}
    </div>
  </Section>
  <Section tone="raised">
    <div style={{maxWidth:820,marginInline:'auto'}}>
      <SectionHeading align="center" eyebrow="Preguntas frecuentes" title={'Sobre '+sp.name.toLowerCase()}/>
      <div style={{marginTop:30}}><Accordion defaultOpen={[0]} items={[
        {question:'¿Necesito referencia para agendar?',answer:'No es necesaria. Puedes solicitar cita directamente desde el sitio y recepción confirmará la disponibilidad.'},
        {question:'¿Debo llevar estudios previos?',answer:'Si cuentas con estudios recientes, llévalos. Ayudan al especialista a tener un panorama completo.'},
        {question:'¿Cuánto dura la consulta?',answer:'Una primera valoración suele durar entre 30 y 45 minutos; el seguimiento, alrededor de 20 minutos.'}]}/></div>
    </div>
  </Section>
  </>;
}

function AllSpecialties({go}){
  const [q,setQ]=React.useState('');
  const list=D.specialties.filter(s=>s.name.toLowerCase().includes(q.toLowerCase()));
  return <Section>
    <nav aria-label="Ruta" style={{display:'flex',gap:9,fontSize:12.5,color:'var(--text-muted)',marginBottom:22}}>
      <a href="#" onClick={e=>{e.preventDefault();go('inicio')}}>Inicio</a><span>/</span><span style={{color:'var(--text-heading)'}}>Especialidades</span></nav>
    <SectionHeading eyebrow="Todas las especialidades" title="Doce áreas médicas, un mismo estándar" description="Cada especialidad cuenta con médicos certificados y acceso a laboratorio e imagenología."/>
    <div style={{maxWidth:380,marginTop:26}}><Input value={q} onChange={e=>setQ(e.target.value)} icon={<Icon name="search" size={16}/>} placeholder="Buscar especialidad"/></div>
    <div className="cm-spec-grid" style={{display:'grid',gridTemplateColumns:'repeat(6,1fr)',gap:14,marginTop:26}}>
      {list.map(s=><SpecialtyCard key={s.slug} name={s.name} icon={<Icon name={s.icon} size={28} color="var(--gold-600)"/>} onClick={()=>go('especialidad:'+s.slug)}/>)}
    </div>
  </Section>;
}

function LocationsPage({onBook,go,embedded=false}){
  const [sel,setSel]=React.useState(D.locations[0].id);
  const l=D.locations.find(x=>x.id===sel);
  return <Section id="sedes" tone={embedded?'sunken':'page'}>
    {!embedded&&<nav aria-label="Ruta" style={{display:'flex',gap:9,fontSize:12.5,color:'var(--text-muted)',marginBottom:22}}>
      <a href="#" onClick={e=>{e.preventDefault();go('inicio')}}>Inicio</a><span>/</span><span style={{color:'var(--text-heading)'}}>Sedes</span></nav>}
    <SectionHeading eyebrow="Nuestras sedes" title="Cinco ubicaciones, la misma atención" description="Selecciona una sede para ver su información, especialidades y servicios disponibles."/>
    <div style={{display:'flex',gap:9,marginTop:26,flexWrap:'wrap'}}>
      {D.locations.map(x=><Chip key={x.id} selected={sel===x.id} onClick={()=>setSel(x.id)}>{x.name}</Chip>)}</div>
    <div className="cm-loc" style={{display:'grid',gridTemplateColumns:'1.15fr 1fr',gap:32,marginTop:26,alignItems:'stretch'}}>
      <Card padding={0} style={{overflow:'hidden'}}>
        <img src="../../assets/photos/recepcion.png" alt={l.name} style={{width:'100%',height:260,objectFit:'cover',display:'block'}}/>
        <div style={{padding:26}}>
          <h3 style={{fontFamily:'var(--font-display)',fontSize:'var(--text-title-lg)',color:'var(--text-heading)'}}>{l.name}</h3>
          <div style={{display:'flex',flexDirection:'column',gap:11,marginTop:16,fontSize:13.5,color:'var(--text-body)'}}>
            {[['map-pin',l.address+' · '+l.city],['phone',l.phone],['clock','Lun – Vie 7:00 am – 8:00 pm · Sáb 8:00 am – 2:00 pm'],['car',l.parking],['accessibility',l.access]].map(([i,t])=>
              <span key={t} style={{display:'flex',gap:11,alignItems:'flex-start'}}><Icon name={i} size={16} color="var(--gold-600)"/>{t}</span>)}
          </div>
          <div style={{display:'flex',gap:10,marginTop:22,flexWrap:'wrap'}}>
            <Button size="sm" variant="secondary" icon={<Icon name="navigation" size={14}/>}>Cómo llegar</Button>
            <Button size="sm" variant="secondary" onClick={()=>go('medicos')}>Ver médicos</Button>
            <Button size="sm" onClick={()=>onBook({location:l.name})}>Solicitar cita</Button></div>
        </div></Card>
      <div style={{display:'flex',flexDirection:'column',gap:16}}>
        <Card padding={24} style={{flex:1}}>
          <Eyebrow>Especialidades disponibles</Eyebrow>
          <div style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:14}}>
            {D.specialties.slice(0,l.specialties).map(s=><Badge key={s.slug} tone="neutral">{s.name}</Badge>)}</div>
        </Card>
        <Card padding={24} style={{flex:1}}>
          <Eyebrow>Servicios en esta sede</Eyebrow>
          <div className="cm-wz2" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginTop:14}}>
            {D.services.map(s=><span key={s.name} style={{display:'flex',gap:9,alignItems:'center',fontSize:13,color:'var(--text-body)'}}>
              <Icon name={s.icon} size={15} color="var(--gold-600)"/>{s.name}</span>)}</div>
        </Card>
      </div>
    </div>
  </Section>;
}
Object.assign(window,{DirectoryPage,DoctorProfile,SpecialtyPage,AllSpecialties,LocationsPage});