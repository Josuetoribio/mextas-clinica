import * as React from 'react';
/**
 * Campo de texto (o textarea con `multiline`). Foco = borde dorado + anillo.
 * @startingPoint section="Forms" subtitle="Campos, select, checkbox y radio" viewport="700x300"
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { invalid?: boolean; icon?: React.ReactNode; multiline?: boolean; rows?: number }
export declare function Input(props: InputProps): JSX.Element;