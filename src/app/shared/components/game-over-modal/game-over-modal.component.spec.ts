import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateTestingModule } from 'ngx-translate-testing';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

import { GameOverModalComponent } from './game-over-modal.component';

describe('GameOverModalComponent', () => {
  let component: GameOverModalComponent;
  let fixture: ComponentFixture<GameOverModalComponent>;
  let data = { won: true };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateTestingModule.withTranslations({}), MatDialogModule],
      declarations: [GameOverModalComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: data },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GameOverModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
