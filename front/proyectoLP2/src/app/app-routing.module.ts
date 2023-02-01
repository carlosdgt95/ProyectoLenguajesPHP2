import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EventoscgComponent } from './eventoscg/eventoscg.component';
import { EventostandaddComponent } from './eventostandadd/eventostandadd.component';
import { EditdeletestandcgComponent } from './editdeletestandcg/editdeletestandcg.component';
import { PlacesComponent } from './places/places.component';
import { AggeventoComponent } from './aggevento/aggevento.component';
import { VereventosComponent } from './vereventos/vereventos.component';



const routes: Routes = [
{path: '', component: AppComponent,  pathMatch: 'full'},
{path:"stands", component: EventoscgComponent},
{path:"addstand",component:EventostandaddComponent},
{path:"editDelete",component:EditdeletestandcgComponent},
{path:"places", component: PlacesComponent },
{path: "aggEvento", component: AggeventoComponent},
{path: "verEvento", component: VereventosComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
