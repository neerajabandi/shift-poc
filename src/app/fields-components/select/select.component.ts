import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() formInfo: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.formInfo);
  }

}
