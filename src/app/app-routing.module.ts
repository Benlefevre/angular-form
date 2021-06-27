import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RegisterReactiveComponent } from './components/register-reactive/register-reactive.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:'form-template',component:RegisterComponent},
  {path:'form-reactive',component:RegisterReactiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
