import { Component } from "@angular/core";
import { Course } from "./course";


@Component({
  selector:'app-course-list',
  templateUrl: './courses-list.components.html'
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular: Forms',
        imageUrl: '',
        price: 99.99,
        code: 'XPS-8796',
        duration: 120,
        rating: 5.4
      },
      {
        id: 2,
        name: 'Angular: Aplication',
        imageUrl: '',
        price: 45.99,
        code: 'LKL 1994',
        duration: 80,
        rating: 4
      }
    ]
  }

}
