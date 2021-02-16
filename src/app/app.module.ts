import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpSettingService } from './allServices/upSetting.service';
import { FormsModule } from "@angular/forms";
import { LoginPageComponent } from './allC/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    UpSettingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
