import { Component, OnInit } from '@angular/core';
import { ClassService } from "../class.service";

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
  public courses: any;
  public classes_courses: any;

  constructor(private classService: ClassService) {
  }

  ngOnInit() {
    this.classService.getClassesCourses().subscribe(res => {
      this.classes_courses = res;
    })
  }

  downloadPdf(event, name) {
    console.log(name);
    return this.classService.downloadPdf(name);
  }

}
