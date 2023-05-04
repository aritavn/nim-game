import { Component, Input, OnInit } from '@angular/core';

import { GameMode } from 'src/app/core/models/game-mode.type';
import { GameService } from 'src/app/core/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  @Input() heaps: Array<number> = [13];
  @Input() maxNumberOfMatchesToRemove: number = 3;
  @Input() gameMode: GameMode = 'easy';

  constructor(public gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.initGame(
      this.heaps,
      this.maxNumberOfMatchesToRemove,
      this.gameMode
    );
  }
}
