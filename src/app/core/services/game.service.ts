import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { GameOverModalComponent } from 'src/app/shared/components/game-over-modal/game-over-modal.component';
import { GameMode } from '../models/game-mode.type';

@Injectable({
  providedIn: 'root',
})
export abstract class GameService {
  isPlayersTurn: boolean = true;
  initialHeaps: Array<number> = [];
  heaps: Array<number> = [];
  maxNumberOfMatchesToRemoveAtATime: number = 0;
  selectedHeapRow: number | undefined;
  numberOfMatchesToRemove: number = 0;
  gameMode: GameMode = 'easy';

  constructor(public dialog: MatDialog, private router: Router) {}

  initGame(
    heaps: Array<number> = this.initialHeaps,
    maxNumberOfMatches: number = this.maxNumberOfMatchesToRemoveAtATime,
    gameMode: GameMode = this.gameMode
  ): void {
    this.isPlayersTurn = true;
    this.initialHeaps = [...heaps];
    this.heaps = [...heaps];
    this.maxNumberOfMatchesToRemoveAtATime = maxNumberOfMatches;
    this.gameMode = gameMode;
    this.numberOfMatchesToRemove = 0;
    this.selectedHeapRow = undefined;
  }

  removeMatch(heapRow: number): void {
    this.selectedHeapRow = heapRow;
    this.numberOfMatchesToRemove++;
    this.removeMatches(this.selectedHeapRow!, 1);
  }

  playerMove(): void {
    this.selectedHeapRow = undefined;
    this.numberOfMatchesToRemove = 0;
    this.isPlayersTurn = !this.isPlayersTurn;
    this.checkGameOver();
  }

  computerMove(): void {
    const computerMove: [number, number] =
      this.gameMode === 'easy'
        ? [0, this.computerRandomMove()]
        : this.computerWinningMove();
    this.removeMatches(computerMove[0], computerMove[1]);
    this.isPlayersTurn = !this.isPlayersTurn;
    this.checkGameOver();
  }

  getMaxNumberOfMatchesToRemove(heapIndex: number): number {
    return Math.min(
      this.maxNumberOfMatchesToRemoveAtATime,
      this.heaps[heapIndex]
    );
  }

  private computerWinningMove(): [number, number] {
    // calculate xor sum of all heaps
    let nimSum = this.heaps.reduce((a, b) => a ^ b);

    // if xor sum is zero remove from the first non-empty heap
    if (nimSum === 0) {
      for (let i = 0; i < this.heaps.length; i++) {
        if (this.heaps[i] > 0) {
          return [i, this.getMaxNumberOfMatchesToRemove(i)];
        }
      }
    }

    // finds the leftmost bit
    let bitIndex = Math.floor(Math.log2(nimSum));
    // finds a heap where the bit at bitIndex is set
    for (let i = 0; i < this.heaps.length; i++) {
      if ((this.heaps[i] >> bitIndex) & 1) {
        // if there are fewer matches in the heap than the nim sum, remove all matches
        if (this.heaps[i] <= nimSum) {
          return [
            i,
            Math.min(this.heaps[i] - 1, this.maxNumberOfMatchesToRemoveAtATime),
          ];
        }
        // remove matches to make the heap size equal to the nim sum
        return [
          i,
          Math.min(
            this.heaps[i] ^ nimSum,
            this.maxNumberOfMatchesToRemoveAtATime
          ),
        ];
      }
    }
    return [0, 0];
  }

  private computerRandomMove(): number {
    return this.generateRandomInt(1, this.getMaxNumberOfMatchesToRemove(0));
  }

  private checkGameOver(): void {
    const matchesLeft = this.heaps.reduce((a, b) => a + b);
    if (matchesLeft === 1) this.openGameOverModal(!this.isPlayersTurn);
    if (matchesLeft === 0) this.openGameOverModal(this.isPlayersTurn);
  }

  private openGameOverModal(playerWon: boolean): void {
    const dialogRef = this.dialog.open(GameOverModalComponent, {
      width: '300px',
      data: { won: playerWon },
    });

    dialogRef.afterClosed().subscribe((rematch: boolean) => {
      if (rematch) this.initGame();
      else this.router.navigate(['/landing-page']);
    });
  }

  private removeMatches(heapIndex: number, numberOfMatches: number): void {
    if (numberOfMatches <= this.heaps[heapIndex])
      this.heaps[heapIndex] = this.heaps[heapIndex] - numberOfMatches;
    else
      console.error(
        'The number of matches to remove is greater than the number of matches in the heap.'
      );
  }

  private generateRandomInt(min: number, max: number): number {
    return min + Math.floor(Math.random() * max);
  }
}
