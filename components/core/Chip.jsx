import React from 'react';
export function Chip({selected=false,count,onClick,children,style}){
  const [h,setH]=React.useState(false);
  return <button type="button" onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    aria-pressed={selected}
    style={{display:'inline-flex',alignItems:'center',gap:7,fontFamily:'var(--font-sans)',fontSize:13,fontWeight:500,
      padding:'9px 16px',borderRadius:'var(--radius-pill)',cursor:'pointer',
      background:selected?'var(--green-800)':h?'var(--ivory-200)':'transparent',
      color:selected?'var(--ivory-100)':'var(--text-body)',
      border:'1px solid '+(selected?'var(--green-800)':'var(--line-strong)'),
      transition:'all var(--dur-fast) var(--ease-standard)',...style}}>
    {children}{count!=null&&<span style={{fontSize:11,opacity:.65}}>{count}</span>}
  </button>;
}