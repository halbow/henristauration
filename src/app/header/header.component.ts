import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Header } from "../header";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() currentHeader: Header;
  @Input() headers: any;
  @Output() headerChange = new EventEmitter<Header>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(currentHeader: Header): void {
    this.headerChange.emit(currentHeader);
  }
}
