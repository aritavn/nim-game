import { NgModule } from '@angular/core';

import { SimpleGameComponent } from './pages/simple-game/simple-game.component';
import { SimpleGameRoutingModule } from './simple-game-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SimpleGameComponent],
  imports: [SimpleGameRoutingModule, SharedModule],
  exports: [],
})
export class SimpleGameModule {}
