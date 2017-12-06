import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Importação Http
import { HttpModule } from '@angular/http';

// Importações de página
import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SingleItem } from '../pages/single-item/single-item';
import { PedidoPage } from '../pages/pedido/pedido';
import { MesaListarPage} from '../pages/mesa-listar/mesa-listar';
import { CategoriaListarPage} from '../pages/categoria-listar/categoria-listar';


// Importações de serviços
import { ItemApi } from '../services/item-api.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MesaProvider } from '../providers/mesas/mesas';
import { CategoriasProvider } from '../providers/categorias/categorias';

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    HomePage,
    SingleItem,
    TabsPage,
    PedidoPage,
    MesaListarPage,
    CategoriaListarPage
  ],
  imports: [
    BrowserModule,
    HttpModule,    
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    HomePage,
    SingleItem,
    TabsPage,
    PedidoPage,
    MesaListarPage,
    CategoriaListarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ItemApi,
    HttpModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
    MesaProvider, 
    CategoriasProvider
  ]
})
export class AppModule {}
