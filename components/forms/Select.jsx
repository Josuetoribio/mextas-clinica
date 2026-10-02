import React from 'react';
export function Select({options=[],placeholder='Selecciona una opción',invalid=false,style,...rest}){
  const [f,setF]=React.useState(false);
  return <span style={{position:'relative',display:'block'}}>
    <select onFocus={()=>setF(true)} onBlur={()=>setF(false)}
      style={{width:'100%',appearance:'none',fontFamily:'var(--font-sans)',fontSize:'var(--text-body-md)',color:'var(--text-body)',
        background:'var(--surface-raised)',border:'1px solid '+(invalid?'var(--status-danger)':f?'var(--gold-600)':'var(--line-strong)'),
        boxShadow:f?'var(--ring-focus)':'none',borderRadius:'var(--radius-sm)',padding:'13px 40px 13px 15px',outline:'none',cursor:'pointer',...style}} {...rest}>
      <option value="">{placeholder}</option>
      {options.map(o=>{const v=typeof o==='string'?o:o.value,l=typeof o==='string'?o:o.label;return <option key={v} value={v}>{l}</option>;})}
    </select>
    <span aria-hidden style={{position:'absolute',right:16,top:'50%',transform:'translateY(-50%)',pointerEvents:'none',color:'var(--text-muted)',fontSize:11}}>▾</span>
  </span>;
}