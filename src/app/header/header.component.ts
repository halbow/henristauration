import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Header } from "../header";
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() currentHeader: Header;
  @Input() headers: any;
  @Output() headerChange = new EventEmitter<Header>();

  constructor(private router: Router) {
    router.events.subscribe((event) => (event instanceof NavigationEnd) && this.handleRouteChange())
  }
  ngOnInit() {
  }

  handleRouteChange() {
    this.currentHeader = this.headerFromUrl(this.router.url);
  }

  headerFromUrl(url: string) {
    return this.headers.filter(header => header.name === url.split("/")[1])[0] || this.headers[0];
  }
}
