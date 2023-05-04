import { NgModule } from '@angular/core';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [LandingPageRoutingModule, SharedModule],
  exports: [],
})
export class LandingPageModule {}
