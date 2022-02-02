import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VvsComponent } from './vvs/vvs.component';

const routes: Routes = [
  { path: '', redirectTo: '/vvs', pathMatch: 'full' },
  { path: 'vvs', component: VvsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
