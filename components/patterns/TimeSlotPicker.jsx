import React from 'react';
export function TimeSlotPicker({slots=[],value,onChange,columns=4,emptyLabel='Sin horarios disponibles para este día.',style}){
  if(!slots.length) return <p style={{fontSize:'var(--text-body-sm)',color:'var(--text-muted)',margin:0,...style}}>{emptyLabel}</p>;
  return <div style={{display:'grid',gridTemplateColumns:`repeat(${columns},minmax(0,1fr))`,gap:9,...style}}>
    {slots.map(s=>{const t=typeof s==='string'?s:s.time,dis=typeof s==='object'&&s.disabled,sel=value===t;
      return <button key={t} type="button" disabled={dis} onClick={()=>onChange&&onChange(t)} aria-pressed={sel}
        style={{fontFamily:'var(--font-sans)',fontSize:13,fontWeight:sel?600:500,padding:'11px 6px',cursor:dis?'not-allowed':'pointer',
          borderRadius:'var(--radius-sm)',opacity:dis?.35:1,
          background:sel?'var(--green-800)':'var(--surface-raised)',color:sel?'var(--ivory-100)':'var(--text-body)',
          border:'1px solid '+(sel?'var(--green-800)':'var(--line-strong)'),
          transition:'all var(--dur-fast) var(--ease-standard)'}}>{t}</button>;})}
  </div>;
}