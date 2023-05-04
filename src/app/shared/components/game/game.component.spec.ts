import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateTestingModule } from 'ngx-translate-testing';

import { GameComponent } from './game.component';
import { MockMatchComponent } from 'src/app/tests/mock-components';
import { GameService } from 'src/app/core/services/game.service';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let gameService: jasmine.SpyObj<GameService>;

  beforeEach(async () => {
    gameService = jasmine.createSpyObj('GameService', [
      'initGame',
      'removeMatch',
      'playerMove',
      'computerMove',
    ]);

    await TestBed.configureTestingModule({
      imports: [TranslateTestingModule.withTranslations({})],
      declarations: [GameComponent, MockMatchComponent],
      providers: [{ provide: GameService, useValue: gameService }],
    }).compileComponents();

    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
