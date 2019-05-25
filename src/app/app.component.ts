import { Component } from '@angular/core';
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

  ngOnInit() {
    this.currentHeader = this.currentHeader || this.headers[0];
    this.currentMenu = this.currentMenu || this.menus[0];
  }

  onHeaderChange(currentHeader: Header) {
    this.currentHeader = currentHeader;
  }

  showMenu(menu: Menu) {
    this.currentHeader = this.headers.filter(header => header.name === "menu")[0];
    this.currentMenu = menu;
  }
}
