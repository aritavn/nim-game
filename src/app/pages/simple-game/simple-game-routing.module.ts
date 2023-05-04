import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SimpleGameComponent } from './pages/simple-game/simple-game.component';

const routes: Routes = [
  {
    path: '',
    component: SimpleGameComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimpleGameRoutingModule {}
