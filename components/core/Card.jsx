import React from 'react';
export function Card({interactive=false,padding=24,tone='card',as='div',onClick,children,style,...rest}){
  const [h,setH]=React.useState(false);
  const bg={card:'var(--surface-card)',sunken:'var(--surface-sunken)',accent:'var(--surface-accent-soft)',inverse:'var(--surface-inverse)'}[tone];
  const Tag=as;
  return <Tag onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{background:bg,border:'1px solid '+(interactive&&h?'var(--gold-300)':tone==='inverse'?'var(--line-inverse)':'var(--line-hairline)'),
      borderRadius:'var(--radius-md)',padding,boxShadow:interactive&&h?'var(--shadow-hover)':'var(--shadow-none)',
      transform:interactive&&h?'translateY(-2px)':'none',cursor:interactive?'pointer':'default',
      transition:'box-shadow var(--dur-base) var(--ease-standard),transform var(--dur-base) var(--ease-standard),border-color var(--dur-base) var(--ease-standard)',...style}} {...rest}>{children}</Tag>;
}