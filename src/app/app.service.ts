import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getStudentData() {
    console.log('Service Triggered.....');
    this.http.get('http://universities.hipolabs.com/search?country=United+Kingdom').subscribe((response) => {
      console.log(response);
    })
  }
}
