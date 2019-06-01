import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MailService {
  private mailUrl = 'https://httpbin.org/anything';

  constructor(
    private http: HttpClient
  ) { }

  send(name: string, email: string, message: string): Observable<Object> {
    return this.http.post(this.mailUrl, { "toast": "toast" });
  }
}
