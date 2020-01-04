import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../menu';
import { MenuService } from "../menu.service";
import { OfferService } from "../offer.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public currentMenu: Menu;
  public menus: any;
  public offers: any;

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
    private offerService: OfferService,
  ) {
    this.menus = [];
    this.offers = [];
  }

  ngOnInit() {
    this.offerService.getOffers().subscribe(res => {
      this.offers = res;
    });
    this.menuService.getMenus().subscribe(res => {
      this.menus = res;
      this.getMenu();
    });
  }

  getMenu(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.currentMenu = this.menus.filter(menu => menu.name === name)[0] || this.menus[0];
  }
  onMenuChange(currentMenu: Menu) {
    this.currentMenu = currentMenu;
  }
}
