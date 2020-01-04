import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MailService {
  private mailUrl = environment.baseUrl + '/api/mail';

  constructor(
    private http: HttpClient
  ) { }

  send(name: string, email: string, message: string): Observable<Object> {
    // Limit by ip ?
    return this.http.post(this.mailUrl, { "toast": "toast" });
  }
}
