import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { GameMode } from 'src/app/core/models/game-mode.type';
import { GameService } from 'src/app/core/services/game.service';

@Component({
  selector: 'app-custom-game',
  templateUrl: './custom-game.component.html',
  styleUrls: ['./custom-game.component.scss'],
})
export class CustomGameComponent {
  heaps: Array<number> = [];
  maxNumberOfMatchesToRemove: number = 0;
  gameMode: GameMode = 'custom';

  constructor(public gameService: GameService, private router: Router) {
    const { state } = (this.router.getCurrentNavigation()?.extras || {}) as any;

    if (state && state.heaps) {
      this.heaps = state.heaps;
      this.maxNumberOfMatchesToRemove = state.maxMatches;
    }
  }
}
