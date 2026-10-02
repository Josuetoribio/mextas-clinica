import * as React from 'react';
/** Chip de filtro alternable — directorio médico, blog, servicios. Única forma pill del sistema. */
export interface ChipProps { selected?: boolean; count?: number; onClick?: () => void; children?: React.ReactNode; style?: React.CSSProperties }
export declare function Chip(props: ChipProps): JSX.Element;