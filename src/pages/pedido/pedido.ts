import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';

import { CategoriaListarPage } from '../../pages/categoria-listar/categoria-listar';

import { CategoriasProvider } from './../../providers/categorias/categorias';
import { MesaProvider } from './../../providers/mesas/mesas';


@Component({
  selector: 'page-pedido',
  templateUrl: 'pedido.html',
  providers: [Http]
})
export class PedidoPage {
  mes: string = "DISPONIVEL";
  items: any;

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private mesaProvider: MesaProvider,
    private loadingController: LoadingController,
    private categoriasProvider: CategoriasProvider
  ) { }

  ionViewDidLoad() {

    let loader = this.loadingController.create({
      content: "Obtendo mesas.."
    });
    loader.present();
    this.mesaProvider.getAll().then(data => {
      loader.dismiss();
      this.items = data
      console.log(data);
    });
  }

  getMesas(searchbar) {
    var q = searchbar.srcElement.value;
    if (!q) {
      let loader = this.loadingController.create({
        content: "Obtendo itens.."
      });
      loader.present();

      this.mesaProvider.getAll().then(data => {
        loader.dismiss();
        this.items = data
      });
    }

    this.items = this.items.filter((v) => {
      if (v.numero && q) {
        if (v.numero.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }

  pegaMesaPorId(id: number) {
    this.categoriasProvider.get(id)
    .then((result: any) => {
        this.navCtrl.push('CategoriaListarPage', { mesa: result });
        console.log('Result do metodo openEditaMesa : '+result);
      });
  }


  CategoriasPedidos(item):void {
    this.categoriasProvider.get(item.id)
    .then((result: any) => {
        this.navCtrl.push(CategoriaListarPage, { mesa: result });
      });
    console.log(item);
  }

}