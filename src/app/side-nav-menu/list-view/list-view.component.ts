import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounce, debounceTime } from 'rxjs';
import { customerData } from '../../data';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  customersConfig = customerData;
  configurationsObj: any;
  customerForm: FormGroup;
  formControlsArray: string[] = [];
  fieldsInfo: any[] = [];
  listViewHeader: any;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getHeading();
    this.getSettings();
    this.createForm();

    this.customerForm.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(formValues => {
      console.log(formValues);
      //
    });
    console.log(this.configurationsObj);
    console.log('this.fieldsInfo: ', this.fieldsInfo)
  }

  showJson() {
    console.log("this.fieldsInfo:",this.fieldsInfo);

    this.customersConfig.manifest.settings.forEach((settingObj) => {
      if (settingObj.key === 'listView.filter') {
        settingObj.value = JSON.parse(settingObj.value);
        settingObj.value.configuration.facets = this.fieldsInfo;
        settingObj.value = JSON.stringify(settingObj.value);
        console.log("this.customersConfig:",this.customersConfig);
      }
    });
  }

  getHeading() {
    
    this.customersConfig.manifest.settings.forEach((settingObj) => {
      if (settingObj.key === 'listView.header') {
        // this is to convert string to JSON object
        this.listViewHeader = JSON.parse(settingObj.value || '');
      this.listViewHeader.configuration.controls.sort(function(a, b) {
        // Compare the 2 dates
        if (a.position < b.position) return -1;
        if (a.position > b.position) return 1;
        return 0;
      });
      console.log("this.listViewHeader:",this.listViewHeader);
      }
    });
  }

  // this will extract settings from the JSON object
  getSettings() {
    this.customersConfig.manifest.settings.forEach((settingObj) => {
      if (settingObj.key === 'listView.filter') {
        // this is to convert string to JSON object
        this.configurationsObj = JSON.parse(settingObj.value || '');
      }
    });
  }

  // this will create reactive form with controls(in this scenario this form will have 3 controls)
  createForm() {
    this.customerForm = this.getControls();
    console.log(this.customerForm);
  }

  getControls(): any {
    return this.formBuilder.group(this.buildControls());
  }

  patchOptions(options) {
    let defaultLabel = '';
    options.forEach((element: any) => {
      if (element.selected) {
        const { label } = element;
        defaultLabel = label;
      }
    });
    return defaultLabel;
  }

  // this will build controls in the formGroup
  buildControls() {
    let controlsObj = {};
    console.log(this.configurationsObj);
    this.configurationsObj.configuration.facets.forEach(element => {
      this.fieldsInfo.push(element);
      if (element.isDefault)
        controlsObj[element.fieldName] = new FormControl(this.patchOptions(element.options));
      else
        controlsObj[element.fieldName] = new FormControl('');
    });
    return controlsObj;
  }

   expanded = false;

 showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!this.expanded) {
    checkboxes.style.display = "block";
    this.expanded = true;
  } else {
    checkboxes.style.display = "none";
    this.expanded = false;
  }
}


}
