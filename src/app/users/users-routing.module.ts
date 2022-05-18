import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {UsersComponent} from "./users-components/users/users.component";
import {UserdetailsComponent} from "./users-components/userdetails/userdetails.component";

const routes: Routes = [
  {path:'', component:UsersComponent,
    children: [
      {path:':id', component:UserdetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes),HttpClientModule],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
