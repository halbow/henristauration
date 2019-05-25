import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    { name: "breakfast", friendlyName: "Petit-Déjeuner" },
    { name: "wdiner", friendlyName: "Walking Diner" },
    { name: "bread", friendlyName: "Pains Surprise" },
    { name: "diner", friendlyName: "Diner" },
    { name: "Porchetta", friendlyName: "Porchetta" },
    { name: "bbq", friendlyName: "Barbecue" },
    { name: "menu", friendlyName: "Menu" },
  ]
  constructor() { }

  ngOnInit() {
  }

}
