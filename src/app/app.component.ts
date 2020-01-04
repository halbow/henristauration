import { Component } from '@angular/core';
import { HEADERS } from "./header-mock";
import { Header } from "./header";
import { Menu } from './menu';
import { MenuService } from "./menu.service";
import { OfferService } from "./offer.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'henristauration';

  headers = HEADERS;
  public menus: any = [];
  public offers: any = [];
  currentHeader: Header;
  /*currentMenu: Menu;*/

  constructor(
    private menuService: MenuService,
    private offerService: OfferService,
  ) { }

  ngOnInit() {
    /*this.currentMenu = this.currentMenu || this.menuFromUrl(this.location.path());
    console.log(this.currentMenu);
    */
    this.menuService.getMenus().subscribe(res => { this.menus = res }
    );
    this.offerService.getOffers().subscribe(res => { this.offers = res }
    );
  }
  menuFromUrl(url: string) {
    return this.menus.filter(menu => menu.name === url.substring(url.lastIndexOf('/') + 1))[0];
  }

  /*
  showMenu(menu: Menu) {
    this.currentHeader = this.headers.filter(header => header.name === "menu")[0];
    this.currentMenu = menu;
  }
  */
}
