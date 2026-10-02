import React from 'react';
export function Checkbox({checked=false,onChange,label,disabled=false,style}){
  return <label style={{display:'inline-flex',alignItems:'flex-start',gap:11,cursor:disabled?'not-allowed':'pointer',opacity:disabled?.5:1,...style}}>
    <input type="checkbox" checked={checked} disabled={disabled} onChange={e=>onChange&&onChange(e.target.checked)}
      style={{appearance:'none',width:18,height:18,flex:'0 0 18px',marginTop:2,borderRadius:'var(--radius-xs)',cursor:'inherit',
        border:'1px solid '+(checked?'var(--green-800)':'var(--line-strong)'),background:checked?'var(--green-800)':'var(--surface-raised)',
        backgroundImage:checked?"url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23F9F6F0' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><polyline points='20 6 9 17 4 12'/></svg>\")":'none',
        backgroundSize:'13px',backgroundPosition:'center',backgroundRepeat:'no-repeat',
        transition:'all var(--dur-fast) var(--ease-standard)'}}/>
    {label&&<span style={{fontSize:'var(--text-body-sm)',lineHeight:1.5,color:'var(--text-body)'}}>{label}</span>}
  </label>;
}