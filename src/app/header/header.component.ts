import { Component, OnInit } from '@angular/core';
import { Page } from "../page";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pages: Page[] = [
    { name: "home", friendlyName: "Home" },
    { name: "menu", friendlyName: "Menu" },
    { name: "location", friendlyName: "Location" },
    { name: "contact", friendlyName: "Contact" },
    { name: "about", friendlyName: "A propos" },
  ]

  currentPage: Page;

  constructor() { }

  ngOnInit() {
    this.currentPage = this.currentPage || this.pages[0];
  }

  onSelect(currentPage: Page): void {
    this.currentPage = currentPage;
  }
}
