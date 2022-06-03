import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IData, IMovie} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  storage = new BehaviorSubject<IData>({pageId: 1, id: ''});
  last=new BehaviorSubject<IMovie[]>([]);
  name =new BehaviorSubject<string>('All Movies');

  constructor() {
  }
}
