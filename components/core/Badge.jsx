import React from 'react';
export function Badge({tone='neutral',size='md',icon=null,children,style}){
  const t={neutral:['var(--ivory-200)','var(--text-body)'],green:['var(--green-100)','var(--green-800)'],gold:['var(--gold-100)','var(--gold-700)'],inverse:['rgba(255,255,255,.1)','var(--ivory-100)'],danger:['var(--status-danger-soft)','var(--status-danger)'],outline:['transparent','var(--text-muted)']}[tone];
  return <span style={{display:'inline-flex',alignItems:'center',gap:6,background:t[0],color:t[1],
    border:tone==='outline'?'1px solid var(--line-strong)':'1px solid transparent',
    fontSize:size==='sm'?11:12,fontWeight:600,letterSpacing:'.04em',padding:size==='sm'?'3px 8px':'5px 11px',
    borderRadius:'var(--radius-pill)',lineHeight:1.4,...style}}>{icon}{children}</span>;
}