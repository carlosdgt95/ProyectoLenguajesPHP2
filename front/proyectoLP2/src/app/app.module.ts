import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { EventoscgComponent } from './eventoscg/eventoscg.component';
import { EventostandaddComponent } from './eventostandadd/eventostandadd.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EditdeletestandcgComponent } from './editdeletestandcg/editdeletestandcg.component';
import { PlacesComponent } from './places/places.component';
import { VereventosComponent } from './vereventos/vereventos.component';
import { AggeventoComponent } from './aggevento/aggevento.component';
@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AppComponent,
    
    EventoscgComponent,
       EventostandaddComponent,
       EditdeletestandcgComponent,
       PlacesComponent,
       VereventosComponent,
       AggeventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [
    // {provide:LocationStrategy,useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
