import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './layout/home/home.component';
import { AboutComponent } from './layout/about/about.component';
import { PortfolioComponent } from './layout/portfolio/portfolio.component';
import { ServicesComponent } from './layout/services/services.component';
import { ContactComponent } from './layout/contact/contact.component';

@NgModule({
  imports: [CommonModule, ClarityModule],
  exports: [LayoutComponent],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ServicesComponent,
    ContactComponent
  ]
})
export class UiModule {}
