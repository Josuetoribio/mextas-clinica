import React from 'react';
export function RadioGroup({options=[],value,onChange,name,columns=1,style}){
  return <div role="radiogroup" style={{display:'grid',gridTemplateColumns:`repeat(${columns},1fr)`,gap:10,...style}}>
    {options.map(o=>{const v=typeof o==='string'?o:o.value,l=typeof o==='string'?o:o.label,d=typeof o==='object'?o.description:null,sel=value===v;
      return <label key={v} style={{display:'flex',gap:12,alignItems:'flex-start',padding:'14px 16px',cursor:'pointer',
        borderRadius:'var(--radius-sm)',background:sel?'var(--ivory-200)':'var(--surface-raised)',
        border:'1px solid '+(sel?'var(--green-600)':'var(--line-hairline)'),transition:'all var(--dur-fast) var(--ease-standard)'}}>
        <input type="radio" name={name} checked={sel} onChange={()=>onChange&&onChange(v)}
          style={{appearance:'none',width:17,height:17,flex:'0 0 17px',marginTop:2,borderRadius:'50%',cursor:'pointer',
            border:'1px solid '+(sel?'var(--green-800)':'var(--line-strong)'),
            boxShadow:sel?'inset 0 0 0 4px var(--surface-raised), inset 0 0 0 10px var(--green-800)':'none'}}/>
        <span><span style={{display:'block',fontSize:'var(--text-body-md)',fontWeight:sel?600:500,color:'var(--text-body)'}}>{l}</span>
        {d&&<span style={{display:'block',fontSize:12.5,color:'var(--text-muted)',marginTop:3}}>{d}</span>}</span>
      </label>;})}
  </div>;
}