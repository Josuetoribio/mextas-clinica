import React from 'react';
export function DoctorCard({name,specialty,subspecialty,license,photo,location,layout='portrait',actions=null,onClick,style}){
  const [h,setH]=React.useState(false);
  const row=layout==='row';
  return <article onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{display:'flex',flexDirection:row?'row':'column',gap:row?18:0,overflow:'hidden',
      background:'var(--surface-card)',border:'1px solid '+(h?'var(--gold-300)':'var(--line-hairline)'),
      borderRadius:'var(--radius-md)',boxShadow:h?'var(--shadow-hover)':'none',transform:h&&onClick?'translateY(-2px)':'none',
      cursor:onClick?'pointer':'default',transition:'all var(--dur-base) var(--ease-standard)',...style}}>
    <div style={{flex:row?'0 0 120px':'none',height:row?'auto':210,background:'var(--ivory-200)',overflow:'hidden'}}>
      {photo?<img src={photo} alt={name} loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top center',display:'block'}}/>:null}
    </div>
    <div style={{padding:row?'18px 18px 18px 0':'18px 16px 20px',textAlign:row?'left':'center',display:'flex',flexDirection:'column',gap:4,flex:1}}>
      <h3 style={{fontFamily:'var(--font-sans)',fontSize:'var(--text-title-sm)',fontWeight:600,color:'var(--text-heading)',letterSpacing:0,lineHeight:1.3,margin:0}}>{name}</h3>
      <p style={{fontSize:'var(--text-body-sm)',color:'var(--text-muted)',margin:0}}>{specialty}{subspecialty?' · '+subspecialty:''}</p>
      {license&&<p style={{fontSize:12,color:'var(--ink-300)',margin:0}}>Céd. Prof. {license}</p>}
      {location&&<p style={{fontSize:12,color:'var(--text-accent)',margin:'2px 0 0'}}>{location}</p>}
      {actions&&<div style={{display:'flex',flexWrap:'wrap',gap:8,marginTop:12,justifyContent:row?'flex-start':'center'}}>{actions}</div>}
    </div>
  </article>;
}