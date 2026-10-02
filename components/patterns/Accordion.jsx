import React from 'react';
export function Accordion({items=[],allowMultiple=false,defaultOpen=[],style}){
  const [open,setOpen]=React.useState(defaultOpen);
  const toggle=i=>setOpen(o=>o.includes(i)?o.filter(x=>x!==i):allowMultiple?[...o,i]:[i]);
  return <div style={{borderTop:'1px solid var(--line-hairline)',...style}}>
    {items.map((it,i)=>{const isOpen=open.includes(i);
      return <div key={i} style={{borderBottom:'1px solid var(--line-hairline)'}}>
        <button type="button" onClick={()=>toggle(i)} aria-expanded={isOpen}
          style={{display:'flex',width:'100%',alignItems:'center',justifyContent:'space-between',gap:20,
            background:'none',border:'none',cursor:'pointer',padding:'20px 4px',textAlign:'left',fontFamily:'var(--font-sans)',
            fontSize:'var(--text-body-lg)',fontWeight:500,color:isOpen?'var(--green-800)':'var(--text-body)',
            transition:'color var(--dur-fast) var(--ease-standard)'}}>
          {it.question||it.title}
          <span aria-hidden style={{flex:'0 0 auto',color:'var(--gold-600)',fontSize:18,lineHeight:1,transform:isOpen?'rotate(45deg)':'none',transition:'transform var(--dur-base) var(--ease-standard)'}}>+</span>
        </button>
        <div style={{display:'grid',gridTemplateRows:isOpen?'1fr':'0fr',transition:'grid-template-rows var(--dur-base) var(--ease-standard)'}}>
          <div style={{overflow:'hidden'}}><div style={{padding:'0 48px 22px 4px',fontSize:'var(--text-body-md)',lineHeight:'var(--leading-body)',color:'var(--text-muted)'}}>{it.answer||it.content}</div></div>
        </div>
      </div>;})}
  </div>;
}