import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { AdminModule } from './backoffice/admin.module';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { BolaoModule } from './bolao/bolao.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SetResultJogoDialog } from './dialogs/dialog-set-resultado-jogo/set-result-jogo-dialog.component';
import { NotificationListComponent } from './notification/notification.component';
import { MatIconModule } from '@angular/material/icon';
import { NotificationService } from './notification/notification.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SetResultJogoDialog,
    NotificationListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    CoreModule,
    UserModule,
    HttpClientModule,
    RouterModule,
    AdminModule,
    BolaoModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    CommonModule,
    MatFormFieldModule,
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
