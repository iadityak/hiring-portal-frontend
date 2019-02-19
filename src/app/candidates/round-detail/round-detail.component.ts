import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
 
@Component({
  selector: 'app-round-detail',
  templateUrl: './round-detail.component.html',
  styleUrls: ['./round-detail.component.css']
})
export class RoundDetailComponent   {
  // Create array to populate language dropdown
  langs: string[] = [
      '1','2','3','4','5','6','7','8','9','10',
     ]
    // Create Formgroup instance
    myform: FormGroup;
    constructor() {
    // here name is group of first name and last name, formgroup may be nested in another form group.
    this.myform = new FormGroup({
    technicalSkill: new FormControl(),
    confLevel: new FormControl,
    commSkill: new FormControl()
    });
    }
}


 