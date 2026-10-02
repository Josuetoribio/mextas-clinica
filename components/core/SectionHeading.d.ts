import * as React from 'react';
/** Encabezado de sección editorial: eyebrow dorado + titular serif + bajada. Abre toda banda de contenido. */
export interface SectionHeadingProps { eyebrow?: React.ReactNode; title: React.ReactNode; description?: React.ReactNode; align?: 'left'|'center'; inverse?: boolean; size?: 'sm'|'md'|'lg'; actions?: React.ReactNode; style?: React.CSSProperties }
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;