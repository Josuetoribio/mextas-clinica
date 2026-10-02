import React from 'react';
const sizes={sm:{padding:'8px 16px',fontSize:13},md:{padding:'12px 22px',fontSize:14},lg:{padding:'15px 28px',fontSize:15}};
export function Button({variant='primary',size='md',icon=null,iconRight=null,disabled=false,fullWidth=false,as='button',href,onClick,children,style,...rest}){
  const [h,setH]=React.useState(false),[p,setP]=React.useState(false);
  const v={
    primary:{background:h?'var(--action-primary-hover)':'var(--action-primary)',color:'var(--action-primary-text)',border:'1px solid transparent'},
    secondary:{background:h?'var(--ivory-200)':'transparent',color:'var(--green-800)',border:'1px solid var(--action-secondary-border)'},
    ghost:{background:h?'var(--ivory-200)':'transparent',color:'var(--green-800)',border:'1px solid transparent'},
    gold:{background:'transparent',color:h?'var(--gold-700)':'var(--gold-600)',border:'1px solid '+(h?'var(--gold-600)':'var(--gold-300)')},
    inverse:{background:h?'var(--ivory-200)':'var(--ivory-100)',color:'var(--green-800)',border:'1px solid transparent'}
  }[variant];
  const Tag=as==='a'?'a':'button';
  return <Tag href={href} onClick={disabled?undefined:onClick} disabled={Tag==='button'?disabled:undefined}
    onMouseEnter={()=>setH(true)} onMouseLeave={()=>{setH(false);setP(false)}} onMouseDown={()=>setP(true)} onMouseUp={()=>setP(false)}
    style={{display:fullWidth?'flex':'inline-flex',width:fullWidth?'100%':undefined,alignItems:'center',justifyContent:'center',gap:9,
      fontFamily:'var(--font-sans)',fontWeight:600,lineHeight:1,letterSpacing:'.01em',textDecoration:'none',cursor:disabled?'not-allowed':'pointer',
      borderRadius:'var(--radius-sm)',opacity:disabled?.45:1,transform:p?'scale(.985)':'none',
      transition:'background var(--dur-fast) var(--ease-standard),color var(--dur-fast) var(--ease-standard),border-color var(--dur-fast) var(--ease-standard),transform var(--dur-fast) var(--ease-standard)',
      ...sizes[size],...v,...style}} {...rest}>{icon}{children}{iconRight}</Tag>;
}