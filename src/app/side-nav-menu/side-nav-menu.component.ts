import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { customerData } from '../data';

@Component({
  selector: 'app-side-nav-menu',
  templateUrl: './side-nav-menu.component.html',
  styleUrls: ['./side-nav-menu.component.scss']
})
export class SideNavMenuComponent implements OnInit {

  customersConfig = customerData;
  configurationsObj: any;
  navOptions: string[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getSettings();
  }

  getSettings() {
    this.customersConfig.manifest.settings.forEach((obj) => {
      let option = obj.key.split(".")[0];
      if (this.navOptions.indexOf(option) == -1) {
        this.navOptions.push(option);
      }
    });
  }

  navigateTo(routePath: string) {
    this.router.navigate([`dashboard/${routePath}`]);
  }

}
