import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MovieService {

  constructor(public http: Http) {
    this.http = http;
    
  }

  loadMovie() {

      return this.http.get('https://www.omdbapi.com?s=home')
      .map(res => res.json());


  }
  loadSpecificMovie(id) {

      return this.http.get('https://www.omdbapi.com?i=' + id)
        .map(res => res.json());


  }


}
