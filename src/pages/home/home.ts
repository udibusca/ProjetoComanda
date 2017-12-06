import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

import { CategoriaListarPage } from '../../pages/categoria-listar/categoria-listar';

import { ItemApi } from '../../services/service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Http]
})
export class HomePage {

  // The items array to populate with data is created
  items: any;

  constructor(
              public navCtrl: NavController,
              public params:NavParams,
              private itemApi: ItemApi
            )
            {}

ionViewDidLoad() {
    this.itemApi.getItems().then(data => this.items = data);
  }

  CategoriaTap($event, categoria) {
    this.navCtrl.push(CategoriaListarPage, {
        categoria: 'Refeições'
    });
  }

  CategoriaTap_2($event, categoria) {
    this.navCtrl.push(CategoriaListarPage, {
        categoria: 'Doces e Sobremesas'
    });
  }

  CategoriaTap_3($event, categoria) {
    this.navCtrl.push(CategoriaListarPage, {
        categoria: 'Cervejas'
    });
  }

}
