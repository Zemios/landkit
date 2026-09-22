var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
let ButtonComponent = class ButtonComponent {
    constructor() {
        this.variant = 'base';
        this.shape = 'default';
        this.hasShadow = true;
        this.disabled = false;
    }
    get computedClasses() {
        const base = ['btn'];
        if (this.variant !== 'base')
            base.push(`btn--${this.variant}`);
        if (this.shape !== 'default')
            base.push(`btn--${this.shape}`);
        if (this.disabled)
            base.push('btn--disabled');
        return base;
    }
    get computedStyles() {
        return {
            boxShadow: this.hasShadow ? false : 'none'
        };
    }
};
__decorate([
    Input()
], ButtonComponent.prototype, "href", void 0);
__decorate([
    Input()
], ButtonComponent.prototype, "routerLink", void 0);
__decorate([
    Input()
], ButtonComponent.prototype, "icon", void 0);
__decorate([
    Input()
], ButtonComponent.prototype, "variant", void 0);
__decorate([
    Input()
], ButtonComponent.prototype, "shape", void 0);
__decorate([
    Input()
], ButtonComponent.prototype, "hasShadow", void 0);
__decorate([
    Input()
], ButtonComponent.prototype, "disabled", void 0);
ButtonComponent = __decorate([
    Component({
        standalone: true,
        selector: 'z-button',
        imports: [CommonModule, RouterModule],
        styleUrl: './button.css',
        template: `
    <ng-template #anchor>
      @if (icon) {
        <i class="bi bi-{{ icon }}"></i>
      }
      <ng-content></ng-content>
    </ng-template>

    @if (href) {
      <a [href]="href" target="_blank" rel="noopener noreferrer" [ngClass]="computedClasses" [ngStyle]="computedStyles">
        <ng-container *ngTemplateOutlet="anchor"></ng-container>
      </a>
    } @else if (routerLink) {
      <a [routerLink]="routerLink" [ngClass]="computedClasses" [ngStyle]="computedStyles">
        <ng-container *ngTemplateOutlet="anchor"></ng-container>
      </a>
    } @else {
      <button type="button" [disabled]="disabled" [ngClass]="computedClasses" [ngStyle]="computedStyles">
        <ng-container *ngTemplateOutlet="anchor"></ng-container>
      </button>
    }
  `
    })
], ButtonComponent);
export { ButtonComponent };
