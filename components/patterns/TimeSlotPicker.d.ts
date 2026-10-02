import * as React from 'react';
/** Rejilla de horarios disponibles (paso 6 del asistente y perfil del médico). Horarios de demostración. */
export interface TimeSlotPickerProps { slots?: Array<string | {time:string;disabled?:boolean}>; value?: string; onChange?: (t:string)=>void; columns?: number; emptyLabel?: string; style?: React.CSSProperties }
export declare function TimeSlotPicker(props: TimeSlotPickerProps): JSX.Element;