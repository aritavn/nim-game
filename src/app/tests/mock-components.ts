import { Component, Input } from '@angular/core';

import { GameMode } from '../core/models/game-mode.type';

@Component({
  selector: 'app-header',
  template: '<div></div>',
})
export class MockHeaderComponent {}

@Component({
  selector: 'app-match',
  template: '<div></div>',
})
export class MockMatchComponent {}

@Component({
  selector: 'app-game',
  template: '<div></div>',
})
export class MockGameComponent {
  @Input() heaps: Array<number> = [13];
  @Input() maxNumberOfMatchesToRemove: number = 3;
  @Input() gameMode: GameMode = 'easy';
}
