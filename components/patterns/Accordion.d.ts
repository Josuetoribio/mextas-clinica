import * as React from 'react';
/**
 * Acordeón de hairlines para preguntas frecuentes e información al paciente. Sin cajas ni sombras.
 * @startingPoint section="Patterns" subtitle="Acordeón de preguntas frecuentes" viewport="700x300"
 */
export interface AccordionItem { question?: React.ReactNode; title?: React.ReactNode; answer?: React.ReactNode; content?: React.ReactNode }
export interface AccordionProps { items?: AccordionItem[]; allowMultiple?: boolean; defaultOpen?: number[]; style?: React.CSSProperties }
export declare function Accordion(props: AccordionProps): JSX.Element;