import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogoComponent } from './dialogo/dialogo.component';
import { FirstComponent } from './first/first.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: "full" },
  { path: 'dialog', component: DialogoComponent },
  { path: 'inicio', component: FirstComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
