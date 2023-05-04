import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateTestingModule } from 'ngx-translate-testing';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

import { CustomizationModalComponent } from './customization-modal.component';

describe('CustomizationModalComponent', () => {
  let component: CustomizationModalComponent;
  let fixture: ComponentFixture<CustomizationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateTestingModule.withTranslations({}),
        MatDialogModule,
        ReactiveFormsModule,
      ],
      declarations: [CustomizationModalComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomizationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
