import * as React from 'react';
/**
 * Diálogo centrado o drawer lateral. Aloja el asistente de citas, el perfil del médico y el lightbox.
 * Cierra con Escape y con clic en el velo.
 * @startingPoint section="Patterns" subtitle="Modal y drawer" viewport="700x400"
 */
export interface ModalProps { open?: boolean; onClose?: () => void; title?: React.ReactNode; eyebrow?: React.ReactNode; size?: 'sm'|'md'|'lg'; footer?: React.ReactNode; variant?: 'modal'|'drawer'|'sheet'; children?: React.ReactNode }
export declare function Modal(props: ModalProps): JSX.Element | null;