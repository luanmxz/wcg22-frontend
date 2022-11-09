import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home.component';
import { CoreModule } from 'src/app/core/core.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent],
  imports: [CoreModule, MatIconModule, RouterModule],
  exports: [HomeComponent],
})
export class HomeModule {}
