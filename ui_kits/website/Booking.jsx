const {Button,Badge,Card,Modal,StepIndicator,TimeSlotPicker,RadioGroup,Field,Input,Select,Eyebrow,Chip}=window.ClinicaMextasDesignSystem_d4abcf;
const D=window.CM_DATA;
const STEPS=['Motivo','Especialidad','Médico','Sede','Fecha','Horario','Datos','Resumen'];
const MOTIVOS=[{value:'consulta',label:'Consulta médica',description:'Atención con un especialista'},
{value:'primera',label:'Primera valoración',description:'Es tu primera visita con nosotros'},
{value:'seguimiento',label:'Seguimiento',description:'Continuidad de un tratamiento'},
{value:'estudios',label:'Estudios / laboratorio',description:'Análisis clínicos o imagenología'},
{value:'nutricion',label:'Consulta nutricional',description:'Valoración y plan alimenticio'}];

function Calendar({value,onChange}){
  const days=['L','M','M','J','V','S','D'];
  const base=new Date(2026,8,1); const offset=1; // 1 sep 2026 = martes
  const cells=[...Array(offset).fill(null),...Array(30).fill(0).map((_,i)=>i+1)];
  return <div>
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:14}}>
      <button type="button" aria-label="Mes anterior" style={{background:'none',border:'1px solid var(--line-hairline)',borderRadius:'50%',width:30,height:30,cursor:'pointer'}}>‹</button>
      <span style={{fontFamily:'var(--font-display)',fontSize:17,color:'var(--text-heading)'}}>Septiembre 2026</span>
      <button type="button" aria-label="Mes siguiente" style={{background:'none',border:'1px solid var(--line-hairline)',borderRadius:'50%',width:30,height:30,cursor:'pointer'}}>›</button>
    </div>
    <div style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)',gap:5}}>
      {days.map((d,i)=><div key={i} style={{textAlign:'center',fontSize:11,fontWeight:600,color:'var(--text-muted)',paddingBottom:6}}>{d}</div>)}
      {cells.map((n,i)=>{if(!n) return <div key={i}/>;
        const dow=(i)%7, weekend=dow===6, past=n<22, sel=value===n;
        const dis=weekend||past;
        return <button key={i} type="button" disabled={dis} onClick={()=>onChange(n)}
          style={{aspectRatio:'1/1',borderRadius:'var(--radius-sm)',cursor:dis?'not-allowed':'pointer',fontFamily:'var(--font-sans)',fontSize:13,
            border:'1px solid '+(sel?'var(--green-800)':'transparent'),background:sel?'var(--green-800)':dis?'transparent':'var(--ivory-200)',
            color:sel?'var(--ivory-100)':dis?'var(--ink-200)':'var(--text-body)',transition:'all var(--dur-fast) var(--ease-standard)'}}>{n}</button>;})}
    </div>
    <p style={{fontSize:12,color:'var(--text-muted)',marginTop:14}}>Disponibilidad de demostración. Recepción confirma la fecha definitiva.</p>
  </div>;
}

function Summary({s}){
  const rows=[['Motivo',(MOTIVOS.find(m=>m.value===s.motivo)||{}).label],['Especialidad',s.specialty],['Médico',s.doctor],['Sede',s.location],['Fecha',s.date?s.date+' de septiembre de 2026':null],['Hora',s.time]];
  return <div style={{display:'flex',flexDirection:'column',gap:0}}>
    {rows.filter(r=>r[1]).map(([k,v])=><div key={k} style={{display:'flex',justifyContent:'space-between',gap:20,padding:'13px 0',borderBottom:'1px solid var(--line-hairline)'}}>
      <span style={{fontSize:12,fontWeight:600,letterSpacing:'.06em',textTransform:'uppercase',color:'var(--text-muted)'}}>{k}</span>
      <span style={{fontSize:14.5,color:'var(--text-heading)',fontWeight:500,textAlign:'right'}}>{v}</span></div>)}
  </div>;
}

function BookingWizard({open,onClose,preset}){
  const [step,setStep]=React.useState(0);
  const [s,setS]=React.useState({motivo:'consulta',specialty:'',doctor:'',location:'',date:null,time:'',name:'',phone:'',email:'',note:''});
  const [done,setDone]=React.useState(false);
  React.useEffect(()=>{if(open){setStep(0);setDone(false);setS(x=>({...x,...(preset||{})}))}},[open,preset]);
  const set=(k,v)=>setS(x=>({...x,[k]:v}));
  const docs=D.doctors.filter(d=>!s.specialty||d.specialty===s.specialty);
  const valid=[!!s.motivo,!!s.specialty,!!s.doctor,!!s.location,!!s.date,!!s.time,s.name&&s.phone&&s.email,true][step];

  if(done) return <Modal open={open} onClose={onClose} size="md" eyebrow="Solicitud recibida" title="Tu solicitud de cita fue registrada">
    <div style={{textAlign:'center',marginBottom:24}}>
      <span style={{width:60,height:60,borderRadius:'50%',background:'var(--green-100)',display:'grid',placeItems:'center',margin:'0 auto'}}><Icon name="check" size={28} color="var(--green-800)"/></span>
      <p style={{fontSize:14.5,color:'var(--text-muted)',marginTop:16,lineHeight:1.65,maxWidth:420,marginInline:'auto'}}>Recepción confirmará la disponibilidad por teléfono o correo. Esta es una <strong style={{color:'var(--text-heading)'}}>solicitud</strong>, no una reserva confirmada.</p>
      <div style={{display:'inline-flex',gap:9,alignItems:'center',marginTop:16,background:'var(--surface-accent-soft)',borderRadius:'var(--radius-pill)',padding:'7px 16px'}}>
        <span style={{fontSize:12,color:'var(--gold-700)',fontWeight:600,letterSpacing:'.06em'}}>FOLIO CM-2026-004821</span></div>
    </div>
    <Summary s={s}/>
    <div className="cm-confirm" style={{display:'flex',gap:10,marginTop:24,flexWrap:'wrap'}}>
      <Button variant="secondary" icon={<Icon name="calendar-plus" size={15}/>}>Agregar al calendario</Button>
      <Button variant="ghost" icon={<Icon name="phone" size={15}/>}>Contactar a recepción</Button>
      <Button onClick={onClose} style={{marginLeft:'auto'}}>Volver al inicio</Button>
    </div>
  </Modal>;

  return <Modal open={open} onClose={onClose} size="lg" eyebrow="Agendar cita" title={['¿Qué necesitas?','Selecciona una especialidad','Elige a tu médico','¿En qué sede?','Selecciona una fecha','Horarios disponibles','Tus datos','Revisa tu solicitud'][step]}
    footer={<>
      <Button variant="ghost" onClick={()=>step?setStep(step-1):onClose()}>{step?'Atrás':'Cancelar'}</Button>
      <Button disabled={!valid} onClick={()=>step===7?setDone(true):setStep(step+1)}>{step===7?'Solicitar cita':'Continuar'}</Button>
    </>}>
    <StepIndicator steps={STEPS} current={step} compact style={{marginBottom:24}}/>
    {step===0&&<RadioGroup name="motivo" value={s.motivo} onChange={v=>set('motivo',v)} columns={2} options={MOTIVOS}/>}
    {step===1&&<div className="cm-wz3" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10}}>
      {D.specialties.map(sp=><button key={sp.slug} type="button" onClick={()=>{set('specialty',sp.name);set('doctor','')}}
        style={{display:'flex',alignItems:'center',gap:11,padding:'14px 16px',cursor:'pointer',textAlign:'left',fontFamily:'var(--font-sans)',fontSize:13.5,
          borderRadius:'var(--radius-sm)',background:s.specialty===sp.name?'var(--ivory-200)':'var(--surface-raised)',
          border:'1px solid '+(s.specialty===sp.name?'var(--green-600)':'var(--line-hairline)'),color:'var(--text-body)'}}>
        <Icon name={sp.icon} size={19} color="var(--gold-600)"/>{sp.name}</button>)}</div>}
    {step===2&&<div style={{display:'flex',flexDirection:'column',gap:10}}>
      {docs.length?docs.map(d=><button key={d.id} type="button" onClick={()=>set('doctor',d.name)}
        style={{display:'flex',gap:14,alignItems:'center',padding:12,cursor:'pointer',textAlign:'left',borderRadius:'var(--radius-sm)',
          background:s.doctor===d.name?'var(--ivory-200)':'var(--surface-raised)',border:'1px solid '+(s.doctor===d.name?'var(--green-600)':'var(--line-hairline)')}}>
        <img src={d.photo} alt="" style={{width:52,height:52,borderRadius:'50%',objectFit:'cover',objectPosition:'top'}}/>
        <span><span style={{display:'block',fontSize:15,fontWeight:600,color:'var(--text-heading)'}}>{d.name}</span>
        <span style={{display:'block',fontSize:13,color:'var(--text-muted)',marginTop:2}}>{d.sub} · Sede {d.location} · {d.years} años de experiencia</span></span>
        </button>):<p style={{fontSize:14,color:'var(--text-muted)'}}>No hay médicos de demostración cargados para esta especialidad. Recepción puede asignarte un especialista disponible.</p>}
      </div>}
    {step===3&&<div className="cm-wz2" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
      {D.locations.map(l=><button key={l.id} type="button" onClick={()=>set('location',l.name)}
        style={{padding:'16px 18px',cursor:'pointer',textAlign:'left',borderRadius:'var(--radius-sm)',
          background:s.location===l.name?'var(--ivory-200)':'var(--surface-raised)',border:'1px solid '+(s.location===l.name?'var(--green-600)':'var(--line-hairline)')}}>
        <span style={{display:'block',fontSize:14.5,fontWeight:600,color:'var(--text-heading)'}}>{l.name}</span>
        <span style={{display:'block',fontSize:12.5,color:'var(--text-muted)',marginTop:4}}>{l.address}</span>
        <span style={{display:'block',fontSize:12,color:'var(--text-accent)',marginTop:8}}>{l.specialties} especialidades disponibles</span></button>)}</div>}
    {step===4&&<div style={{maxWidth:380,marginInline:'auto'}}><Calendar value={s.date} onChange={v=>{set('date',v);set('time','')}}/></div>}
    {step===5&&<div className="cm-slots"><p style={{fontSize:13.5,color:'var(--text-muted)',marginBottom:16}}>Horarios para el {s.date} de septiembre en {s.location}.</p>
      <TimeSlotPicker columns={5} value={s.time} onChange={v=>set('time',v)} slots={['09:00 AM','09:30 AM',{time:'10:00 AM',disabled:true},'10:30 AM','12:00 PM','01:00 PM',{time:'03:30 PM',disabled:true},'04:00 PM','04:30 PM','05:30 PM']}/></div>}
    {step===6&&<div className="cm-wz2" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
      <Field label="Nombre completo" required htmlFor="b1"><Input id="b1" value={s.name} onChange={e=>set('name',e.target.value)} placeholder="María Fernanda Ruiz"/></Field>
      <Field label="Teléfono" required htmlFor="b2"><Input id="b2" value={s.phone} onChange={e=>set('phone',e.target.value)} placeholder="(81) 1234 5678"/></Field>
      <Field label="Correo" required htmlFor="b3"><Input id="b3" value={s.email} onChange={e=>set('email',e.target.value)} placeholder="tucorreo@ejemplo.mx"/></Field>
      <Field label="¿Primera visita?" htmlFor="b4"><Select id="b4" options={['Sí, es mi primera visita','No, ya soy paciente']}/></Field>
      <div style={{gridColumn:'1 / -1'}}><Field label="Motivo general de consulta" hint="No incluyas información médica sensible." htmlFor="b5">
        <Input id="b5" multiline rows={3} value={s.note} onChange={e=>set('note',e.target.value)} placeholder="Describe brevemente el motivo de tu consulta"/></Field></div>
    </div>}
    {step===7&&<><Summary s={s}/>
      <p style={{fontSize:12.5,color:'var(--text-muted)',marginTop:18,lineHeight:1.6}}>Al continuar envías una <strong style={{color:'var(--text-heading)'}}>solicitud de cita</strong>. Recepción confirmará la disponibilidad antes de que quede agendada.</p></>}
  </Modal>;
}
Object.assign(window,{BookingWizard,Calendar});