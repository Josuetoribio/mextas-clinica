import React from 'react';
export function Field({label,hint,error,required=false,htmlFor,children,style}){
  return <label htmlFor={htmlFor} style={{display:'flex',flexDirection:'column',gap:7,...style}}>
    {label&&<span style={{fontSize:12,fontWeight:600,letterSpacing:'var(--tracking-label)',textTransform:'uppercase',color:'var(--text-muted)'}}>{label}{required&&<span style={{color:'var(--gold-600)',marginLeft:4}}>*</span>}</span>}
    {children}
    {error?<span style={{fontSize:12,color:'var(--status-danger)'}}>{error}</span>:hint?<span style={{fontSize:12,color:'var(--text-muted)'}}>{hint}</span>:null}
  </label>;
}