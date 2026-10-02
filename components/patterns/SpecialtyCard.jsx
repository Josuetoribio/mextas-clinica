import React from 'react';
export function SpecialtyCard({name,icon=null,description,onClick,style}){
  const [h,setH]=React.useState(false);
  return <button type="button" onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:14,textAlign:'center',
      aspectRatio:'1 / 1',width:'100%',minWidth:0,padding:'20px 14px',cursor:'pointer',fontFamily:'var(--font-sans)',
      background:h?'var(--surface-card)':'var(--surface-sunken)',
      border:'1px solid '+(h?'var(--gold-300)':'transparent'),borderRadius:'var(--radius-md)',
      boxShadow:h?'var(--shadow-md)':'none',transform:h?'translateY(-2px)':'none',
      transition:'all var(--dur-base) var(--ease-standard)',...style}}>
    <span style={{color:'var(--gold-600)',display:'flex'}}>{icon}</span>
    <span style={{fontSize:'var(--text-body-sm)',fontWeight:600,lineHeight:1.35,color:'var(--text-heading)',overflowWrap:'anywhere',hyphens:'auto'}} lang="es">{name}</span>
    {description&&<span style={{fontSize:12,color:'var(--text-muted)',lineHeight:1.4}}>{description}</span>}
  </button>;
}