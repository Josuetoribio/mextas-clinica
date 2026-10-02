import * as React from 'react';
/**
 * Mosaico cuadrado de especialidad: icono lineal dorado + nombre en dos líneas. Se usa en rejilla de 8.
 * @startingPoint section="Patterns" subtitle="Rejilla de especialidades" viewport="700x220"
 */
export interface SpecialtyCardProps { name: string; icon?: React.ReactNode; description?: string; onClick?: () => void; style?: React.CSSProperties }
export declare function SpecialtyCard(props: SpecialtyCardProps): JSX.Element;