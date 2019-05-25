import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../menu';
import { Offer } from '../offer';

@Component({
  selector: 'app-menu-content',
  templateUrl: './menu-content.component.html',
  styleUrls: ['./menu-content.component.css']
})
export class MenuContentComponent implements OnInit {
  @Input() currentMenu: Menu;
  @Input() offer: Offer;
  constructor() { }

  ngOnInit() {
  }

}
