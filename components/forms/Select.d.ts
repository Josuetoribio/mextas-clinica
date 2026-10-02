import * as React from 'react';
/** Desplegable nativo con el chrome de la marca. Opciones como strings o {value,label}. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> { options?: Array<string | {value:string;label:string}>; placeholder?: string; invalid?: boolean }
export declare function Select(props: SelectProps): JSX.Element;