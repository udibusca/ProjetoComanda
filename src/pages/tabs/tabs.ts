import { Component } from '@angular/core';

import { ListPage } from '../list/list';
import { HomePage } from '../home/home';
import { PedidoPage } from '../pedido/pedido';
import { MesaListarPage} from '../mesa-listar/mesa-listar';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ListPage;
  tab3Root = PedidoPage;
  tab4Root = MesaListarPage;

  constructor() {

  }
}
