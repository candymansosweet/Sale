import { Component, Renderer2 } from '@angular/core';
import { UiService, UiState } from 'projects/nop-lib/src/public-api';
import { map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrl: './layout-admin.component.scss'
})
export class LayoutAdminComponent {
  constructor(
    private uiService: UiService,
    private renderer: Renderer2,
    // private ui: Observable<UiState>
  ) {

  }
  ngOnInit() {
    const body = document.body;
    this.renderer.addClass(body, 'sidebar-mini');
    this.renderer.addClass(body, 'layout-fixed');
    this.uiService.getState()
      .pipe(map(state => state.sidebarExpand))
      .subscribe((sidebarExpand) => {
        if (sidebarExpand) {
          this.renderer.addClass(
            document.querySelector('body'),
            'sidebar-open'
          );
          this.renderer.removeClass(
            document.querySelector('body'),
            'sidebar-collapse'
          );
        }
        else {
          this.renderer.addClass(
            document.querySelector('body'),
            'sidebar-collapse'
          );
          this.renderer.removeClass(
            document.querySelector('body'),
            'sidebar-open'
          );
        }
      });
  }
  // get containerClass() {
  //   return {
      // 'layout-overlay': this.uiService.config.menuMode === 'overlay',
      // 'layout-static': this.uiService.config.menuMode === 'static',
      // 'layout-slim': this.uiService.config.menuMode === 'slim',
      // 'layout-horizontal': this.uiService.config.menuMode === 'horizontal',
      // 'layout-compact': this.uiService.config.menuMode === 'compact',
      // 'layout-reveal': this.uiService.config.menuMode === 'reveal',
      // 'layout-drawer': this.uiService.config.menuMode === 'drawer',
      // 'layout-sidebar-dim': this.uiService.config.colorScheme === 'dim',
      // 'layout-sidebar-dark': this.uiService.config.colorScheme === 'dark',
      // 'layout-overlay-active': this.uiService.state.overlayMenuActive || this.uiService.state.staticMenuMobileActive,
      // 'layout-mobile-active': this.uiService.state.staticMenuMobileActive,
      // 'layout-static-inactive': this.uiService.state.staticMenuDesktopInactive && this.uiService.config.menuMode === 'static',
      // 'p-ripple-disabled': !this.uiService.config.ripple,
      // 'p-input-filled': this.uiService.config.inputStyle === 'filled',
    //   'sidebar-collapse': this.uiService.state.sidebarExpand,
    //   'sidebar-open': !this.uiService.state.sidebarExpand
    // }
  // }
}
