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
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NewApostaDialogComponent } from './dialogs/new-aposta-dialog.component';
import { SetResultJogoDialog } from './dialogs/dialog-set-resultado-jogo/set-result-jogo-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NewApostaDialogComponent,
    SetResultJogoDialog,
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
