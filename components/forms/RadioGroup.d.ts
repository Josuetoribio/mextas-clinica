import * as React from 'react';
/** Selección única en tarjetas — paso 1 del asistente de citas, tipo de consulta, modalidad. */
export interface RadioGroupProps { options?: Array<string | {value:string;label:string;description?:string}>; value?: string; onChange?: (v:string)=>void; name?: string; columns?: number; style?: React.CSSProperties }
export declare function RadioGroup(props: RadioGroupProps): JSX.Element;