import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventoscgComponent } from './eventoscg/eventoscg.component';
import { PlacesComponent } from './places/places.component';

const routes: Routes = [
  { path:"stands", component: EventoscgComponent },
  { path:"places", component: PlacesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
