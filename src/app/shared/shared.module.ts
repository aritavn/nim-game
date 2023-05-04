import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

import { MatchComponent } from './components/match/match.component';
import { GameOverModalComponent } from './components/game-over-modal/game-over-modal.component';
import { GameComponent } from './components/game/game.component';
import { CustomizationModalComponent } from './components/customization-modal/customization-modal.component';

@NgModule({
  declarations: [
    MatchComponent,
    GameOverModalComponent,
    GameComponent,
    CustomizationModalComponent,
  ],
  imports: [
    TranslateModule.forChild(),
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    TranslateModule,
    MatchComponent,
    GameOverModalComponent,
    GameComponent,
  ],
})
export class SharedModule {}
