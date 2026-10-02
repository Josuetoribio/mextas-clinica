import * as React from 'react';
/** Casilla — consentimientos y filtros multiselección. El aviso de privacidad siempre usa este control. */
export interface CheckboxProps { checked?: boolean; onChange?: (v:boolean)=>void; label?: React.ReactNode; disabled?: boolean; style?: React.CSSProperties }
export declare function Checkbox(props: CheckboxProps): JSX.Element;