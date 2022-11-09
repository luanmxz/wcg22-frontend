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

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
