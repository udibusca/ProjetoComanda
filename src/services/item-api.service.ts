import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ItemApi {
  private API_URL = 'http://localhost:8080/produto'

  constructor(private http: Http) {}

  getItems(){
    let url = this.API_URL;
    return new Promise(resolve => {
        this.http.get(url)
          .subscribe(res => resolve(res.json()));
    });
  }

}
