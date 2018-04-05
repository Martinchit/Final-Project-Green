import { Component } from '@angular/core';
import { NewsPage } from '../news/news';
import { AccountPage } from '../account/account';
import { ChargerPage } from '../charger/charger';
import { BinPage } from '../bin/bin';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AccountPage;
  tab2Root = NewsPage;
  tab3Root = ChargerPage;
  tab4Root = BinPage;

  constructor() {

  }
}
