import { Component, OnInit } from '@angular/core';
import { ClassService } from "../class.service";
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
  public courses: any;
  public url: any;
  public classes_courses: any;

  constructor(private classService: ClassService) {
    this.url = environment.baseUrl;
  }

  ngOnInit() {
    this.classService.getClassesCourses().subscribe(res => {
      this.classes_courses = res;
    })
  }

  downloadPdf(event, name) {
    return this.classService.downloadPdf(name);
  }

}
