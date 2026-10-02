import * as React from 'react';
/** Etiqueta en mayúsculas con tracking amplio que abre cada sección. Siempre dorada salvo sobre fondo verde. */
export interface EyebrowProps { children?: React.ReactNode; tone?: 'gold' | 'muted' | 'inverse'; align?: 'left'|'center'; style?: React.CSSProperties }
export declare function Eyebrow(props: EyebrowProps): JSX.Element;