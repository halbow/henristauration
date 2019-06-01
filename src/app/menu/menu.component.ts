import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
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

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.currentMenu = this.menus[0];
  }

  ngOnInit() {
    this.getMenu();
  }

  getMenu(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.currentMenu = this.menus.filter(menu => menu.name === name)[0] || this.currentMenu;
  }
  onMenuChange(currentMenu: Menu) {
    this.currentMenu = currentMenu;
  }
}
