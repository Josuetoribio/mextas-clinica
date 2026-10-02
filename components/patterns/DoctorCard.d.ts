import * as React from 'react';
/**
 * Ficha de médico: foto a sangre arriba, nombre, especialidad y cédula profesional.
 * `layout="row"` para resultados del directorio.
 * @startingPoint section="Patterns" subtitle="Ficha de médico — retrato y fila" viewport="700x300"
 */
export interface DoctorCardProps { name: string; specialty: string; subspecialty?: string; license?: string; photo?: string; location?: string; layout?: 'portrait'|'row'; actions?: React.ReactNode; onClick?: () => void; style?: React.CSSProperties }
export declare function DoctorCard(props: DoctorCardProps): JSX.Element;