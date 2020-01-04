import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Menu } from "../menu";
import { MenuService } from "../menu.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() showMenu = new EventEmitter<Menu>();

  public menus: any = [];
  public menusGroup = ["breakfast", "diner", "menu"];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getMenus().subscribe(res => {
      this.menus = res;
    });
  }


  onSelect(menu) {
    this.showMenu.emit(menu);
  }
}
