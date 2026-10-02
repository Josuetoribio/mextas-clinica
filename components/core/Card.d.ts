import * as React from 'react';
/**
 * Superficie base: blanco, radio 10px, hairline, sin sombra en reposo.
 * Con `interactive` gana elevación y borde dorado al hover.
 * @startingPoint section="Core" subtitle="Card — superficie base y variantes de tono" viewport="700x200"
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> { interactive?: boolean; padding?: number|string; tone?: 'card'|'sunken'|'accent'|'inverse'; as?: any; children?: React.ReactNode }
export declare function Card(props: CardProps): JSX.Element;