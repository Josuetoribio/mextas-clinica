import React from 'react';
export function StatBlock({value,label,icon=null,inverse=true,align='left',style}){
  return <div style={{display:'flex',alignItems:'center',gap:14,justifyContent:align==='center'?'center':'flex-start',...style}}>
    {icon&&<span style={{color:'var(--gold-500)',display:'flex'}}>{icon}</span>}
    <div>
      <div style={{fontFamily:'var(--font-display)',fontSize:'var(--text-display-sm)',lineHeight:1,color:inverse?'var(--ivory-100)':'var(--text-display)'}}>{value}</div>
      <div style={{fontSize:12.5,marginTop:7,color:inverse?'var(--text-on-inverse-muted)':'var(--text-muted)'}}>{label}</div>
    </div>
  </div>;
}