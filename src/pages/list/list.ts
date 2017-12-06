import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';

// Import pages to allow links to the page
import { SingleItem } from '../../pages/single-item/single-item';

// Service import for items
import { ItemApi } from '../../services/service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [Http]
})

export class ListPage {

  items: any;
  passandoAdicionais: {};

  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    private itemApi: ItemApi,
    public loadingController: LoadingController
  ) {
    this.passandoAdicionais = this.params.get('adicional');
    console.log("Adicional no item : " + this.passandoAdicionais)

  }

  ionViewDidLoad() {

    let loader = this.loadingController.create({
      content: "Obtendo itens.."
    });
    loader.present();

    this.itemApi.getItems().then(data => {
      loader.dismiss();
      this.items = data
    });
  }

  getItems(searchbar) {

    var q = searchbar.srcElement.value;

    if (!q) {

      // Show loader when search is cancelled
      let loader = this.loadingController.create({
        content: "Obtendo itens.."
      });
      loader.present();

      // fetch the data and dismiss loader
      this.itemApi.getItems().then(data => {
        loader.dismiss();
        this.items = data
      });
    }

    this.items = this.items.filter((v) => {
      if (v.title && q) {
        if (v.title.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }


  itemTapped($event, items) {
    this.navCtrl.push(SingleItem, {
      items: items
    })
  }
}