import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {UserService} from "../../user-services/user.service";
import {IUser} from "../../../interfaces";

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  user: IUser

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => this.userService.getOne(id).subscribe(value => this.user = value))
  }

}
