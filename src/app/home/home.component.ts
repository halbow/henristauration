import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MENUS } from "../menu-mock";
import { Menu } from "../menu";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() showMenu = new EventEmitter<Menu>();

  menus = MENUS;
  public menusGroup = ["breakfast", "diner", "menu"];

  constructor() { }

  ngOnInit() {
  }


  onSelect(menu) {
    this.showMenu.emit(menu);
  }
}
