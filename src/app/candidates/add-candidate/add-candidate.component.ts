import { CandidatesService } from '../candidates.service';
import { Candidate } from '../candidate';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';


@Component({
  //selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent implements OnInit {

  candidate = new Candidate;
  candidates: Candidate[];
  requirement: String[];
  statuscode: Number;
  show: Boolean = false;
  rForm: FormGroup;


  constructor(private candidatesService: CandidatesService,private location: Location,private fb: FormBuilder, private router: Router)
  {
    this.rForm = this.fb.group({
      candidate_id: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      mobileNumber: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      candidateEmailID: ['', [Validators.required, Validators.email]],
      status: [''],
      requirementID: [''],
    });
  }

  ngOnInit() {

    return this.candidatesService.getRequirementID().then(response => this.requirement = response);
  }



  private save(): void {
    this.candidate.status="Profile Created";
    this.candidatesService.create(this.candidate).then(response => this.statuscode = response).then(() => this.toggle()).then(() => this.goBack());
  }

  toggle() {
    console.log(this.statuscode);
    
    if (this.statuscode == 200) {
      this.show = true;
      alert(this.candidate.firstName + ' added successfully!');
      this.router.navigateByUrl('/candidates/All');
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

  selectedFile = null;
  onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0]
  }
  message: String ='';
  onUpload() {
    // upload code goes here
     let fd = new FormData();
     fd.append('resume', this.selectedFile);
     if(this.selectedFile){
       console.log(this.selectedFile);
       console.log("fd" + fd);
       this.candidatesService.upload(fd)
         .subscribe(Response => {
           console.log(Response);
           if (Response['status'] === 200)
           {
             const jsonResponse = JSON.parse(Response._body);
             console.log(JSON.stringify(jsonResponse));
             if(jsonResponse.data.basics.name.firstName) {
               this.candidate.firstName = jsonResponse.data.basics.name.firstName;
             }
             if(jsonResponse.data.basics.name.lastName) {
               this.candidate.lastName = jsonResponse.data.basics.name.lastName;
             } else {
               this.candidate.lastName = jsonResponse.data.basics.name.surname;
             }

             if(jsonResponse.data.basics.email) {
               this.candidate.candidateEmailID = jsonResponse.data.basics.email[0];
             }
             if(jsonResponse.data.basics.phone) {
               this.candidate.mobileNumber = jsonResponse.data.basics.phone[0];
             }
           }
           else {
             const errorMessage = Response['message'];
           }
         });
     }
  }


}
