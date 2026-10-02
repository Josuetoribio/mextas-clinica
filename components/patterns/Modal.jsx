import React from 'react';
export function Modal({open,onClose,title,eyebrow,size='md',footer=null,variant='modal',children}){
  React.useEffect(()=>{if(!open)return;const k=e=>e.key==='Escape'&&onClose&&onClose();window.addEventListener('keydown',k);return()=>window.removeEventListener('keydown',k)},[open,onClose]);
  if(!open) return null;
  const drawer=variant==='drawer',sheet=variant==='sheet';
  const w={sm:440,md:620,lg:860}[size];
  return <div role="dialog" aria-modal="true" data-cm-modal={variant} aria-label={typeof title==='string'?title:undefined}
    onClick={onClose}
    style={{position:'fixed',inset:0,zIndex:80,background:'rgba(18,39,31,.45)',backdropFilter:'blur(2px)',
      display:'flex',alignItems:drawer?'stretch':sheet?'flex-end':'center',justifyContent:drawer?'flex-end':'center',padding:drawer||sheet?0:20,
      animation:'cmFade var(--dur-base) var(--ease-standard)'}}>
    <style>{'@keyframes cmFade{from{opacity:0}to{opacity:1}}@keyframes cmRise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}@keyframes cmSlide{from{transform:translateX(24px);opacity:0}to{transform:none;opacity:1}}@keyframes cmSheet{from{transform:translateY(40px);opacity:0}to{transform:none;opacity:1}}'}</style>
    <div data-cm-panel="" onClick={e=>e.stopPropagation()}
      style={{background:'var(--surface-raised)',borderRadius:drawer?'var(--radius-lg) 0 0 var(--radius-lg)':sheet?'var(--radius-xl) var(--radius-xl) 0 0':'var(--radius-lg)',
        width:drawer?Math.min(w,560):'100%',maxWidth:drawer||sheet?undefined:w,maxHeight:drawer?'100%':sheet?'86vh':'88vh',display:'flex',flexDirection:'column',
        boxShadow:'var(--shadow-lg)',overflow:'hidden',animation:(drawer?'cmSlide':sheet?'cmSheet':'cmRise')+' var(--dur-base) var(--ease-entrance)'}}>
      {sheet&&<span aria-hidden style={{width:40,height:4,borderRadius:2,background:'var(--ivory-400)',margin:'10px auto 0',flex:'0 0 auto'}}/>}
      <header style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:20,padding:'24px 28px 18px',borderBottom:'1px solid var(--line-hairline)'}}>
        <div>
          {eyebrow&&<div style={{fontSize:'var(--text-eyebrow-size)',fontWeight:600,letterSpacing:'var(--tracking-eyebrow)',textTransform:'uppercase',color:'var(--text-eyebrow)',marginBottom:7}}>{eyebrow}</div>}
          {title&&<h2 style={{fontFamily:'var(--font-display)',fontSize:'var(--text-title-lg)',lineHeight:1.2,margin:0,color:'var(--text-display)'}}>{title}</h2>}
        </div>
        <button type="button" onClick={onClose} aria-label="Cerrar"
          style={{background:'none',border:'1px solid var(--line-hairline)',borderRadius:'50%',width:32,height:32,flex:'0 0 32px',cursor:'pointer',color:'var(--text-muted)',fontSize:15,lineHeight:1}}>×</button>
      </header>
      <div style={{padding:'24px 28px',overflowY:'auto',flex:1}}>{children}</div>
      {footer&&<footer style={{padding:'18px 28px',borderTop:'1px solid var(--line-hairline)',background:'var(--surface-page)',display:'flex',justifyContent:'flex-end',gap:10}}>{footer}</footer>}
    </div>
  </div>;
}