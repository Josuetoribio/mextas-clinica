import * as React from 'react';
/** Indicador de confianza (10+ años, 25K+ pacientes). Cifra en serif — es lo que le da carácter institucional. */
export interface StatBlockProps { value: React.ReactNode; label: React.ReactNode; icon?: React.ReactNode; inverse?: boolean; align?: 'left'|'center'; style?: React.CSSProperties }
export declare function StatBlock(props: StatBlockProps): JSX.Element;