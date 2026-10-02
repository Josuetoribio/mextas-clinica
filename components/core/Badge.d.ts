import * as React from 'react';
/** Etiqueta compacta para especialidad, sede, modalidad o el aviso "Ejemplo de convenio". */
export interface BadgeProps { tone?: 'neutral'|'green'|'gold'|'inverse'|'danger'|'outline'; size?: 'sm'|'md'; icon?: React.ReactNode; children?: React.ReactNode; style?: React.CSSProperties }
export declare function Badge(props: BadgeProps): JSX.Element;