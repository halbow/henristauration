import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../menu';
import { Offer } from '../offer';
import { Lightbox } from 'ngx-lightbox';
import { OFFERS } from '../offer-mock';

@Component({
  selector: 'app-menu-content',
  templateUrl: './menu-content.component.html',
  styleUrls: ['./menu-content.component.css']
})
export class MenuContentComponent implements OnInit {
  @Input() currentMenu: Menu;
  @Input() offer: Offer;
  public display: string;
  public offers = OFFERS;
  constructor(private _lightbox: Lightbox) { }

  ngOnInit() {
  }

  open(offer: Offer): void {
    // open lightbox
    console.log('helloe)');
    this._lightbox.open(this.offers, this.offers.indexOf(offer));
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
