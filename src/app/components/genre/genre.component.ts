import {Component, Input, OnInit} from '@angular/core';
import {IGenre} from "../../interfaces";
import {Router} from "@angular/router";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  @Input()
  genre:IGenre

  constructor(private router:Router, private dataservice:DataService) {
  }

  ngOnInit(): void {
  }

  switchGenre() {
    this.dataservice.storage.next({id:this.genre.id, page:''})
    this.router.navigate(['movies'])
  }
}
