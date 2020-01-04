import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Menu } from '../menu';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {
  @Input() currentMenu: Menu;
  @Input() menus: any;
  @Output() menuChange = new EventEmitter<Menu>();

  constructor() { }

  ngOnInit() {
    console.log(this.menus);
    console.log(this.currentMenu);
  }

  onSelect(currentMenu: Menu): void {
    this.menuChange.emit(currentMenu);
  }

}
