import React from 'react';
import { Eyebrow } from './Eyebrow.jsx';
export function SectionHeading({eyebrow,title,description,align='left',inverse=false,size='md',actions=null,style}){
  const fs={sm:'var(--text-display-sm)',md:'var(--text-display-md)',lg:'var(--text-display-lg)'}[size];
  return <div style={{display:'flex',flexDirection:'column',gap:14,textAlign:align,alignItems:align==='center'?'center':'flex-start',maxWidth:align==='center'?640:560,marginInline:align==='center'?'auto':undefined,...style}}>
    {eyebrow&&<Eyebrow tone={inverse?'inverse':'gold'}>{eyebrow}</Eyebrow>}
    <h2 style={{fontFamily:'var(--font-display)',fontWeight:400,fontSize:fs,lineHeight:'var(--leading-display)',letterSpacing:'var(--tracking-display)',color:inverse?'var(--text-on-inverse)':'var(--text-display)',margin:0}}>{title}</h2>
    {description&&<p style={{fontSize:'var(--text-body-lg)',lineHeight:'var(--leading-body)',color:inverse?'var(--text-on-inverse-muted)':'var(--text-muted)',margin:0}}>{description}</p>}
    {actions&&<div style={{display:'flex',gap:12,marginTop:8}}>{actions}</div>}
  </div>;
}