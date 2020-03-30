import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import { of } from 'rxjs/observable/of'; 

@Injectable()
export class DummyService {

  constructor() { }

  create(form) {
    return Observable.of({ message: 'Hero created!' });;
  }

}