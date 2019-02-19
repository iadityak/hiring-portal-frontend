import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';

import { RequirementService } from '../requirements.service';
import { Requirement } from '../requirement';


@Component({
  //selector: 'app-add-requirement',
  templateUrl: './add-requirement.component.html',
  styleUrls: ['./add-requirement.component.css']
})
export class AddRequirementComponent implements OnInit {

  requirement = new Requirement;
  requirements: Requirement[];

  statuscode: Number;
  show: Boolean = false;
  rForm: FormGroup;

  constructor(private requirementService: RequirementService,private location: Location,private fb: FormBuilder) { 
    this.rForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      domain: ['', [Validators.required]],
      subDomain: ['', [Validators.required]],
      reportingManager: ['', [Validators.required]],
      vacancy: ['',[Validators.required]],
      jobLocation: ['',[Validators.required]],
      minExp: ['',[Validators.required]],

      /*
      mobileNumber: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
      candidateEmailID: ['', [Validators.required, Validators.email]],
      status: [''],
      requirementID: [''], */
    });
  }

  ngOnInit() {
  }

  private save(): void {
    this.requirement.status="Profile Created";
    this.requirementService.create(this.requirement).then(response => this.statuscode = response).then(() => this.toggle()).then(() => this.goBack());
  }

  toggle() {
    console.log(this.statuscode);
    
    if (this.statuscode == 200) {
      this.show = true;
      alert('Requirement Id '+ this.requirement.id + ' added successfully!');
    }
    else {
      this.show = false;
      alert("Failed to add candidate. Please Try Again!");
    }
    this.rForm.reset();
  }

  onSubmit(event) {
    event.preventDefault();
    this.save();
  }

  goBack(): void {
    this.location.isCurrentPathEqualTo;
  }

}
