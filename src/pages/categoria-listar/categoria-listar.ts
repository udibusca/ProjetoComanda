import { CategoriasProvider } from './../../providers/categorias/categorias';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-categoria-listar',
  templateUrl: 'categoria-listar.html',
})
export class CategoriaListarPage {

  categoria: any;
  passandoCategoria: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private categoriasProvider: CategoriasProvider,private toast: ToastController,) {

      this.passandoCategoria = this.navParams.get('mesa');
  }

  ionViewDidLoad() {
    console.log('Result do metodo CategoriasPedidos : '+this.passandoCategoria);
  }

}
