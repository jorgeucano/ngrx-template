import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';


const APP_IMPORTS = [
  BrowserModule,
  AppRoutingModule,
  MaterialModule,
  BrowserAnimationsModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: APP_IMPORTS,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
