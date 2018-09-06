import { CandidatesService } from '../candidates.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Candidate } from '../candidate';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl, EmailValidator } from '@angular/forms';



@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {

  rForm: FormGroup;
  candidate = new Candidate();
  submitted = false;
  statuscode: Number;
  requirement : String[];
  show: boolean;
  constructor(private candidatesService: CandidatesService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder) {
    this.rForm = new FormGroup({
      'candidate_id': new FormControl(''),
      'candidateEmailID': new FormControl(''),
      'firstName': new FormControl(''),
      'lastName': new FormControl(''),
      'mobileNumber': new FormControl(''),
      'status': new FormControl(''),
      'requirementID' : new FormControl(''),
      'onlineTestScore' : new FormControl(''),
      'firstLevelName' : new FormControl(''),
      'firstLevelFeedback' : new FormControl(''),
      'secondLevelName' : new FormControl(''),
      'secondLevelFeedback' : new FormControl(''),
      'thirdLevelName' : new FormControl(''),
      'thirdLevelFeedback' : new FormControl(''),
      'dateOfOffer' : new FormControl(''),
      'joiningDate' : new FormControl(''),
      'revisedJoiningDate' : new FormControl(''),

      

   })

   //this.candidateList = new Array<Candidate>();

     }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.candidatesService.getCandidatebyPan(params['candidate_id']))
    .subscribe(response => this.candidate = response[0]);
    this.candidatesService.getRequirementID().then(response => this.requirement = response);
  }




  onSubmit(): void {
     this.submitted = true;
    this.candidatesService.update(this.candidate).then(response => this.statuscode= response).then(() =>this.toggle()).then(() => this.goBack());

  }

  toggle(){
    console.log(this.statuscode);
    if(this.statuscode==200)
    {
      this.show=true;
      alert(this.candidate.firstName + ' updated successfully!');
    }
    else
    {
      this.show=false;
      alert("Failed to update candidate. Please Try Again!");
    }
  }


  goBack(): void {
    this.location.back();
  }

}
