import * as React from 'react';
/** Progreso del asistente de solicitud de cita. Paso actual en dorado, pasos completados en verde. */
export interface StepIndicatorProps { steps?: string[]; current?: number; compact?: boolean; style?: React.CSSProperties }
export declare function StepIndicator(props: StepIndicatorProps): JSX.Element;