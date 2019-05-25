import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../menu';
import { MENUS } from '../menu-mock';
import { OFFERS } from '../offer-mock';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() currentMenu: Menu;
  menus = MENUS;
  offers = OFFERS;
  constructor() { }

  ngOnInit() {
    this.currentMenu = this.currentMenu || this.menus[0];
  }

  onMenuChange(currentMenu: Menu) {
    this.currentMenu = currentMenu;
  }

}
