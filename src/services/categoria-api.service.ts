
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriaApi {
  private API_URL = 'http://localhost:8080/categoria'

  constructor(public http: Http) { }

  getCategorias(){
    let url = this.API_URL;
    return new Promise(resolve => {
        this.http.get(url)
          .subscribe(res => resolve(res.json()));
    });
  }

}