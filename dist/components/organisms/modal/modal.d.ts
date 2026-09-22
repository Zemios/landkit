import { EventEmitter } from '@angular/core';
export type ModalSize = 'sm' | 'md' | 'lg' | 'xl';
/**
 * ModalComponent — token-driven dialog.
 *
 * Self-contained, dependency-free modal that uses `var(--zemios-*)`.
 * Renders a backdrop + card with a header (title + close button),
 * an `ng-content` body, and an optional footer for action buttons.
 *
 * Usage:
 *   <z-modal
 *     [open]="isOpen"
 *     title="Confirmar"
 *     (openChange)="isOpen = $event"
 *   >
 *     <p>¿Estás seguro?</p>
 *     <ng-container z-footer>
 *         <z-button variant="outline" (click)="isOpen = false">Cancelar</z-button>
 *         <z-button variant="primary" (click)="confirm()">Aceptar</z-button>
 *       </ng-container>
 *   </z-modal>
 */
export declare class ModalComponent {
    open: boolean;
    title?: string;
    size: ModalSize;
    /** Allow backdrop click to close? */
    closeOnBackdrop: boolean;
    /** Close on Escape key? */
    closeOnEscape: boolean;
    /** Whether the dialog has a footer slot. */
    hasFooter: boolean;
    openChange: EventEmitter<boolean>;
    closed: EventEmitter<void>;
    onBackdropClick(event: MouseEvent): void;
    onEscape(): void;
    close(): void;
}
//# sourceMappingURL=modal.d.ts.map