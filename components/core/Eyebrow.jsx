import React from 'react';
export function Eyebrow({children,tone='gold',align='left',style}){
  return <div style={{fontFamily:'var(--font-sans)',fontSize:'var(--text-eyebrow-size)',fontWeight:600,letterSpacing:'var(--tracking-eyebrow)',textTransform:'uppercase',textAlign:align,color:tone==='gold'?'var(--text-eyebrow)':tone==='muted'?'var(--text-muted)':'var(--green-300)',...style}}>{children}</div>;
}