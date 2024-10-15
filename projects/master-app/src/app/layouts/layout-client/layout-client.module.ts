import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutClientRoutingModule } from './layout-client-routing.module';
import { LayoutClientComponent } from './layout-client.component';
import { HeaderModule } from './header/header.module';
import { HeaderMenuModule } from './header-menu/header-menu.module';
import { FooterModule } from './footer/footer.module';


@NgModule({
  declarations: [
    LayoutClientComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    HeaderMenuModule,
    FooterModule,
    LayoutClientRoutingModule
  ]
})
export class LayoutClientModule { }
