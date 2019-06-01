import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { HEADERS } from "./header-mock";
import { MENUS } from "./menu-mock";
import { Header } from "./header";
import { Menu } from './menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'henristauration';

  headers = HEADERS;
  menus = MENUS;
  currentHeader: Header;
  currentMenu: Menu;

  constructor(private location: Location) { }

  ngOnInit() {
    this.currentMenu = this.currentMenu || this.menuFromUrl(this.location.path());
  }
  menuFromUrl(url: string) {
    return this.menus.filter(menu => menu.name === url.substring(url.lastIndexOf('/') + 1))[0];
  }

  showMenu(menu: Menu) {
    this.currentHeader = this.headers.filter(header => header.name === "menu")[0];
    this.currentMenu = menu;
  }
}
