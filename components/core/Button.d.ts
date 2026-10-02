import * as React from 'react';
/**
 * Botón de acción de ClinicaMextas. Primario verde profundo para la acción principal
 * de cada vista ("Agendar cita"); secundario con borde para la alterna.
 * @startingPoint section="Core" subtitle="Botones — primario, secundario, ghost, dorado" viewport="700x150"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'gold' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  as?: 'button' | 'a';
  href?: string;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;