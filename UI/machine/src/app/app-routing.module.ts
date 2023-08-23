import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MachineDetailPageComponent } from './machine-detail-page/machine-detail-page.component';


//const routes: Routes = [ { path: 'machine/:id', component: MachineDetailPageComponent }];
const routes: Routes = [];

// const routes: Routes = [  { path: '', redirectTo: 'viewMachines', pathMatch: 'full' },  
//   { path: 'viewMachines', component: MachineListComponent },  
//   { path: 'addMachine', component: AddMachineComponent },  
// ];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
