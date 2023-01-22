import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventoscgComponent } from './eventoscg/eventoscg.component';
const routes: Routes = [
{path:"stands", component: EventoscgComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
