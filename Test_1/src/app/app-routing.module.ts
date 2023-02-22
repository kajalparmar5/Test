import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { TempFormComponent } from './temp-form/temp-form.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:"test-form/:id", component:TempFormComponent},
  {path:"react-form", component:ReactFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
