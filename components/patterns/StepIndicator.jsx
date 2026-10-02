import React from 'react';
export function StepIndicator({steps=[],current=0,compact=false,style}){
  return <ol style={{display:'flex',alignItems:'center',gap:compact?8:12,listStyle:'none',margin:0,padding:0,...style}}>
    {steps.map((s,i)=>{const done=i<current,now=i===current;
      return <li key={i} style={{display:'flex',alignItems:'center',gap:compact?8:12,flex:i===steps.length-1?'0 0 auto':1}}>
        <span style={{display:'flex',alignItems:'center',gap:9}}>
          <span style={{width:24,height:24,flex:'0 0 24px',borderRadius:'50%',display:'grid',placeItems:'center',fontSize:11.5,fontWeight:600,
            background:done?'var(--green-800)':now?'var(--gold-600)':'var(--ivory-300)',
            color:done||now?'var(--ivory-100)':'var(--text-muted)',
            transition:'all var(--dur-base) var(--ease-standard)'}}>{done?'✓':i+1}</span>
          {!compact&&<span style={{fontSize:12.5,fontWeight:now?600:400,color:now?'var(--text-heading)':'var(--text-muted)',whiteSpace:'nowrap'}}>{s}</span>}
        </span>
        {i<steps.length-1&&<span style={{flex:1,height:1,background:done?'var(--green-300)':'var(--line-hairline)',minWidth:16}}/>}
      </li>;})}
  </ol>;
}