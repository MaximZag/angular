import {Component, Input, OnInit} from '@angular/core';

import {IGenre} from "../../interfaces";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  @Input()
  genre: IGenre

  constructor(private dataservice: DataService) {
  }

  ngOnInit(): void {
  }

  switchGenre() {
    this.dataservice.storage.next({pageId: 1, id: this.genre.id})
    this.dataservice.name.next(this.genre.name)
  }
}
