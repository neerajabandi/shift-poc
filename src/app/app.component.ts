import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title: string = 'Training';
  name: string = 'test';
  trainingHours: number =0;

  student: any = {
    name: 'test R G',
    email: 'test@gmail.com'
  };

  constructor(private appService: AppService) {

  };

  ngOnInit() {
    this.getAllStudents();
  };

  getAllStudents() {
    let { name, email } = this.student;
    // console.log(name);
    // console.log(email);
    ({ name } = this.student);
    console.log(name);
  }

  courseType(tutorialType: string, duration: number) {
    this.title = tutorialType;
    this.trainingHours = duration;
    this.appService.getStudentData();
  }
  

}
