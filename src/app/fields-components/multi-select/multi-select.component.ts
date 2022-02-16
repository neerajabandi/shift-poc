import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {

  showUl:boolean = false;
  dropInput: any;
  dropInputArr = [];
  labelArr = []
  selectOptions = [];
  addedOptions = [];

  optionToAdd = '';

  @Input() dropData: any

  constructor() { }

  ngOnInit(): void {
    console.log("dropData:",this.dropData);
  }

  showDropDown(){
    this.showUl = !this.showUl
  }

  isChecked(data) {
    return this.selectOptions.indexOf(data.label)!=-1;
  }

  removePill(optionName,pillIndex) {
    this.selectOptions.splice(pillIndex,1);
    let index = this.labelArr.indexOf(optionName);
      this.labelArr.splice(index,1);
      let optionIndex = this.dropData.options.findIndex(item => item.label == optionName)
      this.dropData.options[optionIndex]['selected'] = false;
  }
  dropInputChange(event: any){
    let label = event.target.value;
    if(label == ''){
      return;
    }
    //this.dropInputArr.push({label: label, showTrash: true});
    this.addedOptions.push(label);
    this.dropData.options.push({
      label: label,
selected: false,
value: label,
    })
    console.log("dropData:",this.dropData);
    console.log('this.dropInput: ', this.dropInputArr)
  }

  addOption() {
    if(this.optionToAdd) {
      this.dropData.options.push({
        label: this.optionToAdd,
selected: false,
value: this.optionToAdd
      });
      this.optionToAdd = '';
    }
  }


  deleteOption(index) {
    this.dropData.options.splice(index);
  }

  trashDropInputArr(label: any){
    // let index = this.dropInputArr.findIndex(item => item.label == label)
    // this.dropInputArr.splice(index, 1)
    this.selectOptions.splice(this.selectOptions.indexOf(label),1);
    console.log('trashed dropInputArr: ', this.dropInputArr)

    this.addedOptions.splice(this.addedOptions.indexOf(label),1);

    // remove from json
    let optionIndex = this.dropData.options.findIndex(item => item.label == label)
    this.dropData.options.splice(optionIndex, 1)
    
  }

  onCheckboxChange(label:string, event: any){
    let isChecked = event.target.checked
    if(isChecked) {
      this.selectOptions.push(label);
      // this.labelArr.push(label);
      
    } else {
      // let index = this.labelArr.indexOf(label);
      // this.labelArr.splice(index,1);
      this.selectOptions.splice(this.selectOptions.indexOf(label),1);
    }
    let optionIndex = this.dropData.options.findIndex(item => item.label == label)
    this.dropData.options[optionIndex]['selected'] = isChecked;

    console.log('this.labelArr: ', this.labelArr)
  }

}
