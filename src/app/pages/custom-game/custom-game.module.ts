import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { CustomGameComponent } from './pages/custom-game/custom-game.component';
import { CustomGameRoutingModule } from './custom-game-routing.module';

@NgModule({
  declarations: [CustomGameComponent],
  imports: [CustomGameRoutingModule, SharedModule],
  exports: [],
})
export class CustomGameModule {}
