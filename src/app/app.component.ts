import { Component } from '@angular/core';
import { HEADERS } from "./header-mock";
import { Header } from "./header";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'henristauration';

  headers = HEADERS;
  currentHeader: Header;

  ngOnInit() {
    this.currentHeader = this.currentHeader || this.headers[0];
  }

  onHeaderChange(currentHeader: Header) {
    this.currentHeader = currentHeader;
  }
}
