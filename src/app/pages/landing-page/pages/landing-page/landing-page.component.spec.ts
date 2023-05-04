import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateTestingModule.withTranslations({}),
        MatDialogModule,
      ],
      declarations: [LandingPageComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open customization modal when customize button is clicked', fakeAsync(() => {
    spyOn(component, 'openCustomizationModal');
    let button = fixture.debugElement.nativeElement.querySelector('button');

    button.click();
    tick();

    expect(component.openCustomizationModal).toHaveBeenCalled();
  }));
});
