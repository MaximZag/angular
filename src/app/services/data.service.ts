import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IData} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  storage = new BehaviorSubject<IData>({pageId: 1, id: ''});

  constructor() {
  }
}
