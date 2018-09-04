import { CandidatesService } from '../candidates.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Candidate } from '../candidate';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';


@Component({
  //selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent implements OnInit {

candidate=new Candidate;
candidates: Candidate[];
message: String[];
statuscode : Number;
show : Boolean = false;
rForm: FormGroup;
  constructor(private candidatesService: CandidatesService,
              private location: Location,
              private fb: FormBuilder) {
                this.rForm = this.fb.group({
                  candidate_id   : ['',[Validators.required]],
                  firstName       : ['',[Validators.required]],
                  lastName         : ['',[Validators.required]],
                  mobileNumber    : ['',Validators.compose([Validators.required, Validators.minLength(10),Validators.maxLength(10)])],
                  candidateEmailID         : ['',[Validators.required, Validators.email]],
                  status : [''],
                  requirementID: [''],
                  });
                 }

  ngOnInit() {
    
           // return this.candidatesService.getCandidates().then(candidates => this.candidates = candidates);
  }



  private save(): void {
     this.candidatesService.create(this.candidate).then(response => this.statuscode= response).then(() =>this.toggle()).then(() => this.goBack());
  }

  toggle(){
    console.log(this.statuscode);
    if(this.statuscode==200)
    {
      this.show=true;
      alert(this.candidate.firstName + ' added successfully!');
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
