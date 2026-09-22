var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
/**
 * PhoneMockupComponent
 *
 * A static, hand-drawn iPhone-shaped frame with a notch, status bar
 * and rounded screen. The contents of the screen are projected via
 * `<ng-content>` so each consumer can render its own header, list,
 * card, chat bubbles, etc. inside.
 *
 * Slots:
 * - default: main screen content (cards, lists, chat, whatever).
 * - [zPhoneStatus]:  small block rendered in the top status bar
 *   (overrides the default 09:41 + signal/battery row).
 * - [zPhoneHeader]: optional header row (e.g. a brand label + bell).
 * - [zPhoneTabbar]: optional tabbar pinned at the bottom of the
 *   screen.
 *
 * The component is self-contained: it ships its own scoped styles
 * sourced from `var(--zemios-*)`, so it works in any app regardless
 * of the consumer's CSS framework (no Tailwind utility required).
 *
 * Sizing: the frame is 180x360px on mobile and 210x420px on desktop.
 * Override via the `tilt` input to lean the phone left or right
 * inside a hero composition.
 */
let PhoneMockupComponent = class PhoneMockupComponent {
    constructor() {
        this.width = 210;
        this.height = 210;
        this.tilt = 'none';
    }
};
__decorate([
    Input()
], PhoneMockupComponent.prototype, "width", void 0);
__decorate([
    Input()
], PhoneMockupComponent.prototype, "height", void 0);
__decorate([
    Input()
], PhoneMockupComponent.prototype, "tilt", void 0);
PhoneMockupComponent = __decorate([
    Component({
        selector: 'z-phone-mockup',
        standalone: true,
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    <div
      class="z-phone"
      [class.z-phone--tilt-left]="tilt === 'left'"
      [class.z-phone--tilt-right]="tilt === 'right'"
      [style.width.px]="width"
      [style.height.px]="height * 2"
    >
      <div class="z-phone__notch"></div>
      <div class="z-phone__screen">
        <div class="z-phone__status">
          <ng-content select="[zPhoneStatus]">09:41</ng-content>
          <div class="z-phone__status-icons" aria-hidden>
            <svg viewBox="0 0 16 12" width="14" height="10" fill="currentColor">
              <rect x="0" y="8" width="2" height="4" rx="0.5" />
              <rect x="4" y="6" width="2" height="6" rx="0.5" />
              <rect x="8" y="3" width="2" height="9" rx="0.5" />
              <rect x="12" y="0" width="2" height="12" rx="0.5" />
            </svg>
            <svg
              viewBox="0 0 16 12"
              width="14"
              height="10"
              fill="none"
              stroke="currentColor"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M1 5 Q8 -2 15 5" />
              <path d="M3 7 Q8 2 13 7" />
              <path d="M5 9 Q8 6 11 9" />
              <circle cx="8" cy="10.5" r="0.6" fill="currentColor" stroke="none" />
            </svg>
            <svg viewBox="0 0 24 12" width="20" height="10" fill="none" stroke="currentColor">
              <rect x="0.5" y="0.5" width="20" height="11" rx="2.5" />
              <rect x="2" y="2" width="17" height="8" rx="1.5" fill="currentColor" stroke="none" />
              <rect x="21" y="3.5" width="1.5" height="5" rx="0.5" fill="currentColor" stroke="none" />
            </svg>
          </div>
        </div>

        <div class="z-phone__header">
          <ng-content select="[zPhoneHeader]"></ng-content>
        </div>

        <div class="z-phone__body">
          <ng-content></ng-content>
        </div>

        <div class="z-phone__tabbar">
          <ng-content select="[zPhoneTabbar]"></ng-content>
        </div>
      </div>
    </div>
  `,
        styles: [
            `
      :host {
        display: inline-block;
        line-height: 0;
      }

      .z-phone {
        position: relative;
        background: var(--zemios-slate-900);
        border-radius: var(--zemios-radius-3xl);
        padding: 6px;
        box-shadow:
          0 40px 80px -20px var(--zemios-shadow-xl),
          0 12px 32px -8px var(--zemios-shadow-md);
        transition: transform var(--zemios-duration-moderate) var(--zemios-easing-default);
      }
      .z-phone--tilt-left {
        transform: rotate(-12deg);
      }
      .z-phone--tilt-right {
        transform: rotate(12deg);
      }
      .z-phone--tilt-left:hover,
      .z-phone--tilt-right:hover {
        transform: rotate(0deg) scale(1.02);
      }

      .z-phone__notch {
        position: absolute;
        top: 14px;
        left: 50%;
        transform: translateX(-50%);
        width: 70px;
        height: 18px;
        background: var(--zemios-slate-900);
        border-radius: var(--zemios-radius-full);
        z-index: 5;
      }

      .z-phone__screen {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: var(--zemios-radius-2xl);
        overflow: hidden;
        background: linear-gradient(
          180deg,
          var(--zemios-surface-base) 0%,
          var(--zemios-slate-100) 100%
        );
        display: flex;
        flex-direction: column;
        font-family: var(--zemios-font-body);
      }

      .z-phone__status {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--zemios-space-2) var(--zemios-space-4) 0;
        font-size: 0.6rem;
        font-weight: 600;
        color: var(--zemios-slate-900);
      }
      .z-phone__status-icons {
        display: flex;
        align-items: center;
        gap: var(--zemios-space-1);
        color: var(--zemios-slate-900);
      }
      .z-phone__status-icons svg {
        display: block;
      }

      .z-phone__header {
        padding: var(--zemios-space-2) var(--zemios-space-3\.5) var(--zemios-space-2\.5);
        min-height: 0;
      }
      .z-phone__header:empty {
        display: none;
      }

      .z-phone__body {
        flex: 1 1 auto;
        min-height: 0;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      .z-phone__tabbar {
        margin-top: auto;
        flex-shrink: 0;
        min-height: 0;
      }
      .z-phone__tabbar:empty {
        display: none;
      }
    `,
        ],
    })
], PhoneMockupComponent);
export { PhoneMockupComponent };
