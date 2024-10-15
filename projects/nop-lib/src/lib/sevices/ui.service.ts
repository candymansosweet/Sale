import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, Subject } from 'rxjs';
export type MenuMode = 'static' | 'overlay' | 'horizontal' | 'slim' | 'compact' | 'reveal' | 'drawer';

export type ColorScheme = 'light' | 'dark' | 'dim';

export interface AppConfig {
  // inputStyle: string;
  // colorScheme: ColorScheme;
  // theme: string;
  // ripple: boolean;
  menuMode: MenuMode;
  // scale: number;
  // menuTheme: string;
}

export interface UiState {
  sidebarExpand: boolean;
 }

@Injectable({
  providedIn: 'root'
})
export class UiService {

  /// chế đọ hiển thị
  config: AppConfig = {
    // ripple: true,
    // inputStyle: 'outlined',
    menuMode: 'static',
    // colorScheme: 'dim',
    // theme: 'blue',
    // scale: 14,
    // menuTheme: 'darkgray'
  };

  // trạng thái trên ui
  stateSubject = new BehaviorSubject<UiState>({
    // staticMenuDesktopInactive: false,
    // overlayMenuActive: false,
    // rightMenuVisible: false,
    // configSidebarVisible: false,
    // staticMenuMobileActive: false,
    // menuHoverActive: false,
    // searchBarActive: false,
    sidebarExpand: false
  });

  // private configUpdate = new Subject<AppConfig>();

  // private overlayOpen = new Subject<any>();

  // configUpdate$ = this.configUpdate.asObservable();

  // overlayOpen$ = this.overlayOpen.asObservable();
  updateState(newState: Partial<UiState>): void {
    // Lấy giá trị hiện tại của state và kết hợp với giá trị mới
    const currentState = this.stateSubject.value;
    const updatedState = { ...currentState, ...newState };

    // Phát giá trị mới cho tất cả các subscriber
    this.stateSubject.next(updatedState);
  }
  getState(): Observable<UiState> {
    return this.stateSubject.asObservable();
  }
  onMenuToggle() {
    const currentState = this.stateSubject.value;
    this.updateState({sidebarExpand: !currentState.sidebarExpand})
    // this.state.sidebarExpand = !this.state.sidebarExpand;
    // if (this.isOverlay()) {
    //   this.state.overlayMenuActive = !this.state.overlayMenuActive;

    //   if (this.state.overlayMenuActive) {
    //     this.overlayOpen.next(null);
    //   }
    // }

    // if (this.isDesktop()) {
    //   this.state.staticMenuDesktopInactive = !this.state.staticMenuDesktopInactive;
    // } else {
    //   this.state.staticMenuMobileActive = !this.state.staticMenuMobileActive;

    //   if (this.state.staticMenuMobileActive) {
    //     this.overlayOpen.next(null);
    //   }
    // }
    // this.onLayoutStateUpdate();
  }

  // onOverlaySubmenuOpen() {
  //   this.overlayOpen.next(null);
  // }

  // showRightMenu() {
  //   this.state.rightMenuVisible = true;
  // }

  // showConfigSidebar() {
  //   this.state.configSidebarVisible = true;
  // }

  // toggleSearchBar() {
  //   this.state.searchBarActive = !this.state.searchBarActive;
  // }

  // isOverlay() {
  //   return this.config.menuMode === 'overlay';
  // }

  // isDesktop() {
  //   return window.innerWidth > 991;
  // }

  // isSlim() {
  //   return this.config.menuMode === 'slim';
  // }

  // isCompact() {
  //   return this.config.menuMode === 'compact';
  // }

  // isHorizontal() {
  //   return this.config.menuMode === 'horizontal';
  // }

  // isMobile() {
  //   return !this.isDesktop();
  // }

  getConfig() {
    return this.config
  }

  // onConfigUpdate() {
  //   localStorage.setItem("app_config", JSON.stringify(this.config));
  //   this.configUpdate.next(this.config);
  //   const event = new CustomEvent('app_config', { detail: this.config });
  //   dispatchEvent(event)
  // }
  // onLayoutStateUpdate() {
  //   const event = new CustomEvent('layout_state', { detail: this.state });
  //   dispatchEvent(event)
  // }
}
