import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  convertToParamMap,
} from '@angular/router';

import { SimpleGameComponent } from './simple-game.component';
import { MockGameComponent } from 'src/app/tests/mock-components';
import { GameService } from 'src/app/core/services/game.service';

describe('SimpleGameComponent', () => {
  let component: SimpleGameComponent;
  let fixture: ComponentFixture<SimpleGameComponent>;
  let activatedRoute: Partial<ActivatedRoute>;
  let gameService: jasmine.SpyObj<GameService>;

  beforeEach(async () => {
    activatedRoute = {
      snapshot: <ActivatedRouteSnapshot>{
        paramMap: convertToParamMap({
          difficulty: 'easy',
        }),
      },
    };
    gameService = jasmine.createSpyObj('GameService', ['initGame']);

    await TestBed.configureTestingModule({
      declarations: [SimpleGameComponent, MockGameComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: GameService, useValue: gameService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
