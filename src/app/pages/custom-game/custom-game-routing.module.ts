import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomGameComponent } from './pages/custom-game/custom-game.component';

const routes: Routes = [
  {
    path: '',
    component: CustomGameComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomGameRoutingModule {}
