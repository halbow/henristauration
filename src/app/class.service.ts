import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Menu } from './menu';


@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private ClassUrl = environment.baseUrl + '/api/classes';
  public classes = [];
  public classes_courses = [];
  constructor(
    private http: HttpClient
  ) { }


  public getClasses(): Observable<Object> {
    if (this.classes.length !== 0) {
      return of(this.classes);
    }
    return this.http.get<Menu>(this.ClassUrl).pipe(
      map(res => res["classes"]),
      tap(classes => this.classes = classes)
    );
  }
  public getClassesCourses(): Observable<Object> {
    if (this.classes_courses.length !== 0) {
      return of(this.classes_courses);
    }
    return this.http.get<Menu>(this.ClassUrl + "_courses").pipe(
      map(res => res["classes"]),
      tap(classes => this.classes_courses = classes)
    );
  }

  public downloadPdf(name) {
    let headers = new HttpHeaders();
    let url = environment.baseUrl + `/api/course/${name}`
    headers = headers.set('Accept', 'application/pdf');
    return this.http.get(url, { headers: headers, responseType: 'blob' });
  }
}
