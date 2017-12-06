import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriasProvider {

  constructor(public http: Http) { }
  
  getAll() {
    return new Promise((resolve, reject) => {
      let url = 'categoria/';
      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
          console.log(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  get(id: number) {
    return new Promise((resolve, reject) => {
      let url = 'categoria/'+ id;
      console.log(url);
      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }  

}
