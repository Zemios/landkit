var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output, } from '@angular/core';
import { CommonModule } from '@angular/common';
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
let ModalComponent = class ModalComponent {
    constructor() {
        this.open = false;
        this.size = 'md';
        /** Allow backdrop click to close? */
        this.closeOnBackdrop = true;
        /** Close on Escape key? */
        this.closeOnEscape = true;
        /** Whether the dialog has a footer slot. */
        this.hasFooter = false;
        this.openChange = new EventEmitter();
        this.closed = new EventEmitter();
    }
    onBackdropClick(event) {
        if (!this.closeOnBackdrop)
            return;
        if (event.target === event.currentTarget)
            this.close();
    }
    onEscape() {
        if (this.open && this.closeOnEscape)
            this.close();
    }
    close() {
        this.open = false;
        this.openChange.emit(false);
        this.closed.emit();
    }
};
__decorate([
    Input()
], ModalComponent.prototype, "open", void 0);
__decorate([
    Input()
], ModalComponent.prototype, "title", void 0);
__decorate([
    Input()
], ModalComponent.prototype, "size", void 0);
__decorate([
    Input()
], ModalComponent.prototype, "closeOnBackdrop", void 0);
__decorate([
    Input()
], ModalComponent.prototype, "closeOnEscape", void 0);
__decorate([
    Input()
], ModalComponent.prototype, "hasFooter", void 0);
__decorate([
    Output()
], ModalComponent.prototype, "openChange", void 0);
__decorate([
    Output()
], ModalComponent.prototype, "closed", void 0);
__decorate([
    HostListener('document:keydown.escape')
], ModalComponent.prototype, "onEscape", null);
ModalComponent = __decorate([
    Component({
        selector: 'z-modal',
        standalone: true,
        changeDetection: ChangeDetectionStrategy.OnPush,
        imports: [CommonModule],
        styles: [
            `
      :host {
        display: contents;
      }

      .z-modal-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(15, 23, 42, 0.7);
        backdrop-filter: blur(4px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: var(--zemios-z-modal);
        animation: zemios-fade-in var(--zemios-duration-base) var(--zemios-easing-default);
      }

      .z-modal-card {
        position: relative;
        background: var(--zemios-surface-base);
        color: var(--zemios-text-primary);
        border: 1px solid var(--zemios-border-default);
        border-radius: var(--zemios-radius-card);
        box-shadow: var(--zemios-shadow-2xl);
        margin: var(--zemios-space-3);
        max-height: calc(100vh - var(--zemios-space-12));
        overflow: auto;
        width: 100%;
        animation: zemios-pop-in var(--zemios-duration-base) var(--zemios-easing-bounce);
      }

      .z-modal-card--sm {
        max-width: 24rem;
      }
      .z-modal-card--md {
        max-width: 32rem;
      }
      .z-modal-card--lg {
        max-width: 48rem;
      }
      .z-modal-card--xl {
        max-width: 64rem;
      }

      .z-modal__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--zemios-space-4);
        padding: var(--zemios-space-4) var(--zemios-space-6);
        border-bottom: 1px solid var(--zemios-border-subtle);
      }

      .z-modal__title {
        margin: 0;
        font-family: var(--zemios-font-display);
        font-size: var(--zemios-text-lg);
        font-weight: 700;
        color: var(--zemios-text-primary);
      }

      .z-modal__close {
        background: transparent;
        border: 0;
        cursor: pointer;
        font-size: var(--zemios-text-xl);
        color: var(--zemios-text-secondary);
        padding: var(--zemios-space-2);
        border-radius: var(--zemios-radius-full);
        transition: background var(--zemios-duration-fast) var(--zemios-easing-default);
      }
      .z-modal__close:hover {
        background: var(--zemios-surface-overlay);
        color: var(--zemios-error);
      }

      .z-modal__body {
        padding: var(--zemios-space-6);
      }

      .z-modal__footer {
        padding: var(--zemios-space-4) var(--zemios-space-6);
        border-top: 1px solid var(--zemios-border-subtle);
        display: flex;
        gap: var(--zemios-space-3);
        justify-content: flex-end;
      }

      @keyframes zemios-fade-in {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @keyframes zemios-pop-in {
        from {
          opacity: 0;
          transform: translateY(8px) scale(0.97);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
    `,
        ],
        template: `
    @if (open) {
      <div
        class="z-modal-backdrop"
        (click)="onBackdropClick($event)"
        role="dialog"
        aria-modal="true"
      >
        <div
          class="z-modal-card"
          [class]="'z-modal-card z-modal-card--' + size"
        >
          @if (title) {
            <div class="z-modal__header">
              <h2 class="z-modal__title">{{ title }}</h2>
              <button class="z-modal__close" (click)="close()" aria-label="Cerrar">
                <i class="bi bi-x-lg"></i>
              </button>
            </div>
          }

          <div class="z-modal__body">
            <ng-content></ng-content>
          </div>

          @if (hasFooter) {
            <div class="z-modal__footer">
              <ng-content select="[z-footer]"></ng-content>
            </div>
          }
        </div>
      </div>
    }
  `,
    })
], ModalComponent);
export { ModalComponent };
