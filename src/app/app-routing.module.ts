import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoorComponent } from './pages/door/door.component';
import { MatComponent } from './pages/mat/mat.component';

const routes: Routes = [
  {
    path: 'door',
    component: DoorComponent
  },
  {
    path: 'mat',
    component: MatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
