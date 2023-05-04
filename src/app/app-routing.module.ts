import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/landing-page',
  },
  {
    path: 'landing-page',
    loadChildren: () =>
      import('./pages/landing-page/landing-page.module').then(
        (m) => m.LandingPageModule
      ),
  },
  {
    path: 'simple-game/:difficulty',
    loadChildren: () =>
      import('./pages/simple-game/simple-game.module').then(
        (m) => m.SimpleGameModule
      ),
  },
  {
    path: 'custom-game',
    loadChildren: () =>
      import('./pages/custom-game/custom-game.module').then(
        (m) => m.CustomGameModule
      ),
  },
  { path: '**', redirectTo: 'landing-page' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
