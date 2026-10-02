import React from 'react';
const base={width:'100%',fontFamily:'var(--font-sans)',fontSize:'var(--text-body-md)',color:'var(--text-body)',
  background:'var(--surface-raised)',border:'1px solid var(--line-strong)',borderRadius:'var(--radius-sm)',
  padding:'13px 15px',outline:'none',transition:'border-color var(--dur-fast) var(--ease-standard),box-shadow var(--dur-fast) var(--ease-standard)'};
export function Input({invalid=false,icon=null,multiline=false,rows=4,style,...rest}){
  const [f,setF]=React.useState(false);
  const s={...base,borderColor:invalid?'var(--status-danger)':f?'var(--gold-600)':'var(--line-strong)',boxShadow:f?'var(--ring-focus)':'none',paddingLeft:icon?42:15,...style};
  const el=multiline?<textarea rows={rows} onFocus={()=>setF(true)} onBlur={()=>setF(false)} style={{...s,resize:'vertical',lineHeight:1.6}} {...rest}/>
    :<input onFocus={()=>setF(true)} onBlur={()=>setF(false)} style={s} {...rest}/>;
  if(!icon) return el;
  return <span style={{position:'relative',display:'block'}}><span style={{position:'absolute',left:14,top:'50%',transform:'translateY(-50%)',color:'var(--text-muted)',display:'flex'}}>{icon}</span>{el}</span>;
}