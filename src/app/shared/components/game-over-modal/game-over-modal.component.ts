import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-game-over-modal',
  templateUrl: './game-over-modal.component.html',
  styleUrls: ['./game-over-modal.component.scss'],
})
export class GameOverModalComponent {
  constructor(
    public dialogRef: MatDialogRef<GameOverModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { won: boolean }
  ) {}
}
