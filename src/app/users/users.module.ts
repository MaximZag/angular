import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from "./users-components/users/users.component";
import {UserComponent} from "./users-components/user/user.component";
import {UserdetailsComponent} from "./users-components/userdetails/userdetails.component";
import {UserService} from "./user-services/user.service";
import {UsersResolver} from "./user-services/users.resolver";
import {UserResolver} from "./user-services/user.resolver";
import {DeactivatorGuard} from "./user-services/deactivator.guard";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserdetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
  ],
  providers: [
    UserService,
    UsersResolver,
    UserResolver,
    DeactivatorGuard
  ]
})
export class UsersModule {
}
