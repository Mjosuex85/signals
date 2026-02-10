import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  exports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule
  ]
})
export class MaterialModule {}