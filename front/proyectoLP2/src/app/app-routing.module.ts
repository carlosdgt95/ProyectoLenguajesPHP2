import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventoscgComponent } from './eventoscg/eventoscg.component';
import { EventostandaddComponent } from './eventostandadd/eventostandadd.component';
import { EditdeletestandcgComponent } from './editdeletestandcg/editdeletestandcg.component';
import { PlacesComponent } from './places/places.component';
import { AggeventoComponent } from './aggevento/aggevento.component';
import { VereventosComponent } from './vereventos/vereventos.component';

const routes: Routes = [
{path:"stands", component: EventoscgComponent},
{path:"addstand",component:EventostandaddComponent},
{path:"editDelete",component:EditdeletestandcgComponent},
{ path:"places", component: PlacesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
