import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { CustomizationModalComponent } from 'src/app/shared/components/customization-modal/customization-modal.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  constructor(public dialog: MatDialog, private router: Router) {}

  openCustomizationModal(): void {
    const dialogRef = this.dialog.open(CustomizationModalComponent, {
      width: '500px',
    });

    dialogRef
      .afterClosed()
      .subscribe((form: { heaps: Array<number>; maxMatches: number }) => {
        this.router.navigateByUrl('/custom-game', {
          state: { heaps: form.heaps, maxMatches: form.maxMatches },
        });
      });
  }
}
