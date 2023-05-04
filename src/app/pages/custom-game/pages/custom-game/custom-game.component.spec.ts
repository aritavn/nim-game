import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomGameComponent } from './custom-game.component';
import { GameService } from 'src/app/core/services/game.service';
import { MockGameComponent } from 'src/app/tests/mock-components';

describe('CustomGameComponent', () => {
  let component: CustomGameComponent;
  let fixture: ComponentFixture<CustomGameComponent>;
  let gameService: jasmine.SpyObj<GameService>;

  beforeEach(async () => {
    gameService = jasmine.createSpyObj('GameService', ['initGame']);

    await TestBed.configureTestingModule({
      declarations: [CustomGameComponent, MockGameComponent],
      providers: [{ provide: GameService, useValue: gameService }],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
