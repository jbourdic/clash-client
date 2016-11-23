import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Battle} from "./battle";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BattleService {
  value = 'Angular 2';
  private url = 'http://localhost:3000/battles';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(public http: Http) {

  }

  getBattles(): Promise<Battle[]> {

    console.log('Title#getData(): Get Data');
    // return this.http.get('/assets/data.json')
    // .map(res => res.json());
    return this.http.get(this.url)
      .toPromise()
      .then(response => {
        console.log(response);
        response.json().data as Battle[];
      })
      ;
  }

  createBattle(data): Promise<Battle> {
    return this.http.post(this.url, JSON.stringify(data), {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError)
    ;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
