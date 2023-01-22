import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { EventoscgComponent } from './eventoscg/eventoscg.component';
@NgModule({
  declarations: [
    AppComponent,
  
    EventoscgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // {provide:LocationStrategy,useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
