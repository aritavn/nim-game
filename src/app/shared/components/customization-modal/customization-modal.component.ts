import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-customization-modal',
  templateUrl: './customization-modal.component.html',
  styleUrls: ['./customization-modal.component.scss'],
})
export class CustomizationModalComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(
    public dialogRef: MatDialogRef<CustomizationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {},
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      heap1: [null, [Validators.required, Validators.min(1)]],
      heap2: [null, [Validators.required, Validators.min(1)]],
      heap3: [null, [Validators.required, Validators.min(1)]],
      maxMatches: [null, [Validators.required, Validators.min(1)]],
    });
  }
}
