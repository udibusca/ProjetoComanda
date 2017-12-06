import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-mesa-detalhe',
  templateUrl: 'mesa-detalhe.html',
})
export class MesaDetalhePage {
  
  mesa: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
    this.mesa = this.navParams.data.mesa;
    console.log('Detales de mesa : '+this.mesa);
  }

  fechar(){
    this.viewCtrl.dismiss();
  }

}

