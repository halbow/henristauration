import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Offer } from './offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private OfferUrl = environment.baseUrl + '/api/offers';
  private offers = []
  constructor(
    private http: HttpClient
  ) { }
  public getOffers(): Observable<Object> {
    if (this.offers.length !== 0) {
      return of(this.offers);
    }
    return this.http.get<Offer>(this.OfferUrl).pipe(
      map(res => res["offers"]),
      tap(offers => { this.offers = offers })
    );
  }
}
