import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {UsersComponent} from "./users-components/users/users.component";
import {UserComponent} from "./users-components/user/user.component";
import {UserdetailsComponent} from "./users-components/userdetails/userdetails.component";
import {UserService} from "./user-services/user.service";


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
  providers:[
    UserService
  ]
})
export class UsersModule { }
