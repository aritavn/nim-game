import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GameMode } from 'src/app/core/models/game-mode.type';
import { GameService } from 'src/app/core/services/game.service';

@Component({
  selector: 'app-simple-game',
  templateUrl: './simple-game.component.html',
  styleUrls: ['./simple-game.component.scss'],
})
export class SimpleGameComponent implements OnInit {
  heaps: [number] = [13];
  maxNumberOfMatchesToRemove: number = 3;
  gameMode: GameMode = 'easy';

  constructor(
    private activatedroute: ActivatedRoute,
    public gameService: GameService
  ) {}

  ngOnInit(): void {
    this.gameMode =
      <GameMode>this.activatedroute.snapshot.paramMap.get('difficulty') ||
      'easy';
  }
}
