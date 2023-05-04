import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateTestingModule } from 'ngx-translate-testing';

import { AppComponent } from './app.component';
import { MockHeaderComponent } from './tests/mock-components';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateTestingModule.withTranslations({}),
      ],
      declarations: [AppComponent, MockHeaderComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
