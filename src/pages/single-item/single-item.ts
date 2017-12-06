import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';


import { ItemApi } from '../../services/service';

@Component({
  selector: 'page-single-item',
  templateUrl: 'single-item.html',
  providers: [Http]
})
export class SingleItem {

  adicionais: {};

  constructor(
              public navCtrl: NavController,
              private navParams:NavParams,
              private itemApi: ItemApi
            )
           {
             //debugger;
             //this.item = this.navParams.data;
             // this.chave = Object.keys(this.item);
             // console.log(this.chave);
             this.adicionais = navParams.get('adicional');
             console.log(this.adicionais);
            }


  // ------------------------------------------------------------------------------------------
  // 
  // ------------------------------------------------------------------------------------------


}