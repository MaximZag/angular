import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {UsersComponent} from "./users-components/users/users.component";
import {UserdetailsComponent} from "./users-components/userdetails/userdetails.component";
import {UsersResolver} from "./user-services/users.resolver";
import {UserResolver} from "./user-services/user.resolver";

const routes: Routes = [
  {
    path: '', component: UsersComponent,
    resolve: {usersData: UsersResolver},
    children: [
      {
        path: ':id', component: UserdetailsComponent,
        resolve: {userData: UserResolver}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
