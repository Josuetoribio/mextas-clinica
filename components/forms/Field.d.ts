import * as React from 'react';
/** Envoltura de campo: label en mayúsculas, hint y mensaje de error. Todo input va dentro de un Field. */
export interface FieldProps { label?: React.ReactNode; hint?: React.ReactNode; error?: React.ReactNode; required?: boolean; htmlFor?: string; children?: React.ReactNode; style?: React.CSSProperties }
export declare function Field(props: FieldProps): JSX.Element;