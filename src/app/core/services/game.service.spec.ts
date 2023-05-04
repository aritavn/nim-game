import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { GameService } from './game.service';

describe('GameService', () => {
  let gameService: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatDialogModule],
    });
    gameService = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(gameService).toBeTruthy();
  });

  it('should reset the heap stack when initGame() is called without parameters', () => {
    gameService.initialHeaps = [13];

    gameService.initGame();

    expect(gameService.heaps).toEqual([13]);
  });

  describe('computer move', () => {
    it('should remove a random number of matches if on easy game mode', () => {
      spyOn<any>(gameService, 'computerRandomMove');
      gameService.gameMode = 'easy';
      gameService.heaps = [13];
      gameService.maxNumberOfMatchesToRemoveAtATime = 2;

      gameService.computerMove();

      expect(gameService['computerRandomMove']).toHaveBeenCalled();
    });

    it('should play a winning strategy if on custom game mode', () => {
      gameService.heaps = [11];
      gameService.gameMode = 'hard';
      gameService.maxNumberOfMatchesToRemoveAtATime = 3;

      gameService.computerMove();

      expect(gameService.heaps).toEqual([8]);
    });
  });

  describe('game over', () => {
    it('should open game over modal when game is over', () => {
      spyOn<any>(gameService, 'openGameOverModal');
      gameService.heaps = [1];

      gameService['checkGameOver']();

      expect(gameService['openGameOverModal']).toHaveBeenCalled();
    });

    it('should open game over modal when game is over', () => {
      spyOn<any>(gameService, 'openGameOverModal');
      gameService.heaps = [0, 0];

      gameService['checkGameOver']();

      expect(gameService['openGameOverModal']).toHaveBeenCalled();
    });
  });

  it('should return the correct number of maximum matches that can be removed', () => {
    gameService.maxNumberOfMatchesToRemoveAtATime = 3;
    gameService.heaps = [2];

    expect(gameService.getMaxNumberOfMatchesToRemove(0)).toEqual(2);
  });

  it('should remove the correct number of matches from the correct heap', () => {
    gameService.heaps = [2, 3];

    gameService['removeMatches'](1, 2);

    expect(gameService.heaps).toEqual([2, 1]);
  });
});
