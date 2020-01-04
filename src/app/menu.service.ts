import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuUrl = environment.baseUrl + '/api/menus';
  public menus = [];
  constructor(
    private http: HttpClient
  ) { }


  public getMenus(): Observable<Object> {
    if (this.menus.length != 0) {
      return of(this.menus);
    }
    return this.http.get<Menu>(this.menuUrl).pipe(
      map(res => res["menus"]),
      tap(menus => this.menus = menus)
    );
  }
}
